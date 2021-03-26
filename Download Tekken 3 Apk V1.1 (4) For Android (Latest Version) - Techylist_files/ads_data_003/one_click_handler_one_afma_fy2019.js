(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var m=this||self;function p(a,b){function c(){}c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.M=function(d,e,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[e].apply(d,h)}};function q(a,b){return a.g?a.j.slice(0,a.g.index)+b+a.j.slice(a.g.index):a.j+b}function aa(a,b){return a.i&&a.h||a.l?1==b?a.i?a.h:q(a,"&dct=1"):2==b?q(a,"&ri=2"):q(a,"&ri=16"):a.j}var ba=class{constructor({url:a}){this.j=a;const b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){let c;try{c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}};function ca(a,b){a:{const c=a.length,d="string"===typeof a?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};var r=class{constructor(a,b){this.g=b===da?a:""}};r.prototype.i=!0;r.prototype.h=function(){return this.g.toString()};r.prototype.toString=function(){return this.g.toString()};function ea(a){return a instanceof r&&a.constructor===r?a.g:"type_error:SafeUrl"}var fa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,da={};var t;a:{var ha=m.navigator;if(ha){var ia=ha.userAgent;if(ia){t=ia;break a}}t=""};function ka(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};function u(a,b){b instanceof r||b instanceof r||(b="object"==typeof b&&b.i?b.h():String(b),fa.test(b)||(b="about:invalid#zClosurez"),b=new r(b,da));a.href=ea(b)};function la(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)};function ma(){return-1!=t.indexOf("iPhone")&&-1==t.indexOf("iPod")&&-1==t.indexOf("iPad")};function na(a){na[" "](a);return a}na[" "]=function(){};var oa=ma(),pa=-1!=t.indexOf("iPad");var ra=ma()||-1!=t.indexOf("iPod"),sa=-1!=t.indexOf("iPad");var ta={},ua=null;function va(a){if(a.i){if(a.j){var b=a.g;for(d in b)if(Object.prototype.hasOwnProperty.call(b,d)){var c=b[d].g;c&&c.m()}}}else{a.h.length=0;var d=x(a);d.sort();for(b=0;b<d.length;b++){let e=a.g[d[b]];(c=e.g)&&c.m();a.h.push([e.key,e.value])}a.i=!0}return a.h}function x(a){a=a.g;var b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}function wa(a,b){return a.j?(b.g||(b.g=new a.j(b.value),a.isFrozen()&&null(b.g)),b.g):b.value} 
function xa(a,b){var c=x(a);c.sort();for(var d=0;d<c.length;d++){let e=a.g[c[d]];b.call(void 0,wa(a,e),e.key,a)}} 
class ya{constructor(a,b){this.h=a;this.j=b;this.g={};this.i=!0;if(0<this.h.length){for(a=0;a<this.h.length;a++){b=this.h[a];var c=b[0];this.g[c.toString()]=new za(c,b[1])}this.i=!0}}isFrozen(){return!1}m(){return va(this)}H(){return va(this)}entries(){var a=[],b=x(this);b.sort();for(var c=0;c<b.length;c++){let d=this.g[b[c]];a.push([d.key,wa(this,d)])}return new Aa(a)}keys(){var a=[],b=x(this);b.sort();for(var c=0;c<b.length;c++)a.push(this.g[b[c]].key);return new Aa(a)}values(){var a=[],b=x(this); 
b.sort();for(var c=0;c<b.length;c++)a.push(wa(this,this.g[b[c]]));return new Aa(a)}set(a,b){var c=new za(a);this.j?(c.g=b,c.value=b.H()):c.value=b;this.g[a.toString()]=c;this.i=!1;return this}get(a){if(a=this.g[a.toString()])return wa(this,a)}has(a){return a.toString()in this.g}}class za{constructor(a,b){this.key=a;this.value=b;this.g=void 0}}class Aa{constructor(a){this.h=0;this.g=a}next(){return this.h<this.g.length?{done:!1,value:this.g[this.h++]}:{done:!0,value:void 0}}} 
"undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.iterator&&(Aa.prototype[Symbol.iterator]=function(){return this});function y(){}var Ba="function"==typeof Uint8Array; 
function z(a,b,c,d,e,f){a.g=null;b||(b=c?[c]:[]);a.v=c?String(c):void 0;a.j=0===c?-1:0;a.h=b;a:{c=a.h.length;b=-1;if(c&&(b=c-1,c=a.h[b],!(null===c||"object"!=typeof c||Array.isArray(c)||Ba&&c instanceof Uint8Array))){a.l=b-a.j;a.i=c;break a}-1<d?(a.l=Math.max(d,b+1-a.j),a.i=null):a.l=Number.MAX_VALUE}a.u={};if(e)for(d=0;d<e.length;d++)b=e[d],b<a.l?(b+=a.j,a.h[b]=a.h[b]||A):(Ca(a),a.i[b]=a.i[b]||A);if(f&&f.length)for(d=0;d<f.length;d++){b=e=void 0;c=a;for(var h=f[d],k=0;k<h.length;k++){var g=h[k], 
l=B(c,g);null!=l&&(b=g,e=l,C(c,g,void 0))}b&&C(c,b,e)}}var A=[];function Ca(a){var b=a.l+a.j;a.h[b]||(a.i=a.h[b]={})}function B(a,b){if(b<a.l){b+=a.j;var c=a.h[b];return c!==A?c:a.h[b]=[]}if(a.i)return c=a.i[b],c===A?a.i[b]=[]:c}function F(a,b,c){a=B(a,b);return null==a?c:a}function G(a,b){return F(a,b,"")}function H(a,b){a=B(a,b);a=null==a?a:!!a;return null==a?!1:a}function I(a,b,c){a.g||(a.g={});if(b in a.g)return a.g[b];var d=B(a,b);d||(d=[],C(a,b,d));c=new ya(d,c);return a.g[b]=c} 
function C(a,b,c){b<a.l?a.h[b+a.j]=c:(Ca(a),a.i[b]=c);return a}function L(a,b,c){a.g||(a.g={});if(!a.g[c]){var d=B(a,c);d&&(a.g[c]=new b(d))}return a.g[c]}function Da(a){var b=Ea;a.g||(a.g={});if(!a.g[7]){let e=B(a,7);for(var c=[],d=0;d<e.length;d++)c[d]=new b(e[d]);a.g[7]=c}b=a.g[7];b==A&&(b=a.g[7]=[]);return b}function Ia(a){if(a.g)for(var b in a.g){var c=a.g[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&c[d].m();else c&&c.m()}}y.prototype.m=function(){Ia(this);return this.h}; 
y.prototype.H=function(){Ia(this);return this.h}; 
y.prototype.o=Ba?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){var b;void 0===b&&(b=0);if(!ua){ua={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));ta[e]=f;for(var h=0;h<f.length;h++){var k=f[h];void 0===ua[k]&&(ua[k]=h)}}}b=ta[b];c=[];for(d=0;d<this.length;d+=3){var g=this[d],l=(e=d+1<this.length)?this[d+1]:0;k=(f=d+2<this.length)?this[d+2]:0;h=g>> 
2;g=(g&3)<<4|l>>4;l=(l&15)<<2|k>>6;k&=63;f||(k=64,e||(l=64));c.push(b[h],b[g],b[l]||"",b[k]||"")}return c.join("")};try{return JSON.stringify(this.h&&this.m(),Ja)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.h&&this.m(),Ja)};function Ja(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)}y.prototype.toString=function(){return this.m().toString()}; 
function Ka(a){const b=La(a.m()),c=z;z=function(d,e,f,h,k,g){c(d,b,f,h,k,g);z=c};a=new a.constructor(b);z!==c&&(z=c);return a}function La(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?La(d):d)}return b}if(Ba&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?La(d):d);return b};function Ma(a){z(this,a,0,-1,null,null)}p(Ma,y);function Na(a){z(this,a,0,-1,Oa,null)}p(Na,y);function Ea(a){z(this,a,0,-1,null,null)}p(Ea,y);function M(a){z(this,a,0,-1,null,null)}p(M,y);function Pa(a){z(this,a,0,-1,null,null)}p(Pa,y);var Oa=[6,7];Ea.prototype.s=function(){return G(this,3)};Ea.prototype.G=function(a){C(this,5,a)};M.prototype.s=function(){return G(this,1)};M.prototype.G=function(a){C(this,2,a)};function Qa(a){z(this,a,0,-1,Ra,null)}p(Qa,y);var Ra=[17];class Sa{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};var Ta={capture:!0},Ua={passive:!0},Va=ka(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});m.addEventListener("test",null,b)}catch(b){}return a});function Wa(a){return a?a.passive&&Va()?a:a.capture||!1:!1}function N(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,Wa(d))}function Xa(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,Wa(void 0))};var Ya=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Za(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]}function $a(a,b){return b?a?a+"&"+b:b:a}function ab(a,b){if(!b)return a;a=Za(a);a[1]=$a(a[1],b);return a[0]+(a[1]?"?"+a[1]:"")+a[2]} 
function bb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)bb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}function cb(a){var b=[],c;for(c in a)bb(c,a[c],b);return b.join("&")}function db(){var a=la();a=null!=a?"="+encodeURIComponent(String(a)):"";return ab("https://pagead2.googlesyndication.com/pagead/gen_204","zx"+a)} 
function eb(a,b){a=Za(a);var c=a[1],d=[];c&&c.split("&").forEach(function(e){var f=e.indexOf("=");b.hasOwnProperty(0<=f?e.substr(0,f):e)||d.push(e)});a[1]=$a(d.join("&"),cb(b));return a[0]+(a[1]?"?"+a[1]:"")+a[2]};function fb(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{na(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function gb(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}let ib=[];const jb=()=>{const a=ib;ib=[];for(const b of a)try{b()}catch(c){}}; 
var kb=a=>{var b=O;"complete"===b.readyState||"interactive"===b.readyState?(ib.push(a),1==ib.length&&(window.Promise?Promise.resolve().then(jb):window.setImmediate?setImmediate(jb):setTimeout(jb,0))):b.addEventListener("DOMContentLoaded",a)};function P(a,b,c=null){lb(a,b,c)}function lb(a,b,c){a.google_image_requests||(a.google_image_requests=[]);const d=a.document.createElement("img");if(c){const e=f=>{c&&c(f);Xa(d,"load",e);Xa(d,"error",e)};N(d,"load",e);N(d,"error",e)}d.src=b;a.google_image_requests.push(d)};let nb=0;function ob(a){return(a=pb(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function pb(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)} 
function qb(a){if(!(.01<Math.random())){a=`https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${ob(a)}&sample=${.01}`;var b=window,c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):P(b,a)}};var O=document,Q=window;function rb(a,b){const c={};c[a]=b;return[c]}function sb(a,b,c,d,e){const f=[];gb(a,function(h,k){(h=tb(h,b,c,d,e))&&f.push(k+"="+h)});return f.join(b)} 
function tb(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let h=0;h<a.length;h++)f.push(tb(a[h],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(sb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function ub(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1} 
function vb(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;let d=ub(a)-c.length;if(0>d)return"";a.g.sort(function(f,h){return f-h});c=null;let e="";for(let f=0;f<a.g.length;f++){const h=a.g[f],k=a.h[h];for(let g=0;g<k.length;g++){if(!d){c=null==c?h:c;break}let l=sb(k[g],a.i,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;b+=l;e=a.i;break}c=null==c?h:c}}}a="";null!=c&&(a=e+"trn="+c);return b+a}class wb{constructor(){this.i="&";this.h={};this.j=0;this.g=[]}};function xb(a,b,c,d,e,f){if((d?a.g:Math.random())<(e||.01))try{let h;c instanceof wb?h=c:(h=new wb,gb(c,(g,l)=>{var n=h,v=n.j++;g=rb(l,g);n.g.push(v);n.h[v]=g}));const k=vb(h,a.h,"/pagead/gen_204?id="+b+"&");k&&("undefined"!==typeof f?P(m,k,f):P(m,k))}catch(h){}}class yb{constructor(){this.h="http:"===Q.location.protocol?"http:":"https:";this.g=Math.random()}};var zb={};var Ab=class{};class Bb extends Ab{constructor(a){super();if(zb!==zb)throw Error("Bad secret");this.g=a}toString(){return this.g}}var Cb=new Bb("about:invalid#zTSz");class Db{constructor(a){this.L=a}}function R(a){return new Db(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const Eb=new Db(a=>/^[^:/?#]*(?:[/?#]|$)/i.test(a));var Fb=R("http"),Gb=R("https"),Hb=R("ftp"),Ib=R("mailto");const Nb=[R("data"),Fb,Gb,Ib,Hb,Eb];function Ob(a,b=Nb){for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof Db&&d.L(a))return new Bb(a)}}function Pb(a,b=Nb){return Ob(a,b)||Cb};const Qb=[Fb,Gb,Ib,Hb,Eb,R("market"),R("itms"),R("intent"),R("itms-appss")];function S(a,b){if(a instanceof r)return a;const c=Pb(a,Qb);c===Cb&&b(a);if(c instanceof Ab)if(c instanceof Bb)a=c.g;else throw Error("wrong type");else a=ea(c);return new r(a,da)}var T=a=>{var b=`${"http:"===Q.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c=cb({id:"unsafeurl",ctx:a,url:c});c=ab(b,c);navigator.sendBeacon&&navigator.sendBeacon(c,"")}};var Rb=!!window.google_async_iframe_id;let U=Rb&&window.parent||window;var Sb=a=>{var b=O;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};const Tb=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;var Ub=class{constructor(a,b){this.g=a;this.h=b}},Vb=class{constructor(a,b){this.url=a;this.F=!!b;this.depth=null}};let Wb=null;var Xb=()=>{const a=m.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()},Yb=()=>{const a=m.performance;return a&&a.now?a.now():null};class Zb{constructor(a,b){var c=Yb()||Xb();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}};const V=m.performance,$b=!!(V&&V.mark&&V.measure&&V.clearMarks),W=ka(()=>{var a;if(a=$b){var b;if(null===Wb){Wb="";try{a="";try{a=m.top.location.hash}catch(c){a=m.location.hash}a&&(Wb=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Wb;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function ac(a){a&&V&&W()&&(V.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),V.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class bc{constructor(){var a=X;this.h=[];this.i=a||m;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=W()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new Zb(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;V&&W()&&V.mark(b);return a}};function cc(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b} 
function dc(a,b,c){let d,e;try{if(a.g&&a.g.g){e=a.g.start(b.toString(),3);d=c();var f=a.g;c=e;if(f.g&&"number"===typeof c.value){c.duration=(Yb()||Xb())-c.value;var h=`goog_${c.label}_${c.uniqueId}_end`;V&&W()&&V.mark(h);!f.g||2048<f.h.length||f.h.push(c)}}else d=c()}catch(k){f=!0;try{ac(e),f=a.o(b,new Sa(k,{message:cc(k)}),void 0,void 0)}catch(g){a.l(217,g)}if(f){let g,l;null==(g=window.console)||null==(l=g.error)||l.call(g,k)}else throw k;}return d} 
function ec(a,b){var c=fc;return(...d)=>dc(c,a,()=>b.apply(void 0,d))} 
class gc{constructor(){var a=hc;this.i=Y;this.h=null;this.o=this.l;this.g=void 0===a?null:a;this.j=!1}pinger(){return this.i}l(a,b,c,d,e){e=e||"jserror";let f;try{const D=new wb;var h=D;h.g.push(1);h.h[1]=rb("context",a);b.error&&b.meta&&b.id||(b=new Sa(b,{message:cc(b)}));if(b.msg){h=D;var k=b.msg.substring(0,512);h.g.push(2);h.h[2]=rb("msg",k)}var g=b.meta||{};b=g;if(this.h)try{this.h(b)}catch(J){}if(d)try{d(b)}catch(J){}d=D;g=[g];d.g.push(3);d.h[3]=g;d=m;g=[];b=null;do{var l=d;if(fb(l)){var n= 
l.location.href;b=l.document&&l.document.referrer||null}else n=b,b=null;g.push(new Vb(n||""));try{d=l.parent}catch(J){d=null}}while(d&&l!=d);for(let J=0,Jb=g.length-1;J<=Jb;++J)g[J].depth=Jb-J;l=m;if(l.location&&l.location.ancestorOrigins&&l.location.ancestorOrigins.length==g.length-1)for(n=1;n<g.length;++n){var v=g[n];v.url||(v.url=l.location.ancestorOrigins[n-1]||"",v.F=!0)}var w=g;let qa=new Vb(m.location.href,!1);l=null;const Fa=w.length-1;for(v=Fa;0<=v;--v){var E=w[v];!l&&Tb.test(E.url)&&(l= 
E);if(E.url&&!E.F){qa=E;break}}E=null;const xc=w.length&&w[Fa].url;0!=qa.depth&&xc&&(E=w[Fa]);f=new Ub(qa,E);if(f.h){w=D;var K=f.h.url||"";w.g.push(4);w.h[4]=rb("top",K)}var Ga={url:f.g.url||""};if(f.g.url){var Ha=f.g.url.match(Ya),Z=Ha[1],Kb=Ha[3],Lb=Ha[4];K="";Z&&(K+=Z+":");Kb&&(K+="//",K+=Kb,Lb&&(K+=":"+Lb));var Mb=K}else Mb="";Z=D;Ga=[Ga,{url:Mb}];Z.g.push(5);Z.h[5]=Ga;xb(this.i,e,D,this.j,c)}catch(D){try{xb(this.i,e,{context:"ecmserr",rctx:a,msg:cc(D),url:f&&f.g.url},this.j,c)}catch(qa){}}return!0}} 
;let Y,fc;if(Rb&&!fb(U)){let a="."+O.domain;try{for(;2<a.split(".").length&&!fb(U);)O.domain=a=a.substr(a.indexOf(".")+1),U=window.parent}catch(b){}fb(U)||(U=window)}const X=U,hc=new bc;var ic=()=>{if(!X.google_measure_js_timing){var a=hc;a.g=!1;a.h!=a.i.google_js_reporting_queue&&(W()&&Array.prototype.forEach.call(a.h,ac,void 0),a.h.length=0)}};Y=new yb;"number"!==typeof X.google_srt&&(X.google_srt=Math.random());var jc=Y,kc=X.google_srt;0<=kc&&1>=kc&&(jc.g=kc);fc=new gc; 
fc.h=a=>{const b=nb;0!==b&&(a.jc=String(b),a.shv=ob(b))};fc.j=!0;"complete"==X.document.readyState?ic():hc.g&&N(X,"load",()=>{ic()});var lc=(a,b)=>ec(a,b);var mc=(a,b)=>{b=G(a,2)||b;if(!b)return"";if(H(a,13))return b;const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];xa(I(a,4,null),(e,f)=>{d.push(encodeURIComponent(f)+"="+encodeURIComponent(e)+"&")});d.push(b.slice(c.index+1));return d.join("")},nc=(a,b=[])=>{b=0<b.length?b:Sb("data-asoch-targets");a=I(a,1,Na);const c=[];for(let k=0;k<b.length;++k){var d=b[k].getAttribute("data-asoch-targets"),e=d.split(","),f=!0;for(let g of e)if(!a.has(g)){f=!1;break}if(f){f=a.get(e[0]); 
for(d=1;d<e.length;++d){var h=a.get(e[d]);f=Ka(f).m();h=h.m();const g=Math.max(f.length,h.length);for(let l=0;l<g;++l)null==f[l]&&(f[l]=h[l]);f=new Na(f)}e=I(f,4,null);null!=B(f,5)&&e.set("nb",F(f,5,0).toString());c.push({element:b[k],data:f})}else xb(Y,"gdn-asoch",{type:1,data:d},!0,void 0,void 0)}return c},oc=a=>{for(const b of a)if(a=b.data,"A"==b.element.tagName&&!H(a,1)){const c=b.element,d=mc(a,c.href);0<d.length&&(u(c,S(d,T(609))),c.target||(c.target=null!=B(a,11)?G(a,11):"_top"))}},pc=a=> 
{const b=window.oneAfmaInstance;if(b)for(const c of a)if((a=c.data)&&null!=B(a,8)&&(a=G(L(a,Pa,8),4))){b.fetchAppStoreOverlay(a);break}},qc=(a,b=500)=>{const c=[],d=[];for(var e of a)(a=e.data)&&null!=B(a,12)&&(d.push(L(a,M,12)),c.push(L(a,M,12).s()));e=(f,h)=>{if(h)for(const k of d)k.G(h[k.s()]||!1)};a=window.oneAfmaInstance;for(const f of c)a.canOpenAndroidApp(f,e,()=>{},b)},tc=(a,b,c,d,e)=>{if(a||!b||null==B(b,12))return!1;const f=L(b,M,12).s();a="";if(0<Da(b).length)for(const h of Da(b))a+=G(h, 
2)+" "+h.s()+" ";if(H(L(b,M,12),2))return rc({id:"gmob-apps",event:"och-open-android-app-before-click",deepLinks:a,appId:f,isDeepLinkPath:!1,exptIds:e}),d.click(c),d.openAndroidApp(f),setTimeout(()=>{var h={id:"gmob-apps",event:"och-open-android-app",appId:f,isDeepLinkPath:!1,exptIds:e};sc(eb(db(),h))},1E3),!0;rc({id:"gmob-apps",event:"och-open-android-app-validated-false",deepLinks:a,appId:f,isDeepLinkPath:!1,exptIds:e});return!1},uc=(a,b,c,d,e,f)=>{if(!c||null==B(c,8))return!1;const h=L(c,Pa,8); 
let k=G(h,2);xa(I(c,10,null),(g,l)=>{var n=k;l=encodeURIComponent(l);const v=encodeURIComponent(g);g=new RegExp("[?&]"+l+"=([^&]+)");const w=g.exec(n);console.log(w);l=l+"="+v;k=w?n.replace(g,w[0].charAt(0)+l):n.replace("?","?"+l+"&")});rc({id:"gmob-apps",event:"och-try-u2-redirect",appId:G(h,4)||"",isIos:a,isDeepLinkPath:!1,exptIds:f});return e.redirectForStoreU2({clickUrl:d,trackingUrl:G(h,3),finalUrl:k,pingFunc:e.click,openFunc:b?e.openStoreOverlay:e.openIntentOrNativeApp})},vc=(a,b=null)=>{if(null!== 
b){const c=new ba({url:a});if(c.i&&c.h||c.l)return b(q(c,"&act=1&ri=1")),aa(c,1)}else return b=new ba({url:a}),b.i&&b.h||b.l?navigator.sendBeacon?navigator.sendBeacon(q(b,"&act=1&ri=1"),"")?aa(b,1):aa(b,2):aa(b,0):a;return a},rc=a=>{sc(eb(db(),a))},sc=(a,b=!0)=>{b&&Q.fetch?Q.fetch(a,{method:"GET",keepalive:!0,mode:"no-cors"}).then(c=>{c.ok||P(Q,a)}):P(Q,a)};function wc(a){z(this,a,0,-1,yc,null)}p(wc,y);var yc=[6];const zc=["platform","platformVersion","architecture","model","uaFullVersion"];var Ac=()=>{var a=window;return a.navigator&&a.navigator.userAgentData&&"function"===typeof a.navigator.userAgentData.getHighEntropyValues?a.navigator.userAgentData.getHighEntropyValues(zc).then(b=>{var c=new wc;c=C(c,1,b.platform);c=C(c,2,b.platformVersion);c=C(c,3,b.architecture);c=C(c,4,b.model);return C(c,5,b.uaFullVersion)}):null};function Bc(a){for(const b of a)if("A"==b.element.tagName){a=b.element;const c=b.data;null!=B(c,2)||C(c,2,a.href)}}function Cc(a,b){return ca(a,c=>c.element===b)}function Dc(a){kb(lc(556,()=>{new Ec(a||{})}))} 
function Fc(a,b,c,d){if(!H(d,13)){var e=c.href;var f=/[?&]adurl=([^&]+)/.exec(e);e=f?[e.slice(0,f.index),e.slice(f.index)]:[e,""];for(u(c,S(e[0],T(557)));!c.id;)if(f="asoch-id-"+la(),!O.getElementById(f)){c.id=f;break}f=c.id;"function"===typeof window.xy&&window.xy(b,c,O.body);"function"===typeof window.mb&&window.mb(c);"function"===typeof window.bgz&&window.bgz(f);"function"===typeof window.ja&&window.ja(f,d?F(d,5,0):0);a.j&&"function"===typeof window.ss&&(a.C?window.ss(f,1,a.j):window.ss(a.j,1)); 
0<e.length&&(a=0<a.A.length?c.href+"&uach="+encodeURIComponent(a.A)+e[1]:c.href+e[1],u(c,S(a,T(557))))}}async function Gc(a,b,c,d){let e="";window.oneAfmaInstance&&(e=await window.oneAfmaInstance.appendClickSignalsAsync(c.href)||"");Hc(a,b,c,d,e)} 
function Hc(a,b,c,d,e){const f=H(a.g,2),h=f&&Date.now()-a.B>a.J;if(window.oneAfmaInstance){b.preventDefault?b.preventDefault():b.returnValue=!1;var k=window.oneAfmaInstance;b=a.i&&H(a.i,14)||!1;c=H(a.g,13)||a.i&&H(a.i,13);a.i&&H(a.i,18);var g=k.logScionEventAndAddParam(e);if(!tc(a.l,d,g,k,a.o)&&!uc(a.l,a.D,d,g,k,a.o)){e=c;c=a.l;var l=a.o;b=b&&H(d,15);const n=!/[?&]dsh=1(&|$)/.test(g)&&/[?&]ae=1(&|$)/.test(g);!f||!h||b&&n||(g=vc(g,k.click));g&&g.startsWith("intent:")?(k.openIntentOrNativeApp(g),d= 
{id:"gmob-apps",event:"och-open-intent-or-native-app",appId:null!=B(d,8)&&G(L(d,Pa,8),4)||"",isIos:c,isDeepLinkPath:!1,exptIds:l},sc(eb(db(),d))):e?k.openChromeCustomTab(g):k.openSystemBrowser(g,{useFirstPackage:!0,useRunningProcess:!0})}}else h&&(d=vc(c.href),d!==c.href&&u(c,S(d,T(599))));h&&(a.B=Date.now());qb(a.I)} 
var Ec=class{constructor(a){this.l=ra||oa||sa||pa;var b=Sb("data-asoch-meta");1!==b.length?xb(Y,"gdn-asoch",{type:2,data:b.length},!0,void 0,void 0):(this.I=70,this.g=new Qa(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]),this.i=a["extra-meta"]?new Qa(JSON.parse(a["extra-meta"])):null,this.D=this.l&&"true"===a["ios-store-overlay"],this.o=a["expt-ids"]||"",this.A="",b=Ac(),null!=b&&b.then(c=>{this.A=c.o()}),this.h=nc(this.g),this.J=Number(a["async-click-timeout"])||300,this.K=Number(a["deeplink-and-android-app-validation-timeout"])|| 
500,this.B=-Infinity,this.j=G(this.g,5)||"",this.C=H(this.g,11),this.i&&(this.C=H(this.i,11)),this.v=this.u=null,H(this.g,3)||(oc(this.h),C(this.g,3,!0)),Bc(this.h),!this.l&&window.oneAfmaInstance&&qc(this.h,this.K),window.oneAfmaInstance&&this.D&&"true"===a["prefetch-ios-store-overlay"]&&pc(this.h),N(O,"click",lc(557,c=>{a:if(!c.defaultPrevented||this.u===c){for(var d,e,f=c.target;(!d||!e)&&f;){e||"A"!=f.tagName||(e=f);var h=f.hasAttribute("data-asoch-targets");!d&&("A"==f.tagName||h)&&(h=h&&"true"=== 
f.getAttribute("data-asoch-is-dynamic")?nc(this.g,[f]):this.h,h=Cc(h,f))&&(d=h.data);f=f.parentElement}if(f=d&&!H(d,1)){if(c.defaultPrevented){var k=e;if(this.u===c&&this.v){var g=new Ma(this.v);e=G(d,9);f="";switch(F(g,4,1)){case 2:if(F(g,2,0))f="blocked_fast_click";else if(G(g,1)||G(g,7))f="blocked_border_click";break;case 3:g=O,g=g.getElementById?g.getElementById("common_15click_anchor"):null,"function"===typeof window.copfcChm&&g&&(d=Ka(d),C(d,5,12),I(d,4,null).set("nb",(12).toString()),(f=Cc(this.h, 
g))?f.data=d:this.h.push({element:g,data:d}),k&&(Fc(this,c,k,d),C(d,2,k.href)),window.copfcChm(c,mc(d,g.href))),f="onepointfiveclick_first_click"}e&&f&&sc(e+"&label="+f,!1);qb(this.I)}break a}h=d;for(g of B(h,6))sc(g)}if(e&&f){d=f?d:null;(g=Cc(this.h,e))?g=g.data:(g=new Na,C(g,2,e.href),C(g,11,e.target||"_top"),this.h.push({element:e,data:g}));g=mc(d||g,G(g,2));0<g.length&&(u(e,S(g,T(557))),e.target||(e.target=d&&null!=B(d,11)?G(d,11):"_top"));Fc(this,c,e,d);for(k of B(this.g,17)){let l;g=k;f=O.body; 
h={};"function"===typeof window.CustomEvent?l=new CustomEvent(g,h):(l=document.createEvent("CustomEvent"),l.initCustomEvent(g,!!h.bubbles,!!h.cancelable,h.detail));f.dispatchEvent(l)}H(this.g,16)?Gc(this,c,e,d):(k="",window.oneAfmaInstance&&(k=window.oneAfmaInstance.appendClickSignals(e.href)),Hc(this,c,e,d,k))}}}),Ta),this.j&&"function"===typeof window.ss&&N(O.body,"mouseover",lc(626,()=>{window.ss(this.j,0)}),Ua),a=window,a.googqscp&&"function"===typeof a.googqscp.registerCallback&&a.googqscp.registerCallback((c, 
d)=>{this.u=c;this.v=d}))}};var Ic=lc(555,a=>Dc(a));nb=70;const Jc=pb(70,document.currentScript);if(null==Jc)throw Error("JSC not found 70");const Kc={},Lc=Jc.attributes;for(let a=Lc.length-1;0<=a;a--){const b=Lc[a].name;0===b.indexOf("data-jcp-")&&(Kc[b.substring(9)]=Lc[a].value)}Ic(Kc);}).call(this);