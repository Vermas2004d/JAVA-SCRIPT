
//here we holding the promise in the variable
const promiseOne = new Promise((resolve, reject) => {
    //Do an async task
    //DB calls , cryptography , networkcall
    setTimeout(function () {
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function () {//have connection with the resolve
    console.log('Promise consumed');


})



new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2")
        resolve()
    }, 1000)

}).then(function () {
    console.log("Async 2 resolved");
})


//third promise
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" })//regularly we are using a object as an parameter in resolve//
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);

})


//fourth promise
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "hitesh", password: "123" })
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username)
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("The promise is either resolved or rejected");
    })


//promise five

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        }
        else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})


//same as the then and catch 
//async and await can not directly handled the errors
// async--> 1.Used to declare a function that always returns a promise
// 2. Even if you return a simple value , it's wrapped in a promise.

// await--> 1.Used inside async functions only.
// 2. It waits for a promise to resolve before moving to the next line.
//3. Makes async code look synchronous
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }

}

consumePromiseFive()
  

//--------------fetch() METHOD------------------//
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         // console.log(response)
//         const data = await response.json()
//         console.log(data);

//     }
//     catch (error) {
//         console.log('E: ', error);

//     }

// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))

