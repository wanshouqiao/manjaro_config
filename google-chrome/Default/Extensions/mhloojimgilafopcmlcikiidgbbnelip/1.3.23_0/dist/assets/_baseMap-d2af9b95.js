import{S as r,q as n,n as t}from"./_baseClone-93129bef.js";import{b as o}from"./_baseIsEqual-f45591d3.js";import{i,h as u}from"./_MapCache-31dad113.js";import{i as e,t as f,a,f as s}from"./index-08eda97d.js";import{h as c}from"./hasIn-68e1becf.js";import{i as v}from"./identity-4a5ba4c0.js";import{b as l}from"./_baseFor-c8f908ff.js";function m(r){return r==r&&!i(r)}function j(r,n){return function(t){return null!=t&&(t[r]===n&&(void 0!==n||r in Object(t)))}}function p(t){var i=function(r){for(var t=n(r),o=t.length;o--;){var i=t[o],u=r[i];t[o]=[i,u,m(u)]}return t}(t);return 1==i.length&&i[0][2]?j(i[0][0],i[0][1]):function(n){return n===t||function(n,t,i,u){var e=i.length,f=e,a=!u;if(null==n)return!f;for(n=Object(n);e--;){var s=i[e];if(a&&s[2]?s[1]!==n[s[0]]:!(s[0]in n))return!1}for(;++e<f;){var c=(s=i[e])[0],v=n[c],l=s[1];if(a&&s[2]){if(void 0===v&&!(c in n))return!1}else{var m=new r;if(u)var j=u(v,l,c,n,t,m);if(!(void 0===j?o(l,v,3,u,m):j))return!1}}return!0}(n,t,i)}}var b,h;function d(r){return e(r)?(n=f(r),function(r){return null==r?void 0:r[n]}):function(r){return function(n){return s(n,r)}}(r);var n}function g(r){return"function"==typeof r?r:null==r?v:"object"==typeof r?u(r)?(n=r[0],t=r[1],e(n)&&m(t)?j(f(n),t):function(r){var i=a(r,n);return void 0===i&&i===t?c(r,n):o(t,i,3)}):p(r):d(r);var n,t}const y=(b=function(r,t){return r&&l(r,t,n)},function(r,n){if(null==r)return r;if(!t(r))return b(r,n);for(var o=r.length,i=h?o:-1,u=Object(r);(h?i--:++i<o)&&!1!==n(u[i],i,u););return r});function _(r,n){var o=-1,i=t(r)?Array(r.length):[];return y(r,(function(r,t,u){i[++o]=n(r,t,u)})),i}export{g as a,_ as b};
