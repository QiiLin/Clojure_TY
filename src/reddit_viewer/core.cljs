(ns reddit-viewer.core
  (:require
    [ajax.core :as ajax]
    [reagent.core :as r]
    [reddit-viewer.chart :as chart]
    [cljs.tools.reader.edn :as read]
    ))

;; -------------------------
;; Views
;; what I can do here is to write js in the html and call it in here




(defonce posts (r/atom nil))
;; setup url
(defonce numg (r/atom "10"))
(defonce urls (r/atom #{"Catloaf"}))
(defonce currentrc (r/atom "Catloaf"))
(defonce limit (r/atom "10"))
(defonce tag-holder (r/atom {:Catloaf true} ))



(defn find-posts-with-preview [posts]
  (filter #(= (:post_hint %) "image") posts))

(defn requ [urls]
  (println  urls (keyword urls)   ((keyword urls) @tag-holder) (true? ((keyword urls) tag-holder)) )
  (if ((keyword urls) @tag-holder)
  (ajax/GET  (str "http://www.reddit.com/r/" urls ".json?sort=new&limit=" @numg)
             {:handler         #(->> (get-in % [:data :children])
                                     (map :data)
                                     (find-posts-with-preview)
                                     (concat @posts)
                                     (reset! posts))
              :response-format :json
              :keywords?       true}
             )
  (pr "false")
  )
  )

(defn load-posts []
  (println "load it " @urls   @tag-holder)
  (reset! posts nil)
  (doall (map requ @urls))
  )

(defn display-post [{:keys [permalink subreddit title score url]}]
  [:div.card.m-2
   [:div.card-block
    [:h4.card-title
     [:a {:href (str "http://reddit.com" permalink)} title " "]]
    [:div [:span.badge.badge-info {:color "info"} subreddit " score " score]]
    [:img {:width "300px" :src url}]]])

(defn display-posts [posts]
  (if-not (empty? posts)
    [:div
     (for [posts-row (partition-all 3 (take  (read/read-string @numg)  posts) )]
       ^{:key posts-row}
       [:div.row
        (for [post posts-row]
          ^{:key post}
          [:div.col-4 [display-post post]])])
     ]
    [:p "Loading"]
    ))




(defn sort-posts [title sort-key]
  (when-not (empty? @posts)
    [:button.btn.btn-secondary
     ; here the swap! works as the assign...
     ; it sort the returned sorted post with the original post
     {:on-click #(swap! posts (partial sort-by sort-key))}
     (str "sort posts by " title)]))


(defn navitem [title view id]
  [:li.nav-item
   {:class-name (when (= id @view) "active")}
   [:a.nav-link
    {:href     "#"
     :on-click #(reset! view id)}
    title]])



(defn navbar [view]
  [:nav.navbar.navbar-toggleable-md.navbar-light.bg-faded
   [:ul.navbar-nav.mr-auto.nav
    {:className "navbar-nav mr-auto"}
    [navitem "Posts" view :posts]
    [navitem "Chart" view :chart]]])


(defn atom-input [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}]
  )

(defn shared-state []
  (fn []
    [:div
     [:p "Change # of image showing below: " [atom-input limit]]]))

(defn shared-state2 []
  (fn []
    [:div
     [:p "Shows the posts from this: " [atom-input currentrc] ]]))







(defn button-load []

  [:button.btn
   {:on-click #(
                 ;; before the urls update, start to add new value to the set
                 (swap! tag-holder assoc (keyword @currentrc) true)
                 (->> (conj @urls @currentrc)
                      (reset! urls))
                 (reset! numg @limit)
                 (load-posts) )}
   "Load the result"])


(defn tag-label [k v]
  (when-not (empty? @tag-holder)
    [:button.btn.btn-secondary
     ; here the swap! works as the assign...
     ; it sort the returned sorted post with the original post
     {:on-click   #((swap! tag-holder assoc k (not v) )

                     (println "tag0lable" @tag-holder)
                     ;; remmebr to load the post again
                     (load-posts)
                     )}
     k ])
  )

;; define another one which display the button base on the tagholder value
(defn display-tags []
  (pr "display tag" @tag-holder)
  (when-not (empty? @tag-holder)
    [:div.card>div.card-block [:div.btn-group
       (doall (map (fn [[k v]] (println "forming" k v) (tag-label k v)) @tag-holder))
     ]
     ]
    )
  )

(defn home-page []
  (let [view (r/atom :posts)]
    (fn []
      [:div
       [navbar view]
       [shared-state]  [shared-state2] [button-load]
       [display-tags ]
       [:div.card>div.card-block
        [:div.btn-group
         [sort-posts "score" :score]
         [sort-posts "comments" :num_comments]
         ]
        (case @view
          :chart [chart/chart-posts-by-votes posts]
          :posts [display-posts @posts ])]]))
  )
;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defonce posts (r/atom nil))

(defn init! []
  (mount-root))

