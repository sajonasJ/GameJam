function drawBossFight() {
    camera.off();
    image(classRoom, 0, 0);
    bossFightButtons();
    player.draw();
    brownDog.sprite.remove();
    drawSprites();
    scoreSystem();
}