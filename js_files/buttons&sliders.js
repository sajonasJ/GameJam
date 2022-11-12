let volumeSlider, levelSlider;
function buttonManager() {
push();
  creditsButton.position(950, 150)
  creditsButton.hide();
  creditsButton.mouseOver(over);
  creditsButton.mouseOut(out);

  returnButton.position(1120, 40);
  returnButton.size(100, 100);
  returnButton.hide();
  returnButton.mouseOver(over);
  returnButton.mouseOut(out);

  settingsButton.position(1200, 650)
  settingsButton.hide();
  settingsButton.mouseOver(over);
  settingsButton.mouseOut(out);

  playButton.position(950, 50)
  playButton.hide();
  playButton.mouseOver(over);
  playButton.mouseOut(out);
  pop();
}

function sliderManager() {
  push();
  volumeSlider = createSlider(0, 100, 0);
  volumeSlider.position(270, 230);
  volumeSlider.style("width", "200px");
  volumeSlider.hide();

  levelSlider = createSlider(0, 2, 0);
  levelSlider.position(750, 230);
  levelSlider.style("width", "350px");
  levelSlider.hide();
  pop();
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
  volumeSlider.hide();
  levelSlider.hide();
  returnButton.hide();
  playButton.hide()
  creditsButton.hide()
  settingsButton.hide()
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
  playButton.hide();
  creditsButton.hide();
  settingsButton.hide();
}

function bossFightButtons(){
  returnButton.hide();
  volumeSlider.hide();
  levelSlider.hide();
  playButton.hide();
  creditsButton.hide();
  settingsButton.hide();
}
function over() {
  buttonSound.play()
  this.style('transform:scale(1.2,1.2)');
  this.style('transition:( 0.03)');
}
function out() {
  this.style('transform:none');
}

function gameMusic(){
  gameSound.setVolume(0.3);
  gameSound.play();
  gameSound.setLoop(false);
    userStartAudio();
}
function finalMusic(){
  finalSound.setVolume(0.3);
  finalSound.play();
  finalSound.setLoop(false);
    userStartAudio();
}