// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__28240__auto__,writer__28241__auto__,opt__28242__auto__){
return cljs.core._write.call(null,writer__28241__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38404 = arguments.length;
var i__28755__auto___38405 = (0);
while(true){
if((i__28755__auto___38405 < len__28754__auto___38404)){
args__28761__auto__.push((arguments[i__28755__auto___38405]));

var G__38406 = (i__28755__auto___38405 + (1));
i__28755__auto___38405 = G__38406;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq38403){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38403));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38408 = arguments.length;
var i__28755__auto___38409 = (0);
while(true){
if((i__28755__auto___38409 < len__28754__auto___38408)){
args__28761__auto__.push((arguments[i__28755__auto___38409]));

var G__38410 = (i__28755__auto___38409 + (1));
i__28755__auto___38409 = G__38410;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq38407){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38407));
});

var g_QMARK__38411 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_38412 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__38411){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__38411))
,null));
var mkg_38413 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__38411,g_38412){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__38411,g_38412))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__38411,g_38412,mkg_38413){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__38411).call(null,x);
});})(g_QMARK__38411,g_38412,mkg_38413))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__38411,g_38412,mkg_38413){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_38413).call(null,gfn);
});})(g_QMARK__38411,g_38412,mkg_38413))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__38411,g_38412,mkg_38413){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_38412).call(null,generator);
});})(g_QMARK__38411,g_38412,mkg_38413))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__32556__auto___38433 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__32556__auto___38433){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38434 = arguments.length;
var i__28755__auto___38435 = (0);
while(true){
if((i__28755__auto___38435 < len__28754__auto___38434)){
args__28761__auto__.push((arguments[i__28755__auto___38435]));

var G__38436 = (i__28755__auto___38435 + (1));
i__28755__auto___38435 = G__38436;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32556__auto___38433))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32556__auto___38433){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32556__auto___38433),args);
});})(g__32556__auto___38433))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__32556__auto___38433){
return (function (seq38414){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38414));
});})(g__32556__auto___38433))
;


var g__32556__auto___38437 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__32556__auto___38437){
return (function cljs$spec$gen$alpha$list(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38438 = arguments.length;
var i__28755__auto___38439 = (0);
while(true){
if((i__28755__auto___38439 < len__28754__auto___38438)){
args__28761__auto__.push((arguments[i__28755__auto___38439]));

var G__38440 = (i__28755__auto___38439 + (1));
i__28755__auto___38439 = G__38440;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32556__auto___38437))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32556__auto___38437){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32556__auto___38437),args);
});})(g__32556__auto___38437))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__32556__auto___38437){
return (function (seq38415){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38415));
});})(g__32556__auto___38437))
;


var g__32556__auto___38441 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__32556__auto___38441){
return (function cljs$spec$gen$alpha$map(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38442 = arguments.length;
var i__28755__auto___38443 = (0);
while(true){
if((i__28755__auto___38443 < len__28754__auto___38442)){
args__28761__auto__.push((arguments[i__28755__auto___38443]));

var G__38444 = (i__28755__auto___38443 + (1));
i__28755__auto___38443 = G__38444;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32556__auto___38441))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32556__auto___38441){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32556__auto___38441),args);
});})(g__32556__auto___38441))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__32556__auto___38441){
return (function (seq38416){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38416));
});})(g__32556__auto___38441))
;


var g__32556__auto___38445 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__32556__auto___38445){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38446 = arguments.length;
var i__28755__auto___38447 = (0);
while(true){
if((i__28755__auto___38447 < len__28754__auto___38446)){
args__28761__auto__.push((arguments[i__28755__auto___38447]));

var G__38448 = (i__28755__auto___38447 + (1));
i__28755__auto___38447 = G__38448;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32556__auto___38445))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32556__auto___38445){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32556__auto___38445),args);
});})(g__32556__auto___38445))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__32556__auto___38445){
return (function (seq38417){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38417));
});})(g__32556__auto___38445))
;


var g__32556__auto___38449 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__32556__auto___38449){
return (function cljs$spec$gen$alpha$set(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38450 = arguments.length;
var i__28755__auto___38451 = (0);
while(true){
if((i__28755__auto___38451 < len__28754__auto___38450)){
args__28761__auto__.push((arguments[i__28755__auto___38451]));

var G__38452 = (i__28755__auto___38451 + (1));
i__28755__auto___38451 = G__38452;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32556__auto___38449))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32556__auto___38449){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32556__auto___38449),args);
});})(g__32556__auto___38449))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__32556__auto___38449){
return (function (seq38418){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38418));
});})(g__32556__auto___38449))
;


