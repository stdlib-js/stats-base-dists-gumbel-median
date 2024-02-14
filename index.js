// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";function t(t){return t!=t}function n(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var r=n(),o=Object.prototype.toString,e=Object.prototype.hasOwnProperty;function i(t,n){return null!=t&&e.call(t,n)}var f,a="function"==typeof Symbol?Symbol:void 0,u="function"==typeof a?a.toStringTag:"",c=r&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e;if(null==t)return o.call(t);r=t[u],n=i(t,u);try{t[u]=void 0}catch(n){return o.call(t)}return e=o.call(t),n?t[u]=r:delete t[u],e}:function(t){return o.call(t)},l="function"==typeof Uint32Array,y="function"==typeof Uint32Array?Uint32Array:null,p="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var t,n,r;if("function"!=typeof y)return!1;try{n=new y(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(l&&r instanceof Uint32Array||"[object Uint32Array]"===c(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?p:function(){throw new Error("not implemented")};var b,m=f,d=n(),A=Object.prototype.toString,v="function"==typeof Symbol?Symbol:void 0,S="function"==typeof v?v.toStringTag:"",g=d&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return A.call(t);r=t[S],n=i(t,S);try{t[S]=void 0}catch(n){return A.call(t)}return o=A.call(t),n?t[S]=r:delete t[S],o}:function(t){return A.call(t)},w="function"==typeof Float64Array,U="function"==typeof Float64Array?Float64Array:null,s="function"==typeof Float64Array?Float64Array:void 0;b=function(){var t,n,r;if("function"!=typeof U)return!1;try{n=new U([1,3.14,-3.14,NaN]),r=n,t=(w&&r instanceof Float64Array||"[object Float64Array]"===g(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?s:function(){throw new Error("not implemented")};var h,F=b,T=n(),j=Object.prototype.toString,N="function"==typeof Symbol?Symbol:void 0,E="function"==typeof N?N.toStringTag:"",O=T&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return j.call(t);r=t[E],n=i(t,E);try{t[E]=void 0}catch(n){return j.call(t)}return o=j.call(t),n?t[E]=r:delete t[E],o}:function(t){return j.call(t)},I="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,G="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var t,n,r;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,256,257]),r=n,t=(I&&r instanceof Uint8Array||"[object Uint8Array]"===O(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?G:function(){throw new Error("not implemented")};var P,V=h,Y=n(),_=Object.prototype.toString,k="function"==typeof Symbol?Symbol:void 0,q="function"==typeof k?k.toStringTag:"",z=Y&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return _.call(t);r=t[q],n=i(t,q);try{t[q]=void 0}catch(n){return _.call(t)}return o=_.call(t),n?t[q]=r:delete t[q],o}:function(t){return _.call(t)},B="function"==typeof Uint16Array,C="function"==typeof Uint16Array?Uint16Array:null,D="function"==typeof Uint16Array?Uint16Array:void 0;P=function(){var t,n,r;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,65536,65537]),r=n,t=(B&&r instanceof Uint16Array||"[object Uint16Array]"===z(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?D:function(){throw new Error("not implemented")};var H,J={uint16:P,uint8:V};(H=new J.uint16(1))[0]=4660;var K=52===new J.uint8(H.buffer)[0],L=!0===K?1:0,M=new F(1),Q=new m(M.buffer);function R(t){return M[0]=t,Q[L]}var W,X=n(),Z=Object.prototype.toString,$="function"==typeof Symbol?Symbol:void 0,tt="function"==typeof $?$.toStringTag:"",nt=X&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return Z.call(t);r=t[tt],n=i(t,tt);try{t[tt]=void 0}catch(n){return Z.call(t)}return o=Z.call(t),n?t[tt]=r:delete t[tt],o}:function(t){return Z.call(t)},rt="function"==typeof Float64Array,ot="function"==typeof Float64Array?Float64Array:null,et="function"==typeof Float64Array?Float64Array:void 0;W=function(){var t,n,r;if("function"!=typeof ot)return!1;try{n=new ot([1,3.14,-3.14,NaN]),r=n,t=(rt&&r instanceof Float64Array||"[object Float64Array]"===nt(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?et:function(){throw new Error("not implemented")};var it,ft,at,ut,ct,lt,yt,pt,bt,mt,dt,At,vt,St=!0===K?1:0,gt=new W(1),wt=new m(gt.buffer),Ut=Number.NEGATIVE_INFINITY,st=.6931471803691238,ht=1.9082149292705877e-10,Ft=1048575,Tt=0==(it=.6931471805599453)?Ut:t(it)||it<0?NaN:(lt=0,(at=R(it))<1048576&&(lt-=54,at=R(it*=0x40000000000000)),at>=2146435072?it+it:(lt+=(at>>20)-1023|0,lt+=(bt=614244+(at&=Ft)&1048576|0)>>20|0,pt=(it=function(t,n){return gt[0]=t,wt[St]=n>>>0,gt[0]}(it,at|1072693248^bt))-1,(Ft&2+at)<3?0===pt?0===lt?0:lt*st+lt*ht:(yt=pt*pt*(.5-.3333333333333333*pt),0===lt?pt-yt:lt*st-(yt-lt*ht-pt)):(bt=at-398458|0,mt=440401-at|0,ct=(At=(vt=(dt=pt/(2+pt))*dt)*vt)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(At),ut=vt*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(At),yt=ut+ct,(bt|=mt)>0?(ft=.5*pt*pt,0===lt?pt-(ft-dt*(ft+yt)):lt*st-(ft-(dt*(ft+yt)+lt*ht)-pt)):0===lt?pt-dt*(pt-yt):lt*st-(dt*(pt-yt)-lt*ht-pt))));return function(n,r){return t(n)||t(r)||r<=0?NaN:n-r*Tt}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).median=n();
//# sourceMappingURL=index.js.map
