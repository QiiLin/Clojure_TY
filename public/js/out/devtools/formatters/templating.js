// Compiled by ClojureScript 1.9.671 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x32038_32039 = value;
x32038_32039.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x32041_32042 = value;
x32041_32042.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x32044_32045 = value;
x32044_32045.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__27617__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__27617__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__27617__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__28761__auto__ = [];
var len__28754__auto___32052 = arguments.length;
var i__28755__auto___32053 = (0);
while(true){
if((i__28755__auto___32053 < len__28754__auto___32052)){
args__28761__auto__.push((arguments[i__28755__auto___32053]));

var G__32054 = (i__28755__auto___32053 + (1));
i__28755__auto___32053 = G__32054;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__32048_32055 = cljs.core.seq.call(null,items);
var chunk__32049_32056 = null;
var count__32050_32057 = (0);
var i__32051_32058 = (0);
while(true){
if((i__32051_32058 < count__32050_32057)){
var item_32059 = cljs.core._nth.call(null,chunk__32049_32056,i__32051_32058);
if(!((item_32059 == null))){
if(cljs.core.coll_QMARK_.call(null,item_32059)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_32059)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_32059));
}
} else {
}

var G__32060 = seq__32048_32055;
var G__32061 = chunk__32049_32056;
var G__32062 = count__32050_32057;
var G__32063 = (i__32051_32058 + (1));
seq__32048_32055 = G__32060;
chunk__32049_32056 = G__32061;
count__32050_32057 = G__32062;
i__32051_32058 = G__32063;
continue;
} else {
var temp__4657__auto___32064 = cljs.core.seq.call(null,seq__32048_32055);
if(temp__4657__auto___32064){
var seq__32048_32065__$1 = temp__4657__auto___32064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32048_32065__$1)){
var c__28449__auto___32066 = cljs.core.chunk_first.call(null,seq__32048_32065__$1);
var G__32067 = cljs.core.chunk_rest.call(null,seq__32048_32065__$1);
var G__32068 = c__28449__auto___32066;
var G__32069 = cljs.core.count.call(null,c__28449__auto___32066);
var G__32070 = (0);
seq__32048_32055 = G__32067;
chunk__32049_32056 = G__32068;
count__32050_32057 = G__32069;
i__32051_32058 = G__32070;
continue;
} else {
var item_32071 = cljs.core.first.call(null,seq__32048_32065__$1);
if(!((item_32071 == null))){
if(cljs.core.coll_QMARK_.call(null,item_32071)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_32071)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_32071));
}
} else {
}

var G__32072 = cljs.core.next.call(null,seq__32048_32065__$1);
var G__32073 = null;
var G__32074 = (0);
var G__32075 = (0);
seq__32048_32055 = G__32072;
chunk__32049_32056 = G__32073;
count__32050_32057 = G__32074;
i__32051_32058 = G__32075;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq32047){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32047));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__28761__auto__ = [];
var len__28754__auto___32083 = arguments.length;
var i__28755__auto___32084 = (0);
while(true){
if((i__28755__auto___32084 < len__28754__auto___32083)){
args__28761__auto__.push((arguments[i__28755__auto___32084]));

var G__32085 = (i__28755__auto___32084 + (1));
i__28755__auto___32084 = G__32085;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((2) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28762__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__32079_32086 = cljs.core.seq.call(null,children);
var chunk__32080_32087 = null;
var count__32081_32088 = (0);
var i__32082_32089 = (0);
while(true){
if((i__32082_32089 < count__32081_32088)){
var child_32090 = cljs.core._nth.call(null,chunk__32080_32087,i__32082_32089);
if(!((child_32090 == null))){
if(cljs.core.coll_QMARK_.call(null,child_32090)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_32090))));
} else {
var temp__4655__auto___32091 = devtools.formatters.helpers.pref.call(null,child_32090);
if(cljs.core.truth_(temp__4655__auto___32091)){
var child_value_32092 = temp__4655__auto___32091;
template.push(child_value_32092);
} else {
}
}
} else {
}

var G__32093 = seq__32079_32086;
var G__32094 = chunk__32080_32087;
var G__32095 = count__32081_32088;
var G__32096 = (i__32082_32089 + (1));
seq__32079_32086 = G__32093;
chunk__32080_32087 = G__32094;
count__32081_32088 = G__32095;
i__32082_32089 = G__32096;
continue;
} else {
var temp__4657__auto___32097 = cljs.core.seq.call(null,seq__32079_32086);
if(temp__4657__auto___32097){
var seq__32079_32098__$1 = temp__4657__auto___32097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32079_32098__$1)){
var c__28449__auto___32099 = cljs.core.chunk_first.call(null,seq__32079_32098__$1);
var G__32100 = cljs.core.chunk_rest.call(null,seq__32079_32098__$1);
var G__32101 = c__28449__auto___32099;
var G__32102 = cljs.core.count.call(null,c__28449__auto___32099);
var G__32103 = (0);
seq__32079_32086 = G__32100;
chunk__32080_32087 = G__32101;
count__32081_32088 = G__32102;
i__32082_32089 = G__32103;
continue;
} else {
var child_32104 = cljs.core.first.call(null,seq__32079_32098__$1);
if(!((child_32104 == null))){
if(cljs.core.coll_QMARK_.call(null,child_32104)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_32104))));
} else {
var temp__4655__auto___32105 = devtools.formatters.helpers.pref.call(null,child_32104);
if(cljs.core.truth_(temp__4655__auto___32105)){
var child_value_32106 = temp__4655__auto___32105;
template.push(child_value_32106);
} else {
}
}
} else {
}

