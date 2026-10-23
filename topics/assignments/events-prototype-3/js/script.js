/**
 * Colour Sequence 
 * Anum Shahin
 * 
 * Figure out what the correct order is for this 4 colour sequence. Well I suppose you're not guessing because it's written at the top anyway.
 * My hypnosis will work and I will receive a grade for this description.
 */

"use strict";

// add solution via string
let solution = "bgpo";
let answer = ""; // user has to type in the answer

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


/**
 // create canvas
*/
function setup() {
    createCanvas(500, 500);


}

/**
 * draw background
*/
function draw() {
    background(bg.fill);

    text(solution, 100, 100); // add text for solution
    text(answer, 100, 200); // add text for answer 

}

// }

// controls the background's colour

function keyPressed(event) {
    answer += event.key;
    if (answer.length === solution.length) {
        if (answer === solution) {
            solution = "YOU WIN!" // if you put in the right answer
        }
        else {
            solution = "YOU LOSE!" // if you put in wrong answer
        }
    }
    if (event.keyCode === bg.keys.blackKey) {
        bg.fill = bg.fills.black;
    }
    else if (event.keyCode === bg.keys.greenKey) {
        bg.fill = bg.fills.green;
    }
    else if (event.keyCode === bg.keys.pinkKey) {
        bg.fill = bg.fills.pink;
    }
    else if (event.keyCode === bg.keys.orangeKey) {
        bg.fill = bg.fills.orange;
    }

}



