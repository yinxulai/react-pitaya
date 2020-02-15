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

__any_css_style_inject__("._title_gzrxe_1 {\n  color: black;\n  background-color: transparent;\n}\n._title_gzrxe_1 ._subtitle_gzrxe_5 {\n  opacity: 0.5;\n  color: black;\n}\n._level-1_gzrxe_9 {\n  font-size: 40px;\n  font-weight: bold;\n}\n._level-1_gzrxe_9 ._subtitle_gzrxe_5 {\n  font-size: 26px;\n  font-weight: normal;\n}\n._level-2_gzrxe_17 {\n  font-size: 32px;\n  font-weight: bold;\n}\n._level-2_gzrxe_17 ._subtitle_gzrxe_5 {\n  font-size: 20px;\n  font-weight: normal;\n}\n._level-3_gzrxe_25 {\n  font-size: 28px;\n  font-weight: bold;\n}\n._level-3_gzrxe_25 ._subtitle_gzrxe_5 {\n  font-size: 16px;\n  font-weight: normal;\n}\n._level-4_gzrxe_33 {\n  font-size: 20px;\n  font-weight: bold;\n}\n._level-4_gzrxe_33 ._subtitle_gzrxe_5 {\n  display: none;\n  font-weight: normal;\n}\n._level-5_gzrxe_41 {\n  font-size: 16px;\n  font-weight: bold;\n}\n._level-5_gzrxe_41 ._subtitle_gzrxe_5 {\n  display: none;\n  font-weight: normal;\n}\n._level-6_gzrxe_49 {\n  font-size: 14px;\n  font-weight: bold;\n}\n._level-6_gzrxe_49 ._subtitle_gzrxe_5 {\n  display: none;\n  font-weight: normal;\n}\n");
        var style = {"title":"_title_gzrxe_1","subtitle":"_subtitle_gzrxe_5","level-1":"_level-1_gzrxe_9","level-2":"_level-2_gzrxe_17","level-3":"_level-3_gzrxe_25","level-4":"_level-4_gzrxe_33","level-5":"_level-5_gzrxe_41","level-6":"_level-6_gzrxe_49","level1":"_level-1_gzrxe_9","level2":"_level-2_gzrxe_17","level3":"_level-3_gzrxe_25","level4":"_level-4_gzrxe_33","level5":"_level-5_gzrxe_41","level6":"_level-6_gzrxe_49"};

const Title = props => {
    const { level = 1, title, subtitle } = props;
    return (React.createElement(Container, { className: [style.title, style[`level-${level}`], props.className], style: props.style },
        React.createElement("div", null, title),
        React.createElement("div", { className: style.subtitle }, subtitle)));
};

__any_css_style_inject__("._message_1owtj_1 {\n  color: black;\n  min-width: 200px;\n  border-radius: 6px;\n  background-color: white;\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  box-shadow: 0px 16px 16px -4px rgba(0, 0, 0, 0.26666667);\n  padding-top: 8px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-top: 8px;\n  margin-left: 8px;\n  margin-right: 8px;\n  margin-bottom: 8px;\n}\n._context_1owtj_23 {\n  color: black;\n  font-size: 0.9em;\n  text-align: left;\n}\n._info_1owtj_28 {\n  color: #351eff;\n}\n._error_1owtj_31 {\n  color: #f5222d;\n}\n._success_1owtj_34 {\n  color: #52c41a;\n}\n._warning_1owtj_37 {\n  color: #faad14;\n}\n");
        var style$1 = {"message":"_message_1owtj_1","context":"_context_1owtj_23","info":"_info_1owtj_28","error":"_error_1owtj_31","success":"_success_1owtj_34","warning":"_warning_1owtj_37"};

const Message = props => {
    const { type = 'info', context } = props;
    return (React.createElement(Container, { className: [style$1.message, props.className, style$1[type]], style: [props.style] },
        React.createElement(Title, { className: [style$1[type]], level: 5, title: type }),
        React.createElement(Container, { className: [style$1.context] }, context)));
};

