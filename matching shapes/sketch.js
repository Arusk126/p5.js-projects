  let button;

function setup() {
  createCanvas(400, 400);
  
    Button = createButton("Back to Home");
  Button.mouseClicked(homeButton);
  Button.size(50,30);
  Button.position(25, 65);
  Button.style("font-family", "Bodoni");
  Button.style("font-size", "10px");
  
  button = createButton("Play Game");
  button.mouseClicked(moveButton);
  button.size(50,30);
  button.position(25,65);
  button.style("font-family", "Bodoni");
  button.style("font-size", "12px");
  
  
  Button = createButton("Click Here for Help");
  Button.mouseClicked(helpButton);
  Button.size(150,30);
  Button.position(250, 370);
  Button.style("font-family", "Bodoni");
  Button.style("font-size", "12px");
  
  Button = createButton("Test Answer");
  Button.mouseClicked(testButton);
  Button.size(100,30);
  Button.position(50, 360);
  Button.style("font-family", "Bodoni");
  Button.style("font-size", "12px");
  
    Button = createButton("1");
  Button.mouseClicked(Square);
  Button.size(20,20);
  Button.position(237, 171);
  Button.style("font-family", "Bodoni");
  Button.style("font-size", "10px");
  
    Button = createButton("2");
  Button.mouseClicked(Eclipse);
  Button.size(20,20);
  Button.position(237, 230);
  Button.style("font-family", "Bodoni");
  Button.style("font-size", "10px");
  
      Button = createButton("3");
  Button.mouseClicked(Hexagon);
  Button.size(20,20);
  Button.position(237, 285);
  Button.style("font-family", "Bodoni");
  Button.style("font-size", "10px");
  
      Button = createButton("4");
  Button.mouseClicked(Circle);
  Button.size(20,20);
  Button.position(290, 150);
  Button.style("font-family", "Bodoni");
  Button.style("font-size", "10px");
  
      Button = createButton("5");
  Button.mouseClicked(Triangle);
  Button.size(15,15);
  Button.position(292, 215);
  Button.style("font-family", "Bodoni");
  Button.style("font-size", "9px");
  
      Button = createButton("6");
  Button.mouseClicked(Rtriangle);
  Button.size(15,15);
  Button.position(295, 267);
  Button.style("font-family", "Bodoni");
  Button.style("font-size", "9px");
  
      Button = createButton("7");
  Button.mouseClicked(Heart);
  Button.size(20,20);
  Button.position(291, 310);
  Button.style("font-family", "Bodoni");
  Button.style("font-size", "10px");
  
        Button = createButton("8");
  Button.mouseClicked(Pentagon);
  Button.size(20,20);
  Button.position(350, 175);
  Button.style("font-family", "Bodoni");
  Button.style("font-size", "10px");
  
        Button = createButton("9");
  Button.mouseClicked(Octogon);
  Button.size(20,20);
  Button.position(350, 230);
  Button.style("font-family", "Bodoni");
  Button.style("font-size", "10px");
  
          Button = createButton("10");
  Button.mouseClicked(Heptagon);
  Button.size(20,20);
  Button.position(350, 290);
  Button.style("font-family", "Bodoni");
  Button.style("font-size", "10px");
  
  
  
  
}

