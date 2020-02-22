"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const style_less_1 = __importDefault(require("./style.less"));
const container_1 = __importDefault(require("../container"));
exports.Icon = props => {
    const { name, size = '1rem', style, color = 'black', className } = props;
    return (react_1.default.createElement(container_1.default, { className: [style_less_1.default.icon, className], style: style },
        react_1.default.createElement("i", { style: { color, fontSize: size }, className: `icon-${name}` })));
};
exports.default = exports.Icon;
//# sourceMappingURL=index.js.map