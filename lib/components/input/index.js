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

__any_css_style_inject__("._input_1te7y_1 {\n  margin: 1px;\n  transition: 0.2s;\n  font-size: 12px;\n  border-radius: 4px;\n  position: relative;\n  padding: 0.2em 0.3em;\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.33333333);\n  background-color: rgba(0, 0, 0, 0.01);\n  border: 2px solid rgba(255, 255, 255, 0);\n  box-shadow: 0px 0px 0px 1px rgba(39, 15, 255, 0.1) inset;\n}\n._input_1te7y_1:hover {\n  box-shadow: 0px 3px 3px -1px rgba(0, 0, 0, 0.31666667);\n  border: 2px solid #351eff;\n}\n._input_1te7y_1._small_1te7y_17 {\n  font-size: 12px;\n  font-weight: 200;\n}\n._input_1te7y_1._large_1te7y_21 {\n  font-size: 16px;\n  font-weight: 600;\n}\n._input_1te7y_1._default_1te7y_25 {\n  font-size: 14px;\n  font-weight: 400;\n}\n._realInput_1te7y_29 {\n  width: 100%;\n  border: none;\n  outline: none;\n  padding: 0.5em;\n  font-size: inherit;\n  letter-spacing: 1px;\n  background-color: transparent;\n}\n._realInput_1te7y_29::-webkit-input-placeholder {\n  opacity: 0.4;\n  font-size: inherit;\n  font-weight: inherit;\n}\n._realInput_1te7y_29::-moz-placeholder {\n  opacity: 0.4;\n  font-size: inherit;\n  font-weight: inherit;\n}\n._realInput_1te7y_29:-ms-input-placeholder {\n  opacity: 0.4;\n  font-size: inherit;\n  font-weight: inherit;\n}\n._realInput_1te7y_29::-ms-input-placeholder {\n  opacity: 0.4;\n  font-size: inherit;\n  font-weight: inherit;\n}\n.realInput::-webkit-input-placeholder {\n  opacity: 0.4;\n  font-size: inherit;\n  font-weight: inherit;\n}\n.realInput::-moz-placeholder {\n  opacity: 0.4;\n  font-size: inherit;\n  font-weight: inherit;\n}\n.realInput:-ms-input-placeholder {\n  opacity: 0.4;\n  font-size: inherit;\n  font-weight: inherit;\n}\n.realInput::-ms-input-placeholder {\n  opacity: 0.4;\n  font-size: inherit;\n  font-weight: inherit;\n}\n._realInput_1te7y_29::placeholder {\n  opacity: 0.4;\n  font-size: inherit;\n  font-weight: inherit;\n}\n._tip_1te7y_43 {\n  top: 0;\n  right: 0;\n  height: 100%;\n  padding: 2px;\n  font-size: inherit;\n  position: absolute;\n}\n._tip_1te7y_43 ._tipIcon_1te7y_51 {\n  z-index: 1;\n  padding: 2px;\n  height: 100%;\n  display: flex;\n  font-size: 0.8em;\n  border-radius: 50px;\n  align-items: flex-end;\n  flex-direction: column;\n  justify-content: center;\n  cursor: pointer;\n}\n._tip_1te7y_43 ._tipIcon_1te7y_51._warning_1te7y_63 {\n  color: #faad14;\n}\n._tip_1te7y_43 ._tipIcon_1te7y_51._correct_1te7y_66 {\n  color: #52c41a;\n}\n._tip_1te7y_43 ._tipIcon_1te7y_51._normal_1te7y_69 {\n  color: #351eff;\n}\n._tip_1te7y_43 ._tipIcon_1te7y_51._error_1te7y_72 {\n  color: #f5222d;\n}\n._tip_1te7y_43 ._tipMessage_1te7y_75 {\n  top: 0.5em;\n  right: 0;\n  z-index: 1;\n  display: none;\n  font-size: 0.9em;\n  padding: 4px 6px;\n  position: relative;\n  border-radius: 4px;\n  font-weight: normal;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n._tip_1te7y_43:hover ._tipMessage_1te7y_75 {\n  display: inline;\n}\n");
        var styles = {"input":"_input_1te7y_1","small":"_small_1te7y_17","large":"_large_1te7y_21","default":"_default_1te7y_25","realInput":"_realInput_1te7y_29","tip":"_tip_1te7y_43","tipIcon":"_tipIcon_1te7y_51","warning":"_warning_1te7y_63","correct":"_correct_1te7y_66","normal":"_normal_1te7y_69","error":"_error_1te7y_72","tipMessage":"_tipMessage_1te7y_75"};

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

const Tip = props => {
    const { type = 'normal', message } = props;
    if (!type || !message) {
        return React.createElement(React.Fragment, null);
    }
    return (React.createElement(Container, { className: [styles.tip] },
        React.createElement(Container, { className: [styles.tipIcon, styles[type]] },
            React.createElement("svg", { viewBox: "0 0 1024 1024", version: "1.1", width: "24", height: "24" },
                React.createElement("path", { d: "M512 853.333333c-187.733333 0-341.333333-153.6-341.333333-341.333333s153.6-341.333333 341.333333-341.333333 341.333333 153.6 341.333333 341.333333-153.6 341.333333-341.333333 341.333333z m0-85.333333c140.8 0 256-115.2 256-256s-115.2-256-256-256-256 115.2-256 256 115.2 256 256 256z m42.666667-170.666667v85.333334h-85.333334v-85.333334h85.333334z m0-256v213.333334h-85.333334V341.333333h85.333334z", fill: "currentColor" }))),
        React.createElement(Container, { className: [styles.tipMessage] }, message)));
};
const Input = props => {
    const { size = 'default', tip, width = 200, prefix, suffix, style, className, value = '' } = props, attributes = __rest(props, ["size", "tip", "width", "prefix", "suffix", "style", "className", "value"]);
    const widthStyle = { width: `${width}px` };
    return (React.createElement(Container, { className: [styles.input, styles[size], className], style: [widthStyle, style] },
        prefix && prefix,
        React.createElement("input", Object.assign({ className: styles.realInput, value: value }, attributes)),
        tip && React.createElement(Tip, Object.assign({}, tip)),
        suffix && suffix));
};
const a = React.createElement(Input, null);

export default Input;
export { Input, a };
//# sourceMappingURL=index.js.map
