import{a as e}from"./runtime-dom.esm-bundler-8f945973.js";import{l as t}from"./local-82fd2aea.js";import{_ as a}from"./preload-helper-706a0e5c.js";import{_ as s}from"./_plugin-vue_export-helper-1b428a4d.js";import{r as n,t as i,u as l,b as o,a as r}from"./reactivity.esm-bundler-72867dac.js";import{o as p,a as c,m as d,b as u,F as m,d as _,e as f,f as g,h as v,K as h,l as b,r as w,p as k,i as y}from"./runtime-core.esm-bundler-77b13fca.js";import{d as j}from"./dayjs.min-39fed9c4.js";const x=""+new URL("steam-0132c42a.svg",import.meta.url).href;async function I(e){let s=await a((()=>import("./indexdb-76ab5eed.js")),["./indexdb-76ab5eed.js","./localforage-5beca937.js","./_commonjsHelpers-e5557959.js","./_commonjs-dynamic-modules-3e972b61.js","./dayjs.min-39fed9c4.js"],import.meta.url);s=s.default;const n=await s.getItem(`app-vgn-icon:${e}`);let i=n.data||[];if(n.isExp){let s=4;"news"!=e&&(s=3);let{vgnListApi:n}=await a((()=>import("./dujitang-04a668d9.js")),["./dujitang-04a668d9.js","./baseRequest-a74f719c.js","./preload-helper-706a0e5c.js","./local-82fd2aea.js","./index-ea316b3a.js","./reactivity.esm-bundler-72867dac.js","./runtime-core.esm-bundler-77b13fca.js","./axios-a986ab8c.js","./version-62e2ec50.js","./dayjs.min-39fed9c4.js","./_commonjsHelpers-e5557959.js"],import.meta.url),l=await n({type:e,page:1,size:s});i=l.data||[],i.length&&(a((()=>import("./indexdb-76ab5eed.js")),["./indexdb-76ab5eed.js","./localforage-5beca937.js","./_commonjsHelpers-e5557959.js","./_commonjs-dynamic-modules-3e972b61.js","./dayjs.min-39fed9c4.js"],import.meta.url).then((t=>{t.default.set(`app-vgn-icon:${e}`,i,12e5)})),"news"===e&&t.set("app-vgn",i))}return i}const E=["title"],M={class:"icon-index mr5"},O=["href"],z=s({__name:"news",props:{id:String},setup(a){const s=n(t.get("app-vgn")||[]);return I("news").then((e=>{s.value=e||[]})),(t,a)=>(p(!0),c(m,null,d(s.value,((t,s)=>(p(),c("li",{class:"d-flex-y d-elip item-li",title:t.title,key:t.id},[u("span",M,i(s+1),1),u("a",{class:"d-elip d-cell",onClick:a[0]||(a[0]=e((()=>{}),["stop"])),onMouseup:a[1]||(a[1]=e((()=>{}),["stop"])),href:t.detail_link,target:"_blank"},i(t.title),41,O)],8,E)))),128))}},[["__scopeId","data-v-bf70cc19"]]),T=["title"],L=["href"],A={key:0,class:"item-disc d-flex-between pl5 pr5"},P={class:"ac mt5 d-elip"},R=["href"],S={style:{color:"#50aa25"},class:"ac f14"},D=s({__name:"discount",props:{id:String},setup(s){const o=s,r=n(t.get("app-vgn")||[]),v=_((()=>a((()=>import("./index-ff2d0a55.js")),["./index-ff2d0a55.js","./index-854ce82e.js","./style-ac750348.js","./reactivity.esm-bundler-72867dac.js","./runtime-core.esm-bundler-77b13fca.js","./runtime-dom.esm-bundler-8f945973.js","./index-f72b3ea9.js","./index-08eda97d.js","./_MapCache-31dad113.js","./isSymbol-1e3d4c76.js","./index-4f6840b9.js","./typescript-5028724d.js","./index-11ecaac6.js","./index-e1484003.js","./aria-60e0cdc6.js","./throttle-c9305476.js","./debounce-c2dba7cb.js","./index-de1201fd.js","./position-7d705053.js","./scroll-f7c38f71.js"],import.meta.url)));function h(e){let t=1e3*e-j().valueOf();return t/=864e5,t<0?t="-":t<1?(t*=24,t="剩余"+Math.round(t)+"小时"):t="剩余"+Math.round(t)+"天",t}return I(o.id||"discount").then((e=>{r.value=e||[]})),(t,a)=>(p(!0),c(m,null,d(r.value,(t=>{return p(),c("li",{class:"item-li",title:t.game_china_name||t.game_name,key:t.spu_id},[u("a",{class:"item-info d-block",onClick:a[0]||(a[0]=e((()=>{}),["stop"])),onMouseup:a[1]||(a[1]=e((()=>{}),["stop"])),href:t.detail_link,target:"_blank"},[o.id?f("",!0):(p(),c("p",A,[u("span",null,"-"+i(t.discount_percent)+"%",1),u("span",null,i(h(t.discount_end)),1)])),g(l(v),{class:"item-cover",src:t.spu_show_cover,alt:""},null,8,["src"])],40,L),u("p",P,[u("a",{onClick:a[2]||(a[2]=e((()=>{}),["stop"])),onMouseup:a[3]||(a[3]=e((()=>{}),["stop"])),href:t.detail_link,target:"_blank"},i(t.game_china_name||t.game_name),41,R)]),u("p",S,"￥"+i((s=t.discount,s/100)),1)],8,T);var s})),128))}},[["__scopeId","data-v-e8f95879"]]),V={__name:"popular",props:{row:Object,index:Number},setup:e=>(t,a)=>(p(),v(D,{row:e.row,id:"popular"},null,8,["row"]))},C={key:0,alt:"游戏动力",class:"xyzrank-logo d-block wfull hfull",src:"https://files.codelife.cc/icons/vgn.svg"},$=(e=>(k("data-v-afc8f9f6"),e=e(),y(),e))((()=>u("img",{class:"vgn-bg",src:x},null,-1))),F={class:"vgn-icon-top"},K=["onMouseenter"],N={name:"vgn-icon",components:{news:z,discount:D,popular:V}},U=s(Object.assign(N,{props:{size:String},setup(t){const a=o({activeId:"news",hotType:[{name:"游戏资讯",id:"news"},{name:"打折游戏",id:"discount"},{name:"热门新游",id:"popular"}]});return(s,n)=>{const l=h("d-watch-resize");return p(),v(l,null,{default:b((()=>[["1x1","1x2","mini","2x1"].includes(t.size)?(p(),c("img",C)):(p(),c("div",{key:1,class:r([`icon-${t.size}`,"vgn-icon"]),style:{padding:"0.54em"}},[$,u("div",F,[(p(!0),c(m,null,d(a.hotType,(e=>(p(),c("span",{class:r(["top-tag",{active:a.activeId==e.id}]),key:e.id,onMouseenter:t=>async function(e){a.activeId=e.id}(e)},i(e.name),43,K)))),128))]),u("ul",{class:"vgn-icon-content d-scrollbar-hide",onMousewheel:n[0]||(n[0]=e((()=>{}),["stop"]))},[(p(),v(w(a.activeId)))],32)],2))])),_:1})}}}),[["__scopeId","data-v-afc8f9f6"]]),W=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{W as _,x as a};