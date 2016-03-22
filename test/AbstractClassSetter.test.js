var test = require('tape');
import AbstractClassSetter from '../src/js/eastereggs/AbstractClassSetter';

class ClassSetter extends AbstractClassSetter {
    constructor() {
        super();
        this.className = 'test-classname';
    }
}

const hasClass = (element, cls) => ((' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1);

test('AbstractClassSetter', function(assert) {
    var classSetter = new ClassSetter();
    var body = document.body;

    // set default class to body
    body.className = 'keep-this-class';

    assert.notOk(hasClass(body, 'test-classname'), 'No class name before activating the ClassSetter.');

    classSetter.activate();
    assert.ok(hasClass(body, 'test-classname'), 'Class name setting to body with activate().');
    assert.ok(hasClass(body, 'keep-this-class'), 'Keeps default class.');

    classSetter.reset();
    assert.notOk(hasClass(body, 'test-classname'), 'Class name resetting of body with activate().');
    assert.ok(hasClass(body, 'keep-this-class'), 'Still keeps default class.');

    assert.end();
});
