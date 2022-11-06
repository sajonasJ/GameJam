
"use strict"
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
  player.preload();
  enemyA.preload();
  enemyB.preload();
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

  background(0);
  levelBackground();
  player.draw();
  enemyA.draw();
  enemyB.draw();
  player.sprite.bounce(enemyA.group)
  player.sprite.bounce(enemyB.group)
  gamePlayButtons();
  drawSprites();
}