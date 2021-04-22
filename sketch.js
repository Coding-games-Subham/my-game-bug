
   //creating the gamestate
   var gamestate = "name";
   var GM = 55;
   var CGB = 5;
   var easy,normal;
   var test;
   var count = 0;
   //>rules,playLv1,end,bEnd,name
   var plr,goal;
   var canvas;
   var ebulletsGroup,hbl,heroBulletr;
   var healthbarsb,healthbars;
   var ehealthbarsb,ehealthbars;
   var e2healthbarsb,e2healthbars;
   var e1,e2;
   var mw1,mw2,mw3,mw4;
   var m1,m2,m3,m35,m4,m5;
   var s1,s2,s3,s4,s5,s6;
   var plr_gravity; 
   var engine,world;
   var sew1,sew2,sew3,sew4;
   var button;
   var se1,se2;
   

function setup() {
  createCanvas(1300,710);
   button = createSprite(720,450,100,30);
   button.shapeColor= "orange"
 // engine=Engine.create();
//  world= engine.world;
 // var option={
 //   restitution:0.2
 // }
 // plr=Bodies.rectangle(25, 380,20,20,option);
 // World.add(world,plr);
  sew1 = createSprite(190,340,460,790);
 sew2 = createSprite(1255,340,460,790);
sew3 = createSprite(695,665,10000,100);
 sew4 = createSprite(695,15,10000,100);
 sew1.shapeColor = "white"
sew2.shapeColor = "white"
sew3.shapeColor = "white"
 sew4.shapeColor = "white"

   goal = createSprite(970, 320, 50, 50);
  goal.shapeColor="red";


   //creating the Groups
   ebulletsGroup = createGroup();
   hbl = createGroup();
   heroBulletr = createGroup();


   //group for adding the sprite
   Herohealthbars = createGroup();
   Lv1Enemyhealthbars = createGroup();
   Lv1Enemy = createGroup();
   MazeSideWalls = createGroup();
   Lv1Maze = createGroup();
   Lv1SubWalls = createGroup();
   HiddenWalls = createGroup();

   //groups for adding groups
   //Lv1 = createGroup();
  //creating the healthbars
   healthbarsb = createSprite(920, 50, 150, 20);
  healthbarsb.shapeColor = "#FF0000";
   healthbars = createSprite(920, 50, 150, 20);
  healthbars.shapeColor = "#2CE517";

  Herohealthbars.add(healthbarsb);
  Herohealthbars.add(healthbars);

  ehealthbarsb = createSprite(455, 425, 40, 6);
  ehealthbarsb.shapeColor = "#FF0000";
   ehealthbars = createSprite(455, 425, 40, 6);
  ehealthbars.shapeColor = "#2CE517";

  Lv1Enemyhealthbars.add(ehealthbarsb);
  Lv1Enemyhealthbars.add(ehealthbars)

  e2healthbarsb = createSprite(880, 205, 40, 6);
  e2healthbarsb.shapeColor = "#FF0000";
   e2healthbars = createSprite(880, 205, 40, 6);
  e2healthbars.shapeColor = "#2CE517";

  Lv1Enemyhealthbars.add(e2healthbarsb);
  Lv1Enemyhealthbars.add(e2healthbars)
  
  //creating the enemies
 e1 = createSprite(455, 455, 20, 40);
   e2 = createSprite(880, 235, 20, 40);
   Lv1Enemy.add(e1);
   Lv1Enemy.add(e2);
  //var e3 = createSsprite()
  
  //sprite for the player
   plr = createSprite(470, 570, 20, 20);
  plr.shapeColor = "blue";
  
  //sprites for the maze
  //>wall
  mw1 = createSprite(1440/2, 610, 600, 10);
  mw2 = createSprite(1020, 340, 10, 550);
   mw3 = createSprite(1440/2, 70, 600, 10);
  mw4 = createSprite(1440/3.4, 340, 10, 550);
   MazeSideWalls.add(mw1);
   MazeSideWalls.add(mw2);
   MazeSideWalls.add(mw3);
   MazeSideWalls.add(mw4);
  //>maze
  m1 = createSprite(655 , 480, 470, 10);
  m2 = createSprite(780, 360, 470, 10);
  m3 = createSprite(797, 260, 240, 10);
 m35 = createSprite(500, 260, 160, 10);
  m4 = createSprite(780, 170, 470, 10);
   m5 = createSprite(860, 310, 15, 90);
  Lv1Maze.add(m1);
  Lv1Maze.add(m2);
  Lv1Maze.add(m3);
  Lv1Maze.add(m35);
  Lv1Maze.add(m4);
  Lv1Maze.add(m5);

  //>subwalls
  
 s1 = createSprite(980, 565, 80, 80);
  s2 = createSprite(970, 150,10,10 );
  s3 = createSprite(490, 360, 125, 10);
   s4 = createSprite(912, 215, 10, 90);
   s5 = createSprite(550, 120 , 10, 90);
   s6 = createSprite(210, 42, 10, 90);
  s6.visible = false;
  s7 = createSprite(625,340,40,40)
  s7.visible = false;
  s8 =createSprite(453,235,50,50)
  s8.visible = false;
  Lv1SubWalls.add(s1);
  Lv1SubWalls.add(s2);
  Lv1SubWalls.add(s3);
  Lv1SubWalls.add(s5);
  Lv1SubWalls.add(s4);
  Lv1SubWalls.add(s6);
  Lv1SubWalls.add(s7);
  Lv1SubWalls.add(s8);
   
  HiddenWalls.add(sew1);
  HiddenWalls.add(sew2);
  HiddenWalls.add(sew3);

    Herohealthbars.setVisibleEach(false);
    Lv1Maze.setVisibleEach(false);
    Lv1Enemyhealthbars.setVisibleEach(false);
    Lv1Enemy.setVisibleEach(false);
    plr.visible=false;
    Lv1SubWalls.setVisibleEach(false);
    goal.visible=false;
    button.visible=false;
    se1 = createSprite(190,340,460,790);
    se2 = createSprite(1255,340,460,790);
     se1.shapeColor = "black"
     se2.shapeColor = "black"

     easy = createSprite(320,550,100,130);
     easy.shapeColor="green";
     easy.visible=false;
     normal = createSprite(720,450,100,30);
     normal.visible=false;


     test = createSprite(730,320,200,200);

}

