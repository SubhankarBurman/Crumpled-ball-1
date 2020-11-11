
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin1,dustbin2,dustbin3;
var Paper1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,690,800,20);

	dustbin1 = new Dustbin(690,685,20,100);
	dustbin2 = new Dustbin(500,685,20,100);
	dustbin3 = new Dustbin(625,685,197,20);

	Paper1 = new Paper(500,600,30)

	Engine.run(engine);

  
}


function draw() {

  background(0);
//   Engine.update(engine);

  Paper1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
}



