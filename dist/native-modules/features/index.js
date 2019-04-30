import featureOne from "./feature-one";
export function configure(config) {
    config.feature(featureOne.path);
}
export default {
    featureOne: featureOne,
};
