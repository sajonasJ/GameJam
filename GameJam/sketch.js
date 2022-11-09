"use strict"
let player = new PlayerManager();
let enemyA = new MinionManagerA();
let enemyB = new MinionManagerB();
let points = 0;

////////////////////////CURRENT SCREEN STATE CONTROL////////////////////////
// let currentState = MAIN_MENU;
let currentState = GAME_PLAY;
// let currentState = CREDITS;
// let currentState = SETTINGS;
// let currentState = WIN;
// let currentState = LOSE;
function preload() {
  assetPreload();
  player.preload();
  enemyA.preload();
  enemyB.preload();
}
function setup() {
  createCanvas(1280, 720);
  player.setup(100, 650);
  enemyA.setup(1800, 650);
  enemyB.setup(1300, 650);
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

  ///////////////////////////TO BE TRANSLATED TO SPRITES

  scoreSystem();
  /////////////////////////////////////

  // if(frameCount%200==0){

  // }



  // console.log(frameCount);

  player.draw();
  enemyA.draw();
  enemyB.draw();
  player.sprite.displace(enemyA.group, enemyHitPlayer);
  player.sprite.displace(enemyB.group, enemyHitPlayer);
  player.group.displace(enemyA.group, playerHitEnemy);
  player.group.displace(enemyB.group, playerHitEnemy);
  gamePlayButtons();

  drawSprites();
  // console.log(player.sprite.position.x);
}

function playerHitEnemy(punch, enemy) {
  push();
  points += 100;
  textSize(24);
  textFont(font);
  textStyle(BOLD);
  fill('red');
  textAlign(CENTER);
  text(points, player.sprite.position.x + 20, player.sprite.position.y - 50);//<<<<<<<<<<<<<<<<<<<<<
  enemy.hp--;
  if (enemy.hp < 1) {
    enemy.remove();
    pop();
  }
}
function enemyHitPlayer(enemy, player) {
  player.health = -20;
  // console.log(player.health);
}