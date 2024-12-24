//hey there~ this is jason todd, the second robin! jason first meets batman when he was stealing the last tire off the batmobile. he likes reading and mac and cheese, and calls wonder woman 'wondy'. 
//he says that: "i'm robin and being robin gives me magic."

//click to see his future!

//fontname
var ReenieBeanie;

function setup() {
  createCanvas(600, 600);
  background(150, 224, 255);

  fill(170, 0, 0);
  strokeWeight(6);
  //armor
  quad(123, 378, 268, 599, 424, 599, 368, 227);

  fill(232, 169, 125);
  strokeWeight(6);
  //neck
  quad(123, 378, 250, 497, 299, 512, 365, 424);

  fill(255, 236, 208);
  strokeWeight(0);
  //neck
  triangle(250, 497, 299, 512, 365, 424);

  strokeWeight(6);
  line(250, 497, 299, 512);
  line(299, 512, 365, 424);

  fill(0);
  //robin symbol
  ellipse(397, 512, 90, 95);

  stroke(255, 206, 0);
  line(387, 485, 377, 532);
  line(387, 485, 417, 492);
  line(417, 502, 384, 512);
  line(384, 512, 417, 539);

  fill(255, 206, 0);
  strokeWeight(6);
  stroke(0);
  //cape
  quad(-200, 599, 268, 599, 250, 496, 123, 378);
  quad(368, 227, 414, 599, 504, 599, 529, 333);

  strokeWeight(6);
  fill(0);
  //hair fill
  quad(72, 0, 46, 273, 455, 234, 435, 0);

  fill(255, 236, 208);
  strokeWeight(6);
  stroke(255, 236, 208);
  //face
  quad(79, 353, 90, 275, 308, 132, 318, 453);
  triangle(308, 132, 318, 463, 457, 236);

  strokeWeight(6);
  stroke(0);
  //jaw
  curve(42, 136, 79, 353, 318, 453, 300, 300);
  curve(180, 273, 318, 453, 434, 272, 98, 20);

  fill(255, 143, 135);
  //mouth
  curve(200, 160, 274, 389, 348, 366, 400, 160);
  curve(200, 420, 274, 389, 348, 366, 400, 360);

  fill(5, 0, 255);
  //hair
  curve(480, 37, 72, 0, 46, 273, 388, 444);
  curve(156, 0, 435, 0, 455, 234, 168, -78);

  fill(0);
  //hair shadows
  curve(150, 200, 72, 0, 46, 273, 150, 300);
  curve(400, 0, 435, 0, 455, 234, 400, 200);

  stroke(5, 0, 255);
  strokeWeight(24);
  fill(0);
  //hair highlights
  curve(-100, -300, 47, 98, 459, 92, 875, 800);

  stroke(0);
  strokeWeight(6);
  fill(255, 236, 208);
  //hairline
  curve(300, 500, 90, 275, 308, 132, 300, 700);
  curve(300, 300, 308, 132, 455, 234, 570, 860);

  //bangs
  fill(5, 0, 255);
  curve(500, 500, 220, 224, 308, 131, 500, 900);
  curve(410, 400, 308, 132, 380, 191, 200, 700);
  fill(255, 236, 208);
  curve(300, 500, 220, 225, 308, 132, 450, 650);
  curve(110, 300, 306, 131, 380, 191, 400, 400);

  //outer ear
  curve(342, 216, 88, 353, 90, 275, 594, 563);
  //outer ear
  fill(232, 169, 125);
  strokeWeight(0);
  curve(292, 216, 89, 333, 89, 295, 494, 533);

  //nose
  fill(232, 169, 125);
  strokeWeight(0);
  curve(200, 316, 306, 320, 315, 348, 200, 413);

  //mask
  fill(255);
  strokeWeight(24);
  curve(200, 0, 124, 299, 308, 306, 400, 0);
  curve(300, 0, 308, 306, 445, 234, 200, 0);
  curve(300, 700, 124, 299, 308, 306, 400, 599);
  curve(300, 700, 308, 306, 445, 234, 400, 556);
}

function preload() {
  ReenieBeanie = loadFont("ReenieBeanie-Regular.ttf");
}

