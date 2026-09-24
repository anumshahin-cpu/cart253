/**
 * Amazing Beautiful Fantastic Prototype of an Abstract Flower
 * Anum Shahin
 * 
 * Drawing of a flower, but you know, abstract. 
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
    background(149, 185, 199);
    
    noStroke();

    drawFlower();
}


/**
 * Declaring the parts of the flower and creating each part of this drawing
*/
function drawFlower(){
    drawWhorl();
    drawPetal1();
    drawPetal2();
    drawPetal3();
    drawPetal4();
    drawPetal5();

}

function drawWhorl(){
 push();
 fill(253, 216, 8);
 circle(200, 200, 100);
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