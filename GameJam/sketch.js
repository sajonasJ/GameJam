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
let volumeSlider;
let levelSlider;
let creditBackground;
let settingBackground;
////////////////////////Class VARIABLES////////////////////////
let player = new PlayerManager();
let enemyA = [];
let enemyB = [];
for (let i = 0; i < 3; i++) {//green
  enemyA[i] = new MinionManagerA();
}
for (let i = 0; i < 3; i++) {//blue
  enemyB[i] = new MinionManagerB();
}
////////////////////////BACKGROUND VARIABLES////////////////////////

function preload() {
  background1 = loadImage("assets/images/background1.png");
  player.preload();
  font = loadFont("fonts/joystix monospace.ttf");
  mainMenuBG = loadImage("assets/images/mainMenuBG.png");
  playButtonIMG = loadImage("assets/images/playbutton.png.png");
  creditsButtonIMG = loadImage("assets/images/creditsButton.png");
  creditBackground = loadImage("assets/images/creditBackground.jpg");
  settingBackground = loadImage("assets/images/settingBackground.png");
  for (let i = 0; i < 3; i++) {
    enemyA[i].preload();
  }
  for (let i = 0; i < 3; i++) {
    enemyB[i].preload();
  }
}

function setup() {
  createCanvas(1280, 720);
  player.setup(100, 600);
  buttonManager();
  sliderManager();
  for (let i = 0; i < 3; i++) {//green
    let y = 400 + 60 * i;
    let x = 1000 + 30 * i;
    enemyA[i].setup(x, y);
  }
  for (let i = 0; i < 3; i++) {//blue
    let y = 500 + 50 * i;
    let x = 1000 + 1000 * i;
    enemyB[i].setup(x, y);
  }
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
  volumeSlider.hide();
  levelSlider.hide();
}
function drawGamePlay() {
  hideMainMenuButtons();
  returnButton.hide();
  player.draw();
  volumeSlider.hide();
  levelSlider.hide();



  for (let i = 0; i < 3; i++) {//enemy1
    enemyA[i].draw();
  }

  for (let i = 0; i < 3; i++) {//enemy2
    enemyB[i].draw();
  }
  ////////////////////////TEMP BCKGRND////////////////////////

  background(0);
  player.keyPressed();
  image(background1, 0, 0, 3840, 0);
  spriteWalls();
  // for (let closingIn of enemyA.Group) { NOT YET GROUPED
  //   closingIn.attractionPoint(2, player.position.x, player.position.y);
  // }
  
  createHealthBar();
  drawSprites();

}

function createHealthBar() {//healthbar && health spawner

  fill(214, 204, 194);
  rectMode(CENTER);
  rect(camera.position.x, camera.position.y + 250, 1300, 250);

  let healthBoxX= 480, healthBoxY=175;
  noStroke();
  fill(255, 0, 0);
  rect(camera.position.x - healthBoxX, camera.position.y + healthBoxY, map(health, 0, maxHealth, 0, 200), 15);//health=0 to max=100 length 200;red
  stroke(0);
  strokeWeight(4);
  noFill();
  rect(camera.position.x - healthBoxX, camera.position.y + healthBoxY, 200, 15);//rectbox

  let textOffSetX=480, textOffsetY=155;
  fill(0);
  strokeWeight(1);
  textSize(24);
  textAlign(RIGHT);
  text("HEALTH:", camera.position.x - textOffSetX, camera.position.y + textOffsetY);
}

function drawSettings() {
  //background("yellow");
  image(settingBackground, 0, 0)
  noStroke();
  fill("white")
  rect(220, 150, 300, 150, 30);
  rect(720, 150, 400, 150, 30);
  fill("gray");
  textSize(30);
  textFont(font);
  text("volume", 300, 210);
  text("difficulty", 800, 210);
  textSize(15);
  text("low", 260, 280);
  text("high", 430, 280);
  text("easy", 740, 280);
  text("normal", 890, 280);
  text("hard", 1060, 280);
  hideMainMenuButtons();
  returnButton.show();
  volumeSlider.show();
  levelSlider.show();
}
function drawCredits() {
  image(creditBackground, 0, 0);
  fill(255, 200);
  noStroke();
  rect(200, 100, 880, 550, 30);

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
function sliderManager() {
  volumeSlider = createSlider(0, 100, 0);
  volumeSlider.position(270, 230);
  volumeSlider.style("width", "200px");
  //volumeSlider.mousePressed(sliderPressed)

  levelSlider = createSlider(0, 2, 0);
  levelSlider.position(750, 230);
  levelSlider.style("width", "350px");
  //volumeSlider.mousePressed(sliderPressed)
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