var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../autobind"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const autobind_1 = __importDefault(require("../autobind"));
    class Listener {
        constructor() {
            this.subscribers = new Map();
        }
        addListener(subscriber) {
            const symbol = Symbol();
            this.subscribers.set(symbol, subscriber);
            return () => this.removeListener(symbol);
        }
        removeListener(symbol) {
            return this.subscribers.delete(symbol);
        }
        dispatchSubscribers() {
            return __awaiter(this, void 0, void 0, function* () {
                // 保证顺序执行？不知道有啥好处 反正想这样写
                const subscribers = Array.from(this.subscribers.values());
                for (let index = 0; index < subscribers.length; index++) {
                    yield subscribers[index]();
                }
            });
        }
    }
    __decorate([
        autobind_1.default
    ], Listener.prototype, "addListener", null);
    __decorate([
        autobind_1.default
    ], Listener.prototype, "removeListener", null);
    __decorate([
        autobind_1.default
    ], Listener.prototype, "dispatchSubscribers", null);
    exports.Listener = Listener;
});
//# sourceMappingURL=index.js.map