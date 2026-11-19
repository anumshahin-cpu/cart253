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

// the player
const player = {
    // position and size
    x: 0,
    y: 0,
    size: tileSize,
    // colour 
    fill: "#ffffff",
};

// async function preload (this for later) 

/**
 * create canvas
*/
async function setup() {
    createCanvas(tileSize * columns, tileSize * rows);

    await preload();

}


/**
 * draw placeholder characters
*/
function draw() {
    background(backgroundColour);

    // the player
    push();
    noStroke();
    fill(player.fill);
    rect(player.x, player.y, player.size, player.size);
    pop();

}

// respond to a keypress
function keyPressed(event) {
    // move the player
    //direction
    let move = {
        x: 0,
        y: 0
    };
    if (event.keyCode === RIGHT_ARROW) {
        move.x = tileSize;
    }
    else if (event.keyCode === LEFT_ARROW) {
        move.x = -tileSize;
    }
    else if (event.keyCode === UP_ARROW) {
        move.y = -tileSize;
    }
    else if (event.keyCode === DOWN_ARROW) {
        move.y = tileSize;
    }
}