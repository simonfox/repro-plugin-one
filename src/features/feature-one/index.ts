import { FrameworkConfiguration } from "aurelia-framework";
import actions from "./actions";
import { FEATURE_PATH } from "./constants";

export function configure(config: FrameworkConfiguration) {
  console.log("configuring feature-one");
}

export default {
  actions,
  path: FEATURE_PATH,
}