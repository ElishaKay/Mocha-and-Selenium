var assert = require('chai').assert;
var first = require('../first.js');

describe('First', function (){
	it('first should return hello world', function(){
		assert.equal(first(), 'hello world');
	});
});