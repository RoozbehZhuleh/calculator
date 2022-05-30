"use strict";

// selectors
const clear = document.querySelector(".clear");
const inputNumber = document.querySelector(".input-number");
const generalKeys = document.querySelectorAll(".gen");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const resultEquals = document.querySelector(".equals");
const pn = document.querySelector(".pn");
let resultsLine = document.querySelector(".results-line");
const percent = document.querySelector(".percent");
const history = document.querySelector(".history");
const reverse = document.querySelector(".reverse");
let percentage1 = inputNumber.value;
let percent2 = "";
// let lastResult = "";


// function getResult() {
//     console.log(inputNumber.value);
// }

// equals.addEventListener("click", getResult);

function clearResults() {
    inputNumber.value = "";
    resultsLine.textContent = "0";

}


clear.addEventListener("click", clearResults);

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


pn.addEventListener("click", () => {
    inputNumber.value = inputNumber.value * -1;
})


percent.addEventListener("click", () => {
// let percentage1 = inputNumber.value;
let percentage2 = inputNumber.value;
    console.log(percentage1, percentage2);
}
)


resultEquals.addEventListener("click", () => {
        resultsLine.textContent = eval(inputNumber.value);
    inputNumber.value = "";

    for (let i = 0; i < 5; i++){
        var lastResults = lastResults[i];
        console.log(lastResults);
    }
        
        
})


// history

history.addEventListener("click", () => {
    lastResult = lastResult + resultsLine.textContent;
})


