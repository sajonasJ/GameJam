function setup() {
  createCanvas(500, 500);

  angleMode(DEGREES);
}

let speed1 = 0;
let centreX = 250;
let centreY = 250;
let speed2 = 0;


function draw() {
  background(0, 127, 0);


  //path
  noFill();
  stroke(127);
  strokeWeight(40);
  ellipse(centreX, centreY, 250, 100);

  //yellow
  noFill();
  stroke(255, 255, 0);
  strokeWeight(2);
  ellipse(centreX, centreY, 250, 100);

  //red
  noStroke();
  fill(250, 0, 0);
  //different radius for each circle
  circle(centreX + 120 * sin(speed1), centreY + 45 * cos(speed1), 10);

  //blue
  noStroke();
  fill(0, 0, 250);
  //different radius for each circle
  circle(centreX + 130 * sin(speed2), centreY + 60 * cos(speed2), 10);

  strokeWeight(5);
  stroke(0);
  line(250, 280, 250, 320);


  speed1 = speed1 + 1;
  speed2 = speed2 + 2;

}