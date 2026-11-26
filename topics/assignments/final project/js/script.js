/**
 * Song of the Stars
 * Anum Shahin
 * 
 * An RPG based on the lore of the kpop band Tomorrow x Together.
 * Move around with the keys, find the members, and then collect the star.
 * 
 */

"use strict";

let previousPositions = []

// tile size to determine how movement works

const tileSize = 32;

// world dimensions
const rows = 20;
const columns = 20;

const backgroundColour = "#203244";

let backgroundMusic = undefined

const party = [yeonjun]


// the player
const yeonjun = {
    // position and size
    x: 0,
    y: 0,
    size: tileSize,
    // colour 
    fill: "#cbe0f3",
};

const taehyun = {
    // position and size
    x: 256,
    y: 256,
    size: tileSize,
    // colour
    fill: "#146481",
    status: "alone"
}

// add sound
async function preload() {
    backgroundMusic = await loadSound("./assets/sounds/song-of-the-stars.wav")
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

    // yeonjun
    push();
    noStroke();
    fill(yeonjun.fill);
    rect(yeonjun.x, yeonjun.y, yeonjun.size, yeonjun.size);
    pop();

    // taehyun
    push();
    noStroke();
    fill(taehyun.fill);
    if (taehyun.status === "alone") {
        rect(taehyun.x, taehyun.y, taehyun.size, taehyun.size);
    }
    pop();

    // beomgyu
    push();
    noStroke();
    fill(beomgyu.fill);
    if (beomgyu.status === "alone") {
        rect(beomgyu.x, beomgyu.y, beomgyu.size, beomgyu.size);
    }
    pop();

    // for(let_member of party){

    // }

    if (dist(yeonjun.x, yeonjun.x, taehyun.x, taehyun.y === 0)) {
        yeonjun.party.push(taehyun);
        party.unshift(taehyun);
    }

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
    if (event.key === LEFT_ARROW) {
        move.x = -tileSize;
    }
    if (event.key === UP_ARROW) {
        move.y = -tileSize;
    }
    if (event.key === DOWN_ARROW) {
        move.y = tileSize;
    }

    if (move.x !== 0 || move.y !== 0) {

        yeonjun.x += move.x;
        yeonjun.y += move.y;
        // previousPositions.push(yeonjun.x, yeonjun.y)
        // taehyun.x = previousPositions[previousPositions.length - 1]
    }

    for (let i = 0; i < party.length; i++) {
        const member = party[i];

        // last person
        if (i === party.length - 1) {
            // move with keyboard

        }
        else {
            member.x = party[i + 1].x;
            member.y[i + 1].y;
        }
    }
}

// click to play sound 
function mousePressed() {
    backgroundMusic.loop(true)
    backgroundMusic.play()
}

// make a collision
function checkCollision(object1, object2) {

}