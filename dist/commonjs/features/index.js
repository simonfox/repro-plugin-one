"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var feature_one_1 = require("./feature-one");
function configure(config) {
    config.feature(feature_one_1.default.path);
}
exports.configure = configure;
exports.default = {
    featureOne: feature_one_1.default,
};
