
//Defining Arrays for pipes and trail
let pipes = [];
let trails = [];

//Gap of the pipes
let sGap = 300;

//Defining Player
let player;

//Game Vars
let speed = 10;
let gameOver = false;

//Unused Ship Sprite
let ship;
function setup() {

  //ship = loadImage('assets/ship.png')
  
  createCanvas(windowWidth, windowHeight);
  pipes.push(new Pipe(sGap));
  player =  new Ship(100, 300);
}

function draw() {  
  
    //Every 4 frames draws pushs pipe
    if(frameCount%10 ==0){
        pipes.push(new Pipe(sGap, getMin(),getMax()));
    }

    //Decrements gap
    if(frameCount%10 ==0 && sGap > 50){
        sGap--;
    }

    //Background
    background(0);
    
    //Renders each trail 
    trails.forEach(t=>t.renderTrail());

    //Renders Player
    player.renderShip();

    //Checks player pipe collision 
    pipes.forEach(p => {
      if(player.checkCollision(p.topPipe) || player.checkCollision(p.bottomPipe)){
        gameOver = true;
      }
    });
  
    //Filters off screen pipes 
    for(let i = 0;i<pipes.length; i++){
      pipes[i].drawPipe();
      if(pipes[i].offScreen){
        pipes.splice(i,1);
      }
    }

    //Filters Faded trails
    for(let i = 0;i<trails.length; i++){
      if(!trails[i].stay){
        trails.splice(i,1);
      }
    }
  
    //Flips dir
    if(keyIsDown(32) || mouseIsPressed){
      player.dirUp = true;
    }else{
      player.dirUp = false; 
    }
  
    //end game clause
    if(gameOver){
      speed = 0;
    }
}

//Get min for new rand pipe
function getMin(){
  if(pipes[pipes.length-1].midPoint-sGap/4 < pipes[pipes.length-1].gap/2){
    return pipes[pipes.length-1].gap/2;
  }else{
    return pipes[pipes.length-1].midPoint-sGap/4;
  }
}

//Get max for new rand pipe
function getMax(){
  if(pipes[pipes.length-1].midPoint+sGap/4 >height-pipes[pipes.length-1].gap/2){
    return height-pipes[pipes.length-1].gap/2;
  }else{
    return pipes[pipes.length-1].midPoint+sGap/4;
  }
  
}


