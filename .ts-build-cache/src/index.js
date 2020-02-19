(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./components/container", "./components/message", "./components/button", "./components/input", "./components/title", "./components/gap"], factory);
    }
})(function (require, exports) {
    "use strict";
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
});
//# sourceMappingURL=index.js.map