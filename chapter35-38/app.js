// =============================
// 1. Current Date & Time
// =============================

function showDateTime() {
    var currentDate = new Date();
    document.write(currentDate);
}

showDateTime();


// =============================
// 2. Full Name Greeting
// =============================

function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    document.write("Hello " + fullName + "!");
}

greetUser("Ayesha", "Siraj");


// =============================
// 3. Add Two Numbers
// =============================

function addNumbers(num1, num2) {
    return num1 + num2;
}

var number1 = Number(prompt("Enter first number:"));
var number2 = Number(prompt("Enter second number:"));

var sum = addNumbers(number1, number2);

document.write("Sum = " + sum);


// =============================
// 4. Calculator
// =============================

function calculator(num1, num2, operator) {

    if (operator === "+") {
        return num1 + num2;
    }
    else if (operator === "-") {
        return num1 - num2;
    }
    else if (operator === "*") {
        return num1 * num2;
    }
    else if (operator === "/") {
        return num1 / num2;
    }
    else if (operator === "%") {
        return num1 % num2;
    }
    else {
        return "Invalid operator";
    }
}

var n1 = Number(prompt("Enter first number:"));
var n2 = Number(prompt("Enter second number:"));
var op = prompt("Enter operator (+, -, *, /, %):");

document.write(calculator(n1, n2, op));


// =============================
// 5. Square of a Number
// =============================

function square(number) {
    return number * number;
}

var num = Number(prompt("Enter a number:"));

document.write("Square = " + square(num));


// =============================
// 6. Factorial
// =============================

function factorial(number) {

    var result = 1;

    for (var i = 1; i <= number; i++) {
        result = result * i;
    }

    return result;
}

var factNum = Number(prompt("Enter a number:"));

document.write("Factorial = " + factorial(factNum));


// =============================
// 7. Counting Start to End
// =============================

function counting(start, end) {

    for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}

var startNum = Number(prompt("Enter start number:"));
var endNum = Number(prompt("Enter end number:"));

counting(startNum, endNum);


// =============================
// 8. Nested Function - Hypotenuse
// =============================

function calculateHypotenuse(base, perpendicular) {

    function calculateSquare(number) {
        return number * number;
    }

    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);

    var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

    return hypotenuse;
}

var base = Number(prompt("Enter base:"));
var perpendicular = Number(prompt("Enter perpendicular:"));

document.write("Hypotenuse = " + calculateHypotenuse(base, perpendicular));


// =============================
// 9. Area of Rectangle
// =============================

// i. Arguments as values

function areaOfRectangle(width, height) {
    return width * height;
}

document.write("Area = " + areaOfRectangle(10, 5));


// ii. Arguments as variables

var width = 10;
var height = 5;

document.write("Area = " + areaOfRectangle(width, height));


// =============================
// 10. Palindrome
// =============================

function checkPalindrome(word) {

    var reverseWord = word.split("").reverse().join("");

    if (word === reverseWord) {
        return "It is a palindrome";
    }
    else {
        return "It is not a palindrome";
    }
}

var word = prompt("Enter a word:");

document.write(checkPalindrome(word));


// =============================
// 11. First Letter Uppercase
// =============================

function capitalizeWords(sentence) {

    var words = sentence.split(" ");

    for (var i = 0; i < words.length; i++) {
        words[i] =
            words[i].charAt(0).toUpperCase() +
            words[i].slice(1);
    }

    return words.join(" ");
}

var sentence = prompt("Enter a sentence:");

document.write(capitalizeWords(sentence));


// =============================
// 12. Longest Word
// =============================

function findLongestWord(sentence) {

    var words = sentence.split(" ");
    var longestWord = "";

    for (var i = 0; i < words.length; i++) {

        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

var sentence2 = prompt("Enter a sentence:");

document.write("Longest word = " + findLongestWord(sentence2));


// =============================
// 13. Count Letter Occurrences
// =============================

function countLetter(str, letter) {

    var count = 0;

    for (var i = 0; i < str.length; i++) {

        if (str[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }

    return count;
}

var text = prompt("Enter a string:");
var letter = prompt("Enter a letter:");

document.write("Occurrences = " + countLetter(text, letter));


// =============================
// 14. The Geometrizer
// =============================

// Circumference

function calcCircumference(radius) {

    var circumference = 2 * Math.PI * radius;

    document.write("The circumference is " + circumference + "<br>");
}


// Area

function calcArea(radius) {

    var area = Math.PI * radius * radius;

    document.write("The area is " + area);
}

var radius = Number(prompt("Enter radius:"));

calcCircumference(radius);
calcArea(radius);