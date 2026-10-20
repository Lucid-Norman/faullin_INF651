"use strict";



//Challenge 1 - Type Conversion

let numString = "4";
//number as a string
let numInteger = Number(numString);
//that string number converted to a number
console.log(numString, typeof numString);
//print the number string
console.log(numInteger, typeof numInteger);


numInteger = numInteger + 10;
//add 10 to the number

console.log(numInteger);
//print the result


//What I understood:
//A variable of one type can be converted into another type.
//For example, a string number can be converted into an integer, and then we can perform integer actions on it.





//Challenge 2 - Type Coercion

let numString2 = "7";
let numInteger2 = 9;

let addition = numString2 + numInteger2;
console.log(addition, typeof addition);

let subtraction = numString2 - numInteger2;
console.log(subtraction, typeof subtraction);

let multiplication = numString2 * numInteger2;
console.log(multiplication, typeof multiplication);

//print the results and their types

//What I understood:
//A variable of a type can be coerced into another type depending on
//the environment it's in, since, it is being forced to interact with a different type.





//Challenge 3 - True and False Values


let string1 = "banana";
let emptyString = "";
let numZero = 0;
let numPos = 3;
let nullValue = null;
let undefinedValue = undefined;
//created variables

console.log("Non-empty string: ", Boolean(string1));
console.log("Empty string: ", Boolean(emptyString));
console.log("Zero: ", Boolean(numZero));
console.log("Positive number: ", Boolean(numPos));
console.log("Null: ", Boolean(nullValue));
console.log("Undefined: ", Boolean(undefinedValue));

//check the boolean value for each variable

//What I understood:
//Different types of values in different types of variables
//yield different results as a boolean value, depending on their values.



//Challenge 4 - if/else

//test 1
let age = 21;

if (age >= 18) {

    console.log("You are eligible.");
}
else {

    console.log("You are not eligible yet.")
}


//test 2
age = 14;

if (age >= 18) {

    console.log("You are eligible.");
}
else {

    console.log("You are not eligible yet.")
}




//What I understood:
//If the Boolean condition is true, it will run the "if" block of code.
//Otherwise, it will run the "else" block of code.




//Challenge 5 - else if


//test 1
let grade = 88;


if (grade >= 90) {
    console.log("A");
} 
else if (grade >= 80 && grade <= 89) {
    console.log("B");
}
else if (grade >= 70 && grade <= 79) {
    console.log("C");
}
else if (grade >= 60 && grade <= 69) {
    console.log("D");
}
else {
    console.log("F");
}


//test 2
grade = 60;

if (grade >= 90) {
    console.log("A");
} 
else if (grade >= 80 && grade <= 89) {
    console.log("B");
}
else if (grade >= 70 && grade <= 79) {
    console.log("C");
}
else if (grade >= 60 && grade <= 69) {
    console.log("D");
}
else {
    console.log("F");
}


//test 3
grade = 4;

if (grade >= 90) {
    console.log("A");
} 
else if (grade >= 80 && grade <= 89) {
    console.log("B");
}
else if (grade >= 70 && grade <= 79) {
    console.log("C");
}
else if (grade >= 60 && grade <= 69) {
    console.log("D");
}
else {
    console.log("F");
}




//What I understood:
//There are several Boolean conditions. Only one can be true.
//The statement finds the true statement and runs its corresponding block of code.
//Otherwise the "else" block will run by default.


//Challenge 6 - switch

//test 1
let service = "tutoring";

switch (service) {

    case "library":
        console.log("Our library contains an extensive collection of books!")
        break;

    case "tutoring":
        console.log("In our tutoring program, you can get help with any class!");
        break;

    case "parking":
        console.log("There are three industrial-size parking lots, each with their own parking pass.");
        break;

    case "technology":
        console.log("We have extensive tech help for any type of device.")
        break;

    default:
        console.log("Please choose a valid service.");




}

//test 2
service = "parking";

switch (service) {

    case "library":
        console.log("Our library contains an extensive collection of books!")
        break;

    case "tutoring":
        console.log("In our tutoring program, you can get help with any class!");
        break;

    case "parking":
        console.log("There are three industrial-size parking lots, each with their own parking pass.");
        break;

    case "technology":
        console.log("We have extensive tech help for any type of device.")
        break;

    default:
        console.log("Please choose a valid service.");




}


//test3
service = "Massages";
switch (service) {

    case "library":
        console.log("Our library contains an extensive collection of books!")
        break;

    case "tutoring":
        console.log("In our tutoring program, you can get help with any class!");
        break;

    case "parking":
        console.log("There are three industrial-size parking lots, each with their own parking pass.");
        break;

    case "technology":
        console.log("We have extensive tech help for any type of device.")
        break;

    default:
        console.log("Please choose a valid service.");




}





//What I understood:
//A switch case takes a variable and matches it to a case.
//The block of the case that matches is run until a "break" is reached.
//If no case matches, the default case is run.









//Challenge 7 - Ternary Operator

let bool1 = true;

console.log(isLoggenIn ? "Welcome back!" : "Please log in.");
//test for true



bool1 = false;
console.log(isLoggenIn ? "Welcome back!" : "Please log in.");
//test for false

//What I understood:
//The ternary operators allow for an easy sort of if/else statement.
//It lets us choose between two options with a true or false Boolean value.






//Challenge 8 - Student Status Program

let studentName = "Reuben Faullin";
let studentAge = 19;
let score = 94;
let major = "Computer Science";
let enrollmentStatus = "Enrolled";


console.log("Student: ", studentName);
console.log("Age: ", studentAge);
console.log("Major: ", major);
if (studentAge >= 18) {
    console.log("Adult: Yes");
}
else {
    console.log("Adult: No");
}
console.log("Score: ", score);

if (score >= 90) {
    console.log("Grade: A");
}
else if (score >= 80 && score <= 89) {
    console.log("Grade: B");
}
else if (score >= 70 && score <= 79) {
    console.log("Grade: C");
}
else if (score >= 60 && score <= 69) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}



console.log("Status: ", enrollmentStatus);

//What I understood:
//We can use if/else statements and similar statements to validate information about a person.
//We can also use it to choose what we say about them in a form.



