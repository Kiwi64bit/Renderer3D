/**
 * Represents a 4x4 matrix.
 */
class Matrix4 {
    /**
     * Constructs a new 4x4 matrix.
     * The arguments are in row-major order.
     * If no arguments are provided, initialize as an identity matrix.
     *
     * @constructor
     * @param {number} [n11] - Element 1-1.
     * @param {number} [n12] - Element 1-2.
     * @param {number} [n13] - Element 1-3.
     * @param {number} [n14] - Element 1-4.
     * @param {number} [n21] - Element 2-1.
     * @param {number} [n22] - Element 2-2.
     * @param {number} [n23] - Element 2-3.
     * @param {number} [n24] - Element 2-4.
     * @param {number} [n31] - Element 3-1.
     * @param {number} [n32] - Element 3-2.
     * @param {number} [n33] - Element 3-3.
     * @param {number} [n34] - Element 3-4.
     * @param {number} [n41] - Element 4-1.
     * @param {number} [n42] - Element 4-2.
     * @param {number} [n43] - Element 4-3.
     * @param {number} [n44] - Element 4-4.
     */
    constructor(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
        // prettier-ignore
        this.elements = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];

        if (n11 !== undefined) {
            this.set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44);
        }
    }

    /**
     * Constructs a new 4x4 matrix.
     * The arguments are in row-major order.
     * If no arguments are provided, initialize as an identity matrix.
     *
     * @param {number} [n11] - Element 1-1.
     * @param {number} [n12] - Element 1-2.
     * @param {number} [n13] - Element 1-3.
     * @param {number} [n14] - Element 1-4.
     * @param {number} [n21] - Element 2-1.
     * @param {number} [n22] - Element 2-2.
     * @param {number} [n23] - Element 2-3.
     * @param {number} [n24] - Element 2-4.
     * @param {number} [n31] - Element 3-1.
     * @param {number} [n32] - Element 3-2.
     * @param {number} [n33] - Element 3-3.
     * @param {number} [n34] - Element 3-4.
     * @param {number} [n41] - Element 4-1.
     * @param {number} [n42] - Element 4-2.
     * @param {number} [n43] - Element 4-3.
     * @param {number} [n44] - Element 4-4.
     */
    set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
        this.elements = [n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44];
    }

    /**
     * Sets this matrix to the 4x4 identity matrix.
     *
     * @returns {Matrix4} A reference to this matrix.
     */
    identity() {
        // prettier-ignore
        this.elements = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];

        return this;
    }

    /**
     * Multiplies this matrix by the given 4x4 matrix.
     *
     * @param {Matrix4} matrix - The matrix to multiply with.
     * @returns {Matrix4} A reference to this matrix.
     */
    // prettier-ignore
    multiply(matrix) {
        const a11 = this.elements[0], a12 = this.elements[1], a13 = this.elements[2], a14 = this.elements[3];
        const a21 = this.elements[4], a22 = this.elements[5], a23 = this.elements[6], a24 = this.elements[7];
        const a31 = this.elements[8], a32 = this.elements[9], a33 = this.elements[10], a34 = this.elements[11];
        const a41 = this.elements[12], a42 = this.elements[13], a43 = this.elements[14], a44 = this.elements[15];

        const b11 = matrix.elements[0], b12 = matrix.elements[1], b13 = matrix.elements[2], b14 = matrix.elements[3];
        const b21 = matrix.elements[4], b22 = matrix.elements[5], b23 = matrix.elements[6], b24 = matrix.elements[7];
        const b31 = matrix.elements[8], b32 = matrix.elements[9], b33 = matrix.elements[10], b34 = matrix.elements[11];
        const b41 = matrix.elements[12], b42 = matrix.elements[13], b43 = matrix.elements[14], b44 = matrix.elements[15];

        this.elements[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
        this.elements[1] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
        this.elements[2] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
        this.elements[3] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

        this.elements[4] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
        this.elements[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
        this.elements[6] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
        this.elements[7] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

        this.elements[8] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
        this.elements[9] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
        this.elements[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
        this.elements[11] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

        this.elements[12] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
        this.elements[13] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
        this.elements[14] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
        this.elements[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

        return this;
    }

    /**
     * Creates a new 4x4 scale matrix.
     *
     * @param {number} x - The scale along the X-axis.
     * @param {number} y - The scale along the Y-axis.
     * @param {number} z - The scale along the Z-axis.
     * @returns {Matrix4} A new 4x4 matrix.
     */
    static scaleMatrix(x, y, z) {
        const matrix = new Matrix4();

        matrix.elements[0] = x;
        matrix.elements[5] = y;
        matrix.elements[10] = z;

        return matrix;
    }

    /**
     * Creates a new 4x4 translation matrix.
     *
     * @param {number} x - The translation along the X-axis.
     * @param {number} y - The translation along the Y-axis.
     * @param {number} z - The translation along the Z-axis.
     * @returns {Matrix4} A new 4x4 matrix.
     */
    static translationMatrix(x, y, z) {
        const matrix = new Matrix4();

        matrix.elements[3] = x;
        matrix.elements[7] = y;
        matrix.elements[11] = z;

        return matrix;
    }

    /**
     * Creates a new 4x4 rotation matrix around the X-axis.
     *
     * @param {number} theta - The rotation angle in radians.
     * @returns {Matrix4} A new 4x4 matrix.
     */
    static rotationXMatrix(theta) {
        const matrix = new Matrix4();

        matrix.elements[5] = Math.cos(theta);
        matrix.elements[6] = -Math.sin(theta);
        matrix.elements[9] = Math.sin(theta);
        matrix.elements[10] = Math.cos(theta);

        return matrix;
    }

    /**
     * Creates a new 4x4 rotation matrix around the Y-axis.
     *
     * @param {number} theta - The rotation angle in radians.
     * @returns {Matrix4} A new 4x4 matrix.
     */
    static rotationYMatrix(theta) {
        const matrix = new Matrix4();

        matrix.elements[0] = Math.cos(theta);
        matrix.elements[2] = Math.sin(theta);
        matrix.elements[8] = -Math.sin(theta);
        matrix.elements[10] = Math.cos(theta);

        return matrix;
    }

    /**
     * Creates a new 4x4 rotation matrix around the Z-axis.
     *
     * @param {number} theta - The rotation angle in radians.
     * @returns {Matrix4} A new 4x4 matrix.
     */
    static rotationZMatrix(theta) {
        const matrix = new Matrix4();

        matrix.elements[0] = Math.cos(theta);
        matrix.elements[1] = -Math.sin(theta);
        matrix.elements[4] = Math.sin(theta);
        matrix.elements[5] = Math.cos(theta);

        return matrix;
    }
}

export { Matrix4 };
