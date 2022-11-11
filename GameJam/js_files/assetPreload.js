////////////////////BACKGROUNDS////////////////////
let creditBackground;
let mainMenuBG;
let settingsBackground;
let background1, background2, background3;
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
    creditBackground = loadImage("assets/images/backgrounds/creditBackground.jpg");
    settingsBackground = loadImage("assets/images/backgrounds/settingBackground.png");
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