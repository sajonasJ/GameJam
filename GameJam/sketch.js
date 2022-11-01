"use strict"
let squareSprite;
function setup() {
  createCanvas(1280, 720);
  squareSprite = createSprite(500,500,50,50)
squareSprite.setCollider("rectangle", 0, 0, 50, 50)
}

function draw() {
background(255)
keyPressed()
fill("red")
rect(1800, 300, 50, 50)
camera.position.x = squareSprite.position.x
camera.position.y = squareSprite.position.y

drawSprites()
}


function keyPressed(){
  if(keyCode == RIGHT_ARROW){
    squareSprite.setSpeed(4,0)
  }else if(keyCode == LEFT_ARROW){
   squareSprite.setSpeed(4,180)
  }else{
  squareSprite.setSpeed(0)
  }
}