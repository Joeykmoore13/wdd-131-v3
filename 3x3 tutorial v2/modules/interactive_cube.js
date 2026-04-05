import { Cube } from '../interactive_cube_modules/cube.js';
import { ThreeXThree } from '../interactive_cube_modules/3x3.js';
import { Algorithm } from '../interactive_cube_modules/algorithm.js';
import { CubeState } from '../interactive_cube_modules/cubeState.js';
import { randomScrambleForEvent } from "https://cdn.cubing.net/v0/js/cubing/scramble";

function reset() {
  cube = new ThreeXThree();
  Display();
  lastMoves = [];
}

function Display() {
  let displayColors = cube.GetDisplayColors()
  let stickers = []

  // Yea, I know that is block of code is super inefficient. Its a result of me porting the code 
  // from another project and it loaded the stickers in this order and I didn't want to change it yet
  document.querySelector("#B-face").querySelectorAll(".sticker").forEach((sticker) => { stickers.push(sticker); });
  stickers.push(document.querySelector("#L-face .tl"));
  stickers.push(document.querySelector("#L-face .tc"));
  stickers.push(document.querySelector("#L-face .tr"));

  stickers.push(document.querySelector("#U-face .tl"));
  stickers.push(document.querySelector("#U-face .tc"));
  stickers.push(document.querySelector("#U-face .tr"));

  stickers.push(document.querySelector("#R-face .tl"));
  stickers.push(document.querySelector("#R-face .tc"));
  stickers.push(document.querySelector("#R-face .tr"));

  stickers.push(document.querySelector("#L-face .cl"));
  stickers.push(document.querySelector("#L-face .cc"));
  stickers.push(document.querySelector("#L-face .cr"));

  stickers.push(document.querySelector("#U-face .cl"));
  stickers.push(document.querySelector("#U-face .cc"));
  stickers.push(document.querySelector("#U-face .cr"));

  stickers.push(document.querySelector("#R-face .cl"));
  stickers.push(document.querySelector("#R-face .cc"));
  stickers.push(document.querySelector("#R-face .cr"));

  stickers.push(document.querySelector("#L-face .bl"));
  stickers.push(document.querySelector("#L-face .bc"));
  stickers.push(document.querySelector("#L-face .br"));

  stickers.push(document.querySelector("#U-face .bl"));
  stickers.push(document.querySelector("#U-face .bc"));
  stickers.push(document.querySelector("#U-face .br"));

  stickers.push(document.querySelector("#R-face .bl"));
  stickers.push(document.querySelector("#R-face .bc"));
  stickers.push(document.querySelector("#R-face .br"));

  document.querySelector("#F-face").querySelectorAll(".sticker").forEach((sticker) => { stickers.push(sticker); });
  document.querySelector("#D-face").querySelectorAll(".sticker").forEach((sticker) => { stickers.push(sticker); });


  if (displayColors.length != stickers.length) {
    throw new Error(`stickers.length(${stickers.length}) and displayColors.length(${displayColors.length}) are not the same`);
    return;
  }
  for (let i = 0; i < stickers.length; i++) {
    stickers[i].style.backgroundColor = displayColors[i];
  }

}

async function getScramble(eventId = "333") {
  const alg = await randomScrambleForEvent(eventId);
  const scrambleString = alg.toString();
  console.log(scrambleString);
  return scrambleString;
}

function scramble() {
  getScramble("333").then(scramble => {
    let moves = scramble.split(" ");
    moves.forEach(move => {
      cube[`${move.replace("'", "p")}`]?.();
    });
    Display();
  });
}


let lastMoves = [];
function UndoLast() {
  if (lastMoves.length == 0) {
    return;
  }
  if (lastMoves[lastMoves.length - 1].includes("p")) {
    lastMoves[lastMoves.length - 1] = lastMoves[lastMoves.length - 1].replace("p", "");
  }
  else if (lastMoves[lastMoves.length - 1].includes("2") == false) {
    lastMoves[lastMoves.length - 1] = lastMoves[lastMoves.length - 1] + "p";
  }

  cube[lastMoves.pop()]?.();
  Display();
}

