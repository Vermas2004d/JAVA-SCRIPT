
//Reduce --> check in the mdn docs

const myNums = [1,2,3]

// const myTotal =   myNums.reduce(function (acc , currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// } , 0 )//here means of zero is to give the initial value to the accumulator

/*

Intially we are assign some value to the accumulator and  
then we accumulator only take the initial value after that it will take the 
value that is returned by the function,
after all this we are returning the whole value to the variable
that holds the reduce function.


*/

const myTotal = myNums.reduce( (acc , curr) => acc + curr , 0)

console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 3999
    },
    {
        itemName: "ruby course",
        price: 4999
    },
    {
        itemName: "appDev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 8999
    },
]

const priceToPay = shoppingCart.reduce( (acc , item) => acc + item.price , 0)
console.log(priceToPay)