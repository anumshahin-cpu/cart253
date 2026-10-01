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
    snowflakes.push(new Snowflake());
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

    for (let flake of snowflakes) {
        // update each snowflake position and display
        flake.update(currentTime);
        flake.display();
    }

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

// define snowflake class

class Snowflake {
    constructor () {
        this.posX = 0;
        this.posY = random (-height, 0);
        this.initialAngle = random (0, 360);
        this.size = random (2, 5);
        this.radius = sqrt (random(pow(width/2, 2)));
        this.color = color(random(200, 256), random (200, 256), random (200, 256));
    }

    update(time) {
    // define angulaar speed (degrees/second)

    let angularSpeed = 35;

    // calculate current angle
    let angle = this.initialAngle + angularSpeed * time;

    // x position follows a sine wave
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at different y speeds

    let ySpeed = 8 / this.size;
    this.posY += ySpeed;

    // when snowflake reaches the bottom, move it to the top
    if (this.posY > height) {
        this.posY = -50;
    }
}
display() {
    fill(this.color);
    noStroke();
    ellipse(this.posX, this.posY, this.size);
}
}

