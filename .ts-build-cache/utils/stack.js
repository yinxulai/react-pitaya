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
    function default_1(start = 4, end = 20) {
        const error = new Error();
        const stack = error.stack || '';
        const stackList = stack.split('\n');
        stackList.slice(start, end);
        // stackList.unshift(`Name: ${error.name}`)
        // stackList.unshift(`Message: ${error.message}`)
        return stackList.join('\n');
    }
    exports.default = default_1;
});
//# sourceMappingURL=stack.js.map