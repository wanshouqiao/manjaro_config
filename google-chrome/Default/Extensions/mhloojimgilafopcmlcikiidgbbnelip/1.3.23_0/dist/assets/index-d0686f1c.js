import{c as e}from"./reactivity.esm-bundler-72867dac.js";const t=100,o=600,n={beforeMount(n,r){const a=r.value,{interval:s=t,delay:d=o}=e(a)?{}:a;let i,l;const u=()=>e(a)?a():a.handler(),v=()=>{l&&(clearTimeout(l),l=void 0),i&&(clearInterval(i),i=void 0)};n.addEventListener("mousedown",(e=>{0===e.button&&(v(),u(),document.addEventListener("mouseup",(()=>v()),{once:!0}),l=setTimeout((()=>{i=setInterval((()=>{u()}),s)}),d))}))}};export{n as v};
