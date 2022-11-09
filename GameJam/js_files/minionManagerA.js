let enemyWalkSheetA, enemyAnimA;
class MinionManagerA {
    constructor() {
        this.group;
        this.health = 60;
        this.maxHealth = 100;
        this.sprite;
    }

    preload() {
        enemyWalkSheetA = loadSpriteSheet("assets/images/enemy/EnemyA1.png", 100, 100, 4);
        enemyAnimA = loadAnimation(enemyWalkSheetA);
        enemyAnimA.frameDelay = 4;
    }

    setup(x, y) {
        this.group = new Group();
        this.x = x;
        this.y = y;
        this.sprite = this.makeMinionA(this.x, this.y);
    }

    draw() {
        this.createHealthBar();
    }

    makeMinionA(x, y) {
        let walkSpeed = 2;
        let leftDirection = 180;
        let minionA = createSprite(x, y);
        minionA.setCollider("rectangle", 0, 0, 50, 50);
        minionA.addAnimation("walk", enemyAnimA);
        minionA.setSpeed(walkSpeed, leftDirection);
        minionA.mass = 10;
        minionA.debug = true;
        minionA.maxHp = 100
        minionA.hp = 100
        this.group.add(minionA);
        return minionA
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