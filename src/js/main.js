import ClassSetter from './eastereggs/ClassSetter';
import IconParty from './eastereggs/IconParty';
import PornSound from './eastereggs/PornSound';
require('../style/eastereck.scss');

export default {
    drunken: new ClassSetter('eastereck-drunken'),
    iconparty: new IconParty(),
    pornsound: new PornSound(),
    unicorncursor: new ClassSetter('eastereck-unicorncursor'),
    upsidedown: new ClassSetter('eastereck-upsidedown')
};
