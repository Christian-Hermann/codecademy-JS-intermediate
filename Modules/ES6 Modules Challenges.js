// Challenege #2

/* main.js */

// import the functions here, then uncomment the code below
import { changeText, changeToFunkyColor } from "./module.js";
const header = document.getElementById("header");

// call changeText here
changeText(header, "I did it!");
setInterval(() => {
  // call changeToFunkyColor() here
}, 200);

// Challenge #3
// The <script> element below loads a JavaScript file, which makes use of ES6 import/export syntax. Which of the following changes must be made in order to properly load this module and avoid errors in the browser console?

<script src="./my-module.js"></script>;

// answer
<script type="module" src="./my-module.js"></script>;

// Challenge #4
// Consider the following functions being exported from the modules square-area.js and
// circle-area.js:

/* From square-area.js... */
export function area(side) {
  return side * side;
}

/* From circle-area.js... */
export function area(radius) {
  return Math.PI * radius * radius;
}

// answer
import { area as squareArea } from "square-area.js";
import { area as circleArea } from "circle-area.js";

console.log("The area of a square with sides of length 5 is " + squareArea(5));
console.log("The area of a circle with radius of length 5 is " + circleArea(5));

// Challenge #5
function changeText(domElement, newText) {
  domElement.innerHTML = newText;
}

function changeToFunkyColor(domElement) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  domElement.style.color = `rgb(${r}, ${g}, ${b})`;
}

// use default export syntax below here
export default {
  changeText,
  changeToFunkyColor,
};

// Challenge #6
