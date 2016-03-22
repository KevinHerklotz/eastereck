import AbstractEasterEgg from './AbstractEasterEgg';
const soundFile = require('../../assets/audio/pornsound.mp3');

/**
 * PornSound class
 */
export default class PornSound extends AbstractEasterEgg {
    /**
     * Construct PornSound
     *
     */
    constructor() {
        super();

        this.audio = new Audio(soundFile);
    }

    /**
     * Play porn sound in a loop
     *
     * @overwrite
     */
    activate() {
        const that = this;

        this.audio.play();

        // start to play sound again after finished playing
        if (typeof this.audio.loop === 'boolean') {
            this.audio.loop = true;
        } else {
            // workaround for browsers without loop support
            this.audio.addEventListener('ended', function() {
                if (that.isActive) {
                    that.audio.currentTime = 0;
                    that.audio.play();
                }
            }, false);
        }
    }

    /**
     * Stop (actually pause) porn sound
     *
     * @overwrite
     */
    reset() {
        this.audio.pause();
    }
}
