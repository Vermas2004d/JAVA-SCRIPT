
const score = 400;
console.log(score);//this gives only value

// const balance = new Number(100.7090);
const balance = new Number(123.8966);
console.log(balance);//this gives the value with the type number that shows it exactly a number.

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966;

console.log(otherNumber.toPrecision(4));//it takes only the 4 numbers but it is more precise for the 
// numbers that comes before the zero



const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));//check this//

//Number datatype have some of the functions like min_function and max function which 
// is used to do dsa problems
console.log(Number.MAX_VALUE);//gives the max value
console.log(Number.MIN_VALUE); //gives the min value


// +++++++++++++ Maths ++++++++++++++++++
//it is the default library in the javascript

console.log(Math);//gives the whole functions of maths
// console.log(Math.abs(4));
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.9));
// console.log(Math.floor(4.9));

// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,7,8));

console.log(Math.random());//gives the value between the zero and the one
console.log(Math.floor((Math.random()*10) +1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1)) + min)
//used to check the number between min and max and avoiding the case of zero by
//adding the min to the math.floor//


