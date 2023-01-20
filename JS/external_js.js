"use strict";

// Exercise 1
alert("Welcome to my Website!");
//Exercise 2
var yourFavoriteColor = prompt("What is your favorite color?");
alert("Hey, " + yourFavoriteColor.toUpperCase() + " is also my favorite color!!");

//Exercise 3-1 ---------------------------------------
//declare variables
var confirmRenting = confirm("Hey, it is \"$3 per day\" for every movie! Would you like to continue?");
var daysTheLittleMermaid = prompt("How many days for \"The little mermaid\"?");
var daysBrotherBear = prompt("How many days for \"Brother Bear\"?");
var daysHercules = prompt("How many days for \"Hercules\"?");

//Function calculate
var daysTotal = parseInt(daysTheLittleMermaid) + parseInt(daysBrotherBear) + parseInt(daysHercules);
var moneyTotal = daysTotal*3;

//Print result
alert("Well sir/ma\'am, You are renting total " + daysTotal + " days, and it comes out $" + moneyTotal);

//Exercise 3-2 -------------------------------
//declare variables
var yourName = prompt("What is your name?");
const payRateGoogle = 400;
    alert("Welcome to Google, your pay rate is $400/h");
    var hoursGoogle = prompt("How many hours you worked this week for Google?");
    var paidGoogle = hoursGoogle*payRateGoogle;
const payRateAmazon = 380;
    alert("Iam Amazon, you also work for me. I pay you $380/h okay?");
    var hoursAmazon = prompt("How many hours you worked this week for Amazon?");
    var paidAmazon = hoursAmazon*payRateAmazon;
const payRateFacebook = 350;
    alert("I want you to work for Facebook also, $350/h is what you get! hahahaha");
    var hourFacebook = prompt("How many hours you worked this week for Facebook?");
    var paidFacebook = hourFacebook*payRateFacebook;

//function calculate && Result
var hoursTotal = parseInt(hoursGoogle) + parseInt(hoursAmazon) + parseInt(hourFacebook);
alert("Well, " + yourName + " you worked total of " + hoursTotal + " hours and your total amount is $" + (paidFacebook+paidAmazon+paidGoogle));

//Exercise 3-3 ----------------------
//declare variables
const capacityClass = 7;
const conflictSchedule = false;

//function calculate && result
var luckyNumber = prompt("1-9, pick your lucky number please!");
alert("Welcome, your enrollment ranked at number " + luckyNumber + ". Let see if our class is full?");

var conflictYourSchedule = confirm("Does your schedule conflict with our schedule? cancel(NO)  okay(YES)"); //no == false, okay == true
var result3 = (luckyNumber <= capacityClass) && (conflictSchedule === conflictYourSchedule); //accept if true
alert(result3 + "            True = Accepted ---- False = Declined");

//Exercise 3-4 ---------------------------------
//declare variables
var premiumMember = confirm("Are you a premium member?  cancel(NO) or okay(YES)");
var offerExpired = confirm("Offer Expired?  cancel(NO) or okay(YES)");
var moreThan2Item = confirm("Are you buying 2 or more items?  cancel(NO) or okay(YES)");

//Function and Result
var result4 = ((premiumMember || moreThan2Item) && (!offerExpired)); //True = Offer accepted
alert(result4 + "     True = Offer Accepted  -----   False = Offer Declined");
