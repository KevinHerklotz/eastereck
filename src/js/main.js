import ClassSetter from './eastereggs/ClassSetter';
import PornSound from './eastereggs/PornSound';
require('../style/eastereck.scss');

export default {
    drunken: new ClassSetter('eastereck-drunken'),
    pornsound: new PornSound(),
    unicorncursor: new ClassSetter('eastereck-unicorncursor'),
    upsidedown: new ClassSetter('eastereck-upsidedown')
};
