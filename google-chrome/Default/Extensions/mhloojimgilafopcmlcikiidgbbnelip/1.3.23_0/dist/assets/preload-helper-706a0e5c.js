const e={},r=function(r,t,n){if(!t||0===t.length)return r();const o=document.getElementsByTagName("link");return Promise.all(t.map((r=>{if(r=function(e,r){return new URL(e,r).href}(r,n),r in e)return;e[r]=!0;const t=r.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(!!n)for(let e=o.length-1;e>=0;e--){const n=o[e];if(n.href===r&&(!t||"stylesheet"===n.rel))return}else if(document.querySelector(`link[href="${r}"]${s}`))return;const l=document.createElement("link");return l.rel=t?"stylesheet":"modulepreload",t||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),t?new Promise(((e,t)=>{l.addEventListener("load",e),l.addEventListener("error",(()=>t(new Error(`Unable to preload CSS for ${r}`))))})):void 0}))).then((()=>r()))};export{r as _};