var g__32556__auto___38453 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__32556__auto___38453){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38454 = arguments.length;
var i__28755__auto___38455 = (0);
while(true){
if((i__28755__auto___38455 < len__28754__auto___38454)){
args__28761__auto__.push((arguments[i__28755__auto___38455]));

var G__38456 = (i__28755__auto___38455 + (1));
i__28755__auto___38455 = G__38456;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32556__auto___38453))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32556__auto___38453){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32556__auto___38453),args);
});})(g__32556__auto___38453))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__32556__auto___38453){
return (function (seq38419){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38419));
});})(g__32556__auto___38453))
;


var g__32556__auto___38457 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__32556__auto___38457){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38458 = arguments.length;
var i__28755__auto___38459 = (0);
while(true){
if((i__28755__auto___38459 < len__28754__auto___38458)){
args__28761__auto__.push((arguments[i__28755__auto___38459]));

var G__38460 = (i__28755__auto___38459 + (1));
i__28755__auto___38459 = G__38460;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32556__auto___38457))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32556__auto___38457){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32556__auto___38457),args);
});})(g__32556__auto___38457))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__32556__auto___38457){
return (function (seq38420){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38420));
});})(g__32556__auto___38457))
;


var g__32556__auto___38461 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__32556__auto___38461){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38462 = arguments.length;
var i__28755__auto___38463 = (0);
while(true){
if((i__28755__auto___38463 < len__28754__auto___38462)){
args__28761__auto__.push((arguments[i__28755__auto___38463]));

var G__38464 = (i__28755__auto___38463 + (1));
i__28755__auto___38463 = G__38464;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32556__auto___38461))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32556__auto___38461){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32556__auto___38461),args);
});})(g__32556__auto___38461))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__32556__auto___38461){
return (function (seq38421){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38421));
});})(g__32556__auto___38461))
;


var g__32556__auto___38465 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__32556__auto___38465){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38466 = arguments.length;
var i__28755__auto___38467 = (0);
while(true){
if((i__28755__auto___38467 < len__28754__auto___38466)){
args__28761__auto__.push((arguments[i__28755__auto___38467]));

var G__38468 = (i__28755__auto___38467 + (1));
i__28755__auto___38467 = G__38468;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32556__auto___38465))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32556__auto___38465){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32556__auto___38465),args);
});})(g__32556__auto___38465))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__32556__auto___38465){
return (function (seq38422){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38422));
});})(g__32556__auto___38465))
;


var g__32556__auto___38469 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__32556__auto___38469){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38470 = arguments.length;
var i__28755__auto___38471 = (0);
while(true){
if((i__28755__auto___38471 < len__28754__auto___38470)){
args__28761__auto__.push((arguments[i__28755__auto___38471]));

var G__38472 = (i__28755__auto___38471 + (1));
i__28755__auto___38471 = G__38472;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32556__auto___38469))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32556__auto___38469){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32556__auto___38469),args);
});})(g__32556__auto___38469))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__32556__auto___38469){
return (function (seq38423){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38423));
});})(g__32556__auto___38469))
;


var g__32556__auto___38473 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__32556__auto___38473){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38474 = arguments.length;
var i__28755__auto___38475 = (0);
while(true){
if((i__28755__auto___38475 < len__28754__auto___38474)){
args__28761__auto__.push((arguments[i__28755__auto___38475]));

var G__38476 = (i__28755__auto___38475 + (1));
i__28755__auto___38475 = G__38476;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32556__auto___38473))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32556__auto___38473){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32556__auto___38473),args);
});})(g__32556__auto___38473))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__32556__auto___38473){
return (function (seq38424){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38424));
});})(g__32556__auto___38473))
;


var g__32556__auto___38477 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__32556__auto___38477){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38478 = arguments.length;
var i__28755__auto___38479 = (0);
while(true){
if((i__28755__auto___38479 < len__28754__auto___38478)){
args__28761__auto__.push((arguments[i__28755__auto___38479]));

var G__38480 = (i__28755__auto___38479 + (1));
i__28755__auto___38479 = G__38480;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32556__auto___38477))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32556__auto___38477){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32556__auto___38477),args);
});})(g__32556__auto___38477))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__32556__auto___38477){
return (function (seq38425){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38425));
});})(g__32556__auto___38477))
;


