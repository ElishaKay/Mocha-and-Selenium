var assert = require('chai').assert;
var add = require('../add');

describe('Add', function(){
	it('should add 5 and return 10', function(){
		var result = add(5);
		assert.equal(result, 10);
	});
});