/**
 * Traffic Lights!
 * Anum Shahin
 * 
 * Three traffic lights, what happens when you hover over them I wonder?
 * Let the grading begin!
 */

"use strict";

let redCircle = undefined;
let greenCircle = undefined;
let yellowCircle = undefined;


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
    createCanvas(400, 300);
    redCircle = createTrafficLight(70, 150, "#ff0000"); // 
    greenCircle = createTrafficLight(330, 150, "#00ff00");
    yellowCircle = createTrafficLight(200, 150, "#ffff00")

}

function createTrafficLight(x, y, lightColour) {
    const babyTrafficLight = {
        // position and size
        x: x,
        y: y,
        size: 100,
        // colours
        fill: "#545454", // starting with grey
        fills: {
            noOverlap: "#545454", // dark grey for no overlap
            overlap: lightColour // colour for overlap
        }

    }
    return babyTrafficLight


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
    // const d = dist(userCircle.x, userCircle.y, redCircle.x, redCircle.y);
    // const dgreen = dist(userCircle.x, userCircle.y, greenCircle.x, greenCircle.y);
    // const dyellow = dist(userCircle.x, userCircle.y, yellowCircle.x, yellowCircle.y);
    // const overlap = (d < userCircle.size / 2 + redCircle.size / 2);
    // const overlapgreen = (dgreen < userCircle.size / 2 + greenCircle.size / 2);
    // const overlapyellow = (dyellow < userCircle.size / 2 + yellowCircle.size / 2);
    // // set fill based on whether they overlap
    // if (overlap) {
    //     redCircle.fill = redCircle.fills.overlap;
    // }
    // else {
    //     redCircle.fill = redCircle.fills.noOverlap;
    // }
    // if (overlapgreen) {
    //     greenCircle.fill = greenCircle.fills.overlap;
    // }
    // else {
    //     greenCircle.fill = greenCircle.fills.noOverlap;
    // }
    // if (overlapyellow) {
    //     yellowCircle.fill = yellowCircle.fills.overlap;
    // }
    // else {
    //     yellowCircle.fill = yellowCircle.fills.noOverlap;
    // }



    checkOverlap(redCircle);
    checkOverlap(greenCircle);
    checkOverlap(yellowCircle);


    drawTrafficLight(redCircle);
    drawTrafficLight(greenCircle);
    drawTrafficLight(yellowCircle);

}

function drawTrafficLight(_trafficLight) {
    // draws all the traffic lights
    push();
    noStroke();
    fill(_trafficLight.fill);
    ellipse(_trafficLight.x, _trafficLight.y, _trafficLight.size);
    pop();
}

function checkOverlap(_trafficLight) {
    const d = dist(userCircle.x, userCircle.y, _trafficLight.x, _trafficLight.y);
    const overlap = (d < userCircle.size / 2 + _trafficLight.size / 2);
    if (overlap) {
        _trafficLight.fill = _trafficLight.fills.overlap;
    }
    else {
        _trafficLight.fill = _trafficLight.fills.noOverlap;
    }

}