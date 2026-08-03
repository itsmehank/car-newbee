function gg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const u=Object.getOwnPropertyDescriptor(r,i);u&&Object.defineProperty(e,i,u.get?u:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const u of i)if(u.type==="childList")for(const a of u.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const u={};return i.integrity&&(u.integrity=i.integrity),i.referrerPolicy&&(u.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?u.credentials="include":i.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(i){if(i.ep)return;i.ep=!0;const u=n(i);fetch(i.href,u)}})();var ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function To(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var D0={exports:{}},Ba={},M0={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ou=Symbol.for("react.element"),Eg=Symbol.for("react.portal"),Tg=Symbol.for("react.fragment"),yg=Symbol.for("react.strict_mode"),_g=Symbol.for("react.profiler"),bg=Symbol.for("react.provider"),kg=Symbol.for("react.context"),Cg=Symbol.for("react.forward_ref"),Ag=Symbol.for("react.suspense"),Sg=Symbol.for("react.memo"),Ng=Symbol.for("react.lazy"),Qc=Symbol.iterator;function xg(e){return e===null||typeof e!="object"?null:(e=Qc&&e[Qc]||e["@@iterator"],typeof e=="function"?e:null)}var B0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F0=Object.assign,H0={};function Xr(e,t,n){this.props=e,this.context=t,this.refs=H0,this.updater=n||B0}Xr.prototype.isReactComponent={};Xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function U0(){}U0.prototype=Xr.prototype;function yo(e,t,n){this.props=e,this.context=t,this.refs=H0,this.updater=n||B0}var _o=yo.prototype=new U0;_o.constructor=yo;F0(_o,Xr.prototype);_o.isPureReactComponent=!0;var $c=Array.isArray,z0=Object.prototype.hasOwnProperty,bo={current:null},j0={key:!0,ref:!0,__self:!0,__source:!0};function V0(e,t,n){var r,i={},u=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(u=""+t.key),t)z0.call(t,r)&&!j0.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ou,type:e,key:u,ref:a,props:i,_owner:bo.current}}function Ig(e,t){return{$$typeof:ou,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ko(e){return typeof e=="object"&&e!==null&&e.$$typeof===ou}function vg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gc=/\/+/g;function ps(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vg(""+e.key):t.toString(36)}function Vu(e,t,n,r,i){var u=typeof e;(u==="undefined"||u==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ou:case Eg:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ps(a,0):r,$c(i)?(n="",e!=null&&(n=e.replace(Gc,"$&/")+"/"),Vu(i,t,n,"",function(c){return c})):i!=null&&(ko(i)&&(i=Ig(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Gc,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",$c(e))for(var s=0;s<e.length;s++){u=e[s];var l=r+ps(u,s);a+=Vu(u,t,n,l,i)}else if(l=xg(e),typeof l=="function")for(e=l.call(e),s=0;!(u=e.next()).done;)u=u.value,l=r+ps(u,s++),a+=Vu(u,t,n,l,i);else if(u==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function bu(e,t,n){if(e==null)return e;var r=[],i=0;return Vu(e,r,"","",function(u){return t.call(n,u,i++)}),r}function wg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},Wu={transition:null},Rg={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:Wu,ReactCurrentOwner:bo};function W0(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:bu,forEach:function(e,t,n){bu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bu(e,function(){t++}),t},toArray:function(e){return bu(e,function(t){return t})||[]},only:function(e){if(!ko(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=Xr;Z.Fragment=Tg;Z.Profiler=_g;Z.PureComponent=yo;Z.StrictMode=yg;Z.Suspense=Ag;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rg;Z.act=W0;Z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=F0({},e.props),i=e.key,u=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(u=t.ref,a=bo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)z0.call(t,l)&&!j0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:ou,type:e.type,key:i,ref:u,props:r,_owner:a}};Z.createContext=function(e){return e={$$typeof:kg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bg,_context:e},e.Consumer=e};Z.createElement=V0;Z.createFactory=function(e){var t=V0.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:Cg,render:e}};Z.isValidElement=ko;Z.lazy=function(e){return{$$typeof:Ng,_payload:{_status:-1,_result:e},_init:wg}};Z.memo=function(e,t){return{$$typeof:Sg,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=Wu.transition;Wu.transition={};try{e()}finally{Wu.transition=t}};Z.unstable_act=W0;Z.useCallback=function(e,t){return Ge.current.useCallback(e,t)};Z.useContext=function(e){return Ge.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};Z.useEffect=function(e,t){return Ge.current.useEffect(e,t)};Z.useId=function(){return Ge.current.useId()};Z.useImperativeHandle=function(e,t,n){return Ge.current.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return Ge.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return Ge.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return Ge.current.useMemo(e,t)};Z.useReducer=function(e,t,n){return Ge.current.useReducer(e,t,n)};Z.useRef=function(e){return Ge.current.useRef(e)};Z.useState=function(e){return Ge.current.useState(e)};Z.useSyncExternalStore=function(e,t,n){return Ge.current.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return Ge.current.useTransition()};Z.version="18.3.1";M0.exports=Z;var z=M0.exports;const Y0=To(z),Og=gg({__proto__:null,default:Y0},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg=z,Lg=Symbol.for("react.element"),Dg=Symbol.for("react.fragment"),Mg=Object.prototype.hasOwnProperty,Bg=Pg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fg={key:!0,ref:!0,__self:!0,__source:!0};function X0(e,t,n){var r,i={},u=null,a=null;n!==void 0&&(u=""+n),t.key!==void 0&&(u=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Mg.call(t,r)&&!Fg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Lg,type:e,key:u,ref:a,props:i,_owner:Bg.current}}Ba.Fragment=Dg;Ba.jsx=X0;Ba.jsxs=X0;D0.exports=Ba;var A=D0.exports,K0={exports:{}},ht={},Q0={exports:{}},$0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,Q){var b=j.length;j.push(Q);e:for(;0<b;){var ie=b-1>>>1,se=j[ie];if(0<i(se,Q))j[ie]=Q,j[b]=se,b=ie;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var Q=j[0],b=j.pop();if(b!==Q){j[0]=b;e:for(var ie=0,se=j.length,S=se>>>1;ie<S;){var we=2*(ie+1)-1,Ct=j[we],he=we+1,Lt=j[he];if(0>i(Ct,b))he<se&&0>i(Lt,Ct)?(j[ie]=Lt,j[he]=b,ie=he):(j[ie]=Ct,j[we]=b,ie=we);else if(he<se&&0>i(Lt,b))j[ie]=Lt,j[he]=b,ie=he;else break e}}return Q}function i(j,Q){var b=j.sortIndex-Q.sortIndex;return b!==0?b:j.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],d=1,f=null,h=3,p=!1,T=!1,C=!1,N=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(j){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=j)r(c),Q.sortIndex=Q.expirationTime,t(l,Q);else break;Q=n(c)}}function w(j){if(C=!1,y(j),!T)if(n(l)!==null)T=!0,xe(P);else{var Q=n(c);Q!==null&&ke(w,Q.startTime-j)}}function P(j,Q){T=!1,C&&(C=!1,m(H),H=-1),p=!0;var b=h;try{for(y(Q),f=n(l);f!==null&&(!(f.expirationTime>Q)||j&&!V());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,h=f.priorityLevel;var se=ie(f.expirationTime<=Q);Q=e.unstable_now(),typeof se=="function"?f.callback=se:f===n(l)&&r(l),y(Q)}else r(l);f=n(l)}if(f!==null)var S=!0;else{var we=n(c);we!==null&&ke(w,we.startTime-Q),S=!1}return S}finally{f=null,h=b,p=!1}}var x=!1,F=null,H=-1,K=5,I=-1;function V(){return!(e.unstable_now()-I<K)}function Y(){if(F!==null){var j=e.unstable_now();I=j;var Q=!0;try{Q=F(!0,j)}finally{Q?re():(x=!1,F=null)}}else x=!1}var re;if(typeof E=="function")re=function(){E(Y)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ee=fe.port2;fe.port1.onmessage=Y,re=function(){ee.postMessage(null)}}else re=function(){N(Y,0)};function xe(j){F=j,x||(x=!0,re())}function ke(j,Q){H=N(function(){j(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){T||p||(T=!0,xe(P))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(j){switch(h){case 1:case 2:case 3:var Q=3;break;default:Q=h}var b=h;h=Q;try{return j()}finally{h=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,Q){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var b=h;h=j;try{return Q()}finally{h=b}},e.unstable_scheduleCallback=function(j,Q,b){var ie=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?ie+b:ie):b=ie,j){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=b+se,j={id:d++,callback:Q,priorityLevel:j,startTime:b,expirationTime:se,sortIndex:-1},b>ie?(j.sortIndex=b,t(c,j),n(l)===null&&j===n(c)&&(C?(m(H),H=-1):C=!0,ke(w,b-ie))):(j.sortIndex=se,t(l,j),T||p||(T=!0,xe(P))),j},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(j){var Q=h;return function(){var b=h;h=Q;try{return j.apply(this,arguments)}finally{h=b}}}})($0);Q0.exports=$0;var Hg=Q0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug=z,dt=Hg;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var G0=new Set,Hi={};function rr(e,t){Mr(e,t),Mr(e+"Capture",t)}function Mr(e,t){for(Hi[e]=t,e=0;e<t.length;e++)G0.add(t[e])}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ul=Object.prototype.hasOwnProperty,zg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qc={},Jc={};function jg(e){return ul.call(Jc,e)?!0:ul.call(qc,e)?!1:zg.test(e)?Jc[e]=!0:(qc[e]=!0,!1)}function Vg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wg(e,t,n,r){if(t===null||typeof t>"u"||Vg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,n,r,i,u,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=a}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Co=/[\-:]([a-z])/g;function Ao(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Co,Ao);He[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Co,Ao);He[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Co,Ao);He[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function So(e,t,n,r){var i=He.hasOwnProperty(t)?He[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wg(t,n,i,r)&&(n=null),r||i===null?jg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rn=Ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ku=Symbol.for("react.element"),gr=Symbol.for("react.portal"),Er=Symbol.for("react.fragment"),No=Symbol.for("react.strict_mode"),al=Symbol.for("react.profiler"),q0=Symbol.for("react.provider"),J0=Symbol.for("react.context"),xo=Symbol.for("react.forward_ref"),sl=Symbol.for("react.suspense"),ll=Symbol.for("react.suspense_list"),Io=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),Z0=Symbol.for("react.offscreen"),Zc=Symbol.iterator;function ii(e){return e===null||typeof e!="object"?null:(e=Zc&&e[Zc]||e["@@iterator"],typeof e=="function"?e:null)}var _e=Object.assign,ms;function Ei(e){if(ms===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ms=t&&t[1]||""}return`
`+ms+e}var gs=!1;function Es(e,t){if(!e||gs)return"";gs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),u=r.stack.split(`
`),a=i.length-1,s=u.length-1;1<=a&&0<=s&&i[a]!==u[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==u[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==u[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{gs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ei(e):""}function Yg(e){switch(e.tag){case 5:return Ei(e.type);case 16:return Ei("Lazy");case 13:return Ei("Suspense");case 19:return Ei("SuspenseList");case 0:case 2:case 15:return e=Es(e.type,!1),e;case 11:return e=Es(e.type.render,!1),e;case 1:return e=Es(e.type,!0),e;default:return""}}function ol(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Er:return"Fragment";case gr:return"Portal";case al:return"Profiler";case No:return"StrictMode";case sl:return"Suspense";case ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case J0:return(e.displayName||"Context")+".Consumer";case q0:return(e._context.displayName||"Context")+".Provider";case xo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Io:return t=e.displayName||null,t!==null?t:ol(e.type)||"Memo";case dn:t=e._payload,e=e._init;try{return ol(e(t))}catch{}}return null}function Xg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ol(t);case 8:return t===No?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function eh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Kg(e){var t=eh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,u.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cu(e){e._valueTracker||(e._valueTracker=Kg(e))}function th(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=eh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function aa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cl(e,t){var n=t.checked;return _e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ef(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function nh(e,t){t=t.checked,t!=null&&So(e,"checked",t,!1)}function fl(e,t){nh(e,t);var n=vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dl(e,t.type,n):t.hasOwnProperty("defaultValue")&&dl(e,t.type,vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function dl(e,t,n){(t!=="number"||aa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ti=Array.isArray;function wr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return _e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Ti(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vn(n)}}function rh(e,t){var n=vn(t.value),r=vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function rf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ih(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ih(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Au,uh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Au=Au||document.createElement("div"),Au.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Au.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ui(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qg=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(e){Qg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ki[t]=ki[e]})});function ah(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ki.hasOwnProperty(e)&&ki[e]?(""+t).trim():t+"px"}function sh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ah(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var $g=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(e,t){if(t){if($g[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var El=null;function vo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tl=null,Rr=null,Or=null;function uf(e){if(e=du(e)){if(typeof Tl!="function")throw Error(M(280));var t=e.stateNode;t&&(t=ja(t),Tl(e.stateNode,e.type,t))}}function lh(e){Rr?Or?Or.push(e):Or=[e]:Rr=e}function oh(){if(Rr){var e=Rr,t=Or;if(Or=Rr=null,uf(e),t)for(e=0;e<t.length;e++)uf(t[e])}}function ch(e,t){return e(t)}function fh(){}var Ts=!1;function dh(e,t,n){if(Ts)return e(t,n);Ts=!0;try{return ch(e,t,n)}finally{Ts=!1,(Rr!==null||Or!==null)&&(fh(),oh())}}function zi(e,t){var n=e.stateNode;if(n===null)return null;var r=ja(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var yl=!1;if(Zt)try{var ui={};Object.defineProperty(ui,"passive",{get:function(){yl=!0}}),window.addEventListener("test",ui,ui),window.removeEventListener("test",ui,ui)}catch{yl=!1}function Gg(e,t,n,r,i,u,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Ci=!1,sa=null,la=!1,_l=null,qg={onError:function(e){Ci=!0,sa=e}};function Jg(e,t,n,r,i,u,a,s,l){Ci=!1,sa=null,Gg.apply(qg,arguments)}function Zg(e,t,n,r,i,u,a,s,l){if(Jg.apply(this,arguments),Ci){if(Ci){var c=sa;Ci=!1,sa=null}else throw Error(M(198));la||(la=!0,_l=c)}}function ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function af(e){if(ir(e)!==e)throw Error(M(188))}function e2(e){var t=e.alternate;if(!t){if(t=ir(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var u=i.alternate;if(u===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===n)return af(i),e;if(u===r)return af(i),t;u=u.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=u;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=u;break}if(s===r){a=!0,r=i,n=u;break}s=s.sibling}if(!a){for(s=u.child;s;){if(s===n){a=!0,n=u,r=i;break}if(s===r){a=!0,r=u,n=i;break}s=s.sibling}if(!a)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function ph(e){return e=e2(e),e!==null?mh(e):null}function mh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mh(e);if(t!==null)return t;e=e.sibling}return null}var gh=dt.unstable_scheduleCallback,sf=dt.unstable_cancelCallback,t2=dt.unstable_shouldYield,n2=dt.unstable_requestPaint,Ae=dt.unstable_now,r2=dt.unstable_getCurrentPriorityLevel,wo=dt.unstable_ImmediatePriority,Eh=dt.unstable_UserBlockingPriority,oa=dt.unstable_NormalPriority,i2=dt.unstable_LowPriority,Th=dt.unstable_IdlePriority,Fa=null,zt=null;function u2(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Fa,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:l2,a2=Math.log,s2=Math.LN2;function l2(e){return e>>>=0,e===0?32:31-(a2(e)/s2|0)|0}var Su=64,Nu=4194304;function yi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ca(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,u=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=yi(s):(u&=a,u!==0&&(r=yi(u)))}else a=n&~i,a!==0?r=yi(a):u!==0&&(r=yi(u));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,u=t&-t,i>=u||i===16&&(u&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),i=1<<n,r|=e[n],t&=~i;return r}function o2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,u=e.pendingLanes;0<u;){var a=31-vt(u),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=o2(s,t)):l<=t&&(e.expiredLanes|=s),u&=~s}}function bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yh(){var e=Su;return Su<<=1,!(Su&4194240)&&(Su=64),e}function ys(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function cu(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=n}function f2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-vt(n),u=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~u}}function Ro(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ae=0;function _h(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bh,Oo,kh,Ch,Ah,kl=!1,xu=[],_n=null,bn=null,kn=null,ji=new Map,Vi=new Map,pn=[],d2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lf(e,t){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":ji.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(t.pointerId)}}function ai(e,t,n,r,i,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:u,targetContainers:[i]},t!==null&&(t=du(t),t!==null&&Oo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function h2(e,t,n,r,i){switch(t){case"focusin":return _n=ai(_n,e,t,n,r,i),!0;case"dragenter":return bn=ai(bn,e,t,n,r,i),!0;case"mouseover":return kn=ai(kn,e,t,n,r,i),!0;case"pointerover":var u=i.pointerId;return ji.set(u,ai(ji.get(u)||null,e,t,n,r,i)),!0;case"gotpointercapture":return u=i.pointerId,Vi.set(u,ai(Vi.get(u)||null,e,t,n,r,i)),!0}return!1}function Sh(e){var t=Vn(e.target);if(t!==null){var n=ir(t);if(n!==null){if(t=n.tag,t===13){if(t=hh(n),t!==null){e.blockedOn=t,Ah(e.priority,function(){kh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);El=r,n.target.dispatchEvent(r),El=null}else return t=du(n),t!==null&&Oo(t),e.blockedOn=n,!1;t.shift()}return!0}function of(e,t,n){Yu(e)&&n.delete(t)}function p2(){kl=!1,_n!==null&&Yu(_n)&&(_n=null),bn!==null&&Yu(bn)&&(bn=null),kn!==null&&Yu(kn)&&(kn=null),ji.forEach(of),Vi.forEach(of)}function si(e,t){e.blockedOn===t&&(e.blockedOn=null,kl||(kl=!0,dt.unstable_scheduleCallback(dt.unstable_NormalPriority,p2)))}function Wi(e){function t(i){return si(i,e)}if(0<xu.length){si(xu[0],e);for(var n=1;n<xu.length;n++){var r=xu[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_n!==null&&si(_n,e),bn!==null&&si(bn,e),kn!==null&&si(kn,e),ji.forEach(t),Vi.forEach(t),n=0;n<pn.length;n++)r=pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)Sh(n),n.blockedOn===null&&pn.shift()}var Pr=rn.ReactCurrentBatchConfig,fa=!0;function m2(e,t,n,r){var i=ae,u=Pr.transition;Pr.transition=null;try{ae=1,Po(e,t,n,r)}finally{ae=i,Pr.transition=u}}function g2(e,t,n,r){var i=ae,u=Pr.transition;Pr.transition=null;try{ae=4,Po(e,t,n,r)}finally{ae=i,Pr.transition=u}}function Po(e,t,n,r){if(fa){var i=Cl(e,t,n,r);if(i===null)vs(e,t,r,da,n),lf(e,r);else if(h2(i,e,t,n,r))r.stopPropagation();else if(lf(e,r),t&4&&-1<d2.indexOf(e)){for(;i!==null;){var u=du(i);if(u!==null&&bh(u),u=Cl(e,t,n,r),u===null&&vs(e,t,r,da,n),u===i)break;i=u}i!==null&&r.stopPropagation()}else vs(e,t,r,null,n)}}var da=null;function Cl(e,t,n,r){if(da=null,e=vo(r),e=Vn(e),e!==null)if(t=ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return da=e,null}function Nh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r2()){case wo:return 1;case Eh:return 4;case oa:case i2:return 16;case Th:return 536870912;default:return 16}default:return 16}}var gn=null,Lo=null,Xu=null;function xh(){if(Xu)return Xu;var e,t=Lo,n=t.length,r,i="value"in gn?gn.value:gn.textContent,u=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[u-r];r++);return Xu=i.slice(e,1<r?1-r:void 0)}function Ku(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Iu(){return!0}function cf(){return!1}function pt(e){function t(n,r,i,u,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=u,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(u):u[s]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Iu:cf,this.isPropagationStopped=cf,this}return _e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Iu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Iu)},persist:function(){},isPersistent:Iu}),t}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Do=pt(Kr),fu=_e({},Kr,{view:0,detail:0}),E2=pt(fu),_s,bs,li,Ha=_e({},fu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==li&&(li&&e.type==="mousemove"?(_s=e.screenX-li.screenX,bs=e.screenY-li.screenY):bs=_s=0,li=e),_s)},movementY:function(e){return"movementY"in e?e.movementY:bs}}),ff=pt(Ha),T2=_e({},Ha,{dataTransfer:0}),y2=pt(T2),_2=_e({},fu,{relatedTarget:0}),ks=pt(_2),b2=_e({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),k2=pt(b2),C2=_e({},Kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),A2=pt(C2),S2=_e({},Kr,{data:0}),df=pt(S2),N2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=I2[e])?!!t[e]:!1}function Mo(){return v2}var w2=_e({},fu,{key:function(e){if(e.key){var t=N2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ku(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?x2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mo,charCode:function(e){return e.type==="keypress"?Ku(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ku(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),R2=pt(w2),O2=_e({},Ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hf=pt(O2),P2=_e({},fu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mo}),L2=pt(P2),D2=_e({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),M2=pt(D2),B2=_e({},Ha,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),F2=pt(B2),H2=[9,13,27,32],Bo=Zt&&"CompositionEvent"in window,Ai=null;Zt&&"documentMode"in document&&(Ai=document.documentMode);var U2=Zt&&"TextEvent"in window&&!Ai,Ih=Zt&&(!Bo||Ai&&8<Ai&&11>=Ai),pf=" ",mf=!1;function vh(e,t){switch(e){case"keyup":return H2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function z2(e,t){switch(e){case"compositionend":return wh(t);case"keypress":return t.which!==32?null:(mf=!0,pf);case"textInput":return e=t.data,e===pf&&mf?null:e;default:return null}}function j2(e,t){if(Tr)return e==="compositionend"||!Bo&&vh(e,t)?(e=xh(),Xu=Lo=gn=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ih&&t.locale!=="ko"?null:t.data;default:return null}}var V2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!V2[e.type]:t==="textarea"}function Rh(e,t,n,r){lh(r),t=ha(t,"onChange"),0<t.length&&(n=new Do("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Si=null,Yi=null;function W2(e){jh(e,0)}function Ua(e){var t=br(e);if(th(t))return e}function Y2(e,t){if(e==="change")return t}var Oh=!1;if(Zt){var Cs;if(Zt){var As="oninput"in document;if(!As){var Ef=document.createElement("div");Ef.setAttribute("oninput","return;"),As=typeof Ef.oninput=="function"}Cs=As}else Cs=!1;Oh=Cs&&(!document.documentMode||9<document.documentMode)}function Tf(){Si&&(Si.detachEvent("onpropertychange",Ph),Yi=Si=null)}function Ph(e){if(e.propertyName==="value"&&Ua(Yi)){var t=[];Rh(t,Yi,e,vo(e)),dh(W2,t)}}function X2(e,t,n){e==="focusin"?(Tf(),Si=t,Yi=n,Si.attachEvent("onpropertychange",Ph)):e==="focusout"&&Tf()}function K2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ua(Yi)}function Q2(e,t){if(e==="click")return Ua(t)}function $2(e,t){if(e==="input"||e==="change")return Ua(t)}function G2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:G2;function Xi(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ul.call(t,i)||!Ot(e[i],t[i]))return!1}return!0}function yf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _f(e,t){var n=yf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yf(n)}}function Lh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dh(){for(var e=window,t=aa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=aa(e.document)}return t}function Fo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function q2(e){var t=Dh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lh(n.ownerDocument.documentElement,n)){if(r!==null&&Fo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,u=Math.min(r.start,i);r=r.end===void 0?u:Math.min(r.end,i),!e.extend&&u>r&&(i=r,r=u,u=i),i=_f(n,u);var a=_f(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),u>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var J2=Zt&&"documentMode"in document&&11>=document.documentMode,yr=null,Al=null,Ni=null,Sl=!1;function bf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sl||yr==null||yr!==aa(r)||(r=yr,"selectionStart"in r&&Fo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ni&&Xi(Ni,r)||(Ni=r,r=ha(Al,"onSelect"),0<r.length&&(t=new Do("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yr)))}function vu(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _r={animationend:vu("Animation","AnimationEnd"),animationiteration:vu("Animation","AnimationIteration"),animationstart:vu("Animation","AnimationStart"),transitionend:vu("Transition","TransitionEnd")},Ss={},Mh={};Zt&&(Mh=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function za(e){if(Ss[e])return Ss[e];if(!_r[e])return e;var t=_r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mh)return Ss[e]=t[n];return e}var Bh=za("animationend"),Fh=za("animationiteration"),Hh=za("animationstart"),Uh=za("transitionend"),zh=new Map,kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(e,t){zh.set(e,t),rr(t,[e])}for(var Ns=0;Ns<kf.length;Ns++){var xs=kf[Ns],Z2=xs.toLowerCase(),eE=xs[0].toUpperCase()+xs.slice(1);Rn(Z2,"on"+eE)}Rn(Bh,"onAnimationEnd");Rn(Fh,"onAnimationIteration");Rn(Hh,"onAnimationStart");Rn("dblclick","onDoubleClick");Rn("focusin","onFocus");Rn("focusout","onBlur");Rn(Uh,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tE=new Set("cancel close invalid load scroll toggle".split(" ").concat(_i));function Cf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zg(r,t,void 0,e),e.currentTarget=null}function jh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var u=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==u&&i.isPropagationStopped())break e;Cf(i,s,c),u=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==u&&i.isPropagationStopped())break e;Cf(i,s,c),u=l}}}if(la)throw e=_l,la=!1,_l=null,e}function pe(e,t){var n=t[wl];n===void 0&&(n=t[wl]=new Set);var r=e+"__bubble";n.has(r)||(Vh(t,e,2,!1),n.add(r))}function Is(e,t,n){var r=0;t&&(r|=4),Vh(n,e,r,t)}var wu="_reactListening"+Math.random().toString(36).slice(2);function Ki(e){if(!e[wu]){e[wu]=!0,G0.forEach(function(n){n!=="selectionchange"&&(tE.has(n)||Is(n,!1,e),Is(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wu]||(t[wu]=!0,Is("selectionchange",!1,t))}}function Vh(e,t,n,r){switch(Nh(t)){case 1:var i=m2;break;case 4:i=g2;break;default:i=Po}n=i.bind(null,t,n,e),i=void 0,!yl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function vs(e,t,n,r,i){var u=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Vn(s),a===null)return;if(l=a.tag,l===5||l===6){r=u=a;continue e}s=s.parentNode}}r=r.return}dh(function(){var c=u,d=vo(n),f=[];e:{var h=zh.get(e);if(h!==void 0){var p=Do,T=e;switch(e){case"keypress":if(Ku(n)===0)break e;case"keydown":case"keyup":p=R2;break;case"focusin":T="focus",p=ks;break;case"focusout":T="blur",p=ks;break;case"beforeblur":case"afterblur":p=ks;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ff;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=y2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=L2;break;case Bh:case Fh:case Hh:p=k2;break;case Uh:p=M2;break;case"scroll":p=E2;break;case"wheel":p=F2;break;case"copy":case"cut":case"paste":p=A2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=hf}var C=(t&4)!==0,N=!C&&e==="scroll",m=C?h!==null?h+"Capture":null:h;C=[];for(var E=c,y;E!==null;){y=E;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,m!==null&&(w=zi(E,m),w!=null&&C.push(Qi(E,w,y)))),N)break;E=E.return}0<C.length&&(h=new p(h,T,null,n,d),f.push({event:h,listeners:C}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==El&&(T=n.relatedTarget||n.fromElement)&&(Vn(T)||T[en]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(T=n.relatedTarget||n.toElement,p=c,T=T?Vn(T):null,T!==null&&(N=ir(T),T!==N||T.tag!==5&&T.tag!==6)&&(T=null)):(p=null,T=c),p!==T)){if(C=ff,w="onMouseLeave",m="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(C=hf,w="onPointerLeave",m="onPointerEnter",E="pointer"),N=p==null?h:br(p),y=T==null?h:br(T),h=new C(w,E+"leave",p,n,d),h.target=N,h.relatedTarget=y,w=null,Vn(d)===c&&(C=new C(m,E+"enter",T,n,d),C.target=y,C.relatedTarget=N,w=C),N=w,p&&T)t:{for(C=p,m=T,E=0,y=C;y;y=fr(y))E++;for(y=0,w=m;w;w=fr(w))y++;for(;0<E-y;)C=fr(C),E--;for(;0<y-E;)m=fr(m),y--;for(;E--;){if(C===m||m!==null&&C===m.alternate)break t;C=fr(C),m=fr(m)}C=null}else C=null;p!==null&&Af(f,h,p,C,!1),T!==null&&N!==null&&Af(f,N,T,C,!0)}}e:{if(h=c?br(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var P=Y2;else if(gf(h))if(Oh)P=$2;else{P=K2;var x=X2}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=Q2);if(P&&(P=P(e,c))){Rh(f,P,n,d);break e}x&&x(e,h,c),e==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&dl(h,"number",h.value)}switch(x=c?br(c):window,e){case"focusin":(gf(x)||x.contentEditable==="true")&&(yr=x,Al=c,Ni=null);break;case"focusout":Ni=Al=yr=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,bf(f,n,d);break;case"selectionchange":if(J2)break;case"keydown":case"keyup":bf(f,n,d)}var F;if(Bo)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else Tr?vh(e,n)&&(H="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(H="onCompositionStart");H&&(Ih&&n.locale!=="ko"&&(Tr||H!=="onCompositionStart"?H==="onCompositionEnd"&&Tr&&(F=xh()):(gn=d,Lo="value"in gn?gn.value:gn.textContent,Tr=!0)),x=ha(c,H),0<x.length&&(H=new df(H,e,null,n,d),f.push({event:H,listeners:x}),F?H.data=F:(F=wh(n),F!==null&&(H.data=F)))),(F=U2?z2(e,n):j2(e,n))&&(c=ha(c,"onBeforeInput"),0<c.length&&(d=new df("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=F))}jh(f,t)})}function Qi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ha(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,u=i.stateNode;i.tag===5&&u!==null&&(i=u,u=zi(e,n),u!=null&&r.unshift(Qi(e,u,i)),u=zi(e,t),u!=null&&r.push(Qi(e,u,i))),e=e.return}return r}function fr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Af(e,t,n,r,i){for(var u=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,i?(l=zi(n,u),l!=null&&a.unshift(Qi(n,l,s))):i||(l=zi(n,u),l!=null&&a.push(Qi(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var nE=/\r\n?/g,rE=/\u0000|\uFFFD/g;function Sf(e){return(typeof e=="string"?e:""+e).replace(nE,`
`).replace(rE,"")}function Ru(e,t,n){if(t=Sf(t),Sf(e)!==t&&n)throw Error(M(425))}function pa(){}var Nl=null,xl=null;function Il(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vl=typeof setTimeout=="function"?setTimeout:void 0,iE=typeof clearTimeout=="function"?clearTimeout:void 0,Nf=typeof Promise=="function"?Promise:void 0,uE=typeof queueMicrotask=="function"?queueMicrotask:typeof Nf<"u"?function(e){return Nf.resolve(null).then(e).catch(aE)}:vl;function aE(e){setTimeout(function(){throw e})}function ws(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wi(t)}function Cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Qr,$i="__reactProps$"+Qr,en="__reactContainer$"+Qr,wl="__reactEvents$"+Qr,sE="__reactListeners$"+Qr,lE="__reactHandles$"+Qr;function Vn(e){var t=e[Ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[en]||n[Ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xf(e);e!==null;){if(n=e[Ut])return n;e=xf(e)}return t}e=n,n=e.parentNode}return null}function du(e){return e=e[Ut]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function br(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function ja(e){return e[$i]||null}var Rl=[],kr=-1;function On(e){return{current:e}}function me(e){0>kr||(e.current=Rl[kr],Rl[kr]=null,kr--)}function de(e,t){kr++,Rl[kr]=e.current,e.current=t}var wn={},We=On(wn),nt=On(!1),qn=wn;function Br(e,t){var n=e.type.contextTypes;if(!n)return wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},u;for(u in n)i[u]=t[u];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function rt(e){return e=e.childContextTypes,e!=null}function ma(){me(nt),me(We)}function If(e,t,n){if(We.current!==wn)throw Error(M(168));de(We,t),de(nt,n)}function Wh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,Xg(e)||"Unknown",i));return _e({},n,r)}function ga(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wn,qn=We.current,de(We,e),de(nt,nt.current),!0}function vf(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=Wh(e,t,qn),r.__reactInternalMemoizedMergedChildContext=e,me(nt),me(We),de(We,e)):me(nt),de(nt,n)}var Qt=null,Va=!1,Rs=!1;function Yh(e){Qt===null?Qt=[e]:Qt.push(e)}function oE(e){Va=!0,Yh(e)}function Pn(){if(!Rs&&Qt!==null){Rs=!0;var e=0,t=ae;try{var n=Qt;for(ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qt=null,Va=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(e+1)),gh(wo,Pn),i}finally{ae=t,Rs=!1}}return null}var Cr=[],Ar=0,Ea=null,Ta=0,mt=[],gt=0,Jn=null,Gt=1,qt="";function Hn(e,t){Cr[Ar++]=Ta,Cr[Ar++]=Ea,Ea=e,Ta=t}function Xh(e,t,n){mt[gt++]=Gt,mt[gt++]=qt,mt[gt++]=Jn,Jn=e;var r=Gt;e=qt;var i=32-vt(r)-1;r&=~(1<<i),n+=1;var u=32-vt(t)+i;if(30<u){var a=i-i%5;u=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Gt=1<<32-vt(t)+i|n<<i|r,qt=u+e}else Gt=1<<u|n<<i|r,qt=e}function Ho(e){e.return!==null&&(Hn(e,1),Xh(e,1,0))}function Uo(e){for(;e===Ea;)Ea=Cr[--Ar],Cr[Ar]=null,Ta=Cr[--Ar],Cr[Ar]=null;for(;e===Jn;)Jn=mt[--gt],mt[gt]=null,qt=mt[--gt],mt[gt]=null,Gt=mt[--gt],mt[gt]=null}var ct=null,ot=null,Ee=!1,It=null;function Kh(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,ot=Cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jn!==null?{id:Gt,overflow:qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,ot=null,!0):!1;default:return!1}}function Ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pl(e){if(Ee){var t=ot;if(t){var n=t;if(!wf(e,t)){if(Ol(e))throw Error(M(418));t=Cn(n.nextSibling);var r=ct;t&&wf(e,t)?Kh(r,n):(e.flags=e.flags&-4097|2,Ee=!1,ct=e)}}else{if(Ol(e))throw Error(M(418));e.flags=e.flags&-4097|2,Ee=!1,ct=e}}}function Rf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function Ou(e){if(e!==ct)return!1;if(!Ee)return Rf(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Il(e.type,e.memoizedProps)),t&&(t=ot)){if(Ol(e))throw Qh(),Error(M(418));for(;t;)Kh(e,t),t=Cn(t.nextSibling)}if(Rf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ot=Cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=ct?Cn(e.stateNode.nextSibling):null;return!0}function Qh(){for(var e=ot;e;)e=Cn(e.nextSibling)}function Fr(){ot=ct=null,Ee=!1}function zo(e){It===null?It=[e]:It.push(e)}var cE=rn.ReactCurrentBatchConfig;function oi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(a){var s=i.refs;a===null?delete s[u]:s[u]=a},t._stringRef=u,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function Pu(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Of(e){var t=e._init;return t(e._payload)}function $h(e){function t(m,E){if(e){var y=m.deletions;y===null?(m.deletions=[E],m.flags|=16):y.push(E)}}function n(m,E){if(!e)return null;for(;E!==null;)t(m,E),E=E.sibling;return null}function r(m,E){for(m=new Map;E!==null;)E.key!==null?m.set(E.key,E):m.set(E.index,E),E=E.sibling;return m}function i(m,E){return m=xn(m,E),m.index=0,m.sibling=null,m}function u(m,E,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<E?(m.flags|=2,E):y):(m.flags|=2,E)):(m.flags|=1048576,E)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,E,y,w){return E===null||E.tag!==6?(E=Fs(y,m.mode,w),E.return=m,E):(E=i(E,y),E.return=m,E)}function l(m,E,y,w){var P=y.type;return P===Er?d(m,E,y.props.children,w,y.key):E!==null&&(E.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===dn&&Of(P)===E.type)?(w=i(E,y.props),w.ref=oi(m,E,y),w.return=m,w):(w=ea(y.type,y.key,y.props,null,m.mode,w),w.ref=oi(m,E,y),w.return=m,w)}function c(m,E,y,w){return E===null||E.tag!==4||E.stateNode.containerInfo!==y.containerInfo||E.stateNode.implementation!==y.implementation?(E=Hs(y,m.mode,w),E.return=m,E):(E=i(E,y.children||[]),E.return=m,E)}function d(m,E,y,w,P){return E===null||E.tag!==7?(E=Qn(y,m.mode,w,P),E.return=m,E):(E=i(E,y),E.return=m,E)}function f(m,E,y){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Fs(""+E,m.mode,y),E.return=m,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ku:return y=ea(E.type,E.key,E.props,null,m.mode,y),y.ref=oi(m,null,E),y.return=m,y;case gr:return E=Hs(E,m.mode,y),E.return=m,E;case dn:var w=E._init;return f(m,w(E._payload),y)}if(Ti(E)||ii(E))return E=Qn(E,m.mode,y,null),E.return=m,E;Pu(m,E)}return null}function h(m,E,y,w){var P=E!==null?E.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return P!==null?null:s(m,E,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ku:return y.key===P?l(m,E,y,w):null;case gr:return y.key===P?c(m,E,y,w):null;case dn:return P=y._init,h(m,E,P(y._payload),w)}if(Ti(y)||ii(y))return P!==null?null:d(m,E,y,w,null);Pu(m,y)}return null}function p(m,E,y,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(y)||null,s(E,m,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ku:return m=m.get(w.key===null?y:w.key)||null,l(E,m,w,P);case gr:return m=m.get(w.key===null?y:w.key)||null,c(E,m,w,P);case dn:var x=w._init;return p(m,E,y,x(w._payload),P)}if(Ti(w)||ii(w))return m=m.get(y)||null,d(E,m,w,P,null);Pu(E,w)}return null}function T(m,E,y,w){for(var P=null,x=null,F=E,H=E=0,K=null;F!==null&&H<y.length;H++){F.index>H?(K=F,F=null):K=F.sibling;var I=h(m,F,y[H],w);if(I===null){F===null&&(F=K);break}e&&F&&I.alternate===null&&t(m,F),E=u(I,E,H),x===null?P=I:x.sibling=I,x=I,F=K}if(H===y.length)return n(m,F),Ee&&Hn(m,H),P;if(F===null){for(;H<y.length;H++)F=f(m,y[H],w),F!==null&&(E=u(F,E,H),x===null?P=F:x.sibling=F,x=F);return Ee&&Hn(m,H),P}for(F=r(m,F);H<y.length;H++)K=p(F,m,H,y[H],w),K!==null&&(e&&K.alternate!==null&&F.delete(K.key===null?H:K.key),E=u(K,E,H),x===null?P=K:x.sibling=K,x=K);return e&&F.forEach(function(V){return t(m,V)}),Ee&&Hn(m,H),P}function C(m,E,y,w){var P=ii(y);if(typeof P!="function")throw Error(M(150));if(y=P.call(y),y==null)throw Error(M(151));for(var x=P=null,F=E,H=E=0,K=null,I=y.next();F!==null&&!I.done;H++,I=y.next()){F.index>H?(K=F,F=null):K=F.sibling;var V=h(m,F,I.value,w);if(V===null){F===null&&(F=K);break}e&&F&&V.alternate===null&&t(m,F),E=u(V,E,H),x===null?P=V:x.sibling=V,x=V,F=K}if(I.done)return n(m,F),Ee&&Hn(m,H),P;if(F===null){for(;!I.done;H++,I=y.next())I=f(m,I.value,w),I!==null&&(E=u(I,E,H),x===null?P=I:x.sibling=I,x=I);return Ee&&Hn(m,H),P}for(F=r(m,F);!I.done;H++,I=y.next())I=p(F,m,H,I.value,w),I!==null&&(e&&I.alternate!==null&&F.delete(I.key===null?H:I.key),E=u(I,E,H),x===null?P=I:x.sibling=I,x=I);return e&&F.forEach(function(Y){return t(m,Y)}),Ee&&Hn(m,H),P}function N(m,E,y,w){if(typeof y=="object"&&y!==null&&y.type===Er&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ku:e:{for(var P=y.key,x=E;x!==null;){if(x.key===P){if(P=y.type,P===Er){if(x.tag===7){n(m,x.sibling),E=i(x,y.props.children),E.return=m,m=E;break e}}else if(x.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===dn&&Of(P)===x.type){n(m,x.sibling),E=i(x,y.props),E.ref=oi(m,x,y),E.return=m,m=E;break e}n(m,x);break}else t(m,x);x=x.sibling}y.type===Er?(E=Qn(y.props.children,m.mode,w,y.key),E.return=m,m=E):(w=ea(y.type,y.key,y.props,null,m.mode,w),w.ref=oi(m,E,y),w.return=m,m=w)}return a(m);case gr:e:{for(x=y.key;E!==null;){if(E.key===x)if(E.tag===4&&E.stateNode.containerInfo===y.containerInfo&&E.stateNode.implementation===y.implementation){n(m,E.sibling),E=i(E,y.children||[]),E.return=m,m=E;break e}else{n(m,E);break}else t(m,E);E=E.sibling}E=Hs(y,m.mode,w),E.return=m,m=E}return a(m);case dn:return x=y._init,N(m,E,x(y._payload),w)}if(Ti(y))return T(m,E,y,w);if(ii(y))return C(m,E,y,w);Pu(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,E!==null&&E.tag===6?(n(m,E.sibling),E=i(E,y),E.return=m,m=E):(n(m,E),E=Fs(y,m.mode,w),E.return=m,m=E),a(m)):n(m,E)}return N}var Hr=$h(!0),Gh=$h(!1),ya=On(null),_a=null,Sr=null,jo=null;function Vo(){jo=Sr=_a=null}function Wo(e){var t=ya.current;me(ya),e._currentValue=t}function Ll(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Lr(e,t){_a=e,jo=Sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(tt=!0),e.firstContext=null)}function bt(e){var t=e._currentValue;if(jo!==e)if(e={context:e,memoizedValue:t,next:null},Sr===null){if(_a===null)throw Error(M(308));Sr=e,_a.dependencies={lanes:0,firstContext:e}}else Sr=Sr.next=e;return t}var Wn=null;function Yo(e){Wn===null?Wn=[e]:Wn.push(e)}function qh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Yo(t)):(n.next=i.next,i.next=n),t.interleaved=n,tn(e,r)}function tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var hn=!1;function Xo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function An(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,tn(e,n)}return i=r.interleaved,i===null?(t.next=t,Yo(r)):(t.next=i.next,i.next=t),r.interleaved=t,tn(e,n)}function Qu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ro(e,n)}}function Pf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?i=u=a:u=u.next=a,n=n.next}while(n!==null);u===null?i=u=t:u=u.next=t}else i=u=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ba(e,t,n,r){var i=e.updateQueue;hn=!1;var u=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?u=c:a.next=c,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(u!==null){var f=i.baseState;a=0,d=c=l=null,s=u;do{var h=s.lane,p=s.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var T=e,C=s;switch(h=t,p=n,C.tag){case 1:if(T=C.payload,typeof T=="function"){f=T.call(p,f,h);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=C.payload,h=typeof T=="function"?T.call(p,f,h):T,h==null)break e;f=_e({},f,h);break e;case 2:hn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else p={eventTime:p,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,a|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else u===null&&(i.shared.lanes=0);er|=a,e.lanes=a,e.memoizedState=f}}function Lf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var hu={},jt=On(hu),Gi=On(hu),qi=On(hu);function Yn(e){if(e===hu)throw Error(M(174));return e}function Ko(e,t){switch(de(qi,t),de(Gi,e),de(jt,hu),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pl(t,e)}me(jt),de(jt,t)}function Ur(){me(jt),me(Gi),me(qi)}function Zh(e){Yn(qi.current);var t=Yn(jt.current),n=pl(t,e.type);t!==n&&(de(Gi,e),de(jt,n))}function Qo(e){Gi.current===e&&(me(jt),me(Gi))}var Te=On(0);function ka(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Os=[];function $o(){for(var e=0;e<Os.length;e++)Os[e]._workInProgressVersionPrimary=null;Os.length=0}var $u=rn.ReactCurrentDispatcher,Ps=rn.ReactCurrentBatchConfig,Zn=0,ye=null,Re=null,Le=null,Ca=!1,xi=!1,Ji=0,fE=0;function Ue(){throw Error(M(321))}function Go(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ot(e[n],t[n]))return!1;return!0}function qo(e,t,n,r,i,u){if(Zn=u,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$u.current=e===null||e.memoizedState===null?mE:gE,e=n(r,i),xi){u=0;do{if(xi=!1,Ji=0,25<=u)throw Error(M(301));u+=1,Le=Re=null,t.updateQueue=null,$u.current=EE,e=n(r,i)}while(xi)}if($u.current=Aa,t=Re!==null&&Re.next!==null,Zn=0,Le=Re=ye=null,Ca=!1,t)throw Error(M(300));return e}function Jo(){var e=Ji!==0;return Ji=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ye.memoizedState=Le=e:Le=Le.next=e,Le}function kt(){if(Re===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Le===null?ye.memoizedState:Le.next;if(t!==null)Le=t,Re=e;else{if(e===null)throw Error(M(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Le===null?ye.memoizedState=Le=e:Le=Le.next=e}return Le}function Zi(e,t){return typeof t=="function"?t(e):t}function Ls(e){var t=kt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=Re,i=r.baseQueue,u=n.pending;if(u!==null){if(i!==null){var a=i.next;i.next=u.next,u.next=a}r.baseQueue=i=u,n.pending=null}if(i!==null){u=i.next,r=r.baseState;var s=a=null,l=null,c=u;do{var d=c.lane;if((Zn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=f,a=r):l=l.next=f,ye.lanes|=d,er|=d}c=c.next}while(c!==null&&c!==u);l===null?a=r:l.next=s,Ot(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do u=i.lane,ye.lanes|=u,er|=u,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ds(e){var t=kt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,u=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do u=e(u,a.action),a=a.next;while(a!==i);Ot(u,t.memoizedState)||(tt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,r]}function ep(){}function tp(e,t){var n=ye,r=kt(),i=t(),u=!Ot(r.memoizedState,i);if(u&&(r.memoizedState=i,tt=!0),r=r.queue,Zo(ip.bind(null,n,r,e),[e]),r.getSnapshot!==t||u||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,eu(9,rp.bind(null,n,r,i,t),void 0,null),Me===null)throw Error(M(349));Zn&30||np(n,t,i)}return i}function np(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rp(e,t,n,r){t.value=n,t.getSnapshot=r,up(t)&&ap(e)}function ip(e,t,n){return n(function(){up(t)&&ap(e)})}function up(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ot(e,n)}catch{return!0}}function ap(e){var t=tn(e,1);t!==null&&wt(t,e,1,-1)}function Df(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},t.queue=e,e=e.dispatch=pE.bind(null,ye,e),[t.memoizedState,e]}function eu(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function sp(){return kt().memoizedState}function Gu(e,t,n,r){var i=Mt();ye.flags|=e,i.memoizedState=eu(1|t,n,void 0,r===void 0?null:r)}function Wa(e,t,n,r){var i=kt();r=r===void 0?null:r;var u=void 0;if(Re!==null){var a=Re.memoizedState;if(u=a.destroy,r!==null&&Go(r,a.deps)){i.memoizedState=eu(t,n,u,r);return}}ye.flags|=e,i.memoizedState=eu(1|t,n,u,r)}function Mf(e,t){return Gu(8390656,8,e,t)}function Zo(e,t){return Wa(2048,8,e,t)}function lp(e,t){return Wa(4,2,e,t)}function op(e,t){return Wa(4,4,e,t)}function cp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fp(e,t,n){return n=n!=null?n.concat([e]):null,Wa(4,4,cp.bind(null,t,e),n)}function ec(){}function dp(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hp(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pp(e,t,n){return Zn&21?(Ot(n,t)||(n=yh(),ye.lanes|=n,er|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n)}function dE(e,t){var n=ae;ae=n!==0&&4>n?n:4,e(!0);var r=Ps.transition;Ps.transition={};try{e(!1),t()}finally{ae=n,Ps.transition=r}}function mp(){return kt().memoizedState}function hE(e,t,n){var r=Nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gp(e))Ep(t,n);else if(n=qh(e,t,n,r),n!==null){var i=$e();wt(n,e,r,i),Tp(n,t,r)}}function pE(e,t,n){var r=Nn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gp(e))Ep(t,i);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var a=t.lastRenderedState,s=u(a,n);if(i.hasEagerState=!0,i.eagerState=s,Ot(s,a)){var l=t.interleaved;l===null?(i.next=i,Yo(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=qh(e,t,i,r),n!==null&&(i=$e(),wt(n,e,r,i),Tp(n,t,r))}}function gp(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function Ep(e,t){xi=Ca=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ro(e,n)}}var Aa={readContext:bt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},mE={readContext:bt,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:bt,useEffect:Mf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Gu(4194308,4,cp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gu(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gu(4,2,e,t)},useMemo:function(e,t){var n=Mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hE.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:Df,useDebugValue:ec,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=Df(!1),t=e[0];return e=dE.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,i=Mt();if(Ee){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),Me===null)throw Error(M(349));Zn&30||np(r,t,n)}i.memoizedState=n;var u={value:n,getSnapshot:t};return i.queue=u,Mf(ip.bind(null,r,u,e),[e]),r.flags|=2048,eu(9,rp.bind(null,r,u,n,t),void 0,null),n},useId:function(){var e=Mt(),t=Me.identifierPrefix;if(Ee){var n=qt,r=Gt;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ji++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=fE++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gE={readContext:bt,useCallback:dp,useContext:bt,useEffect:Zo,useImperativeHandle:fp,useInsertionEffect:lp,useLayoutEffect:op,useMemo:hp,useReducer:Ls,useRef:sp,useState:function(){return Ls(Zi)},useDebugValue:ec,useDeferredValue:function(e){var t=kt();return pp(t,Re.memoizedState,e)},useTransition:function(){var e=Ls(Zi)[0],t=kt().memoizedState;return[e,t]},useMutableSource:ep,useSyncExternalStore:tp,useId:mp,unstable_isNewReconciler:!1},EE={readContext:bt,useCallback:dp,useContext:bt,useEffect:Zo,useImperativeHandle:fp,useInsertionEffect:lp,useLayoutEffect:op,useMemo:hp,useReducer:Ds,useRef:sp,useState:function(){return Ds(Zi)},useDebugValue:ec,useDeferredValue:function(e){var t=kt();return Re===null?t.memoizedState=e:pp(t,Re.memoizedState,e)},useTransition:function(){var e=Ds(Zi)[0],t=kt().memoizedState;return[e,t]},useMutableSource:ep,useSyncExternalStore:tp,useId:mp,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=_e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Dl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:_e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ya={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$e(),i=Nn(e),u=Jt(r,i);u.payload=t,n!=null&&(u.callback=n),t=An(e,u,i),t!==null&&(wt(t,e,i,r),Qu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$e(),i=Nn(e),u=Jt(r,i);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=An(e,u,i),t!==null&&(wt(t,e,i,r),Qu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$e(),r=Nn(e),i=Jt(n,r);i.tag=2,t!=null&&(i.callback=t),t=An(e,i,r),t!==null&&(wt(t,e,r,n),Qu(t,e,r))}};function Bf(e,t,n,r,i,u,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,a):t.prototype&&t.prototype.isPureReactComponent?!Xi(n,r)||!Xi(i,u):!0}function yp(e,t,n){var r=!1,i=wn,u=t.contextType;return typeof u=="object"&&u!==null?u=bt(u):(i=rt(t)?qn:We.current,r=t.contextTypes,u=(r=r!=null)?Br(e,i):wn),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ya,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=u),t}function Ff(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ya.enqueueReplaceState(t,t.state,null)}function Ml(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Xo(e);var u=t.contextType;typeof u=="object"&&u!==null?i.context=bt(u):(u=rt(t)?qn:We.current,i.context=Br(e,u)),i.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Dl(e,t,u,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ya.enqueueReplaceState(i,i.state,null),ba(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function zr(e,t){try{var n="",r=t;do n+=Yg(r),r=r.return;while(r);var i=n}catch(u){i=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:i,digest:null}}function Ms(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var TE=typeof WeakMap=="function"?WeakMap:Map;function _p(e,t,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Na||(Na=!0,Kl=r),Bl(e,t)},n}function bp(e,t,n){n=Jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Bl(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){Bl(e,t),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Hf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new TE;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=OE.bind(null,e,t,n),t.then(e,e))}function Uf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Jt(-1,1),t.tag=2,An(n,t,1))),n.lanes|=1),e)}var yE=rn.ReactCurrentOwner,tt=!1;function Ke(e,t,n,r){t.child=e===null?Gh(t,null,n,r):Hr(t,e.child,n,r)}function jf(e,t,n,r,i){n=n.render;var u=t.ref;return Lr(t,i),r=qo(e,t,n,r,u,i),n=Jo(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(Ee&&n&&Ho(t),t.flags|=1,Ke(e,t,r,i),t.child)}function Vf(e,t,n,r,i){if(e===null){var u=n.type;return typeof u=="function"&&!lc(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=u,kp(e,t,u,r,i)):(e=ea(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!(e.lanes&i)){var a=u.memoizedProps;if(n=n.compare,n=n!==null?n:Xi,n(a,r)&&e.ref===t.ref)return nn(e,t,i)}return t.flags|=1,e=xn(u,r),e.ref=t.ref,e.return=t,t.child=e}function kp(e,t,n,r,i){if(e!==null){var u=e.memoizedProps;if(Xi(u,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=u,(e.lanes&i)!==0)e.flags&131072&&(tt=!0);else return t.lanes=e.lanes,nn(e,t,i)}return Fl(e,t,n,r,i)}function Cp(e,t,n){var r=t.pendingProps,i=r.children,u=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(xr,lt),lt|=n;else{if(!(n&1073741824))return e=u!==null?u.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(xr,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=u!==null?u.baseLanes:n,de(xr,lt),lt|=r}else u!==null?(r=u.baseLanes|n,t.memoizedState=null):r=n,de(xr,lt),lt|=r;return Ke(e,t,i,n),t.child}function Ap(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fl(e,t,n,r,i){var u=rt(n)?qn:We.current;return u=Br(t,u),Lr(t,i),n=qo(e,t,n,r,u,i),r=Jo(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(Ee&&r&&Ho(t),t.flags|=1,Ke(e,t,n,i),t.child)}function Wf(e,t,n,r,i){if(rt(n)){var u=!0;ga(t)}else u=!1;if(Lr(t,i),t.stateNode===null)qu(e,t),yp(t,n,r),Ml(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=bt(c):(c=rt(n)?qn:We.current,c=Br(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==c)&&Ff(t,a,r,c),hn=!1;var h=t.memoizedState;a.state=h,ba(t,r,a,i),l=t.memoizedState,s!==r||h!==l||nt.current||hn?(typeof d=="function"&&(Dl(t,n,d,r),l=t.memoizedState),(s=hn||Bf(t,n,s,r,h,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Jh(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Nt(t.type,s),a.props=c,f=t.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=bt(l):(l=rt(n)?qn:We.current,l=Br(t,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||h!==l)&&Ff(t,a,r,l),hn=!1,h=t.memoizedState,a.state=h,ba(t,r,a,i);var T=t.memoizedState;s!==f||h!==T||nt.current||hn?(typeof p=="function"&&(Dl(t,n,p,r),T=t.memoizedState),(c=hn||Bf(t,n,c,r,h,T,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,T,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,T,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=T),a.props=r,a.state=T,a.context=l,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Hl(e,t,n,r,u,i)}function Hl(e,t,n,r,i,u){Ap(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&vf(t,n,!1),nn(e,t,u);r=t.stateNode,yE.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Hr(t,e.child,null,u),t.child=Hr(t,null,s,u)):Ke(e,t,s,u),t.memoizedState=r.state,i&&vf(t,n,!0),t.child}function Sp(e){var t=e.stateNode;t.pendingContext?If(e,t.pendingContext,t.pendingContext!==t.context):t.context&&If(e,t.context,!1),Ko(e,t.containerInfo)}function Yf(e,t,n,r,i){return Fr(),zo(i),t.flags|=256,Ke(e,t,n,r),t.child}var Ul={dehydrated:null,treeContext:null,retryLane:0};function zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Np(e,t,n){var r=t.pendingProps,i=Te.current,u=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),de(Te,i&1),e===null)return Pl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,u?(r=t.mode,u=t.child,a={mode:"hidden",children:a},!(r&1)&&u!==null?(u.childLanes=0,u.pendingProps=a):u=Qa(a,r,0,null),e=Qn(e,r,n,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=zl(n),t.memoizedState=Ul,e):tc(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return _E(e,t,a,r,s,i,n);if(u){u=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=xn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?u=xn(s,u):(u=Qn(u,a,n,null),u.flags|=2),u.return=t,r.return=t,r.sibling=u,t.child=r,r=u,u=t.child,a=e.child.memoizedState,a=a===null?zl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},u.memoizedState=a,u.childLanes=e.childLanes&~n,t.memoizedState=Ul,r}return u=e.child,e=u.sibling,r=xn(u,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function tc(e,t){return t=Qa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lu(e,t,n,r){return r!==null&&zo(r),Hr(t,e.child,null,n),e=tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _E(e,t,n,r,i,u,a){if(n)return t.flags&256?(t.flags&=-257,r=Ms(Error(M(422))),Lu(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=r.fallback,i=t.mode,r=Qa({mode:"visible",children:r.children},i,0,null),u=Qn(u,i,a,null),u.flags|=2,r.return=t,u.return=t,r.sibling=u,t.child=r,t.mode&1&&Hr(t,e.child,null,a),t.child.memoizedState=zl(a),t.memoizedState=Ul,u);if(!(t.mode&1))return Lu(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,u=Error(M(419)),r=Ms(u,r,void 0),Lu(e,t,a,r)}if(s=(a&e.childLanes)!==0,tt||s){if(r=Me,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==u.retryLane&&(u.retryLane=i,tn(e,i),wt(r,e,i,-1))}return sc(),r=Ms(Error(M(421))),Lu(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=PE.bind(null,e),i._reactRetry=t,null):(e=u.treeContext,ot=Cn(i.nextSibling),ct=t,Ee=!0,It=null,e!==null&&(mt[gt++]=Gt,mt[gt++]=qt,mt[gt++]=Jn,Gt=e.id,qt=e.overflow,Jn=t),t=tc(t,r.children),t.flags|=4096,t)}function Xf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ll(e.return,t,n)}function Bs(e,t,n,r,i){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=n,u.tailMode=i)}function xp(e,t,n){var r=t.pendingProps,i=r.revealOrder,u=r.tail;if(Ke(e,t,r.children,n),r=Te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xf(e,n,t);else if(e.tag===19)Xf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(Te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ka(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bs(t,!1,i,n,u);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ka(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bs(t,!0,n,null,u);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),er|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bE(e,t,n){switch(t.tag){case 3:Sp(t),Fr();break;case 5:Zh(t);break;case 1:rt(t.type)&&ga(t);break;case 4:Ko(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;de(ya,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(Te,Te.current&1),t.flags|=128,null):n&t.child.childLanes?Np(e,t,n):(de(Te,Te.current&1),e=nn(e,t,n),e!==null?e.sibling:null);de(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,Cp(e,t,n)}return nn(e,t,n)}var Ip,jl,vp,wp;Ip=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jl=function(){};vp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yn(jt.current);var u=null;switch(n){case"input":i=cl(e,i),r=cl(e,r),u=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),u=[];break;case"textarea":i=hl(e,i),r=hl(e,r),u=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pa)}ml(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Hi.hasOwnProperty(c)?u||(u=[]):(u=u||[]).push(c,null));for(c in r){var l=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(u||(u=[]),u.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(u=u||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(u=u||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Hi.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pe("scroll",e),u||s===l||(u=[])):(u=u||[]).push(c,l))}n&&(u=u||[]).push("style",n);var c=u;(t.updateQueue=c)&&(t.flags|=4)}};wp=function(e,t,n,r){n!==r&&(t.flags|=4)};function ci(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kE(e,t,n){var r=t.pendingProps;switch(Uo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return rt(t.type)&&ma(),ze(t),null;case 3:return r=t.stateNode,Ur(),me(nt),me(We),$o(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ou(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,It!==null&&(Gl(It),It=null))),jl(e,t),ze(t),null;case 5:Qo(t);var i=Yn(qi.current);if(n=t.type,e!==null&&t.stateNode!=null)vp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return ze(t),null}if(e=Yn(jt.current),Ou(t)){r=t.stateNode,n=t.type;var u=t.memoizedProps;switch(r[Ut]=t,r[$i]=u,e=(t.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<_i.length;i++)pe(_i[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":ef(r,u),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!u.multiple},pe("invalid",r);break;case"textarea":nf(r,u),pe("invalid",r)}ml(n,u),i=null;for(var a in u)if(u.hasOwnProperty(a)){var s=u[a];a==="children"?typeof s=="string"?r.textContent!==s&&(u.suppressHydrationWarning!==!0&&Ru(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(u.suppressHydrationWarning!==!0&&Ru(r.textContent,s,e),i=["children",""+s]):Hi.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&pe("scroll",r)}switch(n){case"input":Cu(r),tf(r,u,!0);break;case"textarea":Cu(r),rf(r);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(r.onclick=pa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ih(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ut]=t,e[$i]=r,Ip(e,t,!1,!1),t.stateNode=e;e:{switch(a=gl(n,r),n){case"dialog":pe("cancel",e),pe("close",e),i=r;break;case"iframe":case"object":case"embed":pe("load",e),i=r;break;case"video":case"audio":for(i=0;i<_i.length;i++)pe(_i[i],e);i=r;break;case"source":pe("error",e),i=r;break;case"img":case"image":case"link":pe("error",e),pe("load",e),i=r;break;case"details":pe("toggle",e),i=r;break;case"input":ef(e,r),i=cl(e,r),pe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),pe("invalid",e);break;case"textarea":nf(e,r),i=hl(e,r),pe("invalid",e);break;default:i=r}ml(n,i),s=i;for(u in s)if(s.hasOwnProperty(u)){var l=s[u];u==="style"?sh(e,l):u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&uh(e,l)):u==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ui(e,l):typeof l=="number"&&Ui(e,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hi.hasOwnProperty(u)?l!=null&&u==="onScroll"&&pe("scroll",e):l!=null&&So(e,u,l,a))}switch(n){case"input":Cu(e),tf(e,r,!1);break;case"textarea":Cu(e),rf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,u=r.value,u!=null?wr(e,!!r.multiple,u,!1):r.defaultValue!=null&&wr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=pa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)wp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=Yn(qi.current),Yn(jt.current),Ou(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ut]=t,(u=r.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:Ru(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ru(r.nodeValue,n,(e.mode&1)!==0)}u&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ut]=t,t.stateNode=r}return ze(t),null;case 13:if(me(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&ot!==null&&t.mode&1&&!(t.flags&128))Qh(),Fr(),t.flags|=98560,u=!1;else if(u=Ou(t),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(M(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(M(317));u[Ut]=t}else Fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),u=!1}else It!==null&&(Gl(It),It=null),u=!0;if(!u)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Te.current&1?Oe===0&&(Oe=3):sc())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Ur(),jl(e,t),e===null&&Ki(t.stateNode.containerInfo),ze(t),null;case 10:return Wo(t.type._context),ze(t),null;case 17:return rt(t.type)&&ma(),ze(t),null;case 19:if(me(Te),u=t.memoizedState,u===null)return ze(t),null;if(r=(t.flags&128)!==0,a=u.rendering,a===null)if(r)ci(u,!1);else{if(Oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ka(e),a!==null){for(t.flags|=128,ci(u,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)u=n,e=r,u.flags&=14680066,a=u.alternate,a===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=a.childLanes,u.lanes=a.lanes,u.child=a.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=a.memoizedProps,u.memoizedState=a.memoizedState,u.updateQueue=a.updateQueue,u.type=a.type,e=a.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(Te,Te.current&1|2),t.child}e=e.sibling}u.tail!==null&&Ae()>jr&&(t.flags|=128,r=!0,ci(u,!1),t.lanes=4194304)}else{if(!r)if(e=ka(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ci(u,!0),u.tail===null&&u.tailMode==="hidden"&&!a.alternate&&!Ee)return ze(t),null}else 2*Ae()-u.renderingStartTime>jr&&n!==1073741824&&(t.flags|=128,r=!0,ci(u,!1),t.lanes=4194304);u.isBackwards?(a.sibling=t.child,t.child=a):(n=u.last,n!==null?n.sibling=a:t.child=a,u.last=a)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Ae(),t.sibling=null,n=Te.current,de(Te,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return ac(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?lt&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function CE(e,t){switch(Uo(t),t.tag){case 1:return rt(t.type)&&ma(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ur(),me(nt),me(We),$o(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qo(t),null;case 13:if(me(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(Te),null;case 4:return Ur(),null;case 10:return Wo(t.type._context),null;case 22:case 23:return ac(),null;case 24:return null;default:return null}}var Du=!1,je=!1,AE=typeof WeakSet=="function"?WeakSet:Set,W=null;function Nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(e,t,r)}else n.current=null}function Vl(e,t,n){try{n()}catch(r){be(e,t,r)}}var Kf=!1;function SE(e,t){if(Nl=fa,e=Dh(),Fo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,c=0,d=0,f=e,h=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(s=a+i),f!==u||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===e)break t;if(h===n&&++c===i&&(s=a),h===u&&++d===r&&(l=a),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xl={focusedElem:e,selectionRange:n},fa=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var T=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var C=T.memoizedProps,N=T.memoizedState,m=t.stateNode,E=m.getSnapshotBeforeUpdate(t.elementType===t.type?C:Nt(t.type,C),N);m.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(w){be(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return T=Kf,Kf=!1,T}function Ii(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var u=i.destroy;i.destroy=void 0,u!==void 0&&Vl(t,n,u)}i=i.next}while(i!==r)}}function Xa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rp(e){var t=e.alternate;t!==null&&(e.alternate=null,Rp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ut],delete t[$i],delete t[wl],delete t[sE],delete t[lE])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Op(e){return e.tag===5||e.tag===3||e.tag===4}function Qf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Op(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pa));else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}function Xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}var Be=null,xt=!1;function ln(e,t,n){for(n=n.child;n!==null;)Pp(e,t,n),n=n.sibling}function Pp(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Fa,n)}catch{}switch(n.tag){case 5:je||Nr(n,t);case 6:var r=Be,i=xt;Be=null,ln(e,t,n),Be=r,xt=i,Be!==null&&(xt?(e=Be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(xt?(e=Be,n=n.stateNode,e.nodeType===8?ws(e.parentNode,n):e.nodeType===1&&ws(e,n),Wi(e)):ws(Be,n.stateNode));break;case 4:r=Be,i=xt,Be=n.stateNode.containerInfo,xt=!0,ln(e,t,n),Be=r,xt=i;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var u=i,a=u.destroy;u=u.tag,a!==void 0&&(u&2||u&4)&&Vl(n,t,a),i=i.next}while(i!==r)}ln(e,t,n);break;case 1:if(!je&&(Nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){be(n,t,s)}ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,ln(e,t,n),je=r):ln(e,t,n);break;default:ln(e,t,n)}}function $f(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new AE),t.forEach(function(r){var i=LE.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function St(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var u=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Be=s.stateNode,xt=!1;break e;case 3:Be=s.stateNode.containerInfo,xt=!0;break e;case 4:Be=s.stateNode.containerInfo,xt=!0;break e}s=s.return}if(Be===null)throw Error(M(160));Pp(u,a,i),Be=null,xt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){be(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lp(t,e),t=t.sibling}function Lp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(t,e),Dt(e),r&4){try{Ii(3,e,e.return),Xa(3,e)}catch(C){be(e,e.return,C)}try{Ii(5,e,e.return)}catch(C){be(e,e.return,C)}}break;case 1:St(t,e),Dt(e),r&512&&n!==null&&Nr(n,n.return);break;case 5:if(St(t,e),Dt(e),r&512&&n!==null&&Nr(n,n.return),e.flags&32){var i=e.stateNode;try{Ui(i,"")}catch(C){be(e,e.return,C)}}if(r&4&&(i=e.stateNode,i!=null)){var u=e.memoizedProps,a=n!==null?n.memoizedProps:u,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&u.type==="radio"&&u.name!=null&&nh(i,u),gl(s,a);var c=gl(s,u);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?sh(i,f):d==="dangerouslySetInnerHTML"?uh(i,f):d==="children"?Ui(i,f):So(i,d,f,c)}switch(s){case"input":fl(i,u);break;case"textarea":rh(i,u);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!u.multiple;var p=u.value;p!=null?wr(i,!!u.multiple,p,!1):h!==!!u.multiple&&(u.defaultValue!=null?wr(i,!!u.multiple,u.defaultValue,!0):wr(i,!!u.multiple,u.multiple?[]:"",!1))}i[$i]=u}catch(C){be(e,e.return,C)}}break;case 6:if(St(t,e),Dt(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,u=e.memoizedProps;try{i.nodeValue=u}catch(C){be(e,e.return,C)}}break;case 3:if(St(t,e),Dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wi(t.containerInfo)}catch(C){be(e,e.return,C)}break;case 4:St(t,e),Dt(e);break;case 13:St(t,e),Dt(e),i=e.child,i.flags&8192&&(u=i.memoizedState!==null,i.stateNode.isHidden=u,!u||i.alternate!==null&&i.alternate.memoizedState!==null||(ic=Ae())),r&4&&$f(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(je=(c=je)||d,St(t,e),je=c):St(t,e),Dt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(W=e,d=e.child;d!==null;){for(f=W=d;W!==null;){switch(h=W,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ii(4,h,h.return);break;case 1:Nr(h,h.return);var T=h.stateNode;if(typeof T.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,T.props=t.memoizedProps,T.state=t.memoizedState,T.componentWillUnmount()}catch(C){be(r,n,C)}}break;case 5:Nr(h,h.return);break;case 22:if(h.memoizedState!==null){qf(f);continue}}p!==null?(p.return=h,W=p):qf(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(s=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=ah("display",a))}catch(C){be(e,e.return,C)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(C){be(e,e.return,C)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:St(t,e),Dt(e),r&4&&$f(e);break;case 21:break;default:St(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Op(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ui(i,""),r.flags&=-33);var u=Qf(e);Xl(e,u,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Qf(e);Yl(e,s,a);break;default:throw Error(M(161))}}catch(l){be(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function NE(e,t,n){W=e,Dp(e)}function Dp(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,u=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Du;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||je;s=Du;var c=je;if(Du=a,(je=l)&&!c)for(W=i;W!==null;)a=W,l=a.child,a.tag===22&&a.memoizedState!==null?Jf(i):l!==null?(l.return=a,W=l):Jf(i);for(;u!==null;)W=u,Dp(u),u=u.sibling;W=i,Du=s,je=c}Gf(e)}else i.subtreeFlags&8772&&u!==null?(u.return=i,W=u):Gf(e)}}function Gf(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||Xa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Nt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&Lf(t,u,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Lf(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Wi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}je||t.flags&512&&Wl(t)}catch(h){be(t,t.return,h)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function qf(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function Jf(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xa(4,t)}catch(l){be(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){be(t,i,l)}}var u=t.return;try{Wl(t)}catch(l){be(t,u,l)}break;case 5:var a=t.return;try{Wl(t)}catch(l){be(t,a,l)}}}catch(l){be(t,t.return,l)}if(t===e){W=null;break}var s=t.sibling;if(s!==null){s.return=t.return,W=s;break}W=t.return}}var xE=Math.ceil,Sa=rn.ReactCurrentDispatcher,nc=rn.ReactCurrentOwner,_t=rn.ReactCurrentBatchConfig,ue=0,Me=null,ve=null,Fe=0,lt=0,xr=On(0),Oe=0,tu=null,er=0,Ka=0,rc=0,vi=null,et=null,ic=0,jr=1/0,Kt=null,Na=!1,Kl=null,Sn=null,Mu=!1,En=null,xa=0,wi=0,Ql=null,Ju=-1,Zu=0;function $e(){return ue&6?Ae():Ju!==-1?Ju:Ju=Ae()}function Nn(e){return e.mode&1?ue&2&&Fe!==0?Fe&-Fe:cE.transition!==null?(Zu===0&&(Zu=yh()),Zu):(e=ae,e!==0||(e=window.event,e=e===void 0?16:Nh(e.type)),e):1}function wt(e,t,n,r){if(50<wi)throw wi=0,Ql=null,Error(M(185));cu(e,n,r),(!(ue&2)||e!==Me)&&(e===Me&&(!(ue&2)&&(Ka|=n),Oe===4&&mn(e,Fe)),it(e,r),n===1&&ue===0&&!(t.mode&1)&&(jr=Ae()+500,Va&&Pn()))}function it(e,t){var n=e.callbackNode;c2(e,t);var r=ca(e,e===Me?Fe:0);if(r===0)n!==null&&sf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&sf(n),t===1)e.tag===0?oE(Zf.bind(null,e)):Yh(Zf.bind(null,e)),uE(function(){!(ue&6)&&Pn()}),n=null;else{switch(_h(r)){case 1:n=wo;break;case 4:n=Eh;break;case 16:n=oa;break;case 536870912:n=Th;break;default:n=oa}n=Vp(n,Mp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Mp(e,t){if(Ju=-1,Zu=0,ue&6)throw Error(M(327));var n=e.callbackNode;if(Dr()&&e.callbackNode!==n)return null;var r=ca(e,e===Me?Fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ia(e,r);else{t=r;var i=ue;ue|=2;var u=Fp();(Me!==e||Fe!==t)&&(Kt=null,jr=Ae()+500,Kn(e,t));do try{wE();break}catch(s){Bp(e,s)}while(!0);Vo(),Sa.current=u,ue=i,ve!==null?t=0:(Me=null,Fe=0,t=Oe)}if(t!==0){if(t===2&&(i=bl(e),i!==0&&(r=i,t=$l(e,i))),t===1)throw n=tu,Kn(e,0),mn(e,r),it(e,Ae()),n;if(t===6)mn(e,r);else{if(i=e.current.alternate,!(r&30)&&!IE(i)&&(t=Ia(e,r),t===2&&(u=bl(e),u!==0&&(r=u,t=$l(e,u))),t===1))throw n=tu,Kn(e,0),mn(e,r),it(e,Ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:Un(e,et,Kt);break;case 3:if(mn(e,r),(r&130023424)===r&&(t=ic+500-Ae(),10<t)){if(ca(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vl(Un.bind(null,e,et,Kt),t);break}Un(e,et,Kt);break;case 4:if(mn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-vt(r);u=1<<a,a=t[a],a>i&&(i=a),r&=~u}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xE(r/1960))-r,10<r){e.timeoutHandle=vl(Un.bind(null,e,et,Kt),r);break}Un(e,et,Kt);break;case 5:Un(e,et,Kt);break;default:throw Error(M(329))}}}return it(e,Ae()),e.callbackNode===n?Mp.bind(null,e):null}function $l(e,t){var n=vi;return e.current.memoizedState.isDehydrated&&(Kn(e,t).flags|=256),e=Ia(e,t),e!==2&&(t=et,et=n,t!==null&&Gl(t)),e}function Gl(e){et===null?et=e:et.push.apply(et,e)}function IE(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],u=i.getSnapshot;i=i.value;try{if(!Ot(u(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mn(e,t){for(t&=~rc,t&=~Ka,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function Zf(e){if(ue&6)throw Error(M(327));Dr();var t=ca(e,0);if(!(t&1))return it(e,Ae()),null;var n=Ia(e,t);if(e.tag!==0&&n===2){var r=bl(e);r!==0&&(t=r,n=$l(e,r))}if(n===1)throw n=tu,Kn(e,0),mn(e,t),it(e,Ae()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Un(e,et,Kt),it(e,Ae()),null}function uc(e,t){var n=ue;ue|=1;try{return e(t)}finally{ue=n,ue===0&&(jr=Ae()+500,Va&&Pn())}}function tr(e){En!==null&&En.tag===0&&!(ue&6)&&Dr();var t=ue;ue|=1;var n=_t.transition,r=ae;try{if(_t.transition=null,ae=1,e)return e()}finally{ae=r,_t.transition=n,ue=t,!(ue&6)&&Pn()}}function ac(){lt=xr.current,me(xr)}function Kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,iE(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(Uo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ma();break;case 3:Ur(),me(nt),me(We),$o();break;case 5:Qo(r);break;case 4:Ur();break;case 13:me(Te);break;case 19:me(Te);break;case 10:Wo(r.type._context);break;case 22:case 23:ac()}n=n.return}if(Me=e,ve=e=xn(e.current,null),Fe=lt=t,Oe=0,tu=null,rc=Ka=er=0,et=vi=null,Wn!==null){for(t=0;t<Wn.length;t++)if(n=Wn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,u=n.pending;if(u!==null){var a=u.next;u.next=i,r.next=a}n.pending=r}Wn=null}return e}function Bp(e,t){do{var n=ve;try{if(Vo(),$u.current=Aa,Ca){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ca=!1}if(Zn=0,Le=Re=ye=null,xi=!1,Ji=0,nc.current=null,n===null||n.return===null){Oe=1,tu=t,ve=null;break}e:{var u=e,a=n.return,s=n,l=t;if(t=Fe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Uf(a);if(p!==null){p.flags&=-257,zf(p,a,s,u,t),p.mode&1&&Hf(u,c,t),t=p,l=c;var T=t.updateQueue;if(T===null){var C=new Set;C.add(l),t.updateQueue=C}else T.add(l);break e}else{if(!(t&1)){Hf(u,c,t),sc();break e}l=Error(M(426))}}else if(Ee&&s.mode&1){var N=Uf(a);if(N!==null){!(N.flags&65536)&&(N.flags|=256),zf(N,a,s,u,t),zo(zr(l,s));break e}}u=l=zr(l,s),Oe!==4&&(Oe=2),vi===null?vi=[u]:vi.push(u),u=a;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var m=_p(u,l,t);Pf(u,m);break e;case 1:s=l;var E=u.type,y=u.stateNode;if(!(u.flags&128)&&(typeof E.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Sn===null||!Sn.has(y)))){u.flags|=65536,t&=-t,u.lanes|=t;var w=bp(u,s,t);Pf(u,w);break e}}u=u.return}while(u!==null)}Up(n)}catch(P){t=P,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(!0)}function Fp(){var e=Sa.current;return Sa.current=Aa,e===null?Aa:e}function sc(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Me===null||!(er&268435455)&&!(Ka&268435455)||mn(Me,Fe)}function Ia(e,t){var n=ue;ue|=2;var r=Fp();(Me!==e||Fe!==t)&&(Kt=null,Kn(e,t));do try{vE();break}catch(i){Bp(e,i)}while(!0);if(Vo(),ue=n,Sa.current=r,ve!==null)throw Error(M(261));return Me=null,Fe=0,Oe}function vE(){for(;ve!==null;)Hp(ve)}function wE(){for(;ve!==null&&!t2();)Hp(ve)}function Hp(e){var t=jp(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?Up(e):ve=t,nc.current=null}function Up(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=CE(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,ve=null;return}}else if(n=kE(n,t,lt),n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);Oe===0&&(Oe=5)}function Un(e,t,n){var r=ae,i=_t.transition;try{_t.transition=null,ae=1,RE(e,t,n,r)}finally{_t.transition=i,ae=r}return null}function RE(e,t,n,r){do Dr();while(En!==null);if(ue&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var u=n.lanes|n.childLanes;if(f2(e,u),e===Me&&(ve=Me=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mu||(Mu=!0,Vp(oa,function(){return Dr(),null})),u=(n.flags&15990)!==0,n.subtreeFlags&15990||u){u=_t.transition,_t.transition=null;var a=ae;ae=1;var s=ue;ue|=4,nc.current=null,SE(e,n),Lp(n,e),q2(xl),fa=!!Nl,xl=Nl=null,e.current=n,NE(n),n2(),ue=s,ae=a,_t.transition=u}else e.current=n;if(Mu&&(Mu=!1,En=e,xa=i),u=e.pendingLanes,u===0&&(Sn=null),u2(n.stateNode),it(e,Ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Na)throw Na=!1,e=Kl,Kl=null,e;return xa&1&&e.tag!==0&&Dr(),u=e.pendingLanes,u&1?e===Ql?wi++:(wi=0,Ql=e):wi=0,Pn(),null}function Dr(){if(En!==null){var e=_h(xa),t=_t.transition,n=ae;try{if(_t.transition=null,ae=16>e?16:e,En===null)var r=!1;else{if(e=En,En=null,xa=0,ue&6)throw Error(M(331));var i=ue;for(ue|=4,W=e.current;W!==null;){var u=W,a=u.child;if(W.flags&16){var s=u.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:Ii(8,d,u)}var f=d.child;if(f!==null)f.return=d,W=f;else for(;W!==null;){d=W;var h=d.sibling,p=d.return;if(Rp(d),d===c){W=null;break}if(h!==null){h.return=p,W=h;break}W=p}}}var T=u.alternate;if(T!==null){var C=T.child;if(C!==null){T.child=null;do{var N=C.sibling;C.sibling=null,C=N}while(C!==null)}}W=u}}if(u.subtreeFlags&2064&&a!==null)a.return=u,W=a;else e:for(;W!==null;){if(u=W,u.flags&2048)switch(u.tag){case 0:case 11:case 15:Ii(9,u,u.return)}var m=u.sibling;if(m!==null){m.return=u.return,W=m;break e}W=u.return}}var E=e.current;for(W=E;W!==null;){a=W;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,W=y;else e:for(a=E;W!==null;){if(s=W,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Xa(9,s)}}catch(P){be(s,s.return,P)}if(s===a){W=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,W=w;break e}W=s.return}}if(ue=i,Pn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Fa,e)}catch{}r=!0}return r}finally{ae=n,_t.transition=t}}return!1}function ed(e,t,n){t=zr(n,t),t=_p(e,t,1),e=An(e,t,1),t=$e(),e!==null&&(cu(e,1,t),it(e,t))}function be(e,t,n){if(e.tag===3)ed(e,e,n);else for(;t!==null;){if(t.tag===3){ed(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){e=zr(n,e),e=bp(t,e,1),t=An(t,e,1),e=$e(),t!==null&&(cu(t,1,e),it(t,e));break}}t=t.return}}function OE(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(Fe&n)===n&&(Oe===4||Oe===3&&(Fe&130023424)===Fe&&500>Ae()-ic?Kn(e,0):rc|=n),it(e,t)}function zp(e,t){t===0&&(e.mode&1?(t=Nu,Nu<<=1,!(Nu&130023424)&&(Nu=4194304)):t=1);var n=$e();e=tn(e,t),e!==null&&(cu(e,t,n),it(e,n))}function PE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zp(e,n)}function LE(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),zp(e,n)}var jp;jp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return tt=!1,bE(e,t,n);tt=!!(e.flags&131072)}else tt=!1,Ee&&t.flags&1048576&&Xh(t,Ta,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qu(e,t),e=t.pendingProps;var i=Br(t,We.current);Lr(t,n),i=qo(null,t,r,e,i,n);var u=Jo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(u=!0,ga(t)):u=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xo(t),i.updater=Ya,t.stateNode=i,i._reactInternals=t,Ml(t,r,e,n),t=Hl(null,t,r,!0,u,n)):(t.tag=0,Ee&&u&&Ho(t),Ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qu(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ME(r),e=Nt(r,e),i){case 0:t=Fl(null,t,r,e,n);break e;case 1:t=Wf(null,t,r,e,n);break e;case 11:t=jf(null,t,r,e,n);break e;case 14:t=Vf(null,t,r,Nt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),Fl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),Wf(e,t,r,i,n);case 3:e:{if(Sp(t),e===null)throw Error(M(387));r=t.pendingProps,u=t.memoizedState,i=u.element,Jh(e,t),ba(t,r,null,n);var a=t.memoizedState;if(r=a.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){i=zr(Error(M(423)),t),t=Yf(e,t,r,n,i);break e}else if(r!==i){i=zr(Error(M(424)),t),t=Yf(e,t,r,n,i);break e}else for(ot=Cn(t.stateNode.containerInfo.firstChild),ct=t,Ee=!0,It=null,n=Gh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fr(),r===i){t=nn(e,t,n);break e}Ke(e,t,r,n)}t=t.child}return t;case 5:return Zh(t),e===null&&Pl(t),r=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,a=i.children,Il(r,i)?a=null:u!==null&&Il(r,u)&&(t.flags|=32),Ap(e,t),Ke(e,t,a,n),t.child;case 6:return e===null&&Pl(t),null;case 13:return Np(e,t,n);case 4:return Ko(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hr(t,null,r,n):Ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),jf(e,t,r,i,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,u=t.memoizedProps,a=i.value,de(ya,r._currentValue),r._currentValue=a,u!==null)if(Ot(u.value,a)){if(u.children===i.children&&!nt.current){t=nn(e,t,n);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var s=u.dependencies;if(s!==null){a=u.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(u.tag===1){l=Jt(-1,n&-n),l.tag=2;var c=u.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}u.lanes|=n,l=u.alternate,l!==null&&(l.lanes|=n),Ll(u.return,n,t),s.lanes|=n;break}l=l.next}}else if(u.tag===10)a=u.type===t.type?null:u.child;else if(u.tag===18){if(a=u.return,a===null)throw Error(M(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ll(a,n,t),a=u.sibling}else a=u.child;if(a!==null)a.return=u;else for(a=u;a!==null;){if(a===t){a=null;break}if(u=a.sibling,u!==null){u.return=a.return,a=u;break}a=a.return}u=a}Ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Lr(t,n),i=bt(i),r=r(i),t.flags|=1,Ke(e,t,r,n),t.child;case 14:return r=t.type,i=Nt(r,t.pendingProps),i=Nt(r.type,i),Vf(e,t,r,i,n);case 15:return kp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),qu(e,t),t.tag=1,rt(r)?(e=!0,ga(t)):e=!1,Lr(t,n),yp(t,r,i),Ml(t,r,i,n),Hl(null,t,r,!0,e,n);case 19:return xp(e,t,n);case 22:return Cp(e,t,n)}throw Error(M(156,t.tag))};function Vp(e,t){return gh(e,t)}function DE(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new DE(e,t,n,r)}function lc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ME(e){if(typeof e=="function")return lc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xo)return 11;if(e===Io)return 14}return 2}function xn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ea(e,t,n,r,i,u){var a=2;if(r=e,typeof e=="function")lc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Er:return Qn(n.children,i,u,t);case No:a=8,i|=8;break;case al:return e=yt(12,n,t,i|2),e.elementType=al,e.lanes=u,e;case sl:return e=yt(13,n,t,i),e.elementType=sl,e.lanes=u,e;case ll:return e=yt(19,n,t,i),e.elementType=ll,e.lanes=u,e;case Z0:return Qa(n,i,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q0:a=10;break e;case J0:a=9;break e;case xo:a=11;break e;case Io:a=14;break e;case dn:a=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=yt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=u,t}function Qn(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function Qa(e,t,n,r){return e=yt(22,e,r,t),e.elementType=Z0,e.lanes=n,e.stateNode={isHidden:!1},e}function Fs(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function Hs(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function BE(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ys(0),this.expirationTimes=ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function oc(e,t,n,r,i,u,a,s,l){return e=new BE(e,t,n,s,l),t===1?(t=1,u===!0&&(t|=8)):t=0,u=yt(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xo(u),e}function FE(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Wp(e){if(!e)return wn;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(rt(n))return Wh(e,n,t)}return t}function Yp(e,t,n,r,i,u,a,s,l){return e=oc(n,r,!0,e,i,u,a,s,l),e.context=Wp(null),n=e.current,r=$e(),i=Nn(n),u=Jt(r,i),u.callback=t??null,An(n,u,i),e.current.lanes=i,cu(e,i,r),it(e,r),e}function $a(e,t,n,r){var i=t.current,u=$e(),a=Nn(i);return n=Wp(n),t.context===null?t.context=n:t.pendingContext=n,t=Jt(u,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=An(i,t,a),e!==null&&(wt(e,i,a,u),Qu(e,i,a)),a}function va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function td(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cc(e,t){td(e,t),(e=e.alternate)&&td(e,t)}function HE(){return null}var Xp=typeof reportError=="function"?reportError:function(e){console.error(e)};function fc(e){this._internalRoot=e}Ga.prototype.render=fc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));$a(e,t,null,null)};Ga.prototype.unmount=fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tr(function(){$a(null,e,null,null)}),t[en]=null}};function Ga(e){this._internalRoot=e}Ga.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ch();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pn.length&&t!==0&&t<pn[n].priority;n++);pn.splice(n,0,e),n===0&&Sh(e)}};function dc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nd(){}function UE(e,t,n,r,i){if(i){if(typeof r=="function"){var u=r;r=function(){var c=va(a);u.call(c)}}var a=Yp(t,r,e,0,null,!1,!1,"",nd);return e._reactRootContainer=a,e[en]=a.current,Ki(e.nodeType===8?e.parentNode:e),tr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=va(l);s.call(c)}}var l=oc(e,0,!1,null,null,!1,!1,"",nd);return e._reactRootContainer=l,e[en]=l.current,Ki(e.nodeType===8?e.parentNode:e),tr(function(){$a(t,l,n,r)}),l}function Ja(e,t,n,r,i){var u=n._reactRootContainer;if(u){var a=u;if(typeof i=="function"){var s=i;i=function(){var l=va(a);s.call(l)}}$a(t,a,e,i)}else a=UE(n,t,e,i,r);return va(a)}bh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yi(t.pendingLanes);n!==0&&(Ro(t,n|1),it(t,Ae()),!(ue&6)&&(jr=Ae()+500,Pn()))}break;case 13:tr(function(){var r=tn(e,1);if(r!==null){var i=$e();wt(r,e,1,i)}}),cc(e,1)}};Oo=function(e){if(e.tag===13){var t=tn(e,134217728);if(t!==null){var n=$e();wt(t,e,134217728,n)}cc(e,134217728)}};kh=function(e){if(e.tag===13){var t=Nn(e),n=tn(e,t);if(n!==null){var r=$e();wt(n,e,t,r)}cc(e,t)}};Ch=function(){return ae};Ah=function(e,t){var n=ae;try{return ae=e,t()}finally{ae=n}};Tl=function(e,t,n){switch(t){case"input":if(fl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ja(r);if(!i)throw Error(M(90));th(r),fl(r,i)}}}break;case"textarea":rh(e,n);break;case"select":t=n.value,t!=null&&wr(e,!!n.multiple,t,!1)}};ch=uc;fh=tr;var zE={usingClientEntryPoint:!1,Events:[du,br,ja,lh,oh,uc]},fi={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jE={bundleType:fi.bundleType,version:fi.version,rendererPackageName:fi.rendererPackageName,rendererConfig:fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ph(e),e===null?null:e.stateNode},findFiberByHostInstance:fi.findFiberByHostInstance||HE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bu.isDisabled&&Bu.supportsFiber)try{Fa=Bu.inject(jE),zt=Bu}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zE;ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dc(t))throw Error(M(200));return FE(e,t,null,n)};ht.createRoot=function(e,t){if(!dc(e))throw Error(M(299));var n=!1,r="",i=Xp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=oc(e,1,!1,null,null,n,!1,r,i),e[en]=t.current,Ki(e.nodeType===8?e.parentNode:e),new fc(t)};ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=ph(t),e=e===null?null:e.stateNode,e};ht.flushSync=function(e){return tr(e)};ht.hydrate=function(e,t,n){if(!qa(t))throw Error(M(200));return Ja(null,e,t,!0,n)};ht.hydrateRoot=function(e,t,n){if(!dc(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,u="",a=Xp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Yp(t,null,e,1,n??null,i,!1,u,a),e[en]=t.current,Ki(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ga(t)};ht.render=function(e,t,n){if(!qa(t))throw Error(M(200));return Ja(null,e,t,!1,n)};ht.unmountComponentAtNode=function(e){if(!qa(e))throw Error(M(40));return e._reactRootContainer?(tr(function(){Ja(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};ht.unstable_batchedUpdates=uc;ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qa(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Ja(e,t,n,!1,r)};ht.version="18.3.1-next-f1338f8080-20240426";function Kp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kp)}catch(e){console.error(e)}}Kp(),K0.exports=ht;var Qp=K0.exports,$p,rd=Qp;$p=rd.createRoot,rd.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nu(){return nu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nu.apply(null,arguments)}var Tn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tn||(Tn={}));const id="popstate";function VE(e){e===void 0&&(e={});function t(r,i){let{pathname:u,search:a,hash:s}=r.location;return ql("",{pathname:u,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:wa(i)}return YE(t,n,null,e)}function Ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function hc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function WE(){return Math.random().toString(36).substr(2,8)}function ud(e,t){return{usr:e.state,key:e.key,idx:t}}function ql(e,t,n,r){return n===void 0&&(n=null),nu({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?$r(t):t,{state:n,key:t&&t.key||r||WE()})}function wa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function $r(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function YE(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:u=!1}=r,a=i.history,s=Tn.Pop,l=null,c=d();c==null&&(c=0,a.replaceState(nu({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function f(){s=Tn.Pop;let N=d(),m=N==null?null:N-c;c=N,l&&l({action:s,location:C.location,delta:m})}function h(N,m){s=Tn.Push;let E=ql(C.location,N,m);c=d()+1;let y=ud(E,c),w=C.createHref(E);try{a.pushState(y,"",w)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(w)}u&&l&&l({action:s,location:C.location,delta:1})}function p(N,m){s=Tn.Replace;let E=ql(C.location,N,m);c=d();let y=ud(E,c),w=C.createHref(E);a.replaceState(y,"",w),u&&l&&l({action:s,location:C.location,delta:0})}function T(N){let m=i.location.origin!=="null"?i.location.origin:i.location.href,E=typeof N=="string"?N:wa(N);return E=E.replace(/ $/,"%20"),Ne(m,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,m)}let C={get action(){return s},get location(){return e(i,a)},listen(N){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(id,f),l=N,()=>{i.removeEventListener(id,f),l=null}},createHref(N){return t(i,N)},createURL:T,encodeLocation(N){let m=T(N);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:p,go(N){return a.go(N)}};return C}var ad;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ad||(ad={}));function XE(e,t,n){return n===void 0&&(n="/"),KE(e,t,n)}function KE(e,t,n,r){let i=typeof t=="string"?$r(t):t,u=pc(i.pathname||"/",n);if(u==null)return null;let a=Gp(e);QE(a);let s=null,l=aT(u);for(let c=0;s==null&&c<a.length;++c)s=rT(a[c],l);return s}function Gp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(u,a,s)=>{let l={relativePath:s===void 0?u.path||"":s,caseSensitive:u.caseSensitive===!0,childrenIndex:a,route:u};l.relativePath.startsWith("/")&&(Ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=In([r,l.relativePath]),d=n.concat(l);u.children&&u.children.length>0&&(Ne(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Gp(u.children,t,d,c)),!(u.path==null&&!u.index)&&t.push({path:c,score:tT(c,u.index),routesMeta:d})};return e.forEach((u,a)=>{var s;if(u.path===""||!((s=u.path)!=null&&s.includes("?")))i(u,a);else for(let l of qp(u.path))i(u,a,l)}),t}function qp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),u=n.replace(/\?$/,"");if(r.length===0)return i?[u,""]:[u];let a=qp(r.join("/")),s=[];return s.push(...a.map(l=>l===""?u:[u,l].join("/"))),i&&s.push(...a),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function QE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:nT(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $E=/^:[\w-]+$/,GE=3,qE=2,JE=1,ZE=10,eT=-2,sd=e=>e==="*";function tT(e,t){let n=e.split("/"),r=n.length;return n.some(sd)&&(r+=eT),t&&(r+=qE),n.filter(i=>!sd(i)).reduce((i,u)=>i+($E.test(u)?GE:u===""?JE:ZE),r)}function nT(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function rT(e,t,n){let{routesMeta:r}=e,i={},u="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],c=s===r.length-1,d=u==="/"?t:t.slice(u.length)||"/",f=iT({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),h=l.route;if(!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:In([u,f.pathname]),pathnameBase:fT(In([u,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(u=In([u,f.pathnameBase]))}return a}function iT(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=uT(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let u=i[0],a=u.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:h,isOptional:p}=d;if(h==="*"){let C=s[f]||"";a=u.slice(0,u.length-C.length).replace(/(.)\/+$/,"$1")}const T=s[f];return p&&!T?c[h]=void 0:c[h]=(T||"").replace(/%2F/g,"/"),c},{}),pathname:u,pathnameBase:a,pattern:e}}function uT(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),hc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function aT(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return hc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const sT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lT=e=>sT.test(e);function oT(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?$r(e):e,u;if(n)if(lT(n))u=n;else{if(n.includes("//")){let a=n;n=Jp(n),hc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?u=ld(n.substring(1),"/"):u=ld(n,t)}else u=t;return{pathname:u,search:dT(r),hash:hT(i)}}function ld(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Us(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cT(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function mc(e,t){let n=cT(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function gc(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=$r(e):(i=nu({},e),Ne(!i.pathname||!i.pathname.includes("?"),Us("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),Us("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),Us("#","search","hash",i)));let u=e===""||i.pathname==="",a=u?"/":i.pathname,s;if(a==null)s=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}s=f>=0?t[f]:"/"}let l=oT(i,s),c=a&&a!=="/"&&a.endsWith("/"),d=(u||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Jp=e=>e.replace(/\/\/+/g,"/"),In=e=>Jp(e.join("/")),fT=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dT=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,hT=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function pT(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Zp=["post","put","patch","delete"];new Set(Zp);const mT=["get",...Zp];new Set(mT);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ru(){return ru=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ru.apply(null,arguments)}const Ec=z.createContext(null),gT=z.createContext(null),Ln=z.createContext(null),Za=z.createContext(null),un=z.createContext({outlet:null,matches:[],isDataRoute:!1}),em=z.createContext(null);function ET(e,t){let{relative:n}=t===void 0?{}:t;Gr()||Ne(!1);let{basename:r,navigator:i}=z.useContext(Ln),{hash:u,pathname:a,search:s}=im(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:In([r,a])),i.createHref({pathname:l,search:s,hash:u})}function Gr(){return z.useContext(Za)!=null}function ur(){return Gr()||Ne(!1),z.useContext(Za).location}function tm(e){z.useContext(Ln).static||z.useLayoutEffect(e)}function nm(){let{isDataRoute:e}=z.useContext(un);return e?wT():TT()}function TT(){Gr()||Ne(!1);let e=z.useContext(Ec),{basename:t,future:n,navigator:r}=z.useContext(Ln),{matches:i}=z.useContext(un),{pathname:u}=ur(),a=JSON.stringify(mc(i,n.v7_relativeSplatPath)),s=z.useRef(!1);return tm(()=>{s.current=!0}),z.useCallback(function(c,d){if(d===void 0&&(d={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let f=gc(c,JSON.parse(a),u,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:In([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,a,u,e])}function rm(){let{matches:e}=z.useContext(un),t=e[e.length-1];return t?t.params:{}}function im(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=z.useContext(Ln),{matches:i}=z.useContext(un),{pathname:u}=ur(),a=JSON.stringify(mc(i,r.v7_relativeSplatPath));return z.useMemo(()=>gc(e,JSON.parse(a),u,n==="path"),[e,a,u,n])}function yT(e,t){return _T(e,t)}function _T(e,t,n,r){Gr()||Ne(!1);let{navigator:i}=z.useContext(Ln),{matches:u}=z.useContext(un),a=u[u.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=ur(),d;if(t){var f;let N=typeof t=="string"?$r(t):t;l==="/"||(f=N.pathname)!=null&&f.startsWith(l)||Ne(!1),d=N}else d=c;let h=d.pathname||"/",p=h;if(l!=="/"){let N=l.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(N.length).join("/")}let T=XE(e,{pathname:p}),C=ST(T&&T.map(N=>Object.assign({},N,{params:Object.assign({},s,N.params),pathname:In([l,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?l:In([l,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),u,n,r);return t&&C?z.createElement(Za.Provider,{value:{location:ru({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Tn.Pop}},C):C}function bT(){let e=vT(),t=pT(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},t),n?z.createElement("pre",{style:i},n):null,null)}const kT=z.createElement(bT,null);class CT extends z.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?z.createElement(un.Provider,{value:this.props.routeContext},z.createElement(em.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function AT(e){let{routeContext:t,match:n,children:r}=e,i=z.useContext(Ec);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(un.Provider,{value:t},r)}function ST(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var u;if(!n)return null;if(n.errors)e=n.matches;else if((u=r)!=null&&u.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=a.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);d>=0||Ne(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:p}=n,T=f.route.loader&&h[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||T){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,f,h)=>{let p,T=!1,C=null,N=null;n&&(p=s&&f.route.id?s[f.route.id]:void 0,C=f.route.errorElement||kT,l&&(c<0&&h===0?(RT("route-fallback"),T=!0,N=null):c===h&&(T=!0,N=f.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,h+1)),E=()=>{let y;return p?y=C:T?y=N:f.route.Component?y=z.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=d,z.createElement(AT,{match:f,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?z.createElement(CT,{location:n.location,revalidation:n.revalidation,component:C,error:p,children:E(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):E()},null)}var um=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(um||{}),am=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(am||{});function NT(e){let t=z.useContext(Ec);return t||Ne(!1),t}function xT(e){let t=z.useContext(gT);return t||Ne(!1),t}function IT(e){let t=z.useContext(un);return t||Ne(!1),t}function sm(e){let t=IT(),n=t.matches[t.matches.length-1];return n.route.id||Ne(!1),n.route.id}function vT(){var e;let t=z.useContext(em),n=xT(),r=sm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function wT(){let{router:e}=NT(um.UseNavigateStable),t=sm(am.UseNavigateStable),n=z.useRef(!1);return tm(()=>{n.current=!0}),z.useCallback(function(i,u){u===void 0&&(u={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ru({fromRouteId:t},u)))},[e,t])}const od={};function RT(e,t,n){od[e]||(od[e]=!0)}function OT(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function PT(e){let{to:t,replace:n,state:r,relative:i}=e;Gr()||Ne(!1);let{future:u,static:a}=z.useContext(Ln),{matches:s}=z.useContext(un),{pathname:l}=ur(),c=nm(),d=gc(t,mc(s,u.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(d);return z.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function pr(e){Ne(!1)}function LT(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Tn.Pop,navigator:u,static:a=!1,future:s}=e;Gr()&&Ne(!1);let l=t.replace(/^\/*/,"/"),c=z.useMemo(()=>({basename:l,navigator:u,static:a,future:ru({v7_relativeSplatPath:!1},s)}),[l,s,u,a]);typeof r=="string"&&(r=$r(r));let{pathname:d="/",search:f="",hash:h="",state:p=null,key:T="default"}=r,C=z.useMemo(()=>{let N=pc(d,l);return N==null?null:{location:{pathname:N,search:f,hash:h,state:p,key:T},navigationType:i}},[l,d,f,h,p,T,i]);return C==null?null:z.createElement(Ln.Provider,{value:c},z.createElement(Za.Provider,{children:n,value:C}))}function DT(e){let{children:t,location:n}=e;return yT(Jl(t),n)}new Promise(()=>{});function Jl(e,t){t===void 0&&(t=[]);let n=[];return z.Children.forEach(e,(r,i)=>{if(!z.isValidElement(r))return;let u=[...t,i];if(r.type===z.Fragment){n.push.apply(n,Jl(r.props.children,u));return}r.type!==pr&&Ne(!1),!r.props.index||!r.props.children||Ne(!1);let a={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Jl(r.props.children,u)),n.push(a)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zl(){return Zl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zl.apply(null,arguments)}function MT(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function BT(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function FT(e,t){return e.button===0&&(!t||t==="_self")&&!BT(e)}const HT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],UT="6";try{window.__reactRouterVersion=UT}catch{}const zT="startTransition",cd=Og[zT];function jT(e){let{basename:t,children:n,future:r,window:i}=e,u=z.useRef();u.current==null&&(u.current=VE({window:i,v5Compat:!0}));let a=u.current,[s,l]=z.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},d=z.useCallback(f=>{c&&cd?cd(()=>l(f)):l(f)},[l,c]);return z.useLayoutEffect(()=>a.listen(d),[a,d]),z.useEffect(()=>OT(r),[r]),z.createElement(LT,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const VT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",WT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ce=z.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:u,replace:a,state:s,target:l,to:c,preventScrollReset:d,viewTransition:f}=t,h=MT(t,HT),{basename:p}=z.useContext(Ln),T,C=!1;if(typeof c=="string"&&WT.test(c)&&(T=c,VT))try{let y=new URL(window.location.href),w=c.startsWith("//")?new URL(y.protocol+c):new URL(c),P=pc(w.pathname,p);w.origin===y.origin&&P!=null?c=P+w.search+w.hash:C=!0}catch{}let N=ET(c,{relative:i}),m=YT(c,{replace:a,state:s,target:l,preventScrollReset:d,relative:i,viewTransition:f});function E(y){r&&r(y),y.defaultPrevented||m(y)}return z.createElement("a",Zl({},h,{href:T||N,onClick:C||u?r:E,ref:n,target:l}))});var fd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(fd||(fd={}));var dd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(dd||(dd={}));function YT(e,t){let{target:n,replace:r,state:i,preventScrollReset:u,relative:a,viewTransition:s}=t===void 0?{}:t,l=nm(),c=ur(),d=im(e,{relative:a});return z.useCallback(f=>{if(FT(f,n)){f.preventDefault();let h=r!==void 0?r:wa(c)===wa(d);l(e,{replace:h,state:i,preventScrollReset:u,relative:a,viewTransition:s})}},[c,l,d,r,i,n,e,u,a,s])}function XT(){const{pathname:e}=ur(),t=e==="/";return A.jsx("header",{className:"app-header",children:A.jsxs("div",{className:"app-header__row",children:[t?A.jsxs(Ce,{to:"/",className:"brand",children:["첫차",A.jsx("span",{children:"가이드"})]}):A.jsx(Ce,{to:"/",className:"icon-btn","aria-label":"홈으로",children:"‹"}),A.jsx(Ce,{to:"/setup",className:"icon-btn","aria-label":"내 차 설정",children:"⚙"})]})})}const Tc=[{id:"p0-registration",phase:0,title:"신차 등록 절차",summary:["새 차는 '자동차 등록'을 마쳐야 도로에서 탈 수 있고, 보통은 딜러가 대신 해주지만 '자동차365' 사이트에서 직접 할 수도 있다.","등록할 때 취득세(승용차는 부가세를 뺀 공급가액의 7%, 경차 4%)와 번호판값 등이 나가지만, 싼타페 1.6 하이브리드는 1,600cc 미만이자 하이브리드라 지역 채권 매입이 면제된다.","번호판값·대행 수수료는 지역·업체마다 달라 고정 금액이 없으므로, 딜러 정산 내역에서 항목별 금액과 감면 반영 여부를 직접 확인하는 게 안전하다."],body_md:`## 신규등록이란
- 자동차(이륜차 제외)는 자동차등록원부에 **신규등록**을 한 뒤에야 운행할 수 있다(자동차관리법 제5조). 미등록·무허가 운행 시 면허취소 및 3년 이하 징역 또는 3천만원 이하 벌금.
- 신차 판매자(딜러)는 구매자가 직접 신청하지 않는 한 구매자를 대신해 지체 없이 신규등록을 신청해야 한다(제8조제3항). 즉 **딜러 등록대행이 기본 흐름**이고, **본인 직접 신청(셀프등록)**도 가능하다.

## 등록 절차
- 처리기관: 시·도 또는 시·군·구. 처리기한: 즉시(복합민원).
- 방문: 접수 → 처리(등록증·번호판 교부).
- 인터넷(자동차365): ① 신청 → ② 동의 → ③ 심사 → ④ 납부 → ⑤ 번호판 → ⑥ 수령.
- 신청서식: 자동차신규등록신청서(자동차등록규칙 별지 제9호). 본인인증은 간편인증·휴대폰·금융인증서·공동인증서.

## 필요 서류
- 개인: 주민등록등본/운전면허(방문 시 필요, 인터넷은 전산 확인으로 무서류), 전체 공통으로 **의무보험 가입증명**이 필요하다.
- 신조차는 자동차제작증(또는 양도증), 임시운행 중 차량은 임시운행허가증·허가번호판을 제출한다.
- 온라인(자동차365) 신청은 제작증 정보가 확인되고 의무보험 가입이 완료된 차량만 가능하다. 공동명의(2인 이상), 취득세 분할·카드결제, 공채매입 희망, 비과세·감면 대상자(장애인·국가유공자·다자녀 등)나 친환경차 감면 차량, 영업용·법인용 등은 온라인 불가로 **방문 처리**해야 한다.

## 등록 비용
### 취득세(지방세)
- 비영업용 승용차 **7%**(경형 4%). 2011년부터 등록세가 취득세로 통합됨. 과세표준은 실제 할인가가 아니라 **출고가(부가세 포함가) 기준**.
- 참고 예시: 출고가 3,000만원 승용차 → 취득세 약 210만원.

### 지역개발공채 / 도시철도채권
- 등록 시 지자체 발행 채권을 **의무 매입**해야 한다(서울은 도시철도채권, 그 외 지역개발채권). 대부분 즉시 할인 매도('공채깡')로 현금화하므로 실부담액은 매입액 × 할인율.
- 매입률·할인율은 지역·차량가격·시점에 따라 다르며 전국 공통 고정값이 없다. (자동차365 계산기 조회 예: 서울·차량가 4,500만원 하이브리드 SUV 기준 매입률 5%, 즉시매도 할인율 5.94% — 조회 시점 참고치일 뿐 수시 변동.)
- 경형자동차(이륜차 제외)는 채권 매입의무 면제. 요건을 갖춘 **하이브리드**는 2026.12.31까지 등록 시 140만원 한도, **전기·수소전기차**는 250만원 한도로 매입의무 면제(도시철도법 제21조).

### 번호판·기타 실비
- 번호판 발급비: 조례에 고정 금액이 아니라 대행자가 원가산정기준에 따라 산출하는 구조라 **관청·업체별로 상이**하다.
- 증지대 2,000원, 인지세 3,000원(2015년부터 온라인 등록도 과세). 온라인 신청 시 취득세·공채·수수료는 가상계좌 납부만 가능(신용카드 불가).

## 임시운행허가
- 번호판·봉인 전 신규등록 신청을 위해 운행하려면 임시운행허가를 받는다. 신청은 방문(2025.6 기준 온라인은 서비스 예정), 수수료는 증지대 1,800원 + 임시운행 번호판 비용(관청별 상이).
- 허가기간(자동차관리법 시행령 제7조): 신규등록신청 목적은 **10일 이내**. (수출 목적 20일, 자기인증 시험·특수설비 설치 등 40일, 시험·연구는 사유별 별도 기간.)
- 임시운행 종료일까지 번호판을 반납하지 않으면 과태료가 부과되며, 온라인 신규등록은 종료일 2일 전까지 신청 가능.`,field_tips_md:null,checklist:["등록 전 의무보험(대인배상I·대물배상)부터 가입해 가입증명 확보하기","딜러 등록대행으로 할지 자동차365 셀프등록으로 할지 결정하기","취득세(승용 7%)와 공채 매입비를 합한 예상 등록비용 계산기로 확인하기","공채를 즉시 매도할지 보유할지, 당일 할인율을 등록사업소에서 확인하기","하이브리드·전기차라면 채권 매입의무 면제 요건 해당 여부 확인하기","임시운행 중이라면 허가기간(신규등록 목적 10일) 내에 등록 마치고 번호판 반납하기"],sources:[{name:"자동차365(국토교통부·한국교통안전공단)",url:"https://www.car365.go.kr/ccpt/cvlcpt/guid/detailGuidance.do?cvlcptCd=2",type:"official"},{name:"찾기쉬운 생활법령정보(법제처)",url:"https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=675&ccfNo=1&cciNo=1&cnpClsNo=2",type:"official"},{name:"지방세법 제10조의5(차량 취득당시가액)",url:"https://casenote.kr/%EB%B2%95%EB%A0%B9/%EC%A7%80%EB%B0%A9%EC%84%B8%EB%B2%95/%EC%A0%9C10%EC%A1%B0%EC%9D%985",type:"official"},{name:"울산광역시 차량등록사업소 세무안내(신규등록=세금계산서 공급가액)",url:"https://www.ulsan.go.kr/s/vehicle/contents.ulsan?mId=001006001000000000",type:"official"},{name:"위택스 이용안내(납부내역·납부확인서)",url:"https://www.wetax.go.kr/tcp/wtg/J040103M01.do",type:"official"}],flags:[],valid_year:2026,car_scope:"generic",source_files:["official/p0-신차등록-01.md","web/p0-신차-취득비용-04.md","web/verification-cycle-santafe-hev-20260726.md"],body_easy_md:`한마디로: 새 차는 '등록'을 해야 탈 수 있고, 그때 세금과 채권 등 돈이 함께 나가요.

## 등록이 뭐고, 누가 하나
- 새 차는 나라에 '자동차 등록'을 해야 도로에서 탈 수 있어요. 등록 전에 몰면 **3년 이하의 징역 또는 3천만원 이하의 벌금**이에요(자동차관리법 제5조·제79조, 2024년 5월부터 강화). 과태료가 아니라 **형사처벌**이라 꼭 등록하고 타세요.
- 보통은 **딜러가 대신 등록**해 줍니다(기본). 원하면 내가 직접 **자동차365(car365.go.kr)**에서 온라인으로 할 수도 있어요.

## 등록 전에 먼저 할 일
등록 자체를 하기 전에, 미리 챙겨둬야 할 게 있어요.
- **자동차보험(의무보험)부터 가입**해야 해요. 등록하려면 보험 가입증명이 필요해요.

> [!WARN] 임시번호판을 달고 있다면 신규등록 목적 임시운행 허가기간은 **10일 이내**예요. 기간 안에 등록을 마치고 임시번호판을 반납하지 않으면 과태료를 물 수 있어요.

## 온라인(자동차365)으로 할 수 있는 경우
보험 가입까지 마쳤다면, 이제 등록을 직접 할지 딜러에게 맡길지 볼게요.
- 혼자 명의이고, 취득세를 카드 없이 계좌로 한 번에 낼 수 있는 보통의 경우엔 온라인이 편해요.
- 반대로 **공동명의, 카드·분할 납부, 장애인·국가유공자·다자녀 감면, 친환경차 감면, 영업용·법인차**는 온라인이 안 되고 **직접 방문**해야 해요.

## 등록할 때 나가는 돈
등록 방법을 정했다면, 이제 얼마가 나가는지 볼게요.

### 취득세
- 승용차는 차값의 **7%**, 경차는 **4%**예요.
- 기준(과세표준)은 **내가 실제로 산 값**이에요. 정확히는 **세금계산서에 적힌 '공급가액'**, 즉 **부가세를 뺀 금액**이 기준이에요.
- 예를 들어 공급가액이 4,000만원이면 취득세는 약 **280만원**이에요.

> [!NOTE] **부가세는 취득세 계산에 안 들어가요.** 차값에 붙은 부가세(10%)를 뺀 금액에 7%를 매기는 구조예요(지방세법 제10조의5, 2023년 시행). 다만 내가 신고한 차값이 나라가 정한 **시가표준액보다 낮으면 시가표준액**을 기준으로 잡습니다(신차는 거의 해당 없음).
> 내 차의 정확한 과세표준은 **세금계산서·딜러 정산 내역의 '공급가액'**에서 확인하세요.

### 지역 채권 매입비
- 등록할 때 지자체가 발행하는 채권을 의무로 사야 해요(서울은 도시철도채권, 그 외 지역개발채권).
- 대부분은 사자마자 바로 되팝니다(이걸 '할인 매도'라고 해요). 그러면 채권값 전부가 아니라, 되팔면서 손해 보는 몫만 부담하면 돼요. 이 손해 비율(할인율)은 지역·차값·시점마다 달라 고정값이 없어요.

> [!TIP] **우리 차(싼타페 1.6 하이브리드)는 채권을 안 사도 돼요.** 이유가 두 가지나 겹쳐요.
> 1. **배기량 1,598cc = 1,600cc 미만 비영업용 승용차**는 2023년 3월부터 **전국에서 채권 매입 의무가 면제**됐어요.
> 2. 하이브리드도 별도로 **도시철도채권 매입의무 면제** 대상이에요(2026.12.31까지 등록분).
>
> 그래서 **정산 내역에 '공채매입비'나 '공채할인비'가 찍혀 있으면 근거를 요구**하세요. 면제 대상인데 청구된 것일 수 있어요.

### 번호판값·기타 실비
- 번호판 발급비는 관청·업체마다 달라 고정 금액이 없어요.
- 증지대 2,000원, 인지세 3,000원이 붙어요. 온라인 등록은 취득세·채권·수수료를 **가상계좌로만** 낼 수 있고 신용카드는 안 돼요.

## 돈은 대략 얼마나 준비할까? (항목 체크)
정확한 총액은 차값·지역·선택에 따라 달라서 하나로 못 박기 어려워요. 대신 **빠뜨리기 쉬운 항목**을 표로 정리했으니, 각 칸을 내 견적으로 채워 보세요.

| 항목 | 대략 규모 | 어디서 확인 |
|---|---|---|
| 차값 잔금 | 계약서상 금액 − 이미 낸 계약금 | 계약서·딜러 정산 내역 |
| 취득세 | 승용차 **차값의 7%**(경차 4%) | 자동차365 계산기, 등록사업소 |
| 지역 채권 매입 | **우리 차는 면제**(1,600cc 미만 + 하이브리드) | 정산 내역에 '공채매입비'가 있으면 이의 제기 |
| 번호판·증지·인지 | 관청·업체마다 다름 + 증지 2,000원·인지 3,000원 | 등록사업소 |
| 자동차보험료 | 첫 가입은 비싼 편 — **견적으로 확인** | 보험다모아 비교 → 다이렉트 견적 |
| 용품·시공 | 매트·썬팅·유리막·PPF 등 선택 | 업체 비교('차 보호·꾸미기 용품 기초' 참고) |

> [!CHECK] 등록·보험은 **차를 받기 전에** 돈이 나가고, 용품은 **인수 검수를 마친 뒤**에 진행하는 순서예요. 잔금·세금은 이체 한도에 걸릴 수 있으니 **미리 은행 앱에서 1회·1일 이체 한도를 확인**해 두면 당일에 당황하지 않아요.

## 딜러 정산 내역, 이 항목들을 확인하세요
등록을 딜러가 대행하면 나중에 **정산 내역서**를 받아요. 아래 항목이 제대로 적혔는지 보면 돼요.

| 항목 | 확인 포인트 |
|---|---|
| 차량대금(공급가액 / 부가세) | 가격표 공급가액과 맞는지 |
| 개별소비세 · 교육세 | 친환경차 감면이 반영됐는지 (**내 차는 2WD라 감면 대상**이에요) |
| 취득세 | **공급가액 × 7%**. '하이브리드 40만원 감면' 항목이 있으면 **끝난 제도라 오류**예요 |
| **공채매입비 / 공채할인비** | **우리 차는 면제 대상** — 찍혀 있으면 근거를 요구하세요 |
| 등록대행 수수료 | 대행 여부·금액 |
| 번호판대 · 증지대 | |
| 탁송료 | 실제 출고 유형과 맞는지 |
| 임시운행(임판) 비용 | |
| 선택품목 · 액세서리 | 가격표 옵션가와 맞는지 |

> [!CHECK] 취득세를 실제로 냈는지는 **위택스(wetax.go.kr) → 납부 → 납부내역**에서 확인할 수 있어요. 영수증이 필요하면 **발급 → 지방세 납부확인서**를 출력하면 돼요. (서울 등록 차량은 이택스가 더 빠를 수 있어요.)
> 등록이 끝나면 **자동차등록증의 차대번호·배기량(1,598cc)·최초등록일**도 한 번 대조해 두세요.

## 정리
- 순서: 보험 가입 → 등록(딜러 대행 또는 자동차365 셀프) → 취득세·채권 등 비용 납부 → 번호판 수령.
- 예상 비용은 자동차365 계산기로 미리 확인하고, 채권 당일 할인율은 등록사업소에서 확인하세요.`,order:4,stage:"day"},{id:"p0-car-tax",phase:0,title:"자동차세 연납",summary:["자동차세는 원래 6월·12월 두 번 내는데, 연초에 1년치를 미리 한 번에 내면(연납) 세금을 조금 깎아주는 제도다.","2026년은 1월에 신청하면 약 4.58% 할인이고, 3월 3.76%, 6월 2.51%, 9월 1.25%로 늦게 신청할수록 할인폭이 줄어든다.","위택스(서울은 ETAX) 앱에서 차량마다 신청하며, 새로 사거나 명의를 바꾼 차는 연납을 다시 신청해야 한다."],body_md:`## 자동차세 연납이란
- 자동차세는 1년치를 6월·12월에 나눠 부과하는데, 이를 미리 일괄 납부하면 세액을 할인해 주는 제도다.
- **신청 방식**이며 연납 후 세액을 납부하지 않으면 할인이 자동 취소되고 6·12월 정기분 고지서가 발송된다.
- **차량 단위**로 부과·신청되므로 차가 두 대면 각각 신청한다. 자동차를 신규·이전 등록하면 연납을 재신청해야 한다.

## 2026년 신청기간·공제율 (서초구청 지방세 공식표, 2026 기준)

| 신고납부시기 | 선납 해당기간 | 선납세액 | 공제액 |
|---|---|---|---|
| 1월 16일 ~ 1월 31일 | 2월 ~ 12월 | 연세액의 334/365 | 연세액의 약 4.58% |
| 3월 16일 ~ 3월 31일 | 4월 ~ 12월 | 연세액의 275/365 | 연세액의 약 3.76% |
| 6월 16일 ~ 6월 30일 | 7월 ~ 12월 | 연세액의 184/365 | 연세액의 약 2.51% |
| 9월 16일 ~ 9월 30일 | 10월 ~ 12월 | 제2기분 세액의 92/184 | 연세액의 약 1.25% |

- 공제 기준율은 **지방세법 시행령 제125조제6항의 이자율 100분의 5(5%)**이며, 2024.12.31 개정 이후 2026년 현행까지 유지되고 있음이 법령 원문으로 확인됨.
- 1월 신청 시 1월분을 뺀 334일에만 적용되어 실질 공제율이 약 4.58%로 계산된다(연세액 × 334/365 × 5%).
- 원래 5%→3% 단계적 축소가 예정됐으나 경기·가계부담을 이유로 5%가 유지 중이다. **2027년 이후 3%로 축소될 가능성이 있어 매년 1월 초 행정안전부 발표를 재확인**해야 한다.

## 신청 방법
- 전국 공통: **위택스(wetax.go.kr) 또는 스마트 위택스 앱** → 부가서비스 → 자동차세 연납 신청.
- 서울시 등록 차량: ETAX(etax.seoul.go.kr) / STAX 앱.
- 관할 시·군·구청 세정과·행정복지센터 방문 또는 전화, ARS(지역번호+142211), 가상계좌 납부도 가능. 지방세는 신용·체크카드로 내도 납세자 수수료가 없다.
- 연납 후 차량을 매매·폐차·말소하면 잔여기간분은 일할 계산해 환급된다.

## 하이브리드 참고
- 자동차세는 배기량 기준 부과라 하이브리드 별도 감면은 없다. 다만 등록 단계의 도시철도(지역개발)채권 매입의무는 2026.12.31까지 140만원 한도로 면제된다(별개 제도).

## 첫차(2026년 7월 출고) 적용
- 1·3·6월 연납 기회는 이미 지났고, 9월(9/16~9/30) 신청 시 10~12월분에 약 1.25% 공제가 가능하나 신규차는 실익이 작을 수 있다.
- **실질적 첫 연납 기회는 2027년 1월(1/16~1/31)**. 단, 2027년 공제율은 3% 축소 가능성이 있어 재확인 필요.`,field_tips_md:null,checklist:["위택스(또는 서울 ETAX)에 로그인해 자동차세 연납 메뉴 찾기","1월(16~31일) 신청으로 최대 약 4.58% 할인 챙기기","차량이 여러 대면 각 차량마다 따로 신청하기","신규·이전 등록한 차는 연납을 새로 신청하기","매년 1월 초 행정안전부 공제율 발표(5% 유지 여부) 확인하기"],sources:[{name:"서초구청 지방세 안내 / 위택스",url:"https://www.seocho.go.kr/site/tax/03/10303010000002023050810.jsp",type:"official"},{name:"세종특별자치시 공지(2026년 자동차세 연납제도 안내)",url:"https://www.sejong.go.kr/bbs/R0071/view.do?nttId=B000000145639Sn5uO4j",type:"official"},{name:"찾기쉬운 생활법령정보(법제처)",url:"https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=675&ccfNo=1&cciNo=1&cnpClsNo=2",type:"official"}],flags:[],valid_year:2026,car_scope:"generic",source_files:["official/p0-자동차세연납-02.md","web/p0-하이브리드채권-자동차세-08.md"],body_easy_md:`한마디로: 자동차세 1년치를 연초에 미리 내면 세금을 조금 깎아줍니다(연납).

## 연납이 뭔가
- 자동차세는 원래 1년치를 **6월·12월 두 번**에 나눠 내요.
- 이걸 미리 한 번에 몰아서 내면 세금을 깎아주는데, 이게 '연납'이에요. **신청해야** 적용돼요.
- **차 한 대씩 따로 신청**해요. 차가 두 대면 두 번 신청해야 해요.

> [!WARN] 연납은 신청만으로 끝나지 않아요. 신청 후 정해진 기간에 실제로 납부까지 해야 할인이 적용되고, 납부하지 않으면 할인이 취소되어 원래대로 6·12월에 나눠 고지서가 다시 와요.

그럼 올해는 언제, 얼마나 할인되는지 볼게요.

## 2026년 신청 시기와 할인율

### 신청 시기별 할인율
| 신청 시기 | 할인율(1년치 세금 대비) |
|---|---|
| 1월 16일~31일 | 약 4.58% |
| 3월 16일~31일 | 약 3.76% |
| 6월 16일~30일 | 약 2.51% |
| 9월 16일~30일 | 약 1.25% |

- 공제율은 **남은 기간에 대해 5%**예요. 신청이 늦으면 남은 개월 수가 줄어서, 1년치 세금 기준으로 보면 위 표처럼 작아 보이는 거예요.
- **일찍(1월) 신청할수록 많이 깎여요.** 1월분은 이미 지나서 빼고 계산하기 때문에 1년치 기준으로는 5%가 아니라 약 4.58%예요.

### 할인율, 앞으로 어떻게 되나
- 원래 할인율을 5%에서 3%로 줄이려던 계획이 있었는데 지금은 5%가 유지 중이에요. **2027년부터 3%로 줄어들 수 있어요.**

할인율까지 확인했다면, 이제 실제로 어떻게 신청하는지 볼게요.

## 어떻게 신청하나
- 전국: **위택스(wetax.go.kr)** 또는 스마트위택스 앱 → 자동차세 연납 신청.
- 서울 등록 차량: **ETAX(etax.seoul.go.kr)** 또는 STAX 앱.
- 구청 세정과·행정복지센터 방문이나 전화로도 가능하고, 자동차세 같은 지방세(시·군·구에 내는 세금)는 카드로 내도 수수료가 없어요.
- 연납한 뒤 차를 팔거나 폐차하면, 남은 기간만큼 계산해서 돌려받아요.

## 참고
- **새로 사거나 명의를 바꾼 차는 연납을 새로 신청**해야 해요.

이제 지금 막 출고받은 내 차엔 어떻게 적용되는지 정리해볼게요.

## 첫차(2026년 7월 출고)라면
- 1·3·6월 기회는 지났어요. 9월에 신청하면 **10~12월분에는 5%**가 깎이지만, 1년치 세금으로 따지면 약 1.25%라 실익이 작아요.
- 사실상 첫 제대로 된 연납 기회는 **2027년 1월(16~31일)**이에요.

### 그럼 올해(출고 첫해) 세금은 어떻게 되나요?
- 앞에서 본 대로 자동차세는 6월·12월 두 번에 나눠 부과돼요. 7월에 차를 받았다면 6월분은 애초에 대상이 아니고, **연말(12월)에 고지서를 처음 받게 돼요.**
- 금액도 1년치 전부가 아니라 **차를 갖고 있던 기간만큼**만 내요(1년 내내 보유한 게 아니니까요).
- 자동차세는 **배기량 기준**으로 매겨져요. 그래서 **하이브리드라고 자동차세가 깎이지는 않아요**(등록할 때의 채권 면제는 별개 제도예요).

> [!CHECK] **내 차 세금이 정확히 얼마인지**는 등록이 끝난 뒤 **위택스(wetax.go.kr)에서 내 차량으로 조회**하면 가장 정확해요(첫 고지 시점·금액 모두). 등록할 때 담당자에게 "올해 자동차세는 언제 얼마쯤 나오나요"라고 물어봐도 돼요.
> 배기량은 **자동차등록증**에 적혀 있어요. (첫 고지서를 받기 전에 대략 감을 잡고 싶으면 위택스 자동차세 계산 메뉴를 이용하세요.)

> [!CHECK] 2027년 1월에 연납을 신청하기 전, 할인율이 5%에서 3%로 줄어들 수 있으니 행정안전부 발표를 먼저 확인하세요.`,order:10,stage:"post"},{id:"p0-hybrid-benefits",phase:0,title:"하이브리드 세제혜택",summary:["예전에 있던 '하이브리드 취득세 감면(최대 40만원)'은 2024년 말로 끝나서, 2026년에는 하이브리드도 일반 차처럼 취득세 7%를 그대로 낸다.","대신 개별소비세·교육세 감면(2WD만 적용, 다 합쳐 대략 100만원 효과)과 지역 채권 매입 면제는 2026년 말까지 살아 있다.","반면 고속도로 통행료 감면은 전기·수소차 전용이라 하이브리드는 대상이 아니며, 남은 혜택도 2027년 연장 여부가 미정이라 등록 시점에 다시 확인해야 한다."],body_md:`## 결론 먼저
- **하이브리드 취득세 감면 자체는 2024.12.31로 일몰 종료**되어 2026년에는 적용되지 않는다. 2026년 하이브리드 승용차는 일반 내연기관차와 동일하게 **취득세율 7%**를 그대로 부담한다.
- 인터넷에 '2026년에도 하이브리드 취득세 40만원 감면'이라는 글이 돌지만 이는 이미 종료된 옛 제도이거나 채권 매입 면제와 혼동한 것으로, 사실이 아니다.
- 다만 취득세 감면과 **별개로** 아래 혜택들은 2026년까지 살아 있으므로 '하이브리드는 혜택이 전혀 없다'고 오해하면 안 된다.

## 2026년 현재 유지되는 혜택

| 혜택 | 한도 | 기한 | 근거 |
|---|---|---|---|
| 도시철도(지역개발)채권 매입의무 면제 | 140만원(2025년부터 200→140만원 인하) | 2026-12-31 | 도시철도법 시행령 별표2 비고 2호 카목 |
| 개별소비세 감면 | 70만원(2024년 100만원→축소) | 2026-12-31 | 조세특례제한법 제109조제3항 |
| 교육세 감면 | 개소세의 30% = 최대 21만원 | 2026-12-31 | 교육세법 제5조제1항제2호 |
| 고속도로 통행료(하이패스) 감면 | 2025년 40% → 2026년 30% → 2027년 20% | 2027-12-31 | 유료도로법 시행령 제8조 |
| 혼잡통행료 감면 | 50% 이상(구체율은 지자체 조례) | 지자체별 | 유료도로법 시행령 |
| 취득세 감면 | 없음(종료) | 2024-12-31 종료 | 지방세특례제한법 제66조제3항 |
| 자동차세 | 감면 없음(배기량 기준 부과) | — | — |

- 개별소비세 감면분만큼 부가세도 간접 감소해, 합산 절감액은 약 100만원 수준으로 언급된다.
- **다자녀 예외**: 하이브리드 일반 취득세 감면은 끝났지만 2자녀 50%(70만원 한도)·3자녀 이상 100%(140만원 한도) 취득세 감면은 2027-12-31까지 별도로 존재한다(지방세특례제한법 제22조의2, 해당 시 신청).

## 채권 매입의무 면제 (별개 제도)
- 요건을 갖춘 하이브리드를 2026.12.31까지 등록하면 도시철도(지역개발)채권 매입의무가 **최대 140만원까지 면제**된다(매입액이 140만원 이하면 전액). 이는 세금 감면이 아니라 채권 매입의무 자체의 면제다.
- 도시철도채권은 서울·부산·대구에서, 그 외는 지역개발채권으로 발행되며 **지자체 조례로 추가 면제**가 있을 수 있어 관할 차량등록사업소 확인이 필요하다.

## 신청·주의
- 감면·면제는 통상 취득일로부터 60일 이내 신청해야 하며, 위택스 또는 관할 구청 세무과에서 처리한다.
- 위 혜택 다수가 2026년 말 종료 예정이고 2027년 연장 근거는 현재 확인되지 않으므로, **등록 시점에 재확인**해야 한다.`,field_tips_md:null,checklist:["'하이브리드 취득세 감면'은 2024년 종료됐음을 인지하고 취득세 7% 예산 잡기","2026년 말까지 등록해 채권 매입 면제(우리 차는 전액 면제) 챙기기","개별소비세·교육세 감면이 견적서에 반영됐는지 확인하기(2WD만 적용, AWD는 감면 없음)","다자녀 가구면 별도 취득세 감면(지방세특례제한법 제22조의2) 신청 검토하기","등록 시점에 관할 구청·위택스에서 혜택 존속 여부 재확인하기","정산 내역에 '공채매입비'가 잘못 청구되지 않았는지 확인하기"],sources:[{name:"찾기쉬운 생활법령정보(법제처)",url:"https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=675&ccfNo=1&cciNo=1&cnpClsNo=2",type:"official"},{name:"한국에너지공단 친환경차 누리집",url:"https://min24.energy.or.kr/xev/contents/benefit",type:"official"},{name:"오토트리뷴(2026년 달라지는 자동차 제도)",url:"https://www.autotribune.co.kr/news/articleView.html?idxno=42047",type:"media"},{name:"정책브리핑 — 1600cc 미만 채권 의무매입 면제",url:"https://m.korea.kr/news/policyNewsView.do?newsId=148909437",type:"official"},{name:"현대자동차 2026 싼타페 하이브리드 공식 가격표",url:"https://www.hyundai.com/contents/repn-car/catalog/santafe-hev-2026-price.pdf",type:"official"}],flags:[],valid_year:2026,car_scope:"hybrid",source_files:["web/p0-하이브리드-혜택현황-05.md","web/verification-cycle-santafe-hev-20260726.md"],body_easy_md:`한마디로: 하이브리드 '취득세 감면'은 끝났지만, 개별소비세·채권 면제·통행료 할인 같은 혜택 몇 가지는 2026년 말까지 남아 있어요. 게다가 대부분 **차 살 때 자동으로 처리**돼요.

## 먼저 오해부터 풀기
- **'하이브리드 취득세 감면(최대 40만원)'은 2024년 12월 31일로 끝났어요.** 2026년엔 하이브리드도 일반 차처럼 취득세 7%를 내요.

> [!NOTE] 인터넷에 떠도는 '2026년에도 40만원 감면'이라는 말은 끝난 옛 제도이거나, 아래에서 설명할 채권 면제와 헷갈린 정보예요.

- 그래도 아래 혜택은 아직 있으니 '혜택이 하나도 없다'고 오해하진 마세요.

## '채권 매입'이 뭔가요? (처음이면 꼭 읽기)
혜택을 하나씩 보기 전에, 먼저 '채권 매입'이 뭔지부터 알아둘게요.
- 차를 등록할 때는 누구나 **'지역개발채권'**(서울은 '도시철도채권')이라는 걸 **의무로 사야** 해요. 지자체가 이 돈으로 지역 개발 재원을 마련하고, 산 채권은 몇 년 뒤(보통 5~7년) 이자와 함께 돌려줘요.
- 목돈이 묶이는 게 싫으면 **사자마자 바로 되파는('할인') 방법**이 있어요. 이때는 채권값 전부가 아니라 **적은 할인료만** 부담해요(대부분 이 방법을 써요).
- 이 절차는 **보통 딜러(영업사원)가 등록을 대행하면서 알아서 처리**하고, 비용은 출고 정산 내역에 포함돼요. 내가 직접 하지 않아도 돼요.
- 안 하면 **등록 자체가 안 돼요**(=차를 못 타요).

## 하이브리드는 이 채권이 면제돼요
채권이 뭔지 알았다면, 이제 하이브리드는 이 채권을 어떻게 처리하는지 볼게요.
- 친환경차(하이브리드)는 **이 채권을 안 사도 됩니다(면제).** 그만큼 초기 비용이 줄어요.
- **주의 — 지역·배기량에 따라 달라요.** 2026년 7월부터 경기도는 **1,600cc 초과** 하이브리드는 채권을 사도록 바뀌었어요. 우리 차(싼타페 1.6L 하이브리드)는 **1,600cc 이하**라 대부분 지역에서 면제가 유지돼요.
- **'140만원'이 무엇의 한도인가** — 이건 *사야 할 채권액의 상한*이 아니라 **면제받는 금액의 상한**이에요. 매입액이 140만원을 넘으면 **넘는 만큼은 그대로 사야 해요**(도시철도법 제21조, 2026년 12월 31일 등록분까지).
- 다만 우리 차는 **1,598cc**라 배기량 기준 면제가 따로 겹쳐요. 경기도는 **1,600cc 이하** 면제(2026년 7월 1일부터 초과분은 매입), 서울시는 **1,600cc 미만** 소형차 면제로 조례마다 표현이 달라요.

> [!CHECK] **내 차는 실제로 전액 면제받았어요.** 계산서의 공채매입비가 **0원**으로 찍혔어요. 다만 이건 지역·차종 분류에 따라 갈리는 부분이라, 혹시 매입비가 찍혀 있다면 근거를 물어보는 게 맞아요.
- 내 차의 정확한 채권 금액·면제 여부는 **딜러 견적서나 등록 정산 내역**에 찍히니 그걸로 확인하면 돼요. **'공채매입비'가 청구돼 있으면 근거를 물어보세요.**

## 2026년에 남아 있는 혜택
채권 얘기는 여기까지고, 이제 2026년 현재 남아 있는 혜택을 한눈에 정리해볼게요.

| 혜택 | 얼마나 | 언제까지 | 어떻게 받나 |
|---|---|---|---|
| 채권 매입 면제 | 사야 할 채권값 전부(대개) | 2026-12-31 등록분 | 등록 때 자동(딜러 처리) |
| 개별소비세 감면 | 최대 70만원 | 2026-12-31 | 출고가에 이미 반영(자동) |
| 교육세 감면 | 최대 21만원 | 2026-12-31 | 자동 |
| 고속도로 통행료 감면 | **대상 아님** | — | 전기·수소차 전용 (아래 설명) |

- 개별소비세 감면 한도는 **70만원**, 교육세는 그 30%인 **21만원**까지예요. 부가세도 따라 줄어서 다 합치면 **90만원 안팎**을 아끼는 효과예요. (2026년 12월 31일 일몰 예정이고, 1년 연장안이 국회에 올라가 있어요.)

> [!NOTE] **'통행료 할인'은 세 가지를 구분해야 해요.**
> - **고속도로 통행료** — 전기·수소차 전용이라 **하이브리드는 대상이 아니에요.**
> - **혼잡통행료**(서울 남산 1·3호터널) — 하이브리드도 **면제**예요.
> - **공영주차장** — 지자체 조례에 따라 보통 **50% 감면**돼요.
>
> 뒤 두 가지는 **저공해자동차 표지(스티커)**를 붙여야 적용돼요. 등록할 때 함께 신청하세요.

> [!CHECK] **내 차는 2WD(앞바퀴굴림)라 이 감면 대상이에요.** 개별소비세 감면은 2WD에만 적용되고, 사륜(AWD/HTRAC)은 연비 기준에 못 미쳐 대상이 아니에요(공식 가격표에 AWD는 '세제혜택 후 가격'이 아예 없어요).
- **취득세·자동차세는 감면이 없어요.**

## 고속도로 통행료 감면 — 우리 차는 대상이 아니에요
인터넷에서 "친환경차는 통행료를 깎아준다"는 말을 자주 보게 되는데, **하이브리드는 여기에 해당하지 않아요.**

- 통행료 감면 대상은 **전기자동차와 수소전기차뿐**이에요(유료도로법 시행령 기준). 하이브리드는 제외돼 있어요.
- 그래서 **감면용 단말기를 등록할 필요도 없고, 등록해도 할인되지 않아요.** 우리 차 매뉴얼에도 하이패스 시스템에는 "(장애인·국가유공자·친환경차) 통행료 자동 할인 기능이 없다"고 적혀 있어요.

> [!WARN] "하이브리드도 통행료 30% 할인"이라고 안내하는 블로그가 많은데 **사실이 아니에요.** 전기·수소차 기준을 하이브리드에도 적용한 잘못된 정보예요. 통행료는 정상 요금으로 계산하세요.

## 그래서 나는 뭘 신청해야 하나?
그럼 실제로 내가 뭘 해야 하는지 정리해볼게요.

### 대부분은 자동
- 채권 면제와 개별소비세·교육세 감면은 구입·등록 과정에서 딜러가 처리하거나 출고가에 이미 반영돼서, 따로 신청할 게 거의 없어요. **등록만 하면 적용**돼요.

### 따로 신청해야 하는 경우
- **따로 신청이 필요한 경우**: 아래 다자녀 취득세 감면처럼 개인 자격에 따른 감면은 **취득일로부터 60일 이내**에 위택스나 구청 세무과에 신청해야 해요.
- 가장 확실한 방법은 딜러에게 **"채권 면제·친환경 감면이 정산에 다 반영됐는지"**를 정산 내역으로 확인하는 거예요.

## 다자녀는 별도 취득세 감면
여기까지는 하이브리드 자체 혜택이고, 별도로 다자녀 가구라면 취득세 감면이 하나 더 있어요.
- 하이브리드 취득세 감면은 끝났지만, **자녀 2명 50%(70만원 한도)·3명 이상 100%(140만원 한도)** 취득세 감면이 **2027년 말까지** 따로 있어요. 해당되면 60일 안에 신청하세요.

## 주의
마지막으로 등록 전 꼭 확인할 점이에요.
- 위 혜택 대부분이 2026년 말 종료 예정이고 2027년 연장은 아직 정해지지 않았어요. **등록할 때 구청·위택스에서 최신 내용을 다시 확인**하세요.`,order:1,stage:"pre"},{id:"p0-insurance",phase:0,title:"자동차보험 가입",summary:["자동차보험은 법으로 꼭 들어야 하는 부분(대인배상I·대물배상)과 내가 선택해서 붙이는 부분(대인배상II·자동차상해·자기차량손해·무보험차상해)으로 나뉜다.","의무 부분만으로는 큰 사고 배상액을 감당하기 어려우니, 대인배상II와 넉넉한 대물 한도를 포함한 종합보험 가입이 사실상 필수다.","'보험다모아'에서 여러 회사를 같은 조건으로 비교한 뒤, 고른 회사 홈페이지에서 다이렉트로 가입하면 보험료를 크게 아낄 수 있다."],body_md:`## 자동차보험의 구성 (손해보험협회 표준약관)
자동차보험은 6개 보장종목으로 구성되며, 이 중 **대인배상I·대물배상만 의무보험**이고 나머지는 임의(선택) 담보다.

### 1. 대인배상I (의무)
- 운행으로 남을 죽거나 다치게 해 자동차손해배상보장법상 손해배상책임을 질 때 보상. 자배법 제5조로 가입이 강제되며 보상한도는 자배법령 기준 산출액.

### 2. 대인배상II (임의)
- 대인배상I을 **초과하는 대인 손해**를 보상. 한도는 증권 기재금액(무제한 설정 가능). 큰 사고(사망 등 배상 판결액이 수억원)에서 본인 부담을 막아주므로 가입 권장.

### 3. 대물배상 (의무 한도 + 임의 확장)
- 남의 재물을 훼손해 지는 배상책임을 보상. **2016.4.1부터 2천만원 이상 가입 의무**이며, 그 이상(1억·2억·10억 등)은 증권 기재로 임의 확장한다.

### 4. 자기신체사고(자손) / 자동차상해(자상) (임의, 택일)
- 자기신체사고: 피보험자가 자동차 사고로 죽거나 다친 손해를 보상하는 표준약관상 담보.
- '자동차상해'는 표준약관·감독규정 별표에 조문이 없는, 개별 보험사가 자손을 대체해 파는 **선택형 특별약관 상품명**이다(정확한 약관은 개별 보험사 확인).

### 5. 자기차량손해(자차) (임의)
- 사고로 내 차에 직접 생긴 손해를 증권 기재 가입금액 한도로 보상(단독·일방과실 사고는 실수리 원칙, 경미손상은 보험개발원 기준 적용).

### 6. 무보험차상해 (임의)
- 무보험(대인II·공제 없음 등) 차량에 의해 죽거나 다친 손해를 보상.

## 첫 가입자 보험료와 절감
- 첫 가입은 운전경력이 짧아 보험료가 가장 높다. **운전(가입)경력 인정제도**로 최대 3년까지 경력을 인정받으면 할증을 완화할 수 있다.
  - 부모·배우자 등 가족 자동차보험에 **가입경력 인정대상자로 등록**(운전자 범위 포함과는 별개 절차), 군 운전병, 관공서·법인 운전직, 해외 보험경력 등이 인정된다.
  - 부모 보험 **갱신 시점**에 '가족 한정' 특약으로 바꾸고 자녀를 인정대상자로 등록 요청한다.
- 절감 전략: 운전자 범위 최소화, 마일리지 특약, 블랙박스·첨단안전장치 할인, UBI(운전습관 연동), 다이렉트(온라인) 가입.
- 다이렉트는 유통 채널이 없어 사업비가 낮아 통상 더 저렴하고, 설계사 채널은 맞춤 상담이 강점이다.`,field_tips_md:`> 실전 팁은 유튜브(블라인드_Car Story, 금융상품연구소) 출처의 개인 경험 기반 내용으로, 실제 수치는 보험사·조건에 따라 다르다.

## 비교·가입 방법
- **'보험다모아'**에서 개인용 자동차보험 비교를 이용하면 국내 12개 보험사 보험료가 한 화면에 나온다(회사별 개별 설계 2시간 → 5분 내). 갱신 계약은 만기 30일 이내에만 조회된다.
- 비교 단계에서는 담보 한도를 대략 최대치로, 특약은 해당되는 것만 체크해 **상대 비교**만 하고, 가장 싼(또는 상위 3개 중 가성비) 회사의 **'인터넷 바로가입'**을 눌러 보험사 홈페이지에서 최종 설계·결제한다.
- 같은 조건이어도 회사별 보험료가 최대 1.5배까지 차이 날 수 있으니 최소 3개사를 같은 조건으로 비교한 뒤 결정한다.

## 담보별 실전 선택 기준
- **대물배상**: 최소 10억원 이상 추천. 한도를 2억→10억으로 올려도 추가 보험료가 수백~수천원 수준이라 크게 올려두는 것이 안전하다(수입차·다중추돌 대비).
- **자기신체사고 vs 자동차상해**: **자동차상해 권장**. 자손은 상해급수 한도 내 정액 보상이라 병원비가 한도를 넘으면 본인 부담이지만, 자상은 치료비 전액에 휴업손해·위자료·상실수익까지 보상한다. 가격차는 수만원 수준.
- **무보험차상해**: 한도를 7억으로 올려도 보험료 약 4천원대라 반드시 가입.
- **자차 자기부담금**: 20% 권장(30% 대비 보험료 약 20% 차이). 아주 오래된 차로 사고 시 폐차 예정이면 생략 가능.
- **물적사고 할증기준금액**: 200만원이 무난(수리비가 쉽게 100만원을 넘고, 50만원→200만원 상향에도 보험료 증가가 크지 않다).
- **마일리지 특약**: 추가 보험료 없고 초과해도 불이익 없으니 무조건 가입. 연간 실제 주행거리를 정직하게 입력(과다 설정하면 손해).
- **긴급출동서비스**: 견인·배터리·급유·타이어 등 포함, 약 1.2만원 수준으로 가입 권장.

## 소소한 꿀팁
- 가입 전에 **블랙박스와 계기판(총 주행거리) 사진**을 미리 찍어두면 마일리지·블랙박스 특약 신청이 수월하다.
- 커넥티드·안전운전점수·대중교통·차선이탈/전방충돌 방지 등 **실제 해당되는 할인만** 체크한다(운전자 범위 '누구나'면 대중교통 할인 등은 적용 안 됨).
- **형사합의금·변호사 선임비·벌금은 자동차보험 특약보다 운전자보험으로 별도 가입**하는 편이 낫다(운전자보험은 차량이 아닌 사람 기준으로 적용).`,checklist:["딜러에게 차대번호 요청해 인수 전 보험 가입하기(개시일=인수일)","의무보험(대인배상I·대물배상)에 반드시 가입하기","보험다모아에서 최소 3개 보험사를 같은 조건으로 비교하기","대인배상II 가입, 대물 한도 10억 이상으로 설정하기","자기신체사고 대신 자동차상해 선택하기","무보험차상해 포함하고 자차 자기부담금 20%로 설정하기","마일리지·블랙박스 등 실제 해당되는 할인 특약만 체크하기","가입 전 블랙박스·계기판(주행거리) 사진 찍어두기","부모·배우자 보험으로 운전경력 인정 등록해 할증 완화하기","가입 직후 보험사 긴급출동 번호를 휴대폰에 저장하기"],sources:[{name:"손해보험협회 자동차보험 표준약관/소비자포털",url:"https://carinfo.knia.or.kr/lmxsrv/mobile/law/lawDetail.do?SEQ=3&LAWGROUP=1",type:"official"},{name:"캐롯 공식 블로그",url:"https://blog.carrotins.com/",type:"media"},{name:"블라인드_Car Story (유튜브)",url:"https://youtu.be/aF3XFxz4b68",type:"personal"},{name:"금융상품연구소 (유튜브)",url:"https://youtu.be/yffLByVnCjQ",type:"personal"},{name:"금융감독원 분쟁사례(자동차 특별약관편) — 비즈워치",url:"https://news.bizwatch.co.kr/article/finance/2024/10/02/0012",type:"media"},{name:"대법원 2013다66966(가족운전자 한정 특약 — 사위·며느리)",url:"https://law.go.kr/LSW/precInfoP.do?precSeq=175440",type:"official"},{name:"손해보험협회 자동차보험 종합포털(표준약관)",url:"https://carinfo.knia.or.kr",type:"official"},{name:"현대자동차 구매절차 — 임시운행(임시번호판·의무보험)",url:"https://www.hyundai.com/kr/ko/e/customer/guide/purchase/shipping-temporary",type:"official"},{name:"금융위원회 — 자동차보험 경력인정기준 개선방안",url:"https://www.fsc.go.kr/no010101/82029",type:"official"},{name:"손해보험협회 공시실 — 자동차보험료 온라인가입(CM)",url:"https://kpub.knia.or.kr/carInsuranceDisc/insurance/carInsuranceOnline.do",type:"official"},{name:"롯데손해보험 개인용 자동차보험 약관(담보 가입금액)",url:"https://lotteins.co.kr/upload/C/car4001_20240109.pdf",type:"official"}],flags:[],valid_year:2026,car_scope:"generic",source_files:["official/p0-보험담보구조-07.md","web/p0-첫가입-자동차보험-절감-02.md","youtube/p0-첫차보험가입-01.md","youtube/p0-첫차보험가입-02.md","youtube/p0-첫차보험가입-03.md","web/insurance-driver-scope-2026.md","web/verification-cycle-santafe-hev-20260726.md"],body_easy_md:`한마디로: 자동차보험은 **차를 등록해 번호판 달고 운행하기 전에 반드시** 가입해야 하는 필수 보험이에요. 첫차라면 인수 전날~인수 당일에 가입하는 게 보통이에요.

## 자동차보험 vs 운전자보험 — 뭐가 다른가요?
초보가 가장 헷갈리는 부분부터 정리할게요. **둘은 완전히 다른 보험**이에요.

- **자동차보험 = '차·사고' 중심, 의무.** 사고로 **상대방을 다치게 하거나 남의 차·물건을 부쉈을 때** 물어주는 게 핵심이고, 담보를 넣으면 **내 부상과 내 차 손해까지** 보상해요. 법으로 반드시 가입해야 하고, 안 들면 등록·운행이 안 돼요.
- **운전자보험 = '사람(나)' 중심, 선택.** 내가 사고를 낸 뒤 떠안는 **형사 합의금·벌금·변호사비** 같은 '내 개인 비용'을 도와주는 보험이에요. 의무가 아니고, 자동차보험만으로는 이 비용이 안 나와서 따로 들어요.
- 둘 다 있으면 좋지만, 지금 급한 건 자동차보험이에요.

## 언제까지 가입해야 하나요? (데드라인)
그래서 지금 급한 건 자동차보험이에요. 그럼 언제까지 들어야 할까요?

- **자동차보험(의무보험)은 차를 등록하는 시점에 이미 가입돼 있어야** 해요. 보험 가입 증명이 있어야 등록이 되기 때문이에요.
- 그래서 첫차는 보통 **차를 받기 하루 전~받는 날 아침**에 가입해요. 딜러가 인수일을 알려주면 그 전에 가입해 두세요.
- **운전자보험은 데드라인이 없어요.** 다만 사고는 언제 날지 모르니 **운전을 시작하기 전**에 들어두길 권해요.

## 차량번호가 없는데 어떻게 가입해요? (첫차 실무 순서)
"인수 전날에 가입하라"는데 아직 번호판이 없죠. **차량번호 대신 '차대번호'로 가입**하면 돼요. 차대번호는 차 한 대마다 붙는 고유번호(영문+숫자 17자리)예요.

1. **딜러(카마스터)에게 차대번호를 받아요.** 차가 생산·출고 배정되면 알 수 있어요. 먼저 **"생산 완료되면 차대번호 알려주세요"**라고 요청해 두면 편해요.
2. **차대번호로 보험을 가입**해요. 다이렉트 가입 화면에서 차량번호 대신 차대번호를 넣는 방식이에요.
3. **보험 개시일은 '차를 받는 날(인수일)'로** 맞춰요. 등록 시점에 보험이 이미 살아 있어야 하니까요.
4. **가입증명서(보험증권)를 딜러에게 전달**해요. 보험사 앱·홈페이지에서 PDF로 받아 카톡·메일로 보내면 돼요.
5. 등록이 끝나 **번호판이 나오면 보험사에 차량번호가 반영**돼요(대부분 자동으로 연결돼요).

> [!NOTE] **임시번호판(임시운행)은 뭐예요?** 새 차는 정식 등록 전에 **임시운행허가 + 임시번호판**을 달고 움직여요. 현대는 출고 차량에 임시운행증·임시번호판 발급을 기본으로 하고, **신규 등록 목적의 허가 기간은 10일**이에요. 기간 안에 등록하고 임시번호판을 반납하지 않으면 과태료가 붙어요.
> 이때 필요한 '임시운행 의무보험'은, **내 자동차보험을 이미 가입해 뒀다면 따로 들 필요가 없어요**(현대 안내: 허가기간 중 다른 의무보험에 가입돼 있으면 임시운행 의무보험 추가 가입 불필요).

> [!CHECK] 순서만 기억하세요 — **차대번호 받기 → 보험 가입(개시일=인수일) → 증명서 딜러 전달 → 등록·번호판 → 번호 자동 반영.** 차대번호를 못 받았으면 그것부터 요청하는 게 첫 액션이에요.
> (차대번호 가입 자체는 보험사 실무 관행이라, 가입 화면에서 안 보이면 해당 보험사 고객센터에 "차대번호로 가입" 문의하면 돼요.)

## 자동차보험은 이렇게 구성돼요 (필수 vs 권장)
가입 시점을 정했다면, 이제 자동차보험을 무엇으로 채울지 볼게요. 크게 6가지예요. <span class="tag-req">필수</span>는 반드시, <span class="tag-rec">권장</span>은 초보라면 꼭 넣는 걸 추천해요.

- <span class="tag-req">필수</span> **대인배상I**: 사고로 상대방을 다치게 했을 때 보상. 법으로 의무.
- <span class="tag-rec">권장</span> **대인배상II(무한)**: 대인배상I을 넘는 큰 사고(사망 등 배상액 수억원)를 막아 줘요. '무한'은 보상 한도를 정해 두지 않는다는 뜻이에요. 사실상 꼭 필요.
- <span class="tag-req">필수</span> **대물배상**: 남의 차·물건을 부쉈을 때 보상. 최소 2천만원은 의무, 그 이상은 내가 올려요(10억 권장).
- <span class="tag-rec">권장</span> **자기신체사고 또는 자동차상해**: 나와 동승자가 다쳤을 때 보상(아래에서 '하나만 고르는 이유' 설명).
- <span class="tag-rec">권장</span> **자기차량손해(자차)**: 사고로 내 차가 망가진 걸 보상. **새 차니까 꼭 넣으세요.**
- <span class="tag-rec">권장</span> **무보험차상해**: 보험 없는 차에 치여 다쳤을 때 나를 보상.

> [!TIP] 어려운 용어(대물배상·자차 등)에는 점선 밑줄이 있어요. 누르면(마우스를 올리면) 쉬운 뜻이 떠요.

## 자기신체사고 vs 자동차상해, 왜 하나만 고르나요?
위 구성에서 '자기신체사고 또는 자동차상해'라고 한 이유예요.

- 둘 다 **'내(운전자·동승자)가 다쳤을 때 보상'**하는 담보라 **역할이 겹쳐요.** 그래서 보통 **둘 중 하나만** 넣습니다(둘 다 넣어도 중복이라 실익이 적어요).
- 어느 걸? **자동차상해를 추천.** 자기신체사고는 정해진 한도까지만 주지만, 자동차상해는 **치료비 전액에 위자료·휴업손해까지** 더 넓게 보상하고 가격 차이는 수만원 수준이에요.

## 첫 가입은 왜 비싸고, 어떻게 줄이나
구성을 정했으면 이제 보험료 얘기예요. 첫차는 왜 비쌀까요?

- 운전경력이 짧으면 보험료가 가장 비싸요. 처음 가입할 때는 보험료를 계산하는 비율(요율)이 가장 높게 잡히고, 그 뒤 **1년마다 낮아져 3년에서 최대 효과**가 나요. 이 비율을 '보험가입경력요율'이라고 해요.

> [!WARN] **여기서 오해가 많아요.** '가입경력 인정대상자로 등록하는 행위'가 경력을 만들어 주는 게 아니에요. 인정되는 건 **실제로 부모·배우자 보험의 운전자 범위에 내가 포함되어 있던 기간**이에요.
> 그래서 **첫 보험 가입 직전에 급하게 등록해도 이번 보험료는 내려가지 않아요.** 등록은 "그 기간을 나중에 증명할 수 있게 남겨 두는 것"에 가까워요.

> [!TIP] 그래도 지금 할 수 있는 게 있어요.
> - **과거에 이미** 부모·배우자 보험의 운전자 범위에 들어가 있던 기간이 있다면, **사후에도 인정받을 수 있어요.** 가입할 때 그 보험의 **가입증명서를 제출**하면 됩니다(사후등록).
> - 보험료를 이미 낸 뒤에 경력이 인정돼 보험료가 내려가면 **차액을 환급**받을 수 있어요.
> - 앞으로를 위해서라면, 부모 보험 **갱신 때 나를 '가입경력 인정대상자'로 등록**해 두면 그 기간이 쌓여요(운전자 범위에 넣는 것과는 다른 절차예요).
- 그 밖에: 운전자 범위 좁히기, 마일리지 특약, 블랙박스·안전장치 할인, 다이렉트(온라인) 가입으로 아낄 수 있어요.

## 누가 함께 타나요? (운전자 범위)
보험료를 아끼는 큰 축이 방금 나온 '운전자 범위'예요. '운전자 범위'는 **이 보험으로 운전해도 보상받는 사람의 범위**인데, 좁힐수록 보험료가 싸지지만 **범위 밖 사람이 몰다 사고 나면 대인배상I(의무보험)만 빼고 전부 면책**돼요(아래 '범위 밖 사고' 참고).

| 범위 | 운전 가능한 사람 | 보험료 |
|---|---|---|
| 1인 한정 | 나(기명피보험자)만 | 가장 저렴 |
| 부부 한정 | 나 + 배우자 | 저렴 |
| 가족 한정 | 나·배우자·양가 부모·자녀·며느리·사위 | 중간 |
| 가족 + 형제자매 | 위 가족 + 형제·자매 | 높음 |
| 누구나 | 연령 조건만 맞으면 누구나 | 가장 비쌈 |
| 본인/부부 + 지정1인 | 위 범위 + 증권에 적은 1명 | 지정인 나이에 따라 |

- **함께 탈 사람이 정해져 있으면 그 범위로, 애매하면 넓게.** 아끼려고 좁혔다가 범위 밖 사고가 나면 손해가 훨씬 커요.
- **연령 한정이 함께 걸려요.** 범위 안에서 **가장 어린 사람의 만 나이**가 보험료를 좌우해요. 20대가 들어오면 크게 올라요.
- 계약 중간에도 범위를 바꿀 수 있어요(넓히면 보험료를 더 내고, 좁히면 일부 돌려받아요).

> [!NOTE] 자동차보험의 '가족'은 민법상 가족과 달라요. **형제·자매, (외)조부모, 손자녀, 동거인은 '가족'에 포함되지 않아요.** 형제가 상시로 몰면 '가족+형제자매'를, 가끔이면 아래 단기 특약(기본 계약에 옵션으로 붙이는 추가 보장)을 쓰세요.

## 운전자 범위, 이건 꼭 아세요 (배우자·동거인·범위 밖 사고)
범위를 잘못 잡으면 사고 때 크게 물릴 수 있어서, 헷갈리는 세 가지를 짚어둘게요.

### 배우자는 어디까지 인정되나요?
- **법률혼(혼인신고한) 배우자와 사실혼 배우자 모두** 인정돼요. 단 사실혼은 같은 주소 주민등록·생활비 공동부담 같은 **객관적 입증**이 필요해요.
- **중혼적 사실혼은 면책**이에요. 법률상 배우자가 따로 있는 사람과의 사실혼 배우자가 몰다 낸 사고는 보상되지 않아요(금융감독원 분쟁사례).
- **며느리·사위는 '법률혼'만** 가족으로 인정돼요(혼인신고 안 한 사실혼이면 제외 — 대법원 2013다66966).
- 혼인신고 전이라면 → **'본인 + 지정1인'**으로 가입했다가, 신고 후 부부 한정으로 바꾸는 게 실무 순서예요.

### 동거인·연인·친구가 몰 때 (가족 아님)
가족 한정으론 절대 커버되지 않아요. 세 가지 방법이 있어요.
- **상시로 몰면 → '본인(부부) + 지정1인'.** 관계 제한 없이 증권에 이름을 올리면 내가 운전한 것과 똑같이 보상돼요.
- **여러 명이 번갈아 → '누구나'.** 관리가 단순하지만 보험료가 가장 비싸요.
- **여행·명절 등 잠깐 → 단기운전자확대특약.** 하루 단위로 임시로 범위를 열어요. **당일 가입은 안 되고 최소 하루 전 신청**해야 해요.

헷갈리기 쉬운 비슷한 상품 구분:

| 상품 | 언제 쓰나 | 특징 |
|---|---|---|
| 단기운전자확대특약 | **내 차를 남이** 운전 | 기존 담보 그대로, 사고 시 **차주에게 할증** |
| 원데이 자동차보험 | **남의 차·렌터카를 내가** 운전 | 차주 보험과 무관, 운전자가 보험료 부담 |
| 다른자동차운전담보 | 남의 차를 내가 운전 | 무보험차상해 가입 시 자동 부가, **상대 차 자차는 보상 없음** |

### 범위(또는 연령) 밖 사람이 사고를 내면
> [!DANGER] 대인배상I(의무보험)만 보상되고 **나머지는 전부 면책**이에요. 상대 차 수리비, 대인I 초과 손해, 내 차 수리비, 운전자·동승자 치료비를 **전액 자기 부담** — 대물 사고 한 건으로도 수천만원이 나올 수 있어요.

- 단, **도난운전**(내 동의 없이 몰래 몰고 나간 경우)은 예외로 보상돼요. '동의하에 운전'과 다르게 취급돼요.
- 약정 나이 미만인 사람이 몰다 낸 사고도 같은 구조(대인배상I만 보상)예요.

## 비교하고 가입하는 법
어떻게 구성할지 정했으면, 이제 어디서 싸게 드는지예요.

- **'보험다모아'**(공식 비교 사이트)에서 여러 회사 보험료를 한 화면에서 비교할 수 있어요.
  - 참고: **이미 가입한 보험을 갱신하려는 사람**은 만기 30일 전부터만 이 비교 조회가 돼요. **처음 가입(신규)**은 아무 때나 조회·가입할 수 있으니 첫차는 걱정 안 해도 돼요.
- 비교로 회사를 정한 뒤, 그 회사 **'인터넷(다이렉트) 바로가입'**으로 최종 가입하세요. 같은 조건이어도 회사별로 보험료가 **최대 1.5배**까지 차이 나니 최소 3곳은 비교하세요.

## 블랙박스·주행거리 사진은 언제 찍나요? (오해 주의)
- 이 사진은 **차를 사기 전이 아니라, 차를 받은 뒤 '가입(또는 특약 신청)할 때'** 찍는 거예요. 그러니 첫차라도 문제없어요.
- **블랙박스 할인**: 블랙박스를 '설치했다'는 증빙(사진)이면 돼요. 주행 영상이 필요한 게 아니에요.
- **마일리지 특약**: 가입 시점의 **계기판 주행거리(시작값)**를 찍어 둬요. 새 차라 거의 0km인 게 정상이고, 그게 바로 '시작 기록'이에요. 나중에 1년 뒤 주행거리를 다시 확인해 적게 탔으면 할인·환급을 받아요.

## 담보 고르는 실전 기준(숫자)
가입 화면에서 숫자를 고를 때 바로 쓰는 기준이에요.

> [!NOTE] **어디까지가 공식 기준인지 구분해서 보세요.**
> - **공식(약관·법령·판례) 기반**: 어떤 담보가 의무인지(대인배상I·대물배상), 담보별로 무엇을 보상하는지, 운전자 범위·배우자 인정 범위, 범위 밖 사고의 면책 구조 — 손해보험협회 표준약관과 대법원 판례에 근거해요.
> - **실전 팁(개인 경험) 기반**: 아래의 **권장 숫자들**(대물 10억, 자차 자기부담금 20%, 할증기준금액 200만원 등)이에요. 보험료 대비 유리하다는 경험적 권장값이라, 실제 금액은 **본인 견적으로 확인**해야 해요.

- **대물배상: 10억원 이상.** 2억→10억으로 올려도 추가 보험료가 수백~수천원이라 크게 잡는 게 안전.
- **무보험차상해: 한도 올려도 수천원**이라 꼭.
- **자차 자기부담금: 20% 권장**(30%보다 사고 시 내 부담이 적음).
- **물적사고 할증기준금액: 200만원**이 무난.

> [!NOTE] **이 둘은 헷갈리기 쉬운데 완전히 다른 거예요.**
> - **자기부담금** = 내 차를 고칠 때 **내가 직접 내는 수리비 몫**이에요. 수리비가 100만원이고 자기부담금 20%면 20만원은 내가 내고 나머지를 보험이 냅니다(회사별 최소·최대 한도가 있어요).
> - **물적사고 할증기준금액** = **다음 해 보험료가 오르는(할증) 기준선**이에요. 200만원으로 정해두면, 차·물건이 부서진 사고에서 보험사가 내준 금액이 200만원을 넘을 때 등급이 내려가 보험료가 올라요. 그 이하면 등급은 유지되고 무사고 할인만 유예돼요.
> - 즉 하나는 **'사고 났을 때 내 지갑에서 나가는 돈'**, 하나는 **'내년 보험료가 오르는 문턱'**이에요. 문턱(할증기준금액)을 높게 잡아두면 작은 사고로 보험료가 뛰는 걸 막을 수 있어요.
- **마일리지 특약: 무조건 가입**(추가료 없고 초과해도 불이익 없음, 주행거리는 정직하게).
- **긴급출동서비스: 약 1만 2천원**이라 권장.
- **자동차상해 한도**: 가입 화면에서 금액을 골라야 해요. 선택 가능한 범위는 **사망·후유장애 5천만원~5억원**, **부상 1천만원~1억원**이에요(보험사별로 조금씩 달라요). 통상 **사망·후유장애 3억~5억, 부상 5천만원~1억**을 권장해요.

> [!NOTE] **무보험차상해는 단독 가입이 안 돼요.** 대인배상Ⅰ·대인배상Ⅱ·대물배상·자기신체사고(또는 자동차상해)를 **모두 가입했을 때만** 넣을 수 있어요. 위 권장 구성을 그대로 따르면 자연히 조건이 충족돼요.

## 첫 보험료, 얼마쯤 나올까?
숫자를 정해 놓고 견적을 보면 마음이 편해요. 다만 **"첫 가입은 얼마"라고 딱 말해 주는 공식 통계는 없어요.**

- 그래도 **공식 비교 자료**로 대략의 수준은 볼 수 있어요: **손해보험협회 공시실 → 자동차보험공시 → 자동차보험료 → 온라인가입(CM)**에서 차종·연령·운전자범위별 예시 보험료를 볼 수 있어요.
- 여기서 조건을 고르면(예: 소형B 1,600cc / 만 31세 / 부부한정) 회사별 예시 금액이 나와요.

> [!WARN] 이 공시는 **'주가입계층 기준 예시'**예요. 가장 흔하게 가입하는 조건으로 계산한 예시라는 뜻이에요. 협회도 "가입경력·사고경력·법규위반 등을 반영한 개인의 정확한 보험료는 각 보험사에서 산정하라"고 안내해요.
> **첫 가입자는 가입경력 할증이 붙어 공시 예시보다 상당히 높게** 나와요. 또 보험료는 배기량이 아니라 **차량 모델등급요율**(차 모델마다 따로 정해 놓은 등급)로 계산되니, 공시의 '1,600cc 예시'와 내 싼타페 견적이 다른 게 정상이에요.
> 인터넷에 흔한 "첫 가입 100~200만원대"는 근거가 확인되지 않은 통념이니, **반드시 내 조건으로 견적**을 받아 보세요.

## 전문가 추천 — 초보라면 이렇게 하세요
복잡하면 아래 구성을 그대로 따라 가입해도 안심이에요. 색으로 <span class="tag-req">필수</span>·<span class="tag-rec">권장</span>을 표시했어요.

- <span class="tag-req">필수</span> **대인배상II '무한'** — 큰 사고 배상액(수억원)을 감당하려면 반드시.
- <span class="tag-req">필수</span> **대물배상 10억 이상** — 올려도 보험료 부담이 작아요.
- <span class="tag-req">필수</span> **자차(자기차량손해)** — 새 차 수리비 보장, 신차엔 필수.
- <span class="tag-rec">권장</span> **자기신체사고 대신 자동차상해** — 더 넓게 보상. 가입 화면에서 '자동차상해'가 선택됐는지 확인하세요.
- <span class="tag-rec">권장</span> **무보험차상해** — 보험 없는 차 사고 대비.
- <span class="tag-rec">권장</span> **마일리지·블랙박스 할인, 긴급출동** — 해당되면 챙기세요.

> [!CHECK] 가입이 끝나면 **그 자리에서 보험사 긴급출동 번호를 휴대폰에 저장**해 두세요(예: "○○화재 긴급출동"). 방전·펑크·사고는 대부분 "번호를 몰라 당황하는 것"부터 시작해요. 보험증권이나 보험사 앱에 번호가 나와 있어요.
- **어디서**: 초보는 **다이렉트(온라인)**가 보통 저렴. **보험다모아로 비교 후** 그 회사 홈페이지에서 가입.

> [!NOTE] 개인 상황(운전경력·차량·거주지·함께 타는 사람)에 따라 유리한 선택이 달라질 수 있어요.`,order:2,stage:"pre"},{id:"p0-driver-insurance",phase:0,title:"운전자보험",summary:["자동차보험은 사고로 다친 상대방(피해자)에게 물어주는 보험이고, 운전자보험은 사고를 낸 나 자신의 형사·행정 비용(형사합의금·변호사비·벌금)을 대신 내주는 보험이다.","보장 대상이 서로 달라 하나가 다른 하나를 대신할 수 없으므로, 운전자보험은 자동차보험에 더해 따로 가입하는 게 좋다.","보험료는 보통 월 1만~2만원대이며, 2026년부터 변호사비 특약에 자기부담금이 새로 생기는 방향으로 바뀌므로 가입 조건을 확인해야 한다."],body_md:`## 자동차보험 vs 운전자보험
- **자동차보험(의무)**: 사고로 다친 **타인(피해자)**의 신체·재물 피해(대인·대물)와 내 차 손해(자차)를 보상하는 민사 책임 중심 보험.
- **운전자보험(선택)**: 사고를 낸 **운전자 본인**의 형사·행정 책임 비용(벌금, 변호사 선임비, 형사합의금 등)과 일부 상해를 보장. 자동차보험이 커버하지 못하는 영역이다.
- 한 줄 요약: 자동차보험 = 피해자를 위한 보장, 운전자보험 = 운전자 본인을 위한 보장. 대상이 달라 서로 대체 불가.

## 운전자보험 3대 특약
- 교통사고처리지원금(형사합의금): 최대 2억원 수준 상품 존재
- 자동차사고 변호사 선임비용: 최대 5,000만원 수준
- 벌금(대인 벌금 등): 최대 3,000만원 수준
- 그 외: 가족운전자 한정 할인, 자녀 동승 보장, 카시트 위반 보장, 면허취소 위로금 등.
- 비용: 월 **1만~2만원대**가 보편적(자동차보험료의 약 10~20%). 건강 상태와 무관하게 가입 가능. 동일 보험사 자동차보험 가입자에게 5% 할인 등 연계 프로모션도 있다.

## 2026년 제도 변화 (주의)
- 2026년부터 **변호사 선임비용 특약에 자기부담금이 신설·확대**되고 보장이 축소되는 방향으로 개정되었다는 설명이 다수 출처에서 일관되게 나온다(금감원 권고에 따른 표준약관 개정, 2026년 1월경). 반면 경상 관련 자기신체사고 보장은 강화되는 흐름.
- 기존 조건이 유리하다면 개정 전 조건 유지 여부를 확인할 필요가 있다(정확한 개정 일자·자기부담률은 보험사 약관 원문으로 재확인).

## 중복 여부
- 완전 중복 항목은 없으나 자동차보험의 자기신체사고와 운전자보험 상해 보장이 일부 겹칠 수 있다.
- 형사합의금·변호사비·벌금 같은 실손 성격 특약은 여러 개 가입해도 손해액을 초과해 중복 지급되지 않고 **비례 보상**되므로, 가족별 계약에 같은 특약이 중복돼 있으면 정리해 보험료를 아낄 수 있다.
- 결론: 운전자보험은 자동차보험의 대체재가 아니라 **보완재**로 별도 가입 권장.`,field_tips_md:null,checklist:["자동차보험(타인 배상)과 운전자보험(본인 형사·행정 책임)의 차이 이해하기","형사합의금·변호사비·벌금 3대 특약이 포함됐는지 확인하기","2026년 변호사비 특약 자기부담금 신설 여부를 약관에서 확인하기","가족 구성원 계약에 같은 특약이 중복돼 있지 않은지 점검하기","자동차보험 특약이 아니라 운전자보험으로 별도 가입 검토하기","손해보험협회 공시실(상해·운전자보험)에서 비교 후 가입하기 — 사설 유사 사이트 주의"],sources:[{name:"뱅크샐러드",url:"https://www.banksalad.com/articles/운전자보험-필요성-비교-자동차보험-차이-가격-필수",type:"media"},{name:"머니룩(asiatop.co.kr)",url:"https://asiatop.co.kr/insurance-personal/driver-vs-car-insurance-overlap-cleanup/",type:"media"},{name:"베이비빌리",url:"https://villagebaby.kr/driver/운전자보험-vs-자동차보험-차이/",type:"media"},{name:"손해보험협회 공시실 — 상해(운전자)보험 비교공시",url:"https://kpub.knia.or.kr/productDisc/longTermGuarantee/accidentCarInsurance.do",type:"official"},{name:"금융위원회 — 보험다모아 오픈(취급 보종)",url:"https://www.fsc.go.kr/no010105/22972",type:"official"}],flags:[],valid_year:2026,car_scope:"generic",source_files:["web/p0-운전자보험-vs-자동차보험-03.md"],body_easy_md:`한마디로: **자동차보험은 '차'에, 운전자보험은 '사람'에** 딸린 보험이에요. 그래서 운전자보험은 가족이 들어도 나는 보호받지 못하고, **내가 직접** 들어야 해요.

## 헷갈리는 관계부터 정리 (차·사람·보험)
| 구분 | 무엇에 딸리나 | 무엇을 보상하나 | 누가 보호받나 |
|---|---|---|---|
| 자동차보험(의무) | **차** (한 대당 1개) | 사고 배상·차량 손해 | 그 차를 '운전자 범위' 안에서 모는 사람 |
| 운전자보험(선택) | **사람** (개인) | 내 형사 합의금·벌금·변호사비 | 가입한 '그 사람'만 |

## 자동차보험은 '차'에 붙어요
표로 감을 잡았다면, 이제 하나씩 자세히 볼게요. 먼저 자동차보험부터예요.
- 차 **한 대마다 하나** 들어요. "이 차로 사고가 나면" 보상하는 구조예요.
- 누가 운전할 때 보상되는지는 **운전자 범위**로 정해요(나 1인 / 부부 / 가족 / 누구나).
  - 참고: '가족 한정'의 가족은 **양가 부모(양부모·계부모 포함), 배우자(사실혼 포함), 자녀(양자녀·계자녀 포함), 며느리·사위**까지예요. **형제·자매는 포함되지 않아요**(형제가 몰다 사고 나면 보상이 제한돼요).
  - 며느리·사위는 **법적으로 혼인한 경우만** 인정돼요(자녀와 사실혼 관계인 사람은 제외 — 대법원 2013다66966).
- 사고 이력과 할증은 **그 차 계약의 주인(기명피보험자)**에게 쌓여요.
- 그래서 "한 차에 나·가족·타인을 등록한다"기보다는, **그 차 보험의 '운전자 범위'를 어디까지 넓힐지**를 정하는 거예요.

## 운전자보험은 '사람'에 붙어요
자동차보험을 봤으니, 이번엔 운전자보험 차례예요.
- 운전자보험은 **가입한 그 사람 개인**을 따라다녀요. 그 사람이 **어느 차를 몰든**(내 차든 남의 차든) 사고 시 그 사람의 형사·행정 비용을 보장해요.

> [!WARN] 가족이 든 운전자보험으로 내가 보호받지는 않아요. 나를 지키려면 **내가 직접** 가입해야 해요.

> [!CHECK] 일부 상품은 배우자·자녀를 피보험자로 함께 넣을 수 있어요. 이런 상품인지는 가입 전에 확인하세요.

## 같은 보장이 두 번 들어가 있진 않나요?
두 보험의 성격 차이를 알았다면, 이제 실제로 흔히 겹치는 상황을 짚어볼게요.

### 왜 같은 보장이 겹치나요
- 나도 모르게 **같은 보장이 두 번** 들어가 있을 수 있어요. 예: **자동차보험에 옵션으로 붙이는 '운전자 특약'**과 **따로 가입한 운전자보험**이 벌금·변호사비를 둘 다 보장하는 경우죠.

### 실손형과 정액형, 다르게 대응하세요
- **치료비처럼 '쓴 만큼만' 주는(실손형) 보장은 여러 개 들어도 실제 손해까지만** 나와요 → 중복 가입은 보험료 낭비예요.
- 반대로 **벌금·형사 합의금처럼 '정액'으로 주는 보장은 중복 가입 시 각각 받을 수도** 있어요(상품 약관마다 달라요).
- 그러니 새로 들기 전에 **이미 있는 보장과 겹치는지 확인**하고, 겹치는 실손형 특약은 정리하면 돼요.

## 초보 정리
지금까지 내용을 한 줄씩 정리하면 이래요.
- **자동차보험** = 차마다 필수. 함께 탈 사람은 '운전자 범위'로 지정.
- **운전자보험** = 사람마다 선택. 내가 보호받으려면 내가(또는 나를 피보험자로 포함하는 상품으로) 가입.

## 어디서 비교하고 가입하나요?
자동차보험은 '보험다모아'로 비교하면 되는데, **운전자보험은 보험다모아에 단독 비교 메뉴가 없어요.** 대신 공식 비교 창구가 따로 있어요.

- **손해보험협회 공시실** → **상품비교공시 → 장기보장성 보험 → 상해(운전자)보험**
  - 법에 근거한 공식 비교공시라 회사별 상품을 나란히 볼 수 있어요.
  - 다만 **표준·기본 예시 기준**이라 내 실제 보험료와는 차이가 나요.
- 비교로 후보를 좁힌 뒤, 각 **보험사 다이렉트(온라인)**나 설계사를 통해 가입하면 돼요.

> [!WARN] '보험다모아'를 검색하면 **비슷한 이름의 사설 사이트가 상위에 여러 개** 떠요. 공식 사이트 주소는 **e-insmarket.or.kr**(생명·손해보험협회 공동 운영)이에요. 개인정보를 넣기 전에 주소를 꼭 확인하세요.

> [!TIP] 무엇을 고를지 헷갈리면 **보장 세 가지(형사 합의금·변호사비·벌금)**가 들어 있는지부터 확인하세요. 그리고 이미 가입한 자동차보험에 같은 특약이 붙어 있지 않은지도 함께 보면 좋아요.
> 참고로 **자동차상해(자동차보험)는 내 치료비·위자료**를, **운전자보험은 형사 합의금·변호사비·벌금**을 맡아요. 역할이 달라서 "자동차상해를 들었으니 운전자보험은 필요 없다"는 말은 절반만 맞아요.`,order:3,stage:"pre"},{id:"p0-inspection-handover",phase:0,title:"신차 인수 검수",summary:["신차 인수 검수는 새 차를 받을 때 흠이 없는지 내가 직접 살펴보는 일로, 밝은 곳에서 스마트폰 플래시만 있으면 10~20분이면 됩니다.","겉모습(틈·도장·스크래치) → 실내(버튼·기능) → 엔진룸 → 짧은 시운전 → 서류 순으로 보고, 패널 사이 틈(단차)은 3mm까지는 정상이에요.","문제를 찾으면 인수증에 사인하기 전에 어떻게 할지 정하고, 사인한 뒤 발견한 흠은 브랜드 서비스센터에서 보증기간 안에 고치면 됩니다."],body_md:`## 검수 전 마음가짐
- 새 차에 흥분하지 말고 차분하게 하나씩 본다. 어두운 곳보다 밝은 곳에서, 어두우면 **스마트폰 플래시**를 비춰 각도를 달리하며 본다.
- 비 오는 날은 물기 때문에 스크래치가 안 보이니 맑은 날 다시 확인하는 것이 좋다.
- 검수 전체 소요시간은 대략 **10~20분**.

## 1. 외관 검수
- **단차(패널 틈) 확인**: 보닛-펜더, 도어-도어, 도어-몸체, 트렁크 등 면이 만나는 부위의 높낮이·틈 간격을 **좌우 대칭으로 비교**한다. 제조사 기준 **3mm까지는 정상**이며, 자를 대지 않고 육안으로 좌우 차이가 뚜렷하면 문제로 본다. 단차가 크면 주행 잡음·누수로 이어질 수 있다.
- **도장면**: 정면보다 측면에서 비스듬히 보고 플래시를 비춘다. 손으로 만져 이물질(도색똥·기포)이 껄껄한지 확인. 도어 하단 모서리에 페인트가 방울처럼 맺혀 굳은 부분은 나중에 깨져 녹이 생길 수 있어 유심히 본다. 범퍼(플라스틱)와 차체(철판)의 미세한 색감 차이는 정상.
- **유리·휠**: 창문을 내려 유리 끝단까지, 램프 테두리·휠 스크래치를 확인.
- **개폐**: 도어·트렁크·보닛이 잘 열리고 닫히는지 반복 테스트. 주유구 뚜껑 단차, 실링(고무 패킹) 상태도 확인.
- 탁송 중 생긴 경미한 돌빵(스톤칩)이나 가벼운 스크래치는 주행 중에도 생기는 수준이면 크게 개의치 않아도 된다. 휠하우스의 위치 고정용 스티커는 떼어낸다.

## 2. 실내 검수 (시동 건 상태)
- 내장재(시트·트림·헤드라이닝·필러)의 스크래치·오염·봉제선 하자 확인. 작업자 옷에 묻은 정도의 가벼운 오염은 지워지면 무방.
- 기능 버튼을 하나씩: 창문·사이드미러(각도/접이/소음), 송풍구 방향, 온도 다이얼(좌우), 기어 D/N/R/P, 드라이브 모드, 열선·통풍시트(앞뒤), 오토홀드, 후방카메라·서라운드뷰, 썬루프(커버·유리·틸트), 실내등, 오디오/내비 음량, 핸들 버튼, 방향지시등·와이퍼·전조등, 계기판 경고등.
- 콘솔·트림을 살짝 흔들어 잡소리(삑삑음)가 없는지 확인. 뒷좌석 열선·창문·폴딩도 점검.
- 옵션 사양(마사지 시트, 향 카트리지 등)은 별도 장착·인식이 필요해 처음엔 작동 안 하는 것이 정상일 수 있다.

## 3. 엔진룸 검수
- 보닛을 열어 엔진오일·냉각수 등이 제대로 차 있는지, 부식·이물질·풀린 볼트 흔적이 없는지 확인. 시동을 3~5회 걸었다 끄며 RPM 안정성과 떨림을 본다(내연기관 기준).

## 4. 시운전
- 딜러 동의를 얻어 5분 정도 실제 도로를 주행하며 이상 유무를 확인한다.

## 5. 서류 확인 및 서명
- 임시운행증, 세금계산서, 인수증, 차량등록증 등 서류를 챙기고 서명한다.
- **문제는 서명 전에 처리 여부를 결정**한다. 서명 후 발견분은 브랜드 서비스센터(블루핸즈·오토큐 등)에서 보증기간 내 조치받는다. 미처 체크 못한 하자는 이후 자비 부담이 될 수 있다.`,field_tips_md:`> 아래는 유튜브(블라인드_Car Story·차업차득·오토하우스·mr park 등) 출처의 실전 팁.

## 판단·바가지 관련 실전 팁
- 검수 업체가 실제로 쓰는 시간은 한 대당 **3~5분** 수준에 불과하고, 결함이 아닌 것을 부풀려 통보하는 경우도 있다. 차주가 애정을 갖고 보면 오히려 더 꼼꼼히 볼 수 있다.
- 신차 검수를 빌미로 한 **썬팅 등 부가서비스 가격이 업체별로 최대 2배**까지 차이 난다(같은 제품 90만원 vs 그 이상). 공포 마케팅에 흔들리지 말고, 감수 가능한 수준이면 서명 후 원하는 샵에서 따로 진행한다.
- 새 차인데 딜러가 본넷·패널을 **'교체'해준다면 오히려 의심**하라. 교체 이력은 재판매 시 감가 요인이므로, 조정(재정렬)으로 해결되는 수준이면 조정을 요구하는 편이 유리하다.
- 심각한 불량은 정식 항의로 환불이 받아들여진 사례도 있다.

## '고장 아님' 헷갈리기 쉬운 정상 동작
- 송풍구를 두 개 이상 열면 각 구멍 바람이 세지는 것, 듀얼 에어컨 좌우 온도가 다른 것(Sync 버튼으로 통일), 계기판의 음영(그림자) 처리는 모두 **정상**이다.
- 향 카트리지 등 옵션은 별도 장착·인식 전에는 작동하지 않는 것이 정상.

## 검수는 누가? — 본인이 직접 (영상 정리)
- 차가 오기까지 공장 → (수입차 PDI) → 딜러 → 썬팅샵에서 여러 번 검수하지만, 사람이 하는 일이라 결함이 남을 수 있고 딜러가 재고차·수리차를 고지 안 할 수도 있다.
- 유료 검수 대행은 여러 대를 한꺼번에 봐 부실할 수 있고, '썬팅+검수 패키지'는 썬팅 단품보다 비싼 경우가 많다. 두 눈과 애정만 있으면 누구나 할 수 있으니 **직접**, 전시장 도착 시 약 1시간 잡고 보는 것을 권한다.
- '정상 범주' 예시: 신차 주행 50km 미만, 단차 3mm 이내, 배터리·엔진 떨림·버튼 작동 정상.

## 출고 후 3일 타임라인 (오토하우스)
- **Day1(출고 당일)**: 신차 검수 → 이상 없으면 썬팅·블랙박스 작업 맡김.
- **Day2(작업 후 인도)**: 비닐 뜯기 — 특히 **바닥 매트 밑 카펫 비닐**(대부분 안 뗌 → 곰팡이), 안전벨트 비닐·고무밴드, 문콕 방지 스펀지(오래되면 도장 손상 → 도어엣지 PPF 권장), 엔진후드 비닐. 단, 딱딱한 **스톤칩 방지 필름은 떼지 말 것**.
- **Day3**: 썬팅 상태 확인(며칠 뒤가 더 정확) + 베이크아웃(히터 강하게 가동 후 환기 → 새차증후군 저감).

## 실제 인수거부 사례에서 배우는 판단
- 스포티지·그랜저 검수 영상에서 좌우 비대칭 단차, 하이글로시 찍힘, **대시보드 우드 트림 파손**(신차 4km인데 손대면 부스러기) 같은 하자가 실제로 나왔다.
- 기능·안전과 무관한 트림이라도 **신차에서 나올 수 없는 파손은 교체 요구가 정당**하다.
- 다만 인수거부는 감정만이 아니라 **시점 손익**(개별소비세·프로모션·연식 이월로 재계약 시 추가 부담 등)을 함께 계산해 결정한다. 수리 협의로 해결되는 경우가 많다.`,checklist:["출고 전 카마스터에게 준비물·잔금 방식·인수 장소(탁송/직접) 확인하기","밝은 곳에서 스마트폰 플래시로 도장면·유리 스크래치 확인하기","보닛·도어·트렁크 단차를 좌우 대칭으로 비교(3mm까지 정상)하기","시동 건 상태에서 모든 기능 버튼(창문·시트·에어컨·미러·썬루프 등) 눌러보기","내장재 오염·스크래치와 잡소리(삑삑음) 확인하기","엔진룸 오일·냉각수·풀린 볼트 흔적과 RPM 안정성 점검하기","5분 정도 시운전으로 주행 이상 확인하기","문제 발견 시 인수증 서명 전에 조치 여부 결정하기","임시운행증·세금계산서·인수증·차량등록증 서류 챙기기"],sources:[{name:"블라인드_Car Story (유튜브)",url:"https://youtu.be/LllKKY74jhg",type:"personal"},{name:"차업차득 (유튜브)",url:"https://youtu.be/fmcqREQPs00",type:"personal"},{name:"오토하우스 (유튜브)",url:"https://youtu.be/TUpmp_jcaHw",type:"personal"},{name:"mr park (유튜브)",url:"https://youtu.be/aZ224HN3NZU",type:"personal"},{name:"법제처 생활법령정보 — 자동차 구입·관리",url:"https://easylaw.go.kr/CSP/CnpClsMain.laf?csmSeq=675&ccfNo=1&cciNo=1&cnpClsNo=1",type:"official"},{name:"현대자동차 — 보증 제외 항목",url:"https://www.hyundai.com/kr/ko/purchase-event/policy-Information/warranty/exclution-of-warranty",type:"official"},{name:"차사로가자 윤사로 (유튜브)",url:"https://youtu.be/QTOy3L5teWI",type:"personal"},{name:"Hwanhee's dad (유튜브)",url:"https://youtu.be/P7hMIQX4etA",type:"personal"},{name:"팀 좋은소리 TV (유튜브)",url:"https://youtu.be/yOnV57MJCog",type:"personal"},{name:"오토하우스 (유튜브)",url:"https://youtu.be/6DPtWqXV-80",type:"personal"},{name:"현대자동차 2026 싼타페 하이브리드 가격표(출고센터 제약)",url:"https://www.hyundai.com/contents/repn-car/catalog/santafe-hev-2026-price.pdf",type:"official"}],flags:["단독출처"],valid_year:null,car_scope:"generic",source_files:["youtube/p0-신차인수검수-01.md","youtube/p0-신차인수검수-02.md","youtube/p0-신차인수검수-03.md","youtube/p0-신차인수검수-04.md","youtube/p0-신차인수검수-05.md","web/newcar-handover-inspection-phase0-2026.md","youtube/p0-신차인수검수-06.md","youtube/p0-신차인수검수-07.md","youtube/p0-신차인수검수-08.md","youtube/p0-신차인수검수-09.md","web/verification-cycle-santafe-hev-20260726.md"],body_easy_md:`한마디로: 새 차 받을 때, 밝은 곳에서 스마트폰 플래시 켜고 10~20분만 차분히 살펴보면 돼요.

## 출고 당일 — 미리 확인해 둘 것
당일에 필요한 준비물·잔금 처리 방식은 **딜러(카마스터)·지점마다 달라서 정해진 표준이 없어요.** 그래서 "이렇게 하면 된다"고 단정하기보다, **미리 물어봐 두는 게** 가장 확실해요.

카마스터에게 이렇게 확인하세요.

- **"당일 가져갈 서류·준비물이 뭔가요?"** (신분증 외에 도장·서류가 필요한지)
- **"잔금은 언제, 어디로 보내면 되나요?"** (계좌이체인지, 언제까지인지)
- **"취득세·등록 비용은 잔금에 포함인가요, 따로 내나요?"** (별도 가상계좌로 받는 경우가 있어요)
- **"인수 장소는 어디이고, 탁송(차를 받을 곳까지 대신 옮겨 주는 것)인가요 직접 인수인가요?"**

> [!CHECK] **이체 한도를 미리 확인**하세요. 잔금은 금액이 커서 은행 앱의 **1회·1일 이체 한도**에 걸릴 수 있어요. 한도 상향은 즉시 안 되는 경우도 있으니 **며칠 전에** 확인해 두면 당일에 당황하지 않아요.

### 탁송으로 받을까, 직접 가서 받을까
- **직접 인수(지점·출고센터)**: 주행거리가 가장 적고, 하자를 발견하면 **현장에서 바로** 조치를 요구할 수 있어요. 대신 오가는 시간·교통비가 들어요.
- **탁송**: 편하지만, 받은 뒤에 하자를 발견하면 별도 절차를 밟아야 해요.

> [!WARN] 탁송이라면 **"캐리어(차에 실어서) 탁송인지, 핸들 탁송(기사가 직접 몰고 오는 것)인지"** 꼭 확인하세요. 핸들 탁송은 **주행거리가 수백 km 늘어날 수 있어요.**
> 또 **순정 액세서리(H Genuine Accessories) 옵션을 넣으면 특정 출고센터(남양·칠곡·영남)에서만 출고**돼요. 이 경우 이미 캐리어 비용이 발생해 직접 인수해도 탁송료가 크게 줄지 않을 수 있어요.
> (탁송료 실제 금액과 절감폭은 견적서·카마스터 확인이 정확해요. 인터넷의 금액은 사례일 뿐이에요.)

## 시작 전에
- 어두운 곳보다 밝은 곳에서 보고, 어두우면 **스마트폰 플래시**를 여러 각도로 비춰 보세요.
- 비 오는 날은 물기 때문에 스크래치가 안 보이니, 맑은 날 다시 확인하면 좋아요.

## 1. 겉모습(외관)
- **틈(단차) 보기**: 보닛-펜더, 문과 문, 문과 몸체, 트렁크처럼 면이 만나는 부분의 틈을 **좌우로 비교**하세요. 제조사 기준 **3mm까지는 정상**이고, 자를 안 대도 좌우 차이가 눈에 확 띄면 문제로 봐요. 틈이 크면 주행 중 소음이나 물 새는 원인이 될 수 있어요.
- **도장(페인트) 면**: 정면보다 **옆에서 비스듬히** 플래시를 비춰 보고, 손으로 만져 오돌토돌한 이물질이 없는지 확인하세요. 문 아래 모서리에 페인트가 방울처럼 굳은 부분은 나중에 깨져 녹이 생길 수 있으니 잘 보세요. (범퍼 같은 플라스틱과 철판 차체의 미세한 색 차이는 정상이에요.)
- **유리·휠**: 창문을 내려 유리 끝까지, 램프 테두리와 휠에 스크래치가 없는지 봐요.
- **여닫기**: 문·트렁크·보닛이 잘 열리고 닫히는지, 주유구 뚜껑과 고무 패킹도 확인하세요.
- 옮겨 오는 중 생긴 작은 스톤칩이나 가벼운 스크래치는 크게 신경 안 써도 돼요.

## 2. 실내 (시동 켠 상태로)
- 시트·내장 패널 같은 내장재에 스크래치·오염·바느질 하자가 없는지 봐요. (작업자 손자국처럼 지워지는 오염은 괜찮아요.)
- **기능 버튼을 하나씩** 눌러 보세요: 창문, 사이드미러(각도·접기), 송풍구, 온도 조절(좌우), 기어(D/N/R/P), 주행 모드, 열선·통풍시트(앞뒤), 오토홀드, 후방카메라·서라운드뷰, 썬루프, 실내등, 오디오·내비, 핸들 버튼, 방향지시등·와이퍼·전조등, 계기판 경고등.
- 콘솔·내장 패널을 살짝 흔들어 잡소리가 나는지, 뒷좌석 열선·창문도 확인하세요.
- 마사지 시트, 향 카트리지 같은 옵션은 처음엔 작동 안 하는 게 정상일 수 있어요(별도 등록 필요).

## 3. 엔진룸
- 보닛을 열어 엔진오일·냉각수가 잘 차 있는지, 부식이나 풀린 볼트 흔적이 없는지 봐요. 시동을 3~5번 켰다 꺼 보며 떨림이 없는지 확인하세요.

## 4. 시운전
- 딜러 동의를 얻어 5분 정도 실제로 몰아 보며 이상이 없는지 확인해요.

## 5. 서류와 사인
- 임시운행증, 세금계산서, 인수증, 차량등록증을 챙겨요.
- **문제는 사인하기 전에** 어떻게 처리할지 정하세요. 사인한 뒤 찾은 흠은 브랜드 서비스센터(블루핸즈·오토큐 등)에서 보증기간 안에 고칠 수 있어요.

## 하자를 발견하면? (사인 전이 핵심)
- **인수 서류에 사인하기 전**이 가장 힘이 세요. 이때는 차 소유권이 아직 회사에 있어서, 하자를 이유로 **인수를 거부하거나 교환·수리 후 재출고를 요구**할 수 있어요.
- 하자를 보면 먼저 **여러 각도로 사진·영상**을 찍어 기록하세요.
- 가벼운 하자: **"수리해 주겠다"는 약속을 서면(인수증·확인서)으로 받은 뒤** 인수해도 돼요.
- 중대한 하자(도장 불량 다수, 패널 교체 필요, 주행 관련 결함, 프레임 손상 등): **인수를 보류하고 교환**을 요구하세요.
- 협의는 보통 두 갈래예요: ① **차를 먼저 받고 나중에 무상 수리를 보장받기(+ 약간의 추가 혜택)**, ② **수리 대신 현금·다른 보상**을 받고 그대로 인수하기. 재고가 있으면 **동일 모델로 교환**, 없으면 대기 후 인도.
- 명확한 결함으로 인수를 거부하면 **다음 생산분에서 우선 배정**하는 게 통례예요(대개 한 달 내외지만 모델·수급에 따라 달라지는 관행 수준의 정보).

> [!NOTE] 구두 약속은 힘이 약해요. **"○○ 하자 미해결"을 인수증·확인서에 특기사항으로 적거나 문자·이메일로 서면화**하세요. 틴팅·유리막·블랙박스 시공은 **검수를 마친 뒤**에 해야 나중에 원인 다툼이 안 생겨요.

### 현장에서 이렇게 요구하세요 (문구 예시)
말로 "고쳐주세요"만 하면 나중에 근거가 없어요. 담당자에게 이렇게 부탁하면 돼요.

> "지금 발견한 하자를 **인수증 특기사항란에 적어** 주시고, 저도 사진 찍어 두겠습니다."

특기사항에 들어가면 좋은 문구예요(날짜·부위·조치·기한을 넣는 게 핵심).

- \`2026-07-29 인수 시 확인: 운전석 뒤 도어 하단 도장 흠집 1개소 — 미해결. 무상 도장 보수 예정(○월 ○일까지).\`
- \`2026-07-29 인수 시 확인: 조수석 앞 펜더-범퍼 단차 좌우 차이 — 재조정 후 재인도 조건으로 인수.\`
- \`2026-07-29 인수 시 확인: 대시보드 내장 패널 파손 — 부품 교체 예정(담당 ○○○, 연락처 ○○).\`

> [!TIP] 특기사항을 적은 **인수증은 사인 전에 사진으로 남기고**, 담당자에게 문자로도 "위 내용 확인 부탁드립니다"라고 보내 **기록을 이중으로** 만들어 두면 가장 안전해요. 문자 답장 한 줄이 나중에 큰 힘이 돼요.

## 인수한 뒤에 발견했다면 (기간이 중요)
- **품질보증(하자보증) 기간 안**의 기능·부품 결함은 브랜드 서비스센터에서 **무상 수리** 대상이에요(부위별 기간은 '무상보증 확인' 참고). 발견하면 바로 접수하세요.
- (일부에서 '인도 후 7일·500km 이내면 무상수리'라고 하지만, **법령·제조사 공식 안내에서 확인된 기준은 아니에요.** 그냥 **보증기간 안이면 무상수리**로 이해하고, 이상하면 빨리 접수하는 게 핵심이에요.)
- **교환·환불(한국형 레몬법)**은 더 엄격해요: **인도 후 1년(또는 2만km) 이내**에 **중대한 하자가 2번(일반 하자는 3번) 재발**하거나 **누적 수리기간이 30일**을 넘으면 대상이에요(요건은 '레몬법 교환·환불' 참고).

## 인수 거부·청약철회 (계약을 되돌리려면)
- **청약철회**: 자동차 할부계약은 **계약서 받은 날부터 7일 이내**면 서면으로 청약을 철회할 수 있어요. 단 **차를 사용(등록·주행)하면 철회가 안 돼요.** 되돌리려면 **인수·등록 전**에 움직여야 해요.
- **인수(인도) 거부**: 계약과 다른 차(색상·사양·차대번호·연식 불일치), 탁송 중 파손, 재도색·판금 이력, 조립 불량 소음 등은 "약속대로 준 게 아니므로" **수령을 거절하고 정비·재배정을 요구**할 수 있어요.

> [!WARN] 차가 **등록되면 되돌리기 어려워요.** 번호판·등록증이 나오면 사실상 인수거부가 힘들어지고, 등록을 지우는 것(말소)도 예외적으로만 돼요. 그러니 **사인·등록 전에** 결정하세요.

## 지금 꼭 봐야 하는 것 vs 나중에도 되는 것
- **인수 전에 꼭 봐야 하는 것(나중엔 인정 어려움)**: 외관 스크래치·찍힘·도장 불량, 유리·휠 흠집처럼 **눈에 보이는 손상**. 인수 후엔 "내가 낸 것 아니냐"는 다툼이 생겨 보상이 어려워요.
- 실제로 제조사 보증은 **외관·오염·변색·찍힘, 스톤칩·스크래치, 유리 손상, 휠 긁힘**을 **보증에서 제외**해요. 즉 이런 건 **인도 순간의 상태로 판정**되니 지금 꼼꼼히 봐야 해요.
- **나중에 발견해도 보증되는 것**: 엔진·변속기·전자장치 같은 **부품·기능 결함**은 보증 기간 안이면 무상 수리돼요.
- 즉 **겉모습은 지금 꼼꼼히**, 기능 결함은 쓰다가 발견해도 보증으로 커버된다고 생각하면 돼요.

## 재고차·전시차·시승차라면 이걸 더 보세요
- **제조일자(연식)**: 운전석 문틀 스티커나 등록증에서 언제 만든 차인지 확인(오래 세워 둔 차인지).
- **주행거리**: 전시·시승차는 0km가 아닐 수 있으니 계기판을 꼭 확인.
- **배터리**: 오래 세워 두면 12V 배터리가 약해질 수 있어 시동·전기장치 상태 확인.
- **타이어·고무**: 타이어 옆면 **제조주차(4자리 숫자)**로 오래된 타이어인지, 와이퍼·고무 패킹이 굳지 않았는지 확인.
- **외관**: 오래 전시된 차는 미세한 색바램·먼지 흠집이 있을 수 있어요.
- 재고·전시차는 그만큼 **가격 할인**을 요구할 여지가 있어요.

## 알아두면 좋은 점
- 검수 업체도 실제론 한 대에 3~5분 정도만 봐요. 애정 갖고 내가 보면 더 꼼꼼해요.
- 검수를 핑계로 파는 썬팅 같은 부가서비스는 업체마다 값이 최대 2배까지 차이 나니, 겁주는 말에 흔들리지 말고 원하는 곳에서 따로 하세요.
- 새 차인데 딜러가 패널을 **'교체'해준다면 오히려 의심**하세요. 교체 이력은 나중에 팔 때 값이 깎이는 요인이라, 조정(재정렬)으로 되는 수준이면 조정을 요구하는 게 유리해요.
- 헷갈리기 쉬운 **정상 동작**: 송풍구 여러 개 열면 바람 세지는 것, 좌우 에어컨 온도가 다른 것, 계기판 그림자 처리는 모두 정상이에요.`,order:5,stage:"day"},{id:"p0-lemon-law",phase:0,title:"레몬법 교환·환불",summary:["레몬법은 새로 산 차에 큰 하자가 반복되면 새 차로 교환하거나 환불받을 수 있게 해주는 제도예요.","차를 받은 지 1년(주행 2만km) 안에 엔진·조향·제동 같은 중대한 하자를 2번 고쳐도 또 생기거나(일반 하자는 3번), 고친 기간을 합쳐 30일이 넘으면 대상이 됩니다.","계약서에 '하자 시 교환·환불 보장'과 중재 동의가 들어 있어야 하고, 차 받은 날부터 2년 안에 국가기관인 자동차안전·하자심의위원회에 중재를 신청하면 됩니다."],body_md:`## 레몬법이란
국내에서 자기인증되어 판매된 신차에 하자가 반복될 때 **신차 교환 또는 환불**을 요구할 수 있게 한 제도(자동차관리법 제47조의2~제47조의4). 사업용 자동차를 2대 이상 소유한 운수사업자는 제외.

## 교환·환불 공통 요건 (제47조의2 제1항)
1. 하자 시 교환·환불 보장 등이 포함된 **서면계약**으로 판매된 자동차일 것
2. 구조·장치의 하자로 안전 우려, 경제적 가치 훼손, 또는 사용 곤란일 것
3. 인도 후 **1년 이내(주행거리 2만km 초과 시 기간 지난 것으로 봄)**에 발생한 하자로서 아래 중대한/일반 하자에 해당할 것

## 중대한 하자 vs 일반 하자
- **중대한 하자**: 원동기·동력전달·주행·조종·조향·제동·완충·연료장치, 주행 관련 전기·전자장치, 차대(차체) 등에서 같은 증상의 하자를 **2회 이상 수리했으나 재발**. 다만 1회 이상 수리 + **누적 수리기간 총 30일 초과** 시에도 포함.
- **일반 하자**: 그 밖의 구조·장치에서 같은 증상 하자를 **3회 이상 수리했으나 재발**(또는 1회 이상 수리 + 누적 30일 초과).
- **하자 재발 통보 의무**: 중대한 하자는 1회, 일반 하자는 2회 수리 후 재발 시 그 사실을 제작사에 통보해야 한다(누적 수리 30일 초과 시 통보한 것으로 간주).

## 하자의 추정 (제47조의3)
- 인도일부터 **1년 이내에 발견된 하자는 인도 시점부터 있었던 것으로 추정**(2024.2.13 개정으로 6개월→1년 연장, 입증책임 전환).
- 단, 소유자 과실·사고·고의 파손·비인가 정비·튜닝·침수·자연재해 등은 추정 예외.

## 중재 신청 절차
1. 중재는 **제작사가 사전에 중재규정을 수락**했거나, 소유자가 매매계약/신청 시 수락한 경우 개시된다(전 차종 강제 아님).
2. 신청서(시행규칙 별지 제62호의3) + 수리내역·신분증·자동차등록증 사본 등을 자동차안전·하자심의위원회에 제출.
3. 흠 보정 → 피신청인(제작사) 접수통지·30일 내 답변서 → 위원 3인 중재부 구성 → 심리(비공개, 필요시 차량 검증·시운전) → 필요시 성능시험대행자 사실조사(30일) → **중재판정(심리종결 30일 내)** → 판정 이행(정본 송달 30일 내 차량 인도·교환/환불).

## 환불금액 계산 (시행규칙 제98조의6)
> 환불금액 = 총 판매가격 × (1 − 환불 시 주행거리(km) ÷ 150,000) + 필수비용(취득세, 등록번호판 발급수수료)

- 단, 하자와 무관한 사고 등으로 차량 가치가 현저히 훼손된 경우에는 중재부가 별도 산정.

## 적용 기한 정리
- 중재 신청 기한: 인도일부터 **2년 이내**
- 하자·수리횟수 산정 기간: 인도 후 **1년 이내(또는 2만km 이내)**
- 하자 존재 추정 기간: 인도일부터 **1년 이내**
- 제도 시행일: 2019.1.1`,field_tips_md:null,checklist:["계약 시 '하자 교환·환불 보장'과 중재규정 수락이 포함된 서면계약서 받기","구매한 제작사가 중재규정 수락 제작사인지 확인하기","하자 발생 시 수리 일자·증상·수리기간을 기록으로 남기기","중대한 하자 1회(일반 2회) 수리 후 재발하면 제작사에 재발 통보하기","누적 수리기간이 30일을 넘는지 확인하기","인도일로부터 2년 이내에 자동차안전·하자심의위원회에 중재 신청하기"],sources:[{name:"법제처 국가법령정보센터(자동차관리법 제47조의2~4)",url:"https://www.law.go.kr/법령/자동차관리법",type:"official"},{name:"국토교통부 자동차안전·하자심의위원회",url:"https://adr.katri.or.kr/online-arbitration/arbitrationRules.do",type:"official"},{name:"자동차안전·하자심의위 판정통계(한국교통안전공단 정보공개청구 회신) — 수집분",url:"https://www.korea.kr/news/policyNewsView.do?newsId=148909817",type:"official"}],flags:[],valid_year:2026,car_scope:"generic",source_files:["official/p0-레몬법-03.md","web/newcar-handover-inspection-phase0-2026.md","official/p0-레몬법-판정통계-17.md","web/first-car-guide-source-verification-2026-07-25.md"],body_easy_md:`한마디로: 새 차에 큰 하자가 반복되면 교환·환불받을 수 있는 제도. 단, 조건과 기한을 지켜야 해요.

## 레몬법이란
- 국내에서 판매된 새 차에 하자가 반복될 때 **새 차 교환 또는 환불**을 요구할 수 있게 한 제도예요. (2019년 1월 1일 시행)
- 영업용 차를 2대 이상 가진 운수사업자는 대상이 아니에요.

## 어떤 경우에 되나요? (공통 조건)
아래 **세 가지를 모두** 충족해야 해요.

1. 계약서에 **'하자 시 교환·환불 보장'**이 들어 있는 서면계약으로 산 차일 것
2. 차의 구조·장치 하자로 안전이 걱정되거나, 값어치가 크게 떨어지거나, 쓰기 어려울 것
3. 차를 **받은 지 1년 이내(주행 2만km 이내)**에 생긴 하자일 것

## 중대한 하자 vs 일반 하자
- **중대한 하자**: 엔진, 동력전달, 주행, 조향(핸들), 제동(브레이크), 연료장치, 차체 등 안전과 직결된 부분. 같은 증상으로 **2번 고쳤는데 또 재발**하면 대상. (또는 1번 이상 고쳤고 고친 기간을 다 합쳐 **30일이 넘어도** 대상)
- **일반 하자**: 그 밖의 부분. 같은 증상으로 **3번 고쳤는데 또 재발**하면 대상. (또는 1번 이상 + 누적 30일 초과)
- **재발 알리기**: 중대한 하자는 1번, 일반 하자는 2번 고친 뒤 또 재발하면 그 사실을 제작사에 알려야 해요(하자재발 통보서). 누적 수리 30일이 넘으면 알린 것으로 봐요.

> [!NOTE] 미국식 '2·3·4 법칙', '일반 결함 4회'는 **캘리포니아 레몬법** 얘기예요. 한국은 **중대 2회 / 일반 3회**예요.

## 하자가 '원래 있던 것'으로 봐주는 규정
- 차 받은 날부터 **1년 안에 발견된 하자는 처음부터 있던 것으로 추정**해줍니다(2024년 개정으로 6개월 → 1년으로 늘어남). 그래서 소비자가 유리해요.
- 단, 내 과실·사고·고의 파손·비인가 정비·튜닝·침수·자연재해로 생긴 건 제외돼요.

## 신청 방법
1. 중재는 **제작사가 미리 중재에 동의했거나**, 내가 계약·신청할 때 동의한 경우에 시작됩니다(모든 차가 자동으로 되는 건 아니에요). 그래서 계약 전에 제작사가 동의한 곳인지 확인하세요.
2. 신청서와 수리내역·신분증·차량등록증 사본 등을 **자동차안전·하자심의위원회**에 내요.
3. 이후 제작사 답변(30일 내) → 위원 3명 중재부 구성 → 심리 → 필요시 성능시험 조사 → **중재 판정** → 판정대로 교환·환불 이행, 순서로 진행돼요.

- **리콜·무상수리로 처리된 수리는 횟수에서 빼요.** 단, 내가 먼저 하자를 알려 수리·점검을 요청한 증상이면 횟수에 포함돼요.
- 수입차는 브랜드가 자체 운영하기도 해요(예: BMW는 2019년 1월 이후 인수 고객이 원하면 규정에 준해 교환·환불).

> [!WARN] 중재 판정은 **확정판결과 같은 효력**이에요. 결과가 나오면 다시 다투기 어렵다는 뜻이니, 신청 전에 수리 기록·증거를 갖추고 승산을 따져보세요(심리 비공개, 제작사 답변 30일, 판정은 심리종결 후 30일 원칙).

## 환불금액 계산
- 환불금 = 총 판매가격 × (1 − 환불 시 주행거리(km) ÷ 150,000) + 취득세·번호판 발급수수료
- 즉, 그동안 탄 만큼은 빼고 돌려주되 세금·번호판 값은 더해 줘요.
- 단, **교환 판정이 났는데 그 차의 생산 중단 등으로 교환이 불가능**해지면, 이때는 주행거리를 빼지 않고 **총 판매가격 + 필수비용 전액**을 환불해요(소비자에게 유리).

## 현실은 어떤가요? (실효성)
- 레몬법은 "믿고 기다리면 바꿔주는 제도"가 아니라 **요건 충족을 입증하는 게 관건**이에요.
- 한국교통안전공단 자료(2019~2025년 7년): 중재 신청 **3,819건** 중 실제 교환·환불은 **66건(신청의 1.73%)**. 신청의 **53.7%는 판정 전에 취하**됐고, 국토부의 도입 3년 분석에선 종료 사건의 **48%가 요건 미충족 등으로 각하·기각**됐어요.
- 그래서 **계약서에 교환·환불 보장 조항이 있는지 확인**하고, 하자가 생기면 **수리 날짜·증상·입고 기간을 스스로 기록**해 두는 게 실질적인 대비예요.

## 기한 정리
- **중재 신청**: 차 받은 날부터 **2년 이내**
- **하자·수리 횟수 세는 기간**: 받은 지 **1년(또는 2만km) 이내**
- **하자가 원래 있던 걸로 봐주는 기간**: 받은 날부터 **1년 이내**`,order:8,stage:"post"},{id:"p0-recall",phase:0,title:"리콜 확인",summary:["리콜은 제조사가 차의 결함을 무상으로 고쳐 주는 것으로, 내 차가 대상인지 자동차리콜센터(car.go.kr)에서 차량번호나 차대번호(VIN)로 조회할 수 있어요.","매번 조회하기 귀찮으면 '리콜알리미'에 차를 등록해 두면 리콜이 생길 때 문자로 알려 줍니다.","결함이 의심되면 무료 전화 080-357-2500이나 자동차결함신고센터(car.go.kr)로 신고할 수 있어요."],body_md:`## 리콜 조회 방법
- 국토교통부 산하 한국교통안전공단이 운영하는 **자동차리콜센터(car.go.kr)**에서 확인한다.
- 경로: 자동차리콜센터 홈 → 리콜정보 → 리콜대상확인. **자동차등록번호(번호판) 또는 차대번호(VIN) 중 하나**로 조회하면 해당 차량의 리콜대상 여부와 조치(시정) 완료 여부가 안내된다.
- 이용 시간: 자동차 정보 조회는 **평일 09:00~18:00**에만 가능(그 외 시간 제한). 리콜조치 여부는 제작사가 분기별로 국토부에 보고한 내역 기준이라 **이전 분기까지** 확인된다. 환경부 소관 리콜은 조치여부 서비스가 제공되지 않는다.

## 리콜알리미 (사전 알림)
- 차대번호를 매번 조회하지 않아도, 보유 차량에 리콜이 발생하면 **문자(SMS)로 자동 안내**받는 사전신청형 서비스(https://www.car.go.kr/ri/ntcn/list.do).
- 신청 시 신청인 정보(이름·생년월일/성별·휴대폰번호)와 자동차 정보(자동차등록번호, 소유인과 관계, 소유인명 등, 비밀번호)를 입력한다. 가입 후 제작결함조사·리콜조치 확인을 위한 문자설문이 올 수 있다.

## 정부24 연계
- 정부24(gov.kr)에서 '자동차 리콜 대상 확인', '리콜 알리미 신청', '리콜 불만 신고'를 검색하면 각 카드의 '사이트가기'로 자동차리콜센터 원본 페이지로 연결된다(정부24 자체 입력 폼은 없음).

## 문의·신고 채널
- **결함신고 전용 전화(무료)**: 080-357-2500
- 온라인 결함신고: https://www.car.go.kr/ds/dfct/gdnc.do
- 리콜불만신고(리콜조치 과정의 불편 신고, 중재 권한은 없음): https://www.car.go.kr/ds/recallDsnt/gdnc.do
- 신차 교환·환불은 자동차안전·하자심의위원회(adr.katri.or.kr), 수리·교환 과정의 개별 피해구제는 한국소비자원(1372).`,field_tips_md:null,checklist:["자동차리콜센터(car.go.kr)에서 차량번호 또는 차대번호로 리콜 대상 조회하기","평일 09:00~18:00 사이에 조회하기","리콜알리미에 차량 등록해 문자 알림 받도록 신청하기","리콜 대상이면 브랜드 서비스센터에서 무상 시정(리콜조치) 받기","결함이 의심되면 080-357-2500 또는 온라인으로 결함신고하기"],sources:[{name:"자동차리콜센터(한국교통안전공단)",url:"https://www.car.go.kr/ri/recall/list.do",type:"official"}],flags:[],valid_year:null,car_scope:"generic",source_files:["official/p0-리콜확인-05.md"],body_easy_md:`한마디로: 내 차에 리콜(무상 수리)이 있는지 car.go.kr에서 차량번호로 조회하고, '리콜알리미'로 문자 알림을 받으세요.

## 리콜 조회 방법
- 국토교통부 산하 한국교통안전공단이 운영하는 **자동차리콜센터(car.go.kr)**에서 확인해요.
- 방법: 리콜센터 홈 → 리콜정보 → 리콜대상확인 → **차량번호(번호판)나 차대번호(VIN) 중 하나**를 입력하면, 내 차가 리콜 대상인지와 조치(수리)가 끝났는지 알려줘요.

> [!WARN] 차량 정보 조회는 **평일 09:00~18:00**에만 가능해요. 또 리콜 조치 여부는 제작사가 분기(3개월)마다 보고한 내역 기준이라 **지난 분기까지만** 확인되고, 환경부가 담당하는 리콜은 조치 여부를 알려주지 않으니 참고하세요.

## 리콜알리미 (미리 알림 받기)
매번 조회하기 번거롭다면 이걸 신청해 두세요.
- 내 차에 리콜이 생기면 **문자(SMS)로 자동으로 알려주는** 서비스예요.
- 신청할 때 이름·생년월일·휴대폰번호와 차량 정보(차량번호 등)를 입력하면 돼요.

## 정부24에서도
car.go.kr 대신 정부24를 거쳐 들어가도 돼요.
- 정부24(gov.kr)에서 '자동차 리콜 대상 확인', '리콜 알리미 신청'을 검색하면 리콜센터 페이지로 연결돼요.

## 문의·신고
리콜 대상으로 확인됐다면, 이제 실제로 조치받는 방법과 문의처를 볼게요.

### 결함신고·리콜 조치
- **결함신고 전화(무료)**: 080-357-2500
- 온라인 결함신고: car.go.kr
- 리콜 대상이면 브랜드 서비스센터에서 **무료로 수리(리콜조치)**받으세요.

### 헷갈리기 쉬운 다른 창구
- 참고로 새 차 교환·환불은 자동차안전·하자심의위원회(레몬법), 수리 과정의 개별 피해 상담은 한국소비자원(1372)이에요.`,order:9,stage:"post"},{id:"p0-new-car-syndrome",phase:0,title:"새차증후군 대응",summary:["새차증후군은 새 차 내장재에서 나오는 유해 물질(VOCs)로 두통·어지러움 같은 증상이 생기는 것으로, 보통 출고 후 6개월 안에 이 물질이 가장 많이 나와요.","가장 확실한 대응은 환기(주차 시 창문 살짝 열기 + 주행 중 외기순환)이고, 활성탄·숯이나 실내 클리닝은 보조 수단입니다.","베이크아웃(실내를 뜨겁게 데운 뒤 환기)은 온도를 충분히 높여야만 효과가 있고, 미지근하면 오히려 유해 물질이 늘 수 있어요."],body_md:`## 새차증후군이란
- 신차 내장재(시트·접착제·플라스틱 부품)에서 방출되는 **휘발성유기화합물(VOCs — 벤젠, 포름알데히드, 톨루엔, 에틸벤젠 등)**로 두통·호흡곤란·구토·어지러움이 나타나는 증상. 벤젠은 1급 발암물질.
- 통상 **출고 후 6개월 이내** 방출량이 많다. 가죽시트·선루프 장착(약 30% 높다는 연구 인용)·고온·낮은 환기 수준일수록 농도가 높아진다.
- 어린이·노약자·임산부·화학물질 민감자는 특히 주의하고, 여름철 고온 실내는 방출을 가속한다.

## 대응 방법 (근거 수준 표시)
### 1. 환기 — 근거 수준: 높음
- 신차 인수 후 **최소 2주간 주차 시 창문을 조금 열어두고, 주행 중에는 외기 순환 모드로 환기**하는 것이 가장 기본적이고 효과적인 방법으로 다수 출처가 공통 권장.
- 그늘진 곳에 주차해 실내 온도 상승(및 VOC 가속 방출)을 관리하면 도움이 된다.

### 2. 활성탄/숯 — 근거 수준: 중간
- 냄새·유해물질 흡착용으로 차 곳곳에 배치. 2~3주마다 햇볕에 말려 재사용.

### 3. 실내 클리닝(스팀 세차·오존 살균) — 근거 수준: 중간
- 냄새 원인을 제거하나 정량적 저감 자료는 부족하고, 오존 처리 후 오히려 낯선 냄새가 난다는 후기도 있어 개인차가 있다.

### 4. 베이크아웃 — 근거 수준: 논란 있음
- 원래 건물용으로, 실내를 33~40℃ 이상으로 8시간 이상 유지 후 2시간 이상 환기를 3회 이상 반복하는 방법.
- **서울시 보건환경연구원 공식 조사(2025년, 신축 공동주택 345세대)**: 33℃ 이상에서 톨루엔 평균 47.4% 감소, 반대로 **25℃에서는 오히려 6.5% 증가**. 즉 온도가 충분히 높지 않으면 효과가 없거나 역효과. 환기량도 큰 변수(창문만 열면 46.4% vs 환기장치+현관문까지 78.0% 저감).
- **자동차 적용은 미검증**: 위 수치는 건물 기준이며 자동차 실내에 대한 공식 정량 연구는 확인되지 않았다. 커뮤니티에서 흔한 '히터 최대 20~30분 후 전체 환기, 며칠 반복'은 개인 경험담 수준.

## 결론
- **환기가 근거 수준이 가장 높은 확실한 방법**이다. 베이크아웃은 '고온을 충분히 유지해야 의미 있고, 저온이면 역효과일 수 있다'는 점을 이해하고 접근해야 하며, 자동차 실내에 대한 정량 효과는 검증되지 않았다.`,field_tips_md:null,checklist:["인수 후 최소 2주간 주차 시 창문을 조금 열어두기","주행 중 외기 순환 모드로 자주 환기하기","가능하면 그늘에 주차해 실내 고온 방지하기","활성탄·숯을 차 안에 두고 2~3주마다 햇볕에 말려 재사용하기","베이크아웃을 한다면 온도를 충분히 높인 뒤 반드시 충분히 환기하기","어린이·임산부 등 민감군은 초기 6개월간 특히 환기에 신경 쓰기"],sources:[{name:"서울특별시 보건환경연구원",url:"https://sihe.seoul.go.kr/archives/557105",type:"official"},{name:"vehiclex.co.kr",url:"https://vehiclex.co.kr/신차-냄새-제거-방법과-차량-관리-팁/",type:"media"},{name:"getcha.kr",url:"https://web.getcha.kr/blog/new-car-smell-removal-air-purification-vehicles",type:"media"}],flags:[],valid_year:null,car_scope:"generic",source_files:["web/p0-새차증후군-대응-06.md"],body_easy_md:`한마디로: 새 차 냄새(유해 물질)는 **환기**가 가장 확실한 해결책이에요. 특히 첫 6개월간 자주 환기하세요.

## 새차증후군이란
- 새 차의 시트·접착제·플라스틱에서 나오는 **유해 화학물질(VOCs — 벤젠, 포름알데히드, 톨루엔 등)** 때문에 두통·어지러움·구토·호흡곤란이 생기는 증상이에요. (벤젠은 1급 발암물질)
- 보통 **출고 후 6개월 안에** 이 물질이 가장 많이 나와요. 가죽시트·선루프가 있거나, 실내가 덥거나, 환기가 안 될수록 농도가 높아져요.
- 어린이·노약자·임산부·화학물질에 민감한 분은 특히 조심하세요.

## 대응 방법 (효과가 확실한 순서)
원인을 알았으니, 이제 효과가 검증된 순서대로 어떻게 대응하면 좋을지 볼게요.

### 1. 환기 — 가장 확실 (강력 추천)
- 새 차를 받은 뒤 **최소 2주는 특히 자주 환기**하세요(유해물질이 많이 나오는 첫 6개월은 계속 신경 쓰는 게 좋아요). 탈 때 처음 몇 분은 창문을 열고 달리거나, 주행 중 **외기 유입**(바깥 공기를 들이는 상태)으로 두면 좋아요.
- 자택 마당·개인 차고처럼 **안전한 곳에 세워 둘 때만** 창문을 살짝 열어 두면 환기에 도움이 돼요.

> [!WARN] 노상·공용주차장에서는 창문을 열어 둔 채 차를 떠나면 안 돼요. **도난·빗물 유입 위험**이 있으니, 자택 마당·개인 차고처럼 안전한 곳에서만 살짝 열어 두세요.

- 그늘에 주차해 실내가 뜨거워지지 않게 하면 도움이 돼요.

환기만으로 부족하다 싶으면, 아래 보조 수단을 더해 보세요.

### 2. 활성탄·숯 — 보조 수단
- 활성탄(숯)은 냄새·유해물질을 빨아들여요. 차 곳곳에 두고 2~3주마다 햇볕에 말려 다시 써요.

### 3. 실내 클리닝(스팀 세차·오존 살균) — 보조 수단
- 냄새 원인을 없애 주지만 효과가 정확히 측정된 건 아니고, 오히려 낯선 냄새가 난다는 후기도 있어 사람마다 달라요.

### 4. 베이크아웃 — 주의해서 (효과 논란)
- 실내를 33~40℃ 이상으로 뜨겁게 데운 뒤 환기하는 걸 여러 번 반복하는 방법이에요.

**원래(건물) 기준 방법**은 이래요: **33~40℃ 이상으로 8시간 이상 유지 → 2시간 이상 환기 → 이 과정을 3회 이상 반복.**

차에서 하려면 이렇게 옮겨 볼 수 있어요.
1. **차를 햇볕 잘 드는 곳에 세우고**(여름이면 그것만으로도 실내가 40℃를 넘어요), 겨울·흐린 날이면 **시동을 걸고 히터를 최고 온도·강풍으로** 틀어 실내를 충분히 뜨겁게 만들어요.
2. 그 상태를 **최대한 오래 유지**해요(건물 기준 8시간이라, 차에서는 한 번에 맞추기 어려워요. 여름철 낮 주차를 이용하면 가장 현실적이에요).
3. 그다음 **문을 다 열고 충분히(가능하면 1~2시간) 환기**해요. 이 환기가 핵심이에요 — 데우기만 하고 환기하지 않으면 오히려 안에 유해물질이 그대로 남아요.
4. 여유가 되면 며칠에 걸쳐 **여러 번 반복**해요.

> [!DANGER] 히터를 켜려면 **시동이 걸려 있어야** 해요. **환기가 안 되는 밀폐 공간(지하주차장·차고)에서 시동을 걸어두면 배기가스 중독 위험**이 있으니 절대 하지 마세요. 반드시 바깥이나 환기가 되는 곳에서 하고, 차 안에 사람·반려동물이 남지 않게 하세요.

> [!NOTE] 서울시 연구 결과, **33℃ 이상**에선 톨루엔이 평균 47%나 줄었지만 **25℃(미지근)에선 오히려 6.5% 늘었어요.** 충분히 뜨겁게 하지 않으면 소용없거나 역효과이니, 데운 뒤엔 반드시 충분히 환기해야 해요.

- 게다가 이 수치는 건물 기준이고, **자동차에 대한 공식 검증은 아직 없어요.** 그러니 무조건 효과를 기대하긴 어려워요.

## 결론
정리하자면 이래요.
- **환기가 가장 확실한 방법**이에요. 베이크아웃은 '충분히 뜨겁게, 그리고 꼭 환기'라는 걸 이해하고 접근하세요.`,order:6,stage:"post"},{id:"p1-driving-practice",phase:1,title:"도로 연수 / 초보 운전",summary:["도로 연수는 출발·차로변경·회전·합류 같은 기본 운전을 몸에 익히는 단계예요.","'깜빡이 미리 켜기 → 좌우 반복 확인 → 부드럽게 조작' 이 세 가지 리듬만 지키면 됩니다.","급하게 조작하지 말고, 차선(점선=변경 OK, 흰 실선=변경 금지, 중앙선=넘지 마세요) 규칙만 지켜도 사고와 위반을 크게 줄일 수 있어요."],body_md:`## 도로 연수의 기본 리듬

초보 주행은 결국 하나의 리듬으로 수렴한다: **깜빡이를 미리 켜고 → 좌우를 반복해서 확인하고 → 급하지 않게 부드럽게 조작한다.**

### 출발
1. 비상등을 끄고 진행 방향 깜빡이를 켠다(뒤차에게 진입 의도 전달).
2. 기어를 D로 두고 사이드미러로 뒤·옆 차를 확인한다.
3. 무신호 교차로·비보호 좌회전 구간에서는 내 신호가 들어와도 바로 액셀을 밟지 말고, 우측을 두 번 확인하는 습관을 들인다.
4. 앞차가 출발한다고 따라 나가지 말고 신호를 직접 확인한 뒤 움직이면서 계속 스캔한다.

### 차로 유지·핸들 조작
- 운전석이 왼쪽이므로 차로 안 위치는 **왼쪽 차선**을 기준으로 맞춘다(주행 중 주로 볼 것은 앞차 브레이크등과 왼쪽 차선 두 가지).
- 핸들은 힘을 빼고 손바닥으로 미는 느낌으로, 초침이 도는 속도로 **작게 자주** 돌린다. 크게 꺾어 유지하지 않는다. 속도가 빠를수록 더 작게 돌린다.
- 코너 도중에는 손 위치를 바꾸지 않고, 한적한 도로에서도 내 차로 중심을 지킨다.

### 차로 변경·합류
- 깜빡이는 미리 켜고 기다린다. 한 번 실패했다고 껐다 켜기를 반복하지 말고 **계속 켜둬야** 옆·뒤차가 양보 타이밍을 잡는다.
- 차로를 옮길 때는 가운데 차로를 거쳐 이동하는 것이 유리하고, 옆으로 이동은 뒤차가 반응할 여유를 주도록 부드럽게 한다.
- 합류·좁은 공간 통과 시 좌우 간격을 먼저 가늠하고 한쪽씩 순서대로 처리한다. 빠르게 오는 차 앞에 무리하게 끼어들지 않는다.

### 정지·감속
- 액셀에서 발을 떼고 브레이크 위에 발을 올린 뒤, 멀리서부터 단계적으로 속도를 줄인다. 앞에 다 가서 급제동하면 빗길·블랙아이스에서 미끄러진다.
- 페달을 바꿔 밟을 때 발 전체를 옮기지 말고 뒤꿈치를 바닥에 고정한 채 발끝만 좌우로 꺾는다.

### 회전
- 우회전은 오른쪽으로 붙여 반 바퀴 꺾은 뒤 맞은편(왼쪽)을 확인한다. 왼쪽부터 보다가 앞머리가 먼저 나가면 위험하다.
- 유턴·좌회전·우회전 시 옆 안전이 확인되지 않았다면 내 차로를 벗어나 넓게 돌지 않는다.
- 좌회전 후에는 대기했던 차로 번호를 유지한다(1차로 대기 → 좌회전 후 1차로).
- 우회전 지점 횡단보도에 보행자가 있으면 멈춰서 확인 후 지나간다.

## 도로교통 규칙 (근거: 손해보험협회 과실비율정보포털·국가법령정보센터·서울시·대법원)

### 차선과 진로변경 (도로교통법 제14조, 시행규칙 별표6)
- **백색 점선(503)**: 진로변경 가능.
- **백색 실선(진로변경제한선, 506)**: 진로변경 금지(위반 시 도로교통법 제156조 제1호). 단, 대법원 2022도12175 전원합의체 판결(2024.6.20.)에 따라 백색 실선 침범은 **12대 중과실이 아니며** 종합보험 특례가 적용된다(교량·터널에서의 앞지르기는 별도).
- **중앙선(황색 실선·복선)**: 침범 금지, 침범 사고는 12대 중과실.

### 비보호좌회전 과실 (손해보험협회 인정기준)
- 녹색신호 비보호좌회전 A vs 맞은편 직진 B: **기본과실 A 90 : B 10**(직진 우선).
- 비보호좌회전 A vs 맞은편 우회전 B: **60 : 40**.
- 비보호좌회전 자체는 신호위반이 아니지만 직진 차량에 진로를 양보할 의무가 있어 대부분 과실이 크게 잡힌다. 좌측 횡단보도 보행신호도 함께 확인한다.

### 버스전용차로 (서울시 공식, 표준 운영시간 — 현장 표지 우선)
- 중앙 버스전용차로: 24시간 상시(일반차 진입 불가, 신호등 별도).
- 가로변 전일제(청색 복선): 평일 07:00~21:00(토·공휴일 제외).
- 가로변 시간제(청색 단선): 평일 07:00~10:00, 17:00~21:00.
- 청색 실선 구간은 진입 불가, 청색 점선 구간에서만 우회전 등을 위한 일시 진입 가능. 위반 과태료 승용차 5만원.

### 신호·유턴
- 화살표 있는 4색 신호등엔 별도 좌회전 신호가 있고, 화살표 없으면 3색.
- 유턴은 표지판·보조표지에 적힌 조건(좌회전시/보행신호시/적신호시/상시 등)대로만 하고, 신호를 예상해서 돌지 않는다.
- 점멸신호: 황색은 서행하며 통과, 적색은 일시정지 후 안전 확인.
- 직진이 우회전보다 우선이므로, 뒤차가 경적을 울려도 정지선·횡단보도를 침범하며 비켜주면 오히려 위반이다.`,field_tips_md:`## 유튜브 실전 팁 (초보 운전 채널 종합)

앞서 본 기본기에 이어, 실전에서 자주 마주치는 상황들을 모아봤어요.

- **오토라이트여도 계기판 확인**: 해질 무렵 라이트가 실제로 켜졌는지, 상향등이 켜진 채 주행 중은 아닌지 계기판을 자주 본다. 정비·대리운전 후 습관적으로 꺼놓는 경우가 많다.
- **자주 다니는 길의 포인트 암기**: 차로가 없어지는 지점, 직진이 좌회전 전용으로 바뀌는 지점 등을 미리 외워두면 당황할 일이 준다.
- **뻥 뚫린 차로 주의**: 내 차로만 비었다고 급가속하지 않는다. 막힌 차로 차들이 넘어오려 하므로, 옆 차보다 아주 조금만 빠르게 이동한다는 느낌으로 간다.
- **내비 추천 차로의 이유**: '좌측 두 번째 차로'를 안내하는 건 그 직후 방향 전환(지하차도 진출 후 우회전 등)을 고려한 경우가 많다. 색상만 보지 말고 다음 경로까지 보고 미리 차로를 잡는다.
- **직진 신호에서 우회전 대기**: 직진 신호에 우측 보행신호가 함께 켜졌으면, 정지선에 그대로 서지 말고 차를 살짝 우회전 방향으로 틀어 대기해 뒤 직진 차가 지나가게 한다(단, 정지선·횡단보도는 침범 금지).
- **연속 회전(좌회전 직후 우회전)**: 좌회전 첫 번째 차로로 들어가면 다음 우회전이 어렵다. 사이드미러로 확인하며 넓게 돌아 바깥 차로로 진입한다. 유도선이 있으면 A필러와 대시보드 모서리가 겹쳐 보이는 지점을 따라간다.
- **예측 운전 금지**: '저 차가 들어올 것 같다'는 예측성 판단은 오히려 여유를 깎아먹는다. 옆 차가 확실히 넘어올 때 반응한다.
- **평행 주차 요령**(도로연수 영상): 목표 지점을 지나쳐 정지 후 후진, 엉덩이를 목표 방향으로 붙이고 우측 확인하며 들어간 뒤 핸들을 반대로 틀어 정렬. 여러 번 수정보다 한 번에 깊이 밀어 넣는 편이 깔끔하다.`,checklist:["출발 전 비상등 끄고 진행 방향 깜빡이 켜기, 사이드미러로 뒤·옆 확인","차로 위치는 왼쪽 차선 기준으로 맞추고 핸들은 작게 자주 조작하기","차로 변경·합류 시 깜빡이 미리 켜고 껐다 켜기 반복하지 않기","감속은 멀리서부터 단계적으로, 페달은 뒤꿈치 고정 후 발끝만 이동","우회전은 오른쪽 붙여 꺾은 뒤 맞은편 확인, 횡단보도 보행자 우선","백색 실선·중앙선에서 진로변경 금지, 점선에서만 변경","비보호좌회전은 직진 차량에 양보(사고 시 90:10 불리)","유턴·버스전용차로는 현장 표지·보조표지 조건대로만 통행","내 차 매뉴얼/현장 표지 우선 — 신호 예상해서 움직이지 않기"],sources:[{name:"나혼자탄다",url:"https://youtu.be/a3gXUpPJGZ4",type:"personal"},{name:"제니스",url:"https://youtu.be/vENGeOHN-c0",type:"personal"},{name:"깡초보운전",url:"https://youtu.be/RubZi99YX14",type:"personal"},{name:"이게운전이다",url:"https://youtu.be/MZv96csolgc",type:"personal"},{name:"나혼자탄다",url:"https://youtu.be/mputZibUiWA",type:"personal"},{name:"손해보험협회 과실비율정보포털 / 국가법령정보센터 / 서울특별시 / 대법원",url:"https://accident.knia.or.kr/myaccident-content?chartNo=차2-6&chartType=1",type:"official"}],flags:["단독출처"],valid_year:2026,car_scope:"generic",source_files:["youtube/p1-도로연수-01.md","youtube/p1-도로연수-02.md","youtube/p1-도로연수-03.md","youtube/p1-도로연수-04.md","youtube/p1-도로연수-05.md","official/p1-도로교통법규칙-13.md"],body_easy_md:`한마디로: 깜빡이 미리 켜고, 좌우 계속 확인하고, 부드럽게 움직이면 돼요.

## 시동 걸고 기어 넣기 (가장 먼저)

### 시동 거는 법
**브레이크 페달을 밟은 채로 시동 버튼을 누르면** 시동이 걸려요. 기어는 **P(주차)**에 있어야 해요.

> [!NOTE] **브레이크를 안 밟고 누르면 시동이 안 걸려요.** 대신 누를 때마다 전원 상태만 바뀌어요 — 꺼짐 → ACC(액세서리 전원) → ON(차량 전원, 경고등을 확인할 수 있어요) → 꺼짐. 시동이 걸린 게 아니라서 이 상태로 오래 두면 배터리가 닳아요.

**끌 때**는 차를 완전히 세우고 **P 버튼을 눌러 P로 바꾼 뒤** 시동 버튼을 누르면 돼요. P가 아닌 채로 눌러도 자동으로 P가 되면서 꺼져요.

### 기어 넣는 법 — 다이얼을 돌려요
이 차는 막대(레버)가 아니라 **핸들 오른쪽 뒤의 동그란 다이얼**로 기어를 바꿔요. **P(주차)만 옆에 있는 별도 버튼**이에요.

![전자식 변속 다이얼과 P 버튼](/img/shift-dial.jpg)
*Ⓐ가 변속 다이얼, Ⓑ가 P 버튼이에요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

1. **브레이크 페달을 밟아요.** (안 밟으면 기어가 안 바뀌어요)
2. 다이얼을 돌려 **D(주행)** 또는 **R(후진)**에 맞춰요.
3. **계기판이나 다이얼의 표시등에 원하는 글자가 떴는지 꼭 확인**하고 발을 떼세요.

> [!WARN] **D나 R에 놓으면 가속 페달을 안 밟아도 차가 스르르 움직여요.** 브레이크에서 발을 떼는 순간 굴러가니, 멈춰 있을 때는 브레이크를 밟고 있거나 P에 두세요.

> [!TIP]
> R로 돌릴 때마다 **다이얼이 부르르 떨려요.** 고장이 아니라 "지금 후진이에요"라고 알려 주는 거예요.
> **R에 놓고 멈춰 있을 때** 운전석 문을 열면 자동으로 P로 바뀌어요. 다만 **차가 움직이고 있으면 안 바뀔 수 있으니**, 문이 열리면 차가 선다고 믿지 마세요.

## 운전의 기본 리듬

1. 방향 바꾸기 전에 **깜빡이를 미리 켠다**
2. **좌우를 반복해서 확인한다**
3. **급하지 않게 부드럽게** 조작한다

> [!DANGER] 확 꺾거나 확 밟는 급조작이 사고의 가장 큰 원인이에요.

## 출발할 때

기본 리듬을 익혔다면, 이제 실제로 출발해볼까요?

1. 비상등을 끄고, 갈 방향 깜빡이(방향지시등)를 켜요.
2. 기어를 **D(주행)**에 넣고, 사이드미러로 뒤·옆에서 오는 차를 봐요.
3. **앞차 따라 나가지 말고** 신호는 내가 직접 보고 움직여요.

## 차로(차선) 유지·조작

출발했다면 이제 차로 안에서 자리를 잡는 법이에요.

- 운전석이 왼쪽에 있으니 **내 왼쪽에 그려진 선까지의 거리를 기준**으로 위치를 맞추면 편해요.
- 핸들은 힘 빼고 **작게 자주** 돌려요. 크게 확 꺾어 두지 마세요(빠를수록 더 작게).

## 차로 바꾸기·합류

차로에 자리를 잡았다면, 이번엔 옆 차로로 옮기거나 합류하는 상황을 볼게요.

- 깜빡이는 미리 켜고 **끄지 말고 계속 켜둬요.** 그래야 옆·뒤차가 양보해요.
- 옆으로 옮길 땐 뒤차가 반응할 시간을 주며 천천히. 빠르게 오는 차 앞에 무리하게 끼어들지 마세요.

## 멈추고 속도 줄일 때

달리다 보면 속도를 줄이거나 멈춰야 할 때도 있죠.

- 브레이크에 발을 올리고 **멀리서부터 조금씩** 줄여요. 코앞에서 급브레이크를 밟으면 빗길·빙판에서 미끄러져요.

## 회전할 때

직진만큼 자주 마주치는 게 회전이에요.

- **우회전**: 차를 오른쪽에 붙이고 핸들을 반쯤 돌린 상태에서, 맞은편(왼쪽)에서 오는 차를 확인해요.
- 우회전 횡단보도에 사람이 있으면 **멈춰서** 기다려요.
- 좌회전한 뒤에는 **기다렸던 차로와 같은 번호의 차로**로 들어가요(1차로에서 기다렸으면 좌회전 후에도 1차로).

## 꼭 알아야 할 도로 규칙

여기까지가 실제 조작이라면, 이제 몰라서 걸리기 쉬운 도로 규칙들을 짚고 갈게요.

### 차선 색으로 구분

| 차선 | 뜻 |
|---|---|
| 흰색 **점선** | 차로 변경 **가능** |
| 흰색 **실선** | 차로 변경 **금지**(넘으면 위반) |
| **중앙선**(노란색) | 절대 넘지 마세요. 넘어서 난 사고는 **중대한 과실**로 봐요 |

### 비보호 좌회전은 조심

녹색불에서 하는 비보호 좌회전은 신호위반이 아니에요. 하지만 **맞은편에서 직진해 오는 차를 먼저 보내 줄 의무**가 있어요.

> [!WARN] 사고가 나면 내 잘못이 90%(직진차 10%)로 크게 잡혀요.

### 버스전용차로 (일반차 진입 금지 시간)

- **중앙 버스전용차로**: 24시간 항상 금지.
- **가로변 전일제(파란 두 줄)**: 평일 07:00~21:00(토·공휴일 제외).
- **가로변 시간제(파란 한 줄)**: 평일 07:00~10:00, 17:00~21:00.
- 위반 시 승용차 과태료 5만원(현장 표지판 시간이 우선).

### 신호·유턴

- 유턴은 표지판 조건(좌회전 신호 때/보행 신호 때 등)일 때만. **미리 예상해서 돌지 마세요.**
- 점멸신호(신호등이 계속 깜빡이는 상태): **노란불 깜빡임**은 속도를 줄여 지나가고, **빨간불 깜빡임**은 일단 멈춘 뒤 좌우를 확인하고 출발해요.
- 뒤차가 경적을 울려도 정지선·횡단보도를 넘으며 비켜주면 오히려 내가 위반이에요.

## 유료 도로연수, 받아야 할까?
혼자 연습이 무서우면 **도로연수(운전연수)**를 받는 것도 방법이에요. 면허는 있지만 실제 도로가 두려운 초보에게 도움이 돼요.

### 업체 고를 때 이것만 확인하세요
- **경찰청(관할)에 등록된 자동차운전(전문)학원**인지 — '학원' 명칭을 쓸 수 있는 곳인지 확인해요.
- **학원 등록 차량**으로, **조수석에 보조 제동장치(브레이크)**가 있는 차로 진행하는지.
- **기능교육강사 자격**(운전학원에서 운전 실기를 가르칠 수 있는 자격)을 가진 강사인지.

> [!WARN] **강사 개인 차량 + 핸드브레이크 고리(윙브레이크)로 하는 방문연수는 불법인 경우가 많아요.** 이런 곳은 사고가 나도 **보상·수강료 환불 모두 구제가 어려워요.** 싸다고 덤비지 마세요.

> [!CHECK] **내 차로 연수를 받는다면** 사고 시 내 보험으로 처리돼요. 이때 **강사가 내 보험의 운전자 범위 밖이면 보상이 안 될 수 있어요.** 단기운전자확대특약을 미리 넣는 걸 검토하세요('자동차보험 가입' 참고).

### 비용 감각 (참고용)
- 정식 전문학원 시내연수: **시간당 5~6만원**
- 정식 학원 10시간 패키지: **50~60만원**
- 사설 방문연수 10시간: 30만원대

> [!NOTE] 위 금액은 업체·지역 사례를 모은 **참고 수준**이에요(공식 고시 요금이 아니에요). 상담할 때 **시간 단위 요금과 총 시간**을 함께 확인하세요.

## 사이드미러, 이 스위치로 맞춰요
출발 전에 미러부터 내 자세에 맞게 맞춰 두세요. 운전석 문 쪽에 조절 스위치가 있어요.

![실외 미러 조절 스위치](/img/side-mirror-switch.jpg)
*①로 좌(L)·우(R) 미러를 고르고, ②의 방향키로 각도를 맞춰요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

- 사이드미러 폭의 **4분의 1~5분의 1 정도에만 내 차 옆면**이 보이고, 나머지는 옆 차로가 보이게 맞추면 사각지대가 줄어요.
- 위아래는 **하늘과 땅이 만나는 선(지평선)이 미러 가운데**에 오도록 맞추면 무난해요.

## 사각지대 — 미러로도 안 보이는 곳이 있어요
아무리 미러를 잘 맞춰도 **눈에 안 보이는 구역(사각지대)**이 남아요. 어디가 안 보이는지 알아두면 차로를 바꿀 때 훨씬 안전해요.

![자동차 사각지대 위치](/img/blind-spots.jpg)
*앞·뒤뿐 아니라 **사이드미러 옆(대각선 뒤)**과 **필러(기둥)에 가려지는 곳**이 사각지대예요. (출처: Kixx)*

- **차로를 바꾸기 전에는 미러만 보지 말고, 바꾸려는 쪽으로 고개를 살짝 돌려** 눈으로 확인하세요(숄더 체크).
- 우리 차에는 **후측방 충돌 경고**가 있지만 어디까지나 보조 장치라, **고개 돌려 직접 확인하는 습관**을 대신할 수는 없어요.
- 필러 사각지대 때문에 **교차로에서 좌우를 볼 때는 고개와 몸을 앞뒤로 살짝 움직여** 기둥에 가린 곳을 확인하는 게 좋아요.`,order:4},{id:"p1-parking-practice",phase:1,title:"주차 연수",summary:["주차 연수는 초보에게 가장 쉬운 '후진 직각주차'를 익히는 단계예요.","핵심은 딱 하나, 차의 엉덩이(뒷범퍼)가 주차 칸을 바라보게 만든 뒤 천천히 후진하는 거예요.","한 번에 넣으려 하지 말고, 쏠리면 먼저 핸들을 똑바로(중립)로 되돌린 뒤 앞뒤로 움직여 고치면 됩니다."],body_md:`## 후진 직각주차의 핵심 원리

후진주차에서 하는 모든 준비 동작의 목적은 단 하나, **내 차의 뒷범퍼(엉덩이)가 주차하려는 공간을 바라보게 만드는 것**이다. 뒷범퍼가 공간을 향하고 있어야 후진했을 때 차가 원하는 방향으로 들어간다.

### 기본 절차
1. 목표 주차공간에 최대한 붙인 뒤, 어깨(운전석 위치)를 주차공간 중앙 또는 끝나는 지점에 맞추며 지나간다.
2. **핸들 감는 타이밍이 가장 중요하다.** 내 주차공간의 절반 지점을 어깨가 지나칠 때 핸들을 주차공간 반대 방향으로 돌리며 전진한다.
   - 너무 일찍 돌리면 들어갈 각도가 안 나오고, 너무 늦게 돌리면 옆 기둥·차량을 향하게 된다.
3. 사이드미러로 내 차 뒷부분이 주차공간을 향하는지 확인되면, 후진 기어로 바꾸고 핸들을 주차공간 쪽으로 빠르게 감으며 후진한다.
4. 후진 중에는 좌측 → 우측 → 후방카메라 → 좌측 → 우측 순으로 반복 확인한다. **후방카메라만 보지 말고 진입 방향 사이드미러를 위주로** 본다(카메라는 대략의 방향을 잡는 보조용).
5. 차체가 옆 차와 나란히(수평) 맞춰지면 핸들을 원위치로 하고 그대로 후진해 스토퍼에 닿을 때까지 넣는다.

### SUV·큰 차도 공식은 같다
- 차가 커 보여도(카니발·싼타페·XC40 등) 주차 공식 자체는 바뀌지 않는다. 시야가 익숙하지 않아 크게 느껴질 뿐이다.
- 다만 **회전 공간이 좁을 때는 어깨선이 맞는 정확한 타이밍보다 조금 더 앞으로 나간 뒤(차 중간 정도까지) 핸들을 돌린다.** 그러면 끝까지 세게 감지 않아도 충분한 간격이 나온다.
- 공식대로 무조건 끝까지 감기보다, 좌/우회전하듯 진입하면서 거울로 간격을 보고 천천히 감는 것이 낫다.

### 수정법 — '원위치'가 핵심
한쪽으로 쏠려 옆 차에 닿을 것 같을 때:
1. **먼저 핸들을 원위치(똑바로, 중립)로 되돌린다.** 반대로 꺾은 채 계속 움직이면 더 틀어진다.
2. 그다음 기어로 위치를 조정한다.
   - 처음 꺾어 들어간 쪽(가까운 쪽)에 붙을 것 같으면 → 그대로 뒤로 조금 더 빼고 다시 넣는다.
   - 반대쪽(먼 쪽)에 붙을 것 같으면 → 전진으로 앞으로 조금(대략 50cm~1m) 빼서 거리를 벌린 뒤 다시 후진.
3. 원위치 후 다시 필요한 방향으로 핸들을 감아 넣는다.

한 번에 들어가려 하지 말고 **수정은 당연하다**는 마음으로 시도하는 것이 좋다.

## 왜 후진주차가 가장 쉬운가
후방카메라 + 양쪽 사이드미러로 뒤쪽 사각지대가 거의 없기 때문이다. 전진(사선)주차는 앞쪽 사각지대가 많고, 평행주차는 앞부분 사각지대와 넓은 공간이 필요하다.

## 출차(주차칸에서 나가기)
1. 비상등을 켜고 아주 천천히 나간다. 시야가 답답하므로 확인 가능한 지점까지만 움직이고, 다른 차가 오면 멈춰 기다린다.
2. 확인이 가능해지면 고개를 돌려 좌측을 확인하고 진행 방향 깜빡이를 켠다.
3. 좌/우회전하듯 사이드미러·후방카메라로 옆구리가 닿는지 보며 핸들을 감아 나간다. 뒷바퀴가 회전 중심축이라 앞을 신경 써서 돌리면 반대편 뒤쪽이 갑자기 부딪히는 일은 없다 — 나가는 방향 반대편은 크게 신경 쓰지 않아도 된다.`,field_tips_md:`## 유튜브 실전 팁

여기 정리한 팁은 앞서 배운 기본 순서에, 현실에서 자주 헷갈리는 부분을 보태주는 내용이에요.

- **'어깨선이 옆차 앞범퍼에서 빠지면 돌린다'는 출차 공식은 공간이 넉넉할 때만 유효하다.** 앞뒤 간격이 좁은 칸에서는 조금 더 이르게, 좌/우회전 진입하듯 천천히 핸들을 감아 나가는 습관을 들여야 실수가 없다.
- **넓은 쪽으로 차가 쏠린다**: 진입 중 공간이 넓은 반대편을 한 번씩 확인하면 내 차가 어느 쪽으로 쏠리는지 파악된다.
- **핸들 감각**: 한쪽 끝까지 감으면 대략 '한 바퀴 반'(차종·조향비에 따라 다름). 좌우 판단은 '거리감'이 아니라 '공간감'으로 한다.
- **주차칸 붙이기**: 흔히 '50cm'라고 하지만 실제로는 최대한 붙이는 편이 유리하다(구전 수치이므로 참고만).
- **일반 주행 곁들이 팁**: 방지턱은 앞바퀴가 닿기 전 브레이크에서 발을 떼고, 뒷바퀴까지 넘어오면 가속. 차로 중앙 유지는 가속페달 밟는 오른발(또는 핸들 잡은 오른손)을 차로 중심에 두면 잘 맞는다.`,checklist:["주차공간에 최대한 붙이고 어깨를 공간 중앙/끝에 맞추며 지나가기","어깨가 공간 절반을 지날 때 핸들 감기 시작(타이밍이 핵심)","후진 중 좌·우·후방카메라 반복 확인, 사이드미러 위주로 보기","좁은 칸에서는 조금 더 앞으로 나가서 돌리기","쏠릴 때 먼저 핸들을 원위치(중립)로 되돌린 뒤 전진/후진 조정","한 번에 넣으려 하지 말고 수정을 전제로 시도","출차 시 비상등 켜고 천천히, 확인 가능한 지점까지만 이동"],sources:[{name:"나혼자탄다",url:"https://youtu.be/WkN_YwkCM2k",type:"personal"},{name:"나혼자탄다",url:"https://youtu.be/bXDU8I27DHU",type:"personal"},{name:"초보탈출 김선생",url:"https://youtu.be/l7fQKW-WJVo",type:"personal"},{name:"Good-looking Driving License&Learn's Classroom",url:"https://youtu.be/vt_kPKXC11c",type:"personal"}],flags:[],valid_year:null,car_scope:"generic",source_files:["youtube/p1-주차연수-01.md","youtube/p1-주차연수-02.md","youtube/p1-주차연수-03.md","youtube/p1-주차연수-04.md"],body_easy_md:`한마디로: 차 뒤쪽(뒷범퍼)이 주차 칸을 향하게 만든 뒤 천천히 후진하면 돼요.

## 핵심 원리

준비 동작의 목적은 딱 하나예요.

> [!NOTE]
> 내 차 뒷범퍼가 주차 칸 입구를 바라보게 만드는 것. 뒤쪽이 칸을 향해 있어야 그대로 후진했을 때 칸 안으로 들어가요.

## 왜 후진주차가 제일 쉬울까

원리를 알았으니, 왜 후진 주차가 초보에게 제일 쉬운 방법인지 먼저 볼게요.

후방카메라와 양쪽 사이드미러로 뒤쪽을 함께 볼 수 있어서 사각지대가 거의 없기 때문이에요.

## 넣는 순서

그럼 실제로 어떻게 하는지, 순서대로 볼게요.

1. 넣으려는 칸 옆을 **최대한 가깝게 붙어** 지나가요. 이때 위치 기준은 **운전석에 앉은 내 어깨**예요.
2. **핸들 돌리는 타이밍이 제일 중요해요.** 내 어깨가 칸의 절반 지점을 지나는 순간, 핸들을 **칸의 반대쪽으로** 돌리며 전진해요(오른쪽 칸에 넣을 거면 핸들은 왼쪽으로). 너무 일찍 돌리면 각도가 안 나오고, 너무 늦으면 옆 차·기둥 쪽으로 붙어요.
3. 사이드미러로 봐서 차 뒷부분이 칸을 향했으면, 기어를 **R(후진)**에 넣고 핸들을 **칸 쪽으로** 빠르게 돌리며 후진해요.

![후진 T자 주차 3단계 도식](/img/parking-reverse-steps.svg)
*위에서 본 순서예요(오른쪽 칸에 넣는 예시). 빨간 점이 기준점인 **내 어깨**예요. (직접 그린 도식)*

4. 후진 중 **좌 → 우 → 후방카메라 → 좌 → 우** 순으로 계속 봐요. 카메라만 믿지 말고 **들어가는 방향 사이드미러 위주**로(카메라는 보조용).
5. 옆 차와 나란해지면 핸들을 똑바로 하고, 뒤 스토퍼에 닿을 때까지 후진해요.

## SUV·큰 차도 방법은 똑같아요

- 싼타페 같은 큰 차도 **공식은 똑같아요.** 시야가 낯설어 커 보일 뿐이에요.
- **차를 돌릴 공간이 좁으면** 어깨 기준보다 조금 더 앞으로(차 중간쯤) 나간 뒤 돌리면, 핸들을 끝까지 세게 돌리지 않아도 간격이 나와요.
- 무조건 핸들을 끝까지 돌리기보다, 사이드미러로 간격을 보며 천천히 돌리는 게 나아요.

## 쏠렸을 때 고치는 법 — '핸들 원위치'가 핵심

그래도 중간에 한쪽으로 쏠릴 때가 있어요. 그럴 때 고치는 법을 볼게요.

한쪽으로 쏠려 옆 차에 닿을 것 같을 때예요.

### 핸들부터 되돌리기

> [!TIP]
> 먼저 핸들을 똑바로(바퀴가 정면을 향한 상태) 되돌리세요. 꺾은 채로 계속 움직이면 더 틀어져요.

### 그다음 기어로 조정하기

- 지금 **바짝 붙어 있는 쪽**(옆 차·기둥)에 닿을 듯하면 → 뒤로 조금 더 뺐다가 다시 넣어요.
- 반대로 **떨어져 있는 쪽**에 닿을 듯하면 → 앞으로 약 50cm~1m 나가서 거리를 벌린 뒤 다시 후진해요.

한 번에 넣으려 마세요. **여러 번 고치는 게 당연해요.**

## 나갈 때 (출차)

주차를 마쳤다면, 이번엔 나가는 방법도 함께 볼게요.

1. 비상등 켜고 아주 천천히. 보이는 데까지만 움직이고, 차가 오면 멈춰 기다려요.
2. 확인되면 고개 돌려 왼쪽을 보고 갈 방향 깜빡이를 켜요.
3. 사이드미러·후방카메라로 **차 옆면**이 옆 차에 닿는지 보며 핸들을 돌려 나가요(뒷바퀴가 회전 중심이라, 나가는 반대편 뒤쪽은 크게 신경 쓰지 않아도 돼요).

## 어디서 연습하면 좋을까
방법을 익혔다면, 이제 마음 편히 연습할 장소를 고를 차례예요. 사람·차가 적은 곳에서 **넓게 빈 자리**를 골라 반복하는 게 가장 빨리 늘어요.

- **한적한 공영주차장·공원 주차장**: 칸이 크고 여유로워 처음 연습에 좋아요.
- **대형마트·백화점 주차장은 문 여는 직후**(오전 이른 시간): 차가 거의 없어 양옆이 빈 자리를 골라 넣어볼 수 있어요.
- **아파트 지하주차장은 사람이 적은 시간대**(평일 낮): 다만 좁고 기둥이 많아 **어느 정도 익숙해진 다음**에 연습하세요.
- 피하면 좋은 곳: 퇴근 시간 마트, 좁은 골목 주차, 경사가 심한 주차장.

> [!TIP] 연습할 때는 **양옆이 비어 있는 자리**를 골라 "선 안에 반듯하게 넣기"만 반복해 보세요. 옆에 차가 있으면 긴장해서 오히려 감이 안 잡혀요. 익숙해지면 한쪽에만 차가 있는 자리 → 양쪽에 차가 있는 자리로 단계를 올리면 돼요.
> (연습 장소·시간대는 일반적인 요령이라 지역 사정에 맞게 고르세요.)`,order:6},{id:"p1-features",phase:1,title:"차량 기능·부착물 (하이패스·빌트인캠·썬팅)",summary:["싼타페는 하이패스 단말기가 차에 내장되어 있어 단말기를 따로 살 필요가 없고, 카드(후불이 편함)만 준비해 삽입구에 넣으면 바로 쓸 수 있어요.","썬팅(창문 필름)과 빌트인캠(순정 블랙박스)도 함께 챙길 항목인데, 빌트인캠은 출고 시 녹화가 꺼져 있어 신차 받은 직후 직접 켜야 해요.","가장 조심할 건 썬팅 농도인데, 법으로 앞유리 70%·운전석 옆유리 40% 이상 빛이 통과해야 하고 흔히 하는 '국민 농도(35/15)'는 명백한 불법이에요."],body_md:`## 1. 하이패스 단말기·카드 등록 (근거: 한국도로공사 hipass.co.kr)

### 제도 배경
- 2025년부터 기존 '단말기 인증제도'에서 **'적합등록제도'**로 전환. 적합등록된 단말기만 전국 유료도로에서 호환된다(홈페이지에서 모델 확인 가능).

### 단말기 등록 — USB 연결 방식 (비회원 가능)
1. **Agent 실행**: ex Agent 프로그램 다운로드 후 실행, [실행확인] 클릭.
2. **단말기 연결**: 단말기를 PC에 USB로 연결.
3. **정보 입력**: 차량번호·차주 정보 입력.
4. **완료.**
- 회원가입 없이 등록·정보조회 가능. 방화벽으로 막히면 해제하거나 다른 PC 이용. USB 미연결(신청서 출력) 방식, 룸미러·내장형은 별도 절차.

### 하이패스카드 등록 (EX선불카드 기준)
1. **카드 구입**: 5,000원/매(휴게소·영업소·하이패스센터).
2. **기명 등록**: 홈페이지/앱 회원가입 → EX선불카드 등록 → 카드번호 입력. **기명카드만 사용내역 조회·분실 환불 가능**(무기명은 불가).
3. **카드 사용**: 단말기에 삽입하면 인식. 단말기 등록과 카드 등록은 별개다.
- 후불 하이패스카드(카드사 발급)는 카드사 소관.

## 2. 썬팅 법정 기준 (근거: 찾기쉬운 생활법령정보/법제처)

### 가시광선 투과율(VLT) 법정 최소 기준
| 부위 | 법정 최소 투과율 |
|---|---|
| 앞면(전면) 창유리 | **70% 이상** |
| 운전석 좌우 옆면 창유리 | **40% 이상** |
| 뒷좌석 옆면·후면 유리 | 제한 없음 |

- 근거: 도로교통법 제49조 제1항 제3호 + 시행령 제28조. 위반 과태료 **2만원**(제160조), 경찰이 현장 제거 명령·직접 제거 가능.
- **⚠️ '국민 농도'(전면 35% / 측면 15%)는 법정 기준의 절반 이하로 명백한 위반이다.** 필름 제품명의 숫자가 곧 VLT(투과율)이다. 단속이 드물어 만연해 있을 뿐이다.
- **농도 ≠ 열차단율**: 자외선은 싼 필름도 99% 이상 차단된다. 필름 등급(적외선 차단율)을 보고 고르고 농도는 법정 기준에 맞추면, 연한 고성능 필름으로 전면 70·측면 40을 지키면서 열차단을 확보할 수 있다. '진하게 해야 시원하다'는 잘못된 전제다.
- 짙은 썬팅은 야간 시야를 방해해 사고 시 과실 판단에 불리할 수 있다.

## 3. 빌트인캠2 (현대·기아 순정 내장형 블랙박스)

- 순정 내장형이라 차체 밖으로 튀어나오는 부분이 없고 내장재를 뜯을 필요가 없으며, 촬영 영상을 내비 화면에서 바로 확인하고 휴대폰으로 추출할 수 있다. 속도·위치·방향지시등 등 주행 정보도 함께 기록된다.
- **빌트인캠2 플러스**부터는 '주차 중 동작 감지' 기능으로 움직임이 있을 때만 녹화해 주차 녹화 시간을 크게 늘렸다.

### 설정 요령 (빌트인캠2 플러스 기준, 차종별 메뉴 상이)
- 녹화 항목 중 **'주차 중 상시'를 제외한 나머지는 모두 켜두는 것을 권장**. 주차 중 상시는 최대 20시간까지만 저장되므로, 매일 운행하지 않으면 '주차 중 동작 감지'만 켜두는 편이 오래 녹화된다.
- 이벤트 녹화는 앞뒤 10초 정도, 주차 중 충격 감지 민감도는 너무 높이면 소음에도 알림이 자주 오므로 적절히 조절.
- 카메라 각도는 차량 상단에 달려 있으므로 최대한 낮춰야 주변을 잘 담는다.
- SD카드 위치는 차종마다 다르며 설정 메뉴의 'SD 메모리' 항목에서 실제 단자 위치를 화면으로 확인할 수 있다.

> ⚠️ 참고(교차 참조): 사제 블랙박스를 OBD 단자에 연결하면 현대 OTA(무선 소프트웨어 업데이트)가 동작하지 않을 수 있고, 배터리 방전과도 직결된다. 순정 빌트인캠의 OTA 간섭 여부는 별도 확인 필요.`,field_tips_md:`## 유튜브 실전 팁 (빌트인캠)

본문에서 다룬 빌트인캠, 실제로 써보면 이런 점들도 함께 챙기면 좋아요.

- **⚠️ 신차 인수 직후 '활성화 버튼'을 반드시 켜라.** 싼타페 MX5 등에서 빌트인캠2 옵션을 넣고 출고해도, 빌트인캠 화면의 활성화(녹화) 버튼을 누르지 않으면 녹화가 전혀 되지 않는 사례가 있다. 버튼에 불(표시등)이 들어와 있으면 정상, 꺼져 있으면 이벤트 녹화가 안 되는 상태다. 인수 직후 가장 먼저 확인할 것.
- **싼타페 MX5 SD카드 위치**: 글러브박스 왼쪽 부분(설정 메뉴 'SD 메모리'에서 위치 확인 가능).
- **영상 추출**: 커넥트 앱 설치·차량 연결 → 차량 화면에서 '빌트인 와이파이 활성화' → 앱 제어 탭 > 비디오 탭 > '차량에서 빌트인캠 연결' → 목록에서 저장.
- **'주차 중 이벤트' 휴대폰 알림**을 켜두면 주차 중 충격 발생 시 바로 알림이 와 즉각 대응할 수 있다.
- **AR 내비게이션**: 빌트인캠 카메라로 증강현실 내비를 쓸 수 있다. 전체 화면으로 쓰면 헷갈리므로 보조 화면에 끼워 지도와 함께 보거나, '안내 위치 증강현실 뷰'로 갈림길에서만 자동 전환되게 설정하는 것을 추천. 헷갈리면 화면을 아무 곳이나 터치하면 지도 모드로 복귀.`,checklist:["하이패스 카드 준비하기(후불카드는 충전 불필요, 선불카드는 잔액 확인 필요)","카드 삽입 후 단말기 두 버튼 동시 길게 눌러 내 차량번호로 등록됐는지 확인","선불 하이패스카드는 기명 등록해야 사용내역 조회·분실 환불 가능","썬팅은 전면 70%·운전석 측면 40% 이상 투과율 준수('국민 농도'는 불법)","썬팅 시 앞유리 금속성 코팅은 하이패스 통신 장애를 일으키니 시공점에 내장형이라고 알리기","썬팅은 농도가 아니라 필름 등급(적외선 차단율)으로 고르기","신차 인수 직후 빌트인캠 녹화 기능 켜기(출고 시 해제 상태)","빌트인캠 SD카드 상태·위치 확인(MX5는 글러브박스 왼쪽)","사제 블랙박스 OBD 연결 시 OTA 간섭 주의"],sources:[{name:"한국도로공사 (고속도로 통행료 홈페이지, hipass.co.kr)",url:"https://hipass.co.kr/eHiPass/obuRegist.do",type:"official"},{name:"찾기쉬운 생활법령정보(법제처) / 현대자동차 공식 안내",url:"https://easylaw.go.kr/CSP/CnpClsMainBtr.laf?ccfNo=1&cciNo=2&cnpClsNo=1&csmSeq=684&popMenu=ov",type:"official"},{name:"솜아빠",url:"https://youtu.be/RzmkAccOo5o",type:"personal"},{name:"MS custom",url:"https://youtu.be/ONzaYdbIhT8",type:"personal"},{name:"현대 취급설명서 MX5HEV — 하이패스 시스템(ETCS)",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR/id66484df9730.html",type:"official"},{name:"한국도로공사 하이패스 카드 안내",url:"https://www.hipass.co.kr/html/CardInfo.jsp",type:"official"},{name:"현대 취급설명서 MX5HEV — 빌트인 캠 사양·저장 기준",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR/id22AHAE0B0YK.html",type:"official"}],flags:["단독출처"],valid_year:2026,car_scope:"mx5-hev",source_files:["official/p1-하이패스등록-11.md","web/p1-썬팅-14.md","youtube/p1-빌트인캠-01.md","youtube/p1-빌트인캠-02.md","official/p1-빌트인하이패스-MX5HEV-20.md","official/p1-빌트인캠2-사양한계-MX5HEV-21.md"],body_easy_md:`한마디로: 하이패스 카드 넣기, 썬팅 농도 지키기, 빌트인캠 켜기 세 가지만 챙기면 돼요.

## 1. 하이패스 (우리 차는 순정 내장형 — 공장에서 달고 나온 것)
싼타페에는 **하이패스 단말기가 차에 내장**되어 있어요. 위치는 **운전석 위 천장(오버헤드 콘솔)**이에요. 그래서 따로 단말기를 살 필요가 없고, **카드만 준비**하면 돼요.

![천장 오버헤드 콘솔의 하이패스 단말기 버튼](/img/hipass-console.jpg)
*①전원/볼륨 ②잔액 확인 ③카드 탈거 버튼, 그 아래가 카드 넣는 곳이에요. (출처: 현대 싼타페 MX5 HEV 취급설명서)*

### 먼저 카드를 준비해요
- **후불 하이패스카드**: 신용카드사(KB국민·NH농협·비씨·롯데·삼성·신한·하나·현대·씨티·광주·수협·전북 등 12개사)에서 발급해요. **충전이 필요 없고** 통행료가 카드값에 같이 청구돼요. 초보라면 이게 제일 편해요.
- **선불 하이패스카드**: 캐시비·하이플러스·한페이·한국도로공사 카드가 있어요(캐시비·한페이는 '하이패스형'만 돼요). 미리 충전해서 쓰고, **잔액이 부족하면 결제가 안 돼요.**
- 도로공사 **EX-모바일 충전카드**는 실물카드로 결제하고 앱에서 충전하는 방식이에요(1만원 단위, 최대 50만원).
- **e hi-pass**(카드 없이 쓰는 방식)도 있는데, 내비게이션과 **블루링크 가입**이 필요해요.

### 카드 넣고 쓰는 법
1. 카드를 **넣는 구멍과 나란히 맞춰** 똑바로 밀어 넣어요(비스듬히 넣으면 카드 꽂는 부분이 망가질 수 있어요). 전원이 꺼져 있어도 카드를 넣으면 켜져요.
2. 단말기 버튼은 세 개예요.
   - **전원/볼륨**: 꺼져 있을 때 누르면 켜지고, 켜진 상태에서 **길게** 누르면 꺼져요. 켜진 상태에서 **짧게** 누르면 음량이 5단계로 바뀌어요.
   - **잔액 확인**: 짧게 누르면 **"잔액이 ○○원입니다"**, 길게(약 1.5초) 누르면 **최근 낸 요금**을 알려줘요.
   - **카드 탈거**: 카드를 뺄 때 **반드시 이 버튼을 눌러서** 빼세요.
3. 차 화면에서도 설정할 수 있어요. **설정 > 차량 > 하이패스**에서 안내 음량(0~5단계), 결제 정보 표시, 결제 금액 안내를 켜고 꺼요.

> [!CHECK] **내 차로 등록됐는지 확인하는 방법** — **잔액 확인 버튼 + 전원/볼륨 버튼을 동시에 길게** 누르면 제조번호·차종·**차량번호**·발행일·만료일을 음성으로 알려줘요. 번호판을 받은 뒤 여기서 **내 차량번호가 맞는지** 한 번 확인해 두면 좋아요.

### 조심할 것
> [!WARN] - 하이패스 차로를 지날 때는 **단말기 전원이 켜져 있어야** 결제돼요. 꺼진 채로 통과하면 미납이에요.
> - 단말기 **표시등(LED)이 빨간색**이면 카드에 문제가 있거나 시스템 오류예요. 이때는 하이패스 차로 대신 **일반 차로**로 지나가세요.
> - **사제(별도) 하이패스 단말기를 추가로 달면 결제가 안 될 수 있어요.** 필름형 안테나·요일제 단말기도 통신 오류를 일으켜요.
> - **앞유리에 금속이 섞인 코팅·썬팅**을 하면 통신 장애가 생길 수 있어요(썬팅할 때 시공점에 하이패스 내장형이라고 알려주세요).
> - 여름 뜨거운 차 안에서는 카드가 변형될 수 있어요. **오래 세워 둘 때는 카드를 빼서** 보관하세요.

> [!NOTE] **친환경차 통행료 할인은 우리 차엔 없어요.** 단말기에는 장애인·국가유공자·친환경차 자동 할인 기능이 없고, 친환경차 할인 자체가 **전기·수소차 전용**이라 하이브리드는 대상이 아니에요('하이브리드 세제혜택' 참고).

## 2. 썬팅 - 법정 농도 기준 (가장 중요)

하이패스를 등록했다면, 이번엔 차량 외관에서 꼭 짚어야 할 썬팅 농도 기준을 볼게요.

창문 필름은 '빛이 얼마나 통과하는가(가시광선 투과율)'에 법 기준이 있어요. 숫자가 클수록 빛이 많이 통과해 밝다는 뜻이에요.

| 부위 | 최소 투과율 |
|---|---|
| 앞유리(전면) | **70% 이상** |
| 운전석 좌우 옆유리 | **40% 이상** |
| 뒷좌석 옆·뒤유리 | 제한 없음 |

> [!WARN] 흔히 말하는 '국민 농도(앞 35% / 옆 15%)'는 법 기준의 절반도 안 되는 명백한 불법이에요. 위반 시 과태료 2만원에 경찰이 현장에서 제거 명령·직접 제거까지 할 수 있어요. 필름 이름의 숫자가 곧 투과율이니 꼭 확인하세요.

- **'진하게 해야 시원하다'는 오해**예요. 농도(진하기)와 열 차단은 별개고, 자외선은 싼 필름도 99% 차단돼요. 진하기 대신 **필름 등급(적외선 차단율 — 열을 얼마나 막아 주는지)**을 보면 연하면서도(앞 70%·옆 40% 준수) 시원한 필름을 쓸 수 있어요.
- 짙은 썬팅은 야간 시야를 가려 사고 시 과실에 불리할 수 있어요.

## 3. 빌트인캠 (현대·기아 순정 내장 블랙박스)

썬팅까지 챙겼다면, 마지막으로 사고 기록의 핵심인 빌트인캠을 켜볼 차례예요.

- 내장형이라 차 밖으로 튀어나온 부분이 없고, 찍은 영상을 내비 화면에서 바로 보거나 휴대폰으로 옮길 수 있어요. 속도·위치·방향지시등을 켰는지도 함께 기록돼요.
- 빌트인캠2 플러스부터 **'주차 중 동작 감지'**로 움직임 있을 때만 찍어 주차 녹화 시간을 크게 늘렸어요.

![빌트인 캠 작동 버튼](/img/builtin-cam-button.jpg)
*빌트인 캠 작동 버튼 (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

> [!CHECK] 신차 받은 직후 활성화(녹화) 버튼을 꼭 켜야 녹화가 시작돼요. 버튼을 누르지 않으면 사고가 나도 영상이 남지 않으니, 인수 후 가장 먼저 확인하세요.

### 얼마나 오래·어떻게 찍히나 (공식 사양)
매뉴얼에 적힌 저장 기준이에요(64GB SD 기준).

| 녹화 종류 | 저장 분량 | 화질·프레임 |
|---|---|---|
| 주행 중 상시 | **약 4시간** (1분 단위) | QHD 2560×1440 / 30fps |
| 주차 중 상시 | 약 40시간 (30분 단위) | QHD / **2fps**(초당 2장) |
| 주행 중 이벤트(충격) | 최대 40건 | 30fps |
| 주차 중 이벤트(충격) | 최대 40건 | 10fps |
| 수동 녹화 | 최대 40건 | 30fps |

> [!WARN] **주행 영상은 4시간이면 오래된 것부터 자동으로 지워져요.** 장거리 한 번 다녀오면 앞부분이 사라질 수 있어요. **중요한 영상은 그날 바로 저장·다운로드**하세요(수동 녹화 버튼을 누르거나 보관함에 옮기면 따로 남아요).
> 주차 녹화는 **2fps라 움직임이 뚝뚝 끊겨** 보여요. 번호판 판독 같은 정밀한 확인은 어려울 수 있어요.

> [!NOTE] **사제 블랙박스를 따로 달아야 할까?** 판단 기준이에요.
> - 빌트인캠으로 충분한 경우: 출퇴근 위주, 주차는 실내·CCTV 있는 곳, "사고 순간 기록"이 주 목적.
> - 추가를 고려할 경우: **장거리를 자주** 타서 주행 영상 4시간이 부족하거나, **야외 주차**가 많아 주차 감시를 촘촘히 하고 싶은 경우.
> - 단, 사제 제품을 상시전원(시동을 꺼도 계속 전기가 흐르는 선)이나 OBD 단자에 연결하면 **방전·OTA 간섭** 위험이 있어요. 설치 방식을 꼭 확인하세요.

### 이럴 때는 녹화가 안 돼요 (중요)
- **출고 시에는 녹화 기능이 꺼져 있어요** → 인수 직후 직접 켜야 해요.
- SD 메모리(메모리 카드)가 없거나, **쓸 수 있는 남은 용량이 32GB보다 적으면** 작동하지 않아요.
- **빌트인캠 메뉴를 화면에서 보고 있는 동안**에는 녹화가 멈춰요.
- 시동 직후 부팅 중에는 아직 녹화가 안 돼요.
- 주차 녹화는 **12V 보조배터리 충전량이 부족하면 멈춰요**(정품 12V 리튬 보조배터리를 쓸 때만 주차 녹화가 돼요).
- 정품이 아닌 SD 카드는 정상 동작을 보증하지 않아요.

### 설정 요령 (플러스 기준, 차종마다 메뉴 조금 다름)
- **'주차 중 상시'만 빼고 나머지는 다 켜두는 걸 추천.** 한 번 주차했을 때 녹화를 이어 가는 시간은 **최대 20시간까지 설정**할 수 있어요. 매일 안 타면 **'주차 중 동작 감지'**만 켜는 게 더 오래 찍혀요.

> [!NOTE] **'20시간'과 '40시간'은 다른 이야기예요.** 20시간은 *한 번에 얼마나 오래 녹화하는지*이고, 40시간은 *SD카드(64GB)에 남아 있는 주차 영상 총량*이에요. 20시간씩 녹화하면 **이틀치쯤 쌓인 시점에 첫날 영상이 지워지기 시작**해요. 문콕을 늦게 발견하면 증거가 이미 없을 수 있으니 **주차 후에는 되도록 빨리 확인**하세요.
> 보조배터리가 부족하면 설정한 시간보다 일찍 끊길 수 있어요. 남은 녹화 가능 시간은 빌트인캠 메뉴에서 볼 수 있어요.
- 주차 중 충격 감지 민감도가 너무 높으면 소음에도 알림이 잦으니 적당히 맞추세요.
- 카메라는 차 위쪽이라 각도를 최대한 낮춰야 주변이 잘 담겨요.
- SD카드 위치는 설정 메뉴 'SD 메모리'에서 확인할 수 있어요.

참고로 순정 빌트인캠이 이런 간섭을 일으키는지는 따로 확인이 필요해요.

## 이름이 헷갈리는 앱·서비스 정리 (마이현대·블루링크·블루멤버스)
현대차 서비스는 이름이 비슷해서 "앱을 몇 개 깔아야 하나" 헷갈려요. 관계는 이렇게 정리하면 돼요.

| 이름 | 무엇인가 | 언제 쓰나 |
|---|---|---|
| **마이현대** | 현대차 **통합 앱**(내 차 정보·정비 예약·서비스 이용) | 앱은 보통 **이거 하나로 시작**하면 돼요 |
| **블루링크** | 차와 통신하는 **커넥티드 서비스 이름**(원격 시동·목적지 전송·차량 상태 확인) | 신차 구매 시 일정 기간 무료인 경우가 많아요 |
| **블루멤버스** | **포인트 멤버십**(적립·정비 혜택, 신차 무상점검 대상 확인) | 무상점검·포인트 쓸 때 |

- 즉 **블루링크는 '기능', 블루멤버스는 '멤버십', 마이현대는 그것들을 쓰는 '앱'**이에요.
- 서비스·시기에 따라 별도 앱이나 별도 가입이 필요할 수 있으니, 처음엔 마이현대에 로그인해 **내 차가 등록돼 있는지**만 확인하면 충분해요.

## 출고 직후 챙기면 좋은 자잘한 것들
큰 항목은 아니지만 놓치면 은근히 번거로운 것들이에요.

- **아파트·직장 주차 등록**: 차량번호가 나온 뒤(등록 완료 후) 관리사무소에 등록해요. 등록 전에는 방문차량으로 처리돼 요금이 나올 수 있으니, **번호판 받은 날 바로** 신청하는 게 좋아요.
- **초보운전 스티커**: 의무는 아니지만 뒤차의 양보를 받기 쉬워요. 뒷유리·트렁크에 **시야를 가리지 않는 위치**에 붙이고, 자석·정전기 부착식은 세차나 고속 주행에서 떨어질 수 있으니 확인하세요.
- **차량 등록증·보험증권 보관**: 등록증은 차에, 보험증권은 휴대폰에 사진으로 두면 사고·검문 때 편해요.`,order:2},{id:"p1-hybrid-driving",phase:1,title:"하이브리드 운전법",summary:["회생제동은 액셀에서 발을 뗄 때 차가 저절로 감속하면서 배터리를 충전하는 기능이고, 하이브리드는 이걸 잘 쓰면 연비가 좋아져요.","핸들 뒤 패들로 회생제동을 0~3단계 조절하고, 급출발·급제동을 피하며 신호 앞에서는 미리 발을 떼 관성으로 접근하면 연비가 올라가요.","단, 싼타페 MX5 HEV는 2~3단계에서 액셀만 떼도 제동등이 켜지고 급하게 서는 느낌이라 멀미를 유발하니, 평소엔 0~1단계 위주로 쓰는 게 무난해요."],body_md:`## 회생제동(배터리 충전) 이해하기

하이브리드는 액셀에서 발을 뗄 때 감속 에너지로 배터리를 충전하는 **회생제동**이 작동한다. 이 강도를 **패들 시프트로 0~3단계** 조절할 수 있다.

- 주행 모드는 스마트/에코/스포츠로 전환된다. 에코·스마트 모드에서는 패들 시프트로 회생제동 레벨을 직접 설정하고, 스포츠 모드에서는 패들이 (회생제동이 아니라) 기어비 수동 조절로 동작한다.
- 패들 시프트(-)로 단계를 올리고, 패들(+)을 길게 누르면 앞차 간격을 감지해 자동 조절하는 **오토(스마트 회생) 모드**가 된다.
- **단계가 높을수록 충전은 잘 되지만, 액셀을 떼는 순간 급감속감이 커진다.** 2~3단계는 쏠림이 강해 동승자·뒷좌석 탑승자가 멀미를 느끼기 쉬우므로, 동승자가 있을 때는 낮은 단계가 좋다.

## 하이브리드 연비 운전법

급출발·급제동을 피하고 불필요한 짐을 비우는 것이 모든 파워트레인 공통 기본이다. 그 위에 하이브리드 특화 요령을 더한다.

1. **EV(전기 주행) 모드를 최대한 길게 유지**: 계기판을 보며 엔진이 개입하는 액셀 답력 구간을 감으로 파악하고, 가속을 세밀하게 조절해(발컨) 엔진 개입을 줄인다.
2. **관성 주행(코스팅) 활용**: 신호 앞에서는 미리 액셀에서 발을 떼 관성으로 접근한다. 하이브리드는 관성 주행 중에도 회생제동이 걸려 충전과 제동을 동시에 얻는다.
3. **내리막에서 패들 시프트 활용**: 브레이크만 밟기보다 회생제동 단계를 조절하며 내려오면 충전량을 더 확보할 수 있다(제작자 체감 — 검증 필요 항목).
4. **오르막·내리막에서 스마트 크루즈(ACC) 끄기**: ACC는 설정 속도를 유지하려 엔진을 무리하게 개입시켜 연비 저하가 크게 나타날 수 있다(차종별 로직 차이 있음).

> 참고: '회생제동을 많이 쓸수록 연비가 오히려 나빠진다'는 일부 체감은 일반 통념(회생제동 활용이 연비에 유리)과 상충하는 개인 의견이므로 그대로 채택하지 않는다.`,field_tips_md:`## 싼타페 MX5 HEV 실전 팁 (회생제동 & 제동등)

- **오토(스마트 회생) 모드 설정**: 설정 > 차량 > 친환경차 > 스마트 회생 시스템 체크(단, 시동마다 재설정 필요). 시동 후 바로 상시 사용하려면 **패들 시프트(- 방향)를 약 2초 길게** 누르면 즉시 오토 모드로 활성화된다.
- **⚠️ 회생제동 2~3단계에서는 액셀만 떼도 제동등이 켜진다**(MX5 HEV 실험 결과). 0·1단계에서는 액셀을 떼도 제동등이 들어오지 않는다. 0단계 주행 중이라도 패들로 2단계로 올리면 즉시 제동등이 켜지며, 이는 수동/오토 설정과 무관하다.
- **뒤차 배려**: 오토 모드는 앞차가 감속하면 회생제동을 자동으로 2~3단계로 올려 제동등이 자주 깜빡일 수 있다. 신경 쓰인다면 제동등이 잘 안 켜지는 0~1단계를 선호하는 운전자가 많다(다만 앞차가 실제 감속하는 상황이라면 어차피 브레이크를 밟을 상황이라 크게 문제되지 않는다).
- 오토홀드 정차 중, 회생제동+오토홀드 동시 사용 중에도 제동등은 정상 점등된다. 계기판에 설정을 띄우면 현재 제동등 점등 여부를 화면으로 확인할 수 있다.`,checklist:["패들 시프트로 회생제동 0~3단계 조절 익히기(에코/스마트 모드에서)","동승자 있을 때는 급감속감이 큰 2~3단계 대신 낮은 단계 사용","EV 모드를 길게 유지하도록 가속을 세밀하게 조절","신호 앞에서는 관성 주행으로 접근(충전+제동 동시)","오르막·내리막에서 스마트 크루즈(ACC) 끄기","회생제동 2~3단계에서 액셀만 떼도 제동등 켜짐을 인지하고 뒤차 배려","오토 모드는 패들(- 방향) 2초 길게 눌러 활성화"],sources:[{name:"STACKPOP",url:"https://youtu.be/U5taSddbW10",type:"personal"},{name:"오토클래스AUTOCLASS",url:"https://youtu.be/K-27XtIiMzI",type:"personal"},{name:"[싼존] 팰리세이드 생활",url:"https://youtu.be/_udUifiEAcw",type:"personal"},{name:"에이원오토 서백로 (유튜브·모드별 연비 실측)",url:"https://youtu.be/XWSMgvBFY8s",type:"personal"},{name:"모토앤드라이브 (유튜브·드라이브 모드 설명)",url:"https://youtu.be/sEU7BPmzkME",type:"personal"}],flags:["단독출처"],valid_year:null,car_scope:"hybrid",source_files:["youtube/p1-하이브리드운전법-01.md","youtube/p1-하이브리드운전법-02.md","youtube/p1-하이브리드운전법-03.md","youtube/p1-드라이브모드-01.md"],body_easy_md:`한마디로: 급하게 밟거나 떼지 말고, EV(전기)로 오래 달리면 연비가 좋아져요.

## 드라이브 모드 (에코·스마트·스포츠)
싼타페는 센터 콘솔에 있는 **DRIVE MODE 버튼**으로 주행 성격을 바꿔요(누를 때마다 다음 모드로 넘어가요). 하이브리드는 시동을 켜면 **에코 모드**로 시작하고, 뭘 골라야 할지 모르겠으면 **스마트 모드**에 두면 알아서 조절돼 편해요.

![센터 콘솔의 DRIVE MODE 버튼](/img/drive-mode-button.jpg)
*변속 레버 옆 'DRIVE MODE' 버튼이에요. (출처: 현대 싼타페 MX5 HEV 취급설명서)*
- **에코 모드**: 연비 우선. 가속이 부드럽고 힘을 아껴요. 평소 시내·출퇴근에 좋아요.
- **스마트 모드**: 내 운전 습관을 보고 에코↔스포츠를 **자동으로** 오가요. 초보에겐 이게 무난해요.
- **스포츠 모드**: 가속 응답이 빠르고 핸들이 묵직해져 힘있게 달려요. 대신 연비는 떨어지고, 이 모드에선 패들이 **기어 수동 조작**으로 바뀌어요.
- 눈길·진흙·모래용 **지형 모드**(SNOW/MUD/SAND)는 사륜구동(AWD) 차에만 있어요. **내 차는 2WD라 없어요.**
- **연비 팁**: 모드별 연비 차이는 실측상 생각보다 작아요. 연비는 모드보다 **급출발·급제동을 줄이는 습관**이 훨씬 크게 좌우해요.

> [!TIP] 어려운 모드 이름엔 점선 밑줄이 있어요 — 누르면 쉬운 뜻이 떠요. 대부분은 **스마트 모드** 하나로 충분해요.

## 회생제동 (배터리 충전 기능)

**회생제동**은 액셀에서 발을 뗄 때 속도가 줄어드는 힘으로 배터리를 충전하는 기능이에요. 강도는 핸들 뒤쪽 **패들 시프트로 0~3단계** 조절해요.

![핸들 뒤 좌우 패들 시프트](/img/paddle-shift.jpg)
*핸들 뒤쪽 좌우에 달린 것이 패들이에요. 손가락으로 당겨서 써요. (출처: 현대 싼타페 MX5 HEV 취급설명서)*

### 패들로 조절하기

- **에코·스마트 모드**에선 패들로 회생제동 단계를 조절하고, **스포츠 모드**에선 패들이 기어 수동 조작으로 바뀌어요.
- **(−) 표시 패들을 당기면** 회생제동 단계가 올라가요. **(+) 표시 패들을 길게 당기면** 앞차와의 간격을 보고 차가 알아서 단계를 조절하는 **스마트 회생 시스템**(오토 모드)이 돼요.

### 몇 단계가 적당할까요?

- **단계가 높을수록 충전은 잘 되지만 발 떼는 순간 확 감속하는 느낌이 커져요.** 2~3단계는 쏠림이 강해 동승자가 멀미하기 쉬우니 사람 태울 땐 낮은 단계가 좋아요.
- 특히 싼타페 MX5 HEV는 **2~3단계에선 액셀만 떼도 제동등이 켜져요.**

> [!TIP] 뒤차를 생각하면 평소엔 제동등이 잘 안 켜지는 **0~1단계**가 무난해요.

## 연비 잘 나오는 운전법

회생제동을 어떻게 쓸지 감을 잡았다면, 이제 연비를 실제로 끌어올리는 운전 습관을 볼게요.

급출발·급제동 피하고 짐 비우기는 모든 차 공통 기본이에요. 여기에 하이브리드 요령을 더해요.

1. **EV(전기) 모드로 오래 달리기**: EV 모드는 엔진이 꺼지고 전기 모터로만 달리는 상태예요. 액셀을 조금씩 세밀하게 밟아 엔진이 켜지는 걸 최대한 늦춰요.
2. **관성 주행 활용**: 신호 앞에서는 미리 액셀에서 발을 떼고, 차가 굴러가는 힘으로 다가가세요. 이때도 회생제동이 걸려서 **충전과 속도 줄이기를 동시에** 얻어요.
3. **내리막에선 패들 활용**: 브레이크만 밟기보다 회생제동 단계를 조절하며 내려오면 충전을 더 얻어요. (직접 타 보고 느낀 수준이라 사람·차에 따라 다를 수 있어요.)
4. **오르막·내리막에선 스마트 크루즈 컨트롤(SCC) 끄기**: 설정한 속도를 지키려고 엔진을 무리하게 써서 연비가 크게 떨어질 수 있어요(차종에 따라 차이가 있어요).

> [!NOTE] '회생제동을 많이 쓰면 오히려 연비가 나빠진다'는 말도 인터넷에 있지만, 개인 의견에 가까워서 이 가이드에서는 따르지 않았어요. 보통은 회생제동을 쓰는 쪽이 연비에 유리하다고 봐요.`,order:5},{id:"p1-refueling",phase:1,title:"셀프 주유",summary:["셀프 주유는 주유소에서 내가 직접 기름을 넣는 거예요.","출발 전에 내 차 주유구 위치·여는 법·유종(휘발유인지 경유인지)만 미리 알아두면 당황하지 않아요.","가장 중요한 건 유종 확인이에요. 기름을 잘못 넣으면(혼유) 엔진이 망가지니 화면에서 내 차 연료를 정확히 골라야 해요."],body_md:`## 출발 전 준비 (미리 알아두면 당황하지 않는 3가지)

1. **주유구 위치**: 계기판의 주유기 아이콘 옆 삼각형(화살표)이 가리키는 방향에 주유구가 있다(왼쪽 화살표 = 왼쪽). 국산차는 주로 왼쪽, 일부 수입차는 오른쪽 경향(절대 규칙 아님).
2. **주유구 개폐 방법**: 손으로 눌러 여는 차, 실내 레버/버튼을 당기는 차 등 차종마다 다르다. 버튼 위치(운전석 근처·시트 아래·시트 옆 등)를 미리 익혀둔다.
3. **유종**: 내 차가 휘발유인지 경유인지 반드시 확인. **혼유하면 엔진이 망가진다.**

## 셀프 주유 절차

1. 주유구 위치에 맞춰 주유기 방향대로 정차한다.
2. **시동을 반드시 끈다**(화재 위험, 문제 발생 시 수리비 급증).
3. **정전기 방지 패드 터치**: 주유기 옆 정전식 패드에 손을 대 몸의 정전기를 제거한다(화재 예방).
4. **유종 선택**: 화면에서 내 차 연료를 정확히 고른다. (RPM 게이지가 있으면 대개 휘발유차, 계기판에 유종 표시가 있는 경우도 있음.)
5. **결제**: 신용카드를 투입하고 금액을 직접 선택하거나 '가득'을 누른다. 탱크가 넘치지 않을 만큼 자동으로 멈추므로 넘칠 걱정은 없고, 가득 버튼의 예상 금액이 아니라 **실제 주유량만큼만 결제**된다.
6. **연료 캡 열기**: 대개 돌려서 연다. 근처 고리에 걸어두면 열었는지 확인도 되고 보기에도 좋다.
7. **주유건 꽂기**: 노즐 고리를 걸어 고정하면 손으로 잡고 있지 않아도 된다.
8. **완료 확인**: '딸깍' 소리가 나면 완료. 빼기 전 주유건을 살짝 위로 들어 남은 기름을 한 번 흔들어 떨군 뒤 제자리에 건다.
9. **연료 캡 닫기**: '딸깍' 소리가 날 때까지 돌려 닫는다(현대·기아는 부력 잠김 소리로 확인).
10. **신용카드 회수**를 잊지 않는다.

> 참고: 휘발유차 주유구 구멍이 경유차보다 작아, 혼유 사고는 경유차 운전자가 휘발유를 넣는 경우에 더 잦다는 설명이 있다(통계 정확성은 검증 필요). 경유차 이용자는 특히 주의.`,field_tips_md:null,checklist:["출발 전 주유구 위치(계기판 화살표 방향) 확인","출발 전 주유구 개폐 버튼/레버 위치 확인","출발 전 내 차 유종(휘발유/경유) 확인 — 혼유 절대 금지","정차 후 반드시 시동 끄기","주유 전 정전기 방지 패드 터치","결제는 금액 지정 또는 '가득'(실제 주유량만큼만 결제)","완료 후 연료 캡 딸깍 소리까지 닫고 신용카드 회수"],sources:[{name:"한국경제신문",url:"https://youtu.be/sd2F0sNJF9o",type:"personal"},{name:"이게운전이다",url:"https://youtu.be/8YbljQYg2uU",type:"personal"},{name:"박병일의 명장본색 (유튜브)",url:"https://youtu.be/Rva0v-xmW8E",type:"personal"},{name:"제이특공대 (유튜브)",url:"https://youtu.be/XssiE3Vt1lA",type:"personal"},{name:"장용석의내차를부탁해 (유튜브)",url:"https://youtu.be/GLPeJWEbJXM",type:"personal"},{name:"첫차 가이드 근거검증(혼유 — 현대 취급설명서·법령 대조) 수집분",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR",type:"official"},{name:"현대 취급설명서 MX5HEV — 연료 주입구 여는/닫는 방법",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR/ide30c6f8f399.html",type:"official"}],flags:[],valid_year:null,car_scope:"generic",source_files:["youtube/p1-셀프주유-01.md","youtube/p1-셀프주유-02.md","web/first-car-guide-source-verification-2026-07-25.md","youtube/p1-혼유대처-01.md","web/evidence-check-2026-07-25.md","official/p1-주유구개폐-MX5HEV-19.md"],body_easy_md:`한마디로: 시동 끄고, 정전기 방지 패드 만지고, 내 차 유종(기름 종류) 골라 넣으면 돼요. 제일 중요한 건 유종 확인이에요!

## 출발 전 3가지 확인

1. **주유구 위치**: 계기판 주유기 아이콘 옆 **삼각형(화살표)** 방향에 있어요(왼쪽 화살표=왼쪽). 국산차는 보통 왼쪽.

![계기판 연료 게이지의 주유구 방향 화살표](/img/fuel-gauge-arrow.jpg)
*주유기 아이콘 왼쪽의 ◀ 표시가 주유구가 왼쪽에 있다는 뜻이에요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*
2. **여는 법(우리 차)**: 싼타페는 **실내에 주유구를 여는 레버·버튼이 없어요.** 차 밖으로 나가서 **주유구 뚜껑(커버)의 오른쪽 끝 중앙을 손으로 꾹 누르면** 열려요(다른 곳을 누르면 안 열려요).

![주유구 커버가 열린 모습과 연료 캡(②)](/img/fuel-door-open.jpg)
*열면 이렇게 생겼어요. ②가 돌려서 여는 연료 캡이에요. (출처: 현대 싼타페 MX5 HEV 취급설명서)*
3. **유종**: 내 차가 **휘발유인지 경유인지 꼭 확인해요.** 잘못 넣으면 엔진이 망가져요. (싼타페 하이브리드는 휘발유예요.)

## 주유 순서

출발 전 확인을 마쳤다면, 이제 실제로 어떤 순서로 주유하는지 볼게요.

### 차 세우고 준비하기

1. 주유구 방향에 맞춰 차를 세워요.
2. **시동을 반드시 꺼요**(화재 위험).

> [!TIP] **시동을 끄면 차 문과 주유구 잠금이 함께 풀려요.** 그래서 주유소에서는 시동만 끄면 별도 조작 없이 커버를 누를 수 있어요.
> 반대로 **차를 잠그면 주유구도 잠기고**(도난경보가 켜져 있을 때도 안 열림), 주행 중 약 **15km/h를 넘으면 차 문·주유구가 자동으로 잠겨요.** 커버가 안 열리면 "차가 잠겨 있나?"를 먼저 확인하세요. 추운 날 얼어붙었으면 커버 주변을 가볍게 두드려 보세요.
3. **정전기 방지 패드에 손을 대요**(주유기 옆에 있어요). 몸에 쌓인 정전기를 빼내서 불이 붙는 걸 막는 거예요.
4. **유종을 골라요.** 주유기 화면에서 내 차 연료(휘발유)를 정확히 눌러요 — 여기서 틀리면 큰일이에요.

### 결제하고 주유하기

1. **결제**: 카드를 넣고 금액을 정하거나 '가득'을 눌러요. 탱크가 차면 자동으로 멈추고, '가득'이어도 **실제 넣은 양만큼만 결제**돼요(예상 금액이 커도 걱정 마세요).
2. **연료 캡 열기**: 돌려서 열고 근처 고리에 걸어둬요.
3. **주유건 꽂기**: 주유건(노즐)을 주유구에 꽂고, **주유건에 달린 고리**를 걸어 고정하면 손으로 잡고 있지 않아도 돼요.
4. **완료 확인**: '딸깍' 소리가 나며 멈추면 끝이에요. 주유건을 빼기 전에 살짝 위로 들어 남은 기름을 털고, 주유기 제자리에 걸어요.

### 마무리

1. **연료 캡 닫기**: 시계 방향으로 **'딸깍' 소리가 날 때까지** 돌려 닫아요. 그다음 커버를 닫고 가볍게 눌러 **확실히 닫혔는지** 확인해요.
2. **카드 회수** 잊지 마세요.

> [!WARN] 연료 캡을 완전히 잠그지 않으면 **엔진 경고등이 켜질 수 있어요.** 고장이 아니니 당황하지 말고 캡을 '딸깍' 소리가 나도록 다시 잠그면 됩니다(다시 잠근 뒤에도 경고등이 계속 켜져 있으면 블루핸즈·하이테크센터에서 점검받으세요).
> 캡을 열 때는 탱크에 압력이 차 있을 수 있어 **천천히** 돌리세요. 바람 빠지는 소리가 나면 멈출 때까지 기다린 뒤 완전히 분리하세요.

## 가장 중요한 주의점

주유를 마쳤다면, 마지막으로 꼭 기억해 둘 위험 한 가지만 짚고 갈게요.

> [!DANGER] 유종을 잘못 넣는 '혼유'는 엔진을 크게 망가뜨려요. 그래서 유종 확인이 가장 중요해요. 특히 경유차 운전자가 휘발유를 넣는 실수가 잦다고 해요(휘발유차 주유구가 더 작아서). 경유차라면 더 조심하세요.

## 혼유(잘못 주유가 됐을 때)

싼타페 하이브리드는 가솔린(휘발유) 엔진 차량이에요. 그래서 발생할 수 있는 혼유 사고는 주로 "휘발유 대신 경유(디젤)를 잘못 넣는 경우"예요. 여기서는 그럴 때 무엇을 해야 하는지 정리했어요.

> [!WARN]
> 아래 "혼유 후 조치 절차"(시동 금지, 견인, 연료계통 세척 등)는 현대자동차 취급설명서, 관련 법령, 공정거래위원회 자료 어디에도 공식적으로 나와 있는 내용이 아니에요. 정비업계와 유튜브 등을 통해 널리 알려진 **통설**이에요. 실제 취급설명서에는 "지정된 연료를 사용하라"는 예방 안내와, "지정되지 않은(불량) 연료로 주행하면 연료펌프·연료필터 등이 손상될 수 있다"는 결과 경고만 있고, 혼유가 발생한 뒤에 무엇을 어떻게 하라는 절차는 나와 있지 않아요. 아래 내용은 참고용으로만 보시고, 실제 상황에서는 반드시 현대 고객센터나 정비소와 먼저 상의하세요.

### 1. 주유할 때 확인하는 습관 (예방)

- 주유기 색상은 주유소마다 조금씩 다를 수 있지만, 경유(디젤)는 초록색 계열, 휘발유는 노란색 계열 노즐을 쓰는 경우가 많다고 알려져 있어요. 큰 화물차용 구내 경유는 파란색 노즐을 쓰기도 해요.
- 셀프 주유소에서는 유종을 먼저 버튼으로 선택해야 그 유종만 나오도록 만들어진 곳도 있다고 해요. 다만 이런 방지 장치가 모든 주유소에 있는 것은 아니라서, 매번 주유건을 집기 전·후로 유종 표시를 눈으로 직접 확인하는 습관이 가장 확실해요.

> [!WARN]
> "가솔린차는 주유구가 좁아서 경유건이 안 들어간다"는 말이 있는데, 이건 100% 안심할 수 있는 이야기가 아니에요. 실제로 정비 현장에는 휘발유차에 경유를 주유한 사례도 있다고 해요. 주유구 크기만 믿지 말고 눈으로 유종을 꼭 확인하세요.

### 2. 시동을 걸기 전에 잘못 넣은 걸 알아챘다면

> [!DANGER]
> 시동을 걸지 마세요. 시동을 걸면 저압 연료펌프가 오염된 연료를 탱크에서 엔진 쪽 배관까지 밀어 보내면서, 피해 범위가 연료탱크 한 곳에서 연료라인 전체(필터·펌프·인젝터)로 커질 수 있다고 알려져 있어요(연료라인 오염 확산은 정비업계 통설이에요). 다만 **'시동을 걸지 말라'는 조치 자체는 판례**(이상을 알고도 시동을 계속 걸어 손해가 커지면 운전자 과실 20~30%가 인정된 사례)**와 한국소비자원 조언으로 뒷받침**돼요. 부득이한 경우가 아니면 키를 'ON' 위치로 돌리는 것도 피하는 게 좋다고 해요.

- 시동을 걸지 않은 채로 견인해서 정비소(블루핸즈 등)로 이동하세요.
- 정비소에서는 연료탱크와 라인을 비우고 세척하는 선에서 마무리되는 경우가 많다고 해요(영상 사례). 탱크를 통째로 교체할지, 탈거해서 세척할지는 부품 가격과 공임을 비교해 정비소가 판단해요.

### 3. 이미 시동을 걸었거나, 운행 중 시동이 꺼졌다면

- 이 경우가 가장 까다로운 경우예요. 곧바로 시동을 끄고, 정비소로 견인하세요.
- 연료 필터, 펌프, 인젝터, 연료라인 전체를 점검해야 할 수 있어요. 부품 상태에 따라 교환이 필요할 수도 있고, 세척 후 재사용이 가능한 경우도 있다고 해요(영상 사례).

> [!TIP]
> 싼타페 HEV 같은 가솔린 엔진은 고압 연료펌프가 연료가 아니라 **엔진오일로 윤활**되는 구조라, 경유가 섞여도 디젤차만큼 펌프가 기계적으로 망가질 위험은 상대적으로 낮다고 알려져 있어요(영상 속 정비사 설명, 통설이며 공식 근거는 아님). 다만 "위험이 전혀 없다"는 뜻은 아니고, 연료계통 세척·점검은 필요해요.

### 4. 비용 차이 — 왜 "시동 걸지 마세요"가 중요한가

영상에 소개된 사례들을 보면, 시동을 걸지 않고 조기에 대응한 경우와 그렇지 않은 경우의 수리 범위·비용 차이가 컸어요.

- 시동을 걸기 전에 멈춘 경우: 탱크·라인 세척 정도로 끝나는 경우가 많았어요(영상 사례).
- 모르고 계속 주행하다가 시동이 꺼진 경우: 연료필터, 저압·고압 펌프, 인젝터, 연료라인 전체까지 교환이 필요할 수 있고, 수리비가 몇 배 이상 커질 수 있다고 해요(영상 사례). 원칙상 혼유 후에는 관련 부품 전체를 교환하는 게 맞지만, 실제로는 부품 상태를 점검해서 세척·재생으로 마무리하는 정비소도 있다고 해요(영상 사례).

이 비용 차이는 영상에 소개된 개별 사례를 바탕으로 한 것이며, 실제 수리비는 차종·손상 정도·정비소에 따라 달라질 수 있어요. 확실한 건 "시동을 걸지 않는 쪽이 피해를 키우지 않는 방향"이라는 점이에요.

### 5. 문의처 및 증거 보존

- 현대자동차 고객센터: **080-600-6000**
- 가까운 블루핸즈 정비소

> [!TIP]
> 혼유는 대부분 주유소 측의 실수(직원 주유 또는 셀프 주유소 설비 문제)에서 발생해요. 주유소 과실이 있다면 배상을 요구할 수 있으니, 아래 자료를 미리 챙겨두세요.
> - 주유 영수증, 카드 결제 내역(주유 시각·유종 확인용)
> - 가능하면 주유소 CCTV 영상 확보 요청
> - 주유원 진술·확인서`,order:3},{id:"p1-break-in",phase:1,title:"초기 길들이기 (신차 브레이크인)",summary:["신차 길들이기(브레이크인)는 새 차를 처음 얼마간 얌전히 몰아 엔진·부품을 안정시키는 것으로, '요즘 차는 필요 없다'는 말과 달리 2026년형 현대 매뉴얼에도 그대로 있어요.","처음 1,000km까지 과속·급가속·급제동을 삼가고 엔진 4,000RPM 이내로 몰면 되며, 하이브리드는 RPM 조절이 어려우니 급가속(킥다운)만 피하고 에코/노멀로 부드럽게 타면 돼요.","'연료 3번 소진', '초반 고속으로 엔진 달구기', '시동 후 공회전 예열' 같은 관행은 매뉴얼과 어긋나니 따르지 말고, 대신 길들이기 중 엔진오일 양은 체크하세요."],body_md:`## 제조사 매뉴얼이 실제로 말하는 것 (근거 A — 현대 오너스매뉴얼)

'요즘 차는 길들이기 필요 없다'는 통념과 달리, **2026년형 현대 오너스매뉴얼에도 「신차 길들이기」 항목이 그대로 있다.** 싼타페 MX5 HEV도 동일 표준 문안·수치를 쓴다.

> - 최초 **1,000km** 전까지는 **과속·급가속·급제동을 삼가라.**
> - 엔진 회전수를 **4,000RPM 이내**로 주행하라.
> - 장시간 엔진을 공회전시키지 마라.
> - 속도에 알맞게 변속하라.
> - 연비·엔진 성능·오일 소모량은 **약 6,000km 주행 후 안정**되며, 길들이기 중에는 오일 소모량이 늘어날 수 있다.
> - 엔진·윤활계 부품 교체·정비 후에도 위와 같이 운전하라.

| 항목 | 매뉴얼 권고값 |
|---|---|
| 길들이기 거리 | 최초 1,000km 전까지 |
| 엔진 회전수 | 4,000RPM 이내 |
| 안정화 시점 | 약 6,000km 후 |

> **⚠️ RPM 기준은 단일 숫자로 외우지 말 것.** 현대 가솔린은 4,000RPM이지만 기아 쏘렌토(과거판)·디젤은 3,000RPM + 최고속도 3/4 이하 등 **차종·연료별로 다르다.** '내 차 매뉴얼의 「신차 길들이기」 항목 확인'이 1순위다.

## 지키면 좋은 것 (근거 C — 공학적으로 설명 가능, 매뉴얼 명문 아님)
- 장시간 정속(크루즈) 주행보다 **다양한 RPM을 고루 사용**하는 것이 좋다. 국도·시내가 오히려 유리하다.
- 새 타이어는 표면 이형제가 마모될 때까지 접지력이 낮으므로 약 **500km**까지 급가속·급제동·급코너링을 피한다.
- 새 브레이크 패드·디스크는 **수백 km** 주행 후 최상의 제동 성능에 도달한다.

## 채택하지 말 것 (근거 D~E — 관행/매뉴얼 배치)
- ❌ **'연료탱크 3회 소진할 때까지'** — 탱크 용량은 차종마다 달라 단위 자체가 기준이 될 수 없다. 기준은 거리(1,000km).
- ❌ **'스포츠 모드로 엔진 달구기' / '초반 고속 주행'** — '과속·급가속을 삼가라'는 매뉴얼과 정면 배치(현대차도 부정).
- ❌ **'시동 후 1~3분 공회전 예열'** — 매뉴얼이 '장시간 공회전 금지'로 명시적으로 금지.
- ⚠️ **'2,000km 엔진오일 조기 교환'** — 매뉴얼 근거 없음. 단 '길들이기 중 오일 소모량 증가'는 매뉴얼이 인정한 현상이므로 **오일 양은 체크**한다.

## 하이브리드(MX5 HEV) 특수 고려사항
- HEV는 엔진이 자주 켜졌다 꺼지고 RPM이 주행 속도와 직결되지 않아 **'4,000RPM 이내'를 운전자가 직접 통제하기 어렵다.** 실질적으로는 **급가속(킥다운)을 피하면** 엔진 RPM이 크게 치솟지 않으므로, **에코/노멀 모드 위주의 부드러운 주행이 곧 자연스러운 길들이기**가 된다.
- HEV는 회생제동 비중이 높아 마찰 브레이크 사용이 적어, 패드·디스크 길들이기가 더디게 진행될 수 있다.
- 초기 연비가 낮게 나오는 것은 정상이며 약 6,000km 후 안정된다(매뉴얼 문구가 HEV에도 적용).
- **하이브리드 전용 길들이기 지침은 제조사 문서에서 확인되지 않는다.** 저점도 오일·모터 관련 별도 관리설은 모두 근거 D 수준으로, 실차 매뉴얼 확인 전까지 채택하지 않는다.

> **정직한 톤**: 매뉴얼 지침(1,000km 얌전히, 공회전 금지, 오일 양 체크)은 지키되, 체감 차이가 크지 않다는 사용자 경험도 사실이므로 과도하게 스트레스받을 필요는 없다.`,field_tips_md:`## 유튜브 실전 팁

본문에서 본 매뉴얼 얘기에 이어, 유튜브에서 자주 나오는 실전 팁도 함께 참고해보세요.

- **길들이기는 'km로 끝나는 것'이 아니라 '차와 친해지는 기간'**: 한 정비 전문가 자문에 따르면, 요즘 차는 부품 정밀도가 좋아 옛날식 억지 길들이기는 필수가 아니고, 엔진뿐 아니라 하체(서스펜션·얼라인먼트)·브레이크가 자연스럽게 자리잡는 시간으로 이해하는 것이 맞다.
  - 급가속·급제동 등 과격한 조작을 피하고 부드럽게 운전.
  - 브레이크도 거칠게 밟지 말고 부드럽게 다뤄가며 길들인다.
  - 맨홀 뚜껑·방지턱 등 하체 충격 구간은 속도를 줄이거나 피한다.
  - 얼라인먼트·서스펜션은 자연히 길들여지므로 별도로 크게 신경 쓸 것 없다.
- **신차 출고 직후 함께 할 일**(길들이기 전 체크): 실내·엔진룸 비닐 제거(유해물질·화재 위험), 문에 붙은 파란 스펀지 제거(오래 두면 흔적 남음), 시트·미러 세팅, **타이어 공기압 확인**(출고 시 과도하게 높게 세팅된 경우가 있어 승차감에 영향).
- (주의) 유튜브에서 흔히 나오는 '초반 고속도로 정속 주행이 좋다'는 조언은 근거가 약하고 오히려 '다양한 RPM 사용' 견해와 배치되므로 참고만 한다.`,checklist:["내 차 매뉴얼의 「신차 길들이기」 항목에서 RPM 기준 직접 확인(단일 숫자로 외우지 않기)","최초 1,000km까지 과속·급가속·급제동 자제","장시간 공회전 금지(시동 후 예열 관행 채택 안 함)","정속 주행보다 다양한 RPM을 고루 사용(국도·시내 유리)","새 타이어 약 500km, 브레이크 패드·디스크 수백 km까지 부드럽게","길들이기 중 엔진오일 '양' 체크(소모량 증가는 정상)","하이브리드는 급가속(킥다운)만 피하면 에코/노멀 주행이 곧 길들이기","초기 연비 낮은 것은 정상 — 약 6,000km 후 안정","출고 직후 실내·엔진룸 비닐 제거, 타이어 공기압 확인"],sources:[{name:"현대자동차 (오너스매뉴얼)",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR/",type:"official"},{name:"현대자동차 취급설명서 / 기아 취급설명서 / 오토트리뷴 / 컨슈머와이드",url:"https://ownersmanual.hyundai.com/full_webhelp/GN7/2026/ko_KR/id39333815b3a.html",type:"media"},{name:"카닥TV [카다기]",url:"https://youtu.be/P2F5uds4cqE",type:"personal"},{name:"솜아빠",url:"https://youtu.be/7dMXVtS2WvI",type:"personal"}],flags:["단독출처"],valid_year:null,car_scope:"hybrid",source_files:["official/p1-길들이기지침-14.md","web/p1-길들이기논쟁-13.md","youtube/p1-신차길들이기-01.md","youtube/p1-신차길들이기-02.md"],body_easy_md:`한마디로: 처음 1,000km는 과속·급가속·급제동 없이 얌전히 타면 되고, 하이브리드는 급가속(킥다운)만 피해도 충분해요.

## 매뉴얼이 실제로 말하는 것 (현대 오너스매뉴얼)

'요즘 차는 길들이기 필요 없다'는 말과 달리 **2026년형 현대 매뉴얼에도 「신차 길들이기」가 그대로 있어요.** 싼타페 MX5 HEV도 마찬가지예요.

- 처음 **1,000km**까지 **과속·급가속·급제동 하지 않기**
- 엔진 회전수 **4,000RPM 이내**로 주행
- 오래 공회전(시동 걸고 세워두기) 금지
- 속도에 맞게 변속
- 연비·엔진 성능·엔진오일이 줄어드는 양은 **약 6,000km 후 안정**(길들이기 중엔 오일이 좀 더 줄어들 수 있어요)

| 항목 | 권고값 |
|---|---|
| 길들이기 거리 | 처음 1,000km까지 |
| 엔진 회전수 | 4,000RPM 이내 |
| 안정화 시점 | 약 6,000km 후 |

> [!NOTE]
> RPM 숫자를 하나로 외우지 마세요. 현대 가솔린은 4,000RPM이지만 차종·연료마다 달라요(일부 디젤 3,000RPM 등). **'내 차 매뉴얼의 신차 길들이기 항목 확인'이 1순위**예요.

## 지키면 좋은 것 (매뉴얼엔 없지만 공학적으로 타당)

매뉴얼의 필수 사항을 지켰다면, 여기에 더해두면 좋은 것들도 있어요.

- 한 속도로만 오래 달리지 말고 **속도를 여러 가지로 바꿔가며**(엔진 회전수를 고루 쓰며) 타세요. 그래서 속도가 자주 바뀌는 국도·시내가 오히려 유리해요.
- 새 타이어는 겉면 코팅이 닳을 때까지 접지력이 낮아요. 약 **500km**까지는 급가속·급제동과 급하게 코너 돌기를 피하세요.
- 새 브레이크 패드·디스크도 **수백 km**를 달린 뒤에 제동력이 가장 좋아져요.

## 따라 하지 말 것 (근거 약하거나 매뉴얼과 반대)

반대로 인터넷에 흔히 도는 말 중엔 오히려 따르면 안 되는 것도 있어요.

- ❌ **'연료탱크 3번 소진까지'** — 탱크 용량은 차마다 달라 기준이 못 돼요. 기준은 거리(1,000km).
- ❌ **'스포츠 모드로 엔진 달구기' / '초반 고속 주행'** — '과속·급가속 삼가라'는 매뉴얼과 정반대예요.
- ❌ **'시동 후 1~3분 공회전 예열'** — 매뉴얼이 '오래 공회전 금지'로 명시적으로 막고 있어요.
- ⚠️ **'2,000km 엔진오일 조기 교환'** — 매뉴얼 근거 없음. 단 길들이기 중 오일이 주는 건 사실이니 **오일 양은 체크**하세요.

## 하이브리드(MX5 HEV)는 이렇게

지금까지는 일반 신차 기준이었고요, 실제로 지금 타는 하이브리드에는 이렇게 적용하면 돼요.

- 엔진이 자주 켜졌다 꺼지고 RPM이 속도와 직결되지 않아 **'4,000RPM 이내'를 직접 맞추기 어려워요.** 대신 **급가속(킥다운)만 피하면** RPM이 크게 안 치솟으니, **에코/노멀로 부드럽게 타는 게 곧 자연스러운 길들이기**예요.

> [!NOTE] **킥다운이 뭐예요?** 가속페달을 **깊게(거의 끝까지) 확 밟으면** 변속기가 "빨리 튀어나가야 한다"고 판단해 강제로 낮은 단(저단)으로 내려가는 걸 킥다운이라고 해요. 이때 엔진 소리가 갑자기 커지고 RPM이 치솟아요.
> 실전 감각으로는 **페달을 절반 이상 깊게 밟거나, 발끝에서 '툭' 걸리는 지점을 넘겨 밟는 순간**이 킥다운이에요. 신호가 바뀌어 앞차를 급히 따라붙을 때, 고속도로 합류에서 확 밀어붙일 때 주로 일어나요. 처음 1,000km는 **페달을 3분의 1 정도까지만 부드럽게** 쓴다고 생각하면 자연스럽게 피할 수 있어요.
- 회생제동을 많이 써 브레이크를 덜 밟으니, 패드·디스크 길들이기는 더디게 진행될 수 있어요.
- 처음에 연비가 낮게 나오는 건 정상이고, 약 6,000km를 달리면 안정돼요.
- **하이브리드 전용 길들이기 지침은 제조사 문서에 없어요.** 묽은(저점도) 오일을 쓰라거나 모터를 따로 길들이라는 말은 근거가 약하니, 내 차 매뉴얼로 확인하기 전엔 따르지 마세요.

> [!TIP]
> 매뉴얼 지침(1,000km 얌전히, 공회전 금지, 오일 양 체크)은 지키되, 체감 차이가 크진 않으니 과하게 스트레스받을 필요는 없어요.`,order:1},{id:"p2-consumables",phase:2,title:"소모품 교환주기 (엔진오일 등)",summary:["차를 오래 잘 타려면 엔진오일·필터 같은 소모품을 정해진 주기마다 갈아줘야 하는데, 그 기준을 정리한 내용이에요.","내 차(싼타페 하이브리드)는 엔진오일을 보통 1만km 또는 1년마다, 시내 출퇴근처럼 힘든 주행이 많으면 5,000km 또는 6개월마다 갈면 됩니다.","인터넷에서 흔히 말하는 '무조건 5,000km 교체'는 정해진 규칙이 아니라 관행일 뿐이라, 헷갈리면 내 차 매뉴얼 기준을 따르되 늦기보다 조금 일찍 가는 게 안전해요."],body_md:`## 기준: 차량 공식 매뉴얼 (MX5 HEV)

엔진오일 교환주기는 **차종 취급설명서(오너스 매뉴얼)에 명시된 값이 유일한 기준**이다. 싼타페 하이브리드(MX5 HEV, 2026) 공식 값:

| 구분 | 교환주기 | 비고 |
|---|---|---|
| **정상(통상) 조건** | **10,000km 또는 12개월** | 엔진오일 + 오일필터 동시 |
| **가혹 조건** | **5,000km 또는 6개월** | 아래 가혹조건 해당 시 |
| 오일 규격 | **SAE 0W-20**, API SN PLUS/SP 또는 ILSAC GF-6 (Full Synthetic 권장) | 저등급 오일 사용 시 가혹조건 주기 적용 |
| 주입 용량 | **약 4.8ℓ** | 일반 교체 기준 |

> 추천 오일을 쓰지 않으면(광유·세미합성유 등) 무조건 가혹조건 주기(5,000km/6개월)로 교체해야 한다.

**가혹 조건(매뉴얼 정의 요약)**: 짧은 거리 반복 주행, 잦은 공회전, 교통정체 구역, 험로·산길, 잦은 고속·급가감속, 정지·출발 반복, 한랭/부식 환경, 견인·캠핑용 등. 시내 위주 출퇴근은 대부분 가혹조건에 해당하므로 실사용자는 5,000~7,500km 사이 교체가 현실적이다.

## 함께 챙기는 소모품(MX5 HEV 매뉴얼 기준)

| 소모품 | 교환주기 | 규격/비고 |
|---|---|---|
| 브레이크액 | 50,000km | DOT-4 LV (SAE J1704) |
| 에어컨(캐빈) 필터 | 12개월 | 먼지 많으면 수시 |
| 엔진 냉각수 | 최초 200,000km/10년, 이후 40,000km/2년 | 하이브리드 배터리 전용 냉각수 교환주기는 매뉴얼 미명시(블루핸즈 문의) |
| 타이어 위치 교환 | 10,000km | 엔진오일과 같은 주기 |

## 국내 관행 (참고 — 제조사 근거 아님)

- 국내 정비 현장·유튜브에서는 **5,000km 교체를 표준처럼 안내**하는 경우가 많다. 신차 첫 교체 시점에 대해 2,000km(초기 쇳가루) / 7,000km / 12,000km 등 상반된 주장이 혼재하나 모두 명확한 근거는 제시되지 않는다.
- 한 개인 경험담에서는 직전 5,000km, 이후 8,000km(가혹 주행)로 늘려 교체했고 판단 근거는 "엔진음 변화"라는 주관적 체감이었다 — 계측 근거는 없으므로 그대로 따를 사항은 아니다.
- 정리: **애매하면 매뉴얼 주기를, 시내 위주면 가혹조건 주기(5,000km/6개월 안팎)를 적용**하는 것이 안전하다. 늦게 가는 것보다 조금 일찍 가는 쪽이 리스크가 적다.`,field_tips_md:`매뉴얼 기준을 봤으니, 이번엔 실제 오너들의 교환 경험도 참고해보세요.

## 교체 장소: 블루핸즈 vs 공임나라 (개인 경험)

**블루핸즈(공식센터)**
- 공식 정비이력이 남아 이후 엔진 문제 발생 시 책임소재·점검이 수월하다.
- 현대차 블루멤버스는 매년 1회 무상점검이 있어 오일 교체와 함께 받기 좋고, 미뤄둔 무상수리권도 같이 처리 가능.
- 단점: 비싸다(한 경험담 총액 155,400원). 방문 후 타이어 공기압을 과하게 넣어주는 경우가 있어(36→41psi 사례) **교체 후 공기압 재확인** 권장.

**셀프구매 + 공임나라**
- 오일을 직접 사서(싼타페 MX5 가솔린 기준 약 6ℓ) 오일필터·에어클리너는 현대 부품대리점에서 구매(차량번호로 조회, 합산 약 14,850원), 공임나라 예약 방문(공임 약 24,000원). 총액이 블루핸즈의 절반 이하(약 77,000원대)였다는 경험담.
- 지점별 친절도·실력 편차가 크므로 **후기 확인 후 방문**. 교체 후 남는 잔유는 요청해야 챙겨주며 다음 보충용으로 보관 가능.
- 저가 오일로 바꿔도 주행 질감 차이는 대부분 플라시보 수준이었다는 후기 — 다만 순정 미사용 시 보증·주기 불이익은 별도 고려.

> 결론(개인 견해): "정답은 없다". 순정·이력 중시=블루핸즈, 가성비=셀프+공임나라.`,checklist:["내 차 매뉴얼의 정상/가혹 교환주기 확인 (MX5 HEV: 정상 10,000km·12개월 / 가혹 5,000km·6개월)","시내 위주 주행이면 가혹조건 주기 적용 여부 판단","지정 오일 규격 확인 (MX5 HEV: SAE 0W-20, 약 4.8ℓ)","오일 교체 시 오일필터 함께 교환","교체 후 타이어 공기압 재확인 (블루핸즈 방문 시 과주입 주의)","브레이크액(50,000km)·캐빈필터(12개월) 등 부수 소모품 주기 함께 관리"],sources:[{name:"현대자동차 (MX5 HEV 오너스 매뉴얼)",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR/id6b219dd157c.html",type:"official"},{name:"솜아빠",url:"https://youtu.be/JcT4P2gAmkw",type:"personal"},{name:"솜아빠",url:"https://youtu.be/-UMfhPsnLzU",type:"personal"}],flags:[],valid_year:null,car_scope:"generic",source_files:["youtube/p2-엔진오일교환주기-01.md","youtube/p2-엔진오일교환주기-02.md","mx5-hev-spec.md"],body_easy_md:`한마디로: 내 차 매뉴얼에 적힌 주기대로 소모품을 갈면 되고, 그중 엔진오일이 제일 중요해요.

## 소모품이 뭐예요? 왜 갈아야 하죠?
차에는 쓰면서 닳거나 더러워져 **주기적으로 갈아줘야 하는 부품·액체**가 있어요. 이걸 '소모품'이라 해요. 제때 안 갈면 성능이 떨어지거나 다른 부품까지 상해요.
- **엔진오일**: 엔진 안에서 금속 부품들이 서로 부드럽게 움직이도록 미끄럽게 해주는 기름(윤활유)이에요. 마찰·열을 줄이고 쇳가루·이물질을 씻어내요. 오래 쓰면 더러워지고 묽어져 엔진을 상하게 하니 **제일 중요**해요.
- **브레이크액**: 브레이크 페달을 밟은 힘을 바퀴까지 전달하는 액체예요. 오래되면 공기 중 물기를 먹어서, 밟아도 잘 안 서게 돼요.
- **냉각수(부동액)**: 엔진·배터리가 과열되지 않게 식히는 액체예요. 겨울에 얼지도, 여름에 끓지도 않게 해줘요.
- **에어컨(실내) 필터**: 바깥 먼지·미세먼지를 걸러 실내 공기를 깨끗하게 해요.
- **타이어**: 차에서 땅에 닿는 **유일한** 부품이라 관리가 곧 안전이에요. 닳은 정도(마모)를 보고, 앞뒤 바퀴의 자리를 서로 바꿔 끼우는 '위치 교환'도 제때 해줘야 해요.

## 엔진오일 (제일 중요)

내 차(싼타페 하이브리드, MX5 HEV) 기준이에요.

### 교환 주기와 규격

- **보통 주행**: **1만km 또는 12개월** 중 먼저 오는 때 (오일 + 오일필터 같이 교체)
- **힘든 주행(가혹 조건)**: **5,000km 또는 6개월**
- 오일 규격: **0W-20** — 오일이 얼마나 끈적한지(점도)를 나타내는 표기로, 추울 때도 잘 흐르는 묽은 오일이라는 뜻이에요. 정비소에는 이 표기를 그대로 말하면 돼요. **합성유**(화학적으로 만든 오일) 권장, 한 번에 넣는 양은 **약 4.8리터**예요.

> [!WARN] 규격에 안 맞는 싼 오일을 넣으면 무조건 짧은 주기(5,000km/6개월)로 갈아야 해요.

### '힘든 주행(가혹 조건)'이 뭔가요?

짧은 거리 자주 타기, 잦은 공회전(차를 세운 채 시동만 켜 두는 것), 막히는 길, 험한 길·산길, 급가속·급정거, 추운 곳이나 차가 잘 녹스는(부식) 환경, 무거운 것 끌기(견인) 등이에요. **시내 출퇴근은 대부분 여기에 해당**하니, 실제로는 5,000~7,500km쯤에서 가는 게 현실적이에요.

## 같이 챙기는 소모품

엔진오일 말고도 같이 챙기면 좋은 소모품들이 있어요.

| 소모품 | 교환 주기 | 참고 |
|---|---|---|
| 브레이크액 | 5만km | DOT-4 LV(브레이크액 규격 이름) |
| 에어컨(실내) 필터 | 12개월 | 먼지 많으면 더 자주 |
| 엔진 냉각수 | 처음 20만km/10년, 그다음 4만km/2년 | 하이브리드 전용(전기장치용) 냉각수는 **직접 보충하면 안 돼요** — 공식 정비소에 맡기세요 |
| 타이어 위치 교환 | 1만km | 엔진오일과 같은 주기 |

## 어디서 갈까?

교환 주기를 알았다면, 이제 실제로 어디서 갈지 살펴볼게요.

- **블루핸즈(현대 공식 정비소)**: 정비 기록이 남고 순정부품(제조사가 정한 정품 부품)을 써서 안심돼요. 대신 비용이 더 들어요.
- **오일을 직접 사서 맡기기(공임나라 등)**: 부품값은 내가 내고 작업비(공임)만 정비소에 주는 방식이라 저렴해요. 대신 정비 기록과 품질은 본인이 챙겨야 해요.

## 인터넷 정보는 참고만

교환 장소까지 정했다면, 마지막으로 헷갈리기 쉬운 주기 얘기를 정리하고 갈게요.

국내 정비소·유튜브에서는 '5,000km마다 갈아라'를 표준처럼 말하고, 신차 첫 교체 시점도 2,000km / 7,000km / 12,000km 등 말이 제각각이에요.

> [!TIP] 정해진 근거가 있는 건 매뉴얼 값뿐이에요. 헷갈리면 매뉴얼 주기를, 시내 위주면 짧은 주기(5,000km/6개월 안팎)를 쓰세요. 조금 일찍 가는 게 늦게 가는 것보다 안전해요.`,order:2},{id:"p2-self-check",phase:2,title:"셀프 점검 루틴",summary:["정비소에 가지 않고도 내가 직접 눈으로 확인하는 8분짜리 기본 점검 방법이에요.","엔진오일 → 냉각수 → 워셔액 → 와이퍼 → 브레이크 → 엔진룸 → 타이어 순서로 하나씩 살펴보면 됩니다.","엔진오일은 시동을 끄고 3~5분 식힌 뒤 게이지가 F의 70~80%인지 보고, 타이어는 마모한계선과 옆면 제조일자(만든 지 4~5년이면 교체)를 꼭 확인하세요."],body_md:`## 셀프 점검 순서 (약 8분 루틴)

### 1. 엔진오일
1. 시동을 끄고 **3~5분** 엔진을 식힌다.
2. 보닛을 열고 오일 게이지를 끝까지 뽑아 처음 묻은 오일을 천으로 닦는다.
3. 다시 끝까지 꽂았다 빼서 수위 확인 — **F(가득) 눈금 근처, 전체의 70~80%면 정상**. 많거나 적으면 보충·교환.
4. 색 확인: 맑고 옅으면(주행 2,000~3,000km 수준) 양호, 검고 탁하면(특히 가솔린) 교환. 오일이 부족·노후하면 마찰로 쇳가루가 생겨 엔진 손상으로 이어진다.

### 2. 냉각수
- 보조탱크의 **MAX·MIN 사이**에 수위 유지, MIN 아래면 보충.
- 겨울철 결빙 방지를 위해 부동액을 섞어 쓴다. 물만 넣지 않는다.
- **하이브리드는 엔진용 외에 모터/전장 냉각용 냉각수 통이 하나 더 있다(2계통).**
- 워셔액(현대·기아 캡이 대개 파란색)과 혼동 주의.

### 3. 워셔액
- 겨울철에는 물 대신 전용(부동형) 워셔액 사용.

### 4. 와이퍼
- **연 2회(여름·겨울) 교체** 권장. 고무 경화로 '드르륵' 소리가 나면 교체 시점.
- 교체: 결합부 레버 눌러 아래로 분리 → 새 와이퍼 끼움 → 딸깍 소리까지 눌러 고정.
- 관리 팁: 고무날 먼지를 주기적으로 닦으면 수명이 는다.

### 5. 브레이크 패드
- 밟을 때 '끼익' 소리나 밀리는 느낌이면 점검. 안전 직결 부품이라 정기 점검 필수.

### 6. 엔진룸·하부 청결
- 배선·벨트 주변에 먼지가 쌓이면 소음·노후가 빨라진다. 흙먼지 환경 주행이 잦으면 더 자주 청소.

### 7. 타이어
- **공기압**: 계기판 경고 시(예: 32psi 아래로 하락) 보충. 낮으면 양쪽 가장자리 편마모, 높으면 중앙만 마모.
- **마모한계선**: 트레드 홈 안 사각 마크 지점 돌기가 표면과 같은 높이로 닳으면 교환 시기(대개 4만km 전후).
- **제조일자**: 옆면 4자리 숫자로 제조 연·주차 확인, 제조 후 **4~5년**이면 교환 권장.`,field_tips_md:`## 운전 습관 기반 관리 팁 (정비소 운영자)

위 셀프 점검에 이어, 정비소 운영자가 알려주는 운전 습관 팁도 함께 참고하세요.

- **오토스톱(ISG)·배터리**: 시동 재시작 때 전력 소모가 크다(1회당 배터리 에너지의 약 40% 소모 주장). ISG 차량은 대개 AGM 배터리 순정 — 일반 배터리로 임의 교체 금지. 주차장 도착 **5분 전부터 열선·오디오·히터를 끄면** 발전기가 배터리를 충전할 여유가 생겨 수명 유지에 도움(개인 경험 수준).
- **예열**: 공회전 장시간 예열은 비효율. 오일 순환은 30초~1분이면 충분하므로 **시동 후 30초~1분 대기 → 급출발·고RPM 피하며 서행**으로 자연 예열. 한겨울이 아니면 15분 주행이면 정상 온도.
- **주유(연료 잔량)**: 잔량이 너무 적으면 연료펌프 냉각이 안 되고, 디젤은 탱크 바닥 수분이 펌프로 빨려 들어갈 수 있다. 경고등 켜지기 전 미리 주유. 디젤은 연 1~2회 수분제거제, 6~7만km에 연료필터 교체 권장.
- **엔진오일 습관**: 주행 적으면 5,000km, 많으면 10,000km(약 6개월)마다 교체하며, 이때 하부까지 함께 봐주는 신뢰할 정비소를 정해두면 좋다.
- **봄철 하부세차**: 겨울 제설 염화칼슘이 하부에 남으므로 봄에 하부세차하면 로어암 등 부식 예방.

※ 위 수치·인과(40% 소모, 5분 습관 효과 등)는 개인 경험 근거로 참고용.`,checklist:["엔진오일: 식힌 뒤 게이지로 수위(F의 70~80%)·색 확인","냉각수 MAX·MIN 사이 확인 (하이브리드는 2계통 모두)","워셔액 잔량 확인, 겨울철 전용 워셔액 사용","와이퍼 소리·닦임 확인, 연 2회 교체","브레이크 소음·밀림 여부 점검","타이어 공기압·마모한계선·제조일자 확인","엔진룸·하부 청결 상태 확인"],sources:[{name:"하나TV [하나손해보험]",url:"https://youtu.be/NTd6gvINr64",type:"personal"},{name:"꿈꾸는 정비사 - 2대째 정비소",url:"https://youtu.be/mM32L_q-rAI",type:"personal"}],flags:["단독출처"],valid_year:null,car_scope:"generic",source_files:["youtube/p2-셀프점검루틴-01.md","youtube/p2-셀프점검루틴-02.md"],body_easy_md:`한마디로: 시간 날 때 아래 순서대로 눈으로 훑으면 큰 고장을 미리 막을 수 있어요. 약 8분이면 돼요.

## 1. 엔진오일

1. 시동을 끄고 **3~5분** 기다려요. 막 끈 직후에는 오일이 아직 엔진 위쪽에 남아 있어 양이 실제보다 적게 보여요.
2. 보닛(앞쪽 엔진룸 덮개)을 열어요. **여는 법은 아래 접기를 펼쳐 보세요.**
3. 엔진에 꽂혀 있는 오일 게이지(막대)를 끝까지 뽑아 처음 묻은 오일을 천으로 닦아요.

<details>
<summary>보닛 여는 법 — 두 단계예요</summary>

**평평한 곳에 세우고 기어는 P, 파킹 브레이크를 건 뒤** 시작하세요.

**1단계 — 차 안에서 레버를 당겨요.**
운전석 발밑 왼쪽(도어 쪽 아래)에 손잡이가 있어요. 당기면 보닛이 **살짝만** 뜨고 완전히 열리지는 않아요.

![실내 보닛 열림 레버](/img/hood-lever.jpg)
*운전석 발밑 왼쪽에 있어요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

**2단계 — 차 앞으로 가서 걸쇠를 풀어요.**
보닛을 살짝 들어 올린 뒤, 앞쪽 가운데 틈에 손을 넣어 **2차 열림 레버(1)를 왼쪽으로 밀면서** 보닛(2)을 들어 올려요. 중간쯤 올리면 나머지는 알아서 열려요.

![보닛 2차 열림 레버 위치](/img/hood-open.jpg)
*① 걸쇠를 왼쪽으로 밀면서 ② 보닛을 들어 올려요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

**닫을 때**는 그냥 내린 뒤 아래로 눌러 닫아요. 살짝 들어 봐서 열리면 덜 닫힌 거니 **더 세게** 닫으세요. 출발 전에 계기판에 보닛 열림 표시가 사라졌는지 꼭 확인하세요.

> [!WARN] 엔진룸에 장갑·걸레를 두고 닫으면 **불이 날 수 있어요.** 닫기 전에 넣어 둔 물건이 없는지 보세요.

</details>

4. 다시 끝까지 꽂았다 빼서, 막대 끝에 오일이 어디까지 묻었는지 봐요 → **F(가득) 눈금 근처(전체의 70~80%)면 정상**이에요. 너무 적으면 보충하고, 너무 많은 것도 문제예요.

![오일 게이지 위치와 F·L 눈금](/img/oil-gauge-fl.jpg)
*게이지는 엔진 앞쪽에 꽂혀 있어요. 오른쪽 확대 그림이 막대 끝의 F·L 눈금이에요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

5. 색도 봐요: 맑고 옅은 색이면 아직 괜찮고, 검고 탁하면 교환 시점이에요.

> [!WARN] 오일이 부족하거나 낡으면 쇳가루가 생겨 엔진이 상할 수 있어요. 교환 시점을 놓치지 마세요.

## 2. 냉각수

엔진오일을 확인했다면, 다음은 냉각수 차례예요.

- 냉각수 보조탱크는 겉에서 액체 높이가 보여요. **MAX(위 눈금)와 MIN(아래 눈금) 사이**면 정상이고, MIN 아래면 보충해요.
- 물만 넣지 말고 부동액(겨울에도 얼지 않게 해주는 냉각수)을 섞어요. 물만 채우면 추울 때 얼어붙어요.
- **하이브리드는 냉각수 통이 2개**예요(엔진용 + 전기장치용).
- 워셔액(앞유리에 뿌려 닦아내는 액체) 통과 헷갈리지 마세요 — 현대·기아는 대개 파란 뚜껑이에요.

## 3. 워셔액
- 겨울엔 물 대신 **겨울용(얼지 않는) 워셔액**을 넣어요.

## 4. 와이퍼
- **1년에 2번(여름·겨울) 교체** 권장. '드르륵' 소리가 나면 갈 때예요.
- 교체법: 고무날과 와이퍼 팔이 이어지는 부분의 레버를 눌러 아래로 빼내고 → 새것을 끼운 뒤 '딸깍' 소리가 날 때까지 눌러 고정해요.

## 5. 브레이크

냉각수·워셔액·와이퍼까지 챙겼다면, 이제 안전과 가장 직결되는 브레이크를 볼 차례예요.

- 밟을 때 '끼익' 소리가 나거나, 밟았는데 바로 안 서고 더 나아가는(밀리는) 느낌이면 바로 점검하세요.

> [!DANGER] 브레이크는 사고로 바로 이어질 수 있어요. 소리가 나거나 밀리는 느낌이 있다면 미루지 말고 정비소로 가세요.

## 6. 엔진룸 청결
- 엔진룸 안의 전선 다발(배선)과 고무 벨트 주변에 먼지가 쌓이면 소음이 커지고 부품이 빨리 낡아요. 흙먼지 길을 자주 다니면 더 자주 닦아주세요.

## 7. 타이어

마지막 점검 항목인 타이어까지 보면 셀프 점검이 끝나요.

### 공기압
- **공기압**: 타이어 안에 든 공기의 압력이에요. 계기판에 경고가 뜨면(예: 32psi 아래) 공기를 보충하세요. 공기압이 낮으면 타이어 양쪽 가장자리가, 높으면 가운데만 닳아요.

### 마모한계선
- **마모한계선**: 타이어 홈 안에 있는 작은 돌기가 표면과 같은 높이로 닳으면 교체 시기예요(대개 **4만km 전후**).

### 제조일자
- **제조일자**: 타이어 옆면 \`DOT\` 표시 끝의 **4자리 숫자**로 확인해요. **앞 2자리가 '몇째 주', 뒤 2자리가 '연도'**예요. 예를 들어 \`2325\`면 **2025년 23주차**(6월 초) 생산이에요. 만든 지 **4~5년**이 지났으면 교체를 권장해요.

> [!CHECK] 신차라도 창고에 있던 타이어가 끼워져 나오기도 해요. 인수할 때 **네 짝 모두 DOT를 찍어 두세요.**`,order:1},{id:"p2-washing",phase:2,title:"세차",summary:["차 도장이 긁히지 않게 순서를 지켜서 하는 셀프 세차 방법이에요.","프리워시(먼저 물로 큰 오염 씻기) → 폼 → 본세차 → 헹굼 → 물기 닦기 → 코팅 순서로 하면 됩니다.","마른 타월로 문지르는 게 스크래치의 가장 큰 원인이니 피하고, 오염물이 묻으면 도장에 파고들기 전에 빨리 세차하는 습관이 제일 중요해요."],body_md:`## 왜 자주 세차해야 하나

오염물·물얼룩을 방치하면 도장 최외곽 **클리어 코트층을 파고들어** 닦아도 지워지지 않는 얼룩이 남는다. 오염물이 묻으면 빠른 시일 내 세차한다.

## 세차 방식 비교

- **손세차장**: 깔끔·안전하지만 비쌈
- **자동 세차장**: 빠르지만 브러시가 도장 손상 우려
- **셀프 세차장**: 저렴하고 직접 확실·안전하게 가능 (권장)

## 준비물

버킷, 그릿가드, 카샴푸, 워시미트(양털 소재 권장, 스펀지 금지), 드라잉 타월, (선택) 물왁스/코팅제·극세사 타월.

## 셀프 세차 순서

1. **프리워시(사전 세척)**: 고압수로 굵은 오염물을 위→아래로 씻어낸다. 기름때·오래된 오염은 프리워시제(APC)를 뿌리고 **3~5분 불린 뒤** 헹군다. 고압수는 **30cm 안팎 근거리**에서 쓸어내리듯 써야 세척력이 있다(멀리 흩뿌리면 의미 없음). ※ 프리워시를 생략하고 바로 문지르면 오염물이 도장과 마찰해 스크래치를 낸다.
2. **폼(스노우폼) 분사**: 전체에 빈틈없이 빠르게 분사(폼건은 시간 소모가 빠름) 후 오염물과 반응해 흘러내릴 때까지 대기.
3. **본세차(핸드워시)**: 카샴푸 거품을 낸 워시미트로 **힘주지 말고 스치듯** 닦는다. 오염물이 계속 붙으므로 **중간중간 그릿가드에 문질러 세척** 후 재사용. 가장 오염 심한 하부는 맨 마지막에 자주 헹구며 닦는다.
4. **헹굼**: 고압수로 위→아래 꼼꼼히.
5. **드라잉**: 드라잉 타월을 **얹어 흡수**(문지르지 않음). 코팅층 없는 차량은 퀵 디테일러를 살짝 뿌려 윤활력을 준 뒤 닦으면 스크래치 예방.
6. **코팅**: 퀵 디테일러/물왁스를 도장면에 펴 바른 뒤 마른 타월로 마무리. 광택이 나고 다음 세차 때 오염 제거가 쉬워진다.
7. (실내) 세정제는 표면에 직접 뿌리지 말고 **타월에 분사 후** 닦는다. 발매트는 진공청소기로, 실내 에어건·매트 털기는 옆 사람 피해로 금지.

## 핵심 주의사항
- 호스·청소기 줄이 차체에 닿지 않게 한다(흠집 방지).
- 마른 타월로 문지르는 것이 스크래치 1순위 원인.
- 첫 세차는 한산한 시간대에 여유롭게(급하면 사고).`,field_tips_md:`## 최소 용품·시간 세차법 (지속 가능한 습관)

용품·약품이 많아 복잡해서 포기하기 쉬우므로, **물통 + 타월 1장 + 물왁스**만으로 자주 세차하는 방식도 좋다.

- 폼건은 분사 시 시간이 3배속 소모되니 3,000원 결제 후 곧바로 눌러 전체에 빠르게 뿌린다.
- 타월을 두 번 접어(면 8개) 워시미트처럼 쓰고, 물기는 70~80%만 닦고 나머지는 물왁스로 마무리한다는 가벼운 마음으로.
- 왁스·코팅이 된 차는 오염 흡착이 덜해 거품+부드러운 타월만으로 안전. **새 차는 한 달에 두 번 이상** 주기 세차 권장.
- 세차 1회에 쓴 타월은 거의 1회용처럼(코스트코/트레이더스 36장 2만원이면 1년+). 계속 빨아 쓰면 털이 거칠어져 스크래치 유발.
- 절약한 용품비를 모아 2~3년마다 광택/유리막 코팅을 받는 것도 방법.

## 셀프 세차장 요금·시설 (참고)

용품을 줄이는 법을 봤으니, 이번엔 셀프 세차장 이용법이에요.

- 카드 발급기에 현금 충전. 초보는 15,000~20,000원 충전 추천.
- 고압수 예시: 기본 3,000원/3분, 카드 터치 1회당 1,000원 추가 — 초보는 여유 있게 1회 더 결제. (요금은 업체마다 상이)
- 세차 부스(고압수·폼) / 드라잉존(물기·실내·진공) 구조. 매트는 탈수기 쓰면 건조 빠름.

※ 고압수 거리·요금·세차 주기 기준은 장비·업체·환경에 따라 다를 수 있어 참고용.`,checklist:["오염되면 즉시, 새 차는 한 달 2회 이상 세차","프리워시로 굵은 오염물 먼저 제거 (생략 금지)","고압수는 30cm 안팎 근거리, 위→아래로","워시미트/타월은 힘주지 말고 스치듯, 그릿가드에 자주 헹굼","하부·휠 등 오염 심한 부위는 맨 마지막","드라잉 타월은 얹어 흡수, 마른 타월로 문지르지 않기","세차 후 물왁스/코팅으로 마무리","호스·줄이 차체에 닿지 않게 주의"],sources:[{name:"오토하우스",url:"https://youtu.be/HkavvYEf7Co",type:"personal"},{name:"오토라이프",url:"https://youtu.be/SOup1Ah4KYA",type:"personal"},{name:"지카페이스",url:"https://youtu.be/RfPPE6409HE",type:"personal"},{name:"솜아빠 (유튜브·시트 이염/셀프코팅)",url:"https://youtu.be/vmqTGpkeRZQ",type:"personal"},{name:"블라인드_Car Story (유튜브·가죽 소재/관리)",url:"https://youtu.be/FPxG6o2qmrE",type:"personal"},{name:"한국소비자원 세차 피해예방주의보(2018-12) — 수집분",url:"https://www.kca.go.kr/home/sub.do?menukey=4005&mode=view&no=1001697013",type:"official"}],flags:[],valid_year:null,car_scope:"generic",source_files:["youtube/p2-셀프세차-01.md","youtube/p2-셀프세차-02.md","youtube/p2-셀프세차-03.md","youtube/p2-가죽시트관리-01.md","web/evidence-check-2026-07-25.md"],body_easy_md:`한마디로: '먼저 물로 씻어내고, 살살 닦고, 문지르지 않기'가 핵심이에요.

## 왜 자주 세차하나요?

차 겉면에는 색을 입힌 페인트막(도장)이 있고, 그 위에 투명한 보호층(클리어 코트)이 한 겹 덮여 있어요. 오염물·물얼룩을 오래 두면 이 보호층을 파고들어 나중엔 닦아도 안 지워지는 얼룩이 남아요.

> [!NOTE] 그래서 무언가 **묻으면 빨리** 씻어내는 게 핵심이에요. 오래 둘수록 나중엔 지워지지 않아요.

## 어디서 할까?

자주 씻어야 한다는 걸 알았으니, 이제 어디서 세차할지 정해볼게요. 크게 손세차장·자동 세차장·셀프 세차장 세 가지가 있고, 각각 방식·비용·예약 필요 여부가 달라요.

### 손세차장 (전문 손세차)

- 사람이 직접 손으로 씻고 닦아주는 방식이라 가장 깔끔하고, 브러시로 인한 도장면 손상 위험도 적어요.
- 대신 비용이 가장 비싸요(실내 세정 포함 여부·차량 크기에 따라 차이).
- 업체에 따라 예약이 필요할 수 있어요. 특히 주말이나 인기 업체는 예약 없이 가면 오래 기다릴 수 있으니, 방문 전 전화나 예약 앱으로 확인해보는 걸 추천해요.

> [!NOTE] 손세차·자동세차 요금은 **공식 통계가 없고 지역·업체 편차가 커요.** 인터넷 통념 금액을 믿기보다 **동네 3~5곳을 직접 비교**해 내 기준표를 만드는 게 정확해요.

### 자동 세차장

- 기계(브러시·롤러)가 자동으로 씻어주는 방식이라 빠르고 편해요. 주유소나 세차 전문점에 딸려 있는 경우가 많아요.
- 브러시가 도장면을 긁어 미세한 스크래치를 남길 수 있다는 게 단점이에요.
- 보통 겉면만 씻어 주고, 실내 청소는 따로 맡겨야 해요.

> [!WARN] 자동 세차기 이용 중 **안테나·사이드미러·유리·실내 부품 파손** 피해가 적지 않아요(한국소비자원 피해예방주의보). 접이식 안테나는 접고, 기어·핸들은 관리자 지시대로 두고, **세차 후 손상 여부를 바로 확인해 사진으로 남겨** 두세요(입증자료).
- 예약 없이 바로 이용 가능한 게 보통이에요. 순서대로 줄을 서서 이용하면 돼요.

### 셀프 세차장 (추천)

- 매장에 있는 고압수(세게 쏘는 물줄기)와 거품건(거품을 뿌리는 도구)을 직접 들고 씻는 방식이에요. 비용이 저렴하고, 힘을 세게 주지 않고 살살 닦으면 페인트막이 상할 위험도 낮출 수 있어요.
- 요금은 보통 카드를 충전해서 쓰는 방식이에요. 고압수는 기본 3,000원으로 3분 쓸 수 있고, 세제 같은 추가 기능을 쓸 때마다 카드를 한 번 더 대면 1,000원쯤 더 나가는 구조로 알려져 있어요. 처음이라면 15,000~20,000원 정도 충전해두면 여유 있게 쓸 수 있어요.
- 예약이 필요 없어요. 매장에 가서 바로 카드를 충전하고 이용하면 돼요. 다만 주말 오후처럼 사람 많은 시간대는 자리가 찰 수 있으니 참고해주세요.

> [!TIP] 초보자라면 셀프 세차장이 가장 추천돼요. 자동세차처럼 브러시에 흠집 날 위험이 없고, 손세차장보다 훨씬 저렴하면서 직접 해보면 프리워시→폼→본세차→헹굼→물기 닦기로 이어지는 세차 순서도 자연스럽게 익힐 수 있어요.

### 어디를 고를지 감이 안 잡힌다면

- 시간이 없고 비용보다 편의가 우선이라면 → 자동 세차장.
- 꼼꼼하고 안전한 관리가 우선이고 비용은 크게 신경 쓰지 않는다면 → 손세차장(가능하면 예약 후 방문).
- 저렴하게, 직접, 안전하게 해보고 싶다면 → 셀프 세차장(이 가이드에서 바로 이어서 다룰 방식이에요).

## 준비물

물통(버킷), 그릿가드, 카샴푸, 워시미트(양털 권장 — 스펀지는 쓰지 마세요), 드라잉 타월. (선택) 물왁스·코팅제, 극세사(아주 가는 섬유) 타월.

## 순서

준비물까지 챙겼다면, 그럼 실제로 어떻게 하는지 볼게요.

### 외부 세차

1. **프리워시(닦기 전에 물로 먼저 씻어내기)**: 고압수로 큰 오염물을 위에서 아래로 씻어내요. 기름때·묵은 때는 전용 세제(APC)를 뿌리고 **3~5분 불린 뒤** 헹궈요. 고압수는 차에서 **30cm 정도까지 가까이 대고** 쓸어내리듯 써야 효과가 있어요. → 이 단계를 건너뛰고 바로 문지르면 오염물이 페인트막을 긁어요.
2. **폼(거품) 뿌리기**: 전체에 빈틈없이 뿌리고 오염물과 반응해 흘러내릴 때까지 잠깐 기다려요.
3. **본세차**: 카샴푸 거품 낸 워시미트로 **힘주지 말고 스치듯** 닦아요. 중간중간 **그릿가드에 문질러** 오염물 털고 다시 써요. 제일 더러운 아래쪽은 맨 마지막에 자주 헹구며 닦아요.
4. **헹굼**: 고압수로 위→아래 꼼꼼히.
5. **물기 닦기(드라잉)**: 드라잉 타월을 **얹어서 물기를 빨아들여요**(문지르지 않기). 코팅이 안 된 차는 퀵 디테일러를 살짝 뿌려 표면을 미끄럽게 한 뒤 닦으면 잔흠집(스크래치)을 줄일 수 있어요.
6. **코팅**: 퀵 디테일러/물왁스를 펴 바른 뒤 마른 타월로 마무리. 광택도 나고 다음 세차가 쉬워져요.

### 실내 세정

1. 세정제는 표면에 직접 뿌리지 말고 **타월에 뿌려서** 닦아요.

## 꼭 지킬 것

마지막으로, 흠집 내지 않으려면 이것만은 꼭 기억하세요.

> [!WARN] 마른 타월로 문지르는 게 스크래치 1순위 원인이에요. 절대 금지예요.

- 호스·청소기 줄이 차체에 닿지 않게(흠집 방지).
- 첫 세차는 한산한 시간에 여유롭게(급하면 사고 나요).

## 천연가죽 시트 관리 (브라운)

한마디로: 천연가죽은 물·열에 약하니 **오염은 절대 문지르지 말고 두드려 닦기**, 그리고 **빠져나간 기름기(유분)를 코팅·컨디셔너로 채워 주기**만 하면 브라운 시트도 오래 깨끗하게 탈 수 있어요.

### 천연가죽, 어떤 소재인가요?

표면에 보호 코팅층이 있어서 오염이나 긁힘에는 어느 정도 강하지만, 가죽 자체는 열과 습기에 약해요. 직사광선에 오래 노출되면 유분과 수분이 빠져나가 딱딱해지고 갈라질 수 있어요. 또 가죽은 부위마다 두께·밀도가 조금씩 달라서 온도·습도 변화에 따라 수축·팽창하며 자연스럽게 주름이 생기기도 해요.

> [!NOTE] 시간이 지나며 생기는 미세한 주름이나 광택 변화는 품질 문제가 아니라 천연가죽 특유의 자연스러운 노화(에이징) 현상이에요.

### 색 옮겨 묻음(이염), 브라운이라 안심해도 될까요?

이염은 다른 물건의 색이 시트에 옮겨 묻는 걸 말해요. 브라운은 베이지·흰색처럼 밝은 시트보다 이염이 눈에 덜 띄는 편이지만, 청바지처럼 짙은 색 옷에서 색이 빠져 스며드는 건 마찬가지예요. 특히 신차 상태에서 시트에 코팅이 얇거나 없으면 오염이 그대로 스며들기 쉬우니, 인수 초기에 코팅을 해두면 이후 오염 제거가 훨씬 쉬워져요.

### 기본 관리 루틴 (1~2주에 한 번)

- 진공청소기로 이물질을 제거하고, 마른 극세사천으로 표면을 닦아주세요.
- 물기 있는 걸레로 자주 닦지 마세요 — 물기가 자주 닿으면 가죽의 유분이 빠져나가 건조해질 수 있어요.
- 음료 등을 흘렸다면: 절대 문지르지 말고, 마른 천이나 물티슈로 톡톡 두드려서 흡수시킨 뒤 잔여물을 닦아내고 완전히 건조시켜주세요.

> [!WARN] 오염을 문지르면 얼룩이 가죽 속으로 더 깊이 스며들 수 있어요. 무조건 두드려서 흡수시키는 게 먼저예요.

### 오염이 남았다면: 클리너 + 컨디셔너

- 가죽 전용 클리너는 시트에 직접 뿌리지 말고, 타월에 묻혀 가볍게 문질러 닦아주세요.
- 클리너는 오염과 함께 가죽의 유분(기름기)까지 씻어내요. 그래서 닦은 뒤에는 반드시 가죽 컨디셔너(빠져나간 기름기·수분을 다시 채워 주는 제품)를 발라 주세요.

### 코팅(보호재) — 최소 연 1회

관리의 핵심은 정기적으로 코팅제를 발라 주는 거예요. 최소 1년에 한 번, 3개월에 한 번씩이면 가장 좋다고 알려져 있어요. 소량을 타월에 묻혀 얇게 골고루 펴 발라주면 돼요.

**셀프 코팅 해보기 (신차 인수 직후 추천)**

1. 세정제로 시트 전체를 한 번 닦아 유분기를 제거해요. 신차라 하더라도 유분기가 남아있으면 코팅이 제대로 밀착되지 않아요.
2. 코팅제를 시트에 직접 바르지 말고, 제품에 동봉된 극세사천(또는 스펀지 블록)에 묻혀서 발라주세요.
3. 통풍시트 옵션이 있다면 켠 상태로 작업하면 통풍 구멍이 막히는 걸 막을 수 있어요.
4. 한쪽에만 몰리지 않게 골고루 펴 바르고, 3분 정도 두었다가 타월로 한 번 닦아낸 뒤 다시 발라주는 과정을 몇 차례 반복해요. 운전석처럼 자주 앉는 자리는 조금 더 신경 써서 발라주면 좋아요.
5. 도포가 끝나면 완전히 굳도록(경화) 하루 정도는 타지 않고 두는 게 좋아요.

> [!TIP] 코팅 직후 바로 타면 코팅막이 제대로 굳지 않을 수 있어요. 하루 정도는 여유를 두는 게 좋아요.

### 여름철 관리

- 가능하면 그늘에 주차하세요. 대시보드·도어 쪽 가죽은 시트보다 더 빨리 건조되니 함께 신경 써주세요.
- 땀에 젖은 채로 오래 앉으면 땀 속 염분이 가죽을 상하게 할 수 있어요. 통풍시트가 있다면 활용해주세요.
- 음료·아이스크림을 흘렸을 때 대처는 위 '기본 관리 루틴'과 같아요(문지르지 말고 두드려 흡수).
- 습도가 높으면 곰팡이가 생길 수 있으니 주기적으로 환기해서 실내 습기를 빼주세요.
- 여름철 관리의 핵심은 결국 '보습'이에요. 열로 유분이 빠지기 쉬우니 보호재를 얇게 자주 발라주세요.

### 겨울철 관리

- 히터를 오래 틀면 실내 공기가 건조해지면서 가죽의 유분도 줄어들어요. 정기적인 보습 관리가 필수예요.
- 눈·비에 젖은 옷을 입은 채로 타면 습기가 가죽에 스며들 수 있으니, 되도록 마른 상태로 앉으세요.
- 젖었다면 뜨거운 바람 대신 자연 통풍이나 실내 온도로 천천히 말리는 게 가죽 수축을 막는 데 도움이 돼요.
- 한파에 야외 주차한 뒤에는 가죽이 뻣뻣해져 있을 수 있어요. 타자마자 시트 열선(히터)을 세게 틀기보다, 서서히 온도를 올려주면 가죽이 급격하게 늘었다 줄었다 하는 걸 막을 수 있어요.

> [!NOTE] 1열 통풍·열선시트와 열선 핸들은 **전 트림 기본**이라 내 차(H-Pick)에도 있어요. 2열은 **열선만** 있고 통풍은 없어요.`,order:5},{id:"p2-seasonal",phase:2,title:"계절 관리 (여름·겨울)",summary:["여름·겨울처럼 계절마다 달라지는 차 관리 포인트를 정리한 내용이에요.","여름엔 냉각수 부족으로 인한 엔진 과열과 침수 도로를 조심하고, 겨울엔 타이어·배터리·워셔액 얼음과 연료 관리를 챙기면 됩니다.","계절 상관없이 에어컨을 제습용으로 가끔 틀어주고, 겨울에 염화칼슘 뿌린 길을 달린 뒤엔 차 밑바닥(하부) 세차를 꼭 해주세요."],body_md:`## 여름철 관리 (공식 기준)

### 냉각수 — 여름 1순위
엔진 오버히트의 큰 원인이 냉각수 부족이다. 에어컨 풀가동+정체+고온이 겹치면 위험 급증.
- **엔진이 식은 상태**에서 보조탱크 **F·L 사이** 수위 확인(뜨거울 때 캡 열면 화상). 제조사 규격 제품으로 보충, 수돗물만 채우지 않음. 일반 교체주기 2년/4만km(차종 매뉴얼 우선).
- 주행 중 온도게이지가 C·H 중간(약 90℃) 유지가 정상. H(빨강)로 오르거나 김이 나면 **즉시 서행→정차→점검**.

### 에어컨
- 냄새 주원인은 증발기 곰팡이. ①캐빈필터 교체 ②**시동 끄기 전 에어컨 끄고 송풍(외기) 5분**으로 습기 제거(최고의 예방) ③필요시 클리너.
- 워셔액 충분히, 타이어 규정 공기압 유지(과주입 금지), 트레드 깊이(수막현상 방지) 확인.

### 폭우·침수 (최우선: 진입 금지)
- **침수 도로·지하차도·급류에 절대 진입 금지, 우회.** 시간당 100mm↑ 폭우면 주행 중단.
- 부득이 통과 시: 통과 가능 판단선 **타이어 절반 높이**, 기어 1~2단, 멈추지 말고 한 번에 저속 통과, 통과 후 브레이크 여러 번 밟아 수분 제거.
- 대피 마지노선: **타이어 2/3 잠기기 전** 이동. 수압으로 문이 안 열리면 헤드레스트 하단 철봉으로 유리 파손 탈출.
- **지하주차장이 가장 위험**: 물이 조금이라도 차오르면 차 두고 몸만 탈출, 차 빼러 진입 금지. 호우 경보 시 미리 지상 대피.
- 침수 시 **시동 걸지 말 것**(손상 커짐), 견인 후 점검.
> ※ '타이어 절반'(통과 판단)과 '타이어 2/3'(대피 마지노선)은 목적이 다른 별개 기준이다.

### 폭염 실내 관리
- 실외 주차 시 실내 최고 **약 90℃**까지 상승. 창문 살짝 열기/선셰이드/문 여닫기로 온도 낮추기.
- **차 안 금지 물품**: 라이터·부탄가스·스프레이(폭발), 보조배터리·휴대용 선풍기 등 리튬기기(발화), 탄산음료·페트병(파열), 대시보드 위 선글라스·돋보기(발화점). 아이·반려동물은 잠깐도 혼자 두지 않기.

## 겨울철 관리 (유튜브 종합)

### 타이어
- 저온에 공기 수축으로 TPMS 경고 뜨는 것은 정상. 적정 공기압은 **운전석 도어 안쪽 스티커** 기준으로 채움. 비 오는 날은 주입 자제(수분 유입), 너무 추운 날 과주입 금지. 연 2회 이상 점검.
- **타이어 종류 확인**: 옆면 **M+S(머드앤스노우)** 표기가 있어야 눈길 가능한 사계절, 세꼭지산(3PMSF)이면 윈터 겸용. M+S 없으면 서머 타이어이므로 겨울엔 반드시 교체(눈길·내리막 제동 불가 위험).

### 배터리
- 저온에 화학반응이 둔해져 겨울 아침 방전이 잦다. 짧은 주행 반복 시 충전 부족. 시동 안 걸릴 때 '클릭'음이면 2~3회까지만 시도(그 이상은 시동모터 손상). 안 되면 긴급출동.
- 한 번 완전 방전된 배터리는 손상 진행 — 이후 몇 개월 내 교체 권장. 오래 세우면 월 1회 이상 시동, 상시전원 블랙박스는 방전 주의(보조배터리 권장). ISG 차량은 AGM 배터리만 사용.

### 워셔액·와이퍼
- 법정 에탄올 워셔액은 영하 25℃까지 얼지 않아야 하나, 뚜껑을 확실히 닫지 않으면 알코올이 증발해 물만 남아 동결·노즐 막힘. 알코올 냄새 없으면 교체. 6개월 1회 교체 권장.
- 눈·얼음 쌓인 채 와이퍼 작동 금지(고무 손상). 먼저 김서림 제거로 녹인 뒤 작동. **성에에 뜨거운 물 붓기 금물(유리 파손).**

### 부동액·연료·기타
- 부동액(물 50:50)은 매년 교체 불필요(교체주기 약 20만km, 10만km에 점검). 직접 물만 보충한 적 있으면 농도 저하로 전량 교체.
- 디젤·LPG는 겨울용 연료로 바뀜(대략 11월 중순~3월). **연료 절반 이상 채우기**로 탱크 결로·수분 유입 방지.
- 겨울에도 에어컨(제습) 함께 작동해 김서림 방지·냄새 예방. LED 헤드/테일램프는 눈·흙탕물이 쌓여 시야를 가리므로 수시로 닦기.
- 눈길·염화칼슘 도로 주행 후 **하부세차**로 부식 예방.

> ※ 여름철 항목은 정부·TS·정책브리핑 공식 자료 기준, 겨울철 항목은 유튜브(전문 채널) 종합.`,field_tips_md:`## 겨울철 실전 팁 (전문 유튜브)
겨울철 정비 얘기에 이어, 현직 유튜버들이 짚어준 실전 포인트예요.

- **배터리 비용 감각**: 배터리를 방치해 발전기까지 고장 나면 발전기 교체가 40만원~100만원+로 배터리(일반 10만원대/AGM 20~30만원대)보다 훨씬 비싸다. 배터리를 제때 교체하는 게 경제적.
- **와이퍼 코팅 수명**: 고무날 카본 코팅 수명이 보통 1~1.5년이라, 겉보기 멀쩡해도 이 주기로 교체하면 잘 닦인다.
- **에어컨 냉매 관리**: 내연기관차는 겨울에 에어컨을 전혀 안 쓰면 컴프레서 실링 오일 공급이 끊겨 냉매 누출 위험(신냉매 보충 40만원+). 전기차·하이브리드 전동 컴프레서는 누출 위험은 적지만 주기 순환이 내구성에 도움.
- **12V 배터리의 중요성**: 하이브리드·전기차도 12V가 방전되면 고전압 배터리가 충분해도 주행 불가(12V로 차량 점검 후 고전압 연결되는 구조).
- 공기압·연료 채우기 등 수치·온도 임계값은 진행자 경험 기반이므로 차종 매뉴얼과 대조 권장.`,checklist:["[여름] 냉각수 F·L 사이 확인(식은 상태), 온도게이지 이상 시 즉시 정차","[여름] 에어컨 끄기 전 송풍 5분, 캐빈필터 교체","[여름] 침수·지하차도 진입 금지, 지하주차장은 차 두고 대피","[여름] 폭염 시 라이터·리튬기기·탄산음료·돋보기 차내 방치 금지","[겨울] 타이어 M+S 표기 확인, 서머 타이어면 교체","[겨울] 공기압 도어 스티커 기준 보충, 배터리 방전 예방(월 1회 시동)","[겨울] 워셔액 뚜껑 확실히 잠금, 성에에 뜨거운 물 금지","[겨울] 연료 절반 이상 유지, 염화칼슘 주행 후 하부세차","[공통] 에어컨 제습 주기 작동"],sources:[{name:"국민재난안전포털(행정안전부) / 한국교통안전공단(TS) / 대한민국 정책브리핑",url:"https://www.safekorea.go.kr/idsiSFK/neo/sfk/cs/contents/prevent/prevent21.html?menuSeq=126",type:"official"},{name:"김한용의 MOCAR",url:"https://youtu.be/fMd_hgJOBXE",type:"personal"},{name:"김한용의 MOCAR",url:"https://youtu.be/Ll8MbSvefN0",type:"personal"}],flags:[],valid_year:null,car_scope:"generic",source_files:["web/p2-여름철관리-09.md","youtube/p2-겨울철차량관리-01.md","youtube/p2-겨울철차량관리-02.md"],body_easy_md:`한마디로: 여름은 '과열·침수 조심', 겨울은 '얼음·방전 조심'이에요.

## 여름철

### 냉각수 (여름 1순위)
엔진이 과열되는 큰 원인이 냉각수 부족이에요. 에어컨 풀가동 + 막힘 + 더위가 겹치면 위험해요.
- **엔진이 식은 상태에서** 냉각수 보조탱크의 액체 높이가 **F(가득)와 L(최소) 눈금 사이**인지 확인해요. 뜨거울 때 뚜껑을 열면 화상을 입을 수 있어요. 물만 채우지 말고 규격에 맞는 냉각수로 보충하세요. 교체는 **처음 20만km 또는 10년, 그 뒤로는 4만km 또는 2년**마다예요. 신차라 한동안은 교체할 일이 없어요.
- 계기판 온도게이지는 냉각수 온도를 보여줘요. 바늘이 **C(차가움)와 H(뜨거움)의 가운데**(약 90℃)에 있으면 정상이에요. **H(빨강) 쪽으로 올라가거나 김이 나면 즉시 속도를 줄여 세우고 점검하세요**.

![냉각수 보조탱크 위치](/img/coolant-reservoir.jpg)
*엔진룸의 냉각수 보조탱크예요. 겉에서 액체 높이가 보여 눈금과 바로 비교할 수 있어요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

### 에어컨
냉각수 다음으로 여름철에 자주 말썽 나는 게 에어컨이에요.

- 에어컨 냄새의 주된 원인은 곰팡이예요. ①에어컨(실내) 필터 교체 ②습기 말리기 ③필요하면 전용 클리너로 관리해요.

> [!TIP] 시동을 끄기 전에 에어컨 버튼만 끄고, 찬바람 없이 바람만 나오는 상태(송풍)로 5분만 틀어 보세요. 바깥 공기가 들어오도록 외기 유입으로 두면 더 좋아요. 에어컨 안쪽 습기를 말려 주는 가장 확실한 곰팡이 예방법이에요.

- 여름에는 워셔액을 넉넉히 채우고, 타이어 공기압은 규정값대로 맞춰요(규정값보다 많이 넣지 않기).

### 폭우·침수 (최우선: 들어가지 말 것)
에어컨보다 훨씬 위험한 게 폭우·침수예요. 지나가는 것만으로도 위험할 수 있으니 잘 봐두세요.

- **침수 도로·지하차도·급류엔 절대 들어가지 말고 우회.** 시간당 100mm 넘는 폭우면 주행 중단.
- 꼭 지나야 하면: 물 높이가 **타이어 절반**을 넘는지로 들어갈지 말지 판단해요. 들어갔다면 저단 기어(1~2단)로 멈추지 말고 한 번에 천천히 통과하고, 나온 뒤에 브레이크를 여러 번 밟아 물기를 없애요.
- 대피 기준: 물이 **타이어의 2/3까지 잠기기 전**에 차를 옮기거나 빠져나와요. 물이 밀어 눌러서 문이 안 열리면, 머리받이(헤드레스트)를 뽑아 아래쪽 금속 봉으로 유리를 깨고 탈출해요.
- ※ '타이어 절반'(통과 판단)과 '타이어 2/3'(대피 기준)은 목적이 다른 별개 기준이에요.

> [!DANGER] 지하주차장이 가장 위험해요. 물이 조금이라도 차오르면 차는 두고 몸만 탈출하고, 차를 빼러 다시 들어가면 안 돼요. 침수된 차는 시동 걸지 말고(손상이 커져요) 반드시 견인해서 점검받으세요.

### 폭염 실내
폭우만큼 흔한 여름 사고가 뜨거워진 실내예요.

- 땡볕에 주차하면 실내 온도가 **약 90℃**까지 올라요. 창문을 살짝 열어 두거나 선셰이드(앞유리에 씌우는 햇빛 가림막)를 써서 온도를 낮춰요.
- **차 안에 두면 안 되는 것**: 라이터·부탄가스·스프레이(폭발), 보조배터리·휴대용 선풍기 등 리튬 기기(발화), 탄산·페트병(파열), 대시보드 위 선글라스·돋보기(발화). 아이·반려동물은 잠깐도 혼자 두지 마세요.

## 겨울철
여름 대비를 봤으니, 이번엔 추위가 문제 되는 겨울철을 볼게요.

### 타이어
- 날씨가 추워지면 타이어 속 공기가 수축해(부피가 줄어 압력이 낮아져) TPMS(공기압 경고) 표시가 뜨는 건 정상이에요. 공기압은 **운전석 문을 열면 안쪽에 붙어 있는 스티커**의 값을 기준으로 채워요. 비 오는 날이나 아주 추운 날에 규정값보다 많이 넣지는 마세요. 1년에 두 번 이상 점검하세요.
- **타이어 종류 확인**: 타이어 옆면에 **M+S** 표기(진흙·눈을 뜻하는 Mud+Snow)가 있어야 눈길에서 쓸 수 있어요. 이 표기가 없으면 여름용(서머) 타이어라 겨울에는 반드시 사계절용이나 겨울용(윈터)으로 바꿔야 해요. 그대로 타면 눈길이나 내리막에서 브레이크가 듣지 않을 수 있어요.

### 배터리
타이어를 챙겼다면, 이번엔 겨울철 단골 문제인 배터리 방전이에요.

- 추우면 배터리 성능이 떨어져 겨울 아침에 방전이 잦아요. 시동이 안 걸리면서 '클릭' 소리만 날 때는 **2~3번까지만** 다시 시도하세요. 그 이상 반복하면 시동을 돌리는 모터(시동모터)가 상해요. 안 되면 긴급출동을 부르세요.
- 한 번 완전히 방전된 배터리는 몇 달 안에 교체하는 게 좋아요. 차를 오래 세워 둘 때는 한 달에 한 번 이상 시동을 걸어 주고, 시동을 꺼도 계속 녹화하는(상시 녹화) 블랙박스를 달았다면 방전에 더 주의하세요. ISG 기능이 있는 차는 AGM 배터리만 써야 해요.

### 워셔액·와이퍼
- 겨울용 워셔액은 영하 25℃까지 안 얼어야 해요. 뚜껑을 꽉 안 닫으면 알코올이 날아가 물만 남아 얼 수 있어요(알코올 냄새 없으면 교체).
- 눈·얼음이 쌓인 채로 와이퍼를 켜지 마세요. 고무날이 상해요. 유리에 얼어붙은 얇은 얼음(성에)에 **뜨거운 물을 붓는 것도 금지**예요. 온도가 갑자기 바뀌면서 유리가 깨질 수 있어요. 먼저 히터 바람으로 녹인 뒤에 와이퍼를 켜세요.

### 연료·기타
- 냉각수는 부동액과 물을 50:50으로 섞어 쓰는 액체라서 매년 갈 필요는 없어요(교체 약 20만km, 10만km에 점검). 물만 보충한 적이 있으면 부동액 비율이 묽어지니 전부 새로 갈아야 해요.
- 디젤·LPG는 겨울용 연료로 바뀌어요(대략 11월 중순~3월). **연료를 절반 이상 채워** 두면 탱크 안쪽에 물방울이 맺히는 것(결로)을 막을 수 있어요.
- 겨울에도 히터와 함께 에어컨 버튼을 켜 두면 공기 중 물기를 빼줘서(제습) 김서림과 냄새를 막는 데 좋아요.
- 눈길이나 **눈을 녹이려고 뿌린 제설제(염화칼슘) 위를 달린 뒤에는 차 밑바닥(하부) 세차**로 녹(부식)을 막아요.`,order:6},{id:"p2-inspection",phase:2,title:"정기검사",summary:["정기검사는 내 차가 안전·환경 기준을 지키는지 나라에서 정기적으로 확인하는 의무 검사예요.","새로 산 승용차는 등록일로부터 5년 뒤에 첫 검사를 받고, 그 뒤로는 2년마다 받으면 돼요.","검사 기간을 놓치면 과태료가 나오니, 첫 검사 시점(등록 후 5년)을 꼭 기억해 두세요."],body_md:`## 정기검사 주기 (비사업용 승용차, 공식 기준)

한국교통안전공단(TS) '정기검사 유효기간' 표 기준:

| 구분 | 최초 검사 유효기간 | 이후 반복 주기 |
|---|---|---|
| **비사업용 승용** | **5년** (신조차 신규검사 간주) | **2년** |
| 사업용 승용 | 2년 | 1년 |

- 즉 신차(비사업용 승용)는 **신규등록일로부터 5년 뒤 첫 정기검사**를 받고, 그 이후 **2년마다** 받는다.
- 2024년 12월 17일 개정된 별표 15의2를 반영한 현재(2026년) 규정이다. 개정 전에는 최초 4년이었으나, 2026-07-24 기준 TS 공식 페이지·법제처 생활법령정보 모두 **최초 5년**으로 일치.

## 검사 유효기간 기산 방식
(자동차관리법 시행규칙 제74조제2항)
- **최초 정기검사**: 신규등록일부터 기산
- **이후 정기검사**: 직전 정기검사를 받은 날의 다음 날부터 기산
- 정기검사기간 중 적합판정 시: 종전 유효기간 만료일의 다음 날부터 기산

## 근거 법령
- 자동차관리법 제43조제5항, 시행규칙 제74조제1항 및 별표 15의2 (2024.12.17 개정)

> ※ 2026년 6월 3일 시행된 자동차관리법 개정사항이 신조차 최초 유효기간 등에 영향을 주는지는 별도 확인이 필요하다(법제처 페이지에 향후 업데이트 예정 안내 있었음).`,field_tips_md:null,checklist:["신차는 신규등록일로부터 5년 뒤 첫 정기검사 시점 확인","이후 2년마다 정기검사 받기","검사 유효기간 만료일 기준으로 검사 예약","차량 등록증/TS 안내로 정확한 만료일 확인"],sources:[{name:"한국교통안전공단(TS)",url:"https://main.kotsa.or.kr/portal/contents.do?menuCode=01010200",type:"official"},{name:"한국교통안전공단 — 자동차검사 수수료 안내",url:"https://main.kotsa.or.kr/portal/contents.do?menuCode=01010102",type:"official"},{name:"사이버검사소 예약",url:"https://www.cyberts.kr/cp/pvr/prm/readCpPvrPrsecResveMainView.do",type:"official"}],flags:[],valid_year:2026,car_scope:"generic",source_files:["official/p0-정기검사유예-04.md","official/p2-정기검사-예약비용소요-22.md"],body_easy_md:`한마디로: 새 승용차는 등록 후 **5년째에 첫 정기검사**, 이후 **2년마다** 받으면 돼요.

## 정기검사가 뭔가요
- 내 차가 안전하게, 그리고 배출가스 기준에 맞게 굴러가는지 나라에서 정기적으로 확인하는 **의무 검사**예요.
- 안 받으면 과태료가 나올 수 있어요.

## 내 차(신차)는 언제 받나요
그럼 내 차는 구체적으로 언제 받아야 하는지 볼게요.
- **첫 검사**: 신규등록일(차 처음 등록한 날)로부터 **5년 뒤**
- **그 다음부터**: **2년마다** 반복

> [!NOTE] 2024년 12월 규정이 바뀌면서 첫 검사 주기가 4년에서 5년으로 늘었어요. 지금(2026년 기준)은 **첫 검사가 5년**이니 예전 정보와 헷갈리지 마세요.

| 구분 | 첫 검사 | 이후 주기 |
|---|---|---|
| **비사업용 승용차 (내 차)** | **5년** | **2년마다** |
| 사업용 승용차 | 2년 | 1년마다 |

## 기간은 어떻게 세나요
그런데 이 '5년', '2년'을 정확히 언제부터 세는지 헷갈릴 수 있어요.
- **첫 검사**: 차를 처음 등록한 날부터 셈
- **그 다음 검사들**: 앞 검사를 받은 날의 다음 날부터 셈
- 즉 한 번 받으면 그 다음 검사 기한이 자동으로 이어져요.

## 기한을 놓치면

> [!WARN] 검사 기간(보통 만료일 앞뒤로 여유 기간이 있어요)을 넘기면 과태료가 붙어요. 만료일을 미리 챙겨두세요.

## 실제로 받으러 갈 때 (예약·비용·서류)
시기를 알았다면, 실제로 받을 때 필요한 것들이에요.

- **예약**: 한국교통안전공단(TS) 검사소는 **평일·토요일 모두 예약제**예요. **사이버검사소(cyberts.kr)**나 정부24에서 예약해요. 나라가 검사 권한을 준 민간 검사소(블루핸즈 등)는 예약제와 상관없이 받을 수 있어요.
- **비용(공단 검사소 기준)**: 승용차는 '소형' 수수료가 적용돼 **정기검사 23,000원**(부가세 포함)이에요.
- **재검사**: 검사에서 떨어지면 고쳐서 다시 받는 검사예요. 정해진 재검사 기간 안에 다시 받으면 **수수료가 면제**돼요.
- 준비물은 자동차등록증과 신분증 정도예요(공단 안내 확인).

| 검사 종류 | 소형(승용) 수수료 |
|---|---|
| **정기검사** | **23,000원** |
| 종합검사(무부하) | 39,000원 |
| 임시검사(일반) | 21,500원 |

**수도권이나 인구 50만 이상 대도시에 등록한 차는 첫 검사부터 '종합검사'** 대상이에요(자동차관리법 제43조의2). 그 외 지역이면 정기검사를 받아요. 임시검사는 관청이 명령하거나 내가 따로 신청할 때만 받는 거라 정기 일정과는 상관없어요.

> [!NOTE] 위 금액은 **공단 검사소 기준**이에요. **민간 검사소는 금액이 다를 수 있어요.** 2020년 7월부터 예약 할인(1,200원)은 없어졌어요.
> 장애인·국가유공자·기초생활수급자·다자녀(만 18세 이하 자녀가 3명 이상이면 30% 깎아 줘요) 등은 수수료 감면이 있어요 — 접수할 때 말하면 전산으로 확인해 줘요.`,order:8},{id:"p2-service-center",phase:2,title:"서비스센터 이용법",summary:["블루핸즈·하이테크센터는 현대차 공식 정비소로, 신차는 여기서 매년 무상점검을 받을 수 있어요.","정비는 현대닷컴 온라인이나 고객센터(080-600-6000)로 예약하면 되고, 사고 수리·타이어 교환 같은 건 센터에 직접 전화해 예약해요.","보증수리·리콜·무상점검은 반드시 공식 정비소에서, 순정부품·규정 정비를 지켜야 보증이 유지되니 주의하세요."],body_md:`## 1. 신차 무상점검 (블루 기본점검)

- **제공 범위(승용)**: 신차 출고월 기준 **연 1회, 8년간 총 8회**. 대상은 블루멤버스 회원 보유 차량(승용·SUV·MPV·소형상용).
- **점검 내용**: 1~6회차는 엔진룸/하부/일반 점검 **15종 + 에탄올 워셔액**, 7~8회차는 점검 15종.
- **기간 예시**('21.2.20 출고): 1회차 '21.2.20~'22.2.28, 2~8회차 각 해당년도 3.1~익년 2.28.
- **유의**: 최종 점검일 기준 30일간 다음 차수 점검 불가. 점검 중 이상 발견 시 보증수리 외 항목은 희망 시 유상수리. 정책은 고지 없이 변경될 수 있음.
- 점검은 가까운 **직영 하이테크센터/블루핸즈** 방문.

## 2. 예약 방법

- **온라인**: 현대닷컴 '서비스/멤버십 > 서비스 네트워크 찾기 > 검색/예약'에서 장소·시간 선택. 예약은 **당일 기준 이틀 뒤부터 2주간** 가능. 월요일 예약은 부품수급 위해 **주말 포함 D-4 전까지** 권장. 예약 대기는 확정이 아니며 센터가 개별 연락.
- **전화**: 고객센터 **080-600-6000** (운영 08:30~18:00, 일·공휴일 휴무).
- **전화·인터넷 예약 불가(센터 직접 문의)**: 사고차 차체수리·도장, 시트·유리 수리, 타이어 교환, 오디오·내비 수리 등. (파노라마 선루프는 080-600-6000, 내비 업데이트는 해당 블루핸즈 사전 문의)

## 3. 공식 서비스 네트워크 구분 (공식센터 vs 일반정비소)

현대차 공식 정비망 3종 = 공식(직영/협력) 거점이며, 사설·일반정비소는 포함되지 않는다.
- **전문 블루핸즈**: 차체/도장·엔진/미션 작업을 **제외한** 신속 보증수리·일반 정비.
- **종합 블루핸즈**: 차체/도장·엔진/미션 **포함** 모든 보증수리·일반 정비.
- **하이테크센터**: 현대차 **직영** 정비 거점.
- 특화 인증: EV 블루핸즈, FCEV, 전동차(HMCP L3e), N, 상용, 그랜드 블루핸즈 등.

### 공식센터를 써야 하는 경우
- **보증수리(무상수리)·리콜·신차 무상점검**은 공식 정비망에서 받아야 한다.
- **보증 유지 조건 직결**: 순정부품·지정 오일·규정 정비주기 미준수로 인한 고장은 보증 제외될 수 있다. 신차 보증기간(일반 3년/6만km, 파워트레인 5년/10만km, 하이브리드 부품 10년/20만km) 내에는 공식센터 이용이 안전.
- **전동차·전기차·수소차 정비**는 해당 인증 블루핸즈(EV/FCEV/HMCP L3e)에서. 일반 정비소는 고전압 시스템 정비 역량이 없을 수 있다.

> ※ '공식센터 vs 일반정비소' 우열에 대한 현대차의 명시적 비교 문구는 공식 페이지에 없으며, 위 판단은 서비스망 구분·보증 조건 원문에 근거한 정리다.`,field_tips_md:null,checklist:["블루멤버스 가입 후 신차 무상점검(연 1회·8년 8회) 일정 챙기기","정비 예약은 현대닷컴 온라인 또는 080-600-6000 전화","월요일 예약은 D-4 전까지, 사고수리·타이어 등은 센터 직접 문의","보증수리·리콜·신차 무상점검은 공식 정비망(하이테크센터/블루핸즈)에서","보증기간 내 순정부품·지정 오일·규정 정비주기 준수","전기·하이브리드 고전압 정비는 인증 블루핸즈 이용"],sources:[{name:"현대자동차 (현대닷컴)",url:"https://www.hyundai.com/kr/ko/service-membership/service-network/service-reservation-search",type:"official"}],flags:[],valid_year:null,car_scope:"generic",source_files:["official/p2-서비스센터이용-12.md"],body_easy_md:`한마디로: 신차는 **공식 정비소(블루핸즈/하이테크센터)**에서 매년 **무상점검**을 받고, 보증 기간엔 여기서 정비받는 게 안전해요.

## 공식 정비소가 뭔가요
'현대차 공식 정비망'이라 해서 아래 세 곳이 모두 현대가 직접 운영하는 건 **아니에요**. 직영은 **하이테크센터뿐**이고, 블루핸즈는 **현대가 인증한 협력 정비점**이에요. 세 곳 모두 순정부품(제조사가 정한 정품 부품)을 쓰고 보증수리·신차 무상점검이 되며, 현대와 계약하지 않은 일반(사설) 정비소는 여기에 포함되지 않아요.

- **하이테크센터** — **현대차 직영**(현대차가 직접 운영). 규모가 크고 사고로 찌그러진 차체 펴기 같은 복잡한 정비까지 폭넓게 봐요.
- **블루핸즈** — **현대 인증 협력 정비점**(개인사업자가 운영하지만 현대와 계약해 순정부품·보증수리를 하는 곳). 동네에서 흔히 보이는 곳이에요. 다시 둘로 나뉘어요:
  - **종합 블루핸즈**: 차체 펴기·도장(페인트칠), 엔진·변속기(미션)까지 **모든 정비**가 가능한 큰 곳이에요.
  - **전문 블루핸즈**: 차체·도장·엔진·변속기 작업은 빼고, **빠른 보증수리와 가벼운 정비(경정비)** 위주예요.

> [!NOTE] 한 줄 정리 — **하이테크센터 = 현대 직영(큰 정비)**, **블루핸즈 = 현대 인증 협력점**(종합=다 됨 / 전문=경정비). 이름만 다른 게 아니라 **운영 주체와 가능한 작업 범위**가 달라요.

> [!DANGER]
> **전기차·하이브리드 고전압 부품은 EV 인증 블루핸즈** 등 전용 센터에서만 정비받으세요. 일반 정비소는 고전압을 안전하게 다루지 못해 위험할 수 있어요.

## 신차 무상점검 (블루 기본점검)
공식 정비소를 알았으니, 신차 때 챙길 수 있는 무상점검부터 볼게요.
- **블루멤버스 회원**이면 차를 출고한 달을 기준으로 **1년에 1번씩, 8년간 총 8회** 공짜로 점검받을 수 있어요.
- 1~6회차는 점검 15가지 항목 + 워셔액 보충, 7~8회차는 점검 15가지 항목이에요.
- 가까운 하이테크센터/블루핸즈에 가면 돼요.

> [!WARN]
> 마지막 점검일로부터 **30일간은 다음 점검을 못 받아요.** 점검 중 문제가 발견돼도, 보증 대상이 아닌 부분은 원하면 유상으로 수리하는 거예요.

## 예약은 이렇게
그럼 실제로 예약은 어떻게 하는지 볼게요.
- **온라인**: 현대닷컴 '서비스/멤버십 > 서비스 네트워크 찾기 > 검색/예약'. 예약할 수 있는 날짜는 **오늘로부터 이틀 뒤부터 2주 안**이에요. (월요일 예약은 부품 준비를 위해 주말 포함 4일 전까지 잡는 게 좋아요.)
- **전화**: 고객센터 **080-600-6000** (08:30~18:00, 일·공휴일 휴무)
- **온라인 예약이 안 되는 것**(센터에 직접 전화): 사고 차체수리·도장, 시트·유리 수리, **타이어 교환**, 오디오·내비 수리 등

## 보증을 지키려면 (중요)
예약까지 마쳤다면, 이제 왜 공식 정비소를 계속 이용해야 하는지 보증 관점에서 짚고 갈게요.
- **보증수리·리콜·신차 무상점검은 꼭 공식 정비소에서** 받으세요.
- **순정부품·지정 오일·정해진 정비 주기**를 안 지켜서 생긴 고장은 보증에서 빠질 수 있어요.
- 신차 보증기간 안에는 공식센터를 쓰는 게 안전해요.

### 보증 기간표
| 보증 종류 | 기간 |
|---|---|
| 일반 부품 | 3년 / 6만 km |
| 파워트레인(엔진·변속기) | 5년 / 10만 km |
| 하이브리드 부품 | 10년 / 20만 km |
`,order:7},{id:"p2-hybrid-care",phase:2,title:"하이브리드 차량 관리",summary:["하이브리드도 엔진을 쓰기 때문에 엔진오일을 제때 갈아야 하고, 전기차처럼 방치하면 안 돼요.","내 차(MX5 HEV) 기준 엔진오일은 보통 1만 km·1년마다(험하게 타면 5천 km·6개월), 배터리는 '방전처럼 보이는' 보호 차단과 진짜 방전을 구분하는 게 포인트예요.","하이브리드는 냉각(엔진·배터리 열 식히기)이 가장 중요하니 냉각 경고등이 뜨면 무리해서 타지 말고 바로 정비소로 가세요."],body_md:`## 엔진오일 — 하이브리드도 필수

하이브리드를 전기차로 오해해 오일을 안 갈거나 늦게 갈아도 된다고 여기는 경우가 많은데, **엔진을 쓰는 만큼 정기 교체가 필요**하다. 3~4만km까지 한 번도 안 갈고 오는 사례도 실제 있다.

- **첫차(싼타페 MX5 HEV) 공식 매뉴얼 기준이 우선**: 정상 10,000km/12개월, 가혹 5,000km/6개월 (0W-20, 약 4.8ℓ).
- 유튜브 일반 하이브리드 안내값은 정상 15,000km/1년, 가혹 7,500km/6개월로 언급되나, **내 차 매뉴얼값(10,000/5,000)이 기준**이다(참고용 국내/일반 관행과 구분).

## 배터리 (고전압 + 저전압 2종)

- 하이브리드는 고전압 배터리와 12V 저전압 배터리로 구성된다.
- **'방전된 것처럼' 보인다고 바로 교체 금지**: 하이브리드 배터리는 과방전 우려 시 스스로 전원을 차단하는데, 이 차단을 실제 방전으로 오해하는 경우가 많다. 진짜 방전인지 보호 차단인지 먼저 확인.
- 전원 차단 시 다시 연결하는 **배터리 리셋 기능**이 있으며 자주 써도 수명 영향은 크지 않다(단, 근거 미제시로 참고).
- 12V가 방전되면 고전압이 충분해도 주행 불가(12V로 차량 점검 후 고전압이 연결되는 구조).

## 냉각 관리 — 하이브리드에서 가장 중요

엔진·배터리·모터 모두 열이 나므로 냉각이 핵심. 하이브리드는 **냉각수 보충 지점이 두 곳(엔진 계통 + 전장/배터리 계통)**이다.
- 냉각 흐름: 전장 리저버 탱크 → 전동식 워터펌프(EWP) → HSG → 전장 라디에이터(하이브리드는 라디에이터 2개) → OPU → HPCU 순환.
- **소유자 점검 3가지**: ①전장 리저버 탱크 냉각수 양 ②냉각라인 클램프 누유 여부 ③워터펌프 정상 작동(경고등 여부). 냉각수는 소모성이 아니라 누유 없으면 양이 거의 안 변한다.
- 냉각수량은 정상인데 과열되면 EWP 고장 가능성. 냉각 관련 경고등이 뜨면 무리한 운행 금지(값비싼 하이브리드 부품 손상 위험) → 바로 정비소.

## 관성(타력) 주행 활용

- 현대차 관성주행 안내 기능은 내비가 감속 예상 구간(회전·유턴·진출입로·톨게이트 등)을 파악해 액셀 뗄 시점을 알려준다.
- 관성 주행 시 전기 모드로 전환돼 배터리 충전·EV 주행 시간이 늘어 연비에 유리. 하이브리드일수록 적극 활용.

## 브레이크 디스크 클리닝

- 회생제동 위주라 패드가 디스크에 잘 닿지 않아 **디스크에 녹**이 생기고, 방치 시 비상 제동력이 저하될 수 있다.
- **오토홀드 버튼을 3초간 길게 누르면** 디스크 클리닝 기능 작동(끄려면 다시 3초 또는 시동 off). 디스크 표면 녹을 제거해 제동력 저하를 예방.`,field_tips_md:`## 정비 현장 실전 팁 (하이브리드 전문 채널)
본문에서 다룬 냉각 관리를 조금 더 실전 관점에서 보충하면 다음과 같아요.

- **냉각이 1순위**: 내연기관·하이브리드·전기차 공통으로 가장 중요한 게 냉각이며, 하이브리드는 특히 그렇다. HPCU(운전석 앞 고가 부품) 안에 HCU·MCU·LDC와 냉각장치가 함께 들어 있다.
- **냉각수 누유 체크**: 신차는 누유 확률이 낮지만 사고 수리·정비로 클램프가 헐거워지면 누유가 생길 수 있어 육안 점검할 만하다(냉각라인이 복잡하지 않아 위·측면에서 확인 가능).
- **EWP 고장 신호**: 냉각수는 정상인데 과열/냉각팬 고속 작동/하이브리드 시스템 정지·엔진·냉각수 경고등이 뜨면 전동식 워터펌프 고장을 의심.
- 부품값이 비싼 만큼 소유자가 꼼꼼히 점검하고, 이상 시 무리하게 타지 말고 바로 정비소 방문.

※ '배터리 리셋 자주 써도 무방', 'EWP가 기계식보다 고장 잦은 느낌' 등은 진행자 경험 기반 진술로 참고용.`,checklist:["하이브리드도 엔진오일 정기 교체 (MX5 HEV: 정상 10,000km·12개월 / 가혹 5,000km·6개월, 0W-20)","'방전처럼 보임'과 실제 방전 구분 후 배터리 교체 판단","12V 배터리 방전 예방(주행 불가 원인)","냉각수 양(전장 리저버 탱크)·라인 누유·워터펌프 작동 3가지 점검","냉각 관련 경고등 시 무리한 운행 금지, 즉시 정비소","관성(타력) 주행 안내 기능 활용해 연비 개선","회생제동 차량은 오토홀드 3초 길게 눌러 브레이크 디스크 클리닝"],sources:[{name:"오토클래스AUTOCLASS",url:"https://youtu.be/lj4__c6wnfU",type:"personal"},{name:"everything in a car [Car & Man ]",url:"https://youtu.be/C_biCXv-VWc",type:"personal"}],flags:["단독출처"],valid_year:null,car_scope:"hybrid",source_files:["youtube/p2-하이브리드차량관리-01.md","youtube/p2-하이브리드차량관리-02.md"],body_easy_md:`한마디로: 하이브리드도 **엔진오일 제때 교체**, **냉각 관리**가 핵심이고, 배터리는 겁먹지 말고 진짜 방전인지부터 확인하세요.

## 엔진오일 — 하이브리드도 꼭 갈아야 해요
하이브리드를 전기차로 착각해 오일을 안 갈면 안 돼요. 엔진을 쓰는 만큼 정기 교체가 필요해요.
- **내 차(싼타페 MX5 HEV) 기준**: 보통 **1만km 또는 12개월**마다, 험하게 타면(가혹 조건) **5,000km 또는 6개월**마다 갈아요. 오일 규격은 **0W-20**(추울 때도 잘 흐르는 묽은 오일이라는 표기), 넣는 양은 약 **4.8리터**예요.
- 인터넷에 나오는 일반 하이브리드 값(1만5천 km 등)이 아니라 **내 차 매뉴얼 값이 기준**이에요.

## 냉각 관리 — 하이브리드에서 제일 중요
엔진오일을 챙겼다면, 이번엔 하이브리드에서 가장 중요하다는 냉각 관리를 볼게요. 엔진·배터리·모터가 모두 열을 내니 **식혀 주는(냉각) 게 핵심**이에요. 그래서 하이브리드는 냉각수 통이 **두 개**예요(엔진용 + 전기장치용).
- **내가 볼 것 3가지**: ①전기장치용 냉각수 통(매뉴얼에는 '전장 리저버 탱크'라고 나와요)에 냉각수가 얼마나 있는지 ②냉각수가 지나는 관에 새는 곳이 없는지 ③냉각수를 돌려주는 워터펌프(EWP)가 잘 도는지(경고등이 켜졌는지). 냉각수는 새지만 않으면 양이 거의 안 줄어요.
- 냉각수 양은 정상인데 과열되면 워터펌프 고장일 수 있어요.

> [!WARN] 냉각 관련 경고등이 뜨면 무리해서 타지 말고 바로 정비소로 가세요. 비싼 하이브리드 부품이 상할 수 있어요.

## 배터리 — 두 개예요 (고전압 + 12V)
냉각까지 확인했다면, 이번엔 하이브리드 특유의 배터리 이야기예요. 하이브리드는 **고전압 배터리**와 **12V 작은 배터리** 두 개가 있어요.

### 고전압 배터리
> [!CHECK] '방전된 것 같다'고 바로 배터리를 교체하지 마세요. 고전압 배터리는 너무 많이 쓰이면 자신을 지키려고 스스로 전원을 끊어요(보호 차단). 이때도 차가 안 움직이니 방전으로 오해하기 쉬워요. 정말 방전인지 보호 차단인지 먼저 확인하세요.
- 이렇게 보호 차단으로 전원이 끊긴 경우 다시 살려 주는 **배터리 리셋 기능**이 있어요.

### 12V 배터리
- 12V(볼트)는 전기의 세기를 나타내는 단위예요. **이 작은 배터리가 방전되면** 고전압 배터리가 멀쩡해도 시동이 안 걸려요. 먼저 작은 배터리로 차 전원을 켜고, 그다음에 고전압 배터리가 연결되는 순서라서 그래요.

## 브레이크 디스크 녹 방지 (오토홀드 3초)
여기까지가 관리 항목이라면, 이제부터는 운전 습관 두 가지예요. 브레이크는 바퀴와 함께 도는 금속 원판(디스크)을 브레이크 패드가 양쪽에서 잡아 차를 세우는 구조예요. 하이브리드는 회생제동(모터로 감속)을 주로 써서 패드가 디스크에 잘 안 닿고, 그래서 **디스크에 녹**이 생겨 급브레이크가 잘 안 들을 수 있어요.
- **오토홀드 버튼을 3초 길게 누르면** 디스크의 녹을 벗겨 주는 '디스크 클리닝' 기능이 켜져요. (끄려면 다시 3초 누르거나 시동을 끄면 돼요)

## 관성(타력) 주행 활용
두 번째 습관은 관성(타력) 주행이에요. 가속페달에서 발을 떼고, 차가 굴러가던 힘으로 나아가게 두는 걸 말해요.
- 속도를 줄여야 하는 구간(회전·유턴·톨게이트 등)에서 내비게이션이 가속페달을 뗄 시점을 알려줘요.
- 가속페달을 떼면 전기 모드로 바뀌면서 배터리가 충전되고 연비에 유리하니 적극 활용하세요.
`,order:4},{id:"p3-accident",phase:3,title:"사고 발생 시 현장조치",summary:["교통사고가 났을 때 현장에서 무엇을 어떤 순서로 해야 하는지 알려주는 내용이다.","무조건 '안전 확보 → 다친 사람 확인·구호 → 사진·표시로 증거 남기기 → 보험 접수 후 경찰 신고' 순서로 움직이고, 특히 차에서 내리기 전 뒤차부터 확인해 2차 사고를 막는다.","사람이 다쳤으면 구호와 경찰 신고는 무조건 의무이고, 다친 사람을 두고 떠나면 뺑소니로 크게 처벌받으며, 상대가 12대 중과실에 해당하면 보험·합의와 상관없이 형사처벌 대상이니 반드시 신고한다."],body_md:`## 현장조치 4단계 (KB손해보험 공식 순서)

**1단계 — 일단 정지하고 안전을 확보한다**
- 안전한 장소로 이동한다.
- 비상깜빡이를 켜는 그 순간에도 반드시 뒤 차량을 먼저 확인한다(2차 사고 예방).
- 고속도로·자동차전용도로에서는 후방에 안전삼각대 등 고장자동차 표지를 설치하고, 사람은 가드레일 밖 등 안전지대로 대피한 뒤 조치를 시작한다.

**2단계 — 부상자 상태를 확인한다**
- 부상 상태를 확인하고 적절한 응급조치를 한다(필요 시 119 신고).
- 부상자를 함부로 이동시키면 위험할 수 있으므로 주의한다.

**3단계 — 사고 상황과 증거를 확보한다**
- 스프레이로 사고차량 네 바퀴 밑·노면흔적·유류품 위치 등을 표시한다.
- 다각도에서 사고 사진을 촬영한다.
- 목격자를 확보한다.

**4단계 — 보험회사에 접수한 뒤 경찰에 신고한다**
- 부상자가 발생하면 반드시 신고한다.
- 차량만 파손된 경미한 물피사고로서 사고수습조치를 마친 경우에는 반드시 신고할 필요는 없다.
- 보험회사에 즉시 접수해 원활하게 처리되도록 한다(현장 즉석 현금합의는 권장하지 않음 — 후유증·손상이 나중에 확인될 수 있으므로 정식 처리 권고).

## 경찰 신고 의무 기준 — 도로교통법 제54조

> **제54조(사고발생 시의 조치)**
> ① 교통으로 사람을 사상하거나 물건을 손괴한 경우 운전자등은 **즉시 정차**하여 **1. 사상자를 구호하는 등 필요한 조치**, **2. 피해자에게 인적사항(성명·전화번호·주소 등) 제공**을 하여야 한다.
> ② 경찰공무원(현장에 없으면 가장 가까운 국가경찰관서)에게 **지체 없이 신고**하여야 한다. **다만, 차만 손괴된 것이 분명하고 도로에서의 위험방지와 원활한 소통을 위하여 필요한 조치를 한 경우에는 그러하지 아니하다.**

- **인적 피해가 있는 사고**: 구호조치·인적사항 제공은 의무이고, 경찰 신고도 의무다.
- **차량·물건만 손괴된 물피사고**: 도로 위험방지·소통 조치를 마쳤다면 신고 의무가 면제된다. 단, 그 조치를 하지 않으면 신고 의무가 남는다.
- **구호조치 없이 도주(뺑소니)**: 교통사고처리 특례법 제3조제2항 단서에 따라 처벌 특례가 배제되고(종합보험·합의와 무관하게 형사처벌), 특정범죄가중처벌법 대상이 될 수 있다.

## 12대 중과실 — 반드시 경찰 신고해야 하는 경우

아래 12개 항목(교통사고처리 특례법 제3조제2항 단서) 중 하나에 해당하고 사람을 다치게 하면, 상대방은 종합보험 가입·합의 여부와 관계없이 형사처벌(공소 제기)을 피할 수 없다.

1. 신호·지시 위반
2. 중앙선 침범(횡단·유턴·후진 포함)
3. 제한속도 시속 20km 초과 과속
4. 앞지르기·끼어들기 방법·금지 위반
5. 철길건널목 통과방법 위반
6. 횡단보도 보행자 보호의무 위반
7. 무면허 운전
8. 음주·약물 운전
9. 보도 침범·보도 횡단방법 위반
10. 승객 추락 방지의무 위반(개문발차)
11. 어린이 보호구역 안전운전의무 위반
12. 화물 적재(추락 방지) 조치 위반

- 12대 중과실 외에도 ▲뺑소니(구호조치 위반 후 도주·유기) ▲음주측정 거부 ▲음주측정 방해도 별도 특례 배제 사유다.
- 상대가 "내가 다 책임지겠다"고 해도 말이 바뀌는 경우가 많으므로, 위 경우엔 반드시 경찰에 신고한다.

## 2차 사고 예방 — 고속도로 '비트박스'(한국도로공사)

- **비**상등을 켜고 → **트**렁크를 열고 → 차량 **밖**(가드레일 바깥)으로 대피하고 → **스**마트폰으로 신고(한국도로공사 1588-2504 또는 112).
- 고속도로 2차 사고 치사율은 약 54.3%로 일반 사고(8.4%)의 약 6.5배다. 차 안이나 차 옆에 머무르지 말고 안전지대로 신속히 대피한 뒤 신고한다.
- 고장·사고 시 한국도로공사 긴급견인서비스(1588-2504)로 가까운 안전지대까지 무상 견인이 가능하다.`,field_tips_md:`## 뒤에서 추돌당했을 때 (감성대디 Dennis)
- 뒤에서 받힌 경우 큰 이변이 없는 한 과실은 뒤차(가해자) 100%가 원칙이다.
- 목·허리에 충격이 있었다면 반드시 병원(정형외과·한방병원)에서 MRI 등 검사를 받는다. 후유증은 사고 후 한참 뒤에 나타날 수 있어 초반 검사가 중요하다.
- 가해자가 대인접수를 거부하면 본인 비용으로 먼저 치료받고 진단서·진료비 세부내역서·영수증을 모아 가해자 보험사에 직접청구권을 행사한다.
- 과실비율이 납득되지 않으면 보험사가 정한 대로 따르지 말고 이의를 제기한다. 실제로 조정되는 경우가 많다.
- 상대가 부당하게 과잉 치료·합의금을 요구하는 것으로 의심되면 '마디모'(블랙박스 기반 상해 시뮬레이션) 신청을 검토할 수 있다.

## 사진 촬영·신고 판단 순서 (보상과배상TV)

현장 대응 노하우를 봤다면, 이번엔 사진은 어떤 순서로 찍고 언제 차를 옮겨야 하는지 볼게요.

- 하차 전 양쪽 도로 상황을 확인하고 안전하게 내린다.
- 사진은 ① 차량 뒤쪽에서 광각으로 양쪽 차선 → ② 반대편(앞쪽)에서도 광각 → ③ 충돌 부위 클로즈업(내 차·상대 차) → ④ 양쪽 타이어 방향 → ⑤ 스키드마크 순으로 촬영한다.
- 사진으로 증거를 확보했으면 도로 정체를 피해 차량을 이동시켜도 된다.
- 경찰 신고 시 내 블랙박스뿐 아니라 상대 블랙박스, 도로 CCTV, 인근 차량 블랙박스까지 모두 확보해달라고 요청한다.
- 운전자 바꿔치기(무면허·음주 회피)가 의심되면 현장에서 동영상을 찍어두고, 접수 후 상대 보험사에 사고 당시 운전자와 접수된 운전자가 일치하는지 확인한다.

> [!WARN] 현장 소액 현금합의는 병원 진단 없이 서명하면 위험해요. 최소한 병원 진단이나 통증 확인을 거친 뒤에 판단하는 것이 안전해요.`,checklist:["일단 정지 후 비상등 켜고 뒤 차량 확인 → 안전한 곳으로 이동(2차 사고 예방)","부상자 상태 확인, 필요 시 119 신고 (부상자 함부로 이동 금지)","사고 현장 다각도 사진 촬영(광각 전체 → 충돌부위 클로즈업 → 타이어 방향 → 스키드마크)","블랙박스·CCTV·목격자 등 증거 확보","보험사에 즉시 접수 (현장 현금합의 서두르지 않기)","인적 피해 있으면 반드시 경찰 신고, 상대가 12대 중과실이면 반드시 신고","인적 피해 시 상대 인적사항 확보, 몸에 충격 있으면 병원 검사"],sources:[{name:"KB손해보험 (교통사고 대처방법) / 교통사고처리 특례법·도로교통법",url:"http://www.kbinsure.co.kr/CG208030001.ec",type:"official"},{name:"국가법령정보센터 / 한국도로공사 / 대한민국 정책브리핑 (도로교통법 제54조)",url:"https://www.law.go.kr/법령/도로교통법/제54조",type:"official"},{name:"국가법령정보센터 (법제처) / 교통사고처리 특례법 제3조",url:"https://www.law.go.kr/법령/교통사고처리특례법/제3조",type:"official"},{name:"감성대디 Dennis",url:"https://youtu.be/J43GTycOo1U",type:"personal"},{name:"보상과배상TV",url:"https://youtu.be/crjvKVityGI",type:"personal"},{name:"DB손해보험 다이렉트·삼성화재 다이렉트 (교통사고 대처요령·사고접수)",url:"https://m.directdb.co.kr/clam/atclam/trafAccdMngView.do",type:"official"}],flags:["단독출처"],valid_year:2026,car_scope:"generic",source_files:["official/p3-사고현장조치-08.md","official/p3-사고신고의무-15.md","official/p3-12대중과실-10.md","youtube/p3-사고대처순서-01.md","youtube/p3-사고대처순서-02.md","web/p3-가해자대응-15.md"],body_easy_md:`한마디로: 당황하지 말고 '안전 → 사람 → 증거 → 접수·신고' 순서대로 하세요. 다친 사람이 있으면 구호와 경찰 신고는 무조건 해야 해요.

## 사고 나면 이 순서대로 (KB손해보험 공식 순서)

사고가 나면 아래 네 단계를 순서대로 따라가면 돼요.

### 1. 먼저 차를 세우고 안전부터 확보해요
- **비상등부터 켜요.** 뒤차에게 "여기 사고"라고 알리는 가장 빠른 방법이에요.
- 가능하면 안전한 곳으로 차를 옮겨요.

> [!DANGER] 문을 열기 전에 **뒤에서 오는 차가 있는지 먼저 확인하세요.** 뒤차에 치이는 2차 사고가 가장 위험해요.

> [!TIP] 차를 옮겨야 한다면 **옮기기 전에 원래 위치를 사진으로 먼저 찍어 두세요.** 옮기고 나면 3번의 '바퀴 자리 표시'를 할 수 없어요.

- 고속도로나 자동차전용도로라면, 차 뒤쪽에 안전삼각대(고장차 표지)를 세우고, 사람은 가드레일 바깥 같은 안전한 곳으로 피한 다음에 조치를 시작해요.

![안전삼각대와 케이스](/img/safety-triangle-storage.jpg)
*안전삼각대는 출고 때 키트 박스로 함께 지급돼요. 트렁크처럼 꺼내기 쉬운 곳에 보관해 두세요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

### 2. 다친 사람이 있는지 확인해요
- 다친 곳을 살피고 필요하면 응급조치를 해요. 심하면 바로 **119**에 신고하세요.
- 다친 사람을 함부로 옮기면 더 위험할 수 있으니 조심하세요.

### 3. 사고 상황과 증거를 남겨요
- 사고 난 차의 바퀴가 있던 자리, 바닥에 남은 흔적, 떨어진 물건 위치를 스프레이로 표시해요.
- 사고 현장을 여러 각도에서 사진으로 찍어요.
- 사고를 본 사람(목격자)이 있으면 이름과 연락처를 받아 둬요.

> [!CHECK] **상대와 주고받아요 — 이름·연락처·차량번호·보험사.** 서로의 인적사항을 알려주는 것은 법적 의무예요(아래 신고 섹션 참고). 보험으로 처리하면 각자 자기 보험사에 사고를 접수하고 **접수번호를 주고받아요** — 그다음 과실 조정은 보험사끼리 진행해요.

### 4. 보험회사에 접수한 다음 경찰에 신고해요

- 내가 가입한 보험사에 바로 접수해요.
- **다친 사람이 있으면 경찰 신고는 반드시 해요.**
- 달리던 차만 부서진 가벼운 사고(물피사고)이고 위험을 없애는 조치를 마쳤다면, 경찰 신고는 꼭 하지 않아도 돼요(도로교통법 제54조 제2항 단서).

> [!DANGER] **경찰 신고와 '연락처 남기기'는 별개예요.** 신고를 안 해도 되는 경우라도 **상대에게 이름·전화번호를 알려 줄 의무는 그대로 있어요**(도로교통법 제54조 제1항, 주차장에서도 적용). 특히 **주차된 차를 긁었을 때는 신고 면제 대상이 아니고**, 연락처를 안 남기고 가면 **물피도주**로 20만원 이하 벌금·구류·과료를 받을 수 있어요.

> [!CHECK] 사고가 나기 **전에** 해둘 것 — **내가 가입한 보험사의 긴급출동·사고접수 번호를 휴대폰에 저장**해 두세요. 보험증권이나 보험사 앱에서 확인할 수 있어요. (아래 **1588-2504**는 고속도로에서 안전지대까지 무료로 빼주는 한국도로공사 번호로, 보험 접수와는 별개예요.)

> [!WARN] 사고 현장에서 현금으로 바로 합의하지 마세요. 나중에 몸에 후유증이 생기거나 차 손상이 더 발견될 수 있으니, 보험사를 통해 정식으로 처리하는 것이 안전해요.

## 경찰에 꼭 신고해야 하는 경우 (도로교통법 제54조)

사고 처리 순서를 알았다면, 이번엔 언제 경찰에 꼭 신고해야 하는지 좀 더 정확히 볼게요.

- **사람이 다친 사고**: 다친 사람을 돕고(구호), 상대에게 내 이름·전화번호·주소 같은 인적사항을 알려주는 것은 **의무**예요. 경찰 신고도 **의무**예요.
- **차나 물건만 부서진 사고(물피사고)**: 길 위의 위험을 없애고 다른 차가 다시 지나갈 수 있게 정리했다면 경찰 신고를 안 해도 돼요. 정리를 안 했다면 신고해야 해요.
- **다친 사람을 두고 그냥 도망가면(뺑소니)**: 종합보험에 들었든 합의를 했든 상관없이 **형사처벌**을 받고, 더 무거운 특별법(특정범죄가중처벌법) 대상이 될 수 있어요.

## '12대 중과실' — 사람이 다치면 무조건 형사처벌

물피사고인 줄 알았는데 사람이 다쳤다면 이야기가 달라져요. 아래 12가지 중 하나에 해당하면서 사람을 다치게 하면, 상대가 종합보험에 들었거나 합의를 했어도 **형사처벌을 피할 수 없어요.** 이런 경우엔 반드시 경찰에 신고하세요.

1. 신호·지시 위반
2. 중앙선 침범(횡단·유턴·후진 포함)
3. 제한속도보다 시속 20km 넘게 과속
4. 앞지르기·끼어들기 규칙 위반
5. 철길 건널목 통과방법 위반
6. 횡단보도에서 보행자 보호 안 함
7. 무면허 운전
8. 음주·약물 운전
9. 보도(인도) 침범
10. 승객이 떨어지지 않게 할 의무 위반(문 열고 출발 등)
11. 어린이 보호구역(스쿨존)에서 안전운전 의무 위반
12. 화물이 떨어지지 않게 하는 조치 위반

- 이 12가지 말고도 **뺑소니(다친 사람 두고 도주), 음주측정 거부, 음주측정 방해**도 똑같이 형사처벌을 피할 수 없어요.
- 상대가 "내가 다 책임질게"라고 해도 나중에 말이 바뀌는 경우가 많아요. 위 상황이면 **반드시 경찰에 신고**하세요.

## 2차 사고 막기 — 고속도로 '비트박스' (한국도로공사)

앞서 이야기한 2차 사고, 고속도로에서는 훨씬 더 위험해요. 사고·고장이 나면 순서를 이렇게 기억하세요.

1. **비**상등 켜기
2. **트**렁크 열기 (뒤차가 멀리서도 알아보게 하려는 거예요)
3. 차 **밖**(가드레일 바깥)으로 대피하기
4. **스**마트폰으로 신고하기 (한국도로공사 **1588-2504** 또는 **112**)

- 고속도로에서 2차 사고가 나면 사망으로 이어지는 비율이 약 **54.3%**로, 일반 사고(8.4%)의 약 **6.5배**나 돼요. 차 안이나 차 옆에 절대 머물지 말고 안전한 곳으로 빨리 피한 뒤 신고하세요.
- 고장·사고가 나면 한국도로공사 긴급견인서비스(**1588-2504**)로 가까운 안전지대까지 무료로 견인받을 수 있어요.`,order:1},{id:"p3-fault-ratio",phase:3,title:"과실비율 분쟁 대응",summary:["과실비율은 사고에서 누구 잘못이 몇 %인지 나누는 것으로, 손해보험협회의 '자동차사고 과실비율 인정기준'이라는 공식 기준으로 정한다.","손해보험협회 과실비율정보포털(accident.knia.or.kr)에서 내 사고와 같은 유형의 도표를 찾아 기본과실과 가감요소를 직접 확인할 수 있다.","이 기준은 법적 강제력은 없는 참고자료지만 모든 보험사와 분쟁조정기관·법원이 참고하므로, 보험사가 제시한 비율이 납득되지 않으면 이 도표를 근거로 이의를 제기할 수 있다."],body_md:`## 과실비율 인정기준의 성격

- 손해보험협회가 운영하는 '자동차사고 과실비율 분쟁심의위원회' 포털(accident.knia.or.kr)은 국내 유일의 자동차사고 과실비율 적용기준과 분쟁해결 정보를 제공한다.
- '과실비율 인정기준'은 교통사고 발생 시 가해자·피해자의 책임정도를 나타내는 과실비율에 대하여 **법원 판례·법령·분쟁조정사례** 등을 참고해 만든 국내 유일의 공식기준이다.
- 근거: 자동차보험표준약관 별표3(보험업감독업무 시행세칙 별표15) '과실비율의 적용기준'. 기준에 없거나 적용이 곤란하면 판결례를 참작하고, 소송이 제기되면 확정판결에 따른다.
- **효력**: 법적 구속력은 없는 '참고자료'이나, 모든 보험사·공제사 보상실무, 과실비율 분쟁심의위원회 심의기준, 금융감독원 분쟁조정 판단근거로 활용되며 법원도 참고한다. 1976년 최초 제정 후 9회 개정됐다.

## 포털 사용법 (사고 유형 검색 절차)

1. 사고 대분류 선택: **차대차 / 차대사람 / 차대자전거**.
2. 차대차 하위 카테고리: 교차로 사고 / 마주보는 방향 진행차량 상호 간 / 같은 방향 진행차량 상호 간 / 기타 유형(주차장·회전교차로 등) / 자동차 대 이륜차 특수유형.
3. 화면 상단 통합 검색창에 **도표번호(예: 252)** 또는 **키워드(예: 후진)**를 입력하면 자동완성으로 도표를 제시한다.
4. 개별 '도표' 페이지에서 사고 상황 설명·삽화, **기본과실**(예: A0:B100)과 **가감요소**(현저한 과실·중과실 등 수정요소별 가산/감산 %), 관련 법규, 판례·조정사례를 확인한다.
5. 전체 인정기준 PDF 다운로드도 가능하다(개인 참고용).

## 대표 사고 유형별 기본 과실비율 (원문 기준)

| 사고 유형(도표) | 기본과실 |
|---|---|
| 신호위반 — 녹색직진(A) 대 적색직진(B) (차1-1) | **A0 : B100** |
| 신호등 없는 동일 폭 교차로 직진 대 직진, 동시 진입 (차12-1) | A40 : B60 |
| 위 교차로에서 A 선진입 / B 후진입 | A30 : B70 |
| 같은 방향 차로변경 — 후행 직진(A) 대 선행 진로변경(B) (도표 252) | A30 : B70 |
| 주차장 통로 직진(A) 대 주차구역 전진 출차(B) (도표 244) | A30 : B70 |
| 위 주차장에서 B가 후진 출차 | A25 : B75 |
| 정차 후 후진(A) 대 맞은편 중앙선침범 좌회전/유턴(B) (차31-4) | A20 : B80 |

- 기본과실에 **현저한 과실(+10)·중대한 과실(+20)** 등 가감요소가 붙어 최종 비율이 정해진다.
- 차로변경(진로변경) 신호 불이행(+10), 실선 구간 진로변경(+20) 등 항목별 가산이 있으므로, 내 사고 상황에 맞는 가감요소까지 확인해야 한다.

## 분쟁 대응 팁

- 보험사가 제시한 과실비율이 납득되지 않으면, 포털에서 해당 도표의 기본과실·가감요소를 확인해 근거로 이의를 제기한다.
- 도표에 없는 특수 유형은 상단 메뉴의 '비정형 과실비율'에서 확인할 수 있다.
- 표준 도표에 없거나 다툼이 큰 경우 과실비율 분쟁심의위원회 심의나 금융감독원 분쟁조정을 활용할 수 있다.`,field_tips_md:null,checklist:["손해보험협회 과실비율정보포털(accident.knia.or.kr) 접속","차대차/차대사람/차대자전거 대분류에서 내 사고 유형 찾기 또는 키워드 검색","해당 도표의 기본과실과 가감요소(현저한 과실·중과실 등) 확인","보험사 제시 비율과 비교해 납득 안 되면 근거 들어 이의 제기","표준 도표에 없으면 '비정형 과실비율' 확인, 다툼 크면 분쟁심의위원회·금감원 분쟁조정 활용"],sources:[{name:"손해보험협회 과실비율정보포털(자동차사고 과실비율 분쟁심의위원회)",url:"https://accident.knia.or.kr/",type:"official"}],flags:[],valid_year:2026,car_scope:"generic",source_files:["official/p0-과실비율-06.md"],body_easy_md:`한마디로: 사고 잘못 비율은 손해보험협회 공식 기준으로 정해요. 보험사 말이 납득이 안 되면 포털(accident.knia.or.kr)에서 직접 확인해 이의를 제기할 수 있어요.

## 비율이 납득 안 될 때

보험사가 알려준 비율이 이해되지 않을 때, 아래 순서로 대응할 수 있어요.

- 보험사가 제시한 과실비율이 이해되지 않으면, 포털에서 내 사고와 같은 도표의 기본과실·가감요소를 찾아 **근거를 들고 이의를 제기**하세요.
- 도표에 없는 특수한 사고는 포털의 '비정형 과실비율' 메뉴에서 확인할 수 있어요.
- 표준 도표에도 없고 다툼이 크면 **과실비율 분쟁심의위원회 심의**나 **금융감독원 분쟁조정**을 이용할 수 있어요.

## 포털에서 내 사고 유형 찾는 법

이의를 제기하려면 근거가 될 도표부터 찾아야 해요. 포털에서 찾는 순서예요.

1. 사고 종류를 골라요: **차 대 차 / 차 대 사람 / 차 대 자전거**.
2. 차 대 차라면 세부 종류를 골라요: 교차로 사고 / 마주 오는 차끼리 / 같은 방향 차끼리 / 기타(주차장·회전교차로 등) / 오토바이 특수 유형.
3. 화면 위 검색창에 **도표번호(예: 252)**나 **키워드(예: 후진)**를 넣으면 맞는 도표를 자동으로 보여줘요.
4. 도표 페이지에서 사고 상황 그림과 설명, **기본과실**(예: A 0 : B 100 — A와 B는 사고가 난 두 차를 가리켜요), **가감요소**(상황별로 몇 % 더하고 빼는지), 관련 법규, 판례를 확인해요.
5. 전체 기준을 PDF로 내려받을 수도 있어요(개인 참고용).

## 대표 사고 유형별 기본 과실비율

그럼 실제로 많이 부딪히는 사고 유형은 기본과실이 어떻게 정해지는지 표로 볼게요.

| 사고 유형 | 기본과실 |
|---|---|
| 신호위반 — 녹색불 직진(A) 대 빨간불 직진(B) | **A 0 : B 100** |
| 신호등 없는 같은 폭 교차로, 직진끼리 동시 진입 | A 40 : B 60 |
| 위 교차로에서 A가 먼저 / B가 나중에 진입 | A 30 : B 70 |
| 같은 방향에서 뒤 직진차(A) 대 앞에서 차로 바꾼 차(B) | A 30 : B 70 |
| 주차장 통로 직진(A) 대 주차칸에서 전진 출차(B) | A 30 : B 70 |
| 위 주차장에서 B가 후진으로 출차 | A 25 : B 75 |
| 정차 후 후진(A) 대 맞은편 중앙선 침범 좌회전·유턴(B) | A 20 : B 80 |

- 여기에 **가감요소**가 붙어 최종 비율이 정해져요. 안전운전 의무를 크게 어긴 **현저한 과실**은 +10, 신호위반·음주처럼 특히 무거운 **중대한 과실**은 +20이에요.

> [!CHECK] 표의 기본과실이 끝이 아니에요. 차로 바꿀 때 방향지시등을 안 켜면(+10), 실선 구간에서 차로를 바꾸면(+20) 같은 항목별 가산이 있으니, 내 상황에 맞는 가감요소까지 포털에서 확인해야 해요.

## 과실비율 기준이란 무엇인가

- '과실비율'은 사고에서 가해자와 피해자의 잘못이 각각 몇 %인지 나타내는 거예요.
- 손해보험협회가 **법원 판례·법령·분쟁조정 사례**를 참고해 만든 '과실비율 인정기준'이 국내 유일의 공식 기준이에요. 손해보험협회가 운영하는 과실비율정보포털(accident.knia.or.kr)에서 볼 수 있어요. (1976년 처음 만들어 아홉 번 고쳤어요)
- 기준에 없거나 적용이 애매한 사고는 판결 사례를 참고하고, 소송으로 가면 최종 판결을 따라요.

> [!NOTE] 이 기준은 법적으로 반드시 따라야 하는 건 아닌 '참고자료'예요. 하지만 보험사가 보상액을 정할 때, 그리고 분쟁심의위원회나 금융감독원이 다툼을 조정할 때 판단 근거로 쓰이고 법원도 참고하기 때문에 실제로는 매우 중요해요.`,order:6},{id:"p3-battery-discharge",phase:3,title:"배터리 방전 대처 (하이브리드)",summary:["배터리 방전은 하이브리드라도 생길 수 있는데, 큰 주행용 배터리가 아니라 시동을 거는 작은 12V 보조배터리가 나가는 것이라 문이 안 열리고 시동(READY)도 안 걸립니다.","이럴 땐 스마트키 안의 비상키(쇠 열쇠)로 문을 열고, 우리 차(싼타페 MX5 HEV)는 배터리에 바로 연결하지 말고 엔진룸 운전석 쪽 퓨즈박스의 지정 충전단자에 12V로만 점프하되, 혼자 하기 어려우면 보험사 긴급출동을 부르세요.","절대 하지 말 것: 24V 같은 12V가 아닌 전원으로 점프(배터리 터짐·폭발 위험), 우리 하이브리드 차로 다른 차를 점프해 주기(12V 손상), 배터리 단자에 직접 물리기."],body_md:`> **핵심 오해부터**: "하이브리드는 큰 배터리가 있으니 방전 걱정 없다"는 말은 틀렸다. 방전되는 건 시동·전장용 **12V 보조배터리**이며, 하이브리드는 이 배터리 용량이 작은 경우가 많아 더 취약할 수 있다.

## 1. 구조 이해 — 왜 하이브리드도 방전되는가

- **고전압 배터리**: 주행 동력용. 12V가 죽으면 이것도 꺼내 쓸 수 없다.
- **12V 보조배터리**: 시동(READY 진입), 도어락, 스마트키, 블랙박스, 계기판 등 기본 전장용. **방전되는 건 이쪽.**
- 12V가 방전되면 스마트키로 도어를 열 수 없고 READY도 켜지지 않는다.

## 2. 방전 원인

- 장기 미운행(2~4주 방치로도 방전 사례 다수)
- 상시전원 블랙박스 주차녹화(12V를 계속 소모)
- 짧은 주행 반복(DC-DC 컨버터 충전 부족)
- 12V 배터리 자체 열화·불량(초기 증상: 시동 시마다 계기판/트립 초기화)
- 고온·저온

## 3. 예방 — 상시전원 블랙박스 설정

- 저전압 차단(LBP): 하이브리드는 **12.2V 이상**으로 보수적으로 설정.
- 주차 녹화 타이머를 6~24시간으로 제한.
- 3일 이상 미운행 예정이면 블랙박스 전원 코드 분리 또는 주차모드 OFF가 가장 확실.
- 주 1~2회 이상 주행.
- ⚠️ 하이브리드는 자체 12V 보호 로직 때문에 블랙박스 저전압 차단이 제대로 작동하지 않을 수 있어, 블랙박스용 별도 보조배터리 장착이 현실적 해결책으로 거론된다.

## 4. 점프 절차 — 우리 차(싼타페 MX5 HEV): 엔진룸 퓨즈박스 지정 충전단자

> 싼타페 MX5 HEV는 **독립형 12V 배터리** 차량으로, 배터리 단자에 직결하는 방식이 아니라 **엔진룸 운전석 쪽 퓨즈박스 내 지정 충전단자**에 점프한다.

현대 취급설명서 기준 절차:
1. 방전 차량의 모든 전기장치를 끈다.
2. 엔진룸 운전석 쪽 퓨즈박스 커버를 연다.
3. (+) 집게 → 방전 차량의 **(+) 충전단자**
4. (+) 반대쪽 집게 → 구원 차량/점프스타터의 (+) 단자
5. (-) 집게 → 구원 차량/점프스타터의 (-) 단자
6. (-) 반대쪽 집게 → 방전 차량의 **(-) 차체 금속부(접지)** (도장·코팅 안 된 부위)
7. 다른 차량을 이용하면 그 차의 시동을 먼저 걸고 몇 분 대기.
8. 시동 후 분리는 **역순**: (-) 먼저 → (+) 나중.

## 5. 일반 내연기관차와 다른 점 (반드시 지킬 것)

| 항목 | 일반차 | 하이브리드(MX5 HEV) |
|---|---|---|
| 연결 위치 | 배터리 단자에 직결 | **퓨즈박스 내 지정 충전단자** (배터리 직결 아님) |
| 이 차로 남을 점프해주기 | 가능 | **금지** — 12V 배터리 손상 위험 |
| 사용 전원 | 12V | **반드시 12V만** (24V 등 사용 시 배터리 파열·폭발 위험) |
| 시동 후 | 공회전 충전 | **READY 상태로 약 30분** 정차 또는 주행 필요 |

- **"하이브리드 차량으로 점프 스타트 하지 마십시오"** — 현대 취급설명서 명시.
- 점프 스타트는 잘못하면 매우 위험하므로, 가능하면 보험사 긴급출동 전문가에게 맡길 것(제조사 매뉴얼 권고).

## 6. 문이 안 열릴 때 / 점프 후 재설정

- 12V 방전 시 스마트키 안의 **비상키(기계식 키)**로 운전석 도어를 수동 개방한다.
- 점프 후 파워윈도우 오토 업/다운, 선루프, 트립 컴퓨터 누적 데이터 재설정이 필요할 수 있다.

> ※ 실차 확인 권장: 출고 후 ① 엔진룸 퓨즈박스 충전단자 위치, ② 「12V BATT RESET」 버튼 유무를 직접 확인해 사진으로 남길 것. (일부 하이브리드는 고전압 배터리 통합형 12V를 써서 리셋 버튼을 먼저 눌러야 하는 타입이라 조치가 다르다. "만능 리셋 버튼"이라는 커뮤니티 오정보에 주의.)`,field_tips_md:null,checklist:["방전 시 스마트키 안 비상키로 운전석 도어 수동 개방","점프는 배터리 직결 금지 — 엔진룸 운전석 쪽 퓨즈박스 지정 충전단자 사용","(+) 충전단자 먼저, (-)는 차체 금속부 접지, 분리는 역순((-) 먼저)","반드시 12V만 사용, 이 차로 다른 차 점프해주기 금지","점프 후 READY 상태로 30분 이상 정차·주행해 재방전 방지","가능하면 보험사 긴급출동에 맡기기","블랙박스 저전압 차단 12.2V 이상 설정, 장기 미운행 시 전원 분리"],sources:[{name:"현대자동차 취급설명서(ownersmanual.hyundai.com) / 기아 취급설명서 / 제네시스 취급설명서",url:"https://ownersmanual.hyundai.com/full_webhelp/NX4/2025/ko_KR/id30acfcf3cbd.html",type:"official"}],flags:[],valid_year:2026,car_scope:"hybrid",source_files:["web/p2-하이브리드방전-10.md"],body_easy_md:`한마디로: 하이브리드도 시동용 12V 작은 배터리는 방전돼요. 문은 스마트키 속 비상키로 열고, 점프는 반드시 지정 충전단자에 12V로만 하세요. 어려우면 보험사 긴급출동을 부르세요.

## 문이 안 열릴 때 (가장 먼저)

방전되면 스마트키로 문이 안 열려요. 이때 가장 먼저 할 일이에요.

1. 스마트키를 열면 안에 **비상키(쇠로 된 열쇠)**가 들어 있어요.
2. 이 비상키로 운전석 문을 손으로 열어요.

## 왜 하이브리드도 방전되나요?

### 배터리가 두 개예요

- **큰 배터리(고전압 배터리)**: 차를 굴러가게 하는 힘이에요. 이건 잘 안 나가요.
- **작은 배터리(12V 보조배터리)**: 시동 켜기, 문 잠금, 스마트키, 블랙박스, 계기판을 담당. **방전되는 건 바로 이 작은 배터리예요.**

작은 배터리가 나가면 스마트키로 문이 안 열리고, 시동(READY)도 안 켜져요. "하이브리드는 큰 배터리가 있으니 방전 걱정 없다"는 말은 틀렸어요. 오히려 이 작은 배터리가 더 작아서 약할 수 있어요.

### 왜 방전되나요?

- 차를 2~4주 정도 오래 세워둠
- 블랙박스 주차 녹화(항상 전기를 씀)
- 아주 짧은 거리만 자주 운전(충전이 부족)
- 배터리 자체가 낡음(시동 걸 때마다 계기판이나 주행거리가 초기화되면 배터리가 낡았다는 신호)
- 너무 덥거나 너무 추운 날씨

## 점프(시동 살리기) 절차 — 우리 차(싼타페 MX5 HEV)

문을 열었다면, 이제 시동을 살릴 차례예요.

> [!DANGER] 싼타페 MX5 HEV는 배터리에 점프 케이블 집게를 바로 물리는 방식이 아니라, 엔진룸 운전석 쪽 퓨즈박스 안의 지정 충전단자에 연결해야 해요. 혼자 하기 어렵거나 자신 없으면 무리하지 말고 보험사 긴급출동을 부르세요 — 잘못하면 매우 위험하고, 제조사도 전문가에게 맡기라고 해요.

![엔진룸 충전 단자 점프 연결 순서](/img/jump-start-terminals.jpg)
*하이브리드는 트렁크가 아니라 **엔진룸의 충전 단자**에 연결해요. 숫자 순서(+ → + → − → −)대로 물려요. (출처: 현대 싼타페 MX5 HEV 취급설명서)*

직접 한다면 순서:

1. 방전된 차의 전기장치(에어컨, 라이트 등)를 모두 꺼요.
2. 엔진룸 운전석 쪽 퓨즈박스 커버를 열어요.
3. 빨간(+) 집게를 **우리 차의 (+) 충전단자**에 물려요.
4. 반대쪽 빨간(+) 집게를 도와주는 차(또는 점프스타터)의 (+)에 물려요.
5. 검정(−) 집게를 도와주는 차(또는 점프스타터)의 (−)에 물려요.
6. 반대쪽 검정(−) 집게를 **우리 차의 페인트 안 칠해진 금속 부분(차체)**에 물려요. (배터리 (−)가 아니라 금속 몸체예요)
7. 다른 차로 도움받으면 그 차 시동을 먼저 걸고 몇 분 기다려요.
8. 이제 **우리 차** 차례예요. 브레이크 페달을 밟은 채로 시동 버튼을 눌러요.
8. 시동이 걸리면 **거꾸로(역순) 분리**합니다: 검정(−) 먼저 → 빨간(+) 나중.

## ⚠️ 절대 하지 말 것

점프하기 전에 아래 세 가지는 꼭 피하세요.

| 하지 말 것 | 이유 |
|---|---|
| 12V가 아닌 전원(24V 등)으로 점프 | 배터리가 터지거나 폭발할 수 있음 |
| 우리 하이브리드 차로 다른 차를 점프해 주기 | 우리 차 12V 배터리가 망가짐 (제조사 금지) |
| 배터리 단자에 집게 바로 물리기 | 우리 차는 퓨즈박스 지정 충전단자를 써야 함 |

## 점프한 다음에

무사히 시동을 걸었다면, 여기서 끝이 아니에요.

- 시동이 걸린 뒤 바로 끄면 또 방전돼요. **READY(시동) 상태로 약 30분 이상 세워두거나 운전**하세요.
- 창문 자동 올림/내림, 선루프, 주행거리 기록이 초기화됐을 수 있어 다시 설정해야 할 수도 있어요.

## 미리 예방하기

이제 애초에 방전이 안 생기게 만드는 방법이에요.

- 블랙박스 저전압 차단(배터리 전압이 정해둔 값 밑으로 내려가면 블랙박스가 스스로 꺼지는 기능) 값을 **12.2V 이상**으로 설정.
- 주차 녹화 시간을 6~24시간으로 제한.
- 3일 이상 안 탈 거면 블랙박스 전원을 빼거나 주차모드를 끄는 게 가장 확실.
- 일주일에 1~2번 이상은 운전.

> [!CHECK] 미리 확인해 두면 좋아요: 출고 후 ① 엔진룸 퓨즈박스의 충전단자 위치, ② 「12V BATT RESET」 버튼이 있는지 직접 보고 사진을 찍어 두세요. 일부 하이브리드는 이 리셋 버튼을 먼저 눌러야 하는 타입이라 방법이 다르니, 커뮤니티의 "만능 리셋 버튼" 같은 잘못된 정보에 주의하세요.`,order:3},{id:"p3-tire-puncture",phase:3,title:"타이어 펑크 대처",summary:["타이어 펑크는 못이나 이물질로 타이어에 구멍이 나 바람이 빠지는 것으로, 우리 차(싼타페 MX5 HEV)에는 갈아 끼울 예비타이어가 없고 대신 응급처치키트(TMK, 리페어킷)가 실려 있습니다.","타이어가 완전히 주저앉았으면 무리해서 운전하지 말고, 대부분 무료인 보험사 긴급출동을 불러 처리하는 것이 가장 안전하고 편합니다.","절대 하지 말 것: 타이어 옆면(사이드월)이나 어깨(숄더)가 찢어진 것을 지렁이(플러그)로 때워서 계속 타는 것 — 주행 중 터질 수 있어 이런 손상은 반드시 타이어를 교체해야 합니다."],body_md:`> **우리 차 특이사항 (필독)**: 싼타페 MX5 HEV는 **예비타이어(스페어)가 없고 타이어 응급처치키트(TMK, 리페어킷)가 제공되는 차량**이다. 따라서 아래에서 다루는 '예비타이어로 교체' 절차는 우리 차에는 해당하지 않는다. 우리 차는 **리페어킷 응급처치 + 보험사 긴급출동**을 기준으로 대응한다.

## 1. 펑크 발견 시 대처 절차

1. 타이어가 완전히 주저앉은 것을 확인했다면 **무리해서 직접 운전하지 않는다.**
2. 가입한 **보험사 긴급출동 서비스**를 부른다. 대부분 기본 제공되어 별도 비용 없이 무료로 이용할 수 있다.
3. 출동 기사가 타이어 상태를 확인해 **현장 응급조치(펑크 수리)** 가능 여부 또는 정비소 이동 필요 여부를 판단한다.
4. 정비소에서 펑크 부위와 손상 정도를 다시 점검한 뒤 수리 또는 교체를 최종 결정한다.

## 2. 펑크 수리(지렁이/플러그) — 부위에 따라 안전 여부가 갈린다

- **트레드(노면 접지면) 부위 펑크**: 구멍에 고무 플러그(속칭 '지렁이')를 꽂아 메우는 응급 수리가 가능하다. 제대로 시공되면 임시방편이 아니라 **타이어 수명이 다할 때까지 정상적으로 사용**할 수 있다(전문가 설명 기준). 구멍이 여러 군데여도 모두 트레드 부위면 각각 메워 사용 가능.
- **사이드월(옆면)·숄더(어깨) 부위 펑크**: 플러그로 때우면 **절대 안 된다.** 주행 중 타이어가 터질 위험이 크므로 타이어 교체가 필요하다.
- 타이어를 탈거해 안쪽에서 패치를 대는 방식은 비용이 조금 더 들며, 외부에서 처리 가능하면 내부 패치까지는 필요 없다는 언급도 있다(정비업계에서는 플러그+패치 병행을 권장하는 경우도 있어 정비소 판단을 따를 것).

## 3. (참고) 예비타이어가 있는 차량의 경우

> 우리 차에는 해당하지 않으나 일반 지식으로 알아둔다. 예비타이어(스페어/도넛)는 규격·재질이 달라 좌우 쏠림·고속 위험이 있으므로, 장착했다면 저속으로 가까운 정비소까지만 이동한 뒤 최대한 빨리 정식 타이어로 교체해야 한다.

## 4. 평소 타이어 관리

- 공기압이 부족한 채 계속 주행하면 타이어뿐 아니라 휠까지 손상될 수 있다.
- 마모 상태를 봐가며 앞뒤 교체 또는 대각선 로테이션을 주기적으로 하면 더 균일하게 오래 쓸 수 있다.`,field_tips_md:`## 실전 경험담
- (연남동조카) 주행 후 돌아왔더니 뒷타이어가 완전히 주저앉은 경우, 무리해서 운전하지 말고 보험사 긴급출동을 부르는 것이 가장 효율적이었다. 못에 찔린 펑크는 현장에서 플러그(지렁이)로 응급 수리가 가능했다.
- (박병일의 명장본색) 지렁이(플러그) 수리는 **트레드 부위에 한해서만 안전**하며, 이 경우 타이어 수명이 다할 때까지 계속 타도 무방하다. **사이드월·숄더 부위 펑크는 플러그 수리 대상이 아니며 반드시 교체**한다. 비용 아끼려고 옆면까지 플러그로 때우는 것은 매우 위험하다.

두 사례 모두 실제로 참고하기 좋지만, 아래 한 가지는 감안해서 보세요.

> ※ 위 영상들은 예비타이어(스페어)가 있는 차량 기준 설명이 섞여 있으나, 우리 차(MX5 HEV)는 리페어킷 차량이므로 스페어 교체가 아닌 긴급출동·리페어킷 기준으로 참고할 것.

## 타이어, 평소에 이렇게 관리하고 이렇게 대응하세요

### 제조일자부터 확인하세요 — 안 닳았어도 5년 지나면 교체 대상

타이어 옆면에는 숫자가 빼곡히 적혀 있는데, 그중 **테두리(타원) 안에 들어간 4자리 숫자**가 제조일자예요. 앞 두 자리가 주차, 뒤 두 자리가 연도예요. 예를 들어 \`3219\`라면 2019년 32주차에 만든 거예요.

![타이어 옆면의 규격 표기와 DOT 넘버 위치](/img/tire-sidewall-spec.jpg)
*옆면에서 규격(205/55R16 …)과 DOT 넘버를 어디서 읽는지 보여줘요. (출처: 넥센타이어)*

> [!TIP]
> 오늘 내 차 타이어 옆면에서 이 4자리 숫자부터 찾아보세요. 마모가 얼마 안 됐어도 **생산 후 5년이 지났다면 교체를 고려**해야 해요. 타이어는 고무라서 시간이 지나면 자외선·습기·온도 변화로 저절로 굳어요. 그래서 달린 거리와 상관없이 낡아 가요.

> [!WARN]
> 지하주차장보다 **실외(노상) 주차 위주로 타는 차**는 자외선을 많이 받아 같은 5년이라도 더 빨리 낡아요. 야외 주차가 많다면 5년이 되기 전이라도 상태를 더 자주 확인하세요.

### 교체 시기 — 마모 한계선과 '50% 룰'

타이어 표면 홈(배수로) 안쪽에 작게 튀어나온 부분이 있는데, 이게 **마모 한계선**이에요.

![타이어 마모 한계선(TWI) 위치](/img/tire-wear-indicator.webp)
*홈 안의 볼록한 부분이 마모 한계선이고, 옆면의 삼각형(▲) 표시가 그 위치를 알려줘요. (출처: 미쉐린)* 홈이 닳아서 표면과 이 한계선이 같은 높이가 되면 반드시 교체해야 하고, 법적으로도 한계선 아래까지 닳은 타이어로 달리면 처벌 대상이 될 수 있어요.

한계선까지 다 쓰고 바꿀지, 미리 바꿀지는 정답이 없는 문제지만, 영상에서는 **절반쯤 닳았을 때부터 교체를 계획**하라고 권해요. 한꺼번에 바꾸려면 부담이 크니(20인치 기준 네 짝 100만~150만 원, 프리미엄 브랜드는 200만 원대) 미리 예산을 잡아 두라는 뜻이에요.

### 사계절 / 서머 / 윈터 — 계절별 타이어가 따로 있어요

- **사계절 타이어**: 대부분의 신차 기본 장착 타이어. 여름·겨울 모두 무난하게 쓰도록 타협한 제품.
- **서머 타이어**: 여름 성능(접지력·코너링) 특화. 대신 **영상 7도 이하로 내려가면 고무가 급격히 굳어 제 성능을 못 냄** — 강원도·산간 등 겨울에 영하로 자주 내려가는 지역에서 서머 타이어를 계속 쓰면 위험해요.
- **윈터 타이어**: 눈길·빙판 제동력용으로 고무 배합과 트레드 패턴이 다름. 폭설 지역 거주자는 별도로 준비하는 걸 권장.

### 편마모 — 조용히 돈 새는 원인

편마모는 타이어가 균일하게 안 닳고 **한쪽(바깥쪽 또는 안쪽)만 빨리 닳는 현상**으로, 대부분 얼라인먼트(바퀴 정렬)가 틀어져서 생겨요.

> [!DANGER]
> 편마모를 방치하면 정상 상태에서 4만~5만 km는 버틸 타이어가 **1만 km도 못 가 교체**해야 해요. 100만 원 넘게 주고 새로 끼운 타이어를 몇 달 만에 또 바꾸는 셈이니, 발견하면 바로 손보는 게 이득이에요.

**확인 방법(직접 해볼 수 있음)**
1. 직선 도로에서 핸들을 살짝 놓아 봤을 때 차가 한쪽으로 쏠리면 얼라인먼트가 틀어졌을 가능성이 높아요.
2. 앞바퀴는 핸들을 한쪽 끝까지 돌리면 타이어 안쪽 면이 보여요. 바깥쪽과 안쪽이 닳은 정도가 눈에 띄게 다르면 편마모가 진행 중이에요.

편마모가 확인되면 얼라인먼트 교정을 받으세요. 비용은 차종에 따라 다르지만 보통 **5만~10만 원** 수준이라 타이어를 다시 사는 것보다 훨씬 싸요.

### 공기압 — 너무 낮아도, 너무 높아도 편마모

적정 공기압은 **운전석 문을 열면 문 안쪽이나 문틀에 붙은 스티커**에 앞바퀴/뒷바퀴 수치가 적혀 있어요. **우리 차(싼타페 MX5 HEV)는 앞뒤 모두 35 psi**예요.

- 공기압을 1~2 정도 낮추는 건 승차감 목적으로 크게 문제없지만, **너무 낮추면 타이어 양쪽 가장자리에 힘이 몰려** 가장자리부터 닳아요.
- 반대로 **너무 높이면 가운데만 노면에 닿아** 접지 면적이 줄고, 브레이크가 덜 듣고, 가운데만 닳고, 노면 소음도 커져요.

> [!TIP]
> 계절이 바뀌면 기온 때문에 공기압이 달라져요(여름에 맞춰 둔 공기압이 겨울엔 낮아져 있을 수 있어요). **한 달에 한 번 정도, 셀프 주유소의 공기압 충전기**로 점검하는 습관을 들이세요.

### 옆면 손상·균열도 확인하세요

요즘 타이어는 휠 보호를 위해 옆면이 살짝 바깥으로 튀어나와 있어요. 연석에 살짝 긁히는 정도는 괜찮지만, **깊이 파여 휠 안쪽까지 상했다면** 교체해야 해요.

또한 고무가 노화되면 표면에 거미줄 같은 균열(크랙)이 생기는데, 이런 타이어는 터질 위험이 있으니 발견하면 바로 교체를 검토하세요.

### 정비소 바가지 피하는 법 — "아반떼 타이어 얼마예요"라고 묻지 마세요

같은 차종이라도 연식에 따라 15/16/17인치 등 타이어 규격이 다르고, 인치가 커질수록 가격도 올라가요. "아반떼 타이어 얼마예요" 식으로 물으면 정확한 가격을 받기 어렵고, 상대가 대충 부르기도 쉬워요.

> [!TIP]
> 타이어 옆면에 적힌 **\`195/65R15\`** 같은 규격 표기를 확인하세요. 195는 타이어 폭(mm), 65는 편평비(옆면 높이 비율), R15는 15인치 휠용이라는 뜻이에요. 이 규격과 브랜드를 정확히 말하며 물어보세요. 예: "195 65 넥센 타이어 얼마예요?" — 이렇게 물으면 대충 부르기 어려워지고 정확한 가격을 듣기 쉬워요.

방문 전에 **포털 사이트에서 해당 규격의 브랜드별 시세를 미리 검색**해두면 터무니없는 가격을 거를 수 있어요. 실제로 5만 원짜리 타이어를 10만 원에 파는 사례도 있다고 하니, "타이어는 원래 비싸다"고 그냥 넘기지 말고 시세를 알고 가는 게 좋아요.

### 습관 만들기 — 주 1~2회 육안 점검

매일 볼 필요는 없지만, 1~2주에 한 번 차에 타기 전 네 바퀴를 한 바퀴 둘러보는 습관을 들이세요.

- 타이어가 찌그러져 보이면 → 공기압 부족
- 옆면에 뭔가 박혀 있으면 → 펑크
- 표면이 울퉁불퉁해 보이면 → 편마모 진행 중

> [!TIP]
> 타이어는 차 부품 중 유일하게 노면에 직접 닿아요. 브레이크·핸들·가속이 모두 이 네 개의 접지면에 달려 있으니, 미리 확인해 두는 쪽이 사고 난 뒤의 비용(수리비·보험료 할증·치료비)보다 훨씬 싸요.`,checklist:["타이어가 주저앉으면 무리해서 운전하지 않기","보험사 긴급출동 서비스 호출(대부분 무료)","우리 차는 스페어 없음 — 리페어킷 응급처치 + 긴급출동 기준으로 대응","펑크 부위 확인: 트레드면이면 플러그 수리 가능, 사이드월·숄더면 교체 필요","정비소에서 손상 정도 재점검 후 수리/교체 결정","평소 공기압 점검, 주기적 로테이션"],sources:[{name:"연남동조카",url:"https://youtu.be/QbbNmaVACYA",type:"personal"},{name:"박병일의 명장본색",url:"https://youtu.be/mAjdLICN-S0",type:"personal"},{name:"현대 취급설명서 — 타이어 응급처치키트(TMK) [official 확보]",url:"https://ownersmanual.hyundai.com/full_webhelp/SX2/2025/ko_KR/id3a46fa79f2d.html",type:"official"},{name:"KBS News — 타이어 파열 시 급제동 위험",url:"https://youtu.be/cLrwpVKZ_PA",type:"media"},{name:"현대 취급설명서 — 싼타페 MX5HEV 2026 TMK [official, MX5 대조완료]",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR/id3a46fa79f2d.html",type:"official"},{name:"자동차금고 (유튜브·타이어 교체시기/점검/바가지)",url:"https://youtu.be/SicNJQNIrO8",type:"personal"},{name:"연합뉴스TV (타이어 펑크 급제동 전복위험)",url:"https://youtu.be/GOiAciQS-So",type:"media"}],flags:[],valid_year:null,car_scope:"mx5-hev",source_files:["youtube/p3-타이어펑크대처-01.md","youtube/p3-타이어펑크대처-02.md","web/first-car-guide-source-verification-2026-07-25.md","youtube/p3-타이어펑크-고속-01.md","official/p3-타이어펑크-TMK-MX5HEV-18.md","youtube/p3-타이어관리-02.md"],body_easy_md:`한마디로: 타이어가 주저앉으면 무리해서 운전하지 말고 보험사 긴급출동(대부분 무료)을 부르세요. 우리 차는 예비타이어가 없어 응급키트로 대응해요. 옆면 손상은 수리하면 안 되고 무조건 교체예요.

## ⚠️ 우리 차 먼저 알아두기

싼타페 MX5 HEV는 **갈아 끼울 예비타이어(스페어)가 없어요.** 대신 트렁크에 **타이어 응급처치키트(TMK, 리페어킷)**가 있어요. 그래서 "예비타이어로 교체"는 우리 차에 해당하지 않고, **응급키트 + 보험사 긴급출동**으로 대응해요.

![타이어 응급처치키트 구성품](/img/tmk-parts.jpg)
*키트는 이렇게 생겼어요 — 실런트 용기, 주입 호스, 컴프레서(타이어에 공기를 넣는 기계), 전원 케이블이 한 세트예요. (출처: 현대 싼타페 MX5 HEV 취급설명서)*

## 1. 펑크 났을 때 순서

그럼 실제로 펑크가 났을 때 어떤 순서로 움직이면 되는지 볼게요.

> [!DANGER] 타이어가 완전히 주저앉았다면 무리해서 그대로 운전하지 마세요. 계속 달리면 휠까지 더 크게 망가지고 위험해요. 또 **주행 중 갑자기 '펑' 터졌을 때는 급제동·급하게 핸들을 꺾지 마세요.** 핸들을 두 손으로 꽉 잡고 방향을 유지하며 **서서히** 속도를 줄여 안전한 갓길에 세우는 게 핵심이에요(급제동하면 차가 돌아 대형사고로 이어질 수 있어요).

1. 가입한 **보험사 긴급출동 서비스**를 불러요. 대부분 기본으로 들어 있어 **무료**예요.
2. 출동한 기사님이 타이어를 보고 **그 자리에서 응급수리**가 되는지, 아니면 정비소로 옮겨야 하는지 판단해요.
3. 정비소에서 다시 정확히 살펴본 뒤 수리할지 교체할지 최종 결정해요.

### 응급키트(TMK)를 직접 쓸 때 — 매뉴얼 기준

긴급출동을 못 부르는 상황이면 트렁크의 응급키트(실런트+컴프레서)로 직접 임시 처치를 할 수 있어요. 현대 취급설명서 기준이에요.

- **바닥면(트레드)이 못 등으로 뚫린 경우에만** 사용해요. **손상 크기가 4mm를 넘으면** 수리하지 말고 **견인**하세요.
- 박힌 못·이물질은 **임의로 빼지 마세요**(빼면 실런트가 새요).
- 평탄하고 단단한 곳에 **주차 브레이크를 걸고**, **시동을 켠 상태**로 작업해요(시동을 끄면 배터리가 방전돼요).
- 우리 차(하이브리드)는 응급키트 전원을 12V 소켓이 아니라 **엔진룸 퓨즈박스 안쪽 충전 단자(빨강 +, 검정 −)**에 연결해요(배터리 방전 때 점프하는 단자와 같은 곳이에요).
- 공기압이 **29psi(약 200kPa) 밑이면 아예 주행하지 말고 견인**하세요.
- 실런트를 주입하고 컴프레서로 공기압을 채운 뒤, **즉시 20km/h 이상으로 7~10km(약 10분) 주행**해야 실런트가 안쪽에 고르게 발려 구멍이 막혀요.

![핸들에 붙이는 80km/h 속도 제한 라벨](/img/tmk-speed-label.jpg)
*키트에 든 속도 제한 라벨을 이렇게 핸들에 붙여 두고 지키라는 뜻이에요. (출처: 현대 싼타페 MX5 HEV 취급설명서)*

> [!WARN] 응급 처치 뒤에는 **80km/h 이하**로만 달리고, **200km 안에** 하이테크센터·블루핸즈에서 타이어를 점검·교체하세요. 실런트 용기·호스는 **1회용**이라 쓴 뒤엔 새로 사둬야 해요. TPMS(공기압 경고등)에 실런트가 묻으면 오작동할 수 있으니, 정비소에 갈 때 "응급키트를 썼다"고 꼭 말해 주세요.

## 2. 펑크 수리 — 위치에 따라 돼요 / 안 돼요

정비소로 옮겨졌다면, 이제 수리가 가능할지를 가르는 기준을 볼게요. 타이어에서 어디에 구멍이 났는지가 아주 중요해요.

- ✅ **바닥에 닿는 부분(트레드)에 난 구멍**: 고무 플러그(속칭 '지렁이')로 메울 수 있어요. 제대로 시공하면 임시가 아니라 **타이어를 다 쓸 때까지 정상 사용**할 수 있어요. 구멍이 여러 개여도 모두 바닥면이면 각각 메워 쓸 수 있어요.

> [!WARN] 옆면(사이드월)이나 어깨(숄더)에 난 구멍은 절대 지렁이로 때우면 안 돼요. 달리다가 타이어가 터질 위험이 커서, 이 경우는 반드시 **타이어를 교체**해야 해요.

- 타이어를 빼서 안쪽에 패치(구멍을 덮는 고무 조각)를 붙이는 방법도 있는데, 비용이 조금 더 들어요. 바깥에서 메우면 충분하다는 의견도 있고 플러그와 패치를 함께 하라는 의견도 있으니, **정비소 판단을 따르세요.**

## 3. (참고) 예비타이어가 있는 다른 차라면

우리 차 얘기는 여기까지고, 참고로 예비타이어가 있는 차라면 사정이 조금 다르니 상식으로만 알아두세요.

> 예비타이어(도넛 타이어)는 크기·재질이 달라 차가 한쪽으로 쏠리고 고속에서 위험해요. 끼웠다면 **천천히 가까운 정비소까지만** 가서 최대한 빨리 정식 타이어로 바꿔야 해요.

## 4. 평소 타이어 관리

펑크 대처는 여기까지고, 이제 평소에 타이어를 어떻게 관리하면 오래 쓸 수 있는지도 짚어볼게요.

- 공기압이 부족한 채로 계속 달리면 타이어뿐 아니라 휠(바퀴 금속)까지 상할 수 있어요.
- 마모 상태를 보며 앞뒤 또는 대각선으로 위치를 바꿔주면(로테이션) 더 고르게 오래 써요.`,order:4},{id:"p3-parking-accident",phase:3,title:"주차 중 사고·문콕 대처",summary:["주차된 차를 긁거나 문으로 찍고(문콕) 연락처 없이 그냥 가면 '물피도주'라는 범죄가 된다는 내용이다.","내가 냈으면 즉시 연락처(이름·전화번호)를 남기고, 내 차가 당했으면 사진·블랙박스·CCTV로 증거를 모아 경찰에 신고한다.","보험 처리를 해도 도주하면 형사처벌은 따로 남고(범칙금 12만원·벌점 15점에 20만원 이하 벌금·구류), 소액 사고라도 '200만원 이하 무할증'만 믿지 말고 보험료 3년치 인상분과 수리비를 비교해 처리 방법을 정한다."],body_md:`## 1. 물피도주(주차 뺑소니) — 연락처를 안 남기면 형사처벌

- **근거·처벌**: 주·정차된 차량만 손괴한 것이 분명한 경우 도로교통법 제54조 제1항 위반 → 제156조 제10호. **20만원 이하 벌금·구류·과료** + 승용차 기준 **범칙금 12만원 + 벌점 15점**.
- **성립요건 3가지**: ① 재물 손괴 발생, ② 운전자가 사고 사실을 인식(또는 인지 가능성이 있었음), ③ 인적사항 제공 등 조치 없이 현장 이탈.
- **문 열다 낸 '문콕'도 포함**된다. 고의·과실과 무관하게 손해가 발생하면 사고로 인정된다. 지상·지하 주차장 모두 해당.
- ⚠️ **핵심 오해**: "보험 처리하면 형사처벌도 없어진다"는 틀리다. 사고 후 미조치는 보험처리와 별개의 교통범죄로, 형사책임이 남는다.
- **주의**: 주차 차량 안에 사람이 있었던 사실이 나중에 확인되면 죄명이 인적 피해 뺑소니(특정범죄가중처벌법)로 바뀔 수 있다.
- **결론**: 내가 냈다면 **즉시 연락처(성명·전화번호)를 남기는 것이 유일한 안전지대**다. 이미 떠났다면 자진신고 + 합의가 소송 대응보다 압도적으로 유리하다.

## 2. 내 차가 당했을 때 (피해자)

- 피해 부위를 여러 각도에서 촬영하고, 가해 차량의 도료(페인트 자국)·차체 높이 등 흔적을 확보한다.
- 블랙박스·주차장 CCTV 영상을 확보한다(상당수 사건에서 가해자 특정됨).
- 경찰에 신고 접수한다.
- 가해자를 못 찾으면 **자차 담보의 '가해자불명 사고'**로 처리한다.
  - 손해액 30만원 이하 → 1년 할인유예 / 30만원 초과~50만원 이하 → 3년 할인유예.
- 문콕(주차된 차 도어 vs 도어)은 별도 과실비율 도표가 없고 **가해 사실 입증 자체가 쟁점**이 되는 경우가 많다. 손해액 대비 소송 실익이 적을 수 있다.

## 3. 주차장 사고 과실비율 (민사)

- 주차장은 도로교통법상 '도로'가 아니므로 형사처벌(12대 중과실) 대상은 아니지만, 민사 과실비율은 따진다.
- **기본 도표 차51-1(통로주행 대 주차구역 출차)**: 통로 주행차 **30%** : 출차차 **70%**. 지상·지하 모두 적용.
- 가감요소:
  - 출차차가 **후진 출차**면 +5% 가산(전진 대비 시야 제한).
  - 출차차가 차체를 통로에 일부 노출하고 대기 중이었으면 -10% 감산.
  - 출차차가 등화·경적 없이 갑자기 진출하고 통로차가 급제동해도 피할 수 없는 근거리면 통로차 과실 0(출차차 일방과실).
  - 현저한 과실(전방주시 위반·휴대전화 사용 등)·중대한 과실(음주·무면허·졸음 등)은 해당 측 가산.
- 관련 도표: 차51-2(주차구획 선행진입 개시 40 : 통로진행 추월 60). 지하주차장 교차로 직진 대 직진은 별도 도표가 없어 일반 사거리 교차로 기준을 준용.
- ※ 달리던 차와 문이 부딪힌 **개문(문 열림) 사고**(문 연 차 80 : 주행차 20)는 주차된 차끼리의 **문콕과는 다른 유형**이다.

## 4. 경미손상 수리기준

- 2017년 자동차보험 표준약관에 도입. 범퍼 등 외장부품의 미미한 손상까지 무조건 교환하던 관행 개선 목적.
- 손상 유형: 제1~3유형(코팅막·도장막 벗겨짐, 소재 일부 손상이나 구멍 없음)은 **복원수리 대상**, 제4유형(복원 불가)만 교환 대상.
- 내 차가 살짝 긁혀 상대 보험으로 처리할 때 정비소가 '교환'을 제시해도 제1~3유형이면 복원수리 대상이다.
- 다만 2024년 기준 현장 적용률이 4%에 그쳐 실제로는 대부분 교환으로 처리된다는 점을 감안한다.

## 5. 대물 소액사고 보험료 할증 — '200만원 이하 무할증'은 절반만 사실

- 할증은 **두 축**이 동시에 작동한다.
  - **축1 — 사고내용별 할인할증등급**: 할증기준금액(가입 시 50/100/150/200만원 중 선택, 통상 200만원) 이하 물적사고 1건은 0.5점으로 등급은 유지되지만 **3년간 할인 유예**. 기준금액 초과 또는 이하 2건이면 1점 → 1등급 할증(약 7~12% 인상).
  - **축2 — 사고건수별 특성요율**: **지급 보험금 금액과 무관하게 '사고 1건'으로 집계**. 최소 6%~최대 60% 할증. 동시에 **직전 3년 무사고 할인(약 9~10%)이 사라진다.**
- 예: 연 보험료 50만원, 3년 무사고, 기준금액 200만원 설정에서 지급보험금 100만원 사고 1건 → 등급 변동은 없지만 무사고 할인 소멸 + 사고건수 할증으로 **약 8.3만원(16.6%) 인상**.
- **환입(還入)제도**: 이미 지급된 보험금을 보험사에 다시 납입하고 사고 처리를 취소해 할증 평가에서 제외할 수 있다. **단, 계약 갱신 전에 마쳐야 하고 갱신 후에는 정정되지 않는다.** 환입 전후 예상 보험료를 비교해 결정할 것.
- **보험 처리 vs 자비 처리 판단**: A(보험) = 자기부담금 + 향후 3년 보험료 증가분 총액, B(자비) = 수리비 전액. A < B면 보험 처리, A > B면 자비 처리.
- 손해보험협회 자동차보험 종합포털(carinfo.knia.or.kr)에서 갱신 전에 사고 이력·누적 점수·할증 여부를 조회할 수 있다.

## 가해자 시점 현장 대응 (사이클 7 보강)

- **차주가 현장에 있을 때**: 즉시 정차 → 피해 부위 공동 확인·사진 → 인적사항 교환(이름·연락처·차량번호·보험사, 도로교통법 제54조 의무) → 보험 처리 시 본인 보험사 콜센터 사고 접수 후 접수번호를 상대에게 전달. 접수 시 차량번호·사고 일시·장소·내용이 필요하다.
- **차주가 없을 때**: 전화번호를 적어 차량의 잘 보이는 곳에 남기고, 남긴 메모와 현장을 촬영해 조치 증거를 확보한다. 조치 없이 이탈하면 물피도주 성립.
- **현장 주의**: 즉석 현금 합의를 서두르지 않는다(보험사 공식 대처요령: "보험사를 통해 처리하는 것이 가장 유리"). 상대의 근거 없는 과다 배상 요구에는 실제 손해 범위 확인이 우선(로톡 상담사례).
- 출처: DB손해보험 다이렉트 교통사고 대처요령 / 삼성화재 다이렉트 사고접수 안내 / 로톡 — \`web/p3-가해자대응-15.md\`(verified, 사이클 7)`,field_tips_md:`## 실전 경험담

실제로 이런 상황을 겪은 분들의 이야기예요.

- (HeyMan) 아파트 주차장 CCTV는 다른 사람 개인정보가 함께 찍힌다는 이유로 관리실이 열람을 거부하는 경우가 많아, 실무적으로는 경찰서에 사고 사진·제보 영상을 접수해 가해자 인적사항을 전달받는 방식이 순조로웠다. 소액 손상(대략 50만원 안팎 기준)은 보험처리 시 렌트비·수리비 합산이 오히려 커질 수 있어, 현금 합의가 간단할 때도 있다.
- (도로왕 김지훈 변호사) 주차장 출차 사고는 통상 출차차 70 : 통로차 30이 기본이며, 급가속 출차·통로차 화살표 위반 등에 따라 ±10%p씩 가감된다. "차 빼는 쪽이 무조건 조심"이지만 실제로는 100:0이 나오기 어려우니 양쪽 다 방어운전이 중요하다.
- (MBCNEWS) 문콕도 예전엔 문짝 전체 교체를 요구했지만, 경미손상 기준 확대로 문짝·펜더·트렁크리드 등도 경미한 흠집이면 복원수리만 하도록 바뀌었다.

> ※ 위 유튜브 정보 중 과실비율·할증 수치·경미손상 기준은 공식 자료(과실비율정보포털·손해보험협회)를 기준으로 삼고, 개인 경험담(합의 금액선·CCTV 열람 관행 등)은 사안별로 다를 수 있는 참고로만 볼 것.`,checklist:["내가 냈으면 무조건 즉시 연락처(성명·전화번호) 남기기 — 문콕도 안 남기면 형사처벌","이미 떠났으면 자진신고 + 합의(소송 대응보다 유리)","내 차가 당했으면 피해부위·가해차 흔적 촬영, 블랙박스·CCTV 확보 후 경찰 신고","가해자 불명이면 자차 '가해자불명 사고' 처리(손해액별 할인유예)","정비소가 범퍼·문짝 교환 제시해도 경미손상(제1~3유형)이면 복원수리 대상 확인","소액 사고는 보험 vs 자비 비교(자기부담금+3년 할증분 vs 수리비 전액)","환입제도 활용은 반드시 계약 갱신 전에, carinfo.knia.or.kr에서 이력 조회"],sources:[{name:"손해보험협회 과실비율정보포털 / 국가법령정보센터 / 보험연구원(KIRI) / 삼성화재·뱅크샐러드",url:"https://accident.knia.or.kr/myaccident-content?chartNo=차51-1&chartType=1",type:"official"},{name:"국가법령정보센터(도로교통법 제54조) / 로톡 / 법무법인 동주·대륜·YK",url:"https://www.law.go.kr/LSW//lsSideInfoP.do?lsiSeq=273317&joNo=0031&joBrNo=00&docCls=jo&urlMode=lsScJoRltInfoR",type:"official"},{name:"손해보험협회 / 삼성화재 다이렉트 / KB손해보험 / 서울경제 「도와줘요, 손해보험」 / 뱅크샐러드",url:"https://www.sedaily.com/NewsView/29QZ8P88O6",type:"official"},{name:"MBCNEWS (문콕 경미손상 기준)",url:"https://youtu.be/iTVNI4U1wPQ",type:"personal"},{name:"HeyMan (아파트 주차장 긁힘 처리)",url:"https://youtu.be/gOU1m_5sokU",type:"personal"},{name:"도로왕 김지훈 변호사 (주차장 과실비율)",url:"https://youtu.be/fE5eKettmIQ",type:"personal"},{name:"DB손해보험 다이렉트·삼성화재 다이렉트 (교통사고 대처요령·사고접수)",url:"https://m.directdb.co.kr/clam/atclam/trafAccdMngView.do",type:"official"}],flags:["단독출처"],valid_year:2026,car_scope:"generic",source_files:["web/p3-문콕주차-최신제도-07.md","web/p3-물피도주-성립요건-11.md","web/p3-보험할증체계-12.md","youtube/p3-문콕주차사고-02.md","youtube/p3-문콕주차사고-04.md","youtube/p3-문콕주차사고-05.md","web/p3-가해자대응-15.md"],body_easy_md:`한마디로: 주차장에서 사고를 냈으면 차주와 연락처·보험사를 주고받고, 차주가 없으면 연락처를 남기세요. 그냥 가면 보험과 별개로 형사처벌(물피도주)을 받아요.

## 1. 내가 냈을 때 — 차주가 앞에 있으면

문콕이든 접촉이든, 상대 차주가 현장에 있다면 이 순서로 해요.

1. **차를 세우고, 피해 부위를 상대와 함께 확인해요.** 여러 각도에서 사진도 같이 찍어 두세요.
2. **서로 교환해요 — 이름·연락처·차량번호·보험사.** 상대에게 내 인적사항을 알려주는 것은 도로교통법상 **의무**예요(경찰 신고 여부와 별개).
3. **보험으로 처리한다면, 그 자리에서 내 보험사 콜센터에 사고를 접수하고 접수번호를 상대에게 알려줘요.** 접수할 때는 차량번호·사고 일시·장소·사고 내용을 물어봐요.
4. **손해가 작으면 보험 대신 자비로 물어주는 것도 선택지예요.** 어느 쪽이 유리한지는 아래 4번 섹션의 판단법으로 정해요.

> [!WARN] 현장에서 즉석 현금 합의를 서두르지 마세요. 보험사 공식 안내도 "보험사를 통해 처리하는 것이 가장 유리"라고 해요. 반대로 상대가 근거 없이 과한 배상을 요구하면 성급히 응하지 말고, **실제 손해 범위 확인이 먼저**예요.

## 2. 내가 냈을 때 — 차주가 없으면

1. **전화번호를 적어 상대 차의 잘 보이는 곳(앞유리 와이퍼 밑 등)에 남겨요.**
2. **남긴 메모와 현장·피해 부위를 사진으로 찍어 둬요.** "조치 없이 떠났다"가 물피도주의 성립요건이라, 조치했다는 증거가 나를 지켜줘요.
3. 연락이 오면 위 1번 섹션의 2~4단계와 같아요 (교환 → 보험 접수 또는 자비 판단).

### 그냥 가면 범죄예요 (물피도주 = 주차 뺑소니)

- 아래 3가지가 모두 맞으면 물피도주가 돼요.
  1. 상대 차에 손상(재물 손괴)이 생겼고,
  2. 운전자가 사고 사실을 알았거나 알 수 있었는데,
  3. 연락처 등 아무 조치 없이 현장을 떠났어요.
- 주차된 차만 부순 게 분명한데 연락처 없이 떠나면 도로교통법 위반이에요. **20만원 이하 벌금·구류·과료**에, 승용차 기준 **범칙금 12만원 + 벌점 15점**이 붙어요.
- **문 열다가 옆 차를 찍은 '문콕'도 포함**돼요. 일부러가 아니었어도 손상이 생기면 사고로 봐요. 지상·지하 주차장 모두 해당돼요.
- 만약 그 주차 차 안에 사람이 타고 있었던 게 나중에 밝혀지면, 죄가 더 무거운 **인적 피해 뺑소니(특정범죄가중처벌법)**로 바뀔 수 있어요.

> [!WARN] "보험으로 처리하면 형사처벌도 없어진다"는 흔한 오해예요. 사고 후 그냥 떠난 것은 보험과 별개인 교통범죄라서 형사책임이 그대로 남아요. 내가 냈다면 **그 자리에서 이름과 전화번호를 남기는 것**이 유일한 방법이에요.

- 이미 떠나버렸다면, 나중에 소송으로 가는 것보다 **스스로 신고하고 합의하는 편이 훨씬 유리**해요.

## 3. 내 차가 당했을 때 (내가 피해자)

그럼 반대로, 내 차가 피해를 입었을 때는 어떻게 대응해야 할까요?

### 가해자가 연락처를 남겼으면

1. 수리 전에 피해 부위를 여러 각도에서 사진으로 찍어 둬요.
2. 남겨진 번호로 연락해 **상대가 자기 보험사에 사고를 접수**하게 하고, **접수번호**를 받아요.
3. 접수번호로 상대 보험사의 안내를 받아 수리를 진행하면 돼요. 손해가 작으면 상대와 직접 합의(자비 배상)로 끝낼 수도 있어요.

### 누가 그랬는지 모르면

1. 긁히거나 찍힌 부위를 여러 각도에서 사진으로 찍어요.
2. 가해 차량이 남긴 페인트 자국, 부딪힌 높이 같은 흔적을 확보해요.
3. 내 블랙박스와 주차장 CCTV 영상을 확보한다 (이걸로 범인을 찾는 경우가 많다).
4. 경찰에 신고 접수해요.
5. 범인을 못 찾으면 내 보험의 **자차**(내 차 수리비를 보장하는 항목)로 **'가해자불명 사고'** 처리를 해요.
   - 손해액 **30만원 이하** → 1년간 할인 유예
   - **30만원 초과 ~ 50만원 이하** → 3년간 할인 유예
- 참고: 주차된 차끼리 문으로 찍은 문콕은 정해진 과실비율 표가 없고, **누가 냈는지 증명하는 것 자체가 어려운** 경우가 많아요. 손해가 작으면 소송해도 실익이 적을 수 있어요.

## 4. 보험으로 할까, 자비로 할까 — '200만원 이하는 할증 없다'는 절반만 맞는 말

가해자든 피해자든, 처리 방법을 정하려면 보험료 영향부터 알아야 해요. 작은 사고라도 보험료가 오를 수 있어요. 아래 두 가지가 동시에 작동하기 때문이에요.

### 할증이 발생하는 두 가지 경로
- **① 등급 할증**: 보험료를 매기는 등급이 나빠져 보험료가 오르는 거예요. 할증기준금액(보통 200만원) 이하 사고 1건은 등급이 그대로지만 **3년간 무사고 할인이 유예**돼요. 이 금액을 넘거나, 이하 사고가 2건이면 1등급 할증(약 7~12% 인상)돼요.
- **② 사고건수 할증**: 보험금이 얼마든 상관없이 **'사고 1건'으로 집계**돼 최소 6% ~ 최대 60% 올라요. 동시에 지난 **3년 무사고 할인(약 9~10%)도 사라져요.**
- 예시: 연 보험료 50만원, 3년 무사고, 기준금액 200만원인데 보험금 100만원짜리 사고 1건 → 등급은 그대로여도 무사고 할인이 사라지고 사고건수 할증이 붙어 **약 8.3만원(16.6%) 올라요.**

### 보험 처리가 유리할까, 자비 처리가 유리할까

- **환입 제도**: 보험사가 이미 지급한 보험금을 내가 되돌려주고 사고 처리를 취소해 할증을 피할 수 있어요. 환입 전후 예상 보험료를 비교해 결정하세요.

> [!WARN] 환입으로 할증을 피하려면 반드시 **보험 갱신 전에** 끝내야 해요. 갱신 후에는 되돌릴 수 없으니 타이밍을 놓치지 마세요.
- **보험 vs 자비 처리 판단법**:
  - A(보험 처리) = 자기부담금(자차로 수리할 때 내가 일부 부담하는 돈) + 앞으로 3년간 오르는 보험료 합계
  - B(자비 처리) = 수리비 전액
  - A가 B보다 작으면 보험 처리, A가 더 크면 자비 처리가 유리해요.
- 손해보험협회 자동차보험 종합포털(carinfo.knia.or.kr)에서 갱신 전에 내 사고 이력과 할증 여부를 미리 조회할 수 있어요.

## 5. 알아두면 좋은 배경 — 과실비율과 수리 기준

### 주차장 사고, 잘못은 몇 대 몇? (민사 과실비율)

지금까지는 주차된 차를 누가 건드린 경우였다면, 이번엔 두 차 모두 움직이고 있던 주차장 사고예요. 이때는 과실비율(잘못의 비율)을 따져요.

- 주차장은 법에서 말하는 '도로'가 아니라서 형사처벌(12대 중과실) 대상은 아니에요. 하지만 **민사상 잘못 비율(과실비율)은 따져요.**
- **기본 비율**: 통로를 지나가던 차 **30%** : 주차칸에서 나오던 차 **70%**. (지상·지하 모두 적용)
- 상황에 따라 조정된다:
  - 나오던 차가 **후진으로** 나왔으면 그 차 +5% (뒤가 잘 안 보이므로).
  - 나오던 차가 차 앞부분만 통로에 조금 내밀고 기다리고 있었으면 그 차 -10%.
  - 나오던 차가 불빛·경적도 없이 갑자기 튀어나와서 통로 차가 급브레이크를 밟아도 못 피할 만큼 가까웠으면, 통로 차 잘못 0% (나온 차의 일방적 잘못).
- 참고: 달리던 차와 문이 부딪힌 **개문 사고(문 연 차 80 : 주행차 20)**는 주차된 차끼리의 문콕과는 **다른 유형**이에요.

### 살짝 긁혔을 때 수리 기준 (경미손상 수리기준)

- 2017년 자동차보험 약관에 생긴 제도로, 조금만 긁혀도 무조건 부품을 새것으로 바꾸던 관행을 고치려고 만들었어요.
- 코팅·도장이 벗겨지거나 소재가 살짝 손상됐지만 구멍은 안 뚫린 정도(1~3유형)는 **복원 수리** 대상이고, 정말 못 고치는 4유형만 **교환** 대상이에요.
- 내 차가 살짝 긁혀 상대 보험으로 고칠 때, 정비소가 '교환'을 권해도 1~3유형이면 원래는 복원 수리 대상이에요.
- 다만 **2024년 국산차 범퍼 수리·교환 건수 중 이 기준이 실제로 적용된 비율은 4%**에 그쳐서(보험연구원, 2025-12), 현장에서는 대부분 교환으로 처리되는 게 현실이에요. 지역·정비소에 따라 적용 편차도 커요.`,order:2},{id:"p3-disaster",phase:3,title:"침수·폭설 재해 대처",summary:["침수는 태풍·홍수·폭우 등으로 차가 물에 잠기거나 물속에서 멈추는 것으로, 이때 가장 중요한 것은 시동을 걸지 않는 것입니다.","곧바로 차 상태를 사진·영상으로 찍고 보험사 긴급출동을 불러 견인하며, 침수 보상은 자기차량손해(차량단독사고 보상 특약)에 가입돼 있어야 받을 수 있습니다.","⚠️ 절대 하지 말 것: 물에 잠긴 차의 시동을 걸거나 전기기기를 만지는 것 — 손상이 커지고 그 뒤 생긴 추가 피해는 보상이 안 될 수 있으며, 이미 물이 불어난 길로 무리하게 들어가는 것도 자기과실이 됩니다."],body_md:`## 1. 침수 시 현장 조치 — 절대 시동 걸지 말 것

1. **물속에서 차가 멈췄거나 주차돼 있을 때는 시동을 걸거나 다른 전기기기를 만지지 말고 곧바로 견인 조치를 한다.**
   - 이유: 엔진(흡기구)·전기계통에 물이 유입된 상태에서 시동을 걸면 손상이 커지고, 그 이후 발생한 추가 손해는 보상이 제한될 수 있다.
2. 침수 직후 **차량 상태·물 높이·주차 위치를 사진/영상으로 즉시 기록**한다(도로 통제 여부 포함).
3. 안전이 확보되고 감전 위험이 없으면 배터리 (−) 단자를 분리해 전기적 쇼트를 막는다.
4. 가입 보험사 **긴급출동 서비스 콜센터**에 연락해 전문 견인차로 차량을 이동시킨다.

## 2. 침수사고 접수 절차 (예: DB손해보험 공식 STEP)

1. 침수 발생 / 사고 접수 (고객상담센터)
2. 피해 / 수리 범위 확인
3. 전손 / 분손 / 수리 결정
4. 보상 진행 / 청구서류 제출
5. 보상 종결 / 보험금 지급

## 3. 자차보험(자기차량손해) 보상 조건

- **운행 중 차내에 물이 유입되거나, 주차 상태에서 태풍·홍수로 침수된 경우, 자기차량손해담보(차량단독사고 보상 특별약관)에 가입되어 있어야 보상이 가능하다.**
- **침수피해**란 흐르거나 고인 물, 역류·범람하는 물, 해수 등에 자동차가 빠지거나 잠기는 것.
  - **단, 문·창문을 열어놓거나 선루프를 개방해 빗물이 들어간 것은 침수로 보지 않는다.**
- 차량단독사고 보장 특별약관 미가입 시 침수 피해는 보장되지 않는다.

## 4. 보상 금액 산정

- **분손(차량손해 < 차량가액)**: 보험 가입금액 한도 내 보상(일부 수리 시 자기부담금 공제).
- **전손(차량손해 > 차량가액)**: 차량가액 한도 내 보상. 차량가액은 사고 당시 보험개발원이 정한 최근 차량기준가액표상 금액.
- 내비게이션·블랙박스 등 부속품은 보험증권에 기재된 경우에 한해 보상.
- 전손으로 보험금 전액이 지급되면 잔존물(피해차량)의 소유권은 상법 제681조에 따라 보험회사가 취득하며, 매각(폐차·수출말소·명의이전) 서류를 제출해야 한다(저당·압류 해지 및 보험료 완납 필요).

## 5. 침수차량 보험료 할증 기준

| 상황 | 보상 / 할증 |
|---|---|
| 정상 주차 중 갑자기 불어난 물에 침수 | 보상 가능, **할증 없이 1년간 할인 유예** |
| 태풍으로 날아온 물건에 차량 파손 | 보상 가능, **할증 없이 1년간 할인 유예** |
| 태풍·홍수·폭우·해일 등으로 **이미 물이 불어난 곳을 운행하다** 침수 | **자기과실 인정, 손해액에 따라 할증될 수 있음** |

- 즉, 통제된/침수된 도로에 무리하게 진입해 발생한 침수는 운전자 부주의(자기과실)로 보아 보상·할증에서 불리하게 판단될 수 있다.

## 폭설 행동요령 (사이클 7 보강)

- 사전: 차량용 안전장구(체인·염화칼슘·삽) 휴대. 장거리 이동 시 월동장비·연료·식음료 준비, 기상 확인. 부동액·축전지·윤활유 점검.
- 운전 중: 앞유리 성에 완전 제거, 저속 운전·차간 거리 확보. 커브길·고갯길·고가도로·교량·결빙 구간 서행.
- 고립 시: 가능한 수단으로 구조 연락. 동승자와 체온 유지, 교대 휴식하되 한 사람은 반드시 깨어 있을 것. 야간에는 실내등 점등 또는 색깔 있는 옷을 눈 위에 펼쳐 구조요원 식별을 도움. 히터 작동 시 창문을 자주 열어 환기. 라디오·재난문자로 상황 파악.
- 차량 이탈 시: 되도록 차량에서 대기하고, 부득이 벗어날 경우 연락처와 열쇠를 꽂아 둔 채(스마트키는 차 안에 둔 채) 대피.
- 출처: 기상청 날씨누리 대설 행동요령 / 국민재난안전포털 / 세종시 국민행동요령(재난안전포털 미러, 문구 일치 교차) — \`web/p3-폭설대처-16.md\`(verified, 사이클 7)`,field_tips_md:null,checklist:["침수 시 절대 시동 걸지 않기, 전기기기 만지지 않기 → 곧바로 견인","차량 상태·물 높이·주차 위치를 사진/영상으로 즉시 기록","감전 위험 없으면 배터리 (−) 단자 분리","보험사 긴급출동으로 전문 견인차 요청 후 사고 접수","자기차량손해담보(차량단독사고 특약) 가입 여부 확인","침수된 도로에 무리하게 진입하지 않기(자기과실 할증 위험)"],sources:[{name:"DB손해보험 (침수차량 보상가이드)",url:"https://www.idbins.com/mo/bizxpress/ask/ag/FMCLAV1106.shtm",type:"official"},{name:"기상청 날씨누리·국민재난안전포털 (대설 국민행동요령)",url:"https://www.weather.go.kr/w/hazard/safety-guide/heavy-snow.do",type:"official"}],flags:[],valid_year:2026,car_scope:"generic",source_files:["official/p3-침수대응-09.md","web/p3-폭설대처-16.md"],body_easy_md:`한마디로: 차가 물에 잠기면 절대 시동을 걸지 말고, 폭설에 고립되면 되도록 차 안에서 구조를 기다리세요. 침수 보상은 '자기차량손해(차량단독사고 특약)'에 들어 있어야 받을 수 있어요.

## 1. 침수됐을 때 현장에서 — 절대 시동 걸지 마세요

> [!DANGER] 차가 물에 잠기거나 물속에서 멈췄다면 시동을 걸거나 다른 전기기기를 만지지 마세요. 엔진 안이나 전기장치에 물이 들어간 상태에서 시동을 걸면 손상이 훨씬 커지고, 그 뒤에 생긴 추가 피해는 보상을 못 받을 수 있어요. 곧바로 견인하세요.

1. 차 상태, 물 높이, 주차 위치를 **사진·영상으로 바로 기록**하세요. (도로가 통제됐는지도 함께)
2. **차의 어떤 배터리 단자도 만지지 마세요.** 특히 **주황색 케이블**과 커넥터는 고전압이라 절대 손대면 안 돼요. 현대차 공식 긴급대응 지침은 침수 시 고전압 부품·케이블을 만지지 말라고 정하고 있어요.
3. 가입한 보험사 **긴급출동 콜센터**에 연락해 전문 견인차로 차를 옮겨요. 현대차 긴급출동은 **1588-3495**, 위급하면 **119**예요.

> [!DANGER] **하이브리드 침수차는 직접 손대지 마세요.** 순서는 **시동 끄기 → 내려서 대피 → 차와 고전압 부품에 접촉 금지 → 재시동 절대 금지 → 119·긴급출동 연락**이에요. 예전에 흔히 안내되던 '배터리 (−) 단자 분리'는 **하이브리드에서는 권장되지 않는 조치**예요.

## 2. 침수 사고 접수 순서 (예: DB손해보험 기준)

현장 조치를 마쳤다면, 보험사에서는 보통 이런 순서로 사고를 접수하고 처리해요.

1. 침수 발생 / 사고 접수 (내가 가입한 보험사 고객상담센터)
2. 피해·수리 범위 확인
3. 전손(폐차 수준) / 분손(일부 수리) / 수리 결정
4. 보상 진행 / 청구서류 제출
5. 보상 종결 / 보험금 지급

## 3. 보험 보상이 되는 조건

접수 절차를 확인했다면, 이제 내 상황이 실제로 보상 대상인지 짚어볼게요.

- **침수 피해**란 흐르거나 고인 물, 넘치거나 역류하는 물, 바닷물 등에 차가 빠지거나 잠기는 걸 말해요.
- 운전 중 차 안에 물이 들어오거나, 주차 중 태풍·홍수로 잠긴 경우가 여기에 해당해요.
- 이때 보상을 받으려면 **자기차량손해의 '차량단독사고 보상 특별약관'에 가입돼 있어야** 해요(맨 위에서 말한 '차량단독사고 특약'이 이거예요). 가입 안 했으면 보상되지 않아요.

> [!WARN] 문·창문·선루프를 열어놔서 빗물이 들어간 경우는 침수로 보지 않아 보상되지 않아요.

## 4. 보상 금액은 어떻게 정해지나

보상 대상이라는 게 확인됐다면, 실제로 얼마를 받게 되는지 볼게요.

### 보상 금액 산정 방식

- **분손(수리비 < 차 값)**: 가입 금액 한도 안에서 보상(일부 수리 시 자기부담금(내가 일부 부담하는 돈) 뺌).
- **전손(수리비 > 차 값)**: 차 값 한도 안에서 보상. 차 값은 내가 산 가격이 아니라, 사고 당시 보험개발원 기준가액표에 적힌 금액이에요.
- 내비게이션·블랙박스 같은 부속품은 보험증권에 적혀 있을 때만 보상돼요.

### 전손 시 소유권 이전

- 전손으로 보험금을 전액 받으면 그 차의 소유권은 보험회사로 넘어가며(상법 제681조), 폐차·수출말소·명의이전 서류를 내야 합니다(저당·압류 해지와 보험료 완납 필요).

## 5. 보험료 할증(오르는지) 기준

마지막으로, 침수 보상을 받으면 다음 보험료가 오르는지도 확인해두세요.

| 상황 | 보상 / 할증 |
|---|---|
| 정상 주차 중 갑자기 물이 불어나 침수 | 보상 O, **할증 없이 1년간 할인 유예** |
| 태풍에 날아온 물건에 차 파손 | 보상 O, **할증 없이 1년간 할인 유예** |
| 이미 물이 불어난 길을 무리하게 운행하다 침수 | **내 잘못(자기과실)으로 봐서 손해액에 따라 할증될 수 있음** |

- 즉, 통제되거나 물에 잠긴 도로에 무리하게 들어가서 생긴 침수는 운전자 부주의로 보아 보상·할증에서 불리할 수 있어요.

## 6. 폭설 — 운전 중이라면

여기부터는 눈이 많이 올 때예요. 행정안전부·기상청 공식 행동요령 기준이에요.

- 출발 전에 **앞유리 성에를 완전히 제거**하고, 평소보다 **속도를 낮추고 차간 거리를 충분히** 벌려요.
- **커브길·고갯길·고가도로·교량·결빙 구간**은 특히 미끄러워요. 미리 속도를 줄이세요.

## 7. 폭설 — 차가 고립됐을 때

- **가능한 수단으로 구조 연락**(119·재난문자 회신 등)을 먼저 해요.
- **되도록 차 안에서 대기**해요. 동승자와 함께 체온을 유지하고, 돌아가면서 휴식해요. **한 사람은 반드시 깨어 있어야** 해요.
- 밤에는 **실내등을 켜거나 색깔 있는 옷을 눈 위에 펼쳐** 구조요원이 쉽게 찾게 해요.
- **히터를 켤 때는 창문을 조금 열어 자주 환기**해요.
- 라디오·재난문자로 교통상황과 행동요령을 계속 확인해요.

## 8. 폭설 — 차를 두고 대피해야 한다면

- 부득이 차를 벗어날 때는 **연락처를 남기고, 차를 옮길 수 있게 키를 차 안에 둔 채** 대피하는 것이 공식 요령이에요(제설·구난 작업 시 차량 이동을 위해).
- 우리 차는 스마트키라 '꽂아 두기'가 없어요 — **키를 차 안 잘 보이는 곳에 두는 것**으로 같은 목적을 지키면 돼요.

## 9. 폭설 — 미리 준비해 둘 것

- **체인·염화칼슘·삽** 같은 차량용 안전장구를 겨울에 실어 둬요.
- 장거리 이동 전에는 **월동장비·연료·먹을 것**을 챙기고 **기상 상황을 미리 확인**해요.
- 부동액·배터리·윤활유 상태도 미리 점검해요.`,order:5},{id:"p0-warranty",phase:0,title:"무상보증 확인",summary:["무상보증은 정해진 기간·주행거리 안에 생긴 고장을 제조사가 무료로 고쳐 주는 것으로, 싼타페 하이브리드는 부품 종류마다 기간이 달라요.","일반부품은 3년/6만km, 엔진·변속기 같은 동력계통은 5년/10만km, 고전압배터리·구동모터·HPCU 같은 하이브리드 핵심부품은 가장 긴 10년/20만km까지 보증됩니다.","보증은 신차 판매일부터 시작하고 기간·거리 중 먼저 닿는 쪽에서 끝나며, 매뉴얼의 정비주기와 지정 오일을 지켜야 보증이 유지돼요."],body_md:`## 부위별 무상보증 기간 (싼타페 MX5 HEV)

- **일반부품(차체·일반)**: 3년/6만km 기본 (2018.1.1 이후 출고분은 선택형 보증제도: 2년/8만km·3년/6만km·4년/4만km 중 선택, 횟수 제한 없이 변경 가능)
- **엔진·동력전달 주요부품**: 5년/10만km (엔진·변속기/추진축·앞뒤 차축 등 동력전달장치 주요부품)
- **하이브리드 전용부품(고전압배터리·구동모터·HPCU)**: 10년/20만km 무상 보증 (고전압배터리·전기 구동모터·HPCU)

## 보증 유지 조건

신차 판매일부터 적용, 기간·주행거리 중 먼저 도래 시 만료. 최초고객(개인) 한정(사업자/법인/리스/렌탈 제외). 취급설명서상 정비주기·지정오일 미준수 고장은 보증 제외. 고전압배터리 자연 성능저하(정상 노화)는 보증 제외.

> 자세한 차종 상수는 '내 차 설정'의 MX5 HEV 상수를 참조.`,field_tips_md:null,checklist:["내 출고(등록)일 기준으로 각 보증 만료 시점 계산해두기","매뉴얼 정비주기(엔진오일 등) 준수 — 미준수 시 보증 제외될 수 있음","순정 지정 오일·부품 사용 여부 확인"],sources:[{name:"현대자동차 보증안내/카탈로그",url:"https://www.hyundai.com/kr/ko/purchase-event/policy-Information/warranty/normal-period/rv.html",type:"official"},{name:"현대자동차 — 배출가스 관련부품 보증기간",url:"https://www.hyundai.com/kr/ko/purchase-event/policy-Information/warranty/gas-part-warranty",type:"official"},{name:"브랜드별 보증·승계 비교(제조사 공식) — 수집분",url:"https://www.genesis.com/kr/ko/terms-of-use/warranty/gv80.html",type:"official"}],flags:[],valid_year:2026,car_scope:"mx5-hev",source_files:["mx5-hev-spec.md","web/newcar-handover-inspection-phase0-2026.md","official/appendix-보증승계-브랜드별-16.md"],body_easy_md:`한마디로: 정해진 기간·거리 안의 고장은 제조사가 무료로 고쳐 줘요. 부품마다 기간이 다르고, 정비만 잘 챙기면 돼요. (싼타페 MX5 HEV 기준)

## 부품별 무상보증 기간

| 부품 | 보증 기간 |
|---|---|
| 일반부품(차체·일반) | **3년 / 6만km** |
| 엔진·동력전달 주요부품(엔진·변속기·차축 등) | **5년 / 10만km** |
| 하이브리드 전용부품(고전압배터리·구동모터·HPCU) | **10년 / 20만km** |
| 배출가스 촉매·전자제어장치(ECU) | **7년 / 12만km** |
| 그 밖의 배출가스 관련부품 | **5년 / 8만km** |

- 하이브리드 핵심부품이 가장 길게(10년/20만km) 보장돼요.
- 일반부품은 2018년 1월 이후 출고분이면 **선택형**이라, 2년/8만km · 3년/6만km · 4년/4만km 중에서 고를 수 있고 횟수 제한 없이 바꿀 수 있어요. (적게 타면 4년/4만km가 유리)

> [!TIP] '어떻게 고르냐'면 — 인수 후 **따로 신청 절차 없이**, 기간 안이라면 언제든 **현대닷컴·myHyundai 앱·고객센터(080-600-6000)·블루핸즈**에서 원하는 조합으로 바꾸면 돼요. 처음엔 기본값(3년/6만km)으로 시작하고, 1년에 2만km도 안 탈 것 같으면 4년/4만km로 바꾸는 식이에요.
- **냉·난방장치**는 일반부품과 기간이 같지만, **최초 1년은 주행거리와 상관없이** 보증돼요.

> [!NOTE] 배출가스 부품(촉매·산소센서·EGR밸브·연료펌프·터보차저 등)은 일반부품보다 길게 보장돼요. 엔진 계통 경고등이 뜨면 이 보증 대상인지 먼저 확인하세요.

## 보증 유지 조건 (꼭 지키기)
- 보증은 **'신차 판매일'부터** 시작하고(등록일이 아니에요), 기간과 주행거리 중 **먼저 닿는 쪽**에서 끝나요. (예: 3년/6만km면, 2년 만에 6만km를 넘으면 그때 끝)

> [!CHECK] **내 보증 시작일은 어디서 확인하나요?** 차와 함께 받는 **보증서(책자)**, **계약서**, **인수증(차량인수증)**에 적힌 판매일을 보면 돼요. 계약일·등록일과 다를 수 있으니, 이 서류들을 **사진으로 찍어 보관**해 두세요. 나중에 "보증 기간이 지났다"는 말을 들었을 때 시작일을 증명하는 근거가 돼요.
- **개인(최초고객)만** 대상이에요. 사업자·법인·리스·렌탈 차는 제외.
- 매뉴얼의 **정비주기와 지정 오일을 안 지켜서** 생긴 고장은 보증에서 빠져요. 엔진오일 교체 시기 등을 꼭 챙기고 순정 지정 오일·부품을 쓰세요.
- 고전압배터리가 세월 따라 자연스럽게 성능이 조금 떨어지는 건(정상 노화) 보증 대상이 아니에요.

> [!TIP] 장기 재고차·전시차라면 **계약서·인수증·보증서에 '판매일'이 명확히 적혀 있는지** 꼭 확인·보관하세요. 판매일을 입증 못 하면 보증 시작일을 '제조일 + 3개월'로 잡을 수 있어 손해예요.

## 중고로 팔 때 — 보증은 넘어가나요?
- 현대는 보증 승계(다음 주인에게 잔여 보증이 넘어가는지)를 공식 페이지에 명확히 밝히지 않아, **보증서(책자) 원본으로 확인**하는 게 안전해요.
- 확실한 건: **하이브리드 전용부품 10년/20만km 보증은 '최초 개인고객'에게만** 적용돼요. 즉 중고로 팔면 이 긴 보증은 **다음 주인에게 승계되지 않아요.**
- (참고: 제네시스·토요타·렉서스·테슬라·볼보 등은 잔여 보증 승계를 공식적으로 명문화해 뒀어요. 브랜드마다 조건이 달라요.)

## 내가 할 일
- 내 출고(판매)일을 기준으로 각 부품의 보증 만료 시점을 계산해 두세요.
- 정비주기를 지키고 기록을 남겨 두면 나중에 보증받을 때 유리해요.`,order:7,stage:"post"},{id:"p2-warning-lights",phase:2,title:"계기판 경고등",summary:["계기판 경고등은 색으로 급한 정도를 알려줘요 — 빨간색은 즉시, 노란색은 가급적 빨리 점검하라는 뜻이에요.","빨간불이 뜨면 안전한 곳에 세우고 점검(또는 견인), 노란불이면 무리하지 말고 곧 정비소에 가면 돼요.","하이브리드 전용 경고 메시지(시스템·전원·냉각수)와 자주 보는 일반 경고등만 알아둬도 대부분 대응할 수 있어요."],body_md:`## 하이브리드 시스템 경고 메시지

- **하이브리드 시스템을 점검하십시오**: 하이브리드 제어 시스템 센서·액츄에이터·컴퓨터 이상 시 표시. 하이테크센터/블루핸즈 점검 필요
- **하이브리드 시스템 점검! 안전한 곳에 정차하십시오**: 하이브리드 시스템 문제 발생 시 표시, 주행 가능 표시등 깜빡임 + 약 10초간 경고음
- **하이브리드 시스템 점검! 시동을 걸지 마십시오**: 고전압 배터리 충전량(SOC)이 매우 낮아 시동 불가 시 경고음 1회 + 경고문 표시
- **전원 공급 장치 점검! 안전한 곳에 정차하십시오**: 하이브리드 전원 공급 시스템 고장·이상 시 표시. 정차 후 견인 점검 필요
- **배터리 시스템 냉각수를 보충하십시오**: 하이브리드 하드웨어 보호용 냉각수 부족 시 표시. 주행 중지 및 냉각수량 확인 필요

## 대표 일반 경고등 (일부)

- **주행 가능 표시등**: 주행 준비 완료 시 켜짐 / 꺼짐=주행 불가 / 깜빡임=이상
- **서비스 경고등**: 시동 ON 3초 후 꺼짐. 하이브리드 제어기·하드웨어 이상 시 켜짐
- **EV 모드 표시등**: 켜짐=모터 주행 모드(정차 중 엔진정지, 회생제동/모터 단독 구동), 꺼짐=엔진 또는 엔진+모터 주행
- **안전벨트 미착용 경고등**: 미착용 시 켜지고 6초간 경고음, 20km/h 이상이면 깜빡이며 재경고
- **에어백 경고등**: 시동 ON 후 이상 없으면 3-6초 후 꺼짐, 안 꺼지면 이상
- **회생 제동 경고등**: 브레이크 계통 이상으로 회생제동 미작동 시 브레이크 경고등과 함께 켜짐
- **브레이크 경고등**: 안 꺼지면 브레이크액 점검·보충. 주행 중 켜지면 서서히 안전 정지
- **ABS 경고등**: 시동 ON 후 약 3초 뒤 꺼짐, 안 꺼지면 ABS 이상
- **EBD 경고등**: 브레이크+ABS 경고등 동시 점등 시 EBD 미작동. 고속·급제동 피하고 즉시 점검
- **전동 파워 스티어링 경고등**: 시동 ON 후 3초 뒤 꺼짐, 안 꺼지거나 깜빡이면 이상
- **연료 부족 경고등**: 남은 연료량 적을 때 노란색 점등, 즉시 보충
- **엔진 오일 압력 경고등**: 유압 저하 시 점등. 주행 중 켜지면 안전 정차·오일양 점검(출력 제한)

> 전체 목록은 '내 차 설정 > MX5 HEV 상수 > warning_lights' 참조.`,field_tips_md:null,checklist:["빨간 경고등 점등 시 안전한 곳에 즉시 정차","'시동을 걸지 마십시오' 메시지 시 재시동 시도 금지, 하이테크센터/블루핸즈 연락","노란 경고등은 주행 가능하나 가급적 빨리 점검 예약"],sources:[{name:"현대자동차 오너스매뉴얼(MX5HEV 2026) 경고등 및 표시등",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR/warning_indicator_lights.html",type:"official"},{name:"현대 취급설명서 MX5HEV — 타이어 공기압 경보 시스템(TPMS)",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR/id235QB06065Z.html",type:"official"}],flags:[],valid_year:null,car_scope:"mx5-hev",source_files:["mx5-hev-spec.md"],body_easy_md:`한마디로: **빨간색 = 즉시 정차·점검**, **노란색 = 가급적 빨리 점검**. 이 원칙만 기억하면 절반은 끝나요.

## 색으로 급한 정도를 판단하세요
- **빨간색**: 위험 신호. **안전한 곳에 바로 세우고** 점검하거나 견인하세요. 계속 타면 차가 크게 상할 수 있어요.
- **노란색(주황)**: 주의 신호. 당장 멈출 정돈 아니지만 **되도록 빨리 정비소**에 가세요.
- 시동을 걸면 경고등들이 잠깐 켜졌다가 몇 초 뒤 꺼지는 건 정상이에요. **안 꺼지고 계속 켜져 있으면 이상**이에요.

> [!NOTE] **색은 차 사양에 따라 다르게 보일 수 있어요.** 매뉴얼도 "차량의 사양 및 소프트웨어 버전에 따라 경고등의 모양과 위치가 다를 수 있다"고 적어 뒀어요.
> 아래 표의 색은 일반적인 기준이니, **색이 표와 다르면 색 말고 '무슨 뜻인가'를 보고 판단**하세요. 매뉴얼이 색을 못 박은 건 **냉각수 수온(빨강)**, **연료 부족·회생 제동·통합(노랑)** 네 가지예요.

## 하이브리드 전용 경고 메시지 (내 차 특화)
색 구분 원칙을 알았다면, 이제 내 차(하이브리드)에서만 뜨는 글자 메시지를 볼게요. 냉각수·전원·시스템 관련이 핵심이에요.
- **"하이브리드 시스템을 점검하십시오"**: 하이브리드 제어 계통 이상 → 블루핸즈/하이테크센터 점검
- **"하이브리드 시스템 점검! 안전한 곳에 정차하십시오"**: 시스템 문제 발생(표시등 깜빡 + 약 10초 경고음) → **정차**
- **"하이브리드 시스템 점검! 시동을 걸지 마십시오"**: 고전압 배터리에 남은 충전량이 너무 적어서 시동이 걸리지 않는 상태예요
- **"전원 공급 장치 점검! 안전한 곳에 정차하십시오"**: 전원 공급 고장 → **정차 후 견인 점검**
- **"배터리 시스템 냉각수를 보충하십시오"**: 배터리를 식혀 주는 냉각수가 부족한 상태 → **주행을 멈추고 냉각수 양을 확인**
- **서비스 경고등**: 글자 메시지 말고 그림으로도 떠요. 시동을 걸면 켜졌다 3초 뒤 꺼지는 게 정상인데, **주행 중에 켜지거나 안 꺼지면** 하이브리드 제어 장치 쪽 이상이에요 → 블루핸즈/하이테크센터 점검

> [!DANGER]
> "...안전한 곳에 정차하십시오"라는 메시지가 뜨면 하이브리드 시스템이든 전원 공급 장치든 상관없이 즉시 안전한 곳에 차를 세우세요. 무리해서 계속 달리면 고장이 커지거나 위험할 수 있어요.

## 빨간불이면 세우세요 — 즉시 정차

빨간 경고등은 **계속 달리면 차가 크게 상하거나 위험한** 신호예요. 안전한 곳에 세우고 확인하세요.

| 경고등 | 무슨 뜻인가 | 뭘 해야 하나 |
|---|---|---|
| **브레이크 경고등** | 파킹 브레이크를 풀었는데도 안 꺼지면 브레이크액이 부족할 수 있어요 | 급하게 멈추지 말고 **천천히 속도를 줄여** 안전한 곳에 세우세요. 브레이크액 보충은 정비소에 맡기세요 |
| **엔진 오일 압력 경고등** | 엔진오일이 부족해 압력이 낮아졌어요 | 세우고 오일 양을 확인하세요. 켜진 채로 계속 달리면 **엔진이 고장 나요** |
| **냉각수 수온 경고등** | 엔진을 식히는 물이 너무 뜨거워졌어요(과열) | 세우고 식히세요 |
| **충전 경고등** | 배터리를 충전해 주는 장치에 문제가 생겼어요 | 계속 달리면 엔진이 과열되거나 배터리가 방전돼요 |
| **에어백 경고등** | 시동 후에도 안 꺼지면 에어백 계통 이상이에요 | 사고 때 에어백이 안 터질 수 있어요. 점검받으세요 |

> [!DANGER] **두 개가 같이 켜지면 특히 위험해요.**
> - **브레이크 + ABS**: 앞뒤 바퀴에 브레이크 힘을 나눠 주는 기능(EBD)까지 멈춘 거예요. 급브레이크를 밟으면 차가 휘청일 수 있어요.
> - **브레이크 + 회생 제동(노란색)**: 브레이크 성능이 다소 떨어진 상태예요. **평소보다 페달을 더 깊게, 더 오래 밟아야** 서고 제동거리도 길어져요.
>
> 둘 다 **속도를 낮추고 급제동을 피해서** 곧바로 정비소로 가세요.

## 노란불이면 곧 점검하세요

당장 멈출 정도는 아니지만 **되도록 빨리** 정비소에 가야 하는 신호예요.

| 경고등 | 무슨 뜻인가 | 뭘 해야 하나 |
|---|---|---|
| **엔진 경고등** | 시동을 걸면 켜졌다 3초 뒤 꺼지는 게 정상인데, **안 꺼지면** 엔진 제어나 연료 공급 쪽 이상이에요 | 아래 체크를 먼저 해 보고, 그래도 안 꺼지면 점검받으세요 |
| **연료 부족 경고등** | 기름이 얼마 안 남았어요 | 바로 주유하세요. 완전히 바닥내고 달리면 엔진·연료 장치가 상해요 |
| **타이어 공기압(TPMS) 경고등** | 어느 한 바퀴의 공기압이 낮아요 | 공기압을 확인하고 보충하세요 |
| **ABS 경고등** | 급브레이크 때 바퀴가 잠기지 않게 해 주는 장치의 이상이에요 | 세웠다 다시 시동을 걸어 보고, 그래도 켜지면 점검받으세요 |
| **전동 파워 스티어링 경고등** | 핸들을 가볍게 돌아가게 돕는 장치의 이상이에요 | 핸들이 무거워질 수 있어요. 점검받으세요 |
| **EPB(전자식 파킹 브레이크) 경고등** | 주차 브레이크 장치의 이상이에요 | 점검받으세요 |
| **통합 경고등** | 주행보조 기능(크루즈·차로유지·후측방 등) 중 하나가 고장 났거나 **카메라·레이더가 가려졌어요** | 눈·비·진흙으로 센서가 가려진 경우가 많아요. 닦아도 안 꺼지면 점검받으세요 |
| **회생 제동 경고등** (하이브리드 전용) | 브레이크로 배터리를 충전하는 기능이 멈췄어요 | **브레이크 경고등과 함께 켜지면 브레이크가 평소보다 덜 들어요** — 아래 경고를 꼭 보세요 |

![타이어 공기압 경고등(TPMS)](/img/tpms-warning.jpg)
*타이어 공기압 경고등이에요. 이 모양이 뜨면 네 바퀴 중 하나의 공기압이 낮다는 뜻이에요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

> [!CHECK] **엔진 경고등이 떴다면 주유구부터 확인하세요.** 연료 캡을 **"딸깍" 소리가 날 때까지** 안 잠그면 고장이 없어도 엔진 경고등이 켜져요. 다시 꽉 잠근 뒤에도 안 꺼지면 그때 정비소에 가세요.

## 켜져 있어도 정상인 표시등

경고가 아니라 **지금 상태를 알려 주는** 불이에요. 당황하지 마세요.

- **주행 가능 표시등(READY)**: 켜져 있으면 출발할 수 있는 상태예요. 하이브리드는 시동을 걸어도 엔진 소리가 안 날 수 있는데, 이 불이 켜져 있으면 정상이에요.
- **EV 모드 표시등**: 지금 전기 모터로만 달리는 중이라는 뜻이에요. 연비에 좋은 상태예요.
- **안전벨트 미착용 경고등**: 벨트를 안 매면 켜지면서 경고음이 울리고, 시속 20km를 넘으면 한 번 더 울려요.
- **AUTO HOLD 표시등**: 흰색이면 대기, 초록색이면 실제로 차를 잡고 있는 중이에요.

> [!NOTE] 시동을 걸면 여러 경고등이 **잠깐 켜졌다가 3초쯤 뒤 꺼지는 건 정상**이에요. 전구가 살아 있는지 스스로 확인하는 거예요. **안 꺼지고 계속 켜져 있을 때만** 이상이에요.
`,order:3},{id:"p4-supplies",phase:4,title:"차 보호·꾸미기 용품 기초 (유리막·썬팅·PPF·매트)",order:1,car_scope:"generic",valid_year:2026,flags:[],summary:["새 차에 흔히 하는 유리막·썬팅·PPF·매트는 목적이 서로 달라서, 뭐가 뭔지 알면 필요한 것만 골라 돈을 아낄 수 있어요.","유리막은 오염·광택(얇은 코팅), PPF는 충격 방어(두꺼운 필름), 썬팅은 빛·열·시선 차단(유리 필름), 매트는 실내 바닥 보호예요.","시공은 신차 인수 검수를 마친 뒤에 하고, 업체·제품별 값 차이가 크니 비교하고 필요한 것만 결정하세요."],checklist:["유리막·PPF·썬팅·매트의 목적 차이 이해하기","썬팅은 앞유리 70%·운전석 옆 40% 밝기 규정 확인하기","카 매트는 고정 후크에 고정하고 두 장 겹쳐 깔지 않기(페달 간섭 위험)","매트는 페달에 걸리지 않게 고정 고리 맞춰 깔기","시공은 인수 검수를 마친 뒤에 하기","여러 업체 비교 후 필요한 것만 시공하기"],body_easy_md:`한마디로: 새 차에 흔히 하는 유리막·썬팅·PPF·매트는 **목적이 다 달라요.** 뭐가 뭔지 알면 필요한 것만 골라 돈을 아낄 수 있어요.

## 유리막 코팅이 뭐예요?
도장(페인트) 표면에 유리처럼 얇고 단단한 **보호막**을 입히는 시공이에요.
- 오염·물때·미세 스크래치를 덜 타게 하고 광택을 오래 유지해요.
- 물이 방울져 굴러내려(발수) **세차가 쉬워져요.**
- 영구가 아니라 시간이 지나면 효과가 약해져 **주기적 관리·재시공**이 필요해요.

> [!TIP] 도장이 가장 깨끗한 **신차 출고 직후**에 하면 효과가 좋아요.

## 썬팅(틴팅)은 뭐가 달라요?
유리에 **필름을 붙여** 자외선·열(적외선)·눈부심·시선을 막는 거예요. 도장을 지키는 유리막과는 **완전히 다른 것**이에요.
- 여기서 %는 **빛이 유리를 통과하는 비율(가시광선 투과율)**이에요. 숫자가 낮을수록 어둡고, 이걸 흔히 '농도가 진하다'고 말해요.
- **앞유리·앞좌석 옆유리는 밝기 규정**이 있어 너무 어둡게 하면 단속 대상이 돼요(뒷유리는 제한이 느슨).

> [!WARN] 법 기준은 **앞유리는 빛이 70% 이상, 운전석 옆유리는 40% 이상 통과**해야 한다는 거예요. 업체가 흔히 권하는 진한 농도(이른바 '국민 농도')로 하면 과태료 대상이에요. 자세한 건 '차량 기능·부착물' 가이드를 참고하세요.

## PPF는 뭐예요? (유리막·썬팅과 차이)
**PPF(도장보호필름)**는 투명하고 두꺼운 필름을 도장 위에 붙여, 돌빵(스톤칩)·긁힘 같은 **물리적 충격**에서 도장을 지켜요.
- 유리막(얇은 코팅 — 오염·미세흠집 방지)보다 **두껍고 방어력이 강하지만 비싸요.**
- 보통 잘 상하는 부위, 즉 앞범퍼·본넷(엔진룸 덮개)·도어엣지(문 끝 테두리) 같은 곳에 **부분 시공**해요.

![PPF 부분 시공을 흔히 하는 부위](/img/ppf-common-areas.svg)
*본문에 나온 세 부위가 차에서 어디인지 표시했어요. (직접 그린 도식)*

> [!NOTE] 한 줄 정리 — **유리막=오염·광택(얇은 코팅), PPF=충격 방어(두꺼운 필름), 썬팅=빛·열·시선 차단(유리 필름).** 목적이 셋 다 달라요.

## 매트 3종은 뭐가 달라요?
- **코일매트**: 가는 플라스틱 줄을 얽어 만든 매트. 틈으로 흙·물이 아래로 떨어져 갇히고, 통풍·세척이 쉬워요.
- **고무매트**: 전체가 고무로 된 매트. 물·눈·진흙에 강하고 물청소가 쉬워 비·겨울에 좋아요(냄새·미끄러짐은 주의).
- **트렁크매트**: 트렁크 바닥 보호용. 짐 실을 때 생기는 스크래치·오염을 막아요.

> [!DANGER] **매트는 안전과 직결돼요. 매뉴얼 기준을 꼭 지키세요.**
> - **바닥의 고정 후크에 확실히 고정**하세요(앞좌석·2열에 후크가 있어요). 밀려서 페달을 누르면 사고로 이어져요.
> - **두 장 이상 겹쳐 깔지 마세요.** 순정 매트 위에 하나 더 덧까는 건 매뉴얼이 금지하고 있어요.
> - **후크에 고정할 수 없는 형태이거나, 너무 크거나 두껍거나 미끄러운 매트는 쓰지 마세요.**
> - 새 차라면 **바닥 카페트의 보호필름(비닐)을 먼저 제거한 뒤** 매트를 깔아야 해요(안 떼면 매트가 뜨고 밀려요).

## 언제·어디서·얼마에 하나요?
- **시점**: 신차 **인수 검수를 마친 뒤**에 하세요. 검수 전 시공하면 나중에 하자 원인 다툼이 생겨요.
- **비용 감각(참고용)**: 유리막 코팅 **30~80만원**, PPF는 부위별로 도어컵(손잡이 안쪽 오목한 부분)·도어엣지 **10~20만원**, 헤드램프 **15~30만원**, 전면부·풀 시공은 **100만원~수백만원**까지 차이가 커요. 썬팅은 필름 등급·업체 차이가 커서 견적으로 확인하세요.
- 겁주는 마케팅에 흔들리지 말고 **여러 곳 비교** 후 필요한 것만.

> [!NOTE] 위 금액은 상업 매체·업체 사례를 모은 **참고 수준**이고 공식 고시 가격이 아니에요. 차급·시공 범위·제품 등급에 따라 크게 달라지니 **견적 2~3곳**을 꼭 비교하세요.

> [!TIP] **순정(공장 옵션) 보호필름도 있어요.** 차량 보호 필름Ⅰ **41만원**(범퍼 사이드·미러커버·도어스텝·테일게이트), 차량 보호 필름Ⅱ **40만원**(도어 중앙·엣지·컵·주유구 커버·내비 화면)인데, **캘리그래피 트림에서만** 선택할 수 있어요. **내 차(H-Pick)는 고를 수 없으니** 사설 PPF로 해결하면 돼요.

> [!CHECK] **순서가 중요해요 — PPF 먼저, 썬팅 나중.** PPF를 붙일 때 문을 여닫는 일이 많아 먼저 붙인 썬팅 필름이 상할 수 있어요. 참고로 수명은 **PPF 5~10년, 유리막 코팅 1~3년**(주기적 재시공)이에요.
- **우선순위(예산이 빠듯하면)**: 매트(저렴·바로 필요) → 썬팅(더위·눈부심) → 유리막/PPF(보호, 선택).`,body_md:`새 차 구매 직후 흔히 권유받는 외장·실내 용품의 개념과 차이를 정리한다. 각 항목은 목적이 서로 다르며 중복 시공이 아니다.

## 유리막 코팅
- 정의: 도장 표면(클리어코트)에 무기질(실리카 등) 피막을 형성해 오염·물때·미세 스월(잔흠집)을 완화하고 광택·발수를 부여하는 표면 보호 시공.
- 효과: 세차성 향상(발수로 오염 고착 감소), 광택 유지. 물리적 충격 방어력은 낮다.
- 지속성: 제품·관리에 따라 수개월~수년. 영구 아님, 주기적 관리·재시공 필요.
- 시점: 도장이 가장 깨끗한 신차 출고 직후가 유리.

## 썬팅(틴팅)
- 정의: 유리에 필름을 부착해 자외선·적외선(열)·눈부심·사생활(시선)을 차단.
- 농도: 가시광선 투과율(VLT %)이 낮을수록 어둡다.
- 규정(도로교통법 시행령): 앞면 창유리 70% 이상, 운전석·조수석 옆면 40% 이상 투과. 뒷좌석·후면은 규제 완화. 위반 시 과태료.
- 유리막과 무관(도장 보호 아님).

## PPF(Paint Protection Film, 도장보호필름)
- 정의: 투명 열가소성 폴리우레탄(TPU) 필름을 도장 위에 부착해 스톤칩·긁힘 등 물리적 손상에서 도장을 보호.
- 유리막 대비: 두껍고 방어력 강함, 고가. 통상 앞범퍼·본넷·도어엣지·필러 등 손상 취약부에 부분 시공(풀 PPF는 고가).
- 자가복원(셀프힐링) 특성을 가진 제품도 있음.

## 매트
- 코일매트: PVC 코일 구조로 이물·수분을 하부로 낙하·포집, 통풍·세척 용이.
- 고무매트: 일체형 고무, 방수·방오 우수(우천·동절기 유리), 냄새·미끄러짐 유의.
- 트렁크매트: 적재 공간 바닥 보호(스크래치·오염 방지).
- 안전: 페달 간섭 방지 위해 순정 고정 후크에 정확히 고정. 매트 겹침·밀림 주의.

## 시공 시점·비용 원칙
- 인수 검수 완료 후 시공(검수 전 시공 시 하자 원인 규명 곤란).
- 업체·제품 편차 크므로 비교 견적 권장. 공포 마케팅 경계.
- 예산 우선순위(일반론): 매트 > 썬팅 > 유리막/PPF.`,sources:[{name:"차량 기능·부착물 가이드(썬팅 규정 교차)",url:"",type:"official"},{name:"오토하우스 (유튜브·출고 후 용품/비닐)",url:"https://youtu.be/6DPtWqXV-80",type:"personal"},{name:"현대 취급설명서 MX5HEV — 카 매트 후크",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR/id0d735687d58.html",type:"official"}],source_files:["youtube/p4-용품기초-01.md"],field_tips_md:""},{title:"싼타페 기본 버튼·편의 기능 익히기",summary:["매일 타면서 가장 자주 쓰는 공조·시트·수납·충전 버튼부터, 처음엔 헷갈리기 쉬운 전동 트렁크·오토홀드·서라운드뷰·블랙박스까지 핵심만 골라 정리했어요.","옵션이나 트림에 따라 있고 없는 기능이 갈리기 때문에(영상 속 차량도 하이브리드/가솔린 트림이 서로 달라요), 내 차에 없는 기능이면 자연스러운 거예요.","한 번에 다 외우려 하지 말고, 타는 김에 버튼 하나씩 눌러보면서 익히는 걸 추천해요."],checklist:["오토홀드는 브레이크를 밟은 상태에서 버튼을 눌러 켜기(계기판 표시등 흰색→초록색)","마이현대 앱에 차량을 등록했나요? (첫 차주 5년 무료 원격시동·도어 잠금/해제, 하이패스 결제 연동)","블루투스로 휴대폰을 연결하고 카플레이/안드로이드 오토가 켜져 있는지 확인했나요?","운전석·조수석 온도를 각각 맞추고 '싱크' 버튼으로 동일하게 맞추는 법을 눌러봤나요?","통풍시트·열선시트·스티어링 휠 열선 버튼 위치를 손으로 눌러보며 찾아봤나요?","트렁크 버튼을 길게 눌러 낮은 주차장에 맞는 '트렁크 열림 높이'를 저장해봤나요?","차키 접근 시 트렁크가 자동으로 열리는 '스마트 테일게이트' 기능이 켜져 있는지, 원치 않으면 끄는 법을 확인했나요?","오토홀드를 켜고 신호 대기 중 브레이크에서 발을 떼봤나요?","글러브박스 안쪽 SD카드 위치와 빌트인캠(블랙박스) 영상 확인 방법을 확인했나요?"],body_easy_md:`## 에어컨(공조) 다루기

### 켜고 끄기, 온도 맞추기
공조가 꺼진 상태에서 운전석 쪽 온도조절 다이얼 가운데를 누르면 켜져요. 누를 때마다 오토 1단계 → 2단계 → 3단계로 바뀌는데, 단계에 따라 바람 세기가 달라져요(3단계가 가장 세고 시끄러워요). 온도는 오른쪽으로 돌리면 0.5도씩 올라가고 왼쪽으로 돌리면 0.5도씩 내려가요.

<details>
<summary>참고 사진 — 전자동(AUTO) 버튼</summary>

![전자동(AUTO) 버튼](/img/aircon-auto-button.jpg)
*운전석 온도조절 다이얼 가운데를 누르면 AUTO가 켜져요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

</details>

> [!TIP]
> 22도 근처로 맞춰 놓으면 계절 상관없이 차가 알아서 실내 온도를 그 온도로 유지해줘요. 처음엔 이것저것 건드리지 말고 온도만 맞춰두는 걸 추천해요.

### 운전석·조수석 따로 vs 같이
운전석과 조수석 온도는 각각 다르게 설정할 수 있어요. 두 자리 온도를 다시 똑같이 맞추고 싶으면 조수석 쪽 온도조절 가운데의 '싱크(SYNC)' 버튼을 누르면 운전석 온도 기준으로 맞춰져요.

![조수석 온도 다이얼 가운데의 SYNC 버튼](/img/aircon-sync.jpg)
*조수석 온도 다이얼 가운데의 SYNC 버튼 (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*


> [!NOTE] **'드라이버 온리'**는 운전석에만 공조 바람이 나오게 해 **혼자 탈 때 에너지를 아끼는** 기능이에요. 트림·사양에 따라 없을 수 있어요.

### 바람이 어디로 나올지 고르기(바람 방향)
바람이 얼굴 쪽으로 나올지 발 쪽으로 나올지는 **바람 방향 선택 버튼**으로 고르는데, 누를 때마다 아래 네 가지로 돌아가며 바뀌어요.

| 고른 위치 | 바람이 나오는 곳 | 주로 쓰는 때 |
|---|---|---|
| 얼굴 | 가슴·얼굴 쪽 | **여름 냉방** |
| 얼굴+발 | 가슴·얼굴과 발끝에 동시에 | 봄·가을 |
| 발 | 발끝 쪽 | **겨울 난방** |
| 발+앞유리 | 발끝과 앞유리 쪽에 동시에 | 겨울 아침 |

> [!TIP]
> **더운 바람은 발쪽, 찬바람은 얼굴쪽**이 기본이에요. 더운 공기는 저절로 위로 올라가고 찬 공기는 아래로 내려가기 때문에, 이렇게 두면 실내가 훨씬 빨리 고르게 데워지고 시원해져요.
> '발' 위치로 둬도 앞유리에 **김서림**이 생기지 않게 **앞유리 쪽으로 약간의 바람은 계속 나와요.** 고장이 아니에요.

<details>
<summary>참고 사진 — 버튼과 송풍구 위치</summary>

![바람 방향 선택 버튼](/img/aircon-mode-button.jpg)
*바람 방향 선택 버튼이에요. 누를 때마다 방향이 바뀌어요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

![실내 송풍구 위치](/img/aircon-vent-layout.jpg)
*바람이 나오는 구멍(송풍구) 위치예요. A는 앞유리, B·D·F는 얼굴 쪽, C·E·G·H는 발끝과 2·3열 쪽이에요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

</details>

### 에어컨과 송풍, 그리고 공기 순환
에어컨 버튼을 꺼두면 찬바람 없이 그냥 바람만 나와요(이걸 '송풍'이라고 해요). 시원한 바람이 필요하면 에어컨 버튼을 꼭 켜야 해요.

**공기 순환 버튼**(매뉴얼에서는 '내기/외기 순환 버튼'이라고 불러요)은 **바깥 공기를 들일지 막을지** 고르는 버튼이에요. 누를 때마다 두 상태가 번갈아 바뀌어요.

- **실내 순환**(버튼 표시등 켜짐) — 바깥 공기를 막고 차 안 공기만 돌려요. **터널을 지날 때, 앞차 배기가스 냄새가 들어올 때**, 또는 **빨리 시원하게·따뜻하게** 만들고 싶을 때 써요.
- **외기 유입**(버튼 표시등 꺼짐) — 바깥 공기가 들어와요. **환기할 때** 써요. 평소엔 이 상태가 기본이에요.

워셔액을 수동으로 쓰면 알코올 냄새가 안 들어오도록 자동으로 실내 순환으로 바뀌기도 해요(바깥 기온이 영하 5도보다 낮으면 이 자동 전환이 작동하지 않는데, 고장이 아니에요).

> [!WARN] **실내 순환으로 오래 달리지 마세요.** 유리에 습기가 잘 차고, 숨 쉬며 나온 이산화탄소가 쌓여 **두통이나 졸음**이 올 수 있다고 매뉴얼이 경고해요. **평소에는 외기 유입 상태로 두는 걸 권장**하고, 실내 순환은 필요할 때만 잠깐 쓰세요.

> [!TIP]
> **앞유리 성에 제거 버튼**을 누르면 — 성에는 추운 날 유리 표면에 **얼어붙은 얇은 얼음**이에요 — 차량 설정의 '김서림 자동 제거'가 켜져 있는 경우 **바깥 공기 유입이 자동으로 선택되고 바깥 온도에 따라 에어컨도 알아서 켜져요.** 마른 공기를 불어넣어 김을 빨리 걷어내려고 그러는 거예요. 버튼을 한 번 더 누르면 누르기 전 설정으로 돌아가요.

### 공기 청정(실내 미세먼지 표시)
차 안 미세먼지 농도를 재서 공조 화면에 **네 단계 색깔**로 보여줘요.

| 표시 | 농도(㎍/m³) |
|---|---|
| 좋음(파란색) | 15 이하 |
| 보통(초록색) | 35 이하 |
| 나쁨(주황색) | 75 이하 |
| 매우 나쁨(빨간색) | 76 이상 |

㎍/m³은 **공기 1㎥(가로·세로·높이 각 1m 크기)에 들어 있는 먼지 무게**를 뜻해요. 숫자가 작을수록 깨끗하다는 뜻이고, 색만 봐도 되니 숫자는 몰라도 괜찮아요.

> [!CHECK] **'좋음'이 좀처럼 안 뜬다면 에어컨 필터를 점검할 때예요.** 필터가 오염되면 농도가 계속 높게 표시돼요. 측정 방식 특성상 실제와 차이가 있을 수 있으니 **수치는 참고용**으로 보세요.

### 그 밖의 공조 버튼
- **성에 제거 버튼**: 앞유리와 앞좌석 옆유리에 얼어붙은 성에를 빠르게 녹여줘요.
- **뒷유리·사이드미러 열선**: 유리를 데워서 김이나 물방울을 없애줘요. 비·눈 올 때 뒤가 잘 보여요.
- 통풍시트·열선시트·핸들(스티어링 휠) 열선 버튼도 이 공조 버튼들 근처에 있어요(자세한 단계는 아래 시트 카드 참고).
- **OFF 버튼**으로 공조를 꺼도 **바람 방향과 실내 순환/외기 유입은 그대로 조절**할 수 있어요.
- 3열(맨 뒷줄)에도 에어컨 바람이 나와요. 앞좌석에서 **FRONT/REAR(앞/뒤) 전환 버튼**을 누르면 3열 설정 화면으로 바뀌고, 5초 동안 아무것도 안 누르면 앞좌석 화면으로 돌아와요.

## 시트·핸들 편의기능(통풍·열선·릴렉션 컴포트)

### 통풍시트·열선시트·핸들 열선
통풍시트는 버튼을 누를 때마다 1→2→3단계로 켜져요. 열선시트는 버튼을 위쪽으로 눌러서 1·2·3단계로 조절해요. 스티어링 휠(핸들) 열선은 버튼을 한 번 누르면 1단계, 두 번 누르면 2단계예요.

> [!NOTE] 통풍·열선시트·열선핸들은 싼타페 **전 트림 기본**이에요(트림 때문에 없진 않아요). 단 **1열은 통풍+열선, 2열은 열선만(통풍 없음), 3열은 둘 다 없어요.**



![앞좌석 통풍 시트 스위치](/img/seat-ventilation.jpg)
*앞좌석 통풍 시트 스위치 (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

<details>
<summary>참고 사진 — 앞좌석 열선시트 스위치</summary>

![앞좌석 열선시트 스위치](/img/seat-warmer-switch.jpg)
*공조 패널 아래쪽, 위로 눌러 1·2·3단계로 올려요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

</details>

<details>
<summary>참고 사진 — 스티어링 휠(핸들) 열선 버튼</summary>

![스티어링 휠(핸들) 열선 버튼](/img/steering-wheel-warmer.jpg)
*한 번 누르면 1단계, 두 번 누르면 2단계예요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

</details>

> [!TIP]
> 셋업 > 시트 메뉴의 **'공조연동 자동 제어'(스마트 열선/통풍)**를 켜두면 통풍·열선 시트와 핸들 열선이 자동으로 조절돼요. 기준은 **에어컨 설정 온도가 아니라 차량 안팎의 실제 온도**예요(더우면 통풍, 추우면 열선이 알아서 작동).

### 시트 조절과 릴렉션 컴포트 시트
앞뒤·높낮이·등받이 각도는 시트 옆의 조절 버튼으로 맞추면 돼요. 은색 원형 버튼을 위로 올리면 옆구리를 잡아주는 부분(사이드 볼스터)과 등받이가 부풀어 조여주고, 아래로 내리면 풀려요.

시트 옆면의 **릴렉션 기능 스위치 뒷부분을 길게 누르면** 등받이·시트 쿠션·다리 받침대가 미리 저장된 위치로 움직이면서 잠시 쉴 수 있는 자세(릴렉션 컴포트 시트)가 돼요. **앞부분을 길게 누르면** 원래 자세로 돌아와요.

![릴렉션 기능 스위치](/img/relaxion-switch.jpg)
*뒷부분(1)을 길게 누르면 눕고, 앞부분(2)을 길게 누르면 원래대로 돌아와요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

> [!DANGER] **안전벨트를 맨 채로 눕히지 마세요.** 시트를 눕히면 안전벨트가 가슴에 밀착되지 않아, 그 상태에서 사고가 나면 부상 위험이 커진다고 매뉴얼이 경고해요. **주행 중에는 절대 작동하지 말고**, 주차하거나 완전히 멈춘 상태에서 쉴 때만 쓰세요.

> [!NOTE] **안 눕는다고 고장이 아니에요.** 아래 경우에는 운전석 릴렉션 기능이 아예 작동하지 않아요.
> - 기어가 **'P'(주차)가 아닐 때**
> - 차가 **3km/h 이상으로 움직이고 있을 때**
> - 운전석 자세 메모리 시스템의 **초기화가 필요할 때**
>
> 그리고 **뒷좌석에 사람이나 짐이 있으면 쓰지 마세요.** 시트가 뒤로 움직이면서 부딪힐 수 있어요. **뒷좌석(2열)이 뒤로 끝까지 물러나 있고 등받이가 세워진 상태**에서만 쓰라고 매뉴얼에 적혀 있어요.

<details>
<summary>자세한 조작법 — 미세 조정·복귀·초기화</summary>

**눕힌 다음 더 편하게 맞추기**
릴렉션 자세가 다 끝난 뒤에도 평소 쓰는 시트 조절 스위치로 조금씩 더 맞출 수 있어요. 앉는 부분(쿠션) 각도 스위치 앞쪽을 올리면 쿠션이 위로, 내리면 아래로 조금씩 움직여요. 등받이 각도 스위치 위쪽을 뒤로 당기면 등받이가 더 눕고, 앞으로 당기면 세워져요.

![릴렉션 기능 스위치(시트 옆면)](/img/relaxion-seat-switch.jpg)
*시트 옆면의 릴렉션 기능 스위치예요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

**원래 자세로 돌아올 때**
- 운전석은 **마지막으로 'P'(주차)에 넣었을 때의 시트 위치**로 돌아가요.
- 동승석은 **미리 저장해 둔 위치**로 돌아가요. 저장하려면 시트를 원하는 위치로 맞춘 뒤 릴렉션 스위치 **앞부분을 3회 연속** 누르면 돼요.
- 되돌릴 때는 **릴렉션 스위치만** 쓰세요. 다른 시트 조절 스위치로 움직이면 쿠션이 끝까지 안 내려갈 수 있어요.

**실수로 작동됐을 때**
시트가 저절로 움직이기 시작해 당황했다면, 시트 조절 스위치를 건드리면 그 자리에서 멈춰요.

**동승석 초기화(정상 작동하지 않을 때)**
등받이 각도 스위치 위쪽을 뒤로 + 좌석 높낮이(또는 쿠션 각도) 스위치를 아래로 + 릴렉션 스위치 앞부분, 이 **세 개를 동시에 약 5초** 누르면 돼요. 시트가 순서대로 움직이고 멈추면 끝이에요. 시작 전에 동승석 주변에 장애물이 없는지 확인하세요. 운전석 초기화는 '운전석 자세 메모리 시스템' 항목을 따라요.

</details>
### 자세 메모리(운전석)
원하는 운전 자세를 맞춘 다음 자세 메모리 버튼을 길게 누르면 계기판에 '설정 1에 저장되었습니다'처럼 표시되면서 그 자세가 저장돼요. 이후에는 정차 중에 저장한 번호 버튼만 누르면 그 자세로 바로 돌아와요.

### 헤드레스트·조수석·승하차 편의
헤드레스트를 빼려면 **끝까지 위로 올린 다음, 잠금 해제 버튼을 누른 상태에서** 위로 당겨 분리해요(그냥 당기면 빠지지 않아요). 다시 넣을 때도 잠금 해제 버튼을 누른 상태에서 내리면 끝까지 내려가요.

![헤드레스트 높이 조절·분리](/img/headrest-adjust.jpg)
*헤드레스트 높이 조절·분리 (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

조수석은 **등받이 왼쪽의 '동승석 조절 스위치'**(흔히 '워크인 디바이스'라고 부르는 그 버튼이에요)로 등받이 각도와 앞뒤 위치를 운전석이나 뒷자리에서도 조절할 수 있어요. 눕히는 기능(릴렉션 컴포트 시트)은 **동승석 옆면의 릴렉션 기능 스위치**로 따로 조작해요. 타고 내릴 때 시트가 자동으로 앞뒤로 움직이게 하는 '승하차 편의' 기능은 셋업 > 시트 메뉴에서 켜고 끌 수 있어요.

## 수납공간·컵홀더·충전(USB/무선충전)

### 콘솔박스와 숨은 수납공간
운전석 옆 콘솔박스는 앞으로도 뒤로도 열려요. 콘솔박스 아래쪽을 정리하면 뒷좌석까지 이어지는 공간이 있어서, 앞뒤로 물건을 주고받을 수 있는 통로로도 쓸 수 있어요. 글러브박스 위쪽에도 작은 수납공간이 있어요.

### USB(C타입) 충전
C타입 단자 중 오른쪽은 **충전 전용**이에요. 가운데 단자에는 **'USB 단자 전환 버튼'**이 있어서, 시동이 걸린 상태에서 이 버튼을 누르면 두 가지 모드로 번갈아 바뀌어요.

![USB 단자 전환 버튼과 표시등](/img/usb-port-switch.jpg)
*배터리 모양 표시등(1)과 USB 모양 표시등(2)이 있어요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

- **배터리 모양 표시등(1)이 켜지면** — 전자 기기 충전만 돼요.
- **USB 모양 표시등(2)이 켜지면** — 음악 파일을 읽거나 카플레이·안드로이드 오토를 연결할 수 있어요.

표시등이 켜진 뒤에야 단자가 동작해요. 아무 불도 안 들어와 있으면 꽂아도 반응이 없어요.

> [!CHECK]
> 휴대폰을 연결했는데 카플레이가 안 뜬다면, 가운데 단자가 **미디어 모드(USB 모양 표시등)**로 켜져 있는지부터 확인해보세요. 충전 모드로 켜져 있으면 충전만 되고 카플레이는 안 떠요.

<details>
<summary>참고 사진 — 충전 전용 USB 단자 위치</summary>

![충전 전용 USB 단자 위치](/img/usb-charge-outlet.jpg)
*콘솔 앞쪽에 따로 있는 충전 전용 C타입 단자예요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

</details>


### 무선충전과 UVC 살균(옵션)
무선충전 패드는 차 문이 열려 있으면 작동하지 않을 수 있어요(문을 닫으면 다시 작동해요). 셋업 > 차량 편의에서 무선충전을 운전석만/조수석만/전체 끄기로 설정할 수 있어요. UVC 살균 기능(옵션)은 켠 상태에서 열고 지갑 같은 물건을 넣어두면 살균해주고, 시간이 지나면 자동으로 꺼져요.

## 계기판(클러스터)과 헤드업 디스플레이(HUD)

### 클러스터 테마
셋업 > 클러스터 > 테마 선택에서 계기판 디자인을 바꿀 수 있어요(심플/모던/클래식 등). 드라이브 모드 연동을 켜두면 에코·스포츠 등 주행모드를 바꿀 때 계기판 디자인도 같이 바뀌어요.

### 계기판 가운데 화면(클러스터 표시창) 바꿔 보기
핸들 너머 계기판에서 **왼쪽 속도계와 오른쪽 회전계 사이에 있는 화면**이에요. 여기에 뭘 띄울지는 **핸들 오른쪽 스위치**로 고르면 돼요.

![클러스터 조작 스위치](/img/cluster-menu-switch.jpg)
*핸들 오른쪽의 모드 버튼과 위/아래·OK 스위치예요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

| 조작 | 하는 일 |
|---|---|
| 모드 버튼 짧게 | 화면 종류(뷰) 바꾸기 |
| 위/아래 | 정보 넘겨 보기 |
| OK 짧게 | 화면에 뜬 기능 실행 |
| OK 길게 | 도움말 보기 / 일부 정보 초기화 |

**화면 종류는 세 가지**예요.

- **주행 보조 뷰** — 스마트 크루즈 컨트롤, 차로 유지 보조 장치 같은 기능이 지금 켜져 있는지·어떻게 작동 중인지 보여줘요.
- **내비게이션 뷰** — 내비게이션 길 안내를 계기판에도 띄워줘요.
- **유틸리티 정보 뷰** — 주행 거리·연비 같은 차량 정보 모음이에요. 위/아래로 넘겨 봐요.

**유틸리티 정보에서 볼 수 있는 것**

1. **현 주행 정보** — 이번에 달린 거리·시간·연비. 시동을 끄고 운전석 문을 열거나, 3분이 지난 뒤 다시 시동을 걸면 **자동으로 0에서 다시 시작**해요.
2. **주유 후 정보** — 마지막 주유 이후의 거리·시간·연비
3. **누적 정보** — 내가 직접 초기화한 뒤부터 쌓인 기록 (2·3번은 **OK 버튼을 길게** 눌러 초기화)
4. **냉각수 수온계** — 엔진을 식히는 물의 온도예요. 표시가 **C(차가움)와 H(뜨거움) 사이**에 있으면 정상이에요. H 쪽까지 올라가면 엔진이 과열됐을 수 있으니 안전한 곳에 세우고 식히세요.
5. **타이어 공기압** — 네 바퀴의 공기압이 각각 숫자로 나와요(권장 35 **psi**).
6. **하이브리드 에너지 흐름도** — 지금 엔진으로 달리는지 모터로 달리는지, 배터리가 충전되는 중인지 그림으로 보여줘요.
7. **4륜 구동력 배분** — 앞뒤 바퀴에 힘이 어떻게 나뉘는지 보여줘요. **AWD**(사륜구동) 차에만 있어서 **내 차(2WD)에는 안 나와요.**
8. **서비스 메시지** — 점검이 필요할 때 뜨는 안내 메시지를 모아서 보여줘요.

<details>
<summary>참고 사진 — 실제 화면 모습</summary>

![현 주행 정보 화면](/img/cluster-driving-info.jpg)
*이번 주행의 거리·시간·연비를 보여줘요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

![타이어 공기압 화면](/img/cluster-tire-pressure.jpg)
*네 바퀴 공기압이 psi 단위로 표시돼요(권장 35 psi). (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

</details>

> [!TIP]
> 시동을 끄면 **주행 정보가 4초 동안** 화면에 떠요. 오늘 얼마나 달렸고 연비가 어땠는지 내릴 때 확인할 수 있어요.

> [!WARN]
> **달리면서 설정을 바꾸지 마세요.** 화면을 보느라 주의가 흐트러져 사고로 이어질 수 있어요. 경고등 종류와 대처는 **'경고등이 켜졌을 때'** 가이드를 참고하세요.

### 헤드업 디스플레이(HUD)
셋업 > 클러스터 > HUD 메뉴에서 사용 여부를 선택할 수 있고, 내 눈높이에 맞게 높이·기울기·밝기를 조절할 수 있어요.

![헤드업 디스플레이(HUD)](/img/hud-overview.jpg)
*헤드업 디스플레이(HUD) (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*


> [!NOTE] **HUD가 뭐예요?** 앞유리에 **계기판과 내비게이션의 주요 정보를 비춰 주는** 장치예요. 고개를 숙여 계기판을 보지 않아도 돼서 **시선이 분산되지 않는 게** 가장 큰 장점이에요(속도·내비 안내 등이 표시돼요).
> 옵션/트림에 따라 없을 수 있고, 표시 항목은 사양에 따라 달라요. 편광 선글라스를 쓰면 잘 안 보일 수 있어요.

## 도어와 트렁크(전동 테일게이트)

### 문 여는 방식이 자리마다 달라요
운전석은 문이 잠긴 상태에서 도어 캐치를 한 번 당기면 바로 열려요. 그런데 조수석과 2열은 한 번 당기면 잠금만 풀리고, 한 번 더 당겨야 문이 열려요. 고장이 아니니 당황하지 마세요.



![실내 도어 핸들 — 당기는 방향](/img/inside-door-handle.jpg)
*실내 도어 핸들 — 당기는 방향 (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

> [!CHECK] **문이 하나라도 열려 있으면 중앙 잠금 버튼을 눌러도 안 잠겨요.** 차 안의 중앙 도어 잠금 버튼은 도어가 열린 상태에서 누르면 잠겼다가 바로 다시 풀려요. 짐을 싣다가 "왜 안 잠기지?" 싶으면 열려 있는 문이 없는지부터 확인하세요.

> [!NOTE]
> 전자식 차일드 락을 켜두면(주황 불) 2열에서 창문도 안 열리고 문도 안 열려요. 아이·반려동물이 타는 뒷좌석에 켜두면 안전해요.

![전자식 차일드 락 버튼](/img/child-lock-button.jpg)
*전자식 차일드 락 버튼이에요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

> [!CHECK] **'안전 하차 보조(SEA)'와 헷갈리지 마세요.** 이 기능은 차일드 락이 **꺼져 있을 때 자동으로 켜주는 게 아니에요.** **차일드 락이 이미 켜져 있는 상태**에서 뒤쪽에서 차가 다가오면, 운전자가 해제 버튼을 눌러도 **잠금 해제를 막아** 뒷좌석 사람이 문을 여는 걸 방지해 줘요. 즉 **평소에 차일드 락을 켜 둬야** 이 보호가 작동해요.

### 트렁크 열고 닫기
차키의 홀드 버튼을 길게 누르면 트렁크가 열리고, 다시 길게 누르면 닫혀요. 중간에 손을 떼면 그 자리에서 멈추고, 완전히 닫으려면 닫힐 때까지 계속 누르고 있어야 해요. 후면 카메라 아래쪽 버튼을 눌러도 수동으로 열 수 있어요.

<details>
<summary>참고 사진 — 스마트키의 테일게이트 버튼</summary>

![스마트키의 테일게이트 버튼](/img/smartkey-tailgate-button.jpg)
*스마트키 아래쪽 HOLD 버튼을 길게 눌러요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

</details>

### 트렁크 높이 저장(낮은 주차장 대비)
트렁크가 다 열리면 너무 높아서 낮은 주차장 천장에 부딪힐 수 있어요. 트렁크 버튼을 길게 눌러 원하는 높이에서 멈추면, 그 높이가 저장돼서 다음부터는 그 높이까지만 열려요.

> [!TIP]
> 지하주차장이 낮은 곳에 자주 주차한다면 이 기능을 꼭 한 번 설정해두세요.

### 스마트 테일게이트(자동으로 열리는 트렁크)와 수동 오픈
차키를 가진 채로 트렁크 뒤에 다가가면 자동으로 트렁크가 열리는 기능이 있어요. 열리는 도중 버튼을 누르면 그 동작이 멈춰요. 이 자동 열림 자체를 원하지 않으면 셋업 > 차량 > 도어 메뉴에서 끌 수 있어요. 방전 등으로 전동 트렁크가 안 열릴 때는 트렁크 안쪽의 수동 레버를 이용해 여는 방법도 있어요.

> [!NOTE] **겨울에 자동 열림이 잘 안 될 수 있어요.** 기온이 영하로 떨어지면 시스템 특성상 자동 열림이 원활하지 않을 수 있다고 매뉴얼에 적혀 있어요. 고장이 아니니 그럴 때는 버튼이나 스마트키로 열면 돼요.

> [!WARN]
> 싼타페는 트렁크가 열릴 때 뒤로 많이 빠지는 구조예요. 스토퍼가 있는 주차 공간에 바짝 붙여 세우면 트렁크가 완전히 안 열릴 수 있으니, 뒷바퀴를 스토퍼에서 충분히 떨어뜨려 주차하는 게 좋아요.

<details>
<summary>참고 사진 — 트렁크를 열 때 필요한 여유 공간</summary>

![트렁크를 열 때 필요한 여유 공간](/img/tailgate-clearance.jpg)
*매뉴얼 기준 뒤쪽 약 75cm, 위쪽 약 50cm의 공간이 필요해요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

</details>


## 오토홀드와 전자식 파킹 브레이크

### 오토홀드
**브레이크 페달을 밟은 상태에서** AUTO HOLD 버튼을 누르면 켜져요(그냥 누르면 안 켜져요).

![계기판의 AUTO HOLD 표시등](/img/autohold-indicator.jpg)
*AUTO HOLD 버튼(화살표)과 계기판에 켜지는 표시등이에요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*


- 켜면 계기판의 **AUTO HOLD 표시등이 흰색**(대기)으로 켜져요.
- 주행 중 브레이크를 밟아 차가 멈추면 **표시등이 초록색**으로 바뀌며 실제로 작동해요. 이때는 **브레이크에서 발을 떼도 차가 밀리지 않아요.**
- 신호 대기가 길 때 다리가 편해지는 기능이에요. 출발할 때는 그냥 가속 페달을 밟으면 풀려요.

> [!WARN] **앞차와 아주 가깝거나 내리막에 정차했을 때는** 안전을 위해 자동 정차를 **수동으로 해제**하는 게 좋아요(브레이크를 밟은 상태에서 AUTO HOLD 버튼을 누르면 해제돼요).

> [!NOTE]
> 하이브리드에서는 오토홀드 버튼을 길게 누르면 브레이크 디스크 클리닝 기능이 실행돼요. 브레이크 디스크에 녹이 슬었을 때 쓰는 기능이에요.

### 전자식 파킹 브레이크(EPB)
예전 차의 '사이드 브레이크'를 버튼으로 바꾼 거예요. 운전석 오른쪽에 **Ⓟ 표시가 있는 스위치**가 그것이에요.

![전자식 파킹 브레이크(EPB) 스위치 위치](/img/epb-switch.jpg)
*Ⓟ 스위치를 당기면 걸리고, 누르면 풀려요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

- **거는 법**: **브레이크 페달을 밟은 상태에서** 스위치를 **당기면** 걸려요(계기판에 브레이크 경고등이 켜져요).
- **푸는 법**: 스위치를 **누르면** 풀려요. (보통은 그냥 가속 페달을 밟으면 자동으로 풀려요.)
- **자동으로 걸리기도 해요**: 오토홀드로 정차한 상태에서 **시동을 끄면 자동으로 EPB가 걸려요.**

> [!DANGER] **비상 제동(정말 위급할 때만)** — 주행 중 브레이크 페달이 말을 듣지 않으면, 이 스위치를 **당기고 있는 동안에만** 제동이 걸려요. **손을 떼면 제동이 멈추므로** 차가 설 때까지 계속 당기고 있어야 해요(정지하면 그대로 주차 브레이크가 걸려요).
> 평소 주행 중에는 **절대 조작하지 마세요.** 매뉴얼도 "매우 위험한 상황이 발생할 수 있으므로 반드시 비상시에만" 쓰라고 경고해요.

> [!NOTE] 스위치를 과하게·계속 조작하면 **'EPB' 경고등**이 켜질 수 있어요. 이때는 시동을 껐다가 잠시 뒤 다시 걸면 대부분 정상으로 돌아와요. 계속 켜져 있으면 블루핸즈·하이테크센터에서 점검받으세요.

### 경사로 저속 주행(DBC)과 차체자세제어(ESC)
![경사로 저속 주행(DBC) 버튼](/img/dbc-button.jpg)
*이 버튼으로 켜고 꺼요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

**경사로 저속 주행(DBC)**은 가파른 내리막에서 **브레이크를 밟지 않아도 차가 알아서 저속을 유지**해 주는 기능이에요. 운전자는 핸들 조작에만 집중할 수 있어요.

- **시동을 걸 때마다 꺼져 있어요.** 쓰려면 그때그때 버튼을 눌러 켜야 해요.
- **60km/h 이하**에서 버튼을 누르면 '대기' 상태가 되고, **브레이크·가속 페달을 밟지 않은 상태에서 40km/h 이하**가 되면 실제로 작동해요.
- 작동 중에도 **가속·브레이크 페달로 속도를 조절**할 수 있어요(작동 범위 4~40km/h, 후진 2.5~8km/h).

**차체자세제어(ESC)** 버튼은 짧게 누르면 바퀴가 헛도는 걸 막아 주는 제어(구동력 제어)만 잠깐 해제되고, 3초 이상 길게 누르면 완전히 꺼져요. 눈길이나 진흙에 바퀴가 빠져서 헛돌 때만 잠깐 쓰는 기능이고, 평소에는 켜진 상태로 두는 게 좋아요.

<details>
<summary>참고 사진 — ESC OFF 버튼 위치</summary>

![ESC OFF 버튼 위치](/img/esc-off-button.jpg)
*운전석 왼쪽 아래 버튼 묶음에 있어요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

</details>


## 후방 카메라·서라운드뷰·원격 주차

### 주차/뷰 버튼(모니터 버튼)
이 버튼을 **짧게** 누르면 앞·뒤·위 등 여러 각도의 카메라 화면이 뜨고, **길게** 누르면 차 밖에서 조종하는 원격 주차 기능이 실행돼요. 매뉴얼에서는 '주차/뷰 버튼'이라고 불러요.

![주차 뷰(모니터) 버튼](/img/parking-view-button.jpg)
*주차 뷰(모니터) 버튼 (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*


> [!NOTE]
> **내 차(H-Pick)에는 서라운드뷰(360도 화면)가 있어요.** 차 주변을 위에서 내려다보듯 보여주는 기능이라 주차할 때 큰 도움이 돼요.

### 서라운드뷰 화면에는 뭐가 나오나
앞·뒤 그리고 **양쪽 사이드미러 아래**에 달린 카메라 네 대의 영상을 합쳐서 보여줘요. 화면 종류는 이렇게 나뉘어요.

- **탑 뷰** — 차를 위에서 내려다보는 것처럼 보여줘요. 주차선 맞출 때 제일 편해요.
- **전방 뷰 / 후방 뷰** — 앞·뒤 카메라 화면을 그대로 보여줘요.
- **사이드 뷰** — 차 옆면(앞바퀴 근처)을 보여줘요. **연석**에 바퀴 테두리(휠)를 긁는 걸 막을 때 유용해요.
- **와이드 뷰** — 같은 방향을 더 넓게 보여줘요.
- **3D 뷰** — 입체로 보여주고, **화면을 손가락으로 끌어 각도를 바꿀 수 있어요.** 3D 뷰 버튼을 다시 누르면 처음 각도로 돌아와요.

![서라운드뷰 3D 화면](/img/svm-3d-view.jpg)
*왼쪽은 카메라 영상, 오른쪽은 위에서 내려다본 화면이에요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

**언제 어떤 게 나오나**

- **10km/h보다 느릴 때** 주차/뷰 버튼을 누르면 탑 뷰·전방 뷰·사이드 뷰·와이드 뷰를 모두 쓸 수 있어요. 주차할 때가 여기예요.
- **10km/h를 넘겨 달릴 때**는 주차용 화면이 빠지고 **전방 뷰와 와이드 뷰만** 남아요. 반대로 주차용 화면을 보다가 10km/h를 넘기면 화면이 저절로 꺼져요.
- **기어를 'R'(후진)에 넣으면 뒤쪽 화면이 자동으로** 떠요. 버튼을 누를 필요가 없어요.

> [!TIP]
> 화면에 그려진 **가로선은 거리 표시**예요. 후방 뷰에서는 차에 가까운 선부터 **약 0.5m, 1m, 2.3m** 지점을 뜻해요. 탑 뷰에서는 **트렁크를 다 열려면 이만큼 떨어져야 하는 거리**와 **약 2m** 지점을 알려줘요. 주차할 때 이 선을 기준으로 잡으면 편해요. 단 **3D 뷰에는 이 선이 안 나와요.**

> [!WARN] **화면만 보고 주차하지 마세요.** 카메라 네 대의 영상을 이어 붙여 만든 화면이라 화면 속 위치와 거리가 실제와 다를 수 있어요. 짐을 많이 실어 차가 뒤로 기울면 거리선도 어긋나요. 매뉴얼도 **고개를 돌려 직접 눈으로 확인**하라고 해요.

> [!NOTE] **화면이 이상해 보이는 정상적인 경우도 있어요.** 트렁크나 앞문이 열려 있거나 **사이드미러가 접혀 있으면** 화면이 제대로 안 나오고 왼쪽 위에 경고 아이콘이 떠요. 겨울에 오래 서 있거나 실내 주차장에 있으면 배기가스 때문에 뒤쪽 화면이 뿌옇게 보일 수 있는데 이것도 고장이 아니에요.

### 스마트키로 원격 전후진 (원격 스마트 주차 보조)
양옆이 좁아 **문을 열고 타고 내리기 어려운 자리**에서, 차 밖에서 스마트키로 차를 앞뒤로 움직이는 기능이에요.

![좁은 주차 공간에서 원격으로 앞뒤 이동](/img/rspa-forward-reverse.jpg)
*밖에서 조종해 차를 넣고 뺄 수 있어요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

쓰는 순서는 이래요.
1. 차에서 내려 **도어를 잠근 뒤** 스마트키의 **원격 시동 버튼을 길게** 눌러 시동을 걸어요.
2. 스마트키의 **전진·후진 버튼을 누르고 있는 동안에만** 차가 그 방향으로 움직여요. **손을 떼면 즉시 멈춰요.**
3. 멈추고 싶으면 **원격 시동 버튼**을 누르면 기능이 종료돼요(차 안의 **주차 안전 버튼**으로도 종료돼요).

> [!WARN] 차에서 **약간 떨어져 주변을 보면서** 조작하세요. 사람·장애물이 들어올 수 있고, 눈길·경사로·요철처럼 조건이 나쁘면 기능이 제대로 작동하지 않을 수 있어요.

### 후방 주차 충돌방지 보조(PCA)
후진 주차 중 뒤에 사람이나 장애물이 감지되면 **차가 스스로 브레이크를 잡아 주는** 안전 기능이에요.

- **아무 때나 잡아주는 건 아니에요.** 기어가 **'R'(후진)**이고 **보행자는 10km/h 이하, 물체는 4km/h 이하**로 천천히 후진할 때만 작동해요. 그보다 빠르게 후진하면 차가 대신 브레이크를 잡아주지 않아요.
- **'R'에 넣은 뒤 1회만** 작동해요. 다른 기어로 갔다가 다시 'R'로 넣으면 또 작동할 수 있게 돼요.
- 빠른 속도로 후진하다 갑자기 급제동하는 게 불편하면 **주차 안전 버튼을 2초 이상 눌러** 끄고 켤 수 있어요.

> [!WARN] **차가 대신 잡아준 뒤에는 꼭 브레이크를 밟으세요.** 그대로 약 5분이 지나면 차가 잡고 있던 브레이크가 풀리고, 대신 전자식 파킹 브레이크(EPB)가 걸려요. 풀리기 전에 내 발로 브레이크를 밟고 주변을 살피는 게 맞아요.

> [!WARN] 이건 **사고를 줄여 주는 안전장치**예요. 불편하다고 꺼 두면 그만큼 보호를 못 받으니, 꼭 필요할 때만 잠깐 끄고 **평소에는 켜 두는** 걸 권해요.

## 스마트폰 연결(블루투스·카플레이/안드로이드 오토)

### 블루투스 페어링
셋업 > 기기 연결 > 신규 추가를 누르고, 휴대폰 블루투스에서 차량 이름을 찾아 연결하면 돼요. 연결할 때 연락처 동기화 여부, 카플레이 사용 여부를 선택할 수 있어요.

### 카플레이/안드로이드 오토 켜고 끄기
기기 연결 메뉴의 '폰 프로젝션'에서 카플레이·안드로이드 오토 사용 여부를 다시 켜고 끌 수 있어요.

> [!CHECK]
> 카플레이가 갑자기 연결이 안 될 때는 이 폰 프로젝션 설정이 꺼져 있지 않은지부터 확인해보세요.

### 즐겨찾기 버튼(모드/별표)
핸들에 있는 모드 버튼과 별표 버튼에는 내가 자주 쓰는 기능(화면 끄기, 통화 거절, 후석 취침 모드 등)을 직접 지정해서 즐겨찾기처럼 쓸 수 있어요.

## 빌트인캠(블랙박스) 기본 사용법

### 화면에서 확인하기
**내 차는 빌트인캠2가 달려 있어요.** 화면 안에서 시간, 속도, 드라이브 모드, 위치, 방향지시등 작동 여부 등을 함께 확인할 수 있어요. 영상은 주행 중 상시 녹화, 주차 중 상시 녹화, 주행 중 충격 감지 시 저장되는 이벤트 영상, 주차 중 충격 감지 시 저장되는 이벤트 영상으로 나뉘어 있어요.

### 수동 녹화
버튼을 누르면 그 순간의 앞뒤 상황을 따로 저장해주는 수동 녹화 기능이 있어요. 예를 들어 신호 위반 차량을 신고하고 싶을 때 그 순간 버튼을 누르면 영상이 저장돼요.

### 영상 확인 방법(와이파이/SD카드)
와이파이를 켜고 비밀번호를 설정한 뒤 휴대폰을 그 와이파이에 연결하면, 마이현대 앱에서 블랙박스 영상을 보거나 다운로드할 수 있어요. 와이파이 연결이 번거로우면 글러브박스 안쪽에서 SD카드를 직접 빼서 확인할 수도 있어요(기본 64GB).

<details>
<summary>참고 사진 — SD 메모리 설정 화면</summary>

![SD 메모리 설정 화면](/img/builtin-cam-sd.jpg)
*카드를 뺄 때는 화면에서 '연결 해제'를 먼저 눌러야 파일이 손상되지 않아요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

</details>

> [!NOTE] 저장 용량은 64GB 기준으로 **주행 중 상시 약 4시간, 주차 중 상시 약 40시간**이에요(오래된 것부터 자동 삭제). 자세한 사양과 사제 블랙박스 추가 판단 기준은 **'차량 기능·부착물'** 가이드를 참고하세요.

> [!WARN] **충격 감지 영상과 수동 녹화는 각각 최대 40건까지만 남아요.** 40건을 넘으면 오래된 것부터 자동으로 지워지고, 장거리 주행이나 충격이 잦으면 **최근에 저장된 영상까지 지워질 수 있어요.** 사고 영상처럼 꼭 필요한 건 **바로 다운로드하거나 '보관함'에 옮겨** 두세요.

> [!TIP]
> 설정 메뉴에서 충격 감지 민감도, 음성 녹음 여부, 녹화 시간(충격 감지 시 기본 앞뒤 10초를 20초로 늘리는 것도 가능)을 취향대로 바꿀 수 있어요.`,body_md:`## 에어컨(공조)

### 기본 조작
- 공조가 꺼진 상태에서 운전석 온도조절 다이얼 가운데(원형 버튼)를 누르면 켜지며, 누를 때마다 오토 1단계 → 2단계 → 3단계로 순환한다. 단계에 따라 풍량(바람 세기)이 다르며, 3단계는 바람이 세서 소음이 크므로 소음이 신경 쓰이면 1단계를 권장한다는 설명이 있다.
- 실내 온도를 설정(예: 22도)하면 계절과 무관하게 차량이 알아서 그 온도로 실내를 유지해준다고 설명한다.
- 온도 다이얼을 오른쪽으로 돌리면 0.5도씩 상승, 왼쪽으로 돌리면 0.5도씩 하강한다.
- 풍량 버튼을 조작하면 오토 에어컨이 종료되고 수동 풍량 조절로 전환되며, 다시 오토 에어컨 버튼을 누르면 오토 모드로 복귀한다.

### 운전석/조수석 개별 조절 및 동기화
- 운전석과 조수석 온도를 각각 다르게 설정 가능. 조수석 쪽 온도 다이얼 가운데의 '싱크' 버튼을 누르면 운전석 설정 온도를 기준으로 조수석 온도가 맞춰진다.
- '드라이버 온니'(운전석 전용 송풍) 기능은 하이브리드 모델에만 있는 기능이라고 설명되어 있다(가솔린 자막에서는 언급 없음). 옵션/트림에 따라 다를 수 있다.

### 에어컨 vs 송풍, 내·외기 순환
- 에어컨 버튼을 꺼두면 냉방 없이 송풍만 되며, 시원한 바람을 위해서는 에어컨 버튼을 반드시 켜야 한다.
- 내/외기 순환 버튼: 외기 유입 표시(주황불)가 꺼지면 외부 공기가 들어오는 상태이며, 외부 냄새가 들어올 때 눌러서 내기 순환으로 전환할 수 있다.
- 워셔액을 수동으로 작동시키면 자동으로 내기 순환으로 전환되어 워셔액(알코올) 냄새 유입을 차단한다. 단 이 자동 전환은 영하 5도 미만에서는 작동하지 않는다(고장이 아님).
- 내비게이션과 연동해 터널 진입 전이나 냄새가 심한 특정 구간(예: 가축 밀집 구간)에서 자동으로 내기 모드로 전환되는 기능도 있다고 설명한다.

### 기타 공조 버튼
- 성에 제거 버튼: 전면유리 및 1열 측면유리의 성에를 빠르게 제거. 최근에는 자동 제거 기능 때문에 사용 빈도가 낮다는 설명.
- 리어글라스 열선 + 사이드미러 열선이 한 버튼으로 함께 작동.
- 프론트/리어 버튼: 누르면 이후 조작이 2열 풍량 조절로 전환되고, 다시 누르면 1열로 복귀.
- 통풍시트/열선시트/스티어링 휠 열선 버튼도 공조 패널 인근에 위치(세부 단계는 시트 섹션 참조).

## 시트·핸들 편의기능

### 통풍시트·열선시트·핸들 열선
- 통풍시트: 버튼을 누를 때마다 1→2→3단계 순환.
- 열선시트: 버튼을 위쪽으로 눌러 1·2·3단계 설정.
- 핸들(스티어링 휠) 열선: 한 번 누르면 1단계, 두 번 누르면 2단계.
- '공조연동 자동 제어'(셋업 > 시트)를 켜면 에어컨 온도를 낮게 설정 시 통풍시트가, 온도를 높게 설정 시 핸들 열선과 시트 열선이 자동으로 작동한다.

### 시트 조절
- 앞뒤 이동, 높낮이, 등받이 각도는 일반적인 전동 시트 조작 방식과 동일.
- 은색 원형 버튼을 위로 올리면 사이드 볼스터(옆구리 지지 부분)가 조여지면서 등받이도 부풀어 오르고, 아래로 내리면 반대로 풀린다.
- 시트 버튼을 길게 누르면 릴렉션 컴포트 시트(시트를 뒤로 눕혀주는 기능)가 작동하며, 다시 길게 누르면(또는 반대 방향으로 누르면) 원래 자세로 복귀한다.

### 자세 메모리
- 원하는 운전 자세로 조절한 뒤 자세 메모리 버튼(보통 2개, 1/2번)을 길게 누르면 계기판에 "설정 O에 저장되었습니다"라고 표시된다.
- 이후 정차 상태에서 저장된 번호 버튼을 누르면 해당 자세로 자동 복귀한다.

### 헤드레스트, 조수석, 승하차 편의
- 헤드레스트는 손으로 잡아당기면 분리되며, 다시 삽입 시에는 잠금 해제 버튼을 누른 상태로 내리면 완전히 내려간다.
- 조수석은 '워크인 디바이스' 버튼을 통해 등받이 각도, 레그레스트, 릴렉션 컴포트 시트를 운전석·뒷좌석에서도 조작할 수 있다.
- 승하차 편의(탑승·하차 시 시트가 자동으로 앞뒤 이동하는 기능)는 셋업 > 시트 메뉴에서 설정 가능.

## 수납공간·컵홀더·충전(USB/무선충전)

### 콘솔박스와 수납공간
- 운전석 옆 콘솔박스는 전방·후방 양방향으로 개방 가능.
- 콘솔박스 하단 정리 시 뒷좌석까지 이어지는 통로가 있어 앞뒤로 물건을 주고받는 용도로 활용 가능.
- 글러브박스 상단에도 별도 수납공간이 있다.

### USB(C타입) 충전
- C타입 단자 중 하나는 충전 전용, 가운데 단자는 눌러서 주황색 표시가 들어와야 차량 시스템(카플레이 등)과 실제로 연결된다. 이 상태가 아니면 휴대폰을 연결해도 카플레이가 작동하지 않을 수 있다.

### 무선충전, UVC 살균(옵션)
- 무선충전 패드는 차 문이 열려 있는 동안 작동하지 않을 수 있으며, 문을 닫으면 다시 정상 작동한다.
- 셋업 > 차량 편의 메뉴에서 무선충전 사용 범위(운전석만/조수석만/전체 끄기)를 설정할 수 있다.
- UVC 살균 기능(옵션 사양)은 켠 상태로 열고 물건(지갑 등)을 넣으면 살균이 진행되며, 일정 시간이 지나면 자동으로 종료된다.

## 계기판(클러스터)과 헤드업 디스플레이(HUD)

### 클러스터 테마
- 셋업 > 클러스터 > 테마 선택에서 계기판 디자인을 심플/모던/클래식 등으로 변경할 수 있다.
- 드라이브 모드 연동 옵션을 켜면 주행 모드(에코/스포츠 등) 변경 시 계기판 디자인이 함께 바뀐다.

### 헤드업 디스플레이(HUD)
- 셋업 > 클러스터 > HUD 메뉴에서 사용 여부를 선택할 수 있다.
- 높이, 기울기(회전), 밝기를 운전자 눈높이에 맞게 개별 조절 가능.
- 옵션/트림에 따라 HUD 자체가 없을 수 있다.

## 도어와 트렁크(전동 테일게이트)

### 도어 캐치 동작 방식 차이
- 운전석: 문이 잠긴 상태에서 도어 캐치를 한 번 당기면 즉시 열린다.
- 조수석/2열: 한 번 당기면 잠금이 해제되고, 한 번 더 당겨야 문이 열린다(정상 동작이며 고장이 아니다).
- 전자식 차일드 락: 켜두면(표시등 점등) 2열 창문과 문이 열리지 않는다. 잠금이 풀려 있어도, 하차 시 후방에서 접근하는 대상이 감지되면 안전을 위해 자동으로 켜지는 기능이 있다고 설명한다.

### 트렁크 개폐
- 차키의 홀드 버튼을 길게 누르면 트렁크가 열리고, 다시 길게 누르면 닫힌다. 중간에 손을 떼면 그 위치에서 멈추며, 완전히 닫으려면 닫힐 때까지 계속 눌러야 한다.
- 후면 카메라 하단부의 버튼을 눌러 수동으로 트렁크를 열 수도 있다.
- 트렁크 내부에는 버튼이 두 개 있는데, 하나는 닫으면서 동시에 차량을 잠그는 기능, 다른 하나는 잠금 없이 닫기만 하는 기능이다.

### 트렁크 열림 높이 저장
- 트렁크 버튼을 원하는 높이에서 길게 눌러주면 그 높이가 저장되며, 다음부터는 저장된 높이까지만 자동으로 열린다. 낮은 지하주차장 등에서 유용하다.

### 스마트 테일게이트(자동 열림)와 수동 오픈
- 차키를 소지한 채 트렁크에 접근하면 자동으로 열리는 기능이 있으며, 열리는 도중 버튼을 누르면 동작이 중지된다.
- 이 자동 열림 기능 자체는 셋업 > 차량 > 도어 메뉴에서 끌 수 있다.
- 전동 트렁크가 작동하지 않을 때는 트렁크 내부의 수동 레버(또는 브레이크 페달 좌측의 후드 레버와 유사한 방식)를 이용해 개폐할 수 있다.
- 수동으로 닫을 때는 한 번에 확실히 눌러 닫아야 하며, 살짝 내려놓고 누르는 방식으로는 완전히 닫히지 않는다는 설명이 있다.

> 참고: 트렁크(테일게이트)가 열릴 때 뒤쪽으로 상당히 많이 빠지는 구조이며, 스토퍼가 있는 주차 공간에 바짝 붙여 세우면 완전히 열리지 않을 수 있으므로 뒷바퀴를 스토퍼에서 충분히 떨어뜨려 주차하는 것이 좋다는 설명이 있다.

## 오토홀드와 전자식 파킹 브레이크

### 오토홀드
- 버튼을 켜면 흰색으로 표시되고, 실제 작동 중(정차 시)에는 초록색으로 바뀐다.
- 초록색 상태에서 브레이크 페달에서 발을 떼도 차량이 정지 상태를 유지한다. 신호 대기 시 브레이크를 계속 밟고 있을 필요가 없어 유용하다는 설명.
- 하이브리드 모델에서는 오토홀드 버튼을 길게 누르면 브레이크 디스크 클리닝 기능이 실행되며, 브레이크 디스크에 녹이 슬었을 때 사용하는 기능이라고 설명한다.

### 전자식 파킹 브레이크(EPB)
- 버튼을 몸 쪽으로 당기면 체결(브레이크 걸림), 앞쪽으로 누르면 수동 해제.
- 주행 중 제동장치(브레이크)가 전혀 작동하지 않는 위급 상황에서는 이 버튼을 몸 쪽으로 계속 당기고 있으면 감속이 이루어진다고 설명한다(비상시에만 사용하는 방법).

### 경사로 저속 주행 장치(HDC), 차체자세제어(ESC)
※ [2026-07-27 정정] MX5HEV 매뉴얼 공식 명칭은 **경사로 저속 주행(DBC, Downhill Brake Control)**이며 'HDC'는 오기. 또 '기본 약 10km/h 유지'는 매뉴얼에 없는 수치로, 실제는 60km/h 이하에서 대기·40km/h 이하에서 작동(작동 범위 4~40km/h).
- 경사로 저속 주행 장치를 켜면 계기판에 초록색으로 표시되며, 내리막길 주행 시 브레이크 페달을 밟지 않아도 기본 설정 속도(약 10km/h 수준)를 유지해준다. 가속페달을 밟으면 그만큼 가속되고, 페달에서 발을 떼면 다시 설정 속도로 유지된다.
- 차체자세제어(ESC) 버튼: 짧게 누르면 구동력 제어 기능이 일시 해제되고 브레이크 제어 기능은 유지된다. 3초 이상 길게 누르면 엔진 제어·VSM·브레이크 제어 기능이 모두 꺼진다. 진흙탕이나 눈길에 바퀴가 빠져 헛돌 때 일시적으로 사용하는 기능이며, 평상시에는 켜진 상태(자동 작동)로 두는 것이 권장된다.

## 후방 카메라·서라운드뷰·원격 주차

### 모니터(카메라) 버튼
- 짧게 누르면 카메라 화면(전방/후방/탑뷰/측방 등 다양한 각도)을 표시하며, 다시 누르면 각도를 전환할 수 있다.
- 길게 누르면 원격 주차 보조 기능이 실행된다.
- 서라운드뷰(360도 뷰)는 옵션 사양이 있는 차량에서만 사용 가능. 상시 어라운드뷰(고속 주행 중에도 꺼지지 않는 어라운드뷰) 기능이 있는 트림도 있으며, 좁은 지하주차장 진출입 시 유용하다는 설명이 있다.

### 스마트키를 이용한 원격 전후진, 원격 주차
- 원격 시동 후 차키 측면의 전진/후진 버튼을 길게 누르면 차량이 밖에서 조작하는 대로 전후진한다.
- 전방에 장애물이 있으면 일정 거리를 남기고 정지한다고 설명되어 있다.
- 운전석 쪽 공간이 매우 좁은 곳에 주차할 때 유용하며, 운전석 쪽에 사람이 접근하지 않아도 되므로 문콕 방지 효과도 있다는 설명.

### 주차 충돌방지 보조(긴급제동)
- 빠른 속도로 후진 주차할 때 시스템이 급제동(긴급제동)을 개입시키는 기능이 있는데, 이를 원치 않으면 관련 버튼을 길게 눌러 끌 수 있고, 다시 길게 누르면 재활성화된다.

## 스마트폰 연결(블루투스·카플레이/안드로이드 오토)

### 블루투스 페어링
- 셋업 > 기기 연결 > 신규 추가를 선택한 뒤, 휴대폰 블루투스 목록에서 차량 이름을 찾아 연결(페어링 허용)한다.
- 페어링 과정에서 연락처 동기화 여부와 카플레이 사용 여부를 선택할 수 있다.

### 카플레이/안드로이드 오토 켜고 끄기
- 기기 연결 메뉴 내 '폰 프로젝션'에서 애플 카플레이·안드로이드 오토 사용 여부를 다시 켜고 끌 수 있다.
- 카플레이 연결이 되지 않을 때는 이 폰 프로젝션 설정이 꺼져 있지 않은지 우선 확인하도록 안내한다.
- (참고) 두 자막 모두 블루투스 페어링 절차 안에서 카플레이 사용 여부를 설정하는 것으로 설명하고 있으며, 유선 연결 케이블에 대한 별도 언급은 없다.

### 즐겨찾기(사용자 지정) 버튼
- 핸들의 모드 버튼과 별표 버튼에는 원하는 기능(예: 화면 끄기, 통화 거절, 후석 취침 모드, 폰 프로젝션 전환 등)을 자유롭게 지정해 즐겨찾기처럼 사용할 수 있다.

## 빌트인캠(블랙박스) 기본 사용법

### 화면 표시 정보와 영상 종류
- 빌트인캠(옵션 사양)은 화면에 시간, 속도, 드라이브 모드, 현재 위치, 방향지시등 작동 여부 등을 함께 표시한다.
- 영상은 주행 중 상시 녹화, 주차 중 상시 녹화, 주행 중 이벤트(충격 감지 시 저장), 주차 중 이벤트(충격 감지 시 저장) 네 가지로 구분되어 저장된다.

### 수동 녹화
- 별도 버튼을 누르면 그 순간의 앞뒤 상황을 수동으로 저장할 수 있다. 예를 들어 신호 위반 차량을 목격했을 때 그 시점에 버튼을 눌러 영상을 저장하는 용도로 활용할 수 있다.

### 영상 확인(와이파이/SD카드)
- 와이파이를 활성화하고 비밀번호를 설정한 뒤 등록하면, 휴대폰 와이파이에서 해당 코드의 와이파이에 연결하여 마이현대 앱을 통해 블랙박스 영상을 보거나 다운로드할 수 있다.
- 와이파이 연결이 번거로울 경우 글러브박스 안쪽의 SD카드 슬롯에서 SD카드를 직접 분리해 확인할 수 있다(기본 64GB 용량 지원).
- 충전(전력) 상태에 따라 최대 약 20시간까지 상시 녹화가 가능하다는 설명이 있다.

### 설정 항목
- 설정 메뉴에서 충격 감지 민감도, 음성 녹음 여부, 녹화 시간 등을 조절할 수 있다.
- 충격 감지 시 저장되는 영상 길이는 기본적으로 전후 10초이며, 20초로 늘리는 설정도 가능하다.`,sources:[{name:"차에중독된남자 케이찬 (유튜브)",url:"https://youtu.be/C8PUpUz6xgE",type:"personal"},{name:"블라인드_Car Story (유튜브)",url:"https://youtu.be/wtraJtn2eRo",type:"personal"},{name:"현대 취급설명서 MX5HEV — 자동 정차(AUTO HOLD)",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR/id390901fe6c7.html",type:"official"},{name:"현대 취급설명서 MX5HEV — 경사로 저속 주행(DBC)",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR/ide307a3bb94e.html",type:"official"},{name:"현대 취급설명서 MX5HEV — 안전 하차 보조(SEA)",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR/id235QD0E0FXW.html",type:"official"}],id:"p4-features",phase:4,order:2,car_scope:"mx5-hev",valid_year:2026,flags:[],source_files:["youtube/p4-싼타페기능-01.md","mx5-hev-spec.md"],field_tips_md:""},{title:"스마트 크루즈 컨트롤(SCC)·주행보조, 초보자도 쉽게 쓰는 법",summary:["핸들 왼쪽의 '주행 보조 버튼'을 누르면 스마트 크루즈(SCC)가 지금 속도로 켜지고, 차선 유지(LFA)는 '차로 주행 보조 버튼'으로 따로 켜야 하는 별개 기능이에요.","차간거리는 4단계(90km/h에서 약 52.5m)부터 1단계(약 25m)까지 고를 수 있고, 고속도로에서는 앞차가 정차 후 30초 안에 출발하면 자동으로 따라 출발해요.","이 기능들은 자율주행이 아니라 보조 장치라서 항상 핸들을 잡고 전방을 주시해야 하고, 작동 중 사고의 책임도 운전자에게 있어요."],checklist:["SCC(주행 보조 버튼)와 LFA(차로 주행 보조 버튼)가 서로 다른 버튼임을 확인하기","SCC를 켤 때 지금 속도로 설정된다는 점, 30km/h 이하에서는 30km/h로 설정됨을 알아두기","차간거리는 넉넉한 3~4단계로 시작하기","LFA는 짧게 눌러 켜고, 표시등이 초록색일 때만 조향을 돕는다는 점 확인하기","핸들에서 손을 떼지 않기(경고 후 기능이 해제됨)","곡선·단속구간 자동 감속은 NSCC 설정(설정>차량>운전자 보조>주행 편의)에서 따로 켜기","속도 제한 보조는 강제 차단이 아니라 경고 기능임을 이해하기"],body_easy_md:`## 먼저 — 버튼이 두 개예요 (제일 헷갈리는 부분)
핸들 왼쪽에 비슷하게 생긴 버튼이 여러 개라 초보가 가장 많이 헷갈려요. **속도를 맞춰 주는 크루즈와, 차로 가운데를 잡아 주는 기능은 서로 다른 버튼**이에요. ('차선'은 바닥에 그어진 흰 선, '차로'는 그 선 사이의 길 한 줄이에요.)

| 버튼 | 무슨 기능 | 어떻게 |
|---|---|---|
| **주행 보조 버튼** | 스마트 크루즈 컨트롤(SCC) — 설정한 속도와 앞차와의 거리(차간거리)를 차가 맞춰 줌 | 짧게 눌러 켜기/끄기 |
| **차로 주행 보조 버튼** | 차로 유지 보조 장치(LFA) — 차로 가운데를 유지하도록 핸들을 도와줌 | 짧게 눌러 켜기/끄기 |

![핸들 왼쪽의 차간거리 버튼](/img/scc-distance-button.jpg)
*크루즈 관련 버튼은 핸들 왼쪽에 모여 있어요. 사진 속은 차간거리 조절 버튼이에요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

> [!WARN] **SCC를 켜도 차선 유지(LFA)는 같이 켜지지 않아요.** 두 기능은 각각의 버튼으로 따로 켜요. "크루즈 켰으니 알아서 차선도 잡아주겠지"라고 생각하면 위험해요.

## SCC(스마트 크루즈 컨트롤) 켜고 쓰기

### 켜는 법
**주행 보조 버튼**을 누르면, **지금 달리던 속도**가 그대로 설정돼요.

- 설정할 수 있는 속도는 **30~180km/h**예요.
- **30km/h 이하에서 누르면 자동으로 30km/h로 설정**돼요(저속 정체 구간에서 갑자기 가속할 수 있으니 주의).
- 앞차가 없으면 설정 속도로 정속 주행하고, 앞차가 있으면 **차간거리를 유지하며 알아서 속도를 조절**해요.

### 속도 조절
- 핸들 왼쪽의 **속도 조절 스위치**를 **짧게** 올리거나 내리면 **1km/h씩** 바뀌어요.
- 같은 스위치를 **길게** 올리거나 내리면 **10km/h 단위(10의 배수)**로 빠르게 바뀌어요.

> [!WARN] 길게 올려 속도를 확 올리면 **차가 빠르게 가속**해요. 앞 상황을 보고 조절하세요.

### 차간거리 조절 — 숫자가 클수록 멀리
차간거리 버튼을 반복해서 누르면 4→3→2→1단계로 바뀌어요. **90km/h로 달릴 때 기준**으로 이 정도 거리를 유지해요.

| 단계 | 유지 거리(90km/h 기준) |
|---|---|
| 4단계 | 약 52.5m |
| 3단계 | 약 40m |
| 2단계 | 약 32.5m |
| 1단계 | 약 25m |

> [!TIP] 초보라면 **3단계나 4단계**처럼 넉넉한 쪽이 편해요. 1단계는 앞차와 가까워 심리적으로 불안할 수 있어요.

### 잠깐 멈추기 / 다시 켜기
- **일시 해제**: 핸들 왼쪽의 취소 스위치를 누르거나 **브레이크 페달**을 밟으면 돼요.
- **다시 켜기**: 재개 스위치를 누르면 **아까 설정했던 속도로** 복귀해요. 아까 속도가 지금보다 훨씬 높으면 **갑자기 가속**하니, 누르기 전에 설정 속도를 확인하세요.
- 껐다 다시 켜면 **마지막에 쓰던 차간거리 단계**가 그대로 적용돼요.

> [!NOTE] SCC 작동 중에 **가속 페달을 밟으면** 그동안만 더 빨리 달리고(설정 속도는 그대로), 발을 떼면 다시 설정 속도로 돌아와요. 추월할 때 쓰면 편해요.

## 차로 유지 보조(LFA) — 차선 중앙을 잡아줘요

![핸들의 차로 유지 보조 버튼](/img/lfa-button.jpg)
*차선 모양 아이콘이 있는 버튼이에요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

- 시동을 켠 상태에서 **차로 주행 보조 버튼을 짧게 누르면** 켜져요. 다시 누르면 꺼져요.
- **양쪽 차선이나 앞차를 인식하고, 속도가 180km/h 이하**면 차로 가운데를 유지하도록 **핸들을 조금씩 돌려 줘요(조향 보조).**
- 계기판 표시등이 **초록색이면 실제로 조향을 돕는 중**, 회색이면 켜져 있지만 아직 조건이 안 맞는 상태예요.

> [!DANGER] **손을 놓아도 되는 기능이 아니에요.** 매뉴얼도 "모든 상황에서 작동하지는 않습니다. **항상 스티어링 휠을 잡고 주행하십시오**"라고 못박고 있어요. 핸들에서 손을 떼면 경고가 뜨고, 계속 떼고 있으면 기능이 해제돼요.
> 작동 중에도 **내가 핸들을 돌리면 내 조작이 우선**이에요.

## 고속도로에서 — HDA(고속도로 주행보조)
고속도로·자동차전용도로에 들어가면 **HDA(고속도로 주행보조)**가 표시되면서 속도와 차간거리, 차로 유지를 함께 도와줘요.

### 정차했다가 다시 출발할 때
- 앞차가 서면 따라서 멈추고, **약 30초 안에 앞차가 출발하면 자동으로 따라 출발**해요.
- **30초가 지나면** 계기판에 안내문이 뜨고, 이때는 **가속 페달을 밟거나 스위치를 조작해야** 다시 출발해요.

### 차로 변경 도움(고속도로 차로변경 보조)
- HDA를 켜면 **함께 켜져요.**
- **방향지시등을 켜면** 차가 차로 변경을 도와줘요. 핸들은 차가 대신 돌려 주지만, **옆 차로가 비었는지 확인하고 책임지는 건 운전자예요.** 방향지시등을 켜기 전에 반드시 직접 보세요. 다만 **모든 상황에서 되는 건 아니고**(차선 종류·주변 차량 인식 상태에 따라 작동하지 않을 수 있어요), 안 될 때는 계기판에 표시로 알려줘요.

> [!NOTE] **곡선 구간이나 과속 단속 구간에서 알아서 속도를 줄이는 기능**은 HDA가 아니라 **NSCC(내비게이션 기반 스마트 크루즈 컨트롤)**라는 별도 기능이에요.
> **설정 > 차량 > 운전자 보조 > 주행 편의 > 고속도로 주행속도 자동 조절**에서 따로 켜야 작동해요. (얼마나 줄여주는지는 매뉴얼에 수치로 나와 있지 않아요.)

## 최고 속도를 정해두고 싶다면 (수동 속도제한 보조장치)
과속이 걱정되면 **속도 상한을 미리 정해 두는 기능(수동 속도제한 보조장치)**을 쓸 수 있어요.

- 설정한 속도를 넘으면 **제한속도 표시가 깜빡이고 경고음**이 울려요.
- **강제로 막는 건 아니에요.** 추월처럼 더 가속해야 할 땐 **가속 페달을 깊게 밟아 킥다운**하면 그 이상으로도 갈 수 있어요.

## 잊지 마세요 — 자율주행이 아니에요
> [!DANGER] SCC·LFA·HDA는 모두 **운전자를 돕는 보조 장치**예요. 자율주행이 아니고, **작동 중 사고가 나도 책임은 운전자에게** 있어요.
> 항상 핸들을 잡고 전방을 주시하며, 언제든 직접 브레이크를 밟을 준비를 하고 쓰세요. 악천후·차선이 흐린 곳·공사 구간에서는 기능이 제대로 작동하지 않을 수 있어요.`,body_md:`※ **[2026-07-27 전면 정정]** 이 원문은 유튜브 영상 1건을 기반으로 작성되어 공식 매뉴얼과 다음이 달랐다. ① SCC 버튼을 한 번 더 눌러 조향보조를 켠다(X — LFA는 '차로 주행 보조 버튼'으로 별도) ② LFA는 버튼을 길게 눌러 켠다(X — 짧게 누름. 길게 누름은 차로 이탈방지 보조 조작) ③ LFA는 60km/h 이상 작동(X — 매뉴얼은 180km/h 이하만 명시. 60~200km/h는 차로 이탈방지 보조 수치) ④ '차로유지보조2/고속도로 주행보조2'(X — 매뉴얼에 없는 명칭) ⑤ 수동 속도제한은 출력을 차단(X — 경고 기반, 킥다운으로 초과 가능) ⑥ 곡선·안전구간 자동감속은 HDA 기능(X — NSCC 별도 기능이며 별도 설정 필요). 아래 원문은 수집 기록으로만 남기며, 서비스 콘텐츠는 매뉴얼 기준으로 재작성했다.

## 도심·국도에서 SCC 사용 (고속도로/자동차전용도로가 아닌 상황)

- 현재 주행 속도(영상 예시: 약 60km/h) 상태에서 SCC 버튼을 누르면, 그 속도와 차간거리 그대로 SCC가 세팅된다.
- 이때 조향보조는 함께 켜지지 않는다. 조향보조를 켜려면 버튼을 한 번 더 눌러야 하며, 헤드업 디스플레이와 계기판의 핸들 모양이 초록색으로 바뀌면서 조향보조가 활성화된다.
- 차간거리는 4-3-2-1단계로 조절되며(4단계가 가장 멀고 1단계가 가장 가까움), 영상 진행자는 3단계 정도 유지를 권장한다.

## 설정 속도 조절

- 속도를 올리고 싶으면 스위치를 위로 조작 → 1km/h 단위로 설정 속도가 올라간다. 내리는 것도 동일한 방식(반대 방향).
- 스위치를 길게(오래) 누르고 있으면 10km/h 단위로 빠르게 조절된다.

## 일시정지 및 재활성화

- 일시정지 방법 두 가지: (1) SCC 버튼을 차 앞쪽으로 한 번 밀기, (2) 브레이크 페달을 한 번 톡 밟기.
- 재활성화 방법: (1) 버튼을 한 번 눌러 이전에 설정했던 속도로 복귀, (2) 속도 설정 버튼을 위로 한 번 올려 현재 주행 속도로 새로 세팅.

## HDA와 정차·재출발 (도심/국도/고속도로 공통 + 고속도로 예외)

- HDA(고속도로 주행보조)뿐 아니라 국도·도심에서도 앞차가 정차하면 내 차도 같이 정차한다.
- 재출발 시 안내 메시지: "전방 차량 출발 시 스위치 또는 페달을 조작하십시오". 스위치(버튼)를 한 번 올리거나 액셀 페달을 톡 밟으면, 차량이 앞차와의 거리를 계산해 알아서 출발한다.
- 예외: 고속도로에서는 앞차가 정차한 뒤 30초 이내에 앞차가 출발하면 차간거리에 맞춰 자동으로 따라 출발한다. 30초를 초과하면 위 안내 메시지가 출력되고, 운전자가 직접 스위치를 올리거나 액셀을 밟아야 재출발한다.

## SCC 끄기 / 조향보조 개별 끄기

- SCC 버튼을 한 번 누르면 꺼지고, 다시 누르면 켜지는 토글 방식이다.
- 도심 주행 중 SCC를 꺼도 조향보조는 계속 켜진 상태로 남는다(초보자가 자주 헷갈리는 지점). 조향보조만 끄고 싶으면 핸들 버튼을 한 번 눌러 개별적으로 끌 수 있다(계기판 핸들 그림 소멸로 확인 가능).

## 차로유지보조(LFA)와 조향보조의 차이

- 조향보조와 차로유지보조를 같은 기능으로 오인하는 사례가 많다고 언급됨. 실제로는 별개 기능.
- 차로유지보조는 기본값이 꺼짐 상태이며, 버튼을 길게 눌러야 활성화된다. 시속 60km/h 이상일 때 자동으로 작동(그 미만에서는 회색 표시로 대기 상태). 다시 버튼을 길게 눌러 종료 가능.
- 디올 뉴 싼타페는 "차로유지보조2"가 탑재되어 있다: 기존(1세대) 대비 차선이 일시적으로 인식되지 않을 때 앞차를 추적하는 기능이 추가되었고, 차선 인식이 불안정한 상황에서도 더 안정적으로 차로를 유지하는 성능 개선이 포함된다.

## 수동 속도제한 보조 장치

- SCC 버튼을 길게 누르면 활성화된다. 설정 속도 조절 방법은 SCC와 동일하다.
- 설정 속도를 초과하려는 상황이 되면 차량이 출력을 제한하여 그 이상 가속되지 않는다. 자율 가감속이 아니라 "최고 속도 제한" 개념에 가깝다.
- 일시정지는 버튼을 한 번 눌러 해제 가능.

## 고속도로 진입 후 HDA + 내비게이션 연동

- 고속도로/자동차전용도로 진입 후 버튼을 누르면 화면에 "HDA" 표기가 뜬다(도심 모드의 표기와 구분됨).
- 헤드업 디스플레이에도 "HDA" 아래 "NAV"가 함께 표시되며, 이는 순정 내비게이션과 연동해 주행 정보(곡선 구간, 제한속도 등)를 차량이 스스로 판단해 반영한다는 의미다.
- HDA 활성화 시 조향보조도 함께 켜진다.
- 곡선로 진출입로(영상 예시: 경부고속도로-천안논산고속도로 분기 JC 구간)에서는 속도를 자동으로 살짝 줄여 안전하게 커브를 통과한다. 이때도 차간거리는 동일하게 4-3-2-1단계로 조절 가능하며, 3단계 유지를 권장.
- 내비게이션 연동 상태에 따라 HDA 표시가 일시적으로 꺼졌다가 다시 연동되면 재활성화되는 경우가 있다(영상에서 우천 상황 중 차로 변경 시연과 함께 언급되었으나, 정확한 발생 조건은 자막상 불분명하므로 "내비게이션 연동 상태에 따라" 정도로만 정리함).

## 자동 차로 변경 (고속도로 주행보조2)

- 화면에 양방향 화살표가 표시되면 고속도로 주행보조2가 작동 중이라는 의미이며, 방향지시등을 원터치로 조작하면 차량이 차로를 변경해준다.
- 조건: 점선 차로에서만 변경 가능하며, 실선 구간에서 시도하면 변경 불가 안내가 표시된다(영상에서 실제로 실선 구간 시도 시 변경 불가 표시 확인됨).
- 차로 변경 완료 후 방향지시등이 자동으로 꺼진다. 변경 속도(반응 속도)는 기존 대비 빨라졌다고 언급됨(정량적 수치는 자막에 없음).

## 과속 단속 구간 자동 감속

- 내비게이션에 표시되는 "안전구간"은 과속 단속 카메라가 위치한 구간을 의미한다.
- 고속도로/자동차전용도로에서 설정 속도보다 해당 구간의 단속(제한) 속도가 낮을 경우, 차량이 자동으로 단속 속도보다 살짝 낮은 속도로 감속한다. 영상 예시: 140km/h로 설정해두어도 단속 카메라 구간이 110km/h라면 109km/h로 자동 세팅됨.

## 안전 관련 원문 당부

- 진행자는 이 기능들이 자율주행이 아니라 운전자 보조 시스템임을 명확히 강조했다. 스티어링 휠에서 손을 떼거나 브레이크를 밟을 준비를 하지 않는 행위는 하면 안 된다고 언급.
- 모든 제조사(국산차·수입차 구분 없이)가 SCC 작동 중 발생한 사고에 대해 운전자 책임으로 처리한다고 언급됨(정확한 법적 근거나 조항은 자막에 제시되지 않았으며, 영상 진행자의 발언으로만 확인됨).`,sources:[{name:"현대 취급설명서 MX5HEV — 스마트 크루즈 컨트롤 작동",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR/id222PF0ZL0HS.html",type:"official"},{name:"현대 취급설명서 MX5HEV — 차로 유지 보조 작동",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR/id235NB0B0RBF.html",type:"official"},{name:"현대 취급설명서 MX5HEV — 고속도로 주행 보조 작동",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR/idfd78f98c603.html",type:"official"},{name:"현대 취급설명서 MX5HEV — 내비게이션 기반 SCC 설정",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR/id7526ee2483c.html",type:"official"},{name:"블라인드_Car Story (유튜브·초기 참고)",url:"https://youtu.be/Qk3PPYMxh4k",type:"personal"}],id:"p4-adas",phase:4,order:3,car_scope:"mx5-hev",valid_year:2026,flags:[],source_files:["youtube/p4-스마트크루즈-01.md","official/mx5hev-manual-adas-2026(온라인 매뉴얼 대조)"],field_tips_md:""},{title:"싼타페 전용 꿀팁 & 무심코 고장내는 습관",summary:["싼타페를 타면서 무심코 하는 행동 중에는 전자장치 설정값이 꼬이거나 부품이 손상될 수 있는 습관이 있고, 반대로 설명서엔 잘 안 나오지만 알아두면 훨씬 편해지는 숨은 기능도 많아요.","특히 하이브리드 고전압 배터리는 오래 방치하면 완전 방전으로 성능이 크게 나빠질 수 있고, 조수석·2열로만 내리면 실내외 조명이 계속 켜져 있을 수 있어서 배터리 관리에 신경 써야 해요.","정체가 심한 시내 구간에서는 스마트 회생 시스템을 '오토'로 켜고 차로 유지 보조를 함께 쓰면 액셀·브레이크에 신경을 덜 쓰면서 편하게 다닐 수 있어요."],checklist:["트렁크는 버튼으로만 열고 닫기 (손으로 밀어서 닫지 않기)","창문·시트·핸들의 전자 버튼은 두 개 이상 동시에 누르지 않기","조수석·2열에서만 내렸다면 스마트키로 한 번 더 잠가서 조명 끄기","하이브리드는 2개월 안에 15km 이상 주행해서 고전압 배터리 완전 방전 막기","무선충전패드 위에 신용카드 등 마그네틱 카드류 올려두지 않기","허리 지지대 버튼은 더 이상 움직이지 않으면 바로 손 떼기","정체 구간에서는 스마트 회생 시스템 '오토' + 차로 유지 보조를 함께 켜보기"],body_easy_md:`## 무심코 고장낼 수 있는 습관 ① — 전자장치는 버튼으로만

### 트렁크는 평소엔 버튼으로 여닫으세요
트렁크 문(전동 테일게이트 — 버튼으로 열리고 닫히는 트렁크)은 열리는 각도와 속도가 전자 장치로 제어돼요. 평소에는 **버튼으로 여닫는 게 기본**이고, 억지로 힘을 줘서 밀어 닫으면 손상될 수 있어요.

> [!NOTE] 다만 "손으로 절대 닫으면 안 된다"는 건 아니에요. 매뉴얼은 **"정상적으로 작동하지 않아 수동으로 작동할 때 무리한 힘을 가하지 마십시오"**, "오래 열어 둬서 작동하지 않을 때는 **수동으로 천천히 끝까지** 닫으라"고 안내해요. 즉 **정상일 땐 버튼, 안 될 땐 천천히 수동**이 맞아요.
> 배터리를 분리했다 연결했거나 퓨즈를 교체한 뒤에는 **높이 저장값이 초기화**될 수 있어 다시 설정해 주면 돼요.

### 전자 버튼 두 개 이상, 동시에 누르지 마세요
창문 버튼, 시트 자세 조절 버튼, 핸들의 버튼들처럼 전자로 제어되는 버튼을 두 개 이상 동시에 조작하면 안 돼요. 저장돼 있던 설정값이 꼬여서 작동이 안 될 수 있고, 퓨즈 수명이 짧아지거나 심하면 버튼이 파손될 수도 있다고 해요.

> [!WARN]
> 트렁크·창문·시트·핸들 버튼은 "하나씩, 버튼으로만" 조작하는 게 기본이에요. 힘으로 누르거나 여러 개를 한꺼번에 누르면 고장으로 이어질 수 있어요.

### 6인승 2열 시트, 짐을 올린 채로 버튼 누르지 마세요
6인승 2열 시트를 완전히 아래로 접은 상태에서 무거운 짐을 올리거나 사람이 올라간 상태(차 안에서 자는 '차박' 등)에서 상향·하향 버튼을 누르면 전자제어 장치가 꼬여버릴 수 있어요. 의자 작동이 아예 안 되거나 완전히 고장 날 수도 있으니, 짐이나 사람이 올라가 있을 때는 시트 버튼을 누르지 마세요.

## 무심코 고장낼 수 있는 습관 ② — 시트를 다룰 때 주의하세요

### 열선 시트를 쓴 뒤 시트 커버가 쭈글쭈글해도 당황하지 마세요
열선을 켜고 앉았다가 일어나면 시트 커버가 쭈글쭈글해지는 경우가 있는데, 따뜻해지면서 살짝 늘어지는 건 정상적인 현상이라고 해요. 다만 쭈글함 정도가 심하다고 느껴지면 블루핸즈에 방문해서 확인받는 걸 권장해요.

> [!CHECK]
> 열선 시트의 약한 쭈글거림은 정상이에요. 다만 눈에 띄게 심각하다면 블루핸즈에서 확인받으세요.

### 허리 지지대 버튼, 더 안 움직이면 바로 손을 떼세요
허리 지지대는 버튼으로 움직이는데, 더 이상 올라가거나 내려가는 느낌이 없다면 즉시 버튼에서 손을 떼야 해요. 그 상태에서 계속 누르고 있으면 모터가 손상돼서 완전히 고장 날 수 있어요. 화면 표시가 사라지면 완전히 멈춘 상태니까 그때 손을 떼면 돼요.

> [!WARN]
> 허리 지지대가 끝까지 움직인 뒤에도 버튼을 계속 누르면 모터가 손상될 수 있어요. 움직임이 멈추면 바로 손을 떼세요.

## 무심코 고장낼 수 있는 습관 ③ — 배터리는 미리미리 챙기세요

### 조수석·2열에서만 내렸다면 스마트키로 한 번 더 잠가주세요
차에서 내리면 일정 시간 실내외 조명이 켜졌다가 자동으로 꺼지는 에스코트 기능이 있어요. 그런데 이 기능은 **운전석에서 사람이 내릴 때**를 기준으로, 배터리 방전 방지 기능과 함께 작동해야 켜진다고 해요. 주차 공간 문제 등으로 조수석이나 2열로만 내리는 경우에는, 내린 뒤 반드시 스마트키로 한 번 더 눌러서 불을 꺼주세요. 그렇지 않으면 조명이 계속 켜져 있을 수 있어요.

> [!WARN]
> 운전석이 아닌 조수석·2열로만 내렸다면 실내외 조명이 계속 켜져 배터리를 소모할 수 있어요. 스마트키로 한 번 더 잠가서 불을 꺼주세요.

### 무선 충전 패드에 카드를 올려두지 마세요

![스마트폰 무선 충전 시스템](/img/wireless-charging.jpg)
*센터 콘솔 앞쪽의 무선 충전 패드예요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

무선 충전 패드는 손이 닿기 쉬워서 신용카드·통장·승차권 같은 걸 자주 올려두게 되는데, 자석 띠가 있는 카드가 여기 올라가면 카드에 저장된 정보가 손상될 수 있어요. 특히 주유할 때 자주 쓰는 신용카드는 꼭 주의하세요.

### 하이브리드 고전압 배터리, 완전 방전을 막으세요
하이브리드 전용 고전압 배터리도 방전될 수 있는데, 오랫동안 운전을 하지 않을 때 발생해요. 한 번 완전 방전되면 성능 저하가 크게 발생할 수 있어요. 현대차에서는 마지막으로 운전한 날부터 2개월 안에 15km 이상 주행하면 방전을 막을 수 있다고 안내해요. 운전을 정말 못 하는 상황이라도 2개월에 한 번은 최소 15km 이상 달려주세요.

> [!DANGER]
> 하이브리드 고전압 배터리가 완전 방전되면 성능 저하가 심각할 수 있어요. 2개월 안에 15km 이상은 꼭 주행하세요.

## 무심코 고장낼 수 있는 습관 ④ — 그 밖에 조심할 것들

### UVC 살균 트레이엔 음식물을 넣지 마세요

![UV-C 살균 소독 시스템](/img/uvc-tray.jpg)
*무선충전 패드 옆의 UV-C 살균 트레이예요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

무선 충전 패드 옆 UVC 살균 멀티트레이는 자외선으로 살균하는 공간이라 음식물을 넣으면 안 돼요. 자외선 때문에 음식물을 감싸는 포장지나 용기가 변형되면서 음식에 안 좋은 영향을 줄 수 있고, 음식 자체가 상할 수도 있어요. 손으로 자주 만지는 물건들만 넣어주세요.

> [!WARN]
> UVC 살균 트레이에 음식물을 넣으면 자외선 때문에 포장이 변형되거나 음식이 상할 수 있어요.

### 전화번호 알림판은 스피커 위치를 피해서 붙이세요
운전석 앞유리에 큰 전화번호판(특히 쿠션형처럼 넓은 것)을 붙이는 경우가 많은데, 그 자리에 스피커가 있어서 소리가 막히거나 금속·딱딱한 재질일 경우 잡음이 나고 소리가 둔탁해질 수 있어요. 스피커 위치를 피해서 붙이는 걸 추천해요.

## 하이브리드 시내 저속 편의 기능 — 스마트 회생 시스템 '오토'

### 이건 버튼 하나가 아니라 '설정 + 조작'의 조합이에요
흔히 '시내 저속 버튼'이라고 부르지만, 사실은 물리적으로 딱 눌리는 버튼 하나가 아니라 설정을 미리 켜두고 패들 시프트를 조작해야 켜지는 조합 기능이에요. 정체가 잦고 신호와 차가 많은 시내 도로에서 스마트 크루즈 컨트롤을 쓰기엔 부담스럽지만, 그렇다고 계속 가속 페달(액셀)·브레이크를 밟긴 피곤할 때 쓰면 좋아요.

### 켜는 방법 (둘 중 아무거나)
- **가장 빠른 방법**: 기어를 **D**에 둔 상태에서 **오른쪽 패들(+)을 1초 이상 당기면** 바로 '오토'가 켜져요.
- **설정에서 켜기**: **설정 > 차량 > 친환경차 > 스마트 회생 시스템**에서 ON.

> [!TIP] '내비게이션 연동'은 **필수가 아니라 선택 옵션**이에요(설정의 회생 제동량 항목에서 켤 수 있어요). 켜 두면 과속 단속 구간 등 내비 정보를 활용해 감속을 도와줘요.

### '오토'는 강제 회생제동 1~3단계와 달라요
회생제동을 강하게 거는 1·2·3단계는 감속이 급해서 몸이 앞으로 훅 쏠리며 울렁거릴 수 있어요(멀미가 날 수도 있어요). 반면 '오토'는 내비게이션 경로 정보와 전방 레이더 센서를 바탕으로 과속방지턱·과속 단속 구간·앞차와의 거리·지하주차장 서행 구간 등에 맞춰 부드럽게 감속해주는 방식이라 느낌이 훨씬 자연스러워요.

### 차로 유지 보조와 같이 켜면 더 편해요
'오토'를 켠 상태에서 차로 유지 보조 장치(핸들 그림 버튼)까지 함께 켜면, 차로 유지와 가속·감속을 차가 많이 도와줘요. 신호와 정체가 많은 시내 구간에서 운전 피로를 크게 줄일 수 있어요. 다만 **핸들은 계속 잡고 있어야 해요.** 손을 떼면 경고가 뜨고 기능이 해제돼요.

> [!TIP]
> 시내 정체 구간에서는 '스마트 회생 시스템 오토' + '차로 유지 보조'를 함께 켜보세요. 가속 페달·브레이크를 덜 밟으면서도 편하게 다닐 수 있어요.

> [!WARN]
> '오토'는 감속만 도와주는 기능이에요. 완전히 정지할 때는 반드시 운전자가 풋 브레이크를 직접 밟아야 하고, 전방 주시도 그대로 해야 해요.

> [!NOTE] **'오토'가 저절로 꺼지는 상황도 있어요.** 시동을 다시 걸었을 때, 기어를 N·R·P로 옮겼을 때, 스포츠 모드로 바꿨을 때, 스마트 크루즈가 작동 중일 때, 브레이크로 감속 중이거나 배터리 충전량이 가득할 때 등에는 일시적으로 해제되거나 회생량 조절이 안 될 수 있어요. "어제는 됐는데 오늘은 안 되네?" 싶으면 이 조건들을 떠올려 보세요.

## 편의 꿀팁 — 시야와 등화장치

### 햇빛가리개는 완전히 뒤로 젖혀서 쓰세요
햇빛가리개가 너무 커서 시야를 가린다는 얘기가 많은데, 이건 아래로 내려서 쓰기 때문이에요. 완전히 뒤로 젖혀서 사용하면 깊이가 긴 만큼 오히려 햇빛을 더 잘 가려주면서 시야도 편해져요.

### 자동 상향등(하이빔 보조)을 활용하세요
맞은편 차가 오면 알아서 상향등을 꺼 주고, 지나가면 다시 켜 주는 기능이에요. 손으로 계속 조작하지 않아도 되고 상대방 눈부심도 막아 줘요. 켜는 순서는 이래요.

1. **설정 > 차량 > 라이트 > 하이빔 보조**를 먼저 켜 둬요(한 번만 하면 돼요).
2. 조명 스위치를 **AUTO 위치**로 돌린 뒤, 레버를 **클러스터(계기판) 쪽으로 밀면** 표시등이 켜지며 작동해요.

> [!NOTE] 속도 조건이 있어요. 약 **30km/h 이상**에서 상향등이 켜지고, **20km/h 아래로 떨어지면** 다시 꺼져요. 시내 저속 구간에서 안 켜진다고 고장이 아니에요.

### 방향지시등, 살짝만 까딱여도 자동으로 깜빡여요
레버를 방향으로 살짝만 까딱이면 정해진 횟수만큼 깜빡인 뒤 알아서 멈춰요(원터치 방향지시등).

> [!CHECK] 이 기능은 **설정 > 차량 > 라이트 > 원터치 방향지시등**에서 켜고, **깜빡임 횟수(3·5·7회)**도 고를 수 있어요. 안 된다면 설정이 꺼져 있는지 확인해 보세요.

## 편의 꿀팁 — 시트를 200% 활용하기

### 일반 주행에서도 옆구리 지지 기능을 켤 수 있어요
스포츠 모드에서는 시트 옆구리 날개(사이드 볼스터)가 몸을 감싸주는데, 시트 조절부의 은색 원형 버튼을 위로 올리면 일반 모드에서도 이 기능을 켤 수 있어요.

### 조수석·2열에도 메모리 시트가 있어요
운전석 메모리 시트는 잘 알려져 있지만, 조수석과 2열에도 메모리 기능이 있어요. 버튼을 세 번 연속 눌러주면 현재 시트 위치가 저장되고, 릴렉션 모드 등으로 자세가 바뀐 뒤 저장된 자세로 되돌아가고 싶으면 같은 버튼을 0.5초 정도 길게 누르면 돼요.

### 안전벨트 높이도 조절할 수 있어요
1열 안전벨트는 높이 조절이 가능해요. 벨트 쪽에 버튼처럼 생긴 부분이 있는데, 신체 사이즈에 맞게 조절하면 목에 걸리거나 너무 꽉 끼는 문제를 해결할 수 있어요.

### 6·7인승 — 트렁크가 비었다면 3열 펴고 2열 접어보세요
6·7인승 차량에서 2열에 앉을 때 좀 더 편하고 시원하게 가고 싶다면, 트렁크에 짐이 없는 경우 3열을 펼치고 2열을 접어서 다리를 뻗고 앉아보세요. 3열 공조 장치로 에어컨도 더 직접적으로 맞을 수 있어요.

### 운전석을 완전히 젖히면 눕는 것도 가능해요
장거리 운전 중 휴게소 등에서 운전석을 완전히 뒤로 젖히면 누운 자세가 가능해요. 다만 옆에 있는 안전벨트 클립이 달랑거리며 소음을 내는데, 이 클립을 시트 옆 구멍 안에 살짝 넣어두면 소음 없이 조용하게 둘 수 있어요(자주 여닫는 게 아니라서 상처 걱정은 없다고 해요).

## 편의 꿀팁 — 터널·공조 자동화

### 터널 들어갈 때 창문, 손으로 닫지 마세요
설정에 따라 내비게이션 경로 기반으로 터널 진입 직전 안내 문구가 뜨면서 실내 순환(바깥 공기를 막는 상태)으로 바뀌고 창문도 자동으로 닫혀요. 터널을 빠져나오면 원래 열려 있던 위치 그대로 다시 열려요. 1열·2열 모두 동일하게 적용되지만 선루프는 해당되지 않아요.

### 싱크(SYNC) 버튼을 해제하면 좌우 냉난방을 다르게 쓸 수 있어요
공조장치의 싱크 버튼을 해제하면 운전석과 동승석의 냉난방 온도를 완전히 다르게 설정할 수 있어요. 한쪽은 냉방, 다른 쪽은 난방까지도 동시에 나올 수 있을 정도로 온도차를 확실히 줄 수 있어요.

### 앞유리 김서림, 자동으로 없앨 수 있어요
차량 설정에서 '김서림 자동 제거' 기능을 켜두면 김서림 상태에 따라 차가 알아서 제거 기능을 껐다 켰다 해줘요. 혹시 이 설정을 못 해뒀는데 급하게 써야 한다면, 앞유리 성에 제거 버튼을 표시등이 6번 깜빡일 때까지 길게 누르면 자동 설정이 켜져요. 사이드미러가 뿌옇다면 뒷유리 성에 제거 버튼을 누르면 같이 해결돼요.

## 편의 꿀팁 — 블루링크·내비게이션

### 시동 걸기 전에 목적지부터 차로 보내두세요
블루링크 앱(또는 네이버지도·카카오맵에서 목적지 검색 후 공유 메뉴의 블루링크 아이콘)으로 목적지를 차로 전송해두면, 시동을 켜자마자 내비게이션 화면에 바로 목적지가 설정돼 있어요. 단, 휴대폰의 블루링크 앱과 차량 연결이 계속 유지되어 있어야 해요.

### 핸들 별 버튼으로 정체 구간 재탐색하기
설정 화면에서 '사용자 버튼별 핸들' 메뉴로 들어가 별 버튼에 '재탐색' 기능을 지정해두세요. 내비게이션 경로 옵션은 '추천 경로'보다 '빠른 경로'로 설정하는 게 실시간 정체 반영이 더 빠르다고 해요. 길이 막힐 때 별 버튼을 누르면 블루링크가 데이터를 다시 찾아 최적 경로로 안내해주고, 같은 경로가 계속 나온다면 여러 번 눌러볼 수도 있어요.

### 안내 음성을 놓쳤다면 맵(MAP) 버튼을 누르세요
시끄러운 노래 소리나 대화 때문에 "약 300m 앞 우회전하세요" 같은 안내를 놓쳤을 때, 맵 버튼을 한 번 누르면 방금 놓친 안내를 다시 들려줘요. 그사이 거리가 줄었거나 경로가 바뀌었다면 최신 정보로 다시 안내해줘요.

### 옆 화면을 밀면 지도를 넓게 볼 수 있어요
내비게이션 옆 화면이 거슬린다면 옆으로 살짝 밀어서 없애면 지도를 더 넓게 볼 수 있어요. 조그 다이얼(돌려서 조작하는 둥근 조절 장치)로 전체 경로 탐색 화면을 크게 볼 수도 있어서, 어디가 막히는지 큰 화면으로 확인하고 싶을 때 유용해요.

### 안내 음성이 시끄러우면 잠시 멈출 수 있어요
내비게이션 화면 아래 X 표시를 길게 누르면 길 안내가 일시 중지돼요. 라디오를 듣거나 다른 걸 하고 싶을 때 눌러두고, 재생 버튼을 누르면 원래 안내로 돌아와요. 경로를 취소했다가 다시 입력할 필요가 없어요.

### 화면이 부담스러우면 꺼둘 수 있어요
설정에서 화면 구성의 '대기 화면 표시'를 '없음'으로 해두고, 음량 조절 버튼(전원 버튼 위치)을 꾹 눌러주면 화면과 소리가 모두 꺼져요. 다시 켤 때도 같은 버튼을 꾹 눌러주면 돼요. 화면 상단을 내려서 화면만 끄는 방법도 있어요.

## 편의 꿀팁 — 주행 보조 숨은 기능

### 정체 구간에서 재출발, 가속 페달 대신 이 스위치로
스마트 크루즈로 가다 서다 하다 보면, 오래 멈춰 있었을 때는 **운전자가 직접 조작해야** 다시 출발해요. 이때 가속 페달을 밟는 대신 핸들의 크루즈 스위치를 쓰면 편해요.

![크루즈 속도/재개 스위치 조작](/img/scc-resume-switch.jpg)
*위로 올리기(+) · 아래로 내리기(−) · 누르기(재개) 세 가지 조작이에요. (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

- **스위치를 위·아래로 올리거나 내리면** → **지금 달리는 속도**로 다시 설정돼요.
- **재개 스위치를 누르면** → **아까 설정해 뒀던 속도**로 돌아가요.

> [!WARN] **재개 스위치는 조심하세요.** 이전 설정속도가 지금보다 훨씬 높으면 **갑자기 빠르게 가속**할 수 있어요. 매뉴얼도 "이전 설정속도를 확인한 후에 누르라"고 안내해요. 정체 구간에서는 위·아래 스위치로 현재 속도부터 잡는 게 안전해요.
> 참고로 **완전히 멈춘 상태에서 앞차가 있으면**, 크루즈를 켜려면 브레이크 페달을 밟아야 해요.

### 헤드업 디스플레이의 '주변 차량 표시'만 계속 켜두기
스마트 크루즈를 켜면 헤드업 디스플레이에 **주변 차량 형상**이 표시돼요. 크루즈를 한 번 켠 뒤 일시정지하면 크루즈는 멈추지만 이 표시는 남는다는 팁이 있어요. 사각지대 확인에 도움이 된다고 해요.

> [!NOTE] 이 팁은 **오너 영상에서 나온 내용**이라 사양·소프트웨어 버전에 따라 다르게 동작할 수 있어요(매뉴얼에 명시된 사용법은 아니에요).

### 방향지시등을 켜면 그쪽 뒷모습이 계기판에 떠요 (후측방 모니터)
**후측방 모니터(BVM)** 옵션이 있으면, **좌·우 방향지시등을 켤 때 그쪽 후방 영상이 계기판(클러스터) 표시창에 나타나요.**

![방향지시등을 켰을 때 계기판에 표시되는 후측방 영상](/img/bvm-cluster-view.jpg)
*방향지시등을 켜면 계기판에 그쪽 후방이 이렇게 보여요(사진은 주행 중 차로 변경 예시). (출처: 현대 싼타페 MX5 HEV 2026 취급설명서)*

- 원래는 차로를 바꿀 때 **옆 차로의 차**를 확인하는 용도예요.
- 주차할 때도 같은 방식으로 켜면 **연석·바닥 장애물**을 서라운드뷰보다 크게 볼 수 있어서, 평행 주차나 출차할 때 **휠 긁힘을 막는 데** 도움이 돼요.
- **방향지시등을 끄면** 화면도 사라져요(계기판에 다른 중요한 정보가 뜰 때도 종료돼요).

## 편의 꿀팁 — 수납 & 정리

### 안전 삼각대, 숨은 공간에 보관하세요
트렁크 바닥의 스티로폼 수납함을 들춰내면 고정용 밴드 두 개가 있는 숨은 공간이 나와요. 트렁크 공간이 좁은 하이브리드 6·7인승이라면 삼각대를 여기 보관하면 굴러다니거나 소음을 낼 걱정이 없어요.

### 스마트키는 멀티콘솔 앞 손잡이 홈에
스마트키를 둘 곳이 마땅치 않았는데, 멀티콘솔 앞쪽 손잡이의 홈에 크기가 딱 맞게 올려둘 수 있어요. 다만 정식 수납공간은 아니라서 급제동 시 앞으로 튕겨나가거나, 케이스를 씌운 경우 크기가 커져 떨어질 수도 있으니 참고하세요.

### 콘솔 트레이는 분리해서 쓸 수 있어요
콘솔 안쪽 트레이의 칸막이는 분리할 수 있어서, 작은 물건을 나눠 담을 땐 칸막이를 끼우고 큰 물건을 안정적으로 담고 싶을 땐 위로 뽑아 빼면 돼요. 트레이 자체도 두 손가락으로 잡고 위로 올리면 빠지고, 2열에서 열 수 있는 슬라이딩 수납함과 연결돼 있어서 높이가 긴 물건 수납에 좋아요.

### 안 쓰는 안전벨트는 전용 홀더에 걸어두세요
2열·3열에 사람이 안 탈 때 안전벨트를 그냥 두면 흔들리며 소음이 나고 버클이 부딪혀 흠집이 생길 수 있어요. 각 좌석 전용 홀더에 걸어두면 흔들림도 소음도 사라져요.

### 옷걸이·가방은 걸이 고리를 활용하세요
천장 손잡이 안쪽에 옷을 걸 수 있는 고리가 있어요. 2열 수동 커튼 고정 고리에도 걸 수 있는데, **내 차(H-Pick)는 프레스티지보다 윗급이라 여기 해당돼요.** 다만 **캘리그래피 전용 옷걸이 고리는 내 차에 없어요**(옵션으로도 추가되지 않아요). 걸 수 있는 고리 폭이 좁은 가방은 다른 고리를 활용하면 돼요.

### 트렁크 수납함 뚜껑, 안전벨트로 고정하기
트렁크 뒤쪽 수납함 뚜껑이 자꾸 떨어지며 부딪힌다면(3열 안전벨트가 있는 트림 한정), 벨트를 걸어주고 클립을 뒤로 빼서 걸면 뚜껑이 완전히 고정돼요.

## 편의 꿀팁 — 세차·보안·기타

### 세차할 때는 도어 손잡이 센서를 꺼두세요
스마트키의 잠금 버튼과 열기 버튼을 동시에 길게 누르면 도어 손잡이 센서 기능이 잠시 꺼져요. 세차 중 손잡이가 계속 반응해서 열리는 불편을 막을 수 있고, 근처에 있을 때 손이 닿아 문이 열리는 것도 방지할 수 있어요. 원래대로 되돌리려면 열림 버튼을 아무거나 한 번 누르면 돼요.

### 오토홀드가 저절로 파킹 브레이크로 바뀔 때가 있어요
정차 중 오토홀드가 걸려 있다가, **운전석 문·보닛·트렁크를 열거나**, 급경사에 서 있거나, 오래 정차하면 안전을 위해 **자동으로 전자식 파킹 브레이크(EPB)로 전환**돼요. 고장이 아니니 놀라지 마세요(출발할 때는 그대로 가속하면 풀려요).

### 하이브리드는 가끔 브레이크 디스크 청소 모드를 써주세요
하이브리드는 감속할 때 회생제동(배터리 충전)이 우선이라 디스크 브레이크 사용 빈도가 낮아서 이물질이 끼거나 녹이 슬기 쉬워요. 오토홀드 버튼을 약 3초간 길게 누르면 디스크 브레이크 청소 모드가 켜지는데, 회생제동 대신 디스크 브레이크를 일부러 사용한 뒤 알아서 꺼지기 때문에 따로 꺼줄 필요는 없어요.

### 저속 구간 카메라 화면이 거슬리면 주차/뷰 버튼
출발 직후나 저속 상태에서는 안전을 위해 카메라 화면이 자동으로 켜지는데, 이게 거슬리거나 그 순간 내비게이션을 보고 싶다면 주차/뷰 버튼(P 버튼)을 눌러 내비게이션 화면으로 바로 전환할 수 있어요. 기어를 P(주차)에 넣는 변속 버튼과는 다른 버튼이에요. 다시 카메라 화면을 보고 싶으면 같은 버튼을 누르면 돼요.

### 배터리 커버는 함부로 열지 마세요 (중요)
유튜브 등에서 "트렁크 쪽 하이브리드 배터리 커버를 열어 안쪽 비닐을 떼라"는 이야기가 돌지만, **이 조언은 그대로 따르면 안 돼요.**

> [!DANGER] **고전압(하이브리드) 배터리 시스템은 절대 임의로 열거나 만지지 마세요.**
> 매뉴얼은 "배터리 시스템을 절대 분해하거나 조립하지 마십시오. **감전으로 인하여 사망하거나 다칠 수 있습니다**", "배터리 시스템, 모터에 연결된 **고전압 케이블(주황색 케이블)** 등은 감전의 우려가 있으므로 손으로 부품을 만지거나 **커버나 전기 케이블을 임의로 탈부착하지 마십시오**"라고 명확히 금지하고 있어요. 점검이 필요하면 **하이테크센터·블루핸즈**에 맡기세요.

- 참고로 **고전압 배터리는 뒷좌석 쪽**에 있고(작동 중 그쪽에서 소리가 나는 건 정상), 트렁크 바닥 우측 커버 아래에 있는 건 **12V 배터리(시동·전장용, 별개 부품)**예요. 두 개는 완전히 다른 부품이라 헷갈리면 위험해요.
- **인수 후 비닐 제거**는 시트·매트·내장재처럼 **눈에 보이는 실내 비닐**까지만 하세요('출고 후 3일 할 일' 참고). 배터리·전장 커버 안쪽은 손대지 않는 게 맞아요.

### 가죽 시트는 2주에 한 번 세정+코팅
가죽(베이지) 시트는 가죽 세정과 코팅이 함께 되는 제품으로 마른 헝겊에 묻혀 닦아주면 돼요. 2주에 한 번 정도 수시로 닦아주면 충분해요. 통풍 시트는 구멍 사이로 세정제가 들어가지 않도록, 문지르기보다 헝겊으로 슬며시 밀어서 먼지를 닦아내는 느낌으로 관리하세요.

### 블루멤버스 포인트, 스마일캐시로 바꿔 쓰기
마이현대 앱에 적립된 블루멤버스 포인트는 1점당 1원으로 스마일캐시 전환이 가능해서 지마켓·옥션이나 일부 신세계 계열사에서 현금처럼 쓸 수 있어요. 다만 하루 최대 1만 원, 월 최대 2만 원 한도로 전환할 수 있어요.

### 콘솔 하단 불빛이 거슬리면
콘솔 하단 조명이 꺼지지 않아 야간 운전 때 신경 쓰인다면, 다 쓴 물티슈 캡을 그 아래 붙여서 빛을 가릴 수 있어요.
`,body_md:`## 무심코 고장낼 수 있는 습관 (원문 10가지, 상세)

1. **트렁크 수동 조작 금지**: 기본 트림부터 트렁크는 전동식이며 열리는 각도·속도가 전자 장치로 제어된다. 손으로 힘을 줘서 강제로 닫으면 내부 설정값이 틀어지거나 버튼 작동 불능이 될 수 있다. 반드시 트렁크 버튼으로만 조작할 것.
2. **전자 버튼 동시 조작 금지**: 창문 버튼, 시트 자세 제어 버튼, 핸들 버튼 등 두 개 이상을 동시에 누르면 세팅된 전자 값이 꼬여 작동 불능이 되거나 퓨즈 수명이 짧아지고 심하면 버튼이 파손될 우려가 있다.
3. **6인승 2열 시트 관련**: 시트를 완전히 아래로 접은 상태에서 무거운 짐을 올리거나 사람이 올라간 상태(차박 등)로 상향/하향 버튼을 누르면 전자제어 장치가 꼬여 의자 작동 불능 또는 완전 고장으로 이어질 수 있다.
4. **열선 시트 커버 쭈글거림**: 열선을 켜고 앉았다 일어나면 시트 커버가 쭈글쭈글해지는 경우가 있는데, 정상적인 현상이라는 사례가 많다(다만 개인 경험담 기반 정보이며 심한 경우 블루핸즈 확인 권장).
5. **허리 지지대 버튼**: 더 이상 움직이는 느낌이 없으면 즉시 버튼에서 손을 떼야 한다. 계속 누르면 모터가 손상되어 완전 고장 가능. 화면 표시가 사라지면 완전히 멈춘 상태이므로 그때 손을 뗀다.
6. **하차 시 조명(에스코트 기능) 방전 주의**: 하차 후 일정 시간 실내외 조명이 켜졌다가 자동으로 꺼지는 에스코트 기능은 '운전석에서 사람이 내릴 때'를 기준으로 배터리 방전 방지 기능이 함께 동작해야 켜진다. 조수석이나 2열로만 하차하는 경우 반드시 스마트키로 한 번 더 눌러 불을 꺼야 한다. 그렇지 않으면 조명이 계속 켜져 있을 수 있다.
7. **무선충전패드 위 마그네틱 카드류 금지**: 신용카드, 통장, 승차권 등 자성을 이용한 물건을 무선충전대 위에 올리면 내부 정보가 훼손될 수 있다. 특히 주유용 신용카드 주의.
8. **UVC 살균 멀티트레이에 음식물 금지**: 자외선 살균 기능이 있는 트레이에 음식물을 넣으면 포장지·용기가 변형되며 음식에 안 좋은 영향을 줄 수 있고, 음식 자체가 상할 수도 있다. 손으로 자주 만지는 물건만 넣을 것.
9. **하이브리드 고전압 배터리 완전 방전 주의**: 오래 운전하지 않으면 고전압 배터리가 방전될 수 있고, 완전 방전 시 성능 저하가 크다. 현대차 안내 기준으로 주행하지 않은 날로부터 2개월 이내 15km 이상 주행하면 방전 문제를 막을 수 있다.
10. **전화번호 알림판 부착 위치**: 운전석 앞유리에 크고 쿠션형인 알림판을 붙이면 스피커 위치를 가릴 수 있어 소리가 막히거나(금속/딱딱한 재질일 경우) 잡음·둔탁한 음질을 유발할 수 있다. 스피커를 피해 부착할 것.

## 하이브리드 시내 저속 편의 기능 — 스마트 회생 시스템 '오토' (상세)

- 원문 맥락: 하이브리드 전용 기능이며, 시내 구간에서 스마트 크루즈 컨트롤을 쓰기엔 부담스럽고 그렇다고 계속 액셀·브레이크를 밟기엔 피곤한 상황을 위한 기능이다. 물리적으로 하나만 누르는 '저속 버튼'이 아니라, 사전 설정(스마트 회생 시스템 + 내비게이션 연동 활성화) 후 패들 시프트를 조작해야 켜지는 조합 기능이다.
- **설정 경로**: 차량 설정 화면 → 차량(친환경차) → 스마트 회생 시스템 활성화 → 내비게이션 연동까지 함께 활성화.
- **활성화 조작**: 반드시 주행 중(D단)에만 가능. 운전석에서 봤을 때 오른쪽 패들 시프트를 1초 이상 길게 뒤로 당기면 '오토' 표시가 뜨며 활성화된다.
- **강제 회생제동 1~3단계와의 차이**: 원문 화자는 강제 회생제동(1~3단계) 사용을 선호하지 않는다고 밝힘. 이유: (1) 일반 주행 제동과 다르게 급격한 제동이라 꿀렁임이 있고 뒤에서 잡아당기는 느낌이 있어 동승자·2열 탑승자가 멀미를 느낄 수 있음, (2) 불필요한 제동을 자주 걸어 속도를 다시 올리기 위한 엔진 출력이 늘어나 오히려 연비에 나쁠 수 있다는 의문 제기, (3) 액셀에서 발을 떼면 제동등이 계속 들어와 양발 운전처럼 보여 뒷차에 불안감·피로감을 줄 수 있음.
- **'오토' 모드 동작 원리**: 내비게이션 기반 경로 정보와 전방 레이더 센서를 이용해 능동적으로 감속을 수행한다. 예시 상황: 과속 단속 카메라 구간에서 관성 주행 중 규정 속도에 근접하면 자동으로 제동 후 다시 가속, 앞차와 가까워지면 자동 제동, 연속 과속방지턱 구간, 지하주차장 등 서행이 필요한 구간에서 앞차 인식 시 서서히 감속(2차 사고 예방).
- **주의사항**: 감속만 도와주는 기능이므로 완전 정지 시에는 반드시 풋 브레이크를 직접 밟아야 하며, 전방 주시 의무도 그대로 유지해야 한다.
- **차로 유지 보조 장치와 병행**: 차로 유지 보조 장치(핸들 그림 버튼)를 켜고 회생제동을 '오토'로 설정하면, 핸들에 손만 올려두고 차로는 차가 유지, 가·감속은 전방 레이더+내비게이션 기반으로 차가 처리하며 운전자는 정지 시에만 브레이크를 밟으면 된다. 신호와 정체가 많은 시내 도로에서 특히 유용하다고 소개됨.
- **연비 효과에 대한 원문 평가**: 화자는 이 기능이 정확히 언제 연비에 도움이 되는지는 확신하지 못한다고 밝혔으며("아주 약간은 도움이 되지 않을까"), 연비보다는 '운전 편의' 기능으로 접근하는 게 낫다고 정리함. 추후 별도 연비 테스트를 예고함(본 자막에는 결과 없음).

## 설명서에 없는 꿀팁 모음 (원문 순서, 상세)

1. **햇빛가리개**: 아래로 내려서 쓰면 시야를 가린다는 불만이 많은데, 완전히 뒤로 젖혀서 사용하면 깊이가 긴 만큼 오히려 햇빛을 더 가려주면서 시야도 편해진다.
2. **자동 상향등(오토 하이빔)**: 좌측 레버를 한 번 앞으로 밀면 '오토' 표시. 주변 밝기가 어둡다고 판단되면 상향등이 자동으로 켜지고, 맞은편 차가 다가오면 자동으로 꺼졌다가 차가 지나가면 다시 켜진다.
3. **원터치 방향지시등**: 레버를 방향에 따라 살짝만 까딱이면 설정된 횟수만큼 깜빡인 뒤 자동으로 멈춘다. 고속도로 주행보조2의 자동 차선 변경 기능과도 연동된다.
4. **일반 모드 옆구리 지지 버튼**: 스포츠 모드에서만 작동하는 줄 아는 시트 옆구리(볼스터) 지지 기능을, 시트 조작 버튼 중 하나를 눌러 일반 모드에서도 사용할 수 있다.
5. **조수석·2열 메모리 시트**: 운전석 외에 조수석·후승 객석도 메모리 기능이 있다. 앞쪽 버튼을 세 번(딱딱딱) 누르면 현재 포지션 저장, 저장된 자세로 되돌리려면 같은 버튼을 0.5초가량 길게 누른다.
6. **터널 자동 창문 닫힘**: 설정에 따라 내비게이션 경로 기반으로 터널 진입 직전 창문이 자동으로 닫히고 내기 모드로 전환되며, 터널을 빠져나오면 원래 열려있던 위치로 다시 열린다. 1·2열 모두 적용되나 선루프는 제외.
7. **블루링크 내비 상단 컨트롤센터**: 내비게이션 화면 상단을 아래로 내리면(스마트폰 상태바처럼) 화면 밝기 조절, 동승자와의 대화 모드, 내비게이션 모드 변형 등 다양한 기능을 이용할 수 있다.
8. **계정별 설정 + 게스트 모드**: 시동을 걸면 나오는 계정 설정 화면에서 계정마다 주행 세팅, 화면 구성, 무드램프, 시트 포지션을 다르게 저장할 수 있다. 메모리 시트 두 자리로 부족하면 게스트 모드나 서브 계정을 추가로 만들 수 있다. 게스트 모드에서도 메모리 시트 1·2번을 사용할 수 있어, 별도 계정 없이 총 네 개 포지션을 활용할 수 있다.
9. **블루링크 앱 목적지 원격 전송**: 블루링크 앱에서 목적지를 검색해 '내 차로 전송'하면 시동을 켰을 때 내비게이션 화면에 바로 목적지가 설정된다.
10. **삼각대 히든 수납공간**: 트렁크 바닥 스티로폼 수납함을 들추면 밴드 두 개가 있는 히든 공간이 나온다. 트렁크가 좁은 하이브리드 6·7인승에 특히 유용.
11. **하이브리드 배터리 커버 개방법**: 3열 뒤 트렁크 공간에 위치, 손가락으로는 열리지 않고 공구가 필요하다. 스마트키에 동봉된 보조키(어시스트 핸들)를 틈에 넣어 밀어올리면 쉽게 열린다. 개방 후 안쪽에 붙은 비닐은 반드시 제거해야 하는데, 배터리 발열과 만나 화재 위험이 있기 때문이다.
    - ※ **[2026-07-27 정정]** 이 항목은 공식 매뉴얼과 배치된다. 매뉴얼은 고전압 배터리 시스템의 커버·케이블을 임의로 탈부착하지 말라고 명시(감전 사망 위험)하며, 고전압 배터리는 뒷좌석 쪽에 위치한다. 트렁크 바닥 우측의 것은 별개인 12V 배터리다. 서비스 콘텐츠에서는 채택하지 않는다.
12. **안전벨트 높이 조절**: 1열 안전벨트 쪽에 버튼처럼 생긴 조절 장치가 있어 신체 사이즈에 맞게 높이를 조절할 수 있다.
13. **하이브리드 크루즈 전기 모드 전환(연비 팁)**: 스마트 크루즈 컨트롤 사용 중 평지·내리막에서도 배터리 충전을 위해 엔진이 개입되는 경우가 있는데, 이때 액셀을 살짝 눌렀다 떼면 엔진 출력이 한 번 오른 뒤 전기 모드로 전환된다. 다만 너무 자주 쓰면 급격한 고출력으로 오히려 연비가 나빠질 수 있어, 긴 평지·내리막 구간에서만 제한적으로 사용할 것을 권장.
14. **핸들 별 버튼 재탐색 설정**: 설정 화면의 '사용자 버튼별 핸들' 메뉴에서 별 버튼에 재탐색 기능을 지정. 내비게이션 경로 옵션은 '추천 경로'보다 '빠른 경로'가 실시간 정체를 더 잘 반영한다는 경험담. 정체 시 별 버튼을 누르면 블루링크 데이터를 재조회해 최적 경로를 다시 안내하며, 같은 경로가 반복되면 여러 번 누를 수도 있다.
15. **공조장치 좌우 버튼 위치 교체**: 공조장치 양옆의 두 버튼(음량/지도 확대축소 등) 위치를 서로 바꿀 수 있다. 화자는 운전자 쪽 가까이에 지도 확대·축소 버튼을 두는 게 조작하기 편하다고 소개.
16. **빌트인캠 증강현실(AR) 내비 설정**: '설정 → 내비게이션 → 지도 화면 → 지도 뷰 → 증강현실'로 설정하면 모든 안내가 증강현실로만 나온다(비추천). 대신 '경로 안내 → 안내 위치 → 안내 위치 증강현실 뷰'로 설정하면 평소엔 지도로 가다가 갈림길에서만 증강현실이 나타난다. 헷갈리는 갈림길에서는 화면을 한 번 터치하면 증강현실이 꺼지고 지도로 돌아간다.
17. **맵(MAP) 버튼으로 놓친 안내 다시 듣기**: 시끄러운 소리나 대화로 안내 멘트를 놓쳤을 때 맵 버튼을 누르면 방금 안내를 다시 들을 수 있고, 거리·경로가 바뀌었다면 최신 정보로 재안내한다.
18. **내비 옆 화면 밀어서 와이드 지도**: 내비게이션 옆 보조 화면을 옆으로 밀어서 없애면 더 넓은 지도 화면을 볼 수 있다. 조그 다이얼로 전체 경로 탐색 화면을 크게 볼 수도 있어 정체 구간 파악에 유용하다.
19. **정체 구간 자동 재출발**: 정체로 정차·서행을 반복하다 일정 시간 이상 정지하면 안전을 위해 운전자가 수동으로 조작해야 재출발하는데, 액셀 대신 크루즈 관련 버튼을 한 번 눌러도 차가 출발한다.
20. **전화 수신 화면 미표시 문제**: 화자의 경험담으로, 블루투스 재연결로도 해결이 안 됐던 전화 수신 화면 미표시 문제가 '기기연결 설정' 쪽 옵션(기본으로 다른 값이 설정돼 있었음)에서 해결됐다고 언급되나, 정확한 메뉴명·설정값은 자막에서 구체적으로 언급되지 않는다. 문제를 겪는다면 기기연결 설정 메뉴를 확인해볼 것.
21. **싱크(SYNC) 버튼 해제 시 좌우 냉난방 분리**: 싱크 버튼을 해제하면 단순히 반대편이 송풍만 나오는 게 아니라, 한쪽은 냉방, 다른 쪽은 난방이 동시에 나올 수 있을 정도로 좌우 온도차를 확실히 줄 수 있다.
22. **가죽시트 관리**: 다이소의 가죽 세정+코팅 겸용 제품을 마른 헝겊에 묻혀 2주에 한 번 정도 닦아준다. 통풍 시트는 구멍 사이에 세정제가 들어가지 않도록 문지르지 말고 헝겊으로 슬며시 밀어서 닦을 것.
23. **스마트키 보관 위치**: 멀티콘솔 앞쪽 손잡이의 홈에 크기가 맞게 올려둘 수 있다(정식 수납공간은 아님 — 급제동 시 튕겨나가거나 케이스를 씌우면 커져서 떨어질 수 있음).
24. **콘솔 트레이 파티션 분리 및 2열 슬라이딩 수납함**: 트레이 안 파티션은 분리 가능하며, 트레이 자체도 두 손가락으로 위로 올리면 빠진다. 2열에서 열 수 있는 슬라이딩 수납함과 연결되어 있어 높이가 긴 물건 보관에 유용.
25. **콘솔 뚜껑 분리(청소용)**: 뚜껑 앞쪽을 들어올린 뒤 양쪽 버튼을 동시에 눌러 락을 풀고, 뚜껑을 한 번 더 내렸다 평행한 상태에서 뒤쪽을 누르며 동시에 올리면 쉽게 빠진다.
26. **안전벨트 소음 방지**: 2열·3열에서 사람이 타지 않는 좌석의 안전벨트를 전용 홀더에 걸어두면 흔들림·소음·흠집을 방지할 수 있다.
27. **옷걸이/가방 고리**: 천장 손잡이 안쪽 고리, 프레스티지 이상 트림의 2열 수동 커튼 고정 고리에 옷이나 가방을 걸 수 있다. 단, 캘리그라피 트림 전용 옷걸이 고리는 기본·프레스티지 트림에는 옵션으로도 추가되지 않는다.
28. **음료 틈새 공간**: 흔들리기 쉬운 날씬한 음료병은 컵홀더 옆 틈새 공간에 끼우면 얇은 캔커피 등이 흔들리지 않게 고정된다(정확한 위치는 화자가 "중간 살짝 옆"이라고만 언급).
29. **트렁크 수납함 뚜껑 고정**: 3열 안전벨트가 있는 트림 한정으로, 뚜껑을 걸고 벨트 클립을 뒤로 빼서 걸면 뚜껑이 떨어지지 않게 완전히 고정된다.
30. **내비게이션 안내 일시정지**: 화면 아래 X 표시를 길게 누르면 음성 안내가 일시 중지되고, 재생 버튼을 누르면 원래 경로 안내로 복귀한다.
31. **도어 손잡이 센서 끄기(세차 시)**: 스마트키의 잠금 버튼과 열기 버튼을 동시에 길게 누르면 도어 손잡이 센서 기능이 꺼진다. 원복하려면 열림 버튼을 아무거나 누르면 된다.
32. **하이브리드 브레이크 디스크 청소 모드**: 오토홀드 버튼을 약 3초 길게 누르면 활성화된다. 하이브리드는 회생제동 우선 사용으로 디스크 브레이크 사용 빈도가 낮아 이물질·녹이 슬기 쉬운데, 이 모드는 디스크 브레이크를 일부러 사용한 뒤 자동으로 꺼지므로 따로 끌 필요가 없다.
33. **저속 구간 카메라 화면 전환**: 출발 직후·저속 시 안전을 위해 자동으로 카메라 화면이 켜지는데, P 버튼을 누르면 즉시 내비게이션 화면으로 전환된다. 다시 누르면 카메라 화면으로 복귀.
34. **6인승 머리받침 날개 접기**: 머리 받침 양쪽 날개를 눌러 접으면 2열 승객이 더 편안하게 앉을 수 있다.
35. **서리 자동 제거 설정**: 차량 설정에서 '김서림 자동 제거' 기능을 켜두면 서리 상태에 따라 자동으로 껐다 켰다 한다. 설정을 못 했다면 전면 서리 제거 버튼을 길게 눌러 표시등이 6번 깜빡일 때까지 유지하면 자동 설정이 켜진다. 사이드미러가 뿌옇다면 뒷유리 서리 제거 버튼을 누르면 함께 해결된다.
36. **디지털 센터 미러(DIM)**: 옵션 추가 차량 한정. 활성화 후 관련 버튼을 누르면 밝기·각도 조절이 가능하다.
37. **네이버지도·카카오맵 연동 전송**: 두 지도 앱에서도 목적지 검색 후 공유 메뉴의 블루링크 아이콘을 누르면 0.5초 만에 차량으로 목적지가 전송된다. 단, 휴대폰 블루링크 앱과 차량의 연결이 계속 유지되어 있어야 한다.
38. **화면·소리 끄기**: 설정에서 화면 구성의 대기 화면 표시를 '없음'으로 하고, 음량 조절 위치의 버튼을 꾹 누르면 화면·소리가 모두 꺼진다(다시 켤 때도 동일). 화면 상단을 내려 화면만 끄는 방법도 있다.
39. **헤드업 디스플레이 주변 차량 표시('모찌떡') 상시 표시**: 원래 스마트 크루즈 작동 중에만 표시되는 주변 차량 형상(현대 스마트 센스 옵션)을, 크루즈를 한 번 켠 뒤 일시정지 버튼을 누르면 크루즈는 멈추지만 표시는 계속 유지된다. 고속도로에서는 전방·측후방 차량이, 국도·시내에서는 전방 차량이 표시되며, 비 오는 날이나 야간에 유용하다.
40. **6·7인승 롱레그 공간 활용**: 트렁크에 짐이 없을 때 3열을 펼치고 2열을 접어 다리를 뻗고 앉으면 더 편하고, 3열 공조 장치로 에어컨도 더 직접적으로 맞을 수 있다.
41. **운전석 완전 리클라이닝 + 벨트 클립 소음 제거**: 장거리 운전 중 운전석을 완전히 젖히면 취침이 가능한 정도로 눕혀진다. 이때 흔들리는 안전벨트 클립을 시트 옆 구멍에 넣으면 소음 없이 조용히 둘 수 있다.
42. **주차 시 방향지시등으로 바닥 확인(후측방 모니터)**: 후측방 모니터 옵션이 있는 경우, 주차 중 장애물이 있는 쪽 방향지시등을 켜면 해당 방향 카메라 화면이 나와 연석·바닥 장애물이 서라운드 뷰보다 선명하게 보인다. 평행 주차·출차 시 유용.
43. **사용설명서 검색 활용법**: 현대 홈페이지 → 디지털 고객지원 → 사용설명서 다운로드 자료실에서 차종에 맞는 PDF를 내려받은 뒤, 상단 돋보기(검색) 기능으로 원하는 키워드를 검색하면 관련 항목만 하이라이트되어 빠르게 찾을 수 있다. 이마저 번거롭다면 원문 화자의 유튜브 채널 메인에도 관련 설명 영상들이 정리되어 있다고 소개.
44. **블루멤버십 포인트 → 스마일캐시 전환**: 마이현대 앱에서 확인 가능한 블루멤버십 포인트(1점 = 1원)를 지마켓·옥션·일부 신세계 계열사에서 현금처럼 쓸 수 있는 스마일캐시로 전환할 수 있다. 하루 최대 1만 원, 월 최대 2만 원 한도.
45. **콘솔 하단 불빛 가리기**: 야간 운전 시 신경 쓰이는 콘솔 하단 조명은 다 쓴 물티슈 캡을 붙여서 가릴 수 있다.

*(원문 중 통신사 결합상품 광고 구간은 차량 정보와 무관하여 제외했다.)*
`,sources:[{name:"[싼존] 팰리세이드 생활 (유튜브·고장 습관)",url:"https://youtu.be/RXZ6MFCgrCk",type:"personal"},{name:"[싼존] 팰리세이드 생활 (유튜브·꿀팁 총집합)",url:"https://youtu.be/oG5KKuaHIOw",type:"personal"},{name:"[싼존] 팰리세이드 생활 (유튜브·HEV 저속)",url:"https://youtu.be/7lcwTj7o0Yk",type:"personal"},{name:"현대 취급설명서 MX5HEV — 고전압 배터리 시스템 분해/조립 금지",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR/topic_kgp_zcy_v5b.html",type:"official"},{name:"현대 취급설명서 MX5HEV — 스마트 회생 시스템 켜기/끄기",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR/id2267D400IHS.html",type:"official"},{name:"현대 취급설명서 MX5HEV — 파워 테일게이트 작동 조건",url:"https://ownersmanual.hyundai.com/full_webhelp/MX5HEV/2026/ko_KR/id7a695e6e0fb.html",type:"official"}],id:"p4-tips",phase:4,order:4,car_scope:"mx5-hev",valid_year:2026,flags:[],source_files:["youtube/p4-전용꿀팁-01.md"],field_tips_md:""}],lm=[{id:"evt-p0-hybrid-benefits",guide_id:"p0-hybrid-benefits",title:"하이브리드 세제혜택 확인",phase:0,offset:{type:"day",value:-3},importance:"medium"},{id:"evt-p0-insurance",guide_id:"p0-insurance",title:"자동차보험 가입",phase:0,offset:{type:"day",value:-1},importance:"high"},{id:"evt-p0-driver-insurance",guide_id:"p0-driver-insurance",title:"운전자보험 검토",phase:0,offset:{type:"day",value:-1},importance:"medium"},{id:"evt-p0-registration",guide_id:"p0-registration",title:"신차 등록 절차",phase:0,offset:{type:"day",value:0},importance:"high"},{id:"evt-p0-inspection-handover",guide_id:"p0-inspection-handover",title:"신차 인수 검수",phase:0,offset:{type:"day",value:0},importance:"high"},{id:"evt-p0-lemon-law",guide_id:"p0-lemon-law",title:"레몬법(교환·환불) 숙지",phase:0,offset:{type:"day",value:0},importance:"low"},{id:"evt-p0-new-car-syndrome",guide_id:"p0-new-car-syndrome",title:"새차증후군 대응",phase:0,offset:{type:"day",value:1},importance:"low"},{id:"evt-p0-recall",guide_id:"p0-recall",title:"리콜 확인",phase:0,offset:{type:"recurring",rule:"출고 후 1회 조회, 이후 수시"},importance:"low"},{id:"evt-p0-car-tax",guide_id:"p0-car-tax",title:"자동차세 연납 신청",phase:0,offset:{type:"recurring",rule:"매년 1월(3·6·9월도 가능)"},importance:"medium"},{id:"evt-p1-features",guide_id:"p1-features",title:"차량 기능·부착물 세팅(하이패스·빌트인캠·썬팅)",phase:1,offset:{type:"day",value:1},importance:"medium"},{id:"evt-p1-refueling",guide_id:"p1-refueling",title:"셀프 주유 익히기",phase:1,offset:{type:"day",value:1},importance:"medium"},{id:"evt-p1-driving-practice",guide_id:"p1-driving-practice",title:"도로 연수/초보 운전",phase:1,offset:{type:"day",value:3},importance:"high"},{id:"evt-p1-hybrid-driving",guide_id:"p1-hybrid-driving",title:"하이브리드 운전법",phase:1,offset:{type:"day",value:3},importance:"medium"},{id:"evt-p1-parking-practice",guide_id:"p1-parking-practice",title:"주차 연수",phase:1,offset:{type:"day",value:7},importance:"medium"},{id:"evt-p1-break-in",guide_id:"p1-break-in",title:"초기 길들이기",phase:1,offset:{type:"range",from:0,to:30},importance:"medium"},{id:"evt-p2-self-check",guide_id:"p2-self-check",title:"셀프 점검 루틴",phase:2,offset:{type:"recurring",rule:"월 1회"},importance:"medium"},{id:"evt-p2-consumables",guide_id:"p2-consumables",title:"소모품 교환주기 관리",phase:2,offset:{type:"recurring",rule:"주행거리·기간별(엔진오일 1만km/12개월 등)"},importance:"medium"},{id:"evt-p2-washing",guide_id:"p2-washing",title:"세차",phase:2,offset:{type:"recurring",rule:"수시"},importance:"low"},{id:"evt-p2-seasonal",guide_id:"p2-seasonal",title:"계절 관리(여름·겨울)",phase:2,offset:{type:"recurring",rule:"여름·겨울 진입 전"},importance:"medium"},{id:"evt-p2-hybrid-care",guide_id:"p2-hybrid-care",title:"하이브리드 차량 관리",phase:2,offset:{type:"recurring",rule:"상시"},importance:"low"},{id:"evt-p2-service-center",guide_id:"p2-service-center",title:"서비스센터 이용",phase:2,offset:{type:"recurring",rule:"필요 시"},importance:"low"},{id:"evt-p2-inspection",guide_id:"p2-inspection",title:"정기검사(신차 최초)",phase:2,offset:{type:"day",value:1825,note:"신조차 최초 검사 5년(2024.12.17 개정 반영)"},importance:"medium"},{id:"evt-p3-accident",guide_id:"p3-accident",title:"사고 발생 시 대처",phase:3,offset:{type:"on-demand"},importance:"high"},{id:"evt-p3-parking-accident",guide_id:"p3-parking-accident",title:"주차 중 사고·문콕 대처",phase:3,offset:{type:"on-demand"},importance:"high"},{id:"evt-p3-battery-discharge",guide_id:"p3-battery-discharge",title:"배터리 방전 대처",phase:3,offset:{type:"on-demand"},importance:"high"},{id:"evt-p3-tire-puncture",guide_id:"p3-tire-puncture",title:"타이어 펑크 대처",phase:3,offset:{type:"on-demand"},importance:"high"},{id:"evt-p3-disaster",guide_id:"p3-disaster",title:"침수·폭설 재해 대처",phase:3,offset:{type:"on-demand"},importance:"high"},{id:"evt-p3-fault-ratio",guide_id:"p3-fault-ratio",title:"과실비율 분쟁 대응",phase:3,offset:{type:"on-demand"},importance:"medium"},{id:"evt-p0-warranty",guide_id:"p0-warranty",title:"무상보증 확인",phase:0,offset:{type:"day",value:0},importance:"low"},{id:"evt-p2-warning-lights",guide_id:"p2-warning-lights",title:"계기판 경고등 숙지",phase:2,offset:{type:"recurring",rule:"상시 — 경고등 점등 시 참조"},importance:"medium"}],KT={general:{value:"3년/6만km 기본 (2018.1.1 이후 출고분은 선택형 보증제도: 2년/8만km·3년/6만km·4년/4만km 중 선택, 횟수 제한 없이 변경 가능)",source:"hyundai.com 보증안내(normal-period/rv)"},powertrain:{value:"5년/10만km (엔진·변속기/추진축·앞뒤 차축 등 동력전달장치 주요부품)",source:"hyundai.com 보증안내(normal-period/rv)"},hybrid_parts:{value:"10년/20만km 무상 보증 (고전압배터리·전기 구동모터·HPCU)",source:"hyundai.com 보증안내 및 싼타페 하이브리드 카탈로그 PDF"}},QT={engine_oil:{value:"정상 10,000km/12개월, 가혹 5,000km/6개월. SAE 0W-20, API SN PLUS/SP 또는 ILSAC GF-6, 용량 4.8L. 추천 오일 미사용 시 가혹 조건 주기로 교체.",source:"현대 오너스매뉴얼 MX5HEV 2026(통상/가혹 조건, 추천 오일 및 용량)"},brake_fluid:{value:"매 50,000km 교체. 규격 SAE J1704 DOT-4 LV, ISO4925 CLASS-6, FMVSS 116 DOT-4",source:"현대 오너스매뉴얼 MX5HEV 2026(통상 조건, 브레이크액 점검·보충)"},tire_rotation:{value:"매 10,000km마다 위치 교환(정기점검표 '매 1만' 컬럼)",source:"현대 오너스매뉴얼 MX5HEV 2026(통상 조건 정기점검표, 타이어 위치 교환)"}},$T={type:{value:"무연 휘발유(가솔린) — 옥탄가 규격 없음(고급휘발유 요구 없음). 스마트스트림 가솔린 1.6 터보 하이브리드 + 전기모터",source:"싼타페 하이브리드 카탈로그 PDF, 현대 오너스매뉴얼 MX5HEV 2026(추천 오일 및 용량)"}},GT={size:{value:"235/60 R18(하이브리드 기본, 7.5J×18), 255/45 R20(가솔린/AWD 하이브리드 옵션, 8.5J×20). 휠너트 체결토크 11-13 kgf·m. 예비타이어 없이 타이어 응급처치 키트(TMK) 제공",source:"싼타페 하이브리드 카탈로그·가격표 PDF, 현대 오너스매뉴얼 MX5HEV 2026(타이어 및 휠)"},pressure:{value:"권장 공기압 240 kPa(35 psi), 앞뒤 동일, 두 규격(235/60R18·255/45R20) 모두 동일. 고고도 주행 시 +1.5 psi/km 보충. (차량 라벨은 운전석 옆 센터필러 부착)",source:"현대 오너스매뉴얼 MX5HEV 2026(타이어 및 휠, 타이어 공기압)"}},qT=["하이브리드 전용(배터리 시스템) 냉각수의 정기 교환 주기 — 부족 시 경고 메시지는 존재하나 매뉴얼 원문(추천 오일 및 용량 표, 냉각수 점검 페이지)에 별도 교환주기 미명시. 블루핸즈/하이테크센터 문의 사항"],Ft={warranty:KT,maintenance:QT,fuel:$T,tire:GT,unverified:qT},yc=[{n:0,label:"출고 전후",range:"D-7 ~ D+7"},{n:1,label:"첫 한 달 — 몸에 익히기",range:"D+0 ~ D+30"},{n:2,label:"상시 관리",range:"습관화"},{n:3,label:"상황 대응",range:"필요 시 즉시"},{n:4,label:"싼타페 공부하기",range:"천천히 · 알아가기"}],_c=e=>Tc.filter(t=>t.phase===e),om=e=>_c(e).sort((t,n)=>(t.order??999)-(n.order??999)),cm=e=>Tc.find(t=>t.id===e),hd={0:"차를 받기 전엔 보험, 받는 날엔 등록·검수, 받은 뒤엔 세금·보증·리콜을 챙기는 순서예요. 아래를 위에서부터 하나씩 따라가면 됩니다.",1:"첫 한 달은 차에 익숙해지는 기간이에요. 살살 길들이기부터 시작해 기능·주유·운전·주차를 차례로 익히세요.",2:"상시 관리는 습관이 핵심이에요. 월 1회 셀프 점검을 기본으로, 소모품 주기·경고등·세차·계절 관리를 챙기면 됩니다.",4:"급하지 않게 천천히 내 차를 알아가는 코너예요. 용품 용어부터 기본 버튼·주행보조·전용 꿀팁까지, 위에서부터 하나씩 눌러보며 익히면 됩니다."},fm=[{key:"pre",label:"출고 전",desc:"차를 받기 전에 준비할 것 — 보험이 가장 급해요."},{key:"day",label:"출고 당일",desc:"차를 받는 날 현장에서 — 등록과 꼼꼼한 검수."},{key:"post",label:"출고 직후",desc:"받은 뒤 며칠 안에 — 세금·보증·리콜 확인."}],dm=864e5,Ir=e=>{const t=new Date(e);return t.setHours(0,0,0,0),t},pd=(e,t)=>new Date(e.getTime()+t*dm),md=(e,t)=>Math.round((Ir(t)-Ir(e))/dm),zs=e=>`${e.getFullYear()}.${String(e.getMonth()+1).padStart(2,"0")}.${String(e.getDate()).padStart(2,"0")}`;function JT(e,t){const n=/매년\s*(\d{1,2})월/.exec(e);if(!n)return{nextLabel:null};const r=Number(n[1]);let i=t.getFullYear();return t.getMonth()+1>r&&(i+=1),{nextLabel:`다음 ${i}년 ${r}월`}}function ZT(e){return e.type==="day"?e.value===0?"출고 당일":e.value<0?`출고 D${e.value}`:`출고 D+${e.value}`:e.type==="range"?`출고 D+${e.from} ~ D+${e.to}`:""}function ey(e){return e===0?"오늘":e>0?`D-${e}`:`${-e}일 지남`}function ty(e,t,n,r=new Date){const i=Object.fromEntries(t.map(s=>[s.id,s])),u=n?Ir(new Date(n+"T00:00:00")):null,a=Ir(r);return e.map(s=>{const l=i[s.guide_id]??null,c=s.offset,d={...s,guide:l};if(c.type==="on-demand")return{...d,track:"situation",status:"ondemand",sortKey:1e9,dateLabel:null};if(c.type==="recurring")return{...d,track:"timeline",status:"recurring",sortKey:5e8,dateLabel:c.rule,...JT(c.rule,a)};const f=c.type==="range",h=f?c.from:c.value;if(!u)return{...d,track:"timeline",status:"planned",sortKey:h,dateLabel:null,offsetLabel:ZT(c)};const p=pd(u,f?c.from:c.value),T=f?pd(u,c.to):p,C=md(a,p),N=md(a,T);let m;return f?m=a<Ir(p)?"upcoming":a>Ir(T)?"past":"now":m=Math.abs(C)<=3?"now":C<0?"past":"upcoming",{...d,track:"timeline",status:m,sortKey:h,daysFromNow:C,dateLabel:f?`${zs(p)} ~ ${zs(T)}`:zs(p),relLabel:f?N<0?"지남":C>0?`D-${C} 시작`:"진행 중":ey(C)}})}const hm="carnewbee",eo=1,iu=()=>({version:eo,registrationDate:null,checklist:{},updatedAt:null});function ny(e){return!e||typeof e!="object"?iu():e.version!==eo?{...iu(),...e,version:eo}:e}function ry(){try{const e=localStorage.getItem(hm);return e?ny(JSON.parse(e)):iu()}catch{return iu()}}function iy(e){try{localStorage.setItem(hm,JSON.stringify({...e,updatedAt:new Date().toISOString()}))}catch(t){console.warn("[car-newbee] localStorage 저장 실패 — 이번 세션에만 유지됩니다.",t)}}const pm=z.createContext(null);function uy({children:e}){const[t,n]=z.useState(ry);z.useEffect(()=>{iy(t)},[t]);const r=z.useMemo(()=>{const i=c=>n(d=>({...d,registrationDate:c||null})),u=(c,d)=>{var f,h;return!!((h=(f=t.checklist)==null?void 0:f[c])!=null&&h[d])},a=(c,d)=>n(f=>{const h={...f.checklist[c]??{}};return h[d]?delete h[d]:h[d]=!0,{...f,checklist:{...f.checklist,[c]:h}}}),s=(c,d)=>{var h;const f=Math.min(Object.keys(((h=t.checklist)==null?void 0:h[c])??{}).length,d);return{done:f,total:d,ratio:d?f/d:0}},l=()=>n(iu());return{registrationDate:t.registrationDate,checklist:t.checklist,setRegistrationDate:i,isChecked:u,toggleChecklistItem:a,guideProgress:s,resetAll:l}},[t]);return A.jsx(pm.Provider,{value:r,children:e})}function es(){const e=z.useContext(pm);if(!e)throw new Error("useUserState must be used within UserStateProvider");return e}function ay(e,t){let n=0,r=0;for(const i of _c(e)){const u=i.checklist.length;r+=u,n+=Math.min(Object.keys(t[i.id]??{}).length,u)}return{done:n,total:r}}function sy(){const{registrationDate:e,checklist:t}=es(),r=z.useMemo(()=>ty(lm,Tc,e,new Date),[e]).filter(a=>a.track==="timeline"&&a.status==="now").sort((a,s)=>(a.daysFromNow??0)-(s.daysFromNow??0)||a.sortKey-s.sortKey),i=z.useMemo(()=>{if(!e)return null;const a=new Date;a.setHours(0,0,0,0);const s=new Date(e+"T00:00:00");return Math.round((s-a)/864e5)},[e]),u=i===null?null:i===0?"오늘 출고":i>0?`출고 D-${i}`:`출고 ${-i}일째`;return A.jsxs("div",{className:"container home",children:[e?A.jsxs(Ce,{to:"/setup",className:"status-card",children:[A.jsx("div",{className:"status-card__label",children:"내 차 · 싼타페 MX5 HEV"}),A.jsxs("div",{className:"status-card__dday",children:[A.jsx("b",{children:u}),A.jsx("span",{className:"status-card__date",children:e.replace(/-/g,".")})]}),A.jsx("div",{className:"status-card__sub",children:r.length>0?`지금 할 일 ${r.length}건이 있어요`:"예정된 할 일을 확인해 보세요"})]}):A.jsxs(Ce,{to:"/setup",className:"status-card status-card--cta",children:[A.jsx("div",{className:"status-card__label",children:"시작하기"}),A.jsx("div",{className:"status-card__cta-title",children:"출고일을 등록해 주세요"}),A.jsx("div",{className:"status-card__cta-hint",children:"등록하면 단계별 할 일을 날짜순으로 안내해요 →"})]}),r.length>0&&A.jsxs("section",{className:"section",children:[A.jsx("h2",{className:"section__title",children:"지금 할 일"}),A.jsx("div",{className:"today-list",children:r.map((a,s)=>A.jsxs(Ce,{to:`/guide/${a.guide_id}`,className:"today-item",children:[A.jsx("span",{className:"today-item__num",children:s+1}),A.jsxs("span",{className:"today-item__text",children:[A.jsx("span",{className:"today-item__title",children:a.title}),A.jsxs("span",{className:"today-item__date",children:[a.dateLabel," · ",a.relLabel]})]}),A.jsx("span",{className:"today-item__arrow",children:"›"})]},a.id))})]}),A.jsxs("section",{className:"section",children:[A.jsx("h2",{className:"section__title",children:"단계별로 준비하기"}),A.jsx("div",{className:"phase-cards",children:yc.filter(a=>a.n!==3).map(a=>{const s=ay(a.n,t),l=_c(a.n).length,c=s.total?Math.round(s.done/s.total*100):0;return A.jsxs(Ce,{to:`/phase/${a.n}`,className:"phase-card",style:{"--pc":`var(--phase-${a.n})`},children:[A.jsxs("span",{className:"phase-card__badge",children:["P",a.n]}),A.jsxs("span",{className:"phase-card__body",children:[A.jsx("span",{className:"phase-card__title",children:a.label}),A.jsxs("span",{className:"phase-card__meta",children:[a.range," · 가이드 ",l,"개",s.done>0?` · ${c}%`:""]}),A.jsx("span",{className:"mini-bar",children:A.jsx("span",{className:"mini-bar__fill",style:{width:`${c}%`}})})]}),A.jsx("span",{className:"phase-card__arrow",children:"›"})]},a.n)})})]}),A.jsxs("section",{className:"section",children:[A.jsx("h2",{className:"section__title",children:"갑자기 생긴 일"}),A.jsxs(Ce,{to:"/situation",className:"sos-card",children:[A.jsx("span",{className:"sos-card__icon",children:"P3"}),A.jsxs("span",{className:"sos-card__body",children:[A.jsx("span",{className:"sos-card__title",children:"상황 대응 바로가기"}),A.jsx("span",{className:"sos-card__sub",children:"필요할 때 즉시 · 사고 · 방전 · 펑크 · 침수"})]})]})]})]})}const gd={generic:{label:"범용",cls:"badge--scope"},hybrid:{label:"하이브리드",cls:"badge--hybrid"},"mx5-hev":{label:"MX5 전용",cls:"badge--mx5"}};function Ed({g:e,no:t,done:n}){var i,u;const r=gd[e.car_scope]??gd.generic;return A.jsxs(Ce,{to:`/guide/${e.id}`,className:"guide-list-card",children:[A.jsxs("div",{className:"guide-list-card__top",children:[A.jsxs("span",{className:"guide-list-card__title",children:[A.jsx("span",{className:"guide-list-card__no",children:t}),e.title]}),A.jsx("span",{className:"phase-card__arrow",children:"›"})]}),A.jsx("p",{className:"guide-list-card__summary",children:(i=e.summary)==null?void 0:i[0]}),A.jsxs("div",{className:"guide-list-card__badges",children:[n&&A.jsx("span",{className:"badge badge--done",children:"완료 ✓"}),A.jsx("span",{className:`badge ${r.cls}`,children:r.label}),((u=e.flags)==null?void 0:u.includes("단독출처"))&&A.jsx("span",{className:"badge badge--flag",children:"참고"}),e.valid_year&&A.jsxs("span",{className:"badge badge--year",children:[e.valid_year," 기준"]})]})]})}function ly(){const{n:e}=rm(),t=Number(e),n=yc.find(a=>a.n===t),{guideProgress:r}=es();if(!n||t===3)return A.jsx(PT,{to:t===3?"/situation":"/",replace:!0});const i=om(t),u=a=>{const s=r(a.id,a.checklist.length);return s.total>0&&s.done>=s.total};return A.jsxs("div",{className:"container",children:[A.jsxs("div",{className:"crumb",children:[A.jsx(Ce,{to:"/",children:"홈"})," › P",n.n]}),A.jsxs("div",{className:"page-head",children:[A.jsx("h1",{className:"page-head__title",children:n.label}),A.jsxs("p",{className:"page-head__desc",children:[n.range," · 가이드 ",i.length,"개"]})]}),hd[t]&&A.jsx("div",{className:"overview-card",children:hd[t]}),t===0?fm.map(a=>{const s=i.filter(l=>l.stage===a.key);return s.length?A.jsxs("section",{className:"stage-group",children:[A.jsxs("div",{className:"stage-head",children:[A.jsx("h2",{className:"stage-head__label",children:a.label}),A.jsx("p",{className:"stage-head__desc",children:a.desc})]}),A.jsx("div",{className:"guide-list",children:s.map(l=>A.jsx(Ed,{g:l,no:l.order,done:u(l)},l.id))})]},a.key):null}):A.jsx("div",{className:"guide-list",style:{marginTop:18},children:i.map(a=>A.jsx(Ed,{g:a,no:a.order,done:u(a)},a.id))}),A.jsx(Ce,{to:"/",className:"back-link",children:"← 홈으로"})]})}function Td(e){const t=[],n=String(e||"");let r=n.indexOf(","),i=0,u=!1;for(;!u;){r===-1&&(r=n.length,u=!0);const a=n.slice(i,r).trim();(a||!u)&&t.push(a),i=r+1,r=n.indexOf(",",i)}return t}function mm(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const oy=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,cy=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,fy={};function yd(e,t){return(fy.jsx?cy:oy).test(e)}const dy=/[ \t\n\f\r]/g;function hy(e){return typeof e=="object"?e.type==="text"?_d(e.value):!1:_d(e)}function _d(e){return e.replace(dy,"")===""}class pu{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}pu.prototype.normal={};pu.prototype.property={};pu.prototype.space=void 0;function gm(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new pu(n,r,t)}function uu(e){return e.toLowerCase()}class ut{constructor(t,n){this.attribute=n,this.property=t}}ut.prototype.attribute="";ut.prototype.booleanish=!1;ut.prototype.boolean=!1;ut.prototype.commaOrSpaceSeparated=!1;ut.prototype.commaSeparated=!1;ut.prototype.defined=!1;ut.prototype.mustUseProperty=!1;ut.prototype.number=!1;ut.prototype.overloadedBoolean=!1;ut.prototype.property="";ut.prototype.spaceSeparated=!1;ut.prototype.space=void 0;let py=0;const $=ar(),Ie=ar(),to=ar(),B=ar(),oe=ar(),$n=ar(),st=ar();function ar(){return 2**++py}const no=Object.freeze(Object.defineProperty({__proto__:null,boolean:$,booleanish:Ie,commaOrSpaceSeparated:st,commaSeparated:$n,number:B,overloadedBoolean:to,spaceSeparated:oe},Symbol.toStringTag,{value:"Module"})),js=Object.keys(no);class bc extends ut{constructor(t,n,r,i){let u=-1;if(super(t,n),bd(this,"space",i),typeof r=="number")for(;++u<js.length;){const a=js[u];bd(this,js[u],(r&no[a])===no[a])}}}bc.prototype.defined=!0;function bd(e,t,n){n&&(e[t]=n)}function qr(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const u=new bc(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(u.mustUseProperty=!0),t[r]=u,n[uu(r)]=r,n[uu(u.attribute)]=r}return new pu(t,n,e.space)}const Em=qr({properties:{ariaActiveDescendant:null,ariaAtomic:Ie,ariaAutoComplete:null,ariaBusy:Ie,ariaChecked:Ie,ariaColCount:B,ariaColIndex:B,ariaColSpan:B,ariaControls:oe,ariaCurrent:null,ariaDescribedBy:oe,ariaDetails:null,ariaDisabled:Ie,ariaDropEffect:oe,ariaErrorMessage:null,ariaExpanded:Ie,ariaFlowTo:oe,ariaGrabbed:Ie,ariaHasPopup:null,ariaHidden:Ie,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:oe,ariaLevel:B,ariaLive:null,ariaModal:Ie,ariaMultiLine:Ie,ariaMultiSelectable:Ie,ariaOrientation:null,ariaOwns:oe,ariaPlaceholder:null,ariaPosInSet:B,ariaPressed:Ie,ariaReadOnly:Ie,ariaRelevant:null,ariaRequired:Ie,ariaRoleDescription:oe,ariaRowCount:B,ariaRowIndex:B,ariaRowSpan:B,ariaSelected:Ie,ariaSetSize:B,ariaSort:null,ariaValueMax:B,ariaValueMin:B,ariaValueNow:B,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Tm(e,t){return t in e?e[t]:t}function ym(e,t){return Tm(e,t.toLowerCase())}const my=qr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:$n,acceptCharset:oe,accessKey:oe,action:null,allow:null,allowFullScreen:$,allowPaymentRequest:$,allowUserMedia:$,alpha:$,alt:null,as:null,async:$,autoCapitalize:null,autoComplete:oe,autoFocus:$,autoPlay:$,blocking:oe,capture:null,charSet:null,checked:$,cite:null,className:oe,closedBy:null,colorSpace:null,cols:B,colSpan:B,command:null,commandFor:null,content:null,contentEditable:Ie,controls:$,controlsList:oe,coords:B|$n,crossOrigin:null,data:null,dateTime:null,decoding:null,default:$,defer:$,dir:null,dirName:null,disabled:$,download:to,draggable:Ie,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:$,formTarget:null,headers:oe,height:B,hidden:to,high:B,href:null,hrefLang:null,htmlFor:oe,httpEquiv:oe,id:null,imageSizes:null,imageSrcSet:null,inert:$,inputMode:null,integrity:null,is:null,isMap:$,itemId:null,itemProp:oe,itemRef:oe,itemScope:$,itemType:oe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:$,low:B,manifest:null,max:null,maxLength:B,media:null,method:null,min:null,minLength:B,multiple:$,muted:$,name:null,nonce:null,noModule:$,noValidate:$,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:$,optimum:B,pattern:null,ping:oe,placeholder:null,playsInline:$,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:$,referrerPolicy:null,rel:oe,required:$,reversed:$,rows:B,rowSpan:B,sandbox:oe,scope:null,scoped:$,seamless:$,selected:$,shadowRootClonable:$,shadowRootCustomElementRegistry:$,shadowRootDelegatesFocus:$,shadowRootMode:null,shadowRootSerializable:$,shape:null,size:B,sizes:null,slot:null,span:B,spellCheck:Ie,src:null,srcDoc:null,srcLang:null,srcSet:null,start:B,step:null,style:null,tabIndex:B,target:null,title:null,translate:null,type:null,typeMustMatch:$,useMap:null,value:Ie,width:B,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:oe,axis:null,background:null,bgColor:null,border:B,borderColor:null,bottomMargin:B,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:$,declare:$,event:null,face:null,frame:null,frameBorder:null,hSpace:B,leftMargin:B,link:null,longDesc:null,lowSrc:null,marginHeight:B,marginWidth:B,noResize:$,noHref:$,noShade:$,noWrap:$,object:null,profile:null,prompt:null,rev:null,rightMargin:B,rules:null,scheme:null,scrolling:Ie,standby:null,summary:null,text:null,topMargin:B,valueType:null,version:null,vAlign:null,vLink:null,vSpace:B,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:$,disablePictureInPicture:$,disableRemotePlayback:$,exportParts:$n,part:oe,prefix:null,property:null,results:B,security:null,unselectable:null},space:"html",transform:ym}),gy=qr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:st,accentHeight:B,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:B,amplitude:B,arabicForm:null,ascent:B,attributeName:null,attributeType:null,azimuth:B,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:B,by:null,calcMode:null,capHeight:B,className:oe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:B,diffuseConstant:B,direction:null,display:null,dur:null,divisor:B,dominantBaseline:null,download:$,dx:null,dy:null,edgeMode:null,editable:null,elevation:B,enableBackground:null,end:null,event:null,exponent:B,externalResourcesRequired:null,fill:null,fillOpacity:B,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:$n,g2:$n,glyphName:$n,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:B,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:B,horizOriginX:B,horizOriginY:B,id:null,ideographic:B,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:B,k:B,k1:B,k2:B,k3:B,k4:B,kernelMatrix:st,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:B,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:B,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:B,overlineThickness:B,paintOrder:null,panose1:null,path:null,pathLength:B,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:oe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:B,pointsAtY:B,pointsAtZ:B,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:st,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:st,rev:st,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:st,requiredFeatures:st,requiredFonts:st,requiredFormats:st,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:B,specularExponent:B,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:B,strikethroughThickness:B,string:null,stroke:null,strokeDashArray:st,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:B,strokeOpacity:B,strokeWidth:null,style:null,surfaceScale:B,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:st,tabIndex:B,tableValues:null,target:null,targetX:B,targetY:B,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:st,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:B,underlineThickness:B,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:B,values:null,vAlphabetic:B,vMathematical:B,vectorEffect:null,vHanging:B,vIdeographic:B,version:null,vertAdvY:B,vertOriginX:B,vertOriginY:B,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:B,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Tm}),_m=qr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),bm=qr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ym}),km=qr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Ey={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Ty=/[A-Z]/g,kd=/-[a-z]/g,yy=/^data[-\w.:]+$/i;function ts(e,t){const n=uu(t);let r=t,i=ut;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&yy.test(t)){if(t.charAt(4)==="-"){const u=t.slice(5).replace(kd,by);r="data"+u.charAt(0).toUpperCase()+u.slice(1)}else{const u=t.slice(4);if(!kd.test(u)){let a=u.replace(Ty,_y);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=bc}return new i(r,t)}function _y(e){return"-"+e.toLowerCase()}function by(e){return e.charAt(1).toUpperCase()}const mu=gm([Em,my,_m,bm,km],"html"),Dn=gm([Em,gy,_m,bm,km],"svg");function Cd(e){const t=String(e||"").trim();return t?t.split(/[ \t\n\r\f]+/g):[]}function Cm(e){return e.join(" ").trim()}var kc={},Ad=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,ky=/\n/g,Cy=/^\s*/,Ay=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Sy=/^:\s*/,Ny=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,xy=/^[;\s]*/,Iy=/^\s+|\s+$/g,vy=`
`,Sd="/",Nd="*",jn="",wy="comment",Ry="declaration";function Oy(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(T){var C=T.match(ky);C&&(n+=C.length);var N=T.lastIndexOf(vy);r=~N?T.length-N:r+T.length}function u(){var T={line:n,column:r};return function(C){return C.position=new a(T),c(),C}}function a(T){this.start=T,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function s(T){var C=new Error(t.source+":"+n+":"+r+": "+T);if(C.reason=T,C.filename=t.source,C.line=n,C.column=r,C.source=e,!t.silent)throw C}function l(T){var C=T.exec(e);if(C){var N=C[0];return i(N),e=e.slice(N.length),C}}function c(){l(Cy)}function d(T){var C;for(T=T||[];C=f();)C!==!1&&T.push(C);return T}function f(){var T=u();if(!(Sd!=e.charAt(0)||Nd!=e.charAt(1))){for(var C=2;jn!=e.charAt(C)&&(Nd!=e.charAt(C)||Sd!=e.charAt(C+1));)++C;if(C+=2,jn===e.charAt(C-1))return s("End of comment missing");var N=e.slice(2,C-2);return r+=2,i(N),e=e.slice(C),r+=2,T({type:wy,comment:N})}}function h(){var T=u(),C=l(Ay);if(C){if(f(),!l(Sy))return s("property missing ':'");var N=l(Ny),m=T({type:Ry,property:xd(C[0].replace(Ad,jn)),value:N?xd(N[0].replace(Ad,jn)):jn});return l(xy),m}}function p(){var T=[];d(T);for(var C;C=h();)C!==!1&&(T.push(C),d(T));return T}return c(),p()}function xd(e){return e?e.replace(Iy,jn):jn}var Py=Oy,Ly=ua&&ua.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(kc,"__esModule",{value:!0});kc.default=My;const Dy=Ly(Py);function My(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,Dy.default)(e),i=typeof t=="function";return r.forEach(u=>{if(u.type!=="declaration")return;const{property:a,value:s}=u;i?t(a,s,u):s&&(n=n||{},n[a]=s)}),n}var ns={};Object.defineProperty(ns,"__esModule",{value:!0});ns.camelCase=void 0;var By=/^--[a-zA-Z0-9_-]+$/,Fy=/-([a-z])/g,Hy=/^[^-]+$/,Uy=/^-(webkit|moz|ms|o|khtml)-/,zy=/^-(ms)-/,jy=function(e){return!e||Hy.test(e)||By.test(e)},Vy=function(e,t){return t.toUpperCase()},Id=function(e,t){return"".concat(t,"-")},Wy=function(e,t){return t===void 0&&(t={}),jy(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(zy,Id):e=e.replace(Uy,Id),e.replace(Fy,Vy))};ns.camelCase=Wy;var Yy=ua&&ua.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Xy=Yy(kc),Ky=ns;function ro(e,t){var n={};return!e||typeof e!="string"||(0,Xy.default)(e,function(r,i){r&&i&&(n[(0,Ky.camelCase)(r,t)]=i)}),n}ro.default=ro;var Qy=ro;const $y=To(Qy),rs=Am("end"),Vt=Am("start");function Am(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Gy(e){const t=Vt(e),n=rs(e);if(t&&n)return{start:t,end:n}}function Ri(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?vd(e.position):"start"in e||"end"in e?vd(e):"line"in e||"column"in e?io(e):""}function io(e){return wd(e&&e.line)+":"+wd(e&&e.column)}function vd(e){return io(e&&e.start)+"-"+io(e&&e.end)}function wd(e){return e&&typeof e=="number"?e:1}class Ye extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",u={},a=!1;if(n&&("line"in n&&"column"in n?u={place:n}:"start"in n&&"end"in n?u={place:n}:"type"in n?u={ancestors:[n],place:n.position}:u={...n}),typeof t=="string"?i=t:!u.cause&&t&&(a=!0,i=t.message,u.cause=t),!u.ruleId&&!u.source&&typeof r=="string"){const l=r.indexOf(":");l===-1?u.ruleId=r:(u.source=r.slice(0,l),u.ruleId=r.slice(l+1))}if(!u.place&&u.ancestors&&u.ancestors){const l=u.ancestors[u.ancestors.length-1];l&&(u.place=l.position)}const s=u.place&&"start"in u.place?u.place.start:u.place;this.ancestors=u.ancestors||void 0,this.cause=u.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=s?s.line:void 0,this.name=Ri(u.place)||"1:1",this.place=u.place||void 0,this.reason=this.message,this.ruleId=u.ruleId||void 0,this.source=u.source||void 0,this.stack=a&&u.cause&&typeof u.cause.stack=="string"?u.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Ye.prototype.file="";Ye.prototype.name="";Ye.prototype.reason="";Ye.prototype.message="";Ye.prototype.stack="";Ye.prototype.column=void 0;Ye.prototype.line=void 0;Ye.prototype.ancestors=void 0;Ye.prototype.cause=void 0;Ye.prototype.fatal=void 0;Ye.prototype.place=void 0;Ye.prototype.ruleId=void 0;Ye.prototype.source=void 0;const Cc={}.hasOwnProperty,qy=new Map,Jy=/[A-Z]/g,Zy=new Set(["table","tbody","thead","tfoot","tr"]),e3=new Set(["td","th"]),Sm="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function t3(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=o3(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=l3(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Dn:mu,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},u=Nm(i,e,void 0);return u&&typeof u!="string"?u:i.create(e,i.Fragment,{children:u||void 0},void 0)}function Nm(e,t,n){if(t.type==="element")return n3(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return r3(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return u3(e,t,n);if(t.type==="mdxjsEsm")return i3(e,t);if(t.type==="root")return a3(e,t,n);if(t.type==="text")return s3(e,t)}function n3(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Dn,e.schema=i),e.ancestors.push(t);const u=Im(e,t.tagName,!1),a=c3(e,t);let s=Sc(e,t);return Zy.has(t.tagName)&&(s=s.filter(function(l){return typeof l=="string"?!hy(l):!0})),xm(e,a,u,t),Ac(a,s),e.ancestors.pop(),e.schema=r,e.create(t,u,a,n)}function r3(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}au(e,t.position)}function i3(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);au(e,t.position)}function u3(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Dn,e.schema=i),e.ancestors.push(t);const u=t.name===null?e.Fragment:Im(e,t.name,!0),a=f3(e,t),s=Sc(e,t);return xm(e,a,u,t),Ac(a,s),e.ancestors.pop(),e.schema=r,e.create(t,u,a,n)}function a3(e,t,n){const r={};return Ac(r,Sc(e,t)),e.create(t,e.Fragment,r,n)}function s3(e,t){return t.value}function xm(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Ac(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function l3(e,t,n){return r;function r(i,u,a,s){const c=Array.isArray(a.children)?n:t;return s?c(u,a,s):c(u,a)}}function o3(e,t){return n;function n(r,i,u,a){const s=Array.isArray(u.children),l=Vt(r);return t(i,u,a,s,{columnNumber:l?l.column-1:void 0,fileName:e,lineNumber:l?l.line:void 0},void 0)}}function c3(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Cc.call(t.properties,i)){const u=d3(e,i,t.properties[i]);if(u){const[a,s]=u;e.tableCellAlignToStyle&&a==="align"&&typeof s=="string"&&e3.has(t.tagName)?r=s:n[a]=s}}if(r){const u=n.style||(n.style={});u[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function f3(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const u=r.data.estree.body[0];u.type;const a=u.expression;a.type;const s=a.properties[0];s.type,Object.assign(n,e.evaluater.evaluateExpression(s.argument))}else au(e,t.position);else{const i=r.name;let u;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const s=r.value.data.estree.body[0];s.type,u=e.evaluater.evaluateExpression(s.expression)}else au(e,t.position);else u=r.value===null?!0:r.value;n[i]=u}return n}function Sc(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:qy;for(;++r<t.children.length;){const u=t.children[r];let a;if(e.passKeys){const l=u.type==="element"?u.tagName:u.type==="mdxJsxFlowElement"||u.type==="mdxJsxTextElement"?u.name:void 0;if(l){const c=i.get(l)||0;a=l+"-"+c,i.set(l,c+1)}}const s=Nm(e,u,a);s!==void 0&&n.push(s)}return n}function d3(e,t,n){const r=ts(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?mm(n):Cm(n)),r.property==="style"){let i=typeof n=="object"?n:h3(e,String(n));return e.stylePropertyNameCase==="css"&&(i=p3(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Ey[r.property]||r.property:r.attribute,n]}}function h3(e,t){try{return $y(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new Ye("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Sm+"#cannot-parse-style-attribute",i}}function Im(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let u=-1,a;for(;++u<i.length;){const s=yd(i[u])?{type:"Identifier",name:i[u]}:{type:"Literal",value:i[u]};a=a?{type:"MemberExpression",object:a,property:s,computed:!!(u&&s.type==="Literal"),optional:!1}:s}r=a}else r=yd(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Cc.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);au(e)}function au(e,t){const n=new Ye("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Sm+"#cannot-handle-mdx-estrees-without-createevaluater",n}function p3(e){const t={};let n;for(n in e)Cc.call(e,n)&&(t[m3(n)]=e[n]);return t}function m3(e){let t=e.replace(Jy,g3);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function g3(e){return"-"+e.toLowerCase()}const Vs={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},E3={};function Nc(e,t){const n=E3,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return vm(e,r,i)}function vm(e,t,n){if(T3(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Rd(e.children,t,n)}return Array.isArray(e)?Rd(e,t,n):""}function Rd(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=vm(e[i],t,n);return r.join("")}function T3(e){return!!(e&&typeof e=="object")}const Od=document.createElement("i");function xc(e){const t="&"+e+";";Od.innerHTML=t;const n=Od.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function ft(e,t,n,r){const i=e.length;let u=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);u<r.length;)a=r.slice(u,u+1e4),a.unshift(t,0),e.splice(...a),u+=1e4,t+=1e4}function Et(e,t){return e.length>0?(ft(e,e.length,0,t),e):t}const Pd={}.hasOwnProperty;function wm(e){const t={};let n=-1;for(;++n<e.length;)y3(t,e[n]);return t}function y3(e,t){let n;for(n in t){const i=(Pd.call(e,n)?e[n]:void 0)||(e[n]={}),u=t[n];let a;if(u)for(a in u){Pd.call(i,a)||(i[a]=[]);const s=u[a];_3(i[a],Array.isArray(s)?s:s?[s]:[])}}}function _3(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);ft(e,0,0,r)}function Rm(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Rt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Qe=Mn(/[A-Za-z]/),Ve=Mn(/[\dA-Za-z]/),b3=Mn(/[#-'*+\--9=?A-Z^-~]/);function Ra(e){return e!==null&&(e<32||e===127)}const uo=Mn(/\d/),k3=Mn(/[\dA-Fa-f]/),C3=Mn(/[!-/:-@[-`{-~]/);function X(e){return e!==null&&e<-2}function ce(e){return e!==null&&(e<0||e===32)}function J(e){return e===-2||e===-1||e===32}const is=Mn(new RegExp("\\p{P}|\\p{S}","u")),nr=Mn(/\s/);function Mn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Jr(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const u=e.charCodeAt(n);let a="";if(u===37&&Ve(e.charCodeAt(n+1))&&Ve(e.charCodeAt(n+2)))i=2;else if(u<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(u))||(a=String.fromCharCode(u));else if(u>55295&&u<57344){const s=e.charCodeAt(n+1);u<56320&&s>56319&&s<57344?(a=String.fromCharCode(u,s),i=1):a="�"}else a=String.fromCharCode(u);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function ne(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let u=0;return a;function a(l){return J(l)?(e.enter(n),s(l)):t(l)}function s(l){return J(l)&&u++<i?(e.consume(l),s):(e.exit(n),t(l))}}const A3={tokenize:S3};function S3(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),ne(e,t,"linePrefix")}function i(s){return e.enter("paragraph"),u(s)}function u(s){const l=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,a(s)}function a(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return X(s)?(e.consume(s),e.exit("chunkText"),u):(e.consume(s),a)}}const N3={tokenize:x3},Ld={tokenize:I3};function x3(e){const t=this,n=[];let r=0,i,u,a;return s;function s(y){if(r<n.length){const w=n[r];return t.containerState=w[1],e.attempt(w[0].continuation,l,c)(y)}return c(y)}function l(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&E();const w=t.events.length;let P=w,x;for(;P--;)if(t.events[P][0]==="exit"&&t.events[P][1].type==="chunkFlow"){x=t.events[P][1].end;break}m(r);let F=w;for(;F<t.events.length;)t.events[F][1].end={...x},F++;return ft(t.events,P+1,0,t.events.slice(w)),t.events.length=F,c(y)}return s(y)}function c(y){if(r===n.length){if(!i)return h(y);if(i.currentConstruct&&i.currentConstruct.concrete)return T(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Ld,d,f)(y)}function d(y){return i&&E(),m(r),h(y)}function f(y){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,T(y)}function h(y){return t.containerState={},e.attempt(Ld,p,T)(y)}function p(y){return r++,n.push([t.currentConstruct,t.containerState]),h(y)}function T(y){if(y===null){i&&E(),m(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:u}),C(y)}function C(y){if(y===null){N(e.exit("chunkFlow"),!0),m(0),e.consume(y);return}return X(y)?(e.consume(y),N(e.exit("chunkFlow")),r=0,t.interrupt=void 0,s):(e.consume(y),C)}function N(y,w){const P=t.sliceStream(y);if(w&&P.push(null),y.previous=u,u&&(u.next=y),u=y,i.defineSkip(y.start),i.write(P),t.parser.lazy[y.start.line]){let x=i.events.length;for(;x--;)if(i.events[x][1].start.offset<a&&(!i.events[x][1].end||i.events[x][1].end.offset>a))return;const F=t.events.length;let H=F,K,I;for(;H--;)if(t.events[H][0]==="exit"&&t.events[H][1].type==="chunkFlow"){if(K){I=t.events[H][1].end;break}K=!0}for(m(r),x=F;x<t.events.length;)t.events[x][1].end={...I},x++;ft(t.events,H+1,0,t.events.slice(F)),t.events.length=x}}function m(y){let w=n.length;for(;w-- >y;){const P=n[w];t.containerState=P[1],P[0].exit.call(t,e)}n.length=y}function E(){i.write([null]),u=void 0,i=void 0,t.containerState._closeFlow=void 0}}function I3(e,t,n){return ne(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Vr(e){if(e===null||ce(e)||nr(e))return 1;if(is(e))return 2}function us(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const u=e[i].resolveAll;u&&!r.includes(u)&&(t=u(t,n),r.push(u))}return t}const ao={name:"attention",resolveAll:v3,tokenize:w3};function v3(e,t){let n=-1,r,i,u,a,s,l,c,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;l=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const f={...e[r][1].end},h={...e[n][1].start};Dd(f,-l),Dd(h,l),a={type:l>1?"strongSequence":"emphasisSequence",start:f,end:{...e[r][1].end}},s={type:l>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:h},u={type:l>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:l>1?"strong":"emphasis",start:{...a.start},end:{...s.end}},e[r][1].end={...a.start},e[n][1].start={...s.end},c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=Et(c,[["enter",e[r][1],t],["exit",e[r][1],t]])),c=Et(c,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",u,t]]),c=Et(c,us(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),c=Et(c,[["exit",u,t],["enter",s,t],["exit",s,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,c=Et(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,ft(e,r-1,n-r+3,c),n=r+c.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function w3(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Vr(r);let u;return a;function a(l){return u=l,e.enter("attentionSequence"),s(l)}function s(l){if(l===u)return e.consume(l),s;const c=e.exit("attentionSequence"),d=Vr(l),f=!d||d===2&&i||n.includes(l),h=!i||i===2&&d||n.includes(r);return c._open=!!(u===42?f:f&&(i||!h)),c._close=!!(u===42?h:h&&(d||!f)),t(l)}}function Dd(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const R3={name:"autolink",tokenize:O3};function O3(e,t,n){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),u}function u(p){return Qe(p)?(e.consume(p),a):p===64?n(p):c(p)}function a(p){return p===43||p===45||p===46||Ve(p)?(r=1,s(p)):c(p)}function s(p){return p===58?(e.consume(p),r=0,l):(p===43||p===45||p===46||Ve(p))&&r++<32?(e.consume(p),s):(r=0,c(p))}function l(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||Ra(p)?n(p):(e.consume(p),l)}function c(p){return p===64?(e.consume(p),d):b3(p)?(e.consume(p),c):n(p)}function d(p){return Ve(p)?f(p):n(p)}function f(p){return p===46?(e.consume(p),r=0,d):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):h(p)}function h(p){if((p===45||Ve(p))&&r++<63){const T=p===45?h:f;return e.consume(p),T}return n(p)}}const gu={partial:!0,tokenize:P3};function P3(e,t,n){return r;function r(u){return J(u)?ne(e,i,"linePrefix")(u):i(u)}function i(u){return u===null||X(u)?t(u):n(u)}}const Om={continuation:{tokenize:D3},exit:M3,name:"blockQuote",tokenize:L3};function L3(e,t,n){const r=this;return i;function i(a){if(a===62){const s=r.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),u}return n(a)}function u(a){return J(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function D3(e,t,n){const r=this;return i;function i(a){return J(a)?ne(e,u,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):u(a)}function u(a){return e.attempt(Om,t,n)(a)}}function M3(e){e.exit("blockQuote")}const Pm={name:"characterEscape",tokenize:B3};function B3(e,t,n){return r;function r(u){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(u),e.exit("escapeMarker"),i}function i(u){return C3(u)?(e.enter("characterEscapeValue"),e.consume(u),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(u)}}const Lm={name:"characterReference",tokenize:F3};function F3(e,t,n){const r=this;let i=0,u,a;return s;function s(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),l}function l(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),u=31,a=Ve,d(f))}function c(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),u=6,a=k3,d):(e.enter("characterReferenceValue"),u=7,a=uo,d(f))}function d(f){if(f===59&&i){const h=e.exit("characterReferenceValue");return a===Ve&&!xc(r.sliceSerialize(h))?n(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(f)&&i++<u?(e.consume(f),d):n(f)}}const Md={partial:!0,tokenize:U3},Bd={concrete:!0,name:"codeFenced",tokenize:H3};function H3(e,t,n){const r=this,i={partial:!0,tokenize:P};let u=0,a=0,s;return l;function l(x){return c(x)}function c(x){const F=r.events[r.events.length-1];return u=F&&F[1].type==="linePrefix"?F[2].sliceSerialize(F[1],!0).length:0,s=x,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(x)}function d(x){return x===s?(a++,e.consume(x),d):a<3?n(x):(e.exit("codeFencedFenceSequence"),J(x)?ne(e,f,"whitespace")(x):f(x))}function f(x){return x===null||X(x)?(e.exit("codeFencedFence"),r.interrupt?t(x):e.check(Md,C,w)(x)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(x))}function h(x){return x===null||X(x)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(x)):J(x)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ne(e,p,"whitespace")(x)):x===96&&x===s?n(x):(e.consume(x),h)}function p(x){return x===null||X(x)?f(x):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),T(x))}function T(x){return x===null||X(x)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(x)):x===96&&x===s?n(x):(e.consume(x),T)}function C(x){return e.attempt(i,w,N)(x)}function N(x){return e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),m}function m(x){return u>0&&J(x)?ne(e,E,"linePrefix",u+1)(x):E(x)}function E(x){return x===null||X(x)?e.check(Md,C,w)(x):(e.enter("codeFlowValue"),y(x))}function y(x){return x===null||X(x)?(e.exit("codeFlowValue"),E(x)):(e.consume(x),y)}function w(x){return e.exit("codeFenced"),t(x)}function P(x,F,H){let K=0;return I;function I(ee){return x.enter("lineEnding"),x.consume(ee),x.exit("lineEnding"),V}function V(ee){return x.enter("codeFencedFence"),J(ee)?ne(x,Y,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(ee):Y(ee)}function Y(ee){return ee===s?(x.enter("codeFencedFenceSequence"),re(ee)):H(ee)}function re(ee){return ee===s?(K++,x.consume(ee),re):K>=a?(x.exit("codeFencedFenceSequence"),J(ee)?ne(x,fe,"whitespace")(ee):fe(ee)):H(ee)}function fe(ee){return ee===null||X(ee)?(x.exit("codeFencedFence"),F(ee)):H(ee)}}}function U3(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),u)}function u(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const Ws={name:"codeIndented",tokenize:j3},z3={partial:!0,tokenize:V3};function j3(e,t,n){const r=this;return i;function i(c){return e.enter("codeIndented"),ne(e,u,"linePrefix",5)(c)}function u(c){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(c):n(c)}function a(c){return c===null?l(c):X(c)?e.attempt(z3,a,l)(c):(e.enter("codeFlowValue"),s(c))}function s(c){return c===null||X(c)?(e.exit("codeFlowValue"),a(c)):(e.consume(c),s)}function l(c){return e.exit("codeIndented"),t(c)}}function V3(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):X(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):ne(e,u,"linePrefix",5)(a)}function u(a){const s=r.events[r.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(a):X(a)?i(a):n(a)}}const W3={name:"codeText",previous:X3,resolve:Y3,tokenize:K3};function Y3(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function X3(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function K3(e,t,n){let r=0,i,u;return a;function a(f){return e.enter("codeText"),e.enter("codeTextSequence"),s(f)}function s(f){return f===96?(e.consume(f),r++,s):(e.exit("codeTextSequence"),l(f))}function l(f){return f===null?n(f):f===32?(e.enter("space"),e.consume(f),e.exit("space"),l):f===96?(u=e.enter("codeTextSequence"),i=0,d(f)):X(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),l):(e.enter("codeTextData"),c(f))}function c(f){return f===null||f===32||f===96||X(f)?(e.exit("codeTextData"),l(f)):(e.consume(f),c)}function d(f){return f===96?(e.consume(f),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(f)):(u.type="codeTextData",c(f))}}class Q3{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const u=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&di(this.left,r),u.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),di(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),di(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);di(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);di(this.left,n.reverse())}}}function di(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Dm(e){const t={};let n=-1,r,i,u,a,s,l,c;const d=new Q3(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(l=r[1]._tokenizer.events,u=0,u<l.length&&l[u][1].type==="lineEndingBlank"&&(u+=2),u<l.length&&l[u][1].type==="content"))for(;++u<l.length&&l[u][1].type!=="content";)l[u][1].type==="chunkText"&&(l[u][1]._isInFirstContentOfListItem=!0,u++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,$3(d,n)),n=t[n],c=!0);else if(r[1]._container){for(u=n,i=void 0;u--;)if(a=d.get(u),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=u);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},s=d.slice(i,n),s.unshift(r),d.splice(i,n-i+1,s))}}return ft(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!c}function $3(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const u=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const s=a.events,l=[],c={};let d,f,h=-1,p=n,T=0,C=0;const N=[C];for(;p;){for(;e.get(++i)[1]!==p;);u.push(i),p._tokenizer||(d=r.sliceStream(p),p.next||d.push(null),f&&a.defineSkip(p.start),p._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),p._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),f=p,p=p.next}for(p=n;++h<s.length;)s[h][0]==="exit"&&s[h-1][0]==="enter"&&s[h][1].type===s[h-1][1].type&&s[h][1].start.line!==s[h][1].end.line&&(C=h+1,N.push(C),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(a.events=[],p?(p._tokenizer=void 0,p.previous=void 0):N.pop(),h=N.length;h--;){const m=s.slice(N[h],N[h+1]),E=u.pop();l.push([E,E+m.length-1]),e.splice(E,2,m)}for(l.reverse(),h=-1;++h<l.length;)c[T+l[h][0]]=T+l[h][1],T+=l[h][1]-l[h][0]-1;return c}const G3={resolve:J3,tokenize:Z3},q3={partial:!0,tokenize:e_};function J3(e){return Dm(e),e}function Z3(e,t){let n;return r;function r(s){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(s)}function i(s){return s===null?u(s):X(s)?e.check(q3,a,u)(s):(e.consume(s),i)}function u(s){return e.exit("chunkContent"),e.exit("content"),t(s)}function a(s){return e.consume(s),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function e_(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ne(e,u,"linePrefix")}function u(a){if(a===null||X(a))return n(a);const s=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Mm(e,t,n,r,i,u,a,s,l){const c=l||Number.POSITIVE_INFINITY;let d=0;return f;function f(m){return m===60?(e.enter(r),e.enter(i),e.enter(u),e.consume(m),e.exit(u),h):m===null||m===32||m===41||Ra(m)?n(m):(e.enter(r),e.enter(a),e.enter(s),e.enter("chunkString",{contentType:"string"}),C(m))}function h(m){return m===62?(e.enter(u),e.consume(m),e.exit(u),e.exit(i),e.exit(r),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===62?(e.exit("chunkString"),e.exit(s),h(m)):m===null||m===60||X(m)?n(m):(e.consume(m),m===92?T:p)}function T(m){return m===60||m===62||m===92?(e.consume(m),p):p(m)}function C(m){return!d&&(m===null||m===41||ce(m))?(e.exit("chunkString"),e.exit(s),e.exit(a),e.exit(r),t(m)):d<c&&m===40?(e.consume(m),d++,C):m===41?(e.consume(m),d--,C):m===null||m===32||m===40||Ra(m)?n(m):(e.consume(m),m===92?N:C)}function N(m){return m===40||m===41||m===92?(e.consume(m),C):C(m)}}function Bm(e,t,n,r,i,u){const a=this;let s=0,l;return c;function c(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(u),d}function d(p){return s>999||p===null||p===91||p===93&&!l||p===94&&!s&&"_hiddenFootnoteSupport"in a.parser.constructs?n(p):p===93?(e.exit(u),e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):X(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),f(p))}function f(p){return p===null||p===91||p===93||X(p)||s++>999?(e.exit("chunkString"),d(p)):(e.consume(p),l||(l=!J(p)),p===92?h:f)}function h(p){return p===91||p===92||p===93?(e.consume(p),s++,f):f(p)}}function Fm(e,t,n,r,i,u){let a;return s;function s(h){return h===34||h===39||h===40?(e.enter(r),e.enter(i),e.consume(h),e.exit(i),a=h===40?41:h,l):n(h)}function l(h){return h===a?(e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):(e.enter(u),c(h))}function c(h){return h===a?(e.exit(u),l(a)):h===null?n(h):X(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),ne(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===a||h===null||X(h)?(e.exit("chunkString"),c(h)):(e.consume(h),h===92?f:d)}function f(h){return h===a||h===92?(e.consume(h),d):d(h)}}function Oi(e,t){let n;return r;function r(i){return X(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):J(i)?ne(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const t_={name:"definition",tokenize:r_},n_={partial:!0,tokenize:i_};function r_(e,t,n){const r=this;let i;return u;function u(p){return e.enter("definition"),a(p)}function a(p){return Bm.call(r,e,s,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function s(p){return i=Rt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),l):n(p)}function l(p){return ce(p)?Oi(e,c)(p):c(p)}function c(p){return Mm(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function d(p){return e.attempt(n_,f,f)(p)}function f(p){return J(p)?ne(e,h,"whitespace")(p):h(p)}function h(p){return p===null||X(p)?(e.exit("definition"),r.parser.defined.push(i),t(p)):n(p)}}function i_(e,t,n){return r;function r(s){return ce(s)?Oi(e,i)(s):n(s)}function i(s){return Fm(e,u,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function u(s){return J(s)?ne(e,a,"whitespace")(s):a(s)}function a(s){return s===null||X(s)?t(s):n(s)}}const u_={name:"hardBreakEscape",tokenize:a_};function a_(e,t,n){return r;function r(u){return e.enter("hardBreakEscape"),e.consume(u),i}function i(u){return X(u)?(e.exit("hardBreakEscape"),t(u)):n(u)}}const s_={name:"headingAtx",resolve:l_,tokenize:o_};function l_(e,t){let n=e.length-2,r=3,i,u;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},u={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},ft(e,r,n-r+1,[["enter",i,t],["enter",u,t],["exit",u,t],["exit",i,t]])),e}function o_(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),u(d)}function u(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||ce(d)?(e.exit("atxHeadingSequence"),s(d)):n(d)}function s(d){return d===35?(e.enter("atxHeadingSequence"),l(d)):d===null||X(d)?(e.exit("atxHeading"),t(d)):J(d)?ne(e,s,"whitespace")(d):(e.enter("atxHeadingText"),c(d))}function l(d){return d===35?(e.consume(d),l):(e.exit("atxHeadingSequence"),s(d))}function c(d){return d===null||d===35||ce(d)?(e.exit("atxHeadingText"),s(d)):(e.consume(d),c)}}const c_=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Fd=["pre","script","style","textarea"],f_={concrete:!0,name:"htmlFlow",resolveTo:p_,tokenize:m_},d_={partial:!0,tokenize:E_},h_={partial:!0,tokenize:g_};function p_(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function m_(e,t,n){const r=this;let i,u,a,s,l;return c;function c(S){return d(S)}function d(S){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(S),f}function f(S){return S===33?(e.consume(S),h):S===47?(e.consume(S),u=!0,C):S===63?(e.consume(S),i=3,r.interrupt?t:b):Qe(S)?(e.consume(S),a=String.fromCharCode(S),N):n(S)}function h(S){return S===45?(e.consume(S),i=2,p):S===91?(e.consume(S),i=5,s=0,T):Qe(S)?(e.consume(S),i=4,r.interrupt?t:b):n(S)}function p(S){return S===45?(e.consume(S),r.interrupt?t:b):n(S)}function T(S){const we="CDATA[";return S===we.charCodeAt(s++)?(e.consume(S),s===we.length?r.interrupt?t:Y:T):n(S)}function C(S){return Qe(S)?(e.consume(S),a=String.fromCharCode(S),N):n(S)}function N(S){if(S===null||S===47||S===62||ce(S)){const we=S===47,Ct=a.toLowerCase();return!we&&!u&&Fd.includes(Ct)?(i=1,r.interrupt?t(S):Y(S)):c_.includes(a.toLowerCase())?(i=6,we?(e.consume(S),m):r.interrupt?t(S):Y(S)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(S):u?E(S):y(S))}return S===45||Ve(S)?(e.consume(S),a+=String.fromCharCode(S),N):n(S)}function m(S){return S===62?(e.consume(S),r.interrupt?t:Y):n(S)}function E(S){return J(S)?(e.consume(S),E):I(S)}function y(S){return S===47?(e.consume(S),I):S===58||S===95||Qe(S)?(e.consume(S),w):J(S)?(e.consume(S),y):I(S)}function w(S){return S===45||S===46||S===58||S===95||Ve(S)?(e.consume(S),w):P(S)}function P(S){return S===61?(e.consume(S),x):J(S)?(e.consume(S),P):y(S)}function x(S){return S===null||S===60||S===61||S===62||S===96?n(S):S===34||S===39?(e.consume(S),l=S,F):J(S)?(e.consume(S),x):H(S)}function F(S){return S===l?(e.consume(S),l=null,K):S===null||X(S)?n(S):(e.consume(S),F)}function H(S){return S===null||S===34||S===39||S===47||S===60||S===61||S===62||S===96||ce(S)?P(S):(e.consume(S),H)}function K(S){return S===47||S===62||J(S)?y(S):n(S)}function I(S){return S===62?(e.consume(S),V):n(S)}function V(S){return S===null||X(S)?Y(S):J(S)?(e.consume(S),V):n(S)}function Y(S){return S===45&&i===2?(e.consume(S),xe):S===60&&i===1?(e.consume(S),ke):S===62&&i===4?(e.consume(S),ie):S===63&&i===3?(e.consume(S),b):S===93&&i===5?(e.consume(S),Q):X(S)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(d_,se,re)(S)):S===null||X(S)?(e.exit("htmlFlowData"),re(S)):(e.consume(S),Y)}function re(S){return e.check(h_,fe,se)(S)}function fe(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),ee}function ee(S){return S===null||X(S)?re(S):(e.enter("htmlFlowData"),Y(S))}function xe(S){return S===45?(e.consume(S),b):Y(S)}function ke(S){return S===47?(e.consume(S),a="",j):Y(S)}function j(S){if(S===62){const we=a.toLowerCase();return Fd.includes(we)?(e.consume(S),ie):Y(S)}return Qe(S)&&a.length<8?(e.consume(S),a+=String.fromCharCode(S),j):Y(S)}function Q(S){return S===93?(e.consume(S),b):Y(S)}function b(S){return S===62?(e.consume(S),ie):S===45&&i===2?(e.consume(S),b):Y(S)}function ie(S){return S===null||X(S)?(e.exit("htmlFlowData"),se(S)):(e.consume(S),ie)}function se(S){return e.exit("htmlFlow"),t(S)}}function g_(e,t,n){const r=this;return i;function i(a){return X(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),u):n(a)}function u(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function E_(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(gu,t,n)}}const T_={name:"htmlText",tokenize:y_};function y_(e,t,n){const r=this;let i,u,a;return s;function s(b){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(b),l}function l(b){return b===33?(e.consume(b),c):b===47?(e.consume(b),P):b===63?(e.consume(b),y):Qe(b)?(e.consume(b),H):n(b)}function c(b){return b===45?(e.consume(b),d):b===91?(e.consume(b),u=0,T):Qe(b)?(e.consume(b),E):n(b)}function d(b){return b===45?(e.consume(b),p):n(b)}function f(b){return b===null?n(b):b===45?(e.consume(b),h):X(b)?(a=f,ke(b)):(e.consume(b),f)}function h(b){return b===45?(e.consume(b),p):f(b)}function p(b){return b===62?xe(b):b===45?h(b):f(b)}function T(b){const ie="CDATA[";return b===ie.charCodeAt(u++)?(e.consume(b),u===ie.length?C:T):n(b)}function C(b){return b===null?n(b):b===93?(e.consume(b),N):X(b)?(a=C,ke(b)):(e.consume(b),C)}function N(b){return b===93?(e.consume(b),m):C(b)}function m(b){return b===62?xe(b):b===93?(e.consume(b),m):C(b)}function E(b){return b===null||b===62?xe(b):X(b)?(a=E,ke(b)):(e.consume(b),E)}function y(b){return b===null?n(b):b===63?(e.consume(b),w):X(b)?(a=y,ke(b)):(e.consume(b),y)}function w(b){return b===62?xe(b):y(b)}function P(b){return Qe(b)?(e.consume(b),x):n(b)}function x(b){return b===45||Ve(b)?(e.consume(b),x):F(b)}function F(b){return X(b)?(a=F,ke(b)):J(b)?(e.consume(b),F):xe(b)}function H(b){return b===45||Ve(b)?(e.consume(b),H):b===47||b===62||ce(b)?K(b):n(b)}function K(b){return b===47?(e.consume(b),xe):b===58||b===95||Qe(b)?(e.consume(b),I):X(b)?(a=K,ke(b)):J(b)?(e.consume(b),K):xe(b)}function I(b){return b===45||b===46||b===58||b===95||Ve(b)?(e.consume(b),I):V(b)}function V(b){return b===61?(e.consume(b),Y):X(b)?(a=V,ke(b)):J(b)?(e.consume(b),V):K(b)}function Y(b){return b===null||b===60||b===61||b===62||b===96?n(b):b===34||b===39?(e.consume(b),i=b,re):X(b)?(a=Y,ke(b)):J(b)?(e.consume(b),Y):(e.consume(b),fe)}function re(b){return b===i?(e.consume(b),i=void 0,ee):b===null?n(b):X(b)?(a=re,ke(b)):(e.consume(b),re)}function fe(b){return b===null||b===34||b===39||b===60||b===61||b===96?n(b):b===47||b===62||ce(b)?K(b):(e.consume(b),fe)}function ee(b){return b===47||b===62||ce(b)?K(b):n(b)}function xe(b){return b===62?(e.consume(b),e.exit("htmlTextData"),e.exit("htmlText"),t):n(b)}function ke(b){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),j}function j(b){return J(b)?ne(e,Q,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):Q(b)}function Q(b){return e.enter("htmlTextData"),a(b)}}const Ic={name:"labelEnd",resolveAll:C_,resolveTo:A_,tokenize:S_},__={tokenize:N_},b_={tokenize:x_},k_={tokenize:I_};function C_(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&ft(e,0,e.length,n),e}function A_(e,t){let n=e.length,r=0,i,u,a,s;for(;n--;)if(i=e[n][1],u){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(u=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const l={type:e[u][1].type==="labelLink"?"link":"image",start:{...e[u][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[u][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[u+r+2][1].end},end:{...e[a-2][1].start}};return s=[["enter",l,t],["enter",c,t]],s=Et(s,e.slice(u+1,u+r+3)),s=Et(s,[["enter",d,t]]),s=Et(s,us(t.parser.constructs.insideSpan.null,e.slice(u+r+4,a-3),t)),s=Et(s,[["exit",d,t],e[a-2],e[a-1],["exit",c,t]]),s=Et(s,e.slice(a+1)),s=Et(s,[["exit",l,t]]),ft(e,u,e.length,s),e}function S_(e,t,n){const r=this;let i=r.events.length,u,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){u=r.events[i][1];break}return s;function s(h){return u?u._inactive?f(h):(a=r.parser.defined.includes(Rt(r.sliceSerialize({start:u.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),l):n(h)}function l(h){return h===40?e.attempt(__,d,a?d:f)(h):h===91?e.attempt(b_,d,a?c:f)(h):a?d(h):f(h)}function c(h){return e.attempt(k_,d,f)(h)}function d(h){return t(h)}function f(h){return u._balanced=!0,n(h)}}function N_(e,t,n){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),i}function i(f){return ce(f)?Oi(e,u)(f):u(f)}function u(f){return f===41?d(f):Mm(e,a,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function a(f){return ce(f)?Oi(e,l)(f):d(f)}function s(f){return n(f)}function l(f){return f===34||f===39||f===40?Fm(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):d(f)}function c(f){return ce(f)?Oi(e,d)(f):d(f)}function d(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),t):n(f)}}function x_(e,t,n){const r=this;return i;function i(s){return Bm.call(r,e,u,a,"reference","referenceMarker","referenceString")(s)}function u(s){return r.parser.defined.includes(Rt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(s):n(s)}function a(s){return n(s)}}function I_(e,t,n){return r;function r(u){return e.enter("reference"),e.enter("referenceMarker"),e.consume(u),e.exit("referenceMarker"),i}function i(u){return u===93?(e.enter("referenceMarker"),e.consume(u),e.exit("referenceMarker"),e.exit("reference"),t):n(u)}}const v_={name:"labelStartImage",resolveAll:Ic.resolveAll,tokenize:w_};function w_(e,t,n){const r=this;return i;function i(s){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(s),e.exit("labelImageMarker"),u}function u(s){return s===91?(e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelImage"),a):n(s)}function a(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const R_={name:"labelStartLink",resolveAll:Ic.resolveAll,tokenize:O_};function O_(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),u}function u(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const Ys={name:"lineEnding",tokenize:P_};function P_(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ne(e,t,"linePrefix")}}const ta={name:"thematicBreak",tokenize:L_};function L_(e,t,n){let r=0,i;return u;function u(c){return e.enter("thematicBreak"),a(c)}function a(c){return i=c,s(c)}function s(c){return c===i?(e.enter("thematicBreakSequence"),l(c)):r>=3&&(c===null||X(c))?(e.exit("thematicBreak"),t(c)):n(c)}function l(c){return c===i?(e.consume(c),r++,l):(e.exit("thematicBreakSequence"),J(c)?ne(e,s,"whitespace")(c):s(c))}}const Ze={continuation:{tokenize:F_},exit:U_,name:"list",tokenize:B_},D_={partial:!0,tokenize:z_},M_={partial:!0,tokenize:H_};function B_(e,t,n){const r=this,i=r.events[r.events.length-1];let u=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return s;function s(p){const T=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(T==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:uo(p)){if(r.containerState.type||(r.containerState.type=T,e.enter(T,{_container:!0})),T==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(ta,n,c)(p):c(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(p)}return n(p)}function l(p){return uo(p)&&++a<10?(e.consume(p),l):(!r.interrupt||a<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),c(p)):n(p)}function c(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(gu,r.interrupt?n:d,e.attempt(D_,h,f))}function d(p){return r.containerState.initialBlankLine=!0,u++,h(p)}function f(p){return J(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),h):n(p)}function h(p){return r.containerState.size=u+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function F_(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(gu,i,u);function i(s){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ne(e,t,"listItemIndent",r.containerState.size+1)(s)}function u(s){return r.containerState.furtherBlankLines||!J(s)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(s)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(M_,t,a)(s))}function a(s){return r.containerState._closeFlow=!0,r.interrupt=void 0,ne(e,e.attempt(Ze,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function H_(e,t,n){const r=this;return ne(e,i,"listItemIndent",r.containerState.size+1);function i(u){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(u):n(u)}}function U_(e){e.exit(this.containerState.type)}function z_(e,t,n){const r=this;return ne(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(u){const a=r.events[r.events.length-1];return!J(u)&&a&&a[1].type==="listItemPrefixWhitespace"?t(u):n(u)}}const Hd={name:"setextUnderline",resolveTo:j_,tokenize:V_};function j_(e,t){let n=e.length,r,i,u;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!u&&e[n][1].type==="definition"&&(u=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",u?(e.splice(i,0,["enter",a,t]),e.splice(u+1,0,["exit",e[r][1],t]),e[r][1].end={...e[u][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function V_(e,t,n){const r=this;let i;return u;function u(c){let d=r.events.length,f;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){f=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),i=c,a(c)):n(c)}function a(c){return e.enter("setextHeadingLineSequence"),s(c)}function s(c){return c===i?(e.consume(c),s):(e.exit("setextHeadingLineSequence"),J(c)?ne(e,l,"lineSuffix")(c):l(c))}function l(c){return c===null||X(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const W_={tokenize:Y_};function Y_(e){const t=this,n=e.attempt(gu,r,e.attempt(this.parser.constructs.flowInitial,i,ne(e,e.attempt(this.parser.constructs.flow,i,e.attempt(G3,i)),"linePrefix")));return n;function r(u){if(u===null){e.consume(u);return}return e.enter("lineEndingBlank"),e.consume(u),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(u){if(u===null){e.consume(u);return}return e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const X_={resolveAll:Um()},K_=Hm("string"),Q_=Hm("text");function Hm(e){return{resolveAll:Um(e==="text"?$_:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],u=n.attempt(i,a,s);return a;function a(d){return c(d)?u(d):s(d)}function s(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),l}function l(d){return c(d)?(n.exit("data"),u(d)):(n.consume(d),l)}function c(d){if(d===null)return!0;const f=i[d];let h=-1;if(f)for(;++h<f.length;){const p=f[h];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function Um(e){return t;function t(n,r){let i=-1,u;for(;++i<=n.length;)u===void 0?n[i]&&n[i][1].type==="data"&&(u=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==u+2&&(n[u][1].end=n[i-1][1].end,n.splice(u+2,i-u-2),i=u+2),u=void 0);return e?e(n,r):n}}function $_(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let u=i.length,a=-1,s=0,l;for(;u--;){const c=i[u];if(typeof c=="string"){for(a=c.length;c.charCodeAt(a-1)===32;)s++,a--;if(a)break;a=-1}else if(c===-2)l=!0,s++;else if(c!==-1){u++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){const c={type:n===e.length||l||s<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:u?a:r.start._bufferIndex+a,_index:r.start._index+u,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2)}n++}return e}const G_={42:Ze,43:Ze,45:Ze,48:Ze,49:Ze,50:Ze,51:Ze,52:Ze,53:Ze,54:Ze,55:Ze,56:Ze,57:Ze,62:Om},q_={91:t_},J_={[-2]:Ws,[-1]:Ws,32:Ws},Z_={35:s_,42:ta,45:[Hd,ta],60:f_,61:Hd,95:ta,96:Bd,126:Bd},eb={38:Lm,92:Pm},tb={[-5]:Ys,[-4]:Ys,[-3]:Ys,33:v_,38:Lm,42:ao,60:[R3,T_],91:R_,92:[u_,Pm],93:Ic,95:ao,96:W3},nb={null:[ao,X_]},rb={null:[42,95]},ib={null:[]},ub=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:rb,contentInitial:q_,disable:ib,document:G_,flow:Z_,flowInitial:J_,insideSpan:nb,string:eb,text:tb},Symbol.toStringTag,{value:"Module"}));function ab(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},u=[];let a=[],s=[];const l={attempt:F(P),check:F(x),consume:E,enter:y,exit:w,interrupt:F(x,{interrupt:!0})},c={code:null,containerState:{},defineSkip:C,events:[],now:T,parser:e,previous:null,sliceSerialize:h,sliceStream:p,write:f};let d=t.tokenize.call(c,l);return t.resolveAll&&u.push(t),c;function f(V){return a=Et(a,V),N(),a[a.length-1]!==null?[]:(H(t,0),c.events=us(u,c.events,c),c.events)}function h(V,Y){return lb(p(V),Y)}function p(V){return sb(a,V)}function T(){const{_bufferIndex:V,_index:Y,line:re,column:fe,offset:ee}=r;return{_bufferIndex:V,_index:Y,line:re,column:fe,offset:ee}}function C(V){i[V.line]=V.column,I()}function N(){let V;for(;r._index<a.length;){const Y=a[r._index];if(typeof Y=="string")for(V=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===V&&r._bufferIndex<Y.length;)m(Y.charCodeAt(r._bufferIndex));else m(Y)}}function m(V){d=d(V)}function E(V){X(V)?(r.line++,r.column=1,r.offset+=V===-3?2:1,I()):V!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=V}function y(V,Y){const re=Y||{};return re.type=V,re.start=T(),c.events.push(["enter",re,c]),s.push(re),re}function w(V){const Y=s.pop();return Y.end=T(),c.events.push(["exit",Y,c]),Y}function P(V,Y){H(V,Y.from)}function x(V,Y){Y.restore()}function F(V,Y){return re;function re(fe,ee,xe){let ke,j,Q,b;return Array.isArray(fe)?se(fe):"tokenize"in fe?se([fe]):ie(fe);function ie(he){return Lt;function Lt(sn){const lr=sn!==null&&he[sn],or=sn!==null&&he.null,_u=[...Array.isArray(lr)?lr:lr?[lr]:[],...Array.isArray(or)?or:or?[or]:[]];return se(_u)(sn)}}function se(he){return ke=he,j=0,he.length===0?xe:S(he[j])}function S(he){return Lt;function Lt(sn){return b=K(),Q=he,he.partial||(c.currentConstruct=he),he.name&&c.parser.constructs.disable.null.includes(he.name)?Ct():he.tokenize.call(Y?Object.assign(Object.create(c),Y):c,l,we,Ct)(sn)}}function we(he){return V(Q,b),ee}function Ct(he){return b.restore(),++j<ke.length?S(ke[j]):xe}}}function H(V,Y){V.resolveAll&&!u.includes(V)&&u.push(V),V.resolve&&ft(c.events,Y,c.events.length-Y,V.resolve(c.events.slice(Y),c)),V.resolveTo&&(c.events=V.resolveTo(c.events,c))}function K(){const V=T(),Y=c.previous,re=c.currentConstruct,fe=c.events.length,ee=Array.from(s);return{from:fe,restore:xe};function xe(){r=V,c.previous=Y,c.currentConstruct=re,c.events.length=fe,s=ee,I()}}function I(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function sb(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,u=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,u)];else{if(a=e.slice(n,i),r>-1){const s=a[0];typeof s=="string"?a[0]=s.slice(r):a.shift()}u>0&&a.push(e[i].slice(0,u))}return a}function lb(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const u=e[n];let a;if(typeof u=="string")a=u;else switch(u){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(u)}i=u===-2,r.push(a)}return r.join("")}function ob(e){const r={constructs:wm([ub,...(e||{}).extensions||[]]),content:i(A3),defined:[],document:i(N3),flow:i(W_),lazy:{},string:i(K_),text:i(Q_)};return r;function i(u){return a;function a(s){return ab(r,u,s)}}}function cb(e){for(;!Dm(e););return e}const Ud=/[\0\t\n\r]/g;function fb(){let e=1,t="",n=!0,r;return i;function i(u,a,s){const l=[];let c,d,f,h,p;for(u=t+(typeof u=="string"?u.toString():new TextDecoder(a||void 0).decode(u)),f=0,t="",n&&(u.charCodeAt(0)===65279&&f++,n=void 0);f<u.length;){if(Ud.lastIndex=f,c=Ud.exec(u),h=c&&c.index!==void 0?c.index:u.length,p=u.charCodeAt(h),!c){t=u.slice(f);break}if(p===10&&f===h&&r)l.push(-3),r=void 0;else switch(r&&(l.push(-5),r=void 0),f<h&&(l.push(u.slice(f,h)),e+=h-f),p){case 0:{l.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,l.push(-2);e++<d;)l.push(-1);break}case 10:{l.push(-4),e=1;break}default:r=!0,e=1}f=h+1}return s&&(r&&l.push(-5),t&&l.push(t),l.push(null)),l}}const db=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function hb(e){return e.replace(db,pb)}function pb(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),u=i===120||i===88;return Rm(n.slice(u?2:1),u?16:10)}return xc(n)||e}const zm={}.hasOwnProperty;function mb(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),gb(n)(cb(ob(n).document().write(fb()(e,t,!0))))}function gb(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:u(Xc),autolinkProtocol:K,autolinkEmail:K,atxHeading:u(Vc),blockQuote:u(or),characterEscape:K,characterReference:K,codeFenced:u(_u),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:u(_u,a),codeText:u(sg,a),codeTextData:K,data:K,codeFlowValue:K,definition:u(lg),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:u(og),hardBreakEscape:u(Wc),hardBreakTrailing:u(Wc),htmlFlow:u(Yc,a),htmlFlowData:K,htmlText:u(Yc,a),htmlTextData:K,image:u(cg),label:a,link:u(Xc),listItem:u(fg),listItemValue:h,listOrdered:u(Kc,f),listUnordered:u(Kc),paragraph:u(dg),reference:S,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:u(Vc),strong:u(hg),thematicBreak:u(mg)},exit:{atxHeading:l(),atxHeadingSequence:P,autolink:l(),autolinkEmail:lr,autolinkProtocol:sn,blockQuote:l(),characterEscapeValue:I,characterReferenceMarkerHexadecimal:Ct,characterReferenceMarkerNumeric:Ct,characterReferenceValue:he,characterReference:Lt,codeFenced:l(N),codeFencedFence:C,codeFencedFenceInfo:p,codeFencedFenceMeta:T,codeFlowValue:I,codeIndented:l(m),codeText:l(ee),codeTextData:I,data:I,definition:l(),definitionDestinationString:w,definitionLabelString:E,definitionTitleString:y,emphasis:l(),hardBreakEscape:l(Y),hardBreakTrailing:l(Y),htmlFlow:l(re),htmlFlowData:I,htmlText:l(fe),htmlTextData:I,image:l(ke),label:Q,labelText:j,lineEnding:V,link:l(xe),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:we,resourceDestinationString:b,resourceTitleString:ie,resource:se,setextHeading:l(H),setextHeadingLineSequence:F,setextHeadingText:x,strong:l(),thematicBreak:l()}};jm(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(O){let U={type:"root",children:[]};const G={stack:[U],tokenStack:[],config:t,enter:s,exit:c,buffer:a,resume:d,data:n},te=[];let le=-1;for(;++le<O.length;)if(O[le][1].type==="listOrdered"||O[le][1].type==="listUnordered")if(O[le][0]==="enter")te.push(le);else{const At=te.pop();le=i(O,At,le)}for(le=-1;++le<O.length;){const At=t[O[le][0]];zm.call(At,O[le][1].type)&&At[O[le][1].type].call(Object.assign({sliceSerialize:O[le][2].sliceSerialize},G),O[le][1])}if(G.tokenStack.length>0){const At=G.tokenStack[G.tokenStack.length-1];(At[1]||zd).call(G,void 0,At[0])}for(U.position={start:on(O.length>0?O[0][1].start:{line:1,column:1,offset:0}),end:on(O.length>0?O[O.length-2][1].end:{line:1,column:1,offset:0})},le=-1;++le<t.transforms.length;)U=t.transforms[le](U)||U;return U}function i(O,U,G){let te=U-1,le=-1,At=!1,Bn,Yt,ni,ri;for(;++te<=G;){const at=O[te];switch(at[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{at[0]==="enter"?le++:le--,ri=void 0;break}case"lineEndingBlank":{at[0]==="enter"&&(Bn&&!ri&&!le&&!ni&&(ni=te),ri=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:ri=void 0}if(!le&&at[0]==="enter"&&at[1].type==="listItemPrefix"||le===-1&&at[0]==="exit"&&(at[1].type==="listUnordered"||at[1].type==="listOrdered")){if(Bn){let cr=te;for(Yt=void 0;cr--;){const Xt=O[cr];if(Xt[1].type==="lineEnding"||Xt[1].type==="lineEndingBlank"){if(Xt[0]==="exit")continue;Yt&&(O[Yt][1].type="lineEndingBlank",At=!0),Xt[1].type="lineEnding",Yt=cr}else if(!(Xt[1].type==="linePrefix"||Xt[1].type==="blockQuotePrefix"||Xt[1].type==="blockQuotePrefixWhitespace"||Xt[1].type==="blockQuoteMarker"||Xt[1].type==="listItemIndent"))break}ni&&(!Yt||ni<Yt)&&(Bn._spread=!0),Bn.end=Object.assign({},Yt?O[Yt][1].start:at[1].end),O.splice(Yt||te,0,["exit",Bn,at[2]]),te++,G++}if(at[1].type==="listItemPrefix"){const cr={type:"listItem",_spread:!1,start:Object.assign({},at[1].start),end:void 0};Bn=cr,O.splice(te,0,["enter",cr,at[2]]),te++,G++,ni=void 0,ri=!0}}}return O[U][1]._spread=At,G}function u(O,U){return G;function G(te){s.call(this,O(te),te),U&&U.call(this,te)}}function a(){this.stack.push({type:"fragment",children:[]})}function s(O,U,G){this.stack[this.stack.length-1].children.push(O),this.stack.push(O),this.tokenStack.push([U,G||void 0]),O.position={start:on(U.start),end:void 0}}function l(O){return U;function U(G){O&&O.call(this,G),c.call(this,G)}}function c(O,U){const G=this.stack.pop(),te=this.tokenStack.pop();if(te)te[0].type!==O.type&&(U?U.call(this,O,te[0]):(te[1]||zd).call(this,O,te[0]));else throw new Error("Cannot close `"+O.type+"` ("+Ri({start:O.start,end:O.end})+"): it’s not open");G.position.end=on(O.end)}function d(){return Nc(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function h(O){if(this.data.expectingFirstListItemValue){const U=this.stack[this.stack.length-2];U.start=Number.parseInt(this.sliceSerialize(O),10),this.data.expectingFirstListItemValue=void 0}}function p(){const O=this.resume(),U=this.stack[this.stack.length-1];U.lang=O}function T(){const O=this.resume(),U=this.stack[this.stack.length-1];U.meta=O}function C(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function N(){const O=this.resume(),U=this.stack[this.stack.length-1];U.value=O.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const O=this.resume(),U=this.stack[this.stack.length-1];U.value=O.replace(/(\r?\n|\r)$/g,"")}function E(O){const U=this.resume(),G=this.stack[this.stack.length-1];G.label=U,G.identifier=Rt(this.sliceSerialize(O)).toLowerCase()}function y(){const O=this.resume(),U=this.stack[this.stack.length-1];U.title=O}function w(){const O=this.resume(),U=this.stack[this.stack.length-1];U.url=O}function P(O){const U=this.stack[this.stack.length-1];if(!U.depth){const G=this.sliceSerialize(O).length;U.depth=G}}function x(){this.data.setextHeadingSlurpLineEnding=!0}function F(O){const U=this.stack[this.stack.length-1];U.depth=this.sliceSerialize(O).codePointAt(0)===61?1:2}function H(){this.data.setextHeadingSlurpLineEnding=void 0}function K(O){const G=this.stack[this.stack.length-1].children;let te=G[G.length-1];(!te||te.type!=="text")&&(te=pg(),te.position={start:on(O.start),end:void 0},G.push(te)),this.stack.push(te)}function I(O){const U=this.stack.pop();U.value+=this.sliceSerialize(O),U.position.end=on(O.end)}function V(O){const U=this.stack[this.stack.length-1];if(this.data.atHardBreak){const G=U.children[U.children.length-1];G.position.end=on(O.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(U.type)&&(K.call(this,O),I.call(this,O))}function Y(){this.data.atHardBreak=!0}function re(){const O=this.resume(),U=this.stack[this.stack.length-1];U.value=O}function fe(){const O=this.resume(),U=this.stack[this.stack.length-1];U.value=O}function ee(){const O=this.resume(),U=this.stack[this.stack.length-1];U.value=O}function xe(){const O=this.stack[this.stack.length-1];if(this.data.inReference){const U=this.data.referenceType||"shortcut";O.type+="Reference",O.referenceType=U,delete O.url,delete O.title}else delete O.identifier,delete O.label;this.data.referenceType=void 0}function ke(){const O=this.stack[this.stack.length-1];if(this.data.inReference){const U=this.data.referenceType||"shortcut";O.type+="Reference",O.referenceType=U,delete O.url,delete O.title}else delete O.identifier,delete O.label;this.data.referenceType=void 0}function j(O){const U=this.sliceSerialize(O),G=this.stack[this.stack.length-2];G.label=hb(U),G.identifier=Rt(U).toLowerCase()}function Q(){const O=this.stack[this.stack.length-1],U=this.resume(),G=this.stack[this.stack.length-1];if(this.data.inReference=!0,G.type==="link"){const te=O.children;G.children=te}else G.alt=U}function b(){const O=this.resume(),U=this.stack[this.stack.length-1];U.url=O}function ie(){const O=this.resume(),U=this.stack[this.stack.length-1];U.title=O}function se(){this.data.inReference=void 0}function S(){this.data.referenceType="collapsed"}function we(O){const U=this.resume(),G=this.stack[this.stack.length-1];G.label=U,G.identifier=Rt(this.sliceSerialize(O)).toLowerCase(),this.data.referenceType="full"}function Ct(O){this.data.characterReferenceType=O.type}function he(O){const U=this.sliceSerialize(O),G=this.data.characterReferenceType;let te;G?(te=Rm(U,G==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):te=xc(U);const le=this.stack[this.stack.length-1];le.value+=te}function Lt(O){const U=this.stack.pop();U.position.end=on(O.end)}function sn(O){I.call(this,O);const U=this.stack[this.stack.length-1];U.url=this.sliceSerialize(O)}function lr(O){I.call(this,O);const U=this.stack[this.stack.length-1];U.url="mailto:"+this.sliceSerialize(O)}function or(){return{type:"blockquote",children:[]}}function _u(){return{type:"code",lang:null,meta:null,value:""}}function sg(){return{type:"inlineCode",value:""}}function lg(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function og(){return{type:"emphasis",children:[]}}function Vc(){return{type:"heading",depth:0,children:[]}}function Wc(){return{type:"break"}}function Yc(){return{type:"html",value:""}}function cg(){return{type:"image",title:null,url:"",alt:null}}function Xc(){return{type:"link",title:null,url:"",children:[]}}function Kc(O){return{type:"list",ordered:O.type==="listOrdered",start:null,spread:O._spread,children:[]}}function fg(O){return{type:"listItem",spread:O._spread,checked:null,children:[]}}function dg(){return{type:"paragraph",children:[]}}function hg(){return{type:"strong",children:[]}}function pg(){return{type:"text",value:""}}function mg(){return{type:"thematicBreak"}}}function on(e){return{line:e.line,column:e.column,offset:e.offset}}function jm(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?jm(e,r):Eb(e,r)}}function Eb(e,t){let n;for(n in t)if(zm.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function zd(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ri({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ri({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ri({start:t.start,end:t.end})+") is still open")}function Tb(e){const t=this;t.parser=n;function n(r){return mb(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function yb(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function _b(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function bb(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let u={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(u.data={meta:t.meta}),e.patch(t,u),u=e.applyData(t,u),u={type:"element",tagName:"pre",properties:{},children:[u]},e.patch(t,u),u}function kb(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Cb(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ab(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Jr(r.toLowerCase()),u=e.footnoteOrder.indexOf(r);let a,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=u+1,s+=1,e.footnoteCounts.set(r,s);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,l);const c={type:"element",tagName:"sup",properties:{},children:[l]};return e.patch(t,c),e.applyData(t,c)}function Sb(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Nb(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Vm(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),u=i[0];u&&u.type==="text"?u.value="["+u.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function xb(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Vm(e,t);const i={src:Jr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const u={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,u),e.applyData(t,u)}function Ib(e,t){const n={src:Jr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function vb(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function wb(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Vm(e,t);const i={href:Jr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const u={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,u),e.applyData(t,u)}function Rb(e,t){const n={href:Jr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Ob(e,t,n){const r=e.all(t),i=n?Pb(n):Wm(t),u={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let f;d&&d.type==="element"&&d.tagName==="p"?f=d:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),u.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const d=r[s];(i||s!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const l=r[r.length-1];l&&(i||l.type!=="element"||l.tagName!=="p")&&a.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:u,children:a};return e.patch(t,c),e.applyData(t,c)}function Pb(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Wm(n[r])}return t}function Wm(e){const t=e.spread;return t??e.children.length>1}function Lb(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const u={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,u),e.applyData(t,u)}function Db(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Mb(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Bb(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Fb(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},s=Vt(t.children[1]),l=rs(t.children[t.children.length-1]);s&&l&&(a.position={start:s,end:l}),i.push(a)}const u={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,u),e.applyData(t,u)}function Hb(e,t,n){const r=n?n.children:void 0,u=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,s=a?a.length:t.children.length;let l=-1;const c=[];for(;++l<s;){const f=t.children[l],h={},p=a?a[l]:void 0;p&&(h.align=p);let T={type:"element",tagName:u,properties:h,children:[]};f&&(T.children=e.all(f),e.patch(f,T),T=e.applyData(f,T)),c.push(T)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(t,d),e.applyData(t,d)}function Ub(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const jd=9,Vd=32;function zb(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const u=[];for(;r;)u.push(Wd(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return u.push(Wd(t.slice(i),i>0,!1)),u.join("")}function Wd(e,t,n){let r=0,i=e.length;if(t){let u=e.codePointAt(r);for(;u===jd||u===Vd;)r++,u=e.codePointAt(r)}if(n){let u=e.codePointAt(i-1);for(;u===jd||u===Vd;)i--,u=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function jb(e,t){const n={type:"text",value:zb(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Vb(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const Wb={blockquote:yb,break:_b,code:bb,delete:kb,emphasis:Cb,footnoteReference:Ab,heading:Sb,html:Nb,imageReference:xb,image:Ib,inlineCode:vb,linkReference:wb,link:Rb,listItem:Ob,list:Lb,paragraph:Db,root:Mb,strong:Bb,table:Fb,tableCell:Ub,tableRow:Hb,text:jb,thematicBreak:Vb,toml:Fu,yaml:Fu,definition:Fu,footnoteDefinition:Fu};function Fu(){}const Ym=-1,as=0,Pi=1,Oa=2,vc=3,wc=4,Rc=5,Oc=6,Xm=7,Km=8,Qm=typeof self=="object"?self:globalThis,Yd=(e,t)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new Qm[e](t)},Yb=(e,t)=>{const n=(i,u)=>(e.set(u,i),i),r=i=>{if(e.has(i))return e.get(i);const[u,a]=t[i];switch(u){case as:case Ym:return n(a,i);case Pi:{const s=n([],i);for(const l of a)s.push(r(l));return s}case Oa:{const s=n({},i);for(const[l,c]of a)s[r(l)]=r(c);return s}case vc:return n(new Date(a),i);case wc:{const{source:s,flags:l}=a;return n(new RegExp(s,l),i)}case Rc:{const s=n(new Map,i);for(const[l,c]of a)s.set(r(l),r(c));return s}case Oc:{const s=n(new Set,i);for(const l of a)s.add(r(l));return s}case Xm:{const{name:s,message:l}=a;return n(typeof Qm[s]=="function"?Yd(s,l):new Error(l),i)}case Km:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:s}=new Uint8Array(a);return n(new DataView(s),a)}}return n(Yd(u,a),i)};return r},Xd=e=>Yb(new Map,e)(0),zn="",{toString:Xb}={},{keys:Kb}=Object,hi=e=>{const t=typeof e;if(t!=="object"||!e)return[as,t];const n=Xb.call(e).slice(8,-1);switch(n){case"Array":return[Pi,zn];case"Object":return[Oa,zn];case"Date":return[vc,zn];case"RegExp":return[wc,zn];case"Map":return[Rc,zn];case"Set":return[Oc,zn];case"DataView":return[Pi,n]}return n.includes("Array")?[Pi,n]:e instanceof Error?[Xm,e.name||"Error"]:[Oa,n]},Hu=([e,t])=>e===as&&(t==="function"||t==="symbol"),Qb=(e,t,n,r)=>{const i=(a,s)=>{const l=r.push(a)-1;return n.set(s,l),l},u=a=>{if(n.has(a))return n.get(a);let[s,l]=hi(a);switch(s){case as:{let d=a;switch(l){case"bigint":s=Km,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+l);d=null;break;case"undefined":return i([Ym],a)}return i([s,d],a)}case Pi:{if(l){let h=a;return l==="DataView"?h=new Uint8Array(a.buffer):l==="ArrayBuffer"&&(h=new Uint8Array(a)),i([l,[...h]],a)}const d=[],f=i([s,d],a);for(const h of a)d.push(u(h));return f}case Oa:{if(l)switch(l){case"BigInt":return i([l,a.toString()],a);case"Boolean":case"Number":case"String":return i([l,a.valueOf()],a)}if(t&&"toJSON"in a)return u(a.toJSON());const d=[],f=i([s,d],a);for(const h of Kb(a))(e||!Hu(hi(a[h])))&&d.push([u(h),u(a[h])]);return f}case vc:return i([s,isNaN(a.getTime())?zn:a.toISOString()],a);case wc:{const{source:d,flags:f}=a;return i([s,{source:d,flags:f}],a)}case Rc:{const d=[],f=i([s,d],a);for(const[h,p]of a)(e||!(Hu(hi(h))||Hu(hi(p))))&&d.push([u(h),u(p)]);return f}case Oc:{const d=[],f=i([s,d],a);for(const h of a)(e||!Hu(hi(h)))&&d.push(u(h));return f}}const{message:c}=a;return i([s,{name:l,message:c}],a)};return u},Kd=(e,{json:t,lossy:n}={})=>{const r=[];return Qb(!(t||n),!!t,new Map,r)(e),r},Wr=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Xd(Kd(e,t)):structuredClone(e):(e,t)=>Xd(Kd(e,t));function $b(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Gb(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function qb(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||$b,r=e.options.footnoteBackLabel||Gb,i=e.options.footnoteLabel||"Footnotes",u=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let l=-1;for(;++l<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[l]);if(!c)continue;const d=e.all(c),f=String(c.identifier).toUpperCase(),h=Jr(f.toLowerCase());let p=0;const T=[],C=e.footnoteCounts.get(f);for(;C!==void 0&&++p<=C;){T.length>0&&T.push({type:"text",value:" "});let E=typeof n=="string"?n:n(l,p);typeof E=="string"&&(E={type:"text",value:E}),T.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+h+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(l,p),className:["data-footnote-backref"]},children:Array.isArray(E)?E:[E]})}const N=d[d.length-1];if(N&&N.type==="element"&&N.tagName==="p"){const E=N.children[N.children.length-1];E&&E.type==="text"?E.value+=" ":N.children.push({type:"text",value:" "}),N.children.push(...T)}else d.push(...T);const m={type:"element",tagName:"li",properties:{id:t+"fn-"+h},children:e.wrap(d,!0)};e.patch(c,m),s.push(m)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:u,properties:{...Wr(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const ss=function(e){if(e==null)return tk;if(typeof e=="function")return ls(e);if(typeof e=="object")return Array.isArray(e)?Jb(e):Zb(e);if(typeof e=="string")return ek(e);throw new Error("Expected function, string, or object as test")};function Jb(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=ss(e[n]);return ls(r);function r(...i){let u=-1;for(;++u<t.length;)if(t[u].apply(this,i))return!0;return!1}}function Zb(e){const t=e;return ls(n);function n(r){const i=r;let u;for(u in e)if(i[u]!==t[u])return!1;return!0}}function ek(e){return ls(t);function t(n){return n&&n.type===e}}function ls(e){return t;function t(n,r,i){return!!(nk(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function tk(){return!0}function nk(e){return e!==null&&typeof e=="object"&&"type"in e}const $m=[],rk=!0,so=!1,ik="skip";function Gm(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const u=ss(i),a=r?-1:1;s(e,void 0,[])();function s(l,c,d){const f=l&&typeof l=="object"?l:{};if(typeof f.type=="string"){const p=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(l.type+(p?"<"+p+">":""))+")"})}return h;function h(){let p=$m,T,C,N;if((!t||u(l,c,d[d.length-1]||void 0))&&(p=uk(n(l,d)),p[0]===so))return p;if("children"in l&&l.children){const m=l;if(m.children&&p[0]!==ik)for(C=(r?m.children.length:-1)+a,N=d.concat(m);C>-1&&C<m.children.length;){const E=m.children[C];if(T=s(E,C,N)(),T[0]===so)return T;C=typeof T[1]=="number"?T[1]:C+a}}return p}}}function uk(e){return Array.isArray(e)?e:typeof e=="number"?[rk,e]:e==null?$m:[e]}function os(e,t,n,r){let i,u,a;typeof t=="function"&&typeof n!="function"?(u=void 0,a=t,i=n):(u=t,a=n,i=r),Gm(e,u,s,i);function s(l,c){const d=c[c.length-1],f=d?d.children.indexOf(l):void 0;return a(l,f,d)}}const lo={}.hasOwnProperty,ak={};function sk(e,t){const n=t||ak,r=new Map,i=new Map,u=new Map,a={...Wb,...n.handlers},s={all:c,applyData:ok,definitionById:r,footnoteById:i,footnoteCounts:u,footnoteOrder:[],handlers:a,one:l,options:n,patch:lk,wrap:fk};return os(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const f=d.type==="definition"?r:i,h=String(d.identifier).toUpperCase();f.has(h)||f.set(h,d)}}),s;function l(d,f){const h=d.type,p=s.handlers[h];if(lo.call(s.handlers,h)&&p)return p(s,d,f);if(s.options.passThrough&&s.options.passThrough.includes(h)){if("children"in d){const{children:C,...N}=d,m=Wr(N);return m.children=s.all(d),m}return Wr(d)}return(s.options.unknownHandler||ck)(s,d,f)}function c(d){const f=[];if("children"in d){const h=d.children;let p=-1;for(;++p<h.length;){const T=s.one(h[p],d);if(T){if(p&&h[p-1].type==="break"&&(!Array.isArray(T)&&T.type==="text"&&(T.value=Qd(T.value)),!Array.isArray(T)&&T.type==="element")){const C=T.children[0];C&&C.type==="text"&&(C.value=Qd(C.value))}Array.isArray(T)?f.push(...T):f.push(T)}}}return f}}function lk(e,t){e.position&&(t.position=Gy(e))}function ok(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,u=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&u&&Object.assign(n.properties,Wr(u)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function ck(e,t){const n=t.data||{},r="value"in t&&!(lo.call(n,"hProperties")||lo.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function fk(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Qd(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function $d(e,t){const n=sk(e,t),r=n.one(e,void 0),i=qb(n),u=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&u.children.push({type:"text",value:`
`},i),u}function dk(e,t){return e&&"run"in e?async function(n,r){const i=$d(n,{file:r,...t});await e.run(i,r)}:function(n,r){return $d(n,{file:r,...e||t})}}function Gd(e){if(e)throw e}var na=Object.prototype.hasOwnProperty,qm=Object.prototype.toString,qd=Object.defineProperty,Jd=Object.getOwnPropertyDescriptor,Zd=function(t){return typeof Array.isArray=="function"?Array.isArray(t):qm.call(t)==="[object Array]"},e0=function(t){if(!t||qm.call(t)!=="[object Object]")return!1;var n=na.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&na.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||na.call(t,i)},t0=function(t,n){qd&&n.name==="__proto__"?qd(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},n0=function(t,n){if(n==="__proto__")if(na.call(t,n)){if(Jd)return Jd(t,n).value}else return;return t[n]},hk=function e(){var t,n,r,i,u,a,s=arguments[0],l=1,c=arguments.length,d=!1;for(typeof s=="boolean"&&(d=s,s=arguments[1]||{},l=2),(s==null||typeof s!="object"&&typeof s!="function")&&(s={});l<c;++l)if(t=arguments[l],t!=null)for(n in t)r=n0(s,n),i=n0(t,n),s!==i&&(d&&i&&(e0(i)||(u=Zd(i)))?(u?(u=!1,a=r&&Zd(r)?r:[]):a=r&&e0(r)?r:{},t0(s,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&t0(s,{name:n,newValue:i}));return s};const Xs=To(hk);function oo(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function pk(){const e=[],t={run:n,use:r};return t;function n(...i){let u=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);s(null,...i);function s(l,...c){const d=e[++u];let f=-1;if(l){a(l);return}for(;++f<i.length;)(c[f]===null||c[f]===void 0)&&(c[f]=i[f]);i=c,d?mk(d,s)(...c):a(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function mk(e,t){let n;return r;function r(...a){const s=e.length>a.length;let l;s&&a.push(i);try{l=e.apply(this,a)}catch(c){const d=c;if(s&&n)throw d;return i(d)}s||(l&&l.then&&typeof l.then=="function"?l.then(u,i):l instanceof Error?i(l):u(l))}function i(a,...s){n||(n=!0,t(a,...s))}function u(a){i(null,a)}}const Bt={basename:gk,dirname:Ek,extname:Tk,join:yk,sep:"/"};function gk(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Eu(e);let n=0,r=-1,i=e.length,u;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(u){n=i+1;break}}else r<0&&(u=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(u){n=i+1;break}}else a<0&&(u=!0,a=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function Ek(e){if(Eu(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function Tk(e){Eu(e);let t=e.length,n=-1,r=0,i=-1,u=0,a;for(;t--;){const s=e.codePointAt(t);if(s===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),s===46?i<0?i=t:u!==1&&(u=1):i>-1&&(u=-1)}return i<0||n<0||u===0||u===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function yk(...e){let t=-1,n;for(;++t<e.length;)Eu(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":_k(n)}function _k(e){Eu(e);const t=e.codePointAt(0)===47;let n=bk(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function bk(e,t){let n="",r=0,i=-1,u=0,a=-1,s,l;for(;++a<=e.length;){if(a<e.length)s=e.codePointAt(a);else{if(s===47)break;s=47}if(s===47){if(!(i===a-1||u===1))if(i!==a-1&&u===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),i=a,u=0;continue}}else if(n.length>0){n="",r=0,i=a,u=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,u=0}else s===46&&u>-1?u++:u=-1}return n}function Eu(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const kk={cwd:Ck};function Ck(){return"/"}function co(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Ak(e){if(typeof e=="string")e=new URL(e);else if(!co(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return Sk(e)}function Sk(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Ks=["history","path","basename","stem","extname","dirname"];class Jm{constructor(t){let n;t?co(t)?n={path:t}:typeof t=="string"||Nk(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":kk.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Ks.length;){const u=Ks[r];u in n&&n[u]!==void 0&&n[u]!==null&&(this[u]=u==="history"?[...n[u]]:n[u])}let i;for(i in n)Ks.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?Bt.basename(this.path):void 0}set basename(t){$s(t,"basename"),Qs(t,"basename"),this.path=Bt.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Bt.dirname(this.path):void 0}set dirname(t){r0(this.basename,"dirname"),this.path=Bt.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Bt.extname(this.path):void 0}set extname(t){if(Qs(t,"extname"),r0(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Bt.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){co(t)&&(t=Ak(t)),$s(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Bt.basename(this.path,this.extname):void 0}set stem(t){$s(t,"stem"),Qs(t,"stem"),this.path=Bt.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new Ye(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Qs(e,t){if(e&&e.includes(Bt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Bt.sep+"`")}function $s(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function r0(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Nk(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const xk=function(e){const r=this.constructor.prototype,i=r[e],u=function(){return i.apply(u,arguments)};return Object.setPrototypeOf(u,r),u},Ik={}.hasOwnProperty;class Pc extends xk{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=pk()}copy(){const t=new Pc;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Xs(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Js("data",this.frozen),this.namespace[t]=n,this):Ik.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Js("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Uu(t),r=this.parser||this.Parser;return Gs("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Gs("process",this.parser||this.Parser),qs("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(u,a){const s=Uu(t),l=r.parse(s);r.run(l,s,function(d,f,h){if(d||!f||!h)return c(d);const p=f,T=r.stringify(p,h);Rk(T)?h.value=T:h.result=T,c(d,h)});function c(d,f){d||!f?a(d):u?u(f):n(void 0,f)}}}processSync(t){let n=!1,r;return this.freeze(),Gs("processSync",this.parser||this.Parser),qs("processSync",this.compiler||this.Compiler),this.process(t,i),u0("processSync","process",n),r;function i(u,a){n=!0,Gd(u),r=a}}run(t,n,r){i0(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?u(void 0,r):new Promise(u);function u(a,s){const l=Uu(n);i.run(t,l,c);function c(d,f,h){const p=f||t;d?s(d):a?a(p):r(void 0,p,h)}}}runSync(t,n){let r=!1,i;return this.run(t,n,u),u0("runSync","run",r),i;function u(a,s){Gd(a),i=s,r=!0}}stringify(t,n){this.freeze();const r=Uu(n),i=this.compiler||this.Compiler;return qs("stringify",i),i0(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Js("use",this.frozen),t!=null)if(typeof t=="function")l(t,n);else if(typeof t=="object")Array.isArray(t)?s(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function u(c){if(typeof c=="function")l(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[d,...f]=c;l(d,f)}else a(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function a(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(c.plugins),c.settings&&(i.settings=Xs(!0,i.settings,c.settings))}function s(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){const f=c[d];u(f)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function l(c,d){let f=-1,h=-1;for(;++f<r.length;)if(r[f][0]===c){h=f;break}if(h===-1)r.push([c,...d]);else if(d.length>0){let[p,...T]=d;const C=r[h][1];oo(C)&&oo(p)&&(p=Xs(!0,C,p)),r[h]=[c,p,...T]}}}}const vk=new Pc().freeze();function Gs(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function qs(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Js(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function i0(e){if(!oo(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function u0(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Uu(e){return wk(e)?e:new Jm(e)}function wk(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Rk(e){return typeof e=="string"||Ok(e)}function Ok(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Pk="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",a0=[],s0={allowDangerousHtml:!0},Lk=/^(https?|ircs?|mailto|xmpp)$/i,Dk=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Mk(e){const t=Bk(e),n=Fk(e);return Hk(t.runSync(t.parse(n),n),e)}function Bk(e){const t=e.rehypePlugins||a0,n=e.remarkPlugins||a0,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...s0}:s0;return vk().use(Tb).use(n).use(dk,r).use(t)}function Fk(e){const t=e.children||"",n=new Jm;return typeof t=="string"&&(n.value=t),n}function Hk(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,u=t.disallowedElements,a=t.skipHtml,s=t.unwrapDisallowed,l=t.urlTransform||Uk;for(const d of Dk)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+Pk+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),os(e,c),t3(e,{Fragment:A.Fragment,components:i,ignoreInvalidStyle:!0,jsx:A.jsx,jsxs:A.jsxs,passKeys:!0,passNode:!0});function c(d,f,h){if(d.type==="raw"&&h&&typeof f=="number")return a?h.children.splice(f,1):h.children[f]={type:"text",value:d.value},f;if(d.type==="element"){let p;for(p in Vs)if(Object.hasOwn(Vs,p)&&Object.hasOwn(d.properties,p)){const T=d.properties[p],C=Vs[p];(C===null||C.includes(d.tagName))&&(d.properties[p]=l(String(T||""),p,d))}}if(d.type==="element"){let p=n?!n.includes(d.tagName):u?u.includes(d.tagName):!1;if(!p&&r&&typeof f=="number"&&(p=!r(d,f,h)),p&&h&&typeof f=="number")return s&&d.children?h.children.splice(f,1,...d.children):h.children.splice(f,1),f}}}function Uk(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Lk.test(e.slice(0,t))?e:""}function l0(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function zk(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function jk(e,t,n){const i=ss((n||{}).ignore||[]),u=Vk(t);let a=-1;for(;++a<u.length;)Gm(e,"text",s);function s(c,d){let f=-1,h;for(;++f<d.length;){const p=d[f],T=h?h.children:void 0;if(i(p,T?T.indexOf(p):void 0,h))return;h=p}if(h)return l(c,d)}function l(c,d){const f=d[d.length-1],h=u[a][0],p=u[a][1];let T=0;const N=f.children.indexOf(c);let m=!1,E=[];h.lastIndex=0;let y=h.exec(c.value);for(;y;){const w=y.index,P={index:y.index,input:y.input,stack:[...d,c]};let x=p(...y,P);if(typeof x=="string"&&(x=x.length>0?{type:"text",value:x}:void 0),x===!1?h.lastIndex=w+1:(T!==w&&E.push({type:"text",value:c.value.slice(T,w)}),Array.isArray(x)?E.push(...x):x&&E.push(x),T=w+y[0].length,m=!0),!h.global)break;y=h.exec(c.value)}return m?(T<c.value.length&&E.push({type:"text",value:c.value.slice(T)}),f.children.splice(N,1,...E)):E=[c],N+E.length}}function Vk(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const i=n[r];t.push([Wk(i[0]),Yk(i[1])])}return t}function Wk(e){return typeof e=="string"?new RegExp(zk(e),"g"):e}function Yk(e){return typeof e=="function"?e:function(){return e}}const Zs="phrasing",el=["autolink","link","image","label"];function Xk(){return{transforms:[Zk],enter:{literalAutolink:Qk,literalAutolinkEmail:tl,literalAutolinkHttp:tl,literalAutolinkWww:tl},exit:{literalAutolink:Jk,literalAutolinkEmail:qk,literalAutolinkHttp:$k,literalAutolinkWww:Gk}}}function Kk(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Zs,notInConstruct:el},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Zs,notInConstruct:el},{character:":",before:"[ps]",after:"\\/",inConstruct:Zs,notInConstruct:el}]}}function Qk(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function tl(e){this.config.enter.autolinkProtocol.call(this,e)}function $k(e){this.config.exit.autolinkProtocol.call(this,e)}function Gk(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function qk(e){this.config.exit.autolinkEmail.call(this,e)}function Jk(e){this.exit(e)}function Zk(e){jk(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,eC],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),tC]],{ignore:["link","linkReference"]})}function eC(e,t,n,r,i){let u="";if(!Zm(i)||(/^w/i.test(t)&&(n=t+n,t="",u="http://"),!nC(n)))return!1;const a=rC(n+r);if(!a[0])return!1;const s={type:"link",title:null,url:u+t+a[0],children:[{type:"text",value:t+a[0]}]};return a[1]?[s,{type:"text",value:a[1]}]:s}function tC(e,t,n,r){return!Zm(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function nC(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function rC(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=l0(e,"(");let u=l0(e,")");for(;r!==-1&&i>u;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),u++;return[e,n]}function Zm(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||nr(n)||is(n))&&(!t||n!==47)}e1.peek=dC;function iC(){this.buffer()}function uC(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function aC(){this.buffer()}function sC(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function lC(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Rt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function oC(e){this.exit(e)}function cC(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Rt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function fC(e){this.exit(e)}function dC(){return"["}function e1(e,t,n,r){const i=n.createTracker(r);let u=i.move("[^");const a=n.enter("footnoteReference"),s=n.enter("reference");return u+=i.move(n.safe(n.associationId(e),{after:"]",before:u})),s(),a(),u+=i.move("]"),u}function hC(){return{enter:{gfmFootnoteCallString:iC,gfmFootnoteCall:uC,gfmFootnoteDefinitionLabelString:aC,gfmFootnoteDefinition:sC},exit:{gfmFootnoteCallString:lC,gfmFootnoteCall:oC,gfmFootnoteDefinitionLabelString:cC,gfmFootnoteDefinition:fC}}}function pC(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:e1},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,u,a){const s=u.createTracker(a);let l=s.move("[^");const c=u.enter("footnoteDefinition"),d=u.enter("label");return l+=s.move(u.safe(u.associationId(r),{before:l,after:"]"})),d(),l+=s.move("]:"),r.children&&r.children.length>0&&(s.shift(4),l+=s.move((t?`
`:" ")+u.indentLines(u.containerFlow(r,s.current()),t?t1:mC))),c(),l}}function mC(e,t,n){return t===0?e:t1(e,t,n)}function t1(e,t,n){return(n?"":"    ")+e}const gC=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];n1.peek=bC;function EC(){return{canContainEols:["delete"],enter:{strikethrough:yC},exit:{strikethrough:_C}}}function TC(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:gC}],handlers:{delete:n1}}}function yC(e){this.enter({type:"delete",children:[]},e)}function _C(e){this.exit(e)}function n1(e,t,n,r){const i=n.createTracker(r),u=n.enter("strikethrough");let a=i.move("~~");return a+=n.containerPhrasing(e,{...i.current(),before:a,after:"~"}),a+=i.move("~~"),u(),a}function bC(){return"~"}function kC(e){return e.length}function CC(e,t){const n=t||{},r=(n.align||[]).concat(),i=n.stringLength||kC,u=[],a=[],s=[],l=[];let c=0,d=-1;for(;++d<e.length;){const C=[],N=[];let m=-1;for(e[d].length>c&&(c=e[d].length);++m<e[d].length;){const E=AC(e[d][m]);if(n.alignDelimiters!==!1){const y=i(E);N[m]=y,(l[m]===void 0||y>l[m])&&(l[m]=y)}C.push(E)}a[d]=C,s[d]=N}let f=-1;if(typeof r=="object"&&"length"in r)for(;++f<c;)u[f]=o0(r[f]);else{const C=o0(r);for(;++f<c;)u[f]=C}f=-1;const h=[],p=[];for(;++f<c;){const C=u[f];let N="",m="";C===99?(N=":",m=":"):C===108?N=":":C===114&&(m=":");let E=n.alignDelimiters===!1?1:Math.max(1,l[f]-N.length-m.length);const y=N+"-".repeat(E)+m;n.alignDelimiters!==!1&&(E=N.length+E+m.length,E>l[f]&&(l[f]=E),p[f]=E),h[f]=y}a.splice(1,0,h),s.splice(1,0,p),d=-1;const T=[];for(;++d<a.length;){const C=a[d],N=s[d];f=-1;const m=[];for(;++f<c;){const E=C[f]||"";let y="",w="";if(n.alignDelimiters!==!1){const P=l[f]-(N[f]||0),x=u[f];x===114?y=" ".repeat(P):x===99?P%2?(y=" ".repeat(P/2+.5),w=" ".repeat(P/2-.5)):(y=" ".repeat(P/2),w=y):w=" ".repeat(P)}n.delimiterStart!==!1&&!f&&m.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&E==="")&&(n.delimiterStart!==!1||f)&&m.push(" "),n.alignDelimiters!==!1&&m.push(y),m.push(E),n.alignDelimiters!==!1&&m.push(w),n.padding!==!1&&m.push(" "),(n.delimiterEnd!==!1||f!==c-1)&&m.push("|")}T.push(n.delimiterEnd===!1?m.join("").replace(/ +$/,""):m.join(""))}return T.join(`
`)}function AC(e){return e==null?"":String(e)}function o0(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}const c0={}.hasOwnProperty;function r1(e,t){const n=t||{};function r(i,...u){let a=r.invalid;const s=r.handlers;if(i&&c0.call(i,e)){const l=String(i[e]);a=c0.call(s,l)?s[l]:r.unknown}if(a)return a.call(this,i,...u)}return r.handlers=n.handlers||{},r.invalid=n.invalid,r.unknown=n.unknown,r}function SC(e,t,n,r){const i=n.enter("blockquote"),u=n.createTracker(r);u.move("> "),u.shift(2);const a=n.indentLines(n.containerFlow(e,u.current()),NC);return i(),a}function NC(e,t,n){return">"+(n?"":" ")+e}function xC(e,t){return f0(e,t.inConstruct,!0)&&!f0(e,t.notInConstruct,!1)}function f0(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function d0(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&xC(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function IC(e,t){const n=String(e);let r=n.indexOf(t),i=r,u=0,a=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++u>a&&(a=u):u=1,i=r+t.length,r=n.indexOf(t,i);return a}function vC(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function wC(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function RC(e,t,n,r){const i=wC(n),u=e.value||"",a=i==="`"?"GraveAccent":"Tilde";if(vC(e,n)){const f=n.enter("codeIndented"),h=n.indentLines(u,OC);return f(),h}const s=n.createTracker(r),l=i.repeat(Math.max(IC(u,i)+1,3)),c=n.enter("codeFenced");let d=s.move(l);if(e.lang){const f=n.enter(`codeFencedLang${a}`);d+=s.move(n.safe(e.lang,{before:d,after:" ",encode:["`"],...s.current()})),f()}if(e.lang&&e.meta){const f=n.enter(`codeFencedMeta${a}`);d+=s.move(" "),d+=s.move(n.safe(e.meta,{before:d,after:`
`,encode:["`"],...s.current()})),f()}return d+=s.move(`
`),u&&(d+=s.move(u+`
`)),d+=s.move(l),c(),d}function OC(e,t,n){return(n?"":"    ")+e}function Lc(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function PC(e,t,n,r){const i=Lc(n),u=i==='"'?"Quote":"Apostrophe",a=n.enter("definition");let s=n.enter("label");const l=n.createTracker(r);let c=l.move("[");return c+=l.move(n.safe(n.associationId(e),{before:c,after:"]",...l.current()})),c+=l.move("]: "),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),c+=l.move("<"),c+=l.move(n.safe(e.url,{before:c,after:">",...l.current()})),c+=l.move(">")):(s=n.enter("destinationRaw"),c+=l.move(n.safe(e.url,{before:c,after:e.title?" ":`
`,...l.current()}))),s(),e.title&&(s=n.enter(`title${u}`),c+=l.move(" "+i),c+=l.move(n.safe(e.title,{before:c,after:i,...l.current()})),c+=l.move(i),s()),a(),c}function LC(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function su(e){return"&#x"+e.toString(16).toUpperCase()+";"}function Pa(e,t,n){const r=Vr(e),i=Vr(t);return r===void 0?i===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}i1.peek=DC;function i1(e,t,n,r){const i=LC(n),u=n.enter("emphasis"),a=n.createTracker(r),s=a.move(i);let l=a.move(n.containerPhrasing(e,{after:i,before:s,...a.current()}));const c=l.charCodeAt(0),d=Pa(r.before.charCodeAt(r.before.length-1),c,i);d.inside&&(l=su(c)+l.slice(1));const f=l.charCodeAt(l.length-1),h=Pa(r.after.charCodeAt(0),f,i);h.inside&&(l=l.slice(0,-1)+su(f));const p=a.move(i);return u(),n.attentionEncodeSurroundingInfo={after:h.outside,before:d.outside},s+l+p}function DC(e,t,n){return n.options.emphasis||"*"}function MC(e,t){let n=!1;return os(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,so}),!!((!e.depth||e.depth<3)&&Nc(e)&&(t.options.setext||n))}function BC(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),u=n.createTracker(r);if(MC(e,n)){const d=n.enter("headingSetext"),f=n.enter("phrasing"),h=n.containerPhrasing(e,{...u.current(),before:`
`,after:`
`});return f(),d(),h+`
`+(i===1?"=":"-").repeat(h.length-(Math.max(h.lastIndexOf("\r"),h.lastIndexOf(`
`))+1))}const a="#".repeat(i),s=n.enter("headingAtx"),l=n.enter("phrasing");u.move(a+" ");let c=n.containerPhrasing(e,{before:"# ",after:`
`,...u.current()});return/^[\t ]/.test(c)&&(c=su(c.charCodeAt(0))+c.slice(1)),c=c?a+" "+c:a,n.options.closeAtx&&(c+=" "+a),l(),s(),c}u1.peek=FC;function u1(e){return e.value||""}function FC(){return"<"}a1.peek=HC;function a1(e,t,n,r){const i=Lc(n),u=i==='"'?"Quote":"Apostrophe",a=n.enter("image");let s=n.enter("label");const l=n.createTracker(r);let c=l.move("![");return c+=l.move(n.safe(e.alt,{before:c,after:"]",...l.current()})),c+=l.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),c+=l.move("<"),c+=l.move(n.safe(e.url,{before:c,after:">",...l.current()})),c+=l.move(">")):(s=n.enter("destinationRaw"),c+=l.move(n.safe(e.url,{before:c,after:e.title?" ":")",...l.current()}))),s(),e.title&&(s=n.enter(`title${u}`),c+=l.move(" "+i),c+=l.move(n.safe(e.title,{before:c,after:i,...l.current()})),c+=l.move(i),s()),c+=l.move(")"),a(),c}function HC(){return"!"}s1.peek=UC;function s1(e,t,n,r){const i=e.referenceType,u=n.enter("imageReference");let a=n.enter("label");const s=n.createTracker(r);let l=s.move("![");const c=n.safe(e.alt,{before:l,after:"]",...s.current()});l+=s.move(c+"]["),a();const d=n.stack;n.stack=[],a=n.enter("reference");const f=n.safe(n.associationId(e),{before:l,after:"]",...s.current()});return a(),n.stack=d,u(),i==="full"||!c||c!==f?l+=s.move(f+"]"):i==="shortcut"?l=l.slice(0,-1):l+=s.move("]"),l}function UC(){return"!"}l1.peek=zC;function l1(e,t,n){let r=e.value||"",i="`",u=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++u<n.unsafe.length;){const a=n.unsafe[u],s=n.compilePattern(a);let l;if(a.atBreak)for(;l=s.exec(r);){let c=l.index;r.charCodeAt(c)===10&&r.charCodeAt(c-1)===13&&c--,r=r.slice(0,c)+" "+r.slice(l.index+1)}}return i+r+i}function zC(){return"`"}function o1(e,t){const n=Nc(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}c1.peek=jC;function c1(e,t,n,r){const i=Lc(n),u=i==='"'?"Quote":"Apostrophe",a=n.createTracker(r);let s,l;if(o1(e,n)){const d=n.stack;n.stack=[],s=n.enter("autolink");let f=a.move("<");return f+=a.move(n.containerPhrasing(e,{before:f,after:">",...a.current()})),f+=a.move(">"),s(),n.stack=d,f}s=n.enter("link"),l=n.enter("label");let c=a.move("[");return c+=a.move(n.containerPhrasing(e,{before:c,after:"](",...a.current()})),c+=a.move("]("),l(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(l=n.enter("destinationLiteral"),c+=a.move("<"),c+=a.move(n.safe(e.url,{before:c,after:">",...a.current()})),c+=a.move(">")):(l=n.enter("destinationRaw"),c+=a.move(n.safe(e.url,{before:c,after:e.title?" ":")",...a.current()}))),l(),e.title&&(l=n.enter(`title${u}`),c+=a.move(" "+i),c+=a.move(n.safe(e.title,{before:c,after:i,...a.current()})),c+=a.move(i),l()),c+=a.move(")"),s(),c}function jC(e,t,n){return o1(e,n)?"<":"["}f1.peek=VC;function f1(e,t,n,r){const i=e.referenceType,u=n.enter("linkReference");let a=n.enter("label");const s=n.createTracker(r);let l=s.move("[");const c=n.containerPhrasing(e,{before:l,after:"]",...s.current()});l+=s.move(c+"]["),a();const d=n.stack;n.stack=[],a=n.enter("reference");const f=n.safe(n.associationId(e),{before:l,after:"]",...s.current()});return a(),n.stack=d,u(),i==="full"||!c||c!==f?l+=s.move(f+"]"):i==="shortcut"?l=l.slice(0,-1):l+=s.move("]"),l}function VC(){return"["}function Dc(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function WC(e){const t=Dc(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function YC(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function d1(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function XC(e,t,n,r){const i=n.enter("list"),u=n.bulletCurrent;let a=e.ordered?YC(n):Dc(n);const s=e.ordered?a==="."?")":".":WC(n);let l=t&&n.bulletLastUsed?a===n.bulletLastUsed:!1;if(!e.ordered){const d=e.children?e.children[0]:void 0;if((a==="*"||a==="-")&&d&&(!d.children||!d.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(l=!0),d1(n)===a&&d){let f=-1;for(;++f<e.children.length;){const h=e.children[f];if(h&&h.type==="listItem"&&h.children&&h.children[0]&&h.children[0].type==="thematicBreak"){l=!0;break}}}}l&&(a=s),n.bulletCurrent=a;const c=n.containerFlow(e,r);return n.bulletLastUsed=a,n.bulletCurrent=u,i(),c}function KC(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function QC(e,t,n,r){const i=KC(n);let u=n.bulletCurrent||Dc(n);t&&t.type==="list"&&t.ordered&&(u=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+u);let a=u.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(a=Math.ceil(a/4)*4);const s=n.createTracker(r);s.move(u+" ".repeat(a-u.length)),s.shift(a);const l=n.enter("listItem"),c=n.indentLines(n.containerFlow(e,s.current()),d);return l(),c;function d(f,h,p){return h?(p?"":" ".repeat(a))+f:(p?u:u+" ".repeat(a-u.length))+f}}function $C(e,t,n,r){const i=n.enter("paragraph"),u=n.enter("phrasing"),a=n.containerPhrasing(e,r);return u(),i(),a}const GC=ss(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function qC(e,t,n,r){return(e.children.some(function(a){return GC(a)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function JC(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}h1.peek=ZC;function h1(e,t,n,r){const i=JC(n),u=n.enter("strong"),a=n.createTracker(r),s=a.move(i+i);let l=a.move(n.containerPhrasing(e,{after:i,before:s,...a.current()}));const c=l.charCodeAt(0),d=Pa(r.before.charCodeAt(r.before.length-1),c,i);d.inside&&(l=su(c)+l.slice(1));const f=l.charCodeAt(l.length-1),h=Pa(r.after.charCodeAt(0),f,i);h.inside&&(l=l.slice(0,-1)+su(f));const p=a.move(i+i);return u(),n.attentionEncodeSurroundingInfo={after:h.outside,before:d.outside},s+l+p}function ZC(e,t,n){return n.options.strong||"*"}function eA(e,t,n,r){return n.safe(e.value,r)}function tA(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function nA(e,t,n){const r=(d1(n)+(n.options.ruleSpaces?" ":"")).repeat(tA(n));return n.options.ruleSpaces?r.slice(0,-1):r}const p1={blockquote:SC,break:d0,code:RC,definition:PC,emphasis:i1,hardBreak:d0,heading:BC,html:u1,image:a1,imageReference:s1,inlineCode:l1,link:c1,linkReference:f1,list:XC,listItem:QC,paragraph:$C,root:qC,strong:h1,text:eA,thematicBreak:nA};function rA(){return{enter:{table:iA,tableData:h0,tableHeader:h0,tableRow:aA},exit:{codeText:sA,table:uA,tableData:nl,tableHeader:nl,tableRow:nl}}}function iA(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function uA(e){this.exit(e),this.data.inTable=void 0}function aA(e){this.enter({type:"tableRow",children:[]},e)}function nl(e){this.exit(e)}function h0(e){this.enter({type:"tableCell",children:[]},e)}function sA(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,lA));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function lA(e,t){return t==="|"?t:e}function oA(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,u=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:h,table:a,tableCell:l,tableRow:s}};function a(p,T,C,N){return c(d(p,C,N),p.align)}function s(p,T,C,N){const m=f(p,C,N),E=c([m]);return E.slice(0,E.indexOf(`
`))}function l(p,T,C,N){const m=C.enter("tableCell"),E=C.enter("phrasing"),y=C.containerPhrasing(p,{...N,before:u,after:u});return E(),m(),y}function c(p,T){return CC(p,{align:T,alignDelimiters:r,padding:n,stringLength:i})}function d(p,T,C){const N=p.children;let m=-1;const E=[],y=T.enter("table");for(;++m<N.length;)E[m]=f(N[m],T,C);return y(),E}function f(p,T,C){const N=p.children;let m=-1;const E=[],y=T.enter("tableRow");for(;++m<N.length;)E[m]=l(N[m],p,T,C);return y(),E}function h(p,T,C){let N=p1.inlineCode(p,T,C);return C.stack.includes("tableCell")&&(N=N.replace(/\|/g,"\\$&")),N}}function cA(){return{exit:{taskListCheckValueChecked:p0,taskListCheckValueUnchecked:p0,paragraph:dA}}}function fA(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:hA}}}function p0(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function dA(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const i=t.children;let u=-1,a;for(;++u<i.length;){const s=i[u];if(s.type==="paragraph"){a=s;break}}a===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function hA(e,t,n,r){const i=e.children[0],u=typeof e.checked=="boolean"&&i&&i.type==="paragraph",a="["+(e.checked?"x":" ")+"] ",s=n.createTracker(r);u&&s.move(a);let l=p1.listItem(e,t,n,{...r,...s.current()});return u&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,c)),l;function c(d){return d+a}}function pA(){return[Xk(),hC(),EC(),rA(),cA()]}function mA(e){return{extensions:[Kk(),pC(e),TC(),oA(e),fA()]}}const gA={tokenize:kA,partial:!0},m1={tokenize:CA,partial:!0},g1={tokenize:AA,partial:!0},E1={tokenize:SA,partial:!0},EA={tokenize:NA,partial:!0},T1={name:"wwwAutolink",tokenize:_A,previous:_1},y1={name:"protocolAutolink",tokenize:bA,previous:b1},an={name:"emailAutolink",tokenize:yA,previous:k1},Wt={};function TA(){return{text:Wt}}let Fn=48;for(;Fn<123;)Wt[Fn]=an,Fn++,Fn===58?Fn=65:Fn===91&&(Fn=97);Wt[43]=an;Wt[45]=an;Wt[46]=an;Wt[95]=an;Wt[72]=[an,y1];Wt[104]=[an,y1];Wt[87]=[an,T1];Wt[119]=[an,T1];function yA(e,t,n){const r=this;let i,u;return a;function a(f){return!fo(f)||!k1.call(r,r.previous)||Mc(r.events)?n(f):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),s(f))}function s(f){return fo(f)?(e.consume(f),s):f===64?(e.consume(f),l):n(f)}function l(f){return f===46?e.check(EA,d,c)(f):f===45||f===95||Ve(f)?(u=!0,e.consume(f),l):d(f)}function c(f){return e.consume(f),i=!0,l}function d(f){return u&&i&&Qe(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(f)):n(f)}}function _A(e,t,n){const r=this;return i;function i(a){return a!==87&&a!==119||!_1.call(r,r.previous)||Mc(r.events)?n(a):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(gA,e.attempt(m1,e.attempt(g1,u),n),n)(a))}function u(a){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(a)}}function bA(e,t,n){const r=this;let i="",u=!1;return a;function a(f){return(f===72||f===104)&&b1.call(r,r.previous)&&!Mc(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(f),e.consume(f),s):n(f)}function s(f){if(Qe(f)&&i.length<5)return i+=String.fromCodePoint(f),e.consume(f),s;if(f===58){const h=i.toLowerCase();if(h==="http"||h==="https")return e.consume(f),l}return n(f)}function l(f){return f===47?(e.consume(f),u?c:(u=!0,l)):n(f)}function c(f){return f===null||Ra(f)||ce(f)||nr(f)||is(f)?n(f):e.attempt(m1,e.attempt(g1,d),n)(f)}function d(f){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(f)}}function kA(e,t,n){let r=0;return i;function i(a){return(a===87||a===119)&&r<3?(r++,e.consume(a),i):a===46&&r===3?(e.consume(a),u):n(a)}function u(a){return a===null?n(a):t(a)}}function CA(e,t,n){let r,i,u;return a;function a(c){return c===46||c===95?e.check(E1,l,s)(c):c===null||ce(c)||nr(c)||c!==45&&is(c)?l(c):(u=!0,e.consume(c),a)}function s(c){return c===95?r=!0:(i=r,r=void 0),e.consume(c),a}function l(c){return i||r||!u?n(c):t(c)}}function AA(e,t){let n=0,r=0;return i;function i(a){return a===40?(n++,e.consume(a),i):a===41&&r<n?u(a):a===33||a===34||a===38||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===60||a===63||a===93||a===95||a===126?e.check(E1,t,u)(a):a===null||ce(a)||nr(a)?t(a):(e.consume(a),i)}function u(a){return a===41&&r++,e.consume(a),i}}function SA(e,t,n){return r;function r(s){return s===33||s===34||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===63||s===95||s===126?(e.consume(s),r):s===38?(e.consume(s),u):s===93?(e.consume(s),i):s===60||s===null||ce(s)||nr(s)?t(s):n(s)}function i(s){return s===null||s===40||s===91||ce(s)||nr(s)?t(s):r(s)}function u(s){return Qe(s)?a(s):n(s)}function a(s){return s===59?(e.consume(s),r):Qe(s)?(e.consume(s),a):n(s)}}function NA(e,t,n){return r;function r(u){return e.consume(u),i}function i(u){return Ve(u)?n(u):t(u)}}function _1(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||ce(e)}function b1(e){return!Qe(e)}function k1(e){return!(e===47||fo(e))}function fo(e){return e===43||e===45||e===46||e===95||Ve(e)}function Mc(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const xA={tokenize:DA,partial:!0};function IA(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:OA,continuation:{tokenize:PA},exit:LA}},text:{91:{name:"gfmFootnoteCall",tokenize:RA},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:vA,resolveTo:wA}}}}function vA(e,t,n){const r=this;let i=r.events.length;const u=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let a;for(;i--;){const l=r.events[i][1];if(l.type==="labelImage"){a=l;break}if(l.type==="gfmFootnoteCall"||l.type==="labelLink"||l.type==="label"||l.type==="image"||l.type==="link")break}return s;function s(l){if(!a||!a._balanced)return n(l);const c=Rt(r.sliceSerialize({start:a.end,end:r.now()}));return c.codePointAt(0)!==94||!u.includes(c.slice(1))?n(l):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(l),e.exit("gfmFootnoteCallLabelMarker"),t(l))}}function wA(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const u={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},u.start),end:Object.assign({},u.end)},s=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",u,t],["enter",a,t],["exit",a,t],["exit",u,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...s),e}function RA(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let u=0,a;return s;function s(f){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),l}function l(f){return f!==94?n(f):(e.enter("gfmFootnoteCallMarker"),e.consume(f),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",c)}function c(f){if(u>999||f===93&&!a||f===null||f===91||ce(f))return n(f);if(f===93){e.exit("chunkString");const h=e.exit("gfmFootnoteCallString");return i.includes(Rt(r.sliceSerialize(h)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(f)}return ce(f)||(a=!0),u++,e.consume(f),f===92?d:c}function d(f){return f===91||f===92||f===93?(e.consume(f),u++,c):c(f)}}function OA(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let u,a=0,s;return l;function l(T){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(T),e.exit("gfmFootnoteDefinitionLabelMarker"),c}function c(T){return T===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(T),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",d):n(T)}function d(T){if(a>999||T===93&&!s||T===null||T===91||ce(T))return n(T);if(T===93){e.exit("chunkString");const C=e.exit("gfmFootnoteDefinitionLabelString");return u=Rt(r.sliceSerialize(C)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(T),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),h}return ce(T)||(s=!0),a++,e.consume(T),T===92?f:d}function f(T){return T===91||T===92||T===93?(e.consume(T),a++,d):d(T)}function h(T){return T===58?(e.enter("definitionMarker"),e.consume(T),e.exit("definitionMarker"),i.includes(u)||i.push(u),ne(e,p,"gfmFootnoteDefinitionWhitespace")):n(T)}function p(T){return t(T)}}function PA(e,t,n){return e.check(gu,t,e.attempt(xA,t,n))}function LA(e){e.exit("gfmFootnoteDefinition")}function DA(e,t,n){const r=this;return ne(e,i,"gfmFootnoteDefinitionIndent",5);function i(u){const a=r.events[r.events.length-1];return a&&a[1].type==="gfmFootnoteDefinitionIndent"&&a[2].sliceSerialize(a[1],!0).length===4?t(u):n(u)}}function MA(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:u,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(a,s){let l=-1;for(;++l<a.length;)if(a[l][0]==="enter"&&a[l][1].type==="strikethroughSequenceTemporary"&&a[l][1]._close){let c=l;for(;c--;)if(a[c][0]==="exit"&&a[c][1].type==="strikethroughSequenceTemporary"&&a[c][1]._open&&a[l][1].end.offset-a[l][1].start.offset===a[c][1].end.offset-a[c][1].start.offset){a[l][1].type="strikethroughSequence",a[c][1].type="strikethroughSequence";const d={type:"strikethrough",start:Object.assign({},a[c][1].start),end:Object.assign({},a[l][1].end)},f={type:"strikethroughText",start:Object.assign({},a[c][1].end),end:Object.assign({},a[l][1].start)},h=[["enter",d,s],["enter",a[c][1],s],["exit",a[c][1],s],["enter",f,s]],p=s.parser.constructs.insideSpan.null;p&&ft(h,h.length,0,us(p,a.slice(c+1,l),s)),ft(h,h.length,0,[["exit",f,s],["enter",a[l][1],s],["exit",a[l][1],s],["exit",d,s]]),ft(a,c-1,l-c+3,h),l=c+h.length-2;break}}for(l=-1;++l<a.length;)a[l][1].type==="strikethroughSequenceTemporary"&&(a[l][1].type="data");return a}function u(a,s,l){const c=this.previous,d=this.events;let f=0;return h;function h(T){return c===126&&d[d.length-1][1].type!=="characterEscape"?l(T):(a.enter("strikethroughSequenceTemporary"),p(T))}function p(T){const C=Vr(c);if(T===126)return f>1?l(T):(a.consume(T),f++,p);if(f<2&&!n)return l(T);const N=a.exit("strikethroughSequenceTemporary"),m=Vr(T);return N._open=!m||m===2&&!!C,N._close=!C||C===2&&!!m,s(T)}}}class BA{constructor(){this.map=[]}add(t,n,r){FA(this,t,n,r)}consume(t){if(this.map.sort(function(u,a){return u[0]-a[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const u of i)t.push(u);i=r.pop()}this.map.length=0}}function FA(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function HA(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const u=r.length-1;r[u]=r[u]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function UA(){return{flow:{null:{name:"table",tokenize:zA,resolveAll:jA}}}}function zA(e,t,n){const r=this;let i=0,u=0,a;return s;function s(I){let V=r.events.length-1;for(;V>-1;){const fe=r.events[V][1].type;if(fe==="lineEnding"||fe==="linePrefix")V--;else break}const Y=V>-1?r.events[V][1].type:null,re=Y==="tableHead"||Y==="tableRow"?x:l;return re===x&&r.parser.lazy[r.now().line]?n(I):re(I)}function l(I){return e.enter("tableHead"),e.enter("tableRow"),c(I)}function c(I){return I===124||(a=!0,u+=1),d(I)}function d(I){return I===null?n(I):X(I)?u>1?(u=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(I),e.exit("lineEnding"),p):n(I):J(I)?ne(e,d,"whitespace")(I):(u+=1,a&&(a=!1,i+=1),I===124?(e.enter("tableCellDivider"),e.consume(I),e.exit("tableCellDivider"),a=!0,d):(e.enter("data"),f(I)))}function f(I){return I===null||I===124||ce(I)?(e.exit("data"),d(I)):(e.consume(I),I===92?h:f)}function h(I){return I===92||I===124?(e.consume(I),f):f(I)}function p(I){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(I):(e.enter("tableDelimiterRow"),a=!1,J(I)?ne(e,T,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(I):T(I))}function T(I){return I===45||I===58?N(I):I===124?(a=!0,e.enter("tableCellDivider"),e.consume(I),e.exit("tableCellDivider"),C):P(I)}function C(I){return J(I)?ne(e,N,"whitespace")(I):N(I)}function N(I){return I===58?(u+=1,a=!0,e.enter("tableDelimiterMarker"),e.consume(I),e.exit("tableDelimiterMarker"),m):I===45?(u+=1,m(I)):I===null||X(I)?w(I):P(I)}function m(I){return I===45?(e.enter("tableDelimiterFiller"),E(I)):P(I)}function E(I){return I===45?(e.consume(I),E):I===58?(a=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(I),e.exit("tableDelimiterMarker"),y):(e.exit("tableDelimiterFiller"),y(I))}function y(I){return J(I)?ne(e,w,"whitespace")(I):w(I)}function w(I){return I===124?T(I):I===null||X(I)?!a||i!==u?P(I):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(I)):P(I)}function P(I){return n(I)}function x(I){return e.enter("tableRow"),F(I)}function F(I){return I===124?(e.enter("tableCellDivider"),e.consume(I),e.exit("tableCellDivider"),F):I===null||X(I)?(e.exit("tableRow"),t(I)):J(I)?ne(e,F,"whitespace")(I):(e.enter("data"),H(I))}function H(I){return I===null||I===124||ce(I)?(e.exit("data"),F(I)):(e.consume(I),I===92?K:H)}function K(I){return I===92||I===124?(e.consume(I),H):H(I)}}function jA(e,t){let n=-1,r=!0,i=0,u=[0,0,0,0],a=[0,0,0,0],s=!1,l=0,c,d,f;const h=new BA;for(;++n<e.length;){const p=e[n],T=p[1];p[0]==="enter"?T.type==="tableHead"?(s=!1,l!==0&&(m0(h,t,l,c,d),d=void 0,l=0),c={type:"table",start:Object.assign({},T.start),end:Object.assign({},T.end)},h.add(n,0,[["enter",c,t]])):T.type==="tableRow"||T.type==="tableDelimiterRow"?(r=!0,f=void 0,u=[0,0,0,0],a=[0,n+1,0,0],s&&(s=!1,d={type:"tableBody",start:Object.assign({},T.start),end:Object.assign({},T.end)},h.add(n,0,[["enter",d,t]])),i=T.type==="tableDelimiterRow"?2:d?3:1):i&&(T.type==="data"||T.type==="tableDelimiterMarker"||T.type==="tableDelimiterFiller")?(r=!1,a[2]===0&&(u[1]!==0&&(a[0]=a[1],f=zu(h,t,u,i,void 0,f),u=[0,0,0,0]),a[2]=n)):T.type==="tableCellDivider"&&(r?r=!1:(u[1]!==0&&(a[0]=a[1],f=zu(h,t,u,i,void 0,f)),u=a,a=[u[1],n,0,0])):T.type==="tableHead"?(s=!0,l=n):T.type==="tableRow"||T.type==="tableDelimiterRow"?(l=n,u[1]!==0?(a[0]=a[1],f=zu(h,t,u,i,n,f)):a[1]!==0&&(f=zu(h,t,a,i,n,f)),i=0):i&&(T.type==="data"||T.type==="tableDelimiterMarker"||T.type==="tableDelimiterFiller")&&(a[3]=n)}for(l!==0&&m0(h,t,l,c,d),h.consume(t.events),n=-1;++n<t.events.length;){const p=t.events[n];p[0]==="enter"&&p[1].type==="table"&&(p[1]._align=HA(t.events,n))}return e}function zu(e,t,n,r,i,u){const a=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",s="tableContent";n[0]!==0&&(u.end=Object.assign({},mr(t.events,n[0])),e.add(n[0],0,[["exit",u,t]]));const l=mr(t.events,n[1]);if(u={type:a,start:Object.assign({},l),end:Object.assign({},l)},e.add(n[1],0,[["enter",u,t]]),n[2]!==0){const c=mr(t.events,n[2]),d=mr(t.events,n[3]),f={type:s,start:Object.assign({},c),end:Object.assign({},d)};if(e.add(n[2],0,[["enter",f,t]]),r!==2){const h=t.events[n[2]],p=t.events[n[3]];if(h[1].end=Object.assign({},p[1].end),h[1].type="chunkText",h[1].contentType="text",n[3]>n[2]+1){const T=n[2]+1,C=n[3]-n[2]-1;e.add(T,C,[])}}e.add(n[3]+1,0,[["exit",f,t]])}return i!==void 0&&(u.end=Object.assign({},mr(t.events,i)),e.add(i,0,[["exit",u,t]]),u=void 0),u}function m0(e,t,n,r,i){const u=[],a=mr(t.events,n);i&&(i.end=Object.assign({},a),u.push(["exit",i,t])),r.end=Object.assign({},a),u.push(["exit",r,t]),e.add(n+1,0,u)}function mr(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const VA={name:"tasklistCheck",tokenize:YA};function WA(){return{text:{91:VA}}}function YA(e,t,n){const r=this;return i;function i(l){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(l):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),u)}function u(l){return ce(l)?(e.enter("taskListCheckValueUnchecked"),e.consume(l),e.exit("taskListCheckValueUnchecked"),a):l===88||l===120?(e.enter("taskListCheckValueChecked"),e.consume(l),e.exit("taskListCheckValueChecked"),a):n(l)}function a(l){return l===93?(e.enter("taskListCheckMarker"),e.consume(l),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),s):n(l)}function s(l){return X(l)?t(l):J(l)?e.check({tokenize:XA},t,n)(l):n(l)}}function XA(e,t,n){return ne(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function KA(e){return wm([TA(),IA(),MA(e),UA(),WA()])}const QA={};function $A(e){const t=this,n=e||QA,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),u=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),a=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(KA(n)),u.push(pA()),a.push(mA(n))}const g0=/[#.]/g;function GA(e,t){const n=e||"",r={};let i=0,u,a;for(;i<n.length;){g0.lastIndex=i;const s=g0.exec(n),l=n.slice(i,s?s.index:n.length);l&&(u?u==="#"?r.id=l:Array.isArray(r.className)?r.className.push(l):r.className=[l]:a=l,i+=l.length),s&&(u=s[0],i++)}return{type:"element",tagName:a||t||"div",properties:r,children:[]}}function C1(e,t,n){const r=n?e6(n):void 0;function i(u,a,...s){let l;if(u==null){l={type:"root",children:[]};const c=a;s.unshift(c)}else{l=GA(u,t);const c=l.tagName.toLowerCase(),d=r?r.get(c):void 0;if(l.tagName=d||c,qA(a))s.unshift(a);else for(const[f,h]of Object.entries(a))JA(e,l.properties,f,h)}for(const c of s)ho(l.children,c);return l.type==="element"&&l.tagName==="template"&&(l.content={type:"root",children:l.children},l.children=[]),l}return i}function qA(e){if(e===null||typeof e!="object"||Array.isArray(e))return!0;if(typeof e.type!="string")return!1;const t=e,n=Object.keys(e);for(const r of n){const i=t[r];if(i&&typeof i=="object"){if(!Array.isArray(i))return!0;const u=i;for(const a of u)if(typeof a!="number"&&typeof a!="string")return!0}}return!!("children"in e&&Array.isArray(e.children))}function JA(e,t,n,r){const i=ts(e,n);let u;if(r!=null){if(typeof r=="number"){if(Number.isNaN(r))return;u=r}else typeof r=="boolean"?u=r:typeof r=="string"?i.spaceSeparated?u=Cd(r):i.commaSeparated?u=Td(r):i.commaOrSpaceSeparated?u=Cd(Td(r).join(" ")):u=E0(i,i.property,r):Array.isArray(r)?u=[...r]:u=i.property==="style"?ZA(r):String(r);if(Array.isArray(u)){const a=[];for(const s of u)a.push(E0(i,i.property,s));u=a}i.property==="className"&&Array.isArray(t.className)&&(u=t.className.concat(u)),t[i.property]=u}}function ho(e,t){if(t!=null)if(typeof t=="number"||typeof t=="string")e.push({type:"text",value:String(t)});else if(Array.isArray(t))for(const n of t)ho(e,n);else if(typeof t=="object"&&"type"in t)t.type==="root"?ho(e,t.children):e.push(t);else throw new Error("Expected node, nodes, or string, got `"+t+"`")}function E0(e,t,n){if(typeof n=="string"){if(e.number&&n&&!Number.isNaN(Number(n)))return Number(n);if((e.boolean||e.overloadedBoolean)&&(n===""||uu(n)===uu(t)))return!0}return n}function ZA(e){const t=[];for(const[n,r]of Object.entries(e))t.push([n,r].join(": "));return t.join("; ")}function e6(e){const t=new Map;for(const n of e)t.set(n.toLowerCase(),n);return t}const t6=["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"],n6=C1(mu,"div"),r6=C1(Dn,"g",t6);function i6(e){const t=String(e),n=[];return{toOffset:i,toPoint:r};function r(u){if(typeof u=="number"&&u>-1&&u<=t.length){let a=0;for(;;){let s=n[a];if(s===void 0){const l=T0(t,n[a-1]);s=l===-1?t.length+1:l+1,n[a]=s}if(s>u)return{line:a+1,column:u-(a>0?n[a-1]:0)+1,offset:u};a++}}}function i(u){if(u&&typeof u.line=="number"&&typeof u.column=="number"&&!Number.isNaN(u.line)&&!Number.isNaN(u.column)){for(;n.length<u.line;){const s=n[n.length-1],l=T0(t,s),c=l===-1?t.length+1:l+1;if(s===c)break;n.push(c)}const a=(u.line>1?n[u.line-2]:0)+u.column-1;if(a<n[u.line-1])return a}}}function T0(e,t){const n=e.indexOf("\r",t),r=e.indexOf(`
`,t);return r===-1?n:n===-1||n+1===r?r:n<r?n:r}const Xn={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},A1={}.hasOwnProperty,u6=Object.prototype;function a6(e,t){const n=t||{};return Bc({file:n.file||void 0,location:!1,schema:n.space==="svg"?Dn:mu,verbose:n.verbose||!1},e)}function Bc(e,t){let n;switch(t.nodeName){case"#comment":{const r=t;return n={type:"comment",value:r.data},ra(e,r,n),n}case"#document":case"#document-fragment":{const r=t,i="mode"in r?r.mode==="quirks"||r.mode==="limited-quirks":!1;if(n={type:"root",children:S1(e,t.childNodes),data:{quirksMode:i}},e.file&&e.location){const u=String(e.file),a=i6(u),s=a.toPoint(0),l=a.toPoint(u.length);n.position={start:s,end:l}}return n}case"#documentType":{const r=t;return n={type:"doctype"},ra(e,r,n),n}case"#text":{const r=t;return n={type:"text",value:r.value},ra(e,r,n),n}default:return n=s6(e,t),n}}function S1(e,t){let n=-1;const r=[];for(;++n<t.length;){const i=Bc(e,t[n]);r.push(i)}return r}function s6(e,t){const n=e.schema;e.schema=t.namespaceURI===Xn.svg?Dn:mu;let r=-1;const i={};for(;++r<t.attrs.length;){const s=t.attrs[r],l=(s.prefix?s.prefix+":":"")+s.name;A1.call(u6,l)||(i[l]=s.value)}const a=(e.schema.space==="svg"?r6:n6)(t.tagName,i,S1(e,t.childNodes));if(ra(e,t,a),a.tagName==="template"){const s=t,l=s.sourceCodeLocation,c=l&&l.startTag&&vr(l.startTag),d=l&&l.endTag&&vr(l.endTag),f=Bc(e,s.content);c&&d&&e.file&&(f.position={start:c.end,end:d.start}),a.content=f}return e.schema=n,a}function ra(e,t,n){if("sourceCodeLocation"in t&&t.sourceCodeLocation&&e.file){const r=l6(e,n,t.sourceCodeLocation);r&&(e.location=!0,n.position=r)}}function l6(e,t,n){const r=vr(n);if(t.type==="element"){const i=t.children[t.children.length-1];if(r&&!n.endTag&&i&&i.position&&i.position.end&&(r.end=Object.assign({},i.position.end)),e.verbose){const u={};let a;if(n.attrs)for(a in n.attrs)A1.call(n.attrs,a)&&(u[ts(e.schema,a).property]=vr(n.attrs[a]));n.startTag;const s=vr(n.startTag),l=n.endTag?vr(n.endTag):void 0,c={opening:s};l&&(c.closing=l),c.properties=u,t.data={position:c}}}return r}function vr(e){const t=y0({line:e.startLine,column:e.startCol,offset:e.startOffset}),n=y0({line:e.endLine,column:e.endCol,offset:e.endOffset});return t||n?{start:t,end:n}:void 0}function y0(e){return e.line&&e.column?e:void 0}const o6={},c6={}.hasOwnProperty,N1=r1("type",{handlers:{root:d6,element:E6,text:m6,comment:g6,doctype:p6}});function f6(e,t){const r=(t||o6).space;return N1(e,r==="svg"?Dn:mu)}function d6(e,t){const n={nodeName:"#document",mode:(e.data||{}).quirksMode?"quirks":"no-quirks",childNodes:[]};return n.childNodes=Fc(e.children,n,t),Zr(e,n),n}function h6(e,t){const n={nodeName:"#document-fragment",childNodes:[]};return n.childNodes=Fc(e.children,n,t),Zr(e,n),n}function p6(e){const t={nodeName:"#documentType",name:"html",publicId:"",systemId:"",parentNode:null};return Zr(e,t),t}function m6(e){const t={nodeName:"#text",value:e.value,parentNode:null};return Zr(e,t),t}function g6(e){const t={nodeName:"#comment",data:e.value,parentNode:null};return Zr(e,t),t}function E6(e,t){const n=t;let r=n;e.type==="element"&&e.tagName.toLowerCase()==="svg"&&n.space==="html"&&(r=Dn);const i=[];let u;if(e.properties){for(u in e.properties)if(u!=="children"&&c6.call(e.properties,u)){const l=T6(r,u,e.properties[u]);l&&i.push(l)}}const a=r.space,s={nodeName:e.tagName,tagName:e.tagName,attrs:i,namespaceURI:Xn[a],childNodes:[],parentNode:null};return s.childNodes=Fc(e.children,s,r),Zr(e,s),e.tagName==="template"&&e.content&&(s.content=h6(e.content,r)),s}function T6(e,t,n){const r=ts(e,t);if(n===!1||n===null||n===void 0||typeof n=="number"&&Number.isNaN(n)||!n&&r.boolean)return;Array.isArray(n)&&(n=r.commaSeparated?mm(n):Cm(n));const i={name:r.attribute,value:n===!0?"":String(n)};if(r.space&&r.space!=="html"&&r.space!=="svg"){const u=i.name.indexOf(":");u<0?i.prefix="":(i.name=i.name.slice(u+1),i.prefix=r.attribute.slice(0,u)),i.namespace=Xn[r.space]}return i}function Fc(e,t,n){let r=-1;const i=[];if(e)for(;++r<e.length;){const u=N1(e[r],n);u.parentNode=t,i.push(u)}return i}function Zr(e,t){const n=e.position;n&&n.start&&n.end&&(n.start.offset,n.end.offset,t.sourceCodeLocation={startLine:n.start.line,startCol:n.start.column,startOffset:n.start.offset,endLine:n.end.line,endCol:n.end.column,endOffset:n.end.offset})}const y6=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"],_6=new Set([65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111]),ge="�";var g;(function(e){e[e.EOF=-1]="EOF",e[e.NULL=0]="NULL",e[e.TABULATION=9]="TABULATION",e[e.CARRIAGE_RETURN=13]="CARRIAGE_RETURN",e[e.LINE_FEED=10]="LINE_FEED",e[e.FORM_FEED=12]="FORM_FEED",e[e.SPACE=32]="SPACE",e[e.EXCLAMATION_MARK=33]="EXCLAMATION_MARK",e[e.QUOTATION_MARK=34]="QUOTATION_MARK",e[e.AMPERSAND=38]="AMPERSAND",e[e.APOSTROPHE=39]="APOSTROPHE",e[e.HYPHEN_MINUS=45]="HYPHEN_MINUS",e[e.SOLIDUS=47]="SOLIDUS",e[e.DIGIT_0=48]="DIGIT_0",e[e.DIGIT_9=57]="DIGIT_9",e[e.SEMICOLON=59]="SEMICOLON",e[e.LESS_THAN_SIGN=60]="LESS_THAN_SIGN",e[e.EQUALS_SIGN=61]="EQUALS_SIGN",e[e.GREATER_THAN_SIGN=62]="GREATER_THAN_SIGN",e[e.QUESTION_MARK=63]="QUESTION_MARK",e[e.LATIN_CAPITAL_A=65]="LATIN_CAPITAL_A",e[e.LATIN_CAPITAL_Z=90]="LATIN_CAPITAL_Z",e[e.RIGHT_SQUARE_BRACKET=93]="RIGHT_SQUARE_BRACKET",e[e.GRAVE_ACCENT=96]="GRAVE_ACCENT",e[e.LATIN_SMALL_A=97]="LATIN_SMALL_A",e[e.LATIN_SMALL_Z=122]="LATIN_SMALL_Z"})(g||(g={}));const Je={DASH_DASH:"--",CDATA_START:"[CDATA[",DOCTYPE:"doctype",SCRIPT:"script",PUBLIC:"public",SYSTEM:"system"};function x1(e){return e>=55296&&e<=57343}function b6(e){return e>=56320&&e<=57343}function k6(e,t){return(e-55296)*1024+9216+t}function I1(e){return e!==32&&e!==10&&e!==13&&e!==9&&e!==12&&e>=1&&e<=31||e>=127&&e<=159}function v1(e){return e>=64976&&e<=65007||_6.has(e)}var R;(function(e){e.controlCharacterInInputStream="control-character-in-input-stream",e.noncharacterInInputStream="noncharacter-in-input-stream",e.surrogateInInputStream="surrogate-in-input-stream",e.nonVoidHtmlElementStartTagWithTrailingSolidus="non-void-html-element-start-tag-with-trailing-solidus",e.endTagWithAttributes="end-tag-with-attributes",e.endTagWithTrailingSolidus="end-tag-with-trailing-solidus",e.unexpectedSolidusInTag="unexpected-solidus-in-tag",e.unexpectedNullCharacter="unexpected-null-character",e.unexpectedQuestionMarkInsteadOfTagName="unexpected-question-mark-instead-of-tag-name",e.invalidFirstCharacterOfTagName="invalid-first-character-of-tag-name",e.unexpectedEqualsSignBeforeAttributeName="unexpected-equals-sign-before-attribute-name",e.missingEndTagName="missing-end-tag-name",e.unexpectedCharacterInAttributeName="unexpected-character-in-attribute-name",e.unknownNamedCharacterReference="unknown-named-character-reference",e.missingSemicolonAfterCharacterReference="missing-semicolon-after-character-reference",e.unexpectedCharacterAfterDoctypeSystemIdentifier="unexpected-character-after-doctype-system-identifier",e.unexpectedCharacterInUnquotedAttributeValue="unexpected-character-in-unquoted-attribute-value",e.eofBeforeTagName="eof-before-tag-name",e.eofInTag="eof-in-tag",e.missingAttributeValue="missing-attribute-value",e.missingWhitespaceBetweenAttributes="missing-whitespace-between-attributes",e.missingWhitespaceAfterDoctypePublicKeyword="missing-whitespace-after-doctype-public-keyword",e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers="missing-whitespace-between-doctype-public-and-system-identifiers",e.missingWhitespaceAfterDoctypeSystemKeyword="missing-whitespace-after-doctype-system-keyword",e.missingQuoteBeforeDoctypePublicIdentifier="missing-quote-before-doctype-public-identifier",e.missingQuoteBeforeDoctypeSystemIdentifier="missing-quote-before-doctype-system-identifier",e.missingDoctypePublicIdentifier="missing-doctype-public-identifier",e.missingDoctypeSystemIdentifier="missing-doctype-system-identifier",e.abruptDoctypePublicIdentifier="abrupt-doctype-public-identifier",e.abruptDoctypeSystemIdentifier="abrupt-doctype-system-identifier",e.cdataInHtmlContent="cdata-in-html-content",e.incorrectlyOpenedComment="incorrectly-opened-comment",e.eofInScriptHtmlCommentLikeText="eof-in-script-html-comment-like-text",e.eofInDoctype="eof-in-doctype",e.nestedComment="nested-comment",e.abruptClosingOfEmptyComment="abrupt-closing-of-empty-comment",e.eofInComment="eof-in-comment",e.incorrectlyClosedComment="incorrectly-closed-comment",e.eofInCdata="eof-in-cdata",e.absenceOfDigitsInNumericCharacterReference="absence-of-digits-in-numeric-character-reference",e.nullCharacterReference="null-character-reference",e.surrogateCharacterReference="surrogate-character-reference",e.characterReferenceOutsideUnicodeRange="character-reference-outside-unicode-range",e.controlCharacterReference="control-character-reference",e.noncharacterCharacterReference="noncharacter-character-reference",e.missingWhitespaceBeforeDoctypeName="missing-whitespace-before-doctype-name",e.missingDoctypeName="missing-doctype-name",e.invalidCharacterSequenceAfterDoctypeName="invalid-character-sequence-after-doctype-name",e.duplicateAttribute="duplicate-attribute",e.nonConformingDoctype="non-conforming-doctype",e.missingDoctype="missing-doctype",e.misplacedDoctype="misplaced-doctype",e.endTagWithoutMatchingOpenElement="end-tag-without-matching-open-element",e.closingOfElementWithOpenChildElements="closing-of-element-with-open-child-elements",e.disallowedContentInNoscriptInHead="disallowed-content-in-noscript-in-head",e.openElementsLeftAfterEof="open-elements-left-after-eof",e.abandonedHeadElementChild="abandoned-head-element-child",e.misplacedStartTagForHeadElement="misplaced-start-tag-for-head-element",e.nestedNoscriptInHead="nested-noscript-in-head",e.eofInElementThatCanContainOnlyText="eof-in-element-that-can-contain-only-text"})(R||(R={}));const C6=65536;class A6{constructor(t){this.handler=t,this.html="",this.pos=-1,this.lastGapPos=-2,this.gapStack=[],this.skipNextNewLine=!1,this.lastChunkWritten=!1,this.endOfChunkHit=!1,this.bufferWaterline=C6,this.isEol=!1,this.lineStartPos=0,this.droppedBufferSize=0,this.line=1,this.lastErrOffset=-1}get col(){return this.pos-this.lineStartPos+ +(this.lastGapPos!==this.pos)}get offset(){return this.droppedBufferSize+this.pos}getError(t,n){const{line:r,col:i,offset:u}=this,a=i+n,s=u+n;return{code:t,startLine:r,endLine:r,startCol:a,endCol:a,startOffset:s,endOffset:s}}_err(t){this.handler.onParseError&&this.lastErrOffset!==this.offset&&(this.lastErrOffset=this.offset,this.handler.onParseError(this.getError(t,0)))}_addGap(){this.gapStack.push(this.lastGapPos),this.lastGapPos=this.pos}_processSurrogate(t){if(this.pos!==this.html.length-1){const n=this.html.charCodeAt(this.pos+1);if(b6(n))return this.pos++,this._addGap(),k6(t,n)}else if(!this.lastChunkWritten)return this.endOfChunkHit=!0,g.EOF;return this._err(R.surrogateInInputStream),t}willDropParsedChunk(){return this.pos>this.bufferWaterline}dropParsedChunk(){this.willDropParsedChunk()&&(this.html=this.html.substring(this.pos),this.lineStartPos-=this.pos,this.droppedBufferSize+=this.pos,this.pos=0,this.lastGapPos=-2,this.gapStack.length=0)}write(t,n){this.html.length>0?this.html+=t:this.html=t,this.endOfChunkHit=!1,this.lastChunkWritten=n}insertHtmlAtCurrentPos(t){this.html=this.html.substring(0,this.pos+1)+t+this.html.substring(this.pos+1),this.endOfChunkHit=!1}startsWith(t,n){if(this.pos+t.length>this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,!1;if(n)return this.html.startsWith(t,this.pos);for(let r=0;r<t.length;r++)if((this.html.charCodeAt(this.pos+r)|32)!==t.charCodeAt(r))return!1;return!0}peek(t){const n=this.pos+t;if(n>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,g.EOF;const r=this.html.charCodeAt(n);return r===g.CARRIAGE_RETURN?g.LINE_FEED:r}advance(){if(this.pos++,this.isEol&&(this.isEol=!1,this.line++,this.lineStartPos=this.pos),this.pos>=this.html.length)return this.endOfChunkHit=!this.lastChunkWritten,g.EOF;let t=this.html.charCodeAt(this.pos);return t===g.CARRIAGE_RETURN?(this.isEol=!0,this.skipNextNewLine=!0,g.LINE_FEED):t===g.LINE_FEED&&(this.isEol=!0,this.skipNextNewLine)?(this.line--,this.skipNextNewLine=!1,this._addGap(),this.advance()):(this.skipNextNewLine=!1,x1(t)&&(t=this._processSurrogate(t)),this.handler.onParseError===null||t>31&&t<127||t===g.LINE_FEED||t===g.CARRIAGE_RETURN||t>159&&t<64976||this._checkForProblematicCharacters(t),t)}_checkForProblematicCharacters(t){I1(t)?this._err(R.controlCharacterInInputStream):v1(t)&&this._err(R.noncharacterInInputStream)}retreat(t){for(this.pos-=t;this.pos<this.lastGapPos;)this.lastGapPos=this.gapStack.pop(),this.pos--;this.isEol=!1}}var q;(function(e){e[e.CHARACTER=0]="CHARACTER",e[e.NULL_CHARACTER=1]="NULL_CHARACTER",e[e.WHITESPACE_CHARACTER=2]="WHITESPACE_CHARACTER",e[e.START_TAG=3]="START_TAG",e[e.END_TAG=4]="END_TAG",e[e.COMMENT=5]="COMMENT",e[e.DOCTYPE=6]="DOCTYPE",e[e.EOF=7]="EOF",e[e.HIBERNATION=8]="HIBERNATION"})(q||(q={}));function w1(e,t){for(let n=e.attrs.length-1;n>=0;n--)if(e.attrs[n].name===t)return e.attrs[n].value;return null}const S6=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),N6=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]);function x6(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=N6.get(e))!==null&&t!==void 0?t:e}var De;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(De||(De={}));const I6=32;var yn;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(yn||(yn={}));function po(e){return e>=De.ZERO&&e<=De.NINE}function v6(e){return e>=De.UPPER_A&&e<=De.UPPER_F||e>=De.LOWER_A&&e<=De.LOWER_F}function w6(e){return e>=De.UPPER_A&&e<=De.UPPER_Z||e>=De.LOWER_A&&e<=De.LOWER_Z||po(e)}function R6(e){return e===De.EQUALS||w6(e)}var Pe;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(Pe||(Pe={}));var $t;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})($t||($t={}));class O6{constructor(t,n,r){this.decodeTree=t,this.emitCodePoint=n,this.errors=r,this.state=Pe.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=$t.Strict}startEntity(t){this.decodeMode=t,this.state=Pe.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,n){switch(this.state){case Pe.EntityStart:return t.charCodeAt(n)===De.NUM?(this.state=Pe.NumericStart,this.consumed+=1,this.stateNumericStart(t,n+1)):(this.state=Pe.NamedEntity,this.stateNamedEntity(t,n));case Pe.NumericStart:return this.stateNumericStart(t,n);case Pe.NumericDecimal:return this.stateNumericDecimal(t,n);case Pe.NumericHex:return this.stateNumericHex(t,n);case Pe.NamedEntity:return this.stateNamedEntity(t,n)}}stateNumericStart(t,n){return n>=t.length?-1:(t.charCodeAt(n)|I6)===De.LOWER_X?(this.state=Pe.NumericHex,this.consumed+=1,this.stateNumericHex(t,n+1)):(this.state=Pe.NumericDecimal,this.stateNumericDecimal(t,n))}addToNumericResult(t,n,r,i){if(n!==r){const u=r-n;this.result=this.result*Math.pow(i,u)+Number.parseInt(t.substr(n,u),i),this.consumed+=u}}stateNumericHex(t,n){const r=n;for(;n<t.length;){const i=t.charCodeAt(n);if(po(i)||v6(i))n+=1;else return this.addToNumericResult(t,r,n,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(t,r,n,16),-1}stateNumericDecimal(t,n){const r=n;for(;n<t.length;){const i=t.charCodeAt(n);if(po(i))n+=1;else return this.addToNumericResult(t,r,n,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(t,r,n,10),-1}emitNumericEntity(t,n){var r;if(this.consumed<=n)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===De.SEMI)this.consumed+=1;else if(this.decodeMode===$t.Strict)return 0;return this.emitCodePoint(x6(this.result),this.consumed),this.errors&&(t!==De.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,n){const{decodeTree:r}=this;let i=r[this.treeIndex],u=(i&yn.VALUE_LENGTH)>>14;for(;n<t.length;n++,this.excess++){const a=t.charCodeAt(n);if(this.treeIndex=P6(r,i,this.treeIndex+Math.max(1,u),a),this.treeIndex<0)return this.result===0||this.decodeMode===$t.Attribute&&(u===0||R6(a))?0:this.emitNotTerminatedNamedEntity();if(i=r[this.treeIndex],u=(i&yn.VALUE_LENGTH)>>14,u!==0){if(a===De.SEMI)return this.emitNamedEntityData(this.treeIndex,u,this.consumed+this.excess);this.decodeMode!==$t.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:n,decodeTree:r}=this,i=(r[n]&yn.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,i,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,n,r){const{decodeTree:i}=this;return this.emitCodePoint(n===1?i[t]&~yn.VALUE_LENGTH:i[t+1],r),n===3&&this.emitCodePoint(i[t+2],r),r}end(){var t;switch(this.state){case Pe.NamedEntity:return this.result!==0&&(this.decodeMode!==$t.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case Pe.NumericDecimal:return this.emitNumericEntity(0,2);case Pe.NumericHex:return this.emitNumericEntity(0,3);case Pe.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Pe.EntityStart:return 0}}}function P6(e,t,n,r){const i=(t&yn.BRANCH_LENGTH)>>7,u=t&yn.JUMP_TABLE;if(i===0)return u!==0&&r===u?n:-1;if(u){const l=r-u;return l<0||l>=i?-1:e[n+l]-1}let a=n,s=a+i-1;for(;a<=s;){const l=a+s>>>1,c=e[l];if(c<r)a=l+1;else if(c>r)s=l-1;else return e[l+i]}return-1}var L;(function(e){e.HTML="http://www.w3.org/1999/xhtml",e.MATHML="http://www.w3.org/1998/Math/MathML",e.SVG="http://www.w3.org/2000/svg",e.XLINK="http://www.w3.org/1999/xlink",e.XML="http://www.w3.org/XML/1998/namespace",e.XMLNS="http://www.w3.org/2000/xmlns/"})(L||(L={}));var Gn;(function(e){e.TYPE="type",e.ACTION="action",e.ENCODING="encoding",e.PROMPT="prompt",e.NAME="name",e.COLOR="color",e.FACE="face",e.SIZE="size"})(Gn||(Gn={}));var Tt;(function(e){e.NO_QUIRKS="no-quirks",e.QUIRKS="quirks",e.LIMITED_QUIRKS="limited-quirks"})(Tt||(Tt={}));var v;(function(e){e.A="a",e.ADDRESS="address",e.ANNOTATION_XML="annotation-xml",e.APPLET="applet",e.AREA="area",e.ARTICLE="article",e.ASIDE="aside",e.B="b",e.BASE="base",e.BASEFONT="basefont",e.BGSOUND="bgsound",e.BIG="big",e.BLOCKQUOTE="blockquote",e.BODY="body",e.BR="br",e.BUTTON="button",e.CAPTION="caption",e.CENTER="center",e.CODE="code",e.COL="col",e.COLGROUP="colgroup",e.DD="dd",e.DESC="desc",e.DETAILS="details",e.DIALOG="dialog",e.DIR="dir",e.DIV="div",e.DL="dl",e.DT="dt",e.EM="em",e.EMBED="embed",e.FIELDSET="fieldset",e.FIGCAPTION="figcaption",e.FIGURE="figure",e.FONT="font",e.FOOTER="footer",e.FOREIGN_OBJECT="foreignObject",e.FORM="form",e.FRAME="frame",e.FRAMESET="frameset",e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e.H5="h5",e.H6="h6",e.HEAD="head",e.HEADER="header",e.HGROUP="hgroup",e.HR="hr",e.HTML="html",e.I="i",e.IMG="img",e.IMAGE="image",e.INPUT="input",e.IFRAME="iframe",e.KEYGEN="keygen",e.LABEL="label",e.LI="li",e.LINK="link",e.LISTING="listing",e.MAIN="main",e.MALIGNMARK="malignmark",e.MARQUEE="marquee",e.MATH="math",e.MENU="menu",e.META="meta",e.MGLYPH="mglyph",e.MI="mi",e.MO="mo",e.MN="mn",e.MS="ms",e.MTEXT="mtext",e.NAV="nav",e.NOBR="nobr",e.NOFRAMES="noframes",e.NOEMBED="noembed",e.NOSCRIPT="noscript",e.OBJECT="object",e.OL="ol",e.OPTGROUP="optgroup",e.OPTION="option",e.P="p",e.PARAM="param",e.PLAINTEXT="plaintext",e.PRE="pre",e.RB="rb",e.RP="rp",e.RT="rt",e.RTC="rtc",e.RUBY="ruby",e.S="s",e.SCRIPT="script",e.SEARCH="search",e.SECTION="section",e.SELECT="select",e.SOURCE="source",e.SMALL="small",e.SPAN="span",e.STRIKE="strike",e.STRONG="strong",e.STYLE="style",e.SUB="sub",e.SUMMARY="summary",e.SUP="sup",e.TABLE="table",e.TBODY="tbody",e.TEMPLATE="template",e.TEXTAREA="textarea",e.TFOOT="tfoot",e.TD="td",e.TH="th",e.THEAD="thead",e.TITLE="title",e.TR="tr",e.TRACK="track",e.TT="tt",e.U="u",e.UL="ul",e.SVG="svg",e.VAR="var",e.WBR="wbr",e.XMP="xmp"})(v||(v={}));var o;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.A=1]="A",e[e.ADDRESS=2]="ADDRESS",e[e.ANNOTATION_XML=3]="ANNOTATION_XML",e[e.APPLET=4]="APPLET",e[e.AREA=5]="AREA",e[e.ARTICLE=6]="ARTICLE",e[e.ASIDE=7]="ASIDE",e[e.B=8]="B",e[e.BASE=9]="BASE",e[e.BASEFONT=10]="BASEFONT",e[e.BGSOUND=11]="BGSOUND",e[e.BIG=12]="BIG",e[e.BLOCKQUOTE=13]="BLOCKQUOTE",e[e.BODY=14]="BODY",e[e.BR=15]="BR",e[e.BUTTON=16]="BUTTON",e[e.CAPTION=17]="CAPTION",e[e.CENTER=18]="CENTER",e[e.CODE=19]="CODE",e[e.COL=20]="COL",e[e.COLGROUP=21]="COLGROUP",e[e.DD=22]="DD",e[e.DESC=23]="DESC",e[e.DETAILS=24]="DETAILS",e[e.DIALOG=25]="DIALOG",e[e.DIR=26]="DIR",e[e.DIV=27]="DIV",e[e.DL=28]="DL",e[e.DT=29]="DT",e[e.EM=30]="EM",e[e.EMBED=31]="EMBED",e[e.FIELDSET=32]="FIELDSET",e[e.FIGCAPTION=33]="FIGCAPTION",e[e.FIGURE=34]="FIGURE",e[e.FONT=35]="FONT",e[e.FOOTER=36]="FOOTER",e[e.FOREIGN_OBJECT=37]="FOREIGN_OBJECT",e[e.FORM=38]="FORM",e[e.FRAME=39]="FRAME",e[e.FRAMESET=40]="FRAMESET",e[e.H1=41]="H1",e[e.H2=42]="H2",e[e.H3=43]="H3",e[e.H4=44]="H4",e[e.H5=45]="H5",e[e.H6=46]="H6",e[e.HEAD=47]="HEAD",e[e.HEADER=48]="HEADER",e[e.HGROUP=49]="HGROUP",e[e.HR=50]="HR",e[e.HTML=51]="HTML",e[e.I=52]="I",e[e.IMG=53]="IMG",e[e.IMAGE=54]="IMAGE",e[e.INPUT=55]="INPUT",e[e.IFRAME=56]="IFRAME",e[e.KEYGEN=57]="KEYGEN",e[e.LABEL=58]="LABEL",e[e.LI=59]="LI",e[e.LINK=60]="LINK",e[e.LISTING=61]="LISTING",e[e.MAIN=62]="MAIN",e[e.MALIGNMARK=63]="MALIGNMARK",e[e.MARQUEE=64]="MARQUEE",e[e.MATH=65]="MATH",e[e.MENU=66]="MENU",e[e.META=67]="META",e[e.MGLYPH=68]="MGLYPH",e[e.MI=69]="MI",e[e.MO=70]="MO",e[e.MN=71]="MN",e[e.MS=72]="MS",e[e.MTEXT=73]="MTEXT",e[e.NAV=74]="NAV",e[e.NOBR=75]="NOBR",e[e.NOFRAMES=76]="NOFRAMES",e[e.NOEMBED=77]="NOEMBED",e[e.NOSCRIPT=78]="NOSCRIPT",e[e.OBJECT=79]="OBJECT",e[e.OL=80]="OL",e[e.OPTGROUP=81]="OPTGROUP",e[e.OPTION=82]="OPTION",e[e.P=83]="P",e[e.PARAM=84]="PARAM",e[e.PLAINTEXT=85]="PLAINTEXT",e[e.PRE=86]="PRE",e[e.RB=87]="RB",e[e.RP=88]="RP",e[e.RT=89]="RT",e[e.RTC=90]="RTC",e[e.RUBY=91]="RUBY",e[e.S=92]="S",e[e.SCRIPT=93]="SCRIPT",e[e.SEARCH=94]="SEARCH",e[e.SECTION=95]="SECTION",e[e.SELECT=96]="SELECT",e[e.SOURCE=97]="SOURCE",e[e.SMALL=98]="SMALL",e[e.SPAN=99]="SPAN",e[e.STRIKE=100]="STRIKE",e[e.STRONG=101]="STRONG",e[e.STYLE=102]="STYLE",e[e.SUB=103]="SUB",e[e.SUMMARY=104]="SUMMARY",e[e.SUP=105]="SUP",e[e.TABLE=106]="TABLE",e[e.TBODY=107]="TBODY",e[e.TEMPLATE=108]="TEMPLATE",e[e.TEXTAREA=109]="TEXTAREA",e[e.TFOOT=110]="TFOOT",e[e.TD=111]="TD",e[e.TH=112]="TH",e[e.THEAD=113]="THEAD",e[e.TITLE=114]="TITLE",e[e.TR=115]="TR",e[e.TRACK=116]="TRACK",e[e.TT=117]="TT",e[e.U=118]="U",e[e.UL=119]="UL",e[e.SVG=120]="SVG",e[e.VAR=121]="VAR",e[e.WBR=122]="WBR",e[e.XMP=123]="XMP"})(o||(o={}));const L6=new Map([[v.A,o.A],[v.ADDRESS,o.ADDRESS],[v.ANNOTATION_XML,o.ANNOTATION_XML],[v.APPLET,o.APPLET],[v.AREA,o.AREA],[v.ARTICLE,o.ARTICLE],[v.ASIDE,o.ASIDE],[v.B,o.B],[v.BASE,o.BASE],[v.BASEFONT,o.BASEFONT],[v.BGSOUND,o.BGSOUND],[v.BIG,o.BIG],[v.BLOCKQUOTE,o.BLOCKQUOTE],[v.BODY,o.BODY],[v.BR,o.BR],[v.BUTTON,o.BUTTON],[v.CAPTION,o.CAPTION],[v.CENTER,o.CENTER],[v.CODE,o.CODE],[v.COL,o.COL],[v.COLGROUP,o.COLGROUP],[v.DD,o.DD],[v.DESC,o.DESC],[v.DETAILS,o.DETAILS],[v.DIALOG,o.DIALOG],[v.DIR,o.DIR],[v.DIV,o.DIV],[v.DL,o.DL],[v.DT,o.DT],[v.EM,o.EM],[v.EMBED,o.EMBED],[v.FIELDSET,o.FIELDSET],[v.FIGCAPTION,o.FIGCAPTION],[v.FIGURE,o.FIGURE],[v.FONT,o.FONT],[v.FOOTER,o.FOOTER],[v.FOREIGN_OBJECT,o.FOREIGN_OBJECT],[v.FORM,o.FORM],[v.FRAME,o.FRAME],[v.FRAMESET,o.FRAMESET],[v.H1,o.H1],[v.H2,o.H2],[v.H3,o.H3],[v.H4,o.H4],[v.H5,o.H5],[v.H6,o.H6],[v.HEAD,o.HEAD],[v.HEADER,o.HEADER],[v.HGROUP,o.HGROUP],[v.HR,o.HR],[v.HTML,o.HTML],[v.I,o.I],[v.IMG,o.IMG],[v.IMAGE,o.IMAGE],[v.INPUT,o.INPUT],[v.IFRAME,o.IFRAME],[v.KEYGEN,o.KEYGEN],[v.LABEL,o.LABEL],[v.LI,o.LI],[v.LINK,o.LINK],[v.LISTING,o.LISTING],[v.MAIN,o.MAIN],[v.MALIGNMARK,o.MALIGNMARK],[v.MARQUEE,o.MARQUEE],[v.MATH,o.MATH],[v.MENU,o.MENU],[v.META,o.META],[v.MGLYPH,o.MGLYPH],[v.MI,o.MI],[v.MO,o.MO],[v.MN,o.MN],[v.MS,o.MS],[v.MTEXT,o.MTEXT],[v.NAV,o.NAV],[v.NOBR,o.NOBR],[v.NOFRAMES,o.NOFRAMES],[v.NOEMBED,o.NOEMBED],[v.NOSCRIPT,o.NOSCRIPT],[v.OBJECT,o.OBJECT],[v.OL,o.OL],[v.OPTGROUP,o.OPTGROUP],[v.OPTION,o.OPTION],[v.P,o.P],[v.PARAM,o.PARAM],[v.PLAINTEXT,o.PLAINTEXT],[v.PRE,o.PRE],[v.RB,o.RB],[v.RP,o.RP],[v.RT,o.RT],[v.RTC,o.RTC],[v.RUBY,o.RUBY],[v.S,o.S],[v.SCRIPT,o.SCRIPT],[v.SEARCH,o.SEARCH],[v.SECTION,o.SECTION],[v.SELECT,o.SELECT],[v.SOURCE,o.SOURCE],[v.SMALL,o.SMALL],[v.SPAN,o.SPAN],[v.STRIKE,o.STRIKE],[v.STRONG,o.STRONG],[v.STYLE,o.STYLE],[v.SUB,o.SUB],[v.SUMMARY,o.SUMMARY],[v.SUP,o.SUP],[v.TABLE,o.TABLE],[v.TBODY,o.TBODY],[v.TEMPLATE,o.TEMPLATE],[v.TEXTAREA,o.TEXTAREA],[v.TFOOT,o.TFOOT],[v.TD,o.TD],[v.TH,o.TH],[v.THEAD,o.THEAD],[v.TITLE,o.TITLE],[v.TR,o.TR],[v.TRACK,o.TRACK],[v.TT,o.TT],[v.U,o.U],[v.UL,o.UL],[v.SVG,o.SVG],[v.VAR,o.VAR],[v.WBR,o.WBR],[v.XMP,o.XMP]]);function ei(e){var t;return(t=L6.get(e))!==null&&t!==void 0?t:o.UNKNOWN}const D=o,D6={[L.HTML]:new Set([D.ADDRESS,D.APPLET,D.AREA,D.ARTICLE,D.ASIDE,D.BASE,D.BASEFONT,D.BGSOUND,D.BLOCKQUOTE,D.BODY,D.BR,D.BUTTON,D.CAPTION,D.CENTER,D.COL,D.COLGROUP,D.DD,D.DETAILS,D.DIR,D.DIV,D.DL,D.DT,D.EMBED,D.FIELDSET,D.FIGCAPTION,D.FIGURE,D.FOOTER,D.FORM,D.FRAME,D.FRAMESET,D.H1,D.H2,D.H3,D.H4,D.H5,D.H6,D.HEAD,D.HEADER,D.HGROUP,D.HR,D.HTML,D.IFRAME,D.IMG,D.INPUT,D.LI,D.LINK,D.LISTING,D.MAIN,D.MARQUEE,D.MENU,D.META,D.NAV,D.NOEMBED,D.NOFRAMES,D.NOSCRIPT,D.OBJECT,D.OL,D.P,D.PARAM,D.PLAINTEXT,D.PRE,D.SCRIPT,D.SECTION,D.SELECT,D.SOURCE,D.STYLE,D.SUMMARY,D.TABLE,D.TBODY,D.TD,D.TEMPLATE,D.TEXTAREA,D.TFOOT,D.TH,D.THEAD,D.TITLE,D.TR,D.TRACK,D.UL,D.WBR,D.XMP]),[L.MATHML]:new Set([D.MI,D.MO,D.MN,D.MS,D.MTEXT,D.ANNOTATION_XML]),[L.SVG]:new Set([D.TITLE,D.FOREIGN_OBJECT,D.DESC]),[L.XLINK]:new Set,[L.XML]:new Set,[L.XMLNS]:new Set},mo=new Set([D.H1,D.H2,D.H3,D.H4,D.H5,D.H6]);v.STYLE,v.SCRIPT,v.XMP,v.IFRAME,v.NOEMBED,v.NOFRAMES,v.PLAINTEXT;var _;(function(e){e[e.DATA=0]="DATA",e[e.RCDATA=1]="RCDATA",e[e.RAWTEXT=2]="RAWTEXT",e[e.SCRIPT_DATA=3]="SCRIPT_DATA",e[e.PLAINTEXT=4]="PLAINTEXT",e[e.TAG_OPEN=5]="TAG_OPEN",e[e.END_TAG_OPEN=6]="END_TAG_OPEN",e[e.TAG_NAME=7]="TAG_NAME",e[e.RCDATA_LESS_THAN_SIGN=8]="RCDATA_LESS_THAN_SIGN",e[e.RCDATA_END_TAG_OPEN=9]="RCDATA_END_TAG_OPEN",e[e.RCDATA_END_TAG_NAME=10]="RCDATA_END_TAG_NAME",e[e.RAWTEXT_LESS_THAN_SIGN=11]="RAWTEXT_LESS_THAN_SIGN",e[e.RAWTEXT_END_TAG_OPEN=12]="RAWTEXT_END_TAG_OPEN",e[e.RAWTEXT_END_TAG_NAME=13]="RAWTEXT_END_TAG_NAME",e[e.SCRIPT_DATA_LESS_THAN_SIGN=14]="SCRIPT_DATA_LESS_THAN_SIGN",e[e.SCRIPT_DATA_END_TAG_OPEN=15]="SCRIPT_DATA_END_TAG_OPEN",e[e.SCRIPT_DATA_END_TAG_NAME=16]="SCRIPT_DATA_END_TAG_NAME",e[e.SCRIPT_DATA_ESCAPE_START=17]="SCRIPT_DATA_ESCAPE_START",e[e.SCRIPT_DATA_ESCAPE_START_DASH=18]="SCRIPT_DATA_ESCAPE_START_DASH",e[e.SCRIPT_DATA_ESCAPED=19]="SCRIPT_DATA_ESCAPED",e[e.SCRIPT_DATA_ESCAPED_DASH=20]="SCRIPT_DATA_ESCAPED_DASH",e[e.SCRIPT_DATA_ESCAPED_DASH_DASH=21]="SCRIPT_DATA_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN=22]="SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN=23]="SCRIPT_DATA_ESCAPED_END_TAG_OPEN",e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME=24]="SCRIPT_DATA_ESCAPED_END_TAG_NAME",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START=25]="SCRIPT_DATA_DOUBLE_ESCAPE_START",e[e.SCRIPT_DATA_DOUBLE_ESCAPED=26]="SCRIPT_DATA_DOUBLE_ESCAPED",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH=27]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH=28]="SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH",e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN=29]="SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN",e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END=30]="SCRIPT_DATA_DOUBLE_ESCAPE_END",e[e.BEFORE_ATTRIBUTE_NAME=31]="BEFORE_ATTRIBUTE_NAME",e[e.ATTRIBUTE_NAME=32]="ATTRIBUTE_NAME",e[e.AFTER_ATTRIBUTE_NAME=33]="AFTER_ATTRIBUTE_NAME",e[e.BEFORE_ATTRIBUTE_VALUE=34]="BEFORE_ATTRIBUTE_VALUE",e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED=35]="ATTRIBUTE_VALUE_DOUBLE_QUOTED",e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED=36]="ATTRIBUTE_VALUE_SINGLE_QUOTED",e[e.ATTRIBUTE_VALUE_UNQUOTED=37]="ATTRIBUTE_VALUE_UNQUOTED",e[e.AFTER_ATTRIBUTE_VALUE_QUOTED=38]="AFTER_ATTRIBUTE_VALUE_QUOTED",e[e.SELF_CLOSING_START_TAG=39]="SELF_CLOSING_START_TAG",e[e.BOGUS_COMMENT=40]="BOGUS_COMMENT",e[e.MARKUP_DECLARATION_OPEN=41]="MARKUP_DECLARATION_OPEN",e[e.COMMENT_START=42]="COMMENT_START",e[e.COMMENT_START_DASH=43]="COMMENT_START_DASH",e[e.COMMENT=44]="COMMENT",e[e.COMMENT_LESS_THAN_SIGN=45]="COMMENT_LESS_THAN_SIGN",e[e.COMMENT_LESS_THAN_SIGN_BANG=46]="COMMENT_LESS_THAN_SIGN_BANG",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH=47]="COMMENT_LESS_THAN_SIGN_BANG_DASH",e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH=48]="COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH",e[e.COMMENT_END_DASH=49]="COMMENT_END_DASH",e[e.COMMENT_END=50]="COMMENT_END",e[e.COMMENT_END_BANG=51]="COMMENT_END_BANG",e[e.DOCTYPE=52]="DOCTYPE",e[e.BEFORE_DOCTYPE_NAME=53]="BEFORE_DOCTYPE_NAME",e[e.DOCTYPE_NAME=54]="DOCTYPE_NAME",e[e.AFTER_DOCTYPE_NAME=55]="AFTER_DOCTYPE_NAME",e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD=56]="AFTER_DOCTYPE_PUBLIC_KEYWORD",e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER=57]="BEFORE_DOCTYPE_PUBLIC_IDENTIFIER",e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED=58]="DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED=59]="DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER=60]="AFTER_DOCTYPE_PUBLIC_IDENTIFIER",e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS=61]="BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS",e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD=62]="AFTER_DOCTYPE_SYSTEM_KEYWORD",e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER=63]="BEFORE_DOCTYPE_SYSTEM_IDENTIFIER",e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED=64]="DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED",e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED=65]="DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED",e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER=66]="AFTER_DOCTYPE_SYSTEM_IDENTIFIER",e[e.BOGUS_DOCTYPE=67]="BOGUS_DOCTYPE",e[e.CDATA_SECTION=68]="CDATA_SECTION",e[e.CDATA_SECTION_BRACKET=69]="CDATA_SECTION_BRACKET",e[e.CDATA_SECTION_END=70]="CDATA_SECTION_END",e[e.CHARACTER_REFERENCE=71]="CHARACTER_REFERENCE",e[e.AMBIGUOUS_AMPERSAND=72]="AMBIGUOUS_AMPERSAND"})(_||(_={}));const Se={DATA:_.DATA,RCDATA:_.RCDATA,RAWTEXT:_.RAWTEXT,SCRIPT_DATA:_.SCRIPT_DATA,PLAINTEXT:_.PLAINTEXT,CDATA_SECTION:_.CDATA_SECTION};function M6(e){return e>=g.DIGIT_0&&e<=g.DIGIT_9}function bi(e){return e>=g.LATIN_CAPITAL_A&&e<=g.LATIN_CAPITAL_Z}function B6(e){return e>=g.LATIN_SMALL_A&&e<=g.LATIN_SMALL_Z}function cn(e){return B6(e)||bi(e)}function _0(e){return cn(e)||M6(e)}function ju(e){return e+32}function R1(e){return e===g.SPACE||e===g.LINE_FEED||e===g.TABULATION||e===g.FORM_FEED}function b0(e){return R1(e)||e===g.SOLIDUS||e===g.GREATER_THAN_SIGN}function F6(e){return e===g.NULL?R.nullCharacterReference:e>1114111?R.characterReferenceOutsideUnicodeRange:x1(e)?R.surrogateCharacterReference:v1(e)?R.noncharacterCharacterReference:I1(e)||e===g.CARRIAGE_RETURN?R.controlCharacterReference:null}class H6{constructor(t,n){this.options=t,this.handler=n,this.paused=!1,this.inLoop=!1,this.inForeignNode=!1,this.lastStartTagName="",this.active=!1,this.state=_.DATA,this.returnState=_.DATA,this.entityStartPos=0,this.consumedAfterSnapshot=-1,this.currentCharacterToken=null,this.currentToken=null,this.currentAttr={name:"",value:""},this.preprocessor=new A6(n),this.currentLocation=this.getCurrentLocation(-1),this.entityDecoder=new O6(S6,(r,i)=>{this.preprocessor.pos=this.entityStartPos+i-1,this._flushCodePointConsumedAsCharacterReference(r)},n.onParseError?{missingSemicolonAfterCharacterReference:()=>{this._err(R.missingSemicolonAfterCharacterReference,1)},absenceOfDigitsInNumericCharacterReference:r=>{this._err(R.absenceOfDigitsInNumericCharacterReference,this.entityStartPos-this.preprocessor.pos+r)},validateNumericCharacterReference:r=>{const i=F6(r);i&&this._err(i,1)}}:void 0)}_err(t,n=0){var r,i;(i=(r=this.handler).onParseError)===null||i===void 0||i.call(r,this.preprocessor.getError(t,n))}getCurrentLocation(t){return this.options.sourceCodeLocationInfo?{startLine:this.preprocessor.line,startCol:this.preprocessor.col-t,startOffset:this.preprocessor.offset-t,endLine:-1,endCol:-1,endOffset:-1}:null}_runParsingLoop(){if(!this.inLoop){for(this.inLoop=!0;this.active&&!this.paused;){this.consumedAfterSnapshot=0;const t=this._consume();this._ensureHibernation()||this._callState(t)}this.inLoop=!1}}pause(){this.paused=!0}resume(t){if(!this.paused)throw new Error("Parser was already resumed");this.paused=!1,!this.inLoop&&(this._runParsingLoop(),this.paused||t==null||t())}write(t,n,r){this.active=!0,this.preprocessor.write(t,n),this._runParsingLoop(),this.paused||r==null||r()}insertHtmlAtCurrentPos(t){this.active=!0,this.preprocessor.insertHtmlAtCurrentPos(t),this._runParsingLoop()}_ensureHibernation(){return this.preprocessor.endOfChunkHit?(this.preprocessor.retreat(this.consumedAfterSnapshot),this.consumedAfterSnapshot=0,this.active=!1,!0):!1}_consume(){return this.consumedAfterSnapshot++,this.preprocessor.advance()}_advanceBy(t){this.consumedAfterSnapshot+=t;for(let n=0;n<t;n++)this.preprocessor.advance()}_consumeSequenceIfMatch(t,n){return this.preprocessor.startsWith(t,n)?(this._advanceBy(t.length-1),!0):!1}_createStartTagToken(){this.currentToken={type:q.START_TAG,tagName:"",tagID:o.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(1)}}_createEndTagToken(){this.currentToken={type:q.END_TAG,tagName:"",tagID:o.UNKNOWN,selfClosing:!1,ackSelfClosing:!1,attrs:[],location:this.getCurrentLocation(2)}}_createCommentToken(t){this.currentToken={type:q.COMMENT,data:"",location:this.getCurrentLocation(t)}}_createDoctypeToken(t){this.currentToken={type:q.DOCTYPE,name:t,forceQuirks:!1,publicId:null,systemId:null,location:this.currentLocation}}_createCharacterToken(t,n){this.currentCharacterToken={type:t,chars:n,location:this.currentLocation}}_createAttr(t){this.currentAttr={name:t,value:""},this.currentLocation=this.getCurrentLocation(0)}_leaveAttrName(){var t,n;const r=this.currentToken;if(w1(r,this.currentAttr.name)===null){if(r.attrs.push(this.currentAttr),r.location&&this.currentLocation){const i=(t=(n=r.location).attrs)!==null&&t!==void 0?t:n.attrs=Object.create(null);i[this.currentAttr.name]=this.currentLocation,this._leaveAttrValue()}}else this._err(R.duplicateAttribute)}_leaveAttrValue(){this.currentLocation&&(this.currentLocation.endLine=this.preprocessor.line,this.currentLocation.endCol=this.preprocessor.col,this.currentLocation.endOffset=this.preprocessor.offset)}prepareToken(t){this._emitCurrentCharacterToken(t.location),this.currentToken=null,t.location&&(t.location.endLine=this.preprocessor.line,t.location.endCol=this.preprocessor.col+1,t.location.endOffset=this.preprocessor.offset+1),this.currentLocation=this.getCurrentLocation(-1)}emitCurrentTagToken(){const t=this.currentToken;this.prepareToken(t),t.tagID=ei(t.tagName),t.type===q.START_TAG?(this.lastStartTagName=t.tagName,this.handler.onStartTag(t)):(t.attrs.length>0&&this._err(R.endTagWithAttributes),t.selfClosing&&this._err(R.endTagWithTrailingSolidus),this.handler.onEndTag(t)),this.preprocessor.dropParsedChunk()}emitCurrentComment(t){this.prepareToken(t),this.handler.onComment(t),this.preprocessor.dropParsedChunk()}emitCurrentDoctype(t){this.prepareToken(t),this.handler.onDoctype(t),this.preprocessor.dropParsedChunk()}_emitCurrentCharacterToken(t){if(this.currentCharacterToken){switch(t&&this.currentCharacterToken.location&&(this.currentCharacterToken.location.endLine=t.startLine,this.currentCharacterToken.location.endCol=t.startCol,this.currentCharacterToken.location.endOffset=t.startOffset),this.currentCharacterToken.type){case q.CHARACTER:{this.handler.onCharacter(this.currentCharacterToken);break}case q.NULL_CHARACTER:{this.handler.onNullCharacter(this.currentCharacterToken);break}case q.WHITESPACE_CHARACTER:{this.handler.onWhitespaceCharacter(this.currentCharacterToken);break}}this.currentCharacterToken=null}}_emitEOFToken(){const t=this.getCurrentLocation(0);t&&(t.endLine=t.startLine,t.endCol=t.startCol,t.endOffset=t.startOffset),this._emitCurrentCharacterToken(t),this.handler.onEof({type:q.EOF,location:t}),this.active=!1}_appendCharToCurrentCharacterToken(t,n){if(this.currentCharacterToken)if(this.currentCharacterToken.type===t){this.currentCharacterToken.chars+=n;return}else this.currentLocation=this.getCurrentLocation(0),this._emitCurrentCharacterToken(this.currentLocation),this.preprocessor.dropParsedChunk();this._createCharacterToken(t,n)}_emitCodePoint(t){const n=R1(t)?q.WHITESPACE_CHARACTER:t===g.NULL?q.NULL_CHARACTER:q.CHARACTER;this._appendCharToCurrentCharacterToken(n,String.fromCodePoint(t))}_emitChars(t){this._appendCharToCurrentCharacterToken(q.CHARACTER,t)}_startCharacterReference(){this.returnState=this.state,this.state=_.CHARACTER_REFERENCE,this.entityStartPos=this.preprocessor.pos,this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute()?$t.Attribute:$t.Legacy)}_isCharacterReferenceInAttribute(){return this.returnState===_.ATTRIBUTE_VALUE_DOUBLE_QUOTED||this.returnState===_.ATTRIBUTE_VALUE_SINGLE_QUOTED||this.returnState===_.ATTRIBUTE_VALUE_UNQUOTED}_flushCodePointConsumedAsCharacterReference(t){this._isCharacterReferenceInAttribute()?this.currentAttr.value+=String.fromCodePoint(t):this._emitCodePoint(t)}_callState(t){switch(this.state){case _.DATA:{this._stateData(t);break}case _.RCDATA:{this._stateRcdata(t);break}case _.RAWTEXT:{this._stateRawtext(t);break}case _.SCRIPT_DATA:{this._stateScriptData(t);break}case _.PLAINTEXT:{this._statePlaintext(t);break}case _.TAG_OPEN:{this._stateTagOpen(t);break}case _.END_TAG_OPEN:{this._stateEndTagOpen(t);break}case _.TAG_NAME:{this._stateTagName(t);break}case _.RCDATA_LESS_THAN_SIGN:{this._stateRcdataLessThanSign(t);break}case _.RCDATA_END_TAG_OPEN:{this._stateRcdataEndTagOpen(t);break}case _.RCDATA_END_TAG_NAME:{this._stateRcdataEndTagName(t);break}case _.RAWTEXT_LESS_THAN_SIGN:{this._stateRawtextLessThanSign(t);break}case _.RAWTEXT_END_TAG_OPEN:{this._stateRawtextEndTagOpen(t);break}case _.RAWTEXT_END_TAG_NAME:{this._stateRawtextEndTagName(t);break}case _.SCRIPT_DATA_LESS_THAN_SIGN:{this._stateScriptDataLessThanSign(t);break}case _.SCRIPT_DATA_END_TAG_OPEN:{this._stateScriptDataEndTagOpen(t);break}case _.SCRIPT_DATA_END_TAG_NAME:{this._stateScriptDataEndTagName(t);break}case _.SCRIPT_DATA_ESCAPE_START:{this._stateScriptDataEscapeStart(t);break}case _.SCRIPT_DATA_ESCAPE_START_DASH:{this._stateScriptDataEscapeStartDash(t);break}case _.SCRIPT_DATA_ESCAPED:{this._stateScriptDataEscaped(t);break}case _.SCRIPT_DATA_ESCAPED_DASH:{this._stateScriptDataEscapedDash(t);break}case _.SCRIPT_DATA_ESCAPED_DASH_DASH:{this._stateScriptDataEscapedDashDash(t);break}case _.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataEscapedLessThanSign(t);break}case _.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:{this._stateScriptDataEscapedEndTagOpen(t);break}case _.SCRIPT_DATA_ESCAPED_END_TAG_NAME:{this._stateScriptDataEscapedEndTagName(t);break}case _.SCRIPT_DATA_DOUBLE_ESCAPE_START:{this._stateScriptDataDoubleEscapeStart(t);break}case _.SCRIPT_DATA_DOUBLE_ESCAPED:{this._stateScriptDataDoubleEscaped(t);break}case _.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:{this._stateScriptDataDoubleEscapedDash(t);break}case _.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:{this._stateScriptDataDoubleEscapedDashDash(t);break}case _.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:{this._stateScriptDataDoubleEscapedLessThanSign(t);break}case _.SCRIPT_DATA_DOUBLE_ESCAPE_END:{this._stateScriptDataDoubleEscapeEnd(t);break}case _.BEFORE_ATTRIBUTE_NAME:{this._stateBeforeAttributeName(t);break}case _.ATTRIBUTE_NAME:{this._stateAttributeName(t);break}case _.AFTER_ATTRIBUTE_NAME:{this._stateAfterAttributeName(t);break}case _.BEFORE_ATTRIBUTE_VALUE:{this._stateBeforeAttributeValue(t);break}case _.ATTRIBUTE_VALUE_DOUBLE_QUOTED:{this._stateAttributeValueDoubleQuoted(t);break}case _.ATTRIBUTE_VALUE_SINGLE_QUOTED:{this._stateAttributeValueSingleQuoted(t);break}case _.ATTRIBUTE_VALUE_UNQUOTED:{this._stateAttributeValueUnquoted(t);break}case _.AFTER_ATTRIBUTE_VALUE_QUOTED:{this._stateAfterAttributeValueQuoted(t);break}case _.SELF_CLOSING_START_TAG:{this._stateSelfClosingStartTag(t);break}case _.BOGUS_COMMENT:{this._stateBogusComment(t);break}case _.MARKUP_DECLARATION_OPEN:{this._stateMarkupDeclarationOpen(t);break}case _.COMMENT_START:{this._stateCommentStart(t);break}case _.COMMENT_START_DASH:{this._stateCommentStartDash(t);break}case _.COMMENT:{this._stateComment(t);break}case _.COMMENT_LESS_THAN_SIGN:{this._stateCommentLessThanSign(t);break}case _.COMMENT_LESS_THAN_SIGN_BANG:{this._stateCommentLessThanSignBang(t);break}case _.COMMENT_LESS_THAN_SIGN_BANG_DASH:{this._stateCommentLessThanSignBangDash(t);break}case _.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:{this._stateCommentLessThanSignBangDashDash(t);break}case _.COMMENT_END_DASH:{this._stateCommentEndDash(t);break}case _.COMMENT_END:{this._stateCommentEnd(t);break}case _.COMMENT_END_BANG:{this._stateCommentEndBang(t);break}case _.DOCTYPE:{this._stateDoctype(t);break}case _.BEFORE_DOCTYPE_NAME:{this._stateBeforeDoctypeName(t);break}case _.DOCTYPE_NAME:{this._stateDoctypeName(t);break}case _.AFTER_DOCTYPE_NAME:{this._stateAfterDoctypeName(t);break}case _.AFTER_DOCTYPE_PUBLIC_KEYWORD:{this._stateAfterDoctypePublicKeyword(t);break}case _.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateBeforeDoctypePublicIdentifier(t);break}case _.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypePublicIdentifierDoubleQuoted(t);break}case _.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypePublicIdentifierSingleQuoted(t);break}case _.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:{this._stateAfterDoctypePublicIdentifier(t);break}case _.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:{this._stateBetweenDoctypePublicAndSystemIdentifiers(t);break}case _.AFTER_DOCTYPE_SYSTEM_KEYWORD:{this._stateAfterDoctypeSystemKeyword(t);break}case _.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateBeforeDoctypeSystemIdentifier(t);break}case _.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:{this._stateDoctypeSystemIdentifierDoubleQuoted(t);break}case _.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:{this._stateDoctypeSystemIdentifierSingleQuoted(t);break}case _.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:{this._stateAfterDoctypeSystemIdentifier(t);break}case _.BOGUS_DOCTYPE:{this._stateBogusDoctype(t);break}case _.CDATA_SECTION:{this._stateCdataSection(t);break}case _.CDATA_SECTION_BRACKET:{this._stateCdataSectionBracket(t);break}case _.CDATA_SECTION_END:{this._stateCdataSectionEnd(t);break}case _.CHARACTER_REFERENCE:{this._stateCharacterReference();break}case _.AMBIGUOUS_AMPERSAND:{this._stateAmbiguousAmpersand(t);break}default:throw new Error("Unknown state")}}_stateData(t){switch(t){case g.LESS_THAN_SIGN:{this.state=_.TAG_OPEN;break}case g.AMPERSAND:{this._startCharacterReference();break}case g.NULL:{this._err(R.unexpectedNullCharacter),this._emitCodePoint(t);break}case g.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRcdata(t){switch(t){case g.AMPERSAND:{this._startCharacterReference();break}case g.LESS_THAN_SIGN:{this.state=_.RCDATA_LESS_THAN_SIGN;break}case g.NULL:{this._err(R.unexpectedNullCharacter),this._emitChars(ge);break}case g.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateRawtext(t){switch(t){case g.LESS_THAN_SIGN:{this.state=_.RAWTEXT_LESS_THAN_SIGN;break}case g.NULL:{this._err(R.unexpectedNullCharacter),this._emitChars(ge);break}case g.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptData(t){switch(t){case g.LESS_THAN_SIGN:{this.state=_.SCRIPT_DATA_LESS_THAN_SIGN;break}case g.NULL:{this._err(R.unexpectedNullCharacter),this._emitChars(ge);break}case g.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_statePlaintext(t){switch(t){case g.NULL:{this._err(R.unexpectedNullCharacter),this._emitChars(ge);break}case g.EOF:{this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateTagOpen(t){if(cn(t))this._createStartTagToken(),this.state=_.TAG_NAME,this._stateTagName(t);else switch(t){case g.EXCLAMATION_MARK:{this.state=_.MARKUP_DECLARATION_OPEN;break}case g.SOLIDUS:{this.state=_.END_TAG_OPEN;break}case g.QUESTION_MARK:{this._err(R.unexpectedQuestionMarkInsteadOfTagName),this._createCommentToken(1),this.state=_.BOGUS_COMMENT,this._stateBogusComment(t);break}case g.EOF:{this._err(R.eofBeforeTagName),this._emitChars("<"),this._emitEOFToken();break}default:this._err(R.invalidFirstCharacterOfTagName),this._emitChars("<"),this.state=_.DATA,this._stateData(t)}}_stateEndTagOpen(t){if(cn(t))this._createEndTagToken(),this.state=_.TAG_NAME,this._stateTagName(t);else switch(t){case g.GREATER_THAN_SIGN:{this._err(R.missingEndTagName),this.state=_.DATA;break}case g.EOF:{this._err(R.eofBeforeTagName),this._emitChars("</"),this._emitEOFToken();break}default:this._err(R.invalidFirstCharacterOfTagName),this._createCommentToken(2),this.state=_.BOGUS_COMMENT,this._stateBogusComment(t)}}_stateTagName(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:{this.state=_.BEFORE_ATTRIBUTE_NAME;break}case g.SOLIDUS:{this.state=_.SELF_CLOSING_START_TAG;break}case g.GREATER_THAN_SIGN:{this.state=_.DATA,this.emitCurrentTagToken();break}case g.NULL:{this._err(R.unexpectedNullCharacter),n.tagName+=ge;break}case g.EOF:{this._err(R.eofInTag),this._emitEOFToken();break}default:n.tagName+=String.fromCodePoint(bi(t)?ju(t):t)}}_stateRcdataLessThanSign(t){t===g.SOLIDUS?this.state=_.RCDATA_END_TAG_OPEN:(this._emitChars("<"),this.state=_.RCDATA,this._stateRcdata(t))}_stateRcdataEndTagOpen(t){cn(t)?(this.state=_.RCDATA_END_TAG_NAME,this._stateRcdataEndTagName(t)):(this._emitChars("</"),this.state=_.RCDATA,this._stateRcdata(t))}handleSpecialEndTag(t){if(!this.preprocessor.startsWith(this.lastStartTagName,!1))return!this._ensureHibernation();this._createEndTagToken();const n=this.currentToken;switch(n.tagName=this.lastStartTagName,this.preprocessor.peek(this.lastStartTagName.length)){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:return this._advanceBy(this.lastStartTagName.length),this.state=_.BEFORE_ATTRIBUTE_NAME,!1;case g.SOLIDUS:return this._advanceBy(this.lastStartTagName.length),this.state=_.SELF_CLOSING_START_TAG,!1;case g.GREATER_THAN_SIGN:return this._advanceBy(this.lastStartTagName.length),this.emitCurrentTagToken(),this.state=_.DATA,!1;default:return!this._ensureHibernation()}}_stateRcdataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=_.RCDATA,this._stateRcdata(t))}_stateRawtextLessThanSign(t){t===g.SOLIDUS?this.state=_.RAWTEXT_END_TAG_OPEN:(this._emitChars("<"),this.state=_.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagOpen(t){cn(t)?(this.state=_.RAWTEXT_END_TAG_NAME,this._stateRawtextEndTagName(t)):(this._emitChars("</"),this.state=_.RAWTEXT,this._stateRawtext(t))}_stateRawtextEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=_.RAWTEXT,this._stateRawtext(t))}_stateScriptDataLessThanSign(t){switch(t){case g.SOLIDUS:{this.state=_.SCRIPT_DATA_END_TAG_OPEN;break}case g.EXCLAMATION_MARK:{this.state=_.SCRIPT_DATA_ESCAPE_START,this._emitChars("<!");break}default:this._emitChars("<"),this.state=_.SCRIPT_DATA,this._stateScriptData(t)}}_stateScriptDataEndTagOpen(t){cn(t)?(this.state=_.SCRIPT_DATA_END_TAG_NAME,this._stateScriptDataEndTagName(t)):(this._emitChars("</"),this.state=_.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=_.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStart(t){t===g.HYPHEN_MINUS?(this.state=_.SCRIPT_DATA_ESCAPE_START_DASH,this._emitChars("-")):(this.state=_.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscapeStartDash(t){t===g.HYPHEN_MINUS?(this.state=_.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-")):(this.state=_.SCRIPT_DATA,this._stateScriptData(t))}_stateScriptDataEscaped(t){switch(t){case g.HYPHEN_MINUS:{this.state=_.SCRIPT_DATA_ESCAPED_DASH,this._emitChars("-");break}case g.LESS_THAN_SIGN:{this.state=_.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case g.NULL:{this._err(R.unexpectedNullCharacter),this._emitChars(ge);break}case g.EOF:{this._err(R.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataEscapedDash(t){switch(t){case g.HYPHEN_MINUS:{this.state=_.SCRIPT_DATA_ESCAPED_DASH_DASH,this._emitChars("-");break}case g.LESS_THAN_SIGN:{this.state=_.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case g.NULL:{this._err(R.unexpectedNullCharacter),this.state=_.SCRIPT_DATA_ESCAPED,this._emitChars(ge);break}case g.EOF:{this._err(R.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=_.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedDashDash(t){switch(t){case g.HYPHEN_MINUS:{this._emitChars("-");break}case g.LESS_THAN_SIGN:{this.state=_.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;break}case g.GREATER_THAN_SIGN:{this.state=_.SCRIPT_DATA,this._emitChars(">");break}case g.NULL:{this._err(R.unexpectedNullCharacter),this.state=_.SCRIPT_DATA_ESCAPED,this._emitChars(ge);break}case g.EOF:{this._err(R.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=_.SCRIPT_DATA_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataEscapedLessThanSign(t){t===g.SOLIDUS?this.state=_.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:cn(t)?(this._emitChars("<"),this.state=_.SCRIPT_DATA_DOUBLE_ESCAPE_START,this._stateScriptDataDoubleEscapeStart(t)):(this._emitChars("<"),this.state=_.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagOpen(t){cn(t)?(this.state=_.SCRIPT_DATA_ESCAPED_END_TAG_NAME,this._stateScriptDataEscapedEndTagName(t)):(this._emitChars("</"),this.state=_.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataEscapedEndTagName(t){this.handleSpecialEndTag(t)&&(this._emitChars("</"),this.state=_.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscapeStart(t){if(this.preprocessor.startsWith(Je.SCRIPT,!1)&&b0(this.preprocessor.peek(Je.SCRIPT.length))){this._emitCodePoint(t);for(let n=0;n<Je.SCRIPT.length;n++)this._emitCodePoint(this._consume());this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED}else this._ensureHibernation()||(this.state=_.SCRIPT_DATA_ESCAPED,this._stateScriptDataEscaped(t))}_stateScriptDataDoubleEscaped(t){switch(t){case g.HYPHEN_MINUS:{this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED_DASH,this._emitChars("-");break}case g.LESS_THAN_SIGN:{this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case g.NULL:{this._err(R.unexpectedNullCharacter),this._emitChars(ge);break}case g.EOF:{this._err(R.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDash(t){switch(t){case g.HYPHEN_MINUS:{this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH,this._emitChars("-");break}case g.LESS_THAN_SIGN:{this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case g.NULL:{this._err(R.unexpectedNullCharacter),this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(ge);break}case g.EOF:{this._err(R.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedDashDash(t){switch(t){case g.HYPHEN_MINUS:{this._emitChars("-");break}case g.LESS_THAN_SIGN:{this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN,this._emitChars("<");break}case g.GREATER_THAN_SIGN:{this.state=_.SCRIPT_DATA,this._emitChars(">");break}case g.NULL:{this._err(R.unexpectedNullCharacter),this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitChars(ge);break}case g.EOF:{this._err(R.eofInScriptHtmlCommentLikeText),this._emitEOFToken();break}default:this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED,this._emitCodePoint(t)}}_stateScriptDataDoubleEscapedLessThanSign(t){t===g.SOLIDUS?(this.state=_.SCRIPT_DATA_DOUBLE_ESCAPE_END,this._emitChars("/")):(this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateScriptDataDoubleEscapeEnd(t){if(this.preprocessor.startsWith(Je.SCRIPT,!1)&&b0(this.preprocessor.peek(Je.SCRIPT.length))){this._emitCodePoint(t);for(let n=0;n<Je.SCRIPT.length;n++)this._emitCodePoint(this._consume());this.state=_.SCRIPT_DATA_ESCAPED}else this._ensureHibernation()||(this.state=_.SCRIPT_DATA_DOUBLE_ESCAPED,this._stateScriptDataDoubleEscaped(t))}_stateBeforeAttributeName(t){switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:break;case g.SOLIDUS:case g.GREATER_THAN_SIGN:case g.EOF:{this.state=_.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case g.EQUALS_SIGN:{this._err(R.unexpectedEqualsSignBeforeAttributeName),this._createAttr("="),this.state=_.ATTRIBUTE_NAME;break}default:this._createAttr(""),this.state=_.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateAttributeName(t){switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:case g.SOLIDUS:case g.GREATER_THAN_SIGN:case g.EOF:{this._leaveAttrName(),this.state=_.AFTER_ATTRIBUTE_NAME,this._stateAfterAttributeName(t);break}case g.EQUALS_SIGN:{this._leaveAttrName(),this.state=_.BEFORE_ATTRIBUTE_VALUE;break}case g.QUOTATION_MARK:case g.APOSTROPHE:case g.LESS_THAN_SIGN:{this._err(R.unexpectedCharacterInAttributeName),this.currentAttr.name+=String.fromCodePoint(t);break}case g.NULL:{this._err(R.unexpectedNullCharacter),this.currentAttr.name+=ge;break}default:this.currentAttr.name+=String.fromCodePoint(bi(t)?ju(t):t)}}_stateAfterAttributeName(t){switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:break;case g.SOLIDUS:{this.state=_.SELF_CLOSING_START_TAG;break}case g.EQUALS_SIGN:{this.state=_.BEFORE_ATTRIBUTE_VALUE;break}case g.GREATER_THAN_SIGN:{this.state=_.DATA,this.emitCurrentTagToken();break}case g.EOF:{this._err(R.eofInTag),this._emitEOFToken();break}default:this._createAttr(""),this.state=_.ATTRIBUTE_NAME,this._stateAttributeName(t)}}_stateBeforeAttributeValue(t){switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:break;case g.QUOTATION_MARK:{this.state=_.ATTRIBUTE_VALUE_DOUBLE_QUOTED;break}case g.APOSTROPHE:{this.state=_.ATTRIBUTE_VALUE_SINGLE_QUOTED;break}case g.GREATER_THAN_SIGN:{this._err(R.missingAttributeValue),this.state=_.DATA,this.emitCurrentTagToken();break}default:this.state=_.ATTRIBUTE_VALUE_UNQUOTED,this._stateAttributeValueUnquoted(t)}}_stateAttributeValueDoubleQuoted(t){switch(t){case g.QUOTATION_MARK:{this.state=_.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case g.AMPERSAND:{this._startCharacterReference();break}case g.NULL:{this._err(R.unexpectedNullCharacter),this.currentAttr.value+=ge;break}case g.EOF:{this._err(R.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueSingleQuoted(t){switch(t){case g.APOSTROPHE:{this.state=_.AFTER_ATTRIBUTE_VALUE_QUOTED;break}case g.AMPERSAND:{this._startCharacterReference();break}case g.NULL:{this._err(R.unexpectedNullCharacter),this.currentAttr.value+=ge;break}case g.EOF:{this._err(R.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAttributeValueUnquoted(t){switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:{this._leaveAttrValue(),this.state=_.BEFORE_ATTRIBUTE_NAME;break}case g.AMPERSAND:{this._startCharacterReference();break}case g.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=_.DATA,this.emitCurrentTagToken();break}case g.NULL:{this._err(R.unexpectedNullCharacter),this.currentAttr.value+=ge;break}case g.QUOTATION_MARK:case g.APOSTROPHE:case g.LESS_THAN_SIGN:case g.EQUALS_SIGN:case g.GRAVE_ACCENT:{this._err(R.unexpectedCharacterInUnquotedAttributeValue),this.currentAttr.value+=String.fromCodePoint(t);break}case g.EOF:{this._err(R.eofInTag),this._emitEOFToken();break}default:this.currentAttr.value+=String.fromCodePoint(t)}}_stateAfterAttributeValueQuoted(t){switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:{this._leaveAttrValue(),this.state=_.BEFORE_ATTRIBUTE_NAME;break}case g.SOLIDUS:{this._leaveAttrValue(),this.state=_.SELF_CLOSING_START_TAG;break}case g.GREATER_THAN_SIGN:{this._leaveAttrValue(),this.state=_.DATA,this.emitCurrentTagToken();break}case g.EOF:{this._err(R.eofInTag),this._emitEOFToken();break}default:this._err(R.missingWhitespaceBetweenAttributes),this.state=_.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateSelfClosingStartTag(t){switch(t){case g.GREATER_THAN_SIGN:{const n=this.currentToken;n.selfClosing=!0,this.state=_.DATA,this.emitCurrentTagToken();break}case g.EOF:{this._err(R.eofInTag),this._emitEOFToken();break}default:this._err(R.unexpectedSolidusInTag),this.state=_.BEFORE_ATTRIBUTE_NAME,this._stateBeforeAttributeName(t)}}_stateBogusComment(t){const n=this.currentToken;switch(t){case g.GREATER_THAN_SIGN:{this.state=_.DATA,this.emitCurrentComment(n);break}case g.EOF:{this.emitCurrentComment(n),this._emitEOFToken();break}case g.NULL:{this._err(R.unexpectedNullCharacter),n.data+=ge;break}default:n.data+=String.fromCodePoint(t)}}_stateMarkupDeclarationOpen(t){this._consumeSequenceIfMatch(Je.DASH_DASH,!0)?(this._createCommentToken(Je.DASH_DASH.length+1),this.state=_.COMMENT_START):this._consumeSequenceIfMatch(Je.DOCTYPE,!1)?(this.currentLocation=this.getCurrentLocation(Je.DOCTYPE.length+1),this.state=_.DOCTYPE):this._consumeSequenceIfMatch(Je.CDATA_START,!0)?this.inForeignNode?this.state=_.CDATA_SECTION:(this._err(R.cdataInHtmlContent),this._createCommentToken(Je.CDATA_START.length+1),this.currentToken.data="[CDATA[",this.state=_.BOGUS_COMMENT):this._ensureHibernation()||(this._err(R.incorrectlyOpenedComment),this._createCommentToken(2),this.state=_.BOGUS_COMMENT,this._stateBogusComment(t))}_stateCommentStart(t){switch(t){case g.HYPHEN_MINUS:{this.state=_.COMMENT_START_DASH;break}case g.GREATER_THAN_SIGN:{this._err(R.abruptClosingOfEmptyComment),this.state=_.DATA;const n=this.currentToken;this.emitCurrentComment(n);break}default:this.state=_.COMMENT,this._stateComment(t)}}_stateCommentStartDash(t){const n=this.currentToken;switch(t){case g.HYPHEN_MINUS:{this.state=_.COMMENT_END;break}case g.GREATER_THAN_SIGN:{this._err(R.abruptClosingOfEmptyComment),this.state=_.DATA,this.emitCurrentComment(n);break}case g.EOF:{this._err(R.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="-",this.state=_.COMMENT,this._stateComment(t)}}_stateComment(t){const n=this.currentToken;switch(t){case g.HYPHEN_MINUS:{this.state=_.COMMENT_END_DASH;break}case g.LESS_THAN_SIGN:{n.data+="<",this.state=_.COMMENT_LESS_THAN_SIGN;break}case g.NULL:{this._err(R.unexpectedNullCharacter),n.data+=ge;break}case g.EOF:{this._err(R.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+=String.fromCodePoint(t)}}_stateCommentLessThanSign(t){const n=this.currentToken;switch(t){case g.EXCLAMATION_MARK:{n.data+="!",this.state=_.COMMENT_LESS_THAN_SIGN_BANG;break}case g.LESS_THAN_SIGN:{n.data+="<";break}default:this.state=_.COMMENT,this._stateComment(t)}}_stateCommentLessThanSignBang(t){t===g.HYPHEN_MINUS?this.state=_.COMMENT_LESS_THAN_SIGN_BANG_DASH:(this.state=_.COMMENT,this._stateComment(t))}_stateCommentLessThanSignBangDash(t){t===g.HYPHEN_MINUS?this.state=_.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:(this.state=_.COMMENT_END_DASH,this._stateCommentEndDash(t))}_stateCommentLessThanSignBangDashDash(t){t!==g.GREATER_THAN_SIGN&&t!==g.EOF&&this._err(R.nestedComment),this.state=_.COMMENT_END,this._stateCommentEnd(t)}_stateCommentEndDash(t){const n=this.currentToken;switch(t){case g.HYPHEN_MINUS:{this.state=_.COMMENT_END;break}case g.EOF:{this._err(R.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="-",this.state=_.COMMENT,this._stateComment(t)}}_stateCommentEnd(t){const n=this.currentToken;switch(t){case g.GREATER_THAN_SIGN:{this.state=_.DATA,this.emitCurrentComment(n);break}case g.EXCLAMATION_MARK:{this.state=_.COMMENT_END_BANG;break}case g.HYPHEN_MINUS:{n.data+="-";break}case g.EOF:{this._err(R.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="--",this.state=_.COMMENT,this._stateComment(t)}}_stateCommentEndBang(t){const n=this.currentToken;switch(t){case g.HYPHEN_MINUS:{n.data+="--!",this.state=_.COMMENT_END_DASH;break}case g.GREATER_THAN_SIGN:{this._err(R.incorrectlyClosedComment),this.state=_.DATA,this.emitCurrentComment(n);break}case g.EOF:{this._err(R.eofInComment),this.emitCurrentComment(n),this._emitEOFToken();break}default:n.data+="--!",this.state=_.COMMENT,this._stateComment(t)}}_stateDoctype(t){switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:{this.state=_.BEFORE_DOCTYPE_NAME;break}case g.GREATER_THAN_SIGN:{this.state=_.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t);break}case g.EOF:{this._err(R.eofInDoctype),this._createDoctypeToken(null);const n=this.currentToken;n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(R.missingWhitespaceBeforeDoctypeName),this.state=_.BEFORE_DOCTYPE_NAME,this._stateBeforeDoctypeName(t)}}_stateBeforeDoctypeName(t){if(bi(t))this._createDoctypeToken(String.fromCharCode(ju(t))),this.state=_.DOCTYPE_NAME;else switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:break;case g.NULL:{this._err(R.unexpectedNullCharacter),this._createDoctypeToken(ge),this.state=_.DOCTYPE_NAME;break}case g.GREATER_THAN_SIGN:{this._err(R.missingDoctypeName),this._createDoctypeToken(null);const n=this.currentToken;n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=_.DATA;break}case g.EOF:{this._err(R.eofInDoctype),this._createDoctypeToken(null);const n=this.currentToken;n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._createDoctypeToken(String.fromCodePoint(t)),this.state=_.DOCTYPE_NAME}}_stateDoctypeName(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:{this.state=_.AFTER_DOCTYPE_NAME;break}case g.GREATER_THAN_SIGN:{this.state=_.DATA,this.emitCurrentDoctype(n);break}case g.NULL:{this._err(R.unexpectedNullCharacter),n.name+=ge;break}case g.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.name+=String.fromCodePoint(bi(t)?ju(t):t)}}_stateAfterDoctypeName(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:break;case g.GREATER_THAN_SIGN:{this.state=_.DATA,this.emitCurrentDoctype(n);break}case g.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._consumeSequenceIfMatch(Je.PUBLIC,!1)?this.state=_.AFTER_DOCTYPE_PUBLIC_KEYWORD:this._consumeSequenceIfMatch(Je.SYSTEM,!1)?this.state=_.AFTER_DOCTYPE_SYSTEM_KEYWORD:this._ensureHibernation()||(this._err(R.invalidCharacterSequenceAfterDoctypeName),n.forceQuirks=!0,this.state=_.BOGUS_DOCTYPE,this._stateBogusDoctype(t))}}_stateAfterDoctypePublicKeyword(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:{this.state=_.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;break}case g.QUOTATION_MARK:{this._err(R.missingWhitespaceAfterDoctypePublicKeyword),n.publicId="",this.state=_.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case g.APOSTROPHE:{this._err(R.missingWhitespaceAfterDoctypePublicKeyword),n.publicId="",this.state=_.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case g.GREATER_THAN_SIGN:{this._err(R.missingDoctypePublicIdentifier),n.forceQuirks=!0,this.state=_.DATA,this.emitCurrentDoctype(n);break}case g.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(R.missingQuoteBeforeDoctypePublicIdentifier),n.forceQuirks=!0,this.state=_.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypePublicIdentifier(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:break;case g.QUOTATION_MARK:{n.publicId="",this.state=_.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;break}case g.APOSTROPHE:{n.publicId="",this.state=_.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;break}case g.GREATER_THAN_SIGN:{this._err(R.missingDoctypePublicIdentifier),n.forceQuirks=!0,this.state=_.DATA,this.emitCurrentDoctype(n);break}case g.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(R.missingQuoteBeforeDoctypePublicIdentifier),n.forceQuirks=!0,this.state=_.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypePublicIdentifierDoubleQuoted(t){const n=this.currentToken;switch(t){case g.QUOTATION_MARK:{this.state=_.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case g.NULL:{this._err(R.unexpectedNullCharacter),n.publicId+=ge;break}case g.GREATER_THAN_SIGN:{this._err(R.abruptDoctypePublicIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=_.DATA;break}case g.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.publicId+=String.fromCodePoint(t)}}_stateDoctypePublicIdentifierSingleQuoted(t){const n=this.currentToken;switch(t){case g.APOSTROPHE:{this.state=_.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;break}case g.NULL:{this._err(R.unexpectedNullCharacter),n.publicId+=ge;break}case g.GREATER_THAN_SIGN:{this._err(R.abruptDoctypePublicIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=_.DATA;break}case g.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.publicId+=String.fromCodePoint(t)}}_stateAfterDoctypePublicIdentifier(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:{this.state=_.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;break}case g.GREATER_THAN_SIGN:{this.state=_.DATA,this.emitCurrentDoctype(n);break}case g.QUOTATION_MARK:{this._err(R.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),n.systemId="",this.state=_.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case g.APOSTROPHE:{this._err(R.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),n.systemId="",this.state=_.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case g.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(R.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=_.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBetweenDoctypePublicAndSystemIdentifiers(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:break;case g.GREATER_THAN_SIGN:{this.emitCurrentDoctype(n),this.state=_.DATA;break}case g.QUOTATION_MARK:{n.systemId="",this.state=_.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case g.APOSTROPHE:{n.systemId="",this.state=_.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case g.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(R.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=_.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateAfterDoctypeSystemKeyword(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:{this.state=_.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;break}case g.QUOTATION_MARK:{this._err(R.missingWhitespaceAfterDoctypeSystemKeyword),n.systemId="",this.state=_.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case g.APOSTROPHE:{this._err(R.missingWhitespaceAfterDoctypeSystemKeyword),n.systemId="",this.state=_.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case g.GREATER_THAN_SIGN:{this._err(R.missingDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=_.DATA,this.emitCurrentDoctype(n);break}case g.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(R.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=_.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBeforeDoctypeSystemIdentifier(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:break;case g.QUOTATION_MARK:{n.systemId="",this.state=_.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;break}case g.APOSTROPHE:{n.systemId="",this.state=_.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;break}case g.GREATER_THAN_SIGN:{this._err(R.missingDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=_.DATA,this.emitCurrentDoctype(n);break}case g.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(R.missingQuoteBeforeDoctypeSystemIdentifier),n.forceQuirks=!0,this.state=_.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateDoctypeSystemIdentifierDoubleQuoted(t){const n=this.currentToken;switch(t){case g.QUOTATION_MARK:{this.state=_.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case g.NULL:{this._err(R.unexpectedNullCharacter),n.systemId+=ge;break}case g.GREATER_THAN_SIGN:{this._err(R.abruptDoctypeSystemIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=_.DATA;break}case g.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.systemId+=String.fromCodePoint(t)}}_stateDoctypeSystemIdentifierSingleQuoted(t){const n=this.currentToken;switch(t){case g.APOSTROPHE:{this.state=_.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;break}case g.NULL:{this._err(R.unexpectedNullCharacter),n.systemId+=ge;break}case g.GREATER_THAN_SIGN:{this._err(R.abruptDoctypeSystemIdentifier),n.forceQuirks=!0,this.emitCurrentDoctype(n),this.state=_.DATA;break}case g.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:n.systemId+=String.fromCodePoint(t)}}_stateAfterDoctypeSystemIdentifier(t){const n=this.currentToken;switch(t){case g.SPACE:case g.LINE_FEED:case g.TABULATION:case g.FORM_FEED:break;case g.GREATER_THAN_SIGN:{this.emitCurrentDoctype(n),this.state=_.DATA;break}case g.EOF:{this._err(R.eofInDoctype),n.forceQuirks=!0,this.emitCurrentDoctype(n),this._emitEOFToken();break}default:this._err(R.unexpectedCharacterAfterDoctypeSystemIdentifier),this.state=_.BOGUS_DOCTYPE,this._stateBogusDoctype(t)}}_stateBogusDoctype(t){const n=this.currentToken;switch(t){case g.GREATER_THAN_SIGN:{this.emitCurrentDoctype(n),this.state=_.DATA;break}case g.NULL:{this._err(R.unexpectedNullCharacter);break}case g.EOF:{this.emitCurrentDoctype(n),this._emitEOFToken();break}}}_stateCdataSection(t){switch(t){case g.RIGHT_SQUARE_BRACKET:{this.state=_.CDATA_SECTION_BRACKET;break}case g.EOF:{this._err(R.eofInCdata),this._emitEOFToken();break}default:this._emitCodePoint(t)}}_stateCdataSectionBracket(t){t===g.RIGHT_SQUARE_BRACKET?this.state=_.CDATA_SECTION_END:(this._emitChars("]"),this.state=_.CDATA_SECTION,this._stateCdataSection(t))}_stateCdataSectionEnd(t){switch(t){case g.GREATER_THAN_SIGN:{this.state=_.DATA;break}case g.RIGHT_SQUARE_BRACKET:{this._emitChars("]");break}default:this._emitChars("]]"),this.state=_.CDATA_SECTION,this._stateCdataSection(t)}}_stateCharacterReference(){let t=this.entityDecoder.write(this.preprocessor.html,this.preprocessor.pos);if(t<0)if(this.preprocessor.lastChunkWritten)t=this.entityDecoder.end();else{this.active=!1,this.preprocessor.pos=this.preprocessor.html.length-1,this.consumedAfterSnapshot=0,this.preprocessor.endOfChunkHit=!0;return}t===0?(this.preprocessor.pos=this.entityStartPos,this._flushCodePointConsumedAsCharacterReference(g.AMPERSAND),this.state=!this._isCharacterReferenceInAttribute()&&_0(this.preprocessor.peek(1))?_.AMBIGUOUS_AMPERSAND:this.returnState):this.state=this.returnState}_stateAmbiguousAmpersand(t){_0(t)?this._flushCodePointConsumedAsCharacterReference(t):(t===g.SEMICOLON&&this._err(R.unknownNamedCharacterReference),this.state=this.returnState,this._callState(t))}}const O1=new Set([o.DD,o.DT,o.LI,o.OPTGROUP,o.OPTION,o.P,o.RB,o.RP,o.RT,o.RTC]),k0=new Set([...O1,o.CAPTION,o.COLGROUP,o.TBODY,o.TD,o.TFOOT,o.TH,o.THEAD,o.TR]),La=new Set([o.APPLET,o.CAPTION,o.HTML,o.MARQUEE,o.OBJECT,o.TABLE,o.TD,o.TEMPLATE,o.TH]),U6=new Set([...La,o.OL,o.UL]),z6=new Set([...La,o.BUTTON]),C0=new Set([o.ANNOTATION_XML,o.MI,o.MN,o.MO,o.MS,o.MTEXT]),A0=new Set([o.DESC,o.FOREIGN_OBJECT,o.TITLE]),j6=new Set([o.TR,o.TEMPLATE,o.HTML]),V6=new Set([o.TBODY,o.TFOOT,o.THEAD,o.TEMPLATE,o.HTML]),W6=new Set([o.TABLE,o.TEMPLATE,o.HTML]),Y6=new Set([o.TD,o.TH]);class X6{get currentTmplContentOrNode(){return this._isInTemplate()?this.treeAdapter.getTemplateContent(this.current):this.current}constructor(t,n,r){this.treeAdapter=n,this.handler=r,this.items=[],this.tagIDs=[],this.stackTop=-1,this.tmplCount=0,this.currentTagId=o.UNKNOWN,this.current=t}_indexOf(t){return this.items.lastIndexOf(t,this.stackTop)}_isInTemplate(){return this.currentTagId===o.TEMPLATE&&this.treeAdapter.getNamespaceURI(this.current)===L.HTML}_updateCurrentElement(){this.current=this.items[this.stackTop],this.currentTagId=this.tagIDs[this.stackTop]}push(t,n){this.stackTop++,this.items[this.stackTop]=t,this.current=t,this.tagIDs[this.stackTop]=n,this.currentTagId=n,this._isInTemplate()&&this.tmplCount++,this.handler.onItemPush(t,n,!0)}pop(){const t=this.current;this.tmplCount>0&&this._isInTemplate()&&this.tmplCount--,this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!0)}replace(t,n){const r=this._indexOf(t);this.items[r]=n,r===this.stackTop&&(this.current=n)}insertAfter(t,n,r){const i=this._indexOf(t)+1;this.items.splice(i,0,n),this.tagIDs.splice(i,0,r),this.stackTop++,i===this.stackTop&&this._updateCurrentElement(),this.current&&this.currentTagId!==void 0&&this.handler.onItemPush(this.current,this.currentTagId,i===this.stackTop)}popUntilTagNamePopped(t){let n=this.stackTop+1;do n=this.tagIDs.lastIndexOf(t,n-1);while(n>0&&this.treeAdapter.getNamespaceURI(this.items[n])!==L.HTML);this.shortenToLength(Math.max(n,0))}shortenToLength(t){for(;this.stackTop>=t;){const n=this.current;this.tmplCount>0&&this._isInTemplate()&&(this.tmplCount-=1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(n,this.stackTop<t)}}popUntilElementPopped(t){const n=this._indexOf(t);this.shortenToLength(Math.max(n,0))}popUntilPopped(t,n){const r=this._indexOfTagNames(t,n);this.shortenToLength(Math.max(r,0))}popUntilNumberedHeaderPopped(){this.popUntilPopped(mo,L.HTML)}popUntilTableCellPopped(){this.popUntilPopped(Y6,L.HTML)}popAllUpToHtmlElement(){this.tmplCount=0,this.shortenToLength(1)}_indexOfTagNames(t,n){for(let r=this.stackTop;r>=0;r--)if(t.has(this.tagIDs[r])&&this.treeAdapter.getNamespaceURI(this.items[r])===n)return r;return-1}clearBackTo(t,n){const r=this._indexOfTagNames(t,n);this.shortenToLength(r+1)}clearBackToTableContext(){this.clearBackTo(W6,L.HTML)}clearBackToTableBodyContext(){this.clearBackTo(V6,L.HTML)}clearBackToTableRowContext(){this.clearBackTo(j6,L.HTML)}remove(t){const n=this._indexOf(t);n>=0&&(n===this.stackTop?this.pop():(this.items.splice(n,1),this.tagIDs.splice(n,1),this.stackTop--,this._updateCurrentElement(),this.handler.onItemPop(t,!1)))}tryPeekProperlyNestedBodyElement(){return this.stackTop>=1&&this.tagIDs[1]===o.BODY?this.items[1]:null}contains(t){return this._indexOf(t)>-1}getCommonAncestor(t){const n=this._indexOf(t)-1;return n>=0?this.items[n]:null}isRootHtmlElementCurrent(){return this.stackTop===0&&this.tagIDs[0]===o.HTML}hasInDynamicScope(t,n){for(let r=this.stackTop;r>=0;r--){const i=this.tagIDs[r];switch(this.treeAdapter.getNamespaceURI(this.items[r])){case L.HTML:{if(i===t)return!0;if(n.has(i))return!1;break}case L.SVG:{if(A0.has(i))return!1;break}case L.MATHML:{if(C0.has(i))return!1;break}}}return!0}hasInScope(t){return this.hasInDynamicScope(t,La)}hasInListItemScope(t){return this.hasInDynamicScope(t,U6)}hasInButtonScope(t){return this.hasInDynamicScope(t,z6)}hasNumberedHeaderInScope(){for(let t=this.stackTop;t>=0;t--){const n=this.tagIDs[t];switch(this.treeAdapter.getNamespaceURI(this.items[t])){case L.HTML:{if(mo.has(n))return!0;if(La.has(n))return!1;break}case L.SVG:{if(A0.has(n))return!1;break}case L.MATHML:{if(C0.has(n))return!1;break}}}return!0}hasInTableScope(t){for(let n=this.stackTop;n>=0;n--)if(this.treeAdapter.getNamespaceURI(this.items[n])===L.HTML)switch(this.tagIDs[n]){case t:return!0;case o.TABLE:case o.HTML:return!1}return!0}hasTableBodyContextInTableScope(){for(let t=this.stackTop;t>=0;t--)if(this.treeAdapter.getNamespaceURI(this.items[t])===L.HTML)switch(this.tagIDs[t]){case o.TBODY:case o.THEAD:case o.TFOOT:return!0;case o.TABLE:case o.HTML:return!1}return!0}hasInSelectScope(t){for(let n=this.stackTop;n>=0;n--)if(this.treeAdapter.getNamespaceURI(this.items[n])===L.HTML)switch(this.tagIDs[n]){case t:return!0;case o.OPTION:case o.OPTGROUP:break;default:return!1}return!0}generateImpliedEndTags(){for(;this.currentTagId!==void 0&&O1.has(this.currentTagId);)this.pop()}generateImpliedEndTagsThoroughly(){for(;this.currentTagId!==void 0&&k0.has(this.currentTagId);)this.pop()}generateImpliedEndTagsWithExclusion(t){for(;this.currentTagId!==void 0&&this.currentTagId!==t&&k0.has(this.currentTagId);)this.pop()}}const rl=3;var Ht;(function(e){e[e.Marker=0]="Marker",e[e.Element=1]="Element"})(Ht||(Ht={}));const S0={type:Ht.Marker};class K6{constructor(t){this.treeAdapter=t,this.entries=[],this.bookmark=null}_getNoahArkConditionCandidates(t,n){const r=[],i=n.length,u=this.treeAdapter.getTagName(t),a=this.treeAdapter.getNamespaceURI(t);for(let s=0;s<this.entries.length;s++){const l=this.entries[s];if(l.type===Ht.Marker)break;const{element:c}=l;if(this.treeAdapter.getTagName(c)===u&&this.treeAdapter.getNamespaceURI(c)===a){const d=this.treeAdapter.getAttrList(c);d.length===i&&r.push({idx:s,attrs:d})}}return r}_ensureNoahArkCondition(t){if(this.entries.length<rl)return;const n=this.treeAdapter.getAttrList(t),r=this._getNoahArkConditionCandidates(t,n);if(r.length<rl)return;const i=new Map(n.map(a=>[a.name,a.value]));let u=0;for(let a=0;a<r.length;a++){const s=r[a];s.attrs.every(l=>i.get(l.name)===l.value)&&(u+=1,u>=rl&&this.entries.splice(s.idx,1))}}insertMarker(){this.entries.unshift(S0)}pushElement(t,n){this._ensureNoahArkCondition(t),this.entries.unshift({type:Ht.Element,element:t,token:n})}insertElementAfterBookmark(t,n){const r=this.entries.indexOf(this.bookmark);this.entries.splice(r,0,{type:Ht.Element,element:t,token:n})}removeEntry(t){const n=this.entries.indexOf(t);n!==-1&&this.entries.splice(n,1)}clearToLastMarker(){const t=this.entries.indexOf(S0);t===-1?this.entries.length=0:this.entries.splice(0,t+1)}getElementEntryInScopeWithTagName(t){const n=this.entries.find(r=>r.type===Ht.Marker||this.treeAdapter.getTagName(r.element)===t);return n&&n.type===Ht.Element?n:null}getElementEntry(t){return this.entries.find(n=>n.type===Ht.Element&&n.element===t)}}const fn={createDocument(){return{nodeName:"#document",mode:Tt.NO_QUIRKS,childNodes:[]}},createDocumentFragment(){return{nodeName:"#document-fragment",childNodes:[]}},createElement(e,t,n){return{nodeName:e,tagName:e,attrs:n,namespaceURI:t,childNodes:[],parentNode:null}},createCommentNode(e){return{nodeName:"#comment",data:e,parentNode:null}},createTextNode(e){return{nodeName:"#text",value:e,parentNode:null}},appendChild(e,t){e.childNodes.push(t),t.parentNode=e},insertBefore(e,t,n){const r=e.childNodes.indexOf(n);e.childNodes.splice(r,0,t),t.parentNode=e},setTemplateContent(e,t){e.content=t},getTemplateContent(e){return e.content},setDocumentType(e,t,n,r){const i=e.childNodes.find(u=>u.nodeName==="#documentType");if(i)i.name=t,i.publicId=n,i.systemId=r;else{const u={nodeName:"#documentType",name:t,publicId:n,systemId:r,parentNode:null};fn.appendChild(e,u)}},setDocumentMode(e,t){e.mode=t},getDocumentMode(e){return e.mode},detachNode(e){if(e.parentNode){const t=e.parentNode.childNodes.indexOf(e);e.parentNode.childNodes.splice(t,1),e.parentNode=null}},insertText(e,t){if(e.childNodes.length>0){const n=e.childNodes[e.childNodes.length-1];if(fn.isTextNode(n)){n.value+=t;return}}fn.appendChild(e,fn.createTextNode(t))},insertTextBefore(e,t,n){const r=e.childNodes[e.childNodes.indexOf(n)-1];r&&fn.isTextNode(r)?r.value+=t:fn.insertBefore(e,fn.createTextNode(t),n)},adoptAttributes(e,t){const n=new Set(e.attrs.map(r=>r.name));for(let r=0;r<t.length;r++)n.has(t[r].name)||e.attrs.push(t[r])},getFirstChild(e){return e.childNodes[0]},getChildNodes(e){return e.childNodes},getParentNode(e){return e.parentNode},getAttrList(e){return e.attrs},getTagName(e){return e.tagName},getNamespaceURI(e){return e.namespaceURI},getTextNodeContent(e){return e.value},getCommentNodeContent(e){return e.data},getDocumentTypeNodeName(e){return e.name},getDocumentTypeNodePublicId(e){return e.publicId},getDocumentTypeNodeSystemId(e){return e.systemId},isTextNode(e){return e.nodeName==="#text"},isCommentNode(e){return e.nodeName==="#comment"},isDocumentTypeNode(e){return e.nodeName==="#documentType"},isElementNode(e){return Object.prototype.hasOwnProperty.call(e,"tagName")},setNodeSourceCodeLocation(e,t){e.sourceCodeLocation=t},getNodeSourceCodeLocation(e){return e.sourceCodeLocation},updateNodeSourceCodeLocation(e,t){e.sourceCodeLocation={...e.sourceCodeLocation,...t}}},P1="html",Q6="about:legacy-compat",$6="http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",L1=["+//silmaril//dtd html pro v0r11 19970101//","-//as//dtd html 3.0 aswedit + extensions//","-//advasoft ltd//dtd html 3.0 aswedit + extensions//","-//ietf//dtd html 2.0 level 1//","-//ietf//dtd html 2.0 level 2//","-//ietf//dtd html 2.0 strict level 1//","-//ietf//dtd html 2.0 strict level 2//","-//ietf//dtd html 2.0 strict//","-//ietf//dtd html 2.0//","-//ietf//dtd html 2.1e//","-//ietf//dtd html 3.0//","-//ietf//dtd html 3.2 final//","-//ietf//dtd html 3.2//","-//ietf//dtd html 3//","-//ietf//dtd html level 0//","-//ietf//dtd html level 1//","-//ietf//dtd html level 2//","-//ietf//dtd html level 3//","-//ietf//dtd html strict level 0//","-//ietf//dtd html strict level 1//","-//ietf//dtd html strict level 2//","-//ietf//dtd html strict level 3//","-//ietf//dtd html strict//","-//ietf//dtd html//","-//metrius//dtd metrius presentational//","-//microsoft//dtd internet explorer 2.0 html strict//","-//microsoft//dtd internet explorer 2.0 html//","-//microsoft//dtd internet explorer 2.0 tables//","-//microsoft//dtd internet explorer 3.0 html strict//","-//microsoft//dtd internet explorer 3.0 html//","-//microsoft//dtd internet explorer 3.0 tables//","-//netscape comm. corp.//dtd html//","-//netscape comm. corp.//dtd strict html//","-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//","-//sq//dtd html 2.0 hotmetal + extensions//","-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//","-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//","-//spyglass//dtd html 2.0 extended//","-//sun microsystems corp.//dtd hotjava html//","-//sun microsystems corp.//dtd hotjava strict html//","-//w3c//dtd html 3 1995-03-24//","-//w3c//dtd html 3.2 draft//","-//w3c//dtd html 3.2 final//","-//w3c//dtd html 3.2//","-//w3c//dtd html 3.2s draft//","-//w3c//dtd html 4.0 frameset//","-//w3c//dtd html 4.0 transitional//","-//w3c//dtd html experimental 19960712//","-//w3c//dtd html experimental 970421//","-//w3c//dtd w3 html//","-//w3o//dtd w3 html 3.0//","-//webtechs//dtd mozilla html 2.0//","-//webtechs//dtd mozilla html//"],G6=[...L1,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"],q6=new Set(["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"]),D1=["-//w3c//dtd xhtml 1.0 frameset//","-//w3c//dtd xhtml 1.0 transitional//"],J6=[...D1,"-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"];function N0(e,t){return t.some(n=>e.startsWith(n))}function Z6(e){return e.name===P1&&e.publicId===null&&(e.systemId===null||e.systemId===Q6)}function eS(e){if(e.name!==P1)return Tt.QUIRKS;const{systemId:t}=e;if(t&&t.toLowerCase()===$6)return Tt.QUIRKS;let{publicId:n}=e;if(n!==null){if(n=n.toLowerCase(),q6.has(n))return Tt.QUIRKS;let r=t===null?G6:L1;if(N0(n,r))return Tt.QUIRKS;if(r=t===null?D1:J6,N0(n,r))return Tt.LIMITED_QUIRKS}return Tt.NO_QUIRKS}const x0={TEXT_HTML:"text/html",APPLICATION_XML:"application/xhtml+xml"},tS="definitionurl",nS="definitionURL",rS=new Map(["attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map(e=>[e.toLowerCase(),e])),iS=new Map([["xlink:actuate",{prefix:"xlink",name:"actuate",namespace:L.XLINK}],["xlink:arcrole",{prefix:"xlink",name:"arcrole",namespace:L.XLINK}],["xlink:href",{prefix:"xlink",name:"href",namespace:L.XLINK}],["xlink:role",{prefix:"xlink",name:"role",namespace:L.XLINK}],["xlink:show",{prefix:"xlink",name:"show",namespace:L.XLINK}],["xlink:title",{prefix:"xlink",name:"title",namespace:L.XLINK}],["xlink:type",{prefix:"xlink",name:"type",namespace:L.XLINK}],["xml:lang",{prefix:"xml",name:"lang",namespace:L.XML}],["xml:space",{prefix:"xml",name:"space",namespace:L.XML}],["xmlns",{prefix:"",name:"xmlns",namespace:L.XMLNS}],["xmlns:xlink",{prefix:"xmlns",name:"xlink",namespace:L.XMLNS}]]),uS=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map(e=>[e.toLowerCase(),e])),aS=new Set([o.B,o.BIG,o.BLOCKQUOTE,o.BODY,o.BR,o.CENTER,o.CODE,o.DD,o.DIV,o.DL,o.DT,o.EM,o.EMBED,o.H1,o.H2,o.H3,o.H4,o.H5,o.H6,o.HEAD,o.HR,o.I,o.IMG,o.LI,o.LISTING,o.MENU,o.META,o.NOBR,o.OL,o.P,o.PRE,o.RUBY,o.S,o.SMALL,o.SPAN,o.STRONG,o.STRIKE,o.SUB,o.SUP,o.TABLE,o.TT,o.U,o.UL,o.VAR]);function sS(e){const t=e.tagID;return t===o.FONT&&e.attrs.some(({name:r})=>r===Gn.COLOR||r===Gn.SIZE||r===Gn.FACE)||aS.has(t)}function M1(e){for(let t=0;t<e.attrs.length;t++)if(e.attrs[t].name===tS){e.attrs[t].name=nS;break}}function B1(e){for(let t=0;t<e.attrs.length;t++){const n=rS.get(e.attrs[t].name);n!=null&&(e.attrs[t].name=n)}}function Hc(e){for(let t=0;t<e.attrs.length;t++){const n=iS.get(e.attrs[t].name);n&&(e.attrs[t].prefix=n.prefix,e.attrs[t].name=n.name,e.attrs[t].namespace=n.namespace)}}function lS(e){const t=uS.get(e.tagName);t!=null&&(e.tagName=t,e.tagID=ei(e.tagName))}function oS(e,t){return t===L.MATHML&&(e===o.MI||e===o.MO||e===o.MN||e===o.MS||e===o.MTEXT)}function cS(e,t,n){if(t===L.MATHML&&e===o.ANNOTATION_XML){for(let r=0;r<n.length;r++)if(n[r].name===Gn.ENCODING){const i=n[r].value.toLowerCase();return i===x0.TEXT_HTML||i===x0.APPLICATION_XML}}return t===L.SVG&&(e===o.FOREIGN_OBJECT||e===o.DESC||e===o.TITLE)}function fS(e,t,n,r){return(!r||r===L.HTML)&&cS(e,t,n)||(!r||r===L.MATHML)&&oS(e,t)}const dS="hidden",hS=8,pS=3;var k;(function(e){e[e.INITIAL=0]="INITIAL",e[e.BEFORE_HTML=1]="BEFORE_HTML",e[e.BEFORE_HEAD=2]="BEFORE_HEAD",e[e.IN_HEAD=3]="IN_HEAD",e[e.IN_HEAD_NO_SCRIPT=4]="IN_HEAD_NO_SCRIPT",e[e.AFTER_HEAD=5]="AFTER_HEAD",e[e.IN_BODY=6]="IN_BODY",e[e.TEXT=7]="TEXT",e[e.IN_TABLE=8]="IN_TABLE",e[e.IN_TABLE_TEXT=9]="IN_TABLE_TEXT",e[e.IN_CAPTION=10]="IN_CAPTION",e[e.IN_COLUMN_GROUP=11]="IN_COLUMN_GROUP",e[e.IN_TABLE_BODY=12]="IN_TABLE_BODY",e[e.IN_ROW=13]="IN_ROW",e[e.IN_CELL=14]="IN_CELL",e[e.IN_SELECT=15]="IN_SELECT",e[e.IN_SELECT_IN_TABLE=16]="IN_SELECT_IN_TABLE",e[e.IN_TEMPLATE=17]="IN_TEMPLATE",e[e.AFTER_BODY=18]="AFTER_BODY",e[e.IN_FRAMESET=19]="IN_FRAMESET",e[e.AFTER_FRAMESET=20]="AFTER_FRAMESET",e[e.AFTER_AFTER_BODY=21]="AFTER_AFTER_BODY",e[e.AFTER_AFTER_FRAMESET=22]="AFTER_AFTER_FRAMESET"})(k||(k={}));const mS={startLine:-1,startCol:-1,startOffset:-1,endLine:-1,endCol:-1,endOffset:-1},F1=new Set([o.TABLE,o.TBODY,o.TFOOT,o.THEAD,o.TR]),I0={scriptingEnabled:!0,sourceCodeLocationInfo:!1,treeAdapter:fn,onParseError:null};class v0{constructor(t,n,r=null,i=null){this.fragmentContext=r,this.scriptHandler=i,this.currentToken=null,this.stopped=!1,this.insertionMode=k.INITIAL,this.originalInsertionMode=k.INITIAL,this.headElement=null,this.formElement=null,this.currentNotInHTML=!1,this.tmplInsertionModeStack=[],this.pendingCharacterTokens=[],this.hasNonWhitespacePendingCharacterToken=!1,this.framesetOk=!0,this.skipNextNewLine=!1,this.fosterParentingEnabled=!1,this.options={...I0,...t},this.treeAdapter=this.options.treeAdapter,this.onParseError=this.options.onParseError,this.onParseError&&(this.options.sourceCodeLocationInfo=!0),this.document=n??this.treeAdapter.createDocument(),this.tokenizer=new H6(this.options,this),this.activeFormattingElements=new K6(this.treeAdapter),this.fragmentContextID=r?ei(this.treeAdapter.getTagName(r)):o.UNKNOWN,this._setContextModes(r??this.document,this.fragmentContextID),this.openElements=new X6(this.document,this.treeAdapter,this)}static parse(t,n){const r=new this(n);return r.tokenizer.write(t,!0),r.document}static getFragmentParser(t,n){const r={...I0,...n};t??(t=r.treeAdapter.createElement(v.TEMPLATE,L.HTML,[]));const i=r.treeAdapter.createElement("documentmock",L.HTML,[]),u=new this(r,i,t);return u.fragmentContextID===o.TEMPLATE&&u.tmplInsertionModeStack.unshift(k.IN_TEMPLATE),u._initTokenizerForFragmentParsing(),u._insertFakeRootElement(),u._resetInsertionMode(),u._findFormInFragmentContext(),u}getFragment(){const t=this.treeAdapter.getFirstChild(this.document),n=this.treeAdapter.createDocumentFragment();return this._adoptNodes(t,n),n}_err(t,n,r){var i;if(!this.onParseError)return;const u=(i=t.location)!==null&&i!==void 0?i:mS,a={code:n,startLine:u.startLine,startCol:u.startCol,startOffset:u.startOffset,endLine:r?u.startLine:u.endLine,endCol:r?u.startCol:u.endCol,endOffset:r?u.startOffset:u.endOffset};this.onParseError(a)}onItemPush(t,n,r){var i,u;(u=(i=this.treeAdapter).onItemPush)===null||u===void 0||u.call(i,t),r&&this.openElements.stackTop>0&&this._setContextModes(t,n)}onItemPop(t,n){var r,i;if(this.options.sourceCodeLocationInfo&&this._setEndLocation(t,this.currentToken),(i=(r=this.treeAdapter).onItemPop)===null||i===void 0||i.call(r,t,this.openElements.current),n){let u,a;this.openElements.stackTop===0&&this.fragmentContext?(u=this.fragmentContext,a=this.fragmentContextID):{current:u,currentTagId:a}=this.openElements,this._setContextModes(u,a)}}_setContextModes(t,n){const r=t===this.document||t&&this.treeAdapter.getNamespaceURI(t)===L.HTML;this.currentNotInHTML=!r,this.tokenizer.inForeignNode=!r&&t!==void 0&&n!==void 0&&!this._isIntegrationPoint(n,t)}_switchToTextParsing(t,n){this._insertElement(t,L.HTML),this.tokenizer.state=n,this.originalInsertionMode=this.insertionMode,this.insertionMode=k.TEXT}switchToPlaintextParsing(){this.insertionMode=k.TEXT,this.originalInsertionMode=k.IN_BODY,this.tokenizer.state=Se.PLAINTEXT}_getAdjustedCurrentElement(){return this.openElements.stackTop===0&&this.fragmentContext?this.fragmentContext:this.openElements.current}_findFormInFragmentContext(){let t=this.fragmentContext;for(;t;){if(this.treeAdapter.getTagName(t)===v.FORM){this.formElement=t;break}t=this.treeAdapter.getParentNode(t)}}_initTokenizerForFragmentParsing(){if(!(!this.fragmentContext||this.treeAdapter.getNamespaceURI(this.fragmentContext)!==L.HTML))switch(this.fragmentContextID){case o.TITLE:case o.TEXTAREA:{this.tokenizer.state=Se.RCDATA;break}case o.STYLE:case o.XMP:case o.IFRAME:case o.NOEMBED:case o.NOFRAMES:case o.NOSCRIPT:{this.tokenizer.state=Se.RAWTEXT;break}case o.SCRIPT:{this.tokenizer.state=Se.SCRIPT_DATA;break}case o.PLAINTEXT:{this.tokenizer.state=Se.PLAINTEXT;break}}}_setDocumentType(t){const n=t.name||"",r=t.publicId||"",i=t.systemId||"";if(this.treeAdapter.setDocumentType(this.document,n,r,i),t.location){const a=this.treeAdapter.getChildNodes(this.document).find(s=>this.treeAdapter.isDocumentTypeNode(s));a&&this.treeAdapter.setNodeSourceCodeLocation(a,t.location)}}_attachElementToTree(t,n){if(this.options.sourceCodeLocationInfo){const r=n&&{...n,startTag:n};this.treeAdapter.setNodeSourceCodeLocation(t,r)}if(this._shouldFosterParentOnInsertion())this._fosterParentElement(t);else{const r=this.openElements.currentTmplContentOrNode;this.treeAdapter.appendChild(r??this.document,t)}}_appendElement(t,n){const r=this.treeAdapter.createElement(t.tagName,n,t.attrs);this._attachElementToTree(r,t.location)}_insertElement(t,n){const r=this.treeAdapter.createElement(t.tagName,n,t.attrs);this._attachElementToTree(r,t.location),this.openElements.push(r,t.tagID)}_insertFakeElement(t,n){const r=this.treeAdapter.createElement(t,L.HTML,[]);this._attachElementToTree(r,null),this.openElements.push(r,n)}_insertTemplate(t){const n=this.treeAdapter.createElement(t.tagName,L.HTML,t.attrs),r=this.treeAdapter.createDocumentFragment();this.treeAdapter.setTemplateContent(n,r),this._attachElementToTree(n,t.location),this.openElements.push(n,t.tagID),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(r,null)}_insertFakeRootElement(){const t=this.treeAdapter.createElement(v.HTML,L.HTML,[]);this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(t,null),this.treeAdapter.appendChild(this.openElements.current,t),this.openElements.push(t,o.HTML)}_appendCommentNode(t,n){const r=this.treeAdapter.createCommentNode(t.data);this.treeAdapter.appendChild(n,r),this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(r,t.location)}_insertCharacters(t){let n,r;if(this._shouldFosterParentOnInsertion()?({parent:n,beforeElement:r}=this._findFosterParentingLocation(),r?this.treeAdapter.insertTextBefore(n,t.chars,r):this.treeAdapter.insertText(n,t.chars)):(n=this.openElements.currentTmplContentOrNode,this.treeAdapter.insertText(n,t.chars)),!t.location)return;const i=this.treeAdapter.getChildNodes(n),u=r?i.lastIndexOf(r):i.length,a=i[u-1];if(this.treeAdapter.getNodeSourceCodeLocation(a)){const{endLine:l,endCol:c,endOffset:d}=t.location;this.treeAdapter.updateNodeSourceCodeLocation(a,{endLine:l,endCol:c,endOffset:d})}else this.options.sourceCodeLocationInfo&&this.treeAdapter.setNodeSourceCodeLocation(a,t.location)}_adoptNodes(t,n){for(let r=this.treeAdapter.getFirstChild(t);r;r=this.treeAdapter.getFirstChild(t))this.treeAdapter.detachNode(r),this.treeAdapter.appendChild(n,r)}_setEndLocation(t,n){if(this.treeAdapter.getNodeSourceCodeLocation(t)&&n.location){const r=n.location,i=this.treeAdapter.getTagName(t),u=n.type===q.END_TAG&&i===n.tagName?{endTag:{...r},endLine:r.endLine,endCol:r.endCol,endOffset:r.endOffset}:{endLine:r.startLine,endCol:r.startCol,endOffset:r.startOffset};this.treeAdapter.updateNodeSourceCodeLocation(t,u)}}shouldProcessStartTagTokenInForeignContent(t){if(!this.currentNotInHTML)return!1;let n,r;return this.openElements.stackTop===0&&this.fragmentContext?(n=this.fragmentContext,r=this.fragmentContextID):{current:n,currentTagId:r}=this.openElements,t.tagID===o.SVG&&this.treeAdapter.getTagName(n)===v.ANNOTATION_XML&&this.treeAdapter.getNamespaceURI(n)===L.MATHML?!1:this.tokenizer.inForeignNode||(t.tagID===o.MGLYPH||t.tagID===o.MALIGNMARK)&&r!==void 0&&!this._isIntegrationPoint(r,n,L.HTML)}_processToken(t){switch(t.type){case q.CHARACTER:{this.onCharacter(t);break}case q.NULL_CHARACTER:{this.onNullCharacter(t);break}case q.COMMENT:{this.onComment(t);break}case q.DOCTYPE:{this.onDoctype(t);break}case q.START_TAG:{this._processStartTag(t);break}case q.END_TAG:{this.onEndTag(t);break}case q.EOF:{this.onEof(t);break}case q.WHITESPACE_CHARACTER:{this.onWhitespaceCharacter(t);break}}}_isIntegrationPoint(t,n,r){const i=this.treeAdapter.getNamespaceURI(n),u=this.treeAdapter.getAttrList(n);return fS(t,i,u,r)}_reconstructActiveFormattingElements(){const t=this.activeFormattingElements.entries.length;if(t){const n=this.activeFormattingElements.entries.findIndex(i=>i.type===Ht.Marker||this.openElements.contains(i.element)),r=n===-1?t-1:n-1;for(let i=r;i>=0;i--){const u=this.activeFormattingElements.entries[i];this._insertElement(u.token,this.treeAdapter.getNamespaceURI(u.element)),u.element=this.openElements.current}}}_closeTableCell(){this.openElements.generateImpliedEndTags(),this.openElements.popUntilTableCellPopped(),this.activeFormattingElements.clearToLastMarker(),this.insertionMode=k.IN_ROW}_closePElement(){this.openElements.generateImpliedEndTagsWithExclusion(o.P),this.openElements.popUntilTagNamePopped(o.P)}_resetInsertionMode(){for(let t=this.openElements.stackTop;t>=0;t--)switch(t===0&&this.fragmentContext?this.fragmentContextID:this.openElements.tagIDs[t]){case o.TR:{this.insertionMode=k.IN_ROW;return}case o.TBODY:case o.THEAD:case o.TFOOT:{this.insertionMode=k.IN_TABLE_BODY;return}case o.CAPTION:{this.insertionMode=k.IN_CAPTION;return}case o.COLGROUP:{this.insertionMode=k.IN_COLUMN_GROUP;return}case o.TABLE:{this.insertionMode=k.IN_TABLE;return}case o.BODY:{this.insertionMode=k.IN_BODY;return}case o.FRAMESET:{this.insertionMode=k.IN_FRAMESET;return}case o.SELECT:{this._resetInsertionModeForSelect(t);return}case o.TEMPLATE:{this.insertionMode=this.tmplInsertionModeStack[0];return}case o.HTML:{this.insertionMode=this.headElement?k.AFTER_HEAD:k.BEFORE_HEAD;return}case o.TD:case o.TH:{if(t>0){this.insertionMode=k.IN_CELL;return}break}case o.HEAD:{if(t>0){this.insertionMode=k.IN_HEAD;return}break}}this.insertionMode=k.IN_BODY}_resetInsertionModeForSelect(t){if(t>0)for(let n=t-1;n>0;n--){const r=this.openElements.tagIDs[n];if(r===o.TEMPLATE)break;if(r===o.TABLE){this.insertionMode=k.IN_SELECT_IN_TABLE;return}}this.insertionMode=k.IN_SELECT}_isElementCausesFosterParenting(t){return F1.has(t)}_shouldFosterParentOnInsertion(){return this.fosterParentingEnabled&&this.openElements.currentTagId!==void 0&&this._isElementCausesFosterParenting(this.openElements.currentTagId)}_findFosterParentingLocation(){for(let t=this.openElements.stackTop;t>=0;t--){const n=this.openElements.items[t];switch(this.openElements.tagIDs[t]){case o.TEMPLATE:{if(this.treeAdapter.getNamespaceURI(n)===L.HTML)return{parent:this.treeAdapter.getTemplateContent(n),beforeElement:null};break}case o.TABLE:{const r=this.treeAdapter.getParentNode(n);return r?{parent:r,beforeElement:n}:{parent:this.openElements.items[t-1],beforeElement:null}}}}return{parent:this.openElements.items[0],beforeElement:null}}_fosterParentElement(t){const n=this._findFosterParentingLocation();n.beforeElement?this.treeAdapter.insertBefore(n.parent,t,n.beforeElement):this.treeAdapter.appendChild(n.parent,t)}_isSpecialElement(t,n){const r=this.treeAdapter.getNamespaceURI(t);return D6[r].has(n)}onCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){YN(this,t);return}switch(this.insertionMode){case k.INITIAL:{pi(this,t);break}case k.BEFORE_HTML:{Li(this,t);break}case k.BEFORE_HEAD:{Di(this,t);break}case k.IN_HEAD:{Mi(this,t);break}case k.IN_HEAD_NO_SCRIPT:{Bi(this,t);break}case k.AFTER_HEAD:{Fi(this,t);break}case k.IN_BODY:case k.IN_CAPTION:case k.IN_CELL:case k.IN_TEMPLATE:{U1(this,t);break}case k.TEXT:case k.IN_SELECT:case k.IN_SELECT_IN_TABLE:{this._insertCharacters(t);break}case k.IN_TABLE:case k.IN_TABLE_BODY:case k.IN_ROW:{il(this,t);break}case k.IN_TABLE_TEXT:{X1(this,t);break}case k.IN_COLUMN_GROUP:{Da(this,t);break}case k.AFTER_BODY:{Ma(this,t);break}case k.AFTER_AFTER_BODY:{ia(this,t);break}}}onNullCharacter(t){if(this.skipNextNewLine=!1,this.tokenizer.inForeignNode){WN(this,t);return}switch(this.insertionMode){case k.INITIAL:{pi(this,t);break}case k.BEFORE_HTML:{Li(this,t);break}case k.BEFORE_HEAD:{Di(this,t);break}case k.IN_HEAD:{Mi(this,t);break}case k.IN_HEAD_NO_SCRIPT:{Bi(this,t);break}case k.AFTER_HEAD:{Fi(this,t);break}case k.TEXT:{this._insertCharacters(t);break}case k.IN_TABLE:case k.IN_TABLE_BODY:case k.IN_ROW:{il(this,t);break}case k.IN_COLUMN_GROUP:{Da(this,t);break}case k.AFTER_BODY:{Ma(this,t);break}case k.AFTER_AFTER_BODY:{ia(this,t);break}}}onComment(t){if(this.skipNextNewLine=!1,this.currentNotInHTML){go(this,t);return}switch(this.insertionMode){case k.INITIAL:case k.BEFORE_HTML:case k.BEFORE_HEAD:case k.IN_HEAD:case k.IN_HEAD_NO_SCRIPT:case k.AFTER_HEAD:case k.IN_BODY:case k.IN_TABLE:case k.IN_CAPTION:case k.IN_COLUMN_GROUP:case k.IN_TABLE_BODY:case k.IN_ROW:case k.IN_CELL:case k.IN_SELECT:case k.IN_SELECT_IN_TABLE:case k.IN_TEMPLATE:case k.IN_FRAMESET:case k.AFTER_FRAMESET:{go(this,t);break}case k.IN_TABLE_TEXT:{mi(this,t);break}case k.AFTER_BODY:{kS(this,t);break}case k.AFTER_AFTER_BODY:case k.AFTER_AFTER_FRAMESET:{CS(this,t);break}}}onDoctype(t){switch(this.skipNextNewLine=!1,this.insertionMode){case k.INITIAL:{AS(this,t);break}case k.BEFORE_HEAD:case k.IN_HEAD:case k.IN_HEAD_NO_SCRIPT:case k.AFTER_HEAD:{this._err(t,R.misplacedDoctype);break}case k.IN_TABLE_TEXT:{mi(this,t);break}}}onStartTag(t){this.skipNextNewLine=!1,this.currentToken=t,this._processStartTag(t),t.selfClosing&&!t.ackSelfClosing&&this._err(t,R.nonVoidHtmlElementStartTagWithTrailingSolidus)}_processStartTag(t){this.shouldProcessStartTagTokenInForeignContent(t)?XN(this,t):this._startTagOutsideForeignContent(t)}_startTagOutsideForeignContent(t){switch(this.insertionMode){case k.INITIAL:{pi(this,t);break}case k.BEFORE_HTML:{SS(this,t);break}case k.BEFORE_HEAD:{xS(this,t);break}case k.IN_HEAD:{Pt(this,t);break}case k.IN_HEAD_NO_SCRIPT:{wS(this,t);break}case k.AFTER_HEAD:{OS(this,t);break}case k.IN_BODY:{Xe(this,t);break}case k.IN_TABLE:{Yr(this,t);break}case k.IN_TABLE_TEXT:{mi(this,t);break}case k.IN_CAPTION:{IN(this,t);break}case k.IN_COLUMN_GROUP:{jc(this,t);break}case k.IN_TABLE_BODY:{ds(this,t);break}case k.IN_ROW:{hs(this,t);break}case k.IN_CELL:{RN(this,t);break}case k.IN_SELECT:{$1(this,t);break}case k.IN_SELECT_IN_TABLE:{PN(this,t);break}case k.IN_TEMPLATE:{DN(this,t);break}case k.AFTER_BODY:{BN(this,t);break}case k.IN_FRAMESET:{FN(this,t);break}case k.AFTER_FRAMESET:{UN(this,t);break}case k.AFTER_AFTER_BODY:{jN(this,t);break}case k.AFTER_AFTER_FRAMESET:{VN(this,t);break}}}onEndTag(t){this.skipNextNewLine=!1,this.currentToken=t,this.currentNotInHTML?KN(this,t):this._endTagOutsideForeignContent(t)}_endTagOutsideForeignContent(t){switch(this.insertionMode){case k.INITIAL:{pi(this,t);break}case k.BEFORE_HTML:{NS(this,t);break}case k.BEFORE_HEAD:{IS(this,t);break}case k.IN_HEAD:{vS(this,t);break}case k.IN_HEAD_NO_SCRIPT:{RS(this,t);break}case k.AFTER_HEAD:{PS(this,t);break}case k.IN_BODY:{fs(this,t);break}case k.TEXT:{TN(this,t);break}case k.IN_TABLE:{lu(this,t);break}case k.IN_TABLE_TEXT:{mi(this,t);break}case k.IN_CAPTION:{vN(this,t);break}case k.IN_COLUMN_GROUP:{wN(this,t);break}case k.IN_TABLE_BODY:{Eo(this,t);break}case k.IN_ROW:{Q1(this,t);break}case k.IN_CELL:{ON(this,t);break}case k.IN_SELECT:{G1(this,t);break}case k.IN_SELECT_IN_TABLE:{LN(this,t);break}case k.IN_TEMPLATE:{MN(this,t);break}case k.AFTER_BODY:{J1(this,t);break}case k.IN_FRAMESET:{HN(this,t);break}case k.AFTER_FRAMESET:{zN(this,t);break}case k.AFTER_AFTER_BODY:{ia(this,t);break}}}onEof(t){switch(this.insertionMode){case k.INITIAL:{pi(this,t);break}case k.BEFORE_HTML:{Li(this,t);break}case k.BEFORE_HEAD:{Di(this,t);break}case k.IN_HEAD:{Mi(this,t);break}case k.IN_HEAD_NO_SCRIPT:{Bi(this,t);break}case k.AFTER_HEAD:{Fi(this,t);break}case k.IN_BODY:case k.IN_TABLE:case k.IN_CAPTION:case k.IN_COLUMN_GROUP:case k.IN_TABLE_BODY:case k.IN_ROW:case k.IN_CELL:case k.IN_SELECT:case k.IN_SELECT_IN_TABLE:{W1(this,t);break}case k.TEXT:{yN(this,t);break}case k.IN_TABLE_TEXT:{mi(this,t);break}case k.IN_TEMPLATE:{q1(this,t);break}case k.AFTER_BODY:case k.IN_FRAMESET:case k.AFTER_FRAMESET:case k.AFTER_AFTER_BODY:case k.AFTER_AFTER_FRAMESET:{zc(this,t);break}}}onWhitespaceCharacter(t){if(this.skipNextNewLine&&(this.skipNextNewLine=!1,t.chars.charCodeAt(0)===g.LINE_FEED)){if(t.chars.length===1)return;t.chars=t.chars.substr(1)}if(this.tokenizer.inForeignNode){this._insertCharacters(t);return}switch(this.insertionMode){case k.IN_HEAD:case k.IN_HEAD_NO_SCRIPT:case k.AFTER_HEAD:case k.TEXT:case k.IN_COLUMN_GROUP:case k.IN_SELECT:case k.IN_SELECT_IN_TABLE:case k.IN_FRAMESET:case k.AFTER_FRAMESET:{this._insertCharacters(t);break}case k.IN_BODY:case k.IN_CAPTION:case k.IN_CELL:case k.IN_TEMPLATE:case k.AFTER_BODY:case k.AFTER_AFTER_BODY:case k.AFTER_AFTER_FRAMESET:{H1(this,t);break}case k.IN_TABLE:case k.IN_TABLE_BODY:case k.IN_ROW:{il(this,t);break}case k.IN_TABLE_TEXT:{Y1(this,t);break}}}}function gS(e,t){let n=e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);return n?e.openElements.contains(n.element)?e.openElements.hasInScope(t.tagID)||(n=null):(e.activeFormattingElements.removeEntry(n),n=null):V1(e,t),n}function ES(e,t){let n=null,r=e.openElements.stackTop;for(;r>=0;r--){const i=e.openElements.items[r];if(i===t.element)break;e._isSpecialElement(i,e.openElements.tagIDs[r])&&(n=i)}return n||(e.openElements.shortenToLength(Math.max(r,0)),e.activeFormattingElements.removeEntry(t)),n}function TS(e,t,n){let r=t,i=e.openElements.getCommonAncestor(t);for(let u=0,a=i;a!==n;u++,a=i){i=e.openElements.getCommonAncestor(a);const s=e.activeFormattingElements.getElementEntry(a),l=s&&u>=pS;!s||l?(l&&e.activeFormattingElements.removeEntry(s),e.openElements.remove(a)):(a=yS(e,s),r===t&&(e.activeFormattingElements.bookmark=s),e.treeAdapter.detachNode(r),e.treeAdapter.appendChild(a,r),r=a)}return r}function yS(e,t){const n=e.treeAdapter.getNamespaceURI(t.element),r=e.treeAdapter.createElement(t.token.tagName,n,t.token.attrs);return e.openElements.replace(t.element,r),t.element=r,r}function _S(e,t,n){const r=e.treeAdapter.getTagName(t),i=ei(r);if(e._isElementCausesFosterParenting(i))e._fosterParentElement(n);else{const u=e.treeAdapter.getNamespaceURI(t);i===o.TEMPLATE&&u===L.HTML&&(t=e.treeAdapter.getTemplateContent(t)),e.treeAdapter.appendChild(t,n)}}function bS(e,t,n){const r=e.treeAdapter.getNamespaceURI(n.element),{token:i}=n,u=e.treeAdapter.createElement(i.tagName,r,i.attrs);e._adoptNodes(t,u),e.treeAdapter.appendChild(t,u),e.activeFormattingElements.insertElementAfterBookmark(u,i),e.activeFormattingElements.removeEntry(n),e.openElements.remove(n.element),e.openElements.insertAfter(t,u,i.tagID)}function Uc(e,t){for(let n=0;n<hS;n++){const r=gS(e,t);if(!r)break;const i=ES(e,r);if(!i)break;e.activeFormattingElements.bookmark=r;const u=TS(e,i,r.element),a=e.openElements.getCommonAncestor(r.element);e.treeAdapter.detachNode(u),a&&_S(e,a,u),bS(e,i,r)}}function go(e,t){e._appendCommentNode(t,e.openElements.currentTmplContentOrNode)}function kS(e,t){e._appendCommentNode(t,e.openElements.items[0])}function CS(e,t){e._appendCommentNode(t,e.document)}function zc(e,t){if(e.stopped=!0,t.location){const n=e.fragmentContext?0:2;for(let r=e.openElements.stackTop;r>=n;r--)e._setEndLocation(e.openElements.items[r],t);if(!e.fragmentContext&&e.openElements.stackTop>=0){const r=e.openElements.items[0],i=e.treeAdapter.getNodeSourceCodeLocation(r);if(i&&!i.endTag&&(e._setEndLocation(r,t),e.openElements.stackTop>=1)){const u=e.openElements.items[1],a=e.treeAdapter.getNodeSourceCodeLocation(u);a&&!a.endTag&&e._setEndLocation(u,t)}}}}function AS(e,t){e._setDocumentType(t);const n=t.forceQuirks?Tt.QUIRKS:eS(t);Z6(t)||e._err(t,R.nonConformingDoctype),e.treeAdapter.setDocumentMode(e.document,n),e.insertionMode=k.BEFORE_HTML}function pi(e,t){e._err(t,R.missingDoctype,!0),e.treeAdapter.setDocumentMode(e.document,Tt.QUIRKS),e.insertionMode=k.BEFORE_HTML,e._processToken(t)}function SS(e,t){t.tagID===o.HTML?(e._insertElement(t,L.HTML),e.insertionMode=k.BEFORE_HEAD):Li(e,t)}function NS(e,t){const n=t.tagID;(n===o.HTML||n===o.HEAD||n===o.BODY||n===o.BR)&&Li(e,t)}function Li(e,t){e._insertFakeRootElement(),e.insertionMode=k.BEFORE_HEAD,e._processToken(t)}function xS(e,t){switch(t.tagID){case o.HTML:{Xe(e,t);break}case o.HEAD:{e._insertElement(t,L.HTML),e.headElement=e.openElements.current,e.insertionMode=k.IN_HEAD;break}default:Di(e,t)}}function IS(e,t){const n=t.tagID;n===o.HEAD||n===o.BODY||n===o.HTML||n===o.BR?Di(e,t):e._err(t,R.endTagWithoutMatchingOpenElement)}function Di(e,t){e._insertFakeElement(v.HEAD,o.HEAD),e.headElement=e.openElements.current,e.insertionMode=k.IN_HEAD,e._processToken(t)}function Pt(e,t){switch(t.tagID){case o.HTML:{Xe(e,t);break}case o.BASE:case o.BASEFONT:case o.BGSOUND:case o.LINK:case o.META:{e._appendElement(t,L.HTML),t.ackSelfClosing=!0;break}case o.TITLE:{e._switchToTextParsing(t,Se.RCDATA);break}case o.NOSCRIPT:{e.options.scriptingEnabled?e._switchToTextParsing(t,Se.RAWTEXT):(e._insertElement(t,L.HTML),e.insertionMode=k.IN_HEAD_NO_SCRIPT);break}case o.NOFRAMES:case o.STYLE:{e._switchToTextParsing(t,Se.RAWTEXT);break}case o.SCRIPT:{e._switchToTextParsing(t,Se.SCRIPT_DATA);break}case o.TEMPLATE:{e._insertTemplate(t),e.activeFormattingElements.insertMarker(),e.framesetOk=!1,e.insertionMode=k.IN_TEMPLATE,e.tmplInsertionModeStack.unshift(k.IN_TEMPLATE);break}case o.HEAD:{e._err(t,R.misplacedStartTagForHeadElement);break}default:Mi(e,t)}}function vS(e,t){switch(t.tagID){case o.HEAD:{e.openElements.pop(),e.insertionMode=k.AFTER_HEAD;break}case o.BODY:case o.BR:case o.HTML:{Mi(e,t);break}case o.TEMPLATE:{sr(e,t);break}default:e._err(t,R.endTagWithoutMatchingOpenElement)}}function sr(e,t){e.openElements.tmplCount>0?(e.openElements.generateImpliedEndTagsThoroughly(),e.openElements.currentTagId!==o.TEMPLATE&&e._err(t,R.closingOfElementWithOpenChildElements),e.openElements.popUntilTagNamePopped(o.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode()):e._err(t,R.endTagWithoutMatchingOpenElement)}function Mi(e,t){e.openElements.pop(),e.insertionMode=k.AFTER_HEAD,e._processToken(t)}function wS(e,t){switch(t.tagID){case o.HTML:{Xe(e,t);break}case o.BASEFONT:case o.BGSOUND:case o.HEAD:case o.LINK:case o.META:case o.NOFRAMES:case o.STYLE:{Pt(e,t);break}case o.NOSCRIPT:{e._err(t,R.nestedNoscriptInHead);break}default:Bi(e,t)}}function RS(e,t){switch(t.tagID){case o.NOSCRIPT:{e.openElements.pop(),e.insertionMode=k.IN_HEAD;break}case o.BR:{Bi(e,t);break}default:e._err(t,R.endTagWithoutMatchingOpenElement)}}function Bi(e,t){const n=t.type===q.EOF?R.openElementsLeftAfterEof:R.disallowedContentInNoscriptInHead;e._err(t,n),e.openElements.pop(),e.insertionMode=k.IN_HEAD,e._processToken(t)}function OS(e,t){switch(t.tagID){case o.HTML:{Xe(e,t);break}case o.BODY:{e._insertElement(t,L.HTML),e.framesetOk=!1,e.insertionMode=k.IN_BODY;break}case o.FRAMESET:{e._insertElement(t,L.HTML),e.insertionMode=k.IN_FRAMESET;break}case o.BASE:case o.BASEFONT:case o.BGSOUND:case o.LINK:case o.META:case o.NOFRAMES:case o.SCRIPT:case o.STYLE:case o.TEMPLATE:case o.TITLE:{e._err(t,R.abandonedHeadElementChild),e.openElements.push(e.headElement,o.HEAD),Pt(e,t),e.openElements.remove(e.headElement);break}case o.HEAD:{e._err(t,R.misplacedStartTagForHeadElement);break}default:Fi(e,t)}}function PS(e,t){switch(t.tagID){case o.BODY:case o.HTML:case o.BR:{Fi(e,t);break}case o.TEMPLATE:{sr(e,t);break}default:e._err(t,R.endTagWithoutMatchingOpenElement)}}function Fi(e,t){e._insertFakeElement(v.BODY,o.BODY),e.insertionMode=k.IN_BODY,cs(e,t)}function cs(e,t){switch(t.type){case q.CHARACTER:{U1(e,t);break}case q.WHITESPACE_CHARACTER:{H1(e,t);break}case q.COMMENT:{go(e,t);break}case q.START_TAG:{Xe(e,t);break}case q.END_TAG:{fs(e,t);break}case q.EOF:{W1(e,t);break}}}function H1(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t)}function U1(e,t){e._reconstructActiveFormattingElements(),e._insertCharacters(t),e.framesetOk=!1}function LS(e,t){e.openElements.tmplCount===0&&e.treeAdapter.adoptAttributes(e.openElements.items[0],t.attrs)}function DS(e,t){const n=e.openElements.tryPeekProperlyNestedBodyElement();n&&e.openElements.tmplCount===0&&(e.framesetOk=!1,e.treeAdapter.adoptAttributes(n,t.attrs))}function MS(e,t){const n=e.openElements.tryPeekProperlyNestedBodyElement();e.framesetOk&&n&&(e.treeAdapter.detachNode(n),e.openElements.popAllUpToHtmlElement(),e._insertElement(t,L.HTML),e.insertionMode=k.IN_FRAMESET)}function BS(e,t){e.openElements.hasInButtonScope(o.P)&&e._closePElement(),e._insertElement(t,L.HTML)}function FS(e,t){e.openElements.hasInButtonScope(o.P)&&e._closePElement(),e.openElements.currentTagId!==void 0&&mo.has(e.openElements.currentTagId)&&e.openElements.pop(),e._insertElement(t,L.HTML)}function HS(e,t){e.openElements.hasInButtonScope(o.P)&&e._closePElement(),e._insertElement(t,L.HTML),e.skipNextNewLine=!0,e.framesetOk=!1}function US(e,t){const n=e.openElements.tmplCount>0;(!e.formElement||n)&&(e.openElements.hasInButtonScope(o.P)&&e._closePElement(),e._insertElement(t,L.HTML),n||(e.formElement=e.openElements.current))}function zS(e,t){e.framesetOk=!1;const n=t.tagID;for(let r=e.openElements.stackTop;r>=0;r--){const i=e.openElements.tagIDs[r];if(n===o.LI&&i===o.LI||(n===o.DD||n===o.DT)&&(i===o.DD||i===o.DT)){e.openElements.generateImpliedEndTagsWithExclusion(i),e.openElements.popUntilTagNamePopped(i);break}if(i!==o.ADDRESS&&i!==o.DIV&&i!==o.P&&e._isSpecialElement(e.openElements.items[r],i))break}e.openElements.hasInButtonScope(o.P)&&e._closePElement(),e._insertElement(t,L.HTML)}function jS(e,t){e.openElements.hasInButtonScope(o.P)&&e._closePElement(),e._insertElement(t,L.HTML),e.tokenizer.state=Se.PLAINTEXT}function VS(e,t){e.openElements.hasInScope(o.BUTTON)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(o.BUTTON)),e._reconstructActiveFormattingElements(),e._insertElement(t,L.HTML),e.framesetOk=!1}function WS(e,t){const n=e.activeFormattingElements.getElementEntryInScopeWithTagName(v.A);n&&(Uc(e,t),e.openElements.remove(n.element),e.activeFormattingElements.removeEntry(n)),e._reconstructActiveFormattingElements(),e._insertElement(t,L.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function YS(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,L.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function XS(e,t){e._reconstructActiveFormattingElements(),e.openElements.hasInScope(o.NOBR)&&(Uc(e,t),e._reconstructActiveFormattingElements()),e._insertElement(t,L.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)}function KS(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,L.HTML),e.activeFormattingElements.insertMarker(),e.framesetOk=!1}function QS(e,t){e.treeAdapter.getDocumentMode(e.document)!==Tt.QUIRKS&&e.openElements.hasInButtonScope(o.P)&&e._closePElement(),e._insertElement(t,L.HTML),e.framesetOk=!1,e.insertionMode=k.IN_TABLE}function z1(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,L.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function j1(e){const t=w1(e,Gn.TYPE);return t!=null&&t.toLowerCase()===dS}function $S(e,t){e._reconstructActiveFormattingElements(),e._appendElement(t,L.HTML),j1(t)||(e.framesetOk=!1),t.ackSelfClosing=!0}function GS(e,t){e._appendElement(t,L.HTML),t.ackSelfClosing=!0}function qS(e,t){e.openElements.hasInButtonScope(o.P)&&e._closePElement(),e._appendElement(t,L.HTML),e.framesetOk=!1,t.ackSelfClosing=!0}function JS(e,t){t.tagName=v.IMG,t.tagID=o.IMG,z1(e,t)}function ZS(e,t){e._insertElement(t,L.HTML),e.skipNextNewLine=!0,e.tokenizer.state=Se.RCDATA,e.originalInsertionMode=e.insertionMode,e.framesetOk=!1,e.insertionMode=k.TEXT}function eN(e,t){e.openElements.hasInButtonScope(o.P)&&e._closePElement(),e._reconstructActiveFormattingElements(),e.framesetOk=!1,e._switchToTextParsing(t,Se.RAWTEXT)}function tN(e,t){e.framesetOk=!1,e._switchToTextParsing(t,Se.RAWTEXT)}function w0(e,t){e._switchToTextParsing(t,Se.RAWTEXT)}function nN(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,L.HTML),e.framesetOk=!1,e.insertionMode=e.insertionMode===k.IN_TABLE||e.insertionMode===k.IN_CAPTION||e.insertionMode===k.IN_TABLE_BODY||e.insertionMode===k.IN_ROW||e.insertionMode===k.IN_CELL?k.IN_SELECT_IN_TABLE:k.IN_SELECT}function rN(e,t){e.openElements.currentTagId===o.OPTION&&e.openElements.pop(),e._reconstructActiveFormattingElements(),e._insertElement(t,L.HTML)}function iN(e,t){e.openElements.hasInScope(o.RUBY)&&e.openElements.generateImpliedEndTags(),e._insertElement(t,L.HTML)}function uN(e,t){e.openElements.hasInScope(o.RUBY)&&e.openElements.generateImpliedEndTagsWithExclusion(o.RTC),e._insertElement(t,L.HTML)}function aN(e,t){e._reconstructActiveFormattingElements(),M1(t),Hc(t),t.selfClosing?e._appendElement(t,L.MATHML):e._insertElement(t,L.MATHML),t.ackSelfClosing=!0}function sN(e,t){e._reconstructActiveFormattingElements(),B1(t),Hc(t),t.selfClosing?e._appendElement(t,L.SVG):e._insertElement(t,L.SVG),t.ackSelfClosing=!0}function R0(e,t){e._reconstructActiveFormattingElements(),e._insertElement(t,L.HTML)}function Xe(e,t){switch(t.tagID){case o.I:case o.S:case o.B:case o.U:case o.EM:case o.TT:case o.BIG:case o.CODE:case o.FONT:case o.SMALL:case o.STRIKE:case o.STRONG:{YS(e,t);break}case o.A:{WS(e,t);break}case o.H1:case o.H2:case o.H3:case o.H4:case o.H5:case o.H6:{FS(e,t);break}case o.P:case o.DL:case o.OL:case o.UL:case o.DIV:case o.DIR:case o.NAV:case o.MAIN:case o.MENU:case o.ASIDE:case o.CENTER:case o.FIGURE:case o.FOOTER:case o.HEADER:case o.HGROUP:case o.DIALOG:case o.DETAILS:case o.ADDRESS:case o.ARTICLE:case o.SEARCH:case o.SECTION:case o.SUMMARY:case o.FIELDSET:case o.BLOCKQUOTE:case o.FIGCAPTION:{BS(e,t);break}case o.LI:case o.DD:case o.DT:{zS(e,t);break}case o.BR:case o.IMG:case o.WBR:case o.AREA:case o.EMBED:case o.KEYGEN:{z1(e,t);break}case o.HR:{qS(e,t);break}case o.RB:case o.RTC:{iN(e,t);break}case o.RT:case o.RP:{uN(e,t);break}case o.PRE:case o.LISTING:{HS(e,t);break}case o.XMP:{eN(e,t);break}case o.SVG:{sN(e,t);break}case o.HTML:{LS(e,t);break}case o.BASE:case o.LINK:case o.META:case o.STYLE:case o.TITLE:case o.SCRIPT:case o.BGSOUND:case o.BASEFONT:case o.TEMPLATE:{Pt(e,t);break}case o.BODY:{DS(e,t);break}case o.FORM:{US(e,t);break}case o.NOBR:{XS(e,t);break}case o.MATH:{aN(e,t);break}case o.TABLE:{QS(e,t);break}case o.INPUT:{$S(e,t);break}case o.PARAM:case o.TRACK:case o.SOURCE:{GS(e,t);break}case o.IMAGE:{JS(e,t);break}case o.BUTTON:{VS(e,t);break}case o.APPLET:case o.OBJECT:case o.MARQUEE:{KS(e,t);break}case o.IFRAME:{tN(e,t);break}case o.SELECT:{nN(e,t);break}case o.OPTION:case o.OPTGROUP:{rN(e,t);break}case o.NOEMBED:case o.NOFRAMES:{w0(e,t);break}case o.FRAMESET:{MS(e,t);break}case o.TEXTAREA:{ZS(e,t);break}case o.NOSCRIPT:{e.options.scriptingEnabled?w0(e,t):R0(e,t);break}case o.PLAINTEXT:{jS(e,t);break}case o.COL:case o.TH:case o.TD:case o.TR:case o.HEAD:case o.FRAME:case o.TBODY:case o.TFOOT:case o.THEAD:case o.CAPTION:case o.COLGROUP:break;default:R0(e,t)}}function lN(e,t){if(e.openElements.hasInScope(o.BODY)&&(e.insertionMode=k.AFTER_BODY,e.options.sourceCodeLocationInfo)){const n=e.openElements.tryPeekProperlyNestedBodyElement();n&&e._setEndLocation(n,t)}}function oN(e,t){e.openElements.hasInScope(o.BODY)&&(e.insertionMode=k.AFTER_BODY,J1(e,t))}function cN(e,t){const n=t.tagID;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n))}function fN(e){const t=e.openElements.tmplCount>0,{formElement:n}=e;t||(e.formElement=null),(n||t)&&e.openElements.hasInScope(o.FORM)&&(e.openElements.generateImpliedEndTags(),t?e.openElements.popUntilTagNamePopped(o.FORM):n&&e.openElements.remove(n))}function dN(e){e.openElements.hasInButtonScope(o.P)||e._insertFakeElement(v.P,o.P),e._closePElement()}function hN(e){e.openElements.hasInListItemScope(o.LI)&&(e.openElements.generateImpliedEndTagsWithExclusion(o.LI),e.openElements.popUntilTagNamePopped(o.LI))}function pN(e,t){const n=t.tagID;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTagsWithExclusion(n),e.openElements.popUntilTagNamePopped(n))}function mN(e){e.openElements.hasNumberedHeaderInScope()&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilNumberedHeaderPopped())}function gN(e,t){const n=t.tagID;e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n),e.activeFormattingElements.clearToLastMarker())}function EN(e){e._reconstructActiveFormattingElements(),e._insertFakeElement(v.BR,o.BR),e.openElements.pop(),e.framesetOk=!1}function V1(e,t){const n=t.tagName,r=t.tagID;for(let i=e.openElements.stackTop;i>0;i--){const u=e.openElements.items[i],a=e.openElements.tagIDs[i];if(r===a&&(r!==o.UNKNOWN||e.treeAdapter.getTagName(u)===n)){e.openElements.generateImpliedEndTagsWithExclusion(r),e.openElements.stackTop>=i&&e.openElements.shortenToLength(i);break}if(e._isSpecialElement(u,a))break}}function fs(e,t){switch(t.tagID){case o.A:case o.B:case o.I:case o.S:case o.U:case o.EM:case o.TT:case o.BIG:case o.CODE:case o.FONT:case o.NOBR:case o.SMALL:case o.STRIKE:case o.STRONG:{Uc(e,t);break}case o.P:{dN(e);break}case o.DL:case o.UL:case o.OL:case o.DIR:case o.DIV:case o.NAV:case o.PRE:case o.MAIN:case o.MENU:case o.ASIDE:case o.BUTTON:case o.CENTER:case o.FIGURE:case o.FOOTER:case o.HEADER:case o.HGROUP:case o.DIALOG:case o.ADDRESS:case o.ARTICLE:case o.DETAILS:case o.SEARCH:case o.SECTION:case o.SUMMARY:case o.LISTING:case o.FIELDSET:case o.BLOCKQUOTE:case o.FIGCAPTION:{cN(e,t);break}case o.LI:{hN(e);break}case o.DD:case o.DT:{pN(e,t);break}case o.H1:case o.H2:case o.H3:case o.H4:case o.H5:case o.H6:{mN(e);break}case o.BR:{EN(e);break}case o.BODY:{lN(e,t);break}case o.HTML:{oN(e,t);break}case o.FORM:{fN(e);break}case o.APPLET:case o.OBJECT:case o.MARQUEE:{gN(e,t);break}case o.TEMPLATE:{sr(e,t);break}default:V1(e,t)}}function W1(e,t){e.tmplInsertionModeStack.length>0?q1(e,t):zc(e,t)}function TN(e,t){var n;t.tagID===o.SCRIPT&&((n=e.scriptHandler)===null||n===void 0||n.call(e,e.openElements.current)),e.openElements.pop(),e.insertionMode=e.originalInsertionMode}function yN(e,t){e._err(t,R.eofInElementThatCanContainOnlyText),e.openElements.pop(),e.insertionMode=e.originalInsertionMode,e.onEof(t)}function il(e,t){if(e.openElements.currentTagId!==void 0&&F1.has(e.openElements.currentTagId))switch(e.pendingCharacterTokens.length=0,e.hasNonWhitespacePendingCharacterToken=!1,e.originalInsertionMode=e.insertionMode,e.insertionMode=k.IN_TABLE_TEXT,t.type){case q.CHARACTER:{X1(e,t);break}case q.WHITESPACE_CHARACTER:{Y1(e,t);break}}else Tu(e,t)}function _N(e,t){e.openElements.clearBackToTableContext(),e.activeFormattingElements.insertMarker(),e._insertElement(t,L.HTML),e.insertionMode=k.IN_CAPTION}function bN(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,L.HTML),e.insertionMode=k.IN_COLUMN_GROUP}function kN(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(v.COLGROUP,o.COLGROUP),e.insertionMode=k.IN_COLUMN_GROUP,jc(e,t)}function CN(e,t){e.openElements.clearBackToTableContext(),e._insertElement(t,L.HTML),e.insertionMode=k.IN_TABLE_BODY}function AN(e,t){e.openElements.clearBackToTableContext(),e._insertFakeElement(v.TBODY,o.TBODY),e.insertionMode=k.IN_TABLE_BODY,ds(e,t)}function SN(e,t){e.openElements.hasInTableScope(o.TABLE)&&(e.openElements.popUntilTagNamePopped(o.TABLE),e._resetInsertionMode(),e._processStartTag(t))}function NN(e,t){j1(t)?e._appendElement(t,L.HTML):Tu(e,t),t.ackSelfClosing=!0}function xN(e,t){!e.formElement&&e.openElements.tmplCount===0&&(e._insertElement(t,L.HTML),e.formElement=e.openElements.current,e.openElements.pop())}function Yr(e,t){switch(t.tagID){case o.TD:case o.TH:case o.TR:{AN(e,t);break}case o.STYLE:case o.SCRIPT:case o.TEMPLATE:{Pt(e,t);break}case o.COL:{kN(e,t);break}case o.FORM:{xN(e,t);break}case o.TABLE:{SN(e,t);break}case o.TBODY:case o.TFOOT:case o.THEAD:{CN(e,t);break}case o.INPUT:{NN(e,t);break}case o.CAPTION:{_N(e,t);break}case o.COLGROUP:{bN(e,t);break}default:Tu(e,t)}}function lu(e,t){switch(t.tagID){case o.TABLE:{e.openElements.hasInTableScope(o.TABLE)&&(e.openElements.popUntilTagNamePopped(o.TABLE),e._resetInsertionMode());break}case o.TEMPLATE:{sr(e,t);break}case o.BODY:case o.CAPTION:case o.COL:case o.COLGROUP:case o.HTML:case o.TBODY:case o.TD:case o.TFOOT:case o.TH:case o.THEAD:case o.TR:break;default:Tu(e,t)}}function Tu(e,t){const n=e.fosterParentingEnabled;e.fosterParentingEnabled=!0,cs(e,t),e.fosterParentingEnabled=n}function Y1(e,t){e.pendingCharacterTokens.push(t)}function X1(e,t){e.pendingCharacterTokens.push(t),e.hasNonWhitespacePendingCharacterToken=!0}function mi(e,t){let n=0;if(e.hasNonWhitespacePendingCharacterToken)for(;n<e.pendingCharacterTokens.length;n++)Tu(e,e.pendingCharacterTokens[n]);else for(;n<e.pendingCharacterTokens.length;n++)e._insertCharacters(e.pendingCharacterTokens[n]);e.insertionMode=e.originalInsertionMode,e._processToken(t)}const K1=new Set([o.CAPTION,o.COL,o.COLGROUP,o.TBODY,o.TD,o.TFOOT,o.TH,o.THEAD,o.TR]);function IN(e,t){const n=t.tagID;K1.has(n)?e.openElements.hasInTableScope(o.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(o.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=k.IN_TABLE,Yr(e,t)):Xe(e,t)}function vN(e,t){const n=t.tagID;switch(n){case o.CAPTION:case o.TABLE:{e.openElements.hasInTableScope(o.CAPTION)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(o.CAPTION),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=k.IN_TABLE,n===o.TABLE&&lu(e,t));break}case o.BODY:case o.COL:case o.COLGROUP:case o.HTML:case o.TBODY:case o.TD:case o.TFOOT:case o.TH:case o.THEAD:case o.TR:break;default:fs(e,t)}}function jc(e,t){switch(t.tagID){case o.HTML:{Xe(e,t);break}case o.COL:{e._appendElement(t,L.HTML),t.ackSelfClosing=!0;break}case o.TEMPLATE:{Pt(e,t);break}default:Da(e,t)}}function wN(e,t){switch(t.tagID){case o.COLGROUP:{e.openElements.currentTagId===o.COLGROUP&&(e.openElements.pop(),e.insertionMode=k.IN_TABLE);break}case o.TEMPLATE:{sr(e,t);break}case o.COL:break;default:Da(e,t)}}function Da(e,t){e.openElements.currentTagId===o.COLGROUP&&(e.openElements.pop(),e.insertionMode=k.IN_TABLE,e._processToken(t))}function ds(e,t){switch(t.tagID){case o.TR:{e.openElements.clearBackToTableBodyContext(),e._insertElement(t,L.HTML),e.insertionMode=k.IN_ROW;break}case o.TH:case o.TD:{e.openElements.clearBackToTableBodyContext(),e._insertFakeElement(v.TR,o.TR),e.insertionMode=k.IN_ROW,hs(e,t);break}case o.CAPTION:case o.COL:case o.COLGROUP:case o.TBODY:case o.TFOOT:case o.THEAD:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE,Yr(e,t));break}default:Yr(e,t)}}function Eo(e,t){const n=t.tagID;switch(t.tagID){case o.TBODY:case o.TFOOT:case o.THEAD:{e.openElements.hasInTableScope(n)&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE);break}case o.TABLE:{e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE,lu(e,t));break}case o.BODY:case o.CAPTION:case o.COL:case o.COLGROUP:case o.HTML:case o.TD:case o.TH:case o.TR:break;default:lu(e,t)}}function hs(e,t){switch(t.tagID){case o.TH:case o.TD:{e.openElements.clearBackToTableRowContext(),e._insertElement(t,L.HTML),e.insertionMode=k.IN_CELL,e.activeFormattingElements.insertMarker();break}case o.CAPTION:case o.COL:case o.COLGROUP:case o.TBODY:case o.TFOOT:case o.THEAD:case o.TR:{e.openElements.hasInTableScope(o.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE_BODY,ds(e,t));break}default:Yr(e,t)}}function Q1(e,t){switch(t.tagID){case o.TR:{e.openElements.hasInTableScope(o.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE_BODY);break}case o.TABLE:{e.openElements.hasInTableScope(o.TR)&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE_BODY,Eo(e,t));break}case o.TBODY:case o.TFOOT:case o.THEAD:{(e.openElements.hasInTableScope(t.tagID)||e.openElements.hasInTableScope(o.TR))&&(e.openElements.clearBackToTableRowContext(),e.openElements.pop(),e.insertionMode=k.IN_TABLE_BODY,Eo(e,t));break}case o.BODY:case o.CAPTION:case o.COL:case o.COLGROUP:case o.HTML:case o.TD:case o.TH:break;default:lu(e,t)}}function RN(e,t){const n=t.tagID;K1.has(n)?(e.openElements.hasInTableScope(o.TD)||e.openElements.hasInTableScope(o.TH))&&(e._closeTableCell(),hs(e,t)):Xe(e,t)}function ON(e,t){const n=t.tagID;switch(n){case o.TD:case o.TH:{e.openElements.hasInTableScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n),e.activeFormattingElements.clearToLastMarker(),e.insertionMode=k.IN_ROW);break}case o.TABLE:case o.TBODY:case o.TFOOT:case o.THEAD:case o.TR:{e.openElements.hasInTableScope(n)&&(e._closeTableCell(),Q1(e,t));break}case o.BODY:case o.CAPTION:case o.COL:case o.COLGROUP:case o.HTML:break;default:fs(e,t)}}function $1(e,t){switch(t.tagID){case o.HTML:{Xe(e,t);break}case o.OPTION:{e.openElements.currentTagId===o.OPTION&&e.openElements.pop(),e._insertElement(t,L.HTML);break}case o.OPTGROUP:{e.openElements.currentTagId===o.OPTION&&e.openElements.pop(),e.openElements.currentTagId===o.OPTGROUP&&e.openElements.pop(),e._insertElement(t,L.HTML);break}case o.HR:{e.openElements.currentTagId===o.OPTION&&e.openElements.pop(),e.openElements.currentTagId===o.OPTGROUP&&e.openElements.pop(),e._appendElement(t,L.HTML),t.ackSelfClosing=!0;break}case o.INPUT:case o.KEYGEN:case o.TEXTAREA:case o.SELECT:{e.openElements.hasInSelectScope(o.SELECT)&&(e.openElements.popUntilTagNamePopped(o.SELECT),e._resetInsertionMode(),t.tagID!==o.SELECT&&e._processStartTag(t));break}case o.SCRIPT:case o.TEMPLATE:{Pt(e,t);break}}}function G1(e,t){switch(t.tagID){case o.OPTGROUP:{e.openElements.stackTop>0&&e.openElements.currentTagId===o.OPTION&&e.openElements.tagIDs[e.openElements.stackTop-1]===o.OPTGROUP&&e.openElements.pop(),e.openElements.currentTagId===o.OPTGROUP&&e.openElements.pop();break}case o.OPTION:{e.openElements.currentTagId===o.OPTION&&e.openElements.pop();break}case o.SELECT:{e.openElements.hasInSelectScope(o.SELECT)&&(e.openElements.popUntilTagNamePopped(o.SELECT),e._resetInsertionMode());break}case o.TEMPLATE:{sr(e,t);break}}}function PN(e,t){const n=t.tagID;n===o.CAPTION||n===o.TABLE||n===o.TBODY||n===o.TFOOT||n===o.THEAD||n===o.TR||n===o.TD||n===o.TH?(e.openElements.popUntilTagNamePopped(o.SELECT),e._resetInsertionMode(),e._processStartTag(t)):$1(e,t)}function LN(e,t){const n=t.tagID;n===o.CAPTION||n===o.TABLE||n===o.TBODY||n===o.TFOOT||n===o.THEAD||n===o.TR||n===o.TD||n===o.TH?e.openElements.hasInTableScope(n)&&(e.openElements.popUntilTagNamePopped(o.SELECT),e._resetInsertionMode(),e.onEndTag(t)):G1(e,t)}function DN(e,t){switch(t.tagID){case o.BASE:case o.BASEFONT:case o.BGSOUND:case o.LINK:case o.META:case o.NOFRAMES:case o.SCRIPT:case o.STYLE:case o.TEMPLATE:case o.TITLE:{Pt(e,t);break}case o.CAPTION:case o.COLGROUP:case o.TBODY:case o.TFOOT:case o.THEAD:{e.tmplInsertionModeStack[0]=k.IN_TABLE,e.insertionMode=k.IN_TABLE,Yr(e,t);break}case o.COL:{e.tmplInsertionModeStack[0]=k.IN_COLUMN_GROUP,e.insertionMode=k.IN_COLUMN_GROUP,jc(e,t);break}case o.TR:{e.tmplInsertionModeStack[0]=k.IN_TABLE_BODY,e.insertionMode=k.IN_TABLE_BODY,ds(e,t);break}case o.TD:case o.TH:{e.tmplInsertionModeStack[0]=k.IN_ROW,e.insertionMode=k.IN_ROW,hs(e,t);break}default:e.tmplInsertionModeStack[0]=k.IN_BODY,e.insertionMode=k.IN_BODY,Xe(e,t)}}function MN(e,t){t.tagID===o.TEMPLATE&&sr(e,t)}function q1(e,t){e.openElements.tmplCount>0?(e.openElements.popUntilTagNamePopped(o.TEMPLATE),e.activeFormattingElements.clearToLastMarker(),e.tmplInsertionModeStack.shift(),e._resetInsertionMode(),e.onEof(t)):zc(e,t)}function BN(e,t){t.tagID===o.HTML?Xe(e,t):Ma(e,t)}function J1(e,t){var n;if(t.tagID===o.HTML){if(e.fragmentContext||(e.insertionMode=k.AFTER_AFTER_BODY),e.options.sourceCodeLocationInfo&&e.openElements.tagIDs[0]===o.HTML){e._setEndLocation(e.openElements.items[0],t);const r=e.openElements.items[1];r&&!(!((n=e.treeAdapter.getNodeSourceCodeLocation(r))===null||n===void 0)&&n.endTag)&&e._setEndLocation(r,t)}}else Ma(e,t)}function Ma(e,t){e.insertionMode=k.IN_BODY,cs(e,t)}function FN(e,t){switch(t.tagID){case o.HTML:{Xe(e,t);break}case o.FRAMESET:{e._insertElement(t,L.HTML);break}case o.FRAME:{e._appendElement(t,L.HTML),t.ackSelfClosing=!0;break}case o.NOFRAMES:{Pt(e,t);break}}}function HN(e,t){t.tagID===o.FRAMESET&&!e.openElements.isRootHtmlElementCurrent()&&(e.openElements.pop(),!e.fragmentContext&&e.openElements.currentTagId!==o.FRAMESET&&(e.insertionMode=k.AFTER_FRAMESET))}function UN(e,t){switch(t.tagID){case o.HTML:{Xe(e,t);break}case o.NOFRAMES:{Pt(e,t);break}}}function zN(e,t){t.tagID===o.HTML&&(e.insertionMode=k.AFTER_AFTER_FRAMESET)}function jN(e,t){t.tagID===o.HTML?Xe(e,t):ia(e,t)}function ia(e,t){e.insertionMode=k.IN_BODY,cs(e,t)}function VN(e,t){switch(t.tagID){case o.HTML:{Xe(e,t);break}case o.NOFRAMES:{Pt(e,t);break}}}function WN(e,t){t.chars=ge,e._insertCharacters(t)}function YN(e,t){e._insertCharacters(t),e.framesetOk=!1}function Z1(e){for(;e.treeAdapter.getNamespaceURI(e.openElements.current)!==L.HTML&&e.openElements.currentTagId!==void 0&&!e._isIntegrationPoint(e.openElements.currentTagId,e.openElements.current);)e.openElements.pop()}function XN(e,t){if(sS(t))Z1(e),e._startTagOutsideForeignContent(t);else{const n=e._getAdjustedCurrentElement(),r=e.treeAdapter.getNamespaceURI(n);r===L.MATHML?M1(t):r===L.SVG&&(lS(t),B1(t)),Hc(t),t.selfClosing?e._appendElement(t,r):e._insertElement(t,r),t.ackSelfClosing=!0}}function KN(e,t){if(t.tagID===o.P||t.tagID===o.BR){Z1(e),e._endTagOutsideForeignContent(t);return}for(let n=e.openElements.stackTop;n>0;n--){const r=e.openElements.items[n];if(e.treeAdapter.getNamespaceURI(r)===L.HTML){e._endTagOutsideForeignContent(t);break}const i=e.treeAdapter.getTagName(r);if(i.toLowerCase()===t.tagName){t.tagName=i,e.openElements.shortenToLength(n);break}}}v.AREA,v.BASE,v.BASEFONT,v.BGSOUND,v.BR,v.COL,v.EMBED,v.FRAME,v.HR,v.IMG,v.INPUT,v.KEYGEN,v.LINK,v.META,v.PARAM,v.SOURCE,v.TRACK,v.WBR;const QN=/<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi,$N=new Set(["mdxFlowExpression","mdxJsxFlowElement","mdxJsxTextElement","mdxTextExpression","mdxjsEsm"]),O0={sourceCodeLocationInfo:!0,scriptingEnabled:!1};function eg(e,t){const n=ux(e),r=r1("type",{handlers:{root:GN,element:qN,text:JN,comment:ng,doctype:ZN,raw:tx},unknown:nx}),i={parser:n?new v0(O0):v0.getFragmentParser(void 0,O0),handle(s){r(s,i)},stitches:!1,options:t||{}};r(e,i),ti(i,Vt());const u=n?i.parser.document:i.parser.getFragment(),a=a6(u,{file:i.options.file});return i.stitches&&os(a,"comment",function(s,l,c){const d=s;if(d.value.stitch&&c&&l!==void 0){const f=c.children;return f[l]=d.value.stitch,l}}),a.type==="root"&&a.children.length===1&&a.children[0].type===e.type?a.children[0]:a}function tg(e,t){let n=-1;if(e)for(;++n<e.length;)t.handle(e[n])}function GN(e,t){tg(e.children,t)}function qN(e,t){rx(e,t),tg(e.children,t),ix(e,t)}function JN(e,t){t.parser.tokenizer.state>4&&(t.parser.tokenizer.state=0);const n={type:q.CHARACTER,chars:e.value,location:yu(e)};ti(t,Vt(e)),t.parser.currentToken=n,t.parser._processToken(t.parser.currentToken)}function ZN(e,t){const n={type:q.DOCTYPE,name:"html",forceQuirks:!1,publicId:"",systemId:"",location:yu(e)};ti(t,Vt(e)),t.parser.currentToken=n,t.parser._processToken(t.parser.currentToken)}function ex(e,t){t.stitches=!0;const n=ax(e);if("children"in e&&"children"in n){const r=eg({type:"root",children:e.children},t.options);n.children=r.children}ng({type:"comment",value:{stitch:n}},t)}function ng(e,t){const n=e.value,r={type:q.COMMENT,data:n,location:yu(e)};ti(t,Vt(e)),t.parser.currentToken=r,t.parser._processToken(t.parser.currentToken)}function tx(e,t){if(t.parser.tokenizer.preprocessor.html="",t.parser.tokenizer.preprocessor.pos=-1,t.parser.tokenizer.preprocessor.lastGapPos=-2,t.parser.tokenizer.preprocessor.gapStack=[],t.parser.tokenizer.preprocessor.skipNextNewLine=!1,t.parser.tokenizer.preprocessor.lastChunkWritten=!1,t.parser.tokenizer.preprocessor.endOfChunkHit=!1,t.parser.tokenizer.preprocessor.isEol=!1,rg(t,Vt(e)),t.parser.tokenizer.write(t.options.tagfilter?e.value.replace(QN,"&lt;$1$2"):e.value,!1),t.parser.tokenizer._runParsingLoop(),t.parser.tokenizer.state===72||t.parser.tokenizer.state===78){t.parser.tokenizer.preprocessor.lastChunkWritten=!0;const n=t.parser.tokenizer._consume();t.parser.tokenizer._callState(n)}}function nx(e,t){const n=e;if(t.options.passThrough&&t.options.passThrough.includes(n.type))ex(n,t);else{let r="";throw $N.has(n.type)&&(r=". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"),new Error("Cannot compile `"+n.type+"` node"+r)}}function ti(e,t){rg(e,t);const n=e.parser.tokenizer.currentCharacterToken;n&&n.location&&(n.location.endLine=e.parser.tokenizer.preprocessor.line,n.location.endCol=e.parser.tokenizer.preprocessor.col+1,n.location.endOffset=e.parser.tokenizer.preprocessor.offset+1,e.parser.currentToken=n,e.parser._processToken(e.parser.currentToken)),e.parser.tokenizer.paused=!1,e.parser.tokenizer.inLoop=!1,e.parser.tokenizer.active=!1,e.parser.tokenizer.returnState=Se.DATA,e.parser.tokenizer.charRefCode=-1,e.parser.tokenizer.consumedAfterSnapshot=-1,e.parser.tokenizer.currentLocation=null,e.parser.tokenizer.currentCharacterToken=null,e.parser.tokenizer.currentToken=null,e.parser.tokenizer.currentAttr={name:"",value:""}}function rg(e,t){if(t&&t.offset!==void 0){const n={startLine:t.line,startCol:t.column,startOffset:t.offset,endLine:-1,endCol:-1,endOffset:-1};e.parser.tokenizer.preprocessor.lineStartPos=-t.column+1,e.parser.tokenizer.preprocessor.droppedBufferSize=t.offset,e.parser.tokenizer.preprocessor.line=t.line,e.parser.tokenizer.currentLocation=n}}function rx(e,t){const n=e.tagName.toLowerCase();if(t.parser.tokenizer.state===Se.PLAINTEXT)return;ti(t,Vt(e));const r=t.parser.openElements.current;let i="namespaceURI"in r?r.namespaceURI:Xn.html;i===Xn.html&&n==="svg"&&(i=Xn.svg);const u=f6({...e,children:[]},{space:i===Xn.svg?"svg":"html"}),a={type:q.START_TAG,tagName:n,tagID:ei(n),selfClosing:!1,ackSelfClosing:!1,attrs:"attrs"in u?u.attrs:[],location:yu(e)};t.parser.currentToken=a,t.parser._processToken(t.parser.currentToken),t.parser.tokenizer.lastStartTagName=n}function ix(e,t){const n=e.tagName.toLowerCase();if(!t.parser.tokenizer.inForeignNode&&y6.includes(n)||t.parser.tokenizer.state===Se.PLAINTEXT)return;ti(t,rs(e));const r={type:q.END_TAG,tagName:n,tagID:ei(n),selfClosing:!1,ackSelfClosing:!1,attrs:[],location:yu(e)};t.parser.currentToken=r,t.parser._processToken(t.parser.currentToken),n===t.parser.tokenizer.lastStartTagName&&(t.parser.tokenizer.state===Se.RCDATA||t.parser.tokenizer.state===Se.RAWTEXT||t.parser.tokenizer.state===Se.SCRIPT_DATA)&&(t.parser.tokenizer.state=Se.DATA)}function ux(e){const t=e.type==="root"?e.children[0]:e;return!!(t&&(t.type==="doctype"||t.type==="element"&&t.tagName.toLowerCase()==="html"))}function yu(e){const t=Vt(e)||{line:void 0,column:void 0,offset:void 0},n=rs(e)||{line:void 0,column:void 0,offset:void 0};return{startLine:t.line,startCol:t.column,startOffset:t.offset,endLine:n.line,endCol:n.column,endOffset:n.offset}}function ax(e){return"children"in e?Wr({...e,children:[]}):Wr(e)}function sx(e){return function(t,n){return eg(t,{...e,file:n})}}const lx="시동을 자주 껐다 켜는 차에 쓰는, 잘 방전되지 않는 배터리예요. 배터리를 갈 때는 원래 달려 있던 것과 같은 종류로 넣어야 해요.",ox="여러 곳에 두루 쓰는 다목적 세정제",cx="네 바퀴 모두에 힘을 보내는 사륜구동 방식. 눈길·빗길에 유리하지만 연비는 조금 불리해요.",fx="냉각수를 순환시키는 전동 물펌프",dx="엔진과 모터 중 어느 쪽으로 달릴지, 배터리를 언제 충전할지 정하는 하이브리드의 두뇌 부품이에요.",hx="정차 때 엔진을 자동으로 껐다 켜 기름을 아끼는 기능",px="차 상태를 진단할 때 쓰는 연결 단자",mx="무선으로 차 소프트웨어를 업데이트하는 것",gx="출고 전 차량 점검(Pre-Delivery Inspection). 특히 수입차는 통관 후 자체 검수 센터에서 이 과정을 거쳐 전시장으로 보낸다.",Ex="도장보호필름. 투명하고 두꺼운 필름을 도장 위에 붙여 돌빵·긁힘 같은 물리적 충격에서 도장을 지킨다.",Tx="엔진 회전수(분당). 높을수록 엔진을 세게 쓰는 것",yx="설정한 속도와 차간거리를 유지하며 앞차 상황에 맞춰 자동으로 가속·감속해주는 기능",_x="SCC(스마트 크루즈 컨트롤)에 내비게이션 정보를 더해, 곡선 구간·과속 단속 구간에서 미리 속도를 줄여 주는 기능이에요. 별개 기능이라 따로 켜야 해요.",bx="배터리에 남은 충전량",kx="펑크 때 임시로 때우는 타이어 응급 수리 키트(예비타이어 대신)",Cx="타이어 공기압이 낮으면 알려주는 경고 장치",Ax="새 내장재에서 나오는 유해 화학물질(휘발성 유기화합물)",Sx="1초에 사진을 몇 장 찍는지 나타내는 단위. 숫자가 클수록 움직임이 부드럽게 보여요.",Nx="타이어 공기압을 나타내는 단위. 이 차의 권장값은 35 psi(약 240 kPa)예요.",ig={"12V 보조배터리":"하이브리드차에도 따로 들어 있는 작은 배터리. 시동 켜기·문 잠금·블랙박스 같은 전기장치를 담당해요.","12대 중과실":"사람을 다치게 하면 종합보험에 들었거나 합의를 해도 형사처벌을 피할 수 없는 12가지 중대한 교통법규 위반(신호위반·중앙선 침범·음주운전 등).",AGM:lx,APC:ox,"API SN":"엔진오일 성능 등급(뒤 글자가 최신일수록 좋음)",AWD:cx,EWP:fx,"HDA(고속도로 주행보조)":"고속도로·자동차전용도로에서 속도와 앞차와의 거리 유지, 차로 유지를 함께 도와주는 기능. 곡선 구간 자동 감속은 별도 기능(NSCC)이다.",HPCU:dx,"ILSAC GF-6":"연비·엔진 보호 성능을 나타내는 엔진오일 등급",ISG:hx,OBD:px,OTA:mx,PDI:gx,PPF:Ex,RPM:Tx,"SAE 0W-20":"겨울에도 잘 흐르는 묽은(저점도) 엔진오일 규격",SCC:yx,NSCC:_x,SOC:bx,TMK:kx,TPMS:Cx,"UVC 살균":"자외선으로 물건(지갑 등)을 살균해주는 옵션 기능이에요.",VOCs:Ax,fps:Sx,"km/h":"시속. 1시간에 몇 km를 갈 수 있는 속도인지 나타내는 단위예요.",psi:Nx,"가시광선 투과율":"유리가 빛을 통과시키는 정도(%). 낮을수록 어둡다. 앞유리 70%·운전석 옆 40% 이상이 법 기준.","가해자불명 사고":"누가 낸 사고인지 끝내 밝혀지지 않았을 때, 내 차 수리 보험으로 고치는 사고 유형.","가혹 조건":"짧은 거리 반복·시내 정체·급가감속처럼 엔진에 부담이 큰 주행","각하·기각":"요건을 못 갖춰 심사 자체를 하지 않는 것(각하)과, 심사했지만 요구를 받아들이지 않는 것(기각).",개별소비세:"특정 물품에 붙는 세금. 차값에 이미 포함돼 있고, 친환경차는 이 세금을 깎아 줘요.","게스트 모드":"별도 계정을 새로 만들지 않고 임시로 시트·설정을 저장해 쓸 수 있는 모드","경미손상 수리기준":"조금 긁히거나 벗겨진 정도의 손상은 부품을 교환하지 않고 복원 수리로 처리하도록 정한 자동차보험 기준.","경사로 저속 주행(DBC)":"가파른 내리막에서 브레이크를 밟지 않아도 차가 알아서 저속(4~40km/h)을 유지해 주는 기능. 시동을 걸 때마다 꺼져 있어 필요할 때 버튼으로 켠다.",고무매트:"한 장의 고무로 된 바닥매트. 물·눈·진흙에 강하고 물청소가 쉬워 비 오는 날과 겨울에 좋다.","고전압 배터리":"하이브리드차의 전기모터를 구동시키는 대용량 배터리",공급가액:"세금계산서에서 부가세를 뺀 물건 값. 차값 중 이 금액이 취득세 계산 기준이에요.",과료:"벌금보다 적은 금액을 내게 하는 가벼운 형벌.",과세표준:"세금을 계산하는 기준 금액. 차 취득세는 세금계산서의 '공급가액'(부가세를 뺀 금액)이 기준이에요.","관성 주행":"가속페달에서 발을 떼고, 차가 굴러가던 힘만으로 계속 나아가는 것.",구류:"죄가 가벼운 경우 짧은 기간 유치장에 가두는 형벌.",그릿가드:"세차 물통 바닥에서 모래를 걸러 주는 받침망",기명피보험자:"보험증권에 이름이 올라간 계약의 주인. 이 사람을 기준으로 보험료가 오르내린 기록(할인·할증)이 쌓여요.",기본과실:"사고 유형마다 미리 정해 둔 출발점 과실비율. 여기에 가감요소를 더하고 빼서 최종 비율이 정해져요.",김서림:"유리 안쪽 면에 아주 작은 물방울이 맺혀 앞이 흐려지는 현상. 유리 겉면에 얼어붙은 얼음(성에)과는 달라요.",다른자동차운전담보:"내 보험(무보험차상해 — 보험 없는 차에 치였을 때 나를 보상하는 항목)에 자동으로 붙는 특약으로, 남의 차를 잠깐 몰다 낸 사고를 내 보험으로 처리해 준다. 단 상대 차의 자차(차량 수리)는 보상하지 않는다.",단기운전자확대특약:"내 차를 잠깐 남이 몰 때, 하루 단위로 운전자 범위(그 차를 몰 수 있는 사람의 범위)를 임시로 넓히는 특약. 당일 가입은 안 되고 최소 하루 전 신청해야 하며, 사고가 나면 보험료 인상은 차주에게 남는다.",단차:"패널과 패널이 만나는 부분의 틈이나 높낮이 차이. 제조사 기준 3mm 이내는 정상으로 보고, 좌우를 비교해 판단한다.",대물배상:"사고로 부순 상대방 차·물건을 보상하는 담보",대인배상:"사고로 다치게 한 상대방(사람)을 보상하는 담보",도시철도채권:"서울 등에서 차 등록 때 의무로 사는 채권. 이름만 다르고 성격은 지역개발채권과 같아요.","드라이버 온리":"운전석 쪽에만 공조 바람이 나오게 해서 혼자 탈 때 에너지를 아끼는 기능이에요. 트림·사양에 따라 없을 수 있어요.","드라잉 타월":"세차 뒤 물기를 빨아들이는 큰 흡수용 타월. 문지르지 않고 얹어서 물기를 빨아들여 써요.","디스크 브레이크":"그 금속 원판(디스크)과 패드로 차를 세우는 방식이에요.","디지털 센터 미러":"실내 룸미러 화면을 후방 카메라 영상으로 바꿔 보여주는 기능(DIM)","릴렉션 컴포트 시트":"버튼을 길게 눌러 시트를 뒤로 눕혀 잠시 편하게 쉴 수 있게 해주는 기능이에요.","마이현대 앱":"현대차 소유자가 차량 정보·포인트 등을 확인할 수 있는 공식 모바일 앱","마일리지 특약":"1년 주행거리가 적으면 보험료를 깎아 주거나 돌려주는 할인",면책:"보험사가 보상 책임을 지지 않는 것. 면책이면 그 손해는 내가 전액 부담해요.",무보험차상해:"보험 없는 차에 치여 다쳤을 때 나를 보상하는 담보",물왁스:"뿌려서 펴 바르는 액체 왁스. 세차 마무리에 발라 광택을 내고 오염이 덜 붙게 해요.",물적사고:"사람이 아니라 '차·물건'이 부서진 사고",물피도주:"주차된 차 같은 물건만 부순 뒤 연락처를 남기지 않고 현장을 떠나는 것. 도로교통법 위반으로 보험과 별개인 형사처벌 대상이에요.",물피사고:"사람은 다치지 않고 차나 물건만 부서진 사고. 길 위 위험을 없애는 조치를 마쳤다면 경찰 신고를 하지 않아도 돼요.",발수:"물이 표면에 스며들지 않고 방울져 굴러떨어지는 성질. 코팅을 하면 이 효과가 오래간다.",베이크아웃:"히터를 강하게 켜 실내 온도를 높인 뒤 문을 열어 환기하는 것. 새 차 내장재에서 나오는 유해물질(새차증후군 원인)을 열로 빼내는 방법.",보조탱크:"엔진룸에 있는, 냉각수를 채워 넣는 통. 겉에서 액체 높이가 보여 위·아래 눈금과 비교할 수 있어요.","보증 승계":"차를 팔 때 남은 무상보증 기간이 다음 주인에게 그대로 넘어가는 것.",분손:"차가 일부만 손상돼 수리로 끝나는 것. 가입 금액 한도 안에서 수리비를 보상받아요.","브레이크 패드":"바퀴와 함께 도는 금속 원판을 양쪽에서 눌러 주는 마찰 부품이에요. 쓸수록 닳아 갈아 줘야 해요.",블루링크:"현대차의 커넥티드카 서비스로, 스마트폰 앱에서 목적지 전송·원격 제어 등을 할 수 있음",블루멤버스:"현대차 포인트 멤버십이에요. 신차 출고월 기준 6개월 안에 가입해야 구매 포인트가 쌓이고, 블루핸즈 수리비나 부품 구매에 쓸 수 있어요.",블루핸즈:"현대자동차가 인증한 협력 정비소 이름이에요. 전국 곳곳에 있어 가까운 곳에서 점검·정비를 받을 수 있어요.","비보호 좌회전":"좌회전 신호가 따로 없는 곳에서, 맞은편 직진 차를 먼저 보낸 뒤 스스로 판단해 좌회전하는 것.",비상키:"스마트키 안에 들어 있는 쇠 열쇠. 12V 배터리가 방전돼 문이 안 열릴 때 운전석 문을 손으로 여는 데 써요.",사각지대:"운전석에 앉아서는 거울로도 눈으로도 보이지 않는 구역이에요.",사실혼:"혼인신고는 안 했지만 실제 부부처럼 함께 사는 관계. 자동차보험 배우자로 인정되려면 같은 주소 주민등록 등 객관적 입증이 필요하다.","사이드 볼스터":"시트 좌우에서 옆구리를 감싸 잡아주는 부분. 부풀리면 코너를 돌 때 몸이 덜 쏠려요.","사이드 뷰":"차 옆면(앞바퀴 근처)을 보여주는 카메라 화면. 좁은 길이나 연석 옆을 지날 때 써요.","상시 녹화":"블랙박스가 시동이 꺼진 뒤에도 계속 켜져서 주차 중 상황을 녹화하는 기능이에요.",상향등:"밤에 먼 곳까지 비추도록 위로 향한 밝은 전조등이에요(하이빔). 마주 오는 차 운전자가 눈부실 수 있어 마주 오는 차가 있으면 꺼야 해요.",서라운드뷰:"차 앞·뒤와 양쪽 미러 아래 카메라 네 대의 영상을 합쳐 차 주변을 보여주는 기능이에요. 옵션에 따라 있고 없어요.","센터 콘솔":"운전석과 조수석 사이에 있는, 변속 레버와 컵홀더가 놓인 부분.","수동 속도제한 보조장치":"미리 정해 둔 속도를 넘으면 계기판 표시가 깜빡이고 경고음으로 알려주는 기능. 가속 자체를 강제로 막지는 않는다.",스마일캐시:"지마켓·옥션 등 일부 쇼핑몰에서 현금처럼 쓸 수 있는 포인트","스마트 모드":"운전 습관을 스스로 파악해 에코와 스포츠 사이를 자동으로 오가는 주행 모드. 평소엔 이 모드가 무난하다.","스마트 크루즈 컨트롤":"앞차와의 거리를 유지하면서 속도를 자동으로 조절해주는 운전자 보조 기능","스마트 테일게이트":"차키를 들고 트렁크 뒤로 다가가면 자동으로 트렁크가 열리는 기능이에요.","스마트 회생 시스템":"하이브리드차가 감속할 때 배터리 충전 정도를 상황에 맞게 자동으로 조절해주는 기능",스토퍼:"주차 칸 끝 바닥에 있는 낮은 턱. 후진할 때 뒷바퀴가 여기 닿으면 다 들어간 거예요.",스톤칩:"주행 중 튀는 작은 돌에 도장이 찍혀 벗겨지는 손상. PPF(도장보호필름)가 이를 막아준다.","스포츠 모드":"가속 응답을 빠르게, 핸들을 묵직하게 만들어 힘있게 달리는 주행 모드. 대신 연비가 나빠진다.",시가표준액:"지자체가 차종별로 정해 놓은 기준 가격. 신고한 값이 이보다 낮으면 이 값으로 세금을 매겨요.","실내 순환":"바깥 공기를 막고 차 안 공기만 다시 돌려 쓰는 상태. '내기 순환'이라고도 해요.",실런트:"타이어 응급처치키트에 든, 구멍을 안쪽에서 메우는 액체. 주입 후 일정 거리를 달려야 고르게 발려요.","싱크(SYNC) 버튼":"운전석 공조 설정을 동승석에도 그대로 맞춰주는 버튼(해제하면 좌우 온도를 다르게 설정 가능)",썬팅:"유리에 필름을 붙여 자외선·열·눈부심·시선을 차단하는 시공(=틴팅). 앞유리·앞좌석 옆유리는 밝기 규정이 있다.",안전구간:"내비게이션에서 과속 단속 카메라가 있는 구간을 표시하는 용어",안전삼각대:"고장이나 사고로 차를 세웠을 때 차 뒤쪽에 세워 뒤차에 알리는 삼각형 표지. 정식 이름은 '고장자동차 표지'예요.",액셀:"가속페달. 오른발로 밟으면 속도가 올라가는 페달이에요.","에스코트 기능":"하차 후 일정 시간 동안 실내외 조명을 켜뒀다가 자동으로 꺼주는 기능","에코 모드":"연비를 우선하는 주행 모드. 가속을 부드럽게 하고 엔진·에어컨 출력을 아껴 연료를 절약한다.",연석:"인도와 차도를 나누는 낮은 콘크리트 턱. 주차하다 바퀴 테두리가 긁히기 쉬운 부분이에요.","오일 게이지":"엔진오일 양을 재는 긴 막대. 엔진에 꽂혀 있고, 뽑아서 끝에 묻은 오일 높이로 양을 확인해요.",오토홀드:"정차 중에 브레이크 페달을 계속 밟지 않아도 차가 멈춰 있도록 잡아주는 기능","외기 유입":"바깥 공기를 차 안으로 들이는 상태. 평소에는 이 상태로 두는 것이 기본이에요.","운전자 범위":"이 보험으로 운전할 수 있는 사람의 범위(누구나·가족·부부·1인 등). 좁힐수록 보험료가 쌈",워시미트:"차 표면을 닦을 때 손에 끼우는 세차용 장갑. 양털처럼 부드러운 소재를 권해요.","워크인 디바이스":"조수석 등받이·시트를 뒷자리나 운전석에서도 조절할 수 있게 해주는 버튼이에요.",위자료:"다치거나 정신적 고통을 받은 데 대해 위로 성격으로 주는 배상금.",유리막:"도장 표면에 유리 같은 얇은 보호막을 입혀 오염·물때·미세 흠집을 줄이고 광택과 물 튕김(발수)을 오래 유지하는 코팅.",의무보험:"법으로 반드시 들어야 하는 최소한의 자동차보험. 안 들면 등록·운행이 안 돼요.",인젝터:"연료를 엔진 안으로 잘게 뿜어 주는 부품.",인지세:"계약서·등록 서류에 매기는 세금.",임시번호판:"정식 등록 전에 임시로 달고 다니는 번호판. 신규 등록 목적의 허가 기간은 10일이에요.",자기부담금:"내 차 수리에 보험을 쓸 때 내가 일부 부담하는 돈",자기신체사고:"내(운전자·가족)가 다쳤을 때 정해진 한도까지 보상하는 담보",자동차상해:"내가 다쳤을 때 치료비 전액과 위자료(정신적 피해에 대한 배상금)까지 더 넓게 보상하는 담보(보험사 선택상품)","자동차안전·하자심의위원회":"새 차 하자를 두고 교환·환불 여부를 중재·판정하는 국토교통부 소속 위원회.",자동차전용도로:"자동차만 다닐 수 있도록 지정된 도로. 사고·고장 시 고속도로와 같은 대피 요령이 필요해요.","자세 메모리":"내가 맞춘 운전 자세를 버튼에 저장해뒀다가 한 번에 불러오는 기능이에요.",자차:"내 차 수리비를 보장하는 자기차량손해 보험","전동 테일게이트":"버튼이나 스마트키로 전기 힘을 써서 열리고 닫히는 트렁크 문이에요. 열리는 높이도 저장해 둘 수 있어요.",전손:"수리비가 차 값보다 커서 사실상 폐차 수준으로 처리하는 것. 차 값 한도 안에서 보험금을 받아요.","전자식 차일드 락":"뒷좌석에서 안쪽으로 문이나 창문을 못 열게 잠그는 어린이 보호 기능이에요.","전자식 파킹 브레이크(EPB)":"버튼으로 거는 주차 브레이크. 당기면 걸리고 밀면 풀려요.",점프스타터:"다른 차 없이도 방전된 차의 시동을 걸 수 있게 도와주는 휴대용 보조 배터리.",접지력:"타이어가 노면을 붙잡는 힘. 약하면 미끄러지기 쉬워요.",제동등:"브레이크를 밟으면 켜지는 뒤쪽 빨간 등. 뒤차에 '속도를 줄인다'고 알려 줘요.",제조주차:"타이어를 언제 만들었는지 알려주는 옆면의 4자리 숫자 표기.",종합보험:"의무보험에 여러 담보를 얹어 폭넓게 든 자동차보험","주차/뷰 버튼":"카메라 화면을 띄우는 버튼이에요. 짧게 누르면 화면이 뜨고, 길게 누르면 차 밖에서 조종하는 원격 주차가 실행돼요.","중대한 과실":"신호위반·음주 등 특히 무거운 과실 사유","중혼적 사실혼":"법률상 배우자가 따로 있는 상태에서 다른 사람과 맺은 사실혼. 자동차보험에서는 배우자로 인정되지 않아 사고가 나도 보상되지 않는다.",증강현실:"실제 도로가 비치는 화면 위에 안내 화살표 등을 겹쳐서 보여주는 내비게이션 방식",증지대:"관청에서 서류를 발급받을 때 함께 내는 수수료.",지역개발채권:"차를 등록할 때 의무로 사야 하는 지방자치단체 채권. 보통 사자마자 되팔아 손해 보는 몫만 부담해요.",차대번호:"차 한 대마다 붙는 고유번호(영문+숫자 17자리). 번호판이 없을 때는 이 번호로 보험에 가입해요.","차로 유지 보조 장치":"차선을 읽어 차로 가운데를 따라가도록 핸들을 조금씩 돌려 주는 기능이에요. 크루즈와는 다른 버튼으로 따로 켜요.","차체자세제어(ESC)":"미끄러지지 않게 차를 잡아주는 안전장치예요. 눈길·진흙탕에 빠졌을 때만 잠깐 꺼요.",차축:"엔진·모터가 낸 힘을 바퀴까지 전달하는 굵은 쇠막대예요. 여기가 고장 나면 바퀴가 돌지 않아요.",청약철회:"계약 후 일정 기간 안에 계약을 없던 일로 되돌리는 권리. 자동차 할부계약은 계약서 받은 날부터 7일 이내지만, 차를 사용·등록하면 행사할 수 없다.",촉매:"배기가스의 유해 성분을 걸러 주는 장치.",카샴푸:"차 표면을 닦을 때 쓰는 자동차 전용 세제.",코일매트:"굵은 PVC 실을 성글게 엮어 만든 바닥매트. 흙·물이 아래로 떨어져 갇히고 통풍·세척이 쉽다.","퀵 디테일러":"세차 마무리에 뿌리는 스프레이. 표면을 미끄럽게 만들어 물기를 닦을 때 잔흠집을 줄이고 광택을 내요.","클러스터 표시창":"계기판 가운데의 정보 화면. 주행 거리·연비·타이어 공기압 등을 번갈아 보여줘요.",킥다운:"가속페달을 깊게 밟아 변속기가 강제로 낮은 단으로 내려가는 것이에요. 엔진 소리가 갑자기 커져요.","탑 뷰":"여러 카메라 영상을 합쳐, 차를 위에서 내려다보는 것처럼 보여주는 화면이에요.",트렁크매트:"트렁크 바닥을 덮어 짐을 실을 때 생기는 스크래치·오염을 막는 매트.",판금:"찌그러진 철판을 두드려 펴서 모양을 잡는 수리.","패들 시프트":"핸들 뒤쪽에 달려 손가락으로 당기거나 미는 레버형 조작 장치",펜더:"바퀴를 덮는 차체 옆면 패널.","폰 프로젝션":"카플레이(애플)·안드로이드 오토처럼 휴대폰 화면을 차량 화면에 연결해주는 기능이에요.",피보험자:"보험의 보호(보상)를 받는 사람",하이테크센터:"현대자동차가 직접 운영하는 직영 정비소예요. 큰 수리나 전문 점검을 맡길 때 찾는 곳이에요.","하자재발 통보서":"레몬법에서 하자가 재발했을 때 제작사에 서면으로 알리는 정해진 양식. 이 통보가 교환·환불 요건의 관문이 된다.","할인 유예":"사고가 나도 보험료 등급은 그대로 두되, 무사고로 쌓이던 할인이 정해진 기간 동안 멈추는 것. 등급이 올라 보험료 자체가 오르는 것과는 달라요.",할증:"사고가 나면 다음 해 보험료가 오르는 것",할증기준금액:"이 금액을 넘는 물적사고(차·물건이 부서진 사고)를 내면 다음 해 보험료가 오르는 기준선","헤드업 디스플레이(HUD)":"앞유리에 속도 등 주행 정보를 비춰서 보여주는 화면이에요.","현저한 과실":"안전운전 위반 등으로 과실을 더 크게 보는 사유","형사 합의금":"사고로 사람을 다치게 했을 때, 처벌을 줄이려고 피해자와 합의하며 주는 돈.",환입:"이미 받은 보험금을 보험사에 되돌려주고 사고 처리 자체를 취소하는 것. 보험 갱신 전에만 가능해요.",회생제동:"감속할 때 생기는 에너지를 버리지 않고 배터리 충전에 쓰는 하이브리드·전기차 기술",회전계:"엔진이 1분에 몇 바퀴 도는지(rpm) 보여주는 눈금. 계기판 오른쪽에 있어요.","후측방 모니터":"방향지시등을 켜면 그쪽 후측방 카메라 화면을 보여주는 기능","후측방 충돌 경고":"차로를 바꾸려 할 때 뒤 옆 차로에 차가 있으면 알려 주는 보조 장치.",휴업손해:"다쳐서 일을 못 한 기간의 소득 손실을 보상하는 것."};function xx(e){return e&&e.replace(new RegExp("\\*\\*(?!\\s)([^\\n*]+?)(?<!\\s)\\*\\*","g"),"<strong>$1</strong>")}const Ix={TIP:{cls:"tip",icon:"💡",label:"팁"},NOTE:{cls:"note",icon:"📌",label:"핵심"},IMPORTANT:{cls:"note",icon:"📌",label:"핵심"},WARN:{cls:"warn",icon:"⚠️",label:"주의"},WARNING:{cls:"warn",icon:"⚠️",label:"주의"},DANGER:{cls:"danger",icon:"🚨",label:"경고"},CHECK:{cls:"check",icon:"✅",label:"체크"}};function ug(e){if(!e)return null;if(e.type==="text")return e.value.trim()?e:null;if(e.children)for(const t of e.children){const n=ug(t);if(n)return n}return null}function vx(){return e=>{const t=n=>{if(n.children)for(const r of n.children){if(r.type==="element"&&r.tagName==="blockquote"){const i=ug(r),u=i&&i.value.match(/^\s*\[!(TIP|NOTE|IMPORTANT|WARN|WARNING|DANGER|CHECK)\]\s*/i);u&&(r.properties=r.properties||{},r.properties.dataCallout=u[1].toUpperCase(),i.value=i.value.slice(u[0].length))}t(r)}};t(e)}}const wx=Object.keys(ig).sort((e,t)=>t.length-e.length),Rx=new Set(["a","code","gterm","summary"]);function Ox(e,t){const n=[];let r=e;for(;r;){let i=null;for(const u of wx){if(t.has(u))continue;const a=r.indexOf(u);a>=0&&(i===null||a<i.idx)&&(i={idx:a,term:u})}if(!i){n.push({type:"text",value:r});break}i.idx>0&&n.push({type:"text",value:r.slice(0,i.idx)}),n.push({type:"element",tagName:"gterm",properties:{dataDef:ig[i.term]},children:[{type:"text",value:i.term}]}),t.add(i.term),r=r.slice(i.idx+i.term.length)}return n}function ag(e,t,n){if(!e.children)return;const r=[];for(const i of e.children)i.type==="text"&&!n?r.push(...Ox(i.value,t)):(i.type==="element"&&ag(i,t,n||Rx.has(i.tagName)),r.push(i));e.children=r}function Px(){return e=>ag(e,new Set,!1)}function Lx({node:e,children:t}){var c;const n=(c=e==null?void 0:e.properties)==null?void 0:c.dataDef,r=z.useRef(null),[i,u]=z.useState(null),a=()=>{const d=r.current;if(!d)return;const f=d.getBoundingClientRect(),h=8,p=130,T=Math.min(Math.max(f.left+f.width/2,p+h),window.innerWidth-p-h);u({left:T,top:f.top-h})},s=()=>u(null);z.useEffect(()=>{if(i)return window.addEventListener("scroll",s,!0),window.addEventListener("resize",s),()=>{window.removeEventListener("scroll",s,!0),window.removeEventListener("resize",s)}},[i]);const l=typeof window<"u"&&window.matchMedia&&window.matchMedia("(hover: hover) and (pointer: fine)").matches;return A.jsxs("span",{ref:r,className:`gterm ${i?"gterm--open":""}`,tabIndex:0,role:"button","aria-label":`용어 설명: ${n}`,onClick:d=>{d.stopPropagation(),i?s():a()},onMouseEnter:l?a:void 0,onMouseLeave:l?s:void 0,onBlur:s,children:[t,i&&Qp.createPortal(A.jsx("span",{className:"gterm__pop",role:"tooltip",style:{left:i.left,top:i.top},children:n}),document.body)]})}function Dx({node:e,children:t,...n}){var u;const r=(u=e==null?void 0:e.properties)==null?void 0:u.dataCallout,i=r&&Ix[r];return i?A.jsxs("div",{className:`callout callout--${i.cls}`,children:[A.jsxs("span",{className:"callout__badge","aria-hidden":!0,children:[i.icon," ",i.label]}),A.jsx("div",{className:"callout__body",children:t})]}):A.jsx("blockquote",{...n,children:t})}function gi({children:e}){return A.jsx("div",{className:"prose",children:A.jsx(Mk,{remarkPlugins:[[$A,{singleTilde:!1}]],rehypePlugins:[sx,vx,Px],components:{table:t=>A.jsx("div",{className:"prose-table",children:A.jsx("table",{...t})}),a:t=>A.jsx("a",{...t,target:"_blank",rel:"noreferrer"}),img:({src:t,...n})=>A.jsx("img",{src:t!=null&&t.startsWith("/")?"/car-newbee/"+t.slice(1):t,loading:"lazy",...n}),blockquote:Dx,gterm:Lx},children:xx(e)})})}function Mx({done:e,total:t,label:n}){const r=t?e/t:0,i=Math.round(r*100),u=t>0&&e>=t;return A.jsxs("div",{className:`progress ${u?"progress--done":""}`,children:[A.jsxs("div",{className:"progress__head",children:[A.jsx("span",{className:"progress__label",children:n}),A.jsxs("span",{className:"progress__count mono",children:[e,"/",t,u&&" ✓"]})]}),A.jsx("div",{className:"progress__track",children:A.jsx("div",{className:"progress__fill",style:{width:`${i}%`}})})]})}const P0={generic:{label:"범용",cls:"badge--scope"},hybrid:{label:"하이브리드",cls:"badge--hybrid"},"mx5-hev":{label:"MX5 전용",cls:"badge--mx5"}},L0={official:{label:"공식",cls:"src--official"},media:{label:"언론",cls:"src--media"},personal:{label:"개인",cls:"src--personal"}};function Bx(e){if(!e)return{lead:"",sections:[]};const t=e.split(`
`),n=[],r=[];let i=null;for(const u of t){const a=u.match(/^##\s+(.*)$/);a?(i={title:a[1].trim(),body:[]},r.push(i)):i?i.body.push(u):n.push(u)}return{lead:n.join(`
`).trim(),sections:r.map(u=>({title:u.title,body:u.body.join(`
`).trim()}))}}function Fx(){var T,C;const{id:e}=rm(),{isChecked:t,toggleChecklistItem:n,guideProgress:r}=es(),i=cm(e);if(!i)return A.jsxs("div",{className:"container stub",children:[A.jsx("h1",{children:"가이드를 찾을 수 없습니다"}),A.jsx("p",{children:A.jsx(Ce,{to:"/",children:"← 홈으로"})})]});const u=yc.find(N=>N.n===i.phase),a=P0[i.car_scope]??P0.generic,s=(T=i.flags)==null?void 0:T.includes("단독출처"),l=r(i.id,i.checklist.length),c=i.phase!==3,d=om(i.phase),f=d.findIndex(N=>N.id===i.id),h=c&&f>0?d[f-1]:null,p=c&&f>=0&&f<d.length-1?d[f+1]:null;return A.jsxs("div",{className:"container guide-detail",children:[A.jsxs("div",{className:"crumb",children:[A.jsx(Ce,{to:"/",children:"홈"})," › ",A.jsxs(Ce,{to:`/phase/${i.phase}`,children:["P",i.phase," ",u==null?void 0:u.label]}),i.stage&&` › ${((C=fm.find(N=>N.key===i.stage))==null?void 0:C.label)??""}`]}),A.jsxs("div",{className:"gd-badges",children:[A.jsx("span",{className:`badge ${a.cls}`,children:a.label}),s&&A.jsx("span",{className:"badge badge--flag",children:"참고 · 단독출처"}),i.valid_year&&A.jsxs("span",{className:"badge badge--year",children:[i.valid_year," 기준"]})]}),A.jsx("h1",{className:"gd-title",children:i.title}),A.jsx("ul",{className:"gd-summary",children:i.summary.map((N,m)=>A.jsx("li",{children:N},m))}),s&&A.jsxs("div",{className:"solo-note",children:["이 가이드에는 ",A.jsx("strong",{children:"개인 경험(유튜브 등) 출처"}),"가 섞여 있어요. 절차·기준은 아래 출처의 공식 자료로 한 번 더 확인하세요."]}),A.jsxs("section",{className:"gd-card",children:[A.jsx("h2",{className:"gd-card__h",children:"체크리스트"}),A.jsx(Mx,{done:l.done,total:l.total,label:"이 항목 진행"}),A.jsx("ul",{className:"checklist",children:i.checklist.map((N,m)=>{const E=t(i.id,m);return A.jsx("li",{children:A.jsxs("label",{className:`check-item ${E?"check-item--on":""}`,children:[A.jsx("input",{type:"checkbox",checked:E,onChange:()=>n(i.id,m)}),A.jsx("span",{className:"checkbox","aria-hidden":!0,children:E&&"✓"}),A.jsx("span",{className:"check-item__text",children:N})]})},m)})})]}),(()=>{const N=i.body_easy_md??i.body_md,{lead:m,sections:E}=Bx(N),y=E.length>0;return A.jsxs(A.Fragment,{children:[m&&A.jsx("div",{className:"gd-lead",children:A.jsx(gi,{children:m})}),y?E.map((w,P)=>A.jsxs("section",{className:"gd-card gd-card--section",children:[A.jsx("h2",{className:"gd-section-h",children:w.title}),A.jsx(gi,{children:w.body})]},P)):A.jsx("section",{className:"gd-card",children:A.jsx(gi,{children:N})}),i.body_easy_md&&A.jsxs("details",{className:"original",children:[A.jsx("summary",{children:"자세히 · 원문 그대로 보기"}),A.jsx("div",{className:"original__body",children:A.jsx(gi,{children:i.body_md})})]})]})})(),i.field_tips_md&&A.jsxs("section",{className:"field-tips",children:[A.jsx("h2",{className:"field-tips__h",children:"실전 팁 (영상 출처)"}),A.jsx(gi,{children:i.field_tips_md})]}),A.jsxs("section",{className:"gd-card",children:[A.jsx("h2",{className:"gd-card__h",children:"출처"}),A.jsx("ul",{className:"src-list",children:i.sources.map((N,m)=>{const E=L0[N.type]??L0.personal,y=A.jsxs(A.Fragment,{children:[A.jsx("span",{className:`src-tag ${E.cls}`,children:E.label}),A.jsx("span",{className:"src-name",children:N.name})]});return A.jsx("li",{children:N.url?A.jsx("a",{href:N.url,target:"_blank",rel:"noreferrer",className:"src-item",children:y}):A.jsx("span",{className:"src-item",children:y})},m)})})]}),c&&A.jsxs("section",{className:"section",children:[A.jsxs("div",{className:"pos-indicator",children:[A.jsxs("span",{children:[u==null?void 0:u.label," · ",A.jsx("b",{children:f+1})," / ",d.length]}),A.jsx(Ce,{to:`/phase/${i.phase}`,className:"pos-indicator__all",children:"단계 전체 보기"})]}),A.jsxs("div",{className:"prevnext",children:[h?A.jsxs(Ce,{to:`/guide/${h.id}`,className:"prevnext__btn",children:[A.jsx("span",{className:"prevnext__dir",children:"← 이전"}),A.jsx("span",{className:"prevnext__title",children:h.title})]}):A.jsx("span",{className:"prevnext__btn prevnext__btn--empty"}),p?A.jsxs(Ce,{to:`/guide/${p.id}`,className:"prevnext__btn prevnext__btn--next",children:[A.jsx("span",{className:"prevnext__dir",children:"다음 →"}),A.jsx("span",{className:"prevnext__title",children:p.title})]}):A.jsx("span",{className:"prevnext__btn prevnext__btn--empty"})]})]}),A.jsx(Ce,{to:"/",className:"back-link",children:"← 홈으로"})]})}const Hx=e=>{if(!e)return null;const[t,n,r]=e.split("-");return`${t}년 ${Number(n)}월 ${Number(r)}일`},dr=Ft.warranty,hr=Ft.maintenance,Ux=[{title:"보증",rows:[{label:"일반부품",main:"3년 또는 6만km (먼저 오는 것 기준)",notes:["2018년 이후 출고차는 2년/8만km · 3년/6만km · 4년/4만km 중 골라 쓸 수 있어요(변경 횟수 제한 없음)."],raw:dr.general.value,src:dr.general.source},{label:"동력계통",main:"5년 또는 10만km",notes:["엔진·변속기처럼 힘을 전달하는 핵심 부품(동력전달장치)에 적용돼요."],raw:dr.powertrain.value,src:dr.powertrain.source},{label:"하이브리드 전용",main:"10년 또는 20만km",notes:["하이브리드 핵심 부품인 고전압 배터리·전기 모터·HPCU(하이브리드 전력제어장치)에 적용돼요."],raw:dr.hybrid_parts.value,src:dr.hybrid_parts.source}]},{title:"정비 주기",rows:[{label:"엔진오일",main:"보통 1만km 또는 1년마다 교체",notes:["시내 위주로 짧게 자주 타면(‘가혹 조건’) 5천km 또는 6개월마다 갈아 주세요.","규격은 0W-20(겨울에도 잘 흐르는 묽은 저점도 오일), 한 번에 약 4.8L 들어가요.","정품(권장) 오일이 아니면 더 짧은 주기로 교체해야 해요."],raw:hr.engine_oil.value,src:hr.engine_oil.source},{label:"브레이크액",main:"5만km마다 교체",notes:["DOT-4 등급 브레이크액이에요(정비소에서 규격 맞춰 넣어 줍니다)."],raw:hr.brake_fluid.value,src:hr.brake_fluid.source},{label:"타이어 위치 교환",main:"1만km마다",notes:["앞뒤 타이어 위치를 바꿔 고르게 닳게 하는 정비예요(‘로테이션’)."],raw:hr.tire_rotation.value,src:hr.tire_rotation.source}]},{title:"타이어 · 연료",rows:[{label:"타이어 규격",main:"235/60 R18 (기본 18인치)",notes:["큰 휠 옵션은 255/45 R20(20인치)예요.","예비 타이어는 없고, 펑크 때 쓰는 응급 수리 키트(TMK)가 실려 있어요."],raw:Ft.tire.size.value,src:Ft.tire.size.source},{label:"공기압",main:"앞뒤 모두 35psi (240kPa)",notes:["psi·kPa는 공기압 단위예요. 주유소·정비소 공기압 기계에서 35에 맞추면 됩니다."],raw:Ft.tire.pressure.value,src:Ft.tire.pressure.source},{label:"연료",main:"일반 휘발유(무연 가솔린)",notes:["고급 휘발유를 넣을 필요 없어요. 일반유로 충분합니다."],raw:Ft.fuel.type.value,src:Ft.fuel.type.source}]}];function zx({row:e}){var t;return A.jsxs("div",{className:"const-row",children:[A.jsx("div",{className:"const-row__label",children:e.label}),A.jsx("div",{className:"const-row__main",children:e.main}),(t=e.notes)==null?void 0:t.map((n,r)=>A.jsx("div",{className:"const-row__note",children:n},r)),A.jsxs("details",{className:"const-raw",children:[A.jsx("summary",{children:"공식 원문 값"}),A.jsxs("div",{className:"const-raw__body",children:[e.raw,e.src&&A.jsxs("span",{className:"const-row__src",children:["출처: ",e.src]})]})]})]})}function jx(){var r;const{registrationDate:e,setRegistrationDate:t,resetAll:n}=es();return A.jsxs("div",{className:"container setup",children:[A.jsx("div",{className:"page-head",children:A.jsx("h1",{className:"page-head__title",children:"내 차 설정"})}),A.jsxs("section",{className:"gd-card",children:[A.jsx("div",{className:"field-label",children:"출고(등록)일"}),A.jsx("p",{className:"const-row__note",style:{marginBottom:12},children:"자동차등록증의 등록일을 넣으면, 이 날짜를 기준으로 할 일이 날짜순으로 안내돼요."}),A.jsx("input",{type:"date",className:"date-input",value:e??"",max:"2100-12-31",onChange:i=>t(i.target.value),"aria-label":"출고 등록일"}),A.jsx("p",{className:"save-state",children:e?A.jsxs(A.Fragment,{children:[A.jsx("span",{className:"dot dot--ok"})," ",Hx(e)," · 저장됨"]}):A.jsxs(A.Fragment,{children:[A.jsx("span",{className:"dot"})," 아직 출고일이 없어요"]})}),e&&A.jsx("button",{className:"btn btn--ghost",style:{marginTop:14},onClick:()=>t(null),children:"출고일 지우기"})]}),A.jsxs("section",{className:"gd-card",children:[A.jsx("h2",{className:"gd-card__h",children:"내 차 정보 (싼타페 MX5 HEV)"}),Ux.map(i=>A.jsxs("div",{className:"const-group",children:[A.jsx("h3",{children:i.title}),i.rows.map(u=>A.jsx(zx,{row:u},u.label))]},i.title)),((r=Ft.unverified)==null?void 0:r.length)>0&&A.jsxs("div",{className:"const-unverified",children:[A.jsx("strong",{children:"아직 확인 못 한 정보"}),A.jsx("ul",{children:Ft.unverified.map((i,u)=>A.jsx("li",{children:i},u))})]})]}),A.jsxs("section",{className:"gd-card",children:[A.jsx("h2",{className:"gd-card__h",children:"초기화"}),A.jsx("p",{className:"const-row__note",style:{marginBottom:12},children:"출고일과 모든 체크 상태를 지웁니다. 되돌릴 수 없어요."}),A.jsx("button",{className:"btn btn--danger",onClick:()=>{confirm("출고일과 모든 체크 상태를 초기화할까요?")&&n()},children:"전체 초기화"})]}),A.jsx(Ce,{to:"/",className:"back-link",children:"← 홈으로"})]})}const Vx={"p3-accident":"!","p3-parking-accident":"P","p3-battery-discharge":"12V","p3-tire-puncture":"◑","p3-disaster":"≈","p3-fault-ratio":"%"};function Wx(){const e=lm.filter(t=>t.offset.type==="on-demand").map(t=>cm(t.guide_id)).filter(Boolean);return A.jsxs("div",{className:"container",children:[A.jsxs("div",{className:"page-head",children:[A.jsx("h1",{className:"page-head__title",children:"무슨 일이 생겼나요?"}),A.jsx("p",{className:"page-head__desc",children:"해당 상황을 눌러 대처 순서를 바로 확인하세요."})]}),A.jsx("div",{className:"sos-grid",children:e.map(t=>A.jsxs(Ce,{to:`/guide/${t.id}`,className:"sos-tile",children:[A.jsx("span",{className:"sos-tile__icon",children:Vx[t.id]??"•"}),A.jsx("span",{className:"sos-tile__title",children:t.title})]},t.id))}),A.jsx(Ce,{to:"/",className:"back-link",children:"← 홈으로"})]})}function Yx(){const{pathname:e}=ur();return z.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function Xx(){return A.jsxs(A.Fragment,{children:[A.jsx(Yx,{}),A.jsx(XT,{}),A.jsx("main",{children:A.jsxs(DT,{children:[A.jsx(pr,{path:"/",element:A.jsx(sy,{})}),A.jsx(pr,{path:"/phase/:n",element:A.jsx(ly,{})}),A.jsx(pr,{path:"/guide/:id",element:A.jsx(Fx,{})}),A.jsx(pr,{path:"/setup",element:A.jsx(jx,{})}),A.jsx(pr,{path:"/situation",element:A.jsx(Wx,{})})]})}),A.jsx("footer",{className:"app-footer",children:A.jsx("div",{className:"container",children:"첫차 가이드 · 본인 전용 도구 · 콘텐츠는 검증된 출처 기반이며 법·제도 정보는 기준연도를 확인하세요."})})]})}$p(document.getElementById("root")).render(A.jsx(Y0.StrictMode,{children:A.jsx(jT,{basename:"/car-newbee/",children:A.jsx(uy,{children:A.jsx(Xx,{})})})}));
