class PlayerManager {
    constructor() {
        this.sprite;
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
        transform=loadSpriteSheet("assets/images/player/rage.png", 100, 100, 14)
        rage=loadAnimation(transform)
        rageSpr1=loadSpriteSheet("assets/images/player/rage1.png", 80, 100, 6)//o
        rage1=loadAnimation(rageSpr1)
        rageSpr2=loadSpriteSheet("assets/images/player/rage2.png", 80, 100, 6)//i
        rage2=loadAnimation(rageSpr2)
        rage.frameDelay = 12;
        rage1.frameDelay = 4;
        rage2.frameDelay = 4;
    }

    setup() {// going to run at setup
        this.sprite = this.makePlayer(300, 460, 50, 50);
    }

    draw() {// going to run at draw
        camera.position.x = this.sprite.position.x;//CAMERA CONTROL X
        camera.position.y = this.sprite.position.y;//CAMERA CONTROL Y
        camera.zoom = 1;
    }

    makePlayer(x, y, sizeX, sizeY) { // createsprite
        let tempPlayer = createSprite(x, y, sizeX, sizeY);
        tempPlayer.setCollider("rectangle", 0, 0, 50, 50)
        tempPlayer.addAnimation("idle", idleAnim)
        tempPlayer.addAnimation("running", runningAnim)
        tempPlayer.addAnimation("runningLeft", runningLeftAnim)
        tempPlayer.addAnimation("attack", pAttack);
        tempPlayer.addAnimation("transform", rage);
        tempPlayer.addAnimation("transform1", rage1);
        tempPlayer.addAnimation("transform2", rage2);
        tempPlayer.friction = 0.25;
        // dtempPlayer.debug = true;
        return tempPlayer
    }
    keyPressed() {
        let up = keyDown(UP_ARROW), w = keyDown('w');
        let down = keyDown(DOWN_ARROW), a = keyDown('a');
        let left = keyDown(LEFT_ARROW), s = keyDown('s')
        let right = keyDown(RIGHT_ARROW), d = keyDown('d');
        let space = keyDown(32);
        let p = keyDown(80), o = keyDown(79),i=keyDown(73);
        //LOGIC
        if (left || a) {
            this.sprite.velocity.x = -5;
            this.sprite.changeAnimation("runningLeft")
        }
        else if (up || w) {
            this.sprite.velocity.y = -5;
            this.sprite.changeAnimation("running")
        }
        else if (down || s) {
            this.sprite.velocity.y = +5;
            this.sprite.changeAnimation("running")
        }
        else if (right || d) {
            this.sprite.velocity.x = +5;
            this.sprite.changeAnimation("running")
        } else if (space) {
            this.sprite.changeAnimation("attack")
        } else {
            this.sprite.changeAnimation("idle")
        }
        if (p){
            this.sprite.changeAnimation("transform")
        }
        if (o){
            this.sprite.changeAnimation("transform1")
        }
        if (i){
            this.sprite.changeAnimation("transform2")
        }
    }
}
