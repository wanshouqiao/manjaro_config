import{D as e,c as o}from"./d-text-icon-0c972c3a.js";import{a as s,c as t}from"./runtime-dom.esm-bundler-8f945973.js";/* empty css             *//* empty css                 *//* empty css                  */import{E as i,a as l}from"./el-form-item-538254d8.js";/* empty css                  */import{l as r}from"./local-82fd2aea.js";import{D as a}from"./d-color-923ca52e.js";import{SAVE_CONFIG as n}from"./save_config-35e78de8.js";import{getRandomColor as m,uuid as p}from"./utils-73d66301.js";import{w as u}from"./website-234d9ff3.js";import{a as c}from"./axios-a986ab8c.js";import{_ as d}from"./_plugin-vue_export-helper-1b428a4d.js";import{E as j}from"./index-e52000c7.js";import{E as f,a as b}from"./index-794b0406.js";import{ElButton as x}from"./index-40ae5b07.js";import{c as g,w as v,a as y,i as _}from"./index-4f6840b9.js";import{b as k,_ as C,w as h}from"./index-f72b3ea9.js";import{u as w}from"./index-08eda97d.js";import{q as V,c as S,o as T,a as q,b as $,x as E,h as A,r as I,e as U,t as D,l as F,f as H,F as z,m as G,j as R}from"./runtime-core.esm-bundler-77b13fca.js";import{u as B,a as M,t as W,b as Y,n as J}from"./reactivity.esm-bundler-72867dac.js";import"./_baseClone-93129bef.js";import"./_MapCache-31dad113.js";import"./index-62715ce7.js";import"./style-ac750348.js";import"./error-c58402b8.js";import"./index-854ce82e.js";import"./index-9f7efeb4.js";import"./preload-helper-706a0e5c.js";import"./vue.runtime.esm-bundler-07884c49.js";import"./_commonjsHelpers-e5557959.js";import"./index-ece06083.js";import"./aria-60e0cdc6.js";import"./focus-trap-a7ebc7ce.js";import"./index-e1484003.js";import"./position-7d705053.js";import"./index-11ecaac6.js";import"./index-2e34e30b.js";import"./index-5cc9b162.js";import"./debounce-c2dba7cb.js";import"./isSymbol-1e3d4c76.js";import"./public-api-84c5ab9b.js";import"./dayjs.min-39fed9c4.js";import"./index-98e2e8c6.js";import"./baseRequest-a74f719c.js";import"./index-ea316b3a.js";import"./version-62e2ec50.js";import"./index-2a5711a9.js";/* empty css                */import"./Check-63155ac6.js";import"./Close-20719dd3.js";import"./globStorageState-d3feed6a.js";import"./notes-a9d23bdb.js";import"./todo-998e5e96.js";import"./stocks-0eb3a6ed.js";import"./indexdb-76ab5eed.js";import"./localforage-5beca937.js";import"./_commonjs-dynamic-modules-3e972b61.js";import"./icon-b1cf815e.js";import"./typescript-5028724d.js";import"./index-de1201fd.js";import"./index-a8bd21df.js";import"./strings-23817cc8.js";import"./scroll-f7c38f71.js";import"./isEqual-13dbd678.js";import"./_baseIsEqual-f45591d3.js";import"./validator-c5991710.js";const K={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},L={[K.success]:g,[K.warning]:v,[K.error]:y,[K.info]:_},N=k({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{type:String,values:["success","warning","info","error"],default:"info"}}),O=V({name:"ElResult"});const P=h(C(V({...O,props:N,setup(e){const o=e,s=w("result"),t=S((()=>{const e=o.icon,s=e&&K[e]?K[e]:"icon-info";return{class:s,component:L[s]||L["icon-info"]}}));return(e,o)=>(T(),q("div",{class:M(B(s).b())},[$("div",{class:M(B(s).e("icon"))},[E(e.$slots,"icon",{},(()=>[B(t).component?(T(),A(I(B(t).component),{key:0,class:M(B(t).class)},null,8,["class"])):U("v-if",!0)]))],2),e.title||e.$slots.title?(T(),q("div",{key:0,class:M(B(s).e("title"))},[E(e.$slots,"title",{},(()=>[$("p",null,W(e.title),1)]))],2)):U("v-if",!0),e.subTitle||e.$slots["sub-title"]?(T(),q("div",{key:1,class:M(B(s).e("subtitle"))},[E(e.$slots,"sub-title",{},(()=>[$("p",null,W(e.subTitle),1)]))],2)):U("v-if",!0),e.$slots.extra?(T(),q("div",{key:2,class:M(B(s).e("extra"))},[E(e.$slots,"extra")],2)):U("v-if",!0)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/result/src/result.vue"]])),Q={class:"popup-body"},X={class:"icon-preview mb10"},Z={class:"icon-preview-body"},ee=["src"],oe=d({__name:"popup",setup(t){c.defaults.timeout=1e3;const d=Y({navConfig:r.get("navConfig")||[],menuActiveId:"1",addSuccess:!1}),g=Y({type:"",id:"",url:"",name:"",src:"",type:"text",iconText:"A",backgroundColor:m()});return D((()=>{chrome.tabs&&chrome.tabs.query({active:!0,lastFocusedWindow:!0},(async function(e){let o=e[0].url;g.url=o,g.name=e[0].title||"",g.iconText=g.name.substring(0,3),u({url:o,type:1},1e3).then((e=>{let o=e.data||{};g.backgroundColor=o.backgroundColor||m(),1==o.type?(g.type="icon",g.src=o.src):(g.type="text",g.iconText=g.name.substring(0,3))})).catch((()=>{g.type="text",g.iconText=g.name.substring(0,3),g.backgroundColor=m()}))}))})),(t,m)=>(T(),q("div",Q,[d.addSuccess?(T(),A(B(P),{key:1,icon:"success",title:"添加成功"})):(T(),A(B(l),{key:0,onSubmit:m[6]||(m[6]=s((()=>{}),["prevent"])),model:g,size:"default","label-width":"80px","label-position":"left"},{default:F((()=>[H(B(i),{label:"地址",prop:"url",required:""},{default:F((()=>[H(B(j),{autofocus:"",modelValue:g.url,"onUpdate:modelValue":m[0]||(m[0]=e=>g.url=e),placeholder:"https://"},null,8,["modelValue"])])),_:1}),H(B(i),{label:"名称",prop:"name",required:""},{default:F((()=>[H(B(j),{modelValue:g.name,"onUpdate:modelValue":m[1]||(m[1]=e=>g.name=e),maxlength:"30",placeholder:"网站名称"},null,8,["modelValue"])])),_:1}),H(B(i),{label:"",style:{"margin-bottom":"10px"}},{default:F((()=>[$("div",X,[$("div",Z,["icon"==g.type?(T(),q("img",{key:0,class:"icon-preview-img",style:J(`background-color:${g.backgroundColor}`),src:g.src},null,12,ee)):(T(),A(e,{key:1,bgColor:g.backgroundColor,text:g.iconText},null,8,["bgColor","text"]))])])])),_:1}),H(B(i),{label:"分组"},{default:F((()=>[H(B(f),{"popper-class":"popup-group-select",modelValue:d.menuActiveId,"onUpdate:modelValue":m[2]||(m[2]=e=>d.menuActiveId=e)},{default:F((()=>[(T(!0),q(z,null,G(d.navConfig,(e=>(T(),A(B(b),{key:e.id,value:e.id,label:e.name},null,8,["value","label"])))),128))])),_:1},8,["modelValue"])])),_:1}),"text"==g.type?(T(),A(B(i),{key:0,label:"图标文字"},{default:F((()=>[H(B(j),{placeholder:"请输入图标文字",maxlength:"6",modelValue:g.iconText,"onUpdate:modelValue":m[3]||(m[3]=e=>g.iconText=e)},null,8,["modelValue"])])),_:1})):U("",!0),H(B(i),{label:"图标背景"},{default:F((()=>[H(a,{class:"wfull",modelValue:g.backgroundColor,"onUpdate:modelValue":m[4]||(m[4]=e=>g.backgroundColor=e)},null,8,["modelValue"])])),_:1}),H(B(i),{label:""},{default:F((()=>[H(B(x),{disabled:d.addSuccess,type:"primary",style:{width:"120px"},onClick:m[5]||(m[5]=e=>(g.id=p(),d.navConfig.find((e=>d.menuActiveId===e.id)).children.push(o(g)),r.set("navConfig",d.navConfig),n("navConfig",800),d.addSuccess=!0,void setTimeout((()=>{window.close()}),1e3)))},{default:F((()=>[R(W(d.addSuccess?"添加成功":"确 定"),1)])),_:1},8,["disabled"])])),_:1})])),_:1},8,["model"]))]))}},[["__scopeId","data-v-1d5e6a76"]]);t({__name:"App",setup:e=>(e,o)=>(T(),A(oe))}).mount("#popup");