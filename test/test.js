var expect = require('chai').expect;
var app = require('../lib/app.js')

it('should equal bar', function() {
    expect(app._test.foo()).to.equal('bar');
});

it('should equal infinity', function() {
    expect(app._test.INFINITY).to.equal('infinitydd');
});

