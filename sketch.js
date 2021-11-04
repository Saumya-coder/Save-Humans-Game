var spaceshipImage;
var spaceship1, spaceship2;
var bg;
var good_human,good_human1, bad_human, bad_human1; 
var luckyShip;
var ship1Count, ship2Count;
var gameState= "play";
var beep 
var win
var lose


function preload(){
  bg = loadImage("assets/earth_1.jpg")
  spaceshipImage = loadImage("assets/space_ship.png");
  good_human = loadImage("assets/supergirl.png");
  bad_human = loadImage("assets/demon.png");
  good_human1 = loadImage( "assets/iron man.png");
  bad_human1 = loadImage("assets/zombie.png")
  beep = loadSound("sounds/beep.wav");
  win = loadSound("sounds/win.wav");
  lose = loadSound("sounds/end.wav");
}

function setup() {
  createCanvas(1200,650);
  spaceship1=createSprite(100,250);
  spaceship2=createSprite(1100,250);

  luckyShip = Math.round(random(1,2));

  badPeopleGroup = new Group();
  goodPeopleGroup = new Group();

  ship1Count=0;
  ship2Count=0;
}

function draw() 
{

  background(bg);
  textSize(25)
  fill("black")
 

if(gameState==="play"){
  text("Count = " + ship1Count, 50,450);
  text("Count = " + ship2Count,1020, 450);

  spaceship1.addImage(spaceshipImage);
  spaceship1.scale=1

  spaceship2.addImage(spaceshipImage);
  spaceship2.scale=1
  spawnHumans();
  spawnBadHumans();

//good people to move to left ship
  if(keyDown(LEFT_ARROW)){
    
   

    for (var i=0;i<goodPeopleGroup.size();i++){
      goodPeopleGroup.get(i).destroy(); 
       ship1Count = ship1Count+1;
       beep.play();
      
}
}

if(keyDown(RIGHT_ARROW)){
    
   
    

    for (var i=0;i<badPeopleGroup.size();i++){
      badPeopleGroup.get(i).destroy(); 
      ship2Count = ship2Count+1;
      beep.play();    
}
}
if(ship1Count===25 || ship2Count===25){
 if(luckyShip===1){
   gameState= "won";
   win.play();
 }
 else{
   gameState = "lose";
   lose.play();
 }
}


  drawSprites();

}
else if(gameState==="won"){
  text("CONGRATULATIONS FOR SURVIVING",400,325);
}
else if(gameState==="lose"){
  textSize(24)
  text("OOPS YOU DIED",500,325);
 
}

}

function spawnHumans(){
  if (frameCount % 97 === 0){
    var good = createSprite(random(150,750),0,10,40);
    good.velocityY = 6;
 
  
     // //generate random goods
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: good.addImage(good_human1);
               break;
       case 2: good.addImage(good_human);
               break
       default: break;
     }
    
     //assign scale and lifetime to the good           
     good.scale = 0.2;
     good.lifetime = 100;
    
    //adding goods to the group
    goodPeopleGroup.add(good);
  }
 }

 function spawnBadHumans(){
  if (frameCount % 71 === 0){
    var bad = createSprite(random(150, 750),0,10,40);
    bad.velocityY = 6;
 
    
     // //generate random bads
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: bad.addImage(bad_human1);
               break;
       case 2: bad.addImage(bad_human);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the bad           
     bad.scale = 0.2;
     bad.lifetime = 100;
    
    //adding bads to the group
    badPeopleGroup.add(bad);
  }
 }

 

 




