import{w as e,a,b as l}from"./runtime-dom.esm-bundler-8f945973.js";/* empty css             *//* empty css                  */import{E as o}from"./el-dialog-9345927c.js";/* empty css                   *//* empty css                 */import{E as s,a as t}from"./el-form-item-538254d8.js";import{E as i}from"./el-radio-99792f58.js";import{a as r}from"./index-98e2e8c6.js";import{_ as n}from"./_plugin-vue_export-helper-1b428a4d.js";import{q as d,o as p,h as c,f as m,a as u,b as f,F as g,m as h,p as v,i as w,l as y,j as b,c as x,u as j,g as _,e as k,ar as V}from"./runtime-core.esm-bundler-77b13fca.js";import{a as C,b as T,r as I,u as A,t as q}from"./reactivity.esm-bundler-72867dac.js";import{u as E,b as F}from"./baseRequest-a74f719c.js";import{l as U}from"./local-82fd2aea.js";import z from"./d-button-00457c8f.js";import{A as P}from"./public-api-84c5ab9b.js";import{SAVE_CONFIG as S}from"./save_config-35e78de8.js";import{E as B}from"./index-e52000c7.js";import{ElButton as D}from"./index-40ae5b07.js";/* empty css                   */import{browserName as L}from"./browser-c7a4f02b.js";import{isEmail as R}from"./utils-73d66301.js";import{ElMessage as K}from"./index-da9a90a7.js";/* empty css                        *//* empty css                       */import{R as M}from"./Refresh-60fd7e4b.js";import{L as H}from"./index-2a5711a9.js";import{ElImage as Q}from"./index-ff2d0a55.js";import{E as O}from"./index-fb7d3c00.js";import"./index-f72b3ea9.js";import"./index-08eda97d.js";import"./_MapCache-31dad113.js";import"./isSymbol-1e3d4c76.js";import"./style-ac750348.js";import"./icon-b1cf815e.js";import"./index-4f6840b9.js";import"./index-11ecaac6.js";import"./focus-trap-a7ebc7ce.js";import"./aria-60e0cdc6.js";import"./index-e1484003.js";import"./index-9f7efeb4.js";import"./error-c58402b8.js";import"./scroll-f7c38f71.js";import"./index-62715ce7.js";import"./index-854ce82e.js";import"./_baseClone-93129bef.js";import"./index-2e34e30b.js";import"./axios-a986ab8c.js";import"./preload-helper-706a0e5c.js";import"./version-62e2ec50.js";import"./index-ea316b3a.js";import"./dayjs.min-39fed9c4.js";import"./_commonjsHelpers-e5557959.js";import"./globStorageState-d3feed6a.js";import"./website-234d9ff3.js";import"./notes-a9d23bdb.js";import"./todo-998e5e96.js";import"./stocks-0eb3a6ed.js";import"./indexdb-76ab5eed.js";import"./localforage-5beca937.js";import"./_commonjs-dynamic-modules-3e972b61.js";import"./debounce-c2dba7cb.js";/* empty css                */import"./Check-63155ac6.js";import"./Close-20719dd3.js";import"./typescript-5028724d.js";import"./index-de1201fd.js";import"./config-provider-6b9f90d0.js";import"./throttle-c9305476.js";import"./position-7d705053.js";import"./validator-c5991710.js";var Y=d({name:"Lock"});const $={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},G=m("path",{fill:"currentColor",d:"M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"},null,-1),N=m("path",{fill:"currentColor",d:"M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"},null,-1);Y.render=function(e,a,l,o,s,t){return p(),c("svg",$,[G,N])},Y.__file="packages/components/Lock.vue";const X=Y;var Z=d({name:"User"});const J={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},W=m("path",{fill:"currentColor",d:"M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"},null,-1);Z.render=function(e,a,l,o,s,t){return p(),c("svg",J,[W])},Z.__file="packages/components/User.vue";const ee=Z,ae="function"==typeof btoa,le="function"==typeof Buffer;"function"==typeof TextDecoder&&new TextDecoder;const oe="function"==typeof TextEncoder?new TextEncoder:void 0,se=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");(e=>{let a={};se.forEach(((e,l)=>a[e]=l))})();const te=String.fromCharCode.bind(String);"function"==typeof Uint8Array.from&&Uint8Array.from.bind(Uint8Array);const ie=ae?e=>btoa(e):le?e=>Buffer.from(e,"binary").toString("base64"):e=>{let a,l,o,s,t="";const i=e.length%3;for(let r=0;r<e.length;){if((l=e.charCodeAt(r++))>255||(o=e.charCodeAt(r++))>255||(s=e.charCodeAt(r++))>255)throw new TypeError("invalid character found");a=l<<16|o<<8|s,t+=se[a>>18&63]+se[a>>12&63]+se[a>>6&63]+se[63&a]}return i?t.slice(0,i-3)+"===".substring(i):t},re=le?e=>Buffer.from(e).toString("base64"):e=>{let a=[];for(let l=0,o=e.length;l<o;l+=4096)a.push(te.apply(null,e.subarray(l,l+4096)));return ie(a.join(""))},ne=e=>{if(e.length<2)return(a=e.charCodeAt(0))<128?e:a<2048?te(192|a>>>6)+te(128|63&a):te(224|a>>>12&15)+te(128|a>>>6&63)+te(128|63&a);var a=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return te(240|a>>>18&7)+te(128|a>>>12&63)+te(128|a>>>6&63)+te(128|63&a)},de=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,pe=le?e=>Buffer.from(e,"utf8").toString("base64"):oe?e=>re(oe.encode(e)):e=>ie(e.replace(de,ne)),ce=(e,a=!1)=>a?(e=>e.replace(/=/g,"").replace(/[+\/]/g,(e=>"+"==e?"-":"_")))(pe(e)):pe(e),me={class:"d-flex-between login-third mt15"},ue=(e=>(v("data-v-e3372ab4"),e=e(),w(),e))((()=>f("div",null,"第三方账号登录",-1))),fe={class:"d-flex"},ge=["href","onClick"],he=["src"],ve=n({__name:"loginThird",emits:["loginThird"],setup(e,{emit:a}){const l=[{url:"https://api.weibo.com/oauth2/authorize?client_id=3805380913&redirect_uri=https://www.codelife.cc/logincb&response_type=code&state=&scope=all",icon:"weibo"},{url:"https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101983660&redirect_uri=https%3A%2F%2Fwww.codelife.cc%2Flogincb&state=qq",icon:"qq"},{url:"https://github.com/login/oauth/authorize?client_id=930860aee1b7c1ce56ee&scope=user",icon:"github"}];return(e,o)=>(p(),u("div",me,[ue,f("div",fe,[(p(),u(g,null,h(l,(e=>f("span",{href:e.url,key:e.icon,onClick:l=>(e=>{window.open(e.url,"_blank","width=800,height=500"),window.addEventListener("message",(e=>{let l=e.data||{};a("loginThird",l)}),!1)})(e)},[f("img",{style:{width:"24px",height:"24px"},src:`./login/${e.icon}.svg`},null,8,he)],8,ge))),64))])]))}},[["__scopeId","data-v-e3372ab4"]]),we=e=>(v("data-v-4b99d000"),e=e(),w(),e),ye=[we((()=>f("span",{class:"brid-body"},null,-1))),we((()=>f("span",{class:"brid-claw left"},null,-1))),we((()=>f("span",{class:"brid-claw right"},null,-1)))],be=n({__name:"noPassword",props:{inputPass:{type:Boolean,defautl:!1}},setup(e){const a=e;return(e,l)=>(p(),u("div",null,[f("div",{class:C(["login-bird",{password:a.inputPass}])},ye,2)]))}},[["__scopeId","data-v-4b99d000"]]),xe=e=>(v("data-v-e8e57ad9"),e=e(),w(),e),je=xe((()=>f("div",{class:"ar",style:{margin:"-15px 0 10px 0"}},[f("a",{class:"d-main f12",target:"_blank",href:"https://codelife.cc/account/pass?type=find"},"忘记密码")],-1))),_e=xe((()=>f("div",null,[f("h2",{class:"ac f18 mb10 pt30"},"选择账号数据")],-1))),ke=xe((()=>f("p",{class:"f12 d-sub ac"}," 检测到云端数据和本地数据不一致，请选择使用其中某一项数据 ",-1))),Ve={style:{padding:"20px 40px 40px"}},Ce={class:"ac mt30"},Te=n({__name:"login",emits:["close"],setup(l,{expose:n,emit:d}){const c=E(),g=T({email:"",password:""}),h=T({loading:!1,userInfo:{},selectDataVisible:!1,dataActive:2,isInputPass:!1}),v=I(null),w=()=>{h.loading=!0;let e={};e.email=g.email,e.from="itab",e.password=ce(g.password),e.t=(new Date).getTime(),r.userLogin(e).then((e=>{200==e.code&&x(e)})).finally((()=>{h.loading=!1}))};function x(e){if(h.userInfo=e.data||{},!e.token)return;h.userInfo.token=e.token;let a=!1;h.userInfo.upTime&&(a=!0);for(let l in h.userInfo.itabAsyncTime)1!=h.userInfo.itabAsyncTime[l]&&(a=!0);a?h.selectDataVisible=!0:(c.value=h.userInfo,U.set("token",h.userInfo.token),d("close"))}function j(){c.value=h.userInfo,U.set("token",h.userInfo.token),2==h.dataActive?P(null,h.userInfo.itabAsyncTime):S(null,!0),h.selectDataVisible=!1,d("close")}return n({loginSuccess:x}),(l,r)=>(p(),u("div",null,[m(be,{inputPass:h.isInputPass},null,8,["inputPass"]),m(A(t),{onSubmit:r[4]||(r[4]=a((()=>{}),["prevent"])),size:"large",model:g,ref_key:"refLoginForm",ref:v,"label-position":"right"},{default:y((()=>[m(A(s),{prop:"email",rules:{required:!0,type:"email",message:"邮箱格式不正确"}},{default:y((()=>[m(A(B),{"prefix-icon":A(ee),maxlength:"40",modelValue:g.email,"onUpdate:modelValue":r[0]||(r[0]=e=>g.email=e),placeholder:"请输入邮箱"},null,8,["prefix-icon","modelValue"])])),_:1}),m(A(s),{prop:"password",rules:{required:!0,message:"密码不能为空"}},{default:y((()=>[m(A(B),{onKeydown:e(w,["enter"]),maxlength:"20","show-password":"","prefix-icon":A(X),type:"password",modelValue:g.password,"onUpdate:modelValue":r[1]||(r[1]=e=>g.password=e),onFocus:r[2]||(r[2]=e=>h.isInputPass=!0),onBlur:r[3]||(r[3]=e=>h.isInputPass=!1),placeholder:"请输入6-18位密码"},null,8,["onKeydown","prefix-icon","modelValue"])])),_:1}),je,m(z,{round:"",size:"large",onClick:w,type:"primary",class:"wfull",loading:h.loading},{default:y((()=>[b("立即登录")])),_:1},8,["loading"])])),_:1},8,["model"]),m(A(o),{"append-to-body":!0,width:"400px","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,modelValue:h.selectDataVisible,"onUpdate:modelValue":r[7]||(r[7]=e=>h.selectDataVisible=e)},{default:y((()=>[_e,ke,f("div",Ve,[f("p",null,[m(A(i),{modelValue:h.dataActive,"onUpdate:modelValue":r[5]||(r[5]=e=>h.dataActive=e),label:1},{default:y((()=>[b("使用本地数据")])),_:1},8,["modelValue"])]),f("p",null,[m(A(i),{modelValue:h.dataActive,"onUpdate:modelValue":r[6]||(r[6]=e=>h.dataActive=e),label:2},{default:y((()=>[b("使用云端数据")])),_:1},8,["modelValue"])]),f("p",Ce,[m(A(D),{onClick:j,class:"wfull",type:"primary"},{default:y((()=>[b("确定")])),_:1})])])])),_:1},8,["modelValue"])]))}},[["__scopeId","data-v-e8e57ad9"]]),Ie={class:"d-flex-between wfull"},Ae={__name:"register",emits:["close"],setup(e,{emit:l}){const o=E(),i=T({timer:null,loading:!1,timerText:"获取验证码",setp:0,isInputPass:!1}),n=T({email:"",username:"",password:"",verifyKey:"",source:L()}),d=I(null);const c=x((()=>!R(n.email)));x((()=>!R(n.email)));const g=()=>{R(n.email)?(i.timerText=10,i.timer=setInterval((()=>{i.timerText--,i.timerText<=0&&(clearInterval(i.timer),i.timerText="获取验证码")}),1e3),r.userSendVerifyCode({email:n.email}).then((e=>{K.success("验证码发送成功")}))):K.warning("请输入正确的邮箱")};function h(){d.value.validate((e=>{if(!e)return;i.loading=!0;let a={...n,password:ce(n.password)};a.t=(new Date).getTime(),r.userRegistry(a).then((e=>{let a=e.data||{};o.value=a,U.set("token",e.token),K.success("注册成功"),l("close")})).finally((()=>{i.loading=!1}))}))}return j((()=>{clearInterval(i.timer)})),(e,l)=>(p(),u("div",null,[m(be,{inputPass:i.isInputPass},null,8,["inputPass"]),m(A(t),{onSubmit:l[6]||(l[6]=a((()=>{}),["prevent"])),size:"default",model:n,ref_key:"refLoginForm",ref:d,"label-position":"right"},{default:y((()=>[m(A(s),{prop:"email",rules:{required:!0,type:"email",message:"邮箱格式不正确"}},{default:y((()=>[f("div",Ie,[m(A(B),{autocomplete:"off",maxlength:"40",modelValue:n.email,"onUpdate:modelValue":l[0]||(l[0]=e=>n.email=e),modelModifiers:{trim:!0},placeholder:"请输入邮箱"},null,8,["modelValue"]),m(A(D),{style:{width:"90px"},type:"primary",class:"ml5",disabled:A(c)||"获取验证码"!=i.timerText,onClick:g},{default:y((()=>[b(q(i.timerText),1)])),_:1},8,["disabled"])])])),_:1}),m(A(s),{prop:"verifyKey",rules:{required:!0,message:"验证码不能为空"}},{default:y((()=>[m(A(B),{autocomplete:"off",maxlength:"6",modelValue:n.verifyKey,"onUpdate:modelValue":l[1]||(l[1]=e=>n.verifyKey=e),placeholder:"请输入6位邮箱验证码"},null,8,["modelValue"])])),_:1}),m(A(s),{prop:"username",rules:{required:!0,message:"请输入用户名"}},{default:y((()=>[m(A(B),{autocomplete:"off",maxlength:"18",modelValue:n.username,"onUpdate:modelValue":l[2]||(l[2]=e=>n.username=e),modelModifiers:{trim:!0},placeholder:"请输入用户名"},null,8,["modelValue"])])),_:1}),m(A(s),{prop:"password",rules:{required:!0,message:"密码不能为空"}},{default:y((()=>[m(A(B),{autocomplete:"off",maxlength:"20","show-password":"",type:"password",onFocus:l[3]||(l[3]=e=>i.isInputPass=!0),onBlur:l[4]||(l[4]=e=>i.isInputPass=!1),modelValue:n.password,"onUpdate:modelValue":l[5]||(l[5]=e=>n.password=e),placeholder:"请输入8-18密码"},null,8,["modelValue"])])),_:1}),m(z,{size:"large",round:"",loading:i.loading,onClick:h,type:"primary",class:"wfull"},{default:y((()=>[b("立即注册 ")])),_:1},8,["loading"])])),_:1},8,["model"])]))}},qe=""+new URL("../login/wechat.svg",import.meta.url).href,Ee=e=>(v("data-v-8972ec3b"),e=e(),w(),e),Fe={class:"login-wechat ac"},Ue=Ee((()=>f("img",{class:"wechat-logo",src:qe},null,-1))),ze=Ee((()=>f("p",null,"微信登录",-1))),Pe={class:"wechat-qrcode"},Se={class:"wechat-loading d-flex-center"},Be={class:"f14"},De={class:"d-icon el-icon is-loading f22"},Le=Ee((()=>f("p",{class:"ac mb20"},[b(" 打开微信 "),f("b",{calss:"b"},"扫一扫"),b("， "),f("b",{calss:"b"},"关注公众号"),b("后即可登录/注册 ")],-1))),Re=Ee((()=>f("p",{class:"ac mt20 f16"},[f("b",null,"绑定邮箱")],-1))),Ke={class:"login-tabs d-flex ac mb10"},Me=["onClick"],He={class:"ar",style:{margin:"-15px 0 10px 0"}},Qe={key:0,class:"d-main f12",target:"_blank",href:"https://codelife.cc/account/pass?type=find"},Oe={name:"wechat-login"},Ye=n(Object.assign(Oe,{emits:["loginThird"],setup(o,{emit:i}){const r=I([{name:"绑定老用户",key:"old"},{name:"绑定新用户",key:"new"}]),n=T({loading:!1,isQRcodeExpire:!1}),d=T({img:"",ticket:""}),c=I(!1),v=T({email:"",password:"",wechatOpenid:"",userType:"old"});let w=null,x=0;function V(){w&&clearInterval(w),n.isQRcodeExpire=!1,w=setInterval((()=>{d.ticket&&(x+=2,x>60&&(clearInterval(w),x=0,n.isQRcodeExpire=!0),((e={})=>F.get("/user/wechatLogin/info",{params:e}))({ticket:d.ticket}).then((e=>{e.data.success&&(clearInterval(w),e.token?i("loginThird",e):(v.wechatOpenid=e.data.wechat_openid,O.confirm("是否绑定邮箱?",{confirmButtonText:"是的",cancelButtonText:"不绑定",center:!0}).then((()=>{c.value=!0})).catch((()=>{E("skip")}))))})))}),2e3),n.loading=!0,F.get("/user/wechat/qrcode").then((e=>{let a=e.data||{};d.img=a.img,d.ticket=a.ticket})).finally((()=>{n.loading=!1}))}V(),j((()=>{w&&clearInterval(w)}));const E=e=>{n.loading=!0;let a={...v};a.from="wechat","skip"==e?(a.email="",a.userType="skip",a.password=""):a.password=ce(v.password),((e={})=>F.post("/user/wechatBindEmail",e))(a).then((e=>{200==e.code&&i("loginThird",e)})).finally((()=>{n.loading=!1}))};return(o,i)=>(p(),u("div",Fe,[_(f("span",null,[Ue,ze,f("div",Pe,[_(f("span",{onClick:i[0]||(i[0]=e=>V()),class:"wechat-qrcode-refresh d-icon"},[m(A(M))],512),[[l,n.isQRcodeExpire]]),_(f("span",Se,[f("span",Be,[f("i",De,[m(A(H))]),b(" 加载中")])],512),[[l,n.loading]]),m(A(Q),{class:"wechat-ticket",alt:"加载二维码",src:d.img},null,8,["src"])]),Le],512),[[l,!c.value]]),_(f("span",null,[Re,f("ul",Ke,[(p(!0),u(g,null,h(r.value,(e=>(p(),u("li",{class:C(["d-cell",{active:v.userType===e.key}]),key:e.key,onClick:a=>v.userType=e.key},q(e.name),11,Me)))),128))]),m(A(t),{onSubmit:i[3]||(i[3]=a((()=>{}),["prevent"])),size:"large",model:v,ref:"refLoginForm","label-position":"right"},{default:y((()=>[m(A(s),{prop:"email",rules:{required:!0,type:"email",message:"邮箱格式不正确"}},{default:y((()=>[m(A(B),{"prefix-icon":A(ee),maxlength:"40",modelValue:v.email,"onUpdate:modelValue":i[1]||(i[1]=e=>v.email=e),placeholder:"请输入邮箱"},null,8,["prefix-icon","modelValue"])])),_:1}),m(A(s),{prop:"password",rules:{required:!0,message:"密码不能为空"}},{default:y((()=>[m(A(B),{onKeydown:e(E,["enter"]),maxlength:"20","show-password":"","prefix-icon":A(X),type:"password",modelValue:v.password,"onUpdate:modelValue":i[2]||(i[2]=e=>v.password=e),placeholder:"请输入6-18位密码"},null,8,["onKeydown","prefix-icon","modelValue"])])),_:1}),f("div",He,["old"==v.userType?(p(),u("a",Qe,"忘记密码")):k("",!0)]),m(A(D),{round:"",onClick:E,type:"primary",class:"mt10 mb20 wfull",loading:n.loading},{default:y((()=>[b("立即登录")])),_:1},8,["loading"])])),_:1},8,["model"])],512),[[l,c.value]])]))}}),[["__scopeId","data-v-8972ec3b"]]),$e={class:"app-login hfull"},Ge={class:"login-tabs d-flex b ac mb10"},Ne=["onClick"],Xe={class:"login-tip ac"},Ze={key:0,class:"mt5"},Je={class:"pl30 pr30 mb30"},We={class:"ac mt5"},ea=n({__name:"index",props:{type:String},setup(e){const a=e,s=V(),t=I(a.type),i=I(null),r=I([{name:"扫码登录",key:"scan"},{name:"其他方式登录",key:"other"}]),n=I("scan");const d=e=>{i.value.loginSuccess(e)};function v(){s.onClose()}return(e,a)=>(p(),c(A(o),{top:"10vh",class:"login-dialog","close-on-press-escape":!1,"close-on-click-modal":!1,width:"420px"},{default:y((()=>[f("div",$e,[f("ul",Ge,[(p(!0),u(g,null,h(r.value,(e=>(p(),u("li",{class:C(["d-cell",{active:n.value===e.key}]),key:e.key,onClick:a=>n.value=e.key},q(e.name),11,Ne)))),128))]),_(m(Ye,{onLoginThird:d},null,512),[[l,"scan"==n.value]]),_(f("span",null,[f("div",Xe,["firefox"==A(L)()?(p(),u("p",Ze," 火狐暂不支持第三方登录 ")):k("",!0)]),f("div",Je,[_(m(Te,{ref_key:"loginRef",ref:i,onClose:v},null,512),[[l,"login"==t.value]]),_(m(Ae,{onClose:v},null,512),[[l,"reg"==t.value]]),m(ve,{onLoginThird:d}),f("div",We,[b(q("login"==t.value?"还没有账号":" 已有账号？")+" ",1),m(A(D),{text:"",onClick:a[0]||(a[0]=e=>{return a="reg"==t.value?"login":"reg",void(t.value=a);var a})},{default:y((()=>[b("立即"+q("login"==t.value?"注册":"登录"),1)])),_:1})])])],512),[[l,"other"==n.value]])])])),_:1}))}},[["__scopeId","data-v-43f07336"]]);export{ea as default};