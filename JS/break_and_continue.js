"use strict"

//Ask user to input odd number between 1 - 50;
var userInput;
while (true) {
    var userInput = Number(prompt("Please, an ODD number only: between 1 -50"));
    if (userInput % 2 === 1 && userInput >= 1 && userInput <= 50){
        break;
    }
}

//Loop to count ODD number between 1 - 50;
for (var i = 1; i <= 50 ; i+=2) {
    if(i === userInput){
        console.log("Yikees! Skipping number:" + i);
    } else {
        console.log("here is an ODD number: " + i);
    }
}
