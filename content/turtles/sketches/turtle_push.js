// require https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js
// require /turtles/turtle/turtle.js

let myTurtle;

function setup() {
  createCanvas(500, 500);
  noFill();
  stroke(255);
  background(50);
  noLoop();
  angleMode(DEGREES);
  myTurtle = new Turtle();
}

function draw() {
  myTurtle.penUp();
  myTurtle.moveTo(250, 385);
  myTurtle.penDown();

  for (let i = 0; i < 180; i++) {
    myTurtle.moveForward(25 + i * 0.1);
    myTurtle.turnLeft(10);
    drawLeaf();
  }
}

function drawLeaf() {
  myTurtle.pushState();

  for (i = 0; i < 15; i++) {
    myTurtle.moveForward(2);
    myTurtle.turnLeft(18);
  }

  myTurtle.popState();
}
