import { Cube } from '../interactive_cube_modules/cube.js';
import { ThreeXThree } from '../interactive_cube_modules/3x3.js';
import { Algorithm } from '../interactive_cube_modules/algorithm.js';
import { CubeState } from '../interactive_cube_modules/cubeState.js';

// TODO
// Scramble cube button
// Reset cube button
// Input alg text box
// All moves buttons
// Enable/disable pieces buttons (do this last)

let cube = new ThreeXThree();

let scrambeButton = document.getElementById('scramble-cube');
scrambeButton.addEventListener('click', scramble)
let resetButton = document.getElementById('reset-cube');
resetButton.addEventListener('click', reset)

// TODO Add the wide, slice, and rotation functions
let moveButtons = Array.from(document.querySelectorAll("#cube-moves button"));
// let movesDict = {'r' : () => cube.R, "r'" : () => cube.Rp, 'r2' : () => cube.R2, 'f' : () => cube.F, "f'" : () => cube.Fp, 'f2' : () => cube.F2, 'u' : () => cube.U, "u'" : () => cube.Up, 'u2' : () => cube.U2, 'l' : () => cube.L, "l'" : () => cube.Lp, 'l2' : () => cube.L2, 'd' : () => cube.D, "d'" : () => cube.Dp, 'd2' : () => cube.D2, 'b' : () => cube.B, "b'" : () => cube.Bp, 'b2' : () => cube.B2}

// moveButtons.forEach((button) => {button.addEventListener('click', movesDict[button.id])});
moveButtons.forEach(button =>
  button.addEventListener("click", () => { cube[button.id]?.(); Display(); })
);

function scramble() {

}

function reset() {
  cube = new ThreeXThree();
  Display();
}

function Display() {
  let displayColors = cube.GetDisplayColors()
  // let stickers = document.querySelectorAll(".sticker");
  let stickers = []

  // Yea, I know that is block is super inefficient. Its a result of me porting the code 
  // from another project and it loaded the stickers in this order and I didn't want to change it yet
  // let stickers = document.querySelectorAll(".sticker");
  document.querySelector("#B-face").querySelectorAll(".sticker").forEach((sticker) => {stickers.push(sticker);});
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

  document.querySelector("#F-face").querySelectorAll(".sticker").forEach((sticker) => {stickers.push(sticker);});
  document.querySelector("#D-face").querySelectorAll(".sticker").forEach((sticker) => {stickers.push(sticker);});

  
  if (displayColors.length != stickers.length) {
    throw new Error(`stickers.length(${stickers.length}) and displayColors.length(${displayColors.length}) are not the same`);
    return;
  }
  for (let i = 0; i < stickers.length; i++) {
    stickers[i].style.backgroundColor = displayColors[i];
  }

}






