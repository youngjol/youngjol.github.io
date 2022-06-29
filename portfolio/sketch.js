// Interactive model of two gears that change rotational speed/direction and color 
// depending on the location of the user's mouse.
// Mouse y location controls rotation; mouse x location controls color 

let numSpikes = 20;
let canvasWidth = 400;
let canvasHeight = 400;
let outRad = 80;
let inRad = 70;
let rotateAngle = 0;
let offset = 360 / (numSpikes * 2)

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  background(230);
  let rotateSpeed = map(mouseY, 0, canvasHeight, 3, -3);
  let blueIntensity = map(mouseX, 0, canvasWidth,0,255);
  rotateAngle = (rotateAngle + rotateSpeed) % 360;
  stroke(255);
  fill(150,200,blueIntensity);
  drawGear(canvasWidth*0.3, canvasHeight/2, numSpikes, -rotateAngle, inRad, outRad);
  fill(250,150,blueIntensity)
  drawGear(canvasWidth*0.7, canvasHeight/2, numSpikes, rotateAngle + offset, inRad, outRad);
}


function drawGear(x, y, numSpikes, rotateAngle, inRad, outRad) {
  beginShape();
  for (let i = 0; i < numSpikes; i += 1) {
    let outAngle = 360 / numSpikes * i + rotateAngle;
    let inAngle = 360 / numSpikes * (i + 1/2) + rotateAngle;
    let outX = outRad * cos(outAngle) + x;
    let outY = outRad * sin(outAngle) + y;
    let inX = inRad * cos(inAngle) + x;
    let inY = inRad * sin(inAngle) + y;
    curveVertex(outX, outY);
    curveVertex(inX, inY);
  }
  endShape(CLOSE);
}

