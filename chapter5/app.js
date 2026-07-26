//ques 1
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

//ques2
var num1 = 3;
var num2 = 5;

document.write("Subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2) + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2) + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + (num1 / num2) + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + (num1 % num2));


//ques3
// a. Declare a variable
var num;

// b. Show the value after declaration
document.write("Value after variable declaration is: " + num + "<br>");

// c. Initialize the variable
num = 5;

// d. Show initial value
document.write("Initial value: " + num + "<br>");

// e. Increment the variable
num++;

// f. Show value after increment
document.write("Value after increment is: " + num + "<br>");

// g. Add 7 to the variable
num += 7;

// h. Show value after addition
document.write("Value after addition is: " + num + "<br>");

// i. Decrement the variable
num--;

// j. Show value after decrement
document.write("Value after decrement is: " + num + "<br>");

// k & l. Show remainder after dividing by 3
var remainder = num % 3;
document.write("The remainder is: " + remainder);
//ques4

var ticketPrice = 600;
var totalCost = ticketPrice * 5;

document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");
//ques5
var num = 4;

document.write("Table of " + num + "<br><br>");

for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}
// ques6
// Celsius to Fahrenheit
var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;

document.write(celsius + "°C is " + fahrenheit + "°F<br>");

// Fahrenheit to Celsius
var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5/9;

document.write(fahrenheit2 + "°F is " + celsius2 + "°C");
//ques7
var item1Price = 650;
var item2Price = 100;
var item1Quantity = 3;
var item2Quantity = 7;
var shippingCharges = 100;

var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

document.write("<h1>Shopping Cart</h1>");

document.write("Price of item 1 is " + item1Price + "<br>");
document.write("Quantity of item 1 is " + item1Quantity + "<br>");
document.write("Price of item 2 is " + item2Price + "<br>");
document.write("Quantity of item 2 is " + item2Quantity + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");

document.write("Total cost of your order is " + totalCost);
//ques8
var totalMarks = 980;
var marksObtained = 804;

var percentage = (marksObtained / totalMarks) * 100;

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");
//ques9
var usDollar = 10;
var saudiRiyal = 25;

var totalPKR = (usDollar * 104.80) + (saudiRiyal * 28);

document.write("<h1>Currency in PKR</h1>");
document.write("Total Currency in PKR: " + totalPKR);
//ques10
var num = 5;

var result = ((num + 5) * 10) / 2;

document.write("Result: " + result);
//ques11
var currentYear = 2016;
var birthYear = 1992;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("<h1>Age Calculator</h1>");

document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + age2 + " or " + age1 + " years old.");
//ques12
var radius = 20;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<h1>The Geometrizer</h1>");

document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area);
//ques13
var favoriteSnack = "Chocolate Chip";
var currentAge = 15;
var maximumAge = 65;
var snacksPerDay = 3;

var totalSnacks = (maximumAge - currentAge) * 365 * snacksPerDay;

document.write("<h1>The Lifetime Supply Calculator</h1>");

document.write("Favourite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maximumAge + "<br>");
document.write("Amount of snacks per day: " + snacksPerDay + "<br>");
document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge);