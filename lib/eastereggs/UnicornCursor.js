import AbstractEasterEgg from './AbstractEasterEgg';
const cursorImage = require('../../assets/img/unicorn-cursor.gif');

/**
 * UnicornCursor class
 */
export default class UnicornCursor extends AbstractEasterEgg {
    /**
     * Construct UnicornCursor
     *
     */
    constructor() {
        super();
    }

    /**
     * Activate UnicornCursor
     *
     * @override
     * @private
     * @return {UnicornCursor} Self reference
     */
    activate() {
        document.body.style.cursor = `url(${cursorImage}), auto`;

        return this;
    }

    /**
     * Reset UnicornCursor to restore the previous state
     *
     * @override
     * @private
     * @return {UnicornCursor} Self reference
     */
    reset() {
        document.body.style.cursor = '';

        return this;
    }
}
