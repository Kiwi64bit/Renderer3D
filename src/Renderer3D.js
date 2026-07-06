import { Vector2 } from "./math/Vector2.js";
import { Vector3 } from "./math/Vector3.js";
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
    const _v = new Vector3();
    for (const vertex of model.vertices) {
        _v.set(vertex.x, vertex.y, vertex.z);
        const screenPos = toScreen(
            project(rotateXYZ(_v, rotation).add(position)),
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
    const _v1 = new Vector3();
    const _v2 = new Vector3();
    for (const face of model.faces) {
        for (let i = 0; i < face.length; i++) {
            const vertex1Index = face[i];
            const vertex2Index = face[(i + 1) % face.length];
            const vertex1 = model.vertices[vertex1Index];
            const vertex2 = model.vertices[vertex2Index];
            _v1.set(vertex1.x, vertex1.y, vertex1.z);
            _v2.set(vertex2.x, vertex2.y, vertex2.z);
            const point1 = toScreen(
                project(rotateXYZ(vertex1, rotation).add(position)),
                canvas.width,
                canvas.height,
            );
            const point2 = toScreen(
                project(rotateXYZ(vertex2, rotation).add(position)),
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
    return new Vector3(point.x / point.z, point.y / point.z);
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
    return new Vector2(x, y);
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

    return new Vector3(x, y, z);
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

    return new Vector3(x, y, z);
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

    return new Vector3(x, y, z);
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
 * @typedef {Array<number>} Face
 */

/**
 * @typedef {Object} Model
 * @property {Array<Vector3>} vertices
 * @property {Array<Face>} faces
 */

export { canvasResize, canvasFill, renderModel, renderVertices };
