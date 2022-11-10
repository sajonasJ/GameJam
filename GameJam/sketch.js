"use strict"
let player = new PlayerManager();
let enemyA = new MinionManagerA();
let enemyB = new MinionManagerB();
let clouds = new CloudManager();
let brownDog = new DogManager();
let blackBird = new RightBirdManager();
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
  brownDog.preload();
  blackBird.preload();
}
function setup() {
  createCanvas(1280, 720);
  brownDog.setup(120, ground + 35);
  player.setup(100, ground);
  enemyA.setup(1800, ground);
  enemyB.setup(1300, ground);
  clouds.setup(0, 100);
  blackBird.setup(camera.position.x + 1200, 560);

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
  brownDog.draw();
  blackBird.draw();
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
  reSpawner();

}
////////////////////////////////FREE FOR ALL FUNCTIONS//////////////////
function playerHitEnemy(punch, enemies) {
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
  pop();
  push();
  enemies.hp -= 20;
  if (enemies.hp < 1) {
    enemies.remove();
    enemyA.minionANum--;
    // enemyA.group.changeAnimation('die');
  }
  pop();
  push();
  enemies.hp -= 20;
  if (enemies.hp < 1) {
    enemies.remove();
    enemyB.minionBNum--;
  }
  pop();
  // console.log("number of enemiesA: "+enemyA.minionANum);
  // console.log("number of enemiesB: "+enemyB.minionBNum);
}



function reSpawner() {
  remakeClouds();
  remakeEnemyA();
  remakeEnemyB();
  remakeBlackBird();
}

function remakeEnemyA() {
  if (enemyA.minionANum <= 0) {
    enemyA.makeMinionA(camera.position.x + 1000, ground);
    // enemyA.makeMinionA(camera.position.x+1800, ground);
    console.log("number of enemiesA: " + enemyA.minionANum);
  }
}
function remakeEnemyB() {
  if (enemyB.minionBNum < 0) {
    enemyB.makeMinionB(camera.position.x + 800, ground);
    enemyB.minionBNum++;
  }
}

function remakeBlackBird() {
  if (blackBird.birdNum <= 0) {
    blackBird.setup(camera.position.x + 1000, random(300, 600));
  }
}