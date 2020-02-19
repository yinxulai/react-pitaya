"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(start = 4, end = 20) {
    const error = new Error();
    const stack = error.stack || '';
    const stackList = stack.split('\n');
    stackList.slice(start, end);
    // stackList.unshift(`Name: ${error.name}`)
    // stackList.unshift(`Message: ${error.message}`)
    return stackList.join('\n');
}
exports.default = default_1;
//# sourceMappingURL=index.js.map