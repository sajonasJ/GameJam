"use strict"
let player = new PlayerManager();
let enemyA = new MinionManagerA();
let enemyB = new MinionManagerB();
let points = 0;

////////////////////////CURRENT SCREEN STATE CONTROL////////////////////////
 let currentState = MAIN_MENU;
//let currentState = GAME_PLAY;
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
  cloudx = random(50, 800);
  cloudy = random(50, 100);
}
function draw() {
 
  drawScreens();
  
}
////////////////////////////////////DRAW GAMEPLAY//////////////////////////////////////////
function drawGamePlay() {

  background(0);
  levelBackground();
  ///////////////////////////TO BE TRANSLATED TO SPRITES
  clouds(cloudx, cloudy - 30);
  clouds1(cloudx + 300, cloudy);
  clouds2(cloudx + 50, cloudy + 50);
  scoreSystem();
  /////////////////////////////////////
  player.draw();
  enemyA.draw();
  enemyB.draw();
  player.sprite.displace(enemyA.group,enemyHitPlayer);
  player.sprite.bounce(enemyB.group)
  player.group.displace(enemyA.group, playerHitEnemy);
  player.group.displace(enemyB.group, playerHitEnemy);
  gamePlayButtons();
  ///////////////////////////////////////////TO SPRITES
  cloudx += .5; // moving clouds
  
  drawSprites();
}
///////////////////////////////NEEDS TO BE TRANSLATED TO SPRITES
let cloudx, cloudy;
function clouds(cloudx, cloudy) { // cloud 1
  fill(250);
  noStroke();
  ellipse(cloudx, cloudy, 70, 90);
  ellipse(cloudx + 10, cloudy + 10, 220, 50);
  ellipse(cloudx + 25, cloudy + 15, 250, 30);
  ellipse(cloudx - 20, cloudy + 10, 70, 70);
}
function clouds1(cloudx, cloudy) { // cloud 2
  fill(250);
  noStroke();
  ellipse(cloudx, cloudy, 150, 30);
  ellipse(cloudx - 20, cloudy + 10, 100, 30);
}
function clouds2(cloudx, cloudy) { // cloud3
  fill(250);
  noStroke();
  ellipse(cloudx - 20, cloudy + 10, 90, 60);
  ellipse(cloudx + 25, cloudy + 15, 220, 30);
  ellipse(cloudx - 20, cloudy + 10, 170, 30);
}

function playerHitEnemy(punch, enemy) {
  points += 100;
  enemy.remove();
}
function enemyHitPlayer(enemy,player){
  player.health=-20;
  console.log(player.health);
}