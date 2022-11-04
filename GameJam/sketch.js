"use strict"
////////////////////////VARIABLES////////////////////////
let playButton, creditsButton, settingsButton, returnButton, settingsIcon, font, mainMenuBG, playButtonIMG, creditsButtonIMG;

////////////////////////IMAGE ANIMATION VARIABLES////////////////////////
var runningSpriteSheet;
var runningAnim;
var idleSpriteSheet;
var idleAnim;
var runningLeftSpriteSheet;
var runningLeftAnim;
let player;
let background1;
let settingBackground;
let returnButtonIMG;
let volumeSlider;
let levelSlider;
let creditBackground;

function preload(){
  runningSpriteSheet = loadSpriteSheet("assets/images/running1400.png",100, 100, 6)
  runningAnim = loadAnimation(runningSpriteSheet)
  runningAnim.frameDelay = 4;
  runningLeftSpriteSheet = loadSpriteSheet("assets/images/running1400left.png.png",100, 100, 6)
  runningLeftAnim = loadAnimation(runningLeftSpriteSheet)
  runningLeftAnim.frameDelay = 4;
  idleSpriteSheet = loadSpriteSheet("assets/images/idle1400.png", 100, 100, 7)
  idleAnim = loadAnimation(idleSpriteSheet)
  idleAnim.frameDelay = 12;
  background1 = loadImage("assets/images/background1.png")
  font = loadFont("fonts/joystix monospace.ttf")
  mainMenuBG = loadImage("assets/images/mainMenuBG.png")
  playButtonIMG = loadImage("assets/images/playbutton.png.png")
  creditsButtonIMG = loadImage("assets/images/creditsButton.png")
  settingBackground = loadImage("assets/images/settingbackground.png")
  returnButtonIMG = loadImage("assets/images/returnButtonIMG.png")
  creditBackground = loadImage("assets/images/creditbackground.jpg")
}

function setup() {
  createCanvas(1280, 720);
  player = createSprite(640, 360, 50, 50)
  player.setCollider("rectangle", 0, 0, 50, 50)
  player.addAnimation("running", runningAnim)
  player.addAnimation("idle", idleAnim)
  player.addAnimation("runningLeft", runningLeftAnim)
  player.friction = 0.15;
  buttonManager();
  sliderManager();
}

function draw() {
  drawScreens();
}
////////////////////////DRAWSCREEN CONTROL////////////////////////
function drawMainMenu() {
  background(155);
  image(mainMenuBG, 0,0)
  showMainMenuButtons();
  returnButton.hide();
  creditsButton.mousePressed(viewCredits);
  playButton.mousePressed(viewGame);
  settingsButton.mousePressed(viewSettings);
  returnButton.mousePressed(viewMainMenu);
  volumeSlider.hide();
  levelSlider.hide();
}

function drawGamePlay() {
  hideMainMenuButtons();
  returnButton.hide();


  camera.position.x = player.position.x;//CAMERA CONTROL X
  camera.position.y = player.position.y;//CAMERA CONTROL Y
camera.zoom = 1.5
  ////////////////////////TEMP BCKGRND////////////////////////
  let edge = 1280;
  
  background(0);
  keyPressed();
  image(background1, 0, 0, 3840, 0);
  drawSprites();
}

function drawSettings() {
  //background("yellow");
  image(settingBackground,0,0)
  noStroke();
  fill("white")
  rect(220,150,300,150,30);
  rect(720,150,400,150,30);
  fill("gray");
  textSize(30);
  textFont(font);
  text("volume",300,210);
  text("difficulty",800,210);
  textSize(15);
  text("low", 260,280);
  text("high", 430,280);
  text("easy", 740,280);
  text("normal", 890,280);
  text("hard", 1060,280);
  hideMainMenuButtons();
  returnButton.show();
  volumeSlider.show();
  levelSlider.show();
  

  


  
}
function drawCredits() {
  image(creditBackground,0,0);
  fill(255, 200);
  noStroke();
  rect(200,100,880,550,30);
  
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
    player.velocity.y = -5;
    player.changeAnimation("running")
  }else if (left || a) {
    player.velocity.x = -5;
    player.changeAnimation("runningLeft")
  }else if (right || d) {
    player.velocity.x = 5;
    player.changeAnimation("running")
  }else if (down || s) {
    player.velocity.y = 5;
    player.changeAnimation("running")
  }else{
    player.changeAnimation("idle")
  }
}

////////////////////////CREATE BUTTONS////////////////////////
function buttonManager(){
    
    creditsButton = createImg("assets/images/creditsButton.png")
    creditsButton.position(950,150)
    
    returnButton = createImg("assets/images/returnButtonIMG.png")
    returnButton.position(1100, 50)
    returnButton.size(80,80)
    returnButton.hide()
    

    settingsButton = createImg("assets/images/settingsCog.png")
    settingsButton.position(50,50)

    playButton = createImg("assets/images/playButton.png.png")
    playButton.position(950, 50)
    
}

function sliderManager(){
 

  volumeSlider = createSlider(0, 100, 0);
  volumeSlider.position(270, 230);
  volumeSlider.style("width", "200px");
  //volumeSlider.mousePressed(sliderPressed)

  levelSlider = createSlider(0, 2, 0);
  levelSlider.position(750, 230);
  levelSlider.style("width", "350px");
  //volumeSlider.mousePressed(sliderPressed)
  

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