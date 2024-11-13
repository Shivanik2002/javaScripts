class User {
    constructor (username) {
        this.username = username
    }

    logMe(){
        console.log(`User name is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teach = new Teacher("teach", "teach@gmail.com", "123")
teach.logMe()
teach.addCourse()
const teaching = new User("Teaching")

teaching.logMe()

console.log(teach === teaching);
console.log(Teacher === teaching);

console.log(teach instanceof User);