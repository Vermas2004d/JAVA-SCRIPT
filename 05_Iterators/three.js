/// Array specific loops


//for of
// ["" , "" , ""]
// [{} , {} , {}]


const arr = [1,2,3,4,5]

for (const val of arr) {

    console.log(val)
}

const greetings = "hello world";
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

//Maps 
//check the map documentation
const map = new Map()
map.set('IN' , "India")
map.set('USA' , "UNITED STATES OF AMERICA")
map.set('Fr' , "France")

console.log(map)

for(const [key,value] of map)
{
    console.log(key , ':-' ,value)
}

const myObject = {
    game1 : "nfs",
    game2 : "spiderman"
}


//we can not use the (for of) loops with Objects
// for(const [key , value] of myObject){
//     console.log(key , ':-' ,value)
// }



