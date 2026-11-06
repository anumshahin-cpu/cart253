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
 * create canvas
*/
function setup() {
    createCanvas(400, 400);

}


/**
 * displays hachiware's song
*/
function draw() {
    image(hachiwareImage, 0, 0);

    background("#a5dcff");

    //display lyrics
    showDialog();

}

// display lyrics in dialog box

function showDialog() {
    //bg box
    push();
    fill(0);
    stroke(255);
    strokeWeight(3);
    rect(box.x, box.y, box.width, box.height);
    pop();


    // the lyrics
    push();
    fill(255);
    textSize(18);
    text(lyrics[lyricsIndex], box.x + box.padding, box.y + box.padding, box.width - 2 * box.padding, box.height - 2 * box.padding);
    pop();
}

// click to advance speech

function mousePressed() {
    // continue lyrics until end
    if (lyricsIndex < lyrics.length - 1) {
        // advance line
        lyricsIndex++;
    }
}