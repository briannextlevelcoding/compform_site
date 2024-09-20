// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  noStroke();
}

function draw() {
  background(50);

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const x = map(col, 0, 8, 50, 350);
      const y = map(row, 0, 8, 50, 350);
      const seconds = millis() / 1000.0;
      const s = sin(seconds * TWO_PI * ((row + 10) * 0.1));
      coin(x, y, 30, 30, s);
    }
  }
}

function coin(x, y, w, h, spin) {
  fill(spin < 0 ? "red" : "white");
  ellipse(x, y, w * spin, h);
}
