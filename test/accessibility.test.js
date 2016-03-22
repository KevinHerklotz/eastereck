var test = require('tape');
let eastereckModule = require('../dist/eastereck.min.js')

test('Test UMD (Universal Module Definition)', function(assert) {
    assert.equal(typeof window.eastereck, 'object', 'Check accessibility in global scope in browser.');
    assert.equal(typeof eastereckModule, 'object', 'Loading via require.');
    assert.end();
});
