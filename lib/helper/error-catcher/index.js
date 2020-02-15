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

import React from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Return a descriptor removing the value and returning a getter
 * The getter will return a .bind version of the function
 * and memoize the result against a symbol on the instance
 */
function boundMethod(target, key, descriptor) {
  var fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(_typeof(fn)));
  } // In IE11 calling Object.defineProperty has a side-effect of evaluating the
  // getter for the property which is being replaced. This causes infinite
  // recursion and an "Out of stack space" error.


  var definingProperty = false;
  return {
    configurable: true,
    get: function get() {
      // eslint-disable-next-line no-prototype-builtins
      if (definingProperty || this === target.prototype || this.hasOwnProperty(key) || typeof fn !== 'function') {
        return fn;
      }

      var boundFn = fn.bind(this);
      definingProperty = true;
      Object.defineProperty(this, key, {
        configurable: true,
        get: function get() {
          return boundFn;
        },
        set: function set(value) {
          fn = value;
          delete this[key];
        }
      });
      definingProperty = false;
      return boundFn;
    },
    set: function set(value) {
      fn = value;
    }
  };
}
/**
 * Use boundMethod to bind all methods on the target.prototype
 */

function boundClass(target) {
  // (Using reflect to get all keys including symbols)
  var keys; // Use Reflect if exists

  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    keys = Reflect.ownKeys(target.prototype);
  } else {
    keys = Object.getOwnPropertyNames(target.prototype); // Use symbols if support is provided

    if (typeof Object.getOwnPropertySymbols === 'function') {
      keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
    }
  }

  keys.forEach(function (key) {
    // Ignore special case target method
    if (key === 'constructor') {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key); // Only methods need binding

    if (typeof descriptor.value === 'function') {
      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
    }
  });
  return target;
}
function autobind() {
  if (arguments.length === 1) {
    return boundClass.apply(void 0, arguments);
  }

  return boundMethod.apply(void 0, arguments);
}

// export default function autobind(target: any, _: PropertyKey, descriptor: PropertyDescriptor) {
//     const fn = descriptor.value;
//     if (typeof fn !== 'function') {
//         throw new TypeError(`@autobind decorator can only be applied to methods not: ${typeof fn}`);
//     }
//     descriptor.value = fn.bind(target)
// }

__any_css_style_inject__("._overlay_1y2vl_1 {\n  top: 0;\n  left: 0;\n  z-index: 1;\n  position: fixed;\n}\n._entitiesRoot_1y2vl_7 {\n  top: 0;\n  left: 0;\n  position: absolute;\n}\n._mask_1y2vl_12 {\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.01);\n}\n");
        var style = {"overlay":"_overlay_1y2vl_1","entitiesRoot":"_entitiesRoot_1y2vl_7","-webkit-mask":"_mask_1y2vl_12","mask":"_mask_1y2vl_12","webkitMask":"_mask_1y2vl_12"};

__any_css_style_inject__(undefined);
        var lessstyle = {};

// 垃圾实现
function parseStyle(style) {
    const styleObject = {};
    const parse = (style) => {
        // 数组
        if (style && Array.isArray(style)) {
            for (let index = 0; index < style.length; index++) {
                parse(style[index]);
            }
        }
        else {
            style && Object.assign(styleObject, style);
        }
    };
    parse(style);
    return styleObject;
}
// 垃圾实现
function parseClassName(className) {
    const classNameArray = [];
    const parse = (className) => {
        if (!className) {
            return;
        }
        // 数组
        if (Array.isArray(className)) {
            for (let index = 0; index < className.length; index++) {
                parse(className[index]);
            }
        }
        else {
            className && classNameArray.push(className);
        }
    };
    parse(className);
    return classNameArray.join(' ');
}
const Container = props => {
    const { style, className, children } = props, attributes = __rest(props, ["style", "className", "children"]);
    const classNames = parseClassName(className);
    const styles = parseStyle(style);
    const classstring = [lessstyle.container, classNames].filter(Boolean).join(' ').trim();
    return (React.createElement("div", Object.assign({ className: classstring, style: styles }, attributes), props.children));
};

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
    autobind
], Listener.prototype, "addListener", null);
__decorate([
    autobind
], Listener.prototype, "removeListener", null);
__decorate([
    autobind
], Listener.prototype, "dispatchSubscribers", null);

function isOverlayRender(overlay) {
    const { render } = overlay;
    // 检查 render 类型
    if (render && render instanceof Function) {
        return true;
    }
    return false;
}
class Controller extends Listener {
    constructor() {
        super(...arguments);
        this.lastID = 0;
        this.overlays = new Map();
    }
    insert(overlay) {
        const id = ++this.lastID;
        this.overlays.set(id, overlay);
        this.dispatchSubscribers();
        return () => this.remove(id);
    }
    remove(id) {
        if (this.overlays.delete(id)) {
            this.dispatchSubscribers();
        }
    }
}
__decorate([
    autobind
], Controller.prototype, "insert", null);
__decorate([
    autobind
], Controller.prototype, "remove", null);
const controller = new Controller();
const { insert, remove } = controller;

class Container$1 extends React.Component {
    constructor(props) {
        super(props);
        // 订阅
        this.cancelListener = this.controller.addListener(() => {
            this.setState({ overlays: this.controller.overlays });
        });
    }
    generateCloser(key) {
        return (_) => remove(key);
    }
    componentWillUnmount() {
        this.cancelListener && this.cancelListener();
    }
    get controller() {
        return this.props.controller || controller;
    }
    get overlayEntities() {
        const { overlays } = this.state || {};
        if (overlays && overlays.size > 0) {
            const entries = Array.from(overlays.entries());
            return entries.map(([id, overlay]) => {
                if (!isOverlayRender(overlay)) {
                    return null; // 非有效的 Overlay
                }
                const isShowMask = overlay.isShowMask; // 是否显示遮罩
                const enableCloseByMask = overlay.enableCloseByMask; // 是否允许点击遮罩关闭
                const maskCloser = enableCloseByMask ? this.generateCloser(id) : undefined;
                return (React.createElement(Container, { className: [style.entitiesRoot], style: { zIndex: id }, key: String(id) },
                    isShowMask && React.createElement(Container, { className: [style.mask], onClick: maskCloser }),
                    overlay.render(this.generateCloser(id))));
            });
        }
    }
    render() {
        return [
            this.props.children,
            React.createElement(Container, { className: [style.overlay] }, this.overlayEntities)
        ];
    }
}
__decorate([
    autobind
], Container$1.prototype, "generateCloser", null);

__any_css_style_inject__("._container_1daks_1 {\n  top: 0;\n  left: 0;\n  position: fixed;\n  text-align: right;\n  width: 100vw !important;\n}\n._container_1daks_1 ._list_1daks_8 {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n}\n._appear_1daks_15,\n._enter_1daks_16 {\n  opacity: 0;\n  transform: scale(0.8) translateY(-100%);\n}\n._appearActive_1daks_20,\n._enterActive_1daks_21 {\n  opacity: 1;\n  transition: 0.2s;\n  transform: scale(1) translateY(0);\n}\n._appearDone_1daks_26,\n._enterDone_1daks_27 {\n  opacity: 1;\n  transform: scale(1) translateY(0);\n}\n._exit_1daks_31 {\n  opacity: 1;\n  transform: scale(1) translateY(0);\n}\n._exitActive_1daks_35 {\n  opacity: 0;\n  transition: 0.2s;\n  transform: scale(0.7) translateY(-100%);\n}\n._exitDone_1daks_40 {\n  opacity: 0;\n  transform: scale(0.7) translateY(-100%);\n}\n");
        var style$1 = {"container":"_container_1daks_1","list":"_list_1daks_8","appear":"_appear_1daks_15","enter":"_enter_1daks_16","appearActive":"_appearActive_1daks_20","enterActive":"_enterActive_1daks_21","appearDone":"_appearDone_1daks_26","enterDone":"_enterDone_1daks_27","exit":"_exit_1daks_31","exitActive":"_exitActive_1daks_35","exitDone":"_exitDone_1daks_40"};

__any_css_style_inject__("._title_gzrxe_1 {\n  color: black;\n  background-color: transparent;\n}\n._title_gzrxe_1 ._subtitle_gzrxe_5 {\n  opacity: 0.5;\n  color: black;\n}\n._level-1_gzrxe_9 {\n  font-size: 40px;\n  font-weight: bold;\n}\n._level-1_gzrxe_9 ._subtitle_gzrxe_5 {\n  font-size: 26px;\n  font-weight: normal;\n}\n._level-2_gzrxe_17 {\n  font-size: 32px;\n  font-weight: bold;\n}\n._level-2_gzrxe_17 ._subtitle_gzrxe_5 {\n  font-size: 20px;\n  font-weight: normal;\n}\n._level-3_gzrxe_25 {\n  font-size: 28px;\n  font-weight: bold;\n}\n._level-3_gzrxe_25 ._subtitle_gzrxe_5 {\n  font-size: 16px;\n  font-weight: normal;\n}\n._level-4_gzrxe_33 {\n  font-size: 20px;\n  font-weight: bold;\n}\n._level-4_gzrxe_33 ._subtitle_gzrxe_5 {\n  display: none;\n  font-weight: normal;\n}\n._level-5_gzrxe_41 {\n  font-size: 16px;\n  font-weight: bold;\n}\n._level-5_gzrxe_41 ._subtitle_gzrxe_5 {\n  display: none;\n  font-weight: normal;\n}\n._level-6_gzrxe_49 {\n  font-size: 14px;\n  font-weight: bold;\n}\n._level-6_gzrxe_49 ._subtitle_gzrxe_5 {\n  display: none;\n  font-weight: normal;\n}\n");
        var style$2 = {"title":"_title_gzrxe_1","subtitle":"_subtitle_gzrxe_5","level-1":"_level-1_gzrxe_9","level-2":"_level-2_gzrxe_17","level-3":"_level-3_gzrxe_25","level-4":"_level-4_gzrxe_33","level-5":"_level-5_gzrxe_41","level-6":"_level-6_gzrxe_49","level1":"_level-1_gzrxe_9","level2":"_level-2_gzrxe_17","level3":"_level-3_gzrxe_25","level4":"_level-4_gzrxe_33","level5":"_level-5_gzrxe_41","level6":"_level-6_gzrxe_49"};

const Title = props => {
    const { level = 1, title, subtitle } = props;
    return (React.createElement(Container, { className: [style$2.title, style$2[`level-${level}`], props.className], style: props.style },
        React.createElement("div", null, title),
        React.createElement("div", { className: style$2.subtitle }, subtitle)));
};

__any_css_style_inject__("._message_1owtj_1 {\n  color: black;\n  min-width: 200px;\n  border-radius: 6px;\n  background-color: white;\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  box-shadow: 0px 16px 16px -4px rgba(0, 0, 0, 0.26666667);\n  padding-top: 8px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-top: 8px;\n  margin-left: 8px;\n  margin-right: 8px;\n  margin-bottom: 8px;\n}\n._context_1owtj_23 {\n  color: black;\n  font-size: 0.9em;\n  text-align: left;\n}\n._info_1owtj_28 {\n  color: #351eff;\n}\n._error_1owtj_31 {\n  color: #f5222d;\n}\n._success_1owtj_34 {\n  color: #52c41a;\n}\n._warning_1owtj_37 {\n  color: #faad14;\n}\n");
        var style$3 = {"message":"_message_1owtj_1","context":"_context_1owtj_23","info":"_info_1owtj_28","error":"_error_1owtj_31","success":"_success_1owtj_34","warning":"_warning_1owtj_37"};

const Message = props => {
    const { type = 'info', context } = props;
    return (React.createElement(Container, { className: [style$3.message, props.className, style$3[type]], style: [props.style] },
        React.createElement(Title, { className: [style$3[type]], level: 5, title: type }),
        React.createElement(Container, { className: [style$3.context] }, context)));
};

class Container$2 extends React.Component {
    constructor(props) {
        super(props);
        this.cancelListener = this.controller.addListener(() => {
            this.setState({ messages: this.controller.messages });
        }); // 订阅
    }
    componentWillUnmount() {
        this.cancelListener && this.cancelListener();
    }
    get controller() {
        return this.props.controller || controller$1;
    }
    get messages() {
        const { messages } = this.state || {};
        return messages || [];
    }
    get animationClassNames() {
        return {
            appear: style$1.appear,
            appearActive: style$1.appearActive,
            appearDone: style$1.appearDone,
            enter: style$1.enter,
            enterActive: style$1.enterActive,
            enterDone: style$1.enterDone,
            exit: style$1.exit,
            exitActive: style$1.exitActive,
            exitDone: style$1.exitDone,
        };
    }
    render() {
        return (React.createElement(Container, { className: [style$1.container] }, this.messages.map((message, index) => (React.createElement(Message, Object.assign({}, message))
        // <CSSTransition key={String(index)} classNames={this.animationClassNames} timeout={200} >
        //   <Message {...message} />
        // </CSSTransition>
        ))));
    }
}

class Controller$1 extends Listener {
    constructor() {
        super(...arguments);
        this.lastID = 0;
        this.messageMap = new Map();
    }
    static mountOnOverlay() {
        if (!Controller$1.isMountOnOverlay) {
            insert({
                isFixed: true,
                isShowMask: false,
                enableCloseByMask: false,
                render: (_) => React.createElement(Container$2, null)
            });
        }
        Controller$1.isMountOnOverlay = true;
    }
    get messages() {
        return Array.from(this.messageMap.values());
    }
    open(message, lifeTime = 2000) {
        Controller$1.mountOnOverlay();
        this.messageMap.set(++this.lastID, message);
        this.delayRemoval(this.lastID, lifeTime);
        this.dispatchSubscribers();
    }
    info(context) {
        this.open({ type: 'info', context }, 2000);
    }
    success(context) {
        this.open({ type: 'success', context }, 2000);
    }
    warning(context) {
        this.open({ type: 'warning', context }, 3000);
    }
    error(context) {
        this.open({ type: 'error', context }, 4000);
    }
    delayRemoval(id, lifeTime) {
        setTimeout(() => {
            this.messageMap.delete(id);
            this.dispatchSubscribers();
        }, lifeTime);
    }
}
// 挂载 Overlay
Controller$1.isMountOnOverlay = false;
__decorate([
    autobind
], Controller$1.prototype, "open", null);
__decorate([
    autobind
], Controller$1.prototype, "info", null);
__decorate([
    autobind
], Controller$1.prototype, "success", null);
__decorate([
    autobind
], Controller$1.prototype, "warning", null);
__decorate([
    autobind
], Controller$1.prototype, "error", null);
__decorate([
    autobind
], Controller$1.prototype, "delayRemoval", null);
const controller$1 = new Controller$1();
const { open, info, error, success, warning } = controller$1;

class ErrorCatcher {
    constructor() {
        this.globalErrorMap = new Map();
    }
    addError(error) {
        error.forEach((errorMap, errorKey) => {
            if (this.globalErrorMap.get(errorKey)) {
                console.warn(`[error-catcher:addError]:添加重复的 error map, key: ${errorKey.toString()} \n`);
            }
            this.globalErrorMap.set(errorKey, errorMap);
        });
    }
    successHandler(res, errorMap) {
        if (!res) {
            return;
        }
        const data = res && res.data;
        const state = data && data.state;
        // 优先取用户自定义的
        if (state && errorMap.get(state)) {
            return success(errorMap.get(state));
        }
        // 其次尝试读取 message
        if (data && data.message) {
            return success(data.message);
        }
    }
    failureHandler(err, errorMap) {
        if (!err) {
            return;
        }
        const data = err.response.data;
        const state = data && data.state;
        // 优先取用户自定义的
        if (state && errorMap.get(state)) {
            return error(errorMap.get(state));
        }
        // 如果有栈信息就打印
        if (data && data.stack) {
            console.error(data.stack);
        }
        // 其次尝试读取 message
        if (data && data.message) {
            return error(data.message);
        }
    }
    catch(errorMap) {
        const self = this;
        const localErrorMap = !errorMap ? self.globalErrorMap
            : new Map([...self.globalErrorMap.entries(), ...errorMap.entries()]);
        return function (target, propertyKey, descriptor) {
            const original = Reflect.get(target, propertyKey);
            if (!(original instanceof Function)) {
                console.warn(`[error-catcher:catch]: 无法装饰非 Function 对象, key: ${propertyKey.toString()} \n`);
                return;
            }
            const successHandler = function (res) {
                console.log('successHandler');
                return self.successHandler(res, localErrorMap);
            };
            const failureHandler = function (err) {
                console.log('failureHandler');
                return self.failureHandler(err, localErrorMap);
            };
            const functionWrap = function (...params) {
                console.log(`run ${propertyKey.toString()} wrap...`);
                const runResult = Reflect.apply(original, target, params);
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
    }
}
__decorate([
    autobind
], ErrorCatcher.prototype, "addError", null);
__decorate([
    autobind
], ErrorCatcher.prototype, "successHandler", null);
__decorate([
    autobind
], ErrorCatcher.prototype, "failureHandler", null);
__decorate([
    autobind
], ErrorCatcher.prototype, "catch", null);
const errorCatcher = new ErrorCatcher();
var index = errorCatcher.catch;

export default index;
export { errorCatcher };
//# sourceMappingURL=index.js.map
