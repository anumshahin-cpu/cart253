/**
 * Can't Catch Me!
 * Anum Shahin
 * 
 * 
 * Grade please.
 */

"use strict";



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

    ball.collectSFX.rate(0.8);

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
    // check if click is inside the button
    const d = dist(mouseX, mouseY, button.x, button.y);
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