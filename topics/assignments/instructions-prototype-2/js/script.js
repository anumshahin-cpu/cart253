/**
 * Amazing Beautiful Fantastic Prototype of an Abstract Clover
 * Anum Shahin
 * 
 * Drawing of a clover, but you know, abstract. 
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
    background(54, 145, 68);
    
    noStroke();

    drawClover();
}


/**
 * Declaring the parts of the clover and creating each part of this drawing
*/
function drawClover(){
    drawWhorl();
    drawPetal1();
    drawPetal2();
    drawPetal3();
    drawPetal4();

}

function drawWhorl(){
 push();
 fill(43, 130, 20);
 circle(200, 200, 25);
 pop();
}

function drawPetal1(){
    push();
    fill(43, 100, 57);
    triangle(400,198,400,209,250,200);
    pop();
}

function drawPetal2(){
    push();
    fill(43, 100, 57);
    triangle(0,210,0,195,155,200);
    pop();

}

function drawPetal3(){
    push();
    fill(43, 100, 57);
    triangle(190,0,200,150,200,0);
    pop();
}

function drawPetal4(){
    push();
    fill(43, 100, 57);
    triangle(150,1100,210,540,200,250);
    pop();
}
