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
const rows = 10;
const columns = 10;

const backgroundColour = "#203244";

let backgroundMusic = undefined

// the player
const player = {
    // position and size
    x: 0,
    y: 0,
    size: tileSize,
    // colour 
    fill: "#cbe0f3",
};

// add sound
async function preload() {
    backgroundMusic = loadSound("./assets/sounds/song-of-the-stars.wav")
}

/**
 * create canvas
*/
async function setup() {
    createCanvas(tileSize * columns, tileSize * rows);
    // play sound
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
    if (event.key === RIGHT_ARROW) {
        move.x = tileSize;
    }
    else if (event.key === LEFT_ARROW) {
        move.x = -tileSize;
    }
    else if (event.key === UP_ARROW) {
        move.y = -tileSize;
    }
    else if (event.key === DOWN_ARROW) {
        move.y = tileSize;
    }

    if (move.x !== 0 || move.y !== 0) {

        const p = random(0, 100);
        if (p < 10) {
            move.y = -move.y;
        }

        player.x += move.x;
        player.y += move.y;
    }
}

// click to play sound 
function mousePressed() {
    backgroundMusic.play(true)
}