"use strict"
let player = new PlayerManager();
let enemyA = new MinionManagerA();
let enemyB = new MinionManagerB();
let points = 0;

////////////////////////CURRENT SCREEN STATE CONTROL////////////////////////
//let currentState = MAIN_MENU;
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
  points += 100;
  text(points,enemyA.position.x, tempAttack.position.y);
  // enemy.remove();
  textSize(30);
  strokeWeight(4);
  fill('red');
  // text( points, player.group.position.x, player.group.position.y);//<<<<<<<<<<<<<<<<<<<<<
  enemy.hp--;
  if( enemy.hp<1){
    enemy.remove();
  }
}
function enemyHitPlayer(enemy, player) {
  player.health = -20;
  // console.log(player.health);
}