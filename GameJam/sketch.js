"use strict"
let player = new PlayerManager();
let enemyA = new MinionManagerA();
let enemyB = new MinionManagerB();
let clouds = new CloudManager();
let points = 0;
let ground = 650;

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
  clouds.preload();
}
function setup() {
  createCanvas(1280, 720);
  player.setup(100, ground);
  enemyA.setup(1800, ground);
  enemyB.setup(1300, ground);
  clouds.setup(0, 100);

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
  scoreSystem();

  player.draw();
  enemyA.draw();
  enemyB.draw();
  clouds.draw()
  player.sprite.displace(enemyA.group);
  player.sprite.displace(enemyB.group);
  player.group.displace(enemyA.group, playerHitEnemy);
  player.group.displace(enemyB.group, playerHitEnemy);
  gamePlayButtons();
  drawSprites();
  remakeClouds();
  remakeEnemy();
  console.log("number of enemies: "+enemyA.minionANum);
}
////////////////////////////////FREE FOR ALL FUNCTIONS//////////////////
function playerHitEnemy(punch, enemy) {
  push();
  points += 100;
  textSize(30);
  stroke(0);
  strokeWeight(3);
  textFont(font);
  textStyle(BOLD);
  fill('red');
  textAlign(CENTER);
  text(20 + "!", player.sprite.position.x + 30, player.sprite.position.y - 50);//<<<<<<<<<<<<<<<<<<<<<
  enemy.hp-=20;
  if (enemy.hp < 1) {
    enemy.remove();
    enemyA.minionANum--;
  }
  pop();
}

function remakeClouds() {
  if (clouds.cloudNum <= 6) {
    clouds.setup(camera.position.x + 400, 100);
  }
}

function remakeEnemy() {
  if (enemyA.minionANum <= 0) {
    enemyA.makeMinionA(camera.position.x+1000, ground);
    // enemyA.minionANum++;
    console.log("number of enemies: "+enemyA.minionANum);
  }
}