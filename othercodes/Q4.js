
function setup() {
  angleMode(DEGREES);
  createCanvas(500, 500);

}
let rad=62.5;
let angle=0;
let centreX=250;
let centreY=250;


function draw() {

  background(127);

  //Big black Circle
  noStroke(0);
  fill(0);
  //number's added used to offset the arcs
  arc(centreX,centreX, 250, 250,angle+90,angle,PIE);
  
  //white half
  noStroke();
  fill(255);
  //number's added used to offset the arcs
  arc(centreX,centreX, 250, 250,angle+270,angle+90,PIE);
  
  //med black circ
  noStroke();
  fill(0);
  //312.5 middle of 1/3 of cic
  ellipse(centreX+rad*sin(angle),centreY+rad*cos(angle+180),125);
  
  noStroke();
//white med circ
  fill(255);
    //187.5.5 middle of 1/3 of cic
  ellipse(centreX+rad*sin(angle+180),centreY+rad*cos(angle),125);
  
  noStroke();
  //small black circ
  fill(0);
ellipse(centreX+rad*sin(angle+180),centreY+rad*cos(angle),50);
  
  noStroke();
  //small white circ
  fill(255);
  ellipse(centreX+rad*sin(angle),centreY+rad*cos(angle+180),50);
  angle++;
}