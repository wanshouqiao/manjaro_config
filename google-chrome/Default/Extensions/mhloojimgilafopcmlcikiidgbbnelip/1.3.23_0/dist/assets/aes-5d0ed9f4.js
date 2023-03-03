import{g as t,c as e}from"./_commonjsHelpers-e5557959.js";import{c as r}from"./_commonjs-dynamic-modules-3e972b61.js";function n(t,e){for(var r=0;r<e.length;r++){const n=e[r];if("string"!=typeof n&&!Array.isArray(n))for(const e in n)if("default"!==e&&!(e in t)){const r=Object.getOwnPropertyDescriptor(n,e);r&&Object.defineProperty(t,e,r.get?r:{enumerable:!0,get:()=>n[e]})}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}},o={exports:{}};const s=t(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));var c;function a(){return c||(c=1,o.exports=(t=t||function(t,n){var i;if("undefined"!=typeof window&&window.crypto&&(i=window.crypto),"undefined"!=typeof self&&self.crypto&&(i=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(i=globalThis.crypto),!i&&"undefined"!=typeof window&&window.msCrypto&&(i=window.msCrypto),!i&&void 0!==e&&e.crypto&&(i=e.crypto),!i&&"function"==typeof r)try{i=s}catch(g){}var o=function(){if(i){if("function"==typeof i.getRandomValues)try{return i.getRandomValues(new Uint32Array(1))[0]}catch(g){}if("function"==typeof i.randomBytes)try{return i.randomBytes(4).readInt32LE()}catch(g){}}throw new Error("Native crypto module could not be used to get secure random number.")},c=Object.create||function(){function t(){}return function(e){var r;return t.prototype=e,r=new t,t.prototype=null,r}}(),a={},f=a.lib={},h=f.Base={extend:function(t){var e=c(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},u=f.WordArray=h.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=e!=n?e:4*t.length},toString:function(t){return(t||d).stringify(this)},concat:function(t){var e=this.words,r=t.words,n=this.sigBytes,i=t.sigBytes;if(this.clamp(),n%4)for(var o=0;o<i;o++){var s=r[o>>>2]>>>24-o%4*8&255;e[n+o>>>2]|=s<<24-(n+o)%4*8}else for(var c=0;c<i;c+=4)e[n+c>>>2]=r[c>>>2];return this.sigBytes+=i,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=h.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var e=[],r=0;r<t;r+=4)e.push(o());return new u.init(e,t)}}),p=a.enc={},d=p.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;i<r;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;n<e;n+=2)r[n>>>3]|=parseInt(t.substr(n,2),16)<<24-n%8*4;return new u.init(r,e/2)}},l=p.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],i=0;i<r;i++){var o=e[i>>>2]>>>24-i%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(t){for(var e=t.length,r=[],n=0;n<e;n++)r[n>>>2]|=(255&t.charCodeAt(n))<<24-n%4*8;return new u.init(r,e)}},y=p.Utf8={stringify:function(t){try{return decodeURIComponent(escape(l.stringify(t)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(t){return l.parse(unescape(encodeURIComponent(t)))}},_=f.BufferedBlockAlgorithm=h.extend({reset:function(){this._data=new u.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=y.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r,n=this._data,i=n.words,o=n.sigBytes,s=this.blockSize,c=o/(4*s),a=(c=e?t.ceil(c):t.max((0|c)-this._minBufferSize,0))*s,f=t.min(4*a,o);if(a){for(var h=0;h<a;h+=s)this._doProcessBlock(i,h);r=i.splice(0,a),n.sigBytes-=f}return new u.init(r,f)},clone:function(){var t=h.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});f.Hasher=_.extend({cfg:h.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){_.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new v.HMAC.init(t,r).finalize(e)}}});var v=a.algo={};return a}(Math),t)),o.exports;var t}var f,h={exports:{}};function u(){return f?h.exports:(f=1,h.exports=(t=a(),function(){var e=t,r=e.lib.WordArray;function n(t,e,n){for(var i=[],o=0,s=0;s<e;s++)if(s%4){var c=n[t.charCodeAt(s-1)]<<s%4*2|n[t.charCodeAt(s)]>>>6-s%4*2;i[o>>>2]|=c<<24-o%4*8,o++}return r.create(i,o)}e.enc.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,n=this._map;t.clamp();for(var i=[],o=0;o<r;o+=3)for(var s=(e[o>>>2]>>>24-o%4*8&255)<<16|(e[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|e[o+2>>>2]>>>24-(o+2)%4*8&255,c=0;c<4&&o+.75*c<r;c++)i.push(n.charAt(s>>>6*(3-c)&63));var a=n.charAt(64);if(a)for(;i.length%4;)i.push(a);return i.join("")},parse:function(t){var e=t.length,r=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var o=0;o<r.length;o++)i[r.charCodeAt(o)]=o}var s=r.charAt(64);if(s){var c=t.indexOf(s);-1!==c&&(e=c)}return n(t,e,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),t.enc.Base64));var t}var p,d={exports:{}};function l(){return p?d.exports:(p=1,d.exports=(t=a(),function(e){var r=t,n=r.lib,i=n.WordArray,o=n.Hasher,s=r.algo,c=[];!function(){for(var t=0;t<64;t++)c[t]=4294967296*e.abs(e.sin(t+1))|0}();var a=s.MD5=o.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,e){for(var r=0;r<16;r++){var n=e+r,i=t[n];t[n]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8)}var o=this._hash.words,s=t[e+0],a=t[e+1],d=t[e+2],l=t[e+3],y=t[e+4],_=t[e+5],v=t[e+6],g=t[e+7],m=t[e+8],x=t[e+9],B=t[e+10],w=t[e+11],k=t[e+12],S=t[e+13],z=t[e+14],b=t[e+15],C=o[0],M=o[1],D=o[2],E=o[3];C=f(C,M,D,E,s,7,c[0]),E=f(E,C,M,D,a,12,c[1]),D=f(D,E,C,M,d,17,c[2]),M=f(M,D,E,C,l,22,c[3]),C=f(C,M,D,E,y,7,c[4]),E=f(E,C,M,D,_,12,c[5]),D=f(D,E,C,M,v,17,c[6]),M=f(M,D,E,C,g,22,c[7]),C=f(C,M,D,E,m,7,c[8]),E=f(E,C,M,D,x,12,c[9]),D=f(D,E,C,M,B,17,c[10]),M=f(M,D,E,C,w,22,c[11]),C=f(C,M,D,E,k,7,c[12]),E=f(E,C,M,D,S,12,c[13]),D=f(D,E,C,M,z,17,c[14]),C=h(C,M=f(M,D,E,C,b,22,c[15]),D,E,a,5,c[16]),E=h(E,C,M,D,v,9,c[17]),D=h(D,E,C,M,w,14,c[18]),M=h(M,D,E,C,s,20,c[19]),C=h(C,M,D,E,_,5,c[20]),E=h(E,C,M,D,B,9,c[21]),D=h(D,E,C,M,b,14,c[22]),M=h(M,D,E,C,y,20,c[23]),C=h(C,M,D,E,x,5,c[24]),E=h(E,C,M,D,z,9,c[25]),D=h(D,E,C,M,l,14,c[26]),M=h(M,D,E,C,m,20,c[27]),C=h(C,M,D,E,S,5,c[28]),E=h(E,C,M,D,d,9,c[29]),D=h(D,E,C,M,g,14,c[30]),C=u(C,M=h(M,D,E,C,k,20,c[31]),D,E,_,4,c[32]),E=u(E,C,M,D,m,11,c[33]),D=u(D,E,C,M,w,16,c[34]),M=u(M,D,E,C,z,23,c[35]),C=u(C,M,D,E,a,4,c[36]),E=u(E,C,M,D,y,11,c[37]),D=u(D,E,C,M,g,16,c[38]),M=u(M,D,E,C,B,23,c[39]),C=u(C,M,D,E,S,4,c[40]),E=u(E,C,M,D,s,11,c[41]),D=u(D,E,C,M,l,16,c[42]),M=u(M,D,E,C,v,23,c[43]),C=u(C,M,D,E,x,4,c[44]),E=u(E,C,M,D,k,11,c[45]),D=u(D,E,C,M,b,16,c[46]),C=p(C,M=u(M,D,E,C,d,23,c[47]),D,E,s,6,c[48]),E=p(E,C,M,D,g,10,c[49]),D=p(D,E,C,M,z,15,c[50]),M=p(M,D,E,C,_,21,c[51]),C=p(C,M,D,E,k,6,c[52]),E=p(E,C,M,D,l,10,c[53]),D=p(D,E,C,M,B,15,c[54]),M=p(M,D,E,C,a,21,c[55]),C=p(C,M,D,E,m,6,c[56]),E=p(E,C,M,D,b,10,c[57]),D=p(D,E,C,M,v,15,c[58]),M=p(M,D,E,C,S,21,c[59]),C=p(C,M,D,E,y,6,c[60]),E=p(E,C,M,D,w,10,c[61]),D=p(D,E,C,M,d,15,c[62]),M=p(M,D,E,C,x,21,c[63]),o[0]=o[0]+C|0,o[1]=o[1]+M|0,o[2]=o[2]+D|0,o[3]=o[3]+E|0},_doFinalize:function(){var t=this._data,r=t.words,n=8*this._nDataBytes,i=8*t.sigBytes;r[i>>>5]|=128<<24-i%32;var o=e.floor(n/4294967296),s=n;r[15+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),r[14+(i+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),t.sigBytes=4*(r.length+1),this._process();for(var c=this._hash,a=c.words,f=0;f<4;f++){var h=a[f];a[f]=16711935&(h<<8|h>>>24)|4278255360&(h<<24|h>>>8)}return c},clone:function(){var t=o.clone.call(this);return t._hash=this._hash.clone(),t}});function f(t,e,r,n,i,o,s){var c=t+(e&r|~e&n)+i+s;return(c<<o|c>>>32-o)+e}function h(t,e,r,n,i,o,s){var c=t+(e&n|r&~n)+i+s;return(c<<o|c>>>32-o)+e}function u(t,e,r,n,i,o,s){var c=t+(e^r^n)+i+s;return(c<<o|c>>>32-o)+e}function p(t,e,r,n,i,o,s){var c=t+(r^(e|~n))+i+s;return(c<<o|c>>>32-o)+e}r.MD5=o._createHelper(a),r.HmacMD5=o._createHmacHelper(a)}(Math),t.MD5));var t}var y,_={exports:{}},v={exports:{}};function g(){return y?v.exports:(y=1,v.exports=(c=a(),e=(t=c).lib,r=e.WordArray,n=e.Hasher,i=t.algo,o=[],s=i.SHA1=n.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var r=this._hash.words,n=r[0],i=r[1],s=r[2],c=r[3],a=r[4],f=0;f<80;f++){if(f<16)o[f]=0|t[e+f];else{var h=o[f-3]^o[f-8]^o[f-14]^o[f-16];o[f]=h<<1|h>>>31}var u=(n<<5|n>>>27)+a+o[f];u+=f<20?1518500249+(i&s|~i&c):f<40?1859775393+(i^s^c):f<60?(i&s|i&c|s&c)-1894007588:(i^s^c)-899497514,a=c,c=s,s=i<<30|i>>>2,i=n,n=u}r[0]=r[0]+n|0,r[1]=r[1]+i|0,r[2]=r[2]+s|0,r[3]=r[3]+c|0,r[4]=r[4]+a|0},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,n=8*t.sigBytes;return e[n>>>5]|=128<<24-n%32,e[14+(n+64>>>9<<4)]=Math.floor(r/4294967296),e[15+(n+64>>>9<<4)]=r,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=n.clone.call(this);return t._hash=this._hash.clone(),t}}),t.SHA1=n._createHelper(s),t.HmacSHA1=n._createHmacHelper(s),c.SHA1));var t,e,r,n,i,o,s,c}var m,x,B={exports:{}};function w(){return x?_.exports:(x=1,_.exports=function(t){return function(){var e=t,r=e.lib,n=r.Base,i=r.WordArray,o=e.algo,s=o.MD5,c=o.EvpKDF=n.extend({cfg:n.extend({keySize:4,hasher:s,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r,n=this.cfg,o=n.hasher.create(),s=i.create(),c=s.words,a=n.keySize,f=n.iterations;c.length<a;){r&&o.update(r),r=o.update(t).finalize(e),o.reset();for(var h=1;h<f;h++)r=o.finalize(r),o.reset();s.concat(r)}return s.sigBytes=4*a,s}});e.EvpKDF=function(t,e,r){return c.create(r).compute(t,e)}}(),t.EvpKDF}(a(),g(),m||(m=1,B.exports=(t=a(),r=(e=t).lib.Base,n=e.enc.Utf8,void(e.algo.HMAC=r.extend({init:function(t,e){t=this._hasher=new t.init,"string"==typeof e&&(e=n.parse(e));var r=t.blockSize,i=4*r;e.sigBytes>i&&(e=t.finalize(e)),e.clamp();for(var o=this._oKey=e.clone(),s=this._iKey=e.clone(),c=o.words,a=s.words,f=0;f<r;f++)c[f]^=1549556828,a[f]^=909522486;o.sigBytes=s.sigBytes=i,this.reset()},reset:function(){var t=this._hasher;t.reset(),t.update(this._iKey)},update:function(t){return this._hasher.update(t),this},finalize:function(t){var e=this._hasher,r=e.finalize(t);return e.reset(),e.finalize(this._oKey.clone().concat(r))}}))))));var t,e,r,n}var k,S,z={exports:{}};const b=n({__proto__:null,default:i.exports=function(t){return function(){var e=t,r=e.lib.BlockCipher,n=e.algo,i=[],o=[],s=[],c=[],a=[],f=[],h=[],u=[],p=[],d=[];!function(){for(var t=[],e=0;e<256;e++)t[e]=e<128?e<<1:e<<1^283;var r=0,n=0;for(e=0;e<256;e++){var l=n^n<<1^n<<2^n<<3^n<<4;l=l>>>8^255&l^99,i[r]=l,o[l]=r;var y=t[r],_=t[y],v=t[_],g=257*t[l]^16843008*l;s[r]=g<<24|g>>>8,c[r]=g<<16|g>>>16,a[r]=g<<8|g>>>24,f[r]=g,g=16843009*v^65537*_^257*y^16843008*r,h[l]=g<<24|g>>>8,u[l]=g<<16|g>>>16,p[l]=g<<8|g>>>24,d[l]=g,r?(r=y^t[t[t[v^y]]],n^=t[t[n]]):r=n=1}}();var l=[0,1,2,4,8,16,32,64,128,27,54],y=n.AES=r.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var t=this._keyPriorReset=this._key,e=t.words,r=t.sigBytes/4,n=4*((this._nRounds=r+6)+1),o=this._keySchedule=[],s=0;s<n;s++)s<r?o[s]=e[s]:(f=o[s-1],s%r?r>6&&s%r==4&&(f=i[f>>>24]<<24|i[f>>>16&255]<<16|i[f>>>8&255]<<8|i[255&f]):(f=i[(f=f<<8|f>>>24)>>>24]<<24|i[f>>>16&255]<<16|i[f>>>8&255]<<8|i[255&f],f^=l[s/r|0]<<24),o[s]=o[s-r]^f);for(var c=this._invKeySchedule=[],a=0;a<n;a++){if(s=n-a,a%4)var f=o[s];else f=o[s-4];c[a]=a<4||s<=4?f:h[i[f>>>24]]^u[i[f>>>16&255]]^p[i[f>>>8&255]]^d[i[255&f]]}}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,s,c,a,f,i)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,h,u,p,d,o),r=t[e+1],t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,n,i,o,s,c){for(var a=this._nRounds,f=t[e]^r[0],h=t[e+1]^r[1],u=t[e+2]^r[2],p=t[e+3]^r[3],d=4,l=1;l<a;l++){var y=n[f>>>24]^i[h>>>16&255]^o[u>>>8&255]^s[255&p]^r[d++],_=n[h>>>24]^i[u>>>16&255]^o[p>>>8&255]^s[255&f]^r[d++],v=n[u>>>24]^i[p>>>16&255]^o[f>>>8&255]^s[255&h]^r[d++],g=n[p>>>24]^i[f>>>16&255]^o[h>>>8&255]^s[255&u]^r[d++];f=y,h=_,u=v,p=g}y=(c[f>>>24]<<24|c[h>>>16&255]<<16|c[u>>>8&255]<<8|c[255&p])^r[d++],_=(c[h>>>24]<<24|c[u>>>16&255]<<16|c[p>>>8&255]<<8|c[255&f])^r[d++],v=(c[u>>>24]<<24|c[p>>>16&255]<<16|c[f>>>8&255]<<8|c[255&h])^r[d++],g=(c[p>>>24]<<24|c[f>>>16&255]<<16|c[h>>>8&255]<<8|c[255&u])^r[d++],t[e]=y,t[e+1]=_,t[e+2]=v,t[e+3]=g},keySize:8});e.AES=r._createHelper(y)}(),t.AES}(a(),u(),l(),w(),k||(k=1,z.exports=(S=a(),w(),void(S.lib.Cipher||function(t){var e=S,r=e.lib,n=r.Base,i=r.WordArray,o=r.BufferedBlockAlgorithm,s=e.enc;s.Utf8;var c=s.Base64,a=e.algo.EvpKDF,f=r.Cipher=o.extend({cfg:n.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function t(t){return"string"==typeof t?g:_}return function(e){return{encrypt:function(r,n,i){return t(n).encrypt(e,r,n,i)},decrypt:function(r,n,i){return t(n).decrypt(e,r,n,i)}}}}()});r.StreamCipher=f.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var h=e.mode={},u=r.BlockCipherMode=n.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),p=h.CBC=function(){var e=u.extend();function r(e,r,n){var i,o=this._iv;o?(i=o,this._iv=t):i=this._prevBlock;for(var s=0;s<n;s++)e[r+s]^=i[s]}return e.Encryptor=e.extend({processBlock:function(t,e){var n=this._cipher,i=n.blockSize;r.call(this,t,e,i),n.encryptBlock(t,e),this._prevBlock=t.slice(e,e+i)}}),e.Decryptor=e.extend({processBlock:function(t,e){var n=this._cipher,i=n.blockSize,o=t.slice(e,e+i);n.decryptBlock(t,e),r.call(this,t,e,i),this._prevBlock=o}}),e}(),d=(e.pad={}).Pkcs7={pad:function(t,e){for(var r=4*e,n=r-t.sigBytes%r,o=n<<24|n<<16|n<<8|n,s=[],c=0;c<n;c+=4)s.push(o);var a=i.create(s,n);t.concat(a)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}};r.BlockCipher=f.extend({cfg:f.cfg.extend({mode:p,padding:d}),reset:function(){var t;f.reset.call(this);var e=this.cfg,r=e.iv,n=e.mode;this._xformMode==this._ENC_XFORM_MODE?t=n.createEncryptor:(t=n.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==t?this._mode.init(this,r&&r.words):(this._mode=t.call(n,this,r&&r.words),this._mode.__creator=t)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t,e=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(e.pad(this._data,this.blockSize),t=this._process(!0)):(t=this._process(!0),e.unpad(t)),t},blockSize:4});var l=r.CipherParams=n.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}}),y=(e.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext,r=t.salt;return(r?i.create([1398893684,1701076831]).concat(r).concat(e):e).toString(c)},parse:function(t){var e,r=c.parse(t),n=r.words;return 1398893684==n[0]&&1701076831==n[1]&&(e=i.create(n.slice(2,4)),n.splice(0,4),r.sigBytes-=16),l.create({ciphertext:r,salt:e})}},_=r.SerializableCipher=n.extend({cfg:n.extend({format:y}),encrypt:function(t,e,r,n){n=this.cfg.extend(n);var i=t.createEncryptor(r,n),o=i.finalize(e),s=i.cfg;return l.create({ciphertext:o,key:r,iv:s.iv,algorithm:t,mode:s.mode,padding:s.padding,blockSize:t.blockSize,formatter:n.format})},decrypt:function(t,e,r,n){return n=this.cfg.extend(n),e=this._parse(e,n.format),t.createDecryptor(r,n).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),v=(e.kdf={}).OpenSSL={execute:function(t,e,r,n){n||(n=i.random(8));var o=a.create({keySize:e+r}).compute(t,n),s=i.create(o.words.slice(e),4*r);return o.sigBytes=4*e,l.create({key:o,iv:s,salt:n})}},g=r.PasswordBasedCipher=_.extend({cfg:_.cfg.extend({kdf:v}),encrypt:function(t,e,r,n){var i=(n=this.cfg.extend(n)).kdf.execute(r,t.keySize,t.ivSize);n.iv=i.iv;var o=_.encrypt.call(this,t,e,i.key,n);return o.mixIn(i),o},decrypt:function(t,e,r,n){n=this.cfg.extend(n),e=this._parse(e,n.format);var i=n.kdf.execute(r,t.keySize,t.ivSize,e.salt);return n.iv=i.iv,_.decrypt.call(this,t,e,i.key,n)}})}()))))},[i.exports]);export{b as a};
