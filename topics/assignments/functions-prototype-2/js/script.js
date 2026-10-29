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
let hollowPurple = undefined;

let soundHappened = false;

// the user circle!

const userCircle = {
    x: undefined, // mouseX
    y: undefined, // mouseY
    size: 300,
    fill: "#ff0000"
};

// load sound effect

async function preload() {
    hollowPurple = await loadSound("assets/sounds/hollowpurple.mp3")
}


/**
 * create the canvas and target
*/
async function setup() {
    createCanvas(600, 600)

    // welcome to t-t-t-t-t-t-target
    target = createTarget(300, 300, 300);


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
        },
        soundEffect: hollowPurple
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

    // check overlap
    checkOverlap(userCircle, target);

    // draw target and user
    drawElement(target);
    drawElement(userCircle);

}

function checkOverlap(user, target) {
    // distance between circle's centres
    const d = dist(user.x, user.y, target.x, target.y);
    const overlap = (d < user.size / 2 + target.size / 2);
    // target fill based on overlap or not, and for the sound to play 
    if (d < target.size / 2) {
        target.fill = target.fills.overlap;
        userCircle.size = 0;
        if (soundHappened === false) {
            target.soundEffect.play();
        }
        soundHappened = true;
    }
    else {
        target.fill = target.fills.noOverlap;
        userCircle.size = 300
    }
}

// draw circle element
function drawElement(element) {
    push();
    noStroke();
    fill(element.fill);
    ellipse(element.x, element.y, element.size);
    pop();
}