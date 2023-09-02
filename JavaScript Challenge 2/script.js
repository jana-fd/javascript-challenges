//Step 1
let myAge = 24;
if (myAge >= 20) {
    console.log("You can enter this room.");
}
else {
    console.log("You can't enter this room.");
}

const expression1 = 5 > 3;
const expression2 = 10 === '10';
const expression3 = true && false;
const expression4 = !expression3;

console.log(`5 > 3 is ${expression1}, 10 === '10' is ${expression2}, true && false is ${expression3} and !(true && false) is ${expression4}.`);


//Step 2
const age = 25;
const hasDriverLicense = true;
const hasCar = false;

let canDrive = false;
if (age >= 18 && hasDriverLicense) canDrive = true;

let canRentCar = false;
if (age >= 22 && hasDriverLicense && !hasCar) canRentCar = true;

let needDriver = false;
if (age < 18 && !hasDriverLicense && !hasCar) needDriver = true;


//Step 3
let role = "admin";
switch (role) {
    case ("admin"):
        console.log("You have read and write access for the data."); 
        break;
    case ("user"):
        console.log("You have only read access for the data.");
        break;
    case ("guest"):
        console.log("You have no access for the data.");
        break;
    default:
        console.log("User role is not recognized.");
}
