let playButton, creditsButton, settingsButton, returnButton; 
let settingsIcon, font, playButtonIMG, creditsButtonIMG;
let volumeSlider, levelSlider;


function buttonManager() {

  creditsButton = createImg("assets/images/creditsButton.png")
  creditsButton.position(950, 150)
  creditsButton.hide();

  returnButton = createImg("assets/images/returnbutton.png")
  returnButton.position(1120, 40);
  returnButton.size(100, 100);
  returnButton.hide();

  settingsButton = createImg("assets/images/settingsCog.png")
  settingsButton.position(50, 50)
  settingsButton.hide();

  playButton = createImg("assets/images/playButton.png.png")
  playButton.position(950, 50)
  playButton.hide();
}

function sliderManager() {
  volumeSlider = createSlider(0, 100, 0);
  volumeSlider.position(270, 230);
  volumeSlider.style("width", "200px");
  volumeSlider.hide();

  levelSlider = createSlider(0, 2, 0);
  levelSlider.position(750, 230);
  levelSlider.style("width", "350px");
  levelSlider.hide();
}

function mainMenuButtons() {
  creditsButton.mousePressed(viewCredits);
  playButton.mousePressed(viewGame);
  settingsButton.mousePressed(viewSettings);
  returnButton.mousePressed(viewMainMenu);
  volumeSlider.hide();
  levelSlider.hide();
  returnButton.hide();
  playButton.show()
  creditsButton.show()
  settingsButton.show()
}
function gamePlayButtons() {
  settingsButton.mousePressed(viewSettings);
  returnButton.mousePressed(viewMainMenu);
  volumeSlider.hide();
  levelSlider.hide();
  returnButton.show();
  playButton.hide()
  creditsButton.hide()
  settingsButton.show()
}
function creditButtons() {
 
  returnButton.mousePressed(viewMainMenu);
returnButton.mousePressed(viewMainMenu);
returnButton.show();
volumeSlider.hide();
levelSlider.hide();
playButton.hide()
creditsButton.hide()
settingsButton.hide()
  }

function settingsButtons() {
  returnButton.mousePressed(viewMainMenu);
  returnButton.show();
  volumeSlider.show();
  levelSlider.show();
  playButton.hide()
  creditsButton.hide()
  settingsButton.hide()
}
function winButtons() {//ALL HIDE
  returnButton.hide();
  volumeSlider.hide();
  levelSlider.hide();
  playButton.hide()
  creditsButton.hide()
  settingsButton.hide()
}
function loseButtons() {//ALL HIDE
  returnButton.hide();
  volumeSlider.hide();
  levelSlider.hide();
  playButton.hide()
  creditsButton.hide()
  settingsButton.hide()
}