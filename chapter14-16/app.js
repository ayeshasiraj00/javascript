// ===============================
// Q1. Empty array using JS literal notation
// ===============================

var studentNames = [];


// ===============================
// Q2. Empty array using JS object notation
// ===============================

var studentNames2 = new Array();


// ===============================
// Q3. Strings array
// ===============================

var stringsArray = ["Apple", "Mango", "Banana", "Orange"];


// ===============================
// Q4. Numbers array
// ===============================

var numbersArray = [10, 20, 30, 40, 50];


// ===============================
// Q5. Boolean array
// ===============================

var booleanArray = [true, false, true, false];


// ===============================
// Q6. Mixed array
// ===============================

var mixedArray = ["Ayesha", 17, true, "Student"];


// ===============================
// Q7. Qualifications array
// ===============================

var qualifications = [
    "SSC",
    "HSC",
    "BCS",
    "BS",
    "BCOM",
    "MS",
    "M.Phil.",
    "PhD"
];

document.write("<h2>Qualifications:</h2>");

for (var i = 0; i < qualifications.length; i++) {
    document.write((i + 1) + ") " + qualifications[i] + "<br>");
}

document.write("<br>");


// ===============================
// Q8. Student names, scores & percentages
// ===============================

var names = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;

for (var i = 0; i < names.length; i++) {

    var percentage = (scores[i] / totalMarks) * 100;

    document.write(
        "Score of " + names[i] +
        " is " + scores[i] +
        ". Percentage: " + percentage + "%<br>"
    );
}

document.write("<br>");


// ===============================
// Q9. Colors Array
// ===============================

var colors = ["Red", "Green", "Blue", "Yellow"];

document.write("Original Array: " + colors + "<br><br>");


// a. Add color to beginning
var colorBeginning = prompt(
    "What color do you want to add to the beginning?"
);

colors.unshift(colorBeginning);

document.write(
    "After adding at beginning: " +
    colors + "<br><br>"
);


// b. Add color to end
var colorEnd = prompt(
    "What color do you want to add to the end?"
);

colors.push(colorEnd);

document.write(
    "After adding at end: " +
    colors + "<br><br>"
);


// c. Add two more colors to beginning
colors.unshift("Pink", "Purple");

document.write(
    "After adding two colors at beginning: " +
    colors + "<br><br>"
);


// d. Delete first color
colors.shift();

document.write(
    "After deleting first color: " +
    colors + "<br><br>"
);


// e. Delete last color
colors.pop();

document.write(
    "After deleting last color: " +
    colors + "<br><br>"
);


// f. Add color at desired index
var index = prompt(
    "At which index do you want to add a color?"
);

var colorName = prompt("Enter color name:");

colors.splice(index, 0, colorName);

document.write(
    "After adding color at index " +
    index + ": " +
    colors + "<br><br>"
);


// g. Delete colors from desired index
var deleteIndex = prompt(
    "At which index do you want to delete color(s)?"
);

var deleteCount = prompt(
    "How many colors do you want to delete?"
);

colors.splice(deleteIndex, deleteCount);

document.write(
    "Final Updated Array: " +
    colors + "<br><br>"
);


// ===============================
// Q10. Sort student scores
// ===============================

var studentScores = [320, 230, 480, 120];

document.write(
    "Scores of Students: " +
    studentScores + "<br>"
);

studentScores.sort(function(a, b) {
    return a - b;
});

document.write(
    "Ordered Scores of Students: " +
    studentScores + "<br><br>"
);


// ===============================
// Q11. Cities & selectedCities
// ===============================

var cities = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Quetta",
    "Peshawar"
];

var selectedCities = cities.slice(2, 4);

document.write(
    "Cities list: " +
    cities + "<br><br>"
);

document.write(
    "Selected cities list: " +
    selectedCities + "<br><br>"
);


// ===============================
// Q12. Join array into a single string
// ===============================

var arr = ["This", "is", "my", "cat"];

var sentence = arr.join(" ");

document.write(sentence);