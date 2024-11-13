class User {
    constructor(userID, email, password) {
        this.userID = userID;
        this.email = email;
        this.password = password
    }

    get userID(){
        return this._userID.toUpperCase()
    }

    set userID(value){
        this._userID = value
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const shivani = new User("shivi123","s@shivi.ai", "abc")
console.log(shivani.password);
console.log(shivani.email);
console.log(shivani.userID);
