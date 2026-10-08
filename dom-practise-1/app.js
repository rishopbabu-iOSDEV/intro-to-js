// QuerySelector - Select's first element
const heading = document.querySelector("#title");
console.log(heading);
heading.textContent = "Welcome to SIU"


// QuerySelectorAll - Select's all the elemets
const pTags = document.querySelectorAll(".message");
console.log(pTags)
pTags.forEach((content, i) => content.textContent = `Welcome Buddy ${i+1}`)

const announcement = document.querySelector("#announcement")
announcement.innerHTML = "<em>Tomorrow</em> is an <strong>Exam Day</strong>!"
// announcement.textContent = "<em>Tomorrow</em> is an <strong>Exam Day</strong>!"

const link = document.querySelector("#myLink");
console.log(link.getAttribute("href"));

link.setAttribute("href", "https://google.com")
console.log(link.getAttribute("href"));

const resultTitle = document.querySelector("#result")
resultTitle.classList.add("highlight")

resultTitle.classList.remove("highlight")

resultTitle.classList.toggle("highlight")

// Create a HTML Tag
const newParagraph = document.createElement("p");
newParagraph.textContent = "Welcome to JavaScript class"
document.querySelector(".message").appendChild(newParagraph);

const boxContainer = document.getElementById("box")

const newParagraph2 = document.createElement("p");
newParagraph2.textContent = "Welcome to Python class"
boxContainer.appendChild(newParagraph2, "Welcome to Maths class.")

const newParagraph3 = document.createElement("p");
newParagraph3.textContent = "Welcome to DSA Class";

const newParagraph4 = document.createElement("p");
newParagraph4.textContent = "Welcome to Computer Fundamentals class"

boxContainer.append(newParagraph3, newParagraph4, "Welcome to CN Class");

// Automate update the year

// Date
const date = new Date();

const yearSpan = document.querySelector("#year");
const currentYear = date.getFullYear()
yearSpan.textContent = currentYear

const hours = date.getHours();

let timeOfDay;

if (hours < 12) {
    timeOfDay = "Morning";
} else if (hours < 16) {
    timeOfDay = "Afternoon"
} else if (hours < 20) {
    timeOfDay = "Evening"
} else {
    timeOfDay = "Night"
}

const greetingElement = document.querySelector("#greeting");
greetingElement.textContent = `Good ${timeOfDay}! Thank you!`
