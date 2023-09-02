//Step 1
const fiveNumbers = [-10, 23, 49, 76, -60];

const personalInfo = {
    name: "Jana",
    age: 28,
    height: 170,
    location: "my location",
    nationality: "my nationality"
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





