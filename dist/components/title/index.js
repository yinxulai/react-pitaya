"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var style_less_1 = __importDefault(require("./style.less"));
var container_1 = __importDefault(require("../container"));
exports.Title = function (props) {
    var _a = props.level, level = _a === void 0 ? 1 : _a, title = props.title, subtitle = props.subtitle;
    return (react_1.default.createElement(container_1.default, { className: [style_less_1.default.title, style_less_1.default["level-" + level], props.className], style: props.style },
        react_1.default.createElement("div", null, title),
        react_1.default.createElement("div", { className: style_less_1.default.subtitle }, subtitle)));
};
exports.default = exports.Title;
//# sourceMappingURL=index.js.map