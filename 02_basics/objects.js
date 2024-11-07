// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shivani",
    "fullName": "Shivani Kushwah",
    [mySym]: "mykey1",
    age: 20,
    location: "Ujjain",
    email: "shivanitawny@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["fullName"])
console.log(JsUser.fullName)
console.log(JsUser[mySym])

JsUser.email = "shivani@tcs.com"
// Object.freeze(JsUser)
JsUser.email = "shivanisingh@tcs.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user , ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
