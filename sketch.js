var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var score=0;

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(200,300);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.4
  
}

function draw() {
  background(200);

  text("Score: "+ score, 500,50);
  
  if (gameState = "play")
  {

  score = score + Math.round(frameCount/60);  

  if(tower.y > 400){
      tower.y = 300
    }
  
  spawnDoor();
    
  if (keyDown("SPACE"))
  {
    ghost.velocityY=-5
  } 
  ghost.velocityY=ghost.velocityY+0.8
  if(keyDown(LEFT_ARROW))
  {
    ghost.velocityX=-5

  }
  if(keyDown(RIGHT_ARROW))
  {
    ghost.velocityX=5
  }

  /*
  if(climbersGroup.isTouching(ghost))
  {
    ghost.velocityY = 0
    playSound("spookySound")
  }
  
  if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600)
  {
    ghost.destroy()
    gameState="end"
  }
  */
  }
  drawSprites();
  
  
  if (gameState=="end")
  {
    Text("Game Over",300,300)

  }
}

function spawnDoor()
  {
    if (frameCount% 240===0)
    {
      door = createSprite(300,-50)
      door.addImage("door",doorImg)

      climber = createSprite(300,10)
      climber.addImage("climber",climberImg)
    
      invisibleBlock = createSprite(300,15)
      invisibleBlock.width=climber.width
      invisibleBlock.height=2

      door.x=Math.round(random(120,400))
      climber.x=door.x
      invisibleBlock.x=door.x

      door.velocityY=2
      climber.velocityY=2
      invisibleBlock.velocityY=2

      doorsGroup = new Group()
      climbersGroup = new Group()
      invisibleBlockGroup = new Group()

      doorsGroup.add(door)
      climbersGroup.add(climber)
      invisibleBlockGroup.add(invisibleBlock)

      climber.lifetime=800
      door.lifetime=800
      invisibleBlock.lifetime=800

    }

    
    

    

  }
