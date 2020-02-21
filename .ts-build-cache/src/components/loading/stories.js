var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "."], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const react_1 = __importDefault(require("react"));
    const _1 = __importDefault(require("."));
    exports.default = {
        title: 'Loading'
    };
    exports.Type = () => (react_1.default.createElement(_1.default, null, "\u5F00\u53D1\u4E2D"));
});
//# sourceMappingURL=stories.js.map