import i from"./indexdb-76ab5eed.js";import{b as t}from"./itab-12f4628c.js";import"./localforage-5beca937.js";import"./_commonjsHelpers-e5557959.js";import"./_commonjs-dynamic-modules-3e972b61.js";import"./dayjs.min-39fed9c4.js";import"./baseRequest-a74f719c.js";import"./preload-helper-706a0e5c.js";import"./local-82fd2aea.js";import"./index-ea316b3a.js";import"./reactivity.esm-bundler-72867dac.js";import"./runtime-core.esm-bundler-77b13fca.js";import"./axios-a986ab8c.js";import"./version-62e2ec50.js";const o=async()=>{let o=await i.getItem("defaultUnionConfig"),s=o.data||[];if(!o.isExp)return!1;if(o.isExp){s=(await t()).data||[],i.set("defaultUnionConfig",s,1728e5)}return s};export{o as default};