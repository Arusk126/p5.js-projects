function setup() {
  let canvas = createCanvas(400, 400);
  canvas.position(300, 50);
  canvas.class("lemon");
}

function draw() {
  background(220);
  if(mouseIsPressed) {
    fill(0);
  }
  else{
    fill(255);
  }
  ellipse(mouseX,mouseY,80,80);
}
