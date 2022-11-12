function drawCredits() {
  camera.off();
  push();
  image(creditBackground, 0, 0);
  fill(255, 200);
  noStroke();
  rect(200, 100, 880, 550, 30);
  pop();
  thanks();
  creditButtons();

  function thanks() {
    push();
    textSize(30);
    stroke(0);
    strokeWeight(3);
    textFont(font);
    textStyle(BOLD);
    fill(217, 4, 41);
    textAlign(CENTER);
    text("Credits to DidiGameB for the", camera.position.x, camera.position.y-230);
    text("Business of Rage Character sprite", camera.position.x, camera.position.y-200);
    text("https://opengameart.org", camera.position.x, camera.position.y-170);
    text("/content/business-of-rage-characeter-beatemup-2d", camera.position.x, camera.position.y-140);

    text("noName created street Animals", camera.position.x, camera.position.y - 110);
  text("https://craftpix.net/freebies/",camera.position.x, camera.position.y - 80);
  text("free-street-animal-pixel-art-asset-pack/",camera.position.x, camera.position.y - 50);
  text("?num=1&count=8&sq=dogs&pos=7",camera.position.x, camera.position.y - 20);
  text("TEAM MATES", camera.position.x, camera.position.y + 50);
    text("Backgrounds made by Deon", camera.position.x, camera.position.y + 80);
    text("Sounds from Ryota", camera.position.x, camera.position.y + 110);

    text("Special thanks to James Baker ", camera.position.x, camera.position.y + 160);
    text(" for hosting Jamtacular 2022 ", camera.position.x, camera.position.y + 220);
    text("and for all of his support and guidance.", camera.position.x, camera.position.y + 250);

  }
  pop();
}
