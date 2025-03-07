class Pipe{
    constructor(gap, min= height/2, max = height/2){
      this.x = width+100;
      
      this.midPoint= random(min,max);
      
      this.gap = gap;
      this.offScreen = false;
      
      this.topPipe = new CollisionBody(this.x,0,40,this.midPoint-this.gap/2);
      this.bottomPipe = new CollisionBody(this.x, this.midPoint+this.gap/2, 40, height-this.midPoint+this.gap/2);
  
    }
    
    drawPipe(){
      push()
        fill(255)
        rect(this.topPipe.x,this.topPipe.y,this.topPipe.bWidth,this.topPipe.bHeight);
        rect(this.bottomPipe.x,this.bottomPipe.y,this.bottomPipe.bWidth,this.bottomPipe.bHeight);
      pop()
      this.topPipe.x-=speed;
      this.bottomPipe.x-=speed;
  
      if(this.topPipe.x<-100){
        this.offScreen = true;
      }
    }
    
  }