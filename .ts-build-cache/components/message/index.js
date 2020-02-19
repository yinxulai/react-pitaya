"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const title_1 = __importDefault(require("../title"));
const utils_1 = require("../../utils");
const container_1 = __importDefault(require("../container"));
const style_less_1 = __importDefault(require("./style.less"));
function isMessageProps(data) {
    const { type, context } = data || {};
    if (type && context)
        return true;
    return false;
}
exports.isMessageProps = isMessageProps;
const Stack = props => {
    const [stackShow, setStackShow] = react_1.default.useState(false);
    const stack = props.stack;
    if (!stack) {
        return null;
    }
    return (react_1.default.createElement(container_1.default, { className: [style_less_1.default.stackSwitch] },
        react_1.default.createElement(container_1.default, { className: [style_less_1.default.switchButton], onClick: () => setStackShow(!stackShow) }, stackShow ? '-->收起详细信息<--' : '-->展开详细信息<--'),
        stackShow && (react_1.default.createElement(container_1.default, { className: [style_less_1.default.stack] },
            react_1.default.createElement("pre", null, stack)))));
};
exports.Message = props => {
    let { type, context, statusCode, error, stack } = props;
    // 如果 type 是 error 自动获取当前的 call stack
    type === 'error' && (stack = stack || utils_1.stack(4, 20));
    // const titleString = statusCode ? `${statusCode}: ${type}` : type
    return (react_1.default.createElement(container_1.default, { className: [style_less_1.default.message, props.className, style_less_1.default[type]], style: [props.style] },
        react_1.default.createElement(title_1.default, { className: [style_less_1.default[type]], level: 5, title: type }),
        react_1.default.createElement(container_1.default, { className: [style_less_1.default.context] }, context),
        react_1.default.createElement(container_1.default, { className: [style_less_1.default.error] }, error),
        react_1.default.createElement(Stack, { stack: stack })));
};
exports.default = exports.Message;
//# sourceMappingURL=index.js.map