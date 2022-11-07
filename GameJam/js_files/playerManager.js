var runningSpriteSheet;
var runningAnim;
var idleSpriteSheet;
var idleAnim;
var runningLeftSpriteSheet;
var runningLeftAnim;
let pAttack;
let pAttackSprite;
let transform, rage;
let rage1, rageSpr1;
let rage2, rageSpr2;
let health = 100, maxHealth = 100;

class PlayerManager {
    constructor() {
        this.sprite;
        this.group;

    }
    preload() {//preload
        runningSpriteSheet = loadSpriteSheet("assets/images/player/running1400.png", 100, 100, 6)
        runningAnim = loadAnimation(runningSpriteSheet)
        runningAnim.frameDelay = 4;
        runningLeftSpriteSheet = loadSpriteSheet("assets/images/player/running1400left.png.png", 100, 100, 6)
        runningLeftAnim = loadAnimation(runningLeftSpriteSheet)
        runningLeftAnim.frameDelay = 4;
        idleSpriteSheet = loadSpriteSheet("assets/images/player/idle1400.png", 100, 100, 7)
        idleAnim = loadAnimation(idleSpriteSheet)
        idleAnim.frameDelay = 12;
        pAttackSprite = loadSpriteSheet("assets/images/player/playerAttack.png", 100, 100, 4)
        pAttack = loadAnimation(pAttackSprite);
        pAttack.frameDelay = 4;
        transform = loadSpriteSheet("assets/images/player/rage.png", 100, 100, 14)
        rage = loadAnimation(transform)
        rageSpr1 = loadSpriteSheet("assets/images/player/rage1.png", 80, 100, 6)//o
        rage1 = loadAnimation(rageSpr1)
        rageSpr2 = loadSpriteSheet("assets/images/player/rage2.png", 80, 100, 6)//i
        rage2 = loadAnimation(rageSpr2)
        rage.frameDelay = 12;
        rage1.frameDelay = 4;
        rage2.frameDelay = 4;
    }

    setup(x, y) {// going to run at setup
        this.x = x;
        this.y = y;
        this.sprite = this.makePlayer(this.x, this.y);
        this.group = new Group();
    }

    draw() {// going to run at draw

        camera.position.x = this.sprite.position.x + 540;//CAMERA CONTROL X
        camera.position.y = this.sprite.position.y - 295;//CAMERA CONTROL Y
        camera.zoom = 1;
        this.keyPressed();
        this.createHealthBar();

    }

    makePlayer(x, y) { // createsprite
        let tempPlayer = createSprite(x, y);
        tempPlayer.setCollider("rectangle", 0, 0, 35, 60)
        tempPlayer.addAnimation("idle", idleAnim)
        tempPlayer.addAnimation("running", runningAnim)
        tempPlayer.addAnimation("runningLeft", runningLeftAnim)
        tempPlayer.addAnimation("attack", pAttack);
        tempPlayer.addAnimation("transform", rage);
        tempPlayer.addAnimation("transform1", rage1);
        tempPlayer.addAnimation("transform2", rage2);
        tempPlayer.friction = 0.25;
        tempPlayer.debug = true;
        tempPlayer.mass = 10;
        // dtempPlayer.debug = true;
        return tempPlayer
    }
    keyPressed() {
        let left = keyDown(LEFT_ARROW), a = keyDown('a')
        let right = keyDown(RIGHT_ARROW), d = keyDown('d');
        let space = keyDown(32);
        let p = keyDown(80), o = keyDown(79), i = keyDown(73);
        //LOGIC
        if (left || a) {
            this.sprite.velocity.x = -5;
            this.sprite.changeAnimation("runningLeft")
        }
        else if (right || d) {
            this.sprite.velocity.x = +5;
            this.sprite.changeAnimation("running")
        } else if (space) {
            this.sprite.changeAnimation("attack")
            this.attackSprite();
        } else {
            this.sprite.changeAnimation("idle")
        }
        if (p) {
            this.sprite.changeAnimation("transform")
        }
        if (o) {
            this.sprite.changeAnimation("transform1")
        }
        if (i) {
            this.sprite.changeAnimation("transform2")
        }
    }
    createHealthBar() {//healthbar
        push();
        let healthBoxX = 500, healthBoxY = -300;
        noStroke();
        fill(255, 0, 0);
        rect(camera.position.x - healthBoxX,
            camera.position.y + healthBoxY,
            map(health, 0, maxHealth, 0, 200), 15);//health=0 to max=100 length 200;red
        stroke(0);
        strokeWeight(4);
        noFill();
        rect(camera.position.x - healthBoxX,
            camera.position.y + healthBoxY, 200, 15);//rectbox
        pop();
        push();
        let textOffSetX = 500, textOffsetY = -310;
        fill(0);
        strokeWeight(4);
        textSize(24);
        textAlign(LEFT);
        text("HEALTH:"+health, camera.position.x - textOffSetX, camera.position.y + textOffsetY);
        pop();
    }

    attackSprite() {
        let tempAttack = createSprite(this.sprite.position.x + 20, this.sprite.position.y);
        tempAttack.setCollider("rectangle", 0, 0, 120, 100);
        tempAttack.debug = true;
        tempAttack.life = 5;
        tempAttack.visible = true;
        this.group.add(tempAttack);
        return tempAttack;
    }
}