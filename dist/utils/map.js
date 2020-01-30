"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 浅拷贝
function merge(target, data) {
    // 使用深拷贝
    var newMap = shallowCopy(target);
    if (!data) {
        return newMap;
    }
    data.forEach(function (value, key) {
        if (!newMap.get(key)) {
            newMap.set(key, value);
        }
    });
    return newMap;
}
exports.merge = merge;
function shallowCopy(target) {
    var newMap = new Map(target.entries());
    return newMap;
}
exports.shallowCopy = shallowCopy;
// TODO: 实现
function deepCopy(target) {
    var newMap = new Map(target.entries());
    return newMap;
}
exports.deepCopy = deepCopy;
//# sourceMappingURL=map.js.map