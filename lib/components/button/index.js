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

__any_css_style_inject__("._button_1q9fy_1 {\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  transition: 0.1s;\n  overflow: hidden;\n  border-radius: 4px;\n  color: white;\n  background-color: #351eff;\n}\n._button_1q9fy_1 ._realButton_1q9fy_11 {\n  width: 100%;\n  border: none;\n  outline: none;\n  color: inherit;\n  cursor: inherit;\n  font-size: inherit;\n  text-align: center;\n  font-weight: inherit;\n  display: inline-block;\n  padding: 0.5em 2em;\n  background-color: transparent;\n}\n._button_1q9fy_1._link_1q9fy_24 {\n  color: #351eff;\n  background-color: transparent;\n  box-shadow: none !important;\n}\n._button_1q9fy_1._small_1q9fy_29 {\n  font-size: 12px;\n  font-weight: 200;\n}\n._button_1q9fy_1._large_1q9fy_33 {\n  font-size: 16px;\n  font-weight: 600;\n}\n._button_1q9fy_1._normal_1q9fy_37 {\n  font-size: 14px;\n  font-weight: 400;\n}\n._button_1q9fy_1._normal_1q9fy_37 {\n  top: -2px;\n  transform: scale(1.02, 1.02);\n  box-shadow: 0px 8px 8px -2px rgba(0, 0, 0, 0.3);\n}\n._button_1q9fy_1._loading_1q9fy_46 {\n  top: 0px;\n  transform: scale(1, 1);\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.33333333);\n}\n._button_1q9fy_1._disable_1q9fy_51 {\n  top: 0px;\n  transform: scale(1, 1);\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.33333333);\n}\n._button_1q9fy_1:active {\n  top: 0px;\n  transform: scale(1, 1);\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.33333333);\n}\n");
        var style = {"button":"_button_1q9fy_1","realButton":"_realButton_1q9fy_11","link":"_link_1q9fy_24","small":"_small_1q9fy_29","large":"_large_1q9fy_33","normal":"_normal_1q9fy_37","loading":"_loading_1q9fy_46","disable":"_disable_1q9fy_51"};

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

const Button = props => {
    const [status, setStatus] = React.useState('normal');
    const { size = 'normal', type = 'normal', disable } = props;
    const children = status === 'loading' ? '处理中...' : props.children;
    const handleClick = () => {
        // loading disable 都无法点击
        if (status !== 'normal') {
            return;
        }
        if (!props.onClick) {
            return;
        }
        const result = props.onClick();
        if (result instanceof Promise) {
            setStatus('loading');
            result.finally(() => setStatus('normal'));
            return result;
        }
    };
    return (React.createElement(Container, { style: [props.style], className: [style.button, style[type], style[size], style[status], props.className] },
        React.createElement("button", { type: props.htmlType, disabled: disable, className: [style.realButton, style[type]].join(' '), onClick: handleClick }, children)));
};

export default Button;
export { Button };
//# sourceMappingURL=index.js.map
