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
const rows = 20;
const columns = 20;

const backgroundColour = "#203244";

let backgroundMusic = undefined

// add character variables
let yeonjun = undefined;
let taehyun = undefined;
let beomgyu = undefined;
let hueningkai = undefined;
let soobin = undefined;

// // the player
// const yeonjun = {
//     // position and size
//     x: 0,
//     y: 0,
//     size: tileSize,
//     // colour 
//     fill: "#cbe0f3",
// };

// const taehyun = {
//     // position and size
//     x: 32 * 5,
//     y: 32 * 4,
//     size: tileSize,
//     // colour
//     fill: "#146481",
//     // status: "alone"
// }

// const beomgyu = {
//     // position and size
//     x: 32 * 18,
//     y: 32 * 9,
//     size: tileSize,
//     // colour
//     fill: "#689ac0",
//     // status: "alone"
// }

// const hueningkai = {
//     // position and size
//     x: 32 * 2,
//     y: 32 * 15,
//     size: tileSize,
//     // colour
//     fill: "#d4eaf6",
// }

// const soobin = {
//     // position and size
//     x: 32 * 9,
//     y: 32 * 11,
//     size: tileSize,
//     // colour
//     fill: "#303c44",
// }

const party = [yeonjun]

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

    yeonjun = createMember(0, 0, "#cbe0f3");
    taehyun = createMember(32 * 5, 32 * 4, "#146481");
    beomgyu = createMember(32 * 18, 32 * 9, "#689ac0");
    hueningkai = createMember(32 * 2, 32 * 15, "#d4eaf6");
    soobin = createMember(32 * 9, 32 * 11, "#303c44");

}


// okay let's try it as a function
function createMember(x, y, memberColour) {
    const aMember = {
        // position and size
        x: x,
        y: y,
        size: tileSize,
        // colours
        fill: memberColour,
    }
}
/**
 * draw placeholder characters
*/
function draw() {
    background(backgroundColour);

    // draw the characters

    drawMember(yeonjun);
    drawMember(taehyun);
    drawMember(beomgyu);
    drawMember(hueningkai);
    drawMember(soobin);


    // // yeonjun
    // push();
    // noStroke();
    // fill(yeonjun.fill);
    // rect(yeonjun.x, yeonjun.y, tileSize);
    // pop();

    // // taehyun
    // push();
    // noStroke();
    // fill(taehyun.fill);
    // rect(taehyun.x, taehyun.y, tileSize);
    // pop();

    // // beomgyu
    // push();
    // noStroke();
    // fill(beomgyu.fill);
    // rect(beomgyu.x, beomgyu.y, tileSize);
    // pop();

    // // huening kai
    // push();
    // noStroke();
    // fill(hueningkai.fill);
    // rect(hueningkai.x, hueningkai.y, tileSize);
    // pop();

    // add members to your party!
    if (dist(yeonjun.x, yeonjun.y, taehyun.x, taehyun.y) === 0) {
        party.unshift(taehyun);
    }
    if (dist(yeonjun.x, yeonjun.y, beomgyu.x, beomgyu.y) === 0) {
        party.unshift(beomgyu);
    }
    if (dist(yeonjun.x, yeonjun.y, hueningkai.x, hueningkai.y) === 0) {
        party.unshift(hueningkai);
    }

}

function drawMember(_Member) {
    // draws all the members
    push();
    noStroke();
    fill(_Member.fill);
    rect(_Member.x, _Member.y, tileSize);
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
    if (event.key === LEFT_ARROW) {
        move.x = -tileSize;
    }
    if (event.key === UP_ARROW) {
        move.y = -tileSize;
    }
    if (event.key === DOWN_ARROW) {
        move.y = tileSize;
    }

    if (move.x === 0 && move.y === 0) {
        return;
    }

    for (let i = 0; i < party.length; i++) {
        const member = party[i];

        // last person
        if (i === party.length - 1) {
            // move with keyboard
            member.x += move.x;
            member.y += move.y;

        }
        else {
            member.x = party[i + 1].x;
            member.y = party[i + 1].y;
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