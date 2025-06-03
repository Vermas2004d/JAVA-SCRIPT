
// javascript have the simple engine like v8 engine that is 
// used to run the javascript outside the browser


const accountId = 144553;
let accountEmail = "email@gmail.com";
var accountPassword = "12345";//based on the scope //
accountCity = "Jaipur";
let value ;
//if you print the value varible so it shows the undefined(because you declare a varible without giving any value to it).

// accountId = 2;
/*
we can also use this type of varible like
accountId = 2 ,in this we are using the space of the varible but we are not 
making a variable and it is not good habbit to do it.


*/

accountEmail = "mv@mv.com";
accountPassword = "212121";
accountCity = "Bengaluru";

console.log(accountId);
console.table([accountId , accountEmail , accountPassword , accountCity])

/*

Prefer not to use var
because of issue in block scope and functional scope



*/

let name1 = "madhav";
var name2 = "sarthak";

{
    let name1 = "verma";
    var name2 = "madhav";
    console.table([name1 , name2]);

    
}

console.table([name1 , name2]);

/*
THE KEY DIFFERNCE BETWEEN THE var AND let keywords in javscript
is how they determine the scope of the variable:

-->var is function-scoped: A varible declared with var is available throughout
the entire function in which it is declared, or globally if declared outside any function.
This means a var varible declared inside a block(like an if statement or for loop)
is still accessible outside that block within the same function.

-->let is block-scoped: A varible declared with let is only accessible within the block
(enclosed by curly braces {}) where it is declared. If you declare a let variable inside a
block, it cannot be accessed outside that block.


-->Additionally, var allows redeclaration of the same variable in the same scope, while
let does not . Using let is generally considered safer and more predictable for modern
javascript development.

*/





