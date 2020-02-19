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
    const gap_1 = __importDefault(require("../gap"));
    const _1 = __importDefault(require("."));
    exports.default = {
        title: 'Title'
    };
    exports.Type = () => (react_1.default.createElement(gap_1.default, { all: 3 }, react_1.default.createElement(_1.default, { level: 1, title: "\u6807\u9898", subtitle: "\u526F\u6807\u9898" }), react_1.default.createElement(_1.default, { level: 2, title: "\u6807\u9898", subtitle: "\u526F\u6807\u9898" }), react_1.default.createElement(_1.default, { level: 3, title: "\u6807\u9898", subtitle: "\u526F\u6807\u9898" }), react_1.default.createElement(_1.default, { level: 4, title: "\u6807\u9898", subtitle: "\u526F\u6807\u9898" }), react_1.default.createElement(_1.default, { level: 5, title: "\u6807\u9898", subtitle: "\u526F\u6807\u9898" }), react_1.default.createElement(_1.default, { level: 6, title: "\u6807\u9898", subtitle: "\u526F\u6807\u9898" })));
})));
//# sourceMappingURL=stories.js.map
//# sourceMappingURL=stories.js.map