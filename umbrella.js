class Umbrella {
  constructor(x,y) {
    var options = {
      isStatic: true
    }
    this.Visibilty=0
    this.image=loadImage("images/Walking Frame/walking_1Copy.png");
    this.umbrella=Bodies.circle(x,y,10,options);
    this.radius=10;
    World.add(world, this.umbrella);
  }
  display(){
    var pos= this.umbrella.position;
    imageMode(CENTER);
    image(this.image, pos.x, pos.y+80,400,400);
  }
};