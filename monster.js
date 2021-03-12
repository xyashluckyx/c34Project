class Monster {
    constructor(x,y,r) {
      var options = {
         // isStatic:true,
        density:1,
        friction:1
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.image=loadImage("Monster-01.png");
      this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      //fill(225);
      image(this.image,0,0, 2*this.r,2*this.r);
      pop();
    }
  };