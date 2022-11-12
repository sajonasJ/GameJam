function drawGamePlay() {
    background(0);
    console.log(frameCount)
    if (frameCount==100){
      gameMusic();
    }
    levelBackground();
    scoreSystem();
    brownDog.draw();
    blackDog.draw();
    blackBird.draw();
    gBird.draw();
    player.draw();
    enemyA.draw();
    enemyB.draw();
    clouds.draw()
    player.sprite.overlap(enemyA.group, enemyHitA);
    player.sprite.overlap(enemyB.group, enemyHitB);
    // player.sprite.displace(enemyA.group);
    // player.sprite.displace(enemyB.group);
    player.groupA.displace(enemyA.group, playerHitEnemyA);
    player.groupA.displace(enemyB.group, playerHitEnemyB);
    brownDog.group.overlap(enemyA.group, enemyNear);
    brownDog.group.overlap(enemyB.group, enemyNear);
    gamePlayButtons();
    drawSprites();
    reSpawner();
    startRun();
    finalCheck();
  }