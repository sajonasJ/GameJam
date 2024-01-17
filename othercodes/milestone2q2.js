let angle = 0;
let movingcircle = []

let centerx;
let centery;
function setup() {
  // put setup code here
  createCanvas(400, 400);
  background(0);
  centerx = 200;
  centery = height / 2;

  rectMode(CENTER);
  fill(227);
  rect(centerx, centery, centerx + 180, centery + 180, 20);
}

function draw() {
  // put drawing code here
  fill(0, 150, 199,10); // remove comments to set the alpha
  rect(centerx, centery, centerx + 150, centery + 150, 10);


  stroke(0);
  strokeWeight(1);
  for (let i = 0; i <= 11; i++) {
    for (let j = 0; j <= 11; j++) { // can be removed and replaced with i
      const m = 33; //  coordinate close to 0
      const n = 363;// coordinate close to 400
      line(m, i * m, n, i * m);//vertical lines
      line(j * m, m, j * m, n);//horizontal lines
    }
  }

  strokeWeight(5);
  stroke(255);
  // point(centerx=point of reference + 165=size of curvature * sin(angle),
  // centery + 165 * cos(angle * 3= creates a different angle to the curve));

  lineX = centerx + 165 * sin(angle);
  lineY = centery + 165 * cos(angle * 3);
  // circle(lineX, lineY, 1); // hardcoded circle
  //line(lineX,lineY,lineX,lineY); //failure trial

  if (movingcircle.length > 180) {// upto 150 length
    movingcircle.shift(); //removews first element = first array coordinates(undefined)

  }

  movingcircle.push( // stores previous x , y coordinate
    {
      x: lineX,
      y: lineY
    }
  );

  for (let i = 0; i < movingcircle.length; i += 1) { //movingcircle.length= array length
    let size = i * .04;
    fill(255);
    circle(movingcircle[i].x, movingcircle[i].y, size)// p access the array while x and y are coord
  }
  angle += 0.01;//angle is the speed of the ball
}

