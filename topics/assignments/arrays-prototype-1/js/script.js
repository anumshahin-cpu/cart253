/**
 * Confetti Explosion
 * Author Name
 * 
 * Confetti's falling from the sky!
 * wah
 */

"use strict";

// the confetti
let confettis = [];

// time between falling confetti
const minimumConfettiDelay = 1 * 1000;
const maximumConfettiDelay = 0.0001 * 1000;
let confettiDelay = maximumConfettiDelay

/**
 * create the canvas
*/
function setup() {
    createCanvas(600, 600);

    setInterval(addConfetti, confettiDelay);

}

// add confetti to array

function addConfetti() {
    // create and add one piece of confetti
    const confetti = createConfetti();
    confettis.push(confetti);
}


//confetti creation time
function createConfetti() {
    const confetti = {
        x: random(0, width),
        y: -100,
        velocity: {
            x: 0,
            y: random(2, 10)
        },
        size: random(15, 40),
        hue: random(0, 360),
    };
    return confetti;
}
/**
 * move that confetti, and also show it ig
*/
function draw() {
    background("#91daef")

    // draw that confetti
    for (let confetti of confettis) {
        moveConfetti(confetti);
        drawConfetti(confetti);


    }
}

// move your confetti
function moveConfetti(confetti) {
    confetti.x += confetti.velocity.x;
    confetti.y += confetti.velocity.y;
}

function drawConfetti(confetti) {
    push();
    noStroke();
    colorMode(HSB)
    fill(confetti.hue, 100, 100);
    ellipse(confetti.x, confetti.y, confetti.size);
    pop();

}