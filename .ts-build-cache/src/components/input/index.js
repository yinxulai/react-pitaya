var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "./style.less", "../container"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const react_1 = __importDefault(require("react"));
    // import Icon from '../icon'
    const style_less_1 = __importDefault(require("./style.less"));
    const container_1 = __importDefault(require("../container"));
    const Tip = props => {
        const { type = 'normal', message } = props;
        if (!type || !message) {
            return react_1.default.createElement(react_1.default.Fragment, null);
        }
        return (react_1.default.createElement(container_1.default, { className: [style_less_1.default.tip] },
            react_1.default.createElement(container_1.default, { className: [style_less_1.default.tipIcon, style_less_1.default[type]] },
                react_1.default.createElement("svg", { viewBox: "0 0 1024 1024", version: "1.1", width: "24", height: "24" },
                    react_1.default.createElement("path", { d: "M512 853.333333c-187.733333 0-341.333333-153.6-341.333333-341.333333s153.6-341.333333 341.333333-341.333333 341.333333 153.6 341.333333 341.333333-153.6 341.333333-341.333333 341.333333z m0-85.333333c140.8 0 256-115.2 256-256s-115.2-256-256-256-256 115.2-256 256 115.2 256 256 256z m42.666667-170.666667v85.333334h-85.333334v-85.333334h85.333334z m0-256v213.333334h-85.333334V341.333333h85.333334z", fill: "currentColor" }))),
            react_1.default.createElement(container_1.default, { className: [style_less_1.default.tipMessage] }, message)));
    };
    exports.Input = props => {
        const { size = 'default', tip, width = 200, prefix, suffix, style, className, value = '' } = props, attributes = __rest(props, ["size", "tip", "width", "prefix", "suffix", "style", "className", "value"]);
        const widthStyle = { width: `${width}px` };
        return (react_1.default.createElement(container_1.default, { className: [style_less_1.default.input, style_less_1.default[size], className], style: [widthStyle, style] },
            prefix && prefix,
            react_1.default.createElement("input", Object.assign({ className: style_less_1.default.realInput, value: value }, attributes)),
            tip && react_1.default.createElement(Tip, Object.assign({}, tip)),
            suffix && suffix));
    };
    exports.default = exports.Input;
    exports.a = react_1.default.createElement(exports.Input, null);
});
//# sourceMappingURL=index.js.map