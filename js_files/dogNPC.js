let blackDogSheet, blackDogIMG;
class dogNPCManager {
    constructor() {
        this.sprite;
        this.group;
        this.blackDogN = 0;
    }
    preload() {
        blackDogSheet = loadSpriteSheet("assets/images/animals/Walk1.png", 48, 48, 6)
        blackDogIMG = (blackDogSheet);
        blackDogIMG.frameDelay = 4;
    }
    setup(x, y) {
        this.group = new Group();
        this.x = x;
        this.y = y;
        this.sprite = this.makeBlackDog(this.x, this.y);
    }
    draw() {
        this.makeBlackDogMove()
        this.blackDogCleanUp()

    }
    makeBlackDog(x, y) {
        let TblackDog = createSprite(x, y);
        TblackDog.addAnimation("idle", blackDogIMG);
        this.group.add(TblackDog);
        this.blackDogN++;
        return TblackDog
    }
    makeBlackDogMove() {
        this.sprite.setSpeed(3, 0);
    }
    blackDogCleanUp() {
        for (let dog of this.group) {
            const leftEdge = camera.position.x*3;
            if (dog.position.x > leftEdge) {
                dog.remove()
                this.blackDogN--;
            }
        }
    }
}