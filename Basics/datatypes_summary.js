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