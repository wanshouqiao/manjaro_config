import{b as e,d as a,r as o}from"./runtime-dom.esm-bundler-8f945973.js";/* empty css             *//* empty css                */import{_ as s}from"./_plugin-vue_export-helper-1b428a4d.js";import{E as n}from"./index-f72b3ea9.js";import{q as l,o as t,h as r,f as i,K as m,l as c,g as u,b as d,a as p,e as f,n as g}from"./runtime-core.esm-bundler-77b13fca.js";import{C as v}from"./Check-63155ac6.js";import h from"./Close-20719dd3.js";import{t as b}from"./reactivity.esm-bundler-72867dac.js";var j=l({name:"Loading"});const _={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},z=i("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"},null,-1);j.render=function(e,a,o,s,n,l){return t(),r("svg",_,[z])},j.__file="packages/components/Loading.vue";const L=j,w=l({name:"",props:{msg:String,show:Boolean,icon:""},components:{ElIcon:n,Loading:L,Check:v,Close:h},setup(e,a){}}),k={class:"d-toast d-flex-y"},y={key:0,class:"mr5"};const x=s(w,[["render",function(o,s,n,l,g,v){const h=m("loading"),j=m("check"),_=m("close"),z=m("el-icon");return t(),r(a,{name:"el-fade-in-linear"},{default:c((()=>[u(d("div",k,[o.msg?(t(),p("span",y,b(o.msg),1)):f("",!0),i(z,{size:16},{default:c((()=>[u(i(h,{class:"rotating"},null,512),[[e,"loading"==o.icon]]),u(i(j,null,null,512),[[e,"check"==o.icon]]),u(i(_,null,null,512),[[e,"close"==o.icon]])])),_:1})],512),[[e,o.show]])])),_:1})}]]),C=document.createElement("div"),M=(e,a)=>{if("boolean"==typeof e&&!e)return void setTimeout((()=>{o(null,C)}),300);document.body.append(C);const s=g(x,{msg:e,icon:a,show:!0});o(s,C),(e.includes("成功")||e.includes("失败"))&&setTimeout((()=>{o(null,C)}),2e3)},T={install(e){}},E=Object.freeze(Object.defineProperty({__proto__:null,dToast:M,default:T},Symbol.toStringTag,{value:"Module"}));export{L,M as d,E as i};