"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var title_1 = __importDefault(require("../title"));
var container_1 = __importDefault(require("../container"));
var style_less_1 = __importDefault(require("./style.less"));
exports.Message = function (props) {
    var _a = props.type, type = _a === void 0 ? 'info' : _a, context = props.context;
    return (react_1.default.createElement(container_1.default, { className: [style_less_1.default.message, props.className, style_less_1.default[type]], style: [props.style] },
        react_1.default.createElement(title_1.default, { className: [style_less_1.default[type]], level: 5, title: type }),
        react_1.default.createElement(container_1.default, { className: [style_less_1.default.context] }, context)));
};
exports.default = exports.Message;
//# sourceMappingURL=index.js.map