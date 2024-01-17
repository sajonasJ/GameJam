/*credit to Kenney for the grass, car, and road sprite. I claim no ownership for the images 
nor this project is for personal use and not commercial use. If you like the 
sprite please checkout the author at https://opengameart.org/content/racing-pack*/
let startTrack;
let track;
let grassTile;
let roadTrack;
let carImage;
let grassGroup;
let raceCar;
let carX;
let carY;
const tileWidth = 50;
const tileHeight = 50;

function preload() {
  track = loadStrings('track.txt');
  startTrack = loadImage('images/startLine.png');
  grassTile = loadImage('images/grass.png');
  roadTrack = loadImage('images/horTrack.png');
  carImage = loadImage('images/redCar.png');
}

function setup() {
  createCanvas(750, 750);
  background('black');
  grassGroup = new Group();
  raceTrack();
  makeCar();
}

function draw() {
  //Background Image and Track
  drawSprites()
  carMovement();
  grassGroup.immovable = true;
  raceCar.bounce(grassGroup, restartCar);
  startGameText();
;
}
//////////////////////////////////////////////////END OF DRAW//////////////////////////////////////////////////

//create tile sprites
function makeGrass(x, y) {
  let grassSprite;
  grassTile.resize(tileWidth, tileHeight);
  grassSprite = createSprite(x, y);
  grassSprite.addImage("normal", grassTile);
  grassSprite.setCollider("circle", 0, 0, tileWidth - 30);
  // grassSprite.debug = true;
  grassSprite.immovable = true;
  return grassSprite;
}

function makeRoad(x, y) {
  let roadSprite;
  roadTrack.resize(tileWidth, tileHeight);
  roadSprite = createSprite(x, y);
  roadSprite.addImage("normal", roadTrack);
  roadSprite.setCollider("rectangle", 0, 0, tileWidth, tileHeight);
  // roadSprite.debug = true;
  return roadSprite;
}

function makeStart(x, y) {
  let startSprite;
  startTrack.resize(tileWidth, tileHeight);
  startSprite = createSprite(x, y);
  startSprite.addImage("normal", startTrack);
  // startSprite.setCollider("rectangle", 0, 0, tileWidth, tileHeight);
  // startSprite.debug = true;
  return startSprite;
}

//racetrack tiles with sprites
function raceTrack() {
  for (let tileRow = 0; tileRow < track.length; tileRow++) {//read the track.txt
    let currenTile = track[tileRow].split(" ");
    for (let objTile = 0; objTile < currenTile.length; objTile++) {//

      let tileLocX = objTile * tileWidth;//arrayX
      let tileLocY = tileRow * tileHeight;//arrayY
      let offSet = 25;
      let locationX = tileLocX + offSet;
      let locationY = tileLocY + offSet;
      let tileSprite = currenTile[objTile];

      if (tileSprite === "0") {
        grassGroup.add(makeGrass(locationX, locationY));

      } else if (tileSprite === "1") {
        makeRoad(locationX, locationY);

      } else if (tileSprite === "2") {
        makeStart(locationX, locationY);
        carX = tileLocX + 15;//make car appear where the tile is located
        carY = tileLocY + 25;
      }
    }
  }
}

//car sprite
function makeCar(x, y) {
  let carLocX = carX;
  let carLocY = carY;
  raceCar = createSprite(carLocX, carLocY);
  raceCar.addImage("idle", carImage);
  raceCar.scale = .3;
  raceCar.setCollider("circle", 0, -2, 20);
  raceCar.rotateToDirection = true;
  // raceCar.debug = true;
  raceCar.rotation = 270;
  raceCar.maxSpeed = 3;
  // raceCar.friction = 0.2;
  return raceCar;
}

//seperate carmovement function
function carMovement() {
  let up = keyDown(UP_ARROW);
  let down = keyDown(DOWN_ARROW);
  let left = keyDown(LEFT_ARROW);
  let right = keyDown(RIGHT_ARROW);
  let w = keyDown('w');
  let a = keyDown('a');
  let s = keyDown('s');
  let d = keyDown('d');

  if (up || w) {
    raceCar.addSpeed(.2, raceCar.rotation);
  }
  if (left || a) {
    raceCar.rotation -= 4;
    raceCar.addSpeed(.1, raceCar.rotation);
  }
  if (right || d) {
    raceCar.rotation += 4;
    raceCar.addSpeed(.1, raceCar.rotation);
  }
  if (down || s) {
    raceCar.friction = .1;
  } else {
    raceCar.friction = .01;
  }
}

function restartCar() {
  raceCar.remove();
  makeCar(carX, carY);
}

//texts
function startGameText() {
  let mytext = 'START';
  let instructions = 'Press Arrow Keys to Play or WASD';
  let centreX =width /2;
  let centreY = height / 2;
  textSize(20);
  textStyle(BOLD);
  textAlign(LEFT);
  text(instructions, 10, 700);

  if (keyIsPressed) {
    mytext = ' ';//blank while playing
  } else {
    textSize(50);
    textAlign(CENTER);
    text(mytext, centreX, centreY);
  }
}