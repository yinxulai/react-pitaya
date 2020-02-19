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
    const _1 = __importDefault(require("./"));
    const controller_1 = require("./controller");
    const button_1 = __importDefault(require("../../components/button"));
    const gap_1 = __importDefault(require("../../components/gap"));
    exports.default = {
        title: 'Overlay'
    };
    exports.Type = () => {
        const controller = new controller_1.Controller();
        return (react_1.default.createElement(gap_1.default, null, react_1.default.createElement(_1.default, { controller: controller }), react_1.default.createElement(button_1.default, { type: "normal", size: "small", onClick: () => controller.insert({
                isShowMask: true,
                enableCloseByMask: true,
                render: () => '示例'
            }) }, "\u63D2\u5165\u793A\u4F8B")));
    };
})));
//# sourceMappingURL=stories.js.map
//# sourceMappingURL=stories.js.map