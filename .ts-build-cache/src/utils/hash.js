(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const I64BIT_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');
    function hash(...source) {
        let source_string = '';
        if (typeof source === 'object') {
            source_string = JSON.stringify(source);
        }
        if (typeof source === 'string') {
            source_string = source;
        }
        let hash = 5381;
        for (let index = source_string.length - 1; index > -1; index--) {
            hash += (hash << 5) + source_string.charCodeAt(index);
        }
        let retValue = '';
        let value = hash & 0x7FFFFFFF;
        do {
            retValue += I64BIT_TABLE[value & 0x3F];
        } while (value >>= 6);
        return retValue;
    }
    exports.default = hash;
});
//# sourceMappingURL=hash.js.map