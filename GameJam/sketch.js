
"use strict"
////////////////////////VARIABLES////////////////////////

////////////////////////IMAGE ANIMATION VARIABLES////////////////////////

////////////////////////Class VARIABLES////////////////////////
let player = new PlayerManager();
let enemyA = new MinionManagerA();
let enemyB = new MinionManagerB();


////////////////////////CURRENT SCREEN STATE CONTROL////////////////////////
// let currentState = MAIN_MENU;
let currentState = GAME_PLAY;
// let currentState = CREDITS;
// let currentState = SETTINGS;
// let currentState = WIN;
// let currentState = LOSE;
////////////////////////BACKGROUND VARIABLES////////////////////////

function preload() {
  assetPreload();
  background1 = loadImage("assets/images/background1280x720.png");
  player.preload();
  enemyA.preload();
  enemyB.preload();
  font = loadFont("fonts/joystix monospace.ttf");
  mainMenuBG = loadImage("assets/images/mainMenuBG.png");
  playButtonIMG = loadImage("assets/images/playbutton.png.png");
  creditsButtonIMG = loadImage("assets/images/creditsButton.png");
  creditBackground = loadImage("assets/images/creditBackground.jpg");
  settingsBackground = loadImage("assets/images/settingBackground.png");

}

function setup() {
  createCanvas(1280, 720);
  player.setup(100, 650);
  enemyA.setup();
  enemyB.setup();
  buttonManager();
  sliderManager();

}

function draw() {
  drawScreens();
}
////////////////////////////////////DRAW GAMEPLAY//////////////////////////////////////////
function drawGamePlay() {


  ////////////////////////TEMP BCKGRND////////////////////////

  background(0);
  for(let i=0; i<10;i++){
    image(background1, 0+1279.8*[i], 0, 1280,720);
  }
  player.draw();
  enemyA.draw();
  enemyB.draw();
  player.sprite.bounce(enemyA.group)
  player.sprite.bounce(enemyB.group)
  gamePlayButtons();
  spriteWalls();
  drawSprites();
}


function spriteWalls() {
  for (let i = 0; i < allSprites.length; i++) {
    let aSpr = allSprites[i];
    if (aSpr.position.x < 100) { aSpr.velocity.x *= 0; aSpr.position.x = 100; }
    if (aSpr.position.x > 12800) { aSpr.velocity.x *= 0; aSpr.position.x = 1280; }
    if (aSpr.position.y < 400) { aSpr.velocity.y *= 0; aSpr.position.y = 400; }
    if (aSpr.position.y > height - 25) { aSpr.velocity.y *= 0; aSpr.position.y = height - 25; }
  }
}