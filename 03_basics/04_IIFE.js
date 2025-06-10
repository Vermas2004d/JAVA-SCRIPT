
//Immediately Invoked Function Expressions (IIFE)

//check the explanation of the IIFE in the docs and also read
//about this doc

(function chai(){ 
    //named IIFE
    console.log(`DB CONNECTED`);
})();


///-->used for the prevention from the problems caused by the 
//global scope pollutants
//IIFE by the arrow function
( (name) => {
    //simple IIFE
    console.log(`DB CONNECTED TWO ${name1}`);
})('hitesh');

