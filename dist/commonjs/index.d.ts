import { FrameworkConfiguration } from "aurelia-framework";
export declare function configure(config: FrameworkConfiguration): void;
declare const _default: {
    features: {
        featureOne: {
            actions: {
                featureOne: {
                    (payload: {
                        route: string;
                    }, meta?: {
                        [key: string]: any;
                    }): import("typescript-fsa").Action<{
                        route: string;
                    }>;
                    type: string;
                    match: (action: import("typescript-fsa").AnyAction) => action is import("typescript-fsa").Action<{
                        route: string;
                    }>;
                };
            };
            path: string;
        };
    };
};
export default _default;
