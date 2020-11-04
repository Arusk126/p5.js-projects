var radius = 0;
var speed = 0;
var rCircle = 0;
var center = 0;
var angle = 0;
var animate = 0;

var exit;
var quitActivity = false;
var rotationsCompleted = 0;
var hasBeenCounted = false;


function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);  

  exit = new Clickable();
  exit.locate(44*width/50, height/50);
  exit.resize(width/10, height/15);
  exit.textScaled = true;
  exit.text = "exit";
  exit.onOutside = function () {
    this.color = "#FFFFFF";
  };
  exit.onHover = function () {
    this.color = "#AA33AA";
  };
  exit.onPress = function () {
    quitActivity = true;
  };

  finish = new Clickable();
  finish.locate(width/2, height/4);
}

function draw() {
  if(quitActivity == false) {
    if(rotationsCompleted < 5) {
      background("lightblue");
      arrows();
      exit.draw();

      var angle = mouseAngle();
      if(mouseIsPressed && (angle < -70 || angle > 230)){
        trackingCircles(angle, "green");
        if(hasBeenCounted == false) {
          rotationsCompleted++;
          hasBeenCounted = true;
        }
      }
      else if(mouseIsPressed) {
        trackingCircles(angle, "red");
      }
      else {
        startingCircles();
        hasBeenCounted = false;
      }
    }
    else {
      background("lightgray");
      textSize(48);
      fill("green");
      text('Congratulations', width/2, height/2 - (height/10));
      exit.text = "return to menu";
      exit.resize(width/5, height/10);
      exit.locate(width/2 - width/10, height/2);
      exit.draw();
    }
  }
  else {
    noCanvas();
    window.location.href = "index.html";
  }
}

function arrows() {
  /* for triangle construction */
  var center = [width/2, height/2];
  var radius1 = width/12.5;
  var radius2 = radius1 + width/50;
  var radius3 = radius1 + width/25;
  
  /* traingle 1 */
  var point1 = [center[0] + (radius1 * cos(0)),
                center[1] + (radius1 * sin(0))];
  var point2 = [center[0] + (radius2 * cos(0)),
                center[1] + (radius2 * sin(-18))];
  var point3 = [center[0] + (radius3 * cos(0)),
                center[1] + (radius3 * sin(0))];

  /* triangle 2 */
  var point4 = [center[0] + (radius1 * cos(-120)),
                center[1] + (radius1 * sin(-120))];
  var point5 = [center[0] + (radius2 * cos(-138)),
                center[1] + (radius2 * sin(-135))];
  var point6 = [center[0] + (radius3 * cos(-120)),
                center[1] + (radius3 * sin(-120))];

  /* triangle 3 */
  var point7 = [center[0] + (radius1 * cos(-240)),
                center[1] + (radius1 * sin(-240))];
  var point8 = [center[0] + (radius2 * cos(-255)),
                center[1] + (radius2 * sin(-267))];
  var point9 = [center[0] + (radius3 * cos(-240)),
                center[1] + (radius3 * sin(-240))];

  strokeWeight(4);
  fill("lightblue");
  stroke("black");

  arc(width/2, height/2, width/5, height/5, 0, 60);
  arc(width/2, height/2, width/5, height/5, 120, 180);
  arc(width/2, height/2, width/5, height/5, 240, 300);

  strokeWeight(1);
  fill("black");
  triangle(point1[0], point1[1], point2[0], point2[1], point3[0], point3[1]);
  triangle(point4[0], point4[1], point5[0], point5[1], point6[0], point6[1]);
  triangle(point7[0], point7[1], point8[0], point8[1], point9[0], point9[1]);
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
  if(mouseX < center[0]) {
    angle = angle - 180;
  }
  return -angle;
}