var g__32556__auto___38481 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__32556__auto___38481){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38482 = arguments.length;
var i__28755__auto___38483 = (0);
while(true){
if((i__28755__auto___38483 < len__28754__auto___38482)){
args__28761__auto__.push((arguments[i__28755__auto___38483]));

var G__38484 = (i__28755__auto___38483 + (1));
i__28755__auto___38483 = G__38484;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32556__auto___38481))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32556__auto___38481){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32556__auto___38481),args);
});})(g__32556__auto___38481))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__32556__auto___38481){
return (function (seq38426){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38426));
});})(g__32556__auto___38481))
;


var g__32556__auto___38485 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__32556__auto___38485){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38486 = arguments.length;
var i__28755__auto___38487 = (0);
while(true){
if((i__28755__auto___38487 < len__28754__auto___38486)){
args__28761__auto__.push((arguments[i__28755__auto___38487]));

var G__38488 = (i__28755__auto___38487 + (1));
i__28755__auto___38487 = G__38488;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32556__auto___38485))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32556__auto___38485){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32556__auto___38485),args);
});})(g__32556__auto___38485))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__32556__auto___38485){
return (function (seq38427){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38427));
});})(g__32556__auto___38485))
;


var g__32556__auto___38489 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__32556__auto___38489){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38490 = arguments.length;
var i__28755__auto___38491 = (0);
while(true){
if((i__28755__auto___38491 < len__28754__auto___38490)){
args__28761__auto__.push((arguments[i__28755__auto___38491]));

var G__38492 = (i__28755__auto___38491 + (1));
i__28755__auto___38491 = G__38492;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32556__auto___38489))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32556__auto___38489){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32556__auto___38489),args);
});})(g__32556__auto___38489))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__32556__auto___38489){
return (function (seq38428){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38428));
});})(g__32556__auto___38489))
;


var g__32556__auto___38493 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__32556__auto___38493){
return (function cljs$spec$gen$alpha$return(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38494 = arguments.length;
var i__28755__auto___38495 = (0);
while(true){
if((i__28755__auto___38495 < len__28754__auto___38494)){
args__28761__auto__.push((arguments[i__28755__auto___38495]));

var G__38496 = (i__28755__auto___38495 + (1));
i__28755__auto___38495 = G__38496;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32556__auto___38493))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32556__auto___38493){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32556__auto___38493),args);
});})(g__32556__auto___38493))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__32556__auto___38493){
return (function (seq38429){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38429));
});})(g__32556__auto___38493))
;


var g__32556__auto___38497 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__32556__auto___38497){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38498 = arguments.length;
var i__28755__auto___38499 = (0);
while(true){
if((i__28755__auto___38499 < len__28754__auto___38498)){
args__28761__auto__.push((arguments[i__28755__auto___38499]));

var G__38500 = (i__28755__auto___38499 + (1));
i__28755__auto___38499 = G__38500;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32556__auto___38497))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32556__auto___38497){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32556__auto___38497),args);
});})(g__32556__auto___38497))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__32556__auto___38497){
return (function (seq38430){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38430));
});})(g__32556__auto___38497))
;


var g__32556__auto___38501 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__32556__auto___38501){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38502 = arguments.length;
var i__28755__auto___38503 = (0);
while(true){
if((i__28755__auto___38503 < len__28754__auto___38502)){
args__28761__auto__.push((arguments[i__28755__auto___38503]));

var G__38504 = (i__28755__auto___38503 + (1));
i__28755__auto___38503 = G__38504;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32556__auto___38501))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32556__auto___38501){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32556__auto___38501),args);
});})(g__32556__auto___38501))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__32556__auto___38501){
return (function (seq38431){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38431));
});})(g__32556__auto___38501))
;


var g__32556__auto___38505 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__32556__auto___38505){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38506 = arguments.length;
var i__28755__auto___38507 = (0);
while(true){
if((i__28755__auto___38507 < len__28754__auto___38506)){
args__28761__auto__.push((arguments[i__28755__auto___38507]));

var G__38508 = (i__28755__auto___38507 + (1));
i__28755__auto___38507 = G__38508;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32556__auto___38505))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32556__auto___38505){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32556__auto___38505),args);
});})(g__32556__auto___38505))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__32556__auto___38505){
return (function (seq38432){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38432));
});})(g__32556__auto___38505))
;

