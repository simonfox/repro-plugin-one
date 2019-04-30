import { PLUGIN_FEATURES_PATH } from "./constants";
import features from "./features/index";
export function configure(config) {
    config.feature(PLUGIN_FEATURES_PATH);
}
export default {
    features: features,
};
