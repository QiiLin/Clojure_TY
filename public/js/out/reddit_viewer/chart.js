// Compiled by ClojureScript 1.9.671 {}
goog.provide('reddit_viewer.chart');
goog.require('cljs.core');
goog.require('cljsjs.chartjs');
goog.require('reagent.core');
reddit_viewer.chart.destroy_chart = (function reddit_viewer$chart$destroy_chart(chart){
if(cljs.core.truth_(cljs.core.deref.call(null,chart))){
cljs.core.deref.call(null,chart).destroy();

return cljs.core.reset_BANG_.call(null,chart,null);
} else {
return null;
}
});
reddit_viewer.chart.render_data = (function reddit_viewer$chart$render_data(node,data){
return (new Chart(node,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),cljs.core.map.call(null,new cljs.core.Keyword(null,"title","title",636505583),data),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"votes",new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.map.call(null,new cljs.core.Keyword(null,"score","score",-1963588780),data)], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scales","scales",-1197224722),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xAxes","xAxes",-143900543),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),false], null)], null)], null)], null)], null))));
});
reddit_viewer.chart.render_chart = (function reddit_viewer$chart$render_chart(chart,data){
return (function (component){
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,data)))){
var node = reagent.core.dom_node.call(null,component);
reddit_viewer.chart.destroy_chart.call(null,chart);

return cljs.core.reset_BANG_.call(null,chart,reddit_viewer.chart.render_data.call(null,node,cljs.core.deref.call(null,data)));
} else {
return null;
}
});
});
reddit_viewer.chart.chart_posts_by_votes = (function reddit_viewer$chart$chart_posts_by_votes(data){
var chart = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),reddit_viewer.chart.render_chart.call(null,chart,data),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),reddit_viewer.chart.render_chart.call(null,chart,data),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (chart){
return (function (_){
return reddit_viewer.chart.destroy_chart.call(null,chart);
});})(chart))
,new cljs.core.Keyword(null,"render","render",-1408033454),((function (chart){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,data))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489)], null);
} else {
return null;
}
});})(chart))
], null));
});

//# sourceMappingURL=chart.js.map?rel=1547129626406