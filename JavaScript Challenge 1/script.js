//Step 1
console.log('I am linked now!');

//Step 2
const myName = "Jana";
alert(myName);

//Step 3
let age = 28;
const lastName = "FD"
var DOB = "10 July, 1995";
age = 29;
console.log(age, lastName, DOB);

//Step 4
console.log(typeof("This is a text")); //string
console.log(typeof(true)); //boolean
console.log(typeof(false)); //boolean
console.log(typeof(1215)); //number
console.log(typeof("999")); //string
console.log(typeof({})); //object
console.log(typeof([])); //object
console.log(typeof(null)); //object
console.log(typeof(undefined)); //undefined
let var1 = "this is a string"; 
console.log(`Variable 1: "${var1}" is a ${typeof(var1)}`);
let var2 = 1294;
console.log(`Variable 2: ${var2} is a ${typeof(var2)}`);
let var3 = true;
console.log(`Variable 3: ${var3} is a ${typeof(var3)}`);
let var4 = [1,2,3];
console.log(`variable 4: ${var4} is an ${typeof(var4)}`);
let var5 = {name: "Jana", age: 24};
console.log(`Variable 5: ${JSON.stringify(var5)} is an ${typeof(var5)}`);
let var6 = null;
console.log(`Variable 6: ${var6} is ${typeof(var6)}`);

//Step 5
let myText = "a statement";
//3 different ways to declare strings + interpolation
let double_quotations = myText + " in double quotations";
let single_quotations = myText + ' in single quotations';
let backticks = `${myText} in backticks`;

const counter = 3;
const backtick = `This is my text using backticks ${counter} times.`;
const singleQuote =
  'This is my text using single quotations ${counter} times.';
const doubleQuote =
  "This is my text using double quotations ${counter} times.";
const tryThisAlso = `This is my new version, it’s the ${2 + 3}th version.`;
console.log(backtick + " Backticks are best used for strings that need interpolation, or in the case of multiple lines of strings.");
console.log(singleQuote + " Single quotations are used for simple strings that do not require interpolation.");
console.log(doubleQuote + " Double quotations are the same as single quotations.");
console.log(tryThisAlso + " This is also a text in backticks.")



