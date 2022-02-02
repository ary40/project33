const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snow = [];
var bgImg;
var rand;

function preload(){
 bgImg = loadImage("snow1.jpg");

}

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
    world = engine.world;


}

function draw() {
  background(bgImg);  
  
  
  Engine.update(engine);
rand = Math.round(random(1,4));
if(frameCount%5 === 0)
snow.push(new Snow(random(0,800),30,30));

for(var s = 0; s<snow.length; s++){
  snow[s].display();
}
 drawSprites();
}