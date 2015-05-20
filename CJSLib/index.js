'use strict';

var inner = require('./src/inner');

module.exports = function(str) {
	return "CJSLib::" + inner(str);
}
