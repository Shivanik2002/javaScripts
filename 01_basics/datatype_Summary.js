// primitive 

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 23465787889985n


// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Shivani",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId)

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// ******************************************************

// stack (Primitive) copy, Heap (Non-Primitive) reference

let myName = "ShivaniKushwah"
let anotherName = myName
anotherName = "shivii"
console.log(myName);
console.log(anotherName);

let user = {
    email : "shivi@gmail.com",
    upi : "user@ybl"
}

let userTwo = user
userTwo.email = "shivi123@gmail.com";

console.log(user.email);
console.log(userTwo.email);