class Trail{
    constructor(x,y, up){
      //Vars
      this.x = x;
      this.y = y;
      this.up = up;
      this.o = 128;
      this.stay = true;
      
      //Dir 
      if(up){
        this.c = 45;
      }else{
        this.c = -45;
      }
    }
    renderTrail(){

      push();
        //Rotation+rendering 
        angleMode(DEGREES);
        rectMode(CENTER)
        fill(255,0,255, this.o);
        translate(this.x, this.y);
        rotate(this.c)
        rect(0, 0,10,20);
      pop();

      //Speed + Opacity
      this.x -= speed;
      this.o -= 10;
      if(this.o<10){
        this.stay = false;
      }
    }
  }