
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trash;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1526,750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var trash_options ={
	   restitution:0.5,
	   frictionAir: 0.04
	}

	var ground_options ={
		isStatic: true
	 }

	 Engine.run(engine);
  
	trash = Bodies.circle(200,200,200,trash_options)
	World.add(world,trash)

	ground = Bodies.rectangle(763, 725,20,2000,ground_options)
	World.add(world,ground)

	rectMode(CENTER);
	ellipseMode(RADIUS)
	
}


function draw() {
  
  Engine.update(engine)
  
  background(0);
  
  ellipse(trash.position.x, trash.position.y, 20)
  rect(ground.position.x,ground.position.y,4000,20)

 
}



