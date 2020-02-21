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
        title: 'Button'
    };
    exports.Type = () => (react_1.default.createElement(gap_1.default, { all: 3 },
        react_1.default.createElement(_1.default, { type: "normal" }, "Normal Button"),
        react_1.default.createElement(_1.default, { type: "link" }, "Link Button")));
    exports.Size = () => (react_1.default.createElement(gap_1.default, { all: 3 },
        react_1.default.createElement(_1.default, { type: "normal", size: "small" }, "Small Button"),
        react_1.default.createElement(_1.default, { type: "normal", size: "normal" }, "Normal Button"),
        react_1.default.createElement(_1.default, { type: "normal", size: "large" }, "Large Button"),
        react_1.default.createElement(_1.default, { type: "link", size: "small" }, "Small Button"),
        react_1.default.createElement(_1.default, { type: "link", size: "normal" }, "Normal Button"),
        react_1.default.createElement(_1.default, { type: "link", size: "large" }, "Large Button")));
    exports.Loading = () => {
        const resolve = () => new Promise((resolve, reject) => setTimeout(resolve, 1000));
        return (react_1.default.createElement(gap_1.default, { all: 3 },
            react_1.default.createElement(_1.default, { type: "normal", onClick: resolve }, "Normal Button"),
            react_1.default.createElement(_1.default, { type: "link", onClick: resolve }, "Link Button")));
    };
});
//# sourceMappingURL=stories.js.map