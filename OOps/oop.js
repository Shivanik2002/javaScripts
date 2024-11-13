const user = {
    userName: "Shivani",
    loginCount: 6,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.userName}`);
        console.log(this);
    }

}

console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);


function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
    }
    return this  //emplicitly defined
}

const user1 = new User("Shivii", 12, true)
const userTwo = new User("Shreya", 11, false)
console.log(user1.constructor);
// console.log(userTwo);