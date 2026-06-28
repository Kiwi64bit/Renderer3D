/**
 * Represents a 2D vector with arithmetic operations.
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

    /**
     * Negates this Vector2 components.
     *
     * @returns {this} This Vector2 for chaining.
     */
    negate() {
        this.x = -this.x;
        this.y = -this.y;

        return this;
    }

    /**
     * Compares this Vector2 with another Vector2.
     *
     * @param {Vector2} other - The other Vector2.
     * @returns {boolean} Whether the Vectors are equal or not.
     */
    equals(other) {
        return this.x === other.x && this.y === other.y;
    }

    /**
     * Calculates the squared magnitude of this Vector2.
     *
     * @readonly
     * @type {number}
     */
    get magnitudeSquared() {
        return this.x * this.x + this.y * this.y;
    }

    /**
     * Calculates the magnitude (length) of this Vector2.
     *
     * @readonly
     * @type {number}
     */
    get magnitude() {
        return Math.sqrt(this.magnitudeSquared);
    }

    /**
     * Converts this Vector2 to a unit vector
     * (A vector in the same direction but with a magnitude of 1).
     *
     * @return {Vector2} This Vector2 for chaining.
     */
    normalize() {
        return this.div(this.magnitude || 1);
    }

    /**
     * Calculates the dot product between this Vector2 and another Vector2.
     *
     * @param {Vector2} other - The other Vector2.
     * @returns {number} The dot product.
     */
    dot(other) {
        return this.x * other.x + this.y * other.y;
    }

    /**
     * Calculate the cross product between this Vector2 and another Vector2.
     *
     * @param {Vector2} other - The other Vector2.
     * @returns {number} The cross product.
     */
    cross(other) {
        return this.x * other.y - this.y * other.x;
    }

    /**
     * Calculate the squared distance between this Vector2 and another Vector2.
     *
     * @param {Vector2} other - The other Vector2.
     * @returns {number} The squared distance.
     */
    distanceSquared(other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        return dx * dx + dy * dy;
    }

    /**
     * Calculate the distance between this Vector2 and another Vector2.
     *
     * @param {Vector2} other - The other Vector2.
     * @returns {number} The distance.
     */
    distance(other) {
        return Math.sqrt(this.distanceSquared(other));
    }
}

export { Vector2 };
