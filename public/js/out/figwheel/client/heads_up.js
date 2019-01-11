// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__28761__auto__ = [];
var len__28754__auto___39312 = arguments.length;
var i__28755__auto___39313 = (0);
while(true){
if((i__28755__auto___39313 < len__28754__auto___39312)){
args__28761__auto__.push((arguments[i__28755__auto___39313]));

var G__39314 = (i__28755__auto___39313 + (1));
i__28755__auto___39313 = G__39314;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((2) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28762__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__39304_39315 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__39305_39316 = null;
var count__39306_39317 = (0);
var i__39307_39318 = (0);
while(true){
if((i__39307_39318 < count__39306_39317)){
var k_39319 = cljs.core._nth.call(null,chunk__39305_39316,i__39307_39318);
e.setAttribute(cljs.core.name.call(null,k_39319),cljs.core.get.call(null,attrs,k_39319));

var G__39320 = seq__39304_39315;
var G__39321 = chunk__39305_39316;
var G__39322 = count__39306_39317;
var G__39323 = (i__39307_39318 + (1));
seq__39304_39315 = G__39320;
chunk__39305_39316 = G__39321;
count__39306_39317 = G__39322;
i__39307_39318 = G__39323;
continue;
} else {
var temp__4657__auto___39324 = cljs.core.seq.call(null,seq__39304_39315);
if(temp__4657__auto___39324){
var seq__39304_39325__$1 = temp__4657__auto___39324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39304_39325__$1)){
var c__28449__auto___39326 = cljs.core.chunk_first.call(null,seq__39304_39325__$1);
var G__39327 = cljs.core.chunk_rest.call(null,seq__39304_39325__$1);
var G__39328 = c__28449__auto___39326;
var G__39329 = cljs.core.count.call(null,c__28449__auto___39326);
var G__39330 = (0);
seq__39304_39315 = G__39327;
chunk__39305_39316 = G__39328;
count__39306_39317 = G__39329;
i__39307_39318 = G__39330;
continue;
} else {
var k_39331 = cljs.core.first.call(null,seq__39304_39325__$1);
e.setAttribute(cljs.core.name.call(null,k_39331),cljs.core.get.call(null,attrs,k_39331));

var G__39332 = cljs.core.next.call(null,seq__39304_39325__$1);
var G__39333 = null;
var G__39334 = (0);
var G__39335 = (0);
seq__39304_39315 = G__39332;
chunk__39305_39316 = G__39333;
count__39306_39317 = G__39334;
i__39307_39318 = G__39335;
continue;
}
} else {
}
}
break;
}

var seq__39308_39336 = cljs.core.seq.call(null,children);
var chunk__39309_39337 = null;
var count__39310_39338 = (0);
var i__39311_39339 = (0);
while(true){
if((i__39311_39339 < count__39310_39338)){
var ch_39340 = cljs.core._nth.call(null,chunk__39309_39337,i__39311_39339);
e.appendChild(ch_39340);

var G__39341 = seq__39308_39336;
var G__39342 = chunk__39309_39337;
var G__39343 = count__39310_39338;
var G__39344 = (i__39311_39339 + (1));
seq__39308_39336 = G__39341;
chunk__39309_39337 = G__39342;
count__39310_39338 = G__39343;
i__39311_39339 = G__39344;
continue;
} else {
var temp__4657__auto___39345 = cljs.core.seq.call(null,seq__39308_39336);
if(temp__4657__auto___39345){
var seq__39308_39346__$1 = temp__4657__auto___39345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39308_39346__$1)){
var c__28449__auto___39347 = cljs.core.chunk_first.call(null,seq__39308_39346__$1);
var G__39348 = cljs.core.chunk_rest.call(null,seq__39308_39346__$1);
var G__39349 = c__28449__auto___39347;
var G__39350 = cljs.core.count.call(null,c__28449__auto___39347);
var G__39351 = (0);
seq__39308_39336 = G__39348;
chunk__39309_39337 = G__39349;
count__39310_39338 = G__39350;
i__39311_39339 = G__39351;
continue;
} else {
var ch_39352 = cljs.core.first.call(null,seq__39308_39346__$1);
e.appendChild(ch_39352);

var G__39353 = cljs.core.next.call(null,seq__39308_39346__$1);
var G__39354 = null;
var G__39355 = (0);
var G__39356 = (0);
seq__39308_39336 = G__39353;
chunk__39309_39337 = G__39354;
count__39310_39338 = G__39355;
i__39311_39339 = G__39356;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq39301){
var G__39302 = cljs.core.first.call(null,seq39301);
var seq39301__$1 = cljs.core.next.call(null,seq39301);
var G__39303 = cljs.core.first.call(null,seq39301__$1);
var seq39301__$2 = cljs.core.next.call(null,seq39301__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__39302,G__39303,seq39301__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__28563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28564__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28565__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28566__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28567__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__28563__auto__,prefer_table__28564__auto__,method_cache__28565__auto__,cached_hierarchy__28566__auto__,hierarchy__28567__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__28563__auto__,prefer_table__28564__auto__,method_cache__28565__auto__,cached_hierarchy__28566__auto__,hierarchy__28567__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28567__auto__,method_table__28563__auto__,prefer_table__28564__auto__,method_cache__28565__auto__,cached_hierarchy__28566__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_39357 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: left;")].join('')], null));
el_39357.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_39357.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_39357.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_39357);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__39358,st_map){
var map__39359 = p__39358;
var map__39359__$1 = ((((!((map__39359 == null)))?((((map__39359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39359):map__39359);
var container_el = cljs.core.get.call(null,map__39359__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__39359,map__39359__$1,container_el){
return (function (p__39361){
var vec__39362 = p__39361;
var k = cljs.core.nth.call(null,vec__39362,(0),null);
var v = cljs.core.nth.call(null,vec__39362,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__39359,map__39359__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__39365,dom_str){
var map__39366 = p__39365;
var map__39366__$1 = ((((!((map__39366 == null)))?((((map__39366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39366):map__39366);
var c = map__39366__$1;
var content_area_el = cljs.core.get.call(null,map__39366__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__39368){
var map__39369 = p__39368;
var map__39369__$1 = ((((!((map__39369 == null)))?((((map__39369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39369):map__39369);
var content_area_el = cljs.core.get.call(null,map__39369__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__34504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto__){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto__){
return (function (state_39386){
var state_val_39387 = (state_39386[(1)]);
if((state_val_39387 === (1))){
var inst_39371 = (state_39386[(7)]);
var inst_39371__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_39372 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_39373 = ["10px","10px","100%","68px","1.0"];
var inst_39374 = cljs.core.PersistentHashMap.fromArrays(inst_39372,inst_39373);
var inst_39375 = cljs.core.merge.call(null,inst_39374,style);
var inst_39376 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39371__$1,inst_39375);
var inst_39377 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_39371__$1,msg);
var inst_39378 = cljs.core.async.timeout.call(null,(300));
var state_39386__$1 = (function (){var statearr_39388 = state_39386;
(statearr_39388[(7)] = inst_39371__$1);

(statearr_39388[(8)] = inst_39376);

(statearr_39388[(9)] = inst_39377);

return statearr_39388;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39386__$1,(2),inst_39378);
} else {
if((state_val_39387 === (2))){
var inst_39371 = (state_39386[(7)]);
var inst_39380 = (state_39386[(2)]);
var inst_39381 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_39382 = ["auto"];
var inst_39383 = cljs.core.PersistentHashMap.fromArrays(inst_39381,inst_39382);
var inst_39384 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39371,inst_39383);
var state_39386__$1 = (function (){var statearr_39389 = state_39386;
(statearr_39389[(10)] = inst_39380);

return statearr_39389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39386__$1,inst_39384);
} else {
return null;
}
}
});})(c__34504__auto__))
;
return ((function (switch__34416__auto__,c__34504__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__34417__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__34417__auto____0 = (function (){
var statearr_39390 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39390[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__34417__auto__);

(statearr_39390[(1)] = (1));

return statearr_39390;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__34417__auto____1 = (function (state_39386){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_39386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e39391){if((e39391 instanceof Object)){
var ex__34420__auto__ = e39391;
var statearr_39392_39394 = state_39386;
(statearr_39392_39394[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39395 = state_39386;
state_39386 = G__39395;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__34417__auto__ = function(state_39386){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__34417__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__34417__auto____1.call(this,state_39386);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__34417__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__34417__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto__))
})();
var state__34506__auto__ = (function (){var statearr_39393 = f__34505__auto__.call(null);
(statearr_39393[(6)] = c__34504__auto__);

return statearr_39393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto__))
);

return c__34504__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__39397 = arguments.length;
switch (G__39397) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__39399){
var map__39400 = p__39399;
var map__39400__$1 = ((((!((map__39400 == null)))?((((map__39400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39400):map__39400);
var file = cljs.core.get.call(null,map__39400__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39400__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39400__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__27629__auto__ = file;
if(cljs.core.truth_(or__27629__auto__)){
return or__27629__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__39402){
var vec__39403 = p__39402;
var typ = cljs.core.nth.call(null,vec__39403,(0),null);
var line_number = cljs.core.nth.call(null,vec__39403,(1),null);
var line = cljs.core.nth.call(null,vec__39403,(2),null);
var pred__39406 = cljs.core._EQ_;
var expr__39407 = typ;
if(cljs.core.truth_(pred__39406.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__39407))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__39406.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__39407))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__39406.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__39407))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__39409_SHARP_){
return cljs.core.update_in.call(null,p1__39409_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__39410_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__39410_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__39413){
var map__39414 = p__39413;
var map__39414__$1 = ((((!((map__39414 == null)))?((((map__39414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39414):map__39414);
var exception = map__39414__$1;
var message = cljs.core.get.call(null,map__39414__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__39414__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__39414__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__39414__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__39414__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__39414__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__39414__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__39414__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__39414__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__39414__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__39414__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__27617__auto__ = file;
if(cljs.core.truth_(and__27617__auto__)){
return line;
} else {
return and__27617__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__39414,map__39414__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__39411_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39411_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__39414,map__39414__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style=\"white-space: pre-wrap\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__39414,map__39414__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__39412_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__39412_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__39412_SHARP_)))].join('');
});})(last_message,map__39414,map__39414__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__39416){
var map__39417 = p__39416;
var map__39417__$1 = ((((!((map__39417 == null)))?((((map__39417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39417):map__39417);
var file = cljs.core.get.call(null,map__39417__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39417__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39417__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__39420 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__39420__$1 = ((((!((map__39420 == null)))?((((map__39420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39420.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39420):map__39420);
var head = cljs.core.get.call(null,map__39420__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__39420__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__39420__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__39420__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__39420__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39420__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39420__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__39423){
var map__39424 = p__39423;
var map__39424__$1 = ((((!((map__39424 == null)))?((((map__39424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39424.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39424):map__39424);
var warning_data = map__39424__$1;
var file = cljs.core.get.call(null,map__39424__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39424__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39424__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__39424__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__39424__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__27617__auto__ = file;
if(cljs.core.truth_(and__27617__auto__)){
return line;
} else {
return and__27617__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__39424,map__39424__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__39422_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39422_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__39424,map__39424__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__39426 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__39426__$1 = ((((!((map__39426 == null)))?((((map__39426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39426):map__39426);
var head = cljs.core.get.call(null,map__39426__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__39426__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__39426__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__39426__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__39426__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39426__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39426__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__39428){
var map__39429 = p__39428;
var map__39429__$1 = ((((!((map__39429 == null)))?((((map__39429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39429):map__39429);
var warning_data = map__39429__$1;
var message = cljs.core.get.call(null,map__39429__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__39429__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39429__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39429__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39431 = message;
var G__39431__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39431),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39431);
var G__39431__$2 = (cljs.core.truth_((function (){var and__27617__auto__ = line;
if(cljs.core.truth_(and__27617__auto__)){
return column;
} else {
return and__27617__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39431__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__39431__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39431__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__39431__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__39432){
var map__39433 = p__39432;
var map__39433__$1 = ((((!((map__39433 == null)))?((((map__39433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39433):map__39433);
var warning_data = map__39433__$1;
var message = cljs.core.get.call(null,map__39433__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__39433__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39433__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39433__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__39435 = figwheel.client.heads_up.ensure_container.call(null);
var map__39435__$1 = ((((!((map__39435 == null)))?((((map__39435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39435):map__39435);
var content_area_el = cljs.core.get.call(null,map__39435__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__34504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto__){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto__){
return (function (state_39454){
var state_val_39455 = (state_39454[(1)]);
if((state_val_39455 === (1))){
var inst_39437 = (state_39454[(7)]);
var inst_39437__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_39438 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_39439 = ["0.0"];
var inst_39440 = cljs.core.PersistentHashMap.fromArrays(inst_39438,inst_39439);
var inst_39441 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39437__$1,inst_39440);
var inst_39442 = cljs.core.async.timeout.call(null,(300));
var state_39454__$1 = (function (){var statearr_39456 = state_39454;
(statearr_39456[(8)] = inst_39441);

(statearr_39456[(7)] = inst_39437__$1);

return statearr_39456;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39454__$1,(2),inst_39442);
} else {
if((state_val_39455 === (2))){
var inst_39437 = (state_39454[(7)]);
var inst_39444 = (state_39454[(2)]);
var inst_39445 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_39446 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_39447 = cljs.core.PersistentHashMap.fromArrays(inst_39445,inst_39446);
var inst_39448 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39437,inst_39447);
var inst_39449 = cljs.core.async.timeout.call(null,(200));
var state_39454__$1 = (function (){var statearr_39457 = state_39454;
(statearr_39457[(9)] = inst_39448);

(statearr_39457[(10)] = inst_39444);

return statearr_39457;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39454__$1,(3),inst_39449);
} else {
if((state_val_39455 === (3))){
var inst_39437 = (state_39454[(7)]);
var inst_39451 = (state_39454[(2)]);
var inst_39452 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_39437,"");
var state_39454__$1 = (function (){var statearr_39458 = state_39454;
(statearr_39458[(11)] = inst_39451);

return statearr_39458;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39454__$1,inst_39452);
} else {
return null;
}
}
}
});})(c__34504__auto__))
;
return ((function (switch__34416__auto__,c__34504__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__34417__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__34417__auto____0 = (function (){
var statearr_39459 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39459[(0)] = figwheel$client$heads_up$clear_$_state_machine__34417__auto__);

(statearr_39459[(1)] = (1));

return statearr_39459;
});
var figwheel$client$heads_up$clear_$_state_machine__34417__auto____1 = (function (state_39454){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_39454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e39460){if((e39460 instanceof Object)){
var ex__34420__auto__ = e39460;
var statearr_39461_39463 = state_39454;
(statearr_39461_39463[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39464 = state_39454;
state_39454 = G__39464;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__34417__auto__ = function(state_39454){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__34417__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__34417__auto____1.call(this,state_39454);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__34417__auto____0;
figwheel$client$heads_up$clear_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__34417__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto__))
})();
var state__34506__auto__ = (function (){var statearr_39462 = f__34505__auto__.call(null);
(statearr_39462[(6)] = c__34504__auto__);

return statearr_39462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto__))
);

return c__34504__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__34504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto__){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto__){
return (function (state_39475){
var state_val_39476 = (state_39475[(1)]);
if((state_val_39476 === (1))){
var inst_39465 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_39475__$1 = state_39475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39475__$1,(2),inst_39465);
} else {
if((state_val_39476 === (2))){
var inst_39467 = (state_39475[(2)]);
var inst_39468 = cljs.core.async.timeout.call(null,(400));
var state_39475__$1 = (function (){var statearr_39477 = state_39475;
(statearr_39477[(7)] = inst_39467);

return statearr_39477;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39475__$1,(3),inst_39468);
} else {
if((state_val_39476 === (3))){
var inst_39470 = (state_39475[(2)]);
var inst_39471 = figwheel.client.heads_up.clear.call(null);
var state_39475__$1 = (function (){var statearr_39478 = state_39475;
(statearr_39478[(8)] = inst_39470);

return statearr_39478;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39475__$1,(4),inst_39471);
} else {
if((state_val_39476 === (4))){
var inst_39473 = (state_39475[(2)]);
var state_39475__$1 = state_39475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39475__$1,inst_39473);
} else {
return null;
}
}
}
}
});})(c__34504__auto__))
;
return ((function (switch__34416__auto__,c__34504__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__34417__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__34417__auto____0 = (function (){
var statearr_39479 = [null,null,null,null,null,null,null,null,null];
(statearr_39479[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__34417__auto__);

(statearr_39479[(1)] = (1));

return statearr_39479;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__34417__auto____1 = (function (state_39475){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_39475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e39480){if((e39480 instanceof Object)){
var ex__34420__auto__ = e39480;
var statearr_39481_39483 = state_39475;
(statearr_39481_39483[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39484 = state_39475;
state_39475 = G__39484;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__34417__auto__ = function(state_39475){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__34417__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__34417__auto____1.call(this,state_39475);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__34417__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__34417__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto__))
})();
var state__34506__auto__ = (function (){var statearr_39482 = f__34505__auto__.call(null);
(statearr_39482[(6)] = c__34504__auto__);

return statearr_39482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto__))
);

return c__34504__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1547003713613