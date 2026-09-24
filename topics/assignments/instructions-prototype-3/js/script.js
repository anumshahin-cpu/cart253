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
    // drawEar1();
    // drawEar2();
    // drawEye1();
    // drawEye2();
    // drawPupil1();
    // drawPupil2();
    // drawEyeShine1();
    // drawEyeShine2();
    // drawEyebrow1();
    // drawEyebrow2();
    // drawBlush1();
    // drawBlush2();
    // drawMouthPart1();
    // drawMouthPart2();
    // drawMouthPart3();

}

function Head(){
 push();
 fill(255, 250, 250);
 circle(20, 20, 25);
 pop();
}

// function drawEar1(){
//     push();
//     fill(255, 250, 250);
//     triangle(400,198,400,209,250,200);
//     pop();
// }

// function drawEar2(){
//     push();
//     fill(255, 250, 250);
//     triangle(0,210,0,195,155,200);
//     pop();

// }

// function drawEye1(){
//     push();
//     fill(0, 0, 0);
//     triangle(190,0,200,150,200,0);
//     pop();
// }

// function drawEye2(){
//     push();
//     fill(0, 0, 0);
//     triangle(150,1100,210,540,200,250);
//     pop();
// }

// function drawPupil1(){
//     push();
//     fill(255, 255, 255);
//     circle(200, 200, 25);
//     pop();
// }

// function drawPupil2(){
//     push(); 
//     fill(255, 255, 255);
//     circle(300, 300, 40);
//     pop();
// }

// function drawEyeShine1(){
//     push();
//     fill(255, 255, 255);
//     arc(200, 200, 150, 150, 0, PI);
//     pop();
// }

// function drawEyeShine2(){
//     push();
//     fill(255, 255, 255);
//     arc(200, 200, 150, 150, 0, PI);
//     pop();
// }

// function drawEyebrow1(){
//     push();
//     fill(0, 0, 0);
//     arc(200, 200, 150, 150, 0, PI);
//     pop();

// }

// function drawEyebrow2(){
//     push();
//     fill(0, 0, 0);
//     arc(200, 200, 150, 150, 0, PI);
//     pop();
// }

// function drawBlush1(){
//     push();
//     fill(227, 157, 169);
//     ellipse(300, 300, 400);
//     pop();
// }

// function drawBlush2(){
//     push();
//     fill(227, 157, 169);
//     ellipse(300, 300, 400);
//     pop();
// }

// function drawMouthPart1(){
//     push();
//     fill(0, 0, 0);
//     arc(200, 200, 150, 150, 0, PI);
//     pop();
// }

// function drawMouthPart2(){
//     push();
//     fill(0, 0, 0);
//     arc(200, 200, 150, 150, 0, PI);
//     pop();
// }

// function drawMouthPart3(){
//     push();
//     fill(0, 0, 0);
//     arc(200, 200, 150, 150, 0, PI);
//     pop();
// }