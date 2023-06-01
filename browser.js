// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol.toStringTag:"",f=r&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,f,u,a;if(null==n)return o.call(n);r=n[i],a=i,t=null!=(u=n)&&e.call(u,a);try{n[i]=void 0}catch(t){return o.call(n)}return f=o.call(n),t?n[i]=r:delete n[i],f}:function(n){return o.call(n)},u="function"==typeof Uint32Array,a="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var n,t,r;if("function"!=typeof a)return!1;try{t=new a(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(u&&r instanceof Uint32Array||"[object Uint32Array]"===f(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?y:function(){throw new Error("not implemented")};var c,l=t,p="function"==typeof Float64Array,A="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;c=function(){var n,t,r;if("function"!=typeof A)return!1;try{t=new A([1,3.14,-3.14,NaN]),r=t,n=(p&&r instanceof Float64Array||"[object Float64Array]"===f(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?d:function(){throw new Error("not implemented")};var U,b=c,m="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,v="function"==typeof Uint8Array?Uint8Array:void 0;U=function(){var n,t,r;if("function"!=typeof w)return!1;try{t=new w(t=[1,3.14,-3.14,256,257]),r=t,n=(m&&r instanceof Uint8Array||"[object Uint8Array]"===f(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?v:function(){throw new Error("not implemented")};var s,h=U,N="function"==typeof Uint16Array,F="function"==typeof Uint16Array?Uint16Array:null,S="function"==typeof Uint16Array?Uint16Array:void 0;s=function(){var n,t,r;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,65536,65537]),r=t,n=(N&&r instanceof Uint16Array||"[object Uint16Array]"===f(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?S:function(){throw new Error("not implemented")};var g,j={uint16:s,uint8:h};(g=new j.uint16(1))[0]=4660;var E=52===new j.uint8(g.buffer)[0],T=!0===E?1:0,I=new b(1),x=new l(I.buffer);function O(n){return I[0]=n,x[T]}var G,P,V,Y,_,k,q,z,B,C,D,H,J,K=!0===E?1:0,L=new b(1),M=new l(L.buffer),Q=Number.NEGATIVE_INFINITY,R=.6931471803691238,W=1.9082149292705877e-10,X=1048575,Z=0==(G=.6931471805599453)?Q:n(G)||G<0?NaN:(k=0,(V=O(G))<1048576&&(k-=54,V=O(G*=0x40000000000000)),V>=2146435072?G+G:(k+=(V>>20)-1023|0,k+=(B=614244+(V&=X)&1048576|0)>>20|0,z=(G=function(n,t){return L[0]=n,M[K]=t>>>0,L[0]}(G,V|1072693248^B))-1,(X&2+V)<3?0===z?0===k?0:k*R+k*W:(q=z*z*(.5-.3333333333333333*z),0===k?z-q:k*R-(q-k*W-z)):(B=V-398458|0,C=440401-V|0,_=(H=(J=(D=z/(2+z))*D)*J)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(H),Y=J*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(H),q=Y+_,(B|=C)>0?(P=.5*z*z,0===k?z-(P-D*(P+q)):k*R-(P-(D*(P+q)+k*W)-z)):0===k?z-D*(z-q):k*R-(D*(z-q)-k*W-z))));return function(t,r){return n(t)||n(r)||r<=0?NaN:t-r*Z}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).median=t();
//# sourceMappingURL=browser.js.map
