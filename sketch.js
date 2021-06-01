var bg, bgImg;
var cat, catImg, catImg2, catImg3;
var mouse, mouseImg, mouseImg2, mouseImg3;

function preload() {
    bgImg = loadImage("garden.png");
    catImg = loadImage("cat1.png");
    mouseImg = loadImage("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png", "mouse3.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadImage("cat4.png");
    mouseImg3 = loadImage("mouse4.png");

}

function setup(){
    createCanvas(975,705);
    
    //bg = createSprite(975/2, 705/2);
    //bg.addImage(bgImg);

    mouse = createSprite(90, 550);
    mouse.addImage(mouseImg);
    mouse.scale = 0.15;
    //mouse.debug = true;
    mouse.setCollider("rectangle",0,0,880,950);

    cat = createSprite(800,550);
    cat.addImage(catImg);
    cat.scale = 0.2;
    //cat.debug = true;
    cat.setCollider("rectangle", 0,0,1300,920);


    

}

function draw() {

    background(bgImg);
    
    //keyPressed();
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){ 
        cat.velocityX=0;
        cat.addAnimation("catHappy", catImg3);
        cat.x = 185;
        cat.changeAnimation("catHappy");
        mouse.addAnimation("mouseHappy", mouseImg3);
        mouse.changeAnimation("mouseHappy");
    }


    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    cat.addAnimation("catTeasing", catImg2);
    cat.changeAnimation("catTeasing");
    cat.velocityX = -4;
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");

  }
  
}
