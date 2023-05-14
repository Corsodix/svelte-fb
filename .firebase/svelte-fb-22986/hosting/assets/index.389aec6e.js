(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function x(){}function Yr(t){return t()}function ir(){return Object.create(null)}function qt(t){t.forEach(Yr)}function Qr(t){return typeof t=="function"}function Xt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ia(t){return Object.keys(t).length===0}function ra(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function sa(t,e,n){t.$$.on_destroy.push(ra(e,n))}function P(t,e){t.appendChild(e)}function ee(t,e,n){t.insertBefore(e,n||null)}function z(t){t.parentNode&&t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function Le(t){return document.createTextNode(t)}function ge(){return Le(" ")}function oa(){return Le("")}function hi(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function vn(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function aa(t){return Array.from(t.childNodes)}function Zr(t,e){e=""+e,t.data!==e&&(t.data=e)}let li;function Ge(t){li=t}const ke=[],rr=[];let be=[];const sr=[],ca=Promise.resolve();let xn=!1;function ha(){xn||(xn=!0,ca.then(es))}function $n(t){be.push(t)}const yn=new Set;let Ae=0;function es(){if(Ae!==0)return;const t=li;do{try{for(;Ae<ke.length;){const e=ke[Ae];Ae++,Ge(e),la(e.$$)}}catch(e){throw ke.length=0,Ae=0,e}for(Ge(null),ke.length=0,Ae=0;rr.length;)rr.pop()();for(let e=0;e<be.length;e+=1){const n=be[e];yn.has(n)||(yn.add(n),n())}be.length=0}while(ke.length);for(;sr.length;)sr.pop()();xn=!1,yn.clear(),Ge(t)}function la(t){if(t.fragment!==null){t.update(),qt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($n)}}function ua(t){const e=[],n=[];be.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),be=e}const Ct=new Set;let da;function Fn(t,e){t&&t.i&&(Ct.delete(t),t.i(e))}function or(t,e,n,i){if(t&&t.o){if(Ct.has(t))return;Ct.add(t),da.c.push(()=>{Ct.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function ar(t){t&&t.c()}function jn(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||$n(()=>{const o=t.$$.on_mount.map(Yr).filter(Qr);t.$$.on_destroy?t.$$.on_destroy.push(...o):qt(o),t.$$.on_mount=[]}),s.forEach($n)}function Bn(t,e){const n=t.$$;n.fragment!==null&&(ua(n.after_update),qt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function fa(t,e){t.$$.dirty[0]===-1&&(ke.push(t),ha(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ui(t,e,n,i,r,s,o,a=[-1]){const c=li;Ge(t);const h=t.$$={fragment:null,ctx:[],props:s,update:x,not_equal:r,bound:ir(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ir(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(h.root);let u=!1;if(h.ctx=n?n(t,e.props||{},(p,y,...I)=>{const w=I.length?I[0]:y;return h.ctx&&r(h.ctx[p],h.ctx[p]=w)&&(!h.skip_bound&&h.bound[p]&&h.bound[p](w),u&&fa(t,p)),y}):[],h.update(),u=!0,qt(h.before_update),h.fragment=i?i(h.ctx):!1,e.target){if(e.hydrate){const p=aa(e.target);h.fragment&&h.fragment.l(p),p.forEach(z)}else h.fragment&&h.fragment.c();e.intro&&Fn(t.$$.fragment),jn(t,e.target,e.anchor,e.customElement),es()}Ge(c)}class di{$destroy(){Bn(this,1),this.$destroy=x}$on(e,n){if(!Qr(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ia(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function pa(t){let e,n,i,r,s;return{c(){e=$("button"),n=Le("count is "),i=Le(t[0])},m(o,a){ee(o,e,a),P(e,n),P(e,i),r||(s=hi(e,"click",t[1]),r=!0)},p(o,[a]){a&1&&Zr(i,o[0])},i:x,o:x,d(o){o&&z(e),r=!1,s()}}}function ga(t,e,n){let i=0;return[i,()=>{n(0,i+=1)}]}class ma extends di{constructor(e){super(),ui(this,e,ga,pa,Xt,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},va=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ns={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,h=c?t[r+2]:0,u=s>>2,p=(s&3)<<4|a>>4;let y=(a&15)<<2|h>>6,I=h&63;c||(I=64,o||(y=64)),i.push(n[u],n[p],n[y],n[I])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ts(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):va(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const h=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||h==null||p==null)throw new ya;const y=s<<2|a>>4;if(i.push(y),h!==64){const I=a<<4&240|h>>2;if(i.push(I),p!==64){const w=h<<6&192|p;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ya extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _a=function(t){const e=ts(t);return ns.encodeByteArray(e,!0)},Ot=function(t){return _a(t).replace(/\./g,"")},is=function(t){try{return ns.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=()=>Ia().__FIREBASE_DEFAULTS__,wa=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ta=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&is(t[1]);return e&&JSON.parse(e)},fi=()=>{try{return Ea()||wa()||Ta()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rs=t=>{var e,n;return(n=(e=fi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Aa=t=>{const e=rs(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},ss=()=>{var t;return(t=fi())===null||t===void 0?void 0:t.config},os=t=>{var e;return(e=fi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ot(JSON.stringify(n)),Ot(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ka(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(N())}function Ra(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ba(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Da(){const t=N();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Oa(){try{return typeof indexedDB=="object"}catch{return!1}}function Na(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="FirebaseError";class ie extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Pa,Object.setPrototypeOf(this,ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rt.prototype.create)}}class rt{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?La(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ie(r,a,i)}}function La(t,e){return t.replace(Ma,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Ma=/\{\$([^}]+)}/g;function Ua(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nt(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(cr(s)&&cr(o)){if(!Nt(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function cr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function xa(t,e){const n=new $a(t,e);return n.subscribe.bind(n)}class $a{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Fa(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=_n),r.error===void 0&&(r.error=_n),r.complete===void 0&&(r.complete=_n);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fa(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _n(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t){return t&&t._delegate?t._delegate:t}class Ee{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Sa;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ha(e))try{this.getOrInitializeService({instanceIdentifier:pe})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=pe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pe){return this.instances.has(e)}getOptions(e=pe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ba(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=pe){return this.component?this.component.multipleInstances?e:pe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ba(t){return t===pe?void 0:t}function Ha(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ja(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(m||(m={}));const za={debug:m.DEBUG,verbose:m.VERBOSE,info:m.INFO,warn:m.WARN,error:m.ERROR,silent:m.SILENT},Wa=m.INFO,Ga={[m.DEBUG]:"log",[m.VERBOSE]:"log",[m.INFO]:"info",[m.WARN]:"warn",[m.ERROR]:"error"},Ka=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Ga[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pi{constructor(e){this.name=e,this._logLevel=Wa,this._logHandler=Ka,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in m))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?za[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,m.DEBUG,...e),this._logHandler(this,m.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,m.VERBOSE,...e),this._logHandler(this,m.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,m.INFO,...e),this._logHandler(this,m.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,m.WARN,...e),this._logHandler(this,m.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,m.ERROR,...e),this._logHandler(this,m.ERROR,...e)}}const qa=(t,e)=>e.some(n=>t instanceof n);let hr,lr;function Xa(){return hr||(hr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ja(){return lr||(lr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const as=new WeakMap,Hn=new WeakMap,cs=new WeakMap,In=new WeakMap,gi=new WeakMap;function Ya(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ce(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&as.set(n,t)}).catch(()=>{}),gi.set(e,t),e}function Qa(t){if(Hn.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Hn.set(t,e)}let Vn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cs.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ce(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Za(t){Vn=t(Vn)}function ec(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(En(this),e,...n);return cs.set(i,e.sort?e.sort():[e]),ce(i)}:Ja().includes(t)?function(...e){return t.apply(En(this),e),ce(as.get(this))}:function(...e){return ce(t.apply(En(this),e))}}function tc(t){return typeof t=="function"?ec(t):(t instanceof IDBTransaction&&Qa(t),qa(t,Xa())?new Proxy(t,Vn):t)}function ce(t){if(t instanceof IDBRequest)return Ya(t);if(In.has(t))return In.get(t);const e=tc(t);return e!==t&&(In.set(t,e),gi.set(e,t)),e}const En=t=>gi.get(t);function nc(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=ce(o);return i&&o.addEventListener("upgradeneeded",c=>{i(ce(o.result),c.oldVersion,c.newVersion,ce(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const ic=["get","getKey","getAll","getAllKeys","count"],rc=["put","add","delete","clear"],wn=new Map;function ur(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wn.get(e))return wn.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=rc.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||ic.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let h=c.store;return i&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),r&&c.done]))[0]};return wn.set(e,s),s}Za(t=>({...t,get:(e,n,i)=>ur(e,n)||t.get(e,n,i),has:(e,n)=>!!ur(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oc(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function oc(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zn="@firebase/app",dr="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new pi("@firebase/app"),ac="@firebase/app-compat",cc="@firebase/analytics-compat",hc="@firebase/analytics",lc="@firebase/app-check-compat",uc="@firebase/app-check",dc="@firebase/auth",fc="@firebase/auth-compat",pc="@firebase/database",gc="@firebase/database-compat",mc="@firebase/functions",vc="@firebase/functions-compat",yc="@firebase/installations",_c="@firebase/installations-compat",Ic="@firebase/messaging",Ec="@firebase/messaging-compat",wc="@firebase/performance",Tc="@firebase/performance-compat",Ac="@firebase/remote-config",Sc="@firebase/remote-config-compat",Cc="@firebase/storage",kc="@firebase/storage-compat",Rc="@firebase/firestore",bc="@firebase/firestore-compat",Dc="firebase",Oc="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="[DEFAULT]",Nc={[zn]:"fire-core",[ac]:"fire-core-compat",[hc]:"fire-analytics",[cc]:"fire-analytics-compat",[uc]:"fire-app-check",[lc]:"fire-app-check-compat",[dc]:"fire-auth",[fc]:"fire-auth-compat",[pc]:"fire-rtdb",[gc]:"fire-rtdb-compat",[mc]:"fire-fn",[vc]:"fire-fn-compat",[yc]:"fire-iid",[_c]:"fire-iid-compat",[Ic]:"fire-fcm",[Ec]:"fire-fcm-compat",[wc]:"fire-perf",[Tc]:"fire-perf-compat",[Ac]:"fire-rc",[Sc]:"fire-rc-compat",[Cc]:"fire-gcs",[kc]:"fire-gcs-compat",[Rc]:"fire-fst",[bc]:"fire-fst-compat","fire-js":"fire-js",[Dc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new Map,Gn=new Map;function Pc(t,e){try{t.container.addComponent(e)}catch(n){we.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Me(t){const e=t.name;if(Gn.has(e))return we.debug(`There were multiple attempts to register component ${e}.`),!1;Gn.set(e,t);for(const n of Pt.values())Pc(n,t);return!0}function mi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},he=new rt("app","Firebase",Lc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ee("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=Oc;function hs(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Wn,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw he.create("bad-app-name",{appName:String(r)});if(n||(n=ss()),!n)throw he.create("no-options");const s=Pt.get(r);if(s){if(Nt(n,s.options)&&Nt(i,s.config))return s;throw he.create("duplicate-app",{appName:r})}const o=new Va(r);for(const c of Gn.values())o.addComponent(c);const a=new Mc(n,i,o);return Pt.set(r,a),a}function ls(t=Wn){const e=Pt.get(t);if(!e&&t===Wn&&ss())return hs();if(!e)throw he.create("no-app",{appName:t});return e}function le(t,e,n){var i;let r=(i=Nc[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),we.warn(a.join(" "));return}Me(new Ee(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="firebase-heartbeat-database",xc=1,Xe="firebase-heartbeat-store";let Tn=null;function us(){return Tn||(Tn=nc(Uc,xc,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xe)}}}).catch(t=>{throw he.create("idb-open",{originalErrorMessage:t.message})})),Tn}async function $c(t){try{return await(await us()).transaction(Xe).objectStore(Xe).get(ds(t))}catch(e){if(e instanceof ie)we.warn(e.message);else{const n=he.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});we.warn(n.message)}}}async function fr(t,e){try{const i=(await us()).transaction(Xe,"readwrite");await i.objectStore(Xe).put(e,ds(t)),await i.done}catch(n){if(n instanceof ie)we.warn(n.message);else{const i=he.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});we.warn(i.message)}}}function ds(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=1024,jc=30*24*60*60*1e3;class Bc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vc(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=pr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=jc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=pr(),{heartbeatsToSend:n,unsentEntries:i}=Hc(this._heartbeatsCache.heartbeats),r=Ot(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function pr(){return new Date().toISOString().substring(0,10)}function Hc(t,e=Fc){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),gr(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),gr(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Vc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oa()?Na().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $c(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return fr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return fr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function gr(t){return Ot(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t){Me(new Ee("platform-logger",e=>new sc(e),"PRIVATE")),Me(new Ee("heartbeat",e=>new Bc(e),"PRIVATE")),le(zn,dr,t),le(zn,dr,"esm2017"),le("fire-js","")}zc("");function vi(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function fs(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wc=fs,ps=new rt("auth","Firebase",fs());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new pi("@firebase/auth");function Gc(t,...e){Lt.logLevel<=m.WARN&&Lt.warn(`Auth (${$e}): ${t}`,...e)}function kt(t,...e){Lt.logLevel<=m.ERROR&&Lt.error(`Auth (${$e}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t,...e){throw yi(t,...e)}function W(t,...e){return yi(t,...e)}function gs(t,e,n){const i=Object.assign(Object.assign({},Wc()),{[e]:n});return new rt("auth","Firebase",i).create(e,{appName:t.name})}function Kc(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&K(t,"argument-error"),gs(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function yi(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ps.create(t,...e)}function f(t,e,...n){if(!t)throw yi(e,...n)}function J(t){const e="INTERNAL ASSERTION FAILED: "+t;throw kt(e),new Error(e)}function te(t,e){t||J(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qc(){return mr()==="http:"||mr()==="https:"}function mr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qc()||Ra()||"connection"in navigator)?navigator.onLine:!0}function Jc(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n){this.shortDelay=e,this.longDelay=n,te(n>e,"Short delay should be less than long delay!"),this.isMobile=ka()||ba()}get(){return Xc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(t,e){te(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;J("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;J("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;J("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=new ot(3e4,6e4);function vs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function at(t,e,n,i,r={}){return ys(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=st(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ms.fetch()(_s(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function ys(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Yc),e);try{const r=new eh(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Et(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,h]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Et(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Et(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Et(t,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw gs(t,u,h);K(t,u)}}catch(r){if(r instanceof ie)throw r;K(t,"network-request-failed",{message:String(r)})}}async function Zc(t,e,n,i,r={}){const s=await at(t,e,n,i,r);return"mfaPendingCredential"in s&&K(t,"multi-factor-auth-required",{_serverResponse:s}),s}function _s(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?_i(t.config,r):`${t.config.apiScheme}://${r}`}class eh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(W(this.auth,"network-request-failed")),Qc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Et(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=W(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function th(t,e){return at(t,"POST","/v1/accounts:delete",e)}async function nh(t,e){return at(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ih(t,e=!1){const n=ue(t),i=await n.getIdToken(e),r=Ii(i);f(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ke(An(r.auth_time)),issuedAtTime:Ke(An(r.iat)),expirationTime:Ke(An(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function An(t){return Number(t)*1e3}function Ii(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return kt("JWT malformed, contained fewer than 3 sections"),null;try{const r=is(n);return r?JSON.parse(r):(kt("Failed to decode base64 JWT payload"),null)}catch(r){return kt("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function rh(t){const e=Ii(t);return f(e,"internal-error"),f(typeof e.exp<"u","internal-error"),f(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof ie&&sh(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function sh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ke(this.lastLoginAt),this.creationTime=Ke(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Je(t,nh(n,{idToken:i}));f(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?hh(s.providerUserInfo):[],a=ch(t.providerData,o),c=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Is(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,p)}async function ah(t){const e=ue(t);await Mt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ch(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function hh(t){return t.map(e=>{var{providerId:n}=e,i=vi(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lh(t,e){const n=await ys(t,{},async()=>{const i=st({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=_s(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ms.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){f(e.idToken,"internal-error"),f(typeof e.idToken<"u","internal-error"),f(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return f(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await lh(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Ye;return i&&(f(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(f(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(f(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ye,this.toJSON())}_performRefresh(){return J("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t,e){f(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _e{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=vi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Is(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Je(this,this.stsTokenManager.getToken(this.auth,e));return f(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ih(this,e)}reload(){return ah(this)}_assign(e){this!==e&&(f(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _e(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){f(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Mt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Je(this,th(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,c,h,u;const p=(i=n.displayName)!==null&&i!==void 0?i:void 0,y=(r=n.email)!==null&&r!==void 0?r:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,B=(a=n.tenantId)!==null&&a!==void 0?a:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,It=(h=n.createdAt)!==null&&h!==void 0?h:void 0,Zi=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:pn,emailVerified:er,isAnonymous:tr,providerData:gn,stsTokenManager:nr}=n;f(pn&&nr,e,"internal-error");const ta=Ye.fromJSON(this.name,nr);f(typeof pn=="string",e,"internal-error"),re(p,e.name),re(y,e.name),f(typeof er=="boolean",e,"internal-error"),f(typeof tr=="boolean",e,"internal-error"),re(I,e.name),re(w,e.name),re(B,e.name),re(M,e.name),re(It,e.name),re(Zi,e.name);const mn=new _e({uid:pn,auth:e,email:y,emailVerified:er,displayName:p,isAnonymous:tr,photoURL:w,phoneNumber:I,tenantId:B,stsTokenManager:ta,createdAt:It,lastLoginAt:Zi});return gn&&Array.isArray(gn)&&(mn.providerData=gn.map(na=>Object.assign({},na))),M&&(mn._redirectEventId=M),mn}static async _fromIdTokenResponse(e,n,i=!1){const r=new Ye;r.updateFromServerResponse(n);const s=new _e({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Mt(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Map;function Y(t){te(t instanceof Function,"Expected a class definition");let e=vr.get(t);return e?(te(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vr.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Es.type="NONE";const yr=Es;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,e,n){return`firebase:${t}:${e}:${n}`}class De{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Rt(this.userKey,r.apiKey,s),this.fullPersistenceKey=Rt("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_e._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new De(Y(yr),e,i);const r=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=r[0]||Y(yr);const o=Rt(i,e.config.apiKey,e.name);let a=null;for(const h of n)try{const u=await h._get(o);if(u){const p=_e._fromJSON(e,u);h!==s&&(a=p),s=h;break}}catch{}const c=r.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new De(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new De(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(As(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ws(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cs(e))return"Blackberry";if(ks(e))return"Webos";if(Ei(e))return"Safari";if((e.includes("chrome/")||Ts(e))&&!e.includes("edge/"))return"Chrome";if(Ss(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function ws(t=N()){return/firefox\//i.test(t)}function Ei(t=N()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ts(t=N()){return/crios\//i.test(t)}function As(t=N()){return/iemobile/i.test(t)}function Ss(t=N()){return/android/i.test(t)}function Cs(t=N()){return/blackberry/i.test(t)}function ks(t=N()){return/webos/i.test(t)}function Jt(t=N()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uh(t=N()){var e;return Jt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dh(){return Da()&&document.documentMode===10}function Rs(t=N()){return Jt(t)||Ss(t)||ks(t)||Cs(t)||/windows phone/i.test(t)||As(t)}function fh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t,e=[]){let n;switch(t){case"Browser":n=_r(N());break;case"Worker":n=`${_r(N())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$e}/${i}`}async function Ds(t,e){return at(t,"GET","/v2/recaptchaConfig",vs(t,e))}function Ir(t){return t!==void 0&&t.enterprise!==void 0}class Os{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ns(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=W("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",ph().appendChild(i)})}function gh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const mh="https://www.google.com/recaptcha/enterprise.js?render=",vh="recaptcha-enterprise",yh="NO_RECAPTCHA";class _h{constructor(e){this.type=vh,this.auth=ct(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Ds(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new Os(c);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(c=>{a(c)})})}function r(s,o,a){const c=window.grecaptcha;Ir(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(yh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&Ir(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ns(mh+a).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Er(this),this.idTokenSubscription=new Er(this),this.beforeStateQueue=new Ih(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ps,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Y(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await De.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return f(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ue(e):null;return n&&f(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&f(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Y(e))})}async initializeRecaptchaConfig(){const e=await Ds(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Os(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new _h(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rt("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Y(e)||this._popupRedirectResolver;f(n,this,"argument-error"),this.redirectPersistenceManager=await De.create(this,[Y(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return f(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return f(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Gc(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ct(t){return ue(t)}class Er{constructor(e){this.auth=e,this.observer=null,this.addObserver=xa(n=>this.observer=n)}get next(){return f(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(t,e){const n=mi(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Nt(s,e!=null?e:{}))return r;K(r,"already-initialized")}return n.initialize({options:e})}function Th(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Y);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Ah(t,e,n){const i=ct(t);f(i._canInitEmulator,i,"emulator-config-failed"),f(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=Ps(e),{host:o,port:a}=Sh(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Ch()}function Ps(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Sh(t){const e=Ps(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:wr(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:wr(o)}}}function wr(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ch(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return J("not implemented")}_getIdTokenResponse(e){return J("not implemented")}_linkToIdToken(e,n){return J("not implemented")}_getReauthenticationResolver(e){return J("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(t,e){return Zc(t,"POST","/v1/accounts:signInWithIdp",vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="http://localhost";class Te extends Ls{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Te(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):K("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=vi(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Te(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Oe(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Oe(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Oe(e,n)}buildRequest(){const e={requestUri:kh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=st(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends wi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends ht{constructor(){super("facebook.com")}static credential(e){return Te._fromParams({providerId:se.PROVIDER_ID,signInMethod:se.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return se.credentialFromTaggedObject(e)}static credentialFromError(e){return se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return se.credential(e.oauthAccessToken)}catch{return null}}}se.FACEBOOK_SIGN_IN_METHOD="facebook.com";se.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X extends ht{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Te._fromParams({providerId:X.PROVIDER_ID,signInMethod:X.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return X.credentialFromTaggedObject(e)}static credentialFromError(e){return X.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return X.credential(n,i)}catch{return null}}}X.GOOGLE_SIGN_IN_METHOD="google.com";X.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends ht{constructor(){super("github.com")}static credential(e){return Te._fromParams({providerId:oe.PROVIDER_ID,signInMethod:oe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oe.credentialFromTaggedObject(e)}static credentialFromError(e){return oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oe.credential(e.oauthAccessToken)}catch{return null}}}oe.GITHUB_SIGN_IN_METHOD="github.com";oe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae extends ht{constructor(){super("twitter.com")}static credential(e,n){return Te._fromParams({providerId:ae.PROVIDER_ID,signInMethod:ae.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ae.credentialFromTaggedObject(e)}static credentialFromError(e){return ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ae.credential(n,i)}catch{return null}}}ae.TWITTER_SIGN_IN_METHOD="twitter.com";ae.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await _e._fromIdTokenResponse(e,i,r),o=Tr(i);return new Ue({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Tr(i);return new Ue({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Tr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends ie{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Ut.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Ut(e,n,i,r)}}function Ms(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ut._fromErrorAndOperation(t,s,e,i):s})}async function Rh(t,e,n=!1){const i=await Je(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ue._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bh(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Je(t,Ms(i,r,e,t),n);f(s.idToken,i,"internal-error");const o=Ii(s.idToken);f(o,i,"internal-error");const{sub:a}=o;return f(t.uid===a,i,"user-mismatch"),Ue._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&K(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dh(t,e,n=!1){const i="signIn",r=await Ms(t,i,e),s=await Ue._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}function Oh(t,e,n,i){return ue(t).onIdTokenChanged(e,n,i)}function Nh(t,e,n){return ue(t).beforeAuthStateChanged(e,n)}function Ph(t,e,n,i){return ue(t).onAuthStateChanged(e,n,i)}function Lh(t){return ue(t).signOut()}const xt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xt,"1"),this.storage.removeItem(xt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(){const t=N();return Ei(t)||Jt(t)}const Uh=1e3,xh=10;class xs extends Us{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Mh()&&fh(),this.fallbackToPolling=Rs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);dh()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,xh):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Uh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xs.type="LOCAL";const $h=xs;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends Us{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$s.type="SESSION";const Fs=$s;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Yt(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async h=>h(n.origin,s)),c=await Fh(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const h=Ti("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(y.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(){return window}function Bh(t){G().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(){return typeof G().WorkerGlobalScope<"u"&&typeof G().importScripts=="function"}async function Hh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zh(){return js()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="firebaseLocalStorageDb",Wh=1,$t="firebaseLocalStorage",Hs="fbase_key";class lt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qt(t,e){return t.transaction([$t],e?"readwrite":"readonly").objectStore($t)}function Gh(){const t=indexedDB.deleteDatabase(Bs);return new lt(t).toPromise()}function qn(){const t=indexedDB.open(Bs,Wh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore($t,{keyPath:Hs})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains($t)?e(i):(i.close(),await Gh(),e(await qn()))})})}async function Ar(t,e,n){const i=Qt(t,!0).put({[Hs]:e,value:n});return new lt(i).toPromise()}async function Kh(t,e){const n=Qt(t,!1).get(e),i=await new lt(n).toPromise();return i===void 0?null:i.value}function Sr(t,e){const n=Qt(t,!0).delete(e);return new lt(n).toPromise()}const qh=800,Xh=3;class Vs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Xh)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return js()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yt._getInstance(zh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Hh(),!this.activeServiceWorker)return;this.sender=new jh(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qn();return await Ar(e,xt,"1"),await Sr(e,xt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ar(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Kh(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Qt(r,!1).getAll();return new lt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vs.type="LOCAL";const Jh=Vs;new ot(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t,e){return e?Y(e):(f(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Ls{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oe(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Oe(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Oe(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yh(t){return Dh(t.auth,new Ai(t),t.bypassAuthState)}function Qh(t){const{auth:e,user:n}=t;return f(n,e,"internal-error"),bh(n,new Ai(t),t.bypassAuthState)}async function Zh(t){const{auth:e,user:n}=t;return f(n,e,"internal-error"),Rh(n,new Ai(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yh;case"linkViaPopup":case"linkViaRedirect":return Zh;case"reauthViaPopup":case"reauthViaRedirect":return Qh;default:K(this.auth,"internal-error")}}resolve(e){te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=new ot(2e3,1e4);async function tl(t,e,n){const i=ct(t);Kc(t,e,wi);const r=zs(i,n);return new me(i,"signInViaPopup",e,r).executeNotNull()}class me extends Ws{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,me.currentPopupAction&&me.currentPopupAction.cancel(),me.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return f(e,this.auth,"internal-error"),e}async onExecution(){te(this.filter.length===1,"Popup operations only handle one event");const e=Ti();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(W(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(W(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,me.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(W(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,el.get())};e()}}me.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl="pendingRedirect",bt=new Map;class il extends Ws{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=bt.get(this.auth._key());if(!e){try{const i=await rl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}bt.set(this.auth._key(),e)}return this.bypassAuthState||bt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rl(t,e){const n=al(e),i=ol(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function sl(t,e){bt.set(t._key(),e)}function ol(t){return Y(t._redirectPersistence)}function al(t){return Rt(nl,t.config.apiKey,t.name)}async function cl(t,e,n=!1){const i=ct(t),r=zs(i,e),o=await new il(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=10*60*1e3;class ll{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ul(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Gs(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(W(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hl&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cr(e))}saveEventToCache(e){this.cachedEventUids.add(Cr(e)),this.lastProcessedEventTime=Date.now()}}function Cr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gs({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ul(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gs(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(t,e={}){return at(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pl=/^https?/;async function gl(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dl(t);for(const n of e)try{if(ml(n))return}catch{}K(t,"unauthorized-domain")}function ml(t){const e=Kn(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!pl.test(n))return!1;if(fl.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=new ot(3e4,6e4);function kr(){const t=G().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yl(t){return new Promise((e,n)=>{var i,r,s;function o(){kr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kr(),n(W(t,"network-request-failed"))},timeout:vl.get()})}if(!((r=(i=G().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=G().gapi)===null||s===void 0)&&s.load)o();else{const a=gh("iframefcb");return G()[a]=()=>{gapi.load?o():n(W(t,"network-request-failed"))},Ns(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Dt=null,e})}let Dt=null;function _l(t){return Dt=Dt||yl(t),Dt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=new ot(5e3,15e3),El="__/auth/iframe",wl="emulator/auth/iframe",Tl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Al=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sl(t){const e=t.config;f(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_i(e,wl):`https://${t.config.authDomain}/${El}`,i={apiKey:e.apiKey,appName:t.name,v:$e},r=Al.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${st(i).slice(1)}`}async function Cl(t){const e=await _l(t),n=G().gapi;return f(n,t,"internal-error"),e.open({where:document.body,url:Sl(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tl,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=W(t,"network-request-failed"),a=G().setTimeout(()=>{s(o)},Il.get());function c(){G().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rl=500,bl=600,Dl="_blank",Ol="http://localhost";class Rr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nl(t,e,n,i=Rl,r=bl){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},kl),{width:i.toString(),height:r.toString(),top:s,left:o}),h=N().toLowerCase();n&&(a=Ts(h)?Dl:n),ws(h)&&(e=e||Ol,c.scrollbars="yes");const u=Object.entries(c).reduce((y,[I,w])=>`${y}${I}=${w},`,"");if(uh(h)&&a!=="_self")return Pl(e||"",a),new Rr(null);const p=window.open(e||"",a,u);f(p,t,"popup-blocked");try{p.focus()}catch{}return new Rr(p)}function Pl(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="__/auth/handler",Ml="emulator/auth/handler",Ul=encodeURIComponent("fac");async function br(t,e,n,i,r,s){f(t.config.authDomain,t,"auth-domain-config-required"),f(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:$e,eventId:r};if(e instanceof wi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ua(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,p]of Object.entries(s||{}))o[u]=p}if(e instanceof ht){const u=e.getScopes().filter(p=>p!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),h=c?`#${Ul}=${encodeURIComponent(c)}`:"";return`${xl(t)}?${st(a).slice(1)}${h}`}function xl({config:t}){return t.emulator?_i(t,Ml):`https://${t.authDomain}/${Ll}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="webStorageSupport";class $l{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fs,this._completeRedirectFn=cl,this._overrideRedirectResult=sl}async _openPopup(e,n,i,r){var s;te((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await br(e,n,i,Kn(),r);return Nl(e,o,Ti())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await br(e,n,i,Kn(),r);return Bh(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(te(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Cl(e),i=new ll(e);return n.register("authEvent",r=>(f(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sn,{type:Sn},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Sn];o!==void 0&&n(!!o),K(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gl(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rs()||Ei()||Jt()}}const Fl=$l;var Dr="@firebase/auth",Or="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){f(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Hl(t){Me(new Ee("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;f(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bs(t)},h=new Eh(i,r,s,c);return Th(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Me(new Ee("auth-internal",e=>{const n=ct(e.getProvider("auth").getImmediate());return(i=>new jl(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),le(Dr,Or,Bl(t)),le(Dr,Or,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=5*60,zl=os("authIdTokenMaxAge")||Vl;let Nr=null;const Wl=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>zl)return;const r=n==null?void 0:n.token;Nr!==r&&(Nr=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Gl(t=ls()){const e=mi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wh(t,{popupRedirectResolver:Fl,persistence:[Jh,$h,Fs]}),i=os("authTokenSyncURL");if(i){const s=Wl(i);Nh(n,s,()=>s(n.currentUser)),Oh(n,o=>s(o))}const r=rs("auth");return r&&Ah(n,`http://${r}`),n}Hl("Browser");var Kl="firebase",ql="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */le(Kl,ql,"app");var Xl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l,Si=Si||{},d=Xl||self;function Ft(){}function Zt(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ut(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Jl(t){return Object.prototype.hasOwnProperty.call(t,Cn)&&t[Cn]||(t[Cn]=++Yl)}var Cn="closure_uid_"+(1e9*Math.random()>>>0),Yl=0;function Ql(t,e,n){return t.call.apply(t.bind,arguments)}function Zl(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function D(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?D=Ql:D=Zl,D.apply(null,arguments)}function wt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function A(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function de(){this.s=this.s,this.o=this.o}var eu=0;de.prototype.s=!1;de.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),eu!=0)&&Jl(this)};de.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ks=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ci(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Pr(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Zt(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function O(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var tu=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{d.addEventListener("test",Ft,e),d.removeEventListener("test",Ft,e)}catch{}return t}();function jt(t){return/^[\s\xa0]*$/.test(t)}var Lr=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function kn(t,e){return t<e?-1:t>e?1:0}function en(){var t=d.navigator;return t&&(t=t.userAgent)?t:""}function H(t){return en().indexOf(t)!=-1}function ki(t){return ki[" "](t),t}ki[" "]=Ft;function qs(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var nu=H("Opera"),Qe=H("Trident")||H("MSIE"),Xs=H("Edge"),Xn=Xs||Qe,Js=H("Gecko")&&!(en().toLowerCase().indexOf("webkit")!=-1&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),iu=en().toLowerCase().indexOf("webkit")!=-1&&!H("Edge");function Ys(){var t=d.document;return t?t.documentMode:void 0}var Jn;e:{var Rn="",bn=function(){var t=en();if(Js)return/rv:([^\);]+)(\)|;)/.exec(t);if(Xs)return/Edge\/([\d\.]+)/.exec(t);if(Qe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(iu)return/WebKit\/(\S+)/.exec(t);if(nu)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(bn&&(Rn=bn?bn[1]:""),Qe){var Dn=Ys();if(Dn!=null&&Dn>parseFloat(Rn)){Jn=String(Dn);break e}}Jn=Rn}var ru={};function su(){return qs(ru,9,function(){let t=0;const e=Lr(String(Jn)).split("."),n=Lr("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=kn(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||kn(r[2].length==0,s[2].length==0)||kn(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}d.document&&Qe&&Ys();function Ze(t,e){if(O.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Js){e:{try{ki(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ou[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ze.$.h.call(this)}}A(Ze,O);var ou={2:"touch",3:"pen",4:"mouse"};Ze.prototype.h=function(){Ze.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var dt="closure_listenable_"+(1e6*Math.random()|0),au=0;function cu(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++au,this.fa=this.ia=!1}function tn(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ri(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Qs(t){const e={};for(const n in t)e[n]=t[n];return e}const Mr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zs(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<Mr.length;s++)n=Mr[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function nn(t){this.src=t,this.g={},this.h=0}nn.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Qn(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new cu(e,this.src,s,!!i,r),e.ia=n,t.push(e)),e};function Yn(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=Ks(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(tn(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Qn(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}var bi="closure_lm_"+(1e6*Math.random()|0),On={};function eo(t,e,n,i,r){if(i&&i.once)return no(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)eo(t,e[s],n,i,r);return null}return n=Ni(n),t&&t[dt]?t.O(e,n,ut(i)?!!i.capture:!!i,r):to(t,e,n,!1,i,r)}function to(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=ut(r)?!!r.capture:!!r,a=Oi(t);if(a||(t[bi]=a=new nn(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=hu(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)tu||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(ro(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function hu(){function t(n){return e.call(t.src,t.listener,n)}const e=lu;return t}function no(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)no(t,e[s],n,i,r);return null}return n=Ni(n),t&&t[dt]?t.P(e,n,ut(i)?!!i.capture:!!i,r):to(t,e,n,!0,i,r)}function io(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)io(t,e[s],n,i,r);else i=ut(i)?!!i.capture:!!i,n=Ni(n),t&&t[dt]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Qn(s,n,i,r),-1<n&&(tn(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Oi(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Qn(e,n,i,r)),(n=-1<t?e[t]:null)&&Di(n))}function Di(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[dt])Yn(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(ro(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Oi(e))?(Yn(n,t),n.h==0&&(n.src=null,e[bi]=null)):tn(t)}}}function ro(t){return t in On?On[t]:On[t]="on"+t}function lu(t,e){if(t.fa)t=!0;else{e=new Ze(e,this);var n=t.listener,i=t.la||t.src;t.ia&&Di(t),t=n.call(i,e)}return t}function Oi(t){return t=t[bi],t instanceof nn?t:null}var Nn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ni(t){return typeof t=="function"?t:(t[Nn]||(t[Nn]=function(e){return t.handleEvent(e)}),t[Nn])}function T(){de.call(this),this.i=new nn(this),this.S=this,this.J=null}A(T,de);T.prototype[dt]=!0;T.prototype.removeEventListener=function(t,e,n,i){io(this,t,e,n,i)};function C(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new O(e,t);else if(e instanceof O)e.target=e.target||t;else{var r=e;e=new O(i,t),Zs(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Tt(o,i,!0,e)&&r}if(o=e.g=t,r=Tt(o,i,!0,e)&&r,r=Tt(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Tt(o,i,!1,e)&&r}T.prototype.N=function(){if(T.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)tn(n[i]);delete t.g[e],t.h--}}this.J=null};T.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};T.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Tt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Yn(t.i,o),r=a.call(c,i)!==!1&&r}}return r&&!i.defaultPrevented}var Pi=d.JSON.stringify;function uu(){var t=ao;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class du{constructor(){this.h=this.g=null}add(e,n){const i=so.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var so=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new fu,t=>t.reset());class fu{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function pu(t){d.setTimeout(()=>{throw t},0)}function oo(t,e){Zn||gu(),ei||(Zn(),ei=!0),ao.add(t,e)}var Zn;function gu(){var t=d.Promise.resolve(void 0);Zn=function(){t.then(mu)}}var ei=!1,ao=new du;function mu(){for(var t;t=uu();){try{t.h.call(t.g)}catch(n){pu(n)}var e=so;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ei=!1}function rn(t,e){T.call(this),this.h=t||1,this.g=e||d,this.j=D(this.qb,this),this.l=Date.now()}A(rn,T);l=rn.prototype;l.ga=!1;l.T=null;l.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),C(this,"tick"),this.ga&&(Li(this),this.start()))}};l.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Li(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}l.N=function(){rn.$.N.call(this),Li(this),delete this.g};function Mi(t,e,n){if(typeof t=="function")n&&(t=D(t,n));else if(t&&typeof t.handleEvent=="function")t=D(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:d.setTimeout(t,e||0)}function co(t){t.g=Mi(()=>{t.g=null,t.i&&(t.i=!1,co(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class vu extends de{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:co(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function et(t){de.call(this),this.h=t,this.g={}}A(et,de);var Ur=[];function ho(t,e,n,i){Array.isArray(n)||(n&&(Ur[0]=n.toString()),n=Ur);for(var r=0;r<n.length;r++){var s=eo(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function lo(t){Ri(t.g,function(e,n){this.g.hasOwnProperty(n)&&Di(e)},t),t.g={}}et.prototype.N=function(){et.$.N.call(this),lo(this)};et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sn(){this.g=!0}sn.prototype.Ea=function(){this.g=!1};function yu(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var p=u.split("_");o=2<=p.length&&p[1]=="type"?o+(u+"="+h+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function _u(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function Re(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Eu(t,n)+(i?" "+i:"")})}function Iu(t,e){t.info(function(){return"TIMEOUT: "+e})}sn.prototype.info=function(){};function Eu(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Pi(n)}catch{return e}}var Fe={},xr=null;function Ui(){return xr=xr||new T}Fe.Ta="serverreachability";function uo(t){O.call(this,Fe.Ta,t)}A(uo,O);function tt(t){const e=Ui();C(e,new uo(e))}Fe.STAT_EVENT="statevent";function fo(t,e){O.call(this,Fe.STAT_EVENT,t),this.stat=e}A(fo,O);function L(t){const e=Ui();C(e,new fo(e,t))}Fe.Ua="timingevent";function po(t,e){O.call(this,Fe.Ua,t),this.size=e}A(po,O);function ft(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){t()},e)}var xi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},wu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function $i(){}$i.prototype.h=null;function $r(t){return t.h||(t.h=t.i())}function Tu(){}var pt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Fi(){O.call(this,"d")}A(Fi,O);function ji(){O.call(this,"c")}A(ji,O);var ti;function on(){}A(on,$i);on.prototype.g=function(){return new XMLHttpRequest};on.prototype.i=function(){return{}};ti=new on;function gt(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new et(this),this.P=Au,t=Xn?125:void 0,this.V=new rn(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new go}function go(){this.i=null,this.g="",this.h=!1}var Au=45e3,ni={},Bt={};l=gt.prototype;l.setTimeout=function(t){this.P=t};function ii(t,e,n){t.L=1,t.v=cn(ne(e)),t.s=n,t.S=!0,mo(t,null)}function mo(t,e){t.G=Date.now(),mt(t),t.A=ne(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),Ao(n.i,"t",i),t.C=0,n=t.l.I,t.h=new go,t.g=Wo(t.l,n?e:null,!t.s),0<t.O&&(t.M=new vu(D(t.Pa,t,t.g),t.O)),ho(t.U,t.g,"readystatechange",t.nb),e=t.I?Qs(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),tt(),yu(t.j,t.u,t.A,t.m,t.W,t.s)}l.nb=function(t){t=t.target;const e=this.M;e&&Q(t)==3?e.l():this.Pa(t)};l.Pa=function(t){try{if(t==this.g)e:{const u=Q(this.g);var e=this.g.Ia();const p=this.g.da();if(!(3>u)&&(u!=3||Xn||this.g&&(this.h.h||this.g.ja()||Hr(this.g)))){this.J||u!=4||e==7||(e==8||0>=p?tt(3):tt(2)),an(this);var n=this.g.da();this.aa=n;t:if(vo(this)){var i=Hr(this.g);t="";var r=i.length,s=Q(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ve(this),qe(this);var o="";break t}this.h.i=new d.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,_u(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!jt(a)){var h=a;break t}}h=null}if(n=h)Re(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ri(this,n);else{this.i=!1,this.o=3,L(12),ve(this),qe(this);break e}}this.S?(yo(this,u,o),Xn&&this.i&&u==3&&(ho(this.U,this.V,"tick",this.mb),this.V.start())):(Re(this.j,this.m,o,null),ri(this,o)),u==4&&ve(this),this.i&&!this.J&&(u==4?Bo(this.l,this):(this.i=!1,mt(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,L(12)):(this.o=0,L(13)),ve(this),qe(this)}}}catch{}finally{}};function vo(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function yo(t,e,n){let i=!0,r;for(;!t.J&&t.C<n.length;)if(r=Su(t,n),r==Bt){e==4&&(t.o=4,L(14),i=!1),Re(t.j,t.m,null,"[Incomplete Response]");break}else if(r==ni){t.o=4,L(15),Re(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Re(t.j,t.m,r,null),ri(t,r);vo(t)&&r!=Bt&&r!=ni&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,L(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ki(e),e.L=!0,L(11))):(Re(t.j,t.m,n,"[Invalid Chunked Response]"),ve(t),qe(t))}l.mb=function(){if(this.g){var t=Q(this.g),e=this.g.ja();this.C<e.length&&(an(this),yo(this,t,e),this.i&&t!=4&&mt(this))}};function Su(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Bt:(n=Number(e.substring(n,i)),isNaN(n)?ni:(i+=1,i+n>e.length?Bt:(e=e.substr(i,n),t.C=i+n,e)))}l.cancel=function(){this.J=!0,ve(this)};function mt(t){t.Y=Date.now()+t.P,_o(t,t.P)}function _o(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ft(D(t.lb,t),e)}function an(t){t.B&&(d.clearTimeout(t.B),t.B=null)}l.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Iu(this.j,this.A),this.L!=2&&(tt(),L(17)),ve(this),this.o=2,qe(this)):_o(this,this.Y-t)};function qe(t){t.l.H==0||t.J||Bo(t.l,t)}function ve(t){an(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Li(t.V),lo(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function ri(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||si(n.h,t))){if(!t.K&&si(n.h,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)zt(n),dn(n);else break e;Gi(n),L(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=ft(D(n.ib,n),6e3));if(1>=ko(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else ye(n,11)}else if((t.K||n.g==t)&&zt(n),!jt(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let h=r[e];if(n.V=h[0],h=h[1],n.H==2)if(h[0]=="c"){n.J=h[1],n.oa=h[2];const u=h[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const p=h[4];p!=null&&(n.Ga=p,n.j.info("SVER="+n.Ga));const y=h[5];y!=null&&typeof y=="number"&&0<y&&(i=1.5*y,n.K=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const I=t.g;if(I){const w=I.g?I.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=i.h;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Bi(s,s.h),s.h=null))}if(i.F){const B=I.g?I.g.getResponseHeader("X-HTTP-Session-Id"):null;B&&(i.Da=B,_(i.G,i.F,B))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=zo(i,i.I?i.oa:null,i.Y),o.K){Ro(i.h,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(an(a),mt(a)),i.g=o}else Fo(i);0<n.i.length&&fn(n)}else h[0]!="stop"&&h[0]!="close"||ye(n,7);else n.H==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?ye(n,7):Wi(n):h[0]!="noop"&&n.l&&n.l.Aa(h),n.A=0)}}tt(4)}catch{}}function Cu(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Zt(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function ku(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Zt(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Io(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Zt(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ku(t),i=Cu(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var Eo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ru(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ie(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ie){this.h=e!==void 0?e:t.h,Ht(this,t.j),this.s=t.s,this.g=t.g,Vt(this,t.m),this.l=t.l,e=t.i;var n=new nt;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Fr(this,n),this.o=t.o}else t&&(n=String(t).match(Eo))?(this.h=!!e,Ht(this,n[1]||"",!0),this.s=ze(n[2]||""),this.g=ze(n[3]||"",!0),Vt(this,n[4]),this.l=ze(n[5]||"",!0),Fr(this,n[6]||"",!0),this.o=ze(n[7]||"")):(this.h=!!e,this.i=new nt(null,this.h))}Ie.prototype.toString=function(){var t=[],e=this.j;e&&t.push(We(e,jr,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(We(e,jr,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(We(n,n.charAt(0)=="/"?Ou:Du,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",We(n,Pu)),t.join("")};function ne(t){return new Ie(t)}function Ht(t,e,n){t.j=n?ze(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Vt(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fr(t,e,n){e instanceof nt?(t.i=e,Lu(t.i,t.h)):(n||(e=We(e,Nu)),t.i=new nt(e,t.h))}function _(t,e,n){t.i.set(e,n)}function cn(t){return _(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ze(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function We(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,bu),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function bu(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var jr=/[#\/\?@]/g,Du=/[#\?:]/g,Ou=/[#\?]/g,Nu=/[#\?@]/g,Pu=/#/g;function nt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function fe(t){t.g||(t.g=new Map,t.h=0,t.i&&Ru(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}l=nt.prototype;l.add=function(t,e){fe(this),this.i=null,t=je(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function wo(t,e){fe(t),e=je(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function To(t,e){return fe(t),e=je(t,e),t.g.has(e)}l.forEach=function(t,e){fe(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};l.sa=function(){fe(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};l.Z=function(t){fe(this);let e=[];if(typeof t=="string")To(this,t)&&(e=e.concat(this.g.get(je(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};l.set=function(t,e){return fe(this),this.i=null,t=je(this,t),To(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};l.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Ao(t,e,n){wo(t,e),0<n.length&&(t.i=null,t.g.set(je(t,e),Ci(n)),t.h+=n.length)}l.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function je(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Lu(t,e){e&&!t.j&&(fe(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(wo(this,i),Ao(this,r,n))},t)),t.j=e}var Mu=class{constructor(t,e){this.h=t,this.g=e}};function So(t){this.l=t||Uu,d.PerformanceNavigationTiming?(t=d.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(d.g&&d.g.Ka&&d.g.Ka()&&d.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Uu=10;function Co(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ko(t){return t.h?1:t.g?t.g.size:0}function si(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Bi(t,e){t.g?t.g.add(e):t.h=e}function Ro(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}So.prototype.cancel=function(){if(this.i=bo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function bo(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ci(t.i)}function Hi(){}Hi.prototype.stringify=function(t){return d.JSON.stringify(t,void 0)};Hi.prototype.parse=function(t){return d.JSON.parse(t,void 0)};function xu(){this.g=new Hi}function $u(t,e,n){const i=n||"";try{Io(t,function(r,s){let o=r;ut(r)&&(o=Pi(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function Fu(t,e){const n=new sn;if(d.Image){const i=new Image;i.onload=wt(At,n,i,"TestLoadImage: loaded",!0,e),i.onerror=wt(At,n,i,"TestLoadImage: error",!1,e),i.onabort=wt(At,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=wt(At,n,i,"TestLoadImage: timeout",!1,e),d.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function At(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function hn(t){this.l=t.fc||null,this.j=t.ob||!1}A(hn,$i);hn.prototype.g=function(){return new ln(this.l,this.j)};hn.prototype.i=function(t){return function(){return t}}({});function ln(t,e){T.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Vi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}A(ln,T);var Vi=0;l=ln.prototype;l.open=function(t,e){if(this.readyState!=Vi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,it(this)};l.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||d).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};l.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vt(this)),this.readyState=Vi};l.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,it(this)),this.g&&(this.readyState=3,it(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Do(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Do(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}l.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?vt(this):it(this),this.readyState==3&&Do(this)}};l.Za=function(t){this.g&&(this.response=this.responseText=t,vt(this))};l.Ya=function(t){this.g&&(this.response=t,vt(this))};l.ka=function(){this.g&&vt(this)};function vt(t){t.readyState=4,t.l=null,t.j=null,t.A=null,it(t)}l.setRequestHeader=function(t,e){this.v.append(t,e)};l.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};l.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function it(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ln.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ju=d.JSON.parse;function E(t){T.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Oo,this.L=this.M=!1}A(E,T);var Oo="",Bu=/^https?$/i,Hu=["POST","PUT"];l=E.prototype;l.Oa=function(t){this.M=t};l.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ti.g(),this.C=this.u?$r(this.u):$r(ti),this.g.onreadystatechange=D(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Br(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=d.FormData&&t instanceof d.FormData,!(0<=Ks(Hu,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Lo(this),0<this.B&&((this.L=Vu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=D(this.ua,this)):this.A=Mi(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Br(this,s)}};function Vu(t){return Qe&&su()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}l.ua=function(){typeof Si<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,C(this,"timeout"),this.abort(8))};function Br(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,No(t),un(t)}function No(t){t.F||(t.F=!0,C(t,"complete"),C(t,"error"))}l.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,C(this,"complete"),C(this,"abort"),un(this))};l.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),un(this,!0)),E.$.N.call(this)};l.La=function(){this.s||(this.G||this.v||this.l?Po(this):this.kb())};l.kb=function(){Po(this)};function Po(t){if(t.h&&typeof Si<"u"&&(!t.C[1]||Q(t)!=4||t.da()!=2)){if(t.v&&Q(t)==4)Mi(t.La,0,t);else if(C(t,"readystatechange"),Q(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.I).match(Eo)[1]||null;if(!r&&d.self&&d.self.location){var s=d.self.location.protocol;r=s.substr(0,s.length-1)}i=!Bu.test(r?r.toLowerCase():"")}n=i}if(n)C(t,"complete"),C(t,"success");else{t.m=6;try{var o=2<Q(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",No(t)}}finally{un(t)}}}}function un(t,e){if(t.g){Lo(t);const n=t.g,i=t.C[0]?Ft:null;t.g=null,t.C=null,e||C(t,"ready");try{n.onreadystatechange=i}catch{}}}function Lo(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(d.clearTimeout(t.A),t.A=null)}function Q(t){return t.g?t.g.readyState:0}l.da=function(){try{return 2<Q(this)?this.g.status:-1}catch{return-1}};l.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};l.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ju(e)}};function Hr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Oo:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}l.Ia=function(){return this.m};l.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Mo(t){let e="";return Ri(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function zi(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Mo(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_(t,e,n))}function He(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Uo(t){this.Ga=0,this.i=[],this.j=new sn,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=He("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=He("baseRetryDelayMs",5e3,t),this.hb=He("retryDelaySeedMs",1e4,t),this.eb=He("forwardChannelMaxRetries",2,t),this.xa=He("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new So(t&&t.concurrentRequestLimit),this.Ja=new xu,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}l=Uo.prototype;l.qa=8;l.H=1;function Wi(t){if(xo(t),t.H==3){var e=t.W++,n=ne(t.G);_(n,"SID",t.J),_(n,"RID",e),_(n,"TYPE","terminate"),yt(t,n),e=new gt(t,t.j,e,void 0),e.L=2,e.v=cn(ne(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(e.v.toString(),"")),!n&&d.Image&&(new Image().src=e.v,n=!0),n||(e.g=Wo(e.l,null),e.g.ha(e.v)),e.G=Date.now(),mt(e)}Vo(t)}function dn(t){t.g&&(Ki(t),t.g.cancel(),t.g=null)}function xo(t){dn(t),t.u&&(d.clearTimeout(t.u),t.u=null),zt(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&d.clearTimeout(t.m),t.m=null)}function fn(t){Co(t.h)||t.m||(t.m=!0,oo(t.Na,t),t.C=0)}function zu(t,e){return ko(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ft(D(t.Na,t,e),Ho(t,t.C)),t.C++,!0)}l.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new gt(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=Qs(s),Zs(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$o(this,r,e),n=ne(this.G),_(n,"RID",t),_(n,"CVER",22),this.F&&_(n,"X-HTTP-Session-Id",this.F),yt(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Mo(s)))+"&"+e:this.o&&zi(n,this.o,s)),Bi(this.h,r),this.bb&&_(n,"TYPE","init"),this.P?(_(n,"$req",e),_(n,"SID","null"),r.ba=!0,ii(r,n,null)):ii(r,n,e),this.H=2}}else this.H==3&&(t?Vr(this,t):this.i.length==0||Co(this.h)||Vr(this))};function Vr(t,e){var n;e?n=e.m:n=t.W++;const i=ne(t.G);_(i,"SID",t.J),_(i,"RID",n),_(i,"AID",t.V),yt(t,i),t.o&&t.s&&zi(i,t.o,t.s),n=new gt(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=$o(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Bi(t.h,n),ii(n,i,e)}function yt(t,e){t.ma&&Ri(t.ma,function(n,i){_(e,i,n)}),t.l&&Io({},function(n,i){_(e,i,n)})}function $o(t,e,n){n=Math.min(t.i.length,n);var i=t.l?D(t.l.Va,t.l,t):null;e:{var r=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let h=r[c].h;const u=r[c].g;if(h-=s,0>h)s=Math.max(0,r[c].h-100),a=!1;else try{$u(u,o,"req"+h+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,i}function Fo(t){t.g||t.u||(t.ba=1,oo(t.Ma,t),t.A=0)}function Gi(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ft(D(t.Ma,t),Ho(t,t.A)),t.A++,!0)}l.Ma=function(){if(this.u=null,jo(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=ft(D(this.jb,this),t)}};l.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,L(10),dn(this),jo(this))};function Ki(t){t.B!=null&&(d.clearTimeout(t.B),t.B=null)}function jo(t){t.g=new gt(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=ne(t.wa);_(e,"RID","rpc"),_(e,"SID",t.J),_(e,"CI",t.M?"0":"1"),_(e,"AID",t.V),_(e,"TYPE","xmlhttp"),yt(t,e),t.o&&t.s&&zi(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=cn(ne(e)),n.s=null,n.S=!0,mo(n,t)}l.ib=function(){this.v!=null&&(this.v=null,dn(this),Gi(this),L(19))};function zt(t){t.v!=null&&(d.clearTimeout(t.v),t.v=null)}function Bo(t,e){var n=null;if(t.g==e){zt(t),Ki(t),t.g=null;var i=2}else if(si(t.h,e))n=e.F,Ro(t.h,e),i=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;i=Ui(),C(i,new po(i,n)),fn(t)}else Fo(t);else if(r=e.o,r==3||r==0&&0<t.ta||!(i==1&&zu(t,e)||i==2&&Gi(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:ye(t,5);break;case 4:ye(t,10);break;case 3:ye(t,6);break;default:ye(t,2)}}}function Ho(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function ye(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=D(t.pb,t);n||(n=new Ie("//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ht(n,"https"),cn(n)),Fu(n.toString(),i)}else L(2);t.H=0,t.l&&t.l.za(e),Vo(t),xo(t)}l.pb=function(t){t?(this.j.info("Successfully pinged google.com"),L(2)):(this.j.info("Failed to ping google.com"),L(1))};function Vo(t){if(t.H=0,t.pa=[],t.l){const e=bo(t.h);(e.length!=0||t.i.length!=0)&&(Pr(t.pa,e),Pr(t.pa,t.i),t.h.i.length=0,Ci(t.i),t.i.length=0),t.l.ya()}}function zo(t,e,n){var i=n instanceof Ie?ne(n):new Ie(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),Vt(i,i.m);else{var r=d.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Ie(null,void 0);i&&Ht(s,i),e&&(s.g=e),r&&Vt(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&_(i,n,e),_(i,"VER",t.qa),yt(t,i),i}function Wo(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new E(new hn({ob:!0})):new E(t.va),e.Oa(t.I),e}function Go(){}l=Go.prototype;l.Ba=function(){};l.Aa=function(){};l.za=function(){};l.ya=function(){};l.Va=function(){};function j(t,e){T.call(this),this.g=new Uo(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!jt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!jt(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Be(this)}A(j,T);j.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;L(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=zo(t,null,t.Y),fn(t)};j.prototype.close=function(){Wi(this.g)};j.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Pi(t),t=n);e.i.push(new Mu(e.fb++,t)),e.H==3&&fn(e)};j.prototype.N=function(){this.g.l=null,delete this.j,Wi(this.g),delete this.g,j.$.N.call(this)};function Ko(t){Fi.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}A(Ko,Fi);function qo(){ji.call(this),this.status=1}A(qo,ji);function Be(t){this.g=t}A(Be,Go);Be.prototype.Ba=function(){C(this.g,"a")};Be.prototype.Aa=function(t){C(this.g,new Ko(t))};Be.prototype.za=function(t){C(this.g,new qo)};Be.prototype.ya=function(){C(this.g,"b")};function Wu(){this.blockSize=-1}function q(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}A(q,Wu);q.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Pn(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^s)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}q.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(r==0)for(;s<=n;)Pn(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){Pn(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){Pn(this,i),r=0;break}}this.h=r,this.i+=e};q.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function v(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=t[r]|0;i&&s==e||(n[r]=s,i=!1)}this.g=n}var Gu={};function qi(t){return-128<=t&&128>t?qs(Gu,t,function(e){return new v([e|0],0>e?-1:0)}):new v([t|0],0>t?-1:0)}function V(t){if(isNaN(t)||!isFinite(t))return Ne;if(0>t)return S(V(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=oi;return new v(e,0)}function Xo(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return S(Xo(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=V(Math.pow(e,8)),i=Ne,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+s),e);8>s?(s=V(Math.pow(e,s)),i=i.R(s).add(V(o))):(i=i.R(n),i=i.add(V(o)))}return i}var oi=4294967296,Ne=qi(0),ai=qi(1),zr=qi(16777216);l=v.prototype;l.ea=function(){if(F(this))return-S(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:oi+i)*e,e*=oi}return t};l.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Z(this))return"0";if(F(this))return"-"+S(this).toString(t);for(var e=V(Math.pow(t,6)),n=this,i="";;){var r=Gt(n,e).g;n=Wt(n,r.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Z(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};l.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Z(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function F(t){return t.h==-1}l.X=function(t){return t=Wt(this,t),F(t)?-1:Z(t)?0:1};function S(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new v(n,~t.h).add(ai)}l.abs=function(){return F(this)?S(this):this};l.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(this.D(r)&65535)+(t.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new v(n,n[n.length-1]&-2147483648?-1:0)};function Wt(t,e){return t.add(S(e))}l.R=function(t){if(Z(this)||Z(t))return Ne;if(F(this))return F(t)?S(this).R(S(t)):S(S(this).R(t));if(F(t))return S(this.R(S(t)));if(0>this.X(zr)&&0>t.X(zr))return V(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*i+2*r]+=o*c,St(n,2*i+2*r),n[2*i+2*r+1]+=s*c,St(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,St(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,St(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new v(n,0)};function St(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ve(t,e){this.g=t,this.h=e}function Gt(t,e){if(Z(e))throw Error("division by zero");if(Z(t))return new Ve(Ne,Ne);if(F(t))return e=Gt(S(t),e),new Ve(S(e.g),S(e.h));if(F(e))return e=Gt(t,S(e)),new Ve(S(e.g),e.h);if(30<t.g.length){if(F(t)||F(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ai,i=e;0>=i.X(t);)n=Wr(n),i=Wr(i);var r=Se(n,1),s=Se(i,1);for(i=Se(i,2),n=Se(n,2);!Z(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=Se(i,1),n=Se(n,1)}return e=Wt(t,r.R(e)),new Ve(r,e)}for(r=Ne;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=V(n),o=s.R(e);F(o)||0<o.X(t);)n-=i,s=V(n),o=s.R(e);Z(s)&&(s=ai),r=r.add(s),t=Wt(t,o)}return new Ve(r,t)}l.gb=function(t){return Gt(this,t).h};l.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new v(n,this.h&t.h)};l.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new v(n,this.h|t.h)};l.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new v(n,this.h^t.h)};function Wr(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new v(n,t.h)}function Se(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new v(r,t.h)}j.prototype.send=j.prototype.u;j.prototype.open=j.prototype.m;j.prototype.close=j.prototype.close;xi.NO_ERROR=0;xi.TIMEOUT=8;xi.HTTP_ERROR=6;wu.COMPLETE="complete";Tu.EventType=pt;pt.OPEN="a";pt.CLOSE="b";pt.ERROR="c";pt.MESSAGE="d";T.prototype.listen=T.prototype.O;E.prototype.listenOnce=E.prototype.P;E.prototype.getLastError=E.prototype.Sa;E.prototype.getLastErrorCode=E.prototype.Ia;E.prototype.getStatus=E.prototype.da;E.prototype.getResponseJson=E.prototype.Wa;E.prototype.getResponseText=E.prototype.ja;E.prototype.send=E.prototype.ha;E.prototype.setWithCredentials=E.prototype.Oa;q.prototype.digest=q.prototype.l;q.prototype.reset=q.prototype.reset;q.prototype.update=q.prototype.j;v.prototype.add=v.prototype.add;v.prototype.multiply=v.prototype.R;v.prototype.modulo=v.prototype.gb;v.prototype.compare=v.prototype.X;v.prototype.toNumber=v.prototype.ea;v.prototype.toString=v.prototype.toString;v.prototype.getBits=v.prototype.D;v.fromNumber=V;v.fromString=Xo;var Ku=v;const Gr="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}k.UNAUTHENTICATED=new k(null),k.GOOGLE_CREDENTIALS=new k("google-credentials-uid"),k.FIRST_PARTY=new k("first-party-uid"),k.MOCK_USER=new k("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _t="9.22.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new pi("@firebase/firestore");function U(t,...e){if(xe.logLevel<=m.DEBUG){const n=e.map(Ji);xe.debug(`Firestore (${_t}): ${t}`,...n)}}function Xi(t,...e){if(xe.logLevel<=m.ERROR){const n=e.map(Ji);xe.error(`Firestore (${_t}): ${t}`,...n)}}function qu(t,...e){if(xe.logLevel<=m.WARN){const n=e.map(Ji);xe.warn(`Firestore (${_t}): ${t}`,...n)}}function Ji(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t="Unexpected state"){const e=`FIRESTORE (${_t}) INTERNAL ASSERTION FAILED: `+t;throw Xi(e),new Error(e)}function ci(t,e){t||Yi()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends ie{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(k.UNAUTHENTICATED))}shutdown(){}}class Ju{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Yu{constructor(e){this.t=e,this.currentUser=k.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let s=new Pe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pe,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pe)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ci(typeof i.accessToken=="string"),new Jo(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ci(e===null||typeof e=="string"),new k(e)}}class Qu{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=k.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Zu{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new Qu(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(k.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ed{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class td{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?r(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ci(typeof n.token=="string"),this.T=n.token,new ed(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=nd(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function Yo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,n,i,r,s,o,a,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=h}}class Kt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Kt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Kt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kr,g;(g=Kr||(Kr={}))[g.OK=0]="OK",g[g.CANCELLED=1]="CANCELLED",g[g.UNKNOWN=2]="UNKNOWN",g[g.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",g[g.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",g[g.NOT_FOUND=5]="NOT_FOUND",g[g.ALREADY_EXISTS=6]="ALREADY_EXISTS",g[g.PERMISSION_DENIED=7]="PERMISSION_DENIED",g[g.UNAUTHENTICATED=16]="UNAUTHENTICATED",g[g.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",g[g.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",g[g.ABORTED=10]="ABORTED",g[g.OUT_OF_RANGE=11]="OUT_OF_RANGE",g[g.UNIMPLEMENTED=12]="UNIMPLEMENTED",g[g.INTERNAL=13]="INTERNAL",g[g.UNAVAILABLE=14]="UNAVAILABLE",g[g.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ku([4294967295,4294967295],0);function Ln(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n,i=1e3,r=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=i,this.bo=r,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-i);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Pe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new Qi(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function od(t,e){if(Xi("AsyncQueue",`${e}: ${t}`),Yo(t))return new b(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=k.UNAUTHENTICATED,this.clientId=id.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=od(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new Map;function cd(t,e,n,i){if(e===!0&&i===!0)throw new b(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Yi()}function ld(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new b(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hd(t);throw new b(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new b(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new b(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cd("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qo((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new b(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new b(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new b(R.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,n.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,i}}class Zo{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new b(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xr(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Xu;switch(n.type){case"firstParty":return new Zu(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new b(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=qr.get(e);n&&(U("ComponentProvider","Removing Datastore"),qr.delete(e),n.terminate())}(this),Promise.resolve()}}function ud(t,e,n,i={}){var r;const s=(t=ld(t,Zo))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&qu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=k.MOCK_USER;else{o=Ca(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new b(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new k(c)}t._authCredentials=new Ju(new Jo(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new sd(this,"async_queue_retry"),this.Xc=()=>{const n=Ln();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Ln();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Ln();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Pe;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Yo(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(i=>{this.Wc=i,this.Hc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Xi("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Hc=!1,i))));return this.Gc=n,n}enqueueAfterDelay(e,n,i){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=Qi.createAndSchedule(this,e,n,i,s=>this.na(s));return this.zc.push(r),r}Zc(){this.Wc&&Yi()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class fd extends Zo{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new dd,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gd(this),this._firestoreClient.terminate()}}function pd(t,e){const n=typeof t=="object"?t:ls(),i=typeof t=="string"?t:e||"(default)",r=mi(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=Aa("firestore");s&&ud(r,...s)}return r}function gd(t){var e,n,i;const r=t._freezeSettings(),s=function(o,a,c,h){return new rd(o,a,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Qo(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new ad(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=r.cache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((i=r.cache)===null||i===void 0?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}(function(t,e=!0){(function(n){_t=n})($e),Me(new Ee("firestore",(n,{instanceIdentifier:i,options:r})=>{const s=n.getProvider("app").getImmediate(),o=new fd(new Yu(n.getProvider("auth-internal")),new td(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new b(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kt(a.options.projectId,c)}(s,i),s);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),le(Gr,"3.12.0",t),le(Gr,"3.12.0","esm2017")})();const Mn={apiKey:"AIzaSyB_IAgkUtcV_KbZtSRcB2chntOzIZObNCY",authDomain:"svelte-fb-22986.firebaseapp.com",projectId:"svelte-fb-22986",storageBucket:"svelte-fb-22986.appspot.com",messagingSenderId:"973478483796",appId:"1:973478483796:web:5f29b967513db0e573dac1"};function md(){if(!Mn||!Mn.apiKey)throw new Error(`No Firebase configuration object provided.
Add your web app's configuration object to firebase-config.js`);return Mn}const ea=hs(md());pd(ea);const Un=Gl(ea),Ce=[];function Jr(t,e=x){let n;const i=new Set;function r(a){if(Xt(t,a)&&(t=a,n)){const c=!Ce.length;for(const h of i)h[1](),Ce.push(h,t);if(c){for(let h=0;h<Ce.length;h+=2)Ce[h][0](Ce[h+1]);Ce.length=0}}}function s(a){r(a(t))}function o(a,c=x){const h=[a,c];return i.add(h),i.size===1&&(n=e(r)||x),a(t),()=>{i.delete(h),i.size===0&&n&&(n(),n=null)}}return{set:r,update:s,subscribe:o}}function vd(t){var i;let e;if(!t||!globalThis.window){console.warn("Auth is not initialized on not in browser");const{subscribe:r}=Jr(null);return{subscribe:r}}const{subscribe:n}=Jr((i=t==null?void 0:t.currentUser)!=null?i:null,r=>(e=Ph(t,s=>{r(s)}),()=>e()));return{subscribe:n}}function yd(t){let e,n,i,r,s;return{c(){e=$("p"),e.textContent="Sign in...",n=ge(),i=$("button"),i.textContent="Login"},m(o,a){ee(o,e,a),ee(o,n,a),ee(o,i,a),r||(s=hi(i,"click",t[1]),r=!0)},p:x,d(o){o&&z(e),o&&z(n),o&&z(i),r=!1,s()}}}function _d(t){let e,n,i=t[0].uid+"",r,s,o,a,c;return{c(){e=$("p"),n=Le("Hi "),r=Le(i),s=ge(),o=$("button"),o.textContent="Logout"},m(h,u){ee(h,e,u),P(e,n),P(e,r),ee(h,s,u),ee(h,o,u),a||(c=hi(o,"click",t[2]),a=!0)},p(h,u){u&1&&i!==(i=h[0].uid+"")&&Zr(r,i)},d(h){h&&z(e),h&&z(s),h&&z(o),a=!1,c()}}}function Id(t){let e;function n(s,o){return s[0]?_d:yd}let i=n(t),r=i(t);return{c(){r.c(),e=oa()},m(s,o){r.m(s,o),ee(s,e,o)},p(s,[o]){i===(i=n(s))&&r?r.p(s,o):(r.d(1),r=i(s),r&&(r.c(),r.m(e.parentNode,e)))},i:x,o:x,d(s){r.d(s),s&&z(e)}}}function Ed(t,e,n){let i;async function r(){var a=new X;await tl(Un,a)}function s(){Lh(Un)}const o=vd(Un);return sa(t,o,a=>n(0,i=a)),[i,r,s,o]}class wd extends di{constructor(e){super(),ui(this,e,Ed,Id,Xt,{})}}function Td(t){let e,n,i,r,s,o,a,c,h,u,p,y,I,w,B;return a=new ma({}),u=new wd({}),{c(){e=$("main"),n=$("div"),n.innerHTML=`<a href="https://vitejs.dev" target="_blank" rel="noreferrer"><img src="/vite.svg" class="logo svelte-c9fbf7" alt="Vite Logo"/></a> 
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"><img src="" class="logo svelte svelte-c9fbf7" alt="Svelte Logo"/></a>`,i=ge(),r=$("h1"),r.textContent="Vite + Svelte",s=ge(),o=$("div"),ar(a.$$.fragment),c=ge(),h=$("div"),ar(u.$$.fragment),p=ge(),y=$("p"),y.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',I=ge(),w=$("p"),w.textContent="Click on the Vite and Svelte logos to learn more",vn(o,"class","card"),vn(h,"class","card"),vn(w,"class","read-the-docs svelte-c9fbf7")},m(M,It){ee(M,e,It),P(e,n),P(e,i),P(e,r),P(e,s),P(e,o),jn(a,o,null),P(e,c),P(e,h),jn(u,h,null),P(e,p),P(e,y),P(e,I),P(e,w),B=!0},p:x,i(M){B||(Fn(a.$$.fragment,M),Fn(u.$$.fragment,M),B=!0)},o(M){or(a.$$.fragment,M),or(u.$$.fragment,M),B=!1},d(M){M&&z(e),Bn(a),Bn(u)}}}class Ad extends di{constructor(e){super(),ui(this,e,null,Td,Xt,{})}}new Ad({target:document.getElementById("app")});
