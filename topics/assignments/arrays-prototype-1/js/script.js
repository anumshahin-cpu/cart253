/**
 * Confetti Explosion
 * Author Name
 * 
 * Confetti's falling from the sky!
 * wah
 */

"use strict";

// the confetti
let confetti = [];

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
    confetti.push(confetti);
}

/**
 * draw the confetti
*/
function draw() {

}