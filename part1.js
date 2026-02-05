function setup() {
  createCanvas(600, 400);

  
}

function draw() {

    background(191, 222, 170);
  
  
  //backgrond text shading
  textSize(21);
  //fill(49, 125, 72);
  fill(300);
  text("  if Crave food", 80-40, 40+30);
  text("  if Partner not home", 118-40, 65+30);
  text("  starve", 150-40, 88+30);
  text("  while Partner cooking or not home", 150-40, 110+30);
  text("  wait for food", 150-20, 135+30);
  text("  eat food", 55, 171+30);
  
  textSize(21);
  fill(0);
  text("  if Crave food", 80-40-1, 40+30-1);
  text("  if Partner not home", 118-40-1, 65+30-1);
  text("  starve", 150-40-1, 88+30-1);
  text("  while Partner cooking or not home", 150-40-1, 110+30-1);
  text("  wait for food", 150-20-1, 135+30-1);
  text("  eat food", 55-1, 171+30-1);
  
  

  
  
  //my x and y coordinates
  fill(0);
  textSize(10);
  text("X; "+ round(mouseX), 280,380);
  text("Y;"+ round(mouseY), 340,380);
  /*
  
eat food
  */
}