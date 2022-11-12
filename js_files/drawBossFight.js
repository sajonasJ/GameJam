function drawBossFight() {
    camera.off();
    gameSound.stop();
    if(frameCount===50){
        finalMusic();
    }
    image(classRoom, 0, 0);
    bossFightButtons();
    player.draw();
    boss.draw();
    brownDog.sprite.remove();
    player.groupA.overlap(boss.group,playerBoss)
    drawSprites();
    scoreSystem();
    spriteWalls();
    console.log(frameCount)
}