define(["require", "exports", "./actions", "./constants"], function (require, exports, actions_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        console.log("configuring feature-one");
    }
    exports.configure = configure;
    exports.default = {
        actions: actions_1.default,
        path: constants_1.FEATURE_PATH,
    };
});
