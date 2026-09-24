/**
 * Amazing Beautiful Fantastic First Prototype of a Key
 * Anum Shahin
 * 
 * Drawing of a key
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
    drawHole();

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
    rect(195, 190, 15, 100);
    pop();
}

function drawTip1(){
    push();
    fill(218, 165, 32);
    rect(205, 255, 20, 10);
    pop();

}

function drawTip2(){
    push();
    fill(218, 165, 32);
    rect(205, 280, 20, 10);
    pop();
}

function drawHole(){
    push();
    fill(0, 0, 0);
    circle(200, 125, 22);
    pop();
}