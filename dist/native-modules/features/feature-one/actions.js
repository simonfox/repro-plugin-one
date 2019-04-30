define(["require", "exports", "typescript-fsa", "./constants"], function (require, exports, typescript_fsa_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var action = typescript_fsa_1.actionCreatorFactory(constants_1.FEATURE_REDUCER_KEY);
    var featureOne = action("feature-one");
    var x = { property: 5 };
    exports.actions = {
        featureOne: featureOne,
    };
    exports.default = {
        featureOne: featureOne,
    };
});
