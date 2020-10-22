/* triangle 1 */
let sideLength = width / 25;
let x0 = (width/2) + (width/10) - (sideLength/2);
let y0 = height / 2;
let x1 = x0 + (sideLength / 2);
let y1 = y0 - sideLength * sin(45);
let x2 = x0 + sideLength;
let y2 = y0;


function setup() {
  createCanvas(700, 700);
  
}

function draw() {
  background(220);
  fill(220);

  startingCircles();

  arrow();
  translate(width / 2, height / 2);
  rotate(90);
  translate(-width / 2, -height / 2);
  arrow();
  translate(width / 2, height / 2);
  rotate(90);
  translate(-width / 2, -height / 2);
  arrow();
  
  

}

function arrow() {
  strokeWeight(4);
  fill(220);
  arc(width/2, height/2, width/5, height/5, 0, PI/3);

  strokeWeight(1);
  fill(0);
  triangle(x0, y0, x1, y1, x2, y2);
}

function startingCircles() {
  fill(220);
  circle(width/4, height/2, 30);
}
