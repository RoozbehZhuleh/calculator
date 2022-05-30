"use strict";

// selectors
const clear = document.querySelector(".clear");
const inputNumber = document.querySelector(".input-number");
const generalKeys = document.querySelectorAll(".gen");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const resultEquals = document.querySelector(".equals");
const resultsLine = document.querySelector(".results-line");
const percent = document.querySelector(".percent");
let percentage;


// function getResult() {
//     console.log(inputNumber.value);
// }

// equals.addEventListener("click", getResult);

clear.addEventListener("click", () => {
    inputNumber.value = "";
})

numbers.forEach((i) => {
    i.addEventListener("click", () => {
        inputNumber.value = inputNumber.value + i.textContent;
    });
})

operators.forEach((o) => {
    o.addEventListener("click", () => {
         inputNumber.value = inputNumber.value + o.textContent;
    })
})


// percent.addEventListener("click", () => {
//     inputNumber.value = percentage;
//     console.log(percentage);
//     inputNumber.value = "";
// })


resultEquals.addEventListener("click", () => {
    resultsLine.textContent = eval(inputNumber.value);
})


