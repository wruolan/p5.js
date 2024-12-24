//CLOUD ART
//tranquility in suffering.

//DESCRIPTION
//this program is intended to draw clouds during twilight. the first four brushes help facilitate the values of the clouds you will be drawing, varying between warm and cool tones for the clouds in that specific light. the other two are a dark and light pen, which allow you to draw details or characters -- whatever you like. i was inspired by los angeles sunsets.

//INSTRUCTIONS
//Q: light pink brush, large (DEFAULT)
//W: light pink brush
//E: light orange brush
//R: light lilac brush
//T: dark lavender brush, small
//Y: light pink brush, small

//reference section below

//keybinds
let keybind = 0;

//gradient color references
let topc, bottomc;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //background color - lilac and pink
  topc = color(101+random(60), 78, 163);
  bottomc = color(234,175,200);

  //for loop every line of canvas height
  for (let y = 0; y < windowHeight; y++) {
    //map function scaling y-value from (0,height) to (0,1)
    n = map(y, 0, windowHeight, 0, 1);
    //lerp color blends two colors
    let newcolor = lerpColor(topc, bottomc, n);
    //automating gradient horizontally
    stroke(newcolor);
    line(0, y, width, y);
  }
}

function draw() {
  if (mouseIsPressed) {
    if (keybind == 0) {
      noStroke();
      fill(235, 188, 208);
      circle(mouseX, mouseY, 100);
    } else if (keybind == 1) {
      noStroke();
      fill(235, 188, 208);
      circle(mouseX, mouseY, 60);
    } else if (keybind == 2) {
      noStroke();
      fill(245, 201, 207);
      circle(mouseX, mouseY, 60);
    } else if (keybind == 3) {
      noStroke();
      fill(222, 169, 212);
      circle(mouseX, mouseY, 60);
    } else if (keybind == 4) {
      stroke(86, 76, 112);
      strokeWeight(6);
      line(mouseX, mouseY, pmouseX, pmouseY);
    } else if (keybind == 5) {
      stroke(242, 208, 223);
      strokeWeight(6);
      line(mouseX, mouseY, pmouseX, pmouseY);
    } else {
      noStroke();
      fill(235, 188, 208);
      circle(mouseX, mouseY, 100);
    }
  }
}

function keyTyped() {
  let keyInput = key.toLowerCase();
  if (key == "q") {
    keybind = 0;
  }
  if (key == "w") {
    keybind = 1;
  }
  if (key == "e") {
    keybind = 2;
  }
  if (key == "r") {
    keybind = 3;
  }
  if (key == "t") {
    keybind = 4;
  }
  if (key == "y") {
    keybind = 5;
  }
}

//REFERENCES
//https://www.youtube.com/watch?v=EAY7S1tWbzc
