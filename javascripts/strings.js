"use strict";

let testString;

function reversal(stringArray) {
    let reversedString = stringArray.reverse().join("");    
    printToDom(reversedString);
    palindrome(reversedString, testString);
}

function alphabits(stringArray) {
    let alphabetizedString = stringArray.sort().join("");
    printToDom(alphabetizedString);
}

function palindrome(testString, comparisonString) {
    if (testString === comparisonString) {
        printToDom("Your input was a palindrome!");
    }    
}

let validateInput = () => {
    let letters = /^[A-Za-z]+$/;  
    testString = inputField.value;
    if(testString.match(letters)) {
        let stringToAr = testString.split("");
        reversal(stringToAr);
        alphabits(stringToAr);
        }
    else {
        alert("letters only pls");
    }
};
    
let inputField = document.getElementById("userInput");
inputField.addEventListener("keydown", function () { 
    if (event.key === "Enter") {
        validateInput(); 
    }
});
let submitBtn = document.getElementById("submitButton").addEventListener("click", validateInput);

let printToDom = (finalString) => {
    let outputField = document.getElementById("output");
    outputField.innerHTML += `<p>${finalString}</p>`;
};

