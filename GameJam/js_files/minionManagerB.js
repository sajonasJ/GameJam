let enemyWalkSheetB, enemyAnimB;
class MinionManagerB {
    constructor() {
        this.group;
        this.walkSpeed = 2;
        this.leftDirection = 180;
        this.health = 100;
        this.maxHealth = 100;
        this.sprite;
    }

    preload() {
        enemyWalkSheetB = loadSpriteSheet("assets/images/enemy/enemyB1.png", 100, 100, 4);
        enemyAnimB = loadAnimation(enemyWalkSheetB)
        enemyAnimB.frameDelay = 4;
    }

    setup(x, y) {
        this.group = new Group();
        this.x = x;
        this.y = y;
        // this.group.add(this.makeMinionB(this.x, this.y));
        this.sprite = this.makeMinionB(this.x, this.y);
    }

    draw() {
        this.createHealthBar();
    }

    makeMinionB(x, y) {
        let minionB = createSprite(x, y, 50, 50);
        minionB.setCollider("rectangle", 0, 0, 50, 50);
        minionB.addAnimation("walk", enemyAnimB);
        minionB.setSpeed(this.walkSpeed, this.leftDirection);
        minionB.mass = 10;
        // minionB.friction = 0.25;
        minionB.debug = true;
        this.group.add(minionB);
        minionB.maxHp = 100
        minionB.hp = 100
        return minionB
    }
    createHealthBar() {//healthbar
        push();
        for (let enemy of this.group) {
            console.log("HP IS", enemy.hp)
            console.log("MAX HP IS", enemy.maxHp)
            let healthBoxX = this.sprite.position.x - 25;
            let healthBoxY = this.sprite.position.y - 40;
            let boxWidth = 50, boxHeight = 8;

            noStroke();
            fill(255, 0, 0);
            rect(healthBoxX, healthBoxY,
                map(enemy.hp, 0, enemy.maxHp, 0, boxWidth), boxHeight);

            stroke(0);
            strokeWeight(2);
            noFill(0);
            rect(healthBoxX, healthBoxY, boxWidth, boxHeight);

        }
        pop();
    }
}
