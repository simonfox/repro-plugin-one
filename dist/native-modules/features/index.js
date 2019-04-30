define(["require", "exports", "./feature-one", "plugin-two"], function (require, exports, feature_one_1, plugin_two_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.feature(feature_one_1.default.path);
        var xx = plugin_two_1.default.features.featureOne.actions.featureOne({ name: "ping", order: 5 });
    }
    exports.configure = configure;
    exports.default = {
        featureOne: feature_one_1.default,
    };
});
