let bossLeftSheet, bossLeftWalk;
let bossRightSheet, bossRightWalk;
class BossManager {
    constructor() {
        this.sprite;
        this.hp;
        this.maxHp;
        this.group;
    }
    preload() {
        bossLeftSheet = loadSpriteSheet("assets/images/enemy/bwleft.png", 40, 50, 6)
        bossLeftWalk = loadAnimation(bossLeftSheet)
        bossRightSheet = loadSpriteSheet("assets/images/enemy/bwright.png", 40, 50, 6)
        bossRightWalk = loadAnimation(bossRightSheet)
        bossLeftWalk.frameDelay =6;
        bossRightSheet.frameDelay = 6;
    }
    setup(x, y) {
        this.group = new Group();
        this.x = x;
        this.y = y;
        this.sprite= this.makeBoss(this.x, this.y);
    }
    draw() {
        this.createHealthBar(); 
    }
    makeBoss(x, y) {

        let boss = createSprite(x, y);
        boss.setCollider("rectangle", 0, 0, 50, 50);
        boss.addAnimation("left", bossLeftWalk);
        boss.addAnimation("right", bossRightWalk);
        boss.setSpeed(2,180)
        boss.mass = 10;
        // boss.debug = true;
        boss.maxHp = 10000
        boss.hp = 10000
        boss.scale=7;
        this.group.add(boss);
        this.bossNum += 1;
        return boss
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