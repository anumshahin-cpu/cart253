/**
 * Traffic Lights, Repurposed!
 * Anum Shahin
 * 
 * Three (and a mysterious fourth one?) traffic lights, what happens when you hover over them I wonder?
 * Let the grading begin!
 */

"use strict";

// add traffic light variables
let redCircle = undefined;
let greenCircle = undefined;
let yellowCircle = undefined;

// add a mysterious fourth traffic light
let tealCircle = undefined;



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
    redCircle = createTrafficLight(70, 100, "#ff0000"); // 
    greenCircle = createTrafficLight(330, 100, "#00ff00");
    yellowCircle = createTrafficLight(200, 100, "#ffff00");
    tealCircle = createTrafficLight(200, 230, "#17c6da");

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

    checkOverlap(redCircle);
    checkOverlap(greenCircle);
    checkOverlap(yellowCircle);
    checkOverlap(tealCircle);

    // draw traffic light (wow what a good explanation)
    drawTrafficLight(redCircle);
    drawTrafficLight(greenCircle);
    drawTrafficLight(yellowCircle);
    drawTrafficLight(tealCircle);

}

function drawTrafficLight(_trafficLight) {
    // draws all the traffic lights
    push();
    noStroke();
    fill(_trafficLight.fill);
    ellipse(_trafficLight.x, _trafficLight.y, _trafficLight.size);
    pop();
}
// make it so we can hover over each light
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