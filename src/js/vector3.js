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
}

export { Vector3 };
