/**
 * Can't Catch Me!
 * Anum Shahin
 * 
 * 
 * Grade please.
 */

"use strict";

// the ball
const ball = {
    // position and size
    x: undefined, // random
    y: undefined, // random
    size: 25,
    fill: "#71af80",
    collectSFX: undefined, // to be loaded
    delay: 1000 // how long before ball changes position
};



// set a timer

let gameTime = 20 * 1000

// game ends after 20 seconds

let gameOver = false;

// load sound effect

async function preload(){
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

}

// position ball randomly on the canvas

function resetBall(){
    ball.x = random(ball.size/2, width - ball.size/2);
    ball.y = random(ball.size/2, height - ball.size/2);
}

// starts the timer that will end the game
function startGameOverTimer(){
    setInterval(endGame, gameTime);
}

// ending the game

function endGame(){
    gameOver = true;
}

/**
 * display ball
*/
function draw() {
    background ("#eea1d3");

    // ball
    push ();
    noStroke();
    fill(ball.fill);
    ellipse(ball.x,ball.y,ball.size);
    pop();

}

// check if button is clicked to play the sound

function mousePressed(){
    // check if click is inside the ball
    const d = dist(mouseX, mouseY, ball.x, ball.y);
    const overlap = (d <ball.size/2);
    if (overlap) {
        
        
    }
}

// // make button unpressed
// function mouseReleased() {
//     button.fill = button.fills.unpressed;

// }

// function drawDeathScreen(){
//     if (mousePressed){
//         push();
//         textSize(BOLD);
//         textAlign(CENTER, CENTER);
//         text("YOU DIED", width/2, height/2);
//         pop();
//     }
// }

// function displayUI(){
//     if (gameOver) {
//         push();
//         fill("#ffffff");
//         textSize(64);
//         textStyle(BOLD);
//         textAlign(CENTER, CENTER);
//         text("YOU DIED", width/2, height/2);
//         pop();

//         push();
//         fill("#ffffff");
//         textSize(22);
//         textAlign(CENTER,BOTTOM);
//         text("Seriously, what were you thinking? I told you not to press it.")
//     }
// }

// // death screen

// function drawGameOver() {
//     push();
//     fill("#ffffff");
//     textSize(64);
//     textStyle(BOLD);
//     textAlign(CENTER, CENTER);
//     text("YOU DIED", width/2, height/2);
//     pop();

//     push();
//     fill("#ffffff");
//     textSize(24);
//     textStyle(BOLD);
//     textAlign(CENTER, BOTTOM);
//     text("Seriously, what were you thinking? I told you not to press it.")
// }

// function lose(){
//     gameOver = true;
// }

// function mousePressed(){
//     lose()
// }

// function mouseReleased(){
//     lose()
// }