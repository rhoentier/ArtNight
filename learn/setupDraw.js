let y = 100;

function setup() {
  createCanvas(600, 600);
  stroke(255);
  frameRate(60);
}

function draw() {
  background(0);
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}
