// This code creates an interactive animation where words from an input text move in concentric circles around the canvas. The background and text colors invert based on the mouse's X-axis position, while the text size decreases as the mouse moves down the Y-axis. Users can input their own text, which is split into lines and words, and these words rotate at varying speeds, with the first word of each line highlighted in red (or cyan, depending on inversion).

let words = [];
let input, submitButton;
let baseSpeed = -0.005; // Increased speed for the innermost circle
let radius = 70; // Initial radius for the first line
let spacing = 25; // Spacing between words in the circle
let lineHeight = 70; // Slightly wider height between lines of text

function setup() {
  createCanvas(800, 800);
  background(0); // Black background

  // set input and default text
  input = createInput("Cool summer nights. Windows open. Lamps burning. /Fruit in the bowl. And your head on my shoulder. /These the happiest moments in the day. /Next to the early morning hours, of course. And the time just before lunch. And the afternoon, and early evening hours. /But I do love these summer nights. Even more, I think, than those other times. The work finished for the day. And no one who can reach us now. Or ever."); 
  input.position(20, 40);

  // set enter button
  submitButton = createButton("enter");
  submitButton.position(input.x + input.width + 20, 40);
  submitButton.mousePressed(updateWords);
  
  // set update function
  updateWords();
}

function draw() {
  // map mouseX to invert value (0 = normal, 255 = fully inverted)
  let invertValue = map(mouseX, 0, width, 0, 255);

  // background (black to white)
  background(invertValue); 

  // text
  textFont("Times New Roman");
  noStroke();

  // set for loop to update and draw per word
  for (let wordObj of words) {
    wordObj.update();
    wordObj.display(invertValue);
  }
}

function updateWords() {
  let newText = input.value();
  
  // set input for new text
  if (newText !== "") {
    words = []; // clear existing words
    radius = 70; // reset radius
    let splitLines = newText.split("/"); // split lines with line break [/]

    // set for loop for lines, words
    for (let line of splitLines) {
      let splitWords = line.trim().split(" "); // split words with space [ ]
      let wordCount = splitWords.length;
      let angleIncrement = TWO_PI / wordCount;
      let randomOffset = random(TWO_PI); // randomize starting angle

      // set for loop for position
      for (let i = 0; i < wordCount; i++) {
        let angle = angleIncrement * i + randomOffset;
        let x = width / 2 + radius * cos(angle);
        let y = height / 2 + radius * sin(angle);

        // determine first word in line
        let isFirstWord = (i === 0);
        
        // add word to array
        words.push(new Word(x, y, splitWords[i], angle, isFirstWord, radius));
      }
      
      radius += lineHeight; // spacing between circles
    }

    input.value(""); // clear input
  }
}

class Word {
  constructor(x, y, text, angle, isFirstWord, radius) {
    this.position = createVector(x, y);
    this.text = text;
    this.baseSize = 30; // font size
    this.angle = angle;
    this.isFirstWord = isFirstWord;
    this.radius = radius;
    this.angleOffset = 0;
    this.speed = baseSpeed * map(radius, 70, 3*height, 2, 8); // faster speed per concentric circle
  }

  // position and rotation speed
  update() {
    this.angleOffset += this.speed;
    let r = dist(this.position.x, this.position.y, width / 2, height / 2);
    this.position.x = width / 2 + r * cos(this.angle + this.angleOffset);
    this.position.y = height / 2 + r * sin(this.angle + this.angleOffset);
  }

  display(invertValue) {
    // map color inversion to mouseX, text size to mouseY
    let size = map(mouseY, 0, height, this.baseSize, 5);
    // Invert text color based on mouseX
    let textColor = 255 - invertValue; 
    
    // set color index and inversion index for first word
    if (this.isFirstWord) {
      fill(255 - invertValue, 0 + invertValue/2, 0 + invertValue/2);
    } else {
      fill(textColor);
    }

    textSize(size);
    textAlign(CENTER, CENTER);
    
    // display text
    text(this.text, this.position.x, this.position.y);
  }
}
