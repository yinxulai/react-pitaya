"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function usePlatform() {
    var _a = __read(react_1.default.useState({
        isMobile: false,
        isPortrait: false,
        isLandscape: false,
        width: 0,
        height: 0,
        isLarge: false,
        isSmall: false
    }), 2), size = _a[0], setSize = _a[1];
    var onResize = react_1.default.useCallback(function () {
        if (!window) {
            throw Error('window is not defined');
        }
        if (!window.document) {
            throw Error('window.document is not defined');
        }
        var document = window.document;
        if (!document.documentElement) {
            throw Error('document.documentElement is not defined');
        }
        var documentElement = document.documentElement;
        var _a = documentElement.clientWidth, clientWidth = _a === void 0 ? 0 : _a, _b = documentElement.clientHeight, clientHeight = _b === void 0 ? 0 : _b;
        setSize({
            width: clientWidth,
            height: clientHeight,
            isMobile: isMobile(),
            isSmall: clientWidth <= 900,
            isLarge: clientWidth >= 1920,
            isPortrait: clientHeight >= clientWidth,
            isLandscape: clientHeight < clientWidth,
        });
    }, []);
    react_1.default.useEffect(function () {
        onResize();
        window.addEventListener('resize', onResize);
        return (function () { return window.removeEventListener('resize', onResize); });
    }, []);
    return size;
}
exports.default = usePlatform;
function isMobile() {
    if (!navigator) {
        throw Error('navigator is not defined');
    }
    if (!navigator.userAgent) {
        throw Error('navigator.userAgent is not defined');
    }
    var matchs = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/i);
    return !!(matchs && matchs.length);
}
//# sourceMappingURL=platform.js.map