import { Vector3 } from "../math/Vector3.js";

/**
 * @typedef {Array<number>} Face
 */

/**
 * Represents a 3D object geometry.
 */
class Geometry {
    /**
     * Creates an instance of Geometry.
     *
     * @constructor
     */
    constructor() {
        /**
         * The vertices of this geometry.
         *
         * @type {Array<Vector3>}
         */
        this.vertices = [];

        /**
         * The faces of this geometry.
         *
         * @type {Array<Face>}
         */
        this.faces = [];
    }
}

export { Geometry };
