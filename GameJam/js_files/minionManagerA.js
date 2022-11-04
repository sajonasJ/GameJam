let enemyWalkSheetA, enemyAnimA;
class MinionManagerA {
    constructor() {
        this.sprite;
    }

    preload() {
        enemyWalkSheetA = loadSpriteSheet("assets/images/enemy/EnemyA1.png", 100, 100, 4);
        enemyAnimA = loadAnimation(enemyWalkSheetA);
        enemyAnimA.frameDelay = 4;
    }

    setup(x,y) {
        this.x=x;
        this.y=y;
        this.sprite = this.makeMinionA(this.x, this.y);
    }

    draw() {
        this.sprite.setSpeed(1.5, 180);
    }

    makeMinionA(x, y) {
        let minionA = createSprite(x, y, 50, 50);
        minionA.setCollider("rectangle", 0, 0, 50, 50);
        minionA.addAnimation("walk", enemyAnimA);
        minionA.friction = 0.25;
        return minionA
    }
}