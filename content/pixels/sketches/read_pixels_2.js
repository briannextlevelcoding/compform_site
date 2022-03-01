// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

/* exported preload setup draw*/

let worldImage;

function preload() {
  worldImage = loadImage("/pixels/sketches/world.png");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  worldImage.loadPixels();

  for (let y = 0; y < worldImage.height; y++) {
    for (let x = 0; x < worldImage.width; x++) {
      const this_color = worldImage.get(x, y);
      const below_color = worldImage.get(x, y + 1);

      if (lightness(this_color) < lightness(below_color)) {
        const out_color = color(255, 0, 255);
        worldImage.set(x, y, out_color);
      }
    }
  }

  worldImage.updatePixels();

  noSmooth();
  image(worldImage, 0, 0, width, height);

  noLoop();
}
