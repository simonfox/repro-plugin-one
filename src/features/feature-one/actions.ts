import p2 from "plugin-two";
import { actionCreatorFactory } from "typescript-fsa";
import { FEATURE_REDUCER_KEY } from "./constants";

const action = actionCreatorFactory(FEATURE_REDUCER_KEY);

const x = p2.features.featureOne.actions.featureOne({ name: "abc", order: 123 });
const featureOne = action<{ route: string }>("feature-one");

export const actions = {
  featureOne,
};

export default {
  featureOne,
};
