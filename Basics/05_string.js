
const name = "madhav-verma";
const repoCount = 50;

console.log(name + repoCount + " Value" );

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
//this is called the string interpolation => `the name is ${name}`


const gameName = new String('madhav-verma-com');//with this you have the key value pairs and it also gives the
//  length property that id very helpful in our projects

// console.log(gameName[0]);
// console.log(gameName[0].__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4); //for slicing the string
//if we give the negative indices to the substring then it neglects the 
// negative index and starts the substring from the zeroth index.

console.log(newString);

const anotherString = gameName.slice(-8,4);//in this we can also use the negative indices in it.
console.log(anotherString);

const newString1 = "     madhav     ";
console.log(newString);
console.log(newString1.trim());// remove the railing and the trailing zeroes and also removes the new line characters like("\n").


const url = "https://madhav.com/madhav%20Verma";
console.log(url.replace('%20' , '-'));

console.log(url.includes('madhav'));
console.log(url.includes('sarthak'));

//String to array conversion
console.log(gameName.split('-'));//this converts the string to the array

//check the prototype of string (which contains the methods of the strings)
// and check the mdn docs for the string methods

