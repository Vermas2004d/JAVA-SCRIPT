//datatypes are classified into two types :
// 1. primitive and 2. Non-premitive or reference type
//these are classified according to how they take and fetch memory space

//Primitive:
//7 types: String , Number , Boolean , null , undefined , Symbol(unique) , BigInt




const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;

let userEmail = undefined;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);
// console.log(id);
// console.log(anotherId);

const bigNumber = 3432534534634545532221432412412412412412412413n;
console.log(typeof bigNumber);




//Reference type(Non-premitive) --> have direct refernce in memory
// Array , Objects , Functions  

//array
const heroes = ["shaktiman" , "nagraj" , "doga"]

//Object
let myObj = {
    name: "madhav",
    age : 20,
};


const myFunction = function(){
    console.log("hello world");
};

console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof anotherId);

//check type of operator with the help of the ecma script(11.4.3)?





//javascript is statically typed or dynamically typed?
//give the answer of this question

//******************/
// Stack (Primitive) --> gives the copy of the variable , Heap(Non-Primitive)-->gives the reference of the original value like pointers.

let myYoutubeName = "madhavYoutube";
let anotherName = myYoutubeName;

anotherName = "chaiaurcode";
console.log(anotherName);
console.log(myYoutubeName);


let user1 = {//here it stores the object into the heap memory
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1;//it gives the reference of the user1(address of the user1 from the heap)
user2.email = "email@gmail.com";

console.log(user1);
