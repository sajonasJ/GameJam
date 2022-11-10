let dogWalkSheet, dogWalk;
let dogIdleSheet, dogIdle;
let dogAttackSheet, dogAttack;
let dogWalkLeftSheet, dogWalkLeft;
class DogManager {
    constructor() {
        this.sprite;
    }
    preload() {
        dogWalkSheet = loadSpriteSheet("assets/images/animals/Walk.png", 48, 48, 6);
        dogWalk = loadAnimation(dogWalkSheet);
        dogWalk.frameDelay = 4;
        dogIdleSheet = loadSpriteSheet("assets/images/animals/Idle.png", 48, 48, 4);
        dogIdle = loadAnimation(dogIdleSheet);
        dogIdle.frameDelay = 4;
        dogAttackSheet = loadSpriteSheet("assets/images/animals/Attack.png", 48, 48, 4);
        dogAttack = (dogAttackSheet);
        dogAttack.frameDelay = 4;
        dogWalkLeftSheet = loadSpriteSheet("assets/images/animals/WalkLeft.png", 48, 48, 6);
        dogWalkLeft = loadAnimation(dogWalkLeftSheet);
        dogWalkLeft.frameDelay = 4;
    }
    setup(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = this.makeDogA(this.x, this.y);
    }
    draw() {
        this.keyPressed();
    }
    makeDogA(x, y) {
        let tempDogA = createSprite(x, y);
        tempDogA.addAnimation("idle", dogIdle);
        tempDogA.addAnimation("walk", dogWalk);
        tempDogA.addAnimation("walkleft", dogWalkLeft);
        tempDogA.addAnimation("attack", dogAttack);
        tempDogA.friction = 0.25;
        return tempDogA

    }
    keyPressed() {
        let left = keyDown(LEFT_ARROW), a = keyDown('a')
        let right = keyDown(RIGHT_ARROW), d = keyDown('d');
        let space = keyDown(32), ctrl = keyDown(17);
        // let p = keyDown(80), o = keyDown(79), i = keyDown(73);
        //LOGIC
        if (left || a) {
            this.sprite.changeAnimation("walkleft")
            if (ctrl) {
                this.sprite.velocity.x = -10;
            } else {
                this.sprite.velocity.x = -5;
            }
        } else if (right || d) {
            this.sprite.changeAnimation("walk")
            if (ctrl) {
                this.sprite.velocity.x = +10;
            } else {
                this.sprite.velocity.x = +5;
            }
        } else if (space) {
            this.sprite.changeAnimation("attack")
        } else {
            this.sprite.changeAnimation("idle")

        }
    }}