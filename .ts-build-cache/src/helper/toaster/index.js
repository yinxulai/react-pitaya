(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./container", "./controller"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import React from 'react'
    // import {insert} from '../overlay'
    // import Container from './container'
    var container_1 = require("./container");
    exports.default = container_1.default;
    var controller_1 = require("./controller");
    exports.info = controller_1.info;
    exports.error = controller_1.error;
    exports.success = controller_1.success;
    exports.warning = controller_1.warning;
});
// insert(<Container/>)
//# sourceMappingURL=index.js.map