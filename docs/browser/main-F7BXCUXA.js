var hg=Object.defineProperty,mg=Object.defineProperties;var pg=Object.getOwnPropertyDescriptors;var zt=Object.getOwnPropertySymbols;var vg=Object.prototype.hasOwnProperty,gg=Object.prototype.propertyIsEnumerable;var Mt=(e,c,n)=>c in e?hg(e,c,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[c]=n,g=(e,c)=>{for(var n in c||={})vg.call(c,n)&&Mt(e,n,c[n]);if(zt)for(var n of zt(c))gg.call(c,n)&&Mt(e,n,c[n]);return e},Q=(e,c)=>mg(e,pg(c));var T8=(e,c,n)=>new Promise((t,r)=>{var a=s=>{try{o(n.next(s))}catch(l){r(l)}},i=s=>{try{o(n.throw(s))}catch(l){r(l)}},o=s=>s.done?t(s.value):Promise.resolve(s.value).then(a,i);o((n=n.apply(e,c)).next())});var Ht=null;var k8=1,Vt=Symbol("SIGNAL");function k(e){let c=Ht;return Ht=e,c}var Lt={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Cg(e){if(!(F8(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===k8)){if(!e.producerMustRecompute(e)&&!R8(e)){e.dirty=!1,e.lastCleanEpoch=k8;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=k8}}function yt(e){return e&&(e.nextProducerIndex=0),k(e)}function bt(e,c){if(k(c),!(!e||e.producerNode===void 0||e.producerIndexOfThis===void 0||e.producerLastReadVersion===void 0)){if(F8(e))for(let n=e.nextProducerIndex;n<e.producerNode.length;n++)P8(e.producerNode[n],e.producerIndexOfThis[n]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function R8(e){f6(e);for(let c=0;c<e.producerNode.length;c++){let n=e.producerNode[c],t=e.producerLastReadVersion[c];if(t!==n.version||(Cg(n),t!==n.version))return!0}return!1}function xt(e){if(f6(e),F8(e))for(let c=0;c<e.producerNode.length;c++)P8(e.producerNode[c],e.producerIndexOfThis[c]);e.producerNode.length=e.producerLastReadVersion.length=e.producerIndexOfThis.length=0,e.liveConsumerNode&&(e.liveConsumerNode.length=e.liveConsumerIndexOfThis.length=0)}function P8(e,c){if(zg(e),f6(e),e.liveConsumerNode.length===1)for(let t=0;t<e.producerNode.length;t++)P8(e.producerNode[t],e.producerIndexOfThis[t]);let n=e.liveConsumerNode.length-1;if(e.liveConsumerNode[c]=e.liveConsumerNode[n],e.liveConsumerIndexOfThis[c]=e.liveConsumerIndexOfThis[n],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,c<e.liveConsumerNode.length){let t=e.liveConsumerIndexOfThis[c],r=e.liveConsumerNode[c];f6(r),r.producerIndexOfThis[t]=c}}function F8(e){return e.consumerIsAlwaysLive||(e?.liveConsumerNode?.length??0)>0}function f6(e){e.producerNode??=[],e.producerIndexOfThis??=[],e.producerLastReadVersion??=[]}function zg(e){e.liveConsumerNode??=[],e.liveConsumerIndexOfThis??=[]}function Mg(){throw new Error}var Hg=Mg;function wt(e){Hg=e}function b(e){return typeof e=="function"}function a3(e){let n=e(t=>{Error.call(t),t.stack=new Error().stack});return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var u6=a3(e=>function(n){e(this),this.message=n?`${n.length} errors occurred during unsubscription:
${n.map((t,r)=>`${r+1}) ${t.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=n});function Z3(e,c){if(e){let n=e.indexOf(c);0<=n&&e.splice(n,1)}}var J=class e{constructor(c){this.initialTeardown=c,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let c;if(!this.closed){this.closed=!0;let{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(let a of n)a.remove(this);else n.remove(this);let{initialTeardown:t}=this;if(b(t))try{t()}catch(a){c=a instanceof u6?a.errors:[a]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let a of r)try{St(a)}catch(i){c=c??[],i instanceof u6?c=[...c,...i.errors]:c.push(i)}}if(c)throw new u6(c)}}add(c){var n;if(c&&c!==this)if(this.closed)St(c);else{if(c instanceof e){if(c.closed||c._hasParent(this))return;c._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(c)}}_hasParent(c){let{_parentage:n}=this;return n===c||Array.isArray(n)&&n.includes(c)}_addParent(c){let{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(c),n):n?[n,c]:c}_removeParent(c){let{_parentage:n}=this;n===c?this._parentage=null:Array.isArray(n)&&Z3(n,c)}remove(c){let{_finalizers:n}=this;n&&Z3(n,c),c instanceof e&&c._removeParent(this)}};J.EMPTY=(()=>{let e=new J;return e.closed=!0,e})();var _8=J.EMPTY;function d6(e){return e instanceof J||e&&"closed"in e&&b(e.remove)&&b(e.add)&&b(e.unsubscribe)}function St(e){b(e)?e():e.unsubscribe()}var A1={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var i3={setTimeout(e,c,...n){let{delegate:t}=i3;return t?.setTimeout?t.setTimeout(e,c,...n):setTimeout(e,c,...n)},clearTimeout(e){let{delegate:c}=i3;return(c?.clearTimeout||clearTimeout)(e)},delegate:void 0};function h6(e){i3.setTimeout(()=>{let{onUnhandledError:c}=A1;if(c)c(e);else throw e})}function Y3(){}var Nt=O8("C",void 0,void 0);function Dt(e){return O8("E",void 0,e)}function At(e){return O8("N",e,void 0)}function O8(e,c,n){return{kind:e,value:c,error:n}}var R2=null;function o3(e){if(A1.useDeprecatedSynchronousErrorHandling){let c=!R2;if(c&&(R2={errorThrown:!1,error:null}),e(),c){let{errorThrown:n,error:t}=R2;if(R2=null,n)throw t}}else e()}function It(e){A1.useDeprecatedSynchronousErrorHandling&&R2&&(R2.errorThrown=!0,R2.error=e)}var P2=class extends J{constructor(c){super(),this.isStopped=!1,c?(this.destination=c,d6(c)&&c.add(this)):this.destination=yg}static create(c,n,t){return new s3(c,n,t)}next(c){this.isStopped?j8(At(c),this):this._next(c)}error(c){this.isStopped?j8(Dt(c),this):(this.isStopped=!0,this._error(c))}complete(){this.isStopped?j8(Nt,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(c){this.destination.next(c)}_error(c){try{this.destination.error(c)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Vg=Function.prototype.bind;function B8(e,c){return Vg.call(e,c)}var U8=class{constructor(c){this.partialObserver=c}next(c){let{partialObserver:n}=this;if(n.next)try{n.next(c)}catch(t){m6(t)}}error(c){let{partialObserver:n}=this;if(n.error)try{n.error(c)}catch(t){m6(t)}else m6(c)}complete(){let{partialObserver:c}=this;if(c.complete)try{c.complete()}catch(n){m6(n)}}},s3=class extends P2{constructor(c,n,t){super();let r;if(b(c)||!c)r={next:c??void 0,error:n??void 0,complete:t??void 0};else{let a;this&&A1.useDeprecatedNextContext?(a=Object.create(c),a.unsubscribe=()=>this.unsubscribe(),r={next:c.next&&B8(c.next,a),error:c.error&&B8(c.error,a),complete:c.complete&&B8(c.complete,a)}):r=c}this.destination=new U8(r)}};function m6(e){A1.useDeprecatedSynchronousErrorHandling?It(e):h6(e)}function Lg(e){throw e}function j8(e,c){let{onStoppedNotification:n}=A1;n&&i3.setTimeout(()=>n(e,c))}var yg={closed:!0,next:Y3,error:Lg,complete:Y3};var l3=typeof Symbol=="function"&&Symbol.observable||"@@observable";function p1(e){return e}function q8(...e){return $8(e)}function $8(e){return e.length===0?p1:e.length===1?e[0]:function(n){return e.reduce((t,r)=>r(t),n)}}var _=(()=>{class e{constructor(n){n&&(this._subscribe=n)}lift(n){let t=new e;return t.source=this,t.operator=n,t}subscribe(n,t,r){let a=xg(n)?n:new s3(n,t,r);return o3(()=>{let{operator:i,source:o}=this;a.add(i?i.call(a,o):o?this._subscribe(a):this._trySubscribe(a))}),a}_trySubscribe(n){try{return this._subscribe(n)}catch(t){n.error(t)}}forEach(n,t){return t=Et(t),new t((r,a)=>{let i=new s3({next:o=>{try{n(o)}catch(s){a(s),i.unsubscribe()}},error:a,complete:r});this.subscribe(i)})}_subscribe(n){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(n)}[l3](){return this}pipe(...n){return $8(n)(this)}toPromise(n){return n=Et(n),new n((t,r)=>{let a;this.subscribe(i=>a=i,i=>r(i),()=>t(a))})}}return e.create=c=>new e(c),e})();function Et(e){var c;return(c=e??A1.Promise)!==null&&c!==void 0?c:Promise}function bg(e){return e&&b(e.next)&&b(e.error)&&b(e.complete)}function xg(e){return e&&e instanceof P2||bg(e)&&d6(e)}function G8(e){return b(e?.lift)}function D(e){return c=>{if(G8(c))return c.lift(function(n){try{return e(n,this)}catch(t){this.error(t)}});throw new TypeError("Unable to lift unknown Observable type")}}function A(e,c,n,t,r){return new W8(e,c,n,t,r)}var W8=class extends P2{constructor(c,n,t,r,a,i){super(c),this.onFinalize=a,this.shouldUnsubscribe=i,this._next=n?function(o){try{n(o)}catch(s){c.error(s)}}:super._next,this._error=r?function(o){try{r(o)}catch(s){c.error(s)}finally{this.unsubscribe()}}:super._error,this._complete=t?function(){try{t()}catch(o){c.error(o)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var c;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:n}=this;super.unsubscribe(),!n&&((c=this.onFinalize)===null||c===void 0||c.call(this))}}};function f3(){return D((e,c)=>{let n=null;e._refCount++;let t=A(c,void 0,void 0,void 0,()=>{if(!e||e._refCount<=0||0<--e._refCount){n=null;return}let r=e._connection,a=n;n=null,r&&(!a||r===a)&&r.unsubscribe(),c.unsubscribe()});e.subscribe(t),t.closed||(n=e.connect())})}var u3=class extends _{constructor(c,n){super(),this.source=c,this.subjectFactory=n,this._subject=null,this._refCount=0,this._connection=null,G8(c)&&(this.lift=c.lift)}_subscribe(c){return this.getSubject().subscribe(c)}getSubject(){let c=this._subject;return(!c||c.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:c}=this;this._subject=this._connection=null,c?.unsubscribe()}connect(){let c=this._connection;if(!c){c=this._connection=new J;let n=this.getSubject();c.add(this.source.subscribe(A(n,void 0,()=>{this._teardown(),n.complete()},t=>{this._teardown(),n.error(t)},()=>this._teardown()))),c.closed&&(this._connection=null,c=J.EMPTY)}return c}refCount(){return f3()(this)}};var Tt=a3(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var s1=(()=>{class e extends _{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let t=new p6(this,this);return t.operator=n,t}_throwIfClosed(){if(this.closed)throw new Tt}next(n){o3(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let t of this.currentObservers)t.next(n)}})}error(n){o3(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:t}=this;for(;t.length;)t.shift().error(n)}})}complete(){o3(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:t,isStopped:r,observers:a}=this;return t||r?_8:(this.currentObservers=null,a.push(n),new J(()=>{this.currentObservers=null,Z3(a,n)}))}_checkFinalizedStatuses(n){let{hasError:t,thrownError:r,isStopped:a}=this;t?n.error(r):a&&n.complete()}asObservable(){let n=new _;return n.source=this,n}}return e.create=(c,n)=>new p6(c,n),e})(),p6=class extends s1{constructor(c,n){super(),this.destination=c,this.source=n}next(c){var n,t;(t=(n=this.destination)===null||n===void 0?void 0:n.next)===null||t===void 0||t.call(n,c)}error(c){var n,t;(t=(n=this.destination)===null||n===void 0?void 0:n.error)===null||t===void 0||t.call(n,c)}complete(){var c,n;(n=(c=this.destination)===null||c===void 0?void 0:c.complete)===null||n===void 0||n.call(c)}_subscribe(c){var n,t;return(t=(n=this.source)===null||n===void 0?void 0:n.subscribe(c))!==null&&t!==void 0?t:_8}};var n1=class extends s1{constructor(c){super(),this._value=c}get value(){return this.getValue()}_subscribe(c){let n=super._subscribe(c);return!n.closed&&c.next(this._value),n}getValue(){let{hasError:c,thrownError:n,_value:t}=this;if(c)throw n;return this._throwIfClosed(),t}next(c){super.next(this._value=c)}};var v1=new _(e=>e.complete());function kt(e){return e&&b(e.schedule)}function Rt(e){return e[e.length-1]}function Pt(e){return b(Rt(e))?e.pop():void 0}function m2(e){return kt(Rt(e))?e.pop():void 0}function _t(e,c,n,t){function r(a){return a instanceof n?a:new n(function(i){i(a)})}return new(n||(n=Promise))(function(a,i){function o(f){try{l(t.next(f))}catch(u){i(u)}}function s(f){try{l(t.throw(f))}catch(u){i(u)}}function l(f){f.done?a(f.value):r(f.value).then(o,s)}l((t=t.apply(e,c||[])).next())})}function Ft(e){var c=typeof Symbol=="function"&&Symbol.iterator,n=c&&e[c],t=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}};throw new TypeError(c?"Object is not iterable.":"Symbol.iterator is not defined.")}function F2(e){return this instanceof F2?(this.v=e,this):new F2(e)}function Ot(e,c,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n.apply(e,c||[]),r,a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(d){t[d]&&(r[d]=function(h){return new Promise(function(z,y){a.push([d,h,z,y])>1||o(d,h)})})}function o(d,h){try{s(t[d](h))}catch(z){u(a[0][3],z)}}function s(d){d.value instanceof F2?Promise.resolve(d.value.v).then(l,f):u(a[0][2],d)}function l(d){o("next",d)}function f(d){o("throw",d)}function u(d,h){d(h),a.shift(),a.length&&o(a[0][0],a[0][1])}}function Bt(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var c=e[Symbol.asyncIterator],n;return c?c.call(e):(e=typeof Ft=="function"?Ft(e):e[Symbol.iterator](),n={},t("next"),t("throw"),t("return"),n[Symbol.asyncIterator]=function(){return this},n);function t(a){n[a]=e[a]&&function(i){return new Promise(function(o,s){i=e[a](i),r(o,s,i.done,i.value)})}}function r(a,i,o,s){Promise.resolve(s).then(function(l){a({value:l,done:o})},i)}}var v6=e=>e&&typeof e.length=="number"&&typeof e!="function";function g6(e){return b(e?.then)}function C6(e){return b(e[l3])}function z6(e){return Symbol.asyncIterator&&b(e?.[Symbol.asyncIterator])}function M6(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function wg(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var H6=wg();function V6(e){return b(e?.[H6])}function L6(e){return Ot(this,arguments,function*(){let n=e.getReader();try{for(;;){let{value:t,done:r}=yield F2(n.read());if(r)return yield F2(void 0);yield yield F2(t)}}finally{n.releaseLock()}})}function y6(e){return b(e?.getReader)}function c1(e){if(e instanceof _)return e;if(e!=null){if(C6(e))return Sg(e);if(v6(e))return Ng(e);if(g6(e))return Dg(e);if(z6(e))return jt(e);if(V6(e))return Ag(e);if(y6(e))return Ig(e)}throw M6(e)}function Sg(e){return new _(c=>{let n=e[l3]();if(b(n.subscribe))return n.subscribe(c);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Ng(e){return new _(c=>{for(let n=0;n<e.length&&!c.closed;n++)c.next(e[n]);c.complete()})}function Dg(e){return new _(c=>{e.then(n=>{c.closed||(c.next(n),c.complete())},n=>c.error(n)).then(null,h6)})}function Ag(e){return new _(c=>{for(let n of e)if(c.next(n),c.closed)return;c.complete()})}function jt(e){return new _(c=>{Eg(e,c).catch(n=>c.error(n))})}function Ig(e){return jt(L6(e))}function Eg(e,c){var n,t,r,a;return _t(this,void 0,void 0,function*(){try{for(n=Bt(e);t=yield n.next(),!t.done;){let i=t.value;if(c.next(i),c.closed)return}}catch(i){r={error:i}}finally{try{t&&!t.done&&(a=n.return)&&(yield a.call(n))}finally{if(r)throw r.error}}c.complete()})}function d1(e,c,n,t=0,r=!1){let a=c.schedule(function(){n(),r?e.add(this.schedule(null,t)):this.unsubscribe()},t);if(e.add(a),!r)return a}function b6(e,c=0){return D((n,t)=>{n.subscribe(A(t,r=>d1(t,e,()=>t.next(r),c),()=>d1(t,e,()=>t.complete(),c),r=>d1(t,e,()=>t.error(r),c)))})}function x6(e,c=0){return D((n,t)=>{t.add(e.schedule(()=>n.subscribe(t),c))})}function Ut(e,c){return c1(e).pipe(x6(c),b6(c))}function qt(e,c){return c1(e).pipe(x6(c),b6(c))}function $t(e,c){return new _(n=>{let t=0;return c.schedule(function(){t===e.length?n.complete():(n.next(e[t++]),n.closed||this.schedule())})})}function Gt(e,c){return new _(n=>{let t;return d1(n,c,()=>{t=e[H6](),d1(n,c,()=>{let r,a;try{({value:r,done:a}=t.next())}catch(i){n.error(i);return}a?n.complete():n.next(r)},0,!0)}),()=>b(t?.return)&&t.return()})}function w6(e,c){if(!e)throw new Error("Iterable cannot be null");return new _(n=>{d1(n,c,()=>{let t=e[Symbol.asyncIterator]();d1(n,c,()=>{t.next().then(r=>{r.done?n.complete():n.next(r.value)})},0,!0)})})}function Wt(e,c){return w6(L6(e),c)}function Zt(e,c){if(e!=null){if(C6(e))return Ut(e,c);if(v6(e))return $t(e,c);if(g6(e))return qt(e,c);if(z6(e))return w6(e,c);if(V6(e))return Gt(e,c);if(y6(e))return Wt(e,c)}throw M6(e)}function W(e,c){return c?Zt(e,c):c1(e)}function V(...e){let c=m2(e);return W(e,c)}function d3(e,c){let n=b(e)?e:()=>e,t=r=>r.error(n());return new _(c?r=>c.schedule(t,0,r):t)}function Z8(e){return!!e&&(e instanceof _||b(e.lift)&&b(e.subscribe))}var K1=a3(e=>function(){e(this),this.name="EmptyError",this.message="no elements in sequence"});function I(e,c){return D((n,t)=>{let r=0;n.subscribe(A(t,a=>{t.next(e.call(c,a,r++))}))})}var{isArray:Tg}=Array;function kg(e,c){return Tg(c)?e(...c):e(c)}function Yt(e){return I(c=>kg(e,c))}var{isArray:Rg}=Array,{getPrototypeOf:Pg,prototype:Fg,keys:_g}=Object;function Qt(e){if(e.length===1){let c=e[0];if(Rg(c))return{args:c,keys:null};if(Og(c)){let n=_g(c);return{args:n.map(t=>c[t]),keys:n}}}return{args:e,keys:null}}function Og(e){return e&&typeof e=="object"&&Pg(e)===Fg}function Kt(e,c){return e.reduce((n,t,r)=>(n[t]=c[r],n),{})}function Q3(...e){let c=m2(e),n=Pt(e),{args:t,keys:r}=Qt(e);if(t.length===0)return W([],c);let a=new _(Bg(t,c,r?i=>Kt(r,i):p1));return n?a.pipe(Yt(n)):a}function Bg(e,c,n=p1){return t=>{Xt(c,()=>{let{length:r}=e,a=new Array(r),i=r,o=r;for(let s=0;s<r;s++)Xt(c,()=>{let l=W(e[s],c),f=!1;l.subscribe(A(t,u=>{a[s]=u,f||(f=!0,o--),o||t.next(n(a.slice()))},()=>{--i||t.complete()}))},t)},t)}}function Xt(e,c,n){e?d1(n,e,c):c()}function Jt(e,c,n,t,r,a,i,o){let s=[],l=0,f=0,u=!1,d=()=>{u&&!s.length&&!l&&c.complete()},h=y=>l<t?z(y):s.push(y),z=y=>{a&&c.next(y),l++;let F=!1;c1(n(y,f++)).subscribe(A(c,N=>{r?.(N),a?h(N):c.next(N)},()=>{F=!0},void 0,()=>{if(F)try{for(l--;s.length&&l<t;){let N=s.shift();i?d1(c,i,()=>z(N)):z(N)}d()}catch(N){c.error(N)}}))};return e.subscribe(A(c,h,()=>{u=!0,d()})),()=>{o?.()}}function K(e,c,n=1/0){return b(c)?K((t,r)=>I((a,i)=>c(t,a,r,i))(c1(e(t,r))),n):(typeof c=="number"&&(n=c),D((t,r)=>Jt(t,r,e,n)))}function h3(e=1/0){return K(p1,e)}function e9(){return h3(1)}function m3(...e){return e9()(W(e,m2(e)))}function S6(e){return new _(c=>{c1(e()).subscribe(c)})}function y1(e,c){return D((n,t)=>{let r=0;n.subscribe(A(t,a=>e.call(c,a,r++)&&t.next(a)))})}function p2(e){return D((c,n)=>{let t=null,r=!1,a;t=c.subscribe(A(n,void 0,void 0,i=>{a=c1(e(i,p2(e)(c))),t?(t.unsubscribe(),t=null,a.subscribe(n)):r=!0})),r&&(t.unsubscribe(),t=null,a.subscribe(n))})}function c9(e,c,n,t,r){return(a,i)=>{let o=n,s=c,l=0;a.subscribe(A(i,f=>{let u=l++;s=o?e(s,f,u):(o=!0,f),t&&i.next(s)},r&&(()=>{o&&i.next(s),i.complete()})))}}function _2(e,c){return b(c)?K(e,c,1):K(e,1)}function v2(e){return D((c,n)=>{let t=!1;c.subscribe(A(n,r=>{t=!0,n.next(r)},()=>{t||n.next(e),n.complete()}))})}function X1(e){return e<=0?()=>v1:D((c,n)=>{let t=0;c.subscribe(A(n,r=>{++t<=e&&(n.next(r),e<=t&&n.complete())}))})}function Y8(e){return I(()=>e)}function N6(e=jg){return D((c,n)=>{let t=!1;c.subscribe(A(n,r=>{t=!0,n.next(r)},()=>t?n.complete():n.error(e())))})}function jg(){return new K1}function K3(e){return D((c,n)=>{try{c.subscribe(n)}finally{n.add(e)}})}function _1(e,c){let n=arguments.length>=2;return t=>t.pipe(e?y1((r,a)=>e(r,a,t)):p1,X1(1),n?v2(c):N6(()=>new K1))}function p3(e){return e<=0?()=>v1:D((c,n)=>{let t=[];c.subscribe(A(n,r=>{t.push(r),e<t.length&&t.shift()},()=>{for(let r of t)n.next(r);n.complete()},void 0,()=>{t=null}))})}function Q8(e,c){let n=arguments.length>=2;return t=>t.pipe(e?y1((r,a)=>e(r,a,t)):p1,p3(1),n?v2(c):N6(()=>new K1))}function K8(e,c){return D(c9(e,c,arguments.length>=2,!0))}function X8(...e){let c=m2(e);return D((n,t)=>{(c?m3(e,n,c):m3(e,n)).subscribe(t)})}function b1(e,c){return D((n,t)=>{let r=null,a=0,i=!1,o=()=>i&&!r&&t.complete();n.subscribe(A(t,s=>{r?.unsubscribe();let l=0,f=a++;c1(e(s,f)).subscribe(r=A(t,u=>t.next(c?c(s,u,f,l++):u),()=>{r=null,o()}))},()=>{i=!0,o()}))})}function J8(e){return D((c,n)=>{c1(e).subscribe(A(n,()=>n.complete(),Y3)),!n.closed&&c.subscribe(n)})}function r1(e,c,n){let t=b(e)||c||n?{next:e,error:c,complete:n}:e;return t?D((r,a)=>{var i;(i=t.subscribe)===null||i===void 0||i.call(t);let o=!0;r.subscribe(A(a,s=>{var l;(l=t.next)===null||l===void 0||l.call(t,s),a.next(s)},()=>{var s;o=!1,(s=t.complete)===null||s===void 0||s.call(t),a.complete()},s=>{var l;o=!1,(l=t.error)===null||l===void 0||l.call(t,s),a.error(s)},()=>{var s,l;o&&((s=t.unsubscribe)===null||s===void 0||s.call(t)),(l=t.finalize)===null||l===void 0||l.call(t)}))}):p1}var B9="https://g.co/ng/security#xss",M=class extends Error{constructor(c,n){super(Q5(c,n)),this.code=c}};function Q5(e,c){return`${`NG0${Math.abs(e)}`}${c?": "+c:""}`}function d4(e){return{toString:e}.toString()}var D6="__parameters__";function Ug(e){return function(...n){if(e){let t=e(...n);for(let r in t)this[r]=t[r]}}}function j9(e,c,n){return d4(()=>{let t=Ug(c);function r(...a){if(this instanceof r)return t.apply(this,a),this;let i=new r(...a);return o.annotation=i,o;function o(s,l,f){let u=s.hasOwnProperty(D6)?s[D6]:Object.defineProperty(s,D6,{value:[]})[D6];for(;u.length<=f;)u.push(null);return(u[f]=u[f]||[]).push(i),s}}return n&&(r.prototype=Object.create(n.prototype)),r.prototype.ngMetadataName=e,r.annotationCls=r,r})}var a1=globalThis;function O(e){for(let c in e)if(e[c]===O)return c;throw Error("Could not find renamed property on target object.")}function h1(e){if(typeof e=="string")return e;if(Array.isArray(e))return"["+e.map(h1).join(", ")+"]";if(e==null)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;let c=e.toString();if(c==null)return""+c;let n=c.indexOf(`
`);return n===-1?c:c.substring(0,n)}function t9(e,c){return e==null||e===""?c===null?"":c:c==null||c===""?e:e+" "+c}var qg=O({__forward_ref__:O});function U9(e){return e.__forward_ref__=U9,e.toString=function(){return h1(this())},e}function w1(e){return q9(e)?e():e}function q9(e){return typeof e=="function"&&e.hasOwnProperty(qg)&&e.__forward_ref__===U9}function C(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function g1(e){return{providers:e.providers||[],imports:e.imports||[]}}function r0(e){return n9(e,G9)||n9(e,W9)}function $9(e){return r0(e)!==null}function n9(e,c){return e.hasOwnProperty(c)?e[c]:null}function $g(e){let c=e&&(e[G9]||e[W9]);return c||null}function r9(e){return e&&(e.hasOwnProperty(a9)||e.hasOwnProperty(Gg))?e[a9]:null}var G9=O({\u0275prov:O}),a9=O({\u0275inj:O}),W9=O({ngInjectableDef:O}),Gg=O({ngInjectorDef:O}),x=class{constructor(c,n){this._desc=c,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof n=="number"?this.__NG_ELEMENT_ID__=n:n!==void 0&&(this.\u0275prov=C({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Z9(e){return e&&!!e.\u0275providers}var Wg=O({\u0275cmp:O}),Zg=O({\u0275dir:O}),Yg=O({\u0275pipe:O}),Qg=O({\u0275mod:O}),O6=O({\u0275fac:O}),X3=O({__NG_ELEMENT_ID__:O}),i9=O({__NG_ENV_ID__:O});function K5(e){return typeof e=="string"?e:e==null?"":String(e)}function Kg(e){return typeof e=="function"?e.name||e.toString():typeof e=="object"&&e!=null&&typeof e.type=="function"?e.type.name||e.type.toString():K5(e)}function Xg(e,c){let n=c?`. Dependency path: ${c.join(" > ")} > ${e}`:"";throw new M(-200,e)}function X5(e,c){throw new M(-201,!1)}var S=function(e){return e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional",e}(S||{}),l5;function Y9(){return l5}function x1(e){let c=l5;return l5=e,c}function Q9(e,c,n){let t=r0(e);if(t&&t.providedIn=="root")return t.value===void 0?t.value=t.factory():t.value;if(n&S.Optional)return null;if(c!==void 0)return c;X5(e,"Injector")}var Jg={},e4=Jg,f5="__NG_DI_FLAG__",B6="ngTempTokenPath",eC="ngTokenPath",cC=/\n/gm,tC="\u0275",o9="__source",M3;function nC(){return M3}function g2(e){let c=M3;return M3=e,c}function rC(e,c=S.Default){if(M3===void 0)throw new M(-203,!1);return M3===null?Q9(e,void 0,c):M3.get(e,c&S.Optional?null:void 0,c)}function H(e,c=S.Default){return(Y9()||rC)(w1(e),c)}function m(e,c=S.Default){return H(e,a0(c))}function a0(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function u5(e){let c=[];for(let n=0;n<e.length;n++){let t=w1(e[n]);if(Array.isArray(t)){if(t.length===0)throw new M(900,!1);let r,a=S.Default;for(let i=0;i<t.length;i++){let o=t[i],s=aC(o);typeof s=="number"?s===-1?r=o.token:a|=s:r=o}c.push(H(r,a))}else c.push(H(t))}return c}function K9(e,c){return e[f5]=c,e.prototype[f5]=c,e}function aC(e){return e[f5]}function iC(e,c,n,t){let r=e[B6];throw c[o9]&&r.unshift(c[o9]),e.message=oC(`
`+e.message,r,n,t),e[eC]=r,e[B6]=null,e}function oC(e,c,n,t=null){e=e&&e.charAt(0)===`
`&&e.charAt(1)==tC?e.slice(2):e;let r=h1(c);if(Array.isArray(c))r=c.map(h1).join(" -> ");else if(typeof c=="object"){let a=[];for(let i in c)if(c.hasOwnProperty(i)){let o=c[i];a.push(i+":"+(typeof o=="string"?JSON.stringify(o):h1(o)))}r=`{${a.join(", ")}}`}return`${n}${t?"("+t+")":""}[${r}]: ${e.replace(cC,`
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tt1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var lv=function(){},ot={},Tv={},kv=null,Rv={mark:lv,measure:lv};try{typeof window<"u"&&(ot=window),typeof document<"u"&&(Tv=document),typeof MutationObserver<"u"&&(kv=MutationObserver),typeof performance<"u"&&(Rv=performance)}catch{}var nt1=ot.navigator||{},fv=nt1.userAgent,uv=fv===void 0?"":fv,I2=ot,q=Tv,dv=kv,p8=Rv,Ul1=!!I2.document,h2=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",Pv=~uv.indexOf("MSIE")||~uv.indexOf("Trident/"),v8,g8,C8,z8,M8,f2="___FONT_AWESOME___",Qc=16,Fv="fa",_v="svg-inline--fa",n3="data-fa-i2svg",Kc="data-fa-pseudo-element",rt1="data-fa-pseudo-element-pending",st="data-prefix",lt="data-icon",hv="fontawesome-i2svg",at1="async",it1=["HTML","HEAD","STYLE","SCRIPT"],Ov=function(){try{return!0}catch{return!1}}(),U="classic",G="sharp",ft=[U,G];function s6(e){return new Proxy(e,{get:function(n,t){return t in n?n[t]:n[U]}})}var t6=s6((v8={},e1(v8,U,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),e1(v8,G,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),v8)),n6=s6((g8={},e1(g8,U,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),e1(g8,G,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),g8)),r6=s6((C8={},e1(C8,U,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),e1(C8,G,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),C8)),ot1=s6((z8={},e1(z8,U,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),e1(z8,G,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),z8)),st1=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Bv="fa-layers-text",lt1=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ft1=s6((M8={},e1(M8,U,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),e1(M8,G,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),M8)),jv=[1,2,3,4,5,6,7,8,9,10],ut1=jv.concat([11,12,13,14,15,16,17,18,19,20]),dt1=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],c3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},a6=new Set;Object.keys(n6[U]).map(a6.add.bind(a6));Object.keys(n6[G]).map(a6.add.bind(a6));var ht1=[].concat(ft,o6(a6),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",c3.GROUP,c3.SWAP_OPACITY,c3.PRIMARY,c3.SECONDARY]).concat(jv.map(function(e){return"".concat(e,"x")})).concat(ut1.map(function(e){return"w-".concat(e)})),e6=I2.FontAwesomeConfig||{};function mt1(e){var c=q.querySelector("script["+e+"]");if(c)return c.getAttribute(e)}function pt1(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}q&&typeof q.querySelector=="function"&&(mv=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],mv.forEach(function(e){var c=it(e,2),n=c[0],t=c[1],r=pt1(mt1(n));r!=null&&(e6[t]=r)}));var mv,Uv={styleDefault:"solid",familyDefault:"classic",cssPrefix:Fv,replacementClass:_v,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};e6.familyPrefix&&(e6.cssPrefix=e6.familyPrefix);var G3=p(p({},Uv),e6);G3.autoReplaceSvg||(G3.observeMutations=!1);var v={};Object.keys(Uv).forEach(function(e){Object.defineProperty(v,e,{enumerable:!0,set:function(n){G3[e]=n,c6.forEach(function(t){return t(v)})},get:function(){return G3[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(c){G3.cssPrefix=c,c6.forEach(function(n){return n(v)})},get:function(){return G3.cssPrefix}});I2.FontAwesomeConfig=v;var c6=[];function vt1(e){return c6.push(e),function(){c6.splice(c6.indexOf(e),1)}}var A2=Qc,Q1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gt1(e){if(!(!e||!h2)){var c=q.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=e;for(var n=q.head.childNodes,t=null,r=n.length-1;r>-1;r--){var a=n[r],i=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(t=a)}return q.head.insertBefore(c,t),e}}var Ct1="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function i6(){for(var e=12,c="";e-- >0;)c+=Ct1[Math.random()*62|0];return c}function W3(e){for(var c=[],n=(e||[]).length>>>0;n--;)c[n]=e[n];return c}function ut(e){return e.classList?W3(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(c){return c})}function qv(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zt1(e){return Object.keys(e||{}).reduce(function(c,n){return c+"".concat(n,'="').concat(qv(e[n]),'" ')},"").trim()}function N8(e){return Object.keys(e||{}).reduce(function(c,n){return c+"".concat(n,": ").concat(e[n].trim(),";")},"")}function dt(e){return e.size!==Q1.size||e.x!==Q1.x||e.y!==Q1.y||e.rotate!==Q1.rotate||e.flipX||e.flipY}function Mt1(e){var c=e.transform,n=e.containerWidth,t=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(c.x*32,", ").concat(c.y*32,") "),i="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),o="rotate(".concat(c.rotate," 0 0)"),s={transform:"".concat(a," ").concat(i," ").concat(o)},l={transform:"translate(".concat(t/2*-1," -256)")};return{outer:r,inner:s,path:l}}function Ht1(e){var c=e.transform,n=e.width,t=n===void 0?Qc:n,r=e.height,a=r===void 0?Qc:r,i=e.startCentered,o=i===void 0?!1:i,s="";return o&&Pv?s+="translate(".concat(c.x/A2-t/2,"em, ").concat(c.y/A2-a/2,"em) "):o?s+="translate(calc(-50% + ".concat(c.x/A2,"em), calc(-50% + ").concat(c.y/A2,"em)) "):s+="translate(".concat(c.x/A2,"em, ").concat(c.y/A2,"em) "),s+="scale(".concat(c.size/A2*(c.flipX?-1:1),", ").concat(c.size/A2*(c.flipY?-1:1),") "),s+="rotate(".concat(c.rotate,"deg) "),s}var Vt1=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $v(){var e=Fv,c=_v,n=v.cssPrefix,t=v.replacementClass,r=Vt1;if(n!==e||t!==c){var a=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(c),"g");r=r.replace(a,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(o,".".concat(t))}return r}var pv=!1;function $c(){v.autoAddCss&&!pv&&(gt1($v()),pv=!0)}var Lt1={mixout:function(){return{dom:{css:$v,insertCss:$c}}},hooks:function(){return{beforeDOMElementCreation:function(){$c()},beforeI2svg:function(){$c()}}}},u2=I2||{};u2[f2]||(u2[f2]={});u2[f2].styles||(u2[f2].styles={});u2[f2].hooks||(u2[f2].hooks={});u2[f2].shims||(u2[f2].shims=[]);var P1=u2[f2],Gv=[],yt1=function e(){q.removeEventListener("DOMContentLoaded",e),w8=1,Gv.map(function(c){return c()})},w8=!1;h2&&(w8=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),w8||q.addEventListener("DOMContentLoaded",yt1));function bt1(e){h2&&(w8?setTimeout(e,0):Gv.push(e))}function l6(e){var c=e.tag,n=e.attributes,t=n===void 0?{}:n,r=e.children,a=r===void 0?[]:r;return typeof e=="string"?qv(e):"<".concat(c," ").concat(zt1(t),">").concat(a.map(l6).join(""),"</").concat(c,">")}function vv(e,c,n){if(e&&e[c]&&e[c][n])return{prefix:c,iconName:n,icon:e[c][n]}}var xt1=function(c,n){return function(t,r,a,i){return c.call(n,t,r,a,i)}},Gc=function(c,n,t,r){var a=Object.keys(c),i=a.length,o=r!==void 0?xt1(n,r):n,s,l,f;for(t===void 0?(s=1,f=c[a[0]]):(s=0,f=t);s<i;s++)l=a[s],f=o(f,c[l],l,c);return f};function wt1(e){for(var c=[],n=0,t=e.length;n<t;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<t){var a=e.charCodeAt(n++);(a&64512)==56320?c.push(((r&1023)<<10)+(a&1023)+65536):(c.push(r),n--)}else c.push(r)}return c}function Xc(e){var c=wt1(e);return c.length===1?c[0].toString(16):null}function St1(e,c){var n=e.length,t=e.charCodeAt(c),r;return t>=55296&&t<=56319&&n>c+1&&(r=e.charCodeAt(c+1),r>=56320&&r<=57343)?(t-55296)*1024+r-56320+65536:t}function gv(e){return Object.keys(e).reduce(function(c,n){var t=e[n],r=!!t.icon;return r?c[t.iconName]=t.icon:c[n]=t,c},{})}function Jc(e,c){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=n.skipHooks,r=t===void 0?!1:t,a=gv(c);typeof P1.hooks.addPack=="function"&&!r?P1.hooks.addPack(e,gv(c)):P1.styles[e]=p(p({},P1.styles[e]||{}),a),e==="fas"&&Jc("fa",c)}var H8,V8,L8,U3=P1.styles,Nt1=P1.shims,Dt1=(H8={},e1(H8,U,Object.values(r6[U])),e1(H8,G,Object.values(r6[G])),H8),ht=null,Wv={},Zv={},Yv={},Qv={},Kv={},At1=(V8={},e1(V8,U,Object.keys(t6[U])),e1(V8,G,Object.keys(t6[G])),V8);function It1(e){return~ht1.indexOf(e)}function Et1(e,c){var n=c.split("-"),t=n[0],r=n.slice(1).join("-");return t===e&&r!==""&&!It1(r)?r:null}var Xv=function(){var c=function(a){return Gc(U3,function(i,o,s){return i[s]=Gc(o,a,{}),i},{})};Wv=c(function(r,a,i){if(a[3]&&(r[a[3]]=i),a[2]){var o=a[2].filter(function(s){return typeof s=="number"});o.forEach(function(s){r[s.toString(16)]=i})}return r}),Zv=c(function(r,a,i){if(r[i]=i,a[2]){var o=a[2].filter(function(s){return typeof s=="string"});o.forEach(function(s){r[s]=i})}return r}),Kv=c(function(r,a,i){var o=a[2];return r[i]=i,o.forEach(function(s){r[s]=i}),r});var n="far"in U3||v.autoFetchSvg,t=Gc(Nt1,function(r,a){var i=a[0],o=a[1],s=a[2];return o==="far"&&!n&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:s}),r},{names:{},unicodes:{}});Yv=t.names,Qv=t.unicodes,ht=D8(v.styleDefault,{family:v.familyDefault})};vt1(function(e){ht=D8(e.styleDefault,{family:v.familyDefault})});Xv();function mt(e,c){return(Wv[e]||{})[c]}function Tt1(e,c){return(Zv[e]||{})[c]}function t3(e,c){return(Kv[e]||{})[c]}function Jv(e){return Yv[e]||{prefix:null,iconName:null}}function kt1(e){var c=Qv[e],n=mt("fas",e);return c||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function E2(){return ht}var pt=function(){return{prefix:null,iconName:null,rest:[]}};function D8(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=c.family,t=n===void 0?U:n,r=t6[t][e],a=n6[t][e]||n6[t][r],i=e in P1.styles?e:null;return a||i||null}var Cv=(L8={},e1(L8,U,Object.keys(r6[U])),e1(L8,G,Object.keys(r6[G])),L8);function A8(e){var c,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.skipLookups,r=t===void 0?!1:t,a=(c={},e1(c,U,"".concat(v.cssPrefix,"-").concat(U)),e1(c,G,"".concat(v.cssPrefix,"-").concat(G)),c),i=null,o=U;(e.includes(a[U])||e.some(function(l){return Cv[U].includes(l)}))&&(o=U),(e.includes(a[G])||e.some(function(l){return Cv[G].includes(l)}))&&(o=G);var s=e.reduce(function(l,f){var u=Et1(v.cssPrefix,f);if(U3[f]?(f=Dt1[o].includes(f)?ot1[o][f]:f,i=f,l.prefix=f):At1[o].indexOf(f)>-1?(i=f,l.prefix=D8(f,{family:o})):u?l.iconName=u:f!==v.replacementClass&&f!==a[U]&&f!==a[G]&&l.rest.push(f),!r&&l.prefix&&l.iconName){var d=i==="fa"?Jv(l.iconName):{},h=t3(l.prefix,l.iconName);d.prefix&&(i=null),l.iconName=d.iconName||h||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!U3.far&&U3.fas&&!v.autoFetchSvg&&(l.prefix="fas")}return l},pt());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&o===G&&(U3.fass||v.autoFetchSvg)&&(s.prefix="fass",s.iconName=t3(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||i==="fa")&&(s.prefix=E2()||"fas"),s}var Rt1=function(){function e(){Yc1(this,e),this.definitions={}}return Qc1(e,[{key:"add",value:function(){for(var n=this,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){n.definitions[o]=p(p({},n.definitions[o]||{}),i[o]),Jc(o,i[o]);var s=r6[U][o];s&&Jc(s,i[o]),Xv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,t){var r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(function(a){var i=r[a],o=i.prefix,s=i.iconName,l=i.icon,f=l[2];n[o]||(n[o]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(n[o][u]=l)}),n[o][s]=l}),n}}]),e}(),zv=[],q3={},$3={},Pt1=Object.keys($3);function Ft1(e,c){var n=c.mixoutsTo;return zv=e,q3={},Object.keys($3).forEach(function(t){Pt1.indexOf(t)===-1&&delete $3[t]}),zv.forEach(function(t){var r=t.mixout?t.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(n[i]=r[i]),x8(r[i])==="object"&&Object.keys(r[i]).forEach(function(o){n[i]||(n[i]={}),n[i][o]=r[i][o]})}),t.hooks){var a=t.hooks();Object.keys(a).forEach(function(i){q3[i]||(q3[i]=[]),q3[i].push(a[i])})}t.provides&&t.provides($3)}),n}function et(e,c){for(var n=arguments.length,t=new Array(n>2?n-2:0),r=2;r<n;r++)t[r-2]=arguments[r];var a=q3[e]||[];return a.forEach(function(i){c=i.apply(null,[c].concat(t))}),c}function r3(e){for(var c=arguments.length,n=new Array(c>1?c-1:0),t=1;t<c;t++)n[t-1]=arguments[t];var r=q3[e]||[];r.forEach(function(a){a.apply(null,n)})}function d2(){var e=arguments[0],c=Array.prototype.slice.call(arguments,1);return $3[e]?$3[e].apply(null,c):void 0}function ct(e){e.prefix==="fa"&&(e.prefix="fas");var c=e.iconName,n=e.prefix||E2();if(c)return c=t3(n,c)||c,vv(eg.definitions,n,c)||vv(P1.styles,n,c)}var eg=new Rt1,_t1=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,r3("noAuto")},Ot1={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return h2?(r3("beforeI2svg",c),d2("pseudoElements2svg",c),d2("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=c.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,bt1(function(){jt1({autoReplaceSvgRoot:n}),r3("watch",c)})}},Bt1={icon:function(c){if(c===null)return null;if(x8(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:t3(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var n=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],t=D8(c[0]);return{prefix:t,iconName:t3(t,n)||n}}if(typeof c=="string"&&(c.indexOf("".concat(v.cssPrefix,"-"))>-1||c.match(st1))){var r=A8(c.split(" "),{skipLookups:!0});return{prefix:r.prefix||E2(),iconName:t3(r.prefix,r.iconName)||r.iconName}}if(typeof c=="string"){var a=E2();return{prefix:a,iconName:t3(a,c)||c}}}},L1={noAuto:_t1,config:v,dom:Ot1,parse:Bt1,library:eg,findIconDefinition:ct,toHtml:l6},jt1=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=c.autoReplaceSvgRoot,t=n===void 0?q:n;(Object.keys(P1.styles).length>0||v.autoFetchSvg)&&h2&&v.autoReplaceSvg&&L1.dom.i2svg({node:t})};function I8(e,c){return Object.defineProperty(e,"abstract",{get:c}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(t){return l6(t)})}}),Object.defineProperty(e,"node",{get:function(){if(h2){var t=q.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function Ut1(e){var c=e.children,n=e.main,t=e.mask,r=e.attributes,a=e.styles,i=e.transform;if(dt(i)&&n.found&&!t.found){var o=n.width,s=n.height,l={x:o/s/2,y:.5};r.style=N8(p(p({},a),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:c}]}function qt1(e){var c=e.prefix,n=e.iconName,t=e.children,r=e.attributes,a=e.symbol,i=a===!0?"".concat(c,"-").concat(v.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:p(p({},r),{},{id:i}),children:t}]}]}function vt(e){var c=e.icons,n=c.main,t=c.mask,r=e.prefix,a=e.iconName,i=e.transform,o=e.symbol,s=e.title,l=e.maskId,f=e.titleId,u=e.extra,d=e.watchable,h=d===void 0?!1:d,z=t.found?t:n,y=z.width,F=z.height,N=r==="fak",B=[v.replacementClass,a?"".concat(v.cssPrefix,"-").concat(a):""].filter(function(F1){return u.classes.indexOf(F1)===-1}).filter(function(F1){return F1!==""||!!F1}).concat(u.classes).join(" "),R={children:[],attributes:p(p({},u.attributes),{},{"data-prefix":r,"data-icon":a,class:B,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(F)})},Z=N&&!~u.classes.indexOf("fa-fw")?{width:"".concat(y/F*16*.0625,"em")}:{};h&&(R.attributes[n3]=""),s&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(f||i6())},children:[s]}),delete R.attributes.title);var Y=p(p({},R),{},{prefix:r,iconName:a,main:n,mask:t,maskId:l,transform:i,symbol:o,styles:p(p({},Z),u.styles)}),X=t.found&&n.found?d2("generateAbstractMask",Y)||{children:[],attributes:{}}:d2("generateAbstractIcon",Y)||{children:[],attributes:{}},u1=X.children,k2=X.attributes;return Y.children=u1,Y.attributes=k2,o?qt1(Y):Ut1(Y)}function Mv(e){var c=e.content,n=e.width,t=e.height,r=e.transform,a=e.title,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=p(p(p({},i.attributes),a?{title:a}:{}),{},{class:i.classes.join(" ")});s&&(l[n3]="");var f=p({},i.styles);dt(r)&&(f.transform=Ht1({transform:r,startCentered:!0,width:n,height:t}),f["-webkit-transform"]=f.transform);var u=N8(f);u.length>0&&(l.style=u);var d=[];return d.push({tag:"span",attributes:l,children:[c]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}function $t1(e){var c=e.content,n=e.title,t=e.extra,r=p(p(p({},t.attributes),n?{title:n}:{}),{},{class:t.classes.join(" ")}),a=N8(t.styles);a.length>0&&(r.style=a);var i=[];return i.push({tag:"span",attributes:r,children:[c]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var Wc=P1.styles;function tt(e){var c=e[0],n=e[1],t=e.slice(4),r=it(t,1),a=r[0],i=null;return Array.isArray(a)?i={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(c3.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(c3.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(c3.PRIMARY),fill:"currentColor",d:a[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:c,height:n,icon:i}}var Gt1={found:!1,width:512,height:512};function Wt1(e,c){!Ov&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(c,'" is missing.'))}function nt(e,c){var n=c;return c==="fa"&&v.styleDefault!==null&&(c=E2()),new Promise(function(t,r){var a={found:!1,width:512,height:512,icon:d2("missingIconAbstract")||{}};if(n==="fa"){var i=Jv(e)||{};e=i.iconName||e,c=i.prefix||c}if(e&&c&&Wc[c]&&Wc[c][e]){var o=Wc[c][e];return t(tt(o))}Wt1(e,c),t(p(p({},Gt1),{},{icon:v.showMissingIcons&&e?d2("missingIconAbstract")||{}:{}}))})}var Hv=function(){},rt=v.measurePerformance&&p8&&p8.mark&&p8.measure?p8:{mark:Hv,measure:Hv},J4='FA "6.5.2"',Zt1=function(c){return rt.mark("".concat(J4," ").concat(c," begins")),function(){return cg(c)}},cg=function(c){rt.mark("".concat(J4," ").concat(c," ends")),rt.measure("".concat(J4," ").concat(c),"".concat(J4," ").concat(c," begins"),"".concat(J4," ").concat(c," ends"))},gt={begin:Zt1,end:cg},y8=function(){};function Vv(e){var c=e.getAttribute?e.getAttribute(n3):null;return typeof c=="string"}function Yt1(e){var c=e.getAttribute?e.getAttribute(st):null,n=e.getAttribute?e.getAttribute(lt):null;return c&&n}function Qt1(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function Kt1(){if(v.autoReplaceSvg===!0)return b8.replace;var e=b8[v.autoReplaceSvg];return e||b8.replace}function Xt1(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function Jt1(e){return q.createElement(e)}function tg(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=c.ceFn,t=n===void 0?e.tag==="svg"?Xt1:Jt1:n;if(typeof e=="string")return q.createTextNode(e);var r=t(e.tag);Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])});var a=e.children||[];return a.forEach(function(i){r.appendChild(tg(i,{ceFn:t}))}),r}function e91(e){var c=" ".concat(e.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var b8={replace:function(c){var n=c[0];if(n.parentNode)if(c[1].forEach(function(r){n.parentNode.insertBefore(tg(r),n)}),n.getAttribute(n3)===null&&v.keepOriginalSource){var t=q.createComment(e91(n));n.parentNode.replaceChild(t,n)}else n.remove()},nest:function(c){var n=c[0],t=c[1];if(~ut(n).indexOf(v.replacementClass))return b8.replace(c);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){var a=t[0].attributes.class.split(" ").reduce(function(o,s){return s===v.replacementClass||s.match(r)?o.toSvg.push(s):o.toNode.push(s),o},{toNode:[],toSvg:[]});t[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var i=t.map(function(o){return l6(o)}).join(`
`);n.setAttribute(n3,""),n.innerHTML=i}};function Lv(e){e()}function ng(e,c){var n=typeof c=="function"?c:y8;if(e.length===0)n();else{var t=Lv;v.mutateApproach===at1&&(t=I2.requestAnimationFrame||Lv),t(function(){var r=Kt1(),a=gt.begin("mutate");e.map(r),a(),n()})}}var Ct=!1;function rg(){Ct=!0}function at(){Ct=!1}var S8=null;function yv(e){if(dv&&v.observeMutations){var c=e.treeCallback,n=c===void 0?y8:c,t=e.nodeCallback,r=t===void 0?y8:t,a=e.pseudoElementsCallback,i=a===void 0?y8:a,o=e.observeMutationsRoot,s=o===void 0?q:o;S8=new dv(function(l){if(!Ct){var f=E2();W3(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Vv(u.addedNodes[0])&&(v.searchPseudoElements&&i(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&v.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&Vv(u.target)&&~dt1.indexOf(u.attributeName))if(u.attributeName==="class"&&Yt1(u.target)){var d=A8(ut(u.target)),h=d.prefix,z=d.iconName;u.target.setAttribute(st,h||f),z&&u.target.setAttribute(lt,z)}else Qt1(u.target)&&r(u.target)})}}),h2&&S8.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function c91(){S8&&S8.disconnect()}function t91(e){var c=e.getAttribute("style"),n=[];return c&&(n=c.split(";").reduce(function(t,r){var a=r.split(":"),i=a[0],o=a.slice(1);return i&&o.length>0&&(t[i]=o.join(":").trim()),t},{})),n}function n91(e){var c=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),t=e.innerText!==void 0?e.innerText.trim():"",r=A8(ut(e));return r.prefix||(r.prefix=E2()),c&&n&&(r.prefix=c,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&t.length>0&&(r.iconName=Tt1(r.prefix,e.innerText)||mt(r.prefix,Xc(e.innerText))),!r.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function r91(e){var c=W3(e.attributes).reduce(function(r,a){return r.name!=="class"&&r.name!=="style"&&(r[a.name]=a.value),r},{}),n=e.getAttribute("title"),t=e.getAttribute("data-fa-title-id");return v.autoA11y&&(n?c["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(t||i6()):(c["aria-hidden"]="true",c.focusable="false")),c}function a91(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Q1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bv(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=n91(e),t=n.iconName,r=n.prefix,a=n.rest,i=r91(e),o=et("parseNodeAttributes",{},e),s=c.styleParser?t91(e):[];return p({iconName:t,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Q1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:i}},o)}var i91=P1.styles;function ag(e){var c=v.autoReplaceSvg==="nest"?bv(e,{styleParser:!1}):bv(e);return~c.extra.classes.indexOf(Bv)?d2("generateLayersText",e,c):d2("generateSvgReplacementMutation",e,c)}var T2=new Set;ft.map(function(e){T2.add("fa-".concat(e))});Object.keys(t6[U]).map(T2.add.bind(T2));Object.keys(t6[G]).map(T2.add.bind(T2));T2=o6(T2);function xv(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!h2)return Promise.resolve();var n=q.documentElement.classList,t=function(u){return n.add("".concat(hv,"-").concat(u))},r=function(u){return n.remove("".concat(hv,"-").concat(u))},a=v.autoFetchSvg?T2:ft.map(function(f){return"fa-".concat(f)}).concat(Object.keys(i91));a.includes("fa")||a.push("fa");var i=[".".concat(Bv,":not([").concat(n3,"])")].concat(a.map(function(f){return".".concat(f,":not([").concat(n3,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=W3(e.querySelectorAll(i))}catch{}if(o.length>0)t("pending"),r("complete");else return Promise.resolve();var s=gt.begin("onTree"),l=o.reduce(function(f,u){try{var d=ag(u);d&&f.push(d)}catch(h){Ov||h.name==="MissingIcon"&&console.error(h)}return f},[]);return new Promise(function(f,u){Promise.all(l).then(function(d){ng(d,function(){t("active"),t("complete"),r("pending"),typeof c=="function"&&c(),s(),f()})}).catch(function(d){s(),u(d)})})}function o91(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ag(e).then(function(n){n&&ng([n],c)})}function s91(e){return function(c){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=(c||{}).icon?c:ct(c||{}),r=n.mask;return r&&(r=(r||{}).icon?r:ct(r||{})),e(t,p(p({},n),{},{mask:r}))}}var l91=function(c){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.transform,r=t===void 0?Q1:t,a=n.symbol,i=a===void 0?!1:a,o=n.mask,s=o===void 0?null:o,l=n.maskId,f=l===void 0?null:l,u=n.title,d=u===void 0?null:u,h=n.titleId,z=h===void 0?null:h,y=n.classes,F=y===void 0?[]:y,N=n.attributes,B=N===void 0?{}:N,R=n.styles,Z=R===void 0?{}:R;if(c){var Y=c.prefix,X=c.iconName,u1=c.icon;return I8(p({type:"icon"},c),function(){return r3("beforeDOMElementCreation",{iconDefinition:c,params:n}),v.autoA11y&&(d?B["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(z||i6()):(B["aria-hidden"]="true",B.focusable="false")),vt({icons:{main:tt(u1),mask:s?tt(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:X,transform:p(p({},Q1),r),symbol:i,title:d,maskId:f,titleId:z,extra:{attributes:B,styles:Z,classes:F}})})}},f91={mixout:function(){return{icon:s91(l91)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=xv,n.nodeCallback=o91,n}}},provides:function(c){c.i2svg=function(n){var t=n.node,r=t===void 0?q:t,a=n.callback,i=a===void 0?function(){}:a;return xv(r,i)},c.generateSvgReplacementMutation=function(n,t){var r=t.iconName,a=t.title,i=t.titleId,o=t.prefix,s=t.transform,l=t.symbol,f=t.mask,u=t.maskId,d=t.extra;return new Promise(function(h,z){Promise.all([nt(r,o),f.iconName?nt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var F=it(y,2),N=F[0],B=F[1];h([n,vt({icons:{main:N,mask:B},prefix:o,iconName:r,transform:s,symbol:l,maskId:u,title:a,titleId:i,extra:d,watchable:!0})])}).catch(z)})},c.generateAbstractIcon=function(n){var t=n.children,r=n.attributes,a=n.main,i=n.transform,o=n.styles,s=N8(o);s.length>0&&(r.style=s);var l;return dt(i)&&(l=d2("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),t.push(l||a.icon),{children:t,attributes:r}}}},u91={mixout:function(){return{layer:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.classes,a=r===void 0?[]:r;return I8({type:"layer"},function(){r3("beforeDOMElementCreation",{assembler:n,params:t});var i=[];return n(function(o){Array.isArray(o)?o.map(function(s){i=i.concat(s.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(o6(a)).join(" ")},children:i}]})}}}},d91={mixout:function(){return{counter:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.title,a=r===void 0?null:r,i=t.classes,o=i===void 0?[]:i,s=t.attributes,l=s===void 0?{}:s,f=t.styles,u=f===void 0?{}:f;return I8({type:"counter",content:n},function(){return r3("beforeDOMElementCreation",{content:n,params:t}),$t1({content:n.toString(),title:a,extra:{attributes:l,styles:u,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(o6(o))}})})}}}},h91={mixout:function(){return{text:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.transform,a=r===void 0?Q1:r,i=t.title,o=i===void 0?null:i,s=t.classes,l=s===void 0?[]:s,f=t.attributes,u=f===void 0?{}:f,d=t.styles,h=d===void 0?{}:d;return I8({type:"text",content:n},function(){return r3("beforeDOMElementCreation",{content:n,params:t}),Mv({content:n,transform:p(p({},Q1),a),title:o,extra:{attributes:u,styles:h,classes:["".concat(v.cssPrefix,"-layers-text")].concat(o6(l))}})})}}},provides:function(c){c.generateLayersText=function(n,t){var r=t.title,a=t.transform,i=t.extra,o=null,s=null;if(Pv){var l=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();o=f.width/l,s=f.height/l}return v.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,Mv({content:n.innerHTML,width:o,height:s,transform:a,title:r,extra:i,watchable:!0})])}}},m91=new RegExp('"',"ug"),wv=[1105920,1112319];function p91(e){var c=e.replace(m91,""),n=St1(c,0),t=n>=wv[0]&&n<=wv[1],r=c.length===2?c[0]===c[1]:!1;return{value:Xc(r?c[0]:c),isSecondary:t||r}}function Sv(e,c){var n="".concat(rt1).concat(c.replace(":","-"));return new Promise(function(t,r){if(e.getAttribute(n)!==null)return t();var a=W3(e.children),i=a.filter(function(u1){return u1.getAttribute(Kc)===c})[0],o=I2.getComputedStyle(e,c),s=o.getPropertyValue("font-family").match(lt1),l=o.getPropertyValue("font-weight"),f=o.getPropertyValue("content");if(i&&!s)return e.removeChild(i),t();if(s&&f!=="none"&&f!==""){var u=o.getPropertyValue("content"),d=~["Sharp"].indexOf(s[2])?G:U,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?n6[d][s[2].toLowerCase()]:ft1[d][l],z=p91(u),y=z.value,F=z.isSecondary,N=s[0].startsWith("FontAwesome"),B=mt(h,y),R=B;if(N){var Z=kt1(y);Z.iconName&&Z.prefix&&(B=Z.iconName,h=Z.prefix)}if(B&&!F&&(!i||i.getAttribute(st)!==h||i.getAttribute(lt)!==R)){e.setAttribute(n,R),i&&e.removeChild(i);var Y=a91(),X=Y.extra;X.attributes[Kc]=c,nt(B,h).then(function(u1){var k2=vt(p(p({},Y),{},{icons:{main:u1,mask:pt()},prefix:h,iconName:R,extra:X,watchable:!0})),F1=q.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?e.insertBefore(F1,e.firstChild):e.appendChild(F1),F1.outerHTML=k2.map(function(E8){return l6(E8)}).join(`
`),e.removeAttribute(n),t()}).catch(r)}else t()}else t()})}function v91(e){return Promise.all([Sv(e,"::before"),Sv(e,"::after")])}function g91(e){return e.parentNode!==document.head&&!~it1.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Kc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Nv(e){if(h2)return new Promise(function(c,n){var t=W3(e.querySelectorAll("*")).filter(g91).map(v91),r=gt.begin("searchPseudoElements");rg(),Promise.all(t).then(function(){r(),at(),c()}).catch(function(){r(),at(),n()})})}var C91={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Nv,n}}},provides:function(c){c.pseudoElements2svg=function(n){var t=n.node,r=t===void 0?q:t;v.searchPseudoElements&&Nv(r)}}},Dv=!1,z91={mixout:function(){return{dom:{unwatch:function(){rg(),Dv=!0}}}},hooks:function(){return{bootstrap:function(){yv(et("mutationObserverCallbacks",{}))},noAuto:function(){c91()},watch:function(n){var t=n.observeMutationsRoot;Dv?at():yv(et("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},Av=function(c){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(t,r){var a=r.toLowerCase().split("-"),i=a[0],o=a.slice(1).join("-");if(i&&o==="h")return t.flipX=!0,t;if(i&&o==="v")return t.flipY=!0,t;if(o=parseFloat(o),isNaN(o))return t;switch(i){case"grow":t.size=t.size+o;break;case"shrink":t.size=t.size-o;break;case"left":t.x=t.x-o;break;case"right":t.x=t.x+o;break;case"up":t.y=t.y-o;break;case"down":t.y=t.y+o;break;case"rotate":t.rotate=t.rotate+o;break}return t},n)},M91={mixout:function(){return{parse:{transform:function(n){return Av(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,t){var r=t.getAttribute("data-fa-transform");return r&&(n.transform=Av(r)),n}}},provides:function(c){c.generateAbstractTransformGrouping=function(n){var t=n.main,r=n.transform,a=n.containerWidth,i=n.iconWidth,o={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(s," ").concat(l," ").concat(f)},d={transform:"translate(".concat(i/2*-1," -256)")},h={outer:o,inner:u,path:d};return{tag:"g",attributes:p({},h.outer),children:[{tag:"g",attributes:p({},h.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:p(p({},t.icon.attributes),h.path)}]}]}}}},Zc={x:0,y:0,width:"100%",height:"100%"};function Iv(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||c)&&(e.attributes.fill="black"),e}function H91(e){return e.tag==="g"?e.children:[e]}var V91={hooks:function(){return{parseNodeAttributes:function(n,t){var r=t.getAttribute("data-fa-mask"),a=r?A8(r.split(" ").map(function(i){return i.trim()})):pt();return a.prefix||(a.prefix=E2()),n.mask=a,n.maskId=t.getAttribute("data-fa-mask-id"),n}}},provides:function(c){c.generateAbstractMask=function(n){var t=n.children,r=n.attributes,a=n.main,i=n.mask,o=n.maskId,s=n.transform,l=a.width,f=a.icon,u=i.width,d=i.icon,h=Mt1({transform:s,containerWidth:u,iconWidth:l}),z={tag:"rect",attributes:p(p({},Zc),{},{fill:"white"})},y=f.children?{children:f.children.map(Iv)}:{},F={tag:"g",attributes:p({},h.inner),children:[Iv(p({tag:f.tag,attributes:p(p({},f.attributes),h.path)},y))]},N={tag:"g",attributes:p({},h.outer),children:[F]},B="mask-".concat(o||i6()),R="clip-".concat(o||i6()),Z={tag:"mask",attributes:p(p({},Zc),{},{id:B,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,N]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:H91(d)},Z]};return t.push(Y,{tag:"rect",attributes:p({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(B,")")},Zc)}),{children:t,attributes:r}}}},L91={provides:function(c){var n=!1;I2.matchMedia&&(n=I2.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var t=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:p(p({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=p(p({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:p(p({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:p(p({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:p(p({},i),{},{values:"1;0;1;1;0;1;"})}),t.push(o),t.push({tag:"path",attributes:p(p({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:p(p({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||t.push({tag:"path",attributes:p(p({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:p(p({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},y91={hooks:function(){return{parseNodeAttributes:function(n,t){var r=t.getAttribute("data-fa-symbol"),a=r===null?!1:r===""?!0:r;return n.symbol=a,n}}}},b91=[Lt1,f91,u91,d91,h91,C91,z91,M91,V91,L91,y91];Ft1(b91,{mixoutsTo:L1});var ql1=L1.noAuto,$l1=L1.config,Gl1=L1.library,Wl1=L1.dom,ig=L1.parse,Zl1=L1.findIconDefinition,Yl1=L1.toHtml,og=L1.icon,Ql1=L1.layer,x91=L1.text,w91=L1.counter;var S91=["*"],N91=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)},D91=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},A91=e=>{let c={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith("spin"),"fa-spin":e.animation==="spin"||e.animation==="spin-reverse","fa-spin-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-spin-reverse":e.animation==="spin-reverse"||e.animation==="spin-pulse-reverse","fa-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==null,[`fa-rotate-${e.rotate}`]:e.rotate!==null,[`fa-pull-${e.pull}`]:e.pull!==null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(c).map(n=>c[n]?n:null).filter(n=>n)},I91=e=>e.prefix!==void 0&&e.iconName!==void 0,E91=(e,c)=>I91(e)?e:typeof e=="string"?{prefix:c,iconName:e}:{prefix:e[0],iconName:e[1]},T91=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=C({token:c,factory:c.\u0275fac,providedIn:"root"});let e=c;return e})(),k91=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...t){for(let r of t){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let a of r.icon[2])typeof a=="string"&&(this.definitions[r.prefix][a]=r)}}addIconPacks(...t){for(let r of t){let a=Object.keys(r).map(i=>r[i]);this.addIcons(...a)}}getIconDefinition(t,r){return t in this.definitions&&r in this.definitions[t]?this.definitions[t][r]:null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=C({token:c,factory:c.\u0275fac,providedIn:"root"});let e=c;return e})(),R91=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(t){if("size"in t)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=w3({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[V2]});let e=c;return e})(),P91=(()=>{let c=class c{constructor(t,r){this.renderer=t,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(t){"size"in t&&(t.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${t.size.currentValue}`),t.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${t.size.previousValue}`))}};c.\u0275fac=function(r){return new(r||c)(M1(g4),M1(N3))},c.\u0275cmp=t2({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[V2,M4],ngContentSelectors:S91,decls:1,vars:0,template:function(r,a){r&1&&(ea(),ca(0))},encapsulation:2});let e=c;return e})(),sg=(()=>{let c=class c{set spin(t){this.animation=t?"spin":void 0}set pulse(t){this.animation=t?"spin-pulse":void 0}constructor(t,r,a,i,o){this.sanitizer=t,this.config=r,this.iconLibrary=a,this.stackItem=i,this.classes=[],o!=null&&i==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(t){if(this.icon==null&&this.config.fallbackIcon==null){D91();return}if(t){let r=this.icon!=null?this.icon:this.config.fallbackIcon,a=this.findIconDefinition(r);if(a!=null){let i=this.buildParams();this.renderIcon(a,i)}}}render(){this.ngOnChanges({})}findIconDefinition(t){let r=E91(t,this.config.defaultPrefix);if("icon"in r)return r;let a=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return a??(N91(r),null)}buildParams(){let t={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?ig.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...A91(t),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(t,r){let a=og(t,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(a.html.join(`
`))}};c.\u0275fac=function(r){return new(r||c)(M1(i7),M1(T91),M1(k91),M1(R91,8),M1(P91,8))},c.\u0275cmp=t2({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,a){r&2&&(Fe("innerHTML",a.renderedIconHTML,vr),H0("title",a.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[V2,M4],decls:0,vars:0,template:function(r,a){},encapsulation:2});let e=c;return e})();var lg=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=C1({type:c}),c.\u0275inj=g1({});let e=c;return e})();function _91(e,c){if(e&1&&(z4(0,"div",3),Y2(1,"fa-icon",4),D3()),e&2){let n=Jr();we(),V0("icon",n.randomFreeIcon)}}var fg=(()=>{let c=class c{constructor(){this.fabArr=Object.values(ro),this.fasArr=Object.values(Tm),this.farArr=Object.values(iv),this.fabAndFasArr=this.fabArr.concat(this.fasArr),this.freeIconsArr=this.fabAndFasArr.concat(this.farArr),this.randomIconIndex=this.getRandomIconIndex(),this.indexesArr=[],this.randomFreeIcon=this.getRandomFreeIcon(),this.isHidden=!0,this.clicksCount=0,this.timerDelay=0,this.startTime=0,this.endTime=0}getRandomIconIndex(){return Math.floor(Math.random()*this.freeIconsArr.length)}getRandomFreeIcon(){return this.indexesArr.length!==0?this.freeIconsArr[this.indexesArr[0]]:this.freeIconsArr[this.randomIconIndex]}showIcon(){if(this.clicksCount++,this.randomIconIndex=this.getRandomIconIndex(),this.indexesArr.push(this.randomIconIndex),this.randomFreeIcon=this.getRandomFreeIcon(),this.isHidden=!1,this.clicksCount>1){this.endTime=performance.now();let r=this.endTime-this.startTime;this.timerDelay=(this.clicksCount-1)*3e3-r}this.startTime=performance.now(),setTimeout(()=>{this.indexesArr.shift(),this.indexesArr.length===0&&(this.isHidden=!0,this.clicksCount=0,this.timerDelay=0,this.startTime=0,this.endTime=0),this.randomFreeIcon=this.getRandomFreeIcon()},3e3+this.timerDelay)}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=t2({type:c,selectors:[["app-btn-showing-icon"]],decls:4,vars:1,consts:[[1,"container"],[1,"container__button",3,"click"],["class","container__icon-container",4,"ngIf"],[1,"container__icon-container"],[1,"container__icon",3,"icon"]],template:function(r,a){r&1&&(z4(0,"div",0)(1,"button",1),L0("click",function(){return a.showIcon()}),ta(2,"Show Icon"),D3(),Re(3,_91,2,1,"div",2),D3()),r&2&&(we(3),V0("ngIf",!a.isHidden))},dependencies:[La,sg],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:calc(100vh - 2.5rem)}.container__button[_ngcontent-%COMP%]{background-color:#fff;border:0;border-radius:.5rem;box-sizing:border-box;color:#111827;font-family:Inter var,system-ui,Arial,sans-serif;font-size:.875rem;font-weight:600;line-height:1.25rem;padding:1.25rem 1.5rem;text-align:center;text-decoration:none #D1D5DB solid;text-decoration-thickness:auto;box-shadow:0 1px 3px #0000001a,0 1px 2px #0000000f;cursor:pointer;user-select:none;-webkit-user-select:none}.container__button[_ngcontent-%COMP%]:hover{background-color:#f9fafb}.container__icon-container[_ngcontent-%COMP%]{margin-top:15px}.container__icon[_ngcontent-%COMP%]{font-size:100px}"]});let e=c;return e})();var ug=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=t2({type:c,selectors:[["app-root"]],decls:1,vars:0,template:function(r,a){r&1&&Y2(0,"app-btn-showing-icon")},dependencies:[fg],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}"]});let e=c;return e})();var dg=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=C1({type:c,bootstrap:[ug]}),c.\u0275inj=g1({imports:[Ta,yi,lg]});let e=c;return e})();Ea().bootstrapModule(dg).catch(e=>console.error(e));