var g__32569__auto___38530 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__32569__auto___38530){
return (function cljs$spec$gen$alpha$any(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38531 = arguments.length;
var i__28755__auto___38532 = (0);
while(true){
if((i__28755__auto___38532 < len__28754__auto___38531)){
args__28761__auto__.push((arguments[i__28755__auto___38532]));

var G__38533 = (i__28755__auto___38532 + (1));
i__28755__auto___38532 = G__38533;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38530))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38530){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38530);
});})(g__32569__auto___38530))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__32569__auto___38530){
return (function (seq38509){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38509));
});})(g__32569__auto___38530))
;


var g__32569__auto___38534 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__32569__auto___38534){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38535 = arguments.length;
var i__28755__auto___38536 = (0);
while(true){
if((i__28755__auto___38536 < len__28754__auto___38535)){
args__28761__auto__.push((arguments[i__28755__auto___38536]));

var G__38537 = (i__28755__auto___38536 + (1));
i__28755__auto___38536 = G__38537;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38534))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38534){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38534);
});})(g__32569__auto___38534))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__32569__auto___38534){
return (function (seq38510){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38510));
});})(g__32569__auto___38534))
;


var g__32569__auto___38538 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__32569__auto___38538){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38539 = arguments.length;
var i__28755__auto___38540 = (0);
while(true){
if((i__28755__auto___38540 < len__28754__auto___38539)){
args__28761__auto__.push((arguments[i__28755__auto___38540]));

var G__38541 = (i__28755__auto___38540 + (1));
i__28755__auto___38540 = G__38541;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38538))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38538){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38538);
});})(g__32569__auto___38538))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__32569__auto___38538){
return (function (seq38511){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38511));
});})(g__32569__auto___38538))
;


var g__32569__auto___38542 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__32569__auto___38542){
return (function cljs$spec$gen$alpha$char(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38543 = arguments.length;
var i__28755__auto___38544 = (0);
while(true){
if((i__28755__auto___38544 < len__28754__auto___38543)){
args__28761__auto__.push((arguments[i__28755__auto___38544]));

var G__38545 = (i__28755__auto___38544 + (1));
i__28755__auto___38544 = G__38545;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38542))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38542){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38542);
});})(g__32569__auto___38542))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__32569__auto___38542){
return (function (seq38512){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38512));
});})(g__32569__auto___38542))
;


var g__32569__auto___38546 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__32569__auto___38546){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38547 = arguments.length;
var i__28755__auto___38548 = (0);
while(true){
if((i__28755__auto___38548 < len__28754__auto___38547)){
args__28761__auto__.push((arguments[i__28755__auto___38548]));

var G__38549 = (i__28755__auto___38548 + (1));
i__28755__auto___38548 = G__38549;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38546))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38546){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38546);
});})(g__32569__auto___38546))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__32569__auto___38546){
return (function (seq38513){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38513));
});})(g__32569__auto___38546))
;


var g__32569__auto___38550 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__32569__auto___38550){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38551 = arguments.length;
var i__28755__auto___38552 = (0);
while(true){
if((i__28755__auto___38552 < len__28754__auto___38551)){
args__28761__auto__.push((arguments[i__28755__auto___38552]));

var G__38553 = (i__28755__auto___38552 + (1));
i__28755__auto___38552 = G__38553;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38550))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38550){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38550);
});})(g__32569__auto___38550))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__32569__auto___38550){
return (function (seq38514){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38514));
});})(g__32569__auto___38550))
;


var g__32569__auto___38554 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__32569__auto___38554){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38555 = arguments.length;
var i__28755__auto___38556 = (0);
while(true){
if((i__28755__auto___38556 < len__28754__auto___38555)){
args__28761__auto__.push((arguments[i__28755__auto___38556]));

var G__38557 = (i__28755__auto___38556 + (1));
i__28755__auto___38556 = G__38557;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38554))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38554){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38554);
});})(g__32569__auto___38554))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__32569__auto___38554){
return (function (seq38515){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38515));
});})(g__32569__auto___38554))
;


