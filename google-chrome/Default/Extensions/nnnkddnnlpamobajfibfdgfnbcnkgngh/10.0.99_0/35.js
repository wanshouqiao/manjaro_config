(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{399:function(e,s,t){"use strict";t.d(s,"a",(function(){return i})),t.d(s,"b",(function(){return n}));t(11),t(14);class i{constructor(){this._caches={},this._setCaches=e=>(...s)=>{this._caches[e]=s}}}const o=[],n=e=>new Proxy(e,{set:(e,s,t)=>null===t?(e[s]=t,!0):"function"==typeof e[s]?(console.warn("失败：重复注册"),!0):(e[s]=t,o.includes(s)&&delete e._caches[s],e._caches.hasOwnProperty(s)&&(e[s](...e._caches[s]),delete e._caches[s]),!0),get:(e,s)=>"function"==typeof e[s]?e[s]:e._setCaches(s)})},484:function(e,s,t){"use strict";t.r(s),t.d(s,"pluginStore",(function(){return u}));t(11),t(14),t(8);var i=t(4),o=t(75),n=t(399);class r extends n.a{opened(e){}}const a=Object(n.b)(new r);var c=function(e,s,t,i){var o,n=arguments.length,r=n<3?s:null===i?i=Object.getOwnPropertyDescriptor(s,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,s,t,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(s,t,r):o(s,t))||r);return n>3&&r&&Object.defineProperty(s,t,r),r};class p{constructor(){this.pluginsMap={"infinity://weather":"side-weather","infinity://todos":"side-todos","infinity://notes":"side-notes","infinity://history":"side-history","infinity://bookmarks":"side-bookmarks","infinity://extension":"side-extension","infinity://chrome-apps":"chrome-apps","infinity://wallpaper":"wallpaper","infinity://settings":"side-profile",search:"side-search",profile:"side-profile",editIcon:"side-editicon","side-tutorial":"side-tutorial"},this.pluginsTags={"side-weather":!1,"side-todos":!1,"side-notes":!1,"side-history":!1,"side-bookmarks":!1,"side-extension":!1,"chrome-apps":!1,"side-profile":!1,"side-search":!1,"side-editicon":!1,"side-tutorial":!1,wallpaper:!1},this.pluginViews=[],this.focusRepair=!1,Object(i.h)(()=>this.pluginViews.map(e=>e),([e])=>{a.opened(e)})}initDom(e){this.pluginsTags[e]=!0}async show(e){if(this.pluginViews.includes(e))return;const s=this.pluginsMap[e];if(!1===this.pluginsTags[s])try{await this.requestPermission(s),Object(i.i)(()=>{this.pluginsTags[s]=!0,this.pluginViews.push(e)})}catch(e){}else this.pluginViews.push(e)}async showRepair(){this.focusRepair=!0,this.show("profile"),localStorage.setItem("user-checkout-old-data","true")}blurRepair(){this.focusRepair=!1}requestPermission(e){switch(e){case"side-bookmarks":return o.a.request(["bookmarks"],["chrome://favicon/"]);case"side-extension":case"chrome-apps":return o.a.request(["management"]);case"side-history":return o.a.request(["history"],["chrome://favicon/"])}}hideLast(){const e=this.pluginViews.pop();return 0===this.pluginViews.length&&document.getElementsByTagName("newtab-main")[0].shadowRoot.querySelector(".swiper-content").style.setProperty("transform","none"),e}}c([i.g],p.prototype,"pluginsTags",void 0),c([i.b],p.prototype,"initDom",null),c([i.g],p.prototype,"pluginViews",void 0),c([i.g],p.prototype,"focusRepair",void 0),c([i.b],p.prototype,"show",null),c([i.b],p.prototype,"showRepair",null),c([i.b],p.prototype,"blurRepair",null),c([i.b],p.prototype,"hideLast",null);const u=new p}}]);