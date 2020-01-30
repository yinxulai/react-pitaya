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
var container_1 = __importDefault(require("../container"));
exports.Gap = function (props) {
    var _a = __read([0, 0, 0, 0], 4), left = _a[0], right = _a[1], top = _a[2], bottom = _a[3];
    var ltrb = props.ltrb, all = props.all, vertical = props.vertical, horizontal = props.horizontal, _b = props.type, type = _b === void 0 ? 'margin' : _b, children = props.children;
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
    var paddingStyle = {
        paddingTop: top * 4 + "px",
        paddingBottom: bottom * 4 + "px",
        paddingLeft: left * 4 + "px",
        paddingRight: right * 4 + "px",
    };
    var marginStyle = {
        marginTop: top * 4 + "px",
        marginBottom: bottom * 4 + "px",
        marginLeft: left * 4 + "px",
        marginRight: right * 4 + "px",
    };
    var gapStyle = type === 'margin' ? marginStyle : paddingStyle;
    if (Array.isArray(children)) {
        return (react_1.default.createElement(react_1.default.Fragment, null, children.map(function (child, index) {
            return child && (react_1.default.createElement(container_1.default, { key: index, className: [props.className], style: [gapStyle, props.style] }, child));
        })));
    }
    return (react_1.default.createElement(container_1.default, { className: [props.className], style: [gapStyle, props.style] }, children));
};
exports.default = exports.Gap;
//# sourceMappingURL=index.js.map