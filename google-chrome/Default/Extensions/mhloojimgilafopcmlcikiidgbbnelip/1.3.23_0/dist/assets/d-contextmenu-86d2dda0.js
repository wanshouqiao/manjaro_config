import{b as o,a as t}from"./runtime-dom.esm-bundler-8f945973.js";import{o as i,b as e,C as s,D as n,L as r}from"./main-f5b07798.js";import{a as m}from"./index-ea316b3a.js";import{q as l,o as c,a,b as p,w as u,c as j,u as d,h as k,g as h,x,m as v,r as y,j as f,F as b,e as g,P as w}from"./runtime-core.esm-bundler-77b13fca.js";import{b as C,a as H,t as _,n as q,u as B}from"./reactivity.esm-bundler-72867dac.js";import"./d-text-icon-0c972c3a.js";import"./_baseClone-93129bef.js";import"./_MapCache-31dad113.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./preload-helper-706a0e5c.js";import"./local-82fd2aea.js";import"./globStorageState-d3feed6a.js";import"./dayjs.min-39fed9c4.js";import"./_commonjsHelpers-e5557959.js";import"./browser-c7a4f02b.js";import"./week-7975c4f4.js";import"./vue.runtime.esm-bundler-07884c49.js";import"./utils-73d66301.js";import"./global-3c385e89.js";import"./Plus-9ce421bd.js";import"./Check-63155ac6.js";import"./icon-a5a7f81d.js";import"./icon-fdb117a5.js";import"./d-calendar-9992ce38.js";import"./icon-92d26b08.js";import"./dateTime-73945ad3.js";import"./icon-0ad693e8.js";import"./dateTools-6203f8f7.js";import"./icon-e7ca50f5.js";import"./icon2-d4bc0c65.js";import"./icon3-aa79709d.js";import"./icon-73c56842.js";import"./icon-9c80e3eb.js";import"./icon-c3851054.js";import"./icon-8d5583fa.js";import"./icon-cc372385.js";import"./icon-c1c85589.js";import"./icon-5996535b.js";import"./icon-c531cb5b.js";import"./icon-e1d7edae.js";import"./notes-a9d23bdb.js";import"./icon-2b215e9e.js";import"./icon-eca13f38.js";import"./icon-51af1d1d.js";import"./stocks-0eb3a6ed.js";import"./icon-133d69b9.js";import"./icon-dd45f250.js";import"./icon-d391b03b.js";import"./todo-998e5e96.js";import"./icon-60032c73.js";import"./icon-a65bc46c.js";import"./icon-0ba8aff4.js";import"./icon-6322d102.js";import"./icon-1216e893.js";import"./icon-4fbf9766.js";/* empty css             *//* empty css                 *//* empty css                  */import"./icon-3f2dfd1c.js";import"./icon-449c1bca.js";import"./icon-7d2de9c9.js";const E={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},O=[p("path",{d:"M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),p("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M336 64h112v112"},null,-1),p("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M224 288L440 72"},null,-1)],S=l({name:"OpenOutline",render:function(o,t){return c(),a("svg",E,O)}}),A=["id"],D=["onClick"],M={class:"item-icon d-icon"},X={key:0,class:"contextmenu-layout"},Y=["onClick"],$={components:{CalendarEdit20Regular:s,Delete28Regular:n,OpenOutline:S,LayoutBoard:r}},F=Object.assign($,{__name:"d-contextmenu",props:{data:{type:Array,default:()=>[]},active:String,uid:{required:!0,type:String}},emits:["click"],setup(s,{expose:n,emit:r}){const l=s,E=C({visible:!1,mouseX:0,mouseY:0,winWidth:0,winHeight:0}),{width:O,height:S}=m();function $(o){E.visible&&(E.visible=!1)}function F(o){$(),r("click",o)}u((()=>E.visible),(o=>{o&&i(document,"click",$)}));const L=j((()=>({left:E.mouseX+"px",top:E.mouseY+"px"})));return n({open:async o=>{const t=document.getElementById(`menu${l.uid}`);document.querySelectorAll(".d-contextmenu.v-contextmenu").forEach((o=>{o.id!==`menu${l.uid}`?o.style.display="none":o.style.display="block"})),E.visible=!0;let i=o.clientX,e=o.clientY;i>=O.value-t.offsetWidth&&(i=O.value-t.offsetWidth),e>S.value-t.offsetHeight&&(e=S.value-t.offsetHeight),E.mouseX=i,E.mouseY=e},close:$}),d((()=>{e(document,"click",$),e(document,"contextmenu",$)})),(i,e)=>(c(),k(w,{to:"body"},[h(p("ul",{style:q(B(L)),class:"d-contextmenu v-contextmenu",id:`menu${s.uid}`},[x(i.$slots,"default",{},(()=>[(c(!0),a(b,null,v(s.data,(o=>(c(),a("li",{onClick:t=>F(o),class:H(["d-contextmenu-item",[{hover:"layout"!=o.key}]]),key:o.key},[p("i",M,[(c(),k(y(s.active==o.key?"check":o.icon)))]),f(" "+_(o.name)+" ",1),"layout"==o.key?(c(),a("p",X,[(c(),a(b,null,v(["1x1","1x2","2x1","2x2","2x4"],(o=>p("em",{onClick:t((t=>F(o)),["stop"]),class:H({active:o==s.active}),key:o},_(o),11,Y))),64))])):g("",!0)],10,D)))),128))]))],12,A),[[o,E.visible]])]))}});export{F as default};
