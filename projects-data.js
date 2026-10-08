// ============================================================
// projects-data.js — js-practice
// Module 4 Capstone Lab: "Build projects-data.js"
//
// IMPORTANT -- READ THIS BEFORE YOU START:
// Everything else this week has been scratch work you can throw
// away. This file is different. Whatever you build here is what
// Module 7 will use to make your real portfolio site's projects
// section pull from data instead of hand-typed HTML -- so keep
// this file, word for word, all the way through the course. Do
// NOT delete it at the end of today.
//
// See exercises/exercise-04-capstone-projects-data/README.md for
// full instructions. Every project object in your `projects` array
// must use this EXACT shape (same property names, same types, on
// every single object -- Module 7 depends on this being consistent):
//
//   {
//     id: 1,                        // unique whole number
//     title: "Portfolio Website",    // short project name (string)
//     description: "A responsive personal portfolio website.", // one sentence (string)
//     category: "Web",               // one word/short label (string)
//     technologies: ["HTML", "CSS"], // array of strings
//     featured: true                 // boolean
//   }
// ============================================================

// Step 1-3: declare `const projects = [ ... ]` with 4-6 objects,
// each matching the exact shape shown above.
const porjects = [
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
        category: "web",
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
]


// Step 4: write a .forEach() call that logs each project as:
// "Title — description [category]"
porjects.forEach((project) => {
    console.log(`${project.title} - ${project.description} [${project.category}]`)
})

// Step 5: write a .map() pass that builds a NEW array of those
// same formatted strings (remember: .map()'s callback must
// `return` a value), and log that new array.
const formattedProjects = porjects.map((project) => {
    return `${project.title} - ${project.description} [${project.category}]`
});

console.log(formattedProjects);


// Tonight's homework ("Finalize Your Project Data") continues
// directly in this file -- see homework/README.md.