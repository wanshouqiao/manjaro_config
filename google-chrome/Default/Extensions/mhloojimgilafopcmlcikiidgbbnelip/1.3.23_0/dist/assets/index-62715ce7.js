import{c as e,k as o,y as r}from"./runtime-core.esm-bundler-77b13fca.js";import{b as s}from"./index-08eda97d.js";import{c as a}from"./index-f72b3ea9.js";import{r as i,u as l}from"./reactivity.esm-bundler-72867dac.js";const t=["","default","small","large"],d={large:40,default:32,small:24},m=Symbol("formContextKey"),n=Symbol("formItemContextKey"),u=r=>{const s=o();return e((()=>{var e,o;return null!=(o=(null==(e=s.proxy)?void 0:e.$props)[r])?o:void 0}))},v=a({type:String,values:t,required:!1}),p=(o,a={})=>{const t=i(void 0),d=a.prop?t:u("size"),v=a.global?t:s("size"),p=a.form?{size:void 0}:r(m,void 0),f=a.formItem?{size:void 0}:r(n,void 0);return e((()=>d.value||l(o)||(null==f?void 0:f.size)||(null==p?void 0:p.size)||v.value||""))},f=o=>{const s=u("disabled"),a=r(m,void 0);return e((()=>s.value||l(o)||(null==a?void 0:a.disabled)||!1))};export{n as a,v as b,t as c,f as d,d as e,m as f,p as u};
