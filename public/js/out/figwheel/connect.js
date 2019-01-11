// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39975__delegate = function (x__39961__auto__){
if(cljs.core.truth_(reddit_viewer.core.mount_root)){
return cljs.core.apply.call(null,reddit_viewer.core.mount_root,x__39961__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" hook '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("reddit-viewer.core/mount-root"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("' is missing")].join(''));
}
};
var G__39975 = function (var_args){
var x__39961__auto__ = null;
if (arguments.length > 0) {
var G__39976__i = 0, G__39976__a = new Array(arguments.length -  0);
while (G__39976__i < G__39976__a.length) {G__39976__a[G__39976__i] = arguments[G__39976__i + 0]; ++G__39976__i;}
  x__39961__auto__ = new cljs.core.IndexedSeq(G__39976__a,0,null);
} 
return G__39975__delegate.call(this,x__39961__auto__);};
G__39975.cljs$lang$maxFixedArity = 0;
G__39975.cljs$lang$applyTo = (function (arglist__39977){
var x__39961__auto__ = cljs.core.seq(arglist__39977);
return G__39975__delegate(x__39961__auto__);
});
G__39975.cljs$core$IFn$_invoke$arity$variadic = G__39975__delegate;
return G__39975;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1547003714274