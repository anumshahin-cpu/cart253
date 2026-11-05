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
const maximumConfettiDelay = 1 * 1000;
let confettiDelay = maximumConfettiDelay

/**
 * create the canvas
*/
function setup() {
    createCanvas(600, 600);

    setTimeout(addConfetti, confettiDelay);

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
        fill: random(r, g, b),
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