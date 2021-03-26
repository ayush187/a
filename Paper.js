class Paper{
 constructor(x,y) {
   var paper_options = {
         isStatic:false,
       ' restitution':0.3,
       ' friction':0.5,
       ' density':1.2,
        }
      this.body = Bodies.circle(x,y,3,paper_options);
    this.image=loadImage("paper.png")
    World.add(world,this.body)
    }
    display(){
    var pos =this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
   // rotate(angle);
    imageMode(CENTER);
    strokeWeight(10);
    stroke("green")
    fill("red");
    
   image (this.image,0, 0,3);
    pop();      
    }
  
  
  
  
  }