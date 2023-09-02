//Step 1

//Basic functions
function addNumbers (num1, num2) {
    return num1 + num2;
}

console.log(`2 + 5 = ${addNumbers(2,5)}`);
console.log(`1 - 3 = ${addNumbers(1,-3)}`);
console.log(`-10 - 7 = ${addNumbers(-10,-7)}`);

//Function with Conditional Statements
function findMax (num1, num2) {
    if (num1 > num2) return num1;
    else if (num2 > num1) return num2;
    else return "Both are equal";
}

console.log(`The larger number between -195 and -197 is: ${findMax(-195,-197)}`);
console.log(`The larger number between 501 and 203 is: ${findMax(501,203)}`);
console.log(`The larger number between 40 and 40 is: ${findMax(40,40)}`);

//Nested Function
function compute (num1, num2, operation) {
    function add (num1, num2) {
        return num1 + num2;
    }
    function subtract (num1, num2) {
        return num1 - num2;
    }
    function multiply (num1, num2) {
        return num1 * num2;
    }
    function divide (num1, num2) {
        if (num2 == 0) return "Cannot divide by zero";
        return num1 / num2 ;
    }

    switch (operation) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        default:
            return "Cannot solve this equation.";
         
    }
}

let num1 = 10;
let num2 = 0;
console.log(compute(num1, num2, "add"));
console.log(compute(num1, num2, "subtract"));
console.log(compute(num1, num2, "multiply"));
console.log(compute(num1, num2, "divide"));


//Step 2
let globalVar = 10; //this globalVar can be accessed from anywhere in this file
const squareNumber = (number) => {
    let localVar = 20;
    console.log(globalVar);
    return number * number;
}

console.log(squareNumber(5));
//console.log(localVar); when trying to access this variable from the outside of the function, it gives an error since it is defined only insdie the function;


//Step 3

//using a for loop
for (let i=1; i<=10; i++) {
    console.log(i);
}

//using a while loop
let num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}

//using a do-while loop
let number = 1;
do {
    if (number % 2 == 0) {
        console.log(number);
    }
    number++;
}while (number <= 10);

//advanced loop challenge
let favFruits = ["Mango", "Peach", "Watermelon", "Avocado", "Blackberries"];
for (const fruit of favFruits) {
    if (fruit.length > 5) console.log(fruit);
}


//Bonus Step: Advanced Concepts
function processArray (someFunction, numbers) {
    const newNumbers = [];
    for (let number of numbers) {
        newNumbers.push(someFunction(number));
    }
    return newNumbers;
}

let numbers = [1,2,3,4];
console.log(processArray(squareNumber, numbers));

const multiplier = (num1) => {
    const product = (num2) => {
        return num1 * num2;
    }
    return product;
}

console.log(multiplier(2)(3));
console.log(multiplier(-10)(20.3));
