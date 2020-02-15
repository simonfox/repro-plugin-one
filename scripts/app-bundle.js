define('__dot_dot__/src/constants',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PLUGIN_NAME = "plugin-one";
    exports.PLUGIN_FEATURES_PATH = exports.PLUGIN_NAME + "/features";
});
;
define('__dot_dot__/src/features/feature-one/actions',["require", "exports", "typescript-fsa", "./constants"], function (require, exports, typescript_fsa_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var action = typescript_fsa_1.actionCreatorFactory(constants_1.FEATURE_REDUCER_KEY);
    var featureOne = action("feature-one");
    exports.actions = {
        featureOne: featureOne,
    };
    exports.default = {
        featureOne: featureOne,
    };
});
;
define('__dot_dot__/src/features/feature-one/constants',["require", "exports", "../../constants"], function (require, exports, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var feature = '/feature-one';
    exports.FEATURE_PATH = constants_1.PLUGIN_FEATURES_PATH + feature;
    exports.FEATURE_REDUCER_KEY = constants_1.PLUGIN_NAME + feature;
});
;
define('__dot_dot__/src/features/feature-one/index',["require", "exports", "./actions", "./constants"], function (require, exports, actions_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        console.log("configuring feature-one");
    }
    exports.configure = configure;
    exports.default = {
        actions: actions_1.default,
        path: constants_1.FEATURE_PATH,
    };
});
;
define('__dot_dot__/src/features/index',["require", "exports", "./feature-one", "plugin-two"], function (require, exports, feature_one_1, plugin_two_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.feature(feature_one_1.default.path);
        var xx = plugin_two_1.default.features.featureOne.actions.featureOne({ name: "ping", order: 5 });
    }
    exports.configure = configure;
    exports.default = {
        featureOne: feature_one_1.default,
    };
});
;
define('__dot_dot__/src/index',["require", "exports", "./constants", "./features/index"], function (require, exports, constants_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.feature(constants_1.PLUGIN_FEATURES_PATH);
    }
    exports.configure = configure;
    exports.default = {
        features: index_1.default,
    };
});
;
define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'from Aurelia!';
        }
        App.prototype.clicked = function () {
            alert('A primary button click or a touch');
        };
        return App;
    }());
    exports.App = App;
});
;
define('text!app.html',[],function(){return "<template>\r\n  <h1>Hello, this is the dev app for plugin plugin-one</h1>\r\n  <p>This dev app is bundled to scripts/ folder (ignored in .gitignore). If you commit the bundle files to github, this app can serve as a <a href=\"https://pages.github.com\" target=\"_blank\">github page</a>!</p>\r\n\r\n  <p>Please read the <a href=\"README.md\">README</a> file in your project for more information.</p>\r\n\r\n  <hr>\r\n  <h2>Custom element \"hello-world\"</h2>\r\n  <p>Usage:&nbsp;<code>&lt;hello-world message.bind=\"message\"&gt;&lt;/hello-world&gt;</code></p>\r\n  <hello-world message.bind=\"message\"></hello-world>\r\n\r\n</template>\r\n";});;
define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});
;
define('main',["require", "exports", "./environment", "core-js/stable"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        aurelia.use.developmentLogging(environment_1.default.debug ? 'debug' : 'warn');
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=app-bundle.js.map