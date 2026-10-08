/**
 * Traffic Lights!
 * Anum Shahin
 * 
 * Three traffic lights, what happens when you hover over them I wonder?
 * Let the grading begin!
 */

"use strict";



const redCircle = {
    // position and size
    x: 70,
    y: 150,
    size: 100,
    // colours
    fill: "#545454", // starting with grey
    fills: {
        noOverlap: "#545454", // dark grey for no overlap
        overlap: "#ff0000" // red for overlap
    }
};

const greenCircle = {
    // position and size
    x: 330,
    y: 150,
    size: 100,
    // colours
    fill: "#545454", // start as grey
    fills: {
        noOverlap: "#545454", // dark grey for no overlap
        overlap: "#00ff00" // green for overlap
    }
};

const yellowCircle = {
    // position and size
    x: 200,
    y: 150,
    size: 100,
    // colours
    fill: "#545454", // starting with grey
    fills: {
        noOverlap: "#545454", // dark grey for no overlap
        overlap: "#ffff00" // yellow for overlap
    }

}

const userCircle = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 5,
    fill: "#ffffff"
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas (400, 300);

}


/**
 * // drawing the background and the three lights
*/
function draw() {
    background("#000000");

    // move user circle
    userCircle.x = mouseX;
    userCircle.y = mouseY;

    // check overlap

    // // calculate distance between circles
    // const d = dist(userCircle.x, userCircle.y, redCircle.x, redCircle.y, greenCircle.x, greenCircle.y, yellowCircle.x, yellowCircle.y);
    // const overlap = (d < userCircle.size/2 + redCircle.size/2 + greenCircle.size/2 + yellowCircle.size/2);
    // // set fill based on whether they overlap
    // if (overlap) {
    //     redCircle.fill = redCircle.fills.overlap;
    //     greenCircle.fill = greenCircle.fills.overlap;
    //     yellowCircle.fill = yellowCircle.fills.overlap;
    // }
    // else {
    //     redCircle.fill = redCircle.fills.noOverlap;
    //     greenCircle.fill = greenCircle.fills.noOverlap;
    //     yellowCircle.fill = yellowCircle.fills.noOverlap;
    // }

    // calculate distance between circles
    const d = dist(userCircle.x, userCircle.y, redCircle.x, redCircle.y);
    dist(userCircle.x, userCircle.y, greenCircle.x, greenCircle.y);
    dist(userCircle.x, userCircle.y, yellowCircle.x, yellowCircle.y);
    const overlap = (d < userCircle.size/2 + redCircle.size/2);
    (d < userCircle.size/2 + greenCircle.size/2);
    (d < userCircle.size/2 + yellowCircle.size/2);
    // set fill based on whether they overlap
    if (overlap) {
        redCircle.fill = redCircle.fills.overlap;
    }
    else {
        redCircle.fill = redCircle.fills.noOverlap;
    }
    if (overlap) {
        greenCircle.fill = greenCircle.fills.overlap;
    }
    else {
        greenCircle.fill = greenCircle.fills.noOverlap;
    }
    if (overlap) {
        yellowCircle.fill = yellowCircle.fills.overlap;
    }
    else {
        yellowCircle.fill = yellowCircle.fills.noOverlap;
    }

    

    // draw red circle
    push();
    noStroke();
    fill(redCircle.fill);
    ellipse(redCircle.x, redCircle.y, redCircle.size);
    pop();

    // draw green circle
    push();
    noStroke();
    fill(greenCircle.fill);
    ellipse(greenCircle.x, greenCircle.y, greenCircle.size);
    pop();

    // draw yellow circle
    push();
    noStroke();
    fill(yellowCircle.fill);
    ellipse(yellowCircle.x, yellowCircle.y, yellowCircle.size);
    pop();

}