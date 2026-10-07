const students = ["John", "Jane", "Jim", "Jill","Jack"];
console.log(students);
console.log(students.length);

students.push("Rishop");
console.log(students);

students.pop();
console.log(students);

//forEach()
//map()
//filter()
//find()

students.forEach((student) =>{
    console.log(student);
})

const score = [20,10,40,30,60];
console.log(score);
const extraScore = score.map((score) => score+5)
console.log(extraScore);

const topScorers = extraScore.filter((score) => score >= 35);
console.log(topScorers)

const topper = topScorers.find((score) => score > 60);
console.log(topper)



// key : value
// name : "Rishop"

const student = {
    name : "Rishop",
    age : 20,
    gender : "Male",
    course :"JavaScript",
    mark : 99,
    "passing year" : 2030

};
console.log(student);
console.log(student.name);
console.log(student.mark);
console.log(student["passing year"]);


// Array of object
const newStudents = [ 
    {
        name : "Rishop",
        age : 20,
        mark :80
    },
    {
        name : "Ruban",
        age : 25,
        mark : 75
    },
    {
        name : "Hyndavi",
        age : 20,
        mark :90
    }
]
console.log(newStudents);


// ============================================================
// REFERENCE SOLUTION — projects-data.js
// Module 4 Capstone Lab + "Finalize Your Project Data" Homework
//
// Instructor use only. Do not distribute to students before they
// have attempted the capstone lab and homework themselves.
//
// Proudest of: the Tic-Tac-Toe board -- first time I planned a
// layout for something that will eventually need real interactivity!
// (This top-of-file "proudest of" comment is the one personal-note
// step from the homework -- for instructor reference, adapted from
// claude/Module-4-Arrays-Objects-Data-Structures.md's Ada Lovelace
// sample, per the same "reproduce the authoritative sample persona"
// convention used in Module 3's reference solution.)
//
// ------------------------------------------------------------
// THIS IS THE EXACT FILE AND SHAPE MODULE 7 DEPENDS ON.
// Six fields, on every object, no exceptions:
//   id           -- unique whole number
//   title        -- string
//   description  -- string, one complete sentence
//   category     -- string, one consistent casing per category
//   technologies -- array of strings
//   featured     -- boolean
// ------------------------------------------------------------
// ============================================================

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

// ---- Capstone step 5: forEach + formatted console log -----------

projects.forEach((project) => {
  console.log(`${project.title} — ${project.description} [${project.category}]`);
});

// ---- Capstone step 6: map + collect formatted strings into a new array ----

const formattedProjects = projects.map((project) => {
  return `${project.title} — ${project.description} [${project.category}]`;
});
console.log(formattedProjects);

// ============================================================
// VALIDATION CHECKS (master-spec requirement: missing properties,
// duplicate IDs, unexpected category values)
//
// This is offered to students only as an OPTIONAL extension for
// fast finishers (see exercises/exercise-04's README and the
// homework's optional-extension section) -- writing a general
// validator is a stretch goal for a first-semester class in a
// 75-minute lab, not a required deliverable for all ~70 students.
// This reference version is the complete, tested implementation
// the master build spec requires of the module build itself.
// ============================================================

const REQUIRED_PROJECT_FIELDS = ["id", "title", "description", "category", "technologies", "featured"];
const ALLOWED_CATEGORIES = ["Web", "Design", "Data", "Mobile", "Other"];

function validateProjects(projectList) {
  const issues = [];
  const seenIds = [];

  projectList.forEach((project, index) => {
    // Missing properties
    REQUIRED_PROJECT_FIELDS.forEach((field) => {
      if (!(field in project)) {
        issues.push(`Project at index ${index} is missing required property "${field}".`);
      }
    });

    // Type checks (only run if the field is present, to avoid duplicate noise)
    if ("id" in project && typeof project.id !== "number") {
      issues.push(`Project at index ${index} has a non-numeric id: ${JSON.stringify(project.id)}.`);
    }
    if ("technologies" in project && !Array.isArray(project.technologies)) {
      issues.push(`Project at index ${index} ("${project.title}") has a "technologies" value that is not an array.`);
    }
    if ("featured" in project && typeof project.featured !== "boolean") {
      issues.push(`Project at index ${index} ("${project.title}") has a "featured" value that is not a boolean.`);
    }

    // Duplicate IDs
    if ("id" in project) {
      if (seenIds.includes(project.id)) {
        issues.push(`Duplicate id found: ${project.id} (project "${project.title}").`);
      } else {
        seenIds.push(project.id);
      }
    }

    // Unexpected category values
    if ("category" in project && !ALLOWED_CATEGORIES.includes(project.category)) {
      issues.push(`Project "${project.title}" has an unexpected category: "${project.category}". Allowed categories: ${ALLOWED_CATEGORIES.join(", ")}.`);
    }
  });

  if (issues.length === 0) {
    console.log(`Validation passed: all ${projectList.length} projects are well-formed.`);
  } else {
    console.log(`Validation found ${issues.length} issue(s):`);
    issues.forEach((issue) => console.log(`- ${issue}`));
  }

  return issues;
}

validateProjects(projects);