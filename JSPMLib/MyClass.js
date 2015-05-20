'use strict';

import cjsdep from 'CJSDependentLib';

export default class MyClass {
	value() {
		return cjsdep('Hello');
	}
}
