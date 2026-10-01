/**
 * Snow Day
 * Anum Shahin
 * 
 * Wow! It's snowing!
 * I love being graded. Please grade this.
 */

"use strict";

//adding a sky variable
let sky = {
    r: 170,
    g: 215,
    b: 225
}

//adding a sun variable
let sun = {
    // position and size
    x: 200,
    y: 100,
    size: 100,
    // colour
    fill: {
    r: 255,
    g: 255,
    b: 0
    }
}

//adding a hill variable
let hill = {
    // position and size
    x: 200,
    y: 550,
    size: 600,
    // colour
    fill: {
        r: 28,
        g: 191,
        b: 27,
    }
}

/**
 * Creating a canvas
*/
function setup() {
    createCanvas (400, 400);

}


/**
 * Draw and update the landscape
*/
function draw() {
    background(sky.r, sky.g, sky.b);
    sky.g -= 1;
    sky.b -= 1;
    sky. r-= 1;

    sun.fill.r == 1
    sun.fill.g == 1
    sun.fill.b += 1


    push();
    noStroke();
    fill(sun.fill.r, sun.fill.g, sun.fill.b);

    fill(sun.fill.r, sun.fill.g, sun.fill.b);

    // sun.y =+ random (1,1);
    // sun.x += random (1,1);

    ellipse(sun.x, sun.y, sun.size);
    pop();

    push();
    rectMode(CENTER)
    noStroke();
    fill("darkgreen");
    ellipse(hill.x, hill.y, hill.size);
    pop();


}