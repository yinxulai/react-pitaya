"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var autobind_decorator_1 = __importDefault(require("autobind-decorator"));
var message_1 = require("../message");
var ErrorCatcher = /** @class */ (function () {
    function ErrorCatcher() {
        this.globalErrorMap = new Map();
    }
    ErrorCatcher.prototype.addError = function (error) {
        var _this = this;
        error.forEach(function (errorMap, errorKey) {
            if (_this.globalErrorMap.get(errorKey)) {
                console.warn("[error-catcher:addError]:\u6DFB\u52A0\u91CD\u590D\u7684 error map, key: " + errorKey.toString() + " \n");
            }
            _this.globalErrorMap.set(errorKey, errorMap);
        });
    };
    ErrorCatcher.prototype.successHandler = function (res, errorMap) {
        if (!res) {
            return;
        }
        var data = res && res.data;
        var state = data && data.state;
        // 优先取用户自定义的
        if (state && errorMap.get(state)) {
            return message_1.success(errorMap.get(state));
        }
        // 其次尝试读取 message
        if (data && data.message) {
            return message_1.success(data.message);
        }
    };
    ErrorCatcher.prototype.failureHandler = function (err, errorMap) {
        if (!err) {
            return;
        }
        var data = err.response.data;
        var state = data && data.state;
        // 优先取用户自定义的
        if (state && errorMap.get(state)) {
            return message_1.error(errorMap.get(state));
        }
        // 如果有栈信息就打印
        if (data && data.stack) {
            console.error(data.stack);
        }
        // 其次尝试读取 message
        if (data && data.message) {
            return message_1.error(data.message);
        }
    };
    ErrorCatcher.prototype.catch = function (errorMap) {
        var self = this;
        var localErrorMap = !errorMap ? self.globalErrorMap
            : new Map(__spread(self.globalErrorMap.entries(), errorMap.entries()));
        return function (target, propertyKey, descriptor) {
            var original = Reflect.get(target, propertyKey);
            if (!(original instanceof Function)) {
                console.warn("[error-catcher:catch]: \u65E0\u6CD5\u88C5\u9970\u975E Function \u5BF9\u8C61, key: " + propertyKey.toString() + " \n");
                return;
            }
            var successHandler = function (res) {
                console.log('successHandler');
                return self.successHandler(res, localErrorMap);
            };
            var failureHandler = function (err) {
                console.log('failureHandler');
                return self.failureHandler(err, localErrorMap);
            };
            var functionWrap = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                console.log("run " + propertyKey.toString() + " wrap...");
                var runResult = Reflect.apply(original, target, params);
                if (!(runResult instanceof Promise)) {
                    return runResult;
                }
                runResult.then(successHandler, failureHandler);
                return runResult;
            };
            descriptor.value = functionWrap;
            // TODO: 不知道为什么用 Reflect.defineProperty 或 Reflect.set 不会成功、返回 true 但是实际调用时还是原来的
            // const reviseState = Reflect.defineProperty(target, propertyKey, {
            //     ...descriptor,
            //     value: functionWrap
            // })
            // console.log(descriptor.value, functionWrap)
            // console.log(reviseState)
            // if (!reviseState) {
            //     console.warn(`[error-catcher:catch]: 装饰失败, key: ${propertyKey.toString()}`)
            //     return
            // }
        };
    };
    __decorate([
        autobind_decorator_1.default
    ], ErrorCatcher.prototype, "addError", null);
    __decorate([
        autobind_decorator_1.default
    ], ErrorCatcher.prototype, "successHandler", null);
    __decorate([
        autobind_decorator_1.default
    ], ErrorCatcher.prototype, "failureHandler", null);
    __decorate([
        autobind_decorator_1.default
    ], ErrorCatcher.prototype, "catch", null);
    return ErrorCatcher;
}());
exports.errorCatcher = new ErrorCatcher();
exports.default = exports.errorCatcher.catch;
//# sourceMappingURL=index.js.map