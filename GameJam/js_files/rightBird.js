let rightBirdSheet, rightBird;
class RightBirdManager {
    constructor() {
        this.sprite;
        this.group;
        this.birdNum = 0;
    }
    preload() {
        rightBirdSheet = loadSpriteSheet("assets/images/animals/bird.png", 32, 32, 6)
        rightBird = (rightBirdSheet);
        rightBird.frameDelay = 4;
    }
    setup(x, y) {
        this.group = new Group();
        this.x = x;
        this.y = y;
        this.sprite = this.makeRightBird(this.x, this.y);
    }
    draw() {
        this.makeRightBirdMove();
        this.rightBirdCleanUp()
    }
    makeRightBird(x, y) {
        let tempBlack = createSprite(x, y);
        tempBlack.addAnimation("idle", rightBird);
        this.group.add(tempBlack);
        this.birdNum++;
        return tempBlack
    }
    makeRightBirdMove() {
        this.sprite.setSpeed(4, 180);
    }
    rightBirdCleanUp() {
        for (let bird of this.group) {
            const leftEdge = camera.position.x - width / 2;
            if (bird.position.x < leftEdge) {
                bird.remove()
                this.birdNum--;
            }
        }
    }
}