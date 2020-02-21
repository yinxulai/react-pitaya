(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
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
});
//# sourceMappingURL=map.js.map