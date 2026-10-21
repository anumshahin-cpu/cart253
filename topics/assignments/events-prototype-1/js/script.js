/**
 * Do NOT Press The Button
 * Anum Shahin
 * 
 * Oops, there's a typical red button on your screen, what happens if you press it? I don't recommend it. 
 * Grade please.
 */

"use strict";

// create your button
const button = {
    // position and size
    x: 250,
    y: 250,
    size: 250,
    // colours
    fill: "#ff0000",
    fills:{
        unpressed: "#ff0000",
        pressed: "#8b0000"
    },
    // explosion sound effect 
    soundEffect: undefined

}


// // set a timer

// let time = 10 * 1000

// // game ends after 10 seconds

// let gameOver = false;

// // load sound effect

// // add death screen
// let deathScreen = false;

async function preload(){
    button.soundEffect = await loadSound("assets/sounds/explosion.wav");
}



/**
 * Create canvas 
*/
async function setup() {
    createCanvas(500, 500);

    await preload();

    button.soundEffect.rate(0.8);

}


/**
 * display button
*/
function draw() {
    background ("#000080");

    // button
    push ();
    noStroke();
    fill(button.fill);
    ellipse(button.x,button.y,button.size);
    pop();

}

// check if button is clicked to play the sound

function mousePressed(){
    // check if click is inside the button
    const d = dist(mouseX, mouseY, button.x, button.y);
    const overlap = (d <button.size/2);
    if (overlap) {
        button.soundEffect.play();
        button.fill = button.fills.pressed;
        
    }
}

// make button unpressed
function mouseReleased() {
    button.fill = button.fills.unpressed;

}

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