// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34550 = arguments.length;
switch (G__34550) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34551 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34551 = (function (f,blockable,meta34552){
this.f = f;
this.blockable = blockable;
this.meta34552 = meta34552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34553,meta34552__$1){
var self__ = this;
var _34553__$1 = this;
return (new cljs.core.async.t_cljs$core$async34551(self__.f,self__.blockable,meta34552__$1));
});

cljs.core.async.t_cljs$core$async34551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34553){
var self__ = this;
var _34553__$1 = this;
return self__.meta34552;
});

cljs.core.async.t_cljs$core$async34551.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34551.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34551.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34551.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34552","meta34552",-1298837368,null)], null);
});

cljs.core.async.t_cljs$core$async34551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34551";

cljs.core.async.t_cljs$core$async34551.cljs$lang$ctorPrWriter = (function (this__28240__auto__,writer__28241__auto__,opt__28242__auto__){
return cljs.core._write.call(null,writer__28241__auto__,"cljs.core.async/t_cljs$core$async34551");
});

cljs.core.async.__GT_t_cljs$core$async34551 = (function cljs$core$async$__GT_t_cljs$core$async34551(f__$1,blockable__$1,meta34552){
return (new cljs.core.async.t_cljs$core$async34551(f__$1,blockable__$1,meta34552));
});

}

return (new cljs.core.async.t_cljs$core$async34551(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__34557 = arguments.length;
switch (G__34557) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34560 = arguments.length;
switch (G__34560) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__34563 = arguments.length;
switch (G__34563) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34565 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34565);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34565,ret){
return (function (){
return fn1.call(null,val_34565);
});})(val_34565,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34567 = arguments.length;
switch (G__34567) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28553__auto___34569 = n;
var x_34570 = (0);
while(true){
if((x_34570 < n__28553__auto___34569)){
(a[x_34570] = (0));

var G__34571 = (x_34570 + (1));
x_34570 = G__34571;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__34572 = (i + (1));
i = G__34572;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34573 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34573 = (function (flag,meta34574){
this.flag = flag;
this.meta34574 = meta34574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34575,meta34574__$1){
var self__ = this;
var _34575__$1 = this;
return (new cljs.core.async.t_cljs$core$async34573(self__.flag,meta34574__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34573.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34575){
var self__ = this;
var _34575__$1 = this;
return self__.meta34574;
});})(flag))
;

cljs.core.async.t_cljs$core$async34573.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34573.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34573.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34573.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34573.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34574","meta34574",2080480850,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34573.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34573";

cljs.core.async.t_cljs$core$async34573.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28240__auto__,writer__28241__auto__,opt__28242__auto__){
return cljs.core._write.call(null,writer__28241__auto__,"cljs.core.async/t_cljs$core$async34573");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34573 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34573(flag__$1,meta34574){
return (new cljs.core.async.t_cljs$core$async34573(flag__$1,meta34574));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34573(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34576 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34576 = (function (flag,cb,meta34577){
this.flag = flag;
this.cb = cb;
this.meta34577 = meta34577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34578,meta34577__$1){
var self__ = this;
var _34578__$1 = this;
return (new cljs.core.async.t_cljs$core$async34576(self__.flag,self__.cb,meta34577__$1));
});

cljs.core.async.t_cljs$core$async34576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34578){
var self__ = this;
var _34578__$1 = this;
return self__.meta34577;
});

cljs.core.async.t_cljs$core$async34576.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34576.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34576.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34576.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34577","meta34577",1733904100,null)], null);
});

cljs.core.async.t_cljs$core$async34576.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34576";

cljs.core.async.t_cljs$core$async34576.cljs$lang$ctorPrWriter = (function (this__28240__auto__,writer__28241__auto__,opt__28242__auto__){
return cljs.core._write.call(null,writer__28241__auto__,"cljs.core.async/t_cljs$core$async34576");
});

cljs.core.async.__GT_t_cljs$core$async34576 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34576(flag__$1,cb__$1,meta34577){
return (new cljs.core.async.t_cljs$core$async34576(flag__$1,cb__$1,meta34577));
});

}

