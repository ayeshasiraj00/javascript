var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

document.write("Sum of " + num1 + " and " + num2 + " is " + sum);
//ques2
var num1 = 10;
var num2 = 5;

document.write("Subtraction: " + (num1 - num2) + "<br>");
document.write("Multiplication: " + (num1 * num2) + "<br>");
document.write("Division: " + (num1 / num2) + "<br>");
document.write("Modulus: " + (num1 % num2));
//ques3 
var a;

document.write("Value after variable declaration is: " + a + "<br>");

a = 5;
document.write("Initial value: " + a + "<br>");

a++;
document.write("Value after increment is: " + a + "<br>");

a = a + 7;
document.write("Value after addition is: " + a + "<br>");

a--;
document.write("Value after decrement is: " + a + "<br>");

var remainder = a % 3;
document.write("The remainder is: " + remainder);
//ques4 
var ticketPrice = 600;
var totalCost = ticketPrice * 5;

document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");
//ques5
var num = 4;

document.write("Table of " + num + "<br><br>");

document.write(num + " x 1 = " + (num * 1) + "<br>");
document.write(num + " x 2 = " + (num * 2) + "<br>");
document.write(num + " x 3 = " + (num * 3) + "<br>");
document.write(num + " x 4 = " + (num * 4) + "<br>");
document.write(num + " x 5 = " + (num * 5) + "<br>");
document.write(num + " x 6 = " + (num * 6) + "<br>");
document.write(num + " x 7 = " + (num * 7) + "<br>");
document.write(num + " x 8 = " + (num * 8) + "<br>");
document.write(num + " x 9 = " + (num * 9) + "<br>");
document.write(num +" x 10 = " + (num * 10));
//ques6 
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;

document.write(celsius + "°C is " + fahrenheit + "°F<br>");

fahrenheit = 70;
celsius = (fahrenheit - 32) * 5 / 9;

document.write(fahrenheit + "°F is " + celsius + "°C");
//ques7
var priceItem1 = 650;
var quantityItem1 = 3;
var priceItem2 = 100;
var quantityItem2 = 7;
var shippingCharges = 100;

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h1>Shopping Cart</h1>");

document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");

document.write("Total cost of your order is " + totalCost);
//ques8
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1><br>");

document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");
//ques9
var usDollar = 10;
var saudiRiyal = 25;

var totalPKR = (usDollar * 104.80) + (saudiRiyal * 28);

document.write("<h1>Currency in PKR</h1><br>");

document.write("Total Currency in PKR: " + totalPKR);
//ques10 
var num = 10;

var result = ((num + 5) * 10) / 2;

document.write("Result: " + result);
//ques11
var currentYear = 2016;
var birthYear = 1992;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("<h1>Age Calculator</h1><br>");

document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + age2 + " or " + age1 + " years old.");
//ques12 
var radius = 20;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<h1>The Geometrizer</h1><br>");

document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area);
//ques13 
var favoriteSnack = "Chocolate Chip";
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 3;

var totalNeeded = (maxAge - currentAge) * amountPerDay;

document.write("<h1>The Lifetime Supply Calculator</h1><br>");

document.write("Favourite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");