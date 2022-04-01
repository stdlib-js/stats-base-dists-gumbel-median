// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(n){return n!=n};var r=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return r&&"symbol"==typeof Symbol.toStringTag},o=Object.prototype.toString,e=o;var i=function(n){return e.call(n)},a=Object.prototype.hasOwnProperty;var u=function(n,r){return null!=n&&a.call(n,r)},f="function"==typeof Symbol?Symbol.toStringTag:"",c=u,y=f,l=o;var v=i,p=function(n){var r,t,o;if(null==n)return l.call(n);t=n[y],r=c(n,y);try{n[y]=void 0}catch(r){return l.call(n)}return o=l.call(n),r?n[y]=t:delete n[y],o},A=t()?p:v,U=A,w="function"==typeof Uint32Array;var b="function"==typeof Uint32Array?Uint32Array:null,m=function(n){return w&&n instanceof Uint32Array||"[object Uint32Array]"===U(n)},d=b;var h=function(){var n,r;if("function"!=typeof d)return!1;try{r=new d(r=[1,3.14,-3.14,4294967296,4294967297]),n=m(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var N="function"==typeof Uint32Array?Uint32Array:void 0,s=function(){throw new Error("not implemented")},F=h()?N:s,S=A,j="function"==typeof Float64Array;var E="function"==typeof Float64Array?Float64Array:null,g=function(n){return j&&n instanceof Float64Array||"[object Float64Array]"===S(n)},I=E;var T=function(){var n,r;if("function"!=typeof I)return!1;try{r=new I([1,3.14,-3.14,NaN]),n=g(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n};var O="function"==typeof Float64Array?Float64Array:void 0,x=function(){throw new Error("not implemented")},G=T()?O:x,P=A,V="function"==typeof Uint8Array;var Y="function"==typeof Uint8Array?Uint8Array:null,_=function(n){return V&&n instanceof Uint8Array||"[object Uint8Array]"===P(n)},k=Y;var q=function(){var n,r;if("function"!=typeof k)return!1;try{r=new k(r=[1,3.14,-3.14,256,257]),n=_(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var z="function"==typeof Uint8Array?Uint8Array:void 0,B=function(){throw new Error("not implemented")},C=q()?z:B,D=A,H="function"==typeof Uint16Array;var J="function"==typeof Uint16Array?Uint16Array:null,K=function(n){return H&&n instanceof Uint16Array||"[object Uint16Array]"===D(n)},L=J;var M=function(){var n,r;if("function"!=typeof L)return!1;try{r=new L(r=[1,3.14,-3.14,65536,65537]),n=K(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var Q,R="function"==typeof Uint16Array?Uint16Array:void 0,W=function(){throw new Error("not implemented")},X={uint16:M()?R:W,uint8:C};(Q=new X.uint16(1))[0]=4660;var Z=52===new X.uint8(Q.buffer)[0],$=F,nn=!0===Z?1:0,rn=new G(1),tn=new $(rn.buffer);var on=function(n){return rn[0]=n,tn[nn]},en=F,an=!0===Z?1:0,un=new G(1),fn=new en(un.buffer);var cn=function(n,r){return un[0]=n,fn[an]=r>>>0,un[0]},yn=cn,ln=Number.NEGATIVE_INFINITY;var vn=on,pn=yn,An=n,Un=ln,wn=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},bn=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},mn=.6931471803691238,dn=1.9082149292705877e-10;var hn=n,Nn=function(n){var r,t,o,e,i,a,u,f,c,y,l;return 0===n?Un:An(n)||n<0?NaN:(e=0,(t=vn(n))<1048576&&(e-=54,t=vn(n*=0x40000000000000)),t>=2146435072?n+n:(e+=(t>>20)-1023|0,e+=(u=(t&=1048575)+614244&1048576|0)>>20|0,a=(n=pn(n,t|1072693248^u))-1,(1048575&2+t)<3?0===a?0===e?0:e*mn+e*dn:(i=a*a*(.5-.3333333333333333*a),0===e?a-i:e*mn-(i-e*dn-a)):(u=t-398458|0,f=440401-t|0,o=(y=(l=(c=a/(2+a))*c)*l)*wn(y),i=l*bn(y)+o,(u|=f)>0?(r=.5*a*a,0===e?a-(r-c*(r+i)):e*mn-(r-(c*(r+i)+e*dn)-a)):0===e?a-c*(a-i):e*mn-(c*(a-i)-e*dn-a))))}(.6931471805599453);var sn=function(n,r){return hn(n)||hn(r)||r<=0?NaN:n-r*Nn};export{sn as default};
//# sourceMappingURL=mod.js.map
