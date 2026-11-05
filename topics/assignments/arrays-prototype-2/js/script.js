/**
 * Confetti Explosion
 * Author Name
 * 
 * Confetti's falling from the sky!
 * wah
 */

"use strict";

// the fireworks
let fireworks = [];

// time between falling fireworks
const minimumFireworkDelay = 1 * 1000;
const maximumFireworkDelay = 0.001 * 1000;
let fireworkDelay = maximumFireworkDelay

/**
 * create the canvas
*/
function setup() {
    createCanvas(600, 600);



}

// add firework to array

function addFirework() {
    // create and add one piece of confetti
    const firework = createFirework();
    fireworks.push(firework);
}


//firework creation time
function createFirework() {
    const firework = {
        x: mouseX,
        y: mouseY,
        velocity: {
            x: random(100, -100),
            y: random(100, -100),
        },
        size: random(15, 40),
        hue: random(0, 360),
    };
    return firework;
}
/**
 * move that firework, and also show it ig
*/
function draw() {
    background("#000000")

    // draw that firework
    for (let firework of fireworks) {
        moveFirework(firework);
        drawFirework(firework);


    }
}

// move your firework
function moveFirework(firework) {
    firework.x += firework.velocity.x;
    firework.y += firework.velocity.y;
}

function drawFirework(firework) {
    push();
    noStroke();
    colorMode(HSB)
    fill(firework.hue, 100, 100);
    ellipse(firework.x, firework.y, firework.size);
    pop();

}

function mousePressed() {
    for (let i = 0; i < 100; i += 1) {
        addFirework()

    }


}
