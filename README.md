# Renderer3D

This is my attempt at making a simple wireframe 3D renderer.

This project renderer uses weak perspective projection where `x`, and `y` are divided by `z` to give a perspective distortion. It's basic, but does the job.

## How to run

The project is deployed on [github pages](https://Kiwi64bit.github.io/Renderer3D).

You can also run it locally:

```bash
git clone https://github.com/Kiwi64bit/Renderer3D.git
```

Open `index.html` file in you browser and enjoy the mesmerizing show ;)

## How to use

### First: A canvas

Initialize a `<canvas>` element to render your model on.

### Second: A mesh

The renderer needs a mesh. A mesh consists of a `Geometry` and a `Color`.
Use the `Mesh` class and provide a `Geometry` and a `Color`, each is a class that you can instantiate.
Currently, the project has only a torus geometry using `TorusGeometry` class.

This is an example:

```JavaScript
const geometry = new TorusGeometry();
const color = new Color(255, 0, 0, 255);
const mesh = new Mesh(geometry, color);

renderMesh(canvas, mesh);
```

you can create you own geometries using the `Geometry` class.
For example, this is a cube geometry:

```JavaScript
const cubeGeometry = new Geometry();
cubeGeometry.vertices = [
    new Vector3(-1, 1, -1),
    new Vector3(1, 1, -1),
    new Vector3(1, -1, -1),
    new Vector3(-1, -1, -1),
    new Vector3(-1, 1, 1),
    new Vector3(1, 1, 1),
    new Vector3(1, -1, 1),
    new Vector3(-1, -1, 1),
];

cubeGeometry.faces = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [0, 1, 5, 4],
    [3, 2, 6, 7],
    [0, 3, 7, 4],
    [1, 2, 6, 5],
];
```

As long as the geometry is in this format the mesh can be rendered.

### Third: A rendering function

Use `renderMesh` function to render a wireframe, or `renderVertices` to render only points.

> Both function are documented in the code.

Use `position` attribute of a `Mesh` to change its position, as will as `rotation` for rotations, and `scale` for scaling.
Make sure to call `updateMatrix` on the `Mesh` to update its transformation matrix, otherwise non of the updated transformation will be applied.

## Features

In this state, other than looking cool, this program has no features. Maybe you can use it as an inspiration, or as a background animation for your site. Have fun with it.

## What's next

- refactor renderer to use OOP.
- use Canvas as will as SVG for the renderer.
- Add camera object.
- Better projection.
- Better rotations to prevent gimbal lock.

Those are currently my main objectives. If you have a suggestion, you can open an issue or a pull request.

Bon appétit!

## License

[MIT](https://choosealicense.com/licenses/mit/)
