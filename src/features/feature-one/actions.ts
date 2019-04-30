import { actionCreatorFactory } from "typescript-fsa";
import { FEATURE_REDUCER_KEY } from "./constants";

const action = actionCreatorFactory(FEATURE_REDUCER_KEY);

const featureOne = action<{ route: string }>("feature-one");

export const actions = {
  featureOne,
};

export default {
  featureOne,
};
