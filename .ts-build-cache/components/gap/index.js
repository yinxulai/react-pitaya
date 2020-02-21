"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const container_1 = __importDefault(require("../container"));
exports.Gap = props => {
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
        return (react_1.default.createElement(react_1.default.Fragment, null, children.map((child, index) => child && (react_1.default.createElement(container_1.default, { key: index, className: [props.className], style: [gapStyle, props.style] }, child)))));
    }
    return (react_1.default.createElement(container_1.default, { className: [props.className], style: [gapStyle, props.style] }, children));
};
exports.default = exports.Gap;
//# sourceMappingURL=index.js.map