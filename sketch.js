var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  for(var i=0;i<6;i++){
    var bottomGround1 = createSprite(683,height-50-(i*400),width,grassHeight);
    if(i%2===0){
      var road = createSprite(683,height-150-(i*400)-grassHeight,width,300);
      road.shapeColour="black";
    }
    bottomGrass1.shapeColour="green";
  }
  
  for(var i=0;i<40;i++){
    cars = new Car(2);
    carGroup.add(cars.spt);
  }
   
  for(var i=0;i<40;i++){
    log = new Log;
    carGroup.add(log.spt);
  }
  
  player= new Player(weidth/2,height-25);

 }

function draw() {
  background("skyblue");
  translate(0,-plaer.spt.y+height-150);
  for(var i=1;i<logGroup1.length;i++){
    if(logGroup[i].x<0){
      logGroup1[i.x=width];
    }
  for(var i=1;i<carGroup1.length;i++){
    if(carGroup1[i].x<0){
      carGroup1[i].x=width;
    }
    if(carGroup1[i].x>width){
      carGroup1[i].x=0;
    }
  }
  }

  
 
  drawSprites();
}

function keyPressed(){
  if(keyDown("up")){
    player.move(0-2);
  }else if(keyDown("down")){
    player.move(0,2);
  }else if(keyDown("left")){
    player.move(-2,0);
  }else if(keyDown("right")){
    player.move(2,0);
  }
}