import { generateTorus } from "./src/torus.js";
import { Vector3 } from "./src/math/Vector3.js";
import { Matrix4 } from "./src/math/Matrix4.js";
import { canvasResize, canvasFill, renderModel } from "./src/Renderer3D.js";

// Demo colors
const bgColor = "#000000";
const fgColor = "#ffff00";

// Main canvas
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

// setup canvas
resizeAndClear(canvas, bgColor);
window.onresize = () => resizeAndClear(canvas, bgColor);

// Create model
const Torus = generateTorus(1, 0.5, 32, 16);

// Transformations
const rotation = new Vector3();
const position = new Vector3(0, 0, 2.5);
const transformationMatrix = new Matrix4();

// Start rendering loop.
var lastTime = 0;
requestAnimationFrame(draw);

/**
 * Initializes the rendering loop.
 *
 * @param {number} currentTime time in ms passed by `requestAnimationFrame`.
 */
function draw(currentTime) {
    const dt = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    // clear canvas
    canvasFill(canvas, bgColor);

    // render model
    renderModel(canvas, Torus, transformationMatrix, fgColor);

    // update transformations
    rotation.x += 2 * Math.PI * 0.1 * dt;
    rotation.y += 2 * Math.PI * 0.1 * dt;

    // update transformation matrix
    transformationMatrix.identity();
    transformationMatrix.multiply(Matrix4.translationMatrix(position.x, position.y, position.z));
    transformationMatrix.multiply(Matrix4.rotationXMatrix(rotation.x));
    transformationMatrix.multiply(Matrix4.rotationYMatrix(rotation.y));
    transformationMatrix.multiply(Matrix4.rotationZMatrix(rotation.z));

    requestAnimationFrame(draw);
}

/**
 * Resizes a canvas and clears it.
 *
 * @param {HTMLCanvasElement} canvas - The canvas to resize.
 * @param {string} bgColor - Background color.
 */
function resizeAndClear(canvas, bgColor) {
    let sideLength = Math.min(window.innerWidth, window.innerHeight);
    canvasResize(canvas, sideLength, sideLength);
    canvasFill(canvas, bgColor);
}
