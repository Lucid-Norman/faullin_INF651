let name = "Reuben";
let age = 19;
let isStudent = true;

//declare three variables of the correct types, each with corresponding values.


console.log(name, typeof name);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);
//print data and each type



let num1 = 10;
let num2 = 20;
//declare numbers

console.log("Addition: ", num1 + num2);
//addition

console.log("Subtraction: ", num1 - num2);
//subtraction

console.log("Multiplication: ", num1 * num2);
//multiplicaiton

console.log("Division: ", num1 / num2);



let exampleString = "Javscript is fun."


console.log("String length: ", exampleString.length);
console.log("First character: ", exampleString[0]);
console.log("Last character: ", exampleString[exampleString.length - 1]);
//string methods

let num3 = -4;
//negative number

console.log("Square root: ", Math.sqrt(num3));
//won't work because the number is negative

console.log("Square: ", Math.pow(num3, 2));
//our number to the power of 2

console.log("Absolute value: ", Math.abs(num3));
//positive version of our negative number


let num4 = 1;
let num5 = 2;

if (num4 > num5) {
console.log("The first number is greater than the second.");

}
else if (num4 < num5) {
console.log("The first number is less than the second.");

}
else {
console.log("The two numbers are equal.")

}
//checks if the first number is greater than, less than, or equal to the second


let bool1 = true;
let bool2 = false;
//two boolean values


console.log(bool1 && bool2);
console.log(bool1 || bool2);
console.log(!bool1);
//the three types of logical operators


let firstName = "Reuben";
let lastName = "Faullin";

let greetingMessage = `Hello, ${firstName} ${lastName}. Welcome to Visual Studio.`;
//uses template literals


console.log(greetingMessage);
//prints the template literals
