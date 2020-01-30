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
var react_1 = __importDefault(require("react"));
var overlay_1 = require("../overlay");
var listener_1 = require("../listener");
var container_1 = require("./container");
var autobind_decorator_1 = __importDefault(require("autobind-decorator"));
var Controller = /** @class */ (function (_super) {
    __extends(Controller, _super);
    function Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lastID = 0;
        _this.messageMap = new Map();
        return _this;
    }
    Controller.mountOnOverlay = function () {
        if (!Controller.isMountOnOverlay) {
            overlay_1.insert({
                isFixed: true,
                isShowMask: false,
                enableCloseByMask: false,
                render: function (_) { return react_1.default.createElement(container_1.Container, null); }
            });
        }
        Controller.isMountOnOverlay = true;
    };
    Object.defineProperty(Controller.prototype, "messages", {
        get: function () {
            return Array.from(this.messageMap.values());
        },
        enumerable: true,
        configurable: true
    });
    Controller.prototype.open = function (message, lifeTime) {
        if (lifeTime === void 0) { lifeTime = 2000; }
        Controller.mountOnOverlay();
        this.messageMap.set(++this.lastID, message);
        this.delayRemoval(this.lastID, lifeTime);
        this.dispatchSubscribers();
    };
    Controller.prototype.info = function (context) {
        this.open({ type: 'info', context: context }, 2000);
    };
    Controller.prototype.success = function (context) {
        this.open({ type: 'success', context: context }, 2000);
    };
    Controller.prototype.warning = function (context) {
        this.open({ type: 'warning', context: context }, 3000);
    };
    Controller.prototype.error = function (context) {
        this.open({ type: 'error', context: context }, 4000);
    };
    Controller.prototype.delayRemoval = function (id, lifeTime) {
        var _this = this;
        setTimeout(function () {
            _this.messageMap.delete(id);
            _this.dispatchSubscribers();
        }, lifeTime);
    };
    // 挂载 Overlay
    Controller.isMountOnOverlay = false;
    __decorate([
        autobind_decorator_1.default
    ], Controller.prototype, "open", null);
    __decorate([
        autobind_decorator_1.default
    ], Controller.prototype, "info", null);
    __decorate([
        autobind_decorator_1.default
    ], Controller.prototype, "success", null);
    __decorate([
        autobind_decorator_1.default
    ], Controller.prototype, "warning", null);
    __decorate([
        autobind_decorator_1.default
    ], Controller.prototype, "error", null);
    __decorate([
        autobind_decorator_1.default
    ], Controller.prototype, "delayRemoval", null);
    return Controller;
}(listener_1.Listener));
exports.Controller = Controller;
var controller = new Controller();
var open = controller.open, info = controller.info, error = controller.error, success = controller.success, warning = controller.warning;
exports.open = open;
exports.info = info;
exports.error = error;
exports.success = success;
exports.warning = warning;
exports.default = controller;
//# sourceMappingURL=controller.js.map