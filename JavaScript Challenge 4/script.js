//Step 1
const fiveNumbers = [-10, 23, 49, 76, -60];

const personalInfo = {
    name: "Jana",
    age: 28,
    height: 170,
    location: "Spain",
    nationality: "Europe",
    contactInfo: {
        address: "Main Street",
        phoneNumber: 1234,
    }
}


//Step 2
const nextThreeNumbers = [12, 15, 17];
const allNumbers = [...fiveNumbers, ...nextThreeNumbers];
console.log(allNumbers);


const additionalInfo = {
    occupation: "programming related",
    hobby: "learning languages",
    education: "physics"
}

const fullInfo = {...personalInfo, ...additionalInfo};
console.log(fullInfo)


//Step 3
const [firstNum, secondNum, thirdNum] = fiveNumbers;
console.log(firstNum, secondNum, thirdNum);

const {name, location : loc, nationality} = personalInfo; //Ask about the error, why is it giving an error when I use location alone
console.log("Name: " + name); //Ask why name is slashed like this
console.log("Location: " + loc);
console.log("Nationality: " + nationality);


//Step 4

//Nested Destructuring
let {contactInfo: { address, phoneNumber }} = personalInfo;
console.log("Address: " +address);
console.log("Phone Number: " +phoneNumber);

//Rest with Destructuring
let [number1, number2, ...restOfNumbers] = fiveNumbers;
console.log("First number: " +number1);
console.log("Second number: " +number2);
console.log("The remaining numbers: " +restOfNumbers);

//Merging and Overwriting with Spread
const book = {
    name: "",
    referenceNumber: "",
    numberOfPages: "",
    author: ""
}

const book1 = {
    name: "The Lord of the Rings",
    numberOfPages: 1207,
    author: "J.R.R. Tolkien"
}

const generalBook = {...book};
const firstBook = {...book1};

console.log(Object.assign(generalBook, firstBook));


