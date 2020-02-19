"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const style_less_1 = __importDefault(require("./style.less"));
const container_1 = __importDefault(require("../container"));
exports.Title = props => {
    const { level = 1, title, subtitle } = props;
    return (react_1.default.createElement(container_1.default, { className: [style_less_1.default.title, style_less_1.default[`level-${level}`], props.className], style: props.style },
        react_1.default.createElement("div", null, title),
        react_1.default.createElement("div", { className: style_less_1.default.subtitle }, subtitle)));
};
exports.default = exports.Title;
//# sourceMappingURL=index.js.map