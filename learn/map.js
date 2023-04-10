function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(0);
  let color = map(mouseY, 0, width, 0, 255);
  let diameter = map(mouseX, 0, width, 40, 300);
  fill(255, 0, color);
  ellipse(width / 2, height / 2, diameter, diameter);
}
