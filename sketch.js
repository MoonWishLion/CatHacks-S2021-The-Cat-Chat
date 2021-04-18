function preload()
{
  bgImg = loadImage("images/Cat1.png");
}

function setup() 
{
  createCanvas(670, 400);
}

function printCat()
{
  console.log("Cat");
}

function draw() 
{
  background(bgImg);
}