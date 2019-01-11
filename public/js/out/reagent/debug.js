// Compiled by ClojureScript 1.9.671 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__32520__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32520 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32521__i = 0, G__32521__a = new Array(arguments.length -  0);
while (G__32521__i < G__32521__a.length) {G__32521__a[G__32521__i] = arguments[G__32521__i + 0]; ++G__32521__i;}
  args = new cljs.core.IndexedSeq(G__32521__a,0,null);
} 
return G__32520__delegate.call(this,args);};
G__32520.cljs$lang$maxFixedArity = 0;
G__32520.cljs$lang$applyTo = (function (arglist__32522){
var args = cljs.core.seq(arglist__32522);
return G__32520__delegate(args);
});
G__32520.cljs$core$IFn$_invoke$arity$variadic = G__32520__delegate;
return G__32520;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__32523__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32523 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32524__i = 0, G__32524__a = new Array(arguments.length -  0);
while (G__32524__i < G__32524__a.length) {G__32524__a[G__32524__i] = arguments[G__32524__i + 0]; ++G__32524__i;}
  args = new cljs.core.IndexedSeq(G__32524__a,0,null);
} 
return G__32523__delegate.call(this,args);};
G__32523.cljs$lang$maxFixedArity = 0;
G__32523.cljs$lang$applyTo = (function (arglist__32525){
var args = cljs.core.seq(arglist__32525);
return G__32523__delegate(args);
});
G__32523.cljs$core$IFn$_invoke$arity$variadic = G__32523__delegate;
return G__32523;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1547003699979