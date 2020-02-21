"use strict";
(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
        factory();
}((function () {
    'use strict';
    function __any_css_style_inject__(css) {
        if (!css)
            return;
        // 环境检查
        if (typeof (window) == 'undefined')
            return;
        if (typeof (document) == 'undefined')
            return;
        if (typeof (document.head) == 'undefined')
            return;
        function hash(input) {
            var hash = 5381;
            var i = input.length - 1;
            var I64BIT_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');
            if (typeof input == 'string') {
                for (; i > -1; i--)
                    hash += (hash << 5) + input.charCodeAt(i);
            }
            else {
                for (; i > -1; i--)
                    hash += (hash << 5) + input[i];
            }
            var value = hash & 0x7FFFFFFF;
            var retValue = '';
            do {
                retValue += I64BIT_TABLE[value & 0x3F];
            } while (value >>= 6);
            return retValue;
        }
        // 计算内容哈希
        var documentID = hash(css);
        if (document.getElementById(documentID))
            return;
        // 创建 style
        var style = document.createElement('style');
        style.id = documentID;
        style.innerHTML = css;
        // 插入 dom
        document.head.appendChild(style);
        return css;
    }
    var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
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
        return (react_1.default.createElement(container_1.default, { style: [props.style], className: [style_less_1.default.button, style_less_1.default[type], style_less_1.default[size], style_less_1.default[status], props.className] }, react_1.default.createElement("button", { type: props.htmlType, disabled: disable, className: [style_less_1.default.realButton, style_less_1.default[type]].join(' '), onClick: handleClick }, children)));
    };
    exports.default = exports.Button;
})));
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map