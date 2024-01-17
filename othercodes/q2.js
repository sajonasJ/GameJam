//Thanks for author: Garfunkel please support by going to his page at https://opengameart.org/content/august-minijam-diplomatic-desert-crisis.
let file = 'berlin52';
let textCoordX = 20;
let textCoordY = 30;
var tspProblem, tspSolution;
let probName, cityNum;
let solName, tourLength;
let salesPerson, salesGuy;
let arrayId = [];
let arrayX = [];
let arrayY = [];
let cityCoordObject = [];
function preload() {
  loadTSP();
  salesGuy = loadImage('./images/stand_down.png');
}

function setup() {
  createCanvas(1000, 1000);

  background('gray');
  // console.log(tspProblem);
  // console.log(tspSolution);
  showLoadedTSP();
  showSolution();
  makeTSP(mapX, mapY);
}

function draw() {

  makeTspMove();
  drawSprites();

  // console.log(showCity);
}////////////////////////////////////////////////////////////////////////////END DRAW/////////////////////////////////////////////////////////////////////////////////////////////////
//loads the names of the TSP and SOL file
function loadTSP() {
  tspProblem = loadStrings('./tspfolder/' + file + '.tsp');
  tspSolution = loadStrings('./solfolder/' + file + '.sol');
}

function showText() {
  solName = tspSolution[0];
  tourLength = tspSolution[1];
  let revised = tspSolution.splice(0, 2);

  for (let line = 0; line < tspProblem.length; line++) {
    let tspProbLine = tspProblem[line];
    let tspProbData = splitTokens(tspProbLine, ' ');

    if (tspProbData[0] === "NAME:") {
      probName = tspProbData[1];
    }
    if (tspProbData[0] === "DIMENSION:") {
      cityNum = tspProbData[1];
    }
  }
  textAlign(LEFT);
  textSize(16);
  text('Problem Name:' + probName, textCoordX, textCoordY);
  text('Total # of Cities:' + cityNum, textCoordX, textCoordY + 20);

  textAlign(LEFT);
  textSize(16);
  text('Solution Name:' + solName, textCoordX, textCoordY + 40);
  text('Tour Length:' + tourLength, textCoordX, textCoordY + 60);
}



function showLoadedTSP() {// search for min and max size then turn to map
  // start from line 6 of the array
  for (let line = 1 + 5; line < tspProblem.length; line++) {
    let tspProbLine = tspProblem[line];
    let tspProbData = splitTokens(tspProbLine, ' ');

    //array's for finding min max
    arrayId.push(tspProbData[0]);
    arrayX.push(tspProbData[1]);
    arrayY.push(tspProbData[2]);

    //seperate create objects for drawing
    var o = {};
    o.id = tspProbData[0];
    o.x = tspProbData[1];
    o.y = tspProbData[2];
    cityCoordObject.push(o);

  }
  showText();
}

function showSolution() { ///////////////Cannot move conversion to showloadedTSP cause they use the same variables.
  //  have to redo another loop for the same function.
  let maxArrayX = arrayX[0];
  let maxArrayY = arrayY[0];
  let minArrayX = arrayX[0];
  let minArrayY = arrayY[0];

  //for max x and y
  for (let i = 0; i < arrayX.length; i++) {

    let arrayIntX = arrayX[int(i)];
    let arrayIntY = (arrayY[int(i)]);
    let maxArrayXInt = int(maxArrayX);
    let maxArrayYInt = int(maxArrayY);

    if (arrayIntX > maxArrayXInt) {
      maxArrayX = arrayX[i];
      //console.log("max x = "+maxArrayX);
    }
    if (arrayIntY > maxArrayYInt) {
      maxArrayY = arrayY[i];
      //console.log("here max y = "+maxArrayY);
    }
  }

  //for minumum x and y
  for (let i = 0; i < arrayY.length; i++) {
    let arrayIntX = arrayX[int(i)];
    let arrayIntY = (arrayY[int(i)]);
    let minArrayXInt = int(minArrayX);
    let minArrayYInt = int(minArrayY);

    if (arrayIntX < minArrayXInt) {
      minArrayX = arrayX[i];
      //console.log("min x = "+minArrayX);
    }
    if (arrayIntY < minArrayYInt) {
      minArrayY = arrayY[i];
      //console.log("min y = "+ minArrayY);
    }
  }

  for (let i = 0; i < tspSolution.length; i++) {
    // console.log(cityCoordObject[i].id);
    // console.log(tspSolution[i]);
    let numOffset = 50;
    let wOffset = width - numOffset;
    let hOffset = height - numOffset;
    pointX = cityCoordObject[i].x;
    pointY = cityCoordObject[i].y;
    mapX = map(pointX, minArrayX, maxArrayX, numOffset, wOffset);
    mapY = map(pointY, minArrayY, maxArrayY, numOffset, hOffset);
    // console.log(cityCoordObject[i].id)
    // console.log(tspSolution[i]);

    strokeWeight(10);
    textAlign(CENTER);
    text(cityCoordObject[i].id, mapX, mapY - 10);
    point(mapX, mapY);
    // console.log(mapX);
    //  console.log(mapY);
    //  console.log(arrayX);
    // console.log(arrayId[i]);
    //  console.log(tspSolution[i]);
    // console.log(cityCoordObject);

    for (let g = 0; g < cityCoordObject.length; g++) {
      noFill();
      strokeWeight(2);
      vertex(mapX, mapY);
    }
  } endShape(CLOSE);
}






function makeTSP(x, y) {
  salesGuy.resize(20, 40);
  salesPerson = createSprite(x, y, 40, 40);
  // salesPerson.debug = true;
  salesPerson.setCollider("circle", 0, 0, 10);
  salesPerson.addImage("normal", salesGuy);
  salesPerson.maxSpeed = 2;
}

function makeTspMove() {
  // salesPerson.attractionPoint(.5, mapX, mapY);
  // console.log(salesPerson.attractionPoint);
  // console.log(mouseIsPressed);
}
