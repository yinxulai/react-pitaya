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
    var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    const react_1 = __importDefault(require("react"));
    const style_less_1 = __importDefault(require("./style.less"));
    const message_1 = __importDefault(require("../../components/message"));
    const container_1 = __importDefault(require("../../components/container"));
    const react_transition_group_1 = require("react-transition-group");
    const controller_1 = __importDefault(require("./controller"));
    class Container extends react_1.default.Component {
        componentDidMount() {
            // 装载一下
            this.setState({ toasers: this.controller.toaserList });
            // 监听后续变动
            this.cancelListener = this.controller.addListener(() => {
                this.setState(Object.assign(Object.assign({}, this.state), { toasers: this.controller.toaserList }));
            }); // 订阅
        }
        // 取消订阅
        componentWillUnmount() {
            this.cancelListener && this.cancelListener();
        }
        // 延迟当前消息销毁
        continuedLife() {
        }
        get controller() {
            return this.props.controller || controller_1.default;
        }
        get toasers() {
            const { toasers } = this.state || {};
            return toasers || [];
        }
        get animationClassNames() {
            return {
                appear: style_less_1.default.appear,
                appearActive: style_less_1.default.appearActive,
                appearDone: style_less_1.default.appearDone,
                enter: style_less_1.default.enter,
                enterActive: style_less_1.default.enterActive,
                enterDone: style_less_1.default.enterDone,
                exit: style_less_1.default.exit,
                exitActive: style_less_1.default.exitActive,
                exitDone: style_less_1.default.exitDone,
            };
        }
        render() {
            return (react_1.default.createElement(container_1.default, { className: [style_less_1.default.container] }, react_1.default.createElement(react_transition_group_1.TransitionGroup, { className: style_less_1.default.list }, this.toasers.map((message, index) => (react_1.default.createElement(react_transition_group_1.CSSTransition, { key: String(index), classNames: this.animationClassNames, timeout: 200 }, react_1.default.createElement(container_1.default, { onMouseMove: message.delayRemoval }, react_1.default.createElement(message_1.default, Object.assign({}, message)))))))));
        }
    }
    exports.default = Container;
})));
//# sourceMappingURL=container.js.map
//# sourceMappingURL=container.js.map