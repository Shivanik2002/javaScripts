// ES6

class User {
    constructor(userName, email, password){
        this.userName = userName,
        this.email = email,
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.userName.toUpperCase()}`
    }
}

const user = new User("shivi", "shivi@gmail.com", 123)
console.log(user.encryptPassword());
console.log(user.changeUserName());


//behind the scene 

function Userinfo(userName, email, password) {
    this.userName = userName,
    this.email = email,
    this.password = password
}

Userinfo.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

Userinfo.prototype.ChangeUserName = function(){
    return `${this.userName.toUpperCase()}`
}


const Tea = new Userinfo("Tea", "tea@gmail.com", 123)
console.log(Tea.encryptPassword());
console.log(Tea.ChangeUserName());