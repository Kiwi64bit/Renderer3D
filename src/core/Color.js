/**
 * Represents a Color.
 */
class Color {
    /**
     * Creates an instance of Color.
     *
     * @constructor
     * @param {number} [r=0] - The red component of the color [0 - 255].
     * @param {number} [g=0] - The green component of the color [0 - 255].
     * @param {number} [b=0] - The blue component of the color [0 - 255].
     * @param {number} [a=255] - The alpha component of the color [0 - 255].
     */
    constructor(r = 0, g = 0, b = 0, a = 255) {
        /**
         * The red component of the color.
         *
         * @type {number}
         */
        this.r = r;

        /**
         * The green component of the color.
         *
         * @type {number}
         */
        this.g = g;

        /**
         * The blue component of the color.
         *
         * @type {number}
         */
        this.b = b;

        /**
         * The alpha component of the color.
         *
         * @type {number}
         */
        this.a = a;
    }

    get hex() {
        const r = Math.max(Math.min(this.r, 0xff), 0).toString(16).padStart(2, "0");
        const g = Math.max(Math.min(this.g, 0xff), 0).toString(16).padStart(2, "0");
        const b = Math.max(Math.min(this.b, 0xff), 0).toString(16).padStart(2, "0");
        const a = Math.max(Math.min(this.a, 0xff), 0).toString(16).padStart(2, "0");
        return `#${r}${g}${b}${a}`;
    }
}

export { Color };
