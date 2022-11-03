let enemyWalkSheetA, enemyAnimA;
class MinionManagerA {
    constructor() {
        this.sprite;
    }

    preload() {
        enemyWalkSheetA = loadSpriteSheet("assets/images/enemy/EnemyA1.png", 100, 100, 4);
        enemyAnimA = loadAnimation(enemyWalkSheetA)
        enemyAnimA.frameDelay = 4;
    }

    setup() {
        this.sprite = this.makeMinionA(400, 460, 50, 50);
    }

    draw() {

    }

    makeMinionA(x, y, sizeX, sizeY) {
        let minionA = createSprite(x, y, sizeX, sizeY);
        minionA.setCollider("rectangle", 0, 0, 50, 50);
        minionA.addAnimation("walk",enemyAnimA); 
        minionA.friction = 0.25;
        return minionA
    }
}