/**
 * Abstract easter egg class
 */
export default class AbstractEasterEgg {
    /**
     * Construct AbstractEasterEgg
     */
    constructor() {
        /**
         * jQuery function object
         *
         * @protected
         * @type {boolean}
         */
        this.isActive = false;
    }

    /**
     * Activate easter egg
     *
     * @abstract
     */
    activate() {}

    /**
     * Reset easter egg to restore the previous state
     *
     * @abstract
     */
    reset() {}

    /**
     * Public function to start an easter egg
     *
     * @public
     * @param  {number}            [duration] Time in milliseconds before stop() function is triggered
     * @param  {function}          [callback] Function that will be executed after the duration triggered the stop() function
     * @return {AbstractEasterEgg}            Self reference
     */
    start(duration, callback) {
        this.isActive = true;

        this.activate();

        if (duration && duration > 0) {
            window.setTimeout(
                () => {
                    this.stop();

                    if (typeof callback === 'function') {
                        callback(); // eslint-disable-line callback-return
                    }
                },
                duration
            );
        }

        return this;
    }

    /**
     * Public function to stop an easter egg
     *
     * @public
     * @return {AbstractEasterEgg} Self reference
     */
    stop() {
        if (this.isActive) {
            this.reset();
        }

        this.isActive = false;

        return this;
    }
}
