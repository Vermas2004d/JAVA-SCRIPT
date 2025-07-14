const user = {
//basic unit
    username: "hitesh",
    loginCount : "8",
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
};


// console.log(user.username);
// console.log(user.getUserDetails());
// // console.log(this);// gives the empty
//try this on the console in browser//



//-------CONSTRUCTOR FUNCTION------------//

// const promiseOne = new Promise() //here new keyword is constrcutor function
//used to make the new context


function User(username , loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }


    return this;//this is the object
    //implicitly defined if we are writing the return this or not//
}

// const userOne = User("hitesh" , 12 , true);
// const userTwo = User("Chai aur code" , 11 , false);
//here we are not using
//  the constructor function (new)
//  so the userTwo 
// will overwrite the values of the userOne
const userOne = new User("hitesh" , 12 , true);
const userTwo = new User("Chai aur code" , 11 , false);

console.log(userOne.constructor);//constrcutor is the refernce to itself
//check about the {instance of operator}//
// console.log(userOne)

//when using the new keyword 
// 1--> empty object is created we called it Instance.
//2--> constrcutor function called due to the new keyword.
//3--> this keyword injected all arguments inside it
//4--> returns all values to the function
