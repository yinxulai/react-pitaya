var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "../gap", "."], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const react_1 = __importDefault(require("react"));
    const gap_1 = __importDefault(require("../gap"));
    const _1 = __importDefault(require("."));
    exports.default = {
        title: 'Input'
    };
    exports.Type = () => (react_1.default.createElement(gap_1.default, { all: 3 },
        react_1.default.createElement(_1.default, { size: "small", placeholder: "\u6D4B\u8BD5", tip: { type: 'warning', message: '请检查输入' } }),
        react_1.default.createElement(_1.default, { size: "normal", placeholder: "\u6D4B\u8BD5", tip: { type: 'warning', message: '请检查输入' } }),
        react_1.default.createElement(_1.default, { size: "large", placeholder: "\u6D4B\u8BD5", tip: { type: 'warning', message: '请检查输入' } }),
        react_1.default.createElement(_1.default, { size: "large", placeholder: "\u6D4B\u8BD5", tip: { type: 'warning', message: '请检查输入' } })));
});
//# sourceMappingURL=stories.js.map