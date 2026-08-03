//Q1 
var city = prompt("Enter your city name:");

if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}
//Q2
var gender = prompt("Enter your gender (male/female):");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
}
//Q3
var signal = prompt("Enter traffic signal color:");

if (signal.toLowerCase() === "red") {
    alert("Must Stop");
} else if (signal.toLowerCase() === "yellow") {
    alert("Ready to move");
} else if (signal.toLowerCase() === "green") {
    alert("Move now");
} else {
    alert("Invalid color");
}
//Q4
var fuel = parseFloat(prompt("Enter remaining fuel in litres:"));

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}
//q5
//a
var a = 4;

if (++a === 5) {
    alert("given condition for variable a is true");
}
//b
var b = 82;

if (b++ === 83) {
    alert("given condition for variable b is true");
}
//c 
var c = 12;

if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}
//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
//e
if (true) {
    alert("True");
}

if (false) {
    alert("False");
}
//f. 
if ("car" < "cat") {
    alert("car is smaller than cat");
}
//q6
var sub1 = +prompt("Enter Subject 1 Marks:");
var sub2 = +prompt("Enter Subject 2 Marks:");
var sub3 = +prompt("Enter Subject 3 Marks:");

var totalMarks = 300;
var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write("Total Marks: " + totalMarks + "<br><br>");
document.write("Marks Obtained: " + obtainedMarks + "<br><br>");
document.write("Percentage: " + percentage.toFixed(0) + "%<br><br>");
document.write("Grade: " + grade + "<br><br>");
document.write("Remarks: " + remarks);
Q7
var secret = 7;
var guess = +prompt("Guess a number (1 to 10):");

if (guess === secret) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secret) {
    alert("Close enough to the correct answer");
} else {
    alert("Try Again!");
}
//Q8
var num = +prompt("Enter a number:");

if (num % 3 === 0) {
    alert("The number is divisible by 3");
} else {
    alert("The number is not divisible by 3");
}
//Q9
var num = +prompt("Enter a number:");

if (num % 2 === 0) {
    alert("Even Number");
} else {
    alert("Odd Number");
}
//Q10
var temp = +prompt("Enter temperature:");

if (temp > 40) {
    alert("It is too hot outside.");
} else if (temp > 30) {
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    alert("Today's Weather is cool.");
} else if (temp > 10) {
    alert("OMG! Today's weather is so Cool.");
} else {
    alert("It's very cold.");
}
//Q11
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var op = prompt("Enter operation (+, -, *, /, %)");

if (op === "+") {
    alert(num1 + num2);
} else if (op === "-") {
    alert(num1 - num2);
} else if (op === "*") {
    alert(num1 * num2);
} else if (op === "/") {
    alert(num1 / num2);
} else if (op === "%") {
    alert(num1 % num2);
} else {
    alert("Invalid Operation");
}