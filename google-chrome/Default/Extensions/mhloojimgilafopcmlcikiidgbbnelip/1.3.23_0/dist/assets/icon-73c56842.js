import{_ as e}from"./preload-helper-706a0e5c.js";import{a as t}from"./runtime-dom.esm-bundler-8f945973.js";import{_ as a}from"./_plugin-vue_export-helper-1b428a4d.js";import{r as s,t as l,a as r,u as n}from"./reactivity.esm-bundler-72867dac.js";import{c as o,o as u,a as c,b as i,K as p,h as m,l as _,f as v}from"./runtime-core.esm-bundler-77b13fca.js";const d={class:"app-eat d-flex-center"},f={class:"eat-box ac"},b={class:"b"},j=a({__name:"Content",setup(a){const p=s(""),m=s(!1),_=o((()=>p.value&&!m.value?{text:"换一个",class:"change"}:p.value&&m.value?{text:"停下",class:"stop"}:{text:"开始",class:"start"}));let v=null,j=0;function x(){m.value=!m.value,m.value?async function(){v&&clearInterval(v);const{foodMenus:t}=await e((()=>import("./foodMenus-e2c8b22a.js")),["./foodMenus-e2c8b22a.js","./indexdb-76ab5eed.js","./localforage-5beca937.js","./_commonjsHelpers-e5557959.js","./_commonjs-dynamic-modules-3e972b61.js","./dayjs.min-39fed9c4.js","./reactivity.esm-bundler-72867dac.js"],import.meta.url);let a=t.value.split(" "),s=a.length;j=0,v=setInterval((async()=>{const{getRandomInt:t}=await e((()=>import("./utils-73d66301.js")),[],import.meta.url);let l=t(s);p.value=a[l],j++,j>50&&(clearInterval(v),m.value=!1)}),60)}():clearInterval(v)}return(e,a)=>(u(),c("div",d,[i("div",f,[i("h1",b,l(p.value||"今天吃什么"),1),i("div",{class:r([n(_).class,"eat-button d-flex-center"]),onClick:a[0]||(a[0]=t((e=>x()),["stop"]))},[i("span",null,l(n(_).text),1)],2)])]))}},[["__scopeId","data-v-1b3668d1"]]),x={__name:"icon",setup(e){function t(){}return(e,a)=>{const s=p("d-watch-resize");return u(),m(s,{onResize:t},{default:_((()=>[v(j)])),_:1})}}},h=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));export{j as C,h as _};
