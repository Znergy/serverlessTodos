const chai = require('chai');
const should = chai.should();
const Generic = require('../../src/generic/generic');

describe('Generic Tests', () => {

	describe('Math Functions', () => {

		it('should add two numbers', () => {
			let result = Generic.add(1, 1);
			result.should.eql(2);
		});

		it('should subtract two numbers', () => {
			let result = Generic.subtract(2, 1);
			result.should.eql(1);
		});

		it('should sayHello', () => {
			let result = Generic.sayHello();
			result.should.be.a('string');
			result.should.eql("Hello!");
		});
	});
});
