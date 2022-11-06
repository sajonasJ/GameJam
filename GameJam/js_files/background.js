function levelBackground() {
    for(let i=0; i<10;i++){
      image(background1, 0+1279.8*[i], 0, 1280,720);
    }
    for (let i = 0; i < allSprites.length; i++) {
      let aSpr = allSprites[i];
      if (aSpr.position.x < 100) { aSpr.velocity.x *= 0; aSpr.position.x = 100; }
      if (aSpr.position.x > 12800) { aSpr.velocity.x *= 0; aSpr.position.x = 1280; }
      if (aSpr.position.y < 400) { aSpr.velocity.y *= 0; aSpr.position.y = 400; }
      if (aSpr.position.y > height - 25) { aSpr.velocity.y *= 0; aSpr.position.y = height - 25; }
    }
  }