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


numbers.forEach((i) => {
    i.addEventListener("click", () => {
        inputNumber.value = inputNumber.value + i.textContent;
        inputNumber.value 
    });
})


equals.addEventListener("click", getResult);
