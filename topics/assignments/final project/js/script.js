/**
 * Song of the Stars
 * Anum Shahin
 * 
 * An RPG based on the lore of the kpop band Tomorrow x Together.
 * Move around with the keys, find the members, and then collect the star.
 * 
 */

"use strict";

// tile size to determine how movement works

const tileSize = 32;

// world dimensions
const rows = 100;
const columns = 100;

const backgroundColour = "#203244";

/**
 * create canvas
*/
async function setup() {
    createCanvas();

    await preload();

}


/**
 * draw placeholder characters
*/
function draw() {

}