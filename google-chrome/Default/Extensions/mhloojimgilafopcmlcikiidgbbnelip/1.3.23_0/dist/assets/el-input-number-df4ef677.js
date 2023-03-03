import{w as e,a as r}from"./runtime-dom.esm-bundler-8f945973.js";import{E as t}from"./index-e52000c7.js";import{b as a,E as l,_ as n,w as u}from"./index-f72b3ea9.js";import{b as i,F as s,G as o,H as m}from"./index-4f6840b9.js";import{b as d,u as c,d as p}from"./index-62715ce7.js";import{C as b,I as v,i as f,U as N}from"./focus-trap-a7ebc7ce.js";import{c as y,d as x}from"./style-ac750348.js";import{u as g}from"./index-11ecaac6.js";import{u as I}from"./index-08eda97d.js";import{u as h}from"./index-2e34e30b.js";import{d as V}from"./error-c58402b8.js";import{r as S,b as j,u as w,a as E,d as F}from"./reactivity.esm-bundler-72867dac.js";import{v as k}from"./index-d0686f1c.js";import{q as A,c as _,w as B,t as K,D as O,o as z,a as C,g as M,f as T,l as $,h as P,e as D}from"./runtime-core.esm-bundler-77b13fca.js";const G=a({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:d,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||y(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0}}),Y={[b]:(e,r)=>e!==r,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[v]:e=>y(e)||f(e),[N]:e=>y(e)||f(e)},q=["aria-label","onKeydown"],H=["aria-label","onKeydown"],U=A({name:"ElInputNumber"});const J=u(n(A({...U,props:G,emits:Y,setup(a,{expose:n,emit:u}){const d=a,{t:A}=g(),G=I("input-number"),Y=S(),U=j({currentValue:d.modelValue,userInput:null}),{formItem:J}=h(),L=_((()=>y(d.modelValue)&&d.modelValue<=d.min)),Q=_((()=>y(d.modelValue)&&d.modelValue>=d.max)),R=_((()=>{const e=te(d.step);return x(d.precision)?Math.max(te(d.modelValue),e):(d.precision,d.precision)})),W=_((()=>d.controls&&"right"===d.controlsPosition)),X=c(),Z=p(),ee=_((()=>{if(null!==U.userInput)return U.userInput;let e=U.currentValue;if(f(e))return"";if(y(e)){if(Number.isNaN(e))return"";x(d.precision)||(e=e.toFixed(d.precision))}return e})),re=(e,r)=>{if(x(r)&&(r=R.value),0===r)return Math.round(e);let t=String(e);const a=t.indexOf(".");if(-1===a)return e;if(!t.replace(".","").split("")[a+r])return e;const l=t.length;return"5"===t.charAt(l-1)&&(t=`${t.slice(0,Math.max(0,l-1))}6`),Number.parseFloat(Number(t).toFixed(r))},te=e=>{if(f(e))return 0;const r=e.toString(),t=r.indexOf(".");let a=0;return-1!==t&&(a=r.length-t-1),a},ae=(e,r=1)=>y(e)?re(e+d.step*r):U.currentValue,le=()=>{if(d.readonly||Z.value||Q.value)return;const e=Number(ee.value)||0,r=ae(e);ie(r),u(v,U.currentValue)},ne=()=>{if(d.readonly||Z.value||L.value)return;const e=Number(ee.value)||0,r=ae(e,-1);ie(r),u(v,U.currentValue)},ue=(e,r)=>{const{max:t,min:a,step:l,precision:n,stepStrictly:i,valueOnClear:s}=d;let o=Number(e);if(f(e)||Number.isNaN(o))return null;if(""===e){if(null===s)return null;o=F(s)?{min:a,max:t}[s]:s}return i&&(o=re(Math.round(o/l)*l,n)),x(n)||(o=re(o,n)),(o>t||o<a)&&(o=o>t?t:a,r&&u(N,o)),o},ie=(e,r=!0)=>{var t;const a=U.currentValue,l=ue(e);a!==l&&(r?(U.userInput=null,u(N,l),u(b,l,a),d.validateEvent&&(null==(t=null==J?void 0:J.validate)||t.call(J,"change").catch((e=>V()))),U.currentValue=l):u(N,l))},se=e=>{U.userInput=e;const r=""===e?null:Number(e);u(v,r),ie(r,!1)},oe=e=>{const r=""!==e?Number(e):"";(y(r)&&!Number.isNaN(r)||""===e)&&ie(r),U.userInput=null},me=e=>{u("focus",e)},de=e=>{var r;u("blur",e),d.validateEvent&&(null==(r=null==J?void 0:J.validate)||r.call(J,"blur").catch((e=>V())))};return B((()=>d.modelValue),(e=>{const r=ue(U.userInput),t=ue(e,!0);r&&r===t||(U.currentValue=t,U.userInput=null)}),{immediate:!0}),K((()=>{var e;const{min:r,max:t,modelValue:a}=d,l=null==(e=Y.value)?void 0:e.input;if(l.setAttribute("role","spinbutton"),Number.isFinite(t)?l.setAttribute("aria-valuemax",String(t)):l.removeAttribute("aria-valuemax"),Number.isFinite(r)?l.setAttribute("aria-valuemin",String(r)):l.removeAttribute("aria-valuemin"),l.setAttribute("aria-valuenow",String(U.currentValue)),l.setAttribute("aria-disabled",String(Z.value)),!y(a)&&null!=a){let e=Number(a);Number.isNaN(e)&&(e=null),u(N,e)}})),O((()=>{var e;const r=null==(e=Y.value)?void 0:e.input;null==r||r.setAttribute("aria-valuenow",`${U.currentValue}`)})),n({focus:()=>{var e,r;null==(r=null==(e=Y.value)?void 0:e.focus)||r.call(e)},blur:()=>{var e,r;null==(r=null==(e=Y.value)?void 0:e.blur)||r.call(e)}}),(a,n)=>(z(),C("div",{class:E([w(G).b(),w(G).m(w(X)),w(G).is("disabled",w(Z)),w(G).is("without-controls",!a.controls),w(G).is("controls-right",w(W))]),onDragstart:n[0]||(n[0]=r((()=>{}),["prevent"]))},[a.controls?M((z(),C("span",{key:0,role:"button","aria-label":w(A)("el.inputNumber.decrease"),class:E([w(G).e("decrease"),w(G).is("disabled",w(L))]),onKeydown:e(ne,["enter"])},[T(w(l),null,{default:$((()=>[w(W)?(z(),P(w(i),{key:0})):(z(),P(w(s),{key:1}))])),_:1})],42,q)),[[w(k),ne]]):D("v-if",!0),a.controls?M((z(),C("span",{key:1,role:"button","aria-label":w(A)("el.inputNumber.increase"),class:E([w(G).e("increase"),w(G).is("disabled",w(Q))]),onKeydown:e(le,["enter"])},[T(w(l),null,{default:$((()=>[w(W)?(z(),P(w(o),{key:0})):(z(),P(w(m),{key:1}))])),_:1})],42,H)),[[w(k),le]]):D("v-if",!0),T(w(t),{id:a.id,ref_key:"input",ref:Y,type:"number",step:a.step,"model-value":w(ee),placeholder:a.placeholder,readonly:a.readonly,disabled:w(Z),size:w(X),max:a.max,min:a.min,name:a.name,label:a.label,"validate-event":!1,onKeydown:[e(r(le,["prevent"]),["up"]),e(r(ne,["prevent"]),["down"])],onBlur:de,onFocus:me,onInput:se,onChange:oe},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]));export{J as E};