return (new cljs.core.async.t_cljs$core$async34576(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34579_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34579_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34580_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34580_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27629__auto__ = wport;
if(cljs.core.truth_(or__27629__auto__)){
return or__27629__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34581 = (i + (1));
i = G__34581;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27629__auto__ = ret;
if(cljs.core.truth_(or__27629__auto__)){
return or__27629__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27617__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27617__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27617__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__28761__auto__ = [];
var len__28754__auto___34587 = arguments.length;
var i__28755__auto___34588 = (0);
while(true){
if((i__28755__auto___34588 < len__28754__auto___34587)){
args__28761__auto__.push((arguments[i__28755__auto___34588]));

var G__34589 = (i__28755__auto___34588 + (1));
i__28755__auto___34588 = G__34589;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((1) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28762__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34584){
var map__34585 = p__34584;
var map__34585__$1 = ((((!((map__34585 == null)))?((((map__34585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34585):map__34585);
var opts = map__34585__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34582){
var G__34583 = cljs.core.first.call(null,seq34582);
var seq34582__$1 = cljs.core.next.call(null,seq34582);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34583,seq34582__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__34591 = arguments.length;
switch (G__34591) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34504__auto___34637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto___34637){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto___34637){
return (function (state_34615){
var state_val_34616 = (state_34615[(1)]);
if((state_val_34616 === (7))){
var inst_34611 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
var statearr_34617_34638 = state_34615__$1;
(statearr_34617_34638[(2)] = inst_34611);

(statearr_34617_34638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (1))){
var state_34615__$1 = state_34615;
var statearr_34618_34639 = state_34615__$1;
(statearr_34618_34639[(2)] = null);

(statearr_34618_34639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (4))){
var inst_34594 = (state_34615[(7)]);
var inst_34594__$1 = (state_34615[(2)]);
var inst_34595 = (inst_34594__$1 == null);
var state_34615__$1 = (function (){var statearr_34619 = state_34615;
(statearr_34619[(7)] = inst_34594__$1);

return statearr_34619;
})();
if(cljs.core.truth_(inst_34595)){
var statearr_34620_34640 = state_34615__$1;
(statearr_34620_34640[(1)] = (5));

} else {
var statearr_34621_34641 = state_34615__$1;
(statearr_34621_34641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (13))){
var state_34615__$1 = state_34615;
var statearr_34622_34642 = state_34615__$1;
(statearr_34622_34642[(2)] = null);

(statearr_34622_34642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (6))){
var inst_34594 = (state_34615[(7)]);
var state_34615__$1 = state_34615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34615__$1,(11),to,inst_34594);
} else {
if((state_val_34616 === (3))){
var inst_34613 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34615__$1,inst_34613);
} else {
if((state_val_34616 === (12))){
var state_34615__$1 = state_34615;
var statearr_34623_34643 = state_34615__$1;
(statearr_34623_34643[(2)] = null);

(statearr_34623_34643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (2))){
var state_34615__$1 = state_34615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34615__$1,(4),from);
} else {
if((state_val_34616 === (11))){
var inst_34604 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
if(cljs.core.truth_(inst_34604)){
var statearr_34624_34644 = state_34615__$1;
(statearr_34624_34644[(1)] = (12));

} else {
var statearr_34625_34645 = state_34615__$1;
(statearr_34625_34645[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (9))){
var state_34615__$1 = state_34615;
var statearr_34626_34646 = state_34615__$1;
(statearr_34626_34646[(2)] = null);

(statearr_34626_34646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (5))){
var state_34615__$1 = state_34615;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34627_34647 = state_34615__$1;
(statearr_34627_34647[(1)] = (8));

} else {
var statearr_34628_34648 = state_34615__$1;
(statearr_34628_34648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (14))){
var inst_34609 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
var statearr_34629_34649 = state_34615__$1;
(statearr_34629_34649[(2)] = inst_34609);

(statearr_34629_34649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (10))){
var inst_34601 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
var statearr_34630_34650 = state_34615__$1;
(statearr_34630_34650[(2)] = inst_34601);

(statearr_34630_34650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (8))){
var inst_34598 = cljs.core.async.close_BANG_.call(null,to);
var state_34615__$1 = state_34615;
var statearr_34631_34651 = state_34615__$1;
(statearr_34631_34651[(2)] = inst_34598);

(statearr_34631_34651[(1)] = (10));


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
});})(c__34504__auto___34637))
;
return ((function (switch__34416__auto__,c__34504__auto___34637){
return (function() {
var cljs$core$async$state_machine__34417__auto__ = null;
var cljs$core$async$state_machine__34417__auto____0 = (function (){
var statearr_34632 = [null,null,null,null,null,null,null,null];
(statearr_34632[(0)] = cljs$core$async$state_machine__34417__auto__);

(statearr_34632[(1)] = (1));

return statearr_34632;
});
var cljs$core$async$state_machine__34417__auto____1 = (function (state_34615){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_34615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e34633){if((e34633 instanceof Object)){
var ex__34420__auto__ = e34633;
var statearr_34634_34652 = state_34615;
(statearr_34634_34652[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34653 = state_34615;
state_34615 = G__34653;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$state_machine__34417__auto__ = function(state_34615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34417__auto____1.call(this,state_34615);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34417__auto____0;
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34417__auto____1;
return cljs$core$async$state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto___34637))
})();
var state__34506__auto__ = (function (){var statearr_34635 = f__34505__auto__.call(null);
(statearr_34635[(6)] = c__34504__auto___34637);

return statearr_34635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto___34637))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__34654){
var vec__34655 = p__34654;
var v = cljs.core.nth.call(null,vec__34655,(0),null);
var p = cljs.core.nth.call(null,vec__34655,(1),null);
var job = vec__34655;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34504__auto___34826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto___34826,res,vec__34655,v,p,job,jobs,results){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto___34826,res,vec__34655,v,p,job,jobs,results){
return (function (state_34662){
var state_val_34663 = (state_34662[(1)]);
if((state_val_34663 === (1))){
var state_34662__$1 = state_34662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34662__$1,(2),res,v);
} else {
if((state_val_34663 === (2))){
var inst_34659 = (state_34662[(2)]);
var inst_34660 = cljs.core.async.close_BANG_.call(null,res);
var state_34662__$1 = (function (){var statearr_34664 = state_34662;
(statearr_34664[(7)] = inst_34659);

return statearr_34664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34662__$1,inst_34660);
} else {
return null;
}
}
});})(c__34504__auto___34826,res,vec__34655,v,p,job,jobs,results))
;
return ((function (switch__34416__auto__,c__34504__auto___34826,res,vec__34655,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____0 = (function (){
var statearr_34665 = [null,null,null,null,null,null,null,null];
(statearr_34665[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__);

(statearr_34665[(1)] = (1));

return statearr_34665;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____1 = (function (state_34662){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_34662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e34666){if((e34666 instanceof Object)){
var ex__34420__auto__ = e34666;
var statearr_34667_34827 = state_34662;
(statearr_34667_34827[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34828 = state_34662;
state_34662 = G__34828;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__ = function(state_34662){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____1.call(this,state_34662);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto___34826,res,vec__34655,v,p,job,jobs,results))
})();
var state__34506__auto__ = (function (){var statearr_34668 = f__34505__auto__.call(null);
(statearr_34668[(6)] = c__34504__auto___34826);

return statearr_34668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto___34826,res,vec__34655,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34669){
var vec__34670 = p__34669;
var v = cljs.core.nth.call(null,vec__34670,(0),null);
var p = cljs.core.nth.call(null,vec__34670,(1),null);
var job = vec__34670;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28553__auto___34829 = n;
var __34830 = (0);
while(true){
if((__34830 < n__28553__auto___34829)){
var G__34673_34831 = type;
var G__34673_34832__$1 = (((G__34673_34831 instanceof cljs.core.Keyword))?G__34673_34831.fqn:null);
switch (G__34673_34832__$1) {
case "compute":
var c__34504__auto___34834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34830,c__34504__auto___34834,G__34673_34831,G__34673_34832__$1,n__28553__auto___34829,jobs,results,process,async){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (__34830,c__34504__auto___34834,G__34673_34831,G__34673_34832__$1,n__28553__auto___34829,jobs,results,process,async){
return (function (state_34686){
var state_val_34687 = (state_34686[(1)]);
if((state_val_34687 === (1))){
var state_34686__$1 = state_34686;
var statearr_34688_34835 = state_34686__$1;
(statearr_34688_34835[(2)] = null);

(statearr_34688_34835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (2))){
var state_34686__$1 = state_34686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34686__$1,(4),jobs);
} else {
if((state_val_34687 === (3))){
var inst_34684 = (state_34686[(2)]);
var state_34686__$1 = state_34686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34686__$1,inst_34684);
} else {
if((state_val_34687 === (4))){
var inst_34676 = (state_34686[(2)]);
var inst_34677 = process.call(null,inst_34676);
var state_34686__$1 = state_34686;
if(cljs.core.truth_(inst_34677)){
var statearr_34689_34836 = state_34686__$1;
(statearr_34689_34836[(1)] = (5));

} else {
var statearr_34690_34837 = state_34686__$1;
(statearr_34690_34837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (5))){
var state_34686__$1 = state_34686;
var statearr_34691_34838 = state_34686__$1;
(statearr_34691_34838[(2)] = null);

(statearr_34691_34838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (6))){
var state_34686__$1 = state_34686;
var statearr_34692_34839 = state_34686__$1;
(statearr_34692_34839[(2)] = null);

(statearr_34692_34839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (7))){
var inst_34682 = (state_34686[(2)]);
var state_34686__$1 = state_34686;
var statearr_34693_34840 = state_34686__$1;
(statearr_34693_34840[(2)] = inst_34682);

(statearr_34693_34840[(1)] = (3));


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
});})(__34830,c__34504__auto___34834,G__34673_34831,G__34673_34832__$1,n__28553__auto___34829,jobs,results,process,async))
;
return ((function (__34830,switch__34416__auto__,c__34504__auto___34834,G__34673_34831,G__34673_34832__$1,n__28553__auto___34829,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____0 = (function (){
var statearr_34694 = [null,null,null,null,null,null,null];
(statearr_34694[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__);

(statearr_34694[(1)] = (1));

return statearr_34694;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____1 = (function (state_34686){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_34686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e34695){if((e34695 instanceof Object)){
var ex__34420__auto__ = e34695;
var statearr_34696_34841 = state_34686;
(statearr_34696_34841[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34842 = state_34686;
state_34686 = G__34842;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__ = function(state_34686){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____1.call(this,state_34686);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__;
})()
;})(__34830,switch__34416__auto__,c__34504__auto___34834,G__34673_34831,G__34673_34832__$1,n__28553__auto___34829,jobs,results,process,async))
})();
var state__34506__auto__ = (function (){var statearr_34697 = f__34505__auto__.call(null);
(statearr_34697[(6)] = c__34504__auto___34834);

return statearr_34697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(__34830,c__34504__auto___34834,G__34673_34831,G__34673_34832__$1,n__28553__auto___34829,jobs,results,process,async))
);


break;
case "async":
var c__34504__auto___34843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34830,c__34504__auto___34843,G__34673_34831,G__34673_34832__$1,n__28553__auto___34829,jobs,results,process,async){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (__34830,c__34504__auto___34843,G__34673_34831,G__34673_34832__$1,n__28553__auto___34829,jobs,results,process,async){
return (function (state_34710){
var state_val_34711 = (state_34710[(1)]);
if((state_val_34711 === (1))){
var state_34710__$1 = state_34710;
var statearr_34712_34844 = state_34710__$1;
(statearr_34712_34844[(2)] = null);

(statearr_34712_34844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34711 === (2))){
var state_34710__$1 = state_34710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34710__$1,(4),jobs);
} else {
if((state_val_34711 === (3))){
var inst_34708 = (state_34710[(2)]);
var state_34710__$1 = state_34710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34710__$1,inst_34708);
} else {
if((state_val_34711 === (4))){
var inst_34700 = (state_34710[(2)]);
var inst_34701 = async.call(null,inst_34700);
var state_34710__$1 = state_34710;
if(cljs.core.truth_(inst_34701)){
var statearr_34713_34845 = state_34710__$1;
(statearr_34713_34845[(1)] = (5));

} else {
var statearr_34714_34846 = state_34710__$1;
(statearr_34714_34846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34711 === (5))){
var state_34710__$1 = state_34710;
var statearr_34715_34847 = state_34710__$1;
(statearr_34715_34847[(2)] = null);

(statearr_34715_34847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34711 === (6))){
var state_34710__$1 = state_34710;
var statearr_34716_34848 = state_34710__$1;
(statearr_34716_34848[(2)] = null);

(statearr_34716_34848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34711 === (7))){
var inst_34706 = (state_34710[(2)]);
var state_34710__$1 = state_34710;
var statearr_34717_34849 = state_34710__$1;
(statearr_34717_34849[(2)] = inst_34706);

(statearr_34717_34849[(1)] = (3));


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
});})(__34830,c__34504__auto___34843,G__34673_34831,G__34673_34832__$1,n__28553__auto___34829,jobs,results,process,async))
;
return ((function (__34830,switch__34416__auto__,c__34504__auto___34843,G__34673_34831,G__34673_34832__$1,n__28553__auto___34829,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____0 = (function (){
var statearr_34718 = [null,null,null,null,null,null,null];
(statearr_34718[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__);

(statearr_34718[(1)] = (1));

return statearr_34718;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____1 = (function (state_34710){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_34710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e34719){if((e34719 instanceof Object)){
var ex__34420__auto__ = e34719;
var statearr_34720_34850 = state_34710;
(statearr_34720_34850[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34851 = state_34710;
state_34710 = G__34851;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__ = function(state_34710){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____1.call(this,state_34710);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__;
})()
;})(__34830,switch__34416__auto__,c__34504__auto___34843,G__34673_34831,G__34673_34832__$1,n__28553__auto___34829,jobs,results,process,async))
})();
var state__34506__auto__ = (function (){var statearr_34721 = f__34505__auto__.call(null);
(statearr_34721[(6)] = c__34504__auto___34843);

return statearr_34721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(__34830,c__34504__auto___34843,G__34673_34831,G__34673_34832__$1,n__28553__auto___34829,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34673_34832__$1)].join('')));

}

var G__34852 = (__34830 + (1));
__34830 = G__34852;
continue;
} else {
}
break;
}

var c__34504__auto___34853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto___34853,jobs,results,process,async){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto___34853,jobs,results,process,async){
return (function (state_34743){
var state_val_34744 = (state_34743[(1)]);
if((state_val_34744 === (1))){
var state_34743__$1 = state_34743;
var statearr_34745_34854 = state_34743__$1;
(statearr_34745_34854[(2)] = null);

(statearr_34745_34854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (2))){
var state_34743__$1 = state_34743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34743__$1,(4),from);
} else {
if((state_val_34744 === (3))){
var inst_34741 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34743__$1,inst_34741);
} else {
if((state_val_34744 === (4))){
var inst_34724 = (state_34743[(7)]);
var inst_34724__$1 = (state_34743[(2)]);
var inst_34725 = (inst_34724__$1 == null);
var state_34743__$1 = (function (){var statearr_34746 = state_34743;
(statearr_34746[(7)] = inst_34724__$1);

return statearr_34746;
})();
if(cljs.core.truth_(inst_34725)){
var statearr_34747_34855 = state_34743__$1;
(statearr_34747_34855[(1)] = (5));

} else {
var statearr_34748_34856 = state_34743__$1;
(statearr_34748_34856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (5))){
var inst_34727 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34743__$1 = state_34743;
var statearr_34749_34857 = state_34743__$1;
(statearr_34749_34857[(2)] = inst_34727);

(statearr_34749_34857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (6))){
var inst_34724 = (state_34743[(7)]);
var inst_34729 = (state_34743[(8)]);
var inst_34729__$1 = cljs.core.async.chan.call(null,(1));
var inst_34730 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34731 = [inst_34724,inst_34729__$1];
var inst_34732 = (new cljs.core.PersistentVector(null,2,(5),inst_34730,inst_34731,null));
var state_34743__$1 = (function (){var statearr_34750 = state_34743;
(statearr_34750[(8)] = inst_34729__$1);

return statearr_34750;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34743__$1,(8),jobs,inst_34732);
} else {
if((state_val_34744 === (7))){
var inst_34739 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
var statearr_34751_34858 = state_34743__$1;
(statearr_34751_34858[(2)] = inst_34739);

(statearr_34751_34858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (8))){
var inst_34729 = (state_34743[(8)]);
var inst_34734 = (state_34743[(2)]);
var state_34743__$1 = (function (){var statearr_34752 = state_34743;
(statearr_34752[(9)] = inst_34734);

return statearr_34752;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34743__$1,(9),results,inst_34729);
} else {
if((state_val_34744 === (9))){
var inst_34736 = (state_34743[(2)]);
var state_34743__$1 = (function (){var statearr_34753 = state_34743;
(statearr_34753[(10)] = inst_34736);

return statearr_34753;
})();
var statearr_34754_34859 = state_34743__$1;
(statearr_34754_34859[(2)] = null);

(statearr_34754_34859[(1)] = (2));


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
});})(c__34504__auto___34853,jobs,results,process,async))
;
return ((function (switch__34416__auto__,c__34504__auto___34853,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____0 = (function (){
var statearr_34755 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34755[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__);

(statearr_34755[(1)] = (1));

return statearr_34755;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____1 = (function (state_34743){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_34743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e34756){if((e34756 instanceof Object)){
var ex__34420__auto__ = e34756;
var statearr_34757_34860 = state_34743;
(statearr_34757_34860[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34861 = state_34743;
state_34743 = G__34861;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__ = function(state_34743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____1.call(this,state_34743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto___34853,jobs,results,process,async))
})();
var state__34506__auto__ = (function (){var statearr_34758 = f__34505__auto__.call(null);
(statearr_34758[(6)] = c__34504__auto___34853);

return statearr_34758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto___34853,jobs,results,process,async))
);


var c__34504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto__,jobs,results,process,async){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto__,jobs,results,process,async){
return (function (state_34796){
var state_val_34797 = (state_34796[(1)]);
if((state_val_34797 === (7))){
var inst_34792 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
var statearr_34798_34862 = state_34796__$1;
(statearr_34798_34862[(2)] = inst_34792);

(statearr_34798_34862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (20))){
var state_34796__$1 = state_34796;
var statearr_34799_34863 = state_34796__$1;
(statearr_34799_34863[(2)] = null);

(statearr_34799_34863[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (1))){
var state_34796__$1 = state_34796;
var statearr_34800_34864 = state_34796__$1;
(statearr_34800_34864[(2)] = null);

(statearr_34800_34864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (4))){
var inst_34761 = (state_34796[(7)]);
var inst_34761__$1 = (state_34796[(2)]);
var inst_34762 = (inst_34761__$1 == null);
var state_34796__$1 = (function (){var statearr_34801 = state_34796;
(statearr_34801[(7)] = inst_34761__$1);

return statearr_34801;
})();
if(cljs.core.truth_(inst_34762)){
var statearr_34802_34865 = state_34796__$1;
(statearr_34802_34865[(1)] = (5));

} else {
var statearr_34803_34866 = state_34796__$1;
(statearr_34803_34866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (15))){
var inst_34774 = (state_34796[(8)]);
var state_34796__$1 = state_34796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34796__$1,(18),to,inst_34774);
} else {
if((state_val_34797 === (21))){
var inst_34787 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
var statearr_34804_34867 = state_34796__$1;
(statearr_34804_34867[(2)] = inst_34787);

(statearr_34804_34867[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (13))){
var inst_34789 = (state_34796[(2)]);
var state_34796__$1 = (function (){var statearr_34805 = state_34796;
(statearr_34805[(9)] = inst_34789);

return statearr_34805;
})();
var statearr_34806_34868 = state_34796__$1;
(statearr_34806_34868[(2)] = null);

(statearr_34806_34868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (6))){
var inst_34761 = (state_34796[(7)]);
var state_34796__$1 = state_34796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34796__$1,(11),inst_34761);
} else {
if((state_val_34797 === (17))){
var inst_34782 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
if(cljs.core.truth_(inst_34782)){
var statearr_34807_34869 = state_34796__$1;
(statearr_34807_34869[(1)] = (19));

} else {
var statearr_34808_34870 = state_34796__$1;
(statearr_34808_34870[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (3))){
var inst_34794 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34796__$1,inst_34794);
} else {
if((state_val_34797 === (12))){
var inst_34771 = (state_34796[(10)]);
var state_34796__$1 = state_34796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34796__$1,(14),inst_34771);
} else {
if((state_val_34797 === (2))){
var state_34796__$1 = state_34796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34796__$1,(4),results);
} else {
if((state_val_34797 === (19))){
var state_34796__$1 = state_34796;
var statearr_34809_34871 = state_34796__$1;
(statearr_34809_34871[(2)] = null);

(statearr_34809_34871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (11))){
var inst_34771 = (state_34796[(2)]);
var state_34796__$1 = (function (){var statearr_34810 = state_34796;
(statearr_34810[(10)] = inst_34771);

return statearr_34810;
})();
var statearr_34811_34872 = state_34796__$1;
(statearr_34811_34872[(2)] = null);

(statearr_34811_34872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (9))){
var state_34796__$1 = state_34796;
var statearr_34812_34873 = state_34796__$1;
(statearr_34812_34873[(2)] = null);

(statearr_34812_34873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (5))){
var state_34796__$1 = state_34796;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34813_34874 = state_34796__$1;
(statearr_34813_34874[(1)] = (8));

} else {
var statearr_34814_34875 = state_34796__$1;
(statearr_34814_34875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (14))){
var inst_34774 = (state_34796[(8)]);
var inst_34776 = (state_34796[(11)]);
var inst_34774__$1 = (state_34796[(2)]);
var inst_34775 = (inst_34774__$1 == null);
var inst_34776__$1 = cljs.core.not.call(null,inst_34775);
var state_34796__$1 = (function (){var statearr_34815 = state_34796;
(statearr_34815[(8)] = inst_34774__$1);

(statearr_34815[(11)] = inst_34776__$1);

return statearr_34815;
})();
if(inst_34776__$1){
var statearr_34816_34876 = state_34796__$1;
(statearr_34816_34876[(1)] = (15));

} else {
var statearr_34817_34877 = state_34796__$1;
(statearr_34817_34877[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (16))){
var inst_34776 = (state_34796[(11)]);
var state_34796__$1 = state_34796;
var statearr_34818_34878 = state_34796__$1;
(statearr_34818_34878[(2)] = inst_34776);

(statearr_34818_34878[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (10))){
var inst_34768 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
var statearr_34819_34879 = state_34796__$1;
(statearr_34819_34879[(2)] = inst_34768);

(statearr_34819_34879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (18))){
var inst_34779 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
var statearr_34820_34880 = state_34796__$1;
(statearr_34820_34880[(2)] = inst_34779);

(statearr_34820_34880[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (8))){
var inst_34765 = cljs.core.async.close_BANG_.call(null,to);
var state_34796__$1 = state_34796;
var statearr_34821_34881 = state_34796__$1;
(statearr_34821_34881[(2)] = inst_34765);

(statearr_34821_34881[(1)] = (10));


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
});})(c__34504__auto__,jobs,results,process,async))
;
return ((function (switch__34416__auto__,c__34504__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____0 = (function (){
var statearr_34822 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34822[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__);

(statearr_34822[(1)] = (1));

return statearr_34822;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____1 = (function (state_34796){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_34796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e34823){if((e34823 instanceof Object)){
var ex__34420__auto__ = e34823;
var statearr_34824_34882 = state_34796;
(statearr_34824_34882[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34883 = state_34796;
state_34796 = G__34883;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__ = function(state_34796){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____1.call(this,state_34796);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34417__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto__,jobs,results,process,async))
})();
var state__34506__auto__ = (function (){var statearr_34825 = f__34505__auto__.call(null);
(statearr_34825[(6)] = c__34504__auto__);

return statearr_34825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto__,jobs,results,process,async))
);

return c__34504__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34885 = arguments.length;
switch (G__34885) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34888 = arguments.length;
switch (G__34888) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34891 = arguments.length;
switch (G__34891) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__34504__auto___34940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto___34940,tc,fc){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto___34940,tc,fc){
return (function (state_34917){
var state_val_34918 = (state_34917[(1)]);
if((state_val_34918 === (7))){
var inst_34913 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
var statearr_34919_34941 = state_34917__$1;
(statearr_34919_34941[(2)] = inst_34913);

(statearr_34919_34941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (1))){
var state_34917__$1 = state_34917;
var statearr_34920_34942 = state_34917__$1;
(statearr_34920_34942[(2)] = null);

(statearr_34920_34942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (4))){
var inst_34894 = (state_34917[(7)]);
var inst_34894__$1 = (state_34917[(2)]);
var inst_34895 = (inst_34894__$1 == null);
var state_34917__$1 = (function (){var statearr_34921 = state_34917;
(statearr_34921[(7)] = inst_34894__$1);

return statearr_34921;
})();
if(cljs.core.truth_(inst_34895)){
var statearr_34922_34943 = state_34917__$1;
(statearr_34922_34943[(1)] = (5));

} else {
var statearr_34923_34944 = state_34917__$1;
(statearr_34923_34944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (13))){
var state_34917__$1 = state_34917;
var statearr_34924_34945 = state_34917__$1;
(statearr_34924_34945[(2)] = null);

(statearr_34924_34945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (6))){
var inst_34894 = (state_34917[(7)]);
var inst_34900 = p.call(null,inst_34894);
var state_34917__$1 = state_34917;
if(cljs.core.truth_(inst_34900)){
var statearr_34925_34946 = state_34917__$1;
(statearr_34925_34946[(1)] = (9));

} else {
var statearr_34926_34947 = state_34917__$1;
(statearr_34926_34947[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (3))){
var inst_34915 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34917__$1,inst_34915);
} else {
if((state_val_34918 === (12))){
var state_34917__$1 = state_34917;
var statearr_34927_34948 = state_34917__$1;
(statearr_34927_34948[(2)] = null);

(statearr_34927_34948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (2))){
var state_34917__$1 = state_34917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34917__$1,(4),ch);
} else {
if((state_val_34918 === (11))){
var inst_34894 = (state_34917[(7)]);
var inst_34904 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34917__$1,(8),inst_34904,inst_34894);
} else {
if((state_val_34918 === (9))){
var state_34917__$1 = state_34917;
var statearr_34928_34949 = state_34917__$1;
(statearr_34928_34949[(2)] = tc);

(statearr_34928_34949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (5))){
var inst_34897 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34898 = cljs.core.async.close_BANG_.call(null,fc);
var state_34917__$1 = (function (){var statearr_34929 = state_34917;
(statearr_34929[(8)] = inst_34897);

return statearr_34929;
})();
var statearr_34930_34950 = state_34917__$1;
(statearr_34930_34950[(2)] = inst_34898);

(statearr_34930_34950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (14))){
var inst_34911 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
var statearr_34931_34951 = state_34917__$1;
(statearr_34931_34951[(2)] = inst_34911);

(statearr_34931_34951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (10))){
var state_34917__$1 = state_34917;
var statearr_34932_34952 = state_34917__$1;
(statearr_34932_34952[(2)] = fc);

(statearr_34932_34952[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34918 === (8))){
var inst_34906 = (state_34917[(2)]);
var state_34917__$1 = state_34917;
if(cljs.core.truth_(inst_34906)){
var statearr_34933_34953 = state_34917__$1;
(statearr_34933_34953[(1)] = (12));

} else {
var statearr_34934_34954 = state_34917__$1;
(statearr_34934_34954[(1)] = (13));

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
});})(c__34504__auto___34940,tc,fc))
;
return ((function (switch__34416__auto__,c__34504__auto___34940,tc,fc){
return (function() {
var cljs$core$async$state_machine__34417__auto__ = null;
var cljs$core$async$state_machine__34417__auto____0 = (function (){
var statearr_34935 = [null,null,null,null,null,null,null,null,null];
(statearr_34935[(0)] = cljs$core$async$state_machine__34417__auto__);

(statearr_34935[(1)] = (1));

return statearr_34935;
});
var cljs$core$async$state_machine__34417__auto____1 = (function (state_34917){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_34917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e34936){if((e34936 instanceof Object)){
var ex__34420__auto__ = e34936;
var statearr_34937_34955 = state_34917;
(statearr_34937_34955[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34956 = state_34917;
state_34917 = G__34956;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$state_machine__34417__auto__ = function(state_34917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34417__auto____1.call(this,state_34917);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34417__auto____0;
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34417__auto____1;
return cljs$core$async$state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto___34940,tc,fc))
})();
var state__34506__auto__ = (function (){var statearr_34938 = f__34505__auto__.call(null);
(statearr_34938[(6)] = c__34504__auto___34940);

return statearr_34938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto___34940,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto__){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto__){
return (function (state_34977){
var state_val_34978 = (state_34977[(1)]);
if((state_val_34978 === (7))){
var inst_34973 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_34979_34997 = state_34977__$1;
(statearr_34979_34997[(2)] = inst_34973);

(statearr_34979_34997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (1))){
var inst_34957 = init;
var state_34977__$1 = (function (){var statearr_34980 = state_34977;
(statearr_34980[(7)] = inst_34957);

return statearr_34980;
})();
var statearr_34981_34998 = state_34977__$1;
(statearr_34981_34998[(2)] = null);

(statearr_34981_34998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (4))){
var inst_34960 = (state_34977[(8)]);
var inst_34960__$1 = (state_34977[(2)]);
var inst_34961 = (inst_34960__$1 == null);
var state_34977__$1 = (function (){var statearr_34982 = state_34977;
(statearr_34982[(8)] = inst_34960__$1);

return statearr_34982;
})();
if(cljs.core.truth_(inst_34961)){
var statearr_34983_34999 = state_34977__$1;
(statearr_34983_34999[(1)] = (5));

} else {
var statearr_34984_35000 = state_34977__$1;
(statearr_34984_35000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (6))){
var inst_34964 = (state_34977[(9)]);
var inst_34957 = (state_34977[(7)]);
var inst_34960 = (state_34977[(8)]);
var inst_34964__$1 = f.call(null,inst_34957,inst_34960);
var inst_34965 = cljs.core.reduced_QMARK_.call(null,inst_34964__$1);
var state_34977__$1 = (function (){var statearr_34985 = state_34977;
(statearr_34985[(9)] = inst_34964__$1);

return statearr_34985;
})();
if(inst_34965){
var statearr_34986_35001 = state_34977__$1;
(statearr_34986_35001[(1)] = (8));

} else {
var statearr_34987_35002 = state_34977__$1;
(statearr_34987_35002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (3))){
var inst_34975 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34977__$1,inst_34975);
} else {
if((state_val_34978 === (2))){
var state_34977__$1 = state_34977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34977__$1,(4),ch);
} else {
if((state_val_34978 === (9))){
var inst_34964 = (state_34977[(9)]);
var inst_34957 = inst_34964;
var state_34977__$1 = (function (){var statearr_34988 = state_34977;
(statearr_34988[(7)] = inst_34957);

return statearr_34988;
})();
var statearr_34989_35003 = state_34977__$1;
(statearr_34989_35003[(2)] = null);

(statearr_34989_35003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (5))){
var inst_34957 = (state_34977[(7)]);
var state_34977__$1 = state_34977;
var statearr_34990_35004 = state_34977__$1;
(statearr_34990_35004[(2)] = inst_34957);

(statearr_34990_35004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (10))){
var inst_34971 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_34991_35005 = state_34977__$1;
(statearr_34991_35005[(2)] = inst_34971);

(statearr_34991_35005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (8))){
var inst_34964 = (state_34977[(9)]);
var inst_34967 = cljs.core.deref.call(null,inst_34964);
var state_34977__$1 = state_34977;
var statearr_34992_35006 = state_34977__$1;
(statearr_34992_35006[(2)] = inst_34967);

(statearr_34992_35006[(1)] = (10));


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
});})(c__34504__auto__))
;
return ((function (switch__34416__auto__,c__34504__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34417__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34417__auto____0 = (function (){
var statearr_34993 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34993[(0)] = cljs$core$async$reduce_$_state_machine__34417__auto__);

(statearr_34993[(1)] = (1));

return statearr_34993;
});
var cljs$core$async$reduce_$_state_machine__34417__auto____1 = (function (state_34977){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_34977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e34994){if((e34994 instanceof Object)){
var ex__34420__auto__ = e34994;
var statearr_34995_35007 = state_34977;
(statearr_34995_35007[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35008 = state_34977;
state_34977 = G__35008;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34417__auto__ = function(state_34977){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34417__auto____1.call(this,state_34977);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34417__auto____0;
cljs$core$async$reduce_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34417__auto____1;
return cljs$core$async$reduce_$_state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto__))
})();
var state__34506__auto__ = (function (){var statearr_34996 = f__34505__auto__.call(null);
(statearr_34996[(6)] = c__34504__auto__);

return statearr_34996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto__))
);

return c__34504__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto__,f__$1){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto__,f__$1){
return (function (state_35014){
var state_val_35015 = (state_35014[(1)]);
if((state_val_35015 === (1))){
var inst_35009 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_35014__$1 = state_35014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35014__$1,(2),inst_35009);
} else {
if((state_val_35015 === (2))){
var inst_35011 = (state_35014[(2)]);
var inst_35012 = f__$1.call(null,inst_35011);
var state_35014__$1 = state_35014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35014__$1,inst_35012);
} else {
return null;
}
}
});})(c__34504__auto__,f__$1))
;
return ((function (switch__34416__auto__,c__34504__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34417__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34417__auto____0 = (function (){
var statearr_35016 = [null,null,null,null,null,null,null];
(statearr_35016[(0)] = cljs$core$async$transduce_$_state_machine__34417__auto__);

(statearr_35016[(1)] = (1));

return statearr_35016;
});
var cljs$core$async$transduce_$_state_machine__34417__auto____1 = (function (state_35014){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_35014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e35017){if((e35017 instanceof Object)){
var ex__34420__auto__ = e35017;
var statearr_35018_35020 = state_35014;
(statearr_35018_35020[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35021 = state_35014;
state_35014 = G__35021;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34417__auto__ = function(state_35014){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34417__auto____1.call(this,state_35014);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34417__auto____0;
cljs$core$async$transduce_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34417__auto____1;
return cljs$core$async$transduce_$_state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto__,f__$1))
})();
var state__34506__auto__ = (function (){var statearr_35019 = f__34505__auto__.call(null);
(statearr_35019[(6)] = c__34504__auto__);

return statearr_35019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto__,f__$1))
);

return c__34504__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__35023 = arguments.length;
switch (G__35023) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto__){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto__){
return (function (state_35048){
var state_val_35049 = (state_35048[(1)]);
if((state_val_35049 === (7))){
var inst_35030 = (state_35048[(2)]);
var state_35048__$1 = state_35048;
var statearr_35050_35071 = state_35048__$1;
(statearr_35050_35071[(2)] = inst_35030);

(statearr_35050_35071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (1))){
var inst_35024 = cljs.core.seq.call(null,coll);
var inst_35025 = inst_35024;
var state_35048__$1 = (function (){var statearr_35051 = state_35048;
(statearr_35051[(7)] = inst_35025);

return statearr_35051;
})();
var statearr_35052_35072 = state_35048__$1;
(statearr_35052_35072[(2)] = null);

(statearr_35052_35072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (4))){
var inst_35025 = (state_35048[(7)]);
var inst_35028 = cljs.core.first.call(null,inst_35025);
var state_35048__$1 = state_35048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35048__$1,(7),ch,inst_35028);
} else {
if((state_val_35049 === (13))){
var inst_35042 = (state_35048[(2)]);
var state_35048__$1 = state_35048;
var statearr_35053_35073 = state_35048__$1;
(statearr_35053_35073[(2)] = inst_35042);

(statearr_35053_35073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (6))){
var inst_35033 = (state_35048[(2)]);
var state_35048__$1 = state_35048;
if(cljs.core.truth_(inst_35033)){
var statearr_35054_35074 = state_35048__$1;
(statearr_35054_35074[(1)] = (8));

} else {
var statearr_35055_35075 = state_35048__$1;
(statearr_35055_35075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (3))){
var inst_35046 = (state_35048[(2)]);
var state_35048__$1 = state_35048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35048__$1,inst_35046);
} else {
if((state_val_35049 === (12))){
var state_35048__$1 = state_35048;
var statearr_35056_35076 = state_35048__$1;
(statearr_35056_35076[(2)] = null);

(statearr_35056_35076[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (2))){
var inst_35025 = (state_35048[(7)]);
var state_35048__$1 = state_35048;
if(cljs.core.truth_(inst_35025)){
var statearr_35057_35077 = state_35048__$1;
(statearr_35057_35077[(1)] = (4));

} else {
var statearr_35058_35078 = state_35048__$1;
(statearr_35058_35078[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (11))){
var inst_35039 = cljs.core.async.close_BANG_.call(null,ch);
var state_35048__$1 = state_35048;
var statearr_35059_35079 = state_35048__$1;
(statearr_35059_35079[(2)] = inst_35039);

(statearr_35059_35079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (9))){
var state_35048__$1 = state_35048;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35060_35080 = state_35048__$1;
(statearr_35060_35080[(1)] = (11));

} else {
var statearr_35061_35081 = state_35048__$1;
(statearr_35061_35081[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (5))){
var inst_35025 = (state_35048[(7)]);
var state_35048__$1 = state_35048;
var statearr_35062_35082 = state_35048__$1;
(statearr_35062_35082[(2)] = inst_35025);

(statearr_35062_35082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (10))){
var inst_35044 = (state_35048[(2)]);
var state_35048__$1 = state_35048;
var statearr_35063_35083 = state_35048__$1;
(statearr_35063_35083[(2)] = inst_35044);

(statearr_35063_35083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (8))){
var inst_35025 = (state_35048[(7)]);
var inst_35035 = cljs.core.next.call(null,inst_35025);
var inst_35025__$1 = inst_35035;
var state_35048__$1 = (function (){var statearr_35064 = state_35048;
(statearr_35064[(7)] = inst_35025__$1);

return statearr_35064;
})();
var statearr_35065_35084 = state_35048__$1;
(statearr_35065_35084[(2)] = null);

(statearr_35065_35084[(1)] = (2));


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
});})(c__34504__auto__))
;
return ((function (switch__34416__auto__,c__34504__auto__){
return (function() {
var cljs$core$async$state_machine__34417__auto__ = null;
var cljs$core$async$state_machine__34417__auto____0 = (function (){
var statearr_35066 = [null,null,null,null,null,null,null,null];
(statearr_35066[(0)] = cljs$core$async$state_machine__34417__auto__);

(statearr_35066[(1)] = (1));

return statearr_35066;
});
var cljs$core$async$state_machine__34417__auto____1 = (function (state_35048){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_35048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e35067){if((e35067 instanceof Object)){
var ex__34420__auto__ = e35067;
var statearr_35068_35085 = state_35048;
(statearr_35068_35085[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35086 = state_35048;
state_35048 = G__35086;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$state_machine__34417__auto__ = function(state_35048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34417__auto____1.call(this,state_35048);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34417__auto____0;
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34417__auto____1;
return cljs$core$async$state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto__))
})();
var state__34506__auto__ = (function (){var statearr_35069 = f__34505__auto__.call(null);
(statearr_35069[(6)] = c__34504__auto__);

return statearr_35069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto__))
);

return c__34504__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28298__auto__ = (((_ == null))?null:_);
var m__28299__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28298__auto__)]);
if(!((m__28299__auto__ == null))){
return m__28299__auto__.call(null,_);
} else {
var m__28299__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28299__auto____$1 == null))){
return m__28299__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28298__auto__ = (((m == null))?null:m);
var m__28299__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28298__auto__)]);
if(!((m__28299__auto__ == null))){
return m__28299__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28299__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28299__auto____$1 == null))){
return m__28299__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28298__auto__ = (((m == null))?null:m);
var m__28299__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28298__auto__)]);
if(!((m__28299__auto__ == null))){
return m__28299__auto__.call(null,m,ch);
} else {
var m__28299__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28299__auto____$1 == null))){
return m__28299__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28298__auto__ = (((m == null))?null:m);
var m__28299__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28298__auto__)]);
if(!((m__28299__auto__ == null))){
return m__28299__auto__.call(null,m);
} else {
var m__28299__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28299__auto____$1 == null))){
return m__28299__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35087 = (function (ch,cs,meta35088){
this.ch = ch;
this.cs = cs;
this.meta35088 = meta35088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35089,meta35088__$1){
var self__ = this;
var _35089__$1 = this;
return (new cljs.core.async.t_cljs$core$async35087(self__.ch,self__.cs,meta35088__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35089){
var self__ = this;
var _35089__$1 = this;
return self__.meta35088;
});})(cs))
;

cljs.core.async.t_cljs$core$async35087.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35087.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35087.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35087.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35087.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35087.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35087.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35088","meta35088",-1660559712,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35087";

cljs.core.async.t_cljs$core$async35087.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28240__auto__,writer__28241__auto__,opt__28242__auto__){
return cljs.core._write.call(null,writer__28241__auto__,"cljs.core.async/t_cljs$core$async35087");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35087 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35087(ch__$1,cs__$1,meta35088){
return (new cljs.core.async.t_cljs$core$async35087(ch__$1,cs__$1,meta35088));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35087(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__34504__auto___35309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto___35309,cs,m,dchan,dctr,done){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto___35309,cs,m,dchan,dctr,done){
return (function (state_35224){
var state_val_35225 = (state_35224[(1)]);
if((state_val_35225 === (7))){
var inst_35220 = (state_35224[(2)]);
var state_35224__$1 = state_35224;
var statearr_35226_35310 = state_35224__$1;
(statearr_35226_35310[(2)] = inst_35220);

(statearr_35226_35310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (20))){
var inst_35123 = (state_35224[(7)]);
var inst_35135 = cljs.core.first.call(null,inst_35123);
var inst_35136 = cljs.core.nth.call(null,inst_35135,(0),null);
var inst_35137 = cljs.core.nth.call(null,inst_35135,(1),null);
var state_35224__$1 = (function (){var statearr_35227 = state_35224;
(statearr_35227[(8)] = inst_35136);

return statearr_35227;
})();
if(cljs.core.truth_(inst_35137)){
var statearr_35228_35311 = state_35224__$1;
(statearr_35228_35311[(1)] = (22));

} else {
var statearr_35229_35312 = state_35224__$1;
(statearr_35229_35312[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (27))){
var inst_35172 = (state_35224[(9)]);
var inst_35167 = (state_35224[(10)]);
var inst_35092 = (state_35224[(11)]);
var inst_35165 = (state_35224[(12)]);
var inst_35172__$1 = cljs.core._nth.call(null,inst_35165,inst_35167);
var inst_35173 = cljs.core.async.put_BANG_.call(null,inst_35172__$1,inst_35092,done);
var state_35224__$1 = (function (){var statearr_35230 = state_35224;
(statearr_35230[(9)] = inst_35172__$1);

return statearr_35230;
})();
if(cljs.core.truth_(inst_35173)){
var statearr_35231_35313 = state_35224__$1;
(statearr_35231_35313[(1)] = (30));

} else {
var statearr_35232_35314 = state_35224__$1;
(statearr_35232_35314[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (1))){
var state_35224__$1 = state_35224;
var statearr_35233_35315 = state_35224__$1;
(statearr_35233_35315[(2)] = null);

(statearr_35233_35315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (24))){
var inst_35123 = (state_35224[(7)]);
var inst_35142 = (state_35224[(2)]);
var inst_35143 = cljs.core.next.call(null,inst_35123);
var inst_35101 = inst_35143;
var inst_35102 = null;
var inst_35103 = (0);
var inst_35104 = (0);
var state_35224__$1 = (function (){var statearr_35234 = state_35224;
(statearr_35234[(13)] = inst_35103);

(statearr_35234[(14)] = inst_35142);

(statearr_35234[(15)] = inst_35102);

(statearr_35234[(16)] = inst_35104);

(statearr_35234[(17)] = inst_35101);

return statearr_35234;
})();
var statearr_35235_35316 = state_35224__$1;
(statearr_35235_35316[(2)] = null);

(statearr_35235_35316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (39))){
var state_35224__$1 = state_35224;
var statearr_35239_35317 = state_35224__$1;
(statearr_35239_35317[(2)] = null);

(statearr_35239_35317[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (4))){
var inst_35092 = (state_35224[(11)]);
var inst_35092__$1 = (state_35224[(2)]);
var inst_35093 = (inst_35092__$1 == null);
var state_35224__$1 = (function (){var statearr_35240 = state_35224;
(statearr_35240[(11)] = inst_35092__$1);

return statearr_35240;
})();
if(cljs.core.truth_(inst_35093)){
var statearr_35241_35318 = state_35224__$1;
(statearr_35241_35318[(1)] = (5));

} else {
var statearr_35242_35319 = state_35224__$1;
(statearr_35242_35319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (15))){
var inst_35103 = (state_35224[(13)]);
var inst_35102 = (state_35224[(15)]);
var inst_35104 = (state_35224[(16)]);
var inst_35101 = (state_35224[(17)]);
var inst_35119 = (state_35224[(2)]);
var inst_35120 = (inst_35104 + (1));
var tmp35236 = inst_35103;
var tmp35237 = inst_35102;
var tmp35238 = inst_35101;
var inst_35101__$1 = tmp35238;
var inst_35102__$1 = tmp35237;
var inst_35103__$1 = tmp35236;
var inst_35104__$1 = inst_35120;
var state_35224__$1 = (function (){var statearr_35243 = state_35224;
(statearr_35243[(13)] = inst_35103__$1);

(statearr_35243[(15)] = inst_35102__$1);

(statearr_35243[(16)] = inst_35104__$1);

(statearr_35243[(18)] = inst_35119);

(statearr_35243[(17)] = inst_35101__$1);

return statearr_35243;
})();
var statearr_35244_35320 = state_35224__$1;
(statearr_35244_35320[(2)] = null);

(statearr_35244_35320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (21))){
var inst_35146 = (state_35224[(2)]);
var state_35224__$1 = state_35224;
var statearr_35248_35321 = state_35224__$1;
(statearr_35248_35321[(2)] = inst_35146);

(statearr_35248_35321[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (31))){
var inst_35172 = (state_35224[(9)]);
var inst_35176 = done.call(null,null);
var inst_35177 = cljs.core.async.untap_STAR_.call(null,m,inst_35172);
var state_35224__$1 = (function (){var statearr_35249 = state_35224;
(statearr_35249[(19)] = inst_35176);

return statearr_35249;
})();
var statearr_35250_35322 = state_35224__$1;
(statearr_35250_35322[(2)] = inst_35177);

(statearr_35250_35322[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (32))){
var inst_35164 = (state_35224[(20)]);
var inst_35167 = (state_35224[(10)]);
var inst_35166 = (state_35224[(21)]);
var inst_35165 = (state_35224[(12)]);
var inst_35179 = (state_35224[(2)]);
var inst_35180 = (inst_35167 + (1));
var tmp35245 = inst_35164;
var tmp35246 = inst_35166;
var tmp35247 = inst_35165;
var inst_35164__$1 = tmp35245;
var inst_35165__$1 = tmp35247;
var inst_35166__$1 = tmp35246;
var inst_35167__$1 = inst_35180;
var state_35224__$1 = (function (){var statearr_35251 = state_35224;
(statearr_35251[(20)] = inst_35164__$1);

(statearr_35251[(10)] = inst_35167__$1);

(statearr_35251[(22)] = inst_35179);

(statearr_35251[(21)] = inst_35166__$1);

(statearr_35251[(12)] = inst_35165__$1);

return statearr_35251;
})();
var statearr_35252_35323 = state_35224__$1;
(statearr_35252_35323[(2)] = null);

(statearr_35252_35323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (40))){
var inst_35192 = (state_35224[(23)]);
var inst_35196 = done.call(null,null);
var inst_35197 = cljs.core.async.untap_STAR_.call(null,m,inst_35192);
var state_35224__$1 = (function (){var statearr_35253 = state_35224;
(statearr_35253[(24)] = inst_35196);

return statearr_35253;
})();
var statearr_35254_35324 = state_35224__$1;
(statearr_35254_35324[(2)] = inst_35197);

(statearr_35254_35324[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (33))){
var inst_35183 = (state_35224[(25)]);
var inst_35185 = cljs.core.chunked_seq_QMARK_.call(null,inst_35183);
var state_35224__$1 = state_35224;
if(inst_35185){
var statearr_35255_35325 = state_35224__$1;
(statearr_35255_35325[(1)] = (36));

} else {
var statearr_35256_35326 = state_35224__$1;
(statearr_35256_35326[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (13))){
var inst_35113 = (state_35224[(26)]);
var inst_35116 = cljs.core.async.close_BANG_.call(null,inst_35113);
var state_35224__$1 = state_35224;
var statearr_35257_35327 = state_35224__$1;
(statearr_35257_35327[(2)] = inst_35116);

(statearr_35257_35327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (22))){
var inst_35136 = (state_35224[(8)]);
var inst_35139 = cljs.core.async.close_BANG_.call(null,inst_35136);
var state_35224__$1 = state_35224;
var statearr_35258_35328 = state_35224__$1;
(statearr_35258_35328[(2)] = inst_35139);

(statearr_35258_35328[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (36))){
var inst_35183 = (state_35224[(25)]);
var inst_35187 = cljs.core.chunk_first.call(null,inst_35183);
var inst_35188 = cljs.core.chunk_rest.call(null,inst_35183);
var inst_35189 = cljs.core.count.call(null,inst_35187);
var inst_35164 = inst_35188;
var inst_35165 = inst_35187;
var inst_35166 = inst_35189;
var inst_35167 = (0);
var state_35224__$1 = (function (){var statearr_35259 = state_35224;
(statearr_35259[(20)] = inst_35164);

(statearr_35259[(10)] = inst_35167);

(statearr_35259[(21)] = inst_35166);

(statearr_35259[(12)] = inst_35165);

return statearr_35259;
})();
var statearr_35260_35329 = state_35224__$1;
(statearr_35260_35329[(2)] = null);

(statearr_35260_35329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (41))){
var inst_35183 = (state_35224[(25)]);
var inst_35199 = (state_35224[(2)]);
var inst_35200 = cljs.core.next.call(null,inst_35183);
var inst_35164 = inst_35200;
var inst_35165 = null;
var inst_35166 = (0);
var inst_35167 = (0);
var state_35224__$1 = (function (){var statearr_35261 = state_35224;
(statearr_35261[(20)] = inst_35164);

(statearr_35261[(10)] = inst_35167);

(statearr_35261[(27)] = inst_35199);

(statearr_35261[(21)] = inst_35166);

(statearr_35261[(12)] = inst_35165);

return statearr_35261;
})();
var statearr_35262_35330 = state_35224__$1;
(statearr_35262_35330[(2)] = null);

(statearr_35262_35330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (43))){
var state_35224__$1 = state_35224;
var statearr_35263_35331 = state_35224__$1;
(statearr_35263_35331[(2)] = null);

(statearr_35263_35331[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (29))){
var inst_35208 = (state_35224[(2)]);
var state_35224__$1 = state_35224;
var statearr_35264_35332 = state_35224__$1;
(statearr_35264_35332[(2)] = inst_35208);

(statearr_35264_35332[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (44))){
var inst_35217 = (state_35224[(2)]);
var state_35224__$1 = (function (){var statearr_35265 = state_35224;
(statearr_35265[(28)] = inst_35217);

return statearr_35265;
})();
var statearr_35266_35333 = state_35224__$1;
(statearr_35266_35333[(2)] = null);

(statearr_35266_35333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (6))){
var inst_35156 = (state_35224[(29)]);
var inst_35155 = cljs.core.deref.call(null,cs);
var inst_35156__$1 = cljs.core.keys.call(null,inst_35155);
var inst_35157 = cljs.core.count.call(null,inst_35156__$1);
var inst_35158 = cljs.core.reset_BANG_.call(null,dctr,inst_35157);
var inst_35163 = cljs.core.seq.call(null,inst_35156__$1);
var inst_35164 = inst_35163;
var inst_35165 = null;
var inst_35166 = (0);
var inst_35167 = (0);
var state_35224__$1 = (function (){var statearr_35267 = state_35224;
(statearr_35267[(20)] = inst_35164);

(statearr_35267[(10)] = inst_35167);

(statearr_35267[(21)] = inst_35166);

(statearr_35267[(29)] = inst_35156__$1);

(statearr_35267[(30)] = inst_35158);

(statearr_35267[(12)] = inst_35165);

return statearr_35267;
})();
var statearr_35268_35334 = state_35224__$1;
(statearr_35268_35334[(2)] = null);

(statearr_35268_35334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (28))){
var inst_35164 = (state_35224[(20)]);
var inst_35183 = (state_35224[(25)]);
var inst_35183__$1 = cljs.core.seq.call(null,inst_35164);
var state_35224__$1 = (function (){var statearr_35269 = state_35224;
(statearr_35269[(25)] = inst_35183__$1);

return statearr_35269;
})();
if(inst_35183__$1){
var statearr_35270_35335 = state_35224__$1;
(statearr_35270_35335[(1)] = (33));

} else {
var statearr_35271_35336 = state_35224__$1;
(statearr_35271_35336[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (25))){
var inst_35167 = (state_35224[(10)]);
var inst_35166 = (state_35224[(21)]);
var inst_35169 = (inst_35167 < inst_35166);
var inst_35170 = inst_35169;
var state_35224__$1 = state_35224;
if(cljs.core.truth_(inst_35170)){
var statearr_35272_35337 = state_35224__$1;
(statearr_35272_35337[(1)] = (27));

} else {
var statearr_35273_35338 = state_35224__$1;
(statearr_35273_35338[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (34))){
var state_35224__$1 = state_35224;
var statearr_35274_35339 = state_35224__$1;
(statearr_35274_35339[(2)] = null);

(statearr_35274_35339[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (17))){
var state_35224__$1 = state_35224;
var statearr_35275_35340 = state_35224__$1;
(statearr_35275_35340[(2)] = null);

(statearr_35275_35340[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (3))){
var inst_35222 = (state_35224[(2)]);
var state_35224__$1 = state_35224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35224__$1,inst_35222);
} else {
if((state_val_35225 === (12))){
var inst_35151 = (state_35224[(2)]);
var state_35224__$1 = state_35224;
var statearr_35276_35341 = state_35224__$1;
(statearr_35276_35341[(2)] = inst_35151);

(statearr_35276_35341[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (2))){
var state_35224__$1 = state_35224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35224__$1,(4),ch);
} else {
if((state_val_35225 === (23))){
var state_35224__$1 = state_35224;
var statearr_35277_35342 = state_35224__$1;
(statearr_35277_35342[(2)] = null);

(statearr_35277_35342[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (35))){
var inst_35206 = (state_35224[(2)]);
var state_35224__$1 = state_35224;
var statearr_35278_35343 = state_35224__$1;
(statearr_35278_35343[(2)] = inst_35206);

(statearr_35278_35343[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (19))){
var inst_35123 = (state_35224[(7)]);
var inst_35127 = cljs.core.chunk_first.call(null,inst_35123);
var inst_35128 = cljs.core.chunk_rest.call(null,inst_35123);
var inst_35129 = cljs.core.count.call(null,inst_35127);
var inst_35101 = inst_35128;
var inst_35102 = inst_35127;
var inst_35103 = inst_35129;
var inst_35104 = (0);
var state_35224__$1 = (function (){var statearr_35279 = state_35224;
(statearr_35279[(13)] = inst_35103);

(statearr_35279[(15)] = inst_35102);

(statearr_35279[(16)] = inst_35104);

(statearr_35279[(17)] = inst_35101);

return statearr_35279;
})();
var statearr_35280_35344 = state_35224__$1;
(statearr_35280_35344[(2)] = null);

(statearr_35280_35344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (11))){
var inst_35123 = (state_35224[(7)]);
var inst_35101 = (state_35224[(17)]);
var inst_35123__$1 = cljs.core.seq.call(null,inst_35101);
var state_35224__$1 = (function (){var statearr_35281 = state_35224;
(statearr_35281[(7)] = inst_35123__$1);

return statearr_35281;
})();
if(inst_35123__$1){
var statearr_35282_35345 = state_35224__$1;
(statearr_35282_35345[(1)] = (16));

} else {
var statearr_35283_35346 = state_35224__$1;
(statearr_35283_35346[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (9))){
var inst_35153 = (state_35224[(2)]);
var state_35224__$1 = state_35224;
var statearr_35284_35347 = state_35224__$1;
(statearr_35284_35347[(2)] = inst_35153);

(statearr_35284_35347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (5))){
var inst_35099 = cljs.core.deref.call(null,cs);
var inst_35100 = cljs.core.seq.call(null,inst_35099);
var inst_35101 = inst_35100;
var inst_35102 = null;
var inst_35103 = (0);
var inst_35104 = (0);
var state_35224__$1 = (function (){var statearr_35285 = state_35224;
(statearr_35285[(13)] = inst_35103);

(statearr_35285[(15)] = inst_35102);

(statearr_35285[(16)] = inst_35104);

(statearr_35285[(17)] = inst_35101);

return statearr_35285;
})();
var statearr_35286_35348 = state_35224__$1;
(statearr_35286_35348[(2)] = null);

(statearr_35286_35348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (14))){
var state_35224__$1 = state_35224;
var statearr_35287_35349 = state_35224__$1;
(statearr_35287_35349[(2)] = null);

(statearr_35287_35349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (45))){
var inst_35214 = (state_35224[(2)]);
var state_35224__$1 = state_35224;
var statearr_35288_35350 = state_35224__$1;
(statearr_35288_35350[(2)] = inst_35214);

(statearr_35288_35350[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (26))){
var inst_35156 = (state_35224[(29)]);
var inst_35210 = (state_35224[(2)]);
var inst_35211 = cljs.core.seq.call(null,inst_35156);
var state_35224__$1 = (function (){var statearr_35289 = state_35224;
(statearr_35289[(31)] = inst_35210);

return statearr_35289;
})();
if(inst_35211){
var statearr_35290_35351 = state_35224__$1;
(statearr_35290_35351[(1)] = (42));

} else {
var statearr_35291_35352 = state_35224__$1;
(statearr_35291_35352[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (16))){
var inst_35123 = (state_35224[(7)]);
var inst_35125 = cljs.core.chunked_seq_QMARK_.call(null,inst_35123);
var state_35224__$1 = state_35224;
if(inst_35125){
var statearr_35292_35353 = state_35224__$1;
(statearr_35292_35353[(1)] = (19));

} else {
var statearr_35293_35354 = state_35224__$1;
(statearr_35293_35354[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (38))){
var inst_35203 = (state_35224[(2)]);
var state_35224__$1 = state_35224;
var statearr_35294_35355 = state_35224__$1;
(statearr_35294_35355[(2)] = inst_35203);

(statearr_35294_35355[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (30))){
var state_35224__$1 = state_35224;
var statearr_35295_35356 = state_35224__$1;
(statearr_35295_35356[(2)] = null);

(statearr_35295_35356[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (10))){
var inst_35102 = (state_35224[(15)]);
var inst_35104 = (state_35224[(16)]);
var inst_35112 = cljs.core._nth.call(null,inst_35102,inst_35104);
var inst_35113 = cljs.core.nth.call(null,inst_35112,(0),null);
var inst_35114 = cljs.core.nth.call(null,inst_35112,(1),null);
var state_35224__$1 = (function (){var statearr_35296 = state_35224;
(statearr_35296[(26)] = inst_35113);

return statearr_35296;
})();
if(cljs.core.truth_(inst_35114)){
var statearr_35297_35357 = state_35224__$1;
(statearr_35297_35357[(1)] = (13));

} else {
var statearr_35298_35358 = state_35224__$1;
(statearr_35298_35358[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (18))){
var inst_35149 = (state_35224[(2)]);
var state_35224__$1 = state_35224;
var statearr_35299_35359 = state_35224__$1;
(statearr_35299_35359[(2)] = inst_35149);

(statearr_35299_35359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (42))){
var state_35224__$1 = state_35224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35224__$1,(45),dchan);
} else {
if((state_val_35225 === (37))){
var inst_35192 = (state_35224[(23)]);
var inst_35183 = (state_35224[(25)]);
var inst_35092 = (state_35224[(11)]);
var inst_35192__$1 = cljs.core.first.call(null,inst_35183);
var inst_35193 = cljs.core.async.put_BANG_.call(null,inst_35192__$1,inst_35092,done);
var state_35224__$1 = (function (){var statearr_35300 = state_35224;
(statearr_35300[(23)] = inst_35192__$1);

return statearr_35300;
})();
if(cljs.core.truth_(inst_35193)){
var statearr_35301_35360 = state_35224__$1;
(statearr_35301_35360[(1)] = (39));

} else {
var statearr_35302_35361 = state_35224__$1;
(statearr_35302_35361[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35225 === (8))){
var inst_35103 = (state_35224[(13)]);
var inst_35104 = (state_35224[(16)]);
var inst_35106 = (inst_35104 < inst_35103);
var inst_35107 = inst_35106;
var state_35224__$1 = state_35224;
if(cljs.core.truth_(inst_35107)){
var statearr_35303_35362 = state_35224__$1;
(statearr_35303_35362[(1)] = (10));

} else {
var statearr_35304_35363 = state_35224__$1;
(statearr_35304_35363[(1)] = (11));

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
});})(c__34504__auto___35309,cs,m,dchan,dctr,done))
;
return ((function (switch__34416__auto__,c__34504__auto___35309,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34417__auto__ = null;
var cljs$core$async$mult_$_state_machine__34417__auto____0 = (function (){
var statearr_35305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35305[(0)] = cljs$core$async$mult_$_state_machine__34417__auto__);

(statearr_35305[(1)] = (1));

return statearr_35305;
});
var cljs$core$async$mult_$_state_machine__34417__auto____1 = (function (state_35224){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_35224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e35306){if((e35306 instanceof Object)){
var ex__34420__auto__ = e35306;
var statearr_35307_35364 = state_35224;
(statearr_35307_35364[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35365 = state_35224;
state_35224 = G__35365;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34417__auto__ = function(state_35224){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34417__auto____1.call(this,state_35224);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34417__auto____0;
cljs$core$async$mult_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34417__auto____1;
return cljs$core$async$mult_$_state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto___35309,cs,m,dchan,dctr,done))
})();
var state__34506__auto__ = (function (){var statearr_35308 = f__34505__auto__.call(null);
(statearr_35308[(6)] = c__34504__auto___35309);

return statearr_35308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto___35309,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35367 = arguments.length;
switch (G__35367) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28298__auto__ = (((m == null))?null:m);
var m__28299__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28298__auto__)]);
if(!((m__28299__auto__ == null))){
return m__28299__auto__.call(null,m,ch);
} else {
var m__28299__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28299__auto____$1 == null))){
return m__28299__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28298__auto__ = (((m == null))?null:m);
var m__28299__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28298__auto__)]);
if(!((m__28299__auto__ == null))){
return m__28299__auto__.call(null,m,ch);
} else {
var m__28299__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28299__auto____$1 == null))){
return m__28299__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28298__auto__ = (((m == null))?null:m);
var m__28299__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28298__auto__)]);
if(!((m__28299__auto__ == null))){
return m__28299__auto__.call(null,m);
} else {
var m__28299__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28299__auto____$1 == null))){
return m__28299__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28298__auto__ = (((m == null))?null:m);
var m__28299__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28298__auto__)]);
if(!((m__28299__auto__ == null))){
return m__28299__auto__.call(null,m,state_map);
} else {
var m__28299__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28299__auto____$1 == null))){
return m__28299__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28298__auto__ = (((m == null))?null:m);
var m__28299__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28298__auto__)]);
if(!((m__28299__auto__ == null))){
return m__28299__auto__.call(null,m,mode);
} else {
var m__28299__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28299__auto____$1 == null))){
return m__28299__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28761__auto__ = [];
var len__28754__auto___35379 = arguments.length;
var i__28755__auto___35380 = (0);
while(true){
if((i__28755__auto___35380 < len__28754__auto___35379)){
args__28761__auto__.push((arguments[i__28755__auto___35380]));

var G__35381 = (i__28755__auto___35380 + (1));
i__28755__auto___35380 = G__35381;
continue;
} else {
}
break;
}

var argseq__28762__auto__ = ((((3) < args__28761__auto__.length))?(new cljs.core.IndexedSeq(args__28761__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28762__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35373){
var map__35374 = p__35373;
var map__35374__$1 = ((((!((map__35374 == null)))?((((map__35374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35374):map__35374);
var opts = map__35374__$1;
var statearr_35376_35382 = state;
(statearr_35376_35382[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__35374,map__35374__$1,opts){
return (function (val){
var statearr_35377_35383 = state;
(statearr_35377_35383[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35374,map__35374__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_35378_35384 = state;
(statearr_35378_35384[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35369){
var G__35370 = cljs.core.first.call(null,seq35369);
var seq35369__$1 = cljs.core.next.call(null,seq35369);
var G__35371 = cljs.core.first.call(null,seq35369__$1);
var seq35369__$2 = cljs.core.next.call(null,seq35369__$1);
var G__35372 = cljs.core.first.call(null,seq35369__$2);
var seq35369__$3 = cljs.core.next.call(null,seq35369__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35370,G__35371,G__35372,seq35369__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35385 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35385 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35386){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35386 = meta35386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35387,meta35386__$1){
var self__ = this;
var _35387__$1 = this;
return (new cljs.core.async.t_cljs$core$async35385(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35386__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35385.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35387){
var self__ = this;
var _35387__$1 = this;
return self__.meta35386;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35385.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35385.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35385.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35385.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35385.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35385.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35385.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35385.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35385.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35386","meta35386",290031590,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35385.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35385";

cljs.core.async.t_cljs$core$async35385.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28240__auto__,writer__28241__auto__,opt__28242__auto__){
return cljs.core._write.call(null,writer__28241__auto__,"cljs.core.async/t_cljs$core$async35385");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35385 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35385(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35386){
return (new cljs.core.async.t_cljs$core$async35385(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35386));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35385(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34504__auto___35549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto___35549,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto___35549,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35489){
var state_val_35490 = (state_35489[(1)]);
if((state_val_35490 === (7))){
var inst_35404 = (state_35489[(2)]);
var state_35489__$1 = state_35489;
var statearr_35491_35550 = state_35489__$1;
(statearr_35491_35550[(2)] = inst_35404);

(statearr_35491_35550[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (20))){
var inst_35416 = (state_35489[(7)]);
var state_35489__$1 = state_35489;
var statearr_35492_35551 = state_35489__$1;
(statearr_35492_35551[(2)] = inst_35416);

(statearr_35492_35551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (27))){
var state_35489__$1 = state_35489;
var statearr_35493_35552 = state_35489__$1;
(statearr_35493_35552[(2)] = null);

(statearr_35493_35552[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (1))){
var inst_35391 = (state_35489[(8)]);
var inst_35391__$1 = calc_state.call(null);
var inst_35393 = (inst_35391__$1 == null);
var inst_35394 = cljs.core.not.call(null,inst_35393);
var state_35489__$1 = (function (){var statearr_35494 = state_35489;
(statearr_35494[(8)] = inst_35391__$1);

return statearr_35494;
})();
if(inst_35394){
var statearr_35495_35553 = state_35489__$1;
(statearr_35495_35553[(1)] = (2));

} else {
var statearr_35496_35554 = state_35489__$1;
(statearr_35496_35554[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (24))){
var inst_35440 = (state_35489[(9)]);
var inst_35449 = (state_35489[(10)]);
var inst_35463 = (state_35489[(11)]);
var inst_35463__$1 = inst_35440.call(null,inst_35449);
var state_35489__$1 = (function (){var statearr_35497 = state_35489;
(statearr_35497[(11)] = inst_35463__$1);

return statearr_35497;
})();
if(cljs.core.truth_(inst_35463__$1)){
var statearr_35498_35555 = state_35489__$1;
(statearr_35498_35555[(1)] = (29));

} else {
var statearr_35499_35556 = state_35489__$1;
(statearr_35499_35556[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (4))){
var inst_35407 = (state_35489[(2)]);
var state_35489__$1 = state_35489;
if(cljs.core.truth_(inst_35407)){
var statearr_35500_35557 = state_35489__$1;
(statearr_35500_35557[(1)] = (8));

} else {
var statearr_35501_35558 = state_35489__$1;
(statearr_35501_35558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (15))){
var inst_35434 = (state_35489[(2)]);
var state_35489__$1 = state_35489;
if(cljs.core.truth_(inst_35434)){
var statearr_35502_35559 = state_35489__$1;
(statearr_35502_35559[(1)] = (19));

} else {
var statearr_35503_35560 = state_35489__$1;
(statearr_35503_35560[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (21))){
var inst_35439 = (state_35489[(12)]);
var inst_35439__$1 = (state_35489[(2)]);
var inst_35440 = cljs.core.get.call(null,inst_35439__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35441 = cljs.core.get.call(null,inst_35439__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35442 = cljs.core.get.call(null,inst_35439__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35489__$1 = (function (){var statearr_35504 = state_35489;
(statearr_35504[(12)] = inst_35439__$1);

(statearr_35504[(13)] = inst_35441);

(statearr_35504[(9)] = inst_35440);

return statearr_35504;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35489__$1,(22),inst_35442);
} else {
if((state_val_35490 === (31))){
var inst_35471 = (state_35489[(2)]);
var state_35489__$1 = state_35489;
if(cljs.core.truth_(inst_35471)){
var statearr_35505_35561 = state_35489__$1;
(statearr_35505_35561[(1)] = (32));

} else {
var statearr_35506_35562 = state_35489__$1;
(statearr_35506_35562[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (32))){
var inst_35448 = (state_35489[(14)]);
var state_35489__$1 = state_35489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35489__$1,(35),out,inst_35448);
} else {
if((state_val_35490 === (33))){
var inst_35439 = (state_35489[(12)]);
var inst_35416 = inst_35439;
var state_35489__$1 = (function (){var statearr_35507 = state_35489;
(statearr_35507[(7)] = inst_35416);

return statearr_35507;
})();
var statearr_35508_35563 = state_35489__$1;
(statearr_35508_35563[(2)] = null);

(statearr_35508_35563[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (13))){
var inst_35416 = (state_35489[(7)]);
var inst_35423 = inst_35416.cljs$lang$protocol_mask$partition0$;
var inst_35424 = (inst_35423 & (64));
var inst_35425 = inst_35416.cljs$core$ISeq$;
var inst_35426 = (cljs.core.PROTOCOL_SENTINEL === inst_35425);
var inst_35427 = (inst_35424) || (inst_35426);
var state_35489__$1 = state_35489;
if(cljs.core.truth_(inst_35427)){
var statearr_35509_35564 = state_35489__$1;
(statearr_35509_35564[(1)] = (16));

} else {
var statearr_35510_35565 = state_35489__$1;
(statearr_35510_35565[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (22))){
var inst_35449 = (state_35489[(10)]);
var inst_35448 = (state_35489[(14)]);
var inst_35447 = (state_35489[(2)]);
var inst_35448__$1 = cljs.core.nth.call(null,inst_35447,(0),null);
var inst_35449__$1 = cljs.core.nth.call(null,inst_35447,(1),null);
var inst_35450 = (inst_35448__$1 == null);
var inst_35451 = cljs.core._EQ_.call(null,inst_35449__$1,change);
var inst_35452 = (inst_35450) || (inst_35451);
var state_35489__$1 = (function (){var statearr_35511 = state_35489;
(statearr_35511[(10)] = inst_35449__$1);

(statearr_35511[(14)] = inst_35448__$1);

return statearr_35511;
})();
if(cljs.core.truth_(inst_35452)){
var statearr_35512_35566 = state_35489__$1;
(statearr_35512_35566[(1)] = (23));

} else {
var statearr_35513_35567 = state_35489__$1;
(statearr_35513_35567[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (36))){
var inst_35439 = (state_35489[(12)]);
var inst_35416 = inst_35439;
var state_35489__$1 = (function (){var statearr_35514 = state_35489;
(statearr_35514[(7)] = inst_35416);

return statearr_35514;
})();
var statearr_35515_35568 = state_35489__$1;
(statearr_35515_35568[(2)] = null);

(statearr_35515_35568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (29))){
var inst_35463 = (state_35489[(11)]);
var state_35489__$1 = state_35489;
var statearr_35516_35569 = state_35489__$1;
(statearr_35516_35569[(2)] = inst_35463);

(statearr_35516_35569[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (6))){
var state_35489__$1 = state_35489;
var statearr_35517_35570 = state_35489__$1;
(statearr_35517_35570[(2)] = false);

(statearr_35517_35570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (28))){
var inst_35459 = (state_35489[(2)]);
var inst_35460 = calc_state.call(null);
var inst_35416 = inst_35460;
var state_35489__$1 = (function (){var statearr_35518 = state_35489;
(statearr_35518[(7)] = inst_35416);

(statearr_35518[(15)] = inst_35459);

return statearr_35518;
})();
var statearr_35519_35571 = state_35489__$1;
(statearr_35519_35571[(2)] = null);

(statearr_35519_35571[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (25))){
var inst_35485 = (state_35489[(2)]);
var state_35489__$1 = state_35489;
var statearr_35520_35572 = state_35489__$1;
(statearr_35520_35572[(2)] = inst_35485);

(statearr_35520_35572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (34))){
var inst_35483 = (state_35489[(2)]);
var state_35489__$1 = state_35489;
var statearr_35521_35573 = state_35489__$1;
(statearr_35521_35573[(2)] = inst_35483);

(statearr_35521_35573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (17))){
var state_35489__$1 = state_35489;
var statearr_35522_35574 = state_35489__$1;
(statearr_35522_35574[(2)] = false);

(statearr_35522_35574[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (3))){
var state_35489__$1 = state_35489;
var statearr_35523_35575 = state_35489__$1;
(statearr_35523_35575[(2)] = false);

(statearr_35523_35575[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (12))){
var inst_35487 = (state_35489[(2)]);
var state_35489__$1 = state_35489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35489__$1,inst_35487);
} else {
if((state_val_35490 === (2))){
var inst_35391 = (state_35489[(8)]);
var inst_35396 = inst_35391.cljs$lang$protocol_mask$partition0$;
var inst_35397 = (inst_35396 & (64));
var inst_35398 = inst_35391.cljs$core$ISeq$;
var inst_35399 = (cljs.core.PROTOCOL_SENTINEL === inst_35398);
var inst_35400 = (inst_35397) || (inst_35399);
var state_35489__$1 = state_35489;
if(cljs.core.truth_(inst_35400)){
var statearr_35524_35576 = state_35489__$1;
(statearr_35524_35576[(1)] = (5));

} else {
var statearr_35525_35577 = state_35489__$1;
(statearr_35525_35577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (23))){
var inst_35448 = (state_35489[(14)]);
var inst_35454 = (inst_35448 == null);
var state_35489__$1 = state_35489;
if(cljs.core.truth_(inst_35454)){
var statearr_35526_35578 = state_35489__$1;
(statearr_35526_35578[(1)] = (26));

} else {
var statearr_35527_35579 = state_35489__$1;
(statearr_35527_35579[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (35))){
var inst_35474 = (state_35489[(2)]);
var state_35489__$1 = state_35489;
if(cljs.core.truth_(inst_35474)){
var statearr_35528_35580 = state_35489__$1;
(statearr_35528_35580[(1)] = (36));

} else {
var statearr_35529_35581 = state_35489__$1;
(statearr_35529_35581[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (19))){
var inst_35416 = (state_35489[(7)]);
var inst_35436 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35416);
var state_35489__$1 = state_35489;
var statearr_35530_35582 = state_35489__$1;
(statearr_35530_35582[(2)] = inst_35436);

(statearr_35530_35582[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (11))){
var inst_35416 = (state_35489[(7)]);
var inst_35420 = (inst_35416 == null);
var inst_35421 = cljs.core.not.call(null,inst_35420);
var state_35489__$1 = state_35489;
if(inst_35421){
var statearr_35531_35583 = state_35489__$1;
(statearr_35531_35583[(1)] = (13));

} else {
var statearr_35532_35584 = state_35489__$1;
(statearr_35532_35584[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (9))){
var inst_35391 = (state_35489[(8)]);
var state_35489__$1 = state_35489;
var statearr_35533_35585 = state_35489__$1;
(statearr_35533_35585[(2)] = inst_35391);

(statearr_35533_35585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (5))){
var state_35489__$1 = state_35489;
var statearr_35534_35586 = state_35489__$1;
(statearr_35534_35586[(2)] = true);

(statearr_35534_35586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (14))){
var state_35489__$1 = state_35489;
var statearr_35535_35587 = state_35489__$1;
(statearr_35535_35587[(2)] = false);

(statearr_35535_35587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (26))){
var inst_35449 = (state_35489[(10)]);
var inst_35456 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35449);
var state_35489__$1 = state_35489;
var statearr_35536_35588 = state_35489__$1;
(statearr_35536_35588[(2)] = inst_35456);

(statearr_35536_35588[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (16))){
var state_35489__$1 = state_35489;
var statearr_35537_35589 = state_35489__$1;
(statearr_35537_35589[(2)] = true);

(statearr_35537_35589[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (38))){
var inst_35479 = (state_35489[(2)]);
var state_35489__$1 = state_35489;
var statearr_35538_35590 = state_35489__$1;
(statearr_35538_35590[(2)] = inst_35479);

(statearr_35538_35590[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (30))){
var inst_35441 = (state_35489[(13)]);
var inst_35440 = (state_35489[(9)]);
var inst_35449 = (state_35489[(10)]);
var inst_35466 = cljs.core.empty_QMARK_.call(null,inst_35440);
var inst_35467 = inst_35441.call(null,inst_35449);
var inst_35468 = cljs.core.not.call(null,inst_35467);
var inst_35469 = (inst_35466) && (inst_35468);
var state_35489__$1 = state_35489;
var statearr_35539_35591 = state_35489__$1;
(statearr_35539_35591[(2)] = inst_35469);

(statearr_35539_35591[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (10))){
var inst_35391 = (state_35489[(8)]);
var inst_35412 = (state_35489[(2)]);
var inst_35413 = cljs.core.get.call(null,inst_35412,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35414 = cljs.core.get.call(null,inst_35412,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35415 = cljs.core.get.call(null,inst_35412,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35416 = inst_35391;
var state_35489__$1 = (function (){var statearr_35540 = state_35489;
(statearr_35540[(16)] = inst_35413);

(statearr_35540[(7)] = inst_35416);

(statearr_35540[(17)] = inst_35415);

(statearr_35540[(18)] = inst_35414);

return statearr_35540;
})();
var statearr_35541_35592 = state_35489__$1;
(statearr_35541_35592[(2)] = null);

(statearr_35541_35592[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (18))){
var inst_35431 = (state_35489[(2)]);
var state_35489__$1 = state_35489;
var statearr_35542_35593 = state_35489__$1;
(statearr_35542_35593[(2)] = inst_35431);

(statearr_35542_35593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (37))){
var state_35489__$1 = state_35489;
var statearr_35543_35594 = state_35489__$1;
(statearr_35543_35594[(2)] = null);

(statearr_35543_35594[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35490 === (8))){
var inst_35391 = (state_35489[(8)]);
var inst_35409 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35391);
var state_35489__$1 = state_35489;
var statearr_35544_35595 = state_35489__$1;
(statearr_35544_35595[(2)] = inst_35409);

(statearr_35544_35595[(1)] = (10));


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
});})(c__34504__auto___35549,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34416__auto__,c__34504__auto___35549,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34417__auto__ = null;
var cljs$core$async$mix_$_state_machine__34417__auto____0 = (function (){
var statearr_35545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35545[(0)] = cljs$core$async$mix_$_state_machine__34417__auto__);

(statearr_35545[(1)] = (1));

return statearr_35545;
});
var cljs$core$async$mix_$_state_machine__34417__auto____1 = (function (state_35489){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_35489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e35546){if((e35546 instanceof Object)){
var ex__34420__auto__ = e35546;
var statearr_35547_35596 = state_35489;
(statearr_35547_35596[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35597 = state_35489;
state_35489 = G__35597;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34417__auto__ = function(state_35489){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34417__auto____1.call(this,state_35489);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34417__auto____0;
cljs$core$async$mix_$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34417__auto____1;
return cljs$core$async$mix_$_state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto___35549,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34506__auto__ = (function (){var statearr_35548 = f__34505__auto__.call(null);
(statearr_35548[(6)] = c__34504__auto___35549);

return statearr_35548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto___35549,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28298__auto__ = (((p == null))?null:p);
var m__28299__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28298__auto__)]);
if(!((m__28299__auto__ == null))){
return m__28299__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28299__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28299__auto____$1 == null))){
return m__28299__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28298__auto__ = (((p == null))?null:p);
var m__28299__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28298__auto__)]);
if(!((m__28299__auto__ == null))){
return m__28299__auto__.call(null,p,v,ch);
} else {
var m__28299__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28299__auto____$1 == null))){
return m__28299__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35599 = arguments.length;
switch (G__35599) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28298__auto__ = (((p == null))?null:p);
var m__28299__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28298__auto__)]);
if(!((m__28299__auto__ == null))){
return m__28299__auto__.call(null,p);
} else {
var m__28299__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28299__auto____$1 == null))){
return m__28299__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28298__auto__ = (((p == null))?null:p);
var m__28299__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28298__auto__)]);
if(!((m__28299__auto__ == null))){
return m__28299__auto__.call(null,p,v);
} else {
var m__28299__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28299__auto____$1 == null))){
return m__28299__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35603 = arguments.length;
switch (G__35603) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27629__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27629__auto__)){
return or__27629__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27629__auto__,mults){
return (function (p1__35601_SHARP_){
if(cljs.core.truth_(p1__35601_SHARP_.call(null,topic))){
return p1__35601_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35601_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27629__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35604 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35604 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35605){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35605 = meta35605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35606,meta35605__$1){
var self__ = this;
var _35606__$1 = this;
return (new cljs.core.async.t_cljs$core$async35604(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35605__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35606){
var self__ = this;
var _35606__$1 = this;
return self__.meta35605;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35604.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35604.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35604.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35604.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35604.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35604.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35604.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35604.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35605","meta35605",289305082,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35604.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35604";

cljs.core.async.t_cljs$core$async35604.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28240__auto__,writer__28241__auto__,opt__28242__auto__){
return cljs.core._write.call(null,writer__28241__auto__,"cljs.core.async/t_cljs$core$async35604");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35604 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35604(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35605){
return (new cljs.core.async.t_cljs$core$async35604(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35605));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35604(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34504__auto___35724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto___35724,mults,ensure_mult,p){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto___35724,mults,ensure_mult,p){
return (function (state_35678){
var state_val_35679 = (state_35678[(1)]);
if((state_val_35679 === (7))){
var inst_35674 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
var statearr_35680_35725 = state_35678__$1;
(statearr_35680_35725[(2)] = inst_35674);

(statearr_35680_35725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (20))){
var state_35678__$1 = state_35678;
var statearr_35681_35726 = state_35678__$1;
(statearr_35681_35726[(2)] = null);

(statearr_35681_35726[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (1))){
var state_35678__$1 = state_35678;
var statearr_35682_35727 = state_35678__$1;
(statearr_35682_35727[(2)] = null);

(statearr_35682_35727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (24))){
var inst_35657 = (state_35678[(7)]);
var inst_35666 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35657);
var state_35678__$1 = state_35678;
var statearr_35683_35728 = state_35678__$1;
(statearr_35683_35728[(2)] = inst_35666);

(statearr_35683_35728[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (4))){
var inst_35609 = (state_35678[(8)]);
var inst_35609__$1 = (state_35678[(2)]);
var inst_35610 = (inst_35609__$1 == null);
var state_35678__$1 = (function (){var statearr_35684 = state_35678;
(statearr_35684[(8)] = inst_35609__$1);

return statearr_35684;
})();
if(cljs.core.truth_(inst_35610)){
var statearr_35685_35729 = state_35678__$1;
(statearr_35685_35729[(1)] = (5));

} else {
var statearr_35686_35730 = state_35678__$1;
(statearr_35686_35730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (15))){
var inst_35651 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
var statearr_35687_35731 = state_35678__$1;
(statearr_35687_35731[(2)] = inst_35651);

(statearr_35687_35731[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (21))){
var inst_35671 = (state_35678[(2)]);
var state_35678__$1 = (function (){var statearr_35688 = state_35678;
(statearr_35688[(9)] = inst_35671);

return statearr_35688;
})();
var statearr_35689_35732 = state_35678__$1;
(statearr_35689_35732[(2)] = null);

(statearr_35689_35732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (13))){
var inst_35633 = (state_35678[(10)]);
var inst_35635 = cljs.core.chunked_seq_QMARK_.call(null,inst_35633);
var state_35678__$1 = state_35678;
if(inst_35635){
var statearr_35690_35733 = state_35678__$1;
(statearr_35690_35733[(1)] = (16));

} else {
var statearr_35691_35734 = state_35678__$1;
(statearr_35691_35734[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (22))){
var inst_35663 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
if(cljs.core.truth_(inst_35663)){
var statearr_35692_35735 = state_35678__$1;
(statearr_35692_35735[(1)] = (23));

} else {
var statearr_35693_35736 = state_35678__$1;
(statearr_35693_35736[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (6))){
var inst_35659 = (state_35678[(11)]);
var inst_35657 = (state_35678[(7)]);
var inst_35609 = (state_35678[(8)]);
var inst_35657__$1 = topic_fn.call(null,inst_35609);
var inst_35658 = cljs.core.deref.call(null,mults);
var inst_35659__$1 = cljs.core.get.call(null,inst_35658,inst_35657__$1);
var state_35678__$1 = (function (){var statearr_35694 = state_35678;
(statearr_35694[(11)] = inst_35659__$1);

(statearr_35694[(7)] = inst_35657__$1);

return statearr_35694;
})();
if(cljs.core.truth_(inst_35659__$1)){
var statearr_35695_35737 = state_35678__$1;
(statearr_35695_35737[(1)] = (19));

} else {
var statearr_35696_35738 = state_35678__$1;
(statearr_35696_35738[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (25))){
var inst_35668 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
var statearr_35697_35739 = state_35678__$1;
(statearr_35697_35739[(2)] = inst_35668);

(statearr_35697_35739[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (17))){
var inst_35633 = (state_35678[(10)]);
var inst_35642 = cljs.core.first.call(null,inst_35633);
var inst_35643 = cljs.core.async.muxch_STAR_.call(null,inst_35642);
var inst_35644 = cljs.core.async.close_BANG_.call(null,inst_35643);
var inst_35645 = cljs.core.next.call(null,inst_35633);
var inst_35619 = inst_35645;
var inst_35620 = null;
var inst_35621 = (0);
var inst_35622 = (0);
var state_35678__$1 = (function (){var statearr_35698 = state_35678;
(statearr_35698[(12)] = inst_35644);

(statearr_35698[(13)] = inst_35621);

(statearr_35698[(14)] = inst_35620);

(statearr_35698[(15)] = inst_35619);

(statearr_35698[(16)] = inst_35622);

return statearr_35698;
})();
var statearr_35699_35740 = state_35678__$1;
(statearr_35699_35740[(2)] = null);

(statearr_35699_35740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (3))){
var inst_35676 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35678__$1,inst_35676);
} else {
if((state_val_35679 === (12))){
var inst_35653 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
var statearr_35700_35741 = state_35678__$1;
(statearr_35700_35741[(2)] = inst_35653);

(statearr_35700_35741[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (2))){
var state_35678__$1 = state_35678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35678__$1,(4),ch);
} else {
if((state_val_35679 === (23))){
var state_35678__$1 = state_35678;
var statearr_35701_35742 = state_35678__$1;
(statearr_35701_35742[(2)] = null);

(statearr_35701_35742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (19))){
var inst_35659 = (state_35678[(11)]);
var inst_35609 = (state_35678[(8)]);
var inst_35661 = cljs.core.async.muxch_STAR_.call(null,inst_35659);
var state_35678__$1 = state_35678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35678__$1,(22),inst_35661,inst_35609);
} else {
if((state_val_35679 === (11))){
var inst_35633 = (state_35678[(10)]);
var inst_35619 = (state_35678[(15)]);
var inst_35633__$1 = cljs.core.seq.call(null,inst_35619);
var state_35678__$1 = (function (){var statearr_35702 = state_35678;
(statearr_35702[(10)] = inst_35633__$1);

return statearr_35702;
})();
if(inst_35633__$1){
var statearr_35703_35743 = state_35678__$1;
(statearr_35703_35743[(1)] = (13));

} else {
var statearr_35704_35744 = state_35678__$1;
(statearr_35704_35744[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (9))){
var inst_35655 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
var statearr_35705_35745 = state_35678__$1;
(statearr_35705_35745[(2)] = inst_35655);

(statearr_35705_35745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (5))){
var inst_35616 = cljs.core.deref.call(null,mults);
var inst_35617 = cljs.core.vals.call(null,inst_35616);
var inst_35618 = cljs.core.seq.call(null,inst_35617);
var inst_35619 = inst_35618;
var inst_35620 = null;
var inst_35621 = (0);
var inst_35622 = (0);
var state_35678__$1 = (function (){var statearr_35706 = state_35678;
(statearr_35706[(13)] = inst_35621);

(statearr_35706[(14)] = inst_35620);

(statearr_35706[(15)] = inst_35619);

(statearr_35706[(16)] = inst_35622);

return statearr_35706;
})();
var statearr_35707_35746 = state_35678__$1;
(statearr_35707_35746[(2)] = null);

(statearr_35707_35746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (14))){
var state_35678__$1 = state_35678;
var statearr_35711_35747 = state_35678__$1;
(statearr_35711_35747[(2)] = null);

(statearr_35711_35747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (16))){
var inst_35633 = (state_35678[(10)]);
var inst_35637 = cljs.core.chunk_first.call(null,inst_35633);
var inst_35638 = cljs.core.chunk_rest.call(null,inst_35633);
var inst_35639 = cljs.core.count.call(null,inst_35637);
var inst_35619 = inst_35638;
var inst_35620 = inst_35637;
var inst_35621 = inst_35639;
var inst_35622 = (0);
var state_35678__$1 = (function (){var statearr_35712 = state_35678;
(statearr_35712[(13)] = inst_35621);

(statearr_35712[(14)] = inst_35620);

(statearr_35712[(15)] = inst_35619);

(statearr_35712[(16)] = inst_35622);

return statearr_35712;
})();
var statearr_35713_35748 = state_35678__$1;
(statearr_35713_35748[(2)] = null);

(statearr_35713_35748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (10))){
var inst_35621 = (state_35678[(13)]);
var inst_35620 = (state_35678[(14)]);
var inst_35619 = (state_35678[(15)]);
var inst_35622 = (state_35678[(16)]);
var inst_35627 = cljs.core._nth.call(null,inst_35620,inst_35622);
var inst_35628 = cljs.core.async.muxch_STAR_.call(null,inst_35627);
var inst_35629 = cljs.core.async.close_BANG_.call(null,inst_35628);
var inst_35630 = (inst_35622 + (1));
var tmp35708 = inst_35621;
var tmp35709 = inst_35620;
var tmp35710 = inst_35619;
var inst_35619__$1 = tmp35710;
var inst_35620__$1 = tmp35709;
var inst_35621__$1 = tmp35708;
var inst_35622__$1 = inst_35630;
var state_35678__$1 = (function (){var statearr_35714 = state_35678;
(statearr_35714[(17)] = inst_35629);

(statearr_35714[(13)] = inst_35621__$1);

(statearr_35714[(14)] = inst_35620__$1);

(statearr_35714[(15)] = inst_35619__$1);

(statearr_35714[(16)] = inst_35622__$1);

return statearr_35714;
})();
var statearr_35715_35749 = state_35678__$1;
(statearr_35715_35749[(2)] = null);

(statearr_35715_35749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (18))){
var inst_35648 = (state_35678[(2)]);
var state_35678__$1 = state_35678;
var statearr_35716_35750 = state_35678__$1;
(statearr_35716_35750[(2)] = inst_35648);

(statearr_35716_35750[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35679 === (8))){
var inst_35621 = (state_35678[(13)]);
var inst_35622 = (state_35678[(16)]);
var inst_35624 = (inst_35622 < inst_35621);
var inst_35625 = inst_35624;
var state_35678__$1 = state_35678;
if(cljs.core.truth_(inst_35625)){
var statearr_35717_35751 = state_35678__$1;
(statearr_35717_35751[(1)] = (10));

} else {
var statearr_35718_35752 = state_35678__$1;
(statearr_35718_35752[(1)] = (11));

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
});})(c__34504__auto___35724,mults,ensure_mult,p))
;
return ((function (switch__34416__auto__,c__34504__auto___35724,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34417__auto__ = null;
var cljs$core$async$state_machine__34417__auto____0 = (function (){
var statearr_35719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35719[(0)] = cljs$core$async$state_machine__34417__auto__);

(statearr_35719[(1)] = (1));

return statearr_35719;
});
var cljs$core$async$state_machine__34417__auto____1 = (function (state_35678){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_35678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e35720){if((e35720 instanceof Object)){
var ex__34420__auto__ = e35720;
var statearr_35721_35753 = state_35678;
(statearr_35721_35753[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35754 = state_35678;
state_35678 = G__35754;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$state_machine__34417__auto__ = function(state_35678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34417__auto____1.call(this,state_35678);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34417__auto____0;
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34417__auto____1;
return cljs$core$async$state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto___35724,mults,ensure_mult,p))
})();
var state__34506__auto__ = (function (){var statearr_35722 = f__34505__auto__.call(null);
(statearr_35722[(6)] = c__34504__auto___35724);

return statearr_35722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto___35724,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35756 = arguments.length;
switch (G__35756) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35759 = arguments.length;
switch (G__35759) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35762 = arguments.length;
switch (G__35762) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__34504__auto___35829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto___35829,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto___35829,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35801){
var state_val_35802 = (state_35801[(1)]);
if((state_val_35802 === (7))){
var state_35801__$1 = state_35801;
var statearr_35803_35830 = state_35801__$1;
(statearr_35803_35830[(2)] = null);

(statearr_35803_35830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (1))){
var state_35801__$1 = state_35801;
var statearr_35804_35831 = state_35801__$1;
(statearr_35804_35831[(2)] = null);

(statearr_35804_35831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (4))){
var inst_35765 = (state_35801[(7)]);
var inst_35767 = (inst_35765 < cnt);
var state_35801__$1 = state_35801;
if(cljs.core.truth_(inst_35767)){
var statearr_35805_35832 = state_35801__$1;
(statearr_35805_35832[(1)] = (6));

} else {
var statearr_35806_35833 = state_35801__$1;
(statearr_35806_35833[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (15))){
var inst_35797 = (state_35801[(2)]);
var state_35801__$1 = state_35801;
var statearr_35807_35834 = state_35801__$1;
(statearr_35807_35834[(2)] = inst_35797);

(statearr_35807_35834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (13))){
var inst_35790 = cljs.core.async.close_BANG_.call(null,out);
var state_35801__$1 = state_35801;
var statearr_35808_35835 = state_35801__$1;
(statearr_35808_35835[(2)] = inst_35790);

(statearr_35808_35835[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (6))){
var state_35801__$1 = state_35801;
var statearr_35809_35836 = state_35801__$1;
(statearr_35809_35836[(2)] = null);

(statearr_35809_35836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (3))){
var inst_35799 = (state_35801[(2)]);
var state_35801__$1 = state_35801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35801__$1,inst_35799);
} else {
if((state_val_35802 === (12))){
var inst_35787 = (state_35801[(8)]);
var inst_35787__$1 = (state_35801[(2)]);
var inst_35788 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35787__$1);
var state_35801__$1 = (function (){var statearr_35810 = state_35801;
(statearr_35810[(8)] = inst_35787__$1);

return statearr_35810;
})();
if(cljs.core.truth_(inst_35788)){
var statearr_35811_35837 = state_35801__$1;
(statearr_35811_35837[(1)] = (13));

} else {
var statearr_35812_35838 = state_35801__$1;
(statearr_35812_35838[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (2))){
var inst_35764 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35765 = (0);
var state_35801__$1 = (function (){var statearr_35813 = state_35801;
(statearr_35813[(9)] = inst_35764);

(statearr_35813[(7)] = inst_35765);

return statearr_35813;
})();
var statearr_35814_35839 = state_35801__$1;
(statearr_35814_35839[(2)] = null);

(statearr_35814_35839[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (11))){
var inst_35765 = (state_35801[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35801,(10),Object,null,(9));
var inst_35774 = chs__$1.call(null,inst_35765);
var inst_35775 = done.call(null,inst_35765);
var inst_35776 = cljs.core.async.take_BANG_.call(null,inst_35774,inst_35775);
var state_35801__$1 = state_35801;
var statearr_35815_35840 = state_35801__$1;
(statearr_35815_35840[(2)] = inst_35776);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35801__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (9))){
var inst_35765 = (state_35801[(7)]);
var inst_35778 = (state_35801[(2)]);
var inst_35779 = (inst_35765 + (1));
var inst_35765__$1 = inst_35779;
var state_35801__$1 = (function (){var statearr_35816 = state_35801;
(statearr_35816[(10)] = inst_35778);

(statearr_35816[(7)] = inst_35765__$1);

return statearr_35816;
})();
var statearr_35817_35841 = state_35801__$1;
(statearr_35817_35841[(2)] = null);

(statearr_35817_35841[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (5))){
var inst_35785 = (state_35801[(2)]);
var state_35801__$1 = (function (){var statearr_35818 = state_35801;
(statearr_35818[(11)] = inst_35785);

return statearr_35818;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35801__$1,(12),dchan);
} else {
if((state_val_35802 === (14))){
var inst_35787 = (state_35801[(8)]);
var inst_35792 = cljs.core.apply.call(null,f,inst_35787);
var state_35801__$1 = state_35801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35801__$1,(16),out,inst_35792);
} else {
if((state_val_35802 === (16))){
var inst_35794 = (state_35801[(2)]);
var state_35801__$1 = (function (){var statearr_35819 = state_35801;
(statearr_35819[(12)] = inst_35794);

return statearr_35819;
})();
var statearr_35820_35842 = state_35801__$1;
(statearr_35820_35842[(2)] = null);

(statearr_35820_35842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (10))){
var inst_35769 = (state_35801[(2)]);
var inst_35770 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35801__$1 = (function (){var statearr_35821 = state_35801;
(statearr_35821[(13)] = inst_35769);

return statearr_35821;
})();
var statearr_35822_35843 = state_35801__$1;
(statearr_35822_35843[(2)] = inst_35770);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35801__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35802 === (8))){
var inst_35783 = (state_35801[(2)]);
var state_35801__$1 = state_35801;
var statearr_35823_35844 = state_35801__$1;
(statearr_35823_35844[(2)] = inst_35783);

(statearr_35823_35844[(1)] = (5));


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
});})(c__34504__auto___35829,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34416__auto__,c__34504__auto___35829,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34417__auto__ = null;
var cljs$core$async$state_machine__34417__auto____0 = (function (){
var statearr_35824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35824[(0)] = cljs$core$async$state_machine__34417__auto__);

(statearr_35824[(1)] = (1));

return statearr_35824;
});
var cljs$core$async$state_machine__34417__auto____1 = (function (state_35801){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_35801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e35825){if((e35825 instanceof Object)){
var ex__34420__auto__ = e35825;
var statearr_35826_35845 = state_35801;
(statearr_35826_35845[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35846 = state_35801;
state_35801 = G__35846;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$state_machine__34417__auto__ = function(state_35801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34417__auto____1.call(this,state_35801);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34417__auto____0;
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34417__auto____1;
return cljs$core$async$state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto___35829,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34506__auto__ = (function (){var statearr_35827 = f__34505__auto__.call(null);
(statearr_35827[(6)] = c__34504__auto___35829);

return statearr_35827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto___35829,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35849 = arguments.length;
switch (G__35849) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34504__auto___35903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto___35903,out){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto___35903,out){
return (function (state_35881){
var state_val_35882 = (state_35881[(1)]);
if((state_val_35882 === (7))){
var inst_35861 = (state_35881[(7)]);
var inst_35860 = (state_35881[(8)]);
var inst_35860__$1 = (state_35881[(2)]);
var inst_35861__$1 = cljs.core.nth.call(null,inst_35860__$1,(0),null);
var inst_35862 = cljs.core.nth.call(null,inst_35860__$1,(1),null);
var inst_35863 = (inst_35861__$1 == null);
var state_35881__$1 = (function (){var statearr_35883 = state_35881;
(statearr_35883[(7)] = inst_35861__$1);

(statearr_35883[(9)] = inst_35862);

(statearr_35883[(8)] = inst_35860__$1);

return statearr_35883;
})();
if(cljs.core.truth_(inst_35863)){
var statearr_35884_35904 = state_35881__$1;
(statearr_35884_35904[(1)] = (8));

} else {
var statearr_35885_35905 = state_35881__$1;
(statearr_35885_35905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (1))){
var inst_35850 = cljs.core.vec.call(null,chs);
var inst_35851 = inst_35850;
var state_35881__$1 = (function (){var statearr_35886 = state_35881;
(statearr_35886[(10)] = inst_35851);

return statearr_35886;
})();
var statearr_35887_35906 = state_35881__$1;
(statearr_35887_35906[(2)] = null);

(statearr_35887_35906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (4))){
var inst_35851 = (state_35881[(10)]);
var state_35881__$1 = state_35881;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35881__$1,(7),inst_35851);
} else {
if((state_val_35882 === (6))){
var inst_35877 = (state_35881[(2)]);
var state_35881__$1 = state_35881;
var statearr_35888_35907 = state_35881__$1;
(statearr_35888_35907[(2)] = inst_35877);

(statearr_35888_35907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (3))){
var inst_35879 = (state_35881[(2)]);
var state_35881__$1 = state_35881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35881__$1,inst_35879);
} else {
if((state_val_35882 === (2))){
var inst_35851 = (state_35881[(10)]);
var inst_35853 = cljs.core.count.call(null,inst_35851);
var inst_35854 = (inst_35853 > (0));
var state_35881__$1 = state_35881;
if(cljs.core.truth_(inst_35854)){
var statearr_35890_35908 = state_35881__$1;
(statearr_35890_35908[(1)] = (4));

} else {
var statearr_35891_35909 = state_35881__$1;
(statearr_35891_35909[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (11))){
var inst_35851 = (state_35881[(10)]);
var inst_35870 = (state_35881[(2)]);
var tmp35889 = inst_35851;
var inst_35851__$1 = tmp35889;
var state_35881__$1 = (function (){var statearr_35892 = state_35881;
(statearr_35892[(10)] = inst_35851__$1);

(statearr_35892[(11)] = inst_35870);

return statearr_35892;
})();
var statearr_35893_35910 = state_35881__$1;
(statearr_35893_35910[(2)] = null);

(statearr_35893_35910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (9))){
var inst_35861 = (state_35881[(7)]);
var state_35881__$1 = state_35881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35881__$1,(11),out,inst_35861);
} else {
if((state_val_35882 === (5))){
var inst_35875 = cljs.core.async.close_BANG_.call(null,out);
var state_35881__$1 = state_35881;
var statearr_35894_35911 = state_35881__$1;
(statearr_35894_35911[(2)] = inst_35875);

(statearr_35894_35911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (10))){
var inst_35873 = (state_35881[(2)]);
var state_35881__$1 = state_35881;
var statearr_35895_35912 = state_35881__$1;
(statearr_35895_35912[(2)] = inst_35873);

(statearr_35895_35912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35882 === (8))){
var inst_35861 = (state_35881[(7)]);
var inst_35851 = (state_35881[(10)]);
var inst_35862 = (state_35881[(9)]);
var inst_35860 = (state_35881[(8)]);
var inst_35865 = (function (){var cs = inst_35851;
var vec__35856 = inst_35860;
var v = inst_35861;
var c = inst_35862;
return ((function (cs,vec__35856,v,c,inst_35861,inst_35851,inst_35862,inst_35860,state_val_35882,c__34504__auto___35903,out){
return (function (p1__35847_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35847_SHARP_);
});
;})(cs,vec__35856,v,c,inst_35861,inst_35851,inst_35862,inst_35860,state_val_35882,c__34504__auto___35903,out))
})();
var inst_35866 = cljs.core.filterv.call(null,inst_35865,inst_35851);
var inst_35851__$1 = inst_35866;
var state_35881__$1 = (function (){var statearr_35896 = state_35881;
(statearr_35896[(10)] = inst_35851__$1);

return statearr_35896;
})();
var statearr_35897_35913 = state_35881__$1;
(statearr_35897_35913[(2)] = null);

(statearr_35897_35913[(1)] = (2));


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
});})(c__34504__auto___35903,out))
;
return ((function (switch__34416__auto__,c__34504__auto___35903,out){
return (function() {
var cljs$core$async$state_machine__34417__auto__ = null;
var cljs$core$async$state_machine__34417__auto____0 = (function (){
var statearr_35898 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35898[(0)] = cljs$core$async$state_machine__34417__auto__);

(statearr_35898[(1)] = (1));

return statearr_35898;
});
var cljs$core$async$state_machine__34417__auto____1 = (function (state_35881){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_35881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e35899){if((e35899 instanceof Object)){
var ex__34420__auto__ = e35899;
var statearr_35900_35914 = state_35881;
(statearr_35900_35914[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35915 = state_35881;
state_35881 = G__35915;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$state_machine__34417__auto__ = function(state_35881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34417__auto____1.call(this,state_35881);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34417__auto____0;
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34417__auto____1;
return cljs$core$async$state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto___35903,out))
})();
var state__34506__auto__ = (function (){var statearr_35901 = f__34505__auto__.call(null);
(statearr_35901[(6)] = c__34504__auto___35903);

return statearr_35901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto___35903,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35917 = arguments.length;
switch (G__35917) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34504__auto___35962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto___35962,out){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto___35962,out){
return (function (state_35941){
var state_val_35942 = (state_35941[(1)]);
if((state_val_35942 === (7))){
var inst_35923 = (state_35941[(7)]);
var inst_35923__$1 = (state_35941[(2)]);
var inst_35924 = (inst_35923__$1 == null);
var inst_35925 = cljs.core.not.call(null,inst_35924);
var state_35941__$1 = (function (){var statearr_35943 = state_35941;
(statearr_35943[(7)] = inst_35923__$1);

return statearr_35943;
})();
if(inst_35925){
var statearr_35944_35963 = state_35941__$1;
(statearr_35944_35963[(1)] = (8));

} else {
var statearr_35945_35964 = state_35941__$1;
(statearr_35945_35964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (1))){
var inst_35918 = (0);
var state_35941__$1 = (function (){var statearr_35946 = state_35941;
(statearr_35946[(8)] = inst_35918);

return statearr_35946;
})();
var statearr_35947_35965 = state_35941__$1;
(statearr_35947_35965[(2)] = null);

(statearr_35947_35965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (4))){
var state_35941__$1 = state_35941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35941__$1,(7),ch);
} else {
if((state_val_35942 === (6))){
var inst_35936 = (state_35941[(2)]);
var state_35941__$1 = state_35941;
var statearr_35948_35966 = state_35941__$1;
(statearr_35948_35966[(2)] = inst_35936);

(statearr_35948_35966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (3))){
var inst_35938 = (state_35941[(2)]);
var inst_35939 = cljs.core.async.close_BANG_.call(null,out);
var state_35941__$1 = (function (){var statearr_35949 = state_35941;
(statearr_35949[(9)] = inst_35938);

return statearr_35949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35941__$1,inst_35939);
} else {
if((state_val_35942 === (2))){
var inst_35918 = (state_35941[(8)]);
var inst_35920 = (inst_35918 < n);
var state_35941__$1 = state_35941;
if(cljs.core.truth_(inst_35920)){
var statearr_35950_35967 = state_35941__$1;
(statearr_35950_35967[(1)] = (4));

} else {
var statearr_35951_35968 = state_35941__$1;
(statearr_35951_35968[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (11))){
var inst_35918 = (state_35941[(8)]);
var inst_35928 = (state_35941[(2)]);
var inst_35929 = (inst_35918 + (1));
var inst_35918__$1 = inst_35929;
var state_35941__$1 = (function (){var statearr_35952 = state_35941;
(statearr_35952[(10)] = inst_35928);

(statearr_35952[(8)] = inst_35918__$1);

return statearr_35952;
})();
var statearr_35953_35969 = state_35941__$1;
(statearr_35953_35969[(2)] = null);

(statearr_35953_35969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (9))){
var state_35941__$1 = state_35941;
var statearr_35954_35970 = state_35941__$1;
(statearr_35954_35970[(2)] = null);

(statearr_35954_35970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (5))){
var state_35941__$1 = state_35941;
var statearr_35955_35971 = state_35941__$1;
(statearr_35955_35971[(2)] = null);

(statearr_35955_35971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (10))){
var inst_35933 = (state_35941[(2)]);
var state_35941__$1 = state_35941;
var statearr_35956_35972 = state_35941__$1;
(statearr_35956_35972[(2)] = inst_35933);

(statearr_35956_35972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (8))){
var inst_35923 = (state_35941[(7)]);
var state_35941__$1 = state_35941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35941__$1,(11),out,inst_35923);
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
});})(c__34504__auto___35962,out))
;
return ((function (switch__34416__auto__,c__34504__auto___35962,out){
return (function() {
var cljs$core$async$state_machine__34417__auto__ = null;
var cljs$core$async$state_machine__34417__auto____0 = (function (){
var statearr_35957 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35957[(0)] = cljs$core$async$state_machine__34417__auto__);

(statearr_35957[(1)] = (1));

return statearr_35957;
});
var cljs$core$async$state_machine__34417__auto____1 = (function (state_35941){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_35941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e35958){if((e35958 instanceof Object)){
var ex__34420__auto__ = e35958;
var statearr_35959_35973 = state_35941;
(statearr_35959_35973[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35974 = state_35941;
state_35941 = G__35974;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$state_machine__34417__auto__ = function(state_35941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34417__auto____1.call(this,state_35941);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34417__auto____0;
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34417__auto____1;
return cljs$core$async$state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto___35962,out))
})();
var state__34506__auto__ = (function (){var statearr_35960 = f__34505__auto__.call(null);
(statearr_35960[(6)] = c__34504__auto___35962);

return statearr_35960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto___35962,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35976 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35976 = (function (f,ch,meta35977){
this.f = f;
this.ch = ch;
this.meta35977 = meta35977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35978,meta35977__$1){
var self__ = this;
var _35978__$1 = this;
return (new cljs.core.async.t_cljs$core$async35976(self__.f,self__.ch,meta35977__$1));
});

cljs.core.async.t_cljs$core$async35976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35978){
var self__ = this;
var _35978__$1 = this;
return self__.meta35977;
});

cljs.core.async.t_cljs$core$async35976.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35976.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35976.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35976.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35976.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35979 = (function (f,ch,meta35977,_,fn1,meta35980){
this.f = f;
this.ch = ch;
this.meta35977 = meta35977;
this._ = _;
this.fn1 = fn1;
this.meta35980 = meta35980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35981,meta35980__$1){
var self__ = this;
var _35981__$1 = this;
return (new cljs.core.async.t_cljs$core$async35979(self__.f,self__.ch,self__.meta35977,self__._,self__.fn1,meta35980__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35979.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35981){
var self__ = this;
var _35981__$1 = this;
return self__.meta35980;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35979.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35979.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35975_SHARP_){
return f1.call(null,(((p1__35975_SHARP_ == null))?null:self__.f.call(null,p1__35975_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35979.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35977","meta35977",1005808466,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35976","cljs.core.async/t_cljs$core$async35976",1168865238,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35980","meta35980",-1323219408,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35979.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35979";

cljs.core.async.t_cljs$core$async35979.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28240__auto__,writer__28241__auto__,opt__28242__auto__){
return cljs.core._write.call(null,writer__28241__auto__,"cljs.core.async/t_cljs$core$async35979");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35979 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35979(f__$1,ch__$1,meta35977__$1,___$2,fn1__$1,meta35980){
return (new cljs.core.async.t_cljs$core$async35979(f__$1,ch__$1,meta35977__$1,___$2,fn1__$1,meta35980));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35979(self__.f,self__.ch,self__.meta35977,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27617__auto__ = ret;
if(cljs.core.truth_(and__27617__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27617__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35976.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35976.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35977","meta35977",1005808466,null)], null);
});

cljs.core.async.t_cljs$core$async35976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35976";

cljs.core.async.t_cljs$core$async35976.cljs$lang$ctorPrWriter = (function (this__28240__auto__,writer__28241__auto__,opt__28242__auto__){
return cljs.core._write.call(null,writer__28241__auto__,"cljs.core.async/t_cljs$core$async35976");
});

cljs.core.async.__GT_t_cljs$core$async35976 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35976(f__$1,ch__$1,meta35977){
return (new cljs.core.async.t_cljs$core$async35976(f__$1,ch__$1,meta35977));
});

}

return (new cljs.core.async.t_cljs$core$async35976(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35982 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35982 = (function (f,ch,meta35983){
this.f = f;
this.ch = ch;
this.meta35983 = meta35983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35984,meta35983__$1){
var self__ = this;
var _35984__$1 = this;
return (new cljs.core.async.t_cljs$core$async35982(self__.f,self__.ch,meta35983__$1));
});

cljs.core.async.t_cljs$core$async35982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35984){
var self__ = this;
var _35984__$1 = this;
return self__.meta35983;
});

cljs.core.async.t_cljs$core$async35982.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35982.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35982.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35982.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35982.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35982.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35983","meta35983",296624670,null)], null);
});

cljs.core.async.t_cljs$core$async35982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35982";

cljs.core.async.t_cljs$core$async35982.cljs$lang$ctorPrWriter = (function (this__28240__auto__,writer__28241__auto__,opt__28242__auto__){
return cljs.core._write.call(null,writer__28241__auto__,"cljs.core.async/t_cljs$core$async35982");
});

cljs.core.async.__GT_t_cljs$core$async35982 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35982(f__$1,ch__$1,meta35983){
return (new cljs.core.async.t_cljs$core$async35982(f__$1,ch__$1,meta35983));
});

}

return (new cljs.core.async.t_cljs$core$async35982(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35985 = (function (p,ch,meta35986){
this.p = p;
this.ch = ch;
this.meta35986 = meta35986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35987,meta35986__$1){
var self__ = this;
var _35987__$1 = this;
return (new cljs.core.async.t_cljs$core$async35985(self__.p,self__.ch,meta35986__$1));
});

cljs.core.async.t_cljs$core$async35985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35987){
var self__ = this;
var _35987__$1 = this;
return self__.meta35986;
});

cljs.core.async.t_cljs$core$async35985.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35985.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35985.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35985.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35985.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35985.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35985.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35986","meta35986",662342841,null)], null);
});

cljs.core.async.t_cljs$core$async35985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35985";

cljs.core.async.t_cljs$core$async35985.cljs$lang$ctorPrWriter = (function (this__28240__auto__,writer__28241__auto__,opt__28242__auto__){
return cljs.core._write.call(null,writer__28241__auto__,"cljs.core.async/t_cljs$core$async35985");
});

cljs.core.async.__GT_t_cljs$core$async35985 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35985(p__$1,ch__$1,meta35986){
return (new cljs.core.async.t_cljs$core$async35985(p__$1,ch__$1,meta35986));
});

}

return (new cljs.core.async.t_cljs$core$async35985(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35989 = arguments.length;
switch (G__35989) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34504__auto___36029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto___36029,out){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto___36029,out){
return (function (state_36010){
var state_val_36011 = (state_36010[(1)]);
if((state_val_36011 === (7))){
var inst_36006 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36012_36030 = state_36010__$1;
(statearr_36012_36030[(2)] = inst_36006);

(statearr_36012_36030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (1))){
var state_36010__$1 = state_36010;
var statearr_36013_36031 = state_36010__$1;
(statearr_36013_36031[(2)] = null);

(statearr_36013_36031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (4))){
var inst_35992 = (state_36010[(7)]);
var inst_35992__$1 = (state_36010[(2)]);
var inst_35993 = (inst_35992__$1 == null);
var state_36010__$1 = (function (){var statearr_36014 = state_36010;
(statearr_36014[(7)] = inst_35992__$1);

return statearr_36014;
})();
if(cljs.core.truth_(inst_35993)){
var statearr_36015_36032 = state_36010__$1;
(statearr_36015_36032[(1)] = (5));

} else {
var statearr_36016_36033 = state_36010__$1;
(statearr_36016_36033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (6))){
var inst_35992 = (state_36010[(7)]);
var inst_35997 = p.call(null,inst_35992);
var state_36010__$1 = state_36010;
if(cljs.core.truth_(inst_35997)){
var statearr_36017_36034 = state_36010__$1;
(statearr_36017_36034[(1)] = (8));

} else {
var statearr_36018_36035 = state_36010__$1;
(statearr_36018_36035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (3))){
var inst_36008 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36010__$1,inst_36008);
} else {
if((state_val_36011 === (2))){
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36010__$1,(4),ch);
} else {
if((state_val_36011 === (11))){
var inst_36000 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36019_36036 = state_36010__$1;
(statearr_36019_36036[(2)] = inst_36000);

(statearr_36019_36036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (9))){
var state_36010__$1 = state_36010;
var statearr_36020_36037 = state_36010__$1;
(statearr_36020_36037[(2)] = null);

(statearr_36020_36037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (5))){
var inst_35995 = cljs.core.async.close_BANG_.call(null,out);
var state_36010__$1 = state_36010;
var statearr_36021_36038 = state_36010__$1;
(statearr_36021_36038[(2)] = inst_35995);

(statearr_36021_36038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (10))){
var inst_36003 = (state_36010[(2)]);
var state_36010__$1 = (function (){var statearr_36022 = state_36010;
(statearr_36022[(8)] = inst_36003);

return statearr_36022;
})();
var statearr_36023_36039 = state_36010__$1;
(statearr_36023_36039[(2)] = null);

(statearr_36023_36039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (8))){
var inst_35992 = (state_36010[(7)]);
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36010__$1,(11),out,inst_35992);
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
});})(c__34504__auto___36029,out))
;
return ((function (switch__34416__auto__,c__34504__auto___36029,out){
return (function() {
var cljs$core$async$state_machine__34417__auto__ = null;
var cljs$core$async$state_machine__34417__auto____0 = (function (){
var statearr_36024 = [null,null,null,null,null,null,null,null,null];
(statearr_36024[(0)] = cljs$core$async$state_machine__34417__auto__);

(statearr_36024[(1)] = (1));

return statearr_36024;
});
var cljs$core$async$state_machine__34417__auto____1 = (function (state_36010){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_36010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e36025){if((e36025 instanceof Object)){
var ex__34420__auto__ = e36025;
var statearr_36026_36040 = state_36010;
(statearr_36026_36040[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36041 = state_36010;
state_36010 = G__36041;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$state_machine__34417__auto__ = function(state_36010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34417__auto____1.call(this,state_36010);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34417__auto____0;
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34417__auto____1;
return cljs$core$async$state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto___36029,out))
})();
var state__34506__auto__ = (function (){var statearr_36027 = f__34505__auto__.call(null);
(statearr_36027[(6)] = c__34504__auto___36029);

return statearr_36027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto___36029,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36043 = arguments.length;
switch (G__36043) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto__){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto__){
return (function (state_36106){
var state_val_36107 = (state_36106[(1)]);
if((state_val_36107 === (7))){
var inst_36102 = (state_36106[(2)]);
var state_36106__$1 = state_36106;
var statearr_36108_36146 = state_36106__$1;
(statearr_36108_36146[(2)] = inst_36102);

(statearr_36108_36146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36107 === (20))){
var inst_36072 = (state_36106[(7)]);
var inst_36083 = (state_36106[(2)]);
var inst_36084 = cljs.core.next.call(null,inst_36072);
var inst_36058 = inst_36084;
var inst_36059 = null;
var inst_36060 = (0);
var inst_36061 = (0);
var state_36106__$1 = (function (){var statearr_36109 = state_36106;
(statearr_36109[(8)] = inst_36059);

(statearr_36109[(9)] = inst_36058);

(statearr_36109[(10)] = inst_36083);

(statearr_36109[(11)] = inst_36061);

(statearr_36109[(12)] = inst_36060);

return statearr_36109;
})();
var statearr_36110_36147 = state_36106__$1;
(statearr_36110_36147[(2)] = null);

(statearr_36110_36147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36107 === (1))){
var state_36106__$1 = state_36106;
var statearr_36111_36148 = state_36106__$1;
(statearr_36111_36148[(2)] = null);

(statearr_36111_36148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36107 === (4))){
var inst_36047 = (state_36106[(13)]);
var inst_36047__$1 = (state_36106[(2)]);
var inst_36048 = (inst_36047__$1 == null);
var state_36106__$1 = (function (){var statearr_36112 = state_36106;
(statearr_36112[(13)] = inst_36047__$1);

return statearr_36112;
})();
if(cljs.core.truth_(inst_36048)){
var statearr_36113_36149 = state_36106__$1;
(statearr_36113_36149[(1)] = (5));

} else {
var statearr_36114_36150 = state_36106__$1;
(statearr_36114_36150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36107 === (15))){
var state_36106__$1 = state_36106;
var statearr_36118_36151 = state_36106__$1;
(statearr_36118_36151[(2)] = null);

(statearr_36118_36151[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36107 === (21))){
var state_36106__$1 = state_36106;
var statearr_36119_36152 = state_36106__$1;
(statearr_36119_36152[(2)] = null);

(statearr_36119_36152[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36107 === (13))){
var inst_36059 = (state_36106[(8)]);
var inst_36058 = (state_36106[(9)]);
var inst_36061 = (state_36106[(11)]);
var inst_36060 = (state_36106[(12)]);
var inst_36068 = (state_36106[(2)]);
var inst_36069 = (inst_36061 + (1));
var tmp36115 = inst_36059;
var tmp36116 = inst_36058;
var tmp36117 = inst_36060;
var inst_36058__$1 = tmp36116;
var inst_36059__$1 = tmp36115;
var inst_36060__$1 = tmp36117;
var inst_36061__$1 = inst_36069;
var state_36106__$1 = (function (){var statearr_36120 = state_36106;
(statearr_36120[(8)] = inst_36059__$1);

(statearr_36120[(9)] = inst_36058__$1);

(statearr_36120[(11)] = inst_36061__$1);

(statearr_36120[(14)] = inst_36068);

(statearr_36120[(12)] = inst_36060__$1);

return statearr_36120;
})();
var statearr_36121_36153 = state_36106__$1;
(statearr_36121_36153[(2)] = null);

(statearr_36121_36153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36107 === (22))){
var state_36106__$1 = state_36106;
var statearr_36122_36154 = state_36106__$1;
(statearr_36122_36154[(2)] = null);

(statearr_36122_36154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36107 === (6))){
var inst_36047 = (state_36106[(13)]);
var inst_36056 = f.call(null,inst_36047);
var inst_36057 = cljs.core.seq.call(null,inst_36056);
var inst_36058 = inst_36057;
var inst_36059 = null;
var inst_36060 = (0);
var inst_36061 = (0);
var state_36106__$1 = (function (){var statearr_36123 = state_36106;
(statearr_36123[(8)] = inst_36059);

(statearr_36123[(9)] = inst_36058);

(statearr_36123[(11)] = inst_36061);

(statearr_36123[(12)] = inst_36060);

return statearr_36123;
})();
var statearr_36124_36155 = state_36106__$1;
(statearr_36124_36155[(2)] = null);

(statearr_36124_36155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36107 === (17))){
var inst_36072 = (state_36106[(7)]);
var inst_36076 = cljs.core.chunk_first.call(null,inst_36072);
var inst_36077 = cljs.core.chunk_rest.call(null,inst_36072);
var inst_36078 = cljs.core.count.call(null,inst_36076);
var inst_36058 = inst_36077;
var inst_36059 = inst_36076;
var inst_36060 = inst_36078;
var inst_36061 = (0);
var state_36106__$1 = (function (){var statearr_36125 = state_36106;
(statearr_36125[(8)] = inst_36059);

(statearr_36125[(9)] = inst_36058);

(statearr_36125[(11)] = inst_36061);

(statearr_36125[(12)] = inst_36060);

return statearr_36125;
})();
var statearr_36126_36156 = state_36106__$1;
(statearr_36126_36156[(2)] = null);

(statearr_36126_36156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36107 === (3))){
var inst_36104 = (state_36106[(2)]);
var state_36106__$1 = state_36106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36106__$1,inst_36104);
} else {
if((state_val_36107 === (12))){
var inst_36092 = (state_36106[(2)]);
var state_36106__$1 = state_36106;
var statearr_36127_36157 = state_36106__$1;
(statearr_36127_36157[(2)] = inst_36092);

(statearr_36127_36157[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36107 === (2))){
var state_36106__$1 = state_36106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36106__$1,(4),in$);
} else {
if((state_val_36107 === (23))){
var inst_36100 = (state_36106[(2)]);
var state_36106__$1 = state_36106;
var statearr_36128_36158 = state_36106__$1;
(statearr_36128_36158[(2)] = inst_36100);

(statearr_36128_36158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36107 === (19))){
var inst_36087 = (state_36106[(2)]);
var state_36106__$1 = state_36106;
var statearr_36129_36159 = state_36106__$1;
(statearr_36129_36159[(2)] = inst_36087);

(statearr_36129_36159[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36107 === (11))){
var inst_36058 = (state_36106[(9)]);
var inst_36072 = (state_36106[(7)]);
var inst_36072__$1 = cljs.core.seq.call(null,inst_36058);
var state_36106__$1 = (function (){var statearr_36130 = state_36106;
(statearr_36130[(7)] = inst_36072__$1);

return statearr_36130;
})();
if(inst_36072__$1){
var statearr_36131_36160 = state_36106__$1;
(statearr_36131_36160[(1)] = (14));

} else {
var statearr_36132_36161 = state_36106__$1;
(statearr_36132_36161[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36107 === (9))){
var inst_36094 = (state_36106[(2)]);
var inst_36095 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36106__$1 = (function (){var statearr_36133 = state_36106;
(statearr_36133[(15)] = inst_36094);

return statearr_36133;
})();
if(cljs.core.truth_(inst_36095)){
var statearr_36134_36162 = state_36106__$1;
(statearr_36134_36162[(1)] = (21));

} else {
var statearr_36135_36163 = state_36106__$1;
(statearr_36135_36163[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36107 === (5))){
var inst_36050 = cljs.core.async.close_BANG_.call(null,out);
var state_36106__$1 = state_36106;
var statearr_36136_36164 = state_36106__$1;
(statearr_36136_36164[(2)] = inst_36050);

(statearr_36136_36164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36107 === (14))){
var inst_36072 = (state_36106[(7)]);
var inst_36074 = cljs.core.chunked_seq_QMARK_.call(null,inst_36072);
var state_36106__$1 = state_36106;
if(inst_36074){
var statearr_36137_36165 = state_36106__$1;
(statearr_36137_36165[(1)] = (17));

} else {
var statearr_36138_36166 = state_36106__$1;
(statearr_36138_36166[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36107 === (16))){
var inst_36090 = (state_36106[(2)]);
var state_36106__$1 = state_36106;
var statearr_36139_36167 = state_36106__$1;
(statearr_36139_36167[(2)] = inst_36090);

(statearr_36139_36167[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36107 === (10))){
var inst_36059 = (state_36106[(8)]);
var inst_36061 = (state_36106[(11)]);
var inst_36066 = cljs.core._nth.call(null,inst_36059,inst_36061);
var state_36106__$1 = state_36106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36106__$1,(13),out,inst_36066);
} else {
if((state_val_36107 === (18))){
var inst_36072 = (state_36106[(7)]);
var inst_36081 = cljs.core.first.call(null,inst_36072);
var state_36106__$1 = state_36106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36106__$1,(20),out,inst_36081);
} else {
if((state_val_36107 === (8))){
var inst_36061 = (state_36106[(11)]);
var inst_36060 = (state_36106[(12)]);
var inst_36063 = (inst_36061 < inst_36060);
var inst_36064 = inst_36063;
var state_36106__$1 = state_36106;
if(cljs.core.truth_(inst_36064)){
var statearr_36140_36168 = state_36106__$1;
(statearr_36140_36168[(1)] = (10));

} else {
var statearr_36141_36169 = state_36106__$1;
(statearr_36141_36169[(1)] = (11));

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
});})(c__34504__auto__))
;
return ((function (switch__34416__auto__,c__34504__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34417__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34417__auto____0 = (function (){
var statearr_36142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36142[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34417__auto__);

(statearr_36142[(1)] = (1));

return statearr_36142;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34417__auto____1 = (function (state_36106){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_36106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e36143){if((e36143 instanceof Object)){
var ex__34420__auto__ = e36143;
var statearr_36144_36170 = state_36106;
(statearr_36144_36170[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36171 = state_36106;
state_36106 = G__36171;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34417__auto__ = function(state_36106){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34417__auto____1.call(this,state_36106);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34417__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34417__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto__))
})();
var state__34506__auto__ = (function (){var statearr_36145 = f__34505__auto__.call(null);
(statearr_36145[(6)] = c__34504__auto__);

return statearr_36145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto__))
);

return c__34504__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36173 = arguments.length;
switch (G__36173) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36176 = arguments.length;
switch (G__36176) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36179 = arguments.length;
switch (G__36179) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34504__auto___36226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto___36226,out){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto___36226,out){
return (function (state_36203){
var state_val_36204 = (state_36203[(1)]);
if((state_val_36204 === (7))){
var inst_36198 = (state_36203[(2)]);
var state_36203__$1 = state_36203;
var statearr_36205_36227 = state_36203__$1;
(statearr_36205_36227[(2)] = inst_36198);

(statearr_36205_36227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (1))){
var inst_36180 = null;
var state_36203__$1 = (function (){var statearr_36206 = state_36203;
(statearr_36206[(7)] = inst_36180);

return statearr_36206;
})();
var statearr_36207_36228 = state_36203__$1;
(statearr_36207_36228[(2)] = null);

(statearr_36207_36228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (4))){
var inst_36183 = (state_36203[(8)]);
var inst_36183__$1 = (state_36203[(2)]);
var inst_36184 = (inst_36183__$1 == null);
var inst_36185 = cljs.core.not.call(null,inst_36184);
var state_36203__$1 = (function (){var statearr_36208 = state_36203;
(statearr_36208[(8)] = inst_36183__$1);

return statearr_36208;
})();
if(inst_36185){
var statearr_36209_36229 = state_36203__$1;
(statearr_36209_36229[(1)] = (5));

} else {
var statearr_36210_36230 = state_36203__$1;
(statearr_36210_36230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (6))){
var state_36203__$1 = state_36203;
var statearr_36211_36231 = state_36203__$1;
(statearr_36211_36231[(2)] = null);

(statearr_36211_36231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (3))){
var inst_36200 = (state_36203[(2)]);
var inst_36201 = cljs.core.async.close_BANG_.call(null,out);
var state_36203__$1 = (function (){var statearr_36212 = state_36203;
(statearr_36212[(9)] = inst_36200);

return statearr_36212;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36203__$1,inst_36201);
} else {
if((state_val_36204 === (2))){
var state_36203__$1 = state_36203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36203__$1,(4),ch);
} else {
if((state_val_36204 === (11))){
var inst_36183 = (state_36203[(8)]);
var inst_36192 = (state_36203[(2)]);
var inst_36180 = inst_36183;
var state_36203__$1 = (function (){var statearr_36213 = state_36203;
(statearr_36213[(7)] = inst_36180);

(statearr_36213[(10)] = inst_36192);

return statearr_36213;
})();
var statearr_36214_36232 = state_36203__$1;
(statearr_36214_36232[(2)] = null);

(statearr_36214_36232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (9))){
var inst_36183 = (state_36203[(8)]);
var state_36203__$1 = state_36203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36203__$1,(11),out,inst_36183);
} else {
if((state_val_36204 === (5))){
var inst_36180 = (state_36203[(7)]);
var inst_36183 = (state_36203[(8)]);
var inst_36187 = cljs.core._EQ_.call(null,inst_36183,inst_36180);
var state_36203__$1 = state_36203;
if(inst_36187){
var statearr_36216_36233 = state_36203__$1;
(statearr_36216_36233[(1)] = (8));

} else {
var statearr_36217_36234 = state_36203__$1;
(statearr_36217_36234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (10))){
var inst_36195 = (state_36203[(2)]);
var state_36203__$1 = state_36203;
var statearr_36218_36235 = state_36203__$1;
(statearr_36218_36235[(2)] = inst_36195);

(statearr_36218_36235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36204 === (8))){
var inst_36180 = (state_36203[(7)]);
var tmp36215 = inst_36180;
var inst_36180__$1 = tmp36215;
var state_36203__$1 = (function (){var statearr_36219 = state_36203;
(statearr_36219[(7)] = inst_36180__$1);

return statearr_36219;
})();
var statearr_36220_36236 = state_36203__$1;
(statearr_36220_36236[(2)] = null);

(statearr_36220_36236[(1)] = (2));


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
});})(c__34504__auto___36226,out))
;
return ((function (switch__34416__auto__,c__34504__auto___36226,out){
return (function() {
var cljs$core$async$state_machine__34417__auto__ = null;
var cljs$core$async$state_machine__34417__auto____0 = (function (){
var statearr_36221 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36221[(0)] = cljs$core$async$state_machine__34417__auto__);

(statearr_36221[(1)] = (1));

return statearr_36221;
});
var cljs$core$async$state_machine__34417__auto____1 = (function (state_36203){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_36203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e36222){if((e36222 instanceof Object)){
var ex__34420__auto__ = e36222;
var statearr_36223_36237 = state_36203;
(statearr_36223_36237[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36238 = state_36203;
state_36203 = G__36238;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$state_machine__34417__auto__ = function(state_36203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34417__auto____1.call(this,state_36203);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34417__auto____0;
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34417__auto____1;
return cljs$core$async$state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto___36226,out))
})();
var state__34506__auto__ = (function (){var statearr_36224 = f__34505__auto__.call(null);
(statearr_36224[(6)] = c__34504__auto___36226);

return statearr_36224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto___36226,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36240 = arguments.length;
switch (G__36240) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34504__auto___36306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto___36306,out){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto___36306,out){
return (function (state_36278){
var state_val_36279 = (state_36278[(1)]);
if((state_val_36279 === (7))){
var inst_36274 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
var statearr_36280_36307 = state_36278__$1;
(statearr_36280_36307[(2)] = inst_36274);

(statearr_36280_36307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (1))){
var inst_36241 = (new Array(n));
var inst_36242 = inst_36241;
var inst_36243 = (0);
var state_36278__$1 = (function (){var statearr_36281 = state_36278;
(statearr_36281[(7)] = inst_36243);

(statearr_36281[(8)] = inst_36242);

return statearr_36281;
})();
var statearr_36282_36308 = state_36278__$1;
(statearr_36282_36308[(2)] = null);

(statearr_36282_36308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (4))){
var inst_36246 = (state_36278[(9)]);
var inst_36246__$1 = (state_36278[(2)]);
var inst_36247 = (inst_36246__$1 == null);
var inst_36248 = cljs.core.not.call(null,inst_36247);
var state_36278__$1 = (function (){var statearr_36283 = state_36278;
(statearr_36283[(9)] = inst_36246__$1);

return statearr_36283;
})();
if(inst_36248){
var statearr_36284_36309 = state_36278__$1;
(statearr_36284_36309[(1)] = (5));

} else {
var statearr_36285_36310 = state_36278__$1;
(statearr_36285_36310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (15))){
var inst_36268 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
var statearr_36286_36311 = state_36278__$1;
(statearr_36286_36311[(2)] = inst_36268);

(statearr_36286_36311[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (13))){
var state_36278__$1 = state_36278;
var statearr_36287_36312 = state_36278__$1;
(statearr_36287_36312[(2)] = null);

(statearr_36287_36312[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (6))){
var inst_36243 = (state_36278[(7)]);
var inst_36264 = (inst_36243 > (0));
var state_36278__$1 = state_36278;
if(cljs.core.truth_(inst_36264)){
var statearr_36288_36313 = state_36278__$1;
(statearr_36288_36313[(1)] = (12));

} else {
var statearr_36289_36314 = state_36278__$1;
(statearr_36289_36314[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (3))){
var inst_36276 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36278__$1,inst_36276);
} else {
if((state_val_36279 === (12))){
var inst_36242 = (state_36278[(8)]);
var inst_36266 = cljs.core.vec.call(null,inst_36242);
var state_36278__$1 = state_36278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36278__$1,(15),out,inst_36266);
} else {
if((state_val_36279 === (2))){
var state_36278__$1 = state_36278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36278__$1,(4),ch);
} else {
if((state_val_36279 === (11))){
var inst_36258 = (state_36278[(2)]);
var inst_36259 = (new Array(n));
var inst_36242 = inst_36259;
var inst_36243 = (0);
var state_36278__$1 = (function (){var statearr_36290 = state_36278;
(statearr_36290[(7)] = inst_36243);

(statearr_36290[(10)] = inst_36258);

(statearr_36290[(8)] = inst_36242);

return statearr_36290;
})();
var statearr_36291_36315 = state_36278__$1;
(statearr_36291_36315[(2)] = null);

(statearr_36291_36315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (9))){
var inst_36242 = (state_36278[(8)]);
var inst_36256 = cljs.core.vec.call(null,inst_36242);
var state_36278__$1 = state_36278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36278__$1,(11),out,inst_36256);
} else {
if((state_val_36279 === (5))){
var inst_36243 = (state_36278[(7)]);
var inst_36246 = (state_36278[(9)]);
var inst_36251 = (state_36278[(11)]);
var inst_36242 = (state_36278[(8)]);
var inst_36250 = (inst_36242[inst_36243] = inst_36246);
var inst_36251__$1 = (inst_36243 + (1));
var inst_36252 = (inst_36251__$1 < n);
var state_36278__$1 = (function (){var statearr_36292 = state_36278;
(statearr_36292[(11)] = inst_36251__$1);

(statearr_36292[(12)] = inst_36250);

return statearr_36292;
})();
if(cljs.core.truth_(inst_36252)){
var statearr_36293_36316 = state_36278__$1;
(statearr_36293_36316[(1)] = (8));

} else {
var statearr_36294_36317 = state_36278__$1;
(statearr_36294_36317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (14))){
var inst_36271 = (state_36278[(2)]);
var inst_36272 = cljs.core.async.close_BANG_.call(null,out);
var state_36278__$1 = (function (){var statearr_36296 = state_36278;
(statearr_36296[(13)] = inst_36271);

return statearr_36296;
})();
var statearr_36297_36318 = state_36278__$1;
(statearr_36297_36318[(2)] = inst_36272);

(statearr_36297_36318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (10))){
var inst_36262 = (state_36278[(2)]);
var state_36278__$1 = state_36278;
var statearr_36298_36319 = state_36278__$1;
(statearr_36298_36319[(2)] = inst_36262);

(statearr_36298_36319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36279 === (8))){
var inst_36251 = (state_36278[(11)]);
var inst_36242 = (state_36278[(8)]);
var tmp36295 = inst_36242;
var inst_36242__$1 = tmp36295;
var inst_36243 = inst_36251;
var state_36278__$1 = (function (){var statearr_36299 = state_36278;
(statearr_36299[(7)] = inst_36243);

(statearr_36299[(8)] = inst_36242__$1);

return statearr_36299;
})();
var statearr_36300_36320 = state_36278__$1;
(statearr_36300_36320[(2)] = null);

(statearr_36300_36320[(1)] = (2));


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
});})(c__34504__auto___36306,out))
;
return ((function (switch__34416__auto__,c__34504__auto___36306,out){
return (function() {
var cljs$core$async$state_machine__34417__auto__ = null;
var cljs$core$async$state_machine__34417__auto____0 = (function (){
var statearr_36301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36301[(0)] = cljs$core$async$state_machine__34417__auto__);

(statearr_36301[(1)] = (1));

return statearr_36301;
});
var cljs$core$async$state_machine__34417__auto____1 = (function (state_36278){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_36278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e36302){if((e36302 instanceof Object)){
var ex__34420__auto__ = e36302;
var statearr_36303_36321 = state_36278;
(statearr_36303_36321[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36322 = state_36278;
state_36278 = G__36322;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$state_machine__34417__auto__ = function(state_36278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34417__auto____1.call(this,state_36278);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34417__auto____0;
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34417__auto____1;
return cljs$core$async$state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto___36306,out))
})();
var state__34506__auto__ = (function (){var statearr_36304 = f__34505__auto__.call(null);
(statearr_36304[(6)] = c__34504__auto___36306);

return statearr_36304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto___36306,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36324 = arguments.length;
switch (G__36324) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34504__auto___36394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34504__auto___36394,out){
return (function (){
var f__34505__auto__ = (function (){var switch__34416__auto__ = ((function (c__34504__auto___36394,out){
return (function (state_36366){
var state_val_36367 = (state_36366[(1)]);
if((state_val_36367 === (7))){
var inst_36362 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
var statearr_36368_36395 = state_36366__$1;
(statearr_36368_36395[(2)] = inst_36362);

(statearr_36368_36395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (1))){
var inst_36325 = [];
var inst_36326 = inst_36325;
var inst_36327 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36366__$1 = (function (){var statearr_36369 = state_36366;
(statearr_36369[(7)] = inst_36326);

(statearr_36369[(8)] = inst_36327);

return statearr_36369;
})();
var statearr_36370_36396 = state_36366__$1;
(statearr_36370_36396[(2)] = null);

(statearr_36370_36396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (4))){
var inst_36330 = (state_36366[(9)]);
var inst_36330__$1 = (state_36366[(2)]);
var inst_36331 = (inst_36330__$1 == null);
var inst_36332 = cljs.core.not.call(null,inst_36331);
var state_36366__$1 = (function (){var statearr_36371 = state_36366;
(statearr_36371[(9)] = inst_36330__$1);

return statearr_36371;
})();
if(inst_36332){
var statearr_36372_36397 = state_36366__$1;
(statearr_36372_36397[(1)] = (5));

} else {
var statearr_36373_36398 = state_36366__$1;
(statearr_36373_36398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (15))){
var inst_36356 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
var statearr_36374_36399 = state_36366__$1;
(statearr_36374_36399[(2)] = inst_36356);

(statearr_36374_36399[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (13))){
var state_36366__$1 = state_36366;
var statearr_36375_36400 = state_36366__$1;
(statearr_36375_36400[(2)] = null);

(statearr_36375_36400[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (6))){
var inst_36326 = (state_36366[(7)]);
var inst_36351 = inst_36326.length;
var inst_36352 = (inst_36351 > (0));
var state_36366__$1 = state_36366;
if(cljs.core.truth_(inst_36352)){
var statearr_36376_36401 = state_36366__$1;
(statearr_36376_36401[(1)] = (12));

} else {
var statearr_36377_36402 = state_36366__$1;
(statearr_36377_36402[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (3))){
var inst_36364 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36366__$1,inst_36364);
} else {
if((state_val_36367 === (12))){
var inst_36326 = (state_36366[(7)]);
var inst_36354 = cljs.core.vec.call(null,inst_36326);
var state_36366__$1 = state_36366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36366__$1,(15),out,inst_36354);
} else {
if((state_val_36367 === (2))){
var state_36366__$1 = state_36366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36366__$1,(4),ch);
} else {
if((state_val_36367 === (11))){
var inst_36334 = (state_36366[(10)]);
var inst_36330 = (state_36366[(9)]);
var inst_36344 = (state_36366[(2)]);
var inst_36345 = [];
var inst_36346 = inst_36345.push(inst_36330);
var inst_36326 = inst_36345;
var inst_36327 = inst_36334;
var state_36366__$1 = (function (){var statearr_36378 = state_36366;
(statearr_36378[(7)] = inst_36326);

(statearr_36378[(11)] = inst_36346);

(statearr_36378[(8)] = inst_36327);

(statearr_36378[(12)] = inst_36344);

return statearr_36378;
})();
var statearr_36379_36403 = state_36366__$1;
(statearr_36379_36403[(2)] = null);

(statearr_36379_36403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (9))){
var inst_36326 = (state_36366[(7)]);
var inst_36342 = cljs.core.vec.call(null,inst_36326);
var state_36366__$1 = state_36366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36366__$1,(11),out,inst_36342);
} else {
if((state_val_36367 === (5))){
var inst_36334 = (state_36366[(10)]);
var inst_36327 = (state_36366[(8)]);
var inst_36330 = (state_36366[(9)]);
var inst_36334__$1 = f.call(null,inst_36330);
var inst_36335 = cljs.core._EQ_.call(null,inst_36334__$1,inst_36327);
var inst_36336 = cljs.core.keyword_identical_QMARK_.call(null,inst_36327,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36337 = (inst_36335) || (inst_36336);
var state_36366__$1 = (function (){var statearr_36380 = state_36366;
(statearr_36380[(10)] = inst_36334__$1);

return statearr_36380;
})();
if(cljs.core.truth_(inst_36337)){
var statearr_36381_36404 = state_36366__$1;
(statearr_36381_36404[(1)] = (8));

} else {
var statearr_36382_36405 = state_36366__$1;
(statearr_36382_36405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (14))){
var inst_36359 = (state_36366[(2)]);
var inst_36360 = cljs.core.async.close_BANG_.call(null,out);
var state_36366__$1 = (function (){var statearr_36384 = state_36366;
(statearr_36384[(13)] = inst_36359);

return statearr_36384;
})();
var statearr_36385_36406 = state_36366__$1;
(statearr_36385_36406[(2)] = inst_36360);

(statearr_36385_36406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (10))){
var inst_36349 = (state_36366[(2)]);
var state_36366__$1 = state_36366;
var statearr_36386_36407 = state_36366__$1;
(statearr_36386_36407[(2)] = inst_36349);

(statearr_36386_36407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36367 === (8))){
var inst_36326 = (state_36366[(7)]);
var inst_36334 = (state_36366[(10)]);
var inst_36330 = (state_36366[(9)]);
var inst_36339 = inst_36326.push(inst_36330);
var tmp36383 = inst_36326;
var inst_36326__$1 = tmp36383;
var inst_36327 = inst_36334;
var state_36366__$1 = (function (){var statearr_36387 = state_36366;
(statearr_36387[(14)] = inst_36339);

(statearr_36387[(7)] = inst_36326__$1);

(statearr_36387[(8)] = inst_36327);

return statearr_36387;
})();
var statearr_36388_36408 = state_36366__$1;
(statearr_36388_36408[(2)] = null);

(statearr_36388_36408[(1)] = (2));


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
});})(c__34504__auto___36394,out))
;
return ((function (switch__34416__auto__,c__34504__auto___36394,out){
return (function() {
var cljs$core$async$state_machine__34417__auto__ = null;
var cljs$core$async$state_machine__34417__auto____0 = (function (){
var statearr_36389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36389[(0)] = cljs$core$async$state_machine__34417__auto__);

(statearr_36389[(1)] = (1));

return statearr_36389;
});
var cljs$core$async$state_machine__34417__auto____1 = (function (state_36366){
while(true){
var ret_value__34418__auto__ = (function (){try{while(true){
var result__34419__auto__ = switch__34416__auto__.call(null,state_36366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34419__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34419__auto__;
}
break;
}
}catch (e36390){if((e36390 instanceof Object)){
var ex__34420__auto__ = e36390;
var statearr_36391_36409 = state_36366;
(statearr_36391_36409[(5)] = ex__34420__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34418__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36410 = state_36366;
state_36366 = G__36410;
continue;
} else {
return ret_value__34418__auto__;
}
break;
}
});
cljs$core$async$state_machine__34417__auto__ = function(state_36366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34417__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34417__auto____1.call(this,state_36366);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34417__auto____0;
cljs$core$async$state_machine__34417__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34417__auto____1;
return cljs$core$async$state_machine__34417__auto__;
})()
;})(switch__34416__auto__,c__34504__auto___36394,out))
})();
var state__34506__auto__ = (function (){var statearr_36392 = f__34505__auto__.call(null);
(statearr_36392[(6)] = c__34504__auto___36394);

return statearr_36392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34506__auto__);
});})(c__34504__auto___36394,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1547003708068