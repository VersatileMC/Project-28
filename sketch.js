
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var tree;

var stone;

var boyIMG;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10

var slingShot
function preload()
{
	boyIMG = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();
	tree = new Tree(600,400, 400,600);
	stone = new Stone(200,400, 50,50);

  //creating Mangos
  mango1 = new Mango(500,300,75,75);
  mango2 = new Mango(700,300,75,75);
  mango3 = new Mango(550,220,75,75);
  mango4 = new Mango(620,200,75,75);
  mango5 = new Mango(580,300,75,75);
  mango6 = new Mango(700,200,75,75);
  mango7 = new Mango(750,280,75,75);
  mango8 = new Mango(500,360,75,75);
  mango9 = new Mango(730,360,75,75);
  mango10 = new Mango(620,340,75,75);
  
  slingShot = new SlingShot(stone.body,{x:120,y:550});
}


function draw() {
  background("#a9d6cb");
  Engine.update(engine);
  
  rectMode(CENTER);

  ground.display();
  
  imageMode(CENTER)
  image(boyIMG,200,610,250,250);

  stone.display();
  tree.display();

  //displayng mangos
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
  detectcollision(stone,mango10);

  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode == 32){
      slingShot.attach(stone.body);
  }
}

function detectcollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body,false);
  }
}
