(()=>{var t={157:()=>{const t=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],e={startBtn:document.querySelector('[data-action="start"]'),stopBtn:document.querySelector('[data-action="stop"]'),bodyEl:document.querySelector("body")},{startBtn:o,stopBtn:r,bodyEl:n}=e;o.addEventListener("click",(function(){c||(c=!0,intervalId=setInterval((()=>{console.log(t[a]),a==l?a=0:(n.style.backgroundColor=t[d([0],t.length-1)],o.style.color=t[d([0],t.length-1)])}),1e3))})),r.addEventListener("click",(function(){clearInterval(intervalId),c=!1}));let a=0,l=t.length-0,c=!1;const d=(t,e)=>Math.floor(Math.random()*(e-t+1)+t)}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,o),a.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";o(157)})()})();