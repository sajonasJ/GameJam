
function drawSettings() {
  //background("yellow");
  camera.off();
  push();
  image(settingsBackground, 0, 0)
  noStroke();
  fill("white")
  rect(220, 150, 300, 150, 30);
  rect(720, 150, 400, 150, 30);
  fill("gray");
  textSize(30);
  textFont(font);
  text("volume", 300, 210);
  text("difficulty", 800, 210);
  textSize(15);
  text("low", 260, 280);
  text("high", 430, 280);
  text("easy", 740, 280);
  text("normal", 890, 280);
  text("hard", 1060, 280);
  pop();
  settingsButtons();
  
}