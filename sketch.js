var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
    createCanvas(600, 200);
  
  monkey = createSprite(50,180,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.5;
  
  
  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
  set
  console.log("Hello" + 5)
  
  score = 0;

  
}


function draw() {

  background(180);
  
  text("Score: "+ score, 500,50);
  
   }
  
  
  if(gameState === PLAY){
                 
    //move the ground
  
    
    if (score>0 && score%100 === 0){
      checkPointSound.play();
      
    }
    
 
    
    
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
      
    }
    //spawn obstacles on the ground
    spawnObstacles();
    
    if(obstaclesGroup.isTouching(monkey))
      trexvelocityY=-1000
    
  }
   else if (gameState === END) {
     console.log("hey")
      gameOver.visible = true;
      restart.visible = true;
     
      ground.velocityX = 0;
      trex.velocityY = 0
   }