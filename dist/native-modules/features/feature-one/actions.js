import { actionCreatorFactory } from "typescript-fsa";
import { FEATURE_REDUCER_KEY } from "./constants";
var action = actionCreatorFactory(FEATURE_REDUCER_KEY);
var featureOne = action("feature-one");
export var actions = {
    featureOne: featureOne,
};
export default {
    featureOne: featureOne,
};
