"use strict";
(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
        factory();
}((function () {
    'use strict';
    function __any_css_style_inject__(css) {
        if (!css)
            return;
        // 环境检查
        if (typeof (window) == 'undefined')
            return;
        if (typeof (document) == 'undefined')
            return;
        if (typeof (document.head) == 'undefined')
            return;
        function hash(input) {
            var hash = 5381;
            var i = input.length - 1;
            var I64BIT_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');
            if (typeof input == 'string') {
                for (; i > -1; i--)
                    hash += (hash << 5) + input.charCodeAt(i);
            }
            else {
                for (; i > -1; i--)
                    hash += (hash << 5) + input[i];
            }
            var value = hash & 0x7FFFFFFF;
            var retValue = '';
            do {
                retValue += I64BIT_TABLE[value & 0x3F];
            } while (value >>= 6);
            return retValue;
        }
        // 计算内容哈希
        var documentID = hash(css);
        if (document.getElementById(documentID))
            return;
        // 创建 style
        var style = document.createElement('style');
        style.id = documentID;
        style.innerHTML = css;
        // 插入 dom
        document.head.appendChild(style);
        return css;
    }
    var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    const autobind_1 = __importDefault(require("../autobind"));
    const hash_1 = __importDefault(require("../../utils/hash"));
    const listener_1 = require("../listener");
    function isOverlayObject(overlay) {
        const { render } = overlay;
        // 检查 render 类型
        if (render && render instanceof Function) {
            return true;
        }
        return false;
    }
    exports.isOverlayObject = isOverlayObject;
    // overlayMap 控制器
    class Controller extends listener_1.Listener {
        constructor() {
            super(...arguments);
            this.overlayMap = new Map();
        }
        get overlayList() { return [...this.overlayMap.values()]; }
        insert(overlay) {
            const uniqueID = hash_1.default(overlay);
            this.overlayMap.set(uniqueID, overlay);
            this.dispatchSubscribers();
            // 返回 
            return () => void this.remove(uniqueID);
        }
        remove(id) {
            if (this.overlayMap.delete(id)) {
                this.dispatchSubscribers();
            }
        }
    }
    __decorate([
        autobind_1.default
    ], Controller.prototype, "insert", null);
    __decorate([
        autobind_1.default
    ], Controller.prototype, "remove", null);
    exports.Controller = Controller;
    const controller = new Controller();
    exports.insert = controller.insert, exports.remove = controller.remove;
    exports.default = controller;
})));
//# sourceMappingURL=controller.js.map
//# sourceMappingURL=controller.js.map