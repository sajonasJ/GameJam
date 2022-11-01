"use strict"
function setup() {
  createCanvas(600, 800);
}

function draw() {
  image(jamtacular, 0, 0);
  fill(250*sin(red), 255, 0,180);
  circle(circleX, 600, 60);
  circleX += circleBounce;
  if (circleX > width - 30 || circleX < 30) {
    circleBounce = circleBounce * -1
  }
red+=.5;
}