function draw() {

  square(0, 0,400);
//  square(100, 100, 200);
//  noStroke();
//  fill(100);
  
  //header rectangle
  fill(50);
  rect(50,10,300,50);


  //right middle rectangle
  fill(80);
  rect(200,100,200,250);
  
  //Display rectanlge
  rect(5,100,190, 100);
  fill(120);
  
  //Anser Rectangle
  fill(170);
  rect(5,250,190, 100);
  
  //Help rectagle
  fill(220);
  rect(250,375,150,25);
  
  //Test Box
  rect(50,360,100,30);
  

  textSize(32);
  text('Matchng Shapes', 80, 45);
  fill(0, 102, 153);
  
  textSize(18);
  text('Test answer', 50, 385);
  fill(0, 0, 0);
  
  textSize(18);
  text('Click here for help', 253, 395);
  
  textSize(18);
  text('Pattern: ', 75, 120);
  
  textSize(18);
  text('Copy Pattern: ', 50, 275);
  
  textSize(18);
  text('Available Shapes: ', 225, 120);
  
  fill(10)
  
  //Clickable square
  square(227, 160, 40)
  
    // An ellipse
  ellipse(300, 160, 40, 40);
  
      // An ellipse
  ellipse(245, 240, 50, 30);
  
  pent(360,185,30,1)
  
  hexagon(245,295,20,1)
  
  hept(360,308,20,1)
  
  rightTri(300,270,25,1)
  
  heart(300,325,18,1)
  
  octo(360,250,20,1)
  
  tri(300,215,15,1)
  

  
}
function moveButton() {
  button.position (325,65);
    var val = Math.floor(1000 + Math.random() * 9000);
console.log(val);
}
function helpButton() {
    var val = Math.floor(1000 + Math.random() * 9000);
console.log(val);
}

function testButton() {
    var val = Math.floor(1000 + Math.random() * 9000);
console.log(val);
}

function homeButton() {
    var val = Math.floor(1000 + Math.random() * 9000);
console.log(val);
}

function Square() {
    var val = Math.floor(1);
console.log(val);
}

function Eclipse() {
    var val = Math.floor(2);
console.log(val);
}

function Hexagon() {
    var val = Math.floor(3);
console.log(val);
}

function Circle() {
    var val = Math.floor(4);
console.log(val);
}

function Triangle() {
    var val = Math.floor(5);
console.log(val);
}

function Rtriangle() {
    var val = Math.floor(6);
console.log(val);
}

function Heart() {
    var val = Math.floor(7);
console.log(val);
}

function Pentagon() {
    var val = Math.floor(8);
console.log(val);
}

function Octogon() {
    var val = Math.floor(9);
console.log(val);
}

function Heptagon() {
    var val = Math.floor(0);
console.log(val);
}






function pent(x,y,size,lineT)
{
pentX=x
pentY=y
len=size
penV1x=x-len/2
penV1y=y+len/2
penV2x=x+len/2
penV2y=y+len/2
penV3x=x+len/2
penV3y=penV2y-len
penV4x= penV3x-len/2
penV4y= penV3y-len/2
penV5x=x-len/2
penV5y=y-len/2
beginShape()
strokeWeight(lineT)
stroke(0)
vertex(penV1x,penV1y)
vertex(penV2x,penV2y)
vertex(penV3x,penV3y)
vertex(penV4x,penV4y)
vertex(penV5x, penV5y)
vertex(penV1x,penV1y)
endShape()
}

function hexagon(x,y,len,lineT)
{
hexV1x=x-len
 hexV1y=y+len/2
hexV2x=x
hexV2y=y+len
 hexV3x=x+len
 hexV3y=y+len/2
 hexV4x=x+len
 hexV4y=y-len/2
  hexV5x=x
  hexV5y=y-len
  hexV6x=x-len
  hexV6y=y-len/2
 stroke(0)
 strokeWeight(lineT)
beginShape()
vertex(hexV1x,hexV1y)
vertex(hexV2x,hexV2y)
  vertex(hexV3x,hexV3y)
  vertex(hexV4x,hexV4y)
  vertex(hexV5x,hexV5y)
  vertex(hexV6x,hexV6y)
  vertex(hexV1x,hexV1y)
endShape()
}
function hept(x,y,len,lineT)
{
  heptV1x=x-len/2
  heptV1y=y+len/2
  heptV2x=x+len/2
  heptV2y=y+len/2
  heptV3x=x+len
  heptV3y=y
  heptV4x=x+len
  heptV4y=y-len
  heptV5x=x
  heptV5y=y-len-len/2
  heptV6x=x-len
  heptV6y=y-len
  heptV7x=x-len
  heptV7y=y
  heptV8x=x-len/2
  heptV8y=y+len/2
  stroke(0)
  strokeWeight(lineT)
beginShape()
vertex(heptV1x,heptV1y)
vertex(heptV2x,heptV2y)
vertex(heptV3x,heptV3y)
vertex(heptV4x,heptV4y)
vertex(heptV5x,heptV5y)
vertex(heptV6x,heptV6y)
vertex(heptV7x,heptV7y)
vertex(heptV8x,heptV8y)
endShape()
}

