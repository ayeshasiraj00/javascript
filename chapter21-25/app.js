// =======================
// Q1: First Name + Last Name
// =======================

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + " " + lastName;

document.write("<h3>Q1</h3>");
document.write("Hello " + fullName + "<br><br>");


// =======================
// Q2: Length of Mobile Phone
// =======================

var phone = prompt("Enter your favorite mobile phone model:");

document.write("<h3>Q2</h3>");
document.write("My favorite phone is: " + phone + "<br>");
document.write("Length of string: " + phone.length + "<br><br>");


// =======================
// Q3: Index of 'n' in Pakistani
// =======================

var country = "Pakistani";
var indexN = country.indexOf("n");

document.write("<h3>Q3</h3>");
document.write("String: " + country + "<br>");
document.write("Index of 'n': " + indexN + "<br><br>");


// =======================
// Q4: Last index of 'l' in Hello World
// =======================

var word = "Hello World";
var lastIndexL = word.lastIndexOf("l");

document.write("<h3>Q4</h3>");
document.write("String: " + word + "<br>");
document.write("Last index of 'l': " + lastIndexL + "<br><br>");


// =======================
// Q5: Character at 3rd index
// =======================

var string = "Pakistani";
var character = string.charAt(3);

document.write("<h3>Q5</h3>");
document.write("String: " + string + "<br>");
document.write("Character at index 3: " + character + "<br><br>");


// =======================
// Q6: Q1 using concat()
// =======================

var first = prompt("Q6 - Enter your first name:");
var last = prompt("Q6 - Enter your last name:");

var fullName2 = first.concat(" ", last);

document.write("<h3>Q6</h3>");
document.write("Hello " + fullName2 + "<br><br>");


// =======================
// Q7: Replace Hyder with Islam
// =======================

var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");

document.write("<h3>Q7</h3>");
document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity + "<br><br>");


// =======================
// Q8: Replace all "and" with "&"
// =======================

var message = "Ali and Sami are best friends. They play cricket and football together.";

var newMessage = message.replace(/and/g, "&");

document.write("<h3>Q8</h3>");
document.write("Original: " + message + "<br>");
document.write("After replacement: " + newMessage + "<br><br>");


// =======================
// Q9: Convert "472" string to number
// =======================

var numberString = "472";
var number = Number(numberString);

document.write("<h3>Q9</h3>");
document.write("Value: " + numberString + "<br>");
document.write("Type: " + typeof numberString + "<br>");
document.write("Value: " + number + "<br>");
document.write("Type: " + typeof number + "<br><br>");


// =======================
// Q10: Convert input to Upper Case
// =======================

var userInput = prompt("Enter a word:");

var upperCase = userInput.toUpperCase();

document.write("<h3>Q10</h3>");
document.write("User input: " + userInput + "<br>");
document.write("Upper case: " + upperCase + "<br><br>");


// =======================
// Q11: Convert input to Title Case
// =======================

var titleInput = prompt("Q11 - Enter a sentence:");

var titleCase = titleInput
    .toLowerCase()
    .split(" ")
    .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

document.write("<h3>Q11</h3>");
document.write("User input: " + titleInput + "<br>");
document.write("Title case: " + titleCase);