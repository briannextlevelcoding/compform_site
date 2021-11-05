// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

let EXPORT = false;

function setup() {
  pixelDensity(1);
  createCanvas(1280, 720);
  frameRate(60);
  ellipseMode(CENTER);
  noiseDetail(1);
}

function draw() {
  blendMode(BLEND);
  background(0);

  blendMode(ADD);
  fill(1);
  let x = width * 0.5;
  let y = height * 0.5;

  for (i = 0; i < 5000; i++) {
    let s = sin((frameCount / 90) * PI) * 100;

    let offsetX = map(noise(i * 0.5, frameCount * 0.01, 0), 0, 0.5, -640, 640);
    let offsetY = map(noise(i * 0.5, frameCount * 0.01, 1), 0, 0.5, -640, 640);

    ellipse(x + offsetX, y + offsetY, s, s);
  }

  if (EXPORT) {
    saveFrame("EXPORT", frameCount, "jpg", 90);
  }
  if (frameCount > 90) {
    noLoop();
  }
}

// saveFrame - a utility function to save the current frame out with a nicely formatted name
// format: name_####.extension
// name: prefix for file name
// frameNumber: number for the frame, will be zero padded
// extension: jpg or png, controls file name and image format
// maxFrame: checked against frameNumber, frames beyond maxFrame are not saved
function saveFrame(name, frameNumber, extension, maxFrame) {
  // don't save frames once we reach the max
  if (maxFrame && frameNumber > maxFrame) {
    return;
  }

  if (!extension) {
    extension = "png";
  }
  // remove the decimal part (just in case)
  frameNumber = floor(frameNumber);
  // zero-pad the number (e.g. 13 -> 0013);
  let paddedNumber = ("0000" + frameNumber).substr(-4, 4);

  save(name + "_" + paddedNumber + "." + extension);
}
