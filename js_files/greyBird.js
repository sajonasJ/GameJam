let greyBirdSheet, greyBird;
class GreyBirdManager {
    constructor() {
        this.sprite;
        this.group;
        this.birdNum = 0;
    }
    preload() {
        greyBirdSheet = loadSpriteSheet("assets/images/animals/bird2.png", 32, 32, 6)
        greyBird = (greyBirdSheet);
        greyBird.frameDelay = 4;
    }
    setup(x, y) {
        this.group = new Group();
        this.x = x;
        this.y = y;
        this.sprite = this.makeGreyBird(this.x, this.y);
    }
    draw() {
        this.makeGreyBirdMove()
        this.greyBirdCleanUp()
    }
    makeGreyBird(x, y) {
        let tempGrey = createSprite(x, y);
        tempGrey.addAnimation("idle", greyBird);
        this.group.add(tempGrey);
        this.birdNum++;
        return tempGrey
    }
    makeGreyBirdMove() {
        this.sprite.setSpeed(1.5, 180);
    }
    greyBirdCleanUp() {
        for (let bird of this.group) {
            const leftEdge = camera.position.x - width / 2;
            if (bird.position.x < leftEdge) {
                bird.remove()
                this.birdNum--;
            }
        }
    }
}