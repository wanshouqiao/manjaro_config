import{_ as t}from"./preload-helper-706a0e5c.js";import{a as e}from"./runtime-dom.esm-bundler-8f945973.js";import{l as a}from"./local-82fd2aea.js";import{_ as s}from"./_plugin-vue_export-helper-1b428a4d.js";import{b as i,a as l,t as o}from"./reactivity.esm-bundler-72867dac.js";import{K as n,o as r,h as d,l as p,a as c,b as m,F as u,m as y,e as _}from"./runtime-core.esm-bundler-77b13fca.js";const x={key:0,alt:"中文播客榜",class:"xyzrank-logo d-block wfull hfull",src:"https://files.codelife.cc/icons/xyzrank.svg"},f={class:"xyzrank-icon-top"},h=["onMouseenter"],k={class:"xyzrank-icon-content"},z=["title"],v={class:"icon-index mr5"},b=["href"],g={key:0,class:"d-hidden ml5 d-sub",style:{"max-width":"60px"}},j={name:"xyzrank-icon"},E=s(Object.assign(j,{props:{size:String},setup(s){const j=s,E=i({activeId:"hotEpisodes",hotType:[{name:"热门节目",id:"hotEpisodes"},{name:"新锐节目",id:"hotNewEpisodes"}],hostList:a.get("app-xyzrank")||[]});async function I(){var e;let s=await t((()=>import("./indexdb-76ab5eed.js")),["./indexdb-76ab5eed.js","./localforage-5beca937.js","./_commonjsHelpers-e5557959.js","./_commonjs-dynamic-modules-3e972b61.js","./dayjs.min-39fed9c4.js"],import.meta.url);s=s.default;let i=await s.getItem("app-xyzrank");if(i.data){let t=i.data;E.hostList=((null==(e=t[E.activeId])?void 0:e.data)||[]).slice(0,4)}if(!i.isExp)return;let{getXyzrankApi:l}=await t((()=>import("./xyzrank-7d9c1fad.js")),["./xyzrank-7d9c1fad.js","./baseRequest-a74f719c.js","./preload-helper-706a0e5c.js","./local-82fd2aea.js","./index-ea316b3a.js","./reactivity.esm-bundler-72867dac.js","./runtime-core.esm-bundler-77b13fca.js","./axios-a986ab8c.js","./version-62e2ec50.js","./dayjs.min-39fed9c4.js","./_commonjsHelpers-e5557959.js"],import.meta.url);l().then((t=>{var e;let i=t.data||{};s.set("app-xyzrank",i,12e5),E.hostList=(i[E.activeId].data||[]).slice(0,4);let l=((null==(e=i.hotEpisodes)?void 0:e.data)||[]).slice(0,4);l=l.map((t=>({playCount:t.playCount,title:t.title,url:t.url}))),a.set("app-xyzrank",l)}))}return I(),(a,i)=>{const w=n("d-watch-resize");return r(),d(w,null,{default:p((()=>[["1x1","1x2","mini","2x1"].includes(s.size)?(r(),c("img",x)):(r(),c("div",{key:1,class:l([s.size,"xyzrank-icon"]),style:{padding:"0.74em"}},[m("div",f,[(r(!0),c(u,null,y(E.hotType,(e=>(r(),c("span",{class:l(["top-tag",{active:E.activeId==e.id}]),key:e.id,onMouseenter:a=>async function(e){E.activeId=e.id;let a=await t((()=>import("./indexdb-76ab5eed.js")),["./indexdb-76ab5eed.js","./localforage-5beca937.js","./_commonjsHelpers-e5557959.js","./_commonjs-dynamic-modules-3e972b61.js","./dayjs.min-39fed9c4.js"],import.meta.url);a=a.default;const s=await a.getItem("app-xyzrank");let i=s.data||[];E.hostList=(i[e.id].data||[]).slice(0,4),s.isExp&&I()}(e)},o(e.name),43,h)))),128))]),m("ul",k,[(r(!0),c(u,null,y(E.hostList,((t,a)=>(r(),c("li",{key:t.id,class:"d-flex-y d-elip",title:t.title},[m("span",v,o(a+1),1),m("a",{class:"d-elip d-cell",onClick:i[0]||(i[0]=e((()=>{}),["stop"])),onMouseup:i[1]||(i[1]=e((()=>{}),["stop"])),href:t.url,target:"_blank"},o(t.title||t.name),41,b),["2x4","medium"].includes(j.size)?(r(),c("span",g,o(t.playCount),1)):_("",!0)],8,z)))),128))])],2))])),_:1})}}}),[["__scopeId","data-v-1b395a44"]]),I=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));export{I as _};
