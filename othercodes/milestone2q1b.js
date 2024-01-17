function setup() {
  createCanvas(400, 400);
  background(248);
  noLoop();
}

function draw() {
  //line1
  strokeWeight(random(2, 20))
  stroke(random(255), random(255), random(255), random(200));
  noFill();
  beginShape();
  for (let i = 0; i <= 6; i += 1) {//6 vertex
    let x = random(20, 380);
    let y = random(20, 380);
    curveVertex(x, y);
  }
  endShape();
  //line2
  strokeWeight(random(2, 20))
  stroke(random(255), random(255), random(255), random(200))
  beginShape();
  for (let i = 0; i <= 5; i += 1) {//5 vertex
    let x = random(40, 360);
    let y = random(40, 360);
    curveVertex(x, y);
  }
  endShape();
  //line3
  strokeWeight(random(2, 20))
  stroke(random(255), random(255), random(255), random(200));

  beginShape();//4 vertex
  for (let i = 0; i <= 4; i += 1) { // 4 vertex
    let x = random(40, 360);
    let y = random(40, 360);
    curveVertex(x, y);
  }
  endShape();

  //line4
  strokeWeight(random(2, 20))
  stroke(random(255), random(255), random(255), random(200));
  beginShape();
  for (let i = 0; i <= 7; i += 1) {// 7 vertex
    let x = random(40, 360);
    let y = random(40, 360);
    curveVertex(x, y);
  }
  endShape();


}
