import{_ as e}from"./_plugin-vue_export-helper-1b428a4d.js";import{r as a,t,n as l,u as r,a as s}from"./reactivity.esm-bundler-72867dac.js";import{c as o,o as u,a as i,b as n,x as d,j as m,v as p}from"./runtime-core.esm-bundler-77b13fca.js";const c=["value","name"],v={class:"mt10",style:{height:"24px","line-height":"24px"}},_={class:"d-radio__title"},g=e({__name:"d-radio",props:{modelValue:{type:[Number,String,Boolean]},value:[Number,String,Boolean],title:String},emits:["update:modelValue","change"],setup(e,{emit:g}){const y=e,h=a(null),b=o((()=>y.modelValue===y.value)),f=e=>{p((()=>{const a=e.target.value;g("update:modelValue",a),g("change",a)}))},V=o((()=>{let e=document.documentElement.style.getPropertyValue("--primary-color").trim();return b.value?`background-color:${e}10`:""}));return(a,o)=>(u(),i("div",{class:s(["d-radio ac",{"is-checked":r(b)}])},[n("input",{class:"d-radio__input",ref_key:"input",ref:h,type:"radio",value:e.value,name:e.modelValue,onInput:f},null,40,c),n("div",{style:l(r(V)),class:"d-radio__core"},[d(a.$slots,"default",{},(()=>[m(t(e.value),1)]),!0)],4),n("div",v,[n("span",_,t(e.title),1)])],2))}},[["__scopeId","data-v-aee43ad9"]]);export{g as D};