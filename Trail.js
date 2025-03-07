class Trail{
    constructor(x,y, up){
      this.x = x;
      this.y = y;
      this.up = up;
      this.o = 128;
      this.stay = true;
      
      if(up){
        this.c = 45;
      }else{
        this.c = -45;
      }
    }
    renderTrail(){
      push();
        angleMode(DEGREES);
        rectMode(CENTER)
        fill(255, this.o);
        translate(this.x, this.y);
        rotate(this.c)
        rect(0, 0,10,20);
      pop();
      this.x -= speed;
      this.o -= 10;
      if(this.o<10){
        this.stay = false;
      }
    }
  }