import { Object3D } from "./Object3D.js";
import { Geometry } from "../geometry/Geometry.js";
import { Color } from "./Color.js";

/**
 * Represents a triangular mesh.
 */
class Mesh extends Object3D {
    /**
     * Creates an instance of Mesh.
     *
     * @constructor
     * @param {Geometry} geometry - The geometry of the mesh.
     * @param {Color} color - The color of the mesh.
     */
    constructor(geometry, color) {
        super();
        this.geometry = geometry;
        this.color = color;
    }
}

export { Mesh };
