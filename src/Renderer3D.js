/**
 * Renders the points of a model.
 *
 * @param {HTMLCanvasElement} canvas - The canvas to draw on.
 * @param {Model} model - The model to render.
 * @param {Vector3} translation - Model translation.
 * @param {Vector3} rotation - Model rotation.
 * @param {string} color - Model color.
 */
function renderVertices(canvas, model, position, rotation, color) {
    for (const vertex of model.vertices) {
        const screenPos = toScreen(
            project(translate(rotateXYZ(vertex, rotation), position)),
            canvasMain.width,
            canvasMain.height,
        );
        canvasPoint(canvas, screenPos, color);
    }
}

/**
 * Renders a model as a wireframe.
 *
 * @param {HTMLCanvasElement} canvas - The canvas to draw on.
 * @param {Model} model - The model to render.
 * @param {Vector3} translation - Model translation.
 * @param {Vector3} rotation - Model rotation.
 * @param {string} color - Model color.
 */
function renderModel(canvas, model, position, rotation, color) {
    for (const face of model.faces) {
        for (let i = 0; i < face.length; i++) {
            const vertex1Index = face[i];
            const vertex2Index = face[(i + 1) % face.length];
            const vertex1 = model.vertices[vertex1Index];
            const vertex2 = model.vertices[vertex2Index];
            const point1 = toScreen(
                project(translate(rotateXYZ(vertex1, rotation), position)),
                canvas.width,
                canvas.height,
            );
            const point2 = toScreen(
                project(translate(rotateXYZ(vertex2, rotation), position)),
                canvas.width,
                canvas.height,
            );
            canvasLine(canvas, point1, point2, color);
        }
    }
}

/**
 * Resize a Canvas element.
 *
 * @param {HTMLCanvasElement} canvas - The canvas to resize.
 * @param {number} width - width in pixels.
 * @param {number} height - height in pixels.
 */
function canvasResize(canvas, width, height) {
    canvas.width = width;
    canvas.height = height;
}

/**
 * Fills a canvas with a color.
 *
 * @param {HTMLCanvasElement} canvas - The canvas to fill.
 * @param {string} color - Fill color.
 */
function canvasFill(canvas, color) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

/**
 * Plots a 2D point on canvas.
 *
 * @param {HTMLCanvasElement} canvas - The canvas to plot on.
 * @param {Vector2} point - 2D Point.
 * @param {string} color - Point color.
 */
function canvasPoint(canvas, point, color) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

/**
 * Draws a line on a canvas.
 *
 * @param {HTMLCanvasElement} canvas - The canvas to draw on.
 * @param {Vector2} start - line start.
 * @param {Vector2} end - line end.
 * @param {string} color - Line color.
 */
function canvasLine(canvas, start, end, color) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();
}

/**
 * project a 3d point onto the screen.
 * Uses weak perspective projection.
 *
 * @param {Vector3} point - 3D point.
 * @returns {Vector2} 2D point.
 */
function project(point) {
    const x = point.x / point.z;
    const y = point.y / point.z;
    return { x, y };
}

/**
 * converts a point to screen space.
 *
 * @param {Vector2} point - 2D point in camera space.
 * @param {number} screenWidth - screen width in pixels.
 * @param {number} screenHeight - screen height in pixels.
 * @returns {Vector2} 2D point in screen space.
 */
function toScreen(point, screenWidth, screenHeight) {
    const x = (point.x + 1) * screenWidth * 0.5;
    const y = (1 - point.y) * screenHeight * 0.5;
    return { x, y };
}

/**
 * translate a point by an offset.
 *
 * @param {Vector3} point - 3D point.
 * @param {Vector3} translation - Translation on each axis.
 * @returns {Vector3} 3D point.
 */
function translate(point, translation) {
    return {
        x: point.x + translation.x,
        y: point.y + translation.y,
        z: point.z + translation.z,
    };
}

/**
 * rotate a point around the X axis.
 *
 * @param {Vector3} point - 3D point.
 * @param {number} angle - angle in radians.
 * @returns {Vector3} 3d point.
 */
function rotateX(point, angle) {
    const sinTheta = Math.sin(angle);
    const cosTheta = Math.cos(angle);

    const x = point.x;
    const y = point.y * cosTheta - point.z * sinTheta;
    const z = point.y * sinTheta + point.z * cosTheta;

    return { x, y, z };
}

/**
 * rotate a point around the y axis.
 *
 * @param {Vector3} point - 3D point.
 * @param {number} angle - angle in radians.
 * @returns {Vector3} 3d point.
 */
function rotateY(point, angle) {
    const sinTheta = Math.sin(angle);
    const cosTheta = Math.cos(angle);

    const x = point.x * cosTheta - point.z * sinTheta;
    const y = point.y;
    const z = point.x * sinTheta + point.z * cosTheta;

    return { x, y, z };
}

/**
 * rotate a point around the Z axis.
 * @param {Vector3} point - 3D point.
 * @param {number} angle - angle in radians.
 * @returns {Vector3} 3d point.
 */
function rotateZ(point, angle) {
    const sinTheta = Math.sin(angle);
    const cosTheta = Math.cos(angle);

    const x = point.x * cosTheta - point.y * sinTheta;
    const y = point.x * sinTheta + point.y * cosTheta;
    const z = point.z;

    return { x, y, z };
}

/**
 * rotate a point around each axis.
 * @param {Vector3} point - 3D point.
 * @param {Vector3} rotation - Rotation around each axis (xyz).
 * @returns {Vector3} 3d point.
 */
function rotateXYZ(point, rotation) {
    return rotateZ(rotateY(rotateX(point, rotation.x), rotation.y), rotation.z);
}

/**
 * @typedef {Object} Vector2
 * @property {number} x - position on X axis.
 * @property {number} y - position on Y axis.
 */

/**
 * @typedef {Object} Vector3
 * @property {number} x - position on X axis.
 * @property {number} y - position on Y axis.
 * @property {number} z - position on Z axis.
 */

/**
 * @typedef {Array<number>} Face
 */

/**
 * @typedef {Object} Model
 * @property {Array<Vector3>} vertices
 * @property {Array<Face>} faces
 */

export { canvasResize, canvasFill, renderModel, renderVertices };
