"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles = __importStar(require("./style.less"));
var container_1 = __importDefault(require("../container"));
exports.Icon = function (props) {
    var name = props.name, _a = props.size, size = _a === void 0 ? '1rem' : _a, style = props.style, _b = props.color, color = _b === void 0 ? 'black' : _b, className = props.className;
    return (react_1.default.createElement(container_1.default, { className: [styles.icon, className], style: style },
        react_1.default.createElement("i", { style: { color: color, fontSize: size }, className: "icon-" + name })));
};
exports.default = exports.Icon;
//# sourceMappingURL=index.js.map