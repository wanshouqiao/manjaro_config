import{b as s}from"./runtime-dom.esm-bundler-8f945973.js";import{f as o}from"./notes-a9d23bdb.js";import{t as e}from"./timeFormat-9f457c07.js";import{_ as t}from"./PinOff16Regular-7ec39d02.js";import i from"./indexdb-76ab5eed.js";import{l as r}from"./local-82fd2aea.js";import{SAVE_CONFIG as m}from"./save_config-35e78de8.js";import{_ as n}from"./_plugin-vue_export-helper-1b428a4d.js";import{o as l,a,F as p,m as d,b as j,g as c,f}from"./runtime-core.esm-bundler-77b13fca.js";import{t as u,u as x}from"./reactivity.esm-bundler-72867dac.js";import"./index-ea316b3a.js";import"./dayjs.min-39fed9c4.js";import"./_commonjsHelpers-e5557959.js";import"./vue.runtime.esm-bundler-07884c49.js";import"./localforage-5beca937.js";import"./_commonjs-dynamic-modules-3e972b61.js";import"./public-api-84c5ab9b.js";import"./preload-helper-706a0e5c.js";import"./index-98e2e8c6.js";import"./axios-a986ab8c.js";import"./baseRequest-a74f719c.js";import"./version-62e2ec50.js";import"./website-234d9ff3.js";import"./utils-73d66301.js";import"./index-2a5711a9.js";/* empty css             *//* empty css                */import"./index-f72b3ea9.js";import"./index-08eda97d.js";import"./_MapCache-31dad113.js";import"./isSymbol-1e3d4c76.js";import"./style-ac750348.js";import"./Check-63155ac6.js";import"./Close-20719dd3.js";import"./globStorageState-d3feed6a.js";import"./todo-998e5e96.js";import"./stocks-0eb3a6ed.js";import"./debounce-c2dba7cb.js";const b={class:"notes-fixed d-scrollbar-hide"},v={class:"notes-fixed-content"},_={class:"b"},g={class:"d-inline",style:{color:"rgba(var(--alpha-color),.3)"}},h=["onClick"],y={class:"d-icon f18"},k=n({__name:"HomeNotesFixed",setup:n=>(i.get("notes").then((s=>{let e=s||r.get("notes")||[];o.value=e.filter((s=>s&&s.fixed))})),(r,n)=>(l(),a("ul",b,[(l(!0),a(p,null,d(x(o),(r=>(l(),a("li",{class:"notes-fixed-item zoomIn",key:r.id},[j("div",v,[j("span",_,u(r.title),1),j("span",null,u(r.content||""),1),c(j("span",null,"无内容",512),[[s,!r.title&&!r.content]])]),j("time",g,u(x(e)(r.ut)),1),j("span",{class:"notes-fixed-cancel",onClick:s=>function(s){let e=o.value.findIndex((o=>o.id==s.id));o.value.splice(e,1),i.get("notes").then((o=>{o.find((o=>o.id==s.id)).fixed=!1,i.set("notes",o),m("notes")}))}(r),title:"取消固定"},[j("i",y,[f(x(t))])],8,h)])))),128))])))},[["__scopeId","data-v-d5805680"]]);export{k as default};