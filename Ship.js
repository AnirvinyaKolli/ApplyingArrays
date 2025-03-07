class Ship{
    constructor(x,y){
      this.dirUp = false; 
      this.x = x;
      this.y = y;
      this.s = 20 
      this.body = new CollisionBody(x, y, this.s, this.s)
    }
    renderShip(){
      
      push()
        fill(255)
        angleMode(DEGREES)
        translate(this.body.x, this.body.y);
        if(this.dirUp){
            rotate(-45);
        }else{
            rotate(45);
        }
        image(ship,-10,-10,this.body.bWidth+20,this.body.bHeight+20);
      pop()
      
      if(this.dirUp){
        this.body.y-=speed;
      }else{
        this.body.y+= speed;
      }
      trails.push(new Trail(this.body.x, this.body.y, this.dirUp));
      if(this.body.y <0 || this.body.y>height){
        gameOver = true; 
      }
    }
    checkCollision(o){
      return (this.body.detectCollision(o));
    }
  }