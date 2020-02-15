function __any_css_style_inject__(css) {
    if (!css)
        return;
    // 环境检查
    if (typeof (window) == 'undefined')
        return;
    if (typeof (document) == 'undefined')
        return;
    if (typeof (document.head) == 'undefined')
        return;
    function hash(input) {
        var hash = 5381;
        var i = input.length - 1;
        var I64BIT_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');
        if (typeof input == 'string') {
            for (; i > -1; i--)
                hash += (hash << 5) + input.charCodeAt(i);
        }
        else {
            for (; i > -1; i--)
                hash += (hash << 5) + input[i];
        }
        var value = hash & 0x7FFFFFFF;
        var retValue = '';
        do {
            retValue += I64BIT_TABLE[value & 0x3F];
        } while (value >>= 6);
        return retValue;
    }
    // 计算内容哈希
    var documentID = hash(css);
    if (document.getElementById(documentID))
        return;
    // 创建 style
    var style = document.createElement('style');
    style.id = documentID;
    style.innerHTML = css;
    // 插入 dom
    document.head.appendChild(style);
    return css;
}

import React from 'react';

__any_css_style_inject__("._title_gzrxe_1 {\n  color: black;\n  background-color: transparent;\n}\n._title_gzrxe_1 ._subtitle_gzrxe_5 {\n  opacity: 0.5;\n  color: black;\n}\n._level-1_gzrxe_9 {\n  font-size: 40px;\n  font-weight: bold;\n}\n._level-1_gzrxe_9 ._subtitle_gzrxe_5 {\n  font-size: 26px;\n  font-weight: normal;\n}\n._level-2_gzrxe_17 {\n  font-size: 32px;\n  font-weight: bold;\n}\n._level-2_gzrxe_17 ._subtitle_gzrxe_5 {\n  font-size: 20px;\n  font-weight: normal;\n}\n._level-3_gzrxe_25 {\n  font-size: 28px;\n  font-weight: bold;\n}\n._level-3_gzrxe_25 ._subtitle_gzrxe_5 {\n  font-size: 16px;\n  font-weight: normal;\n}\n._level-4_gzrxe_33 {\n  font-size: 20px;\n  font-weight: bold;\n}\n._level-4_gzrxe_33 ._subtitle_gzrxe_5 {\n  display: none;\n  font-weight: normal;\n}\n._level-5_gzrxe_41 {\n  font-size: 16px;\n  font-weight: bold;\n}\n._level-5_gzrxe_41 ._subtitle_gzrxe_5 {\n  display: none;\n  font-weight: normal;\n}\n._level-6_gzrxe_49 {\n  font-size: 14px;\n  font-weight: bold;\n}\n._level-6_gzrxe_49 ._subtitle_gzrxe_5 {\n  display: none;\n  font-weight: normal;\n}\n");
        var style = {"title":"_title_gzrxe_1","subtitle":"_subtitle_gzrxe_5","level-1":"_level-1_gzrxe_9","level-2":"_level-2_gzrxe_17","level-3":"_level-3_gzrxe_25","level-4":"_level-4_gzrxe_33","level-5":"_level-5_gzrxe_41","level-6":"_level-6_gzrxe_49","level1":"_level-1_gzrxe_9","level2":"_level-2_gzrxe_17","level3":"_level-3_gzrxe_25","level4":"_level-4_gzrxe_33","level5":"_level-5_gzrxe_41","level6":"_level-6_gzrxe_49"};

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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

__any_css_style_inject__(undefined);
        var lessstyle = {};

// 垃圾实现
function parseStyle(style) {
    const styleObject = {};
    const parse = (style) => {
        // 数组
        if (style && Array.isArray(style)) {
            for (let index = 0; index < style.length; index++) {
                parse(style[index]);
            }
        }
        else {
            style && Object.assign(styleObject, style);
        }
    };
    parse(style);
    return styleObject;
}
// 垃圾实现
function parseClassName(className) {
    const classNameArray = [];
    const parse = (className) => {
        if (!className) {
            return;
        }
        // 数组
        if (Array.isArray(className)) {
            for (let index = 0; index < className.length; index++) {
                parse(className[index]);
            }
        }
        else {
            className && classNameArray.push(className);
        }
    };
    parse(className);
    return classNameArray.join(' ');
}
const Container = props => {
    const { style, className, children } = props, attributes = __rest(props, ["style", "className", "children"]);
    const classNames = parseClassName(className);
    const styles = parseStyle(style);
    const classstring = [lessstyle.container, classNames].filter(Boolean).join(' ').trim();
    return (React.createElement("div", Object.assign({ className: classstring, style: styles }, attributes), props.children));
};

const Title = props => {
    const { level = 1, title, subtitle } = props;
    return (React.createElement(Container, { className: [style.title, style[`level-${level}`], props.className], style: props.style },
        React.createElement("div", null, title),
        React.createElement("div", { className: style.subtitle }, subtitle)));
};

export default Title;
export { Title };
//# sourceMappingURL=index.js.map