function draw() {
  if (mouseIsPressed) {
    background(64, 69, 71);

    //laugh
    textSize(100);
    textStyle(BOLD);
    textFont(ReenieBeanie);
    fill(110, 9, 9);
    strokeWeight(0);
    text("HA", random(599), random(599));

    //laugh
    textSize(150);
    textStyle(BOLD);
    textFont(ReenieBeanie);
    fill(110, 9, 9);
    strokeWeight(0);
    text("HA", random(599), random(599));

    //laugh
    textSize(210);
    textStyle(BOLD);
    textFont(ReenieBeanie);
    fill(110, 9, 9);
    strokeWeight(0);
    text("HA", random(599), random(599));

    //laugh
    textSize(360);
    textStyle(BOLD);
    textFont(ReenieBeanie);
    fill(110, 9, 9);
    strokeWeight(0);
    text("HA", random(599), random(599));

    fill(170, 0, 0);
    strokeWeight(6);
    //armor
    quad(123, 378, 268, 599, 424, 599, 368, 227);

    fill(232, 169, 125);
    strokeWeight(6);
    //neck
    quad(123, 378, 250, 497, 299, 512, 365, 424);

    fill(255, 236, 208);
    strokeWeight(0);
    //neck
    triangle(250, 497, 299, 512, 365, 424);

    strokeWeight(6);
    //neck
    line(250, 497, 299, 512);
    line(299, 512, 365, 424);

    fill(0);
    //robin symbol circle
    ellipse(397, 512, 90, 95);

    stroke(255, 206, 0);
    //robin symbol R
    line(387, 485, 377, 532);
    line(387, 485, 417, 492);
    line(417, 502, 384, 512);
    line(384, 512, 417, 539);

    fill(255, 206, 0);
    strokeWeight(6);
    stroke(0);
    //cape
    quad(-200, 599, 268, 599, 250, 496, 123, 378);
    quad(368, 227, 414, 599, 504, 599, 529, 333);

    strokeWeight(6);
    fill(0);
    //hair fill
    quad(72, 0, 46, 273, 455, 234, 435, 0);

    fill(255, 236, 208);
    strokeWeight(6);
    stroke(255, 236, 208);
    //face
    quad(79, 353, 90, 275, 308, 132, 318, 453);
    triangle(308, 132, 318, 463, 457, 236);

    fill(255, 236, 208);
    strokeWeight(6);
    stroke(0);
    //jaw
    curve(42, 136, 79, 353, 318, 453, 300, 300);
    curve(180, 273, 318, 453, 434, 272, 98, 20);

    fill(181, 141, 130);
    strokeWeight(0);
    //swollen eye
    ellipse(205, 298, 170, 135);

    fill(110, 9, 9);
    strokeWeight(0);
    //blood
    quad(315, 346, 325, 335, 325, 382, 315, 379);

    fill(189, 85, 77);
    strokeWeight(6);
    //mouth
    curve(200, 510, 284, 399, 338, 388, 400, 460);
    curve(200, 420, 284, 399, 338, 388, 400, 360);

    fill(110, 9, 9);
    strokeWeight(0);
    //blood
    quad(284, 401, 295, 400, 295, 452, 284, 450);

    fill(5, 0, 255);
    strokeWeight(6);
    //hair
    curve(480, 37, 72, 0, 46, 273, 388, 444);
    curve(156, 0, 435, 0, 455, 234, 168, -78);

    fill(0);
    //hair shadows
    curve(150, 200, 72, 0, 46, 273, 150, 300);
    curve(400, 0, 435, 0, 455, 234, 400, 200);

    stroke(5, 0, 255);
    strokeWeight(24);
    fill(0);
    //hair highlights
    curve(-100, -300, 47, 98, 459, 92, 875, 800);

    stroke(0);
    strokeWeight(6);
    fill(255, 236, 208);
    //hairline
    curve(300, 500, 90, 275, 308, 132, 300, 700);
    curve(300, 300, 308, 132, 455, 234, 570, 860);

    //bangs
    fill(5, 0, 255);
    curve(500, 500, 220, 224, 308, 131, 500, 900);
    curve(410, 400, 308, 132, 380, 191, 200, 700);
    fill(255, 236, 208);
    curve(300, 500, 220, 225, 308, 132, 450, 650);
    curve(110, 300, 306, 131, 380, 191, 400, 400);

    //outer ear
    curve(342, 216, 88, 353, 90, 275, 594, 563);
    //outer ear
    fill(232, 169, 125);
    strokeWeight(0);
    curve(292, 216, 89, 333, 89, 295, 494, 533);

    //nose
    fill(232, 169, 125);
    strokeWeight(0);
    curve(200, 316, 306, 320, 315, 348, 200, 413);

    //mask
    fill(255);
    strokeWeight(24);
    curve(200, 0, 124, 299, 308, 306, 400, 0);
    curve(300, 0, 308, 306, 445, 234, 200, 0);
    curve(100, 300, 124, 299, 308, 306, 200, 399);
    curve(300, 700, 308, 306, 445, 234, 400, 556);
    
  }
}

//so here's a joke. you might've heard it before. it goes like this:

//a boy walks into a city and eventually meets a clown. the clown says,

//"doesn't this joke usually start in a bar?" and pulls out a crowbar, which isn't very funny but nobody ever said this was a very good clown.

//a boy walks into an alleyway,

//or a warehouse,

//00:03

//and meets a length of metal that might be a tire iron and might be a murder weapon.

//00:02

//a boy walks into a crowbar.

//00:01

//you can probably guess the punchline.

//00:00

//here's another joke.

//his name is jason todd.
