"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const gap_1 = __importDefault(require("../gap"));
const _1 = __importDefault(require("."));
exports.default = {
    title: 'Message'
};
exports.Type = () => (react_1.default.createElement(gap_1.default, { all: 3 },
    react_1.default.createElement(_1.default, { type: "info", context: "2312" }),
    react_1.default.createElement(_1.default, { type: "error", context: "2312" }),
    react_1.default.createElement(_1.default, { type: "success", context: "2312" }),
    react_1.default.createElement(_1.default, { type: "warning", context: "2312" })));
//# sourceMappingURL=stories.js.map