"use strict"
////////////////////////VARIABLES////////////////////////
let playButton, creditsButton, settingsButton,returnButton;

////////////////////////IMAGE ANIMATION VARIABLES////////////////////////
var runningSpriteSheet;
var runningAnim;
var idleSpriteSheet;
var idleAnim;
var runningLeftSpriteSheet;
var runningLeftAnim;
let squareSprite;
let background1;

function preload(){
  runningSpriteSheet = loadSpriteSheet("assets/images/running1400.png",100, 100, 6)
  runningAnim = loadAnimation(runningSpriteSheet)
  runningLeftSpriteSheet = loadSpriteSheet("assets/images/running1400left.png.png",100, 100, 6)
  runningLeftAnim = loadAnimation(runningLeftSpriteSheet)
  idleSpriteSheet = loadSpriteSheet("assets/images/idle1400.png", 100, 100, 7)
  idleAnim = loadAnimation(idleSpriteSheet)
  background1 = loadImage("assets/images/background1.png")
}

function setup() {
  createCanvas(1280, 720);
  squareSprite = createSprite(640, 360, 50, 50)
  squareSprite.setCollider("rectangle", 0, 0, 50, 50)
  squareSprite.addAnimation("running", runningAnim)
  squareSprite.addAnimation("idle", idleAnim)
  squareSprite.addAnimation("runningLeft", runningLeftAnim)
  squareSprite.friction = 0.15;
  buttonManager();
}

function draw() {
  drawScreens();
}
////////////////////////DRAWSCREEN CONTROL////////////////////////
function drawMainMenu() {
  background(155);
  showMainMenuButtons();
  returnButton.hide();
  creditsButton.mousePressed(viewCredits);
  playButton.mousePressed(viewGame);
  settingsButton.mousePressed(viewSettings);
  returnButton.mousePressed(viewMainMenu);
}

function drawGamePlay() {
  hideMainMenuButtons();
  returnButton.hide();


  camera.position.x = squareSprite.position.x;//CAMERA CONTROL X
  camera.position.y = squareSprite.position.y;//CAMERA CONTROL Y
camera.zoom = 1.5
  ////////////////////////TEMP BCKGRND////////////////////////
  let edge = 1280;
  
  background(0);
  keyPressed();
  image(background1, 0, 0, 3840, 0);
  drawSprites();
}

function drawSettings() {
  background("yellow");
  hideMainMenuButtons();
  returnButton.show();
}
function drawCredits() {
  background("green");
  hideMainMenuButtons();
  returnButton.show();
}
function drawLose() {
  background(155);
}
function drawWin() {
  background(155);
}
////////////////////////CONTROL BUTTONS////////////////////////

function keyPressed() {
  let up = keyDown(UP_ARROW),w = keyDown('w');
  let down = keyDown(DOWN_ARROW),a = keyDown('a');
  let left = keyDown(LEFT_ARROW),s = keyDown('s')
  let right = keyDown(RIGHT_ARROW),d = keyDown('d');
//LOGIC
  if (up || w) {
    squareSprite.velocity.y = -5;
    squareSprite.changeAnimation("running")
  }else if (left || a) {
    squareSprite.velocity.x = -5;
    squareSprite.changeAnimation("runningLeft")
  }else if (right || d) {
    squareSprite.velocity.x = 5;
    squareSprite.changeAnimation("running")
  }else if (down || s) {
    squareSprite.velocity.y = 5;
    squareSprite.changeAnimation("running")
  }else{
    squareSprite.changeAnimation("idle")
  }
}

////////////////////////CREATE BUTTONS////////////////////////
function buttonManager(){
    playButton = createButton("PLAY")
    playButton.position(width/2 -50, 300)
    playButton.size(100,50)
    playButton.hide()
    creditsButton = createButton("CREDITS")
    creditsButton.position(width/2 -50, 400)
    creditsButton.size(100,50)
    creditsButton.hide()
    settingsButton = createButton("SETTINGS")
    settingsButton.position(width/2 -50, 500)
    settingsButton.size(100,50)
    settingsButton.hide()
    returnButton = createButton("RETURN")
    returnButton.position(width/2 -50, 500)
    returnButton.size(100,50)
    returnButton.hide()
}

function showMainMenuButtons(){
  playButton.show()
  creditsButton.show()
  settingsButton.show()
}
function hideMainMenuButtons(){
  playButton.hide()
  creditsButton.hide()
  settingsButton.hide()
}
////////////////////////CURRENTSTATE CONTROL////////////////////////
function viewCredits(){
  currentState = CREDITS
}
function viewGame(){
  currentState = GAME_PLAY
}
function viewSettings(){
  currentState = SETTINGS
}
function viewMainMenu(){
  currentState = MAIN_MENU
}