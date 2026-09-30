/**
 * From Day to Night
 * Anum Shahin
 * 
 * The sun rises and then it sets, then it's time for the moon to rise.
 * I love being graded. Please grade this.
 */

"use strict";

//adding a sky variable
let sky = {
    r: 204,
    g: 255,
    b: 225
}

//adding a sun variable
let sun = {
    r: 255,
    g: 255,
    b: 0
}

//adding a hill variable
let hill = {
    r: 28,
    g: 191,
    b: 27
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

}