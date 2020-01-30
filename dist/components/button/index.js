"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var style_less_1 = __importDefault(require("./style.less"));
var container_1 = __importDefault(require("../container"));
exports.Button = function (props) {
    var _a = __read(react_1.default.useState('normal'), 2), status = _a[0], setStatus = _a[1];
    var _b = props.size, size = _b === void 0 ? 'normal' : _b, _c = props.type, type = _c === void 0 ? 'normal' : _c, disable = props.disable;
    var children = status === 'loading' ? '处理中...' : props.children;
    var handleClick = function () {
        // loading disable 都无法点击
        if (status !== 'normal') {
            return;
        }
        if (!props.onClick) {
            return;
        }
        var result = props.onClick();
        if (result instanceof Promise) {
            setStatus('loading');
            result.finally(function () { return setStatus('normal'); });
            return result;
        }
    };
    return (react_1.default.createElement(container_1.default, { style: [props.style], className: [style_less_1.default.button, style_less_1.default[type], style_less_1.default[size], style_less_1.default[status], props.className] },
        react_1.default.createElement("button", { type: props.htmlType, disabled: disable, className: [style_less_1.default.realButton, style_less_1.default[type]].join(' '), onClick: handleClick }, children)));
};
exports.default = exports.Button;
//# sourceMappingURL=index.js.map