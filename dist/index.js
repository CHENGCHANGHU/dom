!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Tree=t():e.Tree=t()}("undefined"==typeof self?this:self,(()=>(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e){if(!e)return;if(e instanceof HTMLElement)return e;if(Array.isArray(e))return e.map((e=>r(e)));const{tag:t,text:n,html:o,children:s,attributes:c,events:a,lifecycle:i}={lifecycle:{},...e},{created:l}=i||{};if(!t)return document.createElement("template");let f=null;return f=["svg","path"].includes(t)?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t),o&&(f.innerHTML=o),(n||0===n||""===n)&&(f.innerText=n),c&&Object.keys(c).forEach((e=>{"classes"===e&&Array.isArray(c[e])?f.className=c[e].join(" "):f.setAttribute("classes"===e?"class":e,c[e])})),a&&Object.keys(a).forEach((t=>{f.addEventListener(t,a[t].bind(e))})),s&&f.append(...s.filter(Boolean).map(r)),l&&"function"==typeof l&&l(f,e),f}function n(e){if(!e)return"";if(e instanceof HTMLElement)return e.outerHTML;if(Array.isArray(e))return e.map((e=>n(e))).join("\n");const{tag:t,text:r,html:o,children:s,attributes:c,depth:a}={depth:0,...e};if(!t)return"";const i="  ",l=Array(a).fill(i).join("");let f=`${l}<${t} `;return c&&Object.keys(c).forEach((e=>{"classes"===e&&Array.isArray(c[e])?f+=`class="${c[e].join(" ")}" `:f+=`${"classes"===e?"class":e}="${c[e]}" `})),f=f.slice(0,-1),f+=">\n",o?f+=l+i+o+"\n":r||0===r||""===r?f+=l+i+r+"\n":s&&s.forEach((e=>{f+=n({...e,depth:a+1})+"\n"})),f+=l+`</${t}>`,f}e.r(t),e.d(t,{createElement:()=>r,createHTMLString:()=>n,query:()=>o});const o=(()=>{const e=new Map;return t=>{if(!e.has(t)){const r=document.querySelector(t);if(!r)return null;e.set(t,r)}return e.get(t)}})();return t})()));