// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";function t(t){return t!=t}function n(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var r,o=n(),e=Object.prototype.toString,i=Object.prototype.hasOwnProperty,a="function"==typeof Symbol?Symbol:void 0,l="function"==typeof a?a.toStringTag:"",c=o&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o,a,c;if(null==t)return e.call(t);r=t[l],c=l,n=null!=(a=t)&&i.call(a,c);try{t[l]=void 0}catch(n){return e.call(t)}return o=e.call(t),n?t[l]=r:delete t[l],o}:function(t){return e.call(t)},u="function"==typeof Uint32Array,f="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var t,n,r;if("function"!=typeof f)return!1;try{n=new f(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(u&&r instanceof Uint32Array||"[object Uint32Array]"===c(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?y:function(){throw new Error("not implemented")};var p,b=r,A=n(),d=Object.prototype.toString,m=Object.prototype.hasOwnProperty,v="function"==typeof a?a.toStringTag:"",g=A&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o,e,i;if(null==t)return d.call(t);r=t[v],i=v,n=null!=(e=t)&&m.call(e,i);try{t[v]=void 0}catch(n){return d.call(t)}return o=d.call(t),n?t[v]=r:delete t[v],o}:function(t){return d.call(t)},w="function"==typeof Float64Array,s="function"==typeof Float64Array?Float64Array:null,S="function"==typeof Float64Array?Float64Array:void 0;p=function(){var t,n,r;if("function"!=typeof s)return!1;try{n=new s([1,3.14,-3.14,NaN]),r=n,t=(w&&r instanceof Float64Array||"[object Float64Array]"===g(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?S:function(){throw new Error("not implemented")};var h,U=p,j=n(),F=Object.prototype.toString,O=Object.prototype.hasOwnProperty,T="function"==typeof a?a.toStringTag:"",N=j&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o,e,i;if(null==t)return F.call(t);r=t[T],i=T,n=null!=(e=t)&&O.call(e,i);try{t[T]=void 0}catch(n){return F.call(t)}return o=F.call(t),n?t[T]=r:delete t[T],o}:function(t){return F.call(t)},E="function"==typeof Uint8Array,P="function"==typeof Uint8Array?Uint8Array:null,I="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var t,n,r;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),r=n,t=(E&&r instanceof Uint8Array||"[object Uint8Array]"===N(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?I:function(){throw new Error("not implemented")};var x,G=h,V=n(),Y=Object.prototype.toString,_=Object.prototype.hasOwnProperty,k="function"==typeof a?a.toStringTag:"",q=V&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o,e,i;if(null==t)return Y.call(t);r=t[k],i=k,n=null!=(e=t)&&_.call(e,i);try{t[k]=void 0}catch(n){return Y.call(t)}return o=Y.call(t),n?t[k]=r:delete t[k],o}:function(t){return Y.call(t)},z="function"==typeof Uint16Array,B="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;x=function(){var t,n,r;if("function"!=typeof B)return!1;try{n=new B(n=[1,3.14,-3.14,65536,65537]),r=n,t=(z&&r instanceof Uint16Array||"[object Uint16Array]"===q(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?C:function(){throw new Error("not implemented")};var D,H={uint16:x,uint8:G};(D=new H.uint16(1))[0]=4660;var J=52===new H.uint8(D.buffer)[0],K=!0===J?1:0,L=new U(1),M=new b(L.buffer);function Q(t){return L[0]=t,M[K]}var R,W=n(),X=Object.prototype.toString,Z=Object.prototype.hasOwnProperty,$="function"==typeof a?a.toStringTag:"",tt=W&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o,e,i;if(null==t)return X.call(t);r=t[$],i=$,n=null!=(e=t)&&Z.call(e,i);try{t[$]=void 0}catch(n){return X.call(t)}return o=X.call(t),n?t[$]=r:delete t[$],o}:function(t){return X.call(t)},nt="function"==typeof Float64Array,rt="function"==typeof Float64Array?Float64Array:null,ot="function"==typeof Float64Array?Float64Array:void 0;R=function(){var t,n,r;if("function"!=typeof rt)return!1;try{n=new rt([1,3.14,-3.14,NaN]),r=n,t=(nt&&r instanceof Float64Array||"[object Float64Array]"===tt(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?ot:function(){throw new Error("not implemented")};var et,it,at,lt,ct,ut,ft,yt,pt,bt,At,dt,mt,vt=!0===J?1:0,gt=new R(1),wt=new b(gt.buffer),st=Number.NEGATIVE_INFINITY,St=.6931471803691238,ht=1.9082149292705877e-10,Ut=1048575,jt=0==(et=.6931471805599453)?st:t(et)||et<0?NaN:(ut=0,(at=Q(et))<1048576&&(ut-=54,at=Q(et*=0x40000000000000)),at>=2146435072?et+et:(ut+=(at>>20)-1023|0,ut+=(pt=614244+(at&=Ut)&1048576|0)>>20|0,yt=(et=function(t,n){return gt[0]=t,wt[vt]=n>>>0,gt[0]}(et,at|1072693248^pt))-1,(Ut&2+at)<3?0===yt?0===ut?0:ut*St+ut*ht:(ft=yt*yt*(.5-.3333333333333333*yt),0===ut?yt-ft:ut*St-(ft-ut*ht-yt)):(pt=at-398458|0,bt=440401-at|0,ct=(dt=(mt=(At=yt/(2+yt))*At)*mt)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(dt),lt=mt*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(dt),ft=lt+ct,(pt|=bt)>0?(it=.5*yt*yt,0===ut?yt-(it-At*(it+ft)):ut*St-(it-(At*(it+ft)+ut*ht)-yt)):0===ut?yt-At*(yt-ft):ut*St-(At*(yt-ft)-ut*ht-yt))));return function(n,r){return t(n)||t(r)||r<=0?NaN:n-r*jt}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).median=n();
//# sourceMappingURL=index.js.map