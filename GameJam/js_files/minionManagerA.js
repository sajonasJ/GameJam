let enemyWalkSheetA, enemyAnimA;
class MinionManagerA {
    constructor() {
        this.group;
        this.walkSpeed=2;
        this.leftDirection=180;
        this.health=100;
        this.maxHealth=100;
        this.sprite;
    }

    preload() {
        enemyWalkSheetA = loadSpriteSheet("assets/images/enemy/EnemyA1.png", 100, 100, 4);
        enemyAnimA = loadAnimation(enemyWalkSheetA);
        enemyAnimA.frameDelay = 4;
    }

    setup(x,y) {
        this.group=new Group();
        this.x=x;
        this.y=y;
        // this.group.add(this.makeMinionA(this.x, this.y));
        this.sprite = this.makeMinionA(this.x,this.y);
    }

    draw() { 
        this.createHealthBar();
    }

    makeMinionA(x, y) {
        let minionA = createSprite(x, y);
        minionA.setCollider("rectangle", 0, 0, 50, 50);
        minionA.addAnimation("walk", enemyAnimA);
        minionA.setSpeed(this.walkSpeed, this.leftDirection);
        minionA.mass=10;
        //  minionA.friction = 0.25;
        minionA.debug=true;
        this.group.add(minionA);
        return minionA
    }
    createHealthBar() {//healthbar
        push();
        let healthBoxX = this.sprite.position.x-25;
        let healthBoxY = this.sprite.position.y-40;
        let boxWidth=50,boxHeight=8;
        noStroke();
        fill(255, 0, 0);
        rect(healthBoxX,healthBoxY,
             map(this.health, 0, this.maxHealth, 0, boxWidth), boxHeight);
             //health=0 to max=100 length 200;red
        stroke(0);
        strokeWeight(2);
        noFill(0);
        rect(healthBoxX,healthBoxY, boxWidth,boxHeight);//healthsize x,y + boxsize x,y
        pop();
    
        
     
    }
}