let enemyWalkSheetB, enemyAnimB;
class MinionManagerB {
    constructor() {
        this.sprite;
        this.x=1000;
        this.y=560;
    }

    preload() {
        enemyWalkSheetB = loadSpriteSheet("assets/images/enemy/enemyB1.png", 100, 100, 4);
        enemyAnimB = loadAnimation(enemyWalkSheetB)
        enemyAnimB.frameDelay = 4;
    }

    setup() {
        this.sprite = this.makeMinionB(this.x, this.y);
    }

    draw() {
        this.sprite.setSpeed(1.5, 180);
    }

    makeMinionB(x, y) {
        let minionB = createSprite(x, y, 50, 50);
        minionB.setCollider("rectangle", 0, 0, 50, 50);
        minionB.addAnimation("walke",enemyAnimB); 
        minionB.friction = 0.25;
        return minionB
    }
}