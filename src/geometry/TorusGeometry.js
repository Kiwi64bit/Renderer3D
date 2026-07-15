import { Vector3 } from "../math/Vector3.js";
import { Geometry } from "./Geometry.js";

/**
 * Represents a torus geometry.
 */
class TorusGeometry extends Geometry {
    /**
     * Creates an instance of TorusGeometry.
     *
     * @constructor
     * @param {number} [radius=1] - The radius of the torus.
     * @param {number} [tube=0.5] - The radius of the tube.
     * @param {number} [radialSegments=12] - The number of radial segments.
     * @param {number} [tubularSegments=48] - The number of tubular segments.
     */
    constructor(radius = 1, tube = 0.5, radialSegments = 32, tubularSegments = 16) {
        super();

        for (let i = 0; i <= radialSegments; i++) {
            const thetaRadius = 2 * Math.PI * (i / radialSegments);

            for (let j = 0; j <= tubularSegments; j++) {
                const thetaTube = 2 * Math.PI * (j / tubularSegments);

                const x = (radius + tube * Math.cos(thetaTube)) * Math.cos(thetaRadius);
                const y = (radius + tube * Math.cos(thetaTube)) * Math.sin(thetaRadius);
                const z = tube * Math.sin(thetaTube);

                this.vertices.push(new Vector3(x, y, z));
            }
        }

        for (let i = 0; i < radialSegments; i++) {
            for (let j = 0; j < tubularSegments; j++) {
                const a = (tubularSegments + 1) * i + j;
                const b = (tubularSegments + 1) * (i + 1) + j;
                const c = (tubularSegments + 1) * (i + 1) + j + 1;
                const d = (tubularSegments + 1) * i + j + 1;

                this.faces.push([a, b, c]);
                this.faces.push([a, c, d]);
            }
        }
    }
}

export { TorusGeometry };
