/**
 * Imaginary Technique: Hollow Purple
 * Anum Shahin
 * 
 * This is all one big reference, if I'm being honest. 
 * Let the grading begin!
 */

"use strict";

// add a circle that'll move across the screen
let circle = {
    // position and size
    x: 0,
    y: 250,
    size: 300,
    // movement
    velocity: {
        x: 0,
        y: 0
    },
    speed: 3,
};

// title and ending text
let titleString = "Take the amplified and the reversal, and smash together those two different infinities to create and push out imaginary mass..."
let endingString = "Imaginary Technique: Hollow Purple"

// display title when program runs
let state = "title";

/**
 * Create the canvas
*/
function setup() {
    createCanvas (500, 500);

    textSize(16);
    textAlign(CENTER, BASELINE);
}


/**
 * // drawing the backgriybd and running the state
*/
function draw() {
    // call appropriate function
    if (state === "title"){
        title();
    }
    else if (state === "animation"){
        animation();
    }
    else if (state === "ending"){
        ending();
    }

    // display title and waits for user to press mouse

    function title() {
        background("#ff0000");
        
        push();
        fill("#ffffff");
        text(titleString, width / 2, height / 2)
        pop();

        if (mouseIsPressed){
            state = "animation";
            circle.velocity.x = circle.speed;
        }
    }

    // animates the circle, changes accordingly when circle reaches the end of the canvas

    function animation(){
        background ("#0000ff");

        // move the circle
        circle.x += circle.velocity.x;
        circle.y += circle.velocity.y;

        // draw circle
        push();
        noStroke();
        fill("#9b59b6");
        ellipse(circle.x, circle.y, circle.size);
        pop();

        // see if circle reaches edge of canvas
        if (circle.x > width){
            // if so, switch to ending
            state = "ending";
        }
    }

    // display ending text

    function ending() {
        background("#9b59b6");
        push();
        fill("#ffffff");
        text(endingString, width /2, height/2)
        pop();
    }


   

    

    
}