function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("I");
}

// sayMyName()

// function addTwoNumbers(number1,number2) {
//     console.log(number1 + number2);
// }

// addTwoNumbers(67,78)

function addTwoNumbers(number1,number2) {
    // let result = number1 + number2 
    // return result
    return number1 +number2
}

const result = addTwoNumbers(67,78)
console.log("Result:" , result)


function loginUserMessage(username) {
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Shivani"))
console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){
    return num1 
}

console.log(calculateCartPrice(200, 400, 500, 2000))

//________________________________________________________________

const user = {
    username: "Shivi",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

//_________________________________________________________________

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400]));

//_________________________________________________________________
