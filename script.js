import { canvasResize, canvasFill, renderMesh, renderVertices } from "./src/Renderer3D.js";
import { Mesh } from "./src/core/Mesh.js";
import { Color } from "./src/core/Color.js";
import { TorusGeometry } from "./src/core/TorusGeometry.js";

const bgColor = "#000000";

// Main canvas
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

// setup canvas
resizeAndClear(canvas, bgColor);
window.onresize = () => resizeAndClear(canvas, bgColor);

// Create mesh
const torusGeometry = new TorusGeometry();
const torus = new Mesh(torusGeometry, new Color(255, 255, 0));

torus.position.z = 2.5;
torus.updateMatrix();

// Start rendering loop.
var lastTime = 0;
requestAnimationFrame(draw);

function draw(currentTime) {
    const dt = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    // clear canvas
    canvasFill(canvas, bgColor);

    // render mesh
    renderMesh(canvas, torus);

    // update transformations
    torus.rotation.x += 2 * Math.PI * 0.1 * dt;
    torus.rotation.y += 2 * Math.PI * 0.1 * dt;
    torus.updateMatrix();

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
