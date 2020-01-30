"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: 待实现
var react_1 = __importDefault(require("react"));
var style_less_1 = __importDefault(require("./style.less"));
var container_1 = __importDefault(require("../container"));
exports.Loading = function (props) {
    return (react_1.default.createElement(container_1.default, { className: [style_less_1.default.loading, props.className], style: props.style },
        props.loading &&
            (react_1.default.createElement("div", { className: style_less_1.default.loadingMark }, "\u52A0\u8F7D\u4E2D...")),
        react_1.default.createElement("div", { className: style_less_1.default.context }, props.children)));
};
exports.default = exports.Loading;
//# sourceMappingURL=index.js.map