var mrect,srect;
var s1;
var s2;
var s3;
var s4;
var movobject,staobject;
function setup(){
  createCanvas(1200,600);
  mrect = createSprite(200,500,20,20);
  srect = createSprite(500,300,200,30);
  s1 = createSprite(100,20,50,50);
  s2 = createSprite(800,300,40,40);
  s3 = createSprite(600,20,50,50);
  s4 = createSprite(900,50,90,10);
  mrect.shapeColor = "yellow";
  srect.shapeColor = "yellow";
  s1.shapeColor ="yellow";
  s2.shapeColor="yellow";
  s3.shapeColor="yellow";

}

function draw(){
  background("cyan");
  mrect.x = mouseX;
  mrect.y = mouseY;
  if(touch(mrect,srect)){
    mrect.shapeColor ="red";
    srect.shapeColor ="red";
  }
  else if (touch(mrect,s1)){
    mrect.shapeColor ="red";
    s1.shapeColor ="red";

  }
  else if(touch(mrect,s2)){
    mrect.shapeColor ="red";
    s2.shapeColor ="red";
  }
  else if(touch(mrect,s3)){
    mrect.shapeColor ="red";
    s3.shapeColor ="red";
  }
  else if(touch(mrect,s4)){
    mrect.shapeColor ="red";
    s4.shapeColor ="red";
  }
  else{
    mrect.shapeColor="yellow";
    srect.shapeColor ="yellow";
    s1.shapeColor ="yellow";
    s2.shapeColor ="yellow";
    s3.shapeColor ="yellow";
    s4.shapeColor ="yellow";
  }
  

  drawSprites();
}

function touch(movobject,staobject){
  if(movobject.x-staobject.x < staobject.width/2 - movobject.width/2 &&
    staobject.x-movobject.x <staobject.width/2-movobject.width/2 &&
     movobject.y-staobject.y <staobject.height/2+movobject.height/2 &&
      staobject.y - movobject.y < staobject.height/2+movobject.height/2 ){
  return true;
 }

 else{
  return false;
   
 }

}



