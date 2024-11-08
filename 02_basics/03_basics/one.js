// if

const isUserLoggedIn = true
const temerature = 41

if(2 != 1){
    console.log("executed!")
}

// if (temerature < 50) {
//     console.log("less than 50");
// }
// console.log("temperature is greater than 50")

if (temerature === 40) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==

const score = 200
if (score > 100) {
    const power = "fly"                     // Blocks scope
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);


const balance = 1000

// Don't do like this 
// if(balance > 500) console.log("test"),console.log("test2");

if (balance < 500) {
    console.log("less than");
} else if (balance < 750) {
    console.log("less than 750")
} else if (balance < 900) {
    console.log("less than 900")
} else {
    console.log("less than 1200")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

//***************************************************************/

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("january");
        break;

    case 2:
        console.log("febuary");
        break;

    case 3:
        console.log("march");
        break;

    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}