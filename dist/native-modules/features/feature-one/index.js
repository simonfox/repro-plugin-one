import actions from "./actions";
import { FEATURE_PATH } from "./constants";
export function configure(config) {
    console.log("configuring feature-one");
}
export default {
    actions: actions,
    path: FEATURE_PATH,
};
