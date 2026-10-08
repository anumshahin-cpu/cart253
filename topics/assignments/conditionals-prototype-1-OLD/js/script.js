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
        b: 128,
    }
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    w: 75,
    h: 55,
    fill: {
        r: 128,
        g: 128,
        b: 128,
    }
};

/**
 * // create the canvas!!
*/
function setup() {
    createCanvas(400, 400);

};

rectMode(CENTER);


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
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}


function moveBall(){
    const d = dist(user.x, user.y, ball.x, ball.y);
    // const overlap = (d < user.size / 2 + ball.size / 2);
    const overlap = (userRect.x + userRect.w / 2 > ball.x - ball.y / 2)
        (user.x - user.w/2 < ball.x + ball.size/2)
        (user.y + user.h/2 < ball.y + ball.size/2)
        (user.y - user.h/2 < ball.y + ball.size/2
    )
    


    if(overlap){

        if(user.x < ball.x){
            ball.x += 1;
        }
        if(user.x > ball.x){
            ball.x -= 1;
         }
         if(user.y < ball.y){
            ball.y += 1;
         }
         if(user.y > ball.y){
            ball.y -= 1;
         }
    }
};

// displays the user rectangle

function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    rect(user.x, user.y, user.w, user.h)
    pop();
};

// displays the ball circle

function drawBall(){
    push();
    noStroke();
    fill(ball.fill);
    ellipse(ball.x, ball.y, ball.size);
    pop();
}