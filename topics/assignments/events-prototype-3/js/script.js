/**
 * Colour Sequence 
 * Anum Shahin
 * 
 * Figure out what the correct order is for this 4 colour sequence.
 * My hypnosis will work and I will receive a grade for this description.
 */

"use strict";

// create background and add other colours
const bg = {
    fill: "#4d4d4d",
    fills: {
        black: "#000000",
        green: "#6ca865",
        pink: "#e6a5b2",
        orange: "#ea8112"
    }
}

// an ending where you get the sequence right
let sequenceEnd = false;

// an ending where you get the sequence wrong
let sequenceFalse = false;

/**
 // create canvas
*/
function setup() {
    createCanvas (500,500);

    
    // window.addEventListener ("keydown", changeBG);
}


/**
 * draw background
*/
function draw() {
    background (bg.fill);

    
}

// function changeBG(){

// }

function keyPressed(event){
    if (event.key === "b"){

    }
    bg.fill = bg.fills.black;

}

