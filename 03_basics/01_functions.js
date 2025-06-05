

function sayMyName(){
    console.log("m")
    console.log("a")
    console.log("d")
    console.log("h")
    console.log("a")
    console.log("v")
}

// sayMyName()

// function addTwoNumbers(number1 , number2){//parameters
//     console.log(number1 + number2);

// // }
// const result = addTwoNumbers(3,5)//arguments 
// console.log("result: " + result); //this gives result: undefined//




function addTwoNumbers(number1 , number2){//parameters
        
    // let result  = number1 + number2;
    // return result;
    return number1 + number2;
    
}

const result = addTwoNumbers(3,5)//arguments 
// console.log("result: " + result);

function loginUserMessage(username = "sam"){

    // if(undefined or emptystring) --> it means the if condition returns a false
    if(username === undefined){
        console.log('please enter a username');
        return
    }
        return `${username} just logged in`
}

let result2 = loginUserMessage('madhav');
// console.log(result2);

console.log(loginUserMessage()) //when we not passed any value to the function then it takes as
//the undefined


function calculateCartPrice(val1 , val2 , ...num1){//here is (...) is used as the rest operator
    //(...) makes the arguments into an array, then we can access the
    //  multiple values by itearing the array
    //val1 = 200 , val2 = 400
    return num1
}

// let result3 = calculateCartPrice(2)
// console.log(calculateCartPrice(200 , 400 , 500,2000))

const user = {
    username : "hitesh",
    price: 199

}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200 , 400 , 100 , 600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 , 400 , 100 , 600]))




