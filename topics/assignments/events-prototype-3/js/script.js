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
    },

    // keys to control the colour
    keys: {
        blackKey: 66, // B
        greenKey: 71, // G
        pinkKey: 80, // P
        orangeKey: 79 // O
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

    
}

/**
 * draw background
*/
function draw() {
    background (bg.fill);

    
}

// }

// controls the background's colour

function keyPressed(event){
    if (event.keyCode === bg.keys.blackKey){
        bg.fill = bg.fills.black;
    }
    else if (event.keyCode === bg.keys.greenKey){
        bg.fill = bg.fills.green;
    }
    else if (event.keyCode === bg.keys.pinkKey){
        bg.fill = bg.fills.pink;
    }
    else if (event.keyCode === bg.keys.orangeKey) {
        bg.fill = bg.fills.orange;
    }

}

function endSequence(){
    sequenceEnd = true;
}

function falseSequence(){
    sequenceFalse = true;
}

function drawEndSequence(){
    push();
    fill("#870a0a");
    textSize(64);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("GOOD JOB!", width/2, height/2);
    pop();
}

function drawFalseSequence(){
    push();
    fill("#3216be");
    textSize(64);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("TRY AGAIN", width/2, height/2);
    pop();
}
