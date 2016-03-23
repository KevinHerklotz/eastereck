import AbstractEasterEgg from './AbstractEasterEgg';

/**
 * IconParty class
 */
export default class IconParty extends AbstractEasterEgg {
    /**
     * Construct IconParty
     *
     */
    constructor() {
        super();

        /**
         * Array of nodes that are (probably) icons
         * info: [...NodeList] converts NodeList to Array
         *
         * @private
         * @type {Array.HTMLElement}
         */
        this.iconElements = [...document.getElementsByClassName('.fa, .material-icons, .glyphicon, .icon')];

        /**
         * Suffixes that should be alternately added to 'eastereck-iconparty-'
         *
         * @private
         * @type {Array.string}
         */
        this.iconPartyClassSuffixes = ['jump', 'rotate', 'dance'];
    }

    /**
     * Activate iconparty with setting different classes to icon elements
     *
     * @overwrite
     */
    activate() {
        let index = 0;

        for (const iconElement of this.iconElements) {
            iconElement.classList.add(`eastereck-iconparty-${this.iconPartyClassSuffixes[index++]}`);

            // reset index to begin with the first suffix again
            if (index >= this.iconPartyClassSuffixes.length) {
                index = 0;
            }
        }
    }

    /** Remove these icon party classes
     *
     * @overwrite
     */
    reset() {
        for (const iconElement of this.iconElements) {
            for (const iconPartyClassSuffix of this.iconPartyClassSuffixes) {
                iconElement.classList.remove(`eastereck-iconparty-${iconPartyClassSuffix}`);
            }
        }
    }
}
