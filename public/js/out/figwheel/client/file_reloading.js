// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27629__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27629__auto__){
return or__27629__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27629__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__27629__auto__)){
return or__27629__auto__;
} else {
var or__27629__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__27629__auto____$1)){
return or__27629__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37725_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37725_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37726 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37727 = null;
var count__37728 = (0);
var i__37729 = (0);
while(true){
if((i__37729 < count__37728)){
var n = cljs.core._nth.call(null,chunk__37727,i__37729);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37730 = seq__37726;
var G__37731 = chunk__37727;
var G__37732 = count__37728;
var G__37733 = (i__37729 + (1));
seq__37726 = G__37730;
chunk__37727 = G__37731;
count__37728 = G__37732;
i__37729 = G__37733;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37726);
if(temp__4657__auto__){
var seq__37726__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37726__$1)){
var c__28449__auto__ = cljs.core.chunk_first.call(null,seq__37726__$1);
var G__37734 = cljs.core.chunk_rest.call(null,seq__37726__$1);
var G__37735 = c__28449__auto__;
var G__37736 = cljs.core.count.call(null,c__28449__auto__);
var G__37737 = (0);
seq__37726 = G__37734;
chunk__37727 = G__37735;
count__37728 = G__37736;
i__37729 = G__37737;
continue;
} else {
var n = cljs.core.first.call(null,seq__37726__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37738 = cljs.core.next.call(null,seq__37726__$1);
var G__37739 = null;
var G__37740 = (0);
var G__37741 = (0);
seq__37726 = G__37738;
chunk__37727 = G__37739;
count__37728 = G__37740;
i__37729 = G__37741;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__37742){
var vec__37743 = p__37742;
var _ = cljs.core.nth.call(null,vec__37743,(0),null);
var v = cljs.core.nth.call(null,vec__37743,(1),null);
var and__27617__auto__ = v;
if(cljs.core.truth_(and__27617__auto__)){
return v.call(null,dep);
} else {
return and__27617__auto__;
}
}),cljs.core.filter.call(null,(function (p__37746){
var vec__37747 = p__37746;
var k = cljs.core.nth.call(null,vec__37747,(0),null);
var v = cljs.core.nth.call(null,vec__37747,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37759_37767 = cljs.core.seq.call(null,deps);
var chunk__37760_37768 = null;
var count__37761_37769 = (0);
var i__37762_37770 = (0);
while(true){
if((i__37762_37770 < count__37761_37769)){
var dep_37771 = cljs.core._nth.call(null,chunk__37760_37768,i__37762_37770);
if(cljs.core.truth_((function (){var and__27617__auto__ = dep_37771;
if(cljs.core.truth_(and__27617__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37771));
} else {
return and__27617__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37771,(depth + (1)),state);
} else {
}

var G__37772 = seq__37759_37767;
var G__37773 = chunk__37760_37768;
var G__37774 = count__37761_37769;
var G__37775 = (i__37762_37770 + (1));
seq__37759_37767 = G__37772;
chunk__37760_37768 = G__37773;
count__37761_37769 = G__37774;
i__37762_37770 = G__37775;
continue;
} else {
var temp__4657__auto___37776 = cljs.core.seq.call(null,seq__37759_37767);
if(temp__4657__auto___37776){
var seq__37759_37777__$1 = temp__4657__auto___37776;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37759_37777__$1)){
var c__28449__auto___37778 = cljs.core.chunk_first.call(null,seq__37759_37777__$1);
var G__37779 = cljs.core.chunk_rest.call(null,seq__37759_37777__$1);
var G__37780 = c__28449__auto___37778;
var G__37781 = cljs.core.count.call(null,c__28449__auto___37778);
var G__37782 = (0);
seq__37759_37767 = G__37779;
chunk__37760_37768 = G__37780;
count__37761_37769 = G__37781;
i__37762_37770 = G__37782;
continue;
} else {
var dep_37783 = cljs.core.first.call(null,seq__37759_37777__$1);
if(cljs.core.truth_((function (){var and__27617__auto__ = dep_37783;
if(cljs.core.truth_(and__27617__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37783));
} else {
return and__27617__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37783,(depth + (1)),state);
} else {
}

var G__37784 = cljs.core.next.call(null,seq__37759_37777__$1);
var G__37785 = null;
var G__37786 = (0);
var G__37787 = (0);
seq__37759_37767 = G__37784;
chunk__37760_37768 = G__37785;
count__37761_37769 = G__37786;
i__37762_37770 = G__37787;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37763){
var vec__37764 = p__37763;
var seq__37765 = cljs.core.seq.call(null,vec__37764);
var first__37766 = cljs.core.first.call(null,seq__37765);
var seq__37765__$1 = cljs.core.next.call(null,seq__37765);
var x = first__37766;
var xs = seq__37765__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37764,seq__37765,first__37766,seq__37765__$1,x,xs,get_deps__$1){
return (function (p1__37750_SHARP_){
return clojure.set.difference.call(null,p1__37750_SHARP_,x);
});})(vec__37764,seq__37765,first__37766,seq__37765__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37788 = cljs.core.seq.call(null,provides);
var chunk__37789 = null;
var count__37790 = (0);
var i__37791 = (0);
while(true){
if((i__37791 < count__37790)){
var prov = cljs.core._nth.call(null,chunk__37789,i__37791);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37792_37800 = cljs.core.seq.call(null,requires);
var chunk__37793_37801 = null;
var count__37794_37802 = (0);
var i__37795_37803 = (0);
while(true){
if((i__37795_37803 < count__37794_37802)){
var req_37804 = cljs.core._nth.call(null,chunk__37793_37801,i__37795_37803);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37804,prov);

var G__37805 = seq__37792_37800;
var G__37806 = chunk__37793_37801;
var G__37807 = count__37794_37802;
var G__37808 = (i__37795_37803 + (1));
seq__37792_37800 = G__37805;
chunk__37793_37801 = G__37806;
count__37794_37802 = G__37807;
i__37795_37803 = G__37808;
continue;
} else {
var temp__4657__auto___37809 = cljs.core.seq.call(null,seq__37792_37800);
if(temp__4657__auto___37809){
var seq__37792_37810__$1 = temp__4657__auto___37809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37792_37810__$1)){
var c__28449__auto___37811 = cljs.core.chunk_first.call(null,seq__37792_37810__$1);
var G__37812 = cljs.core.chunk_rest.call(null,seq__37792_37810__$1);
var G__37813 = c__28449__auto___37811;
var G__37814 = cljs.core.count.call(null,c__28449__auto___37811);
var G__37815 = (0);
seq__37792_37800 = G__37812;
chunk__37793_37801 = G__37813;
count__37794_37802 = G__37814;
i__37795_37803 = G__37815;
continue;
} else {
var req_37816 = cljs.core.first.call(null,seq__37792_37810__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37816,prov);

var G__37817 = cljs.core.next.call(null,seq__37792_37810__$1);
var G__37818 = null;
var G__37819 = (0);
var G__37820 = (0);
seq__37792_37800 = G__37817;
chunk__37793_37801 = G__37818;
count__37794_37802 = G__37819;
i__37795_37803 = G__37820;
continue;
}
} else {
}
}
break;
}

var G__37821 = seq__37788;
var G__37822 = chunk__37789;
var G__37823 = count__37790;
var G__37824 = (i__37791 + (1));
seq__37788 = G__37821;
chunk__37789 = G__37822;
count__37790 = G__37823;
i__37791 = G__37824;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37788);
if(temp__4657__auto__){
var seq__37788__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37788__$1)){
var c__28449__auto__ = cljs.core.chunk_first.call(null,seq__37788__$1);
var G__37825 = cljs.core.chunk_rest.call(null,seq__37788__$1);
var G__37826 = c__28449__auto__;
var G__37827 = cljs.core.count.call(null,c__28449__auto__);
var G__37828 = (0);
seq__37788 = G__37825;
chunk__37789 = G__37826;
count__37790 = G__37827;
i__37791 = G__37828;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37788__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37796_37829 = cljs.core.seq.call(null,requires);
var chunk__37797_37830 = null;
var count__37798_37831 = (0);
var i__37799_37832 = (0);
while(true){
if((i__37799_37832 < count__37798_37831)){
var req_37833 = cljs.core._nth.call(null,chunk__37797_37830,i__37799_37832);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37833,prov);

var G__37834 = seq__37796_37829;
var G__37835 = chunk__37797_37830;
var G__37836 = count__37798_37831;
var G__37837 = (i__37799_37832 + (1));
seq__37796_37829 = G__37834;
chunk__37797_37830 = G__37835;
count__37798_37831 = G__37836;
i__37799_37832 = G__37837;
continue;
} else {
var temp__4657__auto___37838__$1 = cljs.core.seq.call(null,seq__37796_37829);
if(temp__4657__auto___37838__$1){
var seq__37796_37839__$1 = temp__4657__auto___37838__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37796_37839__$1)){
var c__28449__auto___37840 = cljs.core.chunk_first.call(null,seq__37796_37839__$1);
var G__37841 = cljs.core.chunk_rest.call(null,seq__37796_37839__$1);
var G__37842 = c__28449__auto___37840;
var G__37843 = cljs.core.count.call(null,c__28449__auto___37840);
var G__37844 = (0);
seq__37796_37829 = G__37841;
chunk__37797_37830 = G__37842;
count__37798_37831 = G__37843;
i__37799_37832 = G__37844;
continue;
} else {
var req_37845 = cljs.core.first.call(null,seq__37796_37839__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37845,prov);

var G__37846 = cljs.core.next.call(null,seq__37796_37839__$1);
var G__37847 = null;
var G__37848 = (0);
var G__37849 = (0);
seq__37796_37829 = G__37846;
chunk__37797_37830 = G__37847;
count__37798_37831 = G__37848;
i__37799_37832 = G__37849;
continue;
}
} else {
}
}
break;
}

var G__37850 = cljs.core.next.call(null,seq__37788__$1);
var G__37851 = null;
var G__37852 = (0);
var G__37853 = (0);
seq__37788 = G__37850;
chunk__37789 = G__37851;
count__37790 = G__37852;
i__37791 = G__37853;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37854_37858 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37855_37859 = null;
var count__37856_37860 = (0);
var i__37857_37861 = (0);
while(true){
if((i__37857_37861 < count__37856_37860)){
var ns_37862 = cljs.core._nth.call(null,chunk__37855_37859,i__37857_37861);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37862);

var G__37863 = seq__37854_37858;
var G__37864 = chunk__37855_37859;
var G__37865 = count__37856_37860;
var G__37866 = (i__37857_37861 + (1));
seq__37854_37858 = G__37863;
chunk__37855_37859 = G__37864;
count__37856_37860 = G__37865;
i__37857_37861 = G__37866;
continue;
} else {
var temp__4657__auto___37867 = cljs.core.seq.call(null,seq__37854_37858);
if(temp__4657__auto___37867){
var seq__37854_37868__$1 = temp__4657__auto___37867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37854_37868__$1)){
var c__28449__auto___37869 = cljs.core.chunk_first.call(null,seq__37854_37868__$1);
var G__37870 = cljs.core.chunk_rest.call(null,seq__37854_37868__$1);
var G__37871 = c__28449__auto___37869;
var G__37872 = cljs.core.count.call(null,c__28449__auto___37869);
var G__37873 = (0);
seq__37854_37858 = G__37870;
chunk__37855_37859 = G__37871;
count__37856_37860 = G__37872;
i__37857_37861 = G__37873;
continue;
} else {
var ns_37874 = cljs.core.first.call(null,seq__37854_37868__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37874);

var G__37875 = cljs.core.next.call(null,seq__37854_37868__$1);
var G__37876 = null;
var G__37877 = (0);
var G__37878 = (0);
seq__37854_37858 = G__37875;
chunk__37855_37859 = G__37876;
count__37856_37860 = G__37877;
i__37857_37861 = G__37878;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__27629__auto__ = goog.require__;
if(cljs.core.truth_(or__27629__auto__)){
return or__27629__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37879__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37880__i = 0, G__37880__a = new Array(arguments.length -  0);
while (G__37880__i < G__37880__a.length) {G__37880__a[G__37880__i] = arguments[G__37880__i + 0]; ++G__37880__i;}
  args = new cljs.core.IndexedSeq(G__37880__a,0,null);
} 
return G__37879__delegate.call(this,args);};
G__37879.cljs$lang$maxFixedArity = 0;
G__37879.cljs$lang$applyTo = (function (arglist__37881){
var args = cljs.core.seq(arglist__37881);
return G__37879__delegate(args);
});
G__37879.cljs$core$IFn$_invoke$arity$variadic = G__37879__delegate;
return G__37879;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37882_SHARP_,p2__37883_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37882_SHARP_)].join('')),p2__37883_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37884_SHARP_,p2__37885_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37884_SHARP_)].join(''),p2__37885_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37886 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37886.addCallback(((function (G__37886){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37886))
);

G__37886.addErrback(((function (G__37886){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37886))
);

return G__37886;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37887){if((e37887 instanceof Error)){
var e = e37887;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37887;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37888){if((e37888 instanceof Error)){
var e = e37888;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37888;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37889 = cljs.core._EQ_;
var expr__37890 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37889.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37890))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37889.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37890))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37889.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37890))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__37889,expr__37890){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37889,expr__37890))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37892,callback){
var map__37893 = p__37892;
var map__37893__$1 = ((((!((map__37893 == null)))?((((map__37893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37893):map__37893);
var file_msg = map__37893__$1;
var request_url = cljs.core.get.call(null,map__37893__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__27629__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__27629__auto__)){
return or__27629__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__37893,map__37893__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37893,map__37893__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto__){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto__){
return (function (state_37931){
var state_val_37932 = (state_37931[(1)]);
if((state_val_37932 === (7))){
var inst_37927 = (state_37931[(2)]);
var state_37931__$1 = state_37931;
var statearr_37933_37959 = state_37931__$1;
(statearr_37933_37959[(2)] = inst_37927);

(statearr_37933_37959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (1))){
var state_37931__$1 = state_37931;
var statearr_37934_37960 = state_37931__$1;
(statearr_37934_37960[(2)] = null);

(statearr_37934_37960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (4))){
var inst_37897 = (state_37931[(7)]);
var inst_37897__$1 = (state_37931[(2)]);
var state_37931__$1 = (function (){var statearr_37935 = state_37931;
(statearr_37935[(7)] = inst_37897__$1);

return statearr_37935;
})();
if(cljs.core.truth_(inst_37897__$1)){
var statearr_37936_37961 = state_37931__$1;
(statearr_37936_37961[(1)] = (5));

} else {
var statearr_37937_37962 = state_37931__$1;
(statearr_37937_37962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (15))){
var inst_37912 = (state_37931[(8)]);
var inst_37910 = (state_37931[(9)]);
var inst_37914 = inst_37912.call(null,inst_37910);
var state_37931__$1 = state_37931;
var statearr_37938_37963 = state_37931__$1;
(statearr_37938_37963[(2)] = inst_37914);

(statearr_37938_37963[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (13))){
var inst_37921 = (state_37931[(2)]);
var state_37931__$1 = state_37931;
var statearr_37939_37964 = state_37931__$1;
(statearr_37939_37964[(2)] = inst_37921);

(statearr_37939_37964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (6))){
var state_37931__$1 = state_37931;
var statearr_37940_37965 = state_37931__$1;
(statearr_37940_37965[(2)] = null);

(statearr_37940_37965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (17))){
var inst_37918 = (state_37931[(2)]);
var state_37931__$1 = state_37931;
var statearr_37941_37966 = state_37931__$1;
(statearr_37941_37966[(2)] = inst_37918);

(statearr_37941_37966[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (3))){
var inst_37929 = (state_37931[(2)]);
var state_37931__$1 = state_37931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37931__$1,inst_37929);
} else {
if((state_val_37932 === (12))){
var state_37931__$1 = state_37931;
var statearr_37942_37967 = state_37931__$1;
(statearr_37942_37967[(2)] = null);

(statearr_37942_37967[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (2))){
var state_37931__$1 = state_37931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37931__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37932 === (11))){
var inst_37902 = (state_37931[(10)]);
var inst_37908 = figwheel.client.file_reloading.blocking_load.call(null,inst_37902);
var state_37931__$1 = state_37931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37931__$1,(14),inst_37908);
} else {
if((state_val_37932 === (9))){
var inst_37902 = (state_37931[(10)]);
var state_37931__$1 = state_37931;
if(cljs.core.truth_(inst_37902)){
var statearr_37943_37968 = state_37931__$1;
(statearr_37943_37968[(1)] = (11));

} else {
var statearr_37944_37969 = state_37931__$1;
(statearr_37944_37969[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (5))){
var inst_37897 = (state_37931[(7)]);
var inst_37903 = (state_37931[(11)]);
var inst_37902 = cljs.core.nth.call(null,inst_37897,(0),null);
var inst_37903__$1 = cljs.core.nth.call(null,inst_37897,(1),null);
var state_37931__$1 = (function (){var statearr_37945 = state_37931;
(statearr_37945[(10)] = inst_37902);

(statearr_37945[(11)] = inst_37903__$1);

return statearr_37945;
})();
if(cljs.core.truth_(inst_37903__$1)){
var statearr_37946_37970 = state_37931__$1;
(statearr_37946_37970[(1)] = (8));

} else {
var statearr_37947_37971 = state_37931__$1;
(statearr_37947_37971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (14))){
var inst_37912 = (state_37931[(8)]);
var inst_37902 = (state_37931[(10)]);
var inst_37910 = (state_37931[(2)]);
var inst_37911 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37912__$1 = cljs.core.get.call(null,inst_37911,inst_37902);
var state_37931__$1 = (function (){var statearr_37948 = state_37931;
(statearr_37948[(8)] = inst_37912__$1);

(statearr_37948[(9)] = inst_37910);

return statearr_37948;
})();
if(cljs.core.truth_(inst_37912__$1)){
var statearr_37949_37972 = state_37931__$1;
(statearr_37949_37972[(1)] = (15));

} else {
var statearr_37950_37973 = state_37931__$1;
(statearr_37950_37973[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (16))){
var inst_37910 = (state_37931[(9)]);
var inst_37916 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37910);
var state_37931__$1 = state_37931;
var statearr_37951_37974 = state_37931__$1;
(statearr_37951_37974[(2)] = inst_37916);

(statearr_37951_37974[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (10))){
var inst_37923 = (state_37931[(2)]);
var state_37931__$1 = (function (){var statearr_37952 = state_37931;
(statearr_37952[(12)] = inst_37923);

return statearr_37952;
})();
var statearr_37953_37975 = state_37931__$1;
(statearr_37953_37975[(2)] = null);

(statearr_37953_37975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37932 === (8))){
var inst_37903 = (state_37931[(11)]);
var inst_37905 = eval(inst_37903);
var state_37931__$1 = state_37931;
var statearr_37954_37976 = state_37931__$1;
(statearr_37954_37976[(2)] = inst_37905);

(statearr_37954_37976[(1)] = (10));


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
});})(c__34504__auto__))
;
return ((function (switch__34416__auto__,c__34504__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34417__auto__ = null;
var figwheel$client$file_reloading$state_machine__34417__auto____0 = (function (){
var statearr_37955 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37955[(0)] = figwheel$client$file_reloading$state_machine__34417__auto__);

(statearr_37955[(1)] = (1));

return statearr_37955;
});
var figwheel$client$file_reloading$state_machine__34417__auto____1 = (function (state_37931){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_37931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e37956){if((e37956 instanceof Object)){
var ex__34420__auto__ = e37956;
var statearr_37957_37977 = state_37931;
(statearr_37957_37977[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37978 = state_37931;
state_37931 = G__37978;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34417__auto__ = function(state_37931){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34417__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34417__auto____1.call(this,state_37931);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34417__auto____0;
figwheel$client$file_reloading$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34417__auto____1;
return figwheel$client$file_reloading$state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto__))
})();
var state__34506__auto__ = (function (){var statearr_37958 = f__34505__auto__.call(null);
(statearr_37958[(6)] = c__34504__auto__);

return statearr_37958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto__))
);

return c__34504__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__37980 = arguments.length;
switch (G__37980) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37982,callback){
var map__37983 = p__37982;
var map__37983__$1 = ((((!((map__37983 == null)))?((((map__37983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37983):map__37983);
var file_msg = map__37983__$1;
var namespace = cljs.core.get.call(null,map__37983__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37983,map__37983__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37983,map__37983__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37985){
var map__37986 = p__37985;
var map__37986__$1 = ((((!((map__37986 == null)))?((((map__37986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37986):map__37986);
var file_msg = map__37986__$1;
var namespace = cljs.core.get.call(null,map__37986__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37988){
var map__37989 = p__37988;
var map__37989__$1 = ((((!((map__37989 == null)))?((((map__37989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37989):map__37989);
var file_msg = map__37989__$1;
var namespace = cljs.core.get.call(null,map__37989__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27617__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27617__auto__){
var or__27629__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27629__auto__)){
return or__27629__auto__;
} else {
var or__27629__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27629__auto____$1)){
return or__27629__auto____$1;
} else {
var or__27629__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__27629__auto____$2)){
return or__27629__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__27617__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37991,callback){
var map__37992 = p__37991;
var map__37992__$1 = ((((!((map__37992 == null)))?((((map__37992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37992):map__37992);
var file_msg = map__37992__$1;
var request_url = cljs.core.get.call(null,map__37992__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37992__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34504__auto___38042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto___38042,out){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto___38042,out){
return (function (state_38027){
var state_val_38028 = (state_38027[(1)]);
if((state_val_38028 === (1))){
var inst_38001 = cljs.core.seq.call(null,files);
var inst_38002 = cljs.core.first.call(null,inst_38001);
var inst_38003 = cljs.core.next.call(null,inst_38001);
var inst_38004 = files;
var state_38027__$1 = (function (){var statearr_38029 = state_38027;
(statearr_38029[(7)] = inst_38002);

(statearr_38029[(8)] = inst_38003);

(statearr_38029[(9)] = inst_38004);

return statearr_38029;
})();
var statearr_38030_38043 = state_38027__$1;
(statearr_38030_38043[(2)] = null);

(statearr_38030_38043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (2))){
var inst_38010 = (state_38027[(10)]);
var inst_38004 = (state_38027[(9)]);
var inst_38009 = cljs.core.seq.call(null,inst_38004);
var inst_38010__$1 = cljs.core.first.call(null,inst_38009);
var inst_38011 = cljs.core.next.call(null,inst_38009);
var inst_38012 = (inst_38010__$1 == null);
var inst_38013 = cljs.core.not.call(null,inst_38012);
var state_38027__$1 = (function (){var statearr_38031 = state_38027;
(statearr_38031[(11)] = inst_38011);

(statearr_38031[(10)] = inst_38010__$1);

return statearr_38031;
})();
if(inst_38013){
var statearr_38032_38044 = state_38027__$1;
(statearr_38032_38044[(1)] = (4));

} else {
var statearr_38033_38045 = state_38027__$1;
(statearr_38033_38045[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (3))){
var inst_38025 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38027__$1,inst_38025);
} else {
if((state_val_38028 === (4))){
var inst_38010 = (state_38027[(10)]);
var inst_38015 = figwheel.client.file_reloading.reload_js_file.call(null,inst_38010);
var state_38027__$1 = state_38027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38027__$1,(7),inst_38015);
} else {
if((state_val_38028 === (5))){
var inst_38021 = cljs.core.async.close_BANG_.call(null,out);
var state_38027__$1 = state_38027;
var statearr_38034_38046 = state_38027__$1;
(statearr_38034_38046[(2)] = inst_38021);

(statearr_38034_38046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (6))){
var inst_38023 = (state_38027[(2)]);
var state_38027__$1 = state_38027;
var statearr_38035_38047 = state_38027__$1;
(statearr_38035_38047[(2)] = inst_38023);

(statearr_38035_38047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38028 === (7))){
var inst_38011 = (state_38027[(11)]);
var inst_38017 = (state_38027[(2)]);
var inst_38018 = cljs.core.async.put_BANG_.call(null,out,inst_38017);
var inst_38004 = inst_38011;
var state_38027__$1 = (function (){var statearr_38036 = state_38027;
(statearr_38036[(12)] = inst_38018);

(statearr_38036[(9)] = inst_38004);

return statearr_38036;
})();
var statearr_38037_38048 = state_38027__$1;
(statearr_38037_38048[(2)] = null);

(statearr_38037_38048[(1)] = (2));


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
});})(c__34504__auto___38042,out))
;
return ((function (switch__34416__auto__,c__34504__auto___38042,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34417__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34417__auto____0 = (function (){
var statearr_38038 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38038[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34417__auto__);

(statearr_38038[(1)] = (1));

return statearr_38038;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34417__auto____1 = (function (state_38027){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_38027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e38039){if((e38039 instanceof Object)){
var ex__34420__auto__ = e38039;
var statearr_38040_38049 = state_38027;
(statearr_38040_38049[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38050 = state_38027;
state_38027 = G__38050;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34417__auto__ = function(state_38027){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34417__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34417__auto____1.call(this,state_38027);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34417__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34417__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto___38042,out))
})();
var state__34506__auto__ = (function (){var statearr_38041 = f__34505__auto__.call(null);
(statearr_38041[(6)] = c__34504__auto___38042);

return statearr_38041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto___38042,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__38051,opts){
var map__38052 = p__38051;
var map__38052__$1 = ((((!((map__38052 == null)))?((((map__38052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38052.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38052):map__38052);
var eval_body = cljs.core.get.call(null,map__38052__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__38052__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27617__auto__ = eval_body;
if(cljs.core.truth_(and__27617__auto__)){
return typeof eval_body === 'string';
} else {
return and__27617__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e38054){var e = e38054;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__38055_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38055_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__38056){
var vec__38057 = p__38056;
var k = cljs.core.nth.call(null,vec__38057,(0),null);
var v = cljs.core.nth.call(null,vec__38057,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__38060){
var vec__38061 = p__38060;
var k = cljs.core.nth.call(null,vec__38061,(0),null);
var v = cljs.core.nth.call(null,vec__38061,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__38067,p__38068){
var map__38069 = p__38067;
var map__38069__$1 = ((((!((map__38069 == null)))?((((map__38069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38069.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38069):map__38069);
var opts = map__38069__$1;
var before_jsload = cljs.core.get.call(null,map__38069__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__38069__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__38069__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__38070 = p__38068;
var map__38070__$1 = ((((!((map__38070 == null)))?((((map__38070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38070):map__38070);
var msg = map__38070__$1;
var files = cljs.core.get.call(null,map__38070__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__38070__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__38070__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38224){
var state_val_38225 = (state_38224[(1)]);
if((state_val_38225 === (7))){
var inst_38087 = (state_38224[(7)]);
var inst_38084 = (state_38224[(8)]);
var inst_38086 = (state_38224[(9)]);
var inst_38085 = (state_38224[(10)]);
var inst_38092 = cljs.core._nth.call(null,inst_38085,inst_38087);
var inst_38093 = figwheel.client.file_reloading.eval_body.call(null,inst_38092,opts);
var inst_38094 = (inst_38087 + (1));
var tmp38226 = inst_38084;
var tmp38227 = inst_38086;
var tmp38228 = inst_38085;
var inst_38084__$1 = tmp38226;
var inst_38085__$1 = tmp38228;
var inst_38086__$1 = tmp38227;
var inst_38087__$1 = inst_38094;
var state_38224__$1 = (function (){var statearr_38229 = state_38224;
(statearr_38229[(11)] = inst_38093);

(statearr_38229[(7)] = inst_38087__$1);

(statearr_38229[(8)] = inst_38084__$1);

(statearr_38229[(9)] = inst_38086__$1);

(statearr_38229[(10)] = inst_38085__$1);

return statearr_38229;
})();
var statearr_38230_38313 = state_38224__$1;
(statearr_38230_38313[(2)] = null);

(statearr_38230_38313[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (20))){
var inst_38127 = (state_38224[(12)]);
var inst_38135 = figwheel.client.file_reloading.sort_files.call(null,inst_38127);
var state_38224__$1 = state_38224;
var statearr_38231_38314 = state_38224__$1;
(statearr_38231_38314[(2)] = inst_38135);

(statearr_38231_38314[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (27))){
var state_38224__$1 = state_38224;
var statearr_38232_38315 = state_38224__$1;
(statearr_38232_38315[(2)] = null);

(statearr_38232_38315[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (1))){
var inst_38076 = (state_38224[(13)]);
var inst_38073 = before_jsload.call(null,files);
var inst_38074 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_38075 = (function (){return ((function (inst_38076,inst_38073,inst_38074,state_val_38225,c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38064_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38064_SHARP_);
});
;})(inst_38076,inst_38073,inst_38074,state_val_38225,c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38076__$1 = cljs.core.filter.call(null,inst_38075,files);
var inst_38077 = cljs.core.not_empty.call(null,inst_38076__$1);
var state_38224__$1 = (function (){var statearr_38233 = state_38224;
(statearr_38233[(14)] = inst_38073);

(statearr_38233[(15)] = inst_38074);

(statearr_38233[(13)] = inst_38076__$1);

return statearr_38233;
})();
if(cljs.core.truth_(inst_38077)){
var statearr_38234_38316 = state_38224__$1;
(statearr_38234_38316[(1)] = (2));

} else {
var statearr_38235_38317 = state_38224__$1;
(statearr_38235_38317[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (24))){
var state_38224__$1 = state_38224;
var statearr_38236_38318 = state_38224__$1;
(statearr_38236_38318[(2)] = null);

(statearr_38236_38318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (39))){
var inst_38177 = (state_38224[(16)]);
var state_38224__$1 = state_38224;
var statearr_38237_38319 = state_38224__$1;
(statearr_38237_38319[(2)] = inst_38177);

(statearr_38237_38319[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (46))){
var inst_38219 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
var statearr_38238_38320 = state_38224__$1;
(statearr_38238_38320[(2)] = inst_38219);

(statearr_38238_38320[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (4))){
var inst_38121 = (state_38224[(2)]);
var inst_38122 = cljs.core.List.EMPTY;
var inst_38123 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_38122);
var inst_38124 = (function (){return ((function (inst_38121,inst_38122,inst_38123,state_val_38225,c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38065_SHARP_){
var and__27617__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__38065_SHARP_);
if(cljs.core.truth_(and__27617__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__38065_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__38065_SHARP_)));
} else {
return and__27617__auto__;
}
});
;})(inst_38121,inst_38122,inst_38123,state_val_38225,c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38125 = cljs.core.filter.call(null,inst_38124,files);
var inst_38126 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_38127 = cljs.core.concat.call(null,inst_38125,inst_38126);
var state_38224__$1 = (function (){var statearr_38239 = state_38224;
(statearr_38239[(12)] = inst_38127);

(statearr_38239[(17)] = inst_38123);

(statearr_38239[(18)] = inst_38121);

return statearr_38239;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38240_38321 = state_38224__$1;
(statearr_38240_38321[(1)] = (16));

} else {
var statearr_38241_38322 = state_38224__$1;
(statearr_38241_38322[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (15))){
var inst_38111 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
var statearr_38242_38323 = state_38224__$1;
(statearr_38242_38323[(2)] = inst_38111);

(statearr_38242_38323[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (21))){
var inst_38137 = (state_38224[(19)]);
var inst_38137__$1 = (state_38224[(2)]);
var inst_38138 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_38137__$1);
var state_38224__$1 = (function (){var statearr_38243 = state_38224;
(statearr_38243[(19)] = inst_38137__$1);

return statearr_38243;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38224__$1,(22),inst_38138);
} else {
if((state_val_38225 === (31))){
var inst_38222 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38224__$1,inst_38222);
} else {
if((state_val_38225 === (32))){
var inst_38177 = (state_38224[(16)]);
var inst_38182 = inst_38177.cljs$lang$protocol_mask$partition0$;
var inst_38183 = (inst_38182 & (64));
var inst_38184 = inst_38177.cljs$core$ISeq$;
var inst_38185 = (cljs.core.PROTOCOL_SENTINEL === inst_38184);
var inst_38186 = (inst_38183) || (inst_38185);
var state_38224__$1 = state_38224;
if(cljs.core.truth_(inst_38186)){
var statearr_38244_38324 = state_38224__$1;
(statearr_38244_38324[(1)] = (35));

} else {
var statearr_38245_38325 = state_38224__$1;
(statearr_38245_38325[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (40))){
var inst_38199 = (state_38224[(20)]);
var inst_38198 = (state_38224[(2)]);
var inst_38199__$1 = cljs.core.get.call(null,inst_38198,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38200 = cljs.core.get.call(null,inst_38198,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38201 = cljs.core.not_empty.call(null,inst_38199__$1);
var state_38224__$1 = (function (){var statearr_38246 = state_38224;
(statearr_38246[(21)] = inst_38200);

(statearr_38246[(20)] = inst_38199__$1);

return statearr_38246;
})();
if(cljs.core.truth_(inst_38201)){
var statearr_38247_38326 = state_38224__$1;
(statearr_38247_38326[(1)] = (41));

} else {
var statearr_38248_38327 = state_38224__$1;
(statearr_38248_38327[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (33))){
var state_38224__$1 = state_38224;
var statearr_38249_38328 = state_38224__$1;
(statearr_38249_38328[(2)] = false);

(statearr_38249_38328[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (13))){
var inst_38097 = (state_38224[(22)]);
var inst_38101 = cljs.core.chunk_first.call(null,inst_38097);
var inst_38102 = cljs.core.chunk_rest.call(null,inst_38097);
var inst_38103 = cljs.core.count.call(null,inst_38101);
var inst_38084 = inst_38102;
var inst_38085 = inst_38101;
var inst_38086 = inst_38103;
var inst_38087 = (0);
var state_38224__$1 = (function (){var statearr_38250 = state_38224;
(statearr_38250[(7)] = inst_38087);

(statearr_38250[(8)] = inst_38084);

(statearr_38250[(9)] = inst_38086);

(statearr_38250[(10)] = inst_38085);

return statearr_38250;
})();
var statearr_38251_38329 = state_38224__$1;
(statearr_38251_38329[(2)] = null);

(statearr_38251_38329[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (22))){
var inst_38145 = (state_38224[(23)]);
var inst_38141 = (state_38224[(24)]);
var inst_38137 = (state_38224[(19)]);
var inst_38140 = (state_38224[(25)]);
var inst_38140__$1 = (state_38224[(2)]);
var inst_38141__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38140__$1);
var inst_38142 = (function (){var all_files = inst_38137;
var res_SINGLEQUOTE_ = inst_38140__$1;
var res = inst_38141__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_38145,inst_38141,inst_38137,inst_38140,inst_38140__$1,inst_38141__$1,state_val_38225,c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__38066_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__38066_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_38145,inst_38141,inst_38137,inst_38140,inst_38140__$1,inst_38141__$1,state_val_38225,c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38143 = cljs.core.filter.call(null,inst_38142,inst_38140__$1);
var inst_38144 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_38145__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_38144);
var inst_38146 = cljs.core.not_empty.call(null,inst_38145__$1);
var state_38224__$1 = (function (){var statearr_38252 = state_38224;
(statearr_38252[(23)] = inst_38145__$1);

(statearr_38252[(26)] = inst_38143);

(statearr_38252[(24)] = inst_38141__$1);

(statearr_38252[(25)] = inst_38140__$1);

return statearr_38252;
})();
if(cljs.core.truth_(inst_38146)){
var statearr_38253_38330 = state_38224__$1;
(statearr_38253_38330[(1)] = (23));

} else {
var statearr_38254_38331 = state_38224__$1;
(statearr_38254_38331[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (36))){
var state_38224__$1 = state_38224;
var statearr_38255_38332 = state_38224__$1;
(statearr_38255_38332[(2)] = false);

(statearr_38255_38332[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (41))){
var inst_38199 = (state_38224[(20)]);
var inst_38203 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38204 = cljs.core.map.call(null,inst_38203,inst_38199);
var inst_38205 = cljs.core.pr_str.call(null,inst_38204);
var inst_38206 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38205)].join('');
var inst_38207 = figwheel.client.utils.log.call(null,inst_38206);
var state_38224__$1 = state_38224;
var statearr_38256_38333 = state_38224__$1;
(statearr_38256_38333[(2)] = inst_38207);

(statearr_38256_38333[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (43))){
var inst_38200 = (state_38224[(21)]);
var inst_38210 = (state_38224[(2)]);
var inst_38211 = cljs.core.not_empty.call(null,inst_38200);
var state_38224__$1 = (function (){var statearr_38257 = state_38224;
(statearr_38257[(27)] = inst_38210);

return statearr_38257;
})();
if(cljs.core.truth_(inst_38211)){
var statearr_38258_38334 = state_38224__$1;
(statearr_38258_38334[(1)] = (44));

} else {
var statearr_38259_38335 = state_38224__$1;
(statearr_38259_38335[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (29))){
var inst_38145 = (state_38224[(23)]);
var inst_38143 = (state_38224[(26)]);
var inst_38141 = (state_38224[(24)]);
var inst_38177 = (state_38224[(16)]);
var inst_38137 = (state_38224[(19)]);
var inst_38140 = (state_38224[(25)]);
var inst_38173 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_38176 = (function (){var all_files = inst_38137;
var res_SINGLEQUOTE_ = inst_38140;
var res = inst_38141;
var files_not_loaded = inst_38143;
var dependencies_that_loaded = inst_38145;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38145,inst_38143,inst_38141,inst_38177,inst_38137,inst_38140,inst_38173,state_val_38225,c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38175){
var map__38260 = p__38175;
var map__38260__$1 = ((((!((map__38260 == null)))?((((map__38260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38260):map__38260);
var namespace = cljs.core.get.call(null,map__38260__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38145,inst_38143,inst_38141,inst_38177,inst_38137,inst_38140,inst_38173,state_val_38225,c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38177__$1 = cljs.core.group_by.call(null,inst_38176,inst_38143);
var inst_38179 = (inst_38177__$1 == null);
var inst_38180 = cljs.core.not.call(null,inst_38179);
var state_38224__$1 = (function (){var statearr_38262 = state_38224;
(statearr_38262[(28)] = inst_38173);

(statearr_38262[(16)] = inst_38177__$1);

return statearr_38262;
})();
if(inst_38180){
var statearr_38263_38336 = state_38224__$1;
(statearr_38263_38336[(1)] = (32));

} else {
var statearr_38264_38337 = state_38224__$1;
(statearr_38264_38337[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (44))){
var inst_38200 = (state_38224[(21)]);
var inst_38213 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38200);
var inst_38214 = cljs.core.pr_str.call(null,inst_38213);
var inst_38215 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38214)].join('');
var inst_38216 = figwheel.client.utils.log.call(null,inst_38215);
var state_38224__$1 = state_38224;
var statearr_38265_38338 = state_38224__$1;
(statearr_38265_38338[(2)] = inst_38216);

(statearr_38265_38338[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (6))){
var inst_38118 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
var statearr_38266_38339 = state_38224__$1;
(statearr_38266_38339[(2)] = inst_38118);

(statearr_38266_38339[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (28))){
var inst_38143 = (state_38224[(26)]);
var inst_38170 = (state_38224[(2)]);
var inst_38171 = cljs.core.not_empty.call(null,inst_38143);
var state_38224__$1 = (function (){var statearr_38267 = state_38224;
(statearr_38267[(29)] = inst_38170);

return statearr_38267;
})();
if(cljs.core.truth_(inst_38171)){
var statearr_38268_38340 = state_38224__$1;
(statearr_38268_38340[(1)] = (29));

} else {
var statearr_38269_38341 = state_38224__$1;
(statearr_38269_38341[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (25))){
var inst_38141 = (state_38224[(24)]);
var inst_38157 = (state_38224[(2)]);
var inst_38158 = cljs.core.not_empty.call(null,inst_38141);
var state_38224__$1 = (function (){var statearr_38270 = state_38224;
(statearr_38270[(30)] = inst_38157);

return statearr_38270;
})();
if(cljs.core.truth_(inst_38158)){
var statearr_38271_38342 = state_38224__$1;
(statearr_38271_38342[(1)] = (26));

} else {
var statearr_38272_38343 = state_38224__$1;
(statearr_38272_38343[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (34))){
var inst_38193 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
if(cljs.core.truth_(inst_38193)){
var statearr_38273_38344 = state_38224__$1;
(statearr_38273_38344[(1)] = (38));

} else {
var statearr_38274_38345 = state_38224__$1;
(statearr_38274_38345[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (17))){
var state_38224__$1 = state_38224;
var statearr_38275_38346 = state_38224__$1;
(statearr_38275_38346[(2)] = recompile_dependents);

(statearr_38275_38346[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (3))){
var state_38224__$1 = state_38224;
var statearr_38276_38347 = state_38224__$1;
(statearr_38276_38347[(2)] = null);

(statearr_38276_38347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (12))){
var inst_38114 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
var statearr_38277_38348 = state_38224__$1;
(statearr_38277_38348[(2)] = inst_38114);

(statearr_38277_38348[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (2))){
var inst_38076 = (state_38224[(13)]);
var inst_38083 = cljs.core.seq.call(null,inst_38076);
var inst_38084 = inst_38083;
var inst_38085 = null;
var inst_38086 = (0);
var inst_38087 = (0);
var state_38224__$1 = (function (){var statearr_38278 = state_38224;
(statearr_38278[(7)] = inst_38087);

(statearr_38278[(8)] = inst_38084);

(statearr_38278[(9)] = inst_38086);

(statearr_38278[(10)] = inst_38085);

return statearr_38278;
})();
var statearr_38279_38349 = state_38224__$1;
(statearr_38279_38349[(2)] = null);

(statearr_38279_38349[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (23))){
var inst_38145 = (state_38224[(23)]);
var inst_38143 = (state_38224[(26)]);
var inst_38141 = (state_38224[(24)]);
var inst_38137 = (state_38224[(19)]);
var inst_38140 = (state_38224[(25)]);
var inst_38148 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_38150 = (function (){var all_files = inst_38137;
var res_SINGLEQUOTE_ = inst_38140;
var res = inst_38141;
var files_not_loaded = inst_38143;
var dependencies_that_loaded = inst_38145;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38145,inst_38143,inst_38141,inst_38137,inst_38140,inst_38148,state_val_38225,c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38149){
var map__38280 = p__38149;
var map__38280__$1 = ((((!((map__38280 == null)))?((((map__38280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38280):map__38280);
var request_url = cljs.core.get.call(null,map__38280__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38145,inst_38143,inst_38141,inst_38137,inst_38140,inst_38148,state_val_38225,c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38151 = cljs.core.reverse.call(null,inst_38145);
var inst_38152 = cljs.core.map.call(null,inst_38150,inst_38151);
var inst_38153 = cljs.core.pr_str.call(null,inst_38152);
var inst_38154 = figwheel.client.utils.log.call(null,inst_38153);
var state_38224__$1 = (function (){var statearr_38282 = state_38224;
(statearr_38282[(31)] = inst_38148);

return statearr_38282;
})();
var statearr_38283_38350 = state_38224__$1;
(statearr_38283_38350[(2)] = inst_38154);

(statearr_38283_38350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (35))){
var state_38224__$1 = state_38224;
var statearr_38284_38351 = state_38224__$1;
(statearr_38284_38351[(2)] = true);

(statearr_38284_38351[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (19))){
var inst_38127 = (state_38224[(12)]);
var inst_38133 = figwheel.client.file_reloading.expand_files.call(null,inst_38127);
var state_38224__$1 = state_38224;
var statearr_38285_38352 = state_38224__$1;
(statearr_38285_38352[(2)] = inst_38133);

(statearr_38285_38352[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (11))){
var state_38224__$1 = state_38224;
var statearr_38286_38353 = state_38224__$1;
(statearr_38286_38353[(2)] = null);

(statearr_38286_38353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (9))){
var inst_38116 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
var statearr_38287_38354 = state_38224__$1;
(statearr_38287_38354[(2)] = inst_38116);

(statearr_38287_38354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (5))){
var inst_38087 = (state_38224[(7)]);
var inst_38086 = (state_38224[(9)]);
var inst_38089 = (inst_38087 < inst_38086);
var inst_38090 = inst_38089;
var state_38224__$1 = state_38224;
if(cljs.core.truth_(inst_38090)){
var statearr_38288_38355 = state_38224__$1;
(statearr_38288_38355[(1)] = (7));

} else {
var statearr_38289_38356 = state_38224__$1;
(statearr_38289_38356[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (14))){
var inst_38097 = (state_38224[(22)]);
var inst_38106 = cljs.core.first.call(null,inst_38097);
var inst_38107 = figwheel.client.file_reloading.eval_body.call(null,inst_38106,opts);
var inst_38108 = cljs.core.next.call(null,inst_38097);
var inst_38084 = inst_38108;
var inst_38085 = null;
var inst_38086 = (0);
var inst_38087 = (0);
var state_38224__$1 = (function (){var statearr_38290 = state_38224;
(statearr_38290[(7)] = inst_38087);

(statearr_38290[(8)] = inst_38084);

(statearr_38290[(32)] = inst_38107);

(statearr_38290[(9)] = inst_38086);

(statearr_38290[(10)] = inst_38085);

return statearr_38290;
})();
var statearr_38291_38357 = state_38224__$1;
(statearr_38291_38357[(2)] = null);

(statearr_38291_38357[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (45))){
var state_38224__$1 = state_38224;
var statearr_38292_38358 = state_38224__$1;
(statearr_38292_38358[(2)] = null);

(statearr_38292_38358[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (26))){
var inst_38145 = (state_38224[(23)]);
var inst_38143 = (state_38224[(26)]);
var inst_38141 = (state_38224[(24)]);
var inst_38137 = (state_38224[(19)]);
var inst_38140 = (state_38224[(25)]);
var inst_38160 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_38162 = (function (){var all_files = inst_38137;
var res_SINGLEQUOTE_ = inst_38140;
var res = inst_38141;
var files_not_loaded = inst_38143;
var dependencies_that_loaded = inst_38145;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38145,inst_38143,inst_38141,inst_38137,inst_38140,inst_38160,state_val_38225,c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__38161){
var map__38293 = p__38161;
var map__38293__$1 = ((((!((map__38293 == null)))?((((map__38293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38293):map__38293);
var namespace = cljs.core.get.call(null,map__38293__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38293__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38145,inst_38143,inst_38141,inst_38137,inst_38140,inst_38160,state_val_38225,c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38163 = cljs.core.map.call(null,inst_38162,inst_38141);
var inst_38164 = cljs.core.pr_str.call(null,inst_38163);
var inst_38165 = figwheel.client.utils.log.call(null,inst_38164);
var inst_38166 = (function (){var all_files = inst_38137;
var res_SINGLEQUOTE_ = inst_38140;
var res = inst_38141;
var files_not_loaded = inst_38143;
var dependencies_that_loaded = inst_38145;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38145,inst_38143,inst_38141,inst_38137,inst_38140,inst_38160,inst_38162,inst_38163,inst_38164,inst_38165,state_val_38225,c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_38145,inst_38143,inst_38141,inst_38137,inst_38140,inst_38160,inst_38162,inst_38163,inst_38164,inst_38165,state_val_38225,c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_38167 = setTimeout(inst_38166,(10));
var state_38224__$1 = (function (){var statearr_38295 = state_38224;
(statearr_38295[(33)] = inst_38160);

(statearr_38295[(34)] = inst_38165);

return statearr_38295;
})();
var statearr_38296_38359 = state_38224__$1;
(statearr_38296_38359[(2)] = inst_38167);

(statearr_38296_38359[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (16))){
var state_38224__$1 = state_38224;
var statearr_38297_38360 = state_38224__$1;
(statearr_38297_38360[(2)] = reload_dependents);

(statearr_38297_38360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (38))){
var inst_38177 = (state_38224[(16)]);
var inst_38195 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38177);
var state_38224__$1 = state_38224;
var statearr_38298_38361 = state_38224__$1;
(statearr_38298_38361[(2)] = inst_38195);

(statearr_38298_38361[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (30))){
var state_38224__$1 = state_38224;
var statearr_38299_38362 = state_38224__$1;
(statearr_38299_38362[(2)] = null);

(statearr_38299_38362[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (10))){
var inst_38097 = (state_38224[(22)]);
var inst_38099 = cljs.core.chunked_seq_QMARK_.call(null,inst_38097);
var state_38224__$1 = state_38224;
if(inst_38099){
var statearr_38300_38363 = state_38224__$1;
(statearr_38300_38363[(1)] = (13));

} else {
var statearr_38301_38364 = state_38224__$1;
(statearr_38301_38364[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (18))){
var inst_38131 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
if(cljs.core.truth_(inst_38131)){
var statearr_38302_38365 = state_38224__$1;
(statearr_38302_38365[(1)] = (19));

} else {
var statearr_38303_38366 = state_38224__$1;
(statearr_38303_38366[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (42))){
var state_38224__$1 = state_38224;
var statearr_38304_38367 = state_38224__$1;
(statearr_38304_38367[(2)] = null);

(statearr_38304_38367[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (37))){
var inst_38190 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
var statearr_38305_38368 = state_38224__$1;
(statearr_38305_38368[(2)] = inst_38190);

(statearr_38305_38368[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (8))){
var inst_38097 = (state_38224[(22)]);
var inst_38084 = (state_38224[(8)]);
var inst_38097__$1 = cljs.core.seq.call(null,inst_38084);
var state_38224__$1 = (function (){var statearr_38306 = state_38224;
(statearr_38306[(22)] = inst_38097__$1);

return statearr_38306;
})();
if(inst_38097__$1){
var statearr_38307_38369 = state_38224__$1;
(statearr_38307_38369[(1)] = (10));

} else {
var statearr_38308_38370 = state_38224__$1;
(statearr_38308_38370[(1)] = (11));

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
});})(c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34416__auto__,c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34417__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34417__auto____0 = (function (){
var statearr_38309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38309[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34417__auto__);

(statearr_38309[(1)] = (1));

return statearr_38309;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34417__auto____1 = (function (state_38224){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_38224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e38310){if((e38310 instanceof Object)){
var ex__34420__auto__ = e38310;
var statearr_38311_38371 = state_38224;
(statearr_38311_38371[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38372 = state_38224;
state_38224 = G__38372;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34417__auto__ = function(state_38224){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34417__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34417__auto____1.call(this,state_38224);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34417__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34417__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34506__auto__ = (function (){var statearr_38312 = f__34505__auto__.call(null);
(statearr_38312[(6)] = c__34504__auto__);

return statearr_38312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto__,map__38069,map__38069__$1,opts,before_jsload,on_jsload,reload_dependents,map__38070,map__38070__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34504__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38375,link){
var map__38376 = p__38375;
var map__38376__$1 = ((((!((map__38376 == null)))?((((map__38376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38376):map__38376);
var file = cljs.core.get.call(null,map__38376__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__38376,map__38376__$1,file){
return (function (p1__38373_SHARP_,p2__38374_SHARP_){
if(cljs.core._EQ_.call(null,p1__38373_SHARP_,p2__38374_SHARP_)){
return p1__38373_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__38376,map__38376__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38379){
var map__38380 = p__38379;
var map__38380__$1 = ((((!((map__38380 == null)))?((((map__38380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38380):map__38380);
var match_length = cljs.core.get.call(null,map__38380__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38380__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38378_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38378_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38382_SHARP_,p2__38383_SHARP_){
return cljs.core.assoc.call(null,p1__38382_SHARP_,cljs.core.get.call(null,p2__38383_SHARP_,key),p2__38383_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_38384 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38384);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38384);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38385,p__38386){
var map__38387 = p__38385;
var map__38387__$1 = ((((!((map__38387 == null)))?((((map__38387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38387):map__38387);
var on_cssload = cljs.core.get.call(null,map__38387__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38388 = p__38386;
var map__38388__$1 = ((((!((map__38388 == null)))?((((map__38388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38388):map__38388);
var files_msg = map__38388__$1;
var files = cljs.core.get.call(null,map__38388__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1547003711419