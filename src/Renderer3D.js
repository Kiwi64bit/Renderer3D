import { Vector2 } from "./math/Vector2.js";
import { Vector3 } from "./math/Vector3.js";
import { Matrix4 } from "./math/Matrix4.js";
import { Mesh } from "./core/Mesh.js";

/**
 * Renders the points of a mesh.
 *
 * @param {HTMLCanvasElement} canvas - The canvas to render on.
 * @param {Mesh} mesh - The mesh to render.
 */
function renderVertices(canvas, mesh) {
    for (const v of mesh.geometry.vertices) {
        const vertex = v.clone();
        const screenPos = toScreen(project(vertex.applyMatrix4(mesh.matrix)), canvas.width, canvas.height);
        canvasPoint(canvas, screenPos, mesh.color.hex);
    }
}

/**
 * Renders a mesh as a wireframe.
 *
 * @param {HTMLCanvasElement} canvas - The canvas to render on.
 * @param {Mesh} mesh - The mesh to render.
 */
function renderMesh(canvas, mesh) {
    for (const face of mesh.geometry.faces) {
        for (let i = 0; i < face.length; i++) {
            const index1 = face[i];
            const index2 = face[(i + 1) % face.length];
            const vertex1 = mesh.geometry.vertices[index1].clone();
            const vertex2 = mesh.geometry.vertices[index2].clone();
            const point1 = toScreen(project(vertex1.applyMatrix4(mesh.matrix)), canvas.width, canvas.height);
            const point2 = toScreen(project(vertex2.applyMatrix4(mesh.matrix)), canvas.width, canvas.height);
            canvasLine(canvas, point1, point2, mesh.color.hex);
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
    return new Vector2(point.x / point.z, point.y / point.z);
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

export { canvasResize, canvasFill, renderMesh, renderVertices };
