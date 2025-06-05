

const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage : function(){
        console.log(`${this.username} successfully loggedIn with price ${this.price}`)
        console.log(this);
        

    }
}

// user.welcomeMessage()
// user.username = "sam"//here we are changing the context of the object user
// user.welcomeMessage()

console.log(this) //--> //we are in the node environment so the this instance is empty

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);//not working with the functions only with the objects
// }

// chai()

// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
// }

// chai()


// () => {}  -- > arrow function

// const addTwo = (num1  , num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4))


//implicit return
//  const addTwo = (num1  , num2) =>   num1 + num2
// const addTwo = (num1 , num2) => (num1+num2)

//returning the object with the help of the arrow functions
const addTwo = (num1 , num2) => ({username : "madhav"})

console.log(addTwo(3,5))

// const myArray = [2 , 5 , 3 , 7, 8]

// myArray.forEach()
