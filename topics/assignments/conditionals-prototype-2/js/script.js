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
    x: 200,
    y: 200,
    size: 50,
    // colours
    fill: "#545454", // starting with grey
    fills: {
        noOverlap: "#545454", // dark grey for no overlap
        overlap: "#ff0000" // red for overlap
    }
};

const greenCircle = {
    // position and size
    x: 100,
    y: 200,
    size: 50,
    // colours
    fill: "#545454", // start as grey
    fills: {
        noOverlap: "#545454", // dark grey for no overlap
        overlap: "00ff00" // green for overlap
    }
};

const yellowCircle = {
    // position and size
    x: 300,
    y: 200,
    size: 50,
    // colours
    fill: "#545454", // starting with grey
    fills: {
        noOverlap: "#545454", // dark grey for no overlap
        overlap: "#ffff00" // yellow for overlap
    }

}
/**
 * Create the canvas
*/
function setup() {
    createCanvas (400, 400);

    noCursor();

}


/**
 * // drawing the background, the three lights, and the board
*/
function draw() {
    background("#87cefa");

    // draw board
    push();
    noStroke();
    fill()


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