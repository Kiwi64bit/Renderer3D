/**
 * Class representing 3D vector.
 */
class Vector3 {
    /**
     * Creates an instance of Vector3.
     *
     * @constructor
     * @param {number} [x=0] - x component.
     * @param {number} [y=0] - y component.
     * @param {number} [z=0] - z component.
     */
    constructor(x = 0, y = 0, z = 0) {
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
     * Sets this instant components.
     *
     * @param {number} x - The x component.
     * @param {number} y - The y component.
     * @param {number} z - The z component.
     * @returns {Vector3} A reference to this vector.
     */
    set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;

        return this;
    }

    /**
     * Adds the given vector to this instance.
     *
     * @param {Vector3} v - The vector to add.
     * @returns {Vector3} A reference to this vector.
     */
    add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;

        return this;
    }

    /**
     * Subtracts the given vector from this instance.
     *
     * @param {Vector3} vector - The vector to subtract.
     * @returns {Vector3} A reference to this vector.
     */
    sub(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;

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
        this.z *= scalar;

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
        this.z /= scalar;

        return this;
    }

    /**
     * Applies a 4x4 transformation matrix to this vector.
     * Assumes the fourth component is 1.
     *
     * @param {Matrix4} matrix - The matrix
     * @returns {Vector3} A reference to this vector.
     */
    applyMatrix4(matrix) {
        const x = this.x, y = this.y, z = this.z;
        
        this.x = x * matrix.elements[0] + y * matrix.elements[1] + z * matrix.elements[2] + 1 * matrix.elements[3];
        this.y = x * matrix.elements[4] + y * matrix.elements[5] + z * matrix.elements[6] + 1 * matrix.elements[7];
        this.z = x * matrix.elements[8] + y * matrix.elements[9] + z * matrix.elements[10] + 1 * matrix.elements[11];

        return this;
    }
}

export { Vector3 };
