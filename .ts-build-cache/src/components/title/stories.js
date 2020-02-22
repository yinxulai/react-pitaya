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
        title: 'Title'
    };
    exports.Type = () => (react_1.default.createElement(gap_1.default, { all: 3 },
        react_1.default.createElement(_1.default, { level: 1, title: "\u6807\u9898", subtitle: "\u526F\u6807\u9898" }),
        react_1.default.createElement(_1.default, { level: 2, title: "\u6807\u9898", subtitle: "\u526F\u6807\u9898" }),
        react_1.default.createElement(_1.default, { level: 3, title: "\u6807\u9898", subtitle: "\u526F\u6807\u9898" }),
        react_1.default.createElement(_1.default, { level: 4, title: "\u6807\u9898", subtitle: "\u526F\u6807\u9898" }),
        react_1.default.createElement(_1.default, { level: 5, title: "\u6807\u9898", subtitle: "\u526F\u6807\u9898" }),
        react_1.default.createElement(_1.default, { level: 6, title: "\u6807\u9898", subtitle: "\u526F\u6807\u9898" })));
});
//# sourceMappingURL=stories.js.map