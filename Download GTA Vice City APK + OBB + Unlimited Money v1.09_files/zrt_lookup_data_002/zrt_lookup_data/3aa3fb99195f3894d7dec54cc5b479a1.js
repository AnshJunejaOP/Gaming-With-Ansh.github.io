(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var da=ca(this);function l(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
function n(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}l("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});l("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
l("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});var ea=this||self;
function p(a,b){function c(){}c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.s=function(d,e,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[e].apply(d,g)}};var q=0,r=0;function t(){this.g=[]}t.prototype.length=function(){return this.g.length};function u(a){var b=a.g;a.g=[];return b}function v(a,b){for(;127<b;)a.g.push(b&127|128),b>>>=7;a.g.push(b)}function w(a,b){if(0<=b)v(a,b);else{for(var c=0;9>c;c++)a.g.push(b&127|128),b>>=7;a.g.push(1)}}function x(a,b){a.g.push(b>>>0&255);a.g.push(b>>>8&255);a.g.push(b>>>16&255);a.g.push(b>>>24&255)};var y={},A=null;function fa(){this.i=[];this.h=0;this.g=new t}function B(a,b){v(a.g,8*b+2);b=u(a.g);a.i.push(b);a.h+=b.length;b.push(a.h);return b}function C(a,b){var c=b.pop();for(c=a.h+a.g.length()-c;127<c;)b.push(c&127|128),c>>>=7,a.h++;b.push(c);a.h++}function D(a,b,c){null!=c&&(v(a.g,8*b),w(a.g,c))}function E(a,b,c){null!=c&&(c=parseInt(c,10),v(a.g,8*b),w(a.g,c))}
function F(a,b,c){if(null!=c){b=B(a,b);for(var d=a.g,e=0;e<c.length;e++){var f=c.charCodeAt(e);if(128>f)d.g.push(f);else if(2048>f)d.g.push(f>>6|192),d.g.push(f&63|128);else if(65536>f)if(55296<=f&&56319>=f&&e+1<c.length){var g=c.charCodeAt(e+1);56320<=g&&57343>=g&&(f=1024*(f-55296)+g-56320+65536,d.g.push(f>>18|240),d.g.push(f>>12&63|128),d.g.push(f>>6&63|128),d.g.push(f&63|128),e++)}else d.g.push(f>>12|224),d.g.push(f>>6&63|128),d.g.push(f&63|128)}C(a,b)}};function G(){}var ha="function"==typeof Uint8Array;function H(a,b,c,d){a.g=null;b||(b=[]);a.o=void 0;a.j=-1;a.h=b;a:{if(b=a.h.length){--b;var e=a.h[b];if(!(null===e||"object"!=typeof e||Array.isArray(e)||ha&&e instanceof Uint8Array)){a.l=b-a.j;a.i=e;break a}}a.l=Number.MAX_VALUE}a.m={};if(c)for(b=0;b<c.length;b++)e=c[b],e<a.l?(e+=a.j,a.h[e]=a.h[e]||I):(J(a),a.i[e]=a.i[e]||I);if(d&&d.length)for(b=0;b<d.length;b++)K(a,d[b])}var I=[];function J(a){var b=a.l+a.j;a.h[b]||(a.i=a.h[b]={})}
function L(a,b){if(b<a.l){b+=a.j;var c=a.h[b];return c!==I?c:a.h[b]=[]}if(a.i)return c=a.i[b],c===I?a.i[b]=[]:c}function M(a,b,c){b<a.l?a.h[b+a.j]=c:(J(a),a.i[b]=c);return a}function N(a,b,c,d){(c=K(a,c))&&c!==b&&void 0!==d&&(a.g&&c in a.g&&(a.g[c]=void 0),M(a,c,void 0));M(a,b,d)}function K(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],g=L(a,f);null!=g&&(c=f,d=g,M(a,f,void 0))}return c?(M(a,c,d),c):0}
function O(a){if(a.g)for(var b in a.g){var c=a.g[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&O(c[d]);else c&&O(c)}return a.h}G.prototype.toString=function(){return O(this).toString()};function P(a){H(this,a,null,Q)}p(P,G);var Q=[[1,2,3],[4,5]];function R(a){H(this,a,ia,null)}p(R,G);var ia=[1];function S(a,b,c,d){this.l=a;this.h=b;this.i=c;this.j=d;this.data=[];this.g=[]}S.prototype.setData=function(a,b,c){this.j.includes(c)&&this.data.push({key:a,value:b,channel:c})};function ja(a){return a.data.some(function(b){return 1===b.channel})}S.prototype.setAttribute=function(a,b){this.g.push({key:a,value:b})};function T(a,b,c,d){var e=new P;isNaN(Number(a))?N(e,3,Q[0],a):d?N(e,1,Q[0],a):N(e,2,Q[0],a);"number"===typeof b?N(e,4,Q[1],b):N(e,5,Q[1],b);c&&M(e,6,c);return e};function U(){this.o=Date.now();this.h=[];this.m=this.j=!1;this.l=100}
U.prototype.init=function(a,b,c,d,e){var f=this;this.g=new S(a,e,c,b);if(d){for(var g in d)d.hasOwnProperty(g)&&this.g.setAttribute(g,d[g]);a=Number(d[6]);d=Number(d[5]);!isNaN(a)&&0<=a?this.l=a:isNaN(d)||(this.j=!0,setInterval(this.i.bind(this),d),setTimeout(function(){V(f,"timeout")},3E5),document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState&&V(f,"document_hidden")}),window.addEventListener("beforeunload",function(){V(f,"beforeunload")}))}};
U.prototype.getBaseTime=function(){return this.o};U.prototype.setData=function(a,b,c){this.g.setData(a,b,c);this.h[c]?this.h[c]++:this.h[c]=1};U.prototype.setAttribute=function(a,b){this.g.setAttribute(a,b)};U.prototype.send=function(a){var b=this;if(!this.j){var c=ja(this.g)?0:this.l;a=null!==a&&void 0!==a?a:c;0<a?setTimeout(function(){return void b.i()},a):this.i()}};
U.prototype.i=function(){if(0<this.g.data.length){for(var a=this.g,b=[],c=n(a.g),d=c.next();!d.done;d=c.next())d=d.value,b.push(T(d.key,d.value,void 0,!0));c=n(a.data);for(d=c.next();!d.done;d=c.next())d=d.value,b.push(T(d.key,d.value,d.channel,!1));c=new R;d=M(c,2,a.l);d=M(d,4,a.i);d.g||(d.g={});b=b||[];for(var e=[],f=0;f<b.length;f++)e[f]=O(b[f]);d.g[1]=b;M(d,1,e);a.h&&M(c,5,a.h);a=new fa;c.g||(c.g={});if(!c.g[1]){b=L(c,1);d=[];for(e=0;e<b.length;e++)d[e]=new P(b[e]);c.g[1]=d}b=c.g[1];b==I&&(b=
c.g[1]=[]);if(0<b.length&&null!=b)for(d=0;d<b.length;d++){e=B(a,1);f=b[d];var g=L(f,1);null!=g&&E(a,1,g);g=L(f,2);null!=g&&E(a,2,g);g=L(f,3);null!=g&&F(a,3,g);g=L(f,4);if(null!=g){var k=g;if(null!=k){v(a.g,33);g=a.g;var h=k;h=(k=0>h?1:0)?-h:h;if(0===h)r=0<1/h?0:2147483648,q=0;else if(isNaN(h))r=2147483647,q=4294967295;else if(1.7976931348623157E308<h)r=(k<<31|2146435072)>>>0,q=0;else if(2.2250738585072014E-308>h)h/=Math.pow(2,-1074),r=(k<<31|h/4294967296)>>>0,q=h>>>0;else{var z=h,m=0;if(2<=z)for(;2<=
z&&1023>m;)m++,z/=2;else for(;1>z&&-1022<m;)z*=2,m--;h*=Math.pow(2,-m);r=(k<<31|m+1023<<20|1048576*h&1048575)>>>0;q=4503599627370496*h>>>0}x(g,q);x(g,r)}}g=L(f,5);null!=g&&F(a,5,g);g=L(f,6);null!=g&&null!=g&&D(a,6,g);C(a,e)}b=L(c,2);null!=b&&F(a,2,b);b=L(c,3);null!=b&&null!=b&&D(a,3,b);b=L(c,4);null!=b&&F(a,4,b);b=L(c,5);null!=b&&null!=b&&D(a,5,b);c=new Uint8Array(a.h+a.g.length());d=a.i;e=d.length;for(f=b=0;f<e;f++)g=d[f],c.set(g,b),b+=g.length;d=u(a.g);c.set(d,b);a.i=[c];a=void 0;void 0===a&&(a=
0);if(!A)for(A={},b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++)for(f=b.concat(d[e].split("")),y[e]=f,g=0;g<f.length;g++)k=f[g],void 0===A[k]&&(A[k]=g);a=y[a];b=[];for(d=0;d<c.length;d+=3)m=c[d],h=(e=d+1<c.length)?c[d+1]:0,k=(f=d+2<c.length)?c[d+2]:0,g=m>>2,m=(m&3)<<4|h>>4,h=(h&15)<<2|k>>6,k&=63,f||(k=64,e||(h=64)),b.push(a[g],a[m],a[h]||"",a[k]||"");c="https://pagead2.googlesyndication.com/pagead/gen_204?id=mys&d="+b.join("").replace(/\//g,
"_").replace(/\+/g,"-");a=window;if(b=a.navigator)b=a.navigator.userAgent,b=/Chrome/.test(b)&&!/Edge/.test(b)?!0:!1;b&&a.navigator.sendBeacon?a.navigator.sendBeacon(c):(a.google_image_requests||(a.google_image_requests=[]),b=a.document.createElement("img"),b.src=c,a.google_image_requests.push(b));this.g.data=[]}};function V(a,b){a.m||(a.g.setData(32,b,4),a.h.forEach(function(c,d){a.g.setData(31,c,d)}),a.i(),a.m=!0)}
if(!window.mys||!window.mys.pingback){var W=new U,X=["mys","pingback"],Y=ea;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===W?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=W};}).call(this);