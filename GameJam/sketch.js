let playbutton, creditsButton, settingsButton, returnButton; 
let settingsIcon, font, playButtonIMG, creditsButtonIMG;
let volumeSlider, levelSlider;
"use strict"
////////////////////////VARIABLES////////////////////////

////////////////////////IMAGE ANIMATION VARIABLES////////////////////////
let background1;

////////////////////////Class VARIABLES////////////////////////
let player = new PlayerManager();
let enemyA = [];
let enemyB = [];
for (let i = 0; i < 10; i++) {//green
  enemyA[i] = new MinionManagerA();
}
for (let i = 0; i < 10; i++) {//blue
  enemyB[i] = new MinionManagerB();
}

////////////////////////CURRENT SCREEN STATE CONTROL////////////////////////
// let currentState = MAIN_MENU;
let currentState = GAME_PLAY;
// let currentState = CREDITS;
// let currentState = SETTINGS;
// let currentState = WIN;
// let currentState = LOSE;
////////////////////////BACKGROUND VARIABLES////////////////////////

function preload() {
  background1 = loadImage("assets/images/background.png");
  player.preload();
  font = loadFont("fonts/joystix monospace.ttf");
  mainMenuBG = loadImage("assets/images/mainMenuBG.png");
  playButtonIMG = loadImage("assets/images/playbutton.png.png");
  creditsButtonIMG = loadImage("assets/images/creditsButton.png");
  creditBackground = loadImage("assets/images/creditBackground.jpg");
  settingsBackground = loadImage("assets/images/settingBackground.png");
  for (let i = 0; i < 10; i++) {
    enemyA[i].preload();
  }
  for (let i = 0; i < 10; i++) {
    enemyB[i].preload();
  }
}

function setup() {
  createCanvas(1280, 720);
  player.setup(100, 650);
  buttonManager();
  sliderManager();
  for (let i = 0; i < 10; i++) {//green
    let y = 640;
    let x = 1500 + 180 * i;
    enemyA[i].setup(x, y);
  }
  for (let i = 0; i < 10; i++) {//blue
    let y = 640;
    let x = 3000 + 80 * i;
    enemyB[i].setup(x, y);
  }
}

function draw() {
  drawScreens();

}
//////////////////////////////////////////////////////////////////////////////
function drawGamePlay() {

  for (let i = 0; i < 10; i++) {//enemy1
    enemyA[i].draw();
  }

  for (let i = 0; i < 10; i++) {//enemy2

    enemyB[i].draw();
  }
  ////////////////////////TEMP BCKGRND////////////////////////

  background(0);
  for(let i=0; i<10;i++){
    image(background1, 0+1279.8*[i], 0, 1280,720);
  }
  player.createHealthBar();
  player.draw();
  player.keyPressed();
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