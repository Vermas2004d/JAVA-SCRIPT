
//array
const myArr = [0,1,2,3,4,5 , true , "madhav"];

// console.log(myArr[0]);
//shallow copies --> a shallow copy of an object is a copy whose properties share the same
// references (point to the same uhnderlying values) as those of the source object from which the copy was made.(eg . arrays)
//deep copies -- do not share the same reference point

const myHeroes = ["captainAmerica" , "ironman" , "hulk"];
const myArr2 = new Array(1,2,3,4);


//Array methods
// myArr.push(6);
// myArr.push(7);
// myArr.pop();//removes the last value of then array

// myArr.unshift(9);//adding 9 at top and removes the last element(like shifting happens)
// myArr.shift();//removes the top element (like shifting of top element)
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join('-');

// console.log(myArr);//type - number
// console.log(newArr);//type - string

//slice and splice

console.log("A" , myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3);//removes the elements from the original array
console.log("C" , myArr);
console.log(myn2);
