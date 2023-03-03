import{b as e,d as a,_ as t,E as l,w as s,a as o}from"./index-f72b3ea9.js";import{k as n,m as r,d as i,H as u}from"./index-4f6840b9.js";import{u as d,d as c,e as p}from"./index-854ce82e.js";import{m as v}from"./typescript-5028724d.js";import{t as b}from"./error-c58402b8.js";import{u as m}from"./index-08eda97d.js";import{c as f}from"./strings-23817cc8.js";import{q as y,y as g,w as h,v as x,o as w,a as $,k,c as C,t as N,D as P,f as T,ag as j,x as S,at as B,u as E,g as R,e as A}from"./runtime-core.esm-bundler-77b13fca.js";import{r as F,a as _,u as K,n as L,d as q,b as V}from"./reactivity.esm-bundler-72867dac.js";import{E as z}from"./aria-60e0cdc6.js";import{U as D}from"./focus-trap-a7ebc7ce.js";import{u as H}from"./index-6639a375.js";import{d as M,c as U,w as O}from"./style-ac750348.js";import{a as W}from"./index-9f7efeb4.js";import{b as X}from"./runtime-dom.esm-bundler-8f945973.js";const Y=Symbol("tabsRootContextKey"),G=e({tabs:{type:a(Array),default:()=>v([])}}),I="ElTabBar",J=y({name:I});var Q=t(y({...J,props:G,setup(e,{expose:a}){const t=e,l=k(),s=g(Y);s||b(I,"<el-tabs><el-tab-bar /></el-tabs>");const o=m("tabs"),n=F(),r=F(),i=()=>r.value=(()=>{let e=0,a=0;const o=["top","bottom"].includes(s.props.tabPosition)?"width":"height",n="width"===o?"x":"y";return t.tabs.every((s=>{var r,i,u,d;const c=null==(i=null==(r=l.parent)?void 0:r.refs)?void 0:i[`tab-${s.uid}`];if(!c)return!1;if(!s.active)return!0;a=c[`client${f(o)}`];const p="x"===n?"left":"top";e=c[`offset${f(p)}`]-(null!=(d=null==(u=c.parentElement)?void 0:u[`offset${f(p)}`])?d:0);const v=c.closest(".is-scrollable");if(v){const a=window.getComputedStyle(v);e+=Number.parseFloat(a[`padding${f(p)}`])}const b=window.getComputedStyle(c);return"width"===o&&(t.tabs.length>1&&(a-=Number.parseFloat(b.paddingLeft)+Number.parseFloat(b.paddingRight)),e+=Number.parseFloat(b.paddingLeft)),!1})),{[o]:`${a}px`,transform:`translate${f(n)}(${e}px)`}})();return h((()=>t.tabs),(async()=>{await x(),i()}),{immediate:!0}),d(n,(()=>i())),a({ref:n,update:i}),(e,a)=>(w(),$("div",{ref_key:"barRef",ref:n,class:_([K(o).e("active-bar"),K(o).is(K(s).props.tabPosition)]),style:L(r.value)},null,6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const Z=e({panes:{type:a(Array),default:()=>v([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),ee="ElTabNav",ae=y({name:ee,props:Z,emits:{tabClick:(e,a,t)=>t instanceof Event,tabRemove:(e,a)=>a instanceof Event},setup(e,{expose:a,emit:t}){const s=k(),o=g(Y);o||b(ee,"<el-tabs><tab-nav /></el-tabs>");const u=m("tabs"),v=c(),y=p(),w=F(),$=F(),j=F(),S=F(!1),B=F(0),E=F(!1),R=F(!0),A=C((()=>["top","bottom"].includes(o.props.tabPosition)?"width":"height")),_=C((()=>({transform:`translate${"width"===A.value?"X":"Y"}(-${B.value}px)`}))),K=()=>{if(!w.value)return;const e=w.value[`offset${f(A.value)}`],a=B.value;if(!a)return;const t=a>e?a-e:0;B.value=t},L=()=>{if(!w.value||!$.value)return;const e=$.value[`offset${f(A.value)}`],a=w.value[`offset${f(A.value)}`],t=B.value;if(e-t<=a)return;const l=e-t>2*a?t+a:e-a;B.value=l},q=async()=>{const e=$.value;if(!(S.value&&j.value&&w.value&&e))return;await x();const a=j.value.querySelector(".is-active");if(!a)return;const t=w.value,l=["top","bottom"].includes(o.props.tabPosition),s=a.getBoundingClientRect(),n=t.getBoundingClientRect(),r=l?e.offsetWidth-n.width:e.offsetHeight-n.height,i=B.value;let u=i;l?(s.left<n.left&&(u=i-(n.left-s.left)),s.right>n.right&&(u=i+s.right-n.right)):(s.top<n.top&&(u=i-(n.top-s.top)),s.bottom>n.bottom&&(u=i+(s.bottom-n.bottom))),u=Math.max(u,0),B.value=Math.min(u,r)},V=()=>{if(!$.value||!w.value)return;const e=$.value[`offset${f(A.value)}`],a=w.value[`offset${f(A.value)}`],t=B.value;if(a<e){const t=B.value;S.value=S.value||{},S.value.prev=t,S.value.next=t+a<e,e-t<a&&(B.value=e-a)}else S.value=!1,t>0&&(B.value=0)},D=e=>{const a=e.code,{up:t,down:l,left:s,right:o}=z;if(![t,l,s,o].includes(a))return;const n=Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),r=n.indexOf(e.target);let i;i=a===s||a===t?0===r?n.length-1:r-1:r<n.length-1?r+1:0,n[i].focus({preventScroll:!0}),n[i].click(),H()},H=()=>{R.value&&(E.value=!0)},M=()=>E.value=!1;return h(v,(e=>{"hidden"===e?R.value=!1:"visible"===e&&setTimeout((()=>R.value=!0),50)})),h(y,(e=>{e?setTimeout((()=>R.value=!0),50):R.value=!1})),d(j,V),N((()=>setTimeout((()=>q()),0))),P((()=>V())),a({scrollToActiveTab:q,removeFocus:M}),h((()=>e.panes),(()=>s.update()),{flush:"post"}),()=>{const a=S.value?[T("span",{class:[u.e("nav-prev"),u.is("disabled",!S.value.prev)],onClick:K},[T(l,null,{default:()=>[T(n,null,null)]})]),T("span",{class:[u.e("nav-next"),u.is("disabled",!S.value.next)],onClick:L},[T(l,null,{default:()=>[T(r,null,null)]})])]:null,s=e.panes.map(((a,s)=>{var n,r,d,c;const p=a.uid,v=a.props.disabled,b=null!=(r=null!=(n=a.props.name)?n:a.index)?r:`${s}`,m=!v&&(a.isClosable||e.editable);a.index=`${s}`;const f=m?T(l,{class:"is-icon-close",onClick:e=>t("tabRemove",a,e)},{default:()=>[T(i,null,null)]}):null,y=(null==(c=(d=a.slots).label)?void 0:c.call(d))||a.props.label,g=!v&&a.active?0:-1;return T("div",{ref:`tab-${p}`,class:[u.e("item"),u.is(o.props.tabPosition),u.is("active",a.active),u.is("disabled",v),u.is("closable",m),u.is("focus",E.value)],id:`tab-${b}`,key:`tab-${p}`,"aria-controls":`pane-${b}`,role:"tab","aria-selected":a.active,tabindex:g,onFocus:()=>H(),onBlur:()=>M(),onClick:e=>{M(),t("tabClick",a,b,e)},onKeydown:e=>{!m||e.code!==z.delete&&e.code!==z.backspace||t("tabRemove",a,e)}},[y,f])}));return T("div",{ref:j,class:[u.e("nav-wrap"),u.is("scrollable",!!S.value),u.is(o.props.tabPosition)]},[a,T("div",{class:u.e("nav-scroll"),ref:w},[T("div",{class:[u.e("nav"),u.is(o.props.tabPosition),u.is("stretch",e.stretch&&["top","bottom"].includes(o.props.tabPosition))],ref:$,style:_.value,role:"tablist",onKeydown:D},[e.type?null:T(Q,{tabs:[...e.panes]},null),s])])])}}}),te=e({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:a(Function),default:()=>!0},stretch:Boolean}),le=e=>q(e)||U(e);var se=y({name:"ElTabs",props:te,emits:{[D]:e=>le(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>le(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>le(e),tabAdd:()=>!0},setup(e,{emit:a,slots:t,expose:s}){var o,n;const r=m("tabs"),{children:i,addChild:d,removeChild:c}=H(k(),"ElTabPane"),p=F(),v=F(null!=(n=null!=(o=e.modelValue)?o:e.activeName)?n:"0"),b=async t=>{var l,s,o;if(v.value!==t&&!M(t))try{!1!==await(null==(l=e.beforeLeave)?void 0:l.call(e,t,v.value))&&((e=>{v.value=e,a(D,e),a("tabChange",e)})(t),null==(o=null==(s=p.value)?void 0:s.removeFocus)||o.call(s))}catch(n){}},f=(e,t,l)=>{e.props.disabled||(b(t),a("tabClick",e,l))},y=(e,t)=>{e.props.disabled||M(e.props.name)||(t.stopPropagation(),a("edit",e.props.name,"remove"),a("tabRemove",e.props.name))},g=()=>{a("edit",void 0,"add"),a("tabAdd")};return W({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},C((()=>!!e.activeName))),h((()=>e.activeName),(e=>b(e))),h((()=>e.modelValue),(e=>b(e))),h(v,(async()=>{var e;await x(),null==(e=p.value)||e.scrollToActiveTab()})),j(Y,{props:e,currentName:v,registerPane:d,unregisterPane:c}),s({currentName:v}),()=>{const a=e.editable||e.addable?T("span",{class:r.e("new-tab"),tabindex:"0",onClick:g,onKeydown:e=>{e.code===z.enter&&g()}},[T(l,{class:r.is("icon-plus")},{default:()=>[T(u,null,null)]})]):null,s=T("div",{class:[r.e("header"),r.is(e.tabPosition)]},[a,T(ae,{ref:p,currentName:v.value,editable:e.editable,type:e.type,panes:i.value,stretch:e.stretch,onTabClick:f,onTabRemove:y},null)]),o=T("div",{class:r.e("content")},[S(t,"default")]);return T("div",{class:[r.b(),r.m(e.tabPosition),{[r.m("card")]:"card"===e.type,[r.m("border-card")]:"border-card"===e.type}]},[..."bottom"!==e.tabPosition?[s,o]:[o,s]])}}});const oe=e({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ne=["id","aria-hidden","aria-labelledby"],re="ElTabPane",ie=y({name:re});var ue=t(y({...ie,props:oe,setup(e){const a=e,t=k(),l=B(),s=g(Y);s||b(re,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const o=m("tab-pane"),n=F(),r=C((()=>a.closable||s.props.closable)),i=O((()=>{var e;return s.currentName.value===(null!=(e=a.name)?e:n.value)})),u=F(i.value),d=C((()=>{var e;return null!=(e=a.name)?e:n.value})),c=O((()=>!a.lazy||u.value||i.value));h(i,(e=>{e&&(u.value=!0)}));const p=V({uid:t.uid,slots:l,props:a,paneName:d,active:i,index:n,isClosable:r});return N((()=>{s.registerPane(p)})),E((()=>{s.unregisterPane(p.uid)})),(e,a)=>K(c)?R((w(),$("div",{key:0,id:`pane-${K(d)}`,class:_(K(o).b()),role:"tabpanel","aria-hidden":!K(i),"aria-labelledby":`tab-${K(d)}`},[S(e.$slots,"default")],10,ne)),[[X,K(i)]]):A("v-if",!0)}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const de=s(se,{TabPane:ue}),ce=o(ue);export{de as E,ce as a};