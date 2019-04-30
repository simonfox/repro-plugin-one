import { FrameworkConfiguration } from "aurelia-framework";
import featureOne from "./feature-one";
import pluginTwo from "plugin-two";

export function configure(config: FrameworkConfiguration) {
  config.feature(featureOne.path);
  const xx = pluginTwo.features.featureOne.actions.featureOne({ name: "ping", order: 5 });
}

export default {
  featureOne: featureOne,
};