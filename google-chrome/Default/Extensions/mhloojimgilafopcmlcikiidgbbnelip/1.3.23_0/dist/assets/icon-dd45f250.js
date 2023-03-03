import{_ as e}from"./preload-helper-706a0e5c.js";import{b as t}from"./runtime-dom.esm-bundler-8f945973.js";import{l}from"./local-82fd2aea.js";import{getRandomColor as i}from"./utils-73d66301.js";import{v as a,o as s,a as o,b as r,w as d,K as n,h as c,l as u,f as p,g as m}from"./runtime-core.esm-bundler-77b13fca.js";import{r as f,a as h,t as y}from"./reactivity.esm-bundler-72867dac.js";import{d as v}from"./dayjs.min-39fed9c4.js";import{_ as b}from"./_plugin-vue_export-helper-1b428a4d.js";const _={width:"700px",height:"226px",viewBox:"0 0 700 226",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},g=r("title",null,"画板",-1),C={id:"画板",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},w=["fill"],x=["fill"],j=["fill"],z={__name:"bg",emits:["color"],setup(e,{emit:t}){let l=i(["#ad5877","#f07049","#77616b","#535d57","#835f5b","#9f6ea2","#ae7a5d","#a58e51","#7b9bb5","#5d9e8d","#cb6a7f","#5d97c5","#568e71","#d43747"]);a((()=>{t("color",l)}));const d=f(l);return(e,t)=>(s(),o("svg",_,[g,r("g",C,[r("path",{d:"M1310.09105,191.626557 C1496.65509,191.626557 1770.14929,157.346326 1920,106.258614 L1920,226.585567 C1920,226.585567 57.7507064,226.769694 1.29607535,226.778064 L0,226.778064 C0.301412873,150.421181 0.452119309,112.242739 0.452119309,112.242739 C402.829314,254.28206 430.581953,106.258614 671.986104,106.258614 C913.390256,106.258614 1123.52701,191.626557 1310.09105,191.626557 Z",id:"路径-1","fill-opacity":"0.6",fill:d.value},null,8,w),r("path",{d:"M0.0139194415,226.56425 C0.0139194415,207.632936 0.00602482649,190.017506 -0.00976440346,173.717958 C-0.00976440346,173.717958 64.0945019,127.498953 182.10043,132.182456 C300.106358,136.865959 566.945531,199.128662 690.656287,199.128662 C926.193135,199.128662 1181.88325,106.258614 1429.28183,106.258614 C1676.68041,106.258614 1762.21292,199.128662 1920,132.182456 C1920,132.182456 1920,163.707219 1920,226.756746 L1918.70393,226.756746 C1862.24971,226.748377 0.0139194415,226.56425 0.0139194415,226.56425 Z",id:"路径-1","fill-opacity":"0.6",fill:d.value},null,8,x),r("path",{d:"M1463.25587,166.368856 C1551.98939,166.368856 1579.00033,142.163535 1682.98644,125.993122 C1786.97255,109.822709 1903.42761,144.008202 1920,142.125085 L1920,226.246611 C1920,226.246611 57.7382953,226.430738 1.31380552,226.439107 L0,226.439107 C0.875870348,212.023153 1.31380552,204.815176 1.31380552,204.815176 C1.31380552,204.815176 171.201223,92.2827368 319.815615,99.6364213 C498.755382,108.490655 535.30872,172.276704 680.584032,172.276704 C825.859343,172.276704 892.163947,69.0953634 1074.42656,72.7600803 C1256.68917,76.4247971 1374.52235,166.368856 1463.25587,166.368856 Z",id:"路径-1","fill-opacity":"0.3",fill:d.value},null,8,j)])]))}},k={key:0,alt:"今日诗词",class:"d-block wfull hfull",style:{"object-fit":"contain","background-color":"#093744"},src:"https://files.codelife.cc/icons/todayShici.svg"},S={class:"hfull d-flex-center",style:{"z-index":"1"}},M={class:"shici-body wfull"},Y={class:"shici-text"},L={name:"yiyan-icon"},D=b(Object.assign(L,{props:{size:String},setup(i){const a=i,b=f(l.get("app-todayShici")||{});return d((()=>a.size),(async t=>{["1x1","mini"].includes(t)||b.value.date&&b.value.date==v().format("YYYYMMDD")||e((()=>import("./todayShici-7168aa98.js")),["./todayShici-7168aa98.js","./baseRequest-a74f719c.js","./preload-helper-706a0e5c.js","./local-82fd2aea.js","./index-ea316b3a.js","./reactivity.esm-bundler-72867dac.js","./runtime-core.esm-bundler-77b13fca.js","./axios-a986ab8c.js","./version-62e2ec50.js","./dayjs.min-39fed9c4.js","./_commonjsHelpers-e5557959.js"],import.meta.url).then((t=>{t.todayShiciApi().then((t=>{let i=t.data||{};if(i.date=v().format("YYYYMMDD"),i.content){b.value=i;let t={quotes:i.quotes,dynasty:i.dynasty,title:i.title,author:i.author,date:i.date};l.set("app-todayShici",t),e((()=>import("./indexdb-76ab5eed.js")),["./indexdb-76ab5eed.js","./localforage-5beca937.js","./_commonjsHelpers-e5557959.js","./_commonjs-dynamic-modules-3e972b61.js","./dayjs.min-39fed9c4.js"],import.meta.url).then((e=>{e.default.set("app-todayShici",i)}))}}))}))}),{immediate:!0}),(e,l)=>{const a=n("d-watch-resize");return s(),c(a,null,{default:u((()=>[["mini","1x1"].includes(i.size)?(s(),o("img",k)):(s(),o("div",{key:1,class:h(["hfull wfull shici-wrap d-relative",`icon-size-${i.size}`]),style:{padding:"10px"}},[p(z,{class:"app-bg",style:{width:"100%",height:"auto"}}),r("div",S,[r("div",M,[r("p",Y,y(b.value.quotes),1),m(r("p",{style:{"font-size":"0.57em",color:"rgba(var(--alpha-color),.8)"},class:"mt5 d-sub d-elip"},y(b.value.title)+" · "+y(b.value.author),513),[[t,["small","medium","2x2","2x4"].includes(i.size)]])])])],2))])),_:1})}}}),[["__scopeId","data-v-52e0178f"]]),O=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));export{O as _,z as a};
