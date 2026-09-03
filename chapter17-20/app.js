// 1. Declare and initialize an empty multidimensional array

var arr = [
    [],
    [],
    []
];

console.log(arr);


// 2. Declare and initialize the given multidimensional array

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];


console.log(matrix);


// 3. Print numeric counting from 1 to 10

for (var i = 1; i <= 10; i++) {
    console.log(i);
}


// 4. Print multiplication table using for loop
// Table number and length taken as input from user

var num = +prompt("Enter table number:");
var length = +prompt("Enter table length:");

for (var i = 1; i <= length; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}
// Q5. Print items of array using for loop

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

for (let i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}


// Q6. Generate series

// a. Counting
document.write("<br>Counting: ");
for (let i = 1; i <= 15; i++) {
    document.write(i + " ");
}

// b. Reverse counting
document.write("<br>Reverse Counting: ");
for (let i = 10; i >= 1; i--) {
    document.write(i + " ");
}

// c. Even numbers
document.write("<br>Even: ");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + " ");
}

// d. Odd numbers
document.write("<br>Odd: ");
for (let i = 1; i <= 19; i += 2) {
    document.write(i + " ");
}

// e. Series
document.write("<br>Series: ");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k ");
}


// Q7. Search by user input

let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let search = prompt("Enter an item to search:");

if (A.includes(search)) {
    document.write("<br>" + search + " is available in our bakery");
} else {
    document.write("<br>We are sorry. " + search + " is not available in our bakery");
}


// Q8. Find largest number

let numbers = [24, 53, 78, 91, 12];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

document.write("<br>Array items: " + numbers);
document.write("<br>The largest number is " + largest);


// Q9. Find smallest number

let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

document.write("<br>Array items: " + numbers);
document.write("<br>The smallest number is " + smallest);


// Q10. Multiples of 5 from 1 to 100

document.write("<br>Multiples of 5: ");

for (let i = 5; i <= 100; i += 5) {
    document.write(i + " ");
}