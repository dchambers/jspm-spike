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

System.register("npm:babel-runtime@5.4.7/helpers/class-call-check", [], true, function(require, exports, module) {
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

System.register("npm:process@0.10.1/browser", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  function drainQueue() {
    if (draining) {
      return ;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      var i = -1;
      while (++i < len) {
        currentQueue[i]();
      }
      len = queue.length;
    }
    draining = false;
  }
  process.nextTick = function(fun) {
    queue.push(fun);
    if (!draining) {
      setTimeout(drainQueue, 0);
    }
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
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

System.register("npm:asap@1.0.0/asap", ["github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var head = {
      task: void 0,
      next: null
    };
    var tail = head;
    var flushing = false;
    var requestFlush = void 0;
    var isNodeJS = false;
    function flush() {
      while (head.next) {
        head = head.next;
        var task = head.task;
        head.task = void 0;
        var domain = head.domain;
        if (domain) {
          head.domain = void 0;
          domain.enter();
        }
        try {
          task();
        } catch (e) {
          if (isNodeJS) {
            if (domain) {
              domain.exit();
            }
            setTimeout(flush, 0);
            if (domain) {
              domain.enter();
            }
            throw e;
          } else {
            setTimeout(function() {
              throw e;
            }, 0);
          }
        }
        if (domain) {
          domain.exit();
        }
      }
      flushing = false;
    }
    if (typeof process !== "undefined" && process.nextTick) {
      isNodeJS = true;
      requestFlush = function() {
        process.nextTick(flush);
      };
    } else if (typeof setImmediate === "function") {
      if (typeof window !== "undefined") {
        requestFlush = setImmediate.bind(window, flush);
      } else {
        requestFlush = function() {
          setImmediate(flush);
        };
      }
    } else if (typeof MessageChannel !== "undefined") {
      var channel = new MessageChannel();
      channel.port1.onmessage = flush;
      requestFlush = function() {
        channel.port2.postMessage(0);
      };
    } else {
      requestFlush = function() {
        setTimeout(flush, 0);
      };
    }
    function asap(task) {
      tail = tail.next = {
        task: task,
        domain: isNodeJS && process.domain,
        next: null
      };
      if (!flushing) {
        flushing = true;
        requestFlush();
      }
    }
    ;
    module.exports = asap;
  })(require("github:jspm/nodelibs-process@0.1.1"));
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

System.register("npm:process@0.10.1", ["npm:process@0.10.1/browser"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:process@0.10.1/browser");
  global.define = __define;
  return module.exports;
});

System.register("npm:asap@1.0.0", ["npm:asap@1.0.0/asap"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:asap@1.0.0/asap");
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

System.register("github:jspm/nodelibs-process@0.1.1/index", ["npm:process@0.10.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = System._nodeRequire ? process : require("npm:process@0.10.1");
  global.define = __define;
  return module.exports;
});

System.register("npm:CJSLib@0.0.0/index", ["npm:CJSLib@0.0.0/src/inner", "npm:asap@1.0.0"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var inner = require("npm:CJSLib@0.0.0/src/inner");
  var asap = require("npm:asap@1.0.0");
  module.exports = function(str) {
    return "CJSLib::" + inner(str);
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:babel-runtime@5.4.7/core-js/object/define-property", ["npm:core-js@0.9.11/library/fn/object/define-property"], true, function(require, exports, module) {
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

System.register("github:jspm/nodelibs-process@0.1.1", ["github:jspm/nodelibs-process@0.1.1/index"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:jspm/nodelibs-process@0.1.1/index");
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

System.register("npm:babel-runtime@5.4.7/helpers/create-class", ["npm:babel-runtime@5.4.7/core-js/object/define-property"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var _Object$defineProperty = require("npm:babel-runtime@5.4.7/core-js/object/define-property")["default"];
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

System.register("npm:asap@2.0.3/browser-raw", ["github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    "use strict";
    module.exports = rawAsap;
    function rawAsap(task) {
      if (!queue.length) {
        requestFlush();
        flushing = true;
      }
      queue[queue.length] = task;
    }
    var queue = [];
    var flushing = false;
    var requestFlush;
    var index = 0;
    var capacity = 1024;
    function flush() {
      while (index < queue.length) {
        var currentIndex = index;
        index = index + 1;
        queue[currentIndex].call();
        if (index > capacity) {
          for (var scan = 0,
              newLength = queue.length - index; scan < newLength; scan++) {
            queue[scan] = queue[scan + index];
          }
          queue.length -= index;
          index = 0;
        }
      }
      queue.length = 0;
      index = 0;
      flushing = false;
    }
    var BrowserMutationObserver = global.MutationObserver || global.WebKitMutationObserver;
    if (typeof BrowserMutationObserver === "function") {
      requestFlush = makeRequestCallFromMutationObserver(flush);
    } else {
      requestFlush = makeRequestCallFromTimer(flush);
    }
    rawAsap.requestFlush = requestFlush;
    function makeRequestCallFromMutationObserver(callback) {
      var toggle = 1;
      var observer = new BrowserMutationObserver(callback);
      var node = document.createTextNode("");
      observer.observe(node, {characterData: true});
      return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
      };
    }
    function makeRequestCallFromTimer(callback) {
      return function requestCall() {
        var timeoutHandle = setTimeout(handleTimer, 0);
        var intervalHandle = setInterval(handleTimer, 50);
        function handleTimer() {
          clearTimeout(timeoutHandle);
          clearInterval(intervalHandle);
          callback();
        }
      };
    }
    rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:asap@2.0.3/asap", ["npm:asap@2.0.3/browser-raw", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    "use strict";
    var rawAsap = require("npm:asap@2.0.3/browser-raw");
    var freeTasks = [];
    module.exports = asap;
    function asap(task) {
      var rawTask;
      if (freeTasks.length) {
        rawTask = freeTasks.pop();
      } else {
        rawTask = new RawTask();
      }
      rawTask.task = task;
      rawTask.domain = process.domain;
      rawAsap(rawTask);
    }
    function RawTask() {
      this.task = null;
      this.domain = null;
    }
    RawTask.prototype.call = function() {
      if (this.domain) {
        this.domain.enter();
      }
      var threw = true;
      try {
        this.task.call();
        threw = false;
        if (this.domain) {
          this.domain.exit();
        }
      } finally {
        if (threw) {
          rawAsap.requestFlush();
        }
        this.task = null;
        this.domain = null;
        freeTasks.push(this);
      }
    };
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:asap@2.0.3", ["npm:asap@2.0.3/asap"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:asap@2.0.3/asap");
  global.define = __define;
  return module.exports;
});

System.register("npm:CJSDependentLib@0.0.0/index", ["npm:asap@2.0.3", "npm:CJSLib@0.0.0", "npm:ES6Lib@0.0.0"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var asap = require("npm:asap@2.0.3");
  var cjs = require("npm:CJSLib@0.0.0");
  var es6 = require("npm:ES6Lib@0.0.0").default;
  module.exports = function(str) {
    return "CJSDepenentLib::" + cjs(es6(str));
  };
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

System.register('npm:ES6Lib@0.0.0/index', ['npm:asap@2.0.3'], function (_export) {
	/* */
	'use strict';

	var asap;
	return {
		setters: [function (_npmAsap203) {
			asap = _npmAsap203['default'];
		}],
		execute: function () {
			_export('default', function (str) {
				return 'ES6Lib::' + str;
			});
		}
	};
});
System.register("npm:ES6Lib@0.0.0", ["npm:ES6Lib@0.0.0/index"], function (_export) {
  "use strict";

  return {
    setters: [function (_npmES6Lib000Index) {
      for (var _key in _npmES6Lib000Index) {
        _export(_key, _npmES6Lib000Index[_key]);
      }
    }],
    execute: function () {}
  };
});
System.register('npm:ES6CSSLib@0.0.0/index', ['npm:ES6CSSLib@0.0.0/style.css!github:systemjs/plugin-css@0.1.11'], function (_export) {
	/* */
	'use strict';

	return {
		setters: [function (_npmES6CSSLib000StyleCssGithubSystemjsPluginCss0111) {}],
		execute: function () {
			_export('default', function (str) {
				return 'ES6CSSLib::' + str;
			});
		}
	};
});
System.register("npm:ES6CSSLib@0.0.0", ["npm:ES6CSSLib@0.0.0/index"], function (_export) {
  "use strict";

  return {
    setters: [function (_npmES6CSSLib000Index) {
      for (var _key in _npmES6CSSLib000Index) {
        _export(_key, _npmES6CSSLib000Index[_key]);
      }
    }],
    execute: function () {}
  };
});
System.register('MyClass', ['npm:babel-runtime@5.4.7/helpers/create-class', 'npm:babel-runtime@5.4.7/helpers/class-call-check', 'npm:CJSDependentLib@0.0.0', 'npm:ES6CSSLib@0.0.0'], function (_export) {
	var _createClass, _classCallCheck, cjsdep, es6cssdep, MyClass;

	return {
		setters: [function (_npmBabelRuntime547HelpersCreateClass) {
			_createClass = _npmBabelRuntime547HelpersCreateClass['default'];
		}, function (_npmBabelRuntime547HelpersClassCallCheck) {
			_classCallCheck = _npmBabelRuntime547HelpersClassCallCheck['default'];
		}, function (_npmCJSDependentLib000) {
			cjsdep = _npmCJSDependentLib000['default'];
		}, function (_npmES6CSSLib000) {
			es6cssdep = _npmES6CSSLib000['default'];
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
						return es6cssdep(cjsdep('Hello'));
					}
				}]);

				return MyClass;
			})();

			_export('default', MyClass);
		}
	};
});
System.register('npm:ES6CSSLib@0.0.0/style.css!github:systemjs/plugin-css@0.1.11', [], false, function() {});
(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
("body{color:red}");
//# sourceMappingURL=build.js.map