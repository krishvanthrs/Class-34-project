
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango
var mango2
var rock
var background


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  mango = ('Mango.png')
  rock = (Rock.png)
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}

