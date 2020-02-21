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
    Object.defineProperty(exports, "__esModule", { value: true });
    var container_1 = require("./components/container");
    exports.Container = container_1.default;
    var message_1 = require("./components/message");
    exports.Message = message_1.default;
    var button_1 = require("./components/button");
    exports.Button = button_1.default;
    var input_1 = require("./components/input");
    exports.Input = input_1.default;
    var title_1 = require("./components/title");
    exports.Title = title_1.default;
    var gap_1 = require("./components/gap");
    exports.Gap = gap_1.default;
})));
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map