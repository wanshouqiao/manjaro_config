import{b as e,_ as t,w as a,a as s}from"./index-f72b3ea9.js";import{B as n}from"./index-4f6840b9.js";import{u as o}from"./index-08eda97d.js";import{t as l,w as r,q as i,o as u,a as m,h as p,e as c,F as d,m as k,x as f,f as v,a6 as y}from"./runtime-core.esm-bundler-77b13fca.js";import{r as g,u as w,a as b,a9 as h,ac as x}from"./reactivity.esm-bundler-72867dac.js";const j=e({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}}),$=e({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),_=i({name:"ElSkeletonItem"});var S=t(i({..._,props:$,setup(e){const t=o("skeleton");return(e,a)=>(u(),m("div",{class:b([w(t).e("item"),w(t).e(e.variant)])},["image"===e.variant?(u(),p(w(n),{key:0})):c("v-if",!0)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton-item.vue"]]);const B=i({name:"ElSkeleton"});const E=a(t(i({...B,props:j,setup(e,{expose:t}){const a=e,s=o("skeleton"),n=((e,t=0)=>{if(0===t)return e;const a=g(!1);let s=0;const n=()=>{s&&clearTimeout(s),s=window.setTimeout((()=>{a.value=e.value}),t)};return l(n),r((()=>e.value),(e=>{e?n():a.value=e})),a})(h(a,"loading"),a.throttle);return t({uiLoading:n}),(e,t)=>w(n)?(u(),m("div",y({key:0,class:[w(s).b(),w(s).is("animated",e.animated)]},e.$attrs),[(u(!0),m(d,null,k(e.count,(t=>(u(),m(d,{key:t},[e.loading?f(e.$slots,"template",{key:t},(()=>[v(S,{class:b(w(s).is("first")),variant:"p"},null,8,["class"]),(u(!0),m(d,null,k(e.rows,(t=>(u(),p(S,{key:t,class:b([w(s).e("paragraph"),w(s).is("last",t===e.rows&&e.rows>1)]),variant:"p"},null,8,["class"])))),128))])):c("v-if",!0)],64)))),128))],16)):f(e.$slots,"default",x(y({key:1},e.$attrs)))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton.vue"]]),{SkeletonItem:S});s(S);export{E};
