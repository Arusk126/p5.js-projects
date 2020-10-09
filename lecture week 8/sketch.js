let x = 200;
let y = 200;
let fillColor = 0;

function setup() {
  createCanvas(400, 400);
  
  background(220);
  
  fill("red");
  circle(100,100, 200,200);
  fill("blue");
  rect(200,0, 200,200);
  fill("green");
  circle(300,300, 200,200);
  fill("yellow");
  rect(0,200, 200,200);
  
  noStroke();
  fill(220);
}

function draw() {
  x = x + random(4) - 2;
  y = y + random(4) - 2;

  fillColor = round(random(8), 0);
  switch(fillColor){
    case 0:
      fill("red");
    break;

    case 1:
      fill("orange");
    break;
    
    case 2:
      fill("yellow");
    break;

    case 3:
      fill("green");
    break;

    case 4:
      fill("blue");
    break;

    case 5:
      fill("purple");
    break;

    case 6:
      fill("black");
    break;

    case 7:
      fill("white");
    break;
  }
  circle(x, y, 10, 10);
}