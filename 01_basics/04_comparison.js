
console.log(2 >1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2==1);
console.log(2!=1);


// avoid these types of the conversions
console.log("2" >1); //true
console.log("02" > 1);//true

console.log(null > 0);//false
console.log(null ==0 );//false
console.log(null>=0); //true

/*

The reason is that an equality check == and comparisons > <>= <= work differently.
Comparisons convert null to a number, treating it as 0.



*/

console.log(undefined == 0);// false
console.log(undefined > 0);// false
console.log(undefined < 0);//false

//===(strictly checks the values and its datatype)
console.log("2" === 2);

