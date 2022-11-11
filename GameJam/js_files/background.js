let bg1Start = 0;
let bg2Start = 1280;
let bg3Start = 2560;
let bg4Start = 3840;

let bgSky1 = 0;
let bgSky2 = 1280;
let bgSky3 = 2560;
let bgSky4 = 3840;

function levelBackground() {


  image(bgCity, bgSky1, 0);
  image(bgCity, bgSky2, 0);
  image(bgCity, bgSky3, 0);
  image(bgCity, bgSky4, 0);

  image(background1, bg1Start, 0);
  image(background2, bg2Start, 0);
  image(background3, bg3Start, 0);
  image(background3, bg4Start, 0);

  scrollingCityDiff = player.sprite.position.x - player.sprite.previousPosition.x
  bg1Start += (scrollingCityDiff * 0.3)
  bg2Start += (scrollingCityDiff * 0.3)
  bg3Start += (scrollingCityDiff * 0.3)
  bg4Start += (scrollingCityDiff * 0.3)

  bgSky1 += (scrollingCityDiff * 0.7)
  bgSky2 += (scrollingCityDiff * 0.7)
  bgSky3 += (scrollingCityDiff * 0.7)
  bgSky4 += (scrollingCityDiff * 0.7)

  const LEFTSIDE = 0, RIGHTSIDE = 7060;
  for (let i = 0; i < player.groupP.length; i++) {
    let aSpr = player.groupP[i];
    if (aSpr.position.x < LEFTSIDE) {
      aSpr.velocity.x *= 0; aSpr.position.x = LEFTSIDE;
    }
    if (aSpr.position.x > RIGHTSIDE) {
      aSpr.velocity.x *= 0; aSpr.position.x = RIGHTSIDE;
    }
  }
  for (let i = 0; i < brownDog.group.length; i++) {
    let aSpr = brownDog.group[i];
    if (aSpr.position.x < LEFTSIDE) {
      aSpr.velocity.x *= 0; aSpr.position.x = LEFTSIDE;
    }
    if (aSpr.position.x > RIGHTSIDE) {
      aSpr.velocity.x *= 0; aSpr.position.x = RIGHTSIDE;
    }
  }

}

function scoreSystem() {
  let textOffSetX, textOffsetY;
  let boxOffsetX, boxOffsetY;
  let healthTextX, healthTextY;

  if (currentState == BOSSFIGHT) {
    textOffSetX = 260, textOffsetY = 105;
    boxOffsetX = 40, boxOffsetY = 15;
    healthTextX = 260, healthTextY = 45;
  } else {
    textOffSetX = camera.position.x - 380, textOffsetY = camera.position.y - 250;
    boxOffsetX = camera.position.x - 600, boxOffsetY = camera.position.y - 340;
    healthTextX = camera.position.x - 380, healthTextY = camera.position.y - 310;
  }
  //beige rect
  push();
  stroke(0);
  strokeWeight(4);
  fill(233, 196, 106);
  rect(boxOffsetX - 10, boxOffsetY - 10, 450, 120);
  pop();
  // border rect
  push();
  stroke(0);
  strokeWeight(4);
  fill(233, 196, 106);
  rect(boxOffsetX, boxOffsetY, 430, 100);
  pop();


  //health bar
  push();
  let healthBoxX, healthBoxY;
  let healthBoxW, healthBoxH;
  if (currentState == BOSSFIGHT) {
    healthBoxX = 170, healthBoxY = 55;
    healthBoxW = 200, healthBoxH = 15;
  } else {
    healthBoxX = camera.position.x - 470, healthBoxY = camera.position.y - 300;
    healthBoxW = 200, healthBoxH = 15;
  }
  griffin.resize(430, 100);
  image(griffin, boxOffsetX, boxOffsetY);
  healthFace.resize(70, 70);
  image(healthFace, healthBoxX, healthBoxY - 25);
  pop();

  push();
  stroke(0);
  strokeWeight(4);
  fill('red');
  rect(healthBoxX + 90, healthBoxY, healthBoxW, healthBoxH);//rectbox
  pop();

  push();
  stroke(0);
  strokeWeight(4);
  fill("green");
  rect(healthBoxX + 90, healthBoxY,
    map(player.health, 0, player.maxHealth, 0, healthBoxW), healthBoxH);
  pop();

  push();
  stroke(0);
  strokeWeight(4);
  noFill();
  rect(healthBoxX + 110, healthBoxY, healthBoxW - 40, healthBoxH);//rectbox
  rect(healthBoxX + 130, healthBoxY, healthBoxW - 80, healthBoxH);//rectbox
  rect(healthBoxX + 150, healthBoxY, healthBoxW - 120, healthBoxH);//rectbox
  rect(healthBoxX + 170, healthBoxY, healthBoxW - 160, healthBoxH);//rectbox
  line(healthBoxX + 190, healthBoxY, healthBoxX + 190, healthBoxY + 15);
  pop();

  push();
  //health text
  fill(0);
  stroke(2);
  textSize(24);
  textFont(font);
  textAlign(LEFT);
  text("HEALTH:" + player.health, healthTextX, healthTextY);
  pop();
  //score text
  push();
  fill(0);
  stroke(0);
  textSize(24);
  textFont(font);
  textAlign(LEFT);
  text('SCORE:' + points, textOffSetX, textOffsetY);
  pop();

}

function remakeClouds() {
  if (clouds.cloudNum <= 6) {
    clouds.setup(camera.position.x + 400, random(100, 250));
  }
}