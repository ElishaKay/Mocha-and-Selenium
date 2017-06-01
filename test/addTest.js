var assert = require('chai').assert;
var add = require('../add');

describe('Add', function(){
	
	var result = add(5);

	it('should add 5 and return 10', function(){
		assert.equal(result, 10);
	});

	it('should return type number', function(){
		assert.typeOf(result, 'number');
	});
});