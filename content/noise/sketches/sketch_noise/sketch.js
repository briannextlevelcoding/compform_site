// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js

let freq_slider;
let amplitude_slider;
let octave_slider;
let animate_checkbox;
let t = 0;

function setup() {
  createCanvas(600, 400);

  fill(240);
  noStroke();
  ellipseMode(CENTER);

  createP("Amplitude");
  amplitude_slider = createSlider(0, 100, 100);
  createP("Frequency");
  freq_slider = createSlider(0, 100, 50);
  createP("Octaves/Detail");
  octave_slider = createSlider(1, 8, 1);

  animate_checkbox = createCheckbox("Animate Line", true);
}

function draw() {
  background(50);

  let frequency = freq_slider.value() / 100;
  let amplitude = amplitude_slider.value();
  noiseDetail(octave_slider.value(), 0.5);

  // draw a pulsing circle at the top
  let w = 50 + noise(frameCount * frequency) * amplitude;
  ellipse(width * 0.5, height * 0.25, w, w);

  // draw a line of ellipses with letying size
  for (let x = 0; x < width; x += 20) {
    if (animate_checkbox.checked()) {
      t += 0.01;
    }

    let w = 3 + noise(x * frequency * 0.1, t) * 0.2 * amplitude;
    ellipse(x, height * 0.75, w, w);
  }
}
