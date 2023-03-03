import{_ as e,w as t,a as s}from"./index-f72b3ea9.js";import{u as n}from"./index-08eda97d.js";import{q as r,at as a,c as o,o as l,a as i,x as c}from"./runtime-core.esm-bundler-77b13fca.js";import{a as u,u as p,n as m}from"./reactivity.esm-bundler-72867dac.js";const d=r({name:"ElContainer"});var h=e(r({...d,props:{direction:{type:String}},setup(e){const t=e,s=a(),r=n("container"),m=o((()=>{if("vertical"===t.direction)return!0;if("horizontal"===t.direction)return!1;if(s&&s.default){return s.default().some((e=>{const t=e.type.name;return"ElHeader"===t||"ElFooter"===t}))}return!1}));return(e,t)=>(l(),i("section",{class:u([p(r).b(),p(r).is("vertical",p(m))])},[c(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const f=r({name:"ElAside"});var g=e(r({...f,props:{width:{type:String,default:null}},setup(e){const t=e,s=n("aside"),r=o((()=>t.width?s.cssVarBlock({width:t.width}):{}));return(e,t)=>(l(),i("aside",{class:u(p(s).b()),style:m(p(r))},[c(e.$slots,"default")],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const k=r({name:"ElFooter"});var v=e(r({...k,props:{height:{type:String,default:null}},setup(e){const t=e,s=n("footer"),r=o((()=>t.height?s.cssVarBlock({height:t.height}):{}));return(e,t)=>(l(),i("footer",{class:u(p(s).b()),style:m(p(r))},[c(e.$slots,"default")],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const _=r({name:"ElHeader"});var w=e(r({..._,props:{height:{type:String,default:null}},setup(e){const t=e,s=n("header"),r=o((()=>t.height?s.cssVarBlock({height:t.height}):{}));return(e,t)=>(l(),i("header",{class:u(p(s).b()),style:m(p(r))},[c(e.$slots,"default")],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const y=r({name:"ElMain"});var b=e(r({...y,setup(e){const t=n("main");return(e,s)=>(l(),i("main",{class:u(p(t).b())},[c(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const E=t(h,{Aside:g,Footer:v,Header:w,Main:b}),$=s(g);s(v);const j=s(w),x=s(b);export{E,$ as a,j as b,x as c};
