// 1. SELECT one element
const title = document.querySelector("#title");
console.log(title);

// 2. SELECT many elements
const notices = document.querySelectorAll(".notice");
console.log(notices.length); 

// 3. SELECT nothing
console.log(document.querySelector(".pizza")); // null

// 4. textContent: footer year + time-aware greeting
document.querySelector("#year").textContent = new Date().getFullYear();
const hour = new Date().getHours();
let timeOfDay;
if (hour < 12) { timeOfDay = "morning"; }
else if (hour < 18) { timeOfDay = "afternoon"; }
else { timeOfDay = "evening"; }
document.querySelector("#greeting").textContent =
  `Good ${timeOfDay}! Welcome to the notice board.`;

// 5. innerHTML: announcement with a bold word
document.querySelector("#announcement").innerHTML =
  "Tomorrow is <strong>a holiday</strong>!";


// 6. ATTRIBUTES
const link = document.querySelector("#myLink");
link.setAttribute("title", "Click to see your timetable");
console.log(link.getAttribute("title"));

// 7. CLASSES
title.classList.add("highlight");
notices.forEach(n => n.classList.toggle("highlight"));

// 8. CREATE + INSERT a new notice
const newNotice = document.createElement("p");
newNotice.classList.add("notice");
newNotice.textContent = "Exam timetable is out!";
document.querySelector("main").appendChild(newNotice);