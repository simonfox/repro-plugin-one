import { FrameworkConfiguration } from "aurelia-framework";
import { PLUGIN_FEATURES_PATH } from "./constants";
import features from "./features/index";

export function configure(config: FrameworkConfiguration) {
  config.feature(PLUGIN_FEATURES_PATH);
}

export default {
  features,
}