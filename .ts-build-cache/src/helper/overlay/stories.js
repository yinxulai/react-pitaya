var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "./", "./controller", "../../components/button", "../../components/gap"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const react_1 = __importDefault(require("react"));
    const _1 = __importDefault(require("./"));
    const controller_1 = require("./controller");
    const button_1 = __importDefault(require("../../components/button"));
    const gap_1 = __importDefault(require("../../components/gap"));
    exports.default = {
        title: 'Overlay'
    };
    exports.Type = () => {
        const controller = new controller_1.Controller();
        return (react_1.default.createElement(gap_1.default, null,
            react_1.default.createElement(_1.default, { controller: controller }),
            react_1.default.createElement(button_1.default, { type: "normal", size: "small", onClick: () => controller.insert({
                    isShowMask: true,
                    enableCloseByMask: true,
                    render: () => '示例'
                }) }, "\u63D2\u5165\u793A\u4F8B")));
    };
});
//# sourceMappingURL=stories.js.map