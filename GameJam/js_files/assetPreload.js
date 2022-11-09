let creditBackground;
let mainMenuBG;
let font;
let playButtonIMG;
let creditsButtonIMG;
let settingsBackground;
let background1, background2;
let playButton, creditsButton, settingsButton, returnButton;
let heatlhFace, bgCity, griffin;

function assetPreload() {
    griffin = loadImage("assets/images/pixelator.png");
    background1 = loadImage("assets/images/background1280x720noCity.png.png");
    background2 = loadImage("assets/images/secondBG.png")
    font = loadFont("fonts/joystix monospace.ttf");
    mainMenuBG = loadImage("assets/images/mainMenuBG.png");
    playButtonIMG = loadImage("assets/images/playbutton.png.png");
    creditsButtonIMG = loadImage("assets/images/creditsButton.png");
    creditBackground = loadImage("assets/images/creditBackground.jpg");
    settingsBackground = loadImage("assets/images/settingBackground.png");
    playButton = createImg("assets/images/playButton.png.png")
    settingsButton = createImg("assets/images/settingsCog.png")
    returnButton = createImg("assets/images/returnButtonIMG.png")
    creditsButton = createImg("assets/images/creditsButton.png")
    healthFace = loadImage("assets/images/healthFace.png")
    bgCity = loadImage("assets/images/cityBG.png")

}