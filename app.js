"use strict";

// selectors
const body = document.querySelector("body");
const clear = document.querySelector(".clear");
const inputNumber = document.querySelector(".input-number");
const generalKeys = document.querySelectorAll(".gen");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const resultEquals = document.querySelector(".equals");
const pn = document.querySelector(".pn");
let resultsLine = document.querySelector(".results-line");
const percent = document.querySelector(".percent");
// let historyItem = document.querySelectorAll(".history__page__item");
// const historyPage = document.querySelector(".history__page");
// const historyBtn = document.querySelector(".history");
const themeSwitcher = document.querySelector(".light-mode");
const undo = document.querySelector(".reverse");
var arrResult = [];


// function getResult() {
//     console.log(inputNumber.value);
// }

// equals.addEventListener("click", getResult);

function switchMode() {
    if (body.className === "dark-mode") {
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
    }
    else {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");

    }
}

function clearResults() {
    inputNumber.value = "";
    resultsLine.textContent = "0";
}

themeSwitcher.addEventListener("click", switchMode);


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
    inputNumber.value = inputNumber.value / 100;
}
)


resultEquals.addEventListener("click", () => {
    var finalResult = eval(inputNumber.value);
    resultsLine.textContent = finalResult;
    arrResult.push(finalResult);
    inputNumber.value = "";    


    // historyBtn.addEventListener("click", () => {
    //    arrResult.forEach(i => {
    //         // historyItem[i].innerHTML = "heu";
    //        console.log(arrResult[arrResult.length]);
    //     });
        
    // })


    undo.addEventListener("click", () => {
        arrResult.forEach(i=> {
            inputNumber.value = arrResult[arrResult.length -1]
            
        });
        
        
    }) 



    }
)





