(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./controller", "./container"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var controller_1 = require("./controller");
    exports.insert = controller_1.insert;
    exports.remove = controller_1.remove;
    var container_1 = require("./container");
    exports.default = container_1.default;
});
//# sourceMappingURL=index.js.map