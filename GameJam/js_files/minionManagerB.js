let enemyWalkSheetB, enemyAnimB;
let enemyDieSheetB, enemyDieB;
let enemyAttackSheetB,enemyAttackB;
class MinionManagerB {
    constructor() {
        this.group;
        this.hp;
        this.maxHp;
        this.sprite;
        this.minionBNum = 0;
    }

    preload() {
        enemyWalkSheetB = loadSpriteSheet("assets/images/enemy/enemyB1.png", 100, 100, 4);
        enemyDieSheetB = loadSpriteSheet("assets/images/enemy/EnemyB3.png", 100, 100, 4);
        enemyAttackSheetB=loadSpriteSheet("assets/images/enemy/EnemyB2.png", 100, 100, 4);
        enemyAnimB = loadAnimation(enemyWalkSheetB)
        enemyDieB = loadAnimation(enemyDieSheetB);
        enemyAttackB=loadAnimation(enemyAttackSheetB);
        enemyAttackB.frameDelay=12;
        enemyAnimB.frameDelay = 4;
        enemyDieB.frameDelay=4;
        enemyDieA.looping=false;
    }
    setup(x, y) {
        this.group = new Group();
        this.x = x;
        this.y = y;
        this.group.add(this.makeMinionB(this.x, this.y));
    }

    draw() {
        this.createHealthBar();
    }

    makeMinionB(x, y) {
        let leftDirection = 180;
        let walkSpeed = 1.3;;
        let minionB = createSprite(x, y);
        minionB.setCollider("rectangle", 0, 0, 50, 50);
        minionB.addAnimation("walk", enemyAnimB);
        // minionB.addAnimation("die", enemyDieB);
        minionB.addAnimation("attack",enemyAttackB);
        minionB.setSpeed(walkSpeed, leftDirection);
        minionB.mass = 10;
        minionB.debug = true;
        minionB.maxHp = 100
        minionB.hp = 100
        this.group.add(minionB);
        this.minionBNum += 1;
        return minionB
    }
    createHealthBar() {
        push();
        //tracker hp.box
        for (let enemy of this.group) {
            let healthBoxX = enemy.position.x - 25;
            let healthBoxY = enemy.position.y - 40;
            let boxWidth = 50, boxHeight = 8;
            //HEALTH MAPPED
            noStroke();
            fill(255, 0, 0);
            rect(healthBoxX, healthBoxY,
                map(enemy.hp, 0, enemy.maxHp, 0, boxWidth), boxHeight);
            //OUTSIDE RECTBOX
            stroke(0);
            strokeWeight(2);
            noFill();
            rect(healthBoxX, healthBoxY, boxWidth, boxHeight);
        }
        pop();
    }
}