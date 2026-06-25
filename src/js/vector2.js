/**
 * Represents a 2D vector with arithmetic operations.
 *
 * @class Vector2
 * @typedef {Vector2}
 */
class Vector2 {
    /**
     * Creates an instance of Vector2.
     *
     * @constructor
     * @param {number} x - The x component of this vector.
     * @param {number} y - The y component of this vector.
     */
    constructor(x, y) {
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
     * Adds another Vector2 to this one.
     *
     * @param {Vector2} other - The other Vector2.
     * @returns {Vector2} This Vector2 for chaining.
     */
    add(other) {
        this.x += other.x;
        this.y += other.y;

        return this;
    }

    /**
     * Subtracts another Vector2 from this one.
     *
     * @param {Vector2} other - The other Vector2.
     * @returns {Vector2} This Vector2 for chaining.
     */
    sub(other) {
        this.x -= other.x;
        this.y -= other.y;

        return this;
    }

    /**
     * Multiplies this Vector2 components by a scalar.
     *
     * @param {number} scalar - The scalar.
     * @returns {Vector2} This Vector2 for chaining.
     */
    mul(scalar) {
        this.x *= scalar;
        this.y *= scalar;

        return this;
    }

    /**
     * Divides this Vector2 components by a scalar.
     *
     * @param {number} scalar - The scalar.
     * @returns {Vector2} This Vector2 for chaining.
     */
    div(scalar) {
        this.x /= scalar;
        this.y /= scalar;

        return this;
    }
}

export { Vector2 };
