
var box1;
var background;

function setup() {
  createCanvas(800,400);
  box1 = new Box(200,200,20,20)
}

function draw() {
  background(0);
  box.display();
  drawSprites();
}