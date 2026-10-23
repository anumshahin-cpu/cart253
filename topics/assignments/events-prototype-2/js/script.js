/**
 * Can't Catch Me!
 * Anum Shahin
 * 
 * Try to catch a ball that's teleporting around the screen rapidly.
 * Grade please.
 */

"use strict";

// the ball
const ball = {
    // position and size
    x: undefined, // random
    y: undefined, // random
    size: 30,
    fill: "#71af80",
    collectSFX: undefined, // to be loaded
    delay: 500 // how long before ball changes position
};

// current score
let score = 0;

// set a timer

let gameTime = 20 * 1000

// game ends after 20 seconds

let gameOver = false;


// load sound effect

async function preload() {
    ball.collectSFX = await loadSound("assets/sounds/collect.wav");
}



/**
 * Create canvas 
*/
async function setup() {
    createCanvas(500, 500);

    await preload();

    // reset the ball for it to be in a random place
    resetBall();
    // start timer for game to be over
    startGameOverTimer();

    ball.collectSFX.rate(0.8);

    setInterval(resetBall, ball.delay) // set time intervals for ball's location to be reset



}

// position ball randomly on the canvas, calls when timer is reset

function resetBall() {
    ball.x = random(ball.size / 2, width - ball.size / 2);
    ball.y = random(ball.size / 2, height - ball.size / 2);

}

// starts the timer that will end the game
function startGameOverTimer() {
    setTimeout(resetGame, gameTime);
}

// ending the game

function resetGame() {
    gameOver = true;
}

/**
 * display ball
*/
function draw() {
    background("#eea1d3");



    // if game is over, draw current ball
    if (gameOver) {
        drawGameOver();


    }
    // since game isn't over, continue to display ball and score
    else {
        drawScore();
        drawBall();
    }
}

// draw the ball
function drawBall() {
    // ball
    push();
    noStroke();
    fill(ball.fill);
    ellipse(ball.x, ball.y, ball.size);
    pop();
}

// displays current score at top left 
function drawScore() {
    push();
    fill("#ffffff");
    textSize(24);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(score, width / 8, height / 8);
    pop();
}

// draw the game over screen

function drawGameOver() {
    push();
    fill("#ffffff");
    textSize(24);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2);
    pop();
}


// check if ball is clicked 
function mousePressed() {
    // check if click is inside the ball
    const d = dist(mouseX, mouseY, ball.x, ball.y);
    const overlap = (d < ball.size / 2);
    if (overlap) {
        ball.collectSFX.play();
        score++;




    }
}
