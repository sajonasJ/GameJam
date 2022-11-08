  let bg1Start = 0;
  let bg2Start = 1280;
  let bg3Start = 2560;
  let bg4Start = 3840;

  let bgSky1 = 0;
  let bgSky2 = 1280;
  let bgSky3 = 2560;
  let bgSky4 = 3840;

function levelBackground() {
  //for (let i = 0; i < 10; i++) {
    //image(bgCity, 0 + 1279.8 * [i], 0);
  //}
  image(bgCity, bgSky1, 0);
  image(bgCity, bgSky2, 0);
  image(bgCity, bgSky3, 0);
  image(bgCity, bgSky4, 0);

  image(background1, bg1Start, 0);
  image(background1, bg2Start, 0);
  image(background1, bg3Start, 0);
  image(background1, bg4Start , 0);
  
  scrollingCityDiff = player.sprite.position.x - player.sprite.previousPosition.x
  console.log("difference is" + scrollingCityDiff)
  bg1Start += (scrollingCityDiff * 0.3)
  bg2Start += (scrollingCityDiff * 0.3) 
  bg3Start += (scrollingCityDiff * 0.3) 
  bg4Start += (scrollingCityDiff * 0.3)

  bgSky1 += (scrollingCityDiff * 0.7)
  bgSky2 += (scrollingCityDiff * 0.7) 
  bgSky3 += (scrollingCityDiff * 0.7) 
  bgSky4 += (scrollingCityDiff * 0.7)


  for (let i = 0; i < allSprites.length; i++) {
    let aSpr = allSprites[i];
    if (aSpr.position.x < 100) { aSpr.velocity.x *= 0; aSpr.position.x = 100; }
    if (aSpr.position.x > 12800) { aSpr.velocity.x *= 0; aSpr.position.x = 1280; }
    if (aSpr.position.y < 400) { aSpr.velocity.y *= 0; aSpr.position.y = 400; }
    if (aSpr.position.y > height - 25) { aSpr.velocity.y *= 0; aSpr.position.y = height - 25; }
  }
}
function scoreSystem() {
  let textOffSetX = camera.position.x - 500, textOffsetY = camera.position.y - 250;
  let boxOffsetX = camera.position.x - 600, BoxOffsetY = camera.position.y - 340;
  let healthTextX = camera.position.x - 500, healthTextY = camera.position.y - 310;

  //rect
  push();
  // stroke(1);
  fill(233, 196, 106);
  rect(boxOffsetX, BoxOffsetY, 320, 100);
  pop();
  //score text
  push();
  fill(0);
  stroke(2);
  textSize(24);
  textAlign(LEFT);
  text('SCORE:' + points, textOffSetX, textOffsetY);
  pop();
  //health bar
  push();
  let healthBoxX = camera.position.x - 500, healthBoxY = camera.position.y - 300;
  let healthBoxW = 200, healthBoxH = 15;
  healthFace.resize(70,70)
  image(healthFace, healthBoxX-85, healthBoxY- 25)
  noStroke();
  fill("green");
  rect(healthBoxX, healthBoxY,
    map(player.health, 0, player.maxHealth, 0, healthBoxW), healthBoxH);
  stroke(0);
  strokeWeight(4);
  noFill();
  rect(healthBoxX, healthBoxY, healthBoxW, healthBoxH);//rectbox
  pop();

  push();
  //health text
  fill(0);
   stroke(2);
  textSize(24);
  textAlign(LEFT);
  text("HEALTH:" + player.health, healthTextX, healthTextY);
  pop();
  
}