function rightTri(x,y,len,lineT)
{
rTriV1x=x-len/1.5
rTriV1y=y+len/2
rTriV2x=x+len/2
rTriV2y=y+len/2
rTriV3x=x+len/2
rTriV3y=rTriV2y-len*1.5
stroke(0)
strokeWeight(lineT)
beginShape(TRIANGLES)
vertex(rTriV1x,rTriV1y)
vertex(rTriV2x,rTriV2y)
vertex(rTriV3x,rTriV3y)
vertex(rTriV1x,rTriV1y)
endShape()
}

function heart(x,y,len,lineT)
{
  heartV1x=x-len/2
  heartV1y=y+len/2
  heartV2x=x
  heartV2y=y+len
  heartV3x=x+len/2
  heartV3y=y+len/2
  heartV4x=x+len
  heartV4y=y
  heartV5x=x+len+(len/8)
  heartV5y=y-len/1.25
  heartV6x=x+len/1.5
  heartV6y=y-len-len/2
  heartV7x=x
  heartV7y=heartV5y-len/3.5
  heartV8x=x-len/1.5
  heartV8y=y-len-len/2
  heartV9x=x-len-(len/8)
  heartV9y=y-len/1.25
  heartV10x=x-len
  heartV10y=y
  heartV11x=x-len/2
  heartV11y=y+len/2
  stroke(0)
  strokeWeight(lineT)
  beginShape()
  vertex(heartV1x,heartV1y)
  vertex(heartV2x,heartV2y)
  vertex(heartV3x,heartV3y)
  vertex(heartV4x,heartV4y)
  vertex(heartV5x,heartV5y)
  vertex(heartV6x,heartV6y)
  vertex(heartV7x,heartV7y)
  vertex(heartV8x,heartV8y)
  vertex(heartV9x,heartV9y)
  vertex(heartV10x,heartV10y)
  vertex(heartV11x,heartV11y)
  endShape()
}

function octo(x,y,len,lineT)
{
  octoV1x=x-len/2
  octoV1y=y+len/2
  octoV2x=x+len/2
  octoV2y=y+len/2
  octoV3x=x+len
  octoV3y=y
  octoV4x=x+len
  octoV4y=y-len
  octoV5x=x+len/2
  octoV5y=y-len-len/2
  octoV6x=x-len/2
  octoV6y=y-len-len/2
  octoV7x=x-len
  octoV7y=y-len
  octoV8x=x-len
  octoV8y=y
  octoV9x=x-len/2
  octoV9y=y+len/2
  stroke(0)
  strokeWeight(lineT)
  beginShape()
  vertex(octoV1x,octoV1y)
  vertex(octoV2x,octoV2y)
  vertex(octoV3x,octoV3y)
  vertex(octoV4x,octoV4y)
  vertex(octoV5x,octoV5y)
  vertex(octoV6x,octoV6y)
  vertex(octoV7x,octoV7y)
  vertex(octoV8x,octoV8y)
  vertex(octoV9x,octoV9y)
  vertex(octoV1x,octoV1y)
  endShape()
}

function tri(x,y,len,lineT)
{
triV1x=x-len+len
triV1y=y-len
triV2x=x+len
triV2y=y+len
triV3x=x-len
triV3y=y+len
stroke(0)
strokeWeight(lineT)
  beginShape(TRIANGLES)
vertex(triV1x,triV1y)
vertex(triV2x,triV2y)
vertex(triV3x,triV3y)
  endShape()
}




