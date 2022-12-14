const MAIN_MENU = 0;
const GAME_PLAY = 1;
const SETTINGS = 2;
const CREDITS = 3;
const LOSE = 4;
const WIN = 5;
const BOSSFIGHT = 6;

function drawScreens() {
  if (currentState == MAIN_MENU) {
    drawMainMenu();
  } else if (currentState == GAME_PLAY) {
    drawGamePlay();
  } else if (currentState == SETTINGS) {
    drawSettings();
  } else if (currentState == CREDITS) {
    drawCredits();
  } else if (currentState == LOSE) {
    drawLose();
  } else if (currentState == WIN) {
    drawWin();
  } else if (currentState == BOSSFIGHT) {
    drawBossFight();
  }
}

function viewCredits() { currentState = CREDITS}
function viewGame() { currentState = GAME_PLAY; 
  frameCount=0;}
function viewSettings() { currentState = SETTINGS }
function viewMainMenu() { currentState = MAIN_MENU }
function viewBossScreen() { currentState = BOSSFIGHT;
  frameCount=0; }
function viewLose() { currentState = LOSE }
function viewWin(){currentState=WIN}