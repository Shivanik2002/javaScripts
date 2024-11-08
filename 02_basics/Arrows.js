const user = {
    username: "Shivani",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()
console.log(this);

function one(){
    let user = "shivi"
    console.log(this.user);
}

one()

// const chai = function () {
//     let user = "shivi"
//     console.log(this.user);
// }

// chai()

const chai = () => {
    let username = "Shivani"
    console.log(this);
}

chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "shivi"})

console.log(addTwo(3,4))