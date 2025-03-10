class Ship{
    constructor(x,y){

      //Vars
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

        //Rotates based on dir
        translate(this.body.x, this.body.y);
        if(this.dirUp){
            rotate(-45);
        }else{
            rotate(45);
        }
        
        //Rendering
        rect(-20,-20,this.body.bWidth+40,this.body.bHeight+20);
        //image(ship,-20,-20,this.body.bWidth+20,this.body.bHeight+20);

      pop()
      
      //Controls Dir
      if(this.dirUp){
        this.body.y-=speed;
      }else{
        this.body.y+= speed;
      }

      //Adds trails
      trails.push(new Trail(this.body.x, this.body.y, this.dirUp));

      //Checks if above or bellow screen
      if(this.body.y <0 || this.body.y>height){
        gameOver = true; 
      }
    }

    //Collision method for ship 
    checkCollision(o){
      return (this.body.detectCollision(o));
    }
  }