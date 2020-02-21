var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "autobind-decorator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const autobind_decorator_1 = __importDefault(require("autobind-decorator"));
    exports.default = autobind_decorator_1.default;
});
// export default function autobind(target: any, _: PropertyKey, descriptor: PropertyDescriptor) {
//     const fn = descriptor.value;
//     if (typeof fn !== 'function') {
//         throw new TypeError(`@autobind decorator can only be applied to methods not: ${typeof fn}`);
//     }
//     descriptor.value = fn.bind(target)
// }
//# sourceMappingURL=index.js.map