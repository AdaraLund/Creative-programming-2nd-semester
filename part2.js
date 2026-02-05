function setup() {
  createCanvas(400, 400);
  strokeWeight(0);
  background(167, 149, 176);
  


//circles variables

let cx = 20; // circle x value
let cy = 20; // circle y value
let cr = 600; // circle starting diameter
let cc = 1; //circle color


//starting at 0, going up to 16,
for (let i = 0; i <=16; i++){
 // circle(cx,cy,cr);
 // cr -= cr/4;
 
  if (cc==1){ // i dont know how its supposed to be done,  but i wanted it to change color between loops
    fill(182, 164, 191);
    cc = 0;
    circle(cx,cy,cr);
    cr -= cr/4;

  }  else {
      fill(166, 145, 176);
      cc++;
      circle(cx,cy,cr);
      cr -= cr/4;
      }

}

//bottom shape
  //bottom square
    fill(143, 124, 153);
    rect(0,200,400);
  
  //dark outer circles
    let horip = 0; 
    for (let i = 0; i<=7; i++){
    circle(horip, 210,60);
    horip += 55;
    }

  
  //medium inner circles
    fill(167, 149, 176);
    let horip1 = 0;
    for(let i = 0; i<=7; i++){
      circle(horip1,210,50);
      horip1 += 55;

    }
 

  //lighter inner circles
    fill(182, 164, 191);
    let horip2 = 0;
    for (let i = 0; i <=7; i++) {
      circle(horip2,210,40);
      horip2 += 55;

    }

  //3rd bottom
    fill(169, 150, 179);
    let horip3 = 30;
    for (let i = 0; i <=7; i++)      { //loop from 1-8
      circle(horip3,260,40);
      horip3 += 55;
    }

  //2nd bottom
    fill(150, 131, 161);
    let horip4 = 0;
    for (let i = 0; i <=7; i++)      { //loop from 1-8
      circle(horip4,310,40);
      horip4 += 55;
    }

  //bottom circles
    fill(137, 117, 148);
    let horip5 = 30;
    for (let i = 0; i <=7; i++)      { //loop from 1-8
      circle(horip5,360,40);
      horip5 += 55;
    }

  

  /* My attempt before using looping arrays

  /*
  fill(182, 164, 191);
  circle(20,20,600);
  
  fill(166, 145, 176);
  circle(20,20,500);
  
  fill(182, 164, 191);
  circle(20,20,400);
  
  fill(182, 164, 191);
  circle(20,20,300);
  
  fill(166, 145, 176);
  circle(20,20,325);
  
  fill(182, 164, 191);
  circle(20,20,250);
  
  fill(182, 164, 191);
  circle(20,20,225);
  
  fill(166, 145, 176);
  circle(20,20,180);
  
  fill(182, 164, 191);
  circle(20,20,150);
  
  fill(182, 164, 191);
  circle(20,20,120);
  
  fill(166, 145, 176);
  circle(20,20,100);
  
  fill(182, 164, 191);
  circle(20,20,80);
  
  fill(166, 145, 176);
  circle(20,20,60);
  
  
  fill(143, 124, 153);
  circle(20,20,50);
  
  

  //circles
  fill(182, 164, 191);
  circle(20,20,600);
  
  fill(166, 145, 176);
  circle(20,20,500);
  
  fill(182, 164, 191);
  circle(20,20,400);
  
  fill(182, 164, 191);
  circle(20,20,300);
  
  fill(166, 145, 176);
  circle(20,20,325);
  
  fill(182, 164, 191);
  circle(20,20,250);
  
  fill(182, 164, 191);
  circle(20,20,225);
  
  fill(166, 145, 176);
  circle(20,20,180);
  
  fill(182, 164, 191);
  circle(20,20,150);
  
  fill(182, 164, 191);
  circle(20,20,120);
  
  fill(166, 145, 176);
  circle(20,20,100);
  
  fill(182, 164, 191);
  circle(20,20,80);
  
  fill(166, 145, 176);
  circle(20,20,60);
  
  
  fill(143, 124, 153);
  circle(20,20,50);
  
  
    //dark outer circles
    circle(0,210,60);
    circle(55,210,60);
    circle(110,210,60);
    circle(165,210,60);
    circle(220,210,60);
    circle(275,210,60);
    circle(330,210,60);
    circle(385,210,60);
  
  //medium inner circles
    fill(167, 149, 176);
    circle(0,210,50);
    circle(55,210,50);
    circle(110,210,50);
    circle(165,210,50);
    circle(220,210,50);
    circle(275,210,50);
    circle(330,210,50);
    circle(385,210,50);

  //lighter inner circles
    fill(182, 164, 191);
    circle(0,210,40);
    circle(55,210,40);
    circle(110,210,40);
    circle(165,210,40);
    circle(220,210,40);
    circle(275,210,40);
    circle(330,210,40);
    circle(385,210,40);

  //3rd bottom
    fill(169, 150, 179);
    circle(0+30,260,40);
    circle(55+30,260,40);
    circle(110+30,260,40);
    circle(165+30,260,40);
    circle(220+30,260,40);
    circle(275+30,260,40);
    circle(330+30,260,40);
    circle(385+30,260,40);

  //2nd bottom circles
    fill(150, 131, 161);
    circle(0,210+100,40);
    circle(55,210+100,40);
    circle(110,210+100,40);
    circle(165,210+100,40);
    circle(220,210+100,40);
    circle(275,210+100,40);
    circle(330,210+100,40);
    circle(385,210+100,40);

  //bottom circles
    fill(137, 117, 148);
    circle(0+30,260+100,40);
    circle(55+30,260+100,40);
    circle(110+30,260+100,40);
    circle(165+30,260+100,40);
    circle(220+30,260+100,40);
    circle(275+30,260+100,40);
    circle(330+30,260+100,40);
    circle(385+30,260+100,40);
*/

}

function draw() {

  
  
  
}