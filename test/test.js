var expect = require('chai').expect;
var app = require('../lib/Return String of First Characters.js')

it('Join first character from each word into a new word', function() {
    expect(app.stringapp.makeString('bars are right')).to.equal('bar');
});

