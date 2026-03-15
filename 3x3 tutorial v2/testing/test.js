import { HelloWorld } from "./second_testing.js";

// let allStickers = []
// let faces = ["U", "F", "L", "R", "B", "D"]
// let stickers = ['tl', 'tc', 'tr', 'cl', 'cc', 'cr', 'bl', 'bc', 'br']
// for (let i = 0; i < faces.length; i++) {
//     for (let j = 0; j < stickers.length; j++) {
//         allStickers.push(document.querySelector(`#${faces[i]} .${stickers[j]}`));
//     }
// }

// console.log(allStickers);

// console.log("%c\u2588\u2588", "color: red;");


// let userInput = prompt("Please enter something:");
// console.log("User input:", userInput);
// HelloWorld();


let testStr = "c"
let testStr2 = "C"
let testStr3 = "Cc"

function testIf(string)
{
    if (string.includes("c"))
    {
        console.log(string);
    }
}

testIf(testStr);
testIf(testStr2);
testIf(testStr3);