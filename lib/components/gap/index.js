!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t(((e=e||self).index=e.index||{},e.index.tsx={}),e.React)}(this,(function(e,t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,function(e){if(e&&"undefined"!=typeof window&&"undefined"!=typeof document&&void 0!==document.head){var t=function(e){var t=5381,n=e.length-1,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".split("");if("string"==typeof e)for(;n>-1;n--)t+=(t<<5)+e.charCodeAt(n);else for(;n>-1;n--)t+=(t<<5)+e[n];var l=2147483647&t,o="";do{o+=r[63&l]}while(l>>=6);return o}(e);if(!document.getElementById(t)){var n=document.createElement("style");n.id=t,n.innerHTML=e,document.head.appendChild(n)}}}(void 0);var n={};const r=e=>{const{style:r,className:l,children:o}=e,i=
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n}(e,["style","className","children"]),a=function(e){const t=[],n=e=>{if(e)if(Array.isArray(e))for(let t=0;t<e.length;t++)n(e[t]);else e&&t.push(e)};return n(e),t.join(" ")}(l),s=function(e){const t={},n=e=>{if(e&&Array.isArray(e))for(let t=0;t<e.length;t++)n(e[t]);else e&&Object.assign(t,e)};return n(e),t}(r),c=[n.container,a].filter(Boolean).join(" ").trim();return t.createElement("div",Object.assign({className:c,style:s},i),e.children)},l=e=>{let[n,l,o,i]=[0,0,0,0];const{ltrb:a,all:s,vertical:c,horizontal:d,type:f="margin",children:p}=e;if(!p)return null;s&&(n=l=o=i=s),a&&(n=a[0],o=a[1],l=a[2],i=a[3]),c&&(n=l=c),d&&(o=i=d),null!=e.left&&(n=e.left),null!=e.top&&(o=e.top),null!=e.right&&(l=e.right),null!=e.bottom&&(i=e.bottom);const u="margin"===f?{marginTop:`${4*o}px`,marginBottom:`${4*i}px`,marginLeft:`${4*n}px`,marginRight:`${4*l}px`}:{paddingTop:`${4*o}px`,paddingBottom:`${4*i}px`,paddingLeft:`${4*n}px`,paddingRight:`${4*l}px`};return Array.isArray(p)?t.createElement(t.Fragment,null,p.map((n,l)=>n&&t.createElement(r,{key:l,className:[e.className],style:[u,e.style]},n))):t.createElement(r,{className:[e.className],style:[u,e.style]},p)};e.Gap=l,e.default=l,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
