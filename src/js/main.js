import ClassSetter from './eastereggs/ClassSetter';
import IconParty from './eastereggs/IconParty';
import PornSound from './eastereggs/PornSound';
require('../style/eastereck.scss');

export default {
    drunken: new ClassSetter('eastereck-drunken'),
    iconparty: new IconParty(),
    neonflicker: new ClassSetter('eastereck-neonflicker'),
    pornsound: new PornSound(),
    shaking: new ClassSetter('eastereck-shaking'),
    unicorncursor: new ClassSetter('eastereck-unicorncursor'),
    upsidedown: new ClassSetter('eastereck-upsidedown')
};
