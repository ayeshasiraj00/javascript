// Question 1
var ch = prompt("Enter a character:");
var code = ch.charCodeAt(0);

if (code >= 48 && code <= 57) {
    alert("It is a Number");
} else if (code >= 65 && code <= 90) {
    alert("It is an Uppercase Letter");
} else if (code >= 97 && code <= 122) {
    alert("It is a Lowercase Letter");
} else {
    alert("Invalid Input");
}
// Question 2
var num1 = +prompt("Enter first integer:");
var num2 = +prompt("Enter second integer:");

if (num1 > num2) {
    alert(num1 + " is larger");
} else if (num2 > num1) {
    alert(num2 + " is larger");
} else {
    alert("Both integers are equal");
}
// Question 3
var num = +prompt("Enter a number:");

if (num > 0) {
    alert("Positive Number");
} else if (num < 0) {
    alert("Negative Number");
} else {
    alert("Zero");
}
// Question 4
var ch = prompt("Enter a character:");

if (
    ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" ||
    ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U"
) {
    alert(true);
} else {
    alert(false);
}
// Question 5
var correctPassword = "abc123";
var userPassword = prompt("Enter your password:");

if (userPassword === "" || userPassword === null) {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}
// Question 6
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

alert(greeting);

// Question 7
var time = +prompt("Enter time in 24-hour format (e.g. 1900):");

if (time >= 0 && time < 1200) {
    alert("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Night!");
} else {
    alert("Invalid Time");
}
