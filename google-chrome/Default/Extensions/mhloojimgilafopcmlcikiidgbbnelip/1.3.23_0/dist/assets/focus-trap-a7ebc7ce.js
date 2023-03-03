import{r as e,u as t,d as n}from"./reactivity.esm-bundler-72867dac.js";import{t as o,a9 as s,q as r,ag as a,w as u,v as c,x as d}from"./runtime-core.esm-bundler-77b13fca.js";import{_ as i}from"./index-f72b3ea9.js";import{E as l}from"./aria-60e0cdc6.js";import{b as f}from"./style-ac750348.js";function p(e){return null==e}const m="update:modelValue",v="change",E="input";let y=[];const w=e=>{const t=e;t.key===l.esc&&y.forEach((e=>e(t)))},h="focus-trap.focus-after-trapped",L="focus-trap.focus-after-released",b={cancelable:!0,bubbles:!1},T={cancelable:!0,bubbles:!1},g="focusAfterTrapped",k="focusAfterReleased",R=Symbol("elFocusTrap"),F=e(),N=e(0),P=e(0);let S=0;const I=e=>{const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{const t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0||e===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t},K=(e,t)=>{for(const n of e)if(!j(n,t))return n},j=(e,t)=>{if("hidden"===getComputedStyle(e).visibility)return!0;for(;e;){if(t&&e===t)return!1;if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1},C=(e,t)=>{if(e&&e.focus){const n=document.activeElement;if(e.focus({preventScroll:!0}),P.value=window.performance.now(),e!==n&&(e=>e instanceof HTMLInputElement&&"select"in e)(e)&&t){if("INPUT"===e.tagName)return void e.setSelectionRange(e.value.length,e.value.length);e.select()}}};function _(e,t){const n=[...e],o=e.indexOf(t);return-1!==o&&n.splice(o,1),n}const x=(()=>{let e=[];return{push:t=>{const n=e[0];n&&t!==n&&n.pause(),e=_(e,t),e.unshift(t)},remove:t=>{var n,o;e=_(e,t),null==(o=null==(n=e[0])?void 0:n.resume)||o.call(n)}}})(),A=()=>{F.value="pointer",N.value=window.performance.now()},O=()=>{F.value="keyboard",N.value=window.performance.now()},U=e=>new CustomEvent("focus-trap.focusout-prevented",{...T,detail:e});var q=i(r({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[g,k,"focusin","focusout","focusout-prevented","release-requested"],setup(r,{emit:d}){const i=e();let m,v;const{focusReason:E}=(o((()=>{0===S&&(document.addEventListener("mousedown",A),document.addEventListener("touchstart",A),document.addEventListener("keydown",O)),S++})),s((()=>{S--,S<=0&&(document.removeEventListener("mousedown",A),document.removeEventListener("touchstart",A),document.removeEventListener("keydown",O))})),{focusReason:F,lastUserFocusTimestamp:N,lastAutomatedFocusTimestamp:P});var T;T=e=>{r.trapped&&!j.paused&&d("release-requested",e)},o((()=>{0===y.length&&document.addEventListener("keydown",w),f&&y.push(T)})),s((()=>{y=y.filter((e=>e!==T)),0===y.length&&f&&document.removeEventListener("keydown",w)}));const j={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},_=e=>{if(!r.loop&&!r.trapped)return;if(j.paused)return;const{key:t,altKey:n,ctrlKey:o,metaKey:s,currentTarget:a,shiftKey:u}=e,{loop:c}=r,i=t===l.tab&&!n&&!o&&!s,f=document.activeElement;if(i&&f){const t=a,[n,o]=(e=>{const t=I(e);return[K(t,e),K(t.reverse(),e)]})(t);if(n&&o)if(u||f!==o){if(u&&[n,t].includes(f)){const t=U({focusReason:E.value});d("focusout-prevented",t),t.defaultPrevented||(e.preventDefault(),c&&C(o,!0))}}else{const t=U({focusReason:E.value});d("focusout-prevented",t),t.defaultPrevented||(e.preventDefault(),c&&C(n,!0))}else if(f===t){const t=U({focusReason:E.value});d("focusout-prevented",t),t.defaultPrevented||e.preventDefault()}}};a(R,{focusTrapRef:i,onKeydown:_}),u((()=>r.focusTrapEl),(e=>{e&&(i.value=e)}),{immediate:!0}),u([i],(([e],[t])=>{e&&(e.addEventListener("keydown",_),e.addEventListener("focusin",B),e.addEventListener("focusout",H)),t&&(t.removeEventListener("keydown",_),t.removeEventListener("focusin",B),t.removeEventListener("focusout",H))}));const q=e=>{d(g,e)},D=e=>d(k,e),B=e=>{const n=t(i);if(!n)return;const o=e.target,s=e.relatedTarget,a=o&&n.contains(o);if(!r.trapped){s&&n.contains(s)||(m=s)}a&&d("focusin",e),j.paused||r.trapped&&(a?v=o:C(v,!0))},H=e=>{const n=t(i);if(!j.paused&&n)if(r.trapped){const t=e.relatedTarget;p(t)||n.contains(t)||setTimeout((()=>{if(!j.paused&&r.trapped){const e=U({focusReason:E.value});d("focusout-prevented",e),e.defaultPrevented||C(v,!0)}}),0)}else{const t=e.target;t&&n.contains(t)||d("focusout",e)}};async function M(){await c();const e=t(i);if(e){x.push(j);const t=e.contains(document.activeElement)?m:document.activeElement;m=t;if(!e.contains(t)){const o=new Event(h,b);e.addEventListener(h,q),e.dispatchEvent(o),o.defaultPrevented||c((()=>{let o=r.focusStartEl;n(o)||(C(o),document.activeElement!==o&&(o="first")),"first"===o&&((e,t=!1)=>{const n=document.activeElement;for(const o of e)if(C(o,t),document.activeElement!==n)return})(I(e),!0),document.activeElement!==t&&"container"!==o||C(e)}))}}}function W(){const e=t(i);if(e){e.removeEventListener(h,q);const t=new CustomEvent(L,{...b,detail:{focusReason:E.value}});e.addEventListener(L,D),e.dispatchEvent(t),t.defaultPrevented||"keyboard"!=E.value&&N.value>P.value||C(null!=m?m:document.body,!0),e.removeEventListener(L,q),x.remove(j)}}return o((()=>{r.trapped&&M(),u((()=>r.trapped),(e=>{e?M():W()}))})),s((()=>{r.trapped&&W()})),{onKeydown:_}}}),[["render",function(e,t,n,o,s,r){return d(e.$slots,"default",{handleKeydown:e.onKeydown})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{v as C,q as E,R as F,E as I,m as U,p as i};
