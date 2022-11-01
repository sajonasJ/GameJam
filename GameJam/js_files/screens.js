const MAIN_MENU = 0;
const GAME_PLAY = 1;
const SETTINGS = 2;
const CREDITS = 3;
const LOSE = 4;
const WIN = 5;

let currentState = LOADING;

function drawScreens(){

    if(currentState = MAIN_MENU){
        drawMainMenu();
    }else if(currentState = GAME_PLAY){
        drawGamePlay();
    }else if(currentState = SETTINGS){
        drawSettings();
    }else if(currentState = CREDITS){
        drawCredits();
    }else if(currentState = LOSE){
        drawLose();
    }else if(currentState = WIN){
        drawWin();
    }

}


  function drawMainMenu(){
    background()
  }

  function drawGamePlay(){
    background()
  }

    background()
  function drawSettings(){
    background()
  }

    background()
  function drawCredits(){
    background()
  }

    background()
  function drawLose(){
    background()
  }
  
    background()
  function drawWin(){
    background()
  }