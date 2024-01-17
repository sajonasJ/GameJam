let adv, advx, advy, angle, sky, g;
let orc1x, orc2x, orc3x, orc1y, orc2y, orc3y;
let orc, orcs, orcsz;
let orc1mx, orc2mx, orc3mx, orc1my, orc2my, orc3my;
let banner, timer;
let cloudx, cloudy;
let puddlex, puddley;

function preload() {
  adv = loadImage('./othercodes/pics/images/adventurer.png'); // hero
  orc = loadImage('./othercodes/pics/images/orc.png');
  banner = loadImage('./othercodes/pics/images/cc.png'); // image canvass at framecount 600
}


function setup() {
  createCanvas(600, 300);
  extraCanvas = createGraphics(600, 300); // to create another layer to put an image
  advx = 20;
  advy = 170;
  angle = 0;
  sky = 255;
  // coordinates randomizer
  g = random(0, 255); // colours
  cloudx = random(0, 100);
  cloudy = random(0, 100);

  puddlex = random(300, 600);
  puddley = random(160, 290);

  orcs = 60;
  orcsz = 60;
  orc1x = random(50, 600);
  orc2x = random(50, 600);
  orc3x = random(50, 600);
  orc1y = random(150, 300);
  orc2y = random(150, 300);
  orc3y = random(150, 300);

  orc1mx = random(-1, 1);
  orc2mx = random(-1, 1);
  orc3mx = random(-1, 1);
  orc1my = random(-1, 1);
  orc2my = random(-1, 1);
  orc3my = random(-1, 1);

}
function draw() {
  background(173 * sin(sky), 216 * sin(sky), 255 * sin(sky));// sky colour c

  noStroke();
  fill(255, 220 * sin(angle), 0); //////////// change colours at range of sin
  circle(450, 70, 70 * sin(angle)); // make circle pop              Sun ray blink

  fill(255, 220 * sin(angle), 0); ////////////// constant circle size      Sun
  circle(450, 70, 60);

  fill(250 * sin(sky), 180, 0);//land
  rect(0, height / 2, width, height / 2);
////////////////////////////////////////////////////////////////starmovement////////////////////////
  for (let i = 0; i < 5; i += 3) { // star movement at the background
    fill('white');
    noStroke();
    let x = random(0, 600);
    let y = random(0, 150);
    circle(x, y, 5);
  }
  ///////////////////////////////////////// funcion calls for cluds and puddles///////////////////////////
  clouds(cloudx, cloudy - 30);
  clouds1(cloudx + 300, cloudy);
  clouds2(cloudx + 50, cloudy + 50);
  cloudx += .1; // moving clouds

  puddle(puddlex, puddley);
  puddlex -= .1; // moving puddle

  //////////////////////////////////////////////// orc sprites ///////////////////////////////////////
  image(orc, orc1x, orc1y, orcs, orcsz);
  image(orc, orc2x, orc2y, orcs, orcsz);
  image(orc, orc3x, orc3y, orcs, orcsz);
  ///////////////////////////////////////////// orc movements/////////////////////////////////////
  orc1x += orc1mx;
  orc1y += orc1my;

  orc2x += orc2mx;
  orc2y += orc2my;

  orc3x += orc3mx;
  orc3y += orc3my;
///////////////////////////////////////////////rebounce detection///////////////////////////////////////
  if (orc1x < 0 || orc1x > 550 || orc1y < 160 || orc1y > 240) { // orc movement boundaries
    orc1mx = orc1mx * -1;
    orc1my = orc1my * -1;
  }

  if (orc2x < 0 || orc2x > 550 || orc2y < 160 || orc2y > 240) {
    orc2mx = orc1mx * -1;
    orc2my = orc1my * -1;
  }

  if (orc3x < 0 || orc3x > 550 || orc3y < 160 || orc3y > 240) {
    orc3mx = orc3mx * -1;
    orc3my = orc3my * -1;
  }

  image(adv, advx, advy, 60, 40); // hero image
/////////////////////////////////////////////////////keystrokes///////////////////////
  if (keyIsDown(LEFT_ARROW)) { // keystrokes
    advx -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    advx += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    advy -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    advy += 5;
  }
///////////////////////////////////////////////////////function collision detection + reset location if detected//////////////////////////
  if (checkOrcHit(advx, advy, orc1x, orc1y)) { // function collision detection
    orc1x = random(50, 550);
    orc1y = random(150, 250);

  }
  if (checkOrcHit(advx, advy, orc2x, orc2y)) {

    orc2x = random(50, 550);
    orc2y = random(150, 250);

  }
  if (checkOrcHit(advx, advy, orc3x, orc3y)) {
    orc3x = random(50, 550);
    orc3y = random(150, 250);
  }

  function checkOrcHit(advx, advy, orcx, orcy) { // function collision detection
    if (advx >= orcx && advx <= orcx + 60 && advy >= orcy && advy <= orcy + 60) {
      return true;
    } else {
      return false;
    }
  }
//////////////////////////////////////////////framecount text + extracanvass to fill/////////////////////////////////////
  push();
  fill('yellow');
  textSize(10);
  text(frameCount, width - 30, height - 20); // framecount text
  pop();
  if (frameCount >= 600) {
    push();
    textSize(30);
    fill('red');
    textAlign(CENTER, CENTER); // center alignment from coordinates
    text('GAME OVER', 300, 150);
    pop();
    for (i = 0; i < 30; i++) { // image fill at 600 framecount
      image(extraCanvas, 0, 0);
      x = random(0, width);
      y = random(0, height);
      let colour = banner.get(x, y);
      extraCanvas.fill(colour);
      extraCanvas.noStroke();
      extraCanvas.circle(x, y, 5);
    }
  }
  angle += 0.03;
  sky += 0.02;
/////////////////////////////////////////////////////////////////////////clear function///////////////////////////////////////////////////
  if (mouseIsPressed) { // reset framecount to view canvas1
    frameCount = 0;
    extraCanvas.clear();// clear canvas 2 when mousepressed
  }

}
/////////////////////////////////////////////////////////////////////custom functions/////////////////////////////////////////////////////////////
function clouds(cloudx, cloudy) { // cloud 1
  fill(250);
  noStroke();
  ellipse(cloudx, cloudy, 70, 90);
  ellipse(cloudx + 10, cloudy + 10, 220, 50);
  ellipse(cloudx + 25, cloudy + 15, 250, 30);
  ellipse(cloudx - 20, cloudy + 10, 70, 70);
}
function clouds1(cloudx, cloudy) { // cloud 2
  fill(250);
  noStroke();
  ellipse(cloudx, cloudy, 150, 30);
  ellipse(cloudx - 20, cloudy + 10, 100, 30);
}
function clouds2(cloudx, cloudy) { // cloud3
  fill(250);
  noStroke();
  ellipse(cloudx - 20, cloudy + 10, 90, 60);
  ellipse(cloudx + 25, cloudy + 15, 220, 30);
  ellipse(cloudx - 20, cloudy + 10, 170, 30);
}

function puddle(puddlex, puddley) { // puddle
  push();
  stroke('black');
  strokeWeight(1);
  fill(127);
  ellipse(puddlex + 25, puddley - 13, 30, 20)
  fill('lightblue');
  ellipse(puddlex, puddley, 150, 20);
  pop();
}

