// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39199){
var map__39200 = p__39199;
var map__39200__$1 = ((((!((map__39200 == null)))?((((map__39200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39200):map__39200);
var m = map__39200__$1;
var n = cljs.core.get.call(null,map__39200__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39200__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39202_39224 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39203_39225 = null;
var count__39204_39226 = (0);
var i__39205_39227 = (0);
while(true){
if((i__39205_39227 < count__39204_39226)){
var f_39228 = cljs.core._nth.call(null,chunk__39203_39225,i__39205_39227);
cljs.core.println.call(null,"  ",f_39228);

var G__39229 = seq__39202_39224;
var G__39230 = chunk__39203_39225;
var G__39231 = count__39204_39226;
var G__39232 = (i__39205_39227 + (1));
seq__39202_39224 = G__39229;
chunk__39203_39225 = G__39230;
count__39204_39226 = G__39231;
i__39205_39227 = G__39232;
continue;
} else {
var temp__4657__auto___39233 = cljs.core.seq.call(null,seq__39202_39224);
if(temp__4657__auto___39233){
var seq__39202_39234__$1 = temp__4657__auto___39233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39202_39234__$1)){
var c__28449__auto___39235 = cljs.core.chunk_first.call(null,seq__39202_39234__$1);
var G__39236 = cljs.core.chunk_rest.call(null,seq__39202_39234__$1);
var G__39237 = c__28449__auto___39235;
var G__39238 = cljs.core.count.call(null,c__28449__auto___39235);
var G__39239 = (0);
seq__39202_39224 = G__39236;
chunk__39203_39225 = G__39237;
count__39204_39226 = G__39238;
i__39205_39227 = G__39239;
continue;
} else {
var f_39240 = cljs.core.first.call(null,seq__39202_39234__$1);
cljs.core.println.call(null,"  ",f_39240);

var G__39241 = cljs.core.next.call(null,seq__39202_39234__$1);
var G__39242 = null;
var G__39243 = (0);
var G__39244 = (0);
seq__39202_39224 = G__39241;
chunk__39203_39225 = G__39242;
count__39204_39226 = G__39243;
i__39205_39227 = G__39244;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39245 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27629__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27629__auto__)){
return or__27629__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39245);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39245)))?cljs.core.second.call(null,arglists_39245):arglists_39245));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39206_39246 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39207_39247 = null;
var count__39208_39248 = (0);
var i__39209_39249 = (0);
while(true){
if((i__39209_39249 < count__39208_39248)){
var vec__39210_39250 = cljs.core._nth.call(null,chunk__39207_39247,i__39209_39249);
var name_39251 = cljs.core.nth.call(null,vec__39210_39250,(0),null);
var map__39213_39252 = cljs.core.nth.call(null,vec__39210_39250,(1),null);
var map__39213_39253__$1 = ((((!((map__39213_39252 == null)))?((((map__39213_39252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39213_39252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39213_39252):map__39213_39252);
var doc_39254 = cljs.core.get.call(null,map__39213_39253__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39255 = cljs.core.get.call(null,map__39213_39253__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39251);

cljs.core.println.call(null," ",arglists_39255);

if(cljs.core.truth_(doc_39254)){
cljs.core.println.call(null," ",doc_39254);
} else {
}

var G__39256 = seq__39206_39246;
var G__39257 = chunk__39207_39247;
var G__39258 = count__39208_39248;
var G__39259 = (i__39209_39249 + (1));
seq__39206_39246 = G__39256;
chunk__39207_39247 = G__39257;
count__39208_39248 = G__39258;
i__39209_39249 = G__39259;
continue;
} else {
var temp__4657__auto___39260 = cljs.core.seq.call(null,seq__39206_39246);
if(temp__4657__auto___39260){
var seq__39206_39261__$1 = temp__4657__auto___39260;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39206_39261__$1)){
var c__28449__auto___39262 = cljs.core.chunk_first.call(null,seq__39206_39261__$1);
var G__39263 = cljs.core.chunk_rest.call(null,seq__39206_39261__$1);
var G__39264 = c__28449__auto___39262;
var G__39265 = cljs.core.count.call(null,c__28449__auto___39262);
var G__39266 = (0);
seq__39206_39246 = G__39263;
chunk__39207_39247 = G__39264;
count__39208_39248 = G__39265;
i__39209_39249 = G__39266;
continue;
} else {
var vec__39215_39267 = cljs.core.first.call(null,seq__39206_39261__$1);
var name_39268 = cljs.core.nth.call(null,vec__39215_39267,(0),null);
var map__39218_39269 = cljs.core.nth.call(null,vec__39215_39267,(1),null);
var map__39218_39270__$1 = ((((!((map__39218_39269 == null)))?((((map__39218_39269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39218_39269.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39218_39269):map__39218_39269);
var doc_39271 = cljs.core.get.call(null,map__39218_39270__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39272 = cljs.core.get.call(null,map__39218_39270__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39268);

cljs.core.println.call(null," ",arglists_39272);

if(cljs.core.truth_(doc_39271)){
cljs.core.println.call(null," ",doc_39271);
} else {
}

var G__39273 = cljs.core.next.call(null,seq__39206_39261__$1);
var G__39274 = null;
var G__39275 = (0);
var G__39276 = (0);
seq__39206_39246 = G__39273;
chunk__39207_39247 = G__39274;
count__39208_39248 = G__39275;
i__39209_39249 = G__39276;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__39220 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39221 = null;
var count__39222 = (0);
var i__39223 = (0);
while(true){
if((i__39223 < count__39222)){
var role = cljs.core._nth.call(null,chunk__39221,i__39223);
var temp__4657__auto___39277__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39277__$1)){
var spec_39278 = temp__4657__auto___39277__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_39278));
} else {
}

var G__39279 = seq__39220;
var G__39280 = chunk__39221;
var G__39281 = count__39222;
var G__39282 = (i__39223 + (1));
seq__39220 = G__39279;
chunk__39221 = G__39280;
count__39222 = G__39281;
i__39223 = G__39282;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__39220);
if(temp__4657__auto____$1){
var seq__39220__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39220__$1)){
var c__28449__auto__ = cljs.core.chunk_first.call(null,seq__39220__$1);
var G__39283 = cljs.core.chunk_rest.call(null,seq__39220__$1);
var G__39284 = c__28449__auto__;
var G__39285 = cljs.core.count.call(null,c__28449__auto__);
var G__39286 = (0);
seq__39220 = G__39283;
chunk__39221 = G__39284;
count__39222 = G__39285;
i__39223 = G__39286;
continue;
} else {
var role = cljs.core.first.call(null,seq__39220__$1);
var temp__4657__auto___39287__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39287__$2)){
var spec_39288 = temp__4657__auto___39287__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_39288));
} else {
}

var G__39289 = cljs.core.next.call(null,seq__39220__$1);
var G__39290 = null;
var G__39291 = (0);
var G__39292 = (0);
seq__39220 = G__39289;
chunk__39221 = G__39290;
count__39222 = G__39291;
i__39223 = G__39292;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1547003713194