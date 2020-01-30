"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var listener_1 = require("../listener");
var autobind_decorator_1 = __importDefault(require("autobind-decorator"));
function isOverlayRender(overlay) {
    var render = overlay.render;
    // 检查 render 类型
    if (render && render instanceof Function) {
        return true;
    }
    return false;
}
exports.isOverlayRender = isOverlayRender;
var Controller = /** @class */ (function (_super) {
    __extends(Controller, _super);
    function Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lastID = 0;
        _this.overlays = new Map();
        return _this;
    }
    Controller.prototype.insert = function (overlay) {
        var _this = this;
        var id = ++this.lastID;
        this.overlays.set(id, overlay);
        this.dispatchSubscribers();
        return function () { return _this.remove(id); };
    };
    Controller.prototype.remove = function (id) {
        if (this.overlays.delete(id)) {
            this.dispatchSubscribers();
        }
    };
    __decorate([
        autobind_decorator_1.default
    ], Controller.prototype, "insert", null);
    __decorate([
        autobind_decorator_1.default
    ], Controller.prototype, "remove", null);
    return Controller;
}(listener_1.Listener));
exports.Controller = Controller;
var controller = new Controller();
exports.insert = controller.insert, exports.remove = controller.remove;
exports.default = controller;
//# sourceMappingURL=controller.js.map