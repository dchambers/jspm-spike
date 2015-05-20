System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
    "build": [
      "npm:core-js@0.9.11/library/modules/$.fw",
      "npm:babel-runtime@5.4.3/helpers/class-call-check",
      "npm:CJSLib@0.0.0/src/inner",
      "npm:ES6Lib@0.0.0/dist/index",
      "npm:core-js@0.9.11/library/modules/$",
      "npm:CJSLib@0.0.0/index",
      "npm:ES6Lib@0.0.0",
      "npm:core-js@0.9.11/library/fn/object/define-property",
      "npm:CJSLib@0.0.0",
      "npm:babel-runtime@5.4.3/core-js/object/define-property",
      "npm:CJSDependentLib@0.0.0/index",
      "npm:babel-runtime@5.4.3/helpers/create-class",
      "npm:CJSDependentLib@0.0.0",
      "MyClass"
    ]
  }
});

System.config({
  "map": {
    "CJSDependentLib": "npm:CJSDependentLib@0.0.0",
    "CJSLib": "npm:CJSLib@0.0.0",
    "ES6Lib": "npm:ES6Lib@0.0.0",
    "babel": "npm:babel-core@5.4.3",
    "babel-runtime": "npm:babel-runtime@5.4.3",
    "core-js": "npm:core-js@0.9.11",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:CJSDependentLib@0.0.0": {
      "CJSLib": "npm:CJSLib@0.0.0",
      "ES6Lib": "npm:ES6Lib@0.0.0"
    },
    "npm:core-js@0.9.11": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

