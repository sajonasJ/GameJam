function drawMainMenu() {
    background(155);
    camera.off();
    image(mainMenuBG, 0, 0)
    mainMenuButtons();
    gamesIMG.resize(400,50)
    image(dontPlay, 50, 50)
    image(gamesIMG, 50, 120)
    image(with1, 50, 190)
    image(with2, 50, 260)
  }