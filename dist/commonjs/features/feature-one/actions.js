"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typescript_fsa_1 = require("typescript-fsa");
var constants_1 = require("./constants");
var action = typescript_fsa_1.actionCreatorFactory(constants_1.FEATURE_REDUCER_KEY);
var featureOne = action("feature-one");
exports.actions = {
    featureOne: featureOne,
};
exports.default = {
    featureOne: featureOne,
};
