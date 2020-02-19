var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "./style.less", "../container"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const react_1 = __importDefault(require("react"));
    const style_less_1 = __importDefault(require("./style.less"));
    const container_1 = __importDefault(require("../container"));
    exports.Button = props => {
        const [status, setStatus] = react_1.default.useState('normal');
        const { size = 'normal', type = 'normal', disable } = props;
        const children = status === 'loading' ? '处理中...' : props.children;
        const handleClick = () => {
            // loading disable 都无法点击
            if (status !== 'normal') {
                return;
            }
            if (!props.onClick) {
                return;
            }
            const result = props.onClick();
            if (result instanceof Promise) {
                setStatus('loading');
                result.finally(() => setStatus('normal'));
                return result;
            }
        };
        return (react_1.default.createElement(container_1.default, { style: [props.style], className: [style_less_1.default.button, style_less_1.default[type], style_less_1.default[size], style_less_1.default[status], props.className] },
            react_1.default.createElement("button", { type: props.htmlType, disabled: disable, className: [style_less_1.default.realButton, style_less_1.default[type]].join(' '), onClick: handleClick }, children)));
    };
    exports.default = exports.Button;
});
//# sourceMappingURL=index.js.map