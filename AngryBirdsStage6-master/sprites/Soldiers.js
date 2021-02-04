class Soldiers extends BaseClass {
    constructor(x,y){
      super(x,y,300,100);
      this.image = loadImage("sprites/walking soldier.png");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();

  
      
    }
  }