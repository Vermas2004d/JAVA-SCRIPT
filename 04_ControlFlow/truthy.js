
// const userEmail = "h@hitesh.ai"
const userEmail = []

// if(userEmail ){
//     console.log('got user email');
    
// }
// else{
//     console.log('dont have user email');
    
// }

//falsy values

//fasle , 0 , -0 , BigInt (0n) , "" , null , undefined , NaN

//else all other values are the truthy values


//truthy values
// "0" , "false" , " " , [] , {} , function(){}-->this is a empty function

if(userEmail.length === 0){
    console.log("array is empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

//false == 0 , false == ' ' , 0 == ' '  in browser are true


//Nullish Coalescing Operator(??): null undefined
 
let val1;
// val1 = 5 ?? 10

// val1 = null ?? 10//used to check the null or undefined
// let var1 = undefined ?? 15//here instead of 15 we can also useing the function

val1 = null ?? 10 ?? 15; // here first number will assigned

// console.log(val1)


//Ternary Operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")



