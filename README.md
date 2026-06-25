# Renderer3D

This is my attempt at making a simple wireframe 3D renderer using HTML5 canvas.

This project renderer uses perspective division where `x`, and `y` are divided by `z` to give a perspective distortion. It's basic, but does the job.

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

### Second: A model

The project is very basic. The rendering function only understands an object with a specific format.  
For example, this is a cube:

```JavaScript
let model = {
    vertices: [
        new Vector3(-1,  1, -1),
        new Vector3( 1,  1, -1),
        new Vector3( 1, -1, -1),
        new Vector3(-1, -1, -1),
        new Vector3(-1,  1,  1),
        new Vector3( 1,  1,  1),
        new Vector3( 1, -1,  1),
        new Vector3(-1, -1,  1),
    ],

    faces: [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [0, 1, 5, 4],
        [3, 2, 6, 7],
        [0, 3, 7, 4],
        [1, 2, 6, 5],
    ],
};
```

These coordinates are relative to the canvas where:

- X axis: `-1` is far left, `1` is far right.
- Y axis: `-1` is bottom most, `1` is top most.
- Z axis: `-1` is behind the camera, `1` is in front of it.

As long as the model is in this format it can be rendered.

### Third: A rendering function

Use `renderModel` function to render a wireframe, or `renderVertices` to render points only.

> Both function are documented in the code.

Fiddle around with the position of the model, using `transformation` callback, so it appears in the view correctly.

## Features

In this state, other than looking cool, this program has no features. Maybe you can use it as an inspiration, or as a background animation for your site. Have fun with it.

## What's next

- refactor to use OOP
- Better projection
- Better rotations to prevent gimble lock
- Add camera

Those are currently my main objectives. If you have a suggestion, you can open an issue or a pull request.

Bon appétit!

## License

[MIT](https://choosealicense.com/licenses/mit/)
