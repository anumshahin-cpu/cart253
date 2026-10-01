/**
 * Did Anyone Else Like Watching the DVD logo Almost Hit the Corner of the TV? No? Just Me?
 * Anum Shahin
 * 
 * Wow! It's the almost DVD logo! Almost! And it's hitting the corner!
 * I love being graded. Please grade this.
 * Used Snowflakes created by Aatish Bhatia and revised by Darren Kessner.
 */

"use strict";

//adding a tv border variable
let tvborder = {
    r: 128,
    g: 128,
    b: 128,
}

//adding a tv screen variable
let tvscreen = {
    r: 0,
    g: 0,
    b: 0,
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
    background(tvborder.r, tvborder.g, tvborder.b);
    tvborder.g == 1;
    tvborder.b == 1;
    tvborder.r == 1;

    push();
    rectMode(CENTER)
    noStroke();
    fill("black");
    square(tvscreen.x, tvscreen.y, tvscreen.size);
    pop();



}


