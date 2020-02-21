"use strict";
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
const autobind_1 = __importDefault(require("../autobind"));
const listener_1 = require("../listener");
const utils_1 = require("../../utils");
// 跟原始 isMessageProps 的相比少了 type 的判断
function isMessageProps(data) {
    if (!data) {
        return false;
    }
    if (data.context) {
        return true;
    }
    if (data.statusCode || data.error || data.stack) {
        return true;
    }
    return false;
}
// 存储和管理消息
class Controller extends listener_1.Listener {
    constructor() {
        super(...arguments);
        this.removalMap = new Map(); // 待移除的列表
        this.toaserMap = new Map(); // 消息列表
    }
    get toaserList() { return Array.from(this.toaserMap.values()); }
    open(type = 'info', options, lifeTime = 2000) {
        // 加入堆栈确保确实是唯一性
        const uniqueID = utils_1.hash(options, utils_1.stack(2, 4));
        const delayRemoval = () => this.delayRemoval(uniqueID, lifeTime);
        if (isMessageProps(options)) {
            this.toaserMap.set(uniqueID, Object.assign(Object.assign({}, options), { delayRemoval, type }));
        }
        else {
            this.toaserMap.set(uniqueID, { context: options, delayRemoval, type });
        }
        this.delayRemoval(uniqueID, lifeTime);
        this.dispatchSubscribers();
    }
    info(options) {
        this.open('info', options, 2000);
    }
    success(options) {
        this.open('success', options, 2000);
    }
    warning(options) {
        this.open('warning', options, 3000);
    }
    error(options) {
        this.open('error', options, 4000);
    }
    //延时删除
    delayRemoval(id, lifeTime) {
        if (this.removalMap.get(id)) {
            // 如果已经存在就先删除
            clearTimeout(this.removalMap.get(id));
        }
        // 设置 setTimeout
        const clearID = setTimeout(() => {
            this.toaserMap.delete(id);
            this.dispatchSubscribers();
        }, lifeTime);
        // 更新 clearID
        this.removalMap.set(id, clearID);
    }
}
__decorate([
    autobind_1.default
], Controller.prototype, "open", null);
__decorate([
    autobind_1.default
], Controller.prototype, "info", null);
__decorate([
    autobind_1.default
], Controller.prototype, "success", null);
__decorate([
    autobind_1.default
], Controller.prototype, "warning", null);
__decorate([
    autobind_1.default
], Controller.prototype, "error", null);
__decorate([
    autobind_1.default
], Controller.prototype, "delayRemoval", null);
exports.Controller = Controller;
const controller = new Controller();
const { info, error, success, warning } = controller;
exports.info = info;
exports.error = error;
exports.success = success;
exports.warning = warning;
exports.default = controller;
//# sourceMappingURL=controller.js.map