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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var style_less_1 = __importDefault(require("./style.less"));
var autobind_1 = __importDefault(require("../autobind"));
var container_1 = __importDefault(require("../../components/container"));
var controller_1 = __importStar(require("./controller"));
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container(props) {
        var _this = _super.call(this, props) || this;
        // 订阅
        _this.cancelListener = _this.controller.addListener(function () {
            _this.setState({ overlays: _this.controller.overlays });
        });
        return _this;
    }
    Container.prototype.generateCloser = function (key) {
        return function (_) { return controller_1.remove(key); };
    };
    Container.prototype.componentWillUnmount = function () {
        this.cancelListener && this.cancelListener();
    };
    Object.defineProperty(Container.prototype, "controller", {
        get: function () {
            return this.props.controller || controller_1.default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "overlayEntities", {
        get: function () {
            var _this = this;
            var overlays = (this.state || {}).overlays;
            if (overlays && overlays.size > 0) {
                var entries = Array.from(overlays.entries());
                return entries.map(function (_a) {
                    var _b = __read(_a, 2), id = _b[0], overlay = _b[1];
                    if (!controller_1.isOverlayRender(overlay)) {
                        return null; // 非有效的 Overlay
                    }
                    var isShowMask = overlay.isShowMask; // 是否显示遮罩
                    var enableCloseByMask = overlay.enableCloseByMask; // 是否允许点击遮罩关闭
                    var maskCloser = enableCloseByMask ? _this.generateCloser(id) : undefined;
                    return (react_1.default.createElement(container_1.default, { className: [style_less_1.default.entitiesRoot], style: { zIndex: id }, key: String(id) },
                        isShowMask && react_1.default.createElement(container_1.default, { className: [style_less_1.default.mask], onClick: maskCloser }),
                        overlay.render(_this.generateCloser(id))));
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Container.prototype.render = function () {
        return [
            this.props.children,
            react_1.default.createElement(container_1.default, { className: [style_less_1.default.overlay] }, this.overlayEntities)
        ];
    };
    __decorate([
        autobind_1.default
    ], Container.prototype, "generateCloser", null);
    return Container;
}(react_1.default.Component));
exports.default = Container;
//# sourceMappingURL=container.js.map