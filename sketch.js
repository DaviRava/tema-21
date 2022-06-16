
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Bodies.circle(200,300,30)
    World.add(world,ball)
	ground = new Ground(width/2,670,width,20);
    leftSide = new Ground(600,600,20,120)
	rightSide = new Ground(800,600,20,120)




	Engine.run(engine);

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  rightSide.show()
  leftSide.show();
  Engine.update(engine)
  ellipse(ball.position.x,ball.position.y,30)
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:-0.12})


	}
}




