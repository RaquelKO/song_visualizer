
let mySound, amplitude;

function preload() {
  mySound = loadSound('music.mp3');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  amplitude = new p5.Amplitude();
  // console.log("click the pink circle to start!");
}

function draw() {
  background('black');
  let level = amplitude.getLevel();
  let diameter = map(level, 0, 1, 10, 400);
  fill(231,84,128);
  noStroke();
  ellipse(displayWidth/2,displayHeight/2,diameter,diameter);
}

function mousePressed() {
  if (mySound.isPlaying()) {
    mySound.stop();
  } else {
    mySound.play();
  }
}


