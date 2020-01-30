"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = require("./container");
exports.Overlay = container_1.default;
var controller_1 = require("./controller");
exports.insert = controller_1.insert;
exports.remove = controller_1.remove;
// TODO: Overlay 存在多个的问题
// TODO: controller 查找最近的 Overlay？ 然后 insert 允许指定 root 参数使用最远的 Overlay？
//# sourceMappingURL=index.js.map