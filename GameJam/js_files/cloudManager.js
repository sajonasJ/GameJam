let clouds1, clouds2, clouds3;
class CloudManager {
    constructor() {
        this.spriteA;
        this.spriteB;
        this.spriteC;
        this.group;
        this.cloudNum = 0;
    }
    preload() {
        clouds1 = loadImage("assets/images/cloud1.png");
        clouds2 = loadImage("assets/images/cloud2.png");
        clouds3 = loadImage("assets/images/cloud3.png");
    }
    setup(x, y) {
        this.group = new Group();
        this.x = x;
        this.y = y;
        this.spriteA = this.makeCloudA(this.x + 300, this.y + 70);
        this.spriteB = this.makeCloudB(this.x, this.y + 100);
        this.spriteC = this.makeCloudC(this.x, this.y + 160);

    }

    draw(x, y) {
        // console.log(frameCount);
        this.makeCloudMoveA();
        this.makeCloudMoveB();
        this.makeCloudMoveC();
        this.cloudCleanUp();


    }
    makeCloudA(x, y) {
        let tempCloudA = createSprite(x, y);
        tempCloudA.scale = 3;
        tempCloudA.addImage("idle", clouds1);
        this.group.add(tempCloudA);
        this.cloudNum++;
        return tempCloudA;
    }
    makeCloudB(x, y) {
        let tempCloudB = createSprite(x, y);
        tempCloudB.scale = 3;
        tempCloudB.addImage("idle", clouds2);
        this.group.add(tempCloudB);
        this.cloudNum++;
        return tempCloudB;

    }
    makeCloudC(x, y) {
        let tempCloudC = createSprite(x, y);
        tempCloudC.scale = 3;
        tempCloudC.addImage("idle", clouds3);
        this.group.add(tempCloudC);
        this.cloudNum++;
        return tempCloudC;
    }
    makeCloudMoveA() {
        this.spriteA.setSpeed(.3, 0);
    }
    makeCloudMoveB() {
        this.spriteB.setSpeed(.5, 0);
    }
    makeCloudMoveC() {
        this.spriteC.setSpeed(.7, 0);
    }
    cloudMaker() {

    }

    cloudCleanUp() {
        for (let cloud of this.group) {
            const leftEdge = camera.position.x - width / 2;
            if (cloud.position.x < leftEdge) {
                cloud.remove()
                this.cloudNum--;
            }
        }
    }
}d