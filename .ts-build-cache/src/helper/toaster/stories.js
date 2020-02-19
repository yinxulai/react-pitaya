var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "./container", "../../components/gap", "./controller", "../../components/button"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const react_1 = __importDefault(require("react"));
    const container_1 = __importDefault(require("./container"));
    const gap_1 = __importDefault(require("../../components/gap"));
    const controller_1 = require("./controller");
    const button_1 = __importDefault(require("../../components/button"));
    exports.default = {
        title: 'Toaser'
    };
    exports.Test = () => {
        const controller = new controller_1.Controller();
        return (react_1.default.createElement(gap_1.default, null,
            react_1.default.createElement(button_1.default, { type: "normal", size: "small", onClick: () => controller.info('info') }, "info"),
            react_1.default.createElement(button_1.default, { type: "normal", size: "small", onClick: () => controller.warning('warning') }, "warning"),
            react_1.default.createElement(button_1.default, { type: "normal", size: "small", onClick: () => controller.success('success') }, "success"),
            react_1.default.createElement(button_1.default, { type: "normal", size: "small", onClick: () => controller.error('error') }, "error"),
            react_1.default.createElement(button_1.default, { type: "normal", size: "small", onClick: () => controller.error({ statusCode: 200, error: 'error_info', }) }, "statusCode-error"),
            react_1.default.createElement(button_1.default, { type: "normal", size: "small", onClick: () => controller.error({ statusCode: 200, error: 'error_info', }) }, "statusCode-error"),
            react_1.default.createElement(container_1.default, { controller: controller })));
    };
});
//# sourceMappingURL=stories.js.map