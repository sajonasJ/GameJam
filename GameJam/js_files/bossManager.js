class BossManager{
    constructor(){
        this.sprite;
        this.hp;
        this.maxHp;
    }
    preload(){
        transform = loadSpriteSheet("assets/images/player/rage.png", 100, 100, 14)
        rage = loadAnimation(transform)
        rageSpr1 = loadSpriteSheet("assets/images/player/rage1.png", 80, 100, 6)//o
        rage1 = loadAnimation(rageSpr1)
        rageSpr2 = loadSpriteSheet("assets/images/player/rage2.png", 80, 100, 6)//i
        rage2 = loadAnimation(rageSpr2)
        rage.frameDelay = 4;
        rage1.frameDelay = 4;
        rage2.frameDelay = 4;
    }
    setup(x,y){

    }
    draw(){

    }
    makeBoss(x,y){
        let walkSpeed = 2;
        let leftDirection = 180;
        let boss = createSprite(x, y);
        boss.setCollider("rectangle", 0, 0, 50, 50);
        tempPlayer.addAnimation("transform", rage);
        tempPlayer.addAnimation("transform1", rage1);
        tempPlayer.addAnimation("transform2", rage2);
        boss.mass = 10;
        boss.debug = true;
        boss.maxHp = 100
        boss.hp = 100
        this.group.add(boss);
        this.bossNum += 1;
        return boss
    }
    createHealthBar(){
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