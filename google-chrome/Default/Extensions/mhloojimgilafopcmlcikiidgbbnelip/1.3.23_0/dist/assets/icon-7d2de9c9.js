import{_ as e}from"./preload-helper-706a0e5c.js";import{a}from"./runtime-dom.esm-bundler-8f945973.js";import{l as s}from"./local-82fd2aea.js";import{d as t}from"./dayjs.min-39fed9c4.js";import{_ as i}from"./_plugin-vue_export-helper-1b428a4d.js";import{r as l,a as o,n,t as r}from"./reactivity.esm-bundler-72867dac.js";import{w as c,K as m,o as d,h as u,l as p,a as y,b as f,e as _}from"./runtime-core.esm-bundler-77b13fca.js";const h={key:0,alt:"每日一言",class:"d-block wfull hfull",style:{"object-fit":"contain","background-color":"#011211"},src:"https://files.codelife.cc/icons/yiyan.svg"},g={class:"d-relative hfull",style:{"z-index":"1"}},b={key:0,class:"mb5 f12",style:{color:"rgba(255,255,255,.5)"}},j=["title"],v={name:"yiyan-icon"},x=i(Object.assign(v,{props:{size:String},setup(i){const v=i,x=l(Math.floor(Math.random()*Math.floor(7))),z=l(s.get("app-yiyan")||{});return c((()=>v.size),(async a=>{["1x1","mini"].includes(a)||z.value.date&&z.value.date==t().format("YYYYMMDD")||e((()=>import("./yiyan-c73094b7.js")),["./yiyan-c73094b7.js","./baseRequest-a74f719c.js","./preload-helper-706a0e5c.js","./local-82fd2aea.js","./index-ea316b3a.js","./reactivity.esm-bundler-72867dac.js","./runtime-core.esm-bundler-77b13fca.js","./axios-a986ab8c.js","./version-62e2ec50.js","./dayjs.min-39fed9c4.js","./_commonjsHelpers-e5557959.js"],import.meta.url).then((e=>{e.yiyanInfoApi().then((e=>{(e.data||{}).content&&(z.value=e.data||{},s.set("app-yiyan",e.data||{}))}))}))}),{immediate:!0}),(e,s)=>{const t=m("d-watch-resize");return d(),u(t,null,{default:p((()=>[["mini","1x1"].includes(i.size)?(d(),y("img",h)):(d(),y("div",{key:1,class:o(["hfull yiyan-wrap",`icon-size-${i.size}`]),style:n([{padding:"10px"},`background-image:url(https://files.codelife.cc/itab/widget/yiyan/${x.value}.jpg?x-oss-process=image/resize,limit_0,m_fill,w_300,h_300/quality,q_90)`])},[f("div",g,[["small","medium","2x2","2x4"].includes(i.size)?(d(),y("h2",b,"每日一言")):_("",!0),f("p",{style:n(!["small","medium","2x2","2x4"].includes(i.size)&&"height:100%"),class:"yiyan-content d-scrollbar-hide",title:z.value.content,onMousewheel:s[0]||(s[0]=a((()=>{}),["stop"]))},r(z.value.content),45,j)])],6))])),_:1})}}}),[["__scopeId","data-v-0e4e65ad"]]),z=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));export{z as _};
