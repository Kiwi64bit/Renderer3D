/**
 * Class representing 2D vector.
 */
class Vector2 {
    /**
     * Creates an instance of Vector2.
     *
     * @constructor
     * @param {number} [x=0] - The x component.
     * @param {number} [y=0] - The y component.
     */
    constructor(x = 0, y = 0) {
        /**
         * The x component of this vector.
         *
         * @type {number}
         */
        this.x = x;

        /**
         * The y component of this vector.
         *
         * @type {number}
         */
        this.y = y;
    }

    /**
     * Sets this instance components.
     *
     * @param {number} x - The x component.
     * @param {number} y - The y component.
     * @returns {Vector2} A reference to this vector.
     */
    set(x, y) {
        this.x = x;
        this.y = y;

        return this;
    }

    /**
     * Copies the components of a vector to this instance.
     *
     * @param {Vector2} vector - The vector to copy from.
     * @returns {Vector2} A reference to this vector.
     */
    copy(vector) {
        this.x = vector.x;
        this.y = vector.y;

        return this;
    }

    /**
     * Creates a clone of this instance.
     *
     * @returns {Vector2} A clone of this instance.
     */
    clone() {
        return new Vector2(this.x, this.y);
    }

    /**
     * Adds the given vector to this instance.
     *
     * @param {Vector2} v - The vector to add.
     * @returns {Vector2} A reference to this vector.
     */
    add(v) {
        this.x += v.x;
        this.y += v.y;

        return this;
    }

    /**
     * Subtracts the given vector from this instance.
     *
     * @param {Vector2} vector - The vector to subtract.
     * @returns {Vector2} A reference to this vector.
     */
    sub(vector) {
        this.x -= vector.x;
        this.y -= vector.y;

        return this;
    }

    /**
     * Multiplies this instance components by a scalar value.
     *
     * @param {number} scalar - The scalar to multiply.
     * @returns {this} A reference to this vector.
     */
    multiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;

        return this;
    }

    /**
     * Divide this instance components by a scalar value.
     *
     * @param {number} scalar - The scalar to divide.
     * @returns {this} A reference to this vector.
     */
    divideScalar(scalar) {
        this.x /= scalar;
        this.y /= scalar;

        return this;
    }
}

export { Vector2 };
