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
    drawPetal6();

}

function drawWhorl(){
 push();
 fill(253, 216, 8);
 circle(200, 200, 100);
 pop();
}

function drawPetal1(){
    push();
    fill(104, 174, 189);
    rect(195, 190, 15, 100);
    pop();
}

function drawPetal2(){
    push();
    fill(104, 174, 189);
    rect(205, 255, 20, 10);
    pop();

}

function drawPetal3(){
    push();
    fill(104, 174, 189);
    rect(205, 280, 20, 10);
    pop();
}

function drawPetal4(){
    push();
    fill(104, 174, 189);
    rect(200, 125, 22, 10);
    pop();
}

function drawPetal5(){
    push();
    fill(104, 174, 189);
    rect(300, 140, 22, 30);
    pop();
}

function drawPetal6(){
    push();
    fill(104, 174, 189);
    rect(300, 140, 22, 30);
    pop();
}