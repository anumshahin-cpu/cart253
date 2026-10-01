/**
 * Did Anyone Else Like Watching the DVD Logo Almost Hit the Corner of the TV? No? Just Me?
 * Anum Shahin
 * 
 * Wow! It's the almost DVD logo! Almost! And it's hitting the corner! Almost!
 * I love being graded. Please grade this.
 * 
 */

"use strict";

// adding value 
let value = 0;

//adding a tv border variable
let tvborder = {
    //colour
    r: 128,
    g: 128,
    b: 128,
}

//adding a tv screen variable
let tvscreen = {
    //position and size
    x: 200,
    y: 200,
    size: 320,
    // colour
    fill: {
    r: 0,
    g: 0,
    b: 0,
    }
}

let dvdlogo = {
    //position and size
    x: 100,
    y: 250,
    size: 75,
    // velocity
    velocity: {
        x: -2,
        y: -2,
    },
    // colour
    fill: {
        r:0,
        g:255,
        b:0,
    }
}



/**
 * Creating a canvas
*/
function setup() {
    createCanvas (400, 400);

}



/**
 * Draw and update the landscape
*/
function draw() {
    //drawing background
    background(tvborder.r, tvborder.g, tvborder.b);
    tvborder.g == 1;
    tvborder.b == 1;
    tvborder.r == 1;



// added a conditional to have the dvd logo bounce inside the tv screen
    dvdlogo.x += dvdlogo.velocity.x;
    dvdlogo.y += dvdlogo.velocity.y;
    if(dvdlogo.x + dvdlogo.size /2> tvscreen.x + tvscreen.size /2){
        dvdlogo.velocity.x = -dvdlogo.velocity.x
    }
    else if(dvdlogo.x - dvdlogo.size /2 <tvscreen.x - tvscreen.size /2){
        dvdlogo.velocity.x = -dvdlogo.velocity.x
    }
    if(dvdlogo.y + dvdlogo.size /2> tvscreen.y + tvscreen.size /2){
        dvdlogo.velocity.y = -dvdlogo.velocity.y
    }
    else if(dvdlogo.y - dvdlogo.size /2 <tvscreen.y - tvscreen.size /2){
        dvdlogo.velocity.y = -dvdlogo.velocity.y
    }


    //drawing tv screen
    push();
    rectMode(CENTER)
    noStroke();
    fill("black");
    square(tvscreen.x, tvscreen.y, tvscreen.size);
    pop();

    //drawing dvd logo
    push();
    rectMode(CENTER)
    noStroke();
    fill("lime");
    rect(dvdlogo.x, dvdlogo.y, dvdlogo.size);
    pop();
    




}


