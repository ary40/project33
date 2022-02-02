class Snow {
    constructor(x, y, r) {
      var options = {
          'restitution':0.5
          
      }
      this.r = r
      this.body = Bodies.circle(x, y, this.r, options);
      this.image = loadImage("snow4.webp");

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x,pos.y);
      
      imageMode(CENTER);
      fill("white");
      image(this.image,0,0, this.r*2, this.r*2);
      pop();
  
    }
  };