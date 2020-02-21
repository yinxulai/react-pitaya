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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const style_less_1 = __importDefault(require("./style.less"));
const autobind_1 = __importDefault(require("../autobind"));
const container_1 = __importDefault(require("../../components/container"));
const controller_1 = __importStar(require("./controller"));
class Container extends react_1.default.Component {
    componentDidMount() {
        this.setState({ overlays: this.controller.overlayMap });
        this.cancelListener = this.controller.addListener(() => {
            this.setState(Object.assign(Object.assign({}, this.state), { overlays: this.controller.overlayMap }));
        });
    }
    componentWillUnmount() {
        this.cancelListener && this.cancelListener();
    }
    generateCloser(key) {
        return (_) => this.controller.remove(key);
    }
    get controller() {
        return this.props.controller || controller_1.default;
    }
    get overlayEntities() {
        const { overlays } = this.state || {};
        if (!overlays || overlays.size <= 0) {
            return [];
        }
        return [...overlays.entries()].map(([id, overlay]) => {
            if (!controller_1.isOverlayObject(overlay)) {
                return null; // 非有效的 Overlay
            }
            const sortID = Date.now();
            const isShowMask = overlay.isShowMask; // 是否显示遮罩
            const enableCloseByMask = overlay.enableCloseByMask; // 是否允许点击遮罩关闭
            const maskCloser = enableCloseByMask ? this.generateCloser(id) : undefined;
            return (react_1.default.createElement(container_1.default, { className: [style_less_1.default.entitiesRoot], style: { zIndex: sortID }, key: id },
                isShowMask && react_1.default.createElement(container_1.default, { className: [style_less_1.default.mask], onClick: maskCloser }),
                overlay.render(this.generateCloser(id))));
        }).filter(Boolean);
    }
    render() {
        const sortID = Date.now();
        return (react_1.default.createElement(container_1.default, { className: [style_less_1.default.overlay], style: { zIndex: sortID } }, this.overlayEntities));
    }
}
__decorate([
    autobind_1.default
], Container.prototype, "generateCloser", null);
exports.default = Container;
//# sourceMappingURL=container.js.map