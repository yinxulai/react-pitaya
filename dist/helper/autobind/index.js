"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function autobind(target, _, descriptor) {
    var fn = descriptor.value;
    if (typeof fn !== 'function') {
        throw new TypeError("@autobind decorator can only be applied to methods not: " + typeof fn);
    }
    descriptor.value = fn.bind(target);
}
exports.default = autobind;
//# sourceMappingURL=index.js.map