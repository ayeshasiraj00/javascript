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