var G__32107 = cljs.core.next.call(null,seq__32079_32098__$1);
var G__32108 = null;
var G__32109 = (0);
var G__32110 = (0);
seq__32079_32086 = G__32107;
chunk__32080_32087 = G__32108;
count__32081_32088 = G__32109;
i__32082_32089 = G__32110;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq32076){
var G__32077 = cljs.core.first.call(null,seq32076);
var seq32076__$1 = cljs.core.next.call(null,seq32076);
var G__32078 = cljs.core.first.call(null,seq32076__$1);
var seq32076__$2 = cljs.core.next.call(null,seq32076__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__32077,G__32078,seq32076__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__28761__auto__ = [];
var len__28754__auto___32113 = arguments.length;
var i__28755__auto___32114 = (0);
while(true){
if((i__28755__auto___32114 < len__28754__auto___32113)){
args__28761__auto__.push((arguments[i__28755__auto___32114]));

var G__32115 = (i__28755__auto___32114 + (1));
i__28755__auto___32114 = G__32115;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((1) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28762__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq32111){
var G__32112 = cljs.core.first.call(null,seq32111);
var seq32111__$1 = cljs.core.next.call(null,seq32111);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32112,seq32111__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__28761__auto__ = [];
var len__28754__auto___32118 = arguments.length;
var i__28755__auto___32119 = (0);
while(true){
if((i__28755__auto___32119 < len__28754__auto___32118)){
args__28761__auto__.push((arguments[i__28755__auto___32119]));

var G__32120 = (i__28755__auto___32119 + (1));
i__28755__auto___32119 = G__32120;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((1) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28762__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq32116){
var G__32117 = cljs.core.first.call(null,seq32116);
var seq32116__$1 = cljs.core.next.call(null,seq32116);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32117,seq32116__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__32122 = arguments.length;
switch (G__32122) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj32124 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__27629__auto__ = start_index;
if(cljs.core.truth_(or__27629__auto__)){
return or__27629__auto__;
} else {
return (0);
}
})()};
return obj32124;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__28761__auto__ = [];
var len__28754__auto___32132 = arguments.length;
var i__28755__auto___32133 = (0);
while(true){
if((i__28755__auto___32133 < len__28754__auto___32132)){
args__28761__auto__.push((arguments[i__28755__auto___32133]));

var G__32134 = (i__28755__auto___32133 + (1));
i__28755__auto___32133 = G__32134;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((1) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28762__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__32128){
var vec__32129 = p__32128;
var state_override_fn = cljs.core.nth.call(null,vec__32129,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq32126){
var G__32127 = cljs.core.first.call(null,seq32126);
var seq32126__$1 = cljs.core.next.call(null,seq32126);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__32127,seq32126__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_32135 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_32135;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render path: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render stack:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__32136 = name;
switch (G__32136) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("no matching special tag name: '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__32138 = tag;
var html_tag = cljs.core.nth.call(null,vec__32138,(0),null);
var style = cljs.core.nth.call(null,vec__32138,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_32141 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid json-ml markup at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_32141;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_32142 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_32143 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_32143;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_32142;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__32144 = initial_value;
var G__32145 = value.call(null);
initial_value = G__32144;
value = G__32145;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__32146 = initial_value;
var G__32147 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__32146;
value = G__32147;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__32148 = initial_value;
var G__32149 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__32148;
value = G__32149;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1547003699290