function drawCredits() {
  camera.off();
  push();
    image(creditBackground, 0, 0);
    fill(255, 200);
    noStroke();
    rect(200, 100, 880, 550, 30);
pop();
    creditButtons();
  }