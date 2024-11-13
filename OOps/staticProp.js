class user{
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`Username: ${this.userName}`);
    }
    static createId(){
        return `123`
    }
}
const shivani = new user("shivani")
// console.log(shivani.createId())

class Teacher extends user {
    constructor(userName, email){
        super(userName)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();
// console.log(iphone.createId());