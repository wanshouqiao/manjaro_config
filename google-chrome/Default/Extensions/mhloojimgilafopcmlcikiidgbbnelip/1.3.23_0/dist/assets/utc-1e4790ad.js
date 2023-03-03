import{c as t}from"./_commonjsHelpers-e5557959.js";function e(t,e){for(var s=0;s<e.length;s++){const i=e[s];if("string"!=typeof i&&!Array.isArray(i))for(const e in i)if("default"!==e&&!(e in t)){const s=Object.getOwnPropertyDescriptor(i,e);s&&Object.defineProperty(t,e,s.get?s:{enumerable:!0,get:()=>i[e]})}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s,i,r,o={exports:{}};const n=o.exports=(s="minute",i=/[+-]\d\d(?::?\d\d)?/g,r=/([+-]|\d\d)/g,function(t,e,o){var n=e.prototype;o.utc=function(t){return new e({date:t,utc:!0,args:arguments})},n.utc=function(t){var e=o(this.toDate(),{locale:this.$L,utc:!0});return t?e.add(this.utcOffset(),s):e},n.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var f=n.parse;n.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),f.call(this,t)};var u=n.init;n.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else u.call(this)};var a=n.utcOffset;n.utcOffset=function(t,e){var o=this.$utils().u;if(o(t))return this.$u?0:o(this.$offset)?a.call(this):this.$offset;if("string"==typeof t&&null===(t=function(t){void 0===t&&(t="");var e=t.match(i);if(!e)return null;var s=(""+e[0]).match(r)||["-",0,0],o=s[0],n=60*+s[1]+ +s[2];return 0===n?0:"+"===o?n:-n}(t)))return this;var n=Math.abs(t)<=16?60*t:t,f=this;if(e)return f.$offset=n,f.$u=0===t,f;if(0!==t){var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(f=this.local().add(n+u,s)).$offset=n,f.$x.$localOffset=u}else f=this.utc();return f};var c=n.format;n.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,e)},n.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},n.isUTC=function(){return!!this.$u},n.toISOString=function(){return this.toDate().toISOString()},n.toString=function(){return this.toDate().toUTCString()};var l=n.toDate;n.toDate=function(t){return"s"===t&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():l.call(this)};var h=n.diff;n.diff=function(t,e,s){if(t&&this.$u===t.$u)return h.call(this,t,e,s);var i=this.local(),r=o(t).local();return h.call(i,r,e,s)}}),f=e({__proto__:null,default:n},[o.exports]);export{n as a,f as u};