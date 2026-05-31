import { generateTorus } from "./src/torus.js";
import { canvasResize, canvasFill, renderModel } from "./src/Renderer3D.js";

const bgColor = "#000000";
const fgColor = "#ffff00";

const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

resizeAndClear(canvas, bgColor);
window.onresize = () => resizeAndClear(canvas, bgColor);

const Torus = generateTorus();

const position = { x: 0, y: 0, z: 2.5 };
const rotation = { x: 0, y: 0, z: 0 };

var lastTime = 0;
requestAnimationFrame(draw);

/**
 * Starts the rendering loop.
 *
 * @param {number} currentTime time in ms passed by requestAnimationFrame
 */
function draw(currentTime) {
    const dt = (currentTime - lastTime) / 1000;
    lastTime = currentTime;
    canvasFill(canvas, bgColor);

    renderModel(canvas, Torus, position, rotation, fgColor);

    rotation.x += 2 * Math.PI * 0.1 * dt;
    rotation.z += 2 * Math.PI * 0.1 * dt;

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
