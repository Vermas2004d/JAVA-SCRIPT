
//singleton -->when we decalare like literals then it would not be a single ton
//when declare with constructor then it would be a single ton
// Object.create -->this is used for the constructor declaration of the object




//object literals


const mySym = Symbol("key1");

const JsUser = {
    name: "madhav",//it processes the name as a string
    "fullName" : "madhavverma",
    [mySym]: "myKey1", //enclosed the mmySym with the closed bracket to use it like a symbol, that it works like an symbol
    age:18,
    location: "Jaipur",
    email: "madhav@microsoft.com",
    isLoggedIn: false,
    lastLoginDays: ["monday" , "sunday"]

};

console.log(JsUser.age);
console.log(JsUser["lastLoginDays"]);
// console.log(JsUser."fullName");--gives the error
// console.log( JsUser.mySym)//string but we wants the symbol
console.log( JsUser[mySym])//here it is work like an symbol
console.log(typeof mySym)//symbol

JsUser.email = "madhav@chatgpt.com";
// Object.freeze(JsUser)//here we make the object freeze that any changed value do not propogate
//  to the originality of the object
JsUser.email = "madhav@gmail.com";

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

console.log(JsUser);




