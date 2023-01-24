"use strict";
//alert("Here to test if files are linked");
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(colors){
//     if(colors === "red"){
//         console.log("Hey, " + colors.toUpperCase() + " is a color of the fire!");
//     } else if(colors === "blue") {
//         console.log(colors.toUpperCase() + " is a color of the sky!");
//     } else if(colors === "yellow") {
//         console.log("WOW, " + colors.toUpperCase() + " is a color of stone!");
//     } else {
//         console.log(colors.toUpperCase() + " is a beauty colors Yo!");
//     }
// }


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(colors){
    switch (colors){
        case "red":
            alert ("Hey, " + colors.toUpperCase() + " is a color of the fire!");
            break;
        case "blue":
            alert (colors.toUpperCase() + " is a color of the sky!");
            break;
        case "yellow":
            alert ("WOW, " + colors.toUpperCase() + " is a color of stone!");
            break;
        default:
            alert (colors.toUpperCase() + " is a beauty colors Yo!");
            break;
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var askForColors = prompt("Hey, what is your favorite color?");
analyzeColor(askForColors);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, billAmount){
    switch (luckyNumber){
        case 0:
            alert("It's number " + luckyNumber +". Your bill total is: $" + billAmount);
            break;
        case 1:
            var discountAmount1 = billAmount - (.10*billAmount);
            alert("It's number " + luckyNumber +". Your bill total is: $" + discountAmount1);
            break;
        case 2:
            var discountAmount2 = billAmount - (.25*billAmount);
            alert("It's number " + luckyNumber +". Your bill total is: $" + discountAmount2);
            break;
        case 3:
            var discountAmount3 = billAmount - (.35*billAmount);
            alert("It's number " + luckyNumber +". Your bill total is: $" + discountAmount3);
            break;
        case 4:
            var discountAmount4 = billAmount - (.50*billAmount);
            alert("It's number " + luckyNumber +". Your bill total is: $" + discountAmount4);
            break;
        case 5:
            var discountAmount5 = billAmount - billAmount;
            alert("It's number " + luckyNumber +". Your bill total is: $" + discountAmount5);
            break;
    }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt("The total amount of your bills, Plz!");
calculateTotal(luckyNumber, totalBill);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var confirmEnter = confirm("Would you like to enter a number?");
if(confirmEnter === true) {
    var inputNumber = prompt("Please, Enter a number: ");
    //Is number is odd or even
    if((inputNumber % 2) === 0){
        alert("Your number is a Even number.");
    } else {
        alert("Your number is a Odd number.");
    }
    // what is number plus 100
    alert("Your number plus 100 is: " + (parseInt(inputNumber) + 100));
    // is number negative or positive
    if (parseInt(inputNumber) > 0){
        alert("Your number is a Positive number.");
    } else if (parseInt(inputNumber) < 0){
        alert("Your number is a Negative number.");
    }
} else {
    alert("Well, Good Bye!");
}