'use strict';

var asap = require('asap');
var cjs = require('CJSLib');
var es6 = require('ES6Lib');

module.exports = function(str) {
	return "CJSDepenentLib::" + cjs(es6(str));
};
