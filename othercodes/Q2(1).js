function setup() {
  createCanvas(500, 500);
  background(213, 230, 141);
  angleMode(DEGREES);

}
var pstart=0;

const romance = 6;
const action = 5;
const comedy = 4;
const scifi = 4;
const drama = 1;
//( 360Degrees / total=count)
var count =360/(action + romance + scifi + drama + comedy);
var xcount=360/(action + romance + scifi + drama + comedy);
function draw() {

  fill(53, 129, 184);
  rect(780, 260, 200, 300, 30);

//romance
  fill(242, 204, 143);
  arc(250, 250, 250, 250, pstart, [romance * count], PIE);
  pstart = pstart + (romance * count);

//action
  fill(244, 241, 222);
  arc(250, 250, 250, 250, pstart, [pstart+action * count], PIE);
  pstart = pstart + (action * count);

  //comedy
  fill(129, 178, 154);
  arc(250, 250, 250, 250, pstart, [pstart+comedy * count], PIE);
  pstart = pstart + (comedy * count);

  //scifi
  fill(61, 64, 91);
  arc(250, 250, 250, 250, pstart, [pstart+scifi * count], PIE);
  pstart = pstart + (scifi * count);

  //drama
  fill(224, 122, 95);
  arc(250, 250, 250, 250, pstart, [pstart+drama * count], PIE);
  pstart = pstart + (drama * count);

  //legend text
  //Scifi
  fill(61, 64, 91);
  textSize(15);
  text(("Scifi:"+scifi+" or "+xcount*scifi+"%"), 302, 415);
  rect(290, 405, 10, 10);

  //Comedy
  fill(129, 178, 154);
  textSize(15);
  text(("Comedy:"+comedy+" or "+xcount*comedy+"%"), 302, 430);
  rect(290, 420, 10, 10);

  //Action
  fill(244, 241, 255);
  textSize(15);
  text(("Action:"+action+" or "+xcount*action+"%"), 303, 448);
  rect(290, 438, 10, 10);

  //Drama
  fill(224, 122, 95);
  textSize(15);
  text(("Drama:"+drama+" or "+xcount*drama+"%"), 305, 465);
  rect(290, 455, 10, 10);

  //Romance
  fill(242, 204, 143);
  textSize(15);
  text(("Romance:"+romance+" or "+xcount*romance+"%"), 305, 480);
  rect(290, 470, 10, 10);

}