// MODULE LIST
import {input} from "./elements.js"
import {calculate, squareRoot, inputFunction, clearFunction, themeFunction, copyFunction} from "./functions.js"

// ------------------------------------------------------------------------------------
// CODE CALLING
document.getElementById('clear').addEventListener('click', clearFunction)

input.addEventListener('keydown', inputFunction)

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('raiz').addEventListener('click', squareRoot)

document.getElementById('copyToClipboard').addEventListener('click', copyFunction)

document.getElementById("themeSwitcher").addEventListener("click", themeFunction)