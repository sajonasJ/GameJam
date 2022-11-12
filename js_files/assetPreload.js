////////////////////BACKGROUNDS////////////////////
let creditBackground,classRoom;
let mainMenuBG;
let settingsBackground;
let background1, background2, background3;
let dontPlay, gamesIMG, with1, with2;
////////////////////FONTS////////////////////
let font;
////////////////////BUTTONS////////////////////
let playButton, creditsButton, settingsButton, returnButton;
let playButtonIMG;
let creditsButtonIMG;
////////////////////OTHERS////////////////////
let heatlhFace, bgCity, griffin;


function assetPreload() {
    ////////////////////BACKGROUNDS////////////////////
    mainMenuBG = loadImage("assets/images/buttons/mainMenuBG.png");
    background1 = loadImage("assets/images/backgrounds/background1280x720noCity.png.png");
    background2 = loadImage("assets/images/backgrounds/secondBG.png")
    background3 = loadImage("assets/images/backgrounds/thirdBG.png")
    bgCity = loadImage("assets/images/backgrounds/cityBG.png")
    creditBackground = loadImage("assets/images/backgrounds/creditbackground.jpg");
    settingsBackground = loadImage("assets/images/backgrounds/settingbackground.png");
    dontPlay = loadImage("assets/images/backgrounds/title1.png");
    gamesIMG = loadImage("assets/images/backgrounds/title2.png");
    with1 = loadImage("assets/images/backgrounds/with1.png");
    with2 = loadImage("assets/images/backgrounds/with2.png");
    classRoom =loadImage("assets/images/backgrounds/bossClassroom.png");
    ////////////////////FONTS////////////////////
    font = loadFont("fonts/joystix monospace.ttf");
    ////////////////////BUTTONS////////////////////
    playButton = createImg("assets/images/buttons/playButton.png.png")
    settingsButton = createImg("assets/images/buttons/settingsCog.png")
    returnButton = createImg("assets/images/buttons/returnButtonIMG.png")
    creditsButton = createImg("assets/images/buttons/creditsButton.png")
    playButtonIMG = loadImage("assets/images/buttons/playbutton.png.png");
    creditsButtonIMG = loadImage("assets/images/buttons/creditsButton.png");
    ////////////////////OTHERS////////////////////
    griffin = loadImage("assets/images/buttons/pixelator.png");
    healthFace = loadImage("assets/images/buttons/healthFace.png")
}