class CollisionBody{
    constructor(x, y, bWidth, bHeight){
      //Vars 
      this.x = x; 
      this.y = y;
      this.bWidth = bWidth;
      this.bHeight = bHeight;
    }

    //Collision Method
    detectCollision(ob){
      return (
        this.x < ob.x + ob.bWidth &&
        this.x + this.bWidth > ob.x &&
        this.y < ob.y + ob.bHeight &&
        this.y + this.bHeight > ob.y
      );
    }
  }