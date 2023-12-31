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
console.log(age + ' is a number, ' + lastName + ' is a string, and ' + DOB + ' is a string.');


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


//Step 6
let word1 = "Hakuna";
let word2 = "Matata";
let result = word1 + " " + word2;
console.log(result);


//Step 7
console.log( `1 === true is ${1 === true}`);
console.log( `1 == true is ${1 == true}`);
console.log( `0 !== false is ${0 !== false}`);
console.log( `0 != false is ${0 != false}`);
console.log( `"hi" === "hi" is ${"hi" === "hi"}`);
console.log( `5 !== "5" is ${5 !== "5"}`);
console.log( `3 == "3" is ${3 == "3"}`);
console.log( `4 != 5 ${4 != 5}`);

console.log(` 5 > 4 is ${5 > 4}`);
console.log(` "hi" > "hello" is ${"hi" > "hello"}`);
console.log(` false < true is ${false < true}`);
console.log(` 3 < 6 is ${3 < 6}`);
console.log(` "this" <= "that" is ${"this" <= "that"}`);
console.log(` 6 <= 6 is ${6 <= 6}`);
console.log(` "pen" >= "hen" is ${"pen" >= "hen"}`);
console.log(` [1,2,3] >= [1,2,3] is ${[1,2,3] >= [1,2,3]}`);


//Step 8
let result0 = 5 + 3 * 2; //11
console.log(`5 + 3 * 2 = ${result0}`);
let result1 = 10 / 2 + 3; //8
console.log(`10 / 2 + 3 = ${result1}`);
let result2 = 10 / (2 + 3); //2
console.log(`10 / (2 + 3) = ${result2}`);
console.log('In the equation (10 / 2 + 3), first 10 / 2 = 5 is computed and then 5 + 3 is computed. While in the equation (10 / (2 + 3)), (2 + 3) is computed first since it is in parantheses.')