function draw() {
  
 // Engine.update(engine);
  
  //text("MouseX : " + mouseX,450,100);
  //text("MouseY : " + mouseY,450,170);
  if(gamestate==="name"){
    
    background(rgb(175, 230, 105));
    text("MouseX : " + mouseX,450,100);
    text("MouseY : " + mouseY,450,120);
    
   button.visible=true;
   //button.shapeColor="orange"
   textSize(30)
   
    if(mousePressedOver(button)){
      gamestate="rules"
    }
    
    drawSprites();
    fill("black")
    text("Start",687,460);
    fill("red");
    textSize(60)
    text("Dead Legend",530,250)
  }
  if(gamestate==="rules"){
    button.visible=false;
    test.visible=false;
      background("black");
      fill("white");
      textSize(35);
      text("hi,", 590, 215);
      text("right arrow to move right", 610, 260);
      text(" left arrow to move left",620,300);
      text("up to jump",630,340);
      text("a to shoot left", 640, 380);
      text("s to shoot right", 650, 420);
      text("now press space to continue", 660, 460);
      //text("MouseX : " + mouseX,50,50);
      //text("MouseY : " + mouseY,50,70);
     console.log("in rules");
    
    }

    if(keyDown("space")){
      gamestate="playLv1";
    }

    if(gamestate==="selection"){
      test.visible=true;
      se1.visible=false;
      se2.visible=false;
      background("white");
      easy.visible=true
      normal.visible=true
      easy.depth=1;
      console.log(easy.depth);
      drawSprites();
    }

    if(gamestate==="playLv1"){
    background("white");
    text("MouseX : " + mouseX,450,100);
    text("MouseY : " + mouseY,450,120);
    
  
    //player
    
    Herohealthbars.setVisibleEach(true);
    Lv1Maze.setVisibleEach(true);
    Lv1Enemyhealthbars.setVisibleEach(true);
    Lv1Enemy.setVisibleEach(true);
    plr.visible=true;
    Lv1SubWalls.setVisibleEach(true);
    s1.visible=true
    goal.visible=true;
   // s2.visible=false;
   // s3.visible=false;
   // s4.visible=false
   s6.visible=false;
    s7.visible=false;
    s8.visible = false;

    //add Gravity
    plr.velocityY = plr.velocityY+0.15;
    //plr collide the walls
    plr.collide(e1);
    plr.collide(mw1);
    plr.collide(mw2);
    plr.collide(mw3);
    plr.collide(mw4);
    plr.collide(m1);
    plr.collide(m2);
    plr.collide(m3);
    plr.collide(m4);
    plr.collide(s1);
    plr.collide(m5);
    plr.collide(m35);
    plr.collide(e2);
    plr.collide(s3);
    plr.collide(s4);
    plr.collide(s8);
    s3.collide(m1);
    plr.collide(s7);
    text("press 1 to know the rules", 470, 25+25);
    if(keyDown("1")){
      fill("red");
      gamestate="rules";
    }
  
    if (plr.isTouching(s3)){
      if (keyDown("up")) {
        plr.y = plr.y-80;
    }

    }
   
    //movement
    //>right
    if (keyDown("right")) {
      plr.x = plr.x+3;
  }
    //>left
    if (keyDown("left")) {
      plr.x = plr.x-3;
    }
    //>jump
    if (keyDown("up")) {
        plr.y = plr.y-5;
    }
    
    //healthbars
    if (healthbars.width===0) {
      healthbars.destroy();
      healthbarsb.destroy();
      plr.destroy();
      plr.x = -33333;
      plr.y = -2234422;
      heroBulletr.setLifetimeEach(0);
      hbl.setLifetimeEach(0);
    }
    if (ebulletsGroup.overlap(plr)) {
      healthbars.width = healthbars.width - 1;
    }
    // console.log(s3.x);
    
    if (ehealthbars.width>0) {
      eBullets(e1);
      ebulletsGroup.setVelocityXEach(8);
    }
    if (hbl.overlap(e1)) {
       ehealthbars.width = ehealthbars.width - 1;
    }
    if (ehealthbars.width===0) {
    ehealthbars.destroy();
    s3.visible=true;
    s3.velocityY=+2
    ehealthbarsb.destroy();
    e1.x = -999999999999;
    e1.y = -999999999999;
    s7.visible = true;
    }
    
    //decreaseing the healthbars on hit
    
    if (e2healthbars.width>0&&ehealthbars.width === 0) {
      eBullets(e2);
      ebulletsGroup.setVelocityXEach(-8);
    }
    if (hbl.overlap(e2)||(heroBulletr.overlap(e2))) {
       e2healthbars.width = e2healthbars.width - 1;
    }
    if (e2healthbars.width===0) {
    e2healthbars.destroy();
    e2healthbarsb.destroy();
    s5.visible=false;
    goal.shapeColor="green"
    e2.x = -999999999999;
    e2.y = -999999999999;
    s8.visible = true;
    
    }
    
    //decreaseing the healthbars on hit
    if (s6.visible===true) {
      plr.collide(s6);
    }
    
    if (plr.isTouching(s2)) {
      s2.x=980;
      s2.y=160;
      //s6.visible = true;
      //s6.x = 590;
     //s6.y= 120 ;
      //console.log(s6.x);
      //s4.destroy();
      //plr.x = 570;
     // plr.y = 130;
     plr.x = 570;
     plr.y = 130;

    }
    if(s2.x==980&&s2.y==160){
      s5.visible = true;
     s5.x = 590;
      s5.y= 120 ;
      plr.collide(s5);
      //console.log(s6.x);
      s4.destroy();
     //plr.x = 570;
      //plr.y = 130;
    }
    
    textSize(20);
    drawSprites();
    //display the healthbars score
    if (healthbars.width > 0) {
      text(healthbars.width +"/150", 890, 57);
    }
    if (GM > 0) {
      textSize(19);
      fill("red");
      text("Gun bullet -" + CGB, 670, 25+3);
      text("/" + GM, 780, 28);
      if (keyWentDown("s")) {
        var bulletr = createSprite(plr.x, plr.y, 30, 5);
       
        if(bulletr.x>1020){
        bulletr.destroy();
        console.log( "in switch");
        
        }

        bulletr.velocityX = 10;
       // bulletr.lifetime = 60;
        CGB = CGB-1;
        heroBulletr.add(bulletr);
        
      }
      if (keyWentDown("a")) {
        var bulletl = createSprite(plr.x, plr.y, 30, 5);
        
        bulletl.velocityX = -10;
        bulletl.lifetime = 60;
        CGB = CGB-1;
        hbl.add(bulletl);
      }
    }
    if (CGB===0) {
      CGB = 5;
      GM = GM-5;
    }
    if (GM<=0&&e1.x===30&&e2.x===280) {
      gamestate = "bEnd";
    }
    if (plr.isTouching(goal)) {
      plr.destroy();
      gamestate = "end";
      
    }
       se1.visible=true;
       se2.visible=true;
  //se3.shapeColor = "white"
 // se4.shapeColor = "white"
    }
    if (gamestate == "end") {
      background("black");
      textSize(30);
      text("Booyah!", 100, 100);
      textSize(25);
      text("You have achieved rank 1", 50, 160);
      
    }
    if (gamestate==="bEnd") {
      background("green");
      fill("red");
      stroke("black");
      strokeWeight(5);
      textSize(30);
      text("You finished the gun bullets ", 20, 120);
      text("You lost", 193, 160);
    }
   
}

function eBullets(n) {
  if (World.frameCount%30===0) {
    var eBullet = createSprite(n.x, n.y, 30, 5);
    eBullet.velocityX = 8;
    eBullet.lifetime = 69;
    ebulletsGroup.add(eBullet);
  }
}