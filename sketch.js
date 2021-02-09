 var back,backimg; 
 var cat,catimg,catimg1,cat;
 var mouse,mouseimg,mouseimg1,mousei;
function preload() {
    //load the images here
   backimg = loadImage("garden.png");
   catimg  = loadImage("cat1.png");
   mouseimg = loadImage("mouse1.png");
   catimg1  = loadAnimation("cat2.png","cat3.png");
   mouseimg1 = loadAnimation("mouse2.png","mouse3.png");
   cati = loadImage("cat4.png");
   mousei = loadImage("mouse4.png")


  }

function setup(){
     createCanvas(975,650);
     //create tom and jerry sprites here
     cat  = createSprite(800,560,10,10);
     cat.addImage("cat",catimg);
     cat.scale = 0.2;
     mouse = createSprite(150,600,10,10);
     mouse.addImage("mouse",mouseimg);
     mouse.scale = 0.1;
  }

function draw() {

    background(backimg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.addAnimation("cat",cati);
      cat.changeAnimation(cati);
      mouse.addAnimation("mouse",mousei);
      mouse.changeAnimation(mousei);
    }
    cat.velocityX = 0;
    drawSprites();
   
}


function keyPressed(){
 //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
  cat.velocityX = -60;
  cat.addAnimation("cat",catimg1);
  cat.changeAnimation(catimg1);
  mouse.addAnimation("mouse",mouseimg1);
  mouse.changeAnimation(mouseimg1);

 }

}
