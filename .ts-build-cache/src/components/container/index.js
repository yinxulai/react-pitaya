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
        define(["require", "exports", "react", "./style.less"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const react_1 = __importDefault(require("react"));
    const style_less_1 = __importDefault(require("./style.less"));
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
    exports.Container = props => {
        const { style, className, children } = props, attributes = __rest(props, ["style", "className", "children"]);
        const classNames = parseClassName(className);
        const styles = parseStyle(style);
        const classstring = [style_less_1.default.container, classNames].filter(Boolean).join(' ').trim();
        return (react_1.default.createElement("div", Object.assign({ className: classstring, style: styles }, attributes), props.children));
    };
    exports.default = exports.Container;
});
//# sourceMappingURL=index.js.map