var g__32569__auto___38558 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__32569__auto___38558){
return (function cljs$spec$gen$alpha$double(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38559 = arguments.length;
var i__28755__auto___38560 = (0);
while(true){
if((i__28755__auto___38560 < len__28754__auto___38559)){
args__28761__auto__.push((arguments[i__28755__auto___38560]));

var G__38561 = (i__28755__auto___38560 + (1));
i__28755__auto___38560 = G__38561;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38558))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38558){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38558);
});})(g__32569__auto___38558))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__32569__auto___38558){
return (function (seq38516){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38516));
});})(g__32569__auto___38558))
;


var g__32569__auto___38562 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__32569__auto___38562){
return (function cljs$spec$gen$alpha$int(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38563 = arguments.length;
var i__28755__auto___38564 = (0);
while(true){
if((i__28755__auto___38564 < len__28754__auto___38563)){
args__28761__auto__.push((arguments[i__28755__auto___38564]));

var G__38565 = (i__28755__auto___38564 + (1));
i__28755__auto___38564 = G__38565;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38562))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38562){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38562);
});})(g__32569__auto___38562))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__32569__auto___38562){
return (function (seq38517){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38517));
});})(g__32569__auto___38562))
;


var g__32569__auto___38566 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__32569__auto___38566){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38567 = arguments.length;
var i__28755__auto___38568 = (0);
while(true){
if((i__28755__auto___38568 < len__28754__auto___38567)){
args__28761__auto__.push((arguments[i__28755__auto___38568]));

var G__38569 = (i__28755__auto___38568 + (1));
i__28755__auto___38568 = G__38569;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38566))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38566){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38566);
});})(g__32569__auto___38566))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__32569__auto___38566){
return (function (seq38518){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38518));
});})(g__32569__auto___38566))
;


var g__32569__auto___38570 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__32569__auto___38570){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38571 = arguments.length;
var i__28755__auto___38572 = (0);
while(true){
if((i__28755__auto___38572 < len__28754__auto___38571)){
args__28761__auto__.push((arguments[i__28755__auto___38572]));

var G__38573 = (i__28755__auto___38572 + (1));
i__28755__auto___38572 = G__38573;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38570))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38570){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38570);
});})(g__32569__auto___38570))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__32569__auto___38570){
return (function (seq38519){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38519));
});})(g__32569__auto___38570))
;


var g__32569__auto___38574 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__32569__auto___38574){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38575 = arguments.length;
var i__28755__auto___38576 = (0);
while(true){
if((i__28755__auto___38576 < len__28754__auto___38575)){
args__28761__auto__.push((arguments[i__28755__auto___38576]));

var G__38577 = (i__28755__auto___38576 + (1));
i__28755__auto___38576 = G__38577;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38574))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38574){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38574);
});})(g__32569__auto___38574))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__32569__auto___38574){
return (function (seq38520){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38520));
});})(g__32569__auto___38574))
;


var g__32569__auto___38578 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__32569__auto___38578){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38579 = arguments.length;
var i__28755__auto___38580 = (0);
while(true){
if((i__28755__auto___38580 < len__28754__auto___38579)){
args__28761__auto__.push((arguments[i__28755__auto___38580]));

var G__38581 = (i__28755__auto___38580 + (1));
i__28755__auto___38580 = G__38581;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38578))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38578){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38578);
});})(g__32569__auto___38578))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__32569__auto___38578){
return (function (seq38521){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38521));
});})(g__32569__auto___38578))
;


var g__32569__auto___38582 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__32569__auto___38582){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38583 = arguments.length;
var i__28755__auto___38584 = (0);
while(true){
if((i__28755__auto___38584 < len__28754__auto___38583)){
args__28761__auto__.push((arguments[i__28755__auto___38584]));

var G__38585 = (i__28755__auto___38584 + (1));
i__28755__auto___38584 = G__38585;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38582))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38582){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38582);
});})(g__32569__auto___38582))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__32569__auto___38582){
return (function (seq38522){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38522));
});})(g__32569__auto___38582))
;


