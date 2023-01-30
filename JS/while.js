"use strict"

var i = 1;
while(i <= 16) {
    console.log(Math.pow(2, i));
    i++
}


var i = 2;
while(i <= 65536){
    console.log(i);
    i = i * 2;
}


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("Starting cones: " + allCones);
do {
    var sellingPerClient = Math.floor(Math.random() * 5) + 1; // This expression will genrate a random number between 1 and 5

    if(sellingPerClient <= allCones){
        console.log(sellingPerClient + "cones sold....");
        allCones = allCones - sellingPerClient; //change allCones to a new balance number
    } else if (sellingPerClient > allCones){
        console.log("Cannot sell you " + sellingPerClient + " if i only have " + allCones);
    }
} while (allCones > 0)
console.log("yay! I sold them all!");
