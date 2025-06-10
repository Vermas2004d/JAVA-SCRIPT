
const myObject = {
    js: "javascript",
    cpp : "c++",
    rb: "ruby",
    swift  : "swift by app"
}

//for in
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
   
}

const programming = ["js" , "rb" , 'py' , 'java']
for(const key in programming){
    console.log(programming[key]);
    
}


const map = new Map()
map.set('IN' , "India")
map.set('USA' , "UNITED STATES OF AMERICA")
map.set('Fr' , "France")

//not possible in maps for (for in loop)
// for(const [key , value] in map){
//     console.log(key , value);
    
// }

