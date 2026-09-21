// ==================== QUESTION 1 ====================
// Power function

function power(a, b) {
    let result = 1;

    for (let i = 1; i <= b; i++) {
        result = result * a;
    }

    return result;
}

let a = Number(prompt("Enter a:"));
let b = Number(prompt("Enter b:"));

console.log("Answer =", power(a, b));


// ==================== QUESTION 2 ====================
// Leap Year

function leapYear(year) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}

let year = Number(prompt("Enter year:"));

console.log(leapYear(year));


// ==================== QUESTION 3 ====================
// Area of Triangle using 2 functions

function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateArea(a, b, c) {
    let S = calculateS(a, b, c);

    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}

let sideA = Number(prompt("Enter side a:"));
let sideB = Number(prompt("Enter side b:"));
let sideC = Number(prompt("Enter side c:"));

console.log("Area of Triangle =", calculateArea(sideA, sideB, sideC));


// ==================== QUESTION 4 ====================
// Average and Percentage using 3 functions

function average(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function percentage(m1, m2, m3) {
    return ((m1 + m2 + m3) / 300) * 100;
}

function mainFunction() {
    let m1 = Number(prompt("Enter marks of subject 1:"));
    let m2 = Number(prompt("Enter marks of subject 2:"));
    let m3 = Number(prompt("Enter marks of subject 3:"));

    console.log("Average =", average(m1, m2, m3));
    console.log("Percentage =", percentage(m1, m2, m3) + "%");
}

mainFunction();


// ==================== QUESTION 5 ====================
// Custom indexOf function

function myIndexOf(string, character) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            return i;
        }
    }

    return -1;
}

let text = prompt("Enter a string:");
let character = prompt("Enter a character:");

console.log("Index =", myIndexOf(text, character));



// ==================== QUESTION 7 ====================
// Count two vowels in succession using switch

function countVowelPairs(text) {
    let count = 0;

    for (let i = 0; i < text.length - 1; i++) {
        let pair = text[i].toLowerCase() + text[i + 1].toLowerCase();

        switch (pair) {
            case "aa":
            case "ee":
            case "ii":
            case "oo":
            case "uu":
                count++;
                break;
        }
    }

    return count;
}

let sentence = prompt("Enter a sentence:");

console.log("Number of vowel pairs =", countVowelPairs(sentence));


// ==================== QUESTION 8 ====================
// Convert distance into meters, feet, inches and centimeters

function meters(km) {
    return km * 1000;
}

function feet(km) {
    return km * 3280.84;
}

function inches(km) {
    return km * 39370.08;
}

function centimeters(km) {
    return km * 100000;
}

let distance = Number(prompt("Enter distance in kilometers:"));

console.log("Meters =", meters(distance));
console.log("Feet =", feet(distance));
console.log("Inches =", inches(distance));
console.log("Centimeters =", centimeters(distance));


// ==================== QUESTION 9 ====================
// Calculate overtime pay

function overtimePay(hours) {
    if (hours > 40) {
        return (hours - 40) * 12;
    } else {
        return 0;
    }
}

let hours = Number(prompt("Enter hours worked:"));

console.log("Overtime Pay = Rs.", overtimePay(hours));


// ==================== QUESTION 10 ====================
// Currency notes of 100, 50 and 10

function currencyNotes(amount) {
    let notes100 = Math.floor(amount / 100);
    amount = amount % 100;

    let notes50 = Math.floor(amount / 50);
    amount = amount % 50;

    let notes10 = Math.floor(amount / 10);

    console.log("100 notes =", notes100);
    console.log("50 notes =", notes50);
    console.log("10 notes =", notes10);
}

let amount = Number(prompt("Enter amount to withdraw:"));

currencyNotes(amount);