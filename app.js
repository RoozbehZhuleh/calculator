"use strict";

// selectors
const inputNumber = document.querySelector(".input-number");
const generalKeys = document.querySelectorAll(".gen");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const equals = document.querySelector(".equals");


function getResult() {
    console.log(inputNumber.value);
}

function logNumber() {
    for (let i = 0; i < 9; i++) {
        numbers[i].addEventListener("click", console.log("hi"));
    }
}

equals.addEventListener("click", getResult);
logNumber();
