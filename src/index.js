import { generateTorus } from "./torus.js";
import { Vector2 } from "./math/Vector2.js";
import { Vector3 } from "./math/Vector3.js";

/**
 * @typedef {Array<number>} Face
 */

/**
 * @typedef {Object} Model
 * @property {Array<Vector3>} vertices
 * @property {Array<Face>} faces
 */

/**
 * @typedef {Object} Transformation
 * @property {Vector3} translation Translation on each axis
 * @property {Vector3} rotation Rotation around each axis
 */

/**
 * @callback TransformFunction
 * @param {Vector3} point
 * @param {Transformation} transformation
 * @returns {Vector3}
 */

/** @type {HTMLCanvasElement} */
const canvasMain = document.getElementById("canvas");

const bgColor = "#000000";
const fgColor = "#ffff00";

let sideLength = Math.min(window.innerWidth, window.innerHeight);
canvasResize(canvasMain, sideLength, sideLength);
canvasFill(canvasMain, bgColor);

window.onresize = () => {
    sideLength = Math.min(window.innerWidth, window.innerHeight);
    canvasResize(canvasMain, sideLength, sideLength);
    canvasFill(canvasMain, bgColor);
};

/** @type {Model} */
const Torus = generateTorus();

/** @type {Transformation} */
const state = {
    translation: new Vector3(0, 0, 2.5),
    rotation: new Vector3(0, 0, 0),
};

var lastTime = 0;
requestAnimationFrame(draw);

/**
 * Starts the program.
 * @param {number} currentTime time in ms passed by requestAnimationFrame
 */
function draw(currentTime) {
    const dt = (currentTime - lastTime) / 1000;
    lastTime = currentTime;
    canvasFill(canvasMain, bgColor);

    renderModel(canvasMain, Torus, point => transformPoint(point, state), fgColor);

    state.rotation.x += ((2 * Math.PI) / 10) * dt;
    state.rotation.y += ((2 * Math.PI) / 15) * dt;
    state.rotation.z += ((2 * Math.PI) / 20) * dt;

    requestAnimationFrame(draw);
}

/**
 * Transforms a 3D point by a translation and rotation.
 * @type {TransformFunction}
 */
function transformPoint(point, transformation) {
    return rotate(point, transformation.rotation).add(transformation.translation);
}

/**
 * Renders the points of a model.
 * @param {HTMLCanvasElement} canvas HTML5 canvas to render the model on
 * @param {Model} model The model to render
 * @param {TransformFunction} transform Takes a point as an input -> returns a new transformed point
 * @param {string} color CSS color
 */
function renderVertices(canvas, model, transform, color) {
    for (const vertex of model.vertices) {
        const transformedVertex = transform(vertex);
        const screenPos = toScreen(project(transformedVertex), canvasMain.width, canvasMain.height);
        canvasPoint(canvas, screenPos, color);
    }
}

/**
 * Renders a model as a wireframe.
 * @param {HTMLCanvasElement} canvas HTML5 canvas to render the model on
 * @param {Model} model The model to render
 * @param {TransformFunction} transform Takes a point as an input -> returns a new transformed point
 * @param {string} color CSS color
 */
function renderModel(canvas, model, transform, color) {
    for (const face of model.faces) {
        for (let i = 0; i < face.length; i++) {
            const vertex1Index = face[i];
            const vertex2Index = face[(i + 1) % face.length];
            const vertex1 = model.vertices[vertex1Index];
            const vertex2 = model.vertices[vertex2Index];
            const point1 = toScreen(project(transform(vertex1)), canvas.width, canvas.height);
            const point2 = toScreen(project(transform(vertex2)), canvas.width, canvas.height);
            canvasLine(canvas, point1, point2, fgColor);
        }
    }
}

/**
 * Resize a Canvas element.
 * @param {HTMLCanvasElement} canvas HTML5 canvas element to resize
 * @param {number} width canvas width in pixels
 * @param {number} height canvas height in pixels
 */
function canvasResize(canvas, width, height) {
    canvas.width = width;
    canvas.height = height;
}

/**
 * Fills a canvas with a color.
 * @param {HTMLCanvasElement} canvas HTML5 canvas element to fill
 * @param {string} color CSS color
 */
function canvasFill(canvas, color) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

/**
 * Plots a 2D point on canvas.
 * @param {HTMLCanvasElement} canvas HTML5 canvas element to plot on
 * @param {Vector2} point 2D Point to plot
 * @param {string} color CSS color
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
 * @param {HTMLCanvasElement} canvas HTML5 canvas element to draw on
 * @param {Vector2} start line start (2D point)
 * @param {Vector2} end line end (2d point)
 * @param {string} color - CSS color
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
 * @param {Vector3} point 3D point
 * @returns {Vector2} 2D point
 */
function project(point) {
    const x = point.x / point.z;
    const y = point.y / point.z;
    return new Vector2(x, y);
}

/**
 * converts a point to screen space.
 * @param {Vector2} point 2D point
 * @param {number} screenWidth screen width in pixels
 * @param {number} screenHeight screen height in pixels
 * @returns {Vector2} 2D point in screen space
 */
function toScreen(point, screenWidth, screenHeight) {
    const x = (point.x + 1) * screenWidth * 0.5;
    const y = (1 - point.y) * screenHeight * 0.5;
    return new Vector2(x, y);
}

/**
 * rotate a point around the X axis.
 * @param {Vector3} point 3D point
 * @param {number} angle angle in radians
 * @returns {Vector3} 3d point
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
 * @param {Vector3} point 3D point
 * @param {number} angle angle in radians
 * @returns {Vector3} 3d point
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
 * @param {Vector3} point 3D point
 * @param {number} angle angle in radians
 * @returns {Vector3} 3d point
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
 * @param {Vector3} point 3D point
 * @param {Vector3} rotation Rotation around each axis (xyz)
 * @returns {Vector3} 3d point
 */
function rotate(point, rotation) {
    return rotateZ(rotateY(rotateX(point, rotation.x), rotation.y), rotation.z);
}
