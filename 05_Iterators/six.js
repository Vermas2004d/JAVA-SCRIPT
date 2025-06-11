const coding = ["js" , "ruby" , "java" , "python"]


// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item// this does not return any value , forEach does not work with return statement
// })

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//     return num > 4 // in this it will returning the values
// })

// console.log(newNums);


// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)//doing the same as the filter do//
//     }
    
// })

// console.log(newNums);

const books = [
    {
        title: 'book one' , genre: 'history' , publish: 1980 , edition: 1985
    },
    {
        title: 'book two' , genre: 'science' , publish: 1997 , edition: 2004
    },
    {
        title: 'book three', genre: 'maths' , publish: 2004, edition: 2024
    },
    {
        title: 'book four' , genre: 'science-2' , publish: 1978 , edition: 2009
    },
    {
        title: 'book five' , genre: 'science-3' , publish: 1989 , edition: 2008
    },
    {
        title: 'book six' , genre: 'science-4' , publish: 1987 , edition: 2020
    },
    {
        title: 'book seven' , genre: 'science-5' , publish: 1999 , edition: 2016
    },
    {
        title: 'book eight' , genre: 'science-6' , publish: 1979 , edition: 2007
    },
    {
        title: 'book nine' , genre: 'history' , publish: 1988, edition: 2025
    },
    {
        title: 'book ten' , genre: 'science-8' , publish: 1990 , edition: 2015
    }


]

// const userBooks = books.filter( (bk) => {
//     return bk.genre === 'history'
// })


// const userBooks1 = books.filter( (bk) => bk.edition >= 2000)

// console.log(userBooks1);

userBooks = books.filter( (bk) => {
    return bk.edition >= 1995 && bk.genre === "history"
})

console.log(userBooks)



