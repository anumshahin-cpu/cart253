/**
 * Protoype 1
 * Anum Shahin
 * 
 * Drawing of a key (subject to change)
 * Don't remove a grade please.
 */

"use strict";

/**
 * Creating the canvas
 * */

function setup() {
    createCanvas(400, 400);
}

/**
 * Declaring the background
 */
function draw() {
    background(0, 0, 0);
    
    noStroke();

    drawKey();
}


/**
 * Declaring the parts of the key and creating each part of this drawing
*/
function drawKey(){
    drawBow();
    drawBlade();
    drawTip1();
    drawTip2();

}

function drawBow(){
 push();
 fill(218, 165, 32);
 circle(200, 150, 100);
 pop();
}

function drawBlade(){
    push();
    fill(218, 165, 32);
    rect(195, 175, 15, 100);
    pop();
}