var g__32569__auto___38586 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__32569__auto___38586){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38587 = arguments.length;
var i__28755__auto___38588 = (0);
while(true){
if((i__28755__auto___38588 < len__28754__auto___38587)){
args__28761__auto__.push((arguments[i__28755__auto___38588]));

var G__38589 = (i__28755__auto___38588 + (1));
i__28755__auto___38588 = G__38589;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38586))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38586){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38586);
});})(g__32569__auto___38586))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__32569__auto___38586){
return (function (seq38523){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38523));
});})(g__32569__auto___38586))
;


var g__32569__auto___38590 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__32569__auto___38590){
return (function cljs$spec$gen$alpha$string(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38591 = arguments.length;
var i__28755__auto___38592 = (0);
while(true){
if((i__28755__auto___38592 < len__28754__auto___38591)){
args__28761__auto__.push((arguments[i__28755__auto___38592]));

var G__38593 = (i__28755__auto___38592 + (1));
i__28755__auto___38592 = G__38593;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38590))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38590){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38590);
});})(g__32569__auto___38590))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__32569__auto___38590){
return (function (seq38524){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38524));
});})(g__32569__auto___38590))
;


var g__32569__auto___38594 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__32569__auto___38594){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38595 = arguments.length;
var i__28755__auto___38596 = (0);
while(true){
if((i__28755__auto___38596 < len__28754__auto___38595)){
args__28761__auto__.push((arguments[i__28755__auto___38596]));

var G__38597 = (i__28755__auto___38596 + (1));
i__28755__auto___38596 = G__38597;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38594))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38594){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38594);
});})(g__32569__auto___38594))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__32569__auto___38594){
return (function (seq38525){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38525));
});})(g__32569__auto___38594))
;


var g__32569__auto___38598 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__32569__auto___38598){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38599 = arguments.length;
var i__28755__auto___38600 = (0);
while(true){
if((i__28755__auto___38600 < len__28754__auto___38599)){
args__28761__auto__.push((arguments[i__28755__auto___38600]));

var G__38601 = (i__28755__auto___38600 + (1));
i__28755__auto___38600 = G__38601;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38598))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38598){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38598);
});})(g__32569__auto___38598))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__32569__auto___38598){
return (function (seq38526){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38526));
});})(g__32569__auto___38598))
;


var g__32569__auto___38602 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__32569__auto___38602){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38603 = arguments.length;
var i__28755__auto___38604 = (0);
while(true){
if((i__28755__auto___38604 < len__28754__auto___38603)){
args__28761__auto__.push((arguments[i__28755__auto___38604]));

var G__38605 = (i__28755__auto___38604 + (1));
i__28755__auto___38604 = G__38605;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38602))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38602){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38602);
});})(g__32569__auto___38602))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__32569__auto___38602){
return (function (seq38527){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38527));
});})(g__32569__auto___38602))
;


var g__32569__auto___38606 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__32569__auto___38606){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38607 = arguments.length;
var i__28755__auto___38608 = (0);
while(true){
if((i__28755__auto___38608 < len__28754__auto___38607)){
args__28761__auto__.push((arguments[i__28755__auto___38608]));

var G__38609 = (i__28755__auto___38608 + (1));
i__28755__auto___38608 = G__38609;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38606))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38606){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38606);
});})(g__32569__auto___38606))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__32569__auto___38606){
return (function (seq38528){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38528));
});})(g__32569__auto___38606))
;


var g__32569__auto___38610 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__32569__auto___38610){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38611 = arguments.length;
var i__28755__auto___38612 = (0);
while(true){
if((i__28755__auto___38612 < len__28754__auto___38611)){
args__28761__auto__.push((arguments[i__28755__auto___38612]));

var G__38613 = (i__28755__auto___38612 + (1));
i__28755__auto___38612 = G__38613;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});})(g__32569__auto___38610))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32569__auto___38610){
return (function (args){
return cljs.core.deref.call(null,g__32569__auto___38610);
});})(g__32569__auto___38610))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__32569__auto___38610){
return (function (seq38529){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38529));
});})(g__32569__auto___38610))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__28761__auto__ = [];
var len__28754__auto___38616 = arguments.length;
var i__28755__auto___38617 = (0);
while(true){
if((i__28755__auto___38617 < len__28754__auto___38616)){
args__28761__auto__.push((arguments[i__28755__auto___38617]));

var G__38618 = (i__28755__auto___38617 + (1));
i__28755__auto___38617 = G__38618;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__38614_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__38614_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq38615){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38615));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__38619_SHARP_){
return (new Date(p1__38619_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1547003711919