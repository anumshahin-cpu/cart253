/**
 * Hollow Purple Part 2
 * Author Name
 * 
 * Coughs. Anyway, what happens if you hover the red circle over the blue circle?
 * Please.
 */

"use strict";

// add one target circle

let target = undefined;

// the user circle!

const userCircle = {
    x: undefined, // mouseX
    y: undefined, // mouseY
    size: 300,
    fill: "#ff0000"
};


/**
 * create the canvas and target
*/
function setup() {
    createCanvas(600, 600)

    // welcome to t-t-t-t-t-t-target
    target = createTarget(300, 400, 400);


}
//create target
function createTarget(x, y, size) {

    // we're using parameters!
    const target = {
        x: x, // x parameter used
        y: y, // y parameter used
        size: size, // size parameter used
        fill: "#0000ff", // blue to start
        fills: {
            noOverlap: "#0000ff", // blue for no overlap
            overlap: "#8605ff" // purple for overlap, the purple in hollow purple
        }
    }
    // store target in variable
    return target;
}


/**
 * time to move user circle, and check for overlaps while we draw the circles
*/
function draw() {

    // background
    background("#e7c786")

    // move that user circle
    userCircle.x = mouseX;
    userCircle.y = mouseY;

}