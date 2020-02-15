!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t(((e=e||self).index=e.index||{},e.index.tsx={}),e.React)}(this,(function(e,t){"use strict";function n(e){if(e&&"undefined"!=typeof window&&"undefined"!=typeof document&&void 0!==document.head){var t=function(e){var t=5381,n=e.length-1,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".split("");if("string"==typeof e)for(;n>-1;n--)t+=(t<<5)+e.charCodeAt(n);else for(;n>-1;n--)t+=(t<<5)+e[n];var o=2147483647&t,i="";do{i+=r[63&o]}while(o>>=6);return i}(e);if(!document.getElementById(t)){var n=document.createElement("style");return n.id=t,n.innerHTML=e,document.head.appendChild(n),e}}}t=t&&t.hasOwnProperty("default")?t.default:t,n("._icon_1c7va_1 {\n  position: relative;\n}\n");var r="_icon_1c7va_1";
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
  ***************************************************************************** */n(void 0);var o={};const i=e=>{const{style:n,className:r,children:i}=e,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["style","className","children"]),a=function(e){const t=[],n=e=>{if(e)if(Array.isArray(e))for(let t=0;t<e.length;t++)n(e[t]);else e&&t.push(e)};return n(e),t.join(" ")}(r),l=function(e){const t={},n=e=>{if(e&&Array.isArray(e))for(let t=0;t<e.length;t++)n(e[t]);else e&&Object.assign(t,e)};return n(e),t}(n),s=[o.container,a].filter(Boolean).join(" ").trim();return t.createElement("div",Object.assign({className:s,style:l},c),e.children)},c=e=>{const{name:n,size:o="1rem",style:c,color:a="black",className:l}=e;return t.createElement(i,{className:[r,l],style:c},t.createElement("i",{style:{color:a,fontSize:o},className:`icon-${n}`}))};e.Icon=c,e.default=c,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
