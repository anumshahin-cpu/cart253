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
    triangle(105,325,180,325,140,230);
    pop();
}

function drawPetal2(){
    push();
    fill(104, 174, 189);
    triangle(105,325,180,325,140,230);
    pop();

}

function drawPetal3(){
    push();
    fill(104, 174, 189);
    triangle(190,0,200,150,200,0);
    pop();
}

function drawPetal4(){
    push();
    fill(104, 174, 189);
    triangle(150,1200,210,550,200,250);
    pop();
}
