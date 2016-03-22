import AbstractEasterEgg from './AbstractEasterEgg';

/**
 * Easter egg class setter
 *
 * For easter eggs that get it's styles from html/css classes only
 */
export default class ClassSetter extends AbstractEasterEgg {
    /**
     * Construct ClassSetter
     *
     * @param {string} className HTML/CSS class name that is responsible for style
     */
    constructor(className) {
        super();

        /**
         * HTML/CSS class name that is responsible for style
         *
         * @protected
         * @type {string}
         */
        this.className = className;
    }

    /**
     * Applies easter egg class to body
     *
     * @override
     * @protected
     * @return {ClassSetter} Self reference
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
     * @return {ClassSetter} Self reference
     */
    reset() {
        document.body.classList.remove(this.className);

        return this;
    }
}
