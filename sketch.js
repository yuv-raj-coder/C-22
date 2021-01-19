const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myworld,myengine;
var ground,cube,ball;
function setup() {
  createCanvas(800,400);
  myengine=Engine.create();
  myworld=myengine.world;
  var opt={
    isStatic:true
  }

  ground=Bodies.rectangle(400,380,800,10,opt);
  World.add(myworld,ground);

  ball=Bodies.circle(200,200,40,{restitution:0.6,friction:1});
  World.add(myworld,ball);

  cube=Bodies.rectangle(400,200,50,20,{restitution:0,friction:1.3,density:1.4});
  World.add(myworld,cube);

  //console.log(ground.position.x);
}

function draw() {
  Engine.update(myengine);
  background(0);  
 var pos=ground.position;
 var bpos=ball.position;
 var cpos=cube.position;
 
  rectMode(CENTER);
  fill("yellow");
  rect (pos.x,pos.y,800,50);

  ellipseMode(CENTER);
  fill("red");
  ellipse(bpos.x,bpos.y,40,40);

  fill("green");
  rect(cpos.x,cpos.y,50,20);
  
}