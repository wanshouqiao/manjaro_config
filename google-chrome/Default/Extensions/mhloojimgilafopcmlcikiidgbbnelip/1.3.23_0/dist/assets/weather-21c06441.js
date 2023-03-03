import{e as t}from"./index-ea316b3a.js";import{u as e}from"./icon-1216e893.js";import{g as a,a as o}from"./weatherApi-ad490135.js";import{getLocation as i}from"./baseApi-346658f0.js";import r from"./indexdb-76ab5eed.js";import{d as s}from"./dayjs.min-39fed9c4.js";import"./reactivity.esm-bundler-72867dac.js";import"./runtime-core.esm-bundler-77b13fca.js";import"./preload-helper-706a0e5c.js";import"./local-82fd2aea.js";import"./week-7975c4f4.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./axios-a986ab8c.js";import"./baseRequest-a74f719c.js";import"./version-62e2ec50.js";import"./_commonjsHelpers-e5557959.js";import"./localforage-5beca937.js";import"./_commonjs-dynamic-modules-3e972b61.js";const m=e(),n=async(e,o,n=!0)=>{let l=await r.getItem("weather");if(!o&&!l.isExp)return l.data||{};let u=e;if(!u||!u.id){const{coords:e}=t();let a=null;e.value.longitude&&(a=`${e.value.longitude},${e.value.latitude}`);let o=await i({lang:"cn",coords:a});if(1==o.status)return;u=o.data||{}}let d={location:u.id},p=m.value;if(p=(await a(d)).data,"ok"!=p.status)return;let c={adm1:u.adm1,adm2:u.adm2,name:u.name,id:u.id,ip:u.ip,country:u.country,location:u.location,isAuto:!u};return p.location=c,p.moment=(({rise:t,set:e})=>{if(!t||!e)return"d";let a=s().format("YYYY-MM-DD");t=new Date(`${a} ${t}`).getTime(),e=new Date(`${a} ${e}`).getTime();let o=s().valueOf();return o>t&&o<e?"d":"n"})(p.sun||{}),p.updateTime=s().valueOf(),e||r.set("weather-default-city",p,18e5),n&&(r.set("weather",p,12e5),m.value={daily_forecast:p.daily_forecast,location:p.location,now:p.now,moment:p.moment,air_now_city:p.air_now_city}),p},l=async t=>{let e=await r.getItem("weather24H");if(!t&&!e.isExp)return e.data||[];let a={location:m.value.location.id,unit:"m"},i=await o(a)||{};return r.set("weather24H",i,1),i};export{n as getWeather,l as getWeather24H};