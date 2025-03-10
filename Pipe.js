class Pipe{
    constructor(gap, min= height/2, max = height/2){

      //Vars
      this.x = width+100;
      
      this.midPoint= random(min,max);
      
      this.gap = gap;
      this.offScreen = false;
      
      //Top and bottom pipe
      this.topPipe = new CollisionBody(this.x,0,40,this.midPoint-this.gap/2);
      this.bottomPipe = new CollisionBody(this.x, this.midPoint+this.gap/2, 40, height-this.midPoint+this.gap/2);
  
    }
    
    drawPipe(){

      //Pipe drawn
      push()
        fill(255,128,0)
        noStroke();

        rect(this.topPipe.x,this.topPipe.y,this.topPipe.bWidth,this.topPipe.bHeight);
        rect(this.bottomPipe.x,this.bottomPipe.y,this.bottomPipe.bWidth,this.bottomPipe.bHeight);
      pop()

      //Move pipes
      this.topPipe.x-=speed;
      this.bottomPipe.x-=speed;
      
      //Off screen
      if(this.topPipe.x<-100){
        this.offScreen = true;
      }
    }
    
  }