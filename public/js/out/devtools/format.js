// Compiled by ClojureScript 1.9.671 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__28298__auto__ = (((value == null))?null:value);
var m__28299__auto__ = (devtools.format._header[goog.typeOf(x__28298__auto__)]);
if(!((m__28299__auto__ == null))){
return m__28299__auto__.call(null,value);
} else {
var m__28299__auto____$1 = (devtools.format._header["_"]);
if(!((m__28299__auto____$1 == null))){
return m__28299__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__28298__auto__ = (((value == null))?null:value);
var m__28299__auto__ = (devtools.format._has_body[goog.typeOf(x__28298__auto__)]);
if(!((m__28299__auto__ == null))){
return m__28299__auto__.call(null,value);
} else {
var m__28299__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__28299__auto____$1 == null))){
return m__28299__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__28298__auto__ = (((value == null))?null:value);
var m__28299__auto__ = (devtools.format._body[goog.typeOf(x__28298__auto__)]);
if(!((m__28299__auto__ == null))){
return m__28299__auto__.call(null,value);
} else {
var m__28299__auto____$1 = (devtools.format._body["_"]);
if(!((m__28299__auto____$1 == null))){
return m__28299__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o29762 = temp__4655__auto__;
var temp__4655__auto____$1 = (o29762["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o29763 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o29763["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o29764 = temp__4655__auto____$2;
return (o29764["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o29765 = temp__4655__auto__;
var temp__4655__auto____$1 = (o29765["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o29766 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o29766["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o29767 = temp__4655__auto____$2;
return (o29767["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o29768 = temp__4655__auto__;
var temp__4655__auto____$1 = (o29768["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o29769 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o29769["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o29770 = temp__4655__auto____$2;
return (o29770["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o29771 = temp__4655__auto__;
var temp__4655__auto____$1 = (o29771["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o29772 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o29772["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o29773 = temp__4655__auto____$2;
return (o29773["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o29774 = temp__4655__auto__;
var temp__4655__auto____$1 = (o29774["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o29775 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o29775["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o29776 = temp__4655__auto____$2;
return (o29776["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o29777 = temp__4655__auto__;
var temp__4655__auto____$1 = (o29777["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o29778 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o29778["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o29779 = temp__4655__auto____$2;
return (o29779["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o29780 = temp__4655__auto__;
var temp__4655__auto____$1 = (o29780["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o29781 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o29781["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o29782 = temp__4655__auto____$2;
return (o29782["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__28761__auto__ = [];
var len__28754__auto___29784 = arguments.length;
var i__28755__auto___29785 = (0);
while(true){
if((i__28755__auto___29785 < len__28754__auto___29784)){
args__28761__auto__.push((arguments[i__28755__auto___29785]));

var G__29786 = (i__28755__auto___29785 + (1));
i__28755__auto___29785 = G__29786;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq29783){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29783));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__28761__auto__ = [];
var len__28754__auto___29788 = arguments.length;
var i__28755__auto___29789 = (0);
while(true){
if((i__28755__auto___29789 < len__28754__auto___29788)){
args__28761__auto__.push((arguments[i__28755__auto___29789]));

var G__29790 = (i__28755__auto___29789 + (1));
i__28755__auto___29789 = G__29790;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq29787){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29787));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__28761__auto__ = [];
var len__28754__auto___29792 = arguments.length;
var i__28755__auto___29793 = (0);
while(true){
if((i__28755__auto___29793 < len__28754__auto___29792)){
args__28761__auto__.push((arguments[i__28755__auto___29793]));

var G__29794 = (i__28755__auto___29793 + (1));
i__28755__auto___29793 = G__29794;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq29791){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29791));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__28761__auto__ = [];
var len__28754__auto___29796 = arguments.length;
var i__28755__auto___29797 = (0);
while(true){
if((i__28755__auto___29797 < len__28754__auto___29796)){
args__28761__auto__.push((arguments[i__28755__auto___29797]));

var G__29798 = (i__28755__auto___29797 + (1));
i__28755__auto___29797 = G__29798;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq29795){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29795));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__28761__auto__ = [];
var len__28754__auto___29800 = arguments.length;
var i__28755__auto___29801 = (0);
while(true){
if((i__28755__auto___29801 < len__28754__auto___29800)){
args__28761__auto__.push((arguments[i__28755__auto___29801]));

var G__29802 = (i__28755__auto___29801 + (1));
i__28755__auto___29801 = G__29802;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq29799){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29799));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__28761__auto__ = [];
var len__28754__auto___29804 = arguments.length;
var i__28755__auto___29805 = (0);
while(true){
if((i__28755__auto___29805 < len__28754__auto___29804)){
args__28761__auto__.push((arguments[i__28755__auto___29805]));

var G__29806 = (i__28755__auto___29805 + (1));
i__28755__auto___29805 = G__29806;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq29803){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29803));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__28761__auto__ = [];
var len__28754__auto___29808 = arguments.length;
var i__28755__auto___29809 = (0);
while(true){
if((i__28755__auto___29809 < len__28754__auto___29808)){
args__28761__auto__.push((arguments[i__28755__auto___29809]));

var G__29810 = (i__28755__auto___29809 + (1));
i__28755__auto___29809 = G__29810;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq29807){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29807));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__28761__auto__ = [];
var len__28754__auto___29818 = arguments.length;
var i__28755__auto___29819 = (0);
while(true){
if((i__28755__auto___29819 < len__28754__auto___29818)){
args__28761__auto__.push((arguments[i__28755__auto___29819]));

var G__29820 = (i__28755__auto___29819 + (1));
i__28755__auto___29819 = G__29820;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((1) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28762__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__29814){
var vec__29815 = p__29814;
var state_override = cljs.core.nth.call(null,vec__29815,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__29815,state_override){
return (function (p1__29811_SHARP_){
return cljs.core.merge.call(null,p1__29811_SHARP_,state_override);
});})(vec__29815,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq29812){
var G__29813 = cljs.core.first.call(null,seq29812);
var seq29812__$1 = cljs.core.next.call(null,seq29812);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__29813,seq29812__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__28761__auto__ = [];
var len__28754__auto___29822 = arguments.length;
var i__28755__auto___29823 = (0);
while(true){
if((i__28755__auto___29823 < len__28754__auto___29822)){
args__28761__auto__.push((arguments[i__28755__auto___29823]));

var G__29824 = (i__28755__auto___29823 + (1));
i__28755__auto___29823 = G__29824;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq29821){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29821));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__28761__auto__ = [];
var len__28754__auto___29827 = arguments.length;
var i__28755__auto___29828 = (0);
while(true){
if((i__28755__auto___29828 < len__28754__auto___29827)){
args__28761__auto__.push((arguments[i__28755__auto___29828]));

var G__29829 = (i__28755__auto___29828 + (1));
i__28755__auto___29828 = G__29829;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((1) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28762__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq29825){
var G__29826 = cljs.core.first.call(null,seq29825);
var seq29825__$1 = cljs.core.next.call(null,seq29825);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__29826,seq29825__$1);
});


//# sourceMappingURL=format.js.map?rel=1547003692041