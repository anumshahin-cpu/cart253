/**
 * Amazing Fantastic Beautiful Spectacular Lovely Perfect Heart Fluttering Nice Landscape 
 * Alissa Horqque Antony Hatem Anum Shahin
 * 
 * Not true, here's our description right in the flesh. 
 * Grade us please.
 */

"use strict";

/**
 * Creating the canvas
*/

function setup() {
  createCanvas(400, 400);
}


/**
 * Declaring the landscape
*/
function draw() {
  background(7, 61, 141);

  noStroke();

  drawLandscape();
} 

/**
 * Creating each part of this drawing
*/
function drawLandscape(){
  drawGround();
  drawMoon();
  drawTree();
  drawTent();
  drawTentEntrance();
}

function drawGround(){
  push();
  fill(3, 18, 41);
  rect(-200,320,800,400);
  pop();
}

function drawMoon(){
  push();
  fill(255, 255, 204);
  circle(100, 100, 100);
  pop();
}

function drawTree(){
  push();
  fill (3,18,41);
  triangle(105,325,180,325,140,230)
  pop();
}

function drawTent(){
  push();
  fill (153,76,0);
  //triangle(300,400, 400, 345, 350, 230)
  triangle(210,345, 380, 345, 300, 230)
  pop();
}

function drawTentEntrance(){
  push();
  fill(3,18,41);
  ellipse (300, 350, 80, 100)
  pop();
}