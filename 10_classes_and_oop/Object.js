//prototypal inheritance

function multiplyby5(num){
    this.num = num;
    return num*5;
}

multiplyby5.power = 2
console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);//by default it sets the context
//like it gives the internal properties of a function.

// function is worked as function but it refernce to the object

function createUser(username , score){
    this.username = username;//this gives the current context
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai =  new createUser("chai" , 25);
const tea = createUser("tea" , 250);

// myArray.prototype.map()

chai.printMe();//this gives the error that can not read properties of the function
// console.log(createUser.prototype);//also check this it gives you very clearence about the prototype//


/*

Here's what happens behind the scenes
 when the new keyword is used:

A new object is created: The new keyword initiates
 the creation of a new Javascript object.

 A prototype is linked: The newly created object gets linked 
 to the prototype property of the constrcutor function. This means
  that it has access to properites and methods defined on
  the constructor's prototype.

  The constructor is called: The constructor function is called with 
  the specified arguments and this is bound to the newly created object.
  If no explicit return value is specified from the constrcutor, Javascript
  assumes this, the newly created object, to be the intended return value.

The new Object is returned: After the constructor function
 has been called, if it doesn't return a non-primitive value
 (object , array , function, etc.) , the newly created object
 is returned.

*/