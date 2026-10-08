/**
 * The Only Move Is Not To Play but Evil 
 * Anum Shahin, Alissa Horqque, Antony Hatem 
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Update the score and display the UI
 */
function draw() {
  background("#950e0e");
  
  // Only increase the score if the game is not over
  if (!gameOver) {
    // Score increases relatively slowly
    score += 0.05;
  }
  displayUI();
  if (score >= 10){
    gameOver = true;
  }
  
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
  if (gameOver) {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("You lose!", width/2, height/3);
    pop();
  }
  displayScore();
}

function lose() {
  // if(keyPressed){
  //   push();
  //   textsize(48);
  //   textStyle(BOLD);
  //   textAlign(CENTER, CENTER);
  //   text 
  // }
  gameOver = true;
}

function keyPressed(){
  lose()
}

function keyReleased(){
  lose()
}

function keyTyped(){
  lose()
}

function mouseMoved(){
  lose()
}

function mouseClicked(){
  lose()
}

function mousePressed(){
  lose()
}

function mouseWheel(){
  lose()
}

function mouseReleased(){
  lose()
}



/**
 * Display the score
 */
function displayScore() {
  push();
  textSize(48);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(floor(score), width/2, height/2);
  pop();
}