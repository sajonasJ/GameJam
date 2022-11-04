function drawSettings() {
    //background("yellow");
    image(settingBackground, 0, 0)
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
    hideMainMenuButtons();
    returnButton.show();
    volumeSlider.show();
    levelSlider.show();
  }
  function sliderManager() {
    volumeSlider = createSlider(0, 100, 0);
    volumeSlider.position(270, 230);
    volumeSlider.style("width", "200px");
    //volumeSlider.mousePressed(sliderPressed)
  
    levelSlider = createSlider(0, 2, 0);
    levelSlider.position(750, 230);
    levelSlider.style("width", "350px");
    //volumeSlider.mousePressed(sliderPressed)
  }