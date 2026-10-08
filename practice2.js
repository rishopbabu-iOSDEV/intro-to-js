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

