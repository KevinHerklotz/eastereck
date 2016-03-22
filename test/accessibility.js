var test = require('tape');
let eastereckModule = require('../dist/eastereck.min.js')

test('should be accessible in global scope in browser', function(assert) {
    assert.equal(typeof window.eastereck, 'object');
    assert.end();
});

test('should be accessible via require', function(assert) {
    assert.equal(typeof eastereckModule, 'object');
    assert.end();
});
