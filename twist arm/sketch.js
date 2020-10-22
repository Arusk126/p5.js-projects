var radius = 0;
var speed = 0;
var rCircle = 0;
var center = 0;
var angle = 0;
var animate = 0;


function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);  
}

function draw() {
  background("lightblue");
  arrows();
  var angle = mouseAngle();
  if(mouseIsPressed) {
    trackingCircles(angle, "red");
  }
  else{
    startingCircles();
  }
}

function arrows() {
  /* triangle 1 */
  var sideLength = width/25;
  var x0 = (width/2) + (width/10) - (sideLength/2);
  var y0 = height / 2;
  var x1 = x0 + (sideLength / 2);
  var y1 = y0 - sideLength * sin(45);
  var x2 = x0 + sideLength;
  var y2 = y0;

  strokeWeight(4);
  fill("lightblue");
  stroke("black");

  arc(width/2, height/2, width/5, height/5, 0, 60);
  arc(width/2, height/2, width/5, height/5, 120, 180);
  arc(width/2, height/2, width/5, height/5, 240, 300);

  strokeWeight(1);
  fill("black");
  triangle(x0, y0, x1, y1, x2, y2);
}

function trackingCircles(startingAngle, fillColor) {
  var center = width/2;
  var placementRadius = 150;
  var circleRadius = 60;
  var angle = startingAngle;

  stroke("black");
  fill(fillColor);
  /* creates fingers */
  for(var i = 0; i < 5; i++) {
    var x = center + (placementRadius * cos(angle));
    var y = center + (placementRadius * sin(angle));
    circle(x,y, circleRadius);
    if(i ==  3) {
      angle = angle - 75;
    }
    else {
      angle = angle - 40;
    }
  }
}

function startingCircles() {
  trackingCircles(25, "gray");
}

function mouseAngle() {
  var center = [width/2, height/2];
  var angle = atan( (center[1] - mouseY) / (mouseX - center[0]) );
  if(mouseX < center) {
    angle = angle - 180;
  }
  return -angle;
}
