var back,backImg;
var cat,mouse;
var mouse1Img;
var cat1Img,cat2Img;
function preload() {
    //load the images here
    backImg=loadImage("images/garden.png");
    cat1Img=loadImage("images/cat1.png");
    cat2Img=loadImage("images/cat2.png");
    cat3Img=loadImage("images/cat3.png");
    cat4Img=loadImage("images/cat4.png");
    mouse1Img=loadImage("images/mouse1.png");
    mouse2Img=loadImage("images/mouse2.png");
    mouse3Img=loadImage("images/mouse3.png");
    mouse4Img=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(750,700,10,10);
cat.addAnimation("cat1",cat1Img);
cat.scale=0.15;
mouse=createSprite(150,700,10,10);
mouse.addAnimation("mouse1",mouse1Img);
mouse.scale=0.15;

}

function draw() {

    background(backImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2
       && mouse.x-cat.x<mouse.width/2+cat.width/2
       && cat.y-mouse.y<cat.height/2+mouse.height/2
       && mouse.y-cat.y<mouse.height/2+cat.height/2){
           cat.addAnimation("cat4",cat4Img);
           cat.changeAnimation("cat4");
           mouse.addAnimation("mouse4",mouse4Img);
           mouse.changeAnimation("mouse4");
           cat.velocityX=0;
           cat.x=250;
    }

    drawSprites();
  
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("cat",cat2Img,cat3Img);
    cat.changeAnimation("cat");
    cat.scale=0.15;
    mouse.addAnimation("mouse",mouse2Img,mouse3Img);
    mouse.changeAnimation("mouse");
    
}

}
