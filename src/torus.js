/**
 * Creates a torus model centered at (0, 0).
 * @param {number} [torusRadius=1] - Torus radius.
 * @param {number} [tubeRadius=0.5] - Torus thickness.
 * @param {number} [radialSegments=32] - Number of radial segments.
 * @param {number} [tubularSegments=16] - Number of tubular segments.
 * @returns {import("./Renderer3D.js").Model} The torus model.
 */
function generateTorus(
    torusRadius = 1,
    tubeRadius = 0.5,
    radialSegments = 32,
    tubularSegments = 16,
) {
    const vertices = [];
    const faces = [];

    // Generate torus vertices
    for (let j = 0; j <= radialSegments; j++) {
        const u = (j / radialSegments) * 2 * Math.PI;
        const cosU = Math.cos(u);
        const sinU = Math.sin(u);

        for (let i = 0; i <= tubularSegments; i++) {
            const v = (i / tubularSegments) * 2 * Math.PI;
            const cosV = Math.cos(v);
            const sinV = Math.sin(v);

            let x = (torusRadius + tubeRadius * cosV) * cosU;
            let y = (torusRadius + tubeRadius * cosV) * sinU;
            let z = tubeRadius * sinV;

            vertices.push({ x, y, z });
        }
    }

    // Generate Face Indices (Quads split into Triangles)
    for (let j = 0; j < radialSegments; j++) {
        for (let i = 0; i < tubularSegments; i++) {
            const a = j * (tubularSegments + 1) + i;
            const b = j * (tubularSegments + 1) + i + 1;
            const c = (j + 1) * (tubularSegments + 1) + i;
            const d = (j + 1) * (tubularSegments + 1) + i + 1;

            faces.push([a, b, c]);
            faces.push([b, d, c]);
        }
    }

    console.log(
        `Generated ${vertices.length} vertices and ${faces.length} faces.`,
    );
    return { vertices, faces };
}

export { generateTorus };
