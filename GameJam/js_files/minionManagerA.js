let enemyWalkSheetA, enemyAnimA;
class MinionManagerA {
    constructor() {
        this.group;
        this.walkSpeed=2;
        this.leftDirection=180;
    }

    preload() {
        enemyWalkSheetA = loadSpriteSheet("assets/images/enemy/EnemyA1.png", 100, 100, 4);
        enemyAnimA = loadAnimation(enemyWalkSheetA);
        enemyAnimA.frameDelay = 4;
    }

    setup() {
        this.group=new Group();
        this.group.add(this.makeMinionA(600, 650))
    }

    draw() {
    }

    makeMinionA(x, y) {
        let minionA = createSprite(x, y, 50, 50);
        minionA.setCollider("rectangle", 0, 0, 50, 50);
        minionA.addAnimation("walk", enemyAnimA);
        minionA.setSpeed(this.walkSpeed, this.leftDirection);
        minionA.mass=10;
        //  minionA.friction = 0.25;
        minionA.debug=true;
        return minionA
    }
}