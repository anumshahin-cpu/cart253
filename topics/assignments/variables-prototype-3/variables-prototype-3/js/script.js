/**
 * Did Anyone Else Like Watching the DVD logo Almost Hit the Corner of the TV? No? Just Me?
 * Anum Shahin
 * 
 * Wow! It's the almost DVD logo! Almost! And it's hitting the corner! Almost!
 * I love being graded. Please grade this.
 * Used Snowflakes created by Aatish Bhatia and revised by Darren Kessner.
 */

"use strict";

// adding value 
let value = 0;

//adding a tv border variable
let tvborder = {
    //colour
    r: 128,
    g: 128,
    b: 128,
}

//adding a tv screen variable
let tvscreen = {
    //position and size
    x: 200,
    y: 200,
    size: 320,
    // colour
    fill: {
    r: 0,
    g: 0,
    b: 0,
    }
}

let dvdlogo = {
    //position and size
    x: 270,
    y: 250,
    size: 75,
    // colour
    fill: {
        r:0,
        g:255,
        b:0,
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
    //drawing background
    background(tvborder.r, tvborder.g, tvborder.b);
    tvborder.g == 1;
    tvborder.b == 1;
    tvborder.r == 1;

    dvdlogo.g == 1;
    dvdlogo.b == 1;
    dvdlogo.r == 1;

    //drawing tv screen
    push();
    rectMode(CENTER)
    noStroke();
    fill("black");
    square(tvscreen.x, tvscreen.y, tvscreen.size);
    pop();

    //drawing dvd logo
    push();
    rectMode(CENTER)
    noStroke();
    fill("lime");
    square(dvdlogo.x, dvdlogo.y, dvdlogo.size);
    pop();




}


