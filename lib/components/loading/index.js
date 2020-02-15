!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],n):n(((e=e||self).index=e.index||{},e.index.tsx={}),e.React)}(this,(function(e,n){"use strict";function t(e){if(e&&"undefined"!=typeof window&&"undefined"!=typeof document&&void 0!==document.head){var n=function(e){var n=5381,t=e.length-1,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".split("");if("string"==typeof e)for(;t>-1;t--)n+=(n<<5)+e.charCodeAt(t);else for(;t>-1;t--)n+=(n<<5)+e[t];var r=2147483647&n,o="";do{o+=i[63&r]}while(r>>=6);return o}(e);if(!document.getElementById(n)){var t=document.createElement("style");return t.id=n,t.innerHTML=e,document.head.appendChild(t),e}}}n=n&&n.hasOwnProperty("default")?n.default:n,t("._loading_1iu2l_1 {\n  position: relative;\n}\n._loadingMark_1iu2l_4 {\n  z-index: 1;\n  display: block;\n  position: relative;\n}\n");var i={loading:"_loading_1iu2l_1",loadingMark:"_loadingMark_1iu2l_4"};
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
    ***************************************************************************** */t(void 0);var r={};const o=e=>{const{style:t,className:i,children:o}=e,a=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)n.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(t[i[r]]=e[i[r]])}return t}(e,["style","className","children"]),l=function(e){const n=[],t=e=>{if(e)if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else e&&n.push(e)};return t(e),n.join(" ")}(i),d=function(e){const n={},t=e=>{if(e&&Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else e&&Object.assign(n,e)};return t(e),n}(t),s=[r.container,l].filter(Boolean).join(" ").trim();return n.createElement("div",Object.assign({className:s,style:d},a),e.children)},a=e=>n.createElement(o,{className:[i.loading,e.className],style:e.style},e.loading&&n.createElement("div",{className:i.loadingMark},"加载中..."),n.createElement("div",{className:i.context},e.children));e.Loading=a,e.default=a,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
