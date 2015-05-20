"format register";
System.register("npm:core-js@0.9.11/library/modules/$.fw", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = function($) {
    $.FW = false;
    $.path = $.core;
    return $;
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:babel-runtime@5.4.3/helpers/class-call-check", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.register("npm:CJSLib@0.0.0/src/inner", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  module.exports = function(str) {
    return "CJSLib/Inner::" + str;
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:ES6Lib@0.0.0/dist/index", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  exports["default"] = function(str) {
    return "ES6Lib::" + str;
  };
  module.exports = exports["default"];
  global.define = __define;
  return module.exports;
});

System.register("npm:core-js@0.9.11/library/modules/$", ["npm:core-js@0.9.11/library/modules/$.fw"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var global = typeof self != 'undefined' ? self : Function('return this')(),
      core = {},
      defineProperty = Object.defineProperty,
      hasOwnProperty = {}.hasOwnProperty,
      ceil = Math.ceil,
      floor = Math.floor,
      max = Math.max,
      min = Math.min;
  var DESC = !!function() {
    try {
      return defineProperty({}, 'a', {get: function() {
          return 2;
        }}).a == 2;
    } catch (e) {}
  }();
  var hide = createDefiner(1);
  function toInteger(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  }
  function desc(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  }
  function simpleSet(object, key, value) {
    object[key] = value;
    return object;
  }
  function createDefiner(bitmap) {
    return DESC ? function(object, key, value) {
      return $.setDesc(object, key, desc(bitmap, value));
    } : simpleSet;
  }
  function isObject(it) {
    return it !== null && (typeof it == 'object' || typeof it == 'function');
  }
  function isFunction(it) {
    return typeof it == 'function';
  }
  function assertDefined(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  }
  var $ = module.exports = require("npm:core-js@0.9.11/library/modules/$.fw")({
    g: global,
    core: core,
    html: global.document && document.documentElement,
    isObject: isObject,
    isFunction: isFunction,
    it: function(it) {
      return it;
    },
    that: function() {
      return this;
    },
    toInteger: toInteger,
    toLength: function(it) {
      return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
    },
    toIndex: function(index, length) {
      index = toInteger(index);
      return index < 0 ? max(index + length, 0) : min(index, length);
    },
    has: function(it, key) {
      return hasOwnProperty.call(it, key);
    },
    create: Object.create,
    getProto: Object.getPrototypeOf,
    DESC: DESC,
    desc: desc,
    getDesc: Object.getOwnPropertyDescriptor,
    setDesc: defineProperty,
    setDescs: Object.defineProperties,
    getKeys: Object.keys,
    getNames: Object.getOwnPropertyNames,
    getSymbols: Object.getOwnPropertySymbols,
    assertDefined: assertDefined,
    ES5Object: Object,
    toObject: function(it) {
      return $.ES5Object(assertDefined(it));
    },
    hide: hide,
    def: createDefiner(0),
    set: global.Symbol ? simpleSet : hide,
    each: [].forEach
  });
  if (typeof __e != 'undefined')
    __e = core;
  if (typeof __g != 'undefined')
    __g = global;
  global.define = __define;
  return module.exports;
});

System.register("npm:CJSLib@0.0.0/index", ["npm:CJSLib@0.0.0/src/inner"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var inner = require("npm:CJSLib@0.0.0/src/inner");
  module.exports = function(str) {
    return "CJSLib::" + inner(str);
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:ES6Lib@0.0.0", ["npm:ES6Lib@0.0.0/dist/index"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:ES6Lib@0.0.0/dist/index");
  global.define = __define;
  return module.exports;
});

System.register("npm:core-js@0.9.11/library/fn/object/define-property", ["npm:core-js@0.9.11/library/modules/$"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var $ = require("npm:core-js@0.9.11/library/modules/$");
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:CJSLib@0.0.0", ["npm:CJSLib@0.0.0/index"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:CJSLib@0.0.0/index");
  global.define = __define;
  return module.exports;
});

System.register("npm:babel-runtime@5.4.3/core-js/object/define-property", ["npm:core-js@0.9.11/library/fn/object/define-property"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": require("npm:core-js@0.9.11/library/fn/object/define-property"),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:CJSDependentLib@0.0.0/index", ["npm:CJSLib@0.0.0", "npm:ES6Lib@0.0.0"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var cjs = require("npm:CJSLib@0.0.0");
  var es6 = require("npm:ES6Lib@0.0.0");
  module.exports = function(str) {
    return "CJSDepenentLib::" + cjs(es6(str));
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:babel-runtime@5.4.3/helpers/create-class", ["npm:babel-runtime@5.4.3/core-js/object/define-property"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var _Object$defineProperty = require("npm:babel-runtime@5.4.3/core-js/object/define-property")["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.register("npm:CJSDependentLib@0.0.0", ["npm:CJSDependentLib@0.0.0/index"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:CJSDependentLib@0.0.0/index");
  global.define = __define;
  return module.exports;
});

System.register('MyClass', ['npm:babel-runtime@5.4.3/helpers/create-class', 'npm:babel-runtime@5.4.3/helpers/class-call-check', 'npm:CJSDependentLib@0.0.0'], function (_export) {
	var _createClass, _classCallCheck, cjsdep, MyClass;

	return {
		setters: [function (_npmBabelRuntime543HelpersCreateClass) {
			_createClass = _npmBabelRuntime543HelpersCreateClass['default'];
		}, function (_npmBabelRuntime543HelpersClassCallCheck) {
			_classCallCheck = _npmBabelRuntime543HelpersClassCallCheck['default'];
		}, function (_npmCJSDependentLib000) {
			cjsdep = _npmCJSDependentLib000['default'];
		}],
		execute: function () {
			'use strict';

			MyClass = (function () {
				function MyClass() {
					_classCallCheck(this, MyClass);
				}

				_createClass(MyClass, [{
					key: 'value',
					value: function value() {
						return cjsdep('Hello');
					}
				}]);

				return MyClass;
			})();

			_export('default', MyClass);
		}
	};
});
//# sourceMappingURL=build.js.map