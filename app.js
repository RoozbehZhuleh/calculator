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
const themeSwitcher = document.querySelector(".light-mode");
const undo = document.querySelector(".reverse");
const deleteKey = document.querySelector(".delete");
const clock = document.querySelector(".clock");
const batteryIcon = document.querySelector(".battery-icon");
let arrResult = [];
let arrInput = [];
let undoCounter = arrResult.length;



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



// delete button
deleteKey.addEventListener("click", () => {
     inputNumber.value = inputNumber.value.slice(0, -1);
}) 



resultEquals.addEventListener("click", () => {
    let finalResult = eval(inputNumber.value);
    resultsLine.textContent = finalResult;
    arrResult.push(finalResult);
    console.log(arrResult);
    inputNumber.value = "";

    
    
    undo.addEventListener("click", () => {    
        inputNumber.value = arrResult[arrResult.length - 1]
    })

    
});


let interval = setInterval(function () {

    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    
    
    if (minute < 10) {
        clock.textContent = `${hour}:0${minute}`;

    } else {
        clock.textContent = `${hour}:${minute}`;
    }
})
    


// navigator.getBattery().then(function (battery) {
//     let batteryLevel = battery.level * 100 + "%";
//     console.log(batteryLevel);
// });



let batteryIsCharging = false;
navigator.getBattery().then(function (battery) {
    batteryIsCharging = battery.charging;

    if (battery.charging === true) {
        console.log("is charging");
        console.log(battery.level * 100 + "%");
        batteryIcon.className = "fa-solid fa-battery-half";
        batteryIcon.textContent = "charging";
    }
    
    else if (battery.charging === false) {
        console.log("is not charging");
        batteryIcon.classlist.remove("fa-battery-bolt");
        batteryIcon.classlist.add("fa-battery-half");
        console.log(battery.level * 100 + "%");
        
    }
})
// console.log(battery);
    



