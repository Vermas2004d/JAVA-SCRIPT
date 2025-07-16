

class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

   static createId(){//with the static keyword the object can't access the static keyword//
        return `123`;
    }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId());//now gives error

class Teacher extends User{
    constructor(username , email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone" , "i@phone.com");
iphone.logMe();
console.log(iphone.createId());