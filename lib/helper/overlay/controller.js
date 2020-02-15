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

export default controller;
export { Controller, insert, isOverlayRender, remove };
//# sourceMappingURL=controller.js.map
