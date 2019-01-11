// Compiled by ClojureScript 1.9.671 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("@pupeno/xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__40097,handler){
var map__40098 = p__40097;
var map__40098__$1 = ((((!((map__40098 == null)))?((((map__40098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40098):map__40098);
var uri = cljs.core.get.call(null,map__40098__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__40098__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__40098__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__40098__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__40098__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__40098__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__40098__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__40098,map__40098__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__40096_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__40096_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__40098,map__40098__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___40110 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___40110)){
var response_type_40111 = temp__4657__auto___40110;
this$__$1.responseType = cljs.core.name.call(null,response_type_40111);
} else {
}

var seq__40100_40112 = cljs.core.seq.call(null,headers);
var chunk__40101_40113 = null;
var count__40102_40114 = (0);
var i__40103_40115 = (0);
while(true){
if((i__40103_40115 < count__40102_40114)){
var vec__40104_40116 = cljs.core._nth.call(null,chunk__40101_40113,i__40103_40115);
var k_40117 = cljs.core.nth.call(null,vec__40104_40116,(0),null);
var v_40118 = cljs.core.nth.call(null,vec__40104_40116,(1),null);
this$__$1.setRequestHeader(k_40117,v_40118);

var G__40119 = seq__40100_40112;
var G__40120 = chunk__40101_40113;
var G__40121 = count__40102_40114;
var G__40122 = (i__40103_40115 + (1));
seq__40100_40112 = G__40119;
chunk__40101_40113 = G__40120;
count__40102_40114 = G__40121;
i__40103_40115 = G__40122;
continue;
} else {
var temp__4657__auto___40123 = cljs.core.seq.call(null,seq__40100_40112);
if(temp__4657__auto___40123){
var seq__40100_40124__$1 = temp__4657__auto___40123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40100_40124__$1)){
var c__28449__auto___40125 = cljs.core.chunk_first.call(null,seq__40100_40124__$1);
var G__40126 = cljs.core.chunk_rest.call(null,seq__40100_40124__$1);
var G__40127 = c__28449__auto___40125;
var G__40128 = cljs.core.count.call(null,c__28449__auto___40125);
var G__40129 = (0);
seq__40100_40112 = G__40126;
chunk__40101_40113 = G__40127;
count__40102_40114 = G__40128;
i__40103_40115 = G__40129;
continue;
} else {
var vec__40107_40130 = cljs.core.first.call(null,seq__40100_40124__$1);
var k_40131 = cljs.core.nth.call(null,vec__40107_40130,(0),null);
var v_40132 = cljs.core.nth.call(null,vec__40107_40130,(1),null);
this$__$1.setRequestHeader(k_40131,v_40132);

var G__40133 = cljs.core.next.call(null,seq__40100_40124__$1);
var G__40134 = null;
var G__40135 = (0);
var G__40136 = (0);
seq__40100_40112 = G__40133;
chunk__40101_40113 = G__40134;
count__40102_40114 = G__40135;
i__40103_40115 = G__40136;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__27629__auto__ = body;
if(cljs.core.truth_(or__27629__auto__)){
return or__27629__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1547003766018