var m,f
function setup() {
  createCanvas(900,1000);
  m=createSprite(150, 200, 50, 50);
  f=createSprite(750, 200, 50, 50);
  m.velocityX=20
  f.velocityX=-20 
}

function draw() {
  background(7);

  if(m.x-f.x<m.width/2+f.width/2 && f.x-m.x<f.width/2+m.width/2){
  m.velocityX=-20
  f.velocityX=+20


  }

  drawSprites();
}