const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var lightning, lightning1,lightning2,lightning3,lightning4;

var engine, world;
var drops= [];
var rand;

var batman;
var batmanIMG;

var maxDrops=100;

var lightningCreatedFrame=0

function preload(){
  lightning1 = loadImage("images/thunderbolt/1.png");
  lightning2 = loadImage("images/thunderbolt/2.png");
  lightning3 = loadImage("images/thunderbolt/3.png");
  lightning4 = loadImage("images/thunderbolt/4.png");

  batmanIMG = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png", "images/Walking Frame/walking_3.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png")

}

function setup(){
  var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;
 
    umbrella=createSprite(600,1000);
    umbrella.addAnimation("walking", batmanIMG)
  
  ground=new Ground(600,900,10,width)


    if(frameCount%50===0){
      for(var i=0; i<maxDrops;i++){
        drops.push(new createDrop(random(0,1100),random(0,1100)));
       }
      }
   
    
    umbrella1=new Umbrella(600,900);
      umbrella.scale=0.45;
}


function draw(){
Engine.update(engine);
background(0)
drawSprites();
umbrella.display();
umbrella1.display();
//lightning.display();


rand=Math.round(random(1,4));
if(frameCount%40===0){
  lightningCreatedFrame=frameCount;
    lightning= createSprite(random(1,1200), random(10,100),10,10);
    switch(rand){
      case 1:lightning.addImage(lightning1);
      break;
      case 2:lightning.addImage(lightning2);
      break;
      case 3:lightning.addImage(lightning3);
      break;
      case 4:lightning.addImage(lightning4);
      break;
      default: break;
    }

    lightning.scale= random(0.3,0.5) 
}

if(lightningCreatedFrame+10===frameCount&& lightning){
  lightning.destroy();
}
 
for(var i=1; i<maxDrops;i++){
  drops[i].displayDrop();
  drops[i].update();
}
}
