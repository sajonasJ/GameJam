"use strict"
////////////////////////VARIABLES////////////////////////

////////////////////////IMAGE ANIMATION VARIABLES////////////////////////
let background1;

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

////////////////////////CURRENT SCREEN STATE CONTROL////////////////////////
let currentState = MAIN_MENU;
// let currentState = GAME_PLAY;
// let currentState = CREDITS;
// let currentState = SETTINGS;
// let currentState = WIN;
// let currentState = LOSE;
////////////////////////BACKGROUND VARIABLES////////////////////////

function preload() {
  background1 = loadImage("assets/images/background1.png");
  player.preload();
  font = loadFont("fonts/joystix monospace.ttf");
  mainMenuBG = loadImage("assets/images/mainMenuBG.png");
  playButtonIMG = loadImage("assets/images/playbutton.png.png");
  creditsButtonIMG = loadImage("assets/images/creditsButton.png");
  creditBackground = loadImage("assets/images/creditBackground.jpg");
  settingsBackground = loadImage("assets/images/settingBackground.png");
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
//////////////////////////////////////////////////////////////////////////////
function drawGamePlay() {
gamePlayButtons();
  player.draw();

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

  player.createHealthBar();
  drawSprites();
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