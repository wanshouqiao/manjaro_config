import{_ as e}from"./_plugin-vue_export-helper-1b428a4d.js";import{r as t,a,t as s}from"./reactivity.esm-bundler-72867dac.js";import{t as l,w as r,v as i,o,a as d,F as u,m as p,x as c,b as m,p as n,i as y}from"./runtime-core.esm-bundler-77b13fca.js";const f=(e=>(n("data-v-5f4401ee"),e=e(),y(),e))((()=>m("span",{class:"d-tabs-active"},null,-1))),b=["onClick"],v={style:{"line-height":"20px"}},k=e({__name:"d-tabs",props:{modelValue:{required:!0},data:{required:!0,type:[Array,Object],default:()=>[]},keyId:{type:String,default:"id"}},emits:["update:modelValue","tab-click"],setup(e,{emit:n}){const y=e,k=t(null);l((()=>{k.value.querySelector(".d-tabs-item.active")})),r((()=>y.modelValue),(e=>{i((()=>{const e=k.value.querySelector(".d-tabs-item.active")||{offsetTop:0,clientHeight:0},{offsetTop:t,clientHeight:a}=e;k.value.style.setProperty("--target-top",t+"px"),k.value.style.setProperty("--height",(a||0)+"px")}))}),{immediate:!0});return(t,l)=>(o(),d("ul",{class:"d-tabs",ref_key:"dTabsRef",ref:k},[f,(o(!0),d(u,null,p(y.data,((l,r)=>(o(),d("li",{class:a(["d-tabs-item",{active:e.modelValue===l[e.keyId]}]),key:r,onClick:e=>((e,t)=>{n("update:modelValue",e[y.keyId]),n("tab-click",e,t)})(l,r)},[c(t.$slots,"default",{row:l,index:r},(()=>[m("p",v,s(l.name),1)]),!0)],10,b)))),128))],512))}},[["__scopeId","data-v-5f4401ee"]]);export{k as D};