// Compiled by ClojureScript 1.9.671 {}
goog.provide('devtools.async');
goog.require('cljs.core');
goog.require('goog.async.nextTick');
goog.require('goog.labs.userAgent.browser');
goog.require('devtools.context');
devtools.async.available_QMARK_ = (function devtools$async$available_QMARK_(){
return typeof Promise !== 'undefined';
});
devtools.async.fixed_chrome_version_for_async = "65.0.3321";
devtools.async.needed_QMARK_ = (function devtools$async$needed_QMARK_(){
return cljs.core.not.call(null,(function (){var and__27617__auto__ = goog.labs.userAgent.browser.isChrome();
if(cljs.core.truth_(and__27617__auto__)){
return goog.labs.userAgent.browser.isVersionOrHigher(devtools.async.fixed_chrome_version_for_async);
} else {
return and__27617__auto__;
}
})());
});
devtools.async.get_not_needed_message = (function devtools$async$get_not_needed_message(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("cljs-devtools: the :async feature is no longer needed since Chrome "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.async.fixed_chrome_version_for_async),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("see https://github.com/binaryage/cljs-devtools/issues/20")].join('');
});
devtools.async._STAR_installed_STAR_ = false;
devtools.async._STAR_original_set_immediate_STAR_ = null;
devtools.async.rethrow_outside_promise = (function devtools$async$rethrow_outside_promise(e){
return setTimeout((function (){
throw e;
}),(0));
});
devtools.async.promise_based_set_immediate = (function devtools$async$promise_based_set_immediate(callback){
var o__29726__auto___33386 = (function (){var o__29726__auto__ = (function (){var o__29726__auto__ = Promise;
return (o__29726__auto__["resolve"]).call(o__29726__auto__);
})();
return (o__29726__auto__["then"]).call(o__29726__auto__,callback);
})();
(o__29726__auto___33386["catch"]).call(o__29726__auto___33386,devtools.async.rethrow_outside_promise);

return null;
});
devtools.async.install_async_set_immediate_BANG_ = (function devtools$async$install_async_set_immediate_BANG_(){
devtools.async._STAR_original_set_immediate_STAR_ = goog.async.nextTick.setImmediate_;

return goog.async.nextTick.setImmediate_ = devtools.async.promise_based_set_immediate;
});
devtools.async.uninstall_async_set_immediate_BANG_ = (function devtools$async$uninstall_async_set_immediate_BANG_(){
return goog.async.nextTick.setImmediate_ = devtools.async._STAR_original_set_immediate_STAR_;
});
devtools.async.installed_QMARK_ = (function devtools$async$installed_QMARK_(){
return devtools.async._STAR_installed_STAR_;
});
devtools.async.install_BANG_ = (function devtools$async$install_BANG_(){
if(devtools.async._STAR_installed_STAR_){
return null;
} else {
devtools.async._STAR_installed_STAR_ = true;

var G__33387_33388 = Error;
var target__29731__auto___33389 = G__33387_33388;
if(cljs.core.truth_(target__29731__auto___33389)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("unable to locate object path "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33387_33388)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("target__29731__auto__")].join('')));
}

(target__29731__auto___33389["stackTraceLimit"] = Infinity);


devtools.async.install_async_set_immediate_BANG_.call(null);

if(cljs.core.truth_(devtools.async.needed_QMARK_.call(null))){
} else {
devtools.context.get_console.call(null).info(devtools.async.get_not_needed_message.call(null));
}

return true;
}
});
devtools.async.uninstall_BANG_ = (function devtools$async$uninstall_BANG_(){
if(devtools.async._STAR_installed_STAR_){
devtools.async._STAR_installed_STAR_ = false;

return devtools.async.uninstall_async_set_immediate_BANG_.call(null);
} else {
return null;
}
});

//# sourceMappingURL=async.js.map?rel=1547003702345