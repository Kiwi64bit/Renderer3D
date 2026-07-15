import { Vector3 } from "../math/Vector3.js";
import { Geometry } from "./Geometry.js";

/**
 * Represents a box geometry.
 *
 * @extends {Geometry}
 */
class BoxGeometry extends Geometry {
    /**
     * Creates an instance of BoxGeometry.
     *
     * @constructor
     * @param {number} [width=1] - The width of the box.
     * @param {number} [height=1] - The hight of the box.
     * @param {number} [depth=1] - the depth of the box.
     */
    constructor(width = 1, height = 1, depth = 1) {
        super();
        this.vertices = [
            new Vector3(-width / 2, -height / 2, -depth / 2),
            new Vector3(width / 2, -height / 2, -depth / 2),
            new Vector3(width / 2, height / 2, -depth / 2),
            new Vector3(-width / 2, height / 2, -depth / 2),
            new Vector3(-width / 2, -height / 2, depth / 2),
            new Vector3(width / 2, -height / 2, depth / 2),
            new Vector3(width / 2, height / 2, depth / 2),
            new Vector3(-width / 2, height / 2, depth / 2),
        ];

        this.faces = [
            [0, 1, 2, 3],
            [4, 5, 6, 7],
            [0, 1, 5, 4],
            [1, 2, 6, 5],
            [2, 3, 7, 6],
            [3, 0, 4, 7],
        ];
    }

    triangles() {
        const faces = [];
        for (const face of this.faces) {
            for (let i = 0; i < face.length; i++) {
                const a = face[0];
                const b = face[1];
                const c = face[2];
                const d = face[3];

                faces.push([a, b, c]);
                faces.push([a, d, c]);
            }
        }

        this.faces = faces;
    }
}

export { BoxGeometry };
