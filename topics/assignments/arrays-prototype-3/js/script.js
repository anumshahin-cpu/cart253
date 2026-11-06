/**
 * Hachiware's Song
 * Anum Shahin
 * 
 * Shhh! Everyone listen to (read?) Hachiware's song! Just click along. 
 * yahoo
 */

"use strict";

// the text from hachiware's song
const lyrics = [
    "Huh, it's already morning?",
    "I said to myself.",
    "I'm buttering a toast.",
    "The rain has stopped, but it's still kinda damp.",
    "Everything's half-dried.",
    "'Such weird footprints', I thought.",
    "The footprints I left last evening.",
    "The soil is soaked with water.",
    "Everything's half-dried.",
    "It's bitterly cold!"

];

// parts of the speech on display
let lyricsIndex = 0;
// dialog box
let box = {
    x: 50,
    y: 300,
    width: 300,
    height: 80,
    fontSize: 18
}

// hachiware png
let hachiwareImage = undefined;

// load hachi png
function preload() {
    hachiwareImage = loadImage("assets/images/hachiware.png");
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 400);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}