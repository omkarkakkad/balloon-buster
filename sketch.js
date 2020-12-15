var bg
var bgImage;

var bow;
var bowImage;

var arrow;
var arrowImage;

var red_balloonImage;

var green_balloonImage;

var blue_balloonImage;

var pink_balloonImage;

var score;

var redB,greenB,blueB,pinkB;
 
var arrowGroup;

function preload(){
  
  bgImage = loadImage("background0.png");
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
} 
  
function setup() {
  createCanvas(600,600);
  
  //creating background
  bg = createSprite(0,0,600,600);
  bg.addImage(bgImage);
  bg.scale = 3;
  
    bg.velocityX = -3 
  
  bow = createSprite(540,270,5,5);
  bow.addImage(bowImage);
  bow.scale=1.4;
  
  score=0;
  
  redB = new Group();
  greenB = new Group();
  blueB = new Group();
  pinkB = new Group();
  arrowGroup = new Group();
}

function draw() {
  
    if (bg.x < 0){
      bg.x = bg.width/2;
    }      
  
  bow.y = mouseY;
  
  if(keyDown("space")){
    createArrow();
}
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon);
  
  if(World.frameCount % 30 == 0){
    if(select_balloon == 1){
      redBalloon();         
    } else if(select_balloon == 2){
      greenBalloon();
    } else if(select_balloon == 3){
      blueBalloon();
    } else {
      pinkBalloon();
    }  
  }
  
  if(arrowGroup.isTouching(redB)){
   redB.destroyEach();
   arrowGroup.destroyEach();
   score=score+3;
  }
    
  if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }
  
  if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+5;
  }
  
  if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
   
  drawSprites();
  
  textSize(25);
  text("Score: "+ score,450,30); 
}

function createArrow(){
     var arrow = createSprite(490,mouseY,5,5);
     arrow.addImage(arrowImage);
     arrow.scale=0.4;
     arrow.velocityX=-12;
     arrow.lifetime=50;
     arrowGroup.add(arrow);
}

function redBalloon(){
    var red = createSprite(0, Math.round(random(20, 370)));
    red.addImage(red_balloonImage);
    red.velocityX = +8;
    red.lifetime = 75;
    red.scale = 0.1;
    redB.add(red);
}

function greenBalloon(){
    var green = createSprite(0, Math.round(random(20,370)));
    green.addImage(green_balloonImage);
    green.velocityX = +8;
    green.lifetime = 75;
    green.scale = 0.1;
    greenB.add(green);
}

function blueBalloon(){
    var blue = createSprite(0, Math.round(random(20,370)));
    blue.addImage(blue_balloonImage);                             
    blue.velocityX = +10;
    blue.lifetime = 60;
    blue.scale = 0.1;
    blueB.add(blue);
}

function pinkBalloon(){
    var pink = createSprite(0, Math.round(random(20,370)));
    pink.addImage(pink_balloonImage);                             
    pink.velocityX = +10;
    pink.lifetime = 60;
    pink.scale = 1.3;
    pinkB.add(pink);
}