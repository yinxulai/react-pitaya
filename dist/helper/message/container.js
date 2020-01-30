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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var style_less_1 = __importDefault(require("./style.less"));
var index_1 = __importDefault(require("../../components/container/index"));
var controller_1 = __importDefault(require("./controller"));
var react_transition_group_1 = require("react-transition-group");
var index_2 = __importDefault(require("../../components/message/index"));
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container(props) {
        var _this = _super.call(this, props) || this;
        _this.cancelListener = _this.controller.addListener(function () {
            _this.setState({ messages: _this.controller.messages });
        }); // 订阅
        return _this;
    }
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
    Object.defineProperty(Container.prototype, "messages", {
        get: function () {
            var messages = (this.state || {}).messages;
            return messages || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "animationClassNames", {
        get: function () {
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
        },
        enumerable: true,
        configurable: true
    });
    Container.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(index_1.default, { className: [style_less_1.default.container] },
            react_1.default.createElement(react_transition_group_1.TransitionGroup, { className: style_less_1.default.list }, this.messages.map(function (message, index) { return (react_1.default.createElement(react_transition_group_1.CSSTransition, { key: String(index), classNames: _this.animationClassNames, timeout: 200 },
                react_1.default.createElement(index_2.default, __assign({}, message)))); }))));
    };
    return Container;
}(react_1.default.Component));
exports.Container = Container;
//# sourceMappingURL=container.js.map