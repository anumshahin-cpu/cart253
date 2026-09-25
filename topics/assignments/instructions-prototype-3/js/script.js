/**
 * Amazing Beautiful Fantastic Prototype of Chiikawa
 * Anum Shahin
 * 
 * Drawing of a Chiikawa, a very cute character. 
 * Don't remove a grade please.
 */

"use strict";

/**
 * Creating the canvas
 * */

function setup(){
    createCanvas(400, 400);
}


/**
 * Declaring the background
 */
function draw(){
    background(240, 177, 198);
    
    noStroke();

    drawChiikawa();
}


/**
 * Declaring the parts of Chiikawa and creating each part of this drawing
*/
function drawChiikawa(){
    drawHead();
    drawEar1();
    drawEar2();
    drawEye1();
    drawEye2();
    drawPupil1();
    drawPupil2();
    drawEyeShine1();
    drawEyeShine2();
    drawEyebrow1();
    drawEyebrow2();
    drawBlush1();
    drawBlush2();
    drawMouthPart1();
    drawMouthPart2();
    drawMouthPart3();

}

function drawHead(){
 push();
 fill(255, 250, 250);
 ellipse(200, 200, 225, 180);
 pop();
}

function drawEar1(){
    push();
    fill(255, 250, 250);
    circle(155, 115, 50);
    pop();
}

function drawEar2(){
    push();
    fill(255, 250, 250);
    circle(255, 115, 50);
    pop();

}

function drawEye1(){
    push();
    fill(0, 0, 0);
    circle(247, 185, 25);
    pop();
}

function drawEye2(){
    push();
    fill(0, 0, 0);
    circle(165, 185, 25);
    pop();
}

function drawPupil1(){
    push();
    fill(255, 255, 255);
    circle(165, 180, 12);
    pop();
}

function drawPupil2(){
    push(); 
    fill(255, 255, 255);
    circle(247, 180, 12);
    pop();
}

function drawEyeShine1(){
    push();
    fill(255, 255, 255);
    arc(247, 190, 12, 5, 0, PI);
    pop();
}

function drawEyeShine2(){
    push();
    fill(255, 255, 255);
    arc(165, 190, 12, 5, 0, PI);
    pop();
}

function drawEyebrow1(){
    push();
    fill(0, 0, 0);
    arc(167, 150, -15, 3, 0, TWO_PI);
    pop();

}

function drawEyebrow2(){
    push();
    fill(0, 0, 0);
    arc(244, 150, -15, 3, 0, TWO_PI);
    pop();
}

function drawBlush1(){
    push();
    fill(227, 157, 169);
    ellipse(150, 210, 35, 20);
    pop();
}

function drawBlush2(){
    push();
    fill(227, 157, 169);
    ellipse(257, 210, 35, 20);
    pop();
}

function drawMouthPart1(){
    push();
    fill(0, 0, 0);
    arc(200, 215, 10, 5, -20, PI);
    pop();
}
function drawMouthPart2(){
    push();
    fill(0, 0, 0);
    arc(207, 215, 10, 5,0, PI);
    pop();
}

function drawMouthPart3(){
    push();
    fill(0, 0, 0);
    arc(204, 225, 10, 3, 0, PI);
    pop();
}