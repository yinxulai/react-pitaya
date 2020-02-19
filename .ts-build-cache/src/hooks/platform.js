var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const react_1 = __importDefault(require("react"));
    function usePlatform() {
        const [size, setSize] = react_1.default.useState({
            isMobile: false,
            isPortrait: false,
            isLandscape: false,
            width: 0,
            height: 0,
            isLarge: false,
            isSmall: false
        });
        const onResize = react_1.default.useCallback(() => {
            if (!window) {
                throw Error('window is not defined');
            }
            if (!window.document) {
                throw Error('window.document is not defined');
            }
            const document = window.document;
            if (!document.documentElement) {
                throw Error('document.documentElement is not defined');
            }
            const documentElement = document.documentElement;
            const { clientWidth = 0, clientHeight = 0 } = documentElement;
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
        react_1.default.useEffect(() => {
            onResize();
            window.addEventListener('resize', onResize);
            return (() => window.removeEventListener('resize', onResize));
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
        const matchs = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/i);
        return !!(matchs && matchs.length);
    }
});
//# sourceMappingURL=platform.js.map