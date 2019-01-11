// Compiled by ClojureScript 1.9.671 {}
goog.provide('reddit_viewer.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('reddit_viewer.chart');
goog.require('cljs.tools.reader.edn');
if(typeof reddit_viewer.core.posts !== 'undefined'){
} else {
reddit_viewer.core.posts = reagent.core.atom.call(null,null);
}
if(typeof reddit_viewer.core.numg !== 'undefined'){
} else {
reddit_viewer.core.numg = reagent.core.atom.call(null,"10");
}
if(typeof reddit_viewer.core.urls !== 'undefined'){
} else {
reddit_viewer.core.urls = reagent.core.atom.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Catloaf",null], null), null));
}
if(typeof reddit_viewer.core.currentrc !== 'undefined'){
} else {
reddit_viewer.core.currentrc = reagent.core.atom.call(null,"Catloaf");
}
if(typeof reddit_viewer.core.limit !== 'undefined'){
} else {
reddit_viewer.core.limit = reagent.core.atom.call(null,"10");
}
if(typeof reddit_viewer.core.tag_holder !== 'undefined'){
} else {
reddit_viewer.core.tag_holder = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Catloaf","Catloaf",1347581761),true], null));
}
reddit_viewer.core.find_posts_with_preview = (function reddit_viewer$core$find_posts_with_preview(posts){
return cljs.core.filter.call(null,(function (p1__38098_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"post_hint","post_hint",1623889079).cljs$core$IFn$_invoke$arity$1(p1__38098_SHARP_),"image");
}),posts);
});
reddit_viewer.core.requ = (function reddit_viewer$core$requ(urls){
cljs.core.println.call(null,urls,cljs.core.keyword.call(null,urls),cljs.core.keyword.call(null,urls).call(null,cljs.core.deref.call(null,reddit_viewer.core.tag_holder)),cljs.core.keyword.call(null,urls).call(null,reddit_viewer.core.tag_holder) === true);

if(cljs.core.truth_(cljs.core.keyword.call(null,urls).call(null,cljs.core.deref.call(null,reddit_viewer.core.tag_holder)))){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("http://www.reddit.com/r/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(urls),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".json?sort=new&limit="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reddit_viewer.core.numg))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__38099_SHARP_){
return cljs.core.reset_BANG_.call(null,reddit_viewer.core.posts,cljs.core.concat.call(null,cljs.core.deref.call(null,reddit_viewer.core.posts),reddit_viewer.core.find_posts_with_preview.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get_in.call(null,p1__38099_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"children","children",-940561982)], null))))));
}),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
} else {
return cljs.core.pr.call(null,"false");
}
});
reddit_viewer.core.load_posts = (function reddit_viewer$core$load_posts(){
cljs.core.println.call(null,"load it ",cljs.core.deref.call(null,reddit_viewer.core.urls),cljs.core.deref.call(null,reddit_viewer.core.tag_holder));

cljs.core.reset_BANG_.call(null,reddit_viewer.core.posts,null);

return cljs.core.doall.call(null,cljs.core.map.call(null,reddit_viewer.core.requ,cljs.core.deref.call(null,reddit_viewer.core.urls)));
});
reddit_viewer.core.display_post = (function reddit_viewer$core$display_post(p__38100){
var map__38101 = p__38100;
var map__38101__$1 = ((((!((map__38101 == null)))?((((map__38101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38101):map__38101);
var permalink = cljs.core.get.call(null,map__38101__$1,new cljs.core.Keyword(null,"permalink","permalink",1009167849));
var subreddit = cljs.core.get.call(null,map__38101__$1,new cljs.core.Keyword(null,"subreddit","subreddit",-670654754));
var title = cljs.core.get.call(null,map__38101__$1,new cljs.core.Keyword(null,"title","title",636505583));
var score = cljs.core.get.call(null,map__38101__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var url = cljs.core.get.call(null,map__38101__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.m-2","div.card.m-2",549203925),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-block","div.card-block",1886467105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.card-title","h4.card-title",-1410483383),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("http://reddit.com"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(permalink)].join('')], null),title," "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge.badge-info","span.badge.badge-info",-856425200),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"info"], null),subreddit," score ",score], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"src","src",-1651076051),url], null)], null)], null)], null);
});
reddit_viewer.core.display_posts = (function reddit_viewer$core$display_posts(posts){
if(!(cljs.core.empty_QMARK_.call(null,posts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__28418__auto__ = (function reddit_viewer$core$display_posts_$_iter__38103(s__38104){
return (new cljs.core.LazySeq(null,(function (){
var s__38104__$1 = s__38104;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38104__$1);
if(temp__4657__auto__){
var s__38104__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38104__$2)){
var c__28416__auto__ = cljs.core.chunk_first.call(null,s__38104__$2);
var size__28417__auto__ = cljs.core.count.call(null,c__28416__auto__);
var b__38106 = cljs.core.chunk_buffer.call(null,size__28417__auto__);
if((function (){var i__38105 = (0);
while(true){
if((i__38105 < size__28417__auto__)){
var posts_row = cljs.core._nth.call(null,c__28416__auto__,i__38105);
cljs.core.chunk_append.call(null,b__38106,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__28418__auto__ = ((function (i__38105,posts_row,c__28416__auto__,size__28417__auto__,b__38106,s__38104__$2,temp__4657__auto__){
return (function reddit_viewer$core$display_posts_$_iter__38103_$_iter__38107(s__38108){
return (new cljs.core.LazySeq(null,((function (i__38105,posts_row,c__28416__auto__,size__28417__auto__,b__38106,s__38104__$2,temp__4657__auto__){
return (function (){
var s__38108__$1 = s__38108;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__38108__$1);
if(temp__4657__auto____$1){
var s__38108__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38108__$2)){
var c__28416__auto____$1 = cljs.core.chunk_first.call(null,s__38108__$2);
var size__28417__auto____$1 = cljs.core.count.call(null,c__28416__auto____$1);
var b__38110 = cljs.core.chunk_buffer.call(null,size__28417__auto____$1);
if((function (){var i__38109 = (0);
while(true){
if((i__38109 < size__28417__auto____$1)){
var post = cljs.core._nth.call(null,c__28416__auto____$1,i__38109);
cljs.core.chunk_append.call(null,b__38110,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-4","div.col-4",-64503036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_viewer.core.display_post,post], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),post], null)));

var G__38115 = (i__38109 + (1));
i__38109 = G__38115;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38110),reddit_viewer$core$display_posts_$_iter__38103_$_iter__38107.call(null,cljs.core.chunk_rest.call(null,s__38108__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38110),null);
}
} else {
var post = cljs.core.first.call(null,s__38108__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-4","div.col-4",-64503036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_viewer.core.display_post,post], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),post], null)),reddit_viewer$core$display_posts_$_iter__38103_$_iter__38107.call(null,cljs.core.rest.call(null,s__38108__$2)));
}
} else {
return null;
}
break;
}
});})(i__38105,posts_row,c__28416__auto__,size__28417__auto__,b__38106,s__38104__$2,temp__4657__auto__))
,null,null));
});})(i__38105,posts_row,c__28416__auto__,size__28417__auto__,b__38106,s__38104__$2,temp__4657__auto__))
;
return iter__28418__auto__.call(null,posts_row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),posts_row], null)));

var G__38116 = (i__38105 + (1));
i__38105 = G__38116;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38106),reddit_viewer$core$display_posts_$_iter__38103.call(null,cljs.core.chunk_rest.call(null,s__38104__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38106),null);
}
} else {
var posts_row = cljs.core.first.call(null,s__38104__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__28418__auto__ = ((function (posts_row,s__38104__$2,temp__4657__auto__){
return (function reddit_viewer$core$display_posts_$_iter__38103_$_iter__38111(s__38112){
return (new cljs.core.LazySeq(null,((function (posts_row,s__38104__$2,temp__4657__auto__){
return (function (){
var s__38112__$1 = s__38112;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__38112__$1);
if(temp__4657__auto____$1){
var s__38112__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38112__$2)){
var c__28416__auto__ = cljs.core.chunk_first.call(null,s__38112__$2);
var size__28417__auto__ = cljs.core.count.call(null,c__28416__auto__);
var b__38114 = cljs.core.chunk_buffer.call(null,size__28417__auto__);
if((function (){var i__38113 = (0);
while(true){
if((i__38113 < size__28417__auto__)){
var post = cljs.core._nth.call(null,c__28416__auto__,i__38113);
cljs.core.chunk_append.call(null,b__38114,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-4","div.col-4",-64503036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_viewer.core.display_post,post], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),post], null)));

var G__38117 = (i__38113 + (1));
i__38113 = G__38117;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38114),reddit_viewer$core$display_posts_$_iter__38103_$_iter__38111.call(null,cljs.core.chunk_rest.call(null,s__38112__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38114),null);
}
} else {
var post = cljs.core.first.call(null,s__38112__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-4","div.col-4",-64503036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_viewer.core.display_post,post], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),post], null)),reddit_viewer$core$display_posts_$_iter__38103_$_iter__38111.call(null,cljs.core.rest.call(null,s__38112__$2)));
}
} else {
return null;
}
break;
}
});})(posts_row,s__38104__$2,temp__4657__auto__))
,null,null));
});})(posts_row,s__38104__$2,temp__4657__auto__))
;
return iter__28418__auto__.call(null,posts_row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),posts_row], null)),reddit_viewer$core$display_posts_$_iter__38103.call(null,cljs.core.rest.call(null,s__38104__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28418__auto__.call(null,cljs.core.partition_all.call(null,(3),cljs.core.take.call(null,cljs.tools.reader.edn.read_string.call(null,cljs.core.deref.call(null,reddit_viewer.core.numg)),posts)));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading"], null);
}
});
reddit_viewer.core.sort_posts = (function reddit_viewer$core$sort_posts(title,sort_key){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,reddit_viewer.core.posts))){
return null;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-secondary","button.btn.btn-secondary",-2100184270),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,reddit_viewer.core.posts,cljs.core.partial.call(null,cljs.core.sort_by,sort_key));
})], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("sort posts by "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('')], null);
}
});
reddit_viewer.core.navitem = (function reddit_viewer$core$navitem(title,view,id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),((cljs.core._EQ_.call(null,id,cljs.core.deref.call(null,view)))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,view,id);
})], null),title], null)], null);
});
reddit_viewer.core.navbar = (function reddit_viewer$core$navbar(view){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.navbar-toggleable-md.navbar-light.bg-faded","nav.navbar.navbar-toggleable-md.navbar-light.bg-faded",804470986),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.navbar-nav.mr-auto.nav","ul.navbar-nav.mr-auto.nav",-497130970),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"navbar-nav mr-auto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_viewer.core.navitem,"Posts",view,new cljs.core.Keyword(null,"posts","posts",760043164)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_viewer.core.navitem,"Chart",view,new cljs.core.Keyword(null,"chart","chart",1173225425)], null)], null)], null);
});
reddit_viewer.core.atom_input = (function reddit_viewer$core$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38118_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__38118_SHARP_.target.value);
})], null)], null);
});
reddit_viewer.core.shared_state = (function reddit_viewer$core$shared_state(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Change # of image showing below: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_viewer.core.atom_input,reddit_viewer.core.limit], null)], null)], null);
});
});
reddit_viewer.core.shared_state2 = (function reddit_viewer$core$shared_state2(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Shows the posts from this: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_viewer.core.atom_input,reddit_viewer.core.currentrc], null)], null)], null);
});
});
reddit_viewer.core.button_load = (function reddit_viewer$core$button_load(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn","button.btn",-661984613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,reddit_viewer.core.tag_holder,cljs.core.assoc,cljs.core.keyword.call(null,cljs.core.deref.call(null,reddit_viewer.core.currentrc)),true).call(null,cljs.core.reset_BANG_.call(null,reddit_viewer.core.urls,cljs.core.conj.call(null,cljs.core.deref.call(null,reddit_viewer.core.urls),cljs.core.deref.call(null,reddit_viewer.core.currentrc))),cljs.core.reset_BANG_.call(null,reddit_viewer.core.numg,cljs.core.deref.call(null,reddit_viewer.core.limit)),reddit_viewer.core.load_posts.call(null));
})], null),"Load the result"], null);
});
reddit_viewer.core.tag_label = (function reddit_viewer$core$tag_label(k,v){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,reddit_viewer.core.tag_holder))){
return null;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-secondary","button.btn.btn-secondary",-2100184270),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,reddit_viewer.core.tag_holder,cljs.core.assoc,k,cljs.core.not.call(null,v)).call(null,cljs.core.println.call(null,"tag0lable",cljs.core.deref.call(null,reddit_viewer.core.tag_holder)),reddit_viewer.core.load_posts.call(null));
})], null),k], null);
}
});
reddit_viewer.core.display_tags = (function reddit_viewer$core$display_tags(){
cljs.core.pr.call(null,"display tag",cljs.core.deref.call(null,reddit_viewer.core.tag_holder));

if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,reddit_viewer.core.tag_holder))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card>div.card-block","div.card>div.card-block",-460829721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group","div.btn-group",1563487258),cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__38119){
var vec__38120 = p__38119;
var k = cljs.core.nth.call(null,vec__38120,(0),null);
var v = cljs.core.nth.call(null,vec__38120,(1),null);
cljs.core.println.call(null,"forming",k,v);

return reddit_viewer.core.tag_label.call(null,k,v);
}),cljs.core.deref.call(null,reddit_viewer.core.tag_holder)))], null)], null);
}
});
reddit_viewer.core.home_page = (function reddit_viewer$core$home_page(){
var view = reagent.core.atom.call(null,new cljs.core.Keyword(null,"posts","posts",760043164));
return ((function (view){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_viewer.core.navbar,view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_viewer.core.shared_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_viewer.core.shared_state2], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_viewer.core.button_load], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_viewer.core.display_tags], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card>div.card-block","div.card>div.card-block",-460829721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group","div.btn-group",1563487258),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_viewer.core.sort_posts,"score",new cljs.core.Keyword(null,"score","score",-1963588780)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_viewer.core.sort_posts,"comments",new cljs.core.Keyword(null,"num_comments","num_comments",841521082)], null)], null),(function (){var G__38123 = cljs.core.deref.call(null,view);
var G__38123__$1 = (((G__38123 instanceof cljs.core.Keyword))?G__38123.fqn:null);
switch (G__38123__$1) {
case "chart":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_viewer.chart.chart_posts_by_votes,reddit_viewer.core.posts], null);

break;
case "posts":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_viewer.core.display_posts,cljs.core.deref.call(null,reddit_viewer.core.posts)], null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38123__$1)].join('')));

}
})()], null)], null);
});
;})(view))
});
reddit_viewer.core.mount_root = (function reddit_viewer$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_viewer.core.home_page], null),document.getElementById("app"));
});
if(typeof reddit_viewer.core.posts !== 'undefined'){
} else {
reddit_viewer.core.posts = reagent.core.atom.call(null,null);
}
reddit_viewer.core.init_BANG_ = (function reddit_viewer$core$init_BANG_(){
return reddit_viewer.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1547157493727