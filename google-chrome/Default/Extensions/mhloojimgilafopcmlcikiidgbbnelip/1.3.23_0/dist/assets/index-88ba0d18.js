import{_ as o}from"./d-dialog-563b2957.js";import{C as i}from"./icon-73c56842.js";/* empty css             *//* empty css                  */import{E as t}from"./el-dialog-9345927c.js";/* empty css                   *//* empty css                 *//* empty css                   */import{foodMenus as s,resetFoodMenus as e,setFoodMenus as r}from"./foodMenus-e2c8b22a.js";import{copyText as p}from"./utils-73d66301.js";import{_ as m}from"./_plugin-vue_export-helper-1b428a4d.js";import{ElButton as l}from"./index-40ae5b07.js";import{q as n,o as a,h as j,f as c,l as d,b as u,j as f,e as x}from"./runtime-core.esm-bundler-77b13fca.js";import{E as v}from"./main-f5b07798.js";import{E as _}from"./index-e52000c7.js";import{ElMessage as b}from"./index-da9a90a7.js";import{r as g,u as y}from"./reactivity.esm-bundler-72867dac.js";import"./preload-helper-706a0e5c.js";/* empty css                                                 */import"./Close-20719dd3.js";import"./runtime-dom.esm-bundler-8f945973.js";import"./index-f72b3ea9.js";import"./index-08eda97d.js";import"./_MapCache-31dad113.js";import"./isSymbol-1e3d4c76.js";import"./style-ac750348.js";import"./icon-b1cf815e.js";import"./index-4f6840b9.js";import"./index-11ecaac6.js";import"./focus-trap-a7ebc7ce.js";import"./aria-60e0cdc6.js";import"./index-e1484003.js";import"./index-9f7efeb4.js";import"./error-c58402b8.js";import"./scroll-f7c38f71.js";import"./indexdb-76ab5eed.js";import"./localforage-5beca937.js";import"./_commonjsHelpers-e5557959.js";import"./_commonjs-dynamic-modules-3e972b61.js";import"./dayjs.min-39fed9c4.js";import"./index-2e34e30b.js";import"./index-62715ce7.js";import"./d-text-icon-0c972c3a.js";import"./_baseClone-93129bef.js";import"./local-82fd2aea.js";import"./globStorageState-d3feed6a.js";import"./index-ea316b3a.js";import"./browser-c7a4f02b.js";import"./week-7975c4f4.js";import"./vue.runtime.esm-bundler-07884c49.js";import"./global-3c385e89.js";import"./Plus-9ce421bd.js";import"./Check-63155ac6.js";import"./icon-a5a7f81d.js";import"./icon-fdb117a5.js";import"./d-calendar-9992ce38.js";import"./icon-92d26b08.js";import"./dateTime-73945ad3.js";import"./icon-0ad693e8.js";import"./dateTools-6203f8f7.js";import"./icon-e7ca50f5.js";import"./icon2-d4bc0c65.js";import"./icon3-aa79709d.js";import"./icon-9c80e3eb.js";import"./icon-c3851054.js";import"./icon-8d5583fa.js";import"./icon-cc372385.js";import"./icon-c1c85589.js";import"./icon-5996535b.js";import"./icon-c531cb5b.js";import"./icon-e1d7edae.js";import"./notes-a9d23bdb.js";import"./icon-2b215e9e.js";import"./icon-eca13f38.js";import"./icon-51af1d1d.js";import"./stocks-0eb3a6ed.js";import"./icon-133d69b9.js";import"./icon-dd45f250.js";import"./icon-d391b03b.js";import"./todo-998e5e96.js";import"./icon-60032c73.js";import"./icon-a65bc46c.js";import"./icon-0ba8aff4.js";import"./icon-6322d102.js";import"./icon-1216e893.js";import"./icon-4fbf9766.js";/* empty css                  */import"./icon-3f2dfd1c.js";import"./icon-449c1bca.js";import"./icon-7d2de9c9.js";import"./index-854ce82e.js";import"./typescript-5028724d.js";import"./index-de1201fd.js";import"./config-provider-6b9f90d0.js";var h=n({name:"Share"});const w={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},C=c("path",{fill:"currentColor",d:"m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"},null,-1);h.render=function(o,i,t,s,e,r){return a(),j("svg",w,[C])},h.__file="packages/components/Share.vue";const k=h,z={class:"app-eat-layout d-relative hfull"},E={class:"app-eat-footer d-flex-between"},V={class:"pl20 pr20 pb20"},B={class:"ac"},S={name:"appEat"},q=m(Object.assign(S,{setup(m){const n=g(!1),h=g(s),w=()=>{p("https://go.itab.link/?open=eat"),b.success("复制成功！ 您可以把链接分享给您的朋友")};function C(){const o=location.search;if(!o)return{};let i=o.slice(1).split("&"),t={};return i.forEach((o=>{let i=o.split("=");t[i[0]]=i[1]})),t}return(s,p)=>(a(),j(o,{destroyOnClose:!0},{default:d((()=>[u("div",z,[c(i,{style:{"font-size":"26px"}}),u("div",E,[c(y(l),{onClick:w,color:"#4b9aef",style:{"--el-button-text-color":"#fff"},round:"",icon:y(k)},{default:d((()=>[f("朋友帮我选")])),_:1},8,["icon"]),C().open?(a(),j(y(l),{key:0,round:"",onClick:p[0]||(p[0]=o=>{C().open&&(location.href=window.origin)}),type:"primary",size:"default"},{default:d((()=>[f("返回首页")])),_:1})):x("",!0),c(y(l),{onClick:p[1]||(p[1]=o=>n.value=!0),color:"#ed8533",style:{"--el-button-text-color":"#fff"},round:"",icon:y(v)},{default:d((()=>[f("菜单自己写")])),_:1},8,["icon"])])]),c(y(t),{width:"600px",title:"自定义菜单",modelValue:n.value,"onUpdate:modelValue":p[5]||(p[5]=o=>n.value=o),"append-to-body":""},{footer:d((()=>[u("div",B,[c(y(l),{onClick:p[3]||(p[3]=o=>{e()}),size:"default"},{default:d((()=>[f("重置")])),_:1}),c(y(l),{onClick:p[4]||(p[4]=o=>(()=>{let o=h.value.replace(/(^\s*)|(\s*$)/g,"");o.split(" ").length<2?b.warning("不能小于两个食谱"):(r(o),n.value=!1)})()),size:"default",type:"primary"},{default:d((()=>[f("确定")])),_:1})])])),default:d((()=>[u("div",V,[c(y(_),{modelValue:h.value,"onUpdate:modelValue":p[2]||(p[2]=o=>h.value=o),rows:5,type:"textarea",placeholder:"请输入菜单，以空格分隔"},null,8,["modelValue"])])])),_:1},8,["modelValue"])])),_:1}))}}),[["__scopeId","data-v-3e411b1d"]]);export{q as default};