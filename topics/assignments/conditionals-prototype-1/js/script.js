/**
 * Remember That Game Reaxxion? Well Here's the Knockoff!
 * Anum Shahin
 * 
 * I live in nostalgia and I haven't been able to play Reaxxion in forever so this is the next best thing.
 * Let the grading begin!!!
 */

"use strict";

const ball = {
    // position and size
    x: 200,
    y: 200,
    size: 50,
    // colour
    fill: {
        r: 128,
        g: 128,
        b: 128
    }
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 50,
    fill: {
        r: 128.
        g: 128,
        b: 128
    }
};

/**
 * // create the canvas!!
*/
function setup() {
    createCanvas(400, 400);

}


/**
 * drawing the background, the board, and the ball
*/
function draw() {
    background("#000000")

    // move user rectangle
    moveBall();
    moveUser();

    // draw user and ball
    drawBall();
    drawUser();

}

// sets user position to mouse position