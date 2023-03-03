import{b as e}from"./index-854ce82e.js";import{a,b as l,d as s}from"./runtime-dom.esm-bundler-8f945973.js";import{b as t,d as n,E as o,_ as i,w as r}from"./index-f72b3ea9.js";import{g as u,j as c,d,k as f,m as v,z as m,n as p,r as y,o as g}from"./index-4f6840b9.js";import{m as b}from"./typescript-5028724d.js";import{b as k,c as w,l as h,s as x}from"./style-ac750348.js";import{u as I}from"./index-11ecaac6.js";import{u as _,k as z}from"./index-08eda97d.js";import{u as C}from"./index-e1484003.js";import{E as j}from"./aria-60e0cdc6.js";import{q as O,c as A,w as T,v as E,t as L,o as N,h as S,f as $,l as B,b as M,e as Y,a as D,F as X,r as F,m as P,g as R,x as q,P as H,ar as V,a6 as W}from"./runtime-core.esm-bundler-77b13fca.js";import{P as G,r as K,e as Q,a2 as Z,a as J,u as U,n as ee,t as ae,d as le}from"./reactivity.esm-bundler-72867dac.js";import{t as se}from"./throttle-c9305476.js";import{u as te}from"./index-de1201fd.js";import{i as ne}from"./position-7d705053.js";import{g as oe}from"./scroll-f7c38f71.js";import"./_MapCache-31dad113.js";import"./isSymbol-1e3d4c76.js";import"./debounce-c2dba7cb.js";const ie=t({urlList:{type:n(Array),default:()=>b([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0}}),re={close:()=>!0,switch:e=>w(e)},ue=["src"],ce=O({name:"ElImageViewer"});const de=r(i(O({...ce,props:ie,emits:re,setup(t,{expose:n,emit:i}){const r=t,b={CONTAIN:{name:"contain",icon:G(u)},ORIGINAL:{name:"original",icon:G(c)}},h=k&&/firefox/i.test(window.navigator.userAgent)?"DOMMouseScroll":"mousewheel",{t:x}=I(),O=_("image-viewer"),{nextZIndex:V}=C(),W=K(),ae=K([]),le=Q(),te=K(!0),ne=K(r.initialIndex),oe=Z(b.CONTAIN),ie=K({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),re=A((()=>{const{urlList:e}=r;return e.length<=1})),ce=A((()=>0===ne.value)),de=A((()=>ne.value===r.urlList.length-1)),fe=A((()=>r.urlList[ne.value])),ve=A((()=>{const{scale:e,deg:a,offsetX:l,offsetY:s,enableTransition:t}=ie.value;let n=l/e,o=s/e;switch(a%360){case 90:case-270:[n,o]=[o,-n];break;case 180:case-180:[n,o]=[-n,-o];break;case 270:case-90:[n,o]=[-o,n]}const i={transform:`scale(${e}) rotate(${a}deg) translate(${n}px, ${o}px)`,transition:t?"transform .3s":""};return oe.value.name===b.CONTAIN.name&&(i.maxWidth=i.maxHeight="100%"),i})),me=A((()=>w(r.zIndex)?r.zIndex:V()));function pe(){le.stop(),i("close")}function ye(){te.value=!1}function ge(e){te.value=!1,e.target.alt=x("el.image.error")}function be(a){if(te.value||0!==a.button||!W.value)return;ie.value.enableTransition=!1;const{offsetX:l,offsetY:s}=ie.value,t=a.pageX,n=a.pageY,o=se((e=>{ie.value={...ie.value,offsetX:l+e.pageX-t,offsetY:s+e.pageY-n}})),i=e(document,"mousemove",o);e(document,"mouseup",(()=>{i()})),a.preventDefault()}function ke(){ie.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function we(){if(te.value)return;const e=z(b),a=Object.values(b),l=oe.value.name,s=(a.findIndex((e=>e.name===l))+1)%e.length;oe.value=b[e[s]],ke()}function he(e){const a=r.urlList.length;ne.value=(e+a)%a}function xe(){ce.value&&!r.infinite||he(ne.value-1)}function Ie(){de.value&&!r.infinite||he(ne.value+1)}function _e(e,a={}){if(te.value)return;const{zoomRate:l,rotateDeg:s,enableTransition:t}={zoomRate:1.4,rotateDeg:90,enableTransition:!0,...a};switch(e){case"zoomOut":ie.value.scale>.2&&(ie.value.scale=Number.parseFloat((ie.value.scale/l).toFixed(3)));break;case"zoomIn":ie.value.scale<7&&(ie.value.scale=Number.parseFloat((ie.value.scale*l).toFixed(3)));break;case"clockwise":ie.value.deg+=s;break;case"anticlockwise":ie.value.deg-=s}ie.value.enableTransition=t}return T(fe,(()=>{E((()=>{const e=ae.value[0];(null==e?void 0:e.complete)||(te.value=!0)}))})),T(ne,(e=>{ke(),i("switch",e)})),L((()=>{var a,l;!function(){const a=se((e=>{switch(e.code){case j.esc:r.closeOnPressEscape&&pe();break;case j.space:we();break;case j.left:xe();break;case j.up:_e("zoomIn");break;case j.right:Ie();break;case j.down:_e("zoomOut")}})),l=se((e=>{_e((e.wheelDelta?e.wheelDelta:-e.detail)>0?"zoomIn":"zoomOut",{zoomRate:1.2,enableTransition:!1})}));le.run((()=>{e(document,"keydown",a),e(document,h,l)}))}(),null==(l=null==(a=W.value)?void 0:a.focus)||l.call(a)})),n({setActiveItem:he}),(e,t)=>(N(),S(H,{to:"body",disabled:!e.teleported},[$(s,{name:"viewer-fade",appear:""},{default:B((()=>[M("div",{ref_key:"wrapper",ref:W,tabindex:-1,class:J(U(O).e("wrapper")),style:ee({zIndex:U(me)})},[M("div",{class:J(U(O).e("mask")),onClick:t[0]||(t[0]=a((a=>e.hideOnClickModal&&pe()),["self"]))},null,2),Y(" CLOSE "),M("span",{class:J([U(O).e("btn"),U(O).e("close")]),onClick:pe},[$(U(o),null,{default:B((()=>[$(U(d))])),_:1})],2),Y(" ARROW "),U(re)?Y("v-if",!0):(N(),D(X,{key:0},[M("span",{class:J([U(O).e("btn"),U(O).e("prev"),U(O).is("disabled",!e.infinite&&U(ce))]),onClick:xe},[$(U(o),null,{default:B((()=>[$(U(f))])),_:1})],2),M("span",{class:J([U(O).e("btn"),U(O).e("next"),U(O).is("disabled",!e.infinite&&U(de))]),onClick:Ie},[$(U(o),null,{default:B((()=>[$(U(v))])),_:1})],2)],64)),Y(" ACTIONS "),M("div",{class:J([U(O).e("btn"),U(O).e("actions")])},[M("div",{class:J(U(O).e("actions__inner"))},[$(U(o),{onClick:t[1]||(t[1]=e=>_e("zoomOut"))},{default:B((()=>[$(U(m))])),_:1}),$(U(o),{onClick:t[2]||(t[2]=e=>_e("zoomIn"))},{default:B((()=>[$(U(p))])),_:1}),M("i",{class:J(U(O).e("actions__divider"))},null,2),$(U(o),{onClick:we},{default:B((()=>[(N(),S(F(U(oe).icon)))])),_:1}),M("i",{class:J(U(O).e("actions__divider"))},null,2),$(U(o),{onClick:t[3]||(t[3]=e=>_e("anticlockwise"))},{default:B((()=>[$(U(y))])),_:1}),$(U(o),{onClick:t[4]||(t[4]=e=>_e("clockwise"))},{default:B((()=>[$(U(g))])),_:1})],2)],2),Y(" CANVAS "),M("div",{class:J(U(O).e("canvas"))},[(N(!0),D(X,null,P(e.urlList,((e,a)=>R((N(),D("img",{ref_for:!0,ref:e=>ae.value[a]=e,key:e,src:e,style:ee(U(ve)),class:J(U(O).e("img")),onLoad:ye,onError:ge,onMousedown:be},null,46,ue)),[[l,a===ne.value]]))),128))],2),q(e.$slots,"default")],6)])),_:3})],8,["disabled"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]])),fe=t({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:n([String,Object])},previewSrcList:{type:n(Array),default:()=>b([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0}}),ve={load:e=>e instanceof Event,error:e=>e instanceof Event,switch:e=>w(e),close:()=>!0,show:()=>!0},me=["src","loading"],pe={key:0},ye=O({name:"ElImage",inheritAttrs:!1});const ge=r(i(O({...ye,props:fe,emits:ve,setup(a,{emit:l}){const s=a;let t="";const{t:n}=I(),o=_("image"),i=V(),r=te(),u=K(),c=K(!1),d=K(!0),f=K(!1),v=K(),m=K(),p=k&&"loading"in HTMLImageElement.prototype;let y,g;const b=A((()=>i.style)),w=A((()=>{const{fit:e}=s;return k&&e?{objectFit:e}:{}})),z=A((()=>{const{previewSrcList:e}=s;return Array.isArray(e)&&e.length>0})),C=A((()=>{const{previewSrcList:e,initialIndex:a}=s;let l=a;return a>e.length-1&&(l=0),l})),j=A((()=>"eager"!==s.loading&&(!p&&"lazy"===s.loading||s.lazy))),O=()=>{k&&(d.value=!0,c.value=!1,u.value=s.src)};function $(e){d.value=!1,c.value=!1,l("load",e)}function F(e){d.value=!1,c.value=!0,l("error",e)}function P(){ne(v.value,m.value)&&(O(),G())}const R=x(P,200);async function H(){var a;if(!k)return;await E();const{scrollContainer:l}=s;h(l)?m.value=l:le(l)&&""!==l?m.value=null!=(a=document.querySelector(l))?a:void 0:v.value&&(m.value=oe(v.value)),m.value&&(y=e(m,"scroll",R),setTimeout((()=>P()),100))}function G(){k&&m.value&&R&&(null==y||y(),m.value=void 0)}function Q(e){if(e.ctrlKey)return e.deltaY<0||e.deltaY>0?(e.preventDefault(),!1):void 0}function Z(){z.value&&(g=e("wheel",Q,{passive:!1}),t=document.body.style.overflow,document.body.style.overflow="hidden",f.value=!0,l("show"))}function se(){null==g||g(),document.body.style.overflow=t,f.value=!1,l("close")}function ie(e){l("switch",e)}return T((()=>s.src),(()=>{j.value?(d.value=!0,c.value=!1,G(),H()):O()})),L((()=>{j.value?H():O()})),(e,a)=>(N(),D("div",{ref_key:"container",ref:v,class:J([U(o).b(),e.$attrs.class]),style:ee(U(b))},[void 0===u.value||c.value?Y("v-if",!0):(N(),D("img",W({key:0},U(r),{src:u.value,loading:e.loading,style:U(w),class:[U(o).e("inner"),U(z)&&U(o).e("preview"),d.value&&U(o).is("loading")],onClick:Z,onLoad:$,onError:F}),null,16,me)),d.value||c.value?(N(),D("div",{key:1,class:J(U(o).e("wrapper"))},[d.value?q(e.$slots,"placeholder",{key:0},(()=>[M("div",{class:J(U(o).e("placeholder"))},null,2)])):c.value?q(e.$slots,"error",{key:1},(()=>[M("div",{class:J(U(o).e("error"))},ae(U(n)("el.image.error")),3)])):Y("v-if",!0)],2)):Y("v-if",!0),U(z)?(N(),D(X,{key:2},[f.value?(N(),S(U(de),{key:0,"z-index":e.zIndex,"initial-index":U(C),infinite:e.infinite,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:se,onSwitch:ie},{default:B((()=>[e.$slots.viewer?(N(),D("div",pe,[q(e.$slots,"viewer")])):Y("v-if",!0)])),_:3},8,["z-index","initial-index","infinite","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):Y("v-if",!0)],64)):Y("v-if",!0)],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]));export{ge as ElImage,ge as default,ve as imageEmits,fe as imageProps};