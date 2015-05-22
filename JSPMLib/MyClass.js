'use strict';

import cjsdep from 'CJSDependentLib';
import es6cssdep from 'ES6CSSLib';

export default class MyClass {
	value() {
		return es6cssdep(cjsdep('Hello'));
	}
}
