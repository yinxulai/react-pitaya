"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var style_less_1 = __importDefault(require("./style.less"));
// 垃圾实现
function parseStyle(style) {
    var styleObject = {};
    var parse = function (style) {
        // 数组
        if (style && Array.isArray(style)) {
            for (var index = 0; index < style.length; index++) {
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
    var classNameArray = [];
    var parse = function (className) {
        if (!className) {
            return;
        }
        // 数组
        if (Array.isArray(className)) {
            for (var index = 0; index < className.length; index++) {
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
exports.Container = function (props) {
    var style = props.style, className = props.className, children = props.children, attributes = __rest(props, ["style", "className", "children"]);
    var classNames = parseClassName(className);
    var styles = parseStyle(style);
    var classstring = [style_less_1.default.container, classNames].filter(Boolean).join(' ').trim();
    return (react_1.default.createElement("div", __assign({ className: classstring, style: styles }, attributes), props.children));
};
exports.default = exports.Container;
//# sourceMappingURL=index.js.map