// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).minstd=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,s,y;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),s="get"in t,y="set"in t,c&&(s||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(e,r,t.get),y&&a&&a.call(e,r,t.set),e};var l=r;function c(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function s(e,r,t,n){var o,i,a,u,f;if(!((u=r[0])<=0))for(i=(o=t[0])<0?(1-u)*o:0,a=e[0],f=0;f<u;f++)a[i]=n(),i+=o}function y(e,r,t,n,o){var i,a,u,f,l;if(!((f=r[0])<=0))for(a=n[0],i=t[0],u=e[0],l=0;l<f;l++)u[a]=o(),a+=i}function h(e,r,t){l(e,r,{configurable:!1,enumerable:!1,get:t})}function p(e,r,t,n){l(e,r,{configurable:!1,enumerable:!1,get:t,set:n})}c(s,"ndarray",y);var m=Object.prototype.hasOwnProperty;function g(e,r){return null!=e&&m.call(e,r)}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function w(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d="function"==typeof Symbol?Symbol.toStringTag:"";var E=w()?function(e){var r,t,n;if(null==e)return v.call(e);t=e[d],r=g(e,d);try{e[d]=void 0}catch(r){return v.call(e)}return n=v.call(e),r?e[d]=t:delete e[d],n}:function(e){return v.call(e)};var A=Array.isArray?Array.isArray:function(e){return"[object Array]"===E(e)};function _(e){return"object"==typeof e&&null!==e&&!A(e)}var T=/./;function j(e){return"boolean"==typeof e}var x=Boolean.prototype.toString;var L=w();function O(e){return"object"==typeof e&&(e instanceof Boolean||(L?function(e){try{return x.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===E(e)))}function R(e){return j(e)||O(e)}function S(){return new Function("return this;")()}c(R,"isPrimitive",j),c(R,"isObject",O);var B="object"==typeof self?self:null,M="object"==typeof window?window:null,N="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},V="object"==typeof N?N:null;var I=function(e){if(arguments.length){if(!j(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return S()}if(B)return B;if(M)return M;if(V)return V;throw new Error("unexpected error. Unable to resolve global object.")}(),P=I.document&&I.document.childNodes,k=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var U=/^\s*function\s*([^(]*)/i;function F(e){return null!==e&&"object"==typeof e}function Y(e){var r,t,n,o;if(("Object"===(t=E(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=U.exec(n.toString()))return r[1]}return F(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}c(C,"REGEXP",U),c(F,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!A(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(F));var G="function"==typeof T||"object"==typeof k||"function"==typeof P?function(e){return Y(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Y(e).toLowerCase():r};function W(e){return"function"===G(e)}var z,J=Object.getPrototypeOf;z=W(Object.getPrototypeOf)?J:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===E(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var X=z;function q(e){return null==e?null:(e=Object(e),X(e))}var D=Object.prototype;function H(e){var r;return!!_(e)&&(!(r=q(e))||!g(e,"constructor")&&g(r,"constructor")&&W(r.constructor)&&"[object Function]"===E(r.constructor)&&g(r,"isPrototypeOf")&&W(r.isPrototypeOf)&&(r===D||function(e){var r;for(r in e)if(!g(e,r))return!1;return!0}(e)))}var K=Math.floor;function Q(e){return K(e)===e}function Z(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Q(e.length)&&e.length>=0&&e.length<=9007199254740991}function $(e){return"number"==typeof e}var ee=Number,re=ee.prototype.toString;var te=w();function ne(e){return"object"==typeof e&&(e instanceof ee||(te?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object Number]"===E(e)))}function oe(e){return $(e)||ne(e)}c(oe,"isPrimitive",$),c(oe,"isObject",ne);var ie=Number.POSITIVE_INFINITY,ae=ee.NEGATIVE_INFINITY;function ue(e){return e<ie&&e>ae&&Q(e)}function fe(e){return $(e)&&ue(e)}function le(e){return ne(e)&&ue(e.valueOf())}function ce(e){return fe(e)||le(e)}function se(e){return fe(e)&&e>0}function ye(e){return le(e)&&e.valueOf()>0}function he(e){return se(e)||ye(e)}c(ce,"isPrimitive",fe),c(ce,"isObject",le),c(he,"isPrimitive",se),c(he,"isObject",ye);var pe="function"==typeof Int32Array;function me(e){return pe&&e instanceof Int32Array||"[object Int32Array]"===E(e)}function ge(e,r){return e[r]}function be(e,r){return e.get(r)}function we(e,r,t){e[r]=t}function ve(e,r,t){e.set(t,r)}function de(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?be:ge,setter:r?ve:we}}function Ee(e,r,t,n,o,i,a){var u,f,l,c,s,y,h;for(u=r.data,f=o.data,c=r.getter,l=o.setter,s=n,y=a,h=0;h<e;h++)l(f,y,c(u,s)),s+=t,y+=i;return r}function Ae(e,r,t,n,o){var i,a,u,f,l,c;if(e<=0)return n;if(u=de(r),f=de(n),u.accessors||f.accessors)return Ee(e,u,t,i=t<0?(1-e)*t:0,f,o,a=o<0?(1-e)*o:0),f.data;if(1===t&&1===o){if((l=e%8)>0)for(c=0;c<l;c++)n[c]=r[c];if(e<8)return n;for(c=l;c<e;c+=8)n[c]=r[c],n[c+1]=r[c+1],n[c+2]=r[c+2],n[c+3]=r[c+3],n[c+4]=r[c+4],n[c+5]=r[c+5],n[c+6]=r[c+6],n[c+7]=r[c+7];return n}for(i=t<0?(1-e)*t:0,a=o<0?(1-e)*o:0,c=0;c<e;c++)n[a]=r[i],i+=t,a+=o;return n}c(Ae,"ndarray",(function(e,r,t,n,o,i,a){var u,f,l,c,s,y;if(e<=0)return o;if(l=de(r),c=de(o),l.accessors||c.accessors)return Ee(e,l,t,n,c,i,a),c.data;if(u=n,f=a,1===t&&1===i){if((s=e%8)>0)for(y=0;y<s;y++)o[f]=r[u],u+=t,f+=i;if(e<8)return o;for(y=s;y<e;y+=8)o[f]=r[u],o[f+1]=r[u+1],o[f+2]=r[u+2],o[f+3]=r[u+3],o[f+4]=r[u+4],o[f+5]=r[u+5],o[f+6]=r[u+6],o[f+7]=r[u+7],u+=8,f+=8;return o}for(y=0;y<e;y++)o[f]=r[u],u+=t,f+=i;return o}));var _e=2147483647,Te="function"==typeof Int32Array?Int32Array:null;var je="function"==typeof Int32Array?Int32Array:void 0;var xe=function(){var e,r;if("function"!=typeof Te)return!1;try{e=me(r=new Te([1,3.14,-3.14,2147483648]))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?je:function(){throw new Error("not implemented")};function Le(){}var Oe="foo"===Le.name;var Re="function"==typeof Float64Array;var Se="function"==typeof Float64Array?Float64Array:null;function Be(){var e,r,t;if("function"!=typeof Se)return!1;try{r=new Se([1,3.14,-3.14,NaN]),t=r,e=(Re&&t instanceof Float64Array||"[object Float64Array]"===E(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}var Me="function"==typeof Float64Array?Float64Array:void 0;var Ne=Be()?Me:function(){throw new Error("not implemented")},Ve="function"==typeof Int8Array;var Ie="function"==typeof Int8Array?Int8Array:null;var Pe="function"==typeof Int8Array?Int8Array:void 0;var ke=function(){var e,r,t;if("function"!=typeof Ie)return!1;try{r=new Ie([1,3.14,-3.14,128]),t=r,e=(Ve&&t instanceof Int8Array||"[object Int8Array]"===E(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?Pe:function(){throw new Error("not implemented")},Ce="function"==typeof Uint8Array;var Ue="function"==typeof Uint8Array?Uint8Array:null;var Fe="function"==typeof Uint8Array?Uint8Array:void 0;var Ye=function(){var e,r,t;if("function"!=typeof Ue)return!1;try{r=new Ue(r=[1,3.14,-3.14,256,257]),t=r,e=(Ce&&t instanceof Uint8Array||"[object Uint8Array]"===E(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Fe:function(){throw new Error("not implemented")},Ge="function"==typeof Uint8ClampedArray;var We="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var ze="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Je=function(){var e,r,t;if("function"!=typeof We)return!1;try{r=new We([-1,0,1,3.14,4.99,255,256]),t=r,e=(Ge&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===E(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?ze:function(){throw new Error("not implemented")},Xe="function"==typeof Int16Array;var qe="function"==typeof Int16Array?Int16Array:null;var De="function"==typeof Int16Array?Int16Array:void 0;var He=function(){var e,r,t;if("function"!=typeof qe)return!1;try{r=new qe([1,3.14,-3.14,32768]),t=r,e=(Xe&&t instanceof Int16Array||"[object Int16Array]"===E(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?De:function(){throw new Error("not implemented")},Ke="function"==typeof Uint16Array;var Qe="function"==typeof Uint16Array?Uint16Array:null;var Ze="function"==typeof Uint16Array?Uint16Array:void 0;var $e=function(){var e,r,t;if("function"!=typeof Qe)return!1;try{r=new Qe(r=[1,3.14,-3.14,65536,65537]),t=r,e=(Ke&&t instanceof Uint16Array||"[object Uint16Array]"===E(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ze:function(){throw new Error("not implemented")},er="function"==typeof Uint32Array;var rr="function"==typeof Uint32Array?Uint32Array:null;var tr="function"==typeof Uint32Array?Uint32Array:void 0;var nr=function(){var e,r,t;if("function"!=typeof rr)return!1;try{r=new rr(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(er&&t instanceof Uint32Array||"[object Uint32Array]"===E(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?tr:function(){throw new Error("not implemented")},or="function"==typeof Float32Array;var ir="function"==typeof Float32Array?Float32Array:null;var ar="function"==typeof Float32Array?Float32Array:void 0;var ur=function(){var e,r,t;if("function"!=typeof ir)return!1;try{r=new ir([1,3.14,-3.14,5e40]),t=r,e=(or&&t instanceof Float32Array||"[object Float32Array]"===E(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===ie}catch(r){e=!1}return e}()?ar:function(){throw new Error("not implemented")},fr=[Ne,ur,xe,nr,He,$e,ke,Ye,Je],lr=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],cr=Be()?q(Ne):sr;function sr(){}function yr(e){return fe(e)&&e>=0}function hr(e){return le(e)&&e.valueOf()>=0}function pr(e){return yr(e)||hr(e)}cr="TypedArray"===function(e){if(!1===W(e))throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return Oe?e.name:U.exec(e.toString())[1]}(cr)?cr:sr,c(pr,"isPrimitive",yr),c(pr,"isObject",hr);function mr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Q(e.length)&&e.length>=0&&e.length<=4294967295}var gr="function"==typeof ArrayBuffer;function br(e){return gr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===E(e)}function wr(e,r){if(!(this instanceof wr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!$(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!$(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}c(wr,"BYTES_PER_ELEMENT",8),c(wr.prototype,"BYTES_PER_ELEMENT",8),c(wr.prototype,"byteLength",16),c(wr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(wr.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var vr="function"==typeof Math.fround?Math.fround:null,dr=new ur(1);var Er="function"==typeof vr?vr:function(e){return dr[0]=e,dr[0]};function Ar(e,r){if(!(this instanceof Ar))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!$(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!$(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Er(e)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Er(r)}),this}function _r(e){return e instanceof wr||e instanceof Ar||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Tr(e){return Q(e/2)}function jr(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&g(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}c(Ar,"BYTES_PER_ELEMENT",4),c(Ar.prototype,"BYTES_PER_ELEMENT",4),c(Ar.prototype,"byteLength",8),c(Ar.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(Ar.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var xr=jr()?Symbol.iterator:null;function Lr(e){return e.re}function Or(e){return e.im}function Rr(e,r){return new ur(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Sr(e,r){return new Ne(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Br(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(mr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!_r(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(Lr(n),Or(n))}return r}function Mr(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,mr(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!_r(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(Lr(i),Or(i))}return n}function Nr(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!_r(n=r[o]))return null;e[i]=Lr(n),e[i+1]=Or(n),i+=2}return e}var Vr=2*ur.BYTES_PER_ELEMENT,Ir=jr();function Pr(e){return e instanceof Fr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function kr(e){return e===Fr||"Complex128Array"===e.name}function Cr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Vr}function Ur(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*Vr}function Fr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Fr))return 0===r?new Fr:1===r?new Fr(arguments[0]):2===r?new Fr(arguments[0],arguments[1]):new Fr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new ur(0);else if(1===r)if(yr(arguments[0]))t=new ur(2*arguments[0]);else if(Z(arguments[0]))if((n=(t=arguments[0]).length)&&A(t)&&_r(t[0])){if(null===(t=Nr(new ur(2*n),t))){if(!Tr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new ur(arguments[0])}}else{if(Cr(t))t=Rr(t,0);else if(Ur(t))t=Sr(t,0);else if(!Tr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new ur(t)}else if(br(arguments[0])){if(!Q((t=arguments[0]).byteLength/Vr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Vr+". Byte length: `"+t.byteLength+"`.");t=new ur(t)}else{if(!_(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Ir)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!W(t[xr]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!W((t=t[xr]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Br(t))instanceof Error)throw t;t=new ur(t)}else{if(!br(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!yr(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!Q(e/Vr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Vr+". Value: `"+e+"`.");if(2===r){if(!Q((n=t.byteLength-e)/Vr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Vr+". View byte length: `"+n+"`.");t=new ur(t,e)}else{if(!yr(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Vr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Vr+"`.");t=new ur(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}function Yr(e){return e.re}function Gr(e){return e.im}function Wr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(mr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!_r(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(Yr(n),Gr(n))}return r}function zr(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,mr(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!_r(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(Yr(i),Gr(i))}return n}function Jr(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!_r(n=r[o]))return null;e[i]=Yr(n),e[i+1]=Gr(n),i+=2}return e}c(Fr,"BYTES_PER_ELEMENT",Vr),c(Fr,"name","Complex64Array"),c(Fr,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,s;if(!W(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!W(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Pr(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,s=0,c=0;c<u;c++){if(_r(l=n.call(r,e.get(c),c)))i[s]=Lr(l),i[s+1]=Or(l);else{if(!(mr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[s]=l[0],i[s+1]=l[1]}s+=2}return o}return new this(e)}if(Z(e)){if(n){for(u=e.length,a=de(e),c=0;c<u;c++)if(!_r(a.getter(e,c))){f=!0;break}if(f){if(!Tr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,s=0,c=0;c<u;c++){if(_r(l=n.call(r,a.getter(e,c),c)))i[s]=Lr(l),i[s+1]=Or(l);else{if(!(mr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[s]=l[0],i[s+1]=l[1]}s+=2}return o}return new this(e)}if(_(e)&&Ir&&W(e[xr])){if(!W((i=e[xr]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Mr(i,n,r):Br(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(Fr,"of",(function(){var e,r;if(!W(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),h(Fr.prototype,"buffer",(function(){return this._buffer.buffer})),h(Fr.prototype,"byteLength",(function(){return this._buffer.byteLength})),h(Fr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Fr.prototype,"BYTES_PER_ELEMENT",Fr.BYTES_PER_ELEMENT),c(Fr.prototype,"copyWithin",(function(e,r){if(!Pr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(Fr.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!Pr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new Ar(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),c(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),xr&&c(t,xr,(function(){return r.entries()})),t})),c(Fr.prototype,"get",(function(e){var r;if(!Pr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!yr(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new Ar((r=this._buffer)[e*=2],r[e+1])})),h(Fr.prototype,"length",(function(){return this._length})),c(Fr.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!Pr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!yr(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(_r(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Lr(e),void(n[t+1]=Or(e))}if(Pr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Vr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new ur(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Z(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!_r(e[f])){i=!0;break}if(i){if(!Tr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Vr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new ur(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Lr(u),n[t+1]=Or(u),t+=2}}));var Xr=2*Ne.BYTES_PER_ELEMENT,qr=jr();function Dr(e){return e instanceof Zr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Hr(e){return e===Zr||"Complex64Array"===e.name}function Kr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Xr/2}function Qr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Xr}function Zr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Zr))return 0===r?new Zr:1===r?new Zr(arguments[0]):2===r?new Zr(arguments[0],arguments[1]):new Zr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new Ne(0);else if(1===r)if(yr(arguments[0]))t=new Ne(2*arguments[0]);else if(Z(arguments[0]))if((n=(t=arguments[0]).length)&&A(t)&&_r(t[0])){if(null===(t=Jr(new Ne(2*n),t))){if(!Tr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Ne(arguments[0])}}else{if(Kr(t))t=Rr(t,0);else if(Qr(t))t=Sr(t,0);else if(!Tr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Ne(t)}else if(br(arguments[0])){if(!Q((t=arguments[0]).byteLength/Xr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Xr+". Byte length: `"+t.byteLength+"`.");t=new Ne(t)}else{if(!_(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===qr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!W(t[xr]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!W((t=t[xr]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Wr(t))instanceof Error)throw t;t=new Ne(t)}else{if(!br(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!yr(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!Q(e/Xr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Xr+". Value: `"+e+"`.");if(2===r){if(!Q((n=t.byteLength-e)/Xr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Xr+". View byte length: `"+n+"`.");t=new Ne(t,e)}else{if(!yr(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Xr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Xr+"`.");t=new Ne(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}c(Zr,"BYTES_PER_ELEMENT",Xr),c(Zr,"name","Complex128Array"),c(Zr,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,s;if(!W(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Hr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!W(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Dr(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,s=0,c=0;c<u;c++){if(_r(l=n.call(r,e.get(c),c)))i[s]=Yr(l),i[s+1]=Gr(l);else{if(!(mr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[s]=l[0],i[s+1]=l[1]}s+=2}return o}return new this(e)}if(Z(e)){if(n){for(u=e.length,a=de(e),c=0;c<u;c++)if(!_r(a.getter(e,c))){f=!0;break}if(f){if(!Tr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,s=0,c=0;c<u;c++){if(_r(l=n.call(r,a.getter(e,c),c)))i[s]=Yr(l),i[s+1]=Gr(l);else{if(!(mr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[s]=l[0],i[s+1]=l[1]}s+=2}return o}return new this(e)}if(_(e)&&qr&&W(e[xr])){if(!W((i=e[xr]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?zr(i,n,r):Wr(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(Zr,"of",(function(){var e,r;if(!W(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Hr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),h(Zr.prototype,"buffer",(function(){return this._buffer.buffer})),h(Zr.prototype,"byteLength",(function(){return this._buffer.byteLength})),h(Zr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Zr.prototype,"BYTES_PER_ELEMENT",Zr.BYTES_PER_ELEMENT),c(Zr.prototype,"copyWithin",(function(e,r){if(!Dr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(Zr.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!Dr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new wr(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),c(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),xr&&c(t,xr,(function(){return r.entries()})),t})),c(Zr.prototype,"get",(function(e){var r;if(!Dr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!yr(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new wr((r=this._buffer)[e*=2],r[e+1])})),h(Zr.prototype,"length",(function(){return this._length})),c(Zr.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!Dr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!yr(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(_r(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Yr(e),void(n[t+1]=Gr(e))}if(Dr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Xr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new Ne(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Z(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!_r(e[f])){i=!0;break}if(i){if(!Tr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Xr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new Ne(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Yr(u),n[t+1]=Gr(u),t+=2}}));var $r=[Zr,Fr],et=["Complex64Array","Complex128Array"];function rt(e,r){if("function"!=typeof r)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+r+"`.");return e instanceof r}var tt=[[Ne,"Float64Array"],[ur,"Float32Array"],[xe,"Int32Array"],[nr,"Uint32Array"],[He,"Int16Array"],[$e,"Uint16Array"],[ke,"Int8Array"],[Ye,"Uint8Array"],[Je,"Uint8ClampedArray"],[Fr,"Complex64Array"],[Zr,"Complex128Array"]];function nt(e){var r,t;for(t=0;t<tt.length;t++)if(rt(e,tt[t][0]))return tt[t][1];for(;e;){for(r=Y(e),t=0;t<tt.length;t++)if(r===tt[t][1])return tt[t][1];e=q(e)}}function ot(e){var r,t,n;if(function(e){var r,t;if("object"!=typeof e||null===e)return!1;if(e instanceof cr)return!0;for(t=0;t<fr.length;t++)if(e instanceof fr[t])return!0;for(;e;){for(r=Y(e),t=0;t<lr.length;t++)if(lr[t]===r)return!0;e=q(e)}return!1}(e))r=e;else{if(!function(e){var r,t;if("object"!=typeof e||null===e)return!1;for(t=0;t<$r.length;t++)if(e instanceof $r[t])return!0;for(;e;){for(r=Y(e),t=0;t<et.length;t++)if(et[t]===r)return!0;e=q(e)}return!1}(e))throw new TypeError("invalid argument. Must provide a typed array. Value: `"+e+"`.");r=8===e.BYTES_PER_ELEMENT?Rr(e,0):Sr(e,0)}for(t={type:nt(e),data:[]},n=0;n<r.length;n++)t.data.push(r[n]);return t}function it(e,r,t){var n,o,i;for(o=0;o<8;o++)if(n=e(),(i=n)!=i)throw new Error("unexpected error. PRNG returned `NaN`.");for(o=t-1;o>=0;o--)r[o]=e();return r}function at(){return 0|K(1+2147483646*Math.random())}var ut=2147483646,ft=2147483646,lt=32,ct=39;function st(e,r){var t;return t=r?"option":"argument",e.length<40?new RangeError("invalid "+t+". `state` array has insufficient length."):1!==e[0]?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: 1. Actual: "+e[0]+"."):3!==e[1]?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: 3. Actual: "+e[1]+"."):e[2]!==lt?new RangeError("invalid "+t+". `state` array has an incompatible table length. Expected: "+"32. Actual: "+e[2]+"."):2!==e[35]?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+2..toString()+". Actual: "+e[35]+"."):e[38]!==e.length-ct?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(e.length-ct)+". Actual: "+e[38]+"."):null}function yt(e){var r,t,n,o,i,a;if(n={},arguments.length){if(!H(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(g(e,"copy")&&(n.copy=e.copy,!j(e.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+e.copy+"`.");if(g(e,"state")){if(t=e.state,n.state=!0,!me(t))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+t+"`.");if(a=st(t,!0))throw a;!1===n.copy?r=t:(r=new xe(t.length),Ae(t.length,t,1,r,1)),t=new xe(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,lt),o=new xe(r.buffer,r.byteOffset+39*r.BYTES_PER_ELEMENT,t[38])}if(void 0===o)if(g(e,"seed"))if(o=e.seed,n.seed=!0,se(o)){if(o>ft)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+o+"`.");o|=0}else{if(!(Z(o)&&o.length>0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+o+"`.");i=o.length,(r=new xe(ct+i))[0]=1,r[1]=3,r[2]=lt,r[35]=2,r[37]=o[0],r[38]=i,Ae.ndarray(i,o,1,0,r,1,39),t=new xe(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,lt),o=new xe(r.buffer,r.byteOffset+39*r.BYTES_PER_ELEMENT,i),t=it(w,t,lt),r[36]=t[0]}else o=0|at()}else o=0|at();return void 0===t&&((r=new xe(40))[0]=1,r[1]=3,r[2]=lt,r[35]=2,r[37]=o,r[38]=1,r[39]=o,t=new xe(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,lt),o=new xe(r.buffer,r.byteOffset+39*r.BYTES_PER_ELEMENT,1),t=it(w,t,lt),r[36]=t[0]),c(v,"NAME","minstd-shuffle"),h(v,"seed",u),h(v,"seedLength",f),p(v,"state",y,m),h(v,"stateLength",l),h(v,"byteLength",s),c(v,"toJSON",b),c(v,"MIN",1),c(v,"MAX",2147483646),c(v,"normalized",d),c(d,"NAME",v.NAME),h(d,"seed",u),h(d,"seedLength",f),p(d,"state",y,m),h(d,"stateLength",l),h(d,"byteLength",s),c(d,"toJSON",b),c(d,"MIN",(v.MIN-1)/ut),c(d,"MAX",(v.MAX-1)/ut),v;function u(){var e=r[38];return Ae(e,o,1,new xe(e),1)}function f(){return r[38]}function l(){return r.length}function s(){return r.byteLength}function y(){var e=r.length;return Ae(e,r,1,new xe(e),1)}function m(e){var i;if(!me(e))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+e+"`.");if(i=st(e,!1))throw i;!1===n.copy?n.state&&e.length===r.length?Ae(e.length,e,1,r,1):(r=e,n.state=!0):(e.length!==r.length&&(r=new xe(e.length)),Ae(e.length,e,1,r,1)),t=new xe(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,lt),o=new xe(r.buffer,r.byteOffset+39*r.BYTES_PER_ELEMENT,r[38])}function b(){var e={type:"PRNG"};return e.name=v.NAME,e.state=ot(r),e.params=[],e}function w(){var e=0|r[37];return e=16807*e%_e|0,r[37]=e,0|e}function v(){var e,n;return e=r[36],n=K(lt*(e/_e)),e=t[n],r[36]=e,t[n]=w(),e}function d(){return(v()-1)/ut}}var ht=yt({seed:at()});function pt(e,r,t,n){return s([r],[e],[t],arguments.length>3?ht.factory(n):ht),r}function mt(e,r,t,n){return s([r],[e],[t],(arguments.length>3?ht.factory(n):ht).normalized),r}return c(ht,"factory",yt),c(pt,"ndarray",(function(e,r,t,n,o){return y([r],[e],[t],[n],arguments.length>4?ht.factory(o):ht),r})),c(pt,"normalized",mt),c(mt,"ndarray",(function(e,r,t,n,o){return y([r],[e],[t],[n],(arguments.length>4?ht.factory(o):ht).normalized),r})),pt}));
//# sourceMappingURL=browser.js.map