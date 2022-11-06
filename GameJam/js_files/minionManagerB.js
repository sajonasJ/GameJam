let enemyWalkSheetB, enemyAnimB;
class MinionManagerB {
    constructor() {
        this.group;
        this.walkSpeed=2;
        this.leftDirection=180;
    }

    preload() {
        enemyWalkSheetB = loadSpriteSheet("assets/images/enemy/enemyB1.png", 100, 100, 4);
        enemyAnimB = loadAnimation(enemyWalkSheetB)
        enemyAnimB.frameDelay = 4;
    }

    setup() {
        this.group=new Group();
        this.group.add(this.makeMinionB(700, 650))
    }

    draw() {
    }

    makeMinionB(x, y) {
        let minionB = createSprite(x, y, 50, 50);
        minionB.setCollider("rectangle", 0, 0, 50, 50);
        minionB.addAnimation("walk", enemyAnimB);
        minionB.setSpeed(this.walkSpeed, this.leftDirection);
        minionB.mass=10;
        // minionB.friction = 0.25;
        minionB.debug=true;
        return minionB
    }
}