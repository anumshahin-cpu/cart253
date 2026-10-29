/**
 * Stamp Teehee
 * Anum Shahin
 * 
 * A stamp, but it's kinda cute.
 * Grade
 */

"use strict";

// let flower = '🌸';
/**
 * // create canvas
*/
function setup() {
    createCanvas(500, 500);

    // fill background
    background(240);

}


/**
 * nothing in here because it's not needed
*/
function draw() {

}

//this is where the stamp will be drawn
function mousePressed() {
    stamp(mouseX, mouseY);
}

// add the circle around the stamp
function stamp(x, y) {
    push();
    noFill();
    stroke("#e891aa");
    strokeWeight(6);
    rectMode(CENTER);
    ellipse(x, y, 100);
    pop();

    // text in the stamp
    push();
    fill("#e891aa");
    // noStroke();
    textAlign(CENTER, CENTER);
    textSize(40);
    text(">.<", x, y);
    pop();
}