__any_css_style_inject__("._button_1q9fy_1 {\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  transition: 0.1s;\n  overflow: hidden;\n  border-radius: 4px;\n  color: white;\n  background-color: #351eff;\n}\n._button_1q9fy_1 ._realButton_1q9fy_11 {\n  width: 100%;\n  border: none;\n  outline: none;\n  color: inherit;\n  cursor: inherit;\n  font-size: inherit;\n  text-align: center;\n  font-weight: inherit;\n  display: inline-block;\n  padding: 0.5em 2em;\n  background-color: transparent;\n}\n._button_1q9fy_1._link_1q9fy_24 {\n  color: #351eff;\n  background-color: transparent;\n  box-shadow: none !important;\n}\n._button_1q9fy_1._small_1q9fy_29 {\n  font-size: 12px;\n  font-weight: 200;\n}\n._button_1q9fy_1._large_1q9fy_33 {\n  font-size: 16px;\n  font-weight: 600;\n}\n._button_1q9fy_1._normal_1q9fy_37 {\n  font-size: 14px;\n  font-weight: 400;\n}\n._button_1q9fy_1._normal_1q9fy_37 {\n  top: -2px;\n  transform: scale(1.02, 1.02);\n  box-shadow: 0px 8px 8px -2px rgba(0, 0, 0, 0.3);\n}\n._button_1q9fy_1._loading_1q9fy_46 {\n  top: 0px;\n  transform: scale(1, 1);\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.33333333);\n}\n._button_1q9fy_1._disable_1q9fy_51 {\n  top: 0px;\n  transform: scale(1, 1);\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.33333333);\n}\n._button_1q9fy_1:active {\n  top: 0px;\n  transform: scale(1, 1);\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.33333333);\n}\n");
        var style$2 = {"button":"_button_1q9fy_1","realButton":"_realButton_1q9fy_11","link":"_link_1q9fy_24","small":"_small_1q9fy_29","large":"_large_1q9fy_33","normal":"_normal_1q9fy_37","loading":"_loading_1q9fy_46","disable":"_disable_1q9fy_51"};

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
    return (React.createElement(Container, { style: [props.style], className: [style$2.button, style$2[type], style$2[size], style$2[status], props.className] },
        React.createElement("button", { type: props.htmlType, disabled: disable, className: [style$2.realButton, style$2[type]].join(' '), onClick: handleClick }, children)));
};

__any_css_style_inject__("._input_1te7y_1 {\n  margin: 1px;\n  transition: 0.2s;\n  font-size: 12px;\n  border-radius: 4px;\n  position: relative;\n  padding: 0.2em 0.3em;\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.33333333);\n  background-color: rgba(0, 0, 0, 0.01);\n  border: 2px solid rgba(255, 255, 255, 0);\n  box-shadow: 0px 0px 0px 1px rgba(39, 15, 255, 0.1) inset;\n}\n._input_1te7y_1:hover {\n  box-shadow: 0px 3px 3px -1px rgba(0, 0, 0, 0.31666667);\n  border: 2px solid #351eff;\n}\n._input_1te7y_1._small_1te7y_17 {\n  font-size: 12px;\n  font-weight: 200;\n}\n._input_1te7y_1._large_1te7y_21 {\n  font-size: 16px;\n  font-weight: 600;\n}\n._input_1te7y_1._default_1te7y_25 {\n  font-size: 14px;\n  font-weight: 400;\n}\n._realInput_1te7y_29 {\n  width: 100%;\n  border: none;\n  outline: none;\n  padding: 0.5em;\n  font-size: inherit;\n  letter-spacing: 1px;\n  background-color: transparent;\n}\n._realInput_1te7y_29::-webkit-input-placeholder {\n  opacity: 0.4;\n  font-size: inherit;\n  font-weight: inherit;\n}\n._realInput_1te7y_29::-moz-placeholder {\n  opacity: 0.4;\n  font-size: inherit;\n  font-weight: inherit;\n}\n._realInput_1te7y_29:-ms-input-placeholder {\n  opacity: 0.4;\n  font-size: inherit;\n  font-weight: inherit;\n}\n._realInput_1te7y_29::-ms-input-placeholder {\n  opacity: 0.4;\n  font-size: inherit;\n  font-weight: inherit;\n}\n.realInput::-webkit-input-placeholder {\n  opacity: 0.4;\n  font-size: inherit;\n  font-weight: inherit;\n}\n.realInput::-moz-placeholder {\n  opacity: 0.4;\n  font-size: inherit;\n  font-weight: inherit;\n}\n.realInput:-ms-input-placeholder {\n  opacity: 0.4;\n  font-size: inherit;\n  font-weight: inherit;\n}\n.realInput::-ms-input-placeholder {\n  opacity: 0.4;\n  font-size: inherit;\n  font-weight: inherit;\n}\n._realInput_1te7y_29::placeholder {\n  opacity: 0.4;\n  font-size: inherit;\n  font-weight: inherit;\n}\n._tip_1te7y_43 {\n  top: 0;\n  right: 0;\n  height: 100%;\n  padding: 2px;\n  font-size: inherit;\n  position: absolute;\n}\n._tip_1te7y_43 ._tipIcon_1te7y_51 {\n  z-index: 1;\n  padding: 2px;\n  height: 100%;\n  display: flex;\n  font-size: 0.8em;\n  border-radius: 50px;\n  align-items: flex-end;\n  flex-direction: column;\n  justify-content: center;\n  cursor: pointer;\n}\n._tip_1te7y_43 ._tipIcon_1te7y_51._warning_1te7y_63 {\n  color: #faad14;\n}\n._tip_1te7y_43 ._tipIcon_1te7y_51._correct_1te7y_66 {\n  color: #52c41a;\n}\n._tip_1te7y_43 ._tipIcon_1te7y_51._normal_1te7y_69 {\n  color: #351eff;\n}\n._tip_1te7y_43 ._tipIcon_1te7y_51._error_1te7y_72 {\n  color: #f5222d;\n}\n._tip_1te7y_43 ._tipMessage_1te7y_75 {\n  top: 0.5em;\n  right: 0;\n  z-index: 1;\n  display: none;\n  font-size: 0.9em;\n  padding: 4px 6px;\n  position: relative;\n  border-radius: 4px;\n  font-weight: normal;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n._tip_1te7y_43:hover ._tipMessage_1te7y_75 {\n  display: inline;\n}\n");
        var styles = {"input":"_input_1te7y_1","small":"_small_1te7y_17","large":"_large_1te7y_21","default":"_default_1te7y_25","realInput":"_realInput_1te7y_29","tip":"_tip_1te7y_43","tipIcon":"_tipIcon_1te7y_51","warning":"_warning_1te7y_63","correct":"_correct_1te7y_66","normal":"_normal_1te7y_69","error":"_error_1te7y_72","tipMessage":"_tipMessage_1te7y_75"};

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

const Gap = props => {
    let [left, right, top, bottom] = [0, 0, 0, 0];
    const { ltrb, all, vertical, horizontal, type = 'margin', children } = props;
    if (!children) {
        return null;
    }
    if (all) {
        left = right = top = bottom = all;
    }
    if (ltrb) {
        left = ltrb[0];
        top = ltrb[1];
        right = ltrb[2];
        bottom = ltrb[3];
    }
    if (vertical) {
        left = right = vertical;
    }
    if (horizontal) {
        top = bottom = horizontal;
    }
    if (props.left != null) {
        left = props.left;
    }
    if (props.top != null) {
        top = props.top;
    }
    if (props.right != null) {
        right = props.right;
    }
    if (props.bottom != null) {
        bottom = props.bottom;
    }
    const paddingStyle = {
        paddingTop: `${top * 4}px`,
        paddingBottom: `${bottom * 4}px`,
        paddingLeft: `${left * 4}px`,
        paddingRight: `${right * 4}px`,
    };
    const marginStyle = {
        marginTop: `${top * 4}px`,
        marginBottom: `${bottom * 4}px`,
        marginLeft: `${left * 4}px`,
        marginRight: `${right * 4}px`,
    };
    const gapStyle = type === 'margin' ? marginStyle : paddingStyle;
    if (Array.isArray(children)) {
        return (React.createElement(React.Fragment, null, children.map((child, index) => child && (React.createElement(Container, { key: index, className: [props.className], style: [gapStyle, props.style] }, child)))));
    }
    return (React.createElement(Container, { className: [props.className], style: [gapStyle, props.style] }, children));
};

export { Button, Container, Gap, Input, Message, Title };
//# sourceMappingURL=index.js.map
