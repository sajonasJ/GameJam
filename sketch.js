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
// let currentState = GAME_PLAY;
let currentState = CREDITS;
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
  boss.preload();
}
function setup() {
  createCanvas(1280, 720);
  brownDog.setup(120, ground + 35);
  if (currentState == BOSSFIGHT) {
    boss.setup(1200, ground - 150);
  } else {
    boss.setup(1200, ground + 1000);
  }
  player.setup(100, ground);
  enemyA.setup(1800, ground);
  enemyB.setup(1300, ground);
  clouds.setup(0, 100);
  blackBird.setup(camera.position.x + 1200, 560);
  gBird.setup(camera.position.x + 1200, 400);
  blackDog.setup(0, ground);
  buttonManager();
  sliderManager();
}
function draw() {
  drawScreens();
}
