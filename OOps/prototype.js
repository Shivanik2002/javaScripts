// let myName = "Shivani    "
// let myChannel = "Youtube    "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderman: function() {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shivani = function() {
    console.log(`shivani is present in all objects`);
}

Array.prototype.heyshivani = function() {
    console.log(`Shivani says hello`);
}

// heroPower.shivani()
myHeros.shivani()
myHeros.heyshivani()
// heroPower.heyshivani()


// inheritance

const User = {
    name: "Shivi",
    email: "shivi@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime: true,
    __proto__: TeacherSupport

}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherUserName = "Shivii           "
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUserName.trueLength()
"Shivani".trueLength()
"iceTea".trueLength()