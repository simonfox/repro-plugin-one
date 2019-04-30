define(["require", "exports", "./constants", "./features/index"], function (require, exports, constants_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.feature(constants_1.PLUGIN_FEATURES_PATH);
    }
    exports.configure = configure;
    exports.default = {
        features: index_1.default,
    };
});
