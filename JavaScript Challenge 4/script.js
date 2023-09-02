//Step 1
const fiveNumbers = [-10, 23, 49, 76, -60];

const personalInfo = {
    name: "Jana",
    age: 28,
    height: 170,
    location: "Spain",
    nationality: "Europe"
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
console.log("Name: " + name);
console.log("Location: " + loc);
console.log("Nationality: " + nationality);



