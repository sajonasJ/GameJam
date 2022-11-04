"use strict"
////////////////////////VARIABLES////////////////////////
let playButton, creditsButton, settingsButton, returnButton, settingsIcon, font, mainMenuBG, playButtonIMG, creditsButtonIMG;
let health = 100, maxHealth = 100;
////////////////////////IMAGE ANIMATION VARIABLES////////////////////////
var runningSpriteSheet;
var runningAnim;
var idleSpriteSheet;
var idleAnim;
var runningLeftSpriteSheet;
var runningLeftAnim;
let pAttack;
let pAttackSprite;
let transform, rage;
let rage1, rageSpr1;
let rage2, rageSpr2;
let background1;
////////////////////////Class VARIABLES////////////////////////
let player = new PlayerManager();
let enemyA = new MinionManagerA(200,400);
let enemyB = new MinionManagerB(400,200);
////////////////////////BACKGROUND VARIABLES////////////////////////

function preload() {
  background1 = loadImage("assets/images/background1.png")
  player.preload()
  enemyA.preload()
  enemyB.preload()
  font = loadFont("fonts/joystix monospace.ttf")
  mainMenuBG = loadImage("assets/images/mainMenuBG.png")
  playButtonIMG = loadImage("assets/images/playbutton.png.png")
  creditsButtonIMG = loadImage("assets/images/creditsButton.png")
}

function setup() {
  createCanvas(1280, 720);
  player.setup();
  enemyA.setup();
  enemyB.setup()
  buttonManager();
}

function draw() {
  drawScreens();
 
}
////////////////////////DRAWSCREEN CONTROL////////////////////////
function drawMainMenu() {
  background(155);
  image(mainMenuBG, 0, 0)
  showMainMenuButtons();
  returnButton.hide();
  creditsButton.mousePressed(viewCredits);
  playButton.mousePressed(viewGame);
  settingsButton.mousePressed(viewSettings);
  returnButton.mousePressed(viewMainMenu);
}

function drawGamePlay() {
  hideMainMenuButtons();
  returnButton.hide();
  player.draw();
  enemyA.draw();
  enemyB.draw();
  console.log(frameCount);

  ////////////////////////TEMP BCKGRND////////////////////////

  background(0);
  player.keyPressed();
  image(background1, 0, 0, 3840, 0);
  createHealthBar();
  spriteWalls();
  // for (let closingIn of enemyA.Group) {
  //   closingIn.attractionPoint(2, player.position.x, player.position.y);
  // }
  drawSprites();

}

function createHealthBar() {//healthbar && health spawner
  noStroke();
  fill(255, 0, 0);
  rect(20, 770, map(health, 0, maxHealth, 0, 200), 15);//health=0 to max=100 length 200;red
  stroke(0);
  strokeWeight(4);
  noFill();
  rect(20, 770, 200, 15);//rectbox
}

function drawSettings() {
  background("yellow");
  hideMainMenuButtons();
  returnButton.show();
}
function drawCredits() {
  background("green");
  hideMainMenuButtons();
  returnButton.show();
}
function drawLose() {
  background(155);
}
function drawWin() {
  background(155);
}
////////////////////////CONTROL BUTTONS////////////////////////



////////////////////////CREATE BUTTONS////////////////////////
function buttonManager() {

  creditsButton = createImg("assets/images/creditsButton.png")
  creditsButton.position(950, 150)

  returnButton = createButton("RETURN")
  returnButton.position(width / 2 - 50, 500)
  returnButton.size(100, 50)
  returnButton.hide()

  settingsButton = createImg("assets/images/settingsCog.png")
  settingsButton.position(50, 50)

  playButton = createImg("assets/images/playButton.png.png")
  playButton.position(950, 50)
}

function showMainMenuButtons() {
  playButton.show()
  creditsButton.show()
  settingsButton.show()
}
function hideMainMenuButtons() {
  playButton.hide()
  creditsButton.hide()
  settingsButton.hide()
}

function spriteWalls() {
  for (let i = 0; i < allSprites.length; i++) {
    let aSpr = allSprites[i];
    if (aSpr.position.x < 20) { aSpr.velocity.x *= 0; aSpr.position.x = 20; }
    if (aSpr.position.x > 3820) { aSpr.velocity.x *= 0; aSpr.position.x = 3820; }
    if (aSpr.position.y < 400) { aSpr.velocity.y *= 0; aSpr.position.y = 400; }
    if (aSpr.position.y > height - 25) { aSpr.velocity.y *= 0; aSpr.position.y = height - 25; }
  }
}