
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var groundObj;
var  leftSide;
var rSide
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  groundObj= new Ground(0,200,10000,10)
  leftSide = new Ground(300,150,10,100)
  rSide = new Ground(400,150,10,100)

	Engine.run(engine);
  
var ball_options ={

	isStatic:false,
	restitution:0.3,
	
}


  ball = Bodies.circle(100, 100, 60,ball_options) 
  World.add(world,ball)

  rectMode(CENTER);


}


function draw() {
  
  background(0);
 groundObj.show();
 leftSide.show();
 rSide.show()
 Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20,20)
  
 

  
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
  }
  
  }
  
  



