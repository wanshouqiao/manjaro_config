import{l as a,o as r}from"./_baseClone-93129bef.js";import{S as o,h as e}from"./_MapCache-31dad113.js";var n=o?o.isConcatSpreadable:void 0;function t(r){return e(r)||a(r)||!!(n&&r&&r[n])}function s(a,o,e,n,i){var f=-1,l=a.length;for(e||(e=t),i||(i=[]);++f<l;){var p=a[f];o>0&&e(p)?o>1?s(p,o-1,e,n,i):r(i,p):n||(i[i.length]=p)}return i}export{s as b};