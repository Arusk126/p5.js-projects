/* triangle 1 */
let sideLength = width / 25;
let x0 = (width/2) + (width/10) - (sideLength/2);
let y0 = height / 2;
let x1 = x0 + (sideLength / 2);
let y1 = y0 - sideLength * sin(45);
let x2 = x0 + sideLength;
let y2 = y0;



var radius = 150;
var speed = -0.0;
var countVowel;
var rcircle=20;
var center = width/2;
var value=0;
var angle=0;
var animate = 0;

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
}

function draw() {
  background("lightblue");

  arrows();

  

  for(var j=0; j < 5; j++){
    var x = center + radius * cos(angle);
    var y = center + radius * sin(angle);
    stroke('red');
    circle(x,y,rcircle);
    angle = angle+360/5;
  }

  if(animate==1){
    angle = angle-speed*(180/PI);
  }
  else{
    angle=90;
  }
  print(angle);
}

function arrows() {
  strokeWeight(4);
  fill("lightblue");
  stroke("black");
  arc(width/2, height/2, width/5, height/5, 0, PI/3);
  arc(width/2, height/2, width/5, height/5, 2*PI/3, PI);
  arc(width/2, height/2, width/5, height/5, 4*PI/3, 5*PI/3);

  strokeWeight(1);
  fill(0);
  triangle(x0, y0, x1, y1, x2, y2);
}

function startingCircles() {
  fill(220);
  circle(width/4, height/2, 30);
}

