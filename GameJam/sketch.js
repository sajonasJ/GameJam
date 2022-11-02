"use strict"
let squareSprite;
let playButton, creditsButton, settingsButton;

function preload(){
  
}

function setup() {
  createCanvas(1280, 720);
  squareSprite = createSprite(640, 360, 50, 50)
  squareSprite.setCollider("rectangle", 0, 0, 50, 50)
  squareSprite.friction = 0.15;
  buttonManager();
}

function draw() {
  drawScreens();
}

function screenChanger(){
  if (49){

  }
}



function drawMainMenu() {
  background(155);
  playButton.show()
  creditsButton.show()
  settingsButton.show()
  creditsButton.mousePressed(viewCredits);
  playButton.mousePressed(viewGame);
  settingsButton.mousePressed(viewSettings);
  

}

function drawGamePlay() {
  hideMainMenuButtons();
  background(0);
  keyPressed();
  fill("red");
  rect(1800, 300, 50, 50);

  fill("red");
  rect(4000, 300, 50, 50);

  camera.position.x = squareSprite.position.x;
  camera.position.y = squareSprite.position.y;

  let edge = 1280;
  fill('green');
  rect(0, 360, edge, 360);//stage1
  fill('gray');
  rect(edge, 360, edge, 360);//stage2
  fill('yellow');
  rect(edge * 2, 360, edge, 360);//stage3
  fill('lightblue');
  rect(0, 0, edge * 3, 360);//stage3

  drawSprites();
}

// function keyPressed() {
//   if (keyCode == RIGHT_ARROW) {
//     squareSprite.setSpeed(4, 0)
//   } else if (keyCode == LEFT_ARROW) {
//     squareSprite.setSpeed(4, 180)
//   } else {
//     squareSprite.setSpeed(0)
//   }
// }

function keyPressed() {
  let up = keyDown(UP_ARROW);
  let down = keyDown(DOWN_ARROW);
  let left = keyDown(LEFT_ARROW);
  let right = keyDown(RIGHT_ARROW);
  let w = keyDown('w');
  let a = keyDown('a');
  let s = keyDown('s');
  let d = keyDown('d');

  if (up || w) {
    squareSprite.velocity.y = -3;
  }
  if (left || a) {
    squareSprite.velocity.x = -5;
  }
  if (right || d) {
    squareSprite.velocity.x = 5;
  }
  if (down || s) {
    squareSprite.velocity.y = 3;
  }
}


function drawSettings() {
  background("yellow");
  hideMainMenuButtons();
}
function drawCredits() {
  background("green");
  hideMainMenuButtons();
}

function drawLose() {
  background(155);
}
function drawWin() {
  background(155);
}

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
    
}



function viewCredits(){
  currentState = CREDITS
}
function viewGame(){
  currentState = GAME_PLAY
}
function viewSettings(){
  currentState = SETTINGS
}

function hideMainMenuButtons(){
  playButton.hide()
  creditsButton.hide()
  settingsButton.hide()
}