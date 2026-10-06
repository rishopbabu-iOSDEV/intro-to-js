// const name="John Doe";
// console.log(name);

// const age=30;
// console.log(age);

// let place="New York";


// place="Los Angeles";


// place="Chicago";
// console.log(place);

// // name="Jane Smith";
// // console.log(name);


// let college="SIU";
// console.log(college);
// console.log(typeof college);

// let mark=55;
// console.log(mark);
// console.log(typeof mark);

// let isLightsOn=true;
// console.log(isLightsOn);
// console.log(typeof isLightsOn);

// let is_lights_on=false;
// console.log(is_lights_on);
// console.log(typeof is_lights_on);

// let a;
// console.log(a);
// console.log(typeof a);

// let b=null;
// console.log(b);
// console.log(typeof b);


// console.log(`My name is ${name} and I am ${age} years old.`);

// console.log("My name is " + name +" and I am " +age+ " years old");
// console.log(`Addition:${2+2}`);

// let c=10;
// let d=5;
// console.log(`Addition of ${c} and ${d}:${c+d}`);

// console.log("Addition of " +c+ " and " +d+ "=" +(c+d));











// // let studentName = "Rishop";
// // let ageA = 21;
// // let marks = 85.5;
// // let isStudent = true;
// // let profilePicture = null;
// // let phoneNumber;

// // console.log("Name:", studentName);
// // console.log("Age:", ageA);
// // console.log("Marks:", marks);
// // console.log("Is Student:", isStudent);
// // console.log("Profile Picture:", profilePicture);
// // console.log("Phone Number:", phoneNumber);












let maths=60;
let science=40;
let english=75;
let social=70;
let telugu=80;
let total=maths+science+english+social+telugu;
console.log(`Addition of all subjets : ${total}`);

let avg=total/5;
console.log(`Average of all subjects : ${avg}`);

let chocolates=10;
let priceOfChocolate=100;
let totalPrice=chocolates*priceOfChocolate;
console.log(`Total price of ${chocolates} chocolates is : ${totalPrice}`);

let a=1000;
let b=3;
let reminder=a%b;
console.log(`Reminder of ${a} and ${b} is : ${reminder}`);



// Comparison Operators
let numberOne=10;
let numberTwo=10;

console.log(`${numberOne === numberTwo}`);
console.log(`${numberOne !== numberTwo}`);
console.log(`${numberOne == "11"}`);
console.log(`${numberOne != "11"}`);
console.log(`${numberOne > numberTwo}`);
console.log(`${numberOne < numberTwo}`);
console.log(`${numberOne >= numberTwo}`);
console.log(`${numberOne <= numberTwo}`);

//Logical Operators 
// && (AND)
// || (OR)
// ! (NOT)

let hasComputer=true;
let hasInternet=true;
let isCompletedAssignment=false;

console.log(`${hasComputer && hasInternet}`);
console.log(`${hasComputer || hasInternet}`);
console.log(`${hasComputer && isCompletedAssignment}`);
console.log(`${hasInternet || isCompletedAssignment}`);
console.log(`${!isCompletedAssignment}`);




// Control Statements

let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

let marks = 50;
let passingMarks = 40;

if (marks >= passingMarks) {
    console.log("You have passed the exam.");
}




let jeeMainsScore= 45;
let jeeMainsPassingScore = 40;

// if (statement){

//}

if (jeeMainsScore >= jeeMainsPassingScore) {
    console.log("You have passed the JEE Mains exam.");
}

let isBiriyaniAvailable = false;
let isCurdRiceAvailable = true;
let isTomatoRiceAvailable = true;

if(isBiriyaniAvailable){
    console.log("Biriyani is available.");
}
else if(isCurdRiceAvailable){
    console.log("Congrats Curd Rice is available.");
}
else if(isTomatoRiceAvailable){
    console.log("Congrats Tomato Rice is available.");
}
else{
    console.log("None of the rice options are available.Sorry!!");
}



let givenNumber = 6;

if(givenNumber % 2 === 0){
    console.log(`The given number ${givenNumber} is an even number.`);
}
else{
    console.log(`The given number ${givenNumber} is an odd number.`);
}

let isEven = (givenNumber % 2 === 0) ? true : false;

let isEvenNumber = (givenNumber % 2 === 0) ? console.log(`The given number ${givenNumber} is an even number.`) : console.log(`The given number ${givenNumber} is an odd number.`);







for(let i=1;i<=5;i++){
    console.log(`Iteration number: ${i}`);
}

let count=0;
while (count<5){
    console.log(`Count is: ${count}`);
    Count++;
}









// FUNCTIONS




























