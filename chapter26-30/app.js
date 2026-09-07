// ==========================
// Q1 - Positive Floating Point Number
// ==========================

var positiveNumber = +prompt("Enter a positive floating point number:");

document.write("<h2>Question 1</h2>");

document.write("Number: " + positiveNumber + "<br>");
document.write("Round off value: " + Math.round(positiveNumber) + "<br>");
document.write("Floor value: " + Math.floor(positiveNumber) + "<br>");
document.write("Ceil value: " + Math.ceil(positiveNumber) + "<br><br>");


// ==========================
// Q2 - Negative Floating Point Number
// ==========================

var negativeNumber = +prompt("Enter a negative floating point number:");

document.write("<h2>Question 2</h2>");

document.write("Number: " + negativeNumber + "<br>");
document.write("Round off value: " + Math.round(negativeNumber) + "<br>");
document.write("Floor value: " + Math.floor(negativeNumber) + "<br>");
document.write("Ceil value: " + Math.ceil(negativeNumber) + "<br><br>");


// ==========================
// Q3 - Absolute Value
// ==========================

var number = +prompt("Enter a number:");

var absoluteValue = Math.abs(number);

document.write("<h2>Question 3</h2>");

document.write(
    "The absolute value of " + number + " is " + absoluteValue + "<br><br>"
);


// ==========================
// Q4 - Random Dice
// ==========================

// Generate a random number between 1 and 6

var diceValue = Math.floor(Math.random() * 6) + 1;

document.write("<h2>Question 4</h2>");

document.write("Random dice value: " + diceValue + "<br><br>");


// ==========================
// Q5 - Random Coin
// ==========================

// Generate either 1 or 2

var coinValue = Math.floor(Math.random() * 2) + 1;

if (coinValue === 1) {
    document.write("Random coin value: Heads<br><br>");
} else {
    document.write("Random coin value: Tails<br><br>");
}


// =========================
// Question 6
// =========================

// Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

document.write("Random number between 1 and 100: " + randomNumber + "<br><br>");


// =========================
// Question 7
// =========================

// Ask user to enter weight
var userWeight = prompt("Enter your weight in kilograms");

// Remove "kgs" and "kilograms" from the input
var weight = parseFloat(userWeight);

// Display the weight in browser
document.write("The weight of user is " + weight + " kilograms");


// ==========================
// Q8 - Secret Number
// ==========================

// Store a random secret number from 1 to 10

var secretNumber = Math.floor(Math.random() * 10) + 1;

// Ask user to guess the number

var userGuess = +prompt("Guess a number between 1 and 10:");

if (userGuess === secretNumber) {
    alert("Congratulations! You guessed the correct number.");
}