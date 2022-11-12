"use strict"
let player = new PlayerManager();
let enemyA = new MinionManagerA();
let enemyB = new MinionManagerB();
let clouds = new CloudManager();
let brownDog = new DogManager();
let blackBird = new RightBirdManager();
let gBird = new GreyBirdManager();
let boss = new BossManager();
let blackDog = new dogNPCManager();
let points = 0;
let ground = 650;

////////////////////////CURRENT SCREEN STATE CONTROL////////////////////////
// let currentState = MAIN_MENU;
let currentState = GAME_PLAY;
// let currentState = CREDITS;
// let currentState = SETTINGS;
// let currentState = WIN;
// let currentState = LOSE;
// let currentState = BOSSFIGHT;

function preload() {
  assetPreload();
  player.preload();
  enemyA.preload();
  enemyB.preload();
  clouds.preload();
  brownDog.preload();
  blackBird.preload();
  gBird.preload();
  blackDog.preload();
}
function setup() {
  createCanvas(1280, 720);
  brownDog.setup(120, ground + 35);
  if (currentState == BOSSFIGHT) {
    player.setup(100, ground - 100);
  } else {
    player.setup(100, ground);
  }
  if (currentState == GAME_PLAY) {
    enemyA.setup(1800, ground);
    enemyB.setup(1300, ground);
    clouds.setup(0, 100);
    blackBird.setup(camera.position.x + 1200, 560);
    gBird.setup(camera.position.x + 1200, 400);
    blackDog.setup(0,ground);
  }
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
  blackDog.draw();
  blackBird.draw();
  gBird.draw();
  player.draw();
  enemyA.draw();
  enemyB.draw();
  clouds.draw()
  player.sprite.overlap(enemyA.group, enemyHitA);
  player.sprite.overlap(enemyB.group, enemyHitB);
  player.sprite.displace(enemyA.group);
  player.sprite.displace(enemyB.group);
  player.groupA.displace(enemyA.group, playerHitEnemyA);
  player.groupA.displace(enemyB.group, playerHitEnemyB);
  brownDog.group.overlap(enemyA.group, enemyNear);
  brownDog.group.overlap(enemyB.group, enemyNear);
  gamePlayButtons();
  drawSprites();
  reSpawner();

  // startRun();
  finalCheck();
}
////////////////////////////////FREE FOR ALL FUNCTIONS//////////////////
function playerHitEnemyA(punch, enemies) {
  push();
  points += 20;
  textSize(30);
  stroke(0);
  strokeWeight(3);
  textFont(font);
  textStyle(BOLD);
  fill('red');
  textAlign(CENTER);
  text(20 + "!", player.sprite.position.x + 30, player.sprite.position.y - 50);
  pop();
  push();
  enemies.hp -= 20;
  if (enemies.hp < 1) {
    enemies.remove();
    enemyA.minionANum--;
    // enemyA.sprite.changeAnimation('die');
  }
  pop();
}
function playerHitEnemyB(punch, enemies) {
  push();
  points += 20;
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
  enemies.hp = enemies.hp - 20;
  if (enemies.hp < 1) {
    enemies.remove();
    enemyB.minionBNum--;
    // enemyB.sprite.changeAnimation('die');
  }
  pop();
}

function reSpawner() {
  remakeClouds();
  remakeEnemyA();
  remakeEnemyB();
  remakeBlackBird();
  remakeGreyBird()
}

function remakeEnemyA() {
  if (enemyA.minionANum <= 1) {
    enemyA.makeMinionA(camera.position.x + 1000, ground);
  }
}
function remakeEnemyB() {
  if (enemyB.minionBNum <= 1) {
    enemyB.makeMinionB(camera.position.x + 800, ground);
  }
}

function remakeBlackBird() {
  if (blackBird.birdNum < 1) {
    blackBird.setup(camera.position.x + 1000, random(300, 600));
  }
}

function enemyNear() {
  brownDog.sprite.changeAnimation("attack");
}
function remakeGreyBird() {
  if (gBird.birdNum < 1) {
    gBird.setup(camera.position.x + 500, random(200, 250));
  }
}

function enemyHitA(enemy, student) {
  player.health = player.health - 20;
  // enemyA.sprite.changeAnimation('attack');
  student.remove();
  enemyA.minionANum--;
  if (player.health <= 0) {
    enemy.remove();
  }
}
function enemyHitB(enemy, student) {
  player.health = player.health - 20;
  student.remove();
  enemyB.minionBNum--;
  if (player.health <= 0) {
    enemy.remove();
  }
}

// function startRun() {
//   push();
//   textSize(50);
//   stroke(0);
//   strokeWeight(3);
//   textFont(font);
//   textStyle(BOLD);
//   fill(217, 4, 41);
//   textAlign(CENTER);
//   if (frameCount <= 100) {
//     text("You're late!", camera.position.x, camera.position.y);
//     text("James is waiting!", camera.position.x, camera.position.y + 50);
//   } else if (frameCount <= 200) {
//     textSize(100);
//     text("RUN!!!", camera.position.x, camera.position.y + 25);
//   }
//   pop();
// }

function finalCheck() {
  if (points === 1000) {
    viewBossScreen()
    clearCanvass()
  }
}
function clearCanvass() {
  for (let i = 0; i < allSprites.length; i++) {
    console.log(allSprites[i])
    allSprites[i].remove();
    clouds.spriteA.remove();
    clouds.spriteB.remove();
    clouds.spriteC.remove();
    brownDog.sprite.remove();
    enemyA.group.removeSprites();
    enemyB.group.removeSprites();
    blackBird.sprite.remove();
    gBird.sprite.remove();
    player.sprite.remove();
  }
  player.setup(100, ground - 100);

}

function playerLose() {

}

function playerWin() {

}