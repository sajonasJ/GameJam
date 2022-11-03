let enemyWalkSheetB, enemyAnimB;
class MinionManagerB {
    constructor() {
        this.sprite;
    }

    preload() {
        enemyWalkSheetB = loadSpriteSheet("assets/images/enemy/enemyB1.png", 100, 100, 4);
        enemyAnimB = loadAnimation(enemyWalkSheetB)
        enemyAnimB.frameDelay = 4;
    }

    setup() {
        this.sprite = this.makeMinionB(400, 660, 50, 50);
    }

    draw() {

    }

    makeMinionB(x, y, sizeX, sizeY) {
        let minionB = createSprite(x, y, sizeX, sizeY);
        minionB.setCollider("rectangle", 0, 0, 50, 50);
        minionB.addAnimation("walke",enemyAnimB); 
        minionB.friction = 0.25;
        return minionB
    }
}