export declare const actions: {
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
declare const _default: {
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
export default _default;
