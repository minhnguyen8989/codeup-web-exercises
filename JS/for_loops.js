"use strict"

// alert("check for files hooked up");

//Creat a function named showMultiplicationTable that accept a number
function showMultiplicationTable(x){
    //console.logs the multiplication table for that number ( 1 thru 10)
    for (var i = 1; i <= 10; i++) {
        console.log(x * i);
    }
}


for(var i = 0; i < 10; i++) {
    //generate numbers between 20 and 200.
    var randomNumber = Math.floor(Math.random() * (200 - 20 + 1) ) + 20; //random between 20 - 200
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is EVEN");
    } else {
        console.log(randomNumber + " is ODD");
    }
}

// for (var i = 1; i <= 9; i++){
//         console.log(i);
//         for(var j = 0; j < i; j++){
//             console.log(j + i);
//         }
// }


for(var i = 100; i >= 5; i--) {
    if (i % 5 === 0){
        console.log(i);
    }
}

