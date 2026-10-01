// i. Get element of id "main-content"
let mainContent = document.getElementById("main-content");


// ii. Display all child elements of "main-content"
console.log(mainContent.children);


// iii. Get all elements of class "render"
// and show their innerHTML in browser console

let renderElements = document.getElementsByClassName("render");

for (let i = 0; i < renderElements.length; i++) {
    console.log(renderElements[i].innerHTML);
}


// iv. Fill input value whose element id is "first-name"

document.getElementById("first-name").value = "Ayesha";


// v. Repeat part iv for "last-name" and "email"

document.getElementById("last-name").value = "Siraj";

document.getElementById("email").value = "ayesha@gmail.com";