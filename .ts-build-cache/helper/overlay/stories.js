"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const index_1 = require("./index");
const controller_1 = require("./controller");
const button_1 = __importDefault(require("../../components/button"));
const gap_1 = __importDefault(require("../../components/gap"));
exports.default = {
    title: 'Overlay'
};
exports.Type = () => {
    const controller = new controller_1.Controller();
    return (react_1.default.createElement(gap_1.default, null,
        react_1.default.createElement(index_1.Overlay, { controller: controller }),
        react_1.default.createElement(button_1.default, { type: "normal", size: "small", onClick: () => controller.insert({
                isShowMask: true,
                enableCloseByMask: true,
                render: () => '示例'
            }) }, "\u63D2\u5165\u793A\u4F8B")));
};
//# sourceMappingURL=stories.js.map