var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/hello-world',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HelloWorld = (function () {
        function HelloWorld() {
            this.message = '';
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], HelloWorld.prototype, "message", void 0);
        return HelloWorld;
    }());
    exports.HelloWorld = HelloWorld;
});
;
define('text!__dot_dot__/src/elements/hello-world.css',[],function(){return ".hello-world {\n  background-color: lightgreen;\n}\n";});;
define('text!__dot_dot__/src/elements/hello-world.html',[],function(){return "<template>\n  <require from=\"./hello-world.css\"></require>\n  <h3 class=\"hello-world\">Hello world ${message}</h3>\n</template>\n";});;
define('__dot_dot__/src/index',["require", "exports", "aurelia-pal"], function (require, exports, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources([
            aurelia_pal_1.PLATFORM.moduleName('./elements/hello-world')
        ]);
    }
    exports.configure = configure;
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
define('text!app.html',[],function(){return "<template>\n  <h1>Hello, this is the dev app for plugin plugin-one</h1>\n  <p>This dev app is bundled to scripts/ folder (ignored in .gitignore). If you commit the bundle files to github, this app can serve as a <a href=\"https://pages.github.com\" target=\"_blank\">github page</a>!</p>\n\n  <p>Please read the <a href=\"README.md\">README</a> file in your project for more information.</p>\n\n  <hr>\n  <h2>Custom element \"hello-world\"</h2>\n  <p>Usage:&nbsp;<code>&lt;hello-world message.bind=\"message\"&gt;&lt;/hello-world&gt;</code></p>\n  <hello-world message.bind=\"message\"></hello-world>\n\n</template>\n";});;
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