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
    // 浅拷贝
    function merge(target, data) {
        // 使用深拷贝
        const newMap = shallowCopy(target);
        if (!data) {
            return newMap;
        }
        data.forEach((value, key) => {
            if (!newMap.get(key)) {
                newMap.set(key, value);
            }
        });
        return newMap;
    }
    exports.merge = merge;
    function shallowCopy(target) {
        const newMap = new Map(target.entries());
        return newMap;
    }
    exports.shallowCopy = shallowCopy;
    // TODO: 实现
    function deepCopy(target) {
        const newMap = new Map(target.entries());
        return newMap;
    }
    exports.deepCopy = deepCopy;
})));
//# sourceMappingURL=map.js.map
//# sourceMappingURL=map.js.map