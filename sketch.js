let pipes = [];
let trails = [];
let sGap = 300; 
let player;
let speed = 10;
let gameOver = false;
let ship;
function setup() {
  ship = loadImage('assets/ship.png')
  createCanvas(windowWidth, windowHeight);
  pipes.push(new Pipe(sGap));
  player =  new Ship(100, 300);
}

function draw() {  
  
    if(frameCount%4 ==0){
        pipes.push(new Pipe(sGap, getMin(),getMax()));
    }
    if(frameCount%4 ==0 && sGap > 50){
        sGap--;
    }

    background(0);
    
    trails.forEach(t=>t.renderTrail());

  
    player.renderShip();
    pipes.forEach(p => {
      if(player.checkCollision(p.topPipe) || player.checkCollision(p.bottomPipe)){
        gameOver = true;
      }
    });
  
    for(let i = 0;i<pipes.length; i++){
      pipes[i].drawPipe();
      if(pipes[i].offScreen){
        pipes.splice(i,1);
      }
    }
    for(let i = 0;i<trails.length; i++){
      if(!trails[i].stay){
        trails.splice(i,1);
      }
    }
  
    if(keyIsDown(32) || mouseIsPressed){
      player.dirUp = true;
    }else{
      player.dirUp = false; 
    }
  
  
  if(gameOver){
    speed = 0;
  }
}


function getMin(){
  if(pipes[pipes.length-1].midPoint-sGap/4 < pipes[pipes.length-1].gap/2){
    return pipes[pipes.length-1].gap/2;
  }else{
    return pipes[pipes.length-1].midPoint-sGap/4;
  }
}

function getMax(){
  if(pipes[pipes.length-1].midPoint+sGap/4 >height-pipes[pipes.length-1].gap/2){
    return height-pipes[pipes.length-1].gap/2;
  }else{
    return pipes[pipes.length-1].midPoint+sGap/4;
  }
  
}


