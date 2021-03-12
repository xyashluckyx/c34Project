const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg;
var hero,ground,rope;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var block10,block12,block13,block14,block15,block16,block17,block18;
var block19,block20,block21,block22,block23,block24,block25,block26;

function preload() {
//preload the images here
bgImg=loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground=new Ground(500,500,1200,10);

  block1=new Block(500,475,50,50);
  block2=new Block(500,400,50,50);
  block3=new Block(500,350,50,50);
  block4=new Block(500,300,50,50);
  block5=new Block(500,250,50,50);
  block6=new Block(500,200,50,50);
  block7=new Block(500,150,50,50);
  block8=new Block(600,475,50,50);
  block9=new Block(600,400,50,50);
  block10=new Block(600,350,50,50);
  block11=new Block(600,300,50,50);
  block12=new Block(600,250,50,50);
  block13=new Block(600,200,50,50);
  block14=new Block(700,475,50,50);
  block15=new Block(700,400,50,50);
  block16=new Block(700,350,50,50);
  block17=new Block(700,300,50,50);
  block18=new Block(700,250,50,50);
  block19=new Block(700,200,50,50);
  block20=new Block(700,150,50,50);
  block21=new Block(700,100,50,50);
  block22=new Block(800,475,50,50);
  block23=new Block(800,400,50,50);
  block24=new Block(800,350,50,50);
  block25=new Block(800,300,50,50);
  block26=new Block(800,250,50,50);

  monster=new Monster(1000,200,100)
  hero=new Hero(300,200,130);
  rope=new Rope(hero.body,{x:300,y:150});
}

function draw() {
  background(bgImg)  ;
  Engine.update(engine);

  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  monster.display();
  hero.display();
  rope.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY});
}

