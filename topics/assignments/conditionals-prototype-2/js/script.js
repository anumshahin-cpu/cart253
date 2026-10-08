/**
 * Seal Your Fate!
 * Anum Shahin
 * 
 * Probability is funny isn't it? See how you end up in life! You could have a great life, or you could also just die! Who knows?
 * Let the grading begin!
 */

"use strict";

// put the random fortune in here
let drop = undefined;


/**
 * Create the canvas
*/
function setup() {
    createCanvas (400, 200);

    // pick random number for probability

    const p = random();

    // rarest option, and the worst one, 1% of the time
    if (p < 0.01) {
        drop = "Immediate Execution."
    }

    // rare option, 10% of the time
    if (p < 0.1) {
        drop = "You accomplish all your dreams, woah!";
    }
    // kind of rare, 20% of the time
    else if (p <0.21){
        drop = "A good life! You're happy where you are right now. Pretty cool!"
    }
    // uncommon, 30% of the time
    else if (p < 0.51){
        drop = "Kinda mid, but there's worse out there so it's okay I guess."
    }

    // common
    else {
        drop = "Well... at least you're not dead?"
    }


}


/**
 * // drawing the background and the three lights
*/
function draw() {
    background("palevioletred");

    //display loot
    push();
    textAlign(CENTER, BASELINE);
    textStyle(BOLD);
    textSize(13);
    text(drop, width/2, height/2);


   

    

    
}