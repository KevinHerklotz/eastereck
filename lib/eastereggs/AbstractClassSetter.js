import AbstractEasterEgg from './AbstractEasterEgg';

/**
 * Abstract easter egg class setter
 *
 * For easter eggs that get it's styles from html/css classes only
 */
export default class AbstractClassSetter extends AbstractEasterEgg {
    /**
     * Construct AbstractClassSetter
     */
    constructor() {
        super();
    }

    /**
     * Applies easter egg class to body
     *
     * @override
     * @protected
     * @return {UnicornCursor} Self reference
     */
    activate() {
        document.body.classList.add(this.className);

        return this;
    }

    /**
     * Removes easter egg class from body
     *
     * @override
     * @protected
     * @return {UnicornCursor} Self reference
     */
    reset() {
        document.body.classList.remove(this.className);

        return this;
    }
}
