var bg_img;
var web_img;
var treasure_img, treasure1_img;
var skeleton_img, skeleton2_img;
var pirate_img;
var pirate1_img;
var treasurebox;
var pirate;
var pirate_animation;
var skeleton;
function preload(){

  bg_img=loadImage("images/brownpath.jpg");
  web_img=loadImage("images/swb.png");
  treasure_img=loadImage("images/treasyre.png");
  treasure1_img=loadImage("images/uh.png");
  skeleton_img=loadImage("images/hhh.png");
  skeleton2_img=loadImage("images/skeleton-.png")
  pirate_img=loadImage("images/jake1.png");
  pirate1_img=loadImage("images/jake11.png");
  pirate_animation=loadAnimation(pirate_img, pirate1_img);

}
function setup() {
  createCanvas(1520,690);
  web1=createSprite(0,0,100,50);
  web2=createSprite(1200,0,20,20);
  web3=createSprite(1200,600,20,20);
  web4=createSprite(0,600,50,40);
  web1.addImage(web_img);
  web2.addImage(web_img);
  web3.addImage(web_img);
  web4.addImage(web_img);
  treasurebox=createSprite(800,200);
  treasurebox.addImage(treasure1_img);
  treasurebox.scale=0.4;
  
  pirate=createSprite(300,200);
 
 pirate.scale=0.7;

 skeleton=createSprite(500,400);
 skeleton.addImage(skeleton_img);
 skeleton.scale=0.5;

 pirate.debug=true;
 pirate.setCollider("rectangle",0,0,200,200);
 treasurebox.debug=true;
 treasurebox.setCollider("rectangle",0,0,300,300);

 wall1=createSprite(200,500,100,30);
 wall2=createSprite(300,70,30,400);
}

function draw() {
  background("brown");  

  pirate.x=mouseX;
  pirate.y=mouseY;
  if(keyDown('a'))
  {
  pirate.addImage(pirate_img);
  pirate.scale=0.5;
  }
  else
  {
  pirate.addImage(pirate1_img);
  
  }

  if(keyDown('w'))
  skeleton.addImage(skeleton2_img);
  else
  skeleton.addImage(skeleton_img);
  if(frameCount%50==0)
    {
    //treasurebox.addImage(treasure_img);
  }
  if(pirate.isTouching(treasurebox))
{
  treasurebox.addImage(treasure_img);
} 
else
treasurebox.addImage(treasure1_img);
drawSprites();
}

