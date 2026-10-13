// my-portfolio/projects-data.js
// Module 7 — Data-Driven UI: Rendering Content from Data
//
// This is the exact array-of-objects dataset finalized back in Module 4
// (js-practice/projects-data.js), copied into my-portfolio unchanged so the
// real site can render from it. Six fields on every object, no exceptions:
//   id           -- unique whole number
//   title        -- string
//   description  -- string, one complete sentence
//   category     -- string, one consistent casing per category
//   technologies -- array of strings
//   featured     -- boolean
//
// Linked with `defer`, BEFORE script.js, only from projects.html (the only
// page that needs it) -- see the <script> tags near the bottom of that
// page's <body>. That load order is what lets script.js simply reference
// `projects` as a global, the same way script.js itself is written to run
// safely even on pages that don't have every element it looks for.

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive personal portfolio website built with semantic HTML and hand-written CSS.",
    category: "Web",
    technologies: ["HTML", "CSS"],
    featured: true
  },
  {
    id: 2,
    title: "Recipe Card Generator",
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
    title: "Class Schedule Table",
    description: "An accessible, responsive HTML table for tracking a weekly class schedule.",
    category: "Web",
    technologies: ["HTML", "CSS"],
    featured: false
  },
  {
    id: 6,
    title: "Personal Blog Layout",
    description: "A two-column blog layout built entirely in HTML and CSS, ready for future content.",
    category: "Web",
    technologies: ["HTML", "CSS"],
    featured: false
  }
];
