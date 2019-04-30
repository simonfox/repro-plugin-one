"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
var constants_1 = require("./constants");
function configure(config) {
    console.log("configuring feature-one");
}
exports.configure = configure;
exports.default = {
    actions: actions_1.default,
    path: constants_1.FEATURE_PATH,
};