function SetLastMove(id) {
  lastMoves.push(id.replace("'", "p"));
}


// TODO
// Input alg text box
// All moves buttons
// Enable/disable pieces buttons (do this last)

let cube = new ThreeXThree();

document.getElementById('scramble-cube').addEventListener('click', scramble);
document.getElementById('reset-cube').addEventListener('click', reset);
document.getElementById('undo').addEventListener('click', UndoLast);

// TODO Add the wide, slice, and rotation functions
let moveButtons = Array.from(document.querySelectorAll("#cube-moves button"));

moveButtons.forEach(button =>
  button.addEventListener("click", () => { cube[button.id]?.(); SetLastMove(button.id); Display(); })
);


function runInputAlg() {
  parseAlg(document.getElementById("alginput").value.replace(/[^RUFDLB'2\s]/gi, '').toUpperCase());
}

document.getElementById("submit-alg").addEventListener('click', runInputAlg);


function runPreset() {
  let alg = document.getElementById("algdropdown").value;


  switch (alg) {
    case "T-Perm":
      parseAlg("R U R' U' R' F R2 U' R' U' R U R' F'");
      break;
    case "J-Perm":
      parseAlg("R U R' F' R U R' U' R' F R2 U' R' U'");
      break;
    case "Y-Perm":
      parseAlg("F R (U' R' U') (R U R' F') (R U R' U') (R' F R F')");
      break;
    case "F-Perm":
      parseAlg("(R' U' F') (R U R' U') R' F R2 (U' R' U') (R U R' U) R");
      break;
    case "L-Perm":
      parseAlg("U2 R U' L' U R' U2 L U' L' U2 L U2");
      break;
    case "Ra-Perm":
      parseAlg("(R U' R' U') (R U R D) (R' U' R D') (R' U2 R') U'");
      break;
    case "Rb-Perm":
      parseAlg("(R' U2) (R U2) (R' F R) (U R' U' R') F' R2 U'");
      break;
    case "Aa-Perm":
      parseAlg("R' F R' B2 R F' R' B2 R2");
      break;
    case "Ab-Perm":
      parseAlg("R' B' R U' R D R' U R D' R2 B R");
      break;
    case "E-Perm":
      parseAlg("R2 U F' R' U R U' R' U R U' R' U R U' F U' R2");
      break;
    case "H-Perm":
      parseAlg("R2 U2 R U2 R2 U2 R2 U2 R U2 R2");
      break;
    case "Na-Perm":
      parseAlg("(R U R' U) (R U R' F') (R U R' U') R' F R2 U' R' U2 (R U' R')");
      break;
    case "Nb-Perm":
      parseAlg("(R' U R U' R') (F' U' F) (R U R') (F R' F') (R U' R)");
      break;
    case "Ua-Perm":
      parseAlg("U2 R U R' U R' U' R2 U' R' U R' U R");
      break;
    case "Ub-Perm":
      parseAlg("U2 R' U R' U' R' U' R' U R U R2 U2");
      break;
    case "V-Perm":
      parseAlg("(R' U R' U') (R D' R' D) (R' U D') (R2 U' R2) D R2");
      break;
    case "Z-Perm":
      parseAlg("R' U' R U' R U R U' R' U R U R2 U' R' U2");
      break;
  }
}

function parseAlg(alg) {
  let move = "";
  for (let i = 0; i < alg.length; i++) {
    if (alg[i] == "'" || alg[i] == "2") {
      continue;
    }

    move = alg[i];

    if (alg[i + 1] == "'") {
      move = move + "p";
      i++;
    }
    else if (alg[i + 1] == "2") {
      move = move + "2";
      i++;
    }

    cube[`${move}`]?.();
    lastMoves.push(move);
  }
  Display();
}

document.getElementById("submit-dropdown").addEventListener('click', runPreset);

