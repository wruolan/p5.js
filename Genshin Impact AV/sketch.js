// SONDER
// Coexisting; same space, different times. No more and no less important than those who came before and those who will come after.
// Press ENTER to see into the character frames.


// You are the main character—the protagonist—the star at the center of your own unfolding story. You're surrounded by your supporting cast: friends and family hanging in your immediate orbit. 

// Scattered a little further out, a network of acquaintances who drift in and out of contact over the years. 

// But there in the background, faint and out of focus, are the extras. The random passersby. Each living a life as vivid and complex as your own. 

// They carry on invisibly around you, bearing the accumulated weight of their own ambitions, friends, routines, mistakes, worries, triumphs and inherited craziness. 

// When your life moves on to the next scene, theirs flickers in place, wrapped in a cloud of backstory and inside jokes and characters strung together with countless other stories you'll never be able to see. That you'll never know exists. 

// In which you might appear only once. As an extra sipping coffee in the background. As a blur of traffic passing on the highway. As a lighted window at dusk.



// set environment/character/sound/action variables
let env;
let k;
let kv;
let kqng;
let kqngv;
let t;
let tv;
let w;
let wv;
let xq;
let xv;
let yy;
let yyv;
let zl;
let zlv;

let magnolia;

let frame;
let chuang;

// preload assets function
function preload() {
  // environment/character
  env = loadImage('environment.gif'); 
  k = loadImage('kazuha.gif'); 
  kqng = loadImage('keqingningguang.gif');
  t = loadImage('thoma.gif');
  w = loadImage('wriothesley.gif');
  xq = loadImage('xingqiu.gif');
  yy = loadImage('yaoyao.gif');
  zl = loadImage('zhongli.gif');
  
  // voicelines
  kv = loadSound('kazuha.mp3'); 
  kqngv = loadSound('qingning.mp3');
  tv = loadSound('thoma.mp3');
  wv = loadSound('wrio_outing.mp3');
  xqv = loadSound('xingqiu.mp3');
  yyv = loadSound('yaoyao.mp3');
  zlv = loadSound('zhongli.mp3');
  
  // music
  magnolia = loadSound("magnolia.mp3");
}

function setup() {
  // set canvas size/frame rate/loop music
  createCanvas(640,480);
  frameRate(60);
  magnolia.loop();
  magnolia.setVolume(0.5);
  frame=0
}

function draw() {
  // draw environment
  image(env,0,0,640,480);
  
  // character if statements
  if (chuang==1) {
  kazuha();
  }
  if (chuang==2) {
  qingning();
  }
  if (chuang==3) {
  thoma();
  }
  if (chuang==4) {
  wrio();
  }
  if (chuang==5) {
  xingqiu();
  }
  if (chuang==6) {
  yaoyao();
  }
  if (chuang==7) {
  zhongli();
  }
  
  frame=frame+1
  print(chuang);
}


function keyPressed() {
  
  // stop playing all voicelines
  kv.stop(0);
  kqngv.stop(0)
  tv.stop(0);
  wv.stop(0);
  xqv.stop(0);
  yyv.stop(0);
  zlv.stop(0);
  
  // set keycode
  if (keyCode === ENTER) {
    // set variable for random int between 1-7
    chuang=int(random(1,8))
  }
  
  //voiceline if statements
  if (frame%720) {
    if (chuang==1) {
      kv.play();
      kv.stop(4);
    }
  }
  
  if (frame%720) {
    if (chuang==2) {
      setTimeout(() => {
      kqngv.play()
      }, 2500); 
      kqngv.stop(12)
    }
  }
  
  if (frame%180) {
    if (chuang==3) {
      setTimeout(() => {
      tv.play()
      }, 2000); 
      tv.stop(3)
    }
  }

  if (frame%120) {
    if (chuang==4) {    
      setTimeout(() => {
      wv.play()
      }, 6000); 
      wv.stop(2)
    }
  }

  if (frame%300) {
    if (chuang==5) {
      xqv.play()
      xqv.stop(5)
    }
  }
  
  if (frame%120) {
    if (chuang==6) {
      setTimeout(() => {
      yyv.play()
      }, 3500); 
      yyv.stop(2)
    }
  }

  if (frame%240) {
    if (chuang==7) {
      setTimeout(() => {
      zlv.play()
      }, 9500); 
      zlv.stop(4)
    }
  }
}

// set character and frame functions
function kazuha() {
  stroke(255);
  strokeWeight(15);
  rect(326,257,120,160);
  image(k,326,257,120,160);
}

function qingning() {
  stroke(255);
  strokeWeight(15);
  rect(180,314,120,160);
  image(kqng,180,314,120,160);
}

function thoma() {
  stroke(255);
  strokeWeight(15);
  rect(220,6,120,160);
  image(t,220,6,120,160);
}

function wrio() {
  stroke(255);
  strokeWeight(15);
  rect(44,241,120,160);
  image(w,44,241,120,160);
}

function xingqiu() {
  stroke(255);
  strokeWeight(15);
  rect(508,289,120,160);
  image(xq,508,289,120,160);
  frameRate(60);
}

function yaoyao() {
  stroke(255);
  strokeWeight(15);
  rect(430,25,120,160);
  image(yy,430,25,120,160);
}

function zhongli() {
  stroke(255);
  strokeWeight(15);
  rect(194,79,120,160);
  image(zl,194,79,120,160);
}