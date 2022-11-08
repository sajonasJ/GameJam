let creditBackground;
let mainMenuBG;
let font;
let playButtonIMG;
let creditsButtonIMG;
let settingsBackground;
let background1;
let playButton, creditsButton, settingsButton, returnButton;
let heatlhFace;
function assetPreload() {
    background1 = loadImage("assets/images/background1280x720.png");
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
}