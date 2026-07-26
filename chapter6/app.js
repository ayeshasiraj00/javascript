//ques1
var a = 10;

document.write("Result:<br>");
document.write("The value of a is: " + a + "<br>");
document.write("--------------------------------<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a);




//ques2
var a = 2, b = 1;

document.write("Result:<br><br>");

document.write("The value of a is: " + a + "<br>");
document.write("The value of b is: " + b + "<br><br>");

var result = --a - --b + ++b + b--;

document.write("The value of --a is: " + a + "<br>");
document.write("The value of --a - --b is: " + (1 - 0) + "<br>");
document.write("The value of --a - --b + ++b is: " + (1 - 0 + 1) + "<br>");
document.write("The value of --a - --b + ++b + b-- is: " + result + "<br><br>");

document.write("Result:<br>");
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result);
//ques3
var name = prompt("Enter your name:");

alert("Hello " + name + "! Welcome.");
//ques5
var num = prompt("Enter a number:");

if (num === "" || num === null) {
    num = 5;
}

document.write("<h2>Table of " + num + "</h2>");

for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}
//ques6
var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

var totalMarks = 100;

var marks1 = +prompt("Enter obtained marks for " + subject1);
var marks2 = +prompt("Enter obtained marks for " + subject2);
var marks3 = +prompt("Enter obtained marks for " + subject3);

var totalObtained = marks1 + marks2 + marks3;
var grandTotal = totalMarks * 3;
var percentage = (totalObtained / grandTotal) * 100;

document.write("<table border='1' cellspacing='0' cellpadding='5'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + marks1 + "</td><td>" + (marks1 / 100 * 100) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + marks2 + "</td><td>" + (marks2 / 100 * 100) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + marks3 + "</td><td>" + (marks3 / 100 * 100) + "%</td></tr>");

document.write("<tr><th></th><th>" + grandTotal + "</th><th>" + totalObtained + "</th><th>" + percentage + "%</th></tr>");
document.write("</table>");


