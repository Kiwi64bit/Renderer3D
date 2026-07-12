import { Matrix4 } from "../math/Matrix4.js";
import { Vector3 } from "../math/Vector3.js";

/**
 * Represents a 3D object and its transformations.
 */
class Object3D {
    /**
     * Creates an instance of Object3D.
     *
     * @constructor
     * @param {*} geometry
     */
    constructor() {
        this.position = new Vector3();
        this.rotation = new Vector3();
        this.scale = new Vector3(1, 1, 1);

        this.matrix = new Matrix4();
    }

    /**
     * Updates this instance transformation matrix.
     *
     * @returns {Object3D} A reference to this object.
     */
    updateMatrix() {
        this.matrix.identity();
        this.matrix.multiply(Matrix4.translationMatrix(this.position.x, this.position.y, this.position.z));
        this.matrix.multiply(Matrix4.rotationXMatrix(this.rotation.x));
        this.matrix.multiply(Matrix4.rotationYMatrix(this.rotation.y));
        this.matrix.multiply(Matrix4.rotationZMatrix(this.rotation.z));
        this.matrix.multiply(Matrix4.scaleMatrix(this.scale.x, this.scale.y, this.scale.z));
    }
}

export { Object3D };
