var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

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

  
  ghost = createSprite(200,200,50,50);
  ghost.addImage(ghostImg);
  ghost.scale = 0.25


  climbersGroup = new Group();
  doorsGroup = new Group();
  
}

function draw() {
  background(200);
  
  
  if(tower.y > 400){
      tower.y = 300
    }

    
  if(keyDown("Left_arrow")) {
    ghost.x = ghost.x-3;
  }

  if(keyDown("Right_arrow")) {
    ghost.x = ghost.x+3;
  }

  if(keyDown("Space")) {
    ghost.velocityY = -10
  }

  ghost.velocityY = ghost.velocityY + 0.8
  
  if(climbersGroup.isTouching(ghost)) {
    ghost.velocityY= 0;
    ghost.destroy();
    tower.velocityY = 0
    climbersGroup.setvelocityYEach(0);
    door.velocityY = 0
  }


  spawnDoors();
  drawSprites();
}

function spawnDoors() {
  if(frameCount%240 === 0) {
  var door = createSprite(200, -50);
    door.x = Math.round(random(120, 400));
    door.velocityY = 1;
    door.addImage(doorImg);
    doorsGroup.add(door);

  var climber = createSprite(200, 10);
   climber.x = door.x
   climber.velocityY = 1;
   climber.addImage(climberImg);
   climbersGroup.add(climber);
  }
}

