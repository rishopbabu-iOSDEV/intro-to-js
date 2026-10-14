//Apply Saved theme 
const savedTheme = localStorage.getItem('theme');
console.log(`Last Saved theme is ${savedTheme}`)
if (savedTheme === 'dark') {
    document.body.classList.add('darkMode');
}

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


// Sets up a watchman. Runs EVERY time someone clicks, maybe 0 times, maybe 500:
document.querySelector('h1').addEventListener('click', function() {
    console.log("Somebody poked on your heading");
});


const heading1 = document.querySelector('h1');

heading1.addEventListener('click', function(event) {
    console.log(`You clicked: `, event.target.textContent)
    heading1.classList.toggle('clicked-demo')
})


// Click Event
const heading2 = document.querySelector('h1');

heading2.addEventListener('click', function (event) {
  console.log('You clicked:', event.target.textContent);
  event.target.classList.toggle('clicked-demo');
});


const navToggle = document.querySelector('#navToggle');
const siteNav = document.querySelector('.siteNav');

navToggle.addEventListener('click', function () {
  siteNav.classList.toggle('nav-open');
});

const themeToggle = document.querySelector("#darkAndLight");
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('darkMode');
    if (document.body.classList.contains('darkMode')) {
        localStorage.setItem('theme', 'dark')
    } else {
        localStorage.setItem('theme', 'light');
    }
})


const message = document.querySelector('#message');
const charCount = document.querySelector('#charCount');

if (message && charCount) {
    message.addEventListener('input', function(event) {
        charCount.textContent = event.target.value.length + ' / 200'
    })
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        siteNav.classList.remove('nav-open')
    }
})

const snacks = [
  { name: "Apple", price: 1.5 },
  { name: "Granola Bar", price: 2.0 },
  { name: "Trail Mix", price: 3.25 },
  { name: "Blueberry", price: 4.0}
];

const snackList = document.querySelector("#snackList");

const html = snacks.map(function (snack) {
    return `<li>${snack.name} - $${snack.price.toFixed(2)} </li>`;
}).join("");

snackList.innerHTML = html



// Projects Data
const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A responsive personal portfolio website.",
        category: "Web",
        technologies: ["HTML", "CSS"],
        featured: true
    },
    {
        id: 2,
        title: "Recepie card generator",
        description: "A static page laying out recipe cards with images, ingredient lists, and step-by-step instructions.",
        category: "Web",
        technologies: ["HTML", "CSS"],
        featured: false
    },
    {
        id: 3,
        title: "Tic-Tac-Toe Board",
        description: "A styled, static Tic-Tac-Toe game board and layout, designed as a future JavaScript project.",
        category: "Design",
        technologies: ["HTML", "CSS"],
        featured: false
    },
    {
        id: 4,
        title: "Weather Dashboard Mockup",
        description: "A visual mockup of a weather dashboard, focused on grid layout and a clean typographic hierarchy.",
        category: "Design",
        technologies: ["HTML", "CSS"],
        featured: true
    },
    {
        id: 5,
        title: "Weather Dashboard Mockup Mobile",
        description: "A visual mockup of a weather dashboard, focused on grid layout and a clean typographic hierarchy.",
        category: "Mobile",
        technologies: ["HTML", "CSS"],
        featured: true
    },
]

function renderProjects(projectList) {
    const grid = document.querySelector("#projectGrid");

    const cardsHTML = projectList.map(function (project) {
        return `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        <div>
        `
    }).join("")

    grid.innerHTML = cardsHTML;
}

renderProjects(projects);

function renderFilterButton() {

    const categories = ["All", ...new Set(projects.map(project => project.category))]

    const buttonHtml = categories.map(function (category) {
        return `<button class="filter-btn" data-tag= "${category}"> ${category} </button>`
    }).join("")

    document.querySelector("#filterButton").innerHTML = buttonHtml

    document.querySelector("#filterButton").addEventListener('click', function (event) {
        if (event.target.matches(".filter-btn")) {
            applyFilters(event.target.dataset.tag)
        }
    })
}

renderFilterButton();


function applyFilters(category) {
    if (category === "All") {
        renderProjects(projects)
    } else {
        renderProjects(projects.filter(project => project.category === category));
    }
}


// Form Submission

const contactForm = document.querySelector('#contact-form');

//contactForm.addEventListener('submit', function (event) {
//   //event.preventDefault(); // stop the browser's default reload
//   console.log('Submit intercepted — the page did NOT reload.');
// });
contactForm.addEventListener('submit', function(event){
    event.preventDefault();
    const name=document.querySelector("#name").value.trim();
    const email=document.querySelector("#email").value.trim();
    const message=contactForm.querySelector("#message").value.trim();
    
    let isFormValid = formValidation(name, email, message)

    console.log(`isFormValid: ${isFormValid}`)
    
    if (isFormValid) {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push({name, email, message});
        localStorage.setItem('messages', JSON.stringify(messages));
        console.log(messages)
    }
    
})


function isEmailValid(value) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailPattern.test(value);
}

console.log(isEmailValid('rishop.@gmail.in'))



function showError(fieldId, show) {
    const errorElement = document.querySelector(`#${fieldId}-error`);
    errorElement.classList.toggle('show', show)
}

function formValidation(name, email, message) {
    let isValid = true;

    if (name === "") {
        showError('name', true);
        isValid = false;
    } else {
        showError('name', false);
    }

    if (email === '' || !isEmailValid(email)) {
        showError('email', true);
        isValid = false
    } else {
        showError('email', false)
    }

    if (message === '') {
        showError('message', true);
        isValid = false
    } else {
        showError('message', false);
    }

    return isValid;
}

localStorage.setItem('color', 'blue');
console.log(localStorage.getItem('color'));
localStorage.removeItem('color');
console.log(localStorage.getItem('color'));

const student = {name: 'Rishop', favouriteSubject: 'JavaScript'}
localStorage.setItem('student1', JSON.stringify(student))
console.log(localStorage.getItem('student1'))
console.log(JSON.parse(localStorage.getItem('student1')).favouriteSubject);

// localStorage.setItem()


// 1. Save an array of 3 favourite things under the key 'favourites',
//    json stringify.
// 2. Reload it, then parse the data with json parse and console log
//    second item of the array.
// 3. Find the Raw string in the application tab.


