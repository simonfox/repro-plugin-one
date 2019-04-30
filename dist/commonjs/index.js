"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var index_1 = require("./features/index");
function configure(config) {
    config.feature(constants_1.PLUGIN_FEATURES_PATH);
}
exports.configure = configure;
exports.default = {
    features: index_1.default,
};
