'use strict';

var inner = require('./src/inner');
var asap = require('asap');

module.exports = function(str) {
	return "CJSLib::" + inner(str);
}
