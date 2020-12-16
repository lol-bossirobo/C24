class bird {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 50, options);
      this.radius = 50;
 
      
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;

      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("red");
      ellipse(0, 0, this.radius);
      pop();
      //if(mousePressedOver(p)){
        pos.x = mouseX;
        pos.y = mouseY;
    //}
    }
  };