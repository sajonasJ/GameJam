let rectbox = ['red', 'yellow', 'blue']; // colours of background the rectangles
let rectx, recty, rectz;
function setup() {
  createCanvas(800, 600);
  background(255);
  noLoop();
  //background rect with colours
  rectx = 100; // starting point of rectangles x coordinate
  recty = 200;
  rectz = 400;
  fill(rectbox[0]);
  rect(rectx, rectx, recty, rectz);
  fill(rectbox[1]);
  rect(rectx * 3, rectx, recty, rectz);
  fill(rectbox[2]);
  rect(rectx * 5, rectx, recty, rectz);
}


function draw() {
  //on red blue horiz lines
  for (let i = 0; i < 100; i += 3) {//topleft background  stripes 1st
    let y = 100;
    push();
    strokeWeight(3);
    stroke('blue');
    line(100, y + i * 2, 300, y + i * 2);
    pop();
  }
  //on red yellow horiz lines
  for (let i = 0; i < 100; i += 3) {//bottomleft background  stripes 4th
    push();
    strokeWeight(3);
    stroke('yellow');
    let y = 300;
    line(100, y + i * 2, 300, y + i * 2);
    pop();
  }
  //on yellow red horiz
  for (let i = 0; i < 100; i += 3) {//topmid background stripes 2nd
    push();
    strokeWeight(3);
    stroke('red');
    let y = 100;
    line(300, y + i * 2, 500, y + i * 2);
    pop();
  }
  //on yellow blue horiz
  for (let i = 0; i < 100; i += 3) {//bottommid background stripes  5th
    push();
    strokeWeight(3);
    stroke('blue');
    let y = 300;
    line(300, y + i * 2, 500, y + i * 2);
    pop();
  }
  //on blue yellow horiz
  for (let i = 0; i < 100; i += 3) {//topright background stripes 3rd
    push();
    strokeWeight(3);
    stroke('yellow');
    let y = 100;
    line(500, y + i * 2, 700, y + i * 2,);
    pop();
  }
  //on blue red horiz
  for (let i = 0; i < 100; i += 3) {//bottompright background stripes 6th
    push();
    strokeWeight(3);
    stroke('red');
    let y = 300;
    line(500, y + i * 2, 700, y + i * 2);
    pop();
  }


  //shape1 topleft circle 1st
  noStroke();
  fill('red');
  circle(200, 200, 100)
  //shape2 topmid square 2nd
  noStroke();
  fill('yellow');
  square(150, 350, 100)
  //shape3 bottomleft square 4th
  noStroke();
  fill('red');
  square(350, 150, 100)
  //shape5 topright triangle 3rd
  noStroke();
  fill('blue');
  triangle(550, 250, 600, 150, 650, 250);
  //shape4 bottom mid trapezoid 5th
  noStroke();
  fill('yellow');
  quad(350, 450, 380, 350, 420, 350, 450, 450);
  //shape6 bottom right parallelogram 6th
  noStroke();
  fill('blue');
  quad(555, 450, 590, 350, 624, 350, 590, 450);

  for (let i = 0; i <= 310; i += 7) { // 1st start inner line
    let x1 = i;
    let x2 = i;
    let a = 200 - i;
    let c = 50;
    let y1 = 200 - sqrt(c * c - a * a)
    let y2 = 200 + sqrt(c * c - a * a)
    strokeWeight(3);
    stroke('yellow')
    line(x1, y1, x2, y2); // 1st end
  }

  for (let i = 0; i < 50; i += 4) { // 2nd start inner line
    push();
    stroke('blue');
    strokeWeight(3);
    let x = 351;
    line(x + i * 2, 150, x + i * 2, 250);
    pop(); // 2nd end
  }
  for (let i = 0; i < 50; i += 4) { // 4th inner line
    push();
    stroke('blue');
    strokeWeight(3);
    let x = 151;
    line(x + i * 2, 350, x + i * 2, 450);
    pop(); // 4th end
  }
  for (let i = 0; i <= 50; i += 3) { // inner line start 3rd triangle
    a = 0;
    b = 0;
    c = sqrt(a * a + b * b);
    x1 = i;
    y1 = c;
    x2 = i;
    y2 = c - i * 2;
    stroke('red')
    strokeWeight(2);
    line(x1 + 550, y1 + 250, x2 + 550, y2 + 250);
  } // 3rd inner line middle
  for (let i = 0; i <= 50; i += 3) {
    a = 0;
    b = 0;
    c = sqrt(a * a + b * b);
    x1 = i;
    y1 = c + i * 2;
    x2 = i;
    y2 = 100;
    stroke('red')
    strokeWeight(2);
    line(x1 + 600, y1 + 150, x2 + 600, y2 + 150);
  }

  quad(350, 450, 380, 350, 420, 350, 450, 450);// trapezoid 5th
  for (let i = 0; i <= 30; i += 3) {
    a = 0;
    b = 0;
    c = sqrt(a * a + b * b);
    x1 = i;
    y1 = c + i * 3;
    x2 = i;
    y2 = 100;
    stroke('red')
    strokeWeight(2);
    line(x1 + 420, y1 + 350, x2 + 420, y2 + 350);
  }
  for (let i = 0; i <= 34; i += 3) { // trapezoid 5th
    a = 0;
    b = 0;
    c = sqrt(a * a + b * b);
    x1 = i;
    y1 = c;
    x2 = i;
    y2 = c - i * 3
    stroke('red')
    strokeWeight(2);
    line(x1 + 348, y1 + 450, x2 + 348, y2 + 449);
  }

  for (let i = 0; i <= 40; i += 3) { // trapezoid 5th
    a = 0;
    b = 0;
    c = sqrt(a * a + b * b);
    x1 = i;
    y1 = c;
    x2 = i;
    y2 = c - 100;
    stroke('red')
    strokeWeight(2);
    line(x1 + 378, y1 + 450, x2 + 378, y2 + 450); // 5th trapezoid end
  }
  for (let i = 0; i <= 35; i += 3) { // 6th start line
    a = 0;
    b = 0;
    c = sqrt(a * a + b * b);
    x1 = i;
    y1 = c;
    x2 = i;
    y2 = c - i * 3;
    stroke('yellow')
    strokeWeight(1);
    line(x1 + 556, y1 + 450, x2 + 556, y2 + 450);
  }

  //quad(550, 450, 600, 350, 650, 350, 600, 450);//parallelogram
  for (let i = 0; i <= 35; i += 3) {
    a = 0;
    b = 0;
    c = sqrt(a * a + b * b);
    x1 = i;
    y1 = c;
    x2 = i;
    y2 = c - i * 3;
    stroke('yellow')
    strokeWeight(1);
    line(x1 + 592, y1 + 350, x2 + 592, y2 + 450);// 6th end line
  }
}
