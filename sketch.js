const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var stand1,stand2;
var strikerIMG;
var player;

function preload(){
 
  
}

function setup() {
  createCanvas(1300,800);
  engine = Engine.create();
  world = engine.world;
 ground = new Ground(750,790,1390,20);
 
striker = new Striker(1000,400,30,40);
man = new Man(700,600,50,50);
sling = new SlingShot(striker.body,{x:200,y:500})
}

function draw() {
  background("blue"); 
  Engine.update(engine); 
  ground.display();
  

  striker.display();
  sling.display();
  man.display();
}

function mouseDragged(){
  Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}