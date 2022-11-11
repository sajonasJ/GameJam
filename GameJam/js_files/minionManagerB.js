let enemyWalkSheetB, enemyAnimB;
let enemyDieSheetB, enemyDieB;
class MinionManagerB {
    constructor() {
        this.group;
        this.health = 100;
        this.maxHealth = 100;
        this.sprite;
        this.minionBNum = 0;
    }

    preload() {
        enemyWalkSheetB = loadSpriteSheet("assets/images/enemy/enemyB1.png", 100, 100, 4);
        enemyDieSheetB = loadSpriteSheet("assets/images/enemy/EnemyA3.png", 100, 100, 4);
        enemyAnimB = loadAnimation(enemyWalkSheetB)
        enemyDieB = loadAnimation(enemyDieSheetB);
        enemyAnimB.frameDelay = 4;
        enemyDieB.frameDelay=4;
    }
    setup(x, y) {
        this.group = new Group();
        this.x = x;
        this.y = y;
        this.sprite = this.makeMinionB(this.x, this.y);
    }

    draw() {
        this.createHealthBar();
    }

    makeMinionB(x, y) {
        let leftDirection = 180;
        let walkSpeed = 1.3;;
        let minionB = createSprite(x, y, 50, 50);
        minionB.setCollider("rectangle", 0, 0, 50, 50);
        minionB.addAnimation("walk", enemyAnimB);
        minionB.addAnimation("die", enemyDieB);
        minionB.setSpeed(walkSpeed, leftDirection);
        minionB.mass = 10;
        minionB.debug = true;
        minionB.maxHp = 100
        minionB.hp = 100
        this.group.add(minionB);
        return minionB
    }
    createHealthBar() {
        push();
        //tracker hp.box
        for (let enemyBN of this.group) {
            let healthBoxX = this.sprite.position.x - 25;
            let healthBoxY = this.sprite.position.y - 40;
            let boxWidth = 50, boxHeight = 8;
            //HEALTH MAPPED
            this.minionBNum += 1;
            noStroke();
            fill(255, 0, 0);
            rect(healthBoxX, healthBoxY,
                map(enemyBN.hp, 0, enemyBN.maxHp, 0, boxWidth), boxHeight);
            //OUTSIDE RECTBOX
            stroke(0);
            strokeWeight(2);
            noFill();
            rect(healthBoxX, healthBoxY, boxWidth, boxHeight);
        }
        pop();
    }
}