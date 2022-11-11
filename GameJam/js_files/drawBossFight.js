function drawBossFight() {
    camera.off();
    image(classRoom, 0, 0);
    bossFightButtons();
    player.draw();
    clouds.spriteA.remove();
    clouds.spriteB.remove();
    clouds.spriteC.remove();
    brownDog.sprite.remove();
    enemyA.sprite.remove();
    enemyB.sprite.remove();
    blackBird.sprite.remove();
    gBird.sprite.remove();
    drawSprites();
    scoreSystem();
}