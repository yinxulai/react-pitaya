!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t(((e=e||self).index=e.index||{},e.index.tsx={}),e.React)}(this,(function(e,t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,function(e){if(e&&"undefined"!=typeof window&&"undefined"!=typeof document&&void 0!==document.head){var t=function(e){var t=5381,n=e.length-1,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".split("");if("string"==typeof e)for(;n>-1;n--)t+=(t<<5)+e.charCodeAt(n);else for(;n>-1;n--)t+=(t<<5)+e[n];var o=2147483647&t,i="";do{i+=r[63&o]}while(o>>=6);return i}(e);if(!document.getElementById(t)){var n=document.createElement("style");n.id=t,n.innerHTML=e,document.head.appendChild(n)}}}(void 0);var n={};const r=e=>{const{style:r,className:o,children:i}=e,f=
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
function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["style","className","children"]),l=function(e){const t=[],n=e=>{if(e)if(Array.isArray(e))for(let t=0;t<e.length;t++)n(e[t]);else e&&t.push(e)};return n(e),t.join(" ")}(o),a=function(e){const t={},n=e=>{if(e&&Array.isArray(e))for(let t=0;t<e.length;t++)n(e[t]);else e&&Object.assign(t,e)};return n(e),t}(r),c=[n.container,l].filter(Boolean).join(" ").trim();return t.createElement("div",Object.assign({className:c,style:a},f),e.children)};e.Container=r,e.default=r,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
