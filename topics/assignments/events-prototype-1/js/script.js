/**
 * Do NOT Press The Button
 * Anum Shahin
 * 
 * Oops, there's a typical red button on your screen, what happens if you press it? I don't recommend it. It might explode, what happens if you just wait instead?
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
        pressed: "#dc143c"
    },
    // explosion sound effect 
    soundEffect: undefined

}

// load sound effect

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
    background ("#cceeff");

    // button
    push ();
    noStroke();
    fill(button.fill);
    ellipse(button.x,button.y,button.size);
    pop();

}