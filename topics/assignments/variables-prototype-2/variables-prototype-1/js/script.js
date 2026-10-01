/**
 * A Snowy Night
 * Anum Shahin
 * 
 * Wow! It's snowing!
 * I love being graded. Please grade this.
 * Used Snowflakes created by Aatish Bhatia and revised by Darren Kessner.
 */

"use strict";

//adding a sky variable
let sky = {
    r: 0,
    g: 0,
    b: 0,
}

// adding array to hold snowflake objects
let snowflakes = [];

// //adding a sun variable
// let sun = {
//     // position and size
//     x: 200,
//     y: 100,
//     size: 100,
//     // colour
//     fill: {
//     r: 255,
//     g: 255,
//     b: 0
//     }
// }

//adding one snowyhill variable
let snowyhill = {
    // position and size
    x: 200,
    y: 550,
    size: 600,
    // colour
    fill: {
        r: 225,
        g: 225,
        b: 255,
    }
}

// //adding snowflake variables
// let snowflake1 = {
//     //position and size
//     x: 10,
//     y: -400,
//     size: 100,
//     speed: 1,
//     // colour
//     fill: {
//         r: 255,
//         g: 250,
//         b: 250,
//     }
// };
/**
 * Creating a canvas
*/
function setup() {
    createCanvas (400, 400);

    angleMode (DEGREES);

// create snowflake objects
for (let i = 0; i < 300; i++) {
    // add a new snowflake object to the array
    snowflakes.push (new snowflakes());
}
// create screen reader accessible description
describe ('Snowflakes falling on a black background.');
}



/**
 * Draw and update the landscape
*/
function draw() {
    background(sky.r, sky.g, sky.b);
    sky.g == 1;
    sky.b == 1;
    sky.r == 1;

    // update and display each snowflake in the array
    let currentTime = frameCount / 60;

    // sun.fill.r == 1
    // sun.fill.g == 1
    // sun.fill.b == 1


    // push();
    // noStroke();
    // fill(sun.fill.r, sun.fill.g, sun.fill.b);

    // fill(sun.fill.r, sun.fill.g, sun.fill.b);

    // sun.y =+ random (1,1);
    // sun.x += random (1,1);

    // snowflake1.y += snowfllake1.speed;

    // ellipse(sun.x, sun.y, sun.size);
    // pop();



    push();
    rectMode(CENTER)
    noStroke();
    fill("snow");
    ellipse(snowyhill.x, snowyhill.y, snowyhill.size);
    pop();



}