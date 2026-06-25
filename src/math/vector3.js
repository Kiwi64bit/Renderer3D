/**
 * Represents a 3D vector with arithmetic operations.
 *
 * @class Vector3
 * @typedef {Vector3}
 */
class Vector3 {
    /**
     * Creates an instance of Vector3.
     *
     * @constructor
     * @param {number} x - The x component of this vector.
     * @param {number} y - The y component of this vector.
     * @param {number} z - The z component of this vector.
     */
    constructor(x, y, z) {
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

        /**
         * The z component of this vector.
         *
         * @type {number}
         */
        this.z = z;
    }

    /**
     * Adds another Vector3 to this one.
     *
     * @param {Vector3} other - The other Vector3.
     * @returns {Vector3} This Vector3 for chaining.
     */
    add(other) {
        this.x += other.x;
        this.y += other.y;
        this.z += other.z;

        return this;
    }

    /**
     * Subtracts another Vector3 from this one.
     *
     * @param {Vector3} other - The other Vector3.
     * @returns {Vector3} This Vector3 for chaining.
     */
    sub(other) {
        this.x -= other.x;
        this.y -= other.y;
        this.z -= other.z;

        return this;
    }

    /**
     * Multiplies this Vector3 components by a scalar.
     *
     * @param {number} scalar - The scalar.
     * @returns {Vector3} This Vector3 for chaining.
     */
    mul(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;

        return this;
    }

    /**
     * Divides this Vector3 components by a scalar.
     *
     * @param {number} scalar - The scalar.
     * @returns {Vector3} This Vector3 for chaining.
     */
    div(scalar) {
        this.x /= scalar;
        this.y /= scalar;
        this.z /= scalar;

        return this;
    }

    /**
     * Negates this Vector3 components.
     *
     * @returns {Vector3} This Vector3 for chaining.
     */
    negate() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;

        return this;
    }

    /**
     * Compares this Vector3 with another Vector3.
     *
     * @param {Vector3} other - The other Vector3.
     * @returns {boolean} Whether the Vectors are equal or not.
     */
    equals(other) {
        return this.x === other.x && this.y === other.y && this.z === other.z;
    }

    /**
     * Calculates the squared magnitude of this Vector3.
     *
     * @readonly
     * @type {number}
     */
    get magnitudeSquared() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }

    /**
     * Calculates the magnitude (length) of this Vector3.
     *
     * @readonly
     * @type {number}
     */
    get magnitude() {
        return Math.sqrt(this.magnitudeSquared);
    }

    /**
     * Converts this Vector3 to a unit vector
     * (A vector in the same direction but with a magnitude of 1).
     *
     * @returns {Vector3} This Vector3 for chaining.
     */
    normalize() {
        return this.div(this.magnitude || 1);
    }

    /**
     * Calculates the dot product between this Vector3 and another Vector3.
     *
     * @param {Vector3} other - The other Vector3.
     * @returns {number} The dot product.
     */
    dot(other) {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    }

    /**
     * Calculates the cross product between this Vector3 and another Vector3.
     *
     * @param {Vector3} other - The other Vector3.
     * @returns {Vector3} The cross product.
     */
    cross(other) {
        return new Vector3(
            this.y * other.z - this.z * other.y,
            this.z * other.x - this.x * other.z,
            this.x * other.y - this.y * other.x,
        );
    }

    /**
     * Calculates the squared distance between this Vector3 and another Vector3.
     *
     * @param {Vector3} other - The other Vector3.
     * @returns {number} The squared distance.
     */
    distanceSquared(other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        const dz = this.z - other.z;

        return dx * dx + dy * dy + dz * dz;
    }

    /**
     * Calculates the distance between this Vector3 and another Vector3.
     *
     * @param {Vector3} other - The other Vector3.
     * @returns {number} The distance.
     */
    distance(other) {
        return Math.sqrt(this.distanceSquared(other));
    }
}

export { Vector3 };
