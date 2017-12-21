(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{}]},{},[1]);
