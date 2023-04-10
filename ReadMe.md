# ArtNight - Creative Coding

## p5.js

p5.js is a JavaScript library for creative coding, with a focus on making coding
accessible and inclusive for artists, designers, educators, beginners, and
anyone else! p5.js is free and open-source because we believe software, and the
tools to learn it, should be accessible to everyone.

Using the metaphor of a sketch, p5.js has a full set of drawing functionality.
However, you’re not limited to your drawing canvas. You can think of your whole
browser page as your sketch, including HTML5 objects for text, input, video,
webcam, and sound.

## Ein paar Links

Hier findet ihr alle Funktionen und Informationen:

https://p5js.org/reference/

Hier findet ihr den Online Editor:

https://editor.p5js.org/

## Ein paar Beispiele zum Ausprobieren:

Beispiel 1: Ein Viereck zeichnen

```
function setup() {
  let d = 90;
  let p1 = d;
  let p2 = p1 + d;
  let p3 = p2 + d;
  let p4 = p3 + d;

  createCanvas(600, 600);
  background(0);

  stroke(255);
  line(p3, p3, p2, p3);
  line(p2, p3, p2, p2);
  line(p2, p2, p3, p2);
  line(p3, p2, p3, p3);
}
```

Beispiel 2: Etwas Bewegtes zeichnen

```
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

```

Beispiel 3: Mit der Maus interagieren

```
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
```
