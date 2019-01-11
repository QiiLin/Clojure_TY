// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#js "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e39487){if((e39487 instanceof Error)){
var e = e39487;
return "Error: Unable to stringify";
} else {
throw e39487;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39490 = arguments.length;
switch (G__39490) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39488_SHARP_){
if(typeof p1__39488_SHARP_ === 'string'){
return p1__39488_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39488_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__28761__auto__ = [];
var len__28754__auto___39493 = arguments.length;
var i__28755__auto___39494 = (0);
while(true){
if((i__28755__auto___39494 < len__28754__auto___39493)){
args__28761__auto__.push((arguments[i__28755__auto___39494]));

var G__39495 = (i__28755__auto___39494 + (1));
i__28755__auto___39494 = G__39495;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39492){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39492));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28761__auto__ = [];
var len__28754__auto___39497 = arguments.length;
var i__28755__auto___39498 = (0);
while(true){
if((i__28755__auto___39498 < len__28754__auto___39497)){
args__28761__auto__.push((arguments[i__28755__auto___39498]));

var G__39499 = (i__28755__auto___39498 + (1));
i__28755__auto___39498 = G__39499;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39496){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39496));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39500){
var map__39501 = p__39500;
var map__39501__$1 = ((((!((map__39501 == null)))?((((map__39501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39501):map__39501);
var message = cljs.core.get.call(null,map__39501__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39501__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27629__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27629__auto__)){
return or__27629__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27617__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27617__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27617__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34504__auto___39580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto___39580,ch){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto___39580,ch){
return (function (state_39552){
var state_val_39553 = (state_39552[(1)]);
if((state_val_39553 === (7))){
var inst_39548 = (state_39552[(2)]);
var state_39552__$1 = state_39552;
var statearr_39554_39581 = state_39552__$1;
(statearr_39554_39581[(2)] = inst_39548);

(statearr_39554_39581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39553 === (1))){
var state_39552__$1 = state_39552;
var statearr_39555_39582 = state_39552__$1;
(statearr_39555_39582[(2)] = null);

(statearr_39555_39582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39553 === (4))){
var inst_39505 = (state_39552[(7)]);
var inst_39505__$1 = (state_39552[(2)]);
var state_39552__$1 = (function (){var statearr_39556 = state_39552;
(statearr_39556[(7)] = inst_39505__$1);

return statearr_39556;
})();
if(cljs.core.truth_(inst_39505__$1)){
var statearr_39557_39583 = state_39552__$1;
(statearr_39557_39583[(1)] = (5));

} else {
var statearr_39558_39584 = state_39552__$1;
(statearr_39558_39584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39553 === (15))){
var inst_39512 = (state_39552[(8)]);
var inst_39527 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39512);
var inst_39528 = cljs.core.first.call(null,inst_39527);
var inst_39529 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39528);
var inst_39530 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39529)].join('');
var inst_39531 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39530);
var state_39552__$1 = state_39552;
var statearr_39559_39585 = state_39552__$1;
(statearr_39559_39585[(2)] = inst_39531);

(statearr_39559_39585[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39553 === (13))){
var inst_39536 = (state_39552[(2)]);
var state_39552__$1 = state_39552;
var statearr_39560_39586 = state_39552__$1;
(statearr_39560_39586[(2)] = inst_39536);

(statearr_39560_39586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39553 === (6))){
var state_39552__$1 = state_39552;
var statearr_39561_39587 = state_39552__$1;
(statearr_39561_39587[(2)] = null);

(statearr_39561_39587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39553 === (17))){
var inst_39534 = (state_39552[(2)]);
var state_39552__$1 = state_39552;
var statearr_39562_39588 = state_39552__$1;
(statearr_39562_39588[(2)] = inst_39534);

(statearr_39562_39588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39553 === (3))){
var inst_39550 = (state_39552[(2)]);
var state_39552__$1 = state_39552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39552__$1,inst_39550);
} else {
if((state_val_39553 === (12))){
var inst_39511 = (state_39552[(9)]);
var inst_39525 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39511,opts);
var state_39552__$1 = state_39552;
if(cljs.core.truth_(inst_39525)){
var statearr_39563_39589 = state_39552__$1;
(statearr_39563_39589[(1)] = (15));

} else {
var statearr_39564_39590 = state_39552__$1;
(statearr_39564_39590[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39553 === (2))){
var state_39552__$1 = state_39552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39552__$1,(4),ch);
} else {
if((state_val_39553 === (11))){
var inst_39512 = (state_39552[(8)]);
var inst_39517 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39518 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39512);
var inst_39519 = cljs.core.async.timeout.call(null,(1000));
var inst_39520 = [inst_39518,inst_39519];
var inst_39521 = (new cljs.core.PersistentVector(null,2,(5),inst_39517,inst_39520,null));
var state_39552__$1 = state_39552;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39552__$1,(14),inst_39521);
} else {
if((state_val_39553 === (9))){
var inst_39512 = (state_39552[(8)]);
var inst_39538 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39539 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39512);
var inst_39540 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39539);
var inst_39541 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39540)].join('');
var inst_39542 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39541);
var state_39552__$1 = (function (){var statearr_39565 = state_39552;
(statearr_39565[(10)] = inst_39538);

return statearr_39565;
})();
var statearr_39566_39591 = state_39552__$1;
(statearr_39566_39591[(2)] = inst_39542);

(statearr_39566_39591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39553 === (5))){
var inst_39505 = (state_39552[(7)]);
var inst_39507 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39508 = (new cljs.core.PersistentArrayMap(null,2,inst_39507,null));
var inst_39509 = (new cljs.core.PersistentHashSet(null,inst_39508,null));
var inst_39510 = figwheel.client.focus_msgs.call(null,inst_39509,inst_39505);
var inst_39511 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39510);
var inst_39512 = cljs.core.first.call(null,inst_39510);
var inst_39513 = figwheel.client.autoload_QMARK_.call(null);
var state_39552__$1 = (function (){var statearr_39567 = state_39552;
(statearr_39567[(8)] = inst_39512);

(statearr_39567[(9)] = inst_39511);

return statearr_39567;
})();
if(cljs.core.truth_(inst_39513)){
var statearr_39568_39592 = state_39552__$1;
(statearr_39568_39592[(1)] = (8));

} else {
var statearr_39569_39593 = state_39552__$1;
(statearr_39569_39593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39553 === (14))){
var inst_39523 = (state_39552[(2)]);
var state_39552__$1 = state_39552;
var statearr_39570_39594 = state_39552__$1;
(statearr_39570_39594[(2)] = inst_39523);

(statearr_39570_39594[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39553 === (16))){
var state_39552__$1 = state_39552;
var statearr_39571_39595 = state_39552__$1;
(statearr_39571_39595[(2)] = null);

(statearr_39571_39595[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39553 === (10))){
var inst_39544 = (state_39552[(2)]);
var state_39552__$1 = (function (){var statearr_39572 = state_39552;
(statearr_39572[(11)] = inst_39544);

return statearr_39572;
})();
var statearr_39573_39596 = state_39552__$1;
(statearr_39573_39596[(2)] = null);

(statearr_39573_39596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39553 === (8))){
var inst_39511 = (state_39552[(9)]);
var inst_39515 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39511,opts);
var state_39552__$1 = state_39552;
if(cljs.core.truth_(inst_39515)){
var statearr_39574_39597 = state_39552__$1;
(statearr_39574_39597[(1)] = (11));

} else {
var statearr_39575_39598 = state_39552__$1;
(statearr_39575_39598[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34504__auto___39580,ch))
;
return ((function (switch__34416__auto__,c__34504__auto___39580,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34417__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34417__auto____0 = (function (){
var statearr_39576 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39576[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34417__auto__);

(statearr_39576[(1)] = (1));

return statearr_39576;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34417__auto____1 = (function (state_39552){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_39552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e39577){if((e39577 instanceof Object)){
var ex__34420__auto__ = e39577;
var statearr_39578_39599 = state_39552;
(statearr_39578_39599[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39600 = state_39552;
state_39552 = G__39600;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34417__auto__ = function(state_39552){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34417__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34417__auto____1.call(this,state_39552);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34417__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34417__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto___39580,ch))
})();
var state__34506__auto__ = (function (){var statearr_39579 = f__34505__auto__.call(null);
(statearr_39579[(6)] = c__34504__auto___39580);

return statearr_39579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto___39580,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39601_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39601_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39605 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39605){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_39603 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39604 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39603,_STAR_print_fn_STAR_39604,sb,base_path_39605){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_39603,_STAR_print_fn_STAR_39604,sb,base_path_39605))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = ((!(typeof result_value === 'string'))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39604;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39603;
}}catch (e39602){if((e39602 instanceof Error)){
var e = e39602;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39605], null));
} else {
var e = e39602;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_39605))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39606){
var map__39607 = p__39606;
var map__39607__$1 = ((((!((map__39607 == null)))?((((map__39607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39607):map__39607);
var opts = map__39607__$1;
var build_id = cljs.core.get.call(null,map__39607__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39607,map__39607__$1,opts,build_id){
return (function (p__39609){
var vec__39610 = p__39609;
var seq__39611 = cljs.core.seq.call(null,vec__39610);
var first__39612 = cljs.core.first.call(null,seq__39611);
var seq__39611__$1 = cljs.core.next.call(null,seq__39611);
var map__39613 = first__39612;
var map__39613__$1 = ((((!((map__39613 == null)))?((((map__39613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39613):map__39613);
var msg = map__39613__$1;
var msg_name = cljs.core.get.call(null,map__39613__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39611__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39610,seq__39611,first__39612,seq__39611__$1,map__39613,map__39613__$1,msg,msg_name,_,map__39607,map__39607__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39610,seq__39611,first__39612,seq__39611__$1,map__39613,map__39613__$1,msg,msg_name,_,map__39607,map__39607__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39607,map__39607__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39615){
var vec__39616 = p__39615;
var seq__39617 = cljs.core.seq.call(null,vec__39616);
var first__39618 = cljs.core.first.call(null,seq__39617);
var seq__39617__$1 = cljs.core.next.call(null,seq__39617);
var map__39619 = first__39618;
var map__39619__$1 = ((((!((map__39619 == null)))?((((map__39619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39619.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39619):map__39619);
var msg = map__39619__$1;
var msg_name = cljs.core.get.call(null,map__39619__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39617__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39621){
var map__39622 = p__39621;
var map__39622__$1 = ((((!((map__39622 == null)))?((((map__39622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39622):map__39622);
var on_compile_warning = cljs.core.get.call(null,map__39622__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39622__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39622,map__39622__$1,on_compile_warning,on_compile_fail){
return (function (p__39624){
var vec__39625 = p__39624;
var seq__39626 = cljs.core.seq.call(null,vec__39625);
var first__39627 = cljs.core.first.call(null,seq__39626);
var seq__39626__$1 = cljs.core.next.call(null,seq__39626);
var map__39628 = first__39627;
var map__39628__$1 = ((((!((map__39628 == null)))?((((map__39628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39628):map__39628);
var msg = map__39628__$1;
var msg_name = cljs.core.get.call(null,map__39628__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39626__$1;
var pred__39630 = cljs.core._EQ_;
var expr__39631 = msg_name;
if(cljs.core.truth_(pred__39630.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39631))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39630.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39631))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39622,map__39622__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto__,msg_hist,msg_names,msg){
return (function (state_39720){
var state_val_39721 = (state_39720[(1)]);
if((state_val_39721 === (7))){
var inst_39640 = (state_39720[(2)]);
var state_39720__$1 = state_39720;
if(cljs.core.truth_(inst_39640)){
var statearr_39722_39769 = state_39720__$1;
(statearr_39722_39769[(1)] = (8));

} else {
var statearr_39723_39770 = state_39720__$1;
(statearr_39723_39770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (20))){
var inst_39714 = (state_39720[(2)]);
var state_39720__$1 = state_39720;
var statearr_39724_39771 = state_39720__$1;
(statearr_39724_39771[(2)] = inst_39714);

(statearr_39724_39771[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (27))){
var inst_39710 = (state_39720[(2)]);
var state_39720__$1 = state_39720;
var statearr_39725_39772 = state_39720__$1;
(statearr_39725_39772[(2)] = inst_39710);

(statearr_39725_39772[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (1))){
var inst_39633 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39720__$1 = state_39720;
if(cljs.core.truth_(inst_39633)){
var statearr_39726_39773 = state_39720__$1;
(statearr_39726_39773[(1)] = (2));

} else {
var statearr_39727_39774 = state_39720__$1;
(statearr_39727_39774[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (24))){
var inst_39712 = (state_39720[(2)]);
var state_39720__$1 = state_39720;
var statearr_39728_39775 = state_39720__$1;
(statearr_39728_39775[(2)] = inst_39712);

(statearr_39728_39775[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (4))){
var inst_39718 = (state_39720[(2)]);
var state_39720__$1 = state_39720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39720__$1,inst_39718);
} else {
if((state_val_39721 === (15))){
var inst_39716 = (state_39720[(2)]);
var state_39720__$1 = state_39720;
var statearr_39729_39776 = state_39720__$1;
(statearr_39729_39776[(2)] = inst_39716);

(statearr_39729_39776[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (21))){
var inst_39669 = (state_39720[(2)]);
var inst_39670 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39671 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39670);
var state_39720__$1 = (function (){var statearr_39730 = state_39720;
(statearr_39730[(7)] = inst_39669);

return statearr_39730;
})();
var statearr_39731_39777 = state_39720__$1;
(statearr_39731_39777[(2)] = inst_39671);

(statearr_39731_39777[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (31))){
var inst_39699 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39720__$1 = state_39720;
if(cljs.core.truth_(inst_39699)){
var statearr_39732_39778 = state_39720__$1;
(statearr_39732_39778[(1)] = (34));

} else {
var statearr_39733_39779 = state_39720__$1;
(statearr_39733_39779[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (32))){
var inst_39708 = (state_39720[(2)]);
var state_39720__$1 = state_39720;
var statearr_39734_39780 = state_39720__$1;
(statearr_39734_39780[(2)] = inst_39708);

(statearr_39734_39780[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (33))){
var inst_39695 = (state_39720[(2)]);
var inst_39696 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39697 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39696);
var state_39720__$1 = (function (){var statearr_39735 = state_39720;
(statearr_39735[(8)] = inst_39695);

return statearr_39735;
})();
var statearr_39736_39781 = state_39720__$1;
(statearr_39736_39781[(2)] = inst_39697);

(statearr_39736_39781[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (13))){
var inst_39654 = figwheel.client.heads_up.clear.call(null);
var state_39720__$1 = state_39720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39720__$1,(16),inst_39654);
} else {
if((state_val_39721 === (22))){
var inst_39675 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39676 = figwheel.client.heads_up.append_warning_message.call(null,inst_39675);
var state_39720__$1 = state_39720;
var statearr_39737_39782 = state_39720__$1;
(statearr_39737_39782[(2)] = inst_39676);

(statearr_39737_39782[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (36))){
var inst_39706 = (state_39720[(2)]);
var state_39720__$1 = state_39720;
var statearr_39738_39783 = state_39720__$1;
(statearr_39738_39783[(2)] = inst_39706);

(statearr_39738_39783[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (29))){
var inst_39686 = (state_39720[(2)]);
var inst_39687 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39688 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39687);
var state_39720__$1 = (function (){var statearr_39739 = state_39720;
(statearr_39739[(9)] = inst_39686);

return statearr_39739;
})();
var statearr_39740_39784 = state_39720__$1;
(statearr_39740_39784[(2)] = inst_39688);

(statearr_39740_39784[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (6))){
var inst_39635 = (state_39720[(10)]);
var state_39720__$1 = state_39720;
var statearr_39741_39785 = state_39720__$1;
(statearr_39741_39785[(2)] = inst_39635);

(statearr_39741_39785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (28))){
var inst_39682 = (state_39720[(2)]);
var inst_39683 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39684 = figwheel.client.heads_up.display_warning.call(null,inst_39683);
var state_39720__$1 = (function (){var statearr_39742 = state_39720;
(statearr_39742[(11)] = inst_39682);

return statearr_39742;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39720__$1,(29),inst_39684);
} else {
if((state_val_39721 === (25))){
var inst_39680 = figwheel.client.heads_up.clear.call(null);
var state_39720__$1 = state_39720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39720__$1,(28),inst_39680);
} else {
if((state_val_39721 === (34))){
var inst_39701 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39720__$1 = state_39720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39720__$1,(37),inst_39701);
} else {
if((state_val_39721 === (17))){
var inst_39660 = (state_39720[(2)]);
var inst_39661 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39662 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39661);
var state_39720__$1 = (function (){var statearr_39743 = state_39720;
(statearr_39743[(12)] = inst_39660);

return statearr_39743;
})();
var statearr_39744_39786 = state_39720__$1;
(statearr_39744_39786[(2)] = inst_39662);

(statearr_39744_39786[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (3))){
var inst_39652 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39720__$1 = state_39720;
if(cljs.core.truth_(inst_39652)){
var statearr_39745_39787 = state_39720__$1;
(statearr_39745_39787[(1)] = (13));

} else {
var statearr_39746_39788 = state_39720__$1;
(statearr_39746_39788[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (12))){
var inst_39648 = (state_39720[(2)]);
var state_39720__$1 = state_39720;
var statearr_39747_39789 = state_39720__$1;
(statearr_39747_39789[(2)] = inst_39648);

(statearr_39747_39789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (2))){
var inst_39635 = (state_39720[(10)]);
var inst_39635__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39720__$1 = (function (){var statearr_39748 = state_39720;
(statearr_39748[(10)] = inst_39635__$1);

return statearr_39748;
})();
if(cljs.core.truth_(inst_39635__$1)){
var statearr_39749_39790 = state_39720__$1;
(statearr_39749_39790[(1)] = (5));

} else {
var statearr_39750_39791 = state_39720__$1;
(statearr_39750_39791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (23))){
var inst_39678 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39720__$1 = state_39720;
if(cljs.core.truth_(inst_39678)){
var statearr_39751_39792 = state_39720__$1;
(statearr_39751_39792[(1)] = (25));

} else {
var statearr_39752_39793 = state_39720__$1;
(statearr_39752_39793[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (35))){
var state_39720__$1 = state_39720;
var statearr_39753_39794 = state_39720__$1;
(statearr_39753_39794[(2)] = null);

(statearr_39753_39794[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (19))){
var inst_39673 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39720__$1 = state_39720;
if(cljs.core.truth_(inst_39673)){
var statearr_39754_39795 = state_39720__$1;
(statearr_39754_39795[(1)] = (22));

} else {
var statearr_39755_39796 = state_39720__$1;
(statearr_39755_39796[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (11))){
var inst_39644 = (state_39720[(2)]);
var state_39720__$1 = state_39720;
var statearr_39756_39797 = state_39720__$1;
(statearr_39756_39797[(2)] = inst_39644);

(statearr_39756_39797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (9))){
var inst_39646 = figwheel.client.heads_up.clear.call(null);
var state_39720__$1 = state_39720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39720__$1,(12),inst_39646);
} else {
if((state_val_39721 === (5))){
var inst_39637 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39720__$1 = state_39720;
var statearr_39757_39798 = state_39720__$1;
(statearr_39757_39798[(2)] = inst_39637);

(statearr_39757_39798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (14))){
var inst_39664 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39720__$1 = state_39720;
if(cljs.core.truth_(inst_39664)){
var statearr_39758_39799 = state_39720__$1;
(statearr_39758_39799[(1)] = (18));

} else {
var statearr_39759_39800 = state_39720__$1;
(statearr_39759_39800[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (26))){
var inst_39690 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39720__$1 = state_39720;
if(cljs.core.truth_(inst_39690)){
var statearr_39760_39801 = state_39720__$1;
(statearr_39760_39801[(1)] = (30));

} else {
var statearr_39761_39802 = state_39720__$1;
(statearr_39761_39802[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (16))){
var inst_39656 = (state_39720[(2)]);
var inst_39657 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39658 = figwheel.client.heads_up.display_exception.call(null,inst_39657);
var state_39720__$1 = (function (){var statearr_39762 = state_39720;
(statearr_39762[(13)] = inst_39656);

return statearr_39762;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39720__$1,(17),inst_39658);
} else {
if((state_val_39721 === (30))){
var inst_39692 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39693 = figwheel.client.heads_up.display_warning.call(null,inst_39692);
var state_39720__$1 = state_39720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39720__$1,(33),inst_39693);
} else {
if((state_val_39721 === (10))){
var inst_39650 = (state_39720[(2)]);
var state_39720__$1 = state_39720;
var statearr_39763_39803 = state_39720__$1;
(statearr_39763_39803[(2)] = inst_39650);

(statearr_39763_39803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (18))){
var inst_39666 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39667 = figwheel.client.heads_up.display_exception.call(null,inst_39666);
var state_39720__$1 = state_39720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39720__$1,(21),inst_39667);
} else {
if((state_val_39721 === (37))){
var inst_39703 = (state_39720[(2)]);
var state_39720__$1 = state_39720;
var statearr_39764_39804 = state_39720__$1;
(statearr_39764_39804[(2)] = inst_39703);

(statearr_39764_39804[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39721 === (8))){
var inst_39642 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39720__$1 = state_39720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39720__$1,(11),inst_39642);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34504__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34416__auto__,c__34504__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34417__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34417__auto____0 = (function (){
var statearr_39765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39765[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34417__auto__);

(statearr_39765[(1)] = (1));

return statearr_39765;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34417__auto____1 = (function (state_39720){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_39720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e39766){if((e39766 instanceof Object)){
var ex__34420__auto__ = e39766;
var statearr_39767_39805 = state_39720;
(statearr_39767_39805[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39806 = state_39720;
state_39720 = G__39806;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34417__auto__ = function(state_39720){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34417__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34417__auto____1.call(this,state_39720);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34417__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34417__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto__,msg_hist,msg_names,msg))
})();
var state__34506__auto__ = (function (){var statearr_39768 = f__34505__auto__.call(null);
(statearr_39768[(6)] = c__34504__auto__);

return statearr_39768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto__,msg_hist,msg_names,msg))
);

return c__34504__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34504__auto___39835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto___39835,ch){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto___39835,ch){
return (function (state_39821){
var state_val_39822 = (state_39821[(1)]);
if((state_val_39822 === (1))){
var state_39821__$1 = state_39821;
var statearr_39823_39836 = state_39821__$1;
(statearr_39823_39836[(2)] = null);

(statearr_39823_39836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (2))){
var state_39821__$1 = state_39821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39821__$1,(4),ch);
} else {
if((state_val_39822 === (3))){
var inst_39819 = (state_39821[(2)]);
var state_39821__$1 = state_39821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39821__$1,inst_39819);
} else {
if((state_val_39822 === (4))){
var inst_39809 = (state_39821[(7)]);
var inst_39809__$1 = (state_39821[(2)]);
var state_39821__$1 = (function (){var statearr_39824 = state_39821;
(statearr_39824[(7)] = inst_39809__$1);

return statearr_39824;
})();
if(cljs.core.truth_(inst_39809__$1)){
var statearr_39825_39837 = state_39821__$1;
(statearr_39825_39837[(1)] = (5));

} else {
var statearr_39826_39838 = state_39821__$1;
(statearr_39826_39838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (5))){
var inst_39809 = (state_39821[(7)]);
var inst_39811 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39809);
var state_39821__$1 = state_39821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39821__$1,(8),inst_39811);
} else {
if((state_val_39822 === (6))){
var state_39821__$1 = state_39821;
var statearr_39827_39839 = state_39821__$1;
(statearr_39827_39839[(2)] = null);

(statearr_39827_39839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (7))){
var inst_39817 = (state_39821[(2)]);
var state_39821__$1 = state_39821;
var statearr_39828_39840 = state_39821__$1;
(statearr_39828_39840[(2)] = inst_39817);

(statearr_39828_39840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39822 === (8))){
var inst_39813 = (state_39821[(2)]);
var state_39821__$1 = (function (){var statearr_39829 = state_39821;
(statearr_39829[(8)] = inst_39813);

return statearr_39829;
})();
var statearr_39830_39841 = state_39821__$1;
(statearr_39830_39841[(2)] = null);

(statearr_39830_39841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__34504__auto___39835,ch))
;
return ((function (switch__34416__auto__,c__34504__auto___39835,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34417__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34417__auto____0 = (function (){
var statearr_39831 = [null,null,null,null,null,null,null,null,null];
(statearr_39831[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34417__auto__);

(statearr_39831[(1)] = (1));

return statearr_39831;
});
var figwheel$client$heads_up_plugin_$_state_machine__34417__auto____1 = (function (state_39821){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_39821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e39832){if((e39832 instanceof Object)){
var ex__34420__auto__ = e39832;
var statearr_39833_39842 = state_39821;
(statearr_39833_39842[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39843 = state_39821;
state_39821 = G__39843;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34417__auto__ = function(state_39821){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34417__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34417__auto____1.call(this,state_39821);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34417__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34417__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto___39835,ch))
})();
var state__34506__auto__ = (function (){var statearr_39834 = f__34505__auto__.call(null);
(statearr_39834[(6)] = c__34504__auto___39835);

return statearr_39834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto___39835,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto__){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto__){
return (function (state_39849){
var state_val_39850 = (state_39849[(1)]);
if((state_val_39850 === (1))){
var inst_39844 = cljs.core.async.timeout.call(null,(3000));
var state_39849__$1 = state_39849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39849__$1,(2),inst_39844);
} else {
if((state_val_39850 === (2))){
var inst_39846 = (state_39849[(2)]);
var inst_39847 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39849__$1 = (function (){var statearr_39851 = state_39849;
(statearr_39851[(7)] = inst_39846);

return statearr_39851;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39849__$1,inst_39847);
} else {
return null;
}
}
});})(c__34504__auto__))
;
return ((function (switch__34416__auto__,c__34504__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34417__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34417__auto____0 = (function (){
var statearr_39852 = [null,null,null,null,null,null,null,null];
(statearr_39852[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34417__auto__);

(statearr_39852[(1)] = (1));

return statearr_39852;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34417__auto____1 = (function (state_39849){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_39849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e39853){if((e39853 instanceof Object)){
var ex__34420__auto__ = e39853;
var statearr_39854_39856 = state_39849;
(statearr_39854_39856[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39857 = state_39849;
state_39849 = G__39857;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34417__auto__ = function(state_39849){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34417__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34417__auto____1.call(this,state_39849);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34417__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34417__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto__))
})();
var state__34506__auto__ = (function (){var statearr_39855 = f__34505__auto__.call(null);
(statearr_39855[(6)] = c__34504__auto__);

return statearr_39855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto__))
);

return c__34504__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto__,figwheel_version,temp__4657__auto__){
return (function (state_39864){
var state_val_39865 = (state_39864[(1)]);
if((state_val_39865 === (1))){
var inst_39858 = cljs.core.async.timeout.call(null,(2000));
var state_39864__$1 = state_39864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39864__$1,(2),inst_39858);
} else {
if((state_val_39865 === (2))){
var inst_39860 = (state_39864[(2)]);
var inst_39861 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_39862 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39861);
var state_39864__$1 = (function (){var statearr_39866 = state_39864;
(statearr_39866[(7)] = inst_39860);

return statearr_39866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39864__$1,inst_39862);
} else {
return null;
}
}
});})(c__34504__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__34416__auto__,c__34504__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34417__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34417__auto____0 = (function (){
var statearr_39867 = [null,null,null,null,null,null,null,null];
(statearr_39867[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34417__auto__);

(statearr_39867[(1)] = (1));

return statearr_39867;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34417__auto____1 = (function (state_39864){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_39864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e39868){if((e39868 instanceof Object)){
var ex__34420__auto__ = e39868;
var statearr_39869_39871 = state_39864;
(statearr_39869_39871[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39872 = state_39864;
state_39864 = G__39872;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34417__auto__ = function(state_39864){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34417__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34417__auto____1.call(this,state_39864);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34417__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34417__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto__,figwheel_version,temp__4657__auto__))
})();
var state__34506__auto__ = (function (){var statearr_39870 = f__34505__auto__.call(null);
(statearr_39870[(6)] = c__34504__auto__);

return statearr_39870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto__,figwheel_version,temp__4657__auto__))
);

return c__34504__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39873){
var map__39874 = p__39873;
var map__39874__$1 = ((((!((map__39874 == null)))?((((map__39874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39874):map__39874);
var file = cljs.core.get.call(null,map__39874__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39874__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39874__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39876 = "";
var G__39876__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39876),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39876);
var G__39876__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39876__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39876__$1);
if(cljs.core.truth_((function (){var and__27617__auto__ = line;
if(cljs.core.truth_(and__27617__auto__)){
return column;
} else {
return and__27617__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39876__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39876__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39877){
var map__39878 = p__39877;
var map__39878__$1 = ((((!((map__39878 == null)))?((((map__39878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39878):map__39878);
var ed = map__39878__$1;
var exception_data = cljs.core.get.call(null,map__39878__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39878__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_39881 = (function (){var G__39880 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39880),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__39880;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_39881);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39882){
var map__39883 = p__39882;
var map__39883__$1 = ((((!((map__39883 == null)))?((((map__39883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39883):map__39883);
var w = map__39883__$1;
var message = cljs.core.get.call(null,map__39883__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public\\js\\out\\figwheel\\client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public\\js\\out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27617__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27617__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27617__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39885 = cljs.core.seq.call(null,plugins);
var chunk__39886 = null;
var count__39887 = (0);
var i__39888 = (0);
while(true){
if((i__39888 < count__39887)){
var vec__39889 = cljs.core._nth.call(null,chunk__39886,i__39888);
var k = cljs.core.nth.call(null,vec__39889,(0),null);
var plugin = cljs.core.nth.call(null,vec__39889,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39895 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39885,chunk__39886,count__39887,i__39888,pl_39895,vec__39889,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39895.call(null,msg_hist);
});})(seq__39885,chunk__39886,count__39887,i__39888,pl_39895,vec__39889,k,plugin))
);
} else {
}

var G__39896 = seq__39885;
var G__39897 = chunk__39886;
var G__39898 = count__39887;
var G__39899 = (i__39888 + (1));
seq__39885 = G__39896;
chunk__39886 = G__39897;
count__39887 = G__39898;
i__39888 = G__39899;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39885);
if(temp__4657__auto__){
var seq__39885__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39885__$1)){
var c__28449__auto__ = cljs.core.chunk_first.call(null,seq__39885__$1);
var G__39900 = cljs.core.chunk_rest.call(null,seq__39885__$1);
var G__39901 = c__28449__auto__;
var G__39902 = cljs.core.count.call(null,c__28449__auto__);
var G__39903 = (0);
seq__39885 = G__39900;
chunk__39886 = G__39901;
count__39887 = G__39902;
i__39888 = G__39903;
continue;
} else {
var vec__39892 = cljs.core.first.call(null,seq__39885__$1);
var k = cljs.core.nth.call(null,vec__39892,(0),null);
var plugin = cljs.core.nth.call(null,vec__39892,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39904 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39885,chunk__39886,count__39887,i__39888,pl_39904,vec__39892,k,plugin,seq__39885__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39904.call(null,msg_hist);
});})(seq__39885,chunk__39886,count__39887,i__39888,pl_39904,vec__39892,k,plugin,seq__39885__$1,temp__4657__auto__))
);
} else {
}

var G__39905 = cljs.core.next.call(null,seq__39885__$1);
var G__39906 = null;
var G__39907 = (0);
var G__39908 = (0);
seq__39885 = G__39905;
chunk__39886 = G__39906;
count__39887 = G__39907;
i__39888 = G__39908;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__39910 = arguments.length;
switch (G__39910) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39911_39916 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39912_39917 = null;
var count__39913_39918 = (0);
var i__39914_39919 = (0);
while(true){
if((i__39914_39919 < count__39913_39918)){
var msg_39920 = cljs.core._nth.call(null,chunk__39912_39917,i__39914_39919);
figwheel.client.socket.handle_incoming_message.call(null,msg_39920);

var G__39921 = seq__39911_39916;
var G__39922 = chunk__39912_39917;
var G__39923 = count__39913_39918;
var G__39924 = (i__39914_39919 + (1));
seq__39911_39916 = G__39921;
chunk__39912_39917 = G__39922;
count__39913_39918 = G__39923;
i__39914_39919 = G__39924;
continue;
} else {
var temp__4657__auto___39925 = cljs.core.seq.call(null,seq__39911_39916);
if(temp__4657__auto___39925){
var seq__39911_39926__$1 = temp__4657__auto___39925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39911_39926__$1)){
var c__28449__auto___39927 = cljs.core.chunk_first.call(null,seq__39911_39926__$1);
var G__39928 = cljs.core.chunk_rest.call(null,seq__39911_39926__$1);
var G__39929 = c__28449__auto___39927;
var G__39930 = cljs.core.count.call(null,c__28449__auto___39927);
var G__39931 = (0);
seq__39911_39916 = G__39928;
chunk__39912_39917 = G__39929;
count__39913_39918 = G__39930;
i__39914_39919 = G__39931;
continue;
} else {
var msg_39932 = cljs.core.first.call(null,seq__39911_39926__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39932);

var G__39933 = cljs.core.next.call(null,seq__39911_39926__$1);
var G__39934 = null;
var G__39935 = (0);
var G__39936 = (0);
seq__39911_39916 = G__39933;
chunk__39912_39917 = G__39934;
count__39913_39918 = G__39935;
i__39914_39919 = G__39936;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__28761__auto__ = [];
var len__28754__auto___39941 = arguments.length;
var i__28755__auto___39942 = (0);
while(true){
if((i__28755__auto___39942 < len__28754__auto___39941)){
args__28761__auto__.push((arguments[i__28755__auto___39942]));

var G__39943 = (i__28755__auto___39942 + (1));
i__28755__auto___39942 = G__39943;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((0) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28762__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39938){
var map__39939 = p__39938;
var map__39939__$1 = ((((!((map__39939 == null)))?((((map__39939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39939.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39939):map__39939);
var opts = map__39939__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39937){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39937));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39944){if((e39944 instanceof Error)){
var e = e39944;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39944;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39945){
var map__39946 = p__39945;
var map__39946__$1 = ((((!((map__39946 == null)))?((((map__39946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39946):map__39946);
var msg_name = cljs.core.get.call(null,map__39946__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1547003714102