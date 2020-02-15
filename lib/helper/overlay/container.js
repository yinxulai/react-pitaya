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

__any_css_style_inject__("._overlay_1y2vl_1 {\n  top: 0;\n  left: 0;\n  z-index: 1;\n  position: fixed;\n}\n._entitiesRoot_1y2vl_7 {\n  top: 0;\n  left: 0;\n  position: absolute;\n}\n._mask_1y2vl_12 {\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.01);\n}\n");
        var style = {"overlay":"_overlay_1y2vl_1","entitiesRoot":"_entitiesRoot_1y2vl_7","-webkit-mask":"_mask_1y2vl_12","mask":"_mask_1y2vl_12","webkitMask":"_mask_1y2vl_12"};

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

export default Container$1;
//# sourceMappingURL=container.js.map
