var x=250
var y=200
function setup() {
  //create canvas
  createCanvas(800,700);
}

function draw() {
  
  //create background
  background(255,178, 40);
  //set stroke weight
  strokeWeight(3);
  //create text 'CLICK' for interaction hint
  fill('black')
  textFont('Helvetica');
  textSize(50);
  text('CLICK', 10,50);
  
  //hair1
  fill('black');
  rectMode(CENTER);
  rect(400,350 ,450,550, 300, 300);
  
  //clothes
  fill(97, 142, 193)
  rect(400,700,300,300,100);
  
  //neck
  fill(197, 140, 133)
  rect(400,500,100,200,50);
  
  //face
  fill(197, 140, 133);
  ellipseMode(CENTER);
  ellipse(400, 300, 350, 400);
  
  //eyes
  ellipseMode(CENTER);
  fill('0');
  ellipse(320, 300, 80, 60);//lift eye
  ellipse(480, 300, 80, 60);//right eye
  fill('black')
  ellipse(320, 300, 50);//lift eye
  ellipse(480, 300, 50);//right eye
  
  
  //glasses  
  noFill();
  rect(320, 300,100,70,20);
  line(370,300,430,300);
  rect(480, 300,100,70,20);
  
  //eyebrows
  fill('black');
  ellipseMode(CENTER);
  ellipse(480, 200, 80, 10);
  if (mouseIsPressed) {
    ellipse(320, x, 80, 10);
  } else {
    ellipse(320, y, 80, 10);
  }

  //nose
  fill(197, 140, 133)
  triangle(380, 350, 420, 350, 400, 320);

  //hair2
    fill('black');
  rectMode(CENTER);
  rect(400,130 ,200, 90, 300, 300);
  
  //mouth
  fill(245, 149, 185)
   
  if (mouseIsPressed) {
    ellipse(400,400,50);
  } else {
    arc(400, 380, 100, 200, 0, PI, CHORD);
    
  }
  
  //text;?
  if (mouseIsPressed) {
  fill(128, 14, 3);
  translate(500,100)
  rotate(PI / 4.0);
  textSize(200);
  text('?', 0, 0);
  } else {
    
    
  }

 
}