function setup() {
  createCanvas(800, 800);
  background(255, 178, 40);
  strokeWeight(5);
}

function draw() { 


 fill(225);
  ellipse(100, 100, 100, 100);

}
function setup() {
  createCanvas(800,700);
}

function draw() {
  background(255,178, 40);
  strokeWeight(3);
  //face
  fill(197, 140, 133);
  ellipseMode(CENTER);
  ellipse(400, 300, 350, 400);
  
  //eyes
  ellipseMode(CENTER);
  fill('black');
  ellipse(320, 300, 80, 60);
  ellipse(480, 300, 80, 60);
  
  //
  
  //eyebrows
 ellipseMode(CENTER);
  fill('black');
  ellipse(320, 250, 80, 10);
  ellipse(480, 250, 80, 10);
  
  
  
  	
  
  //month
  fill(245, 149, 185)
   arc(400, 380, 100, 200, 0, PI, CHORD);
  
 

 
}