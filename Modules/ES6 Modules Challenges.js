// #2

/* main.js */

// import the functions here, then uncomment the code below
import { changeText, changeToFunkyColor } from "./module.js";
const header = document.getElementById("header");

// call changeText here
changeText(header, "I did it!");
setInterval(() => {
  // call changeToFunkyColor() here
}, 200);

// #3
// The <script> element below loads a JavaScript file, which makes use of ES6 import/export syntax. Which of the following changes must be made in order to properly load this module and avoid errors in the browser console?

<script src="./my-module.js"></script>;

// answer
<script type="module" src="./my-module.js"></script>;
