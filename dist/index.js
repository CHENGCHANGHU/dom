!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Difference=t():e.Difference=t()}("undefined"==typeof self?this:self,(()=>(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(e){if(e){if(e instanceof HTMLElement)return e;if(Array.isArray(e))return e.map((function(e){return n(e)}));var t=e.tag,o=e.text,a=e.html,i=e.children,u=e.attributes,c=e.events;if(!t)return document.createElement("template");var f,l=null;return l=["svg","path"].includes(t)?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t),a&&(l.innerHTML=a),(o||0===o||""===o)&&(l.innerText=o),u&&Object.keys(u).forEach((function(e){"classes"===e&&Array.isArray(u[e])?l.className=u[e].join(" "):l.setAttribute("classes"===e?"class":e,u[e])})),c&&Object.keys(c).forEach((function(t){l.addEventListener(t,c[t].bind(e))})),i&&(f=l).append.apply(f,function(e){if(Array.isArray(e))return r(e)}(s=i.filter(Boolean).map(n))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(s)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(s)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l}var s}e.r(t),e.d(t,{createElement:()=>n,query:()=>a});var o,a=(o=new Map,function(e){if(!o.has(e)){var t=document.querySelector(e);if(!t)return null;o.set(e,t)}return o.get(e)});return t})()));