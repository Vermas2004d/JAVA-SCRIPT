

const marvel_heroes = ["thor" , "ironman" , "spiderman"];
const dc_heroes = ["superman" , "flash" , "batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3]);

// const allheroes = marvel_heroes.concat(dc_heroes);//concat the arrays and return  the new array
// console.log(allheroes);

//spread operator(...)
// const all_new_heroes = [...marvel_heroes , ...dc_heroes];
// console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6] , 7 , [6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


//used for the data scrapping

console.log(Array.isArray("madhav"));
console.log(Array.from("madhav"));
console.log(Array.from({name1: "madhav"}))  // gives []
//intersting topic -- > Array.from() (check its docmentation)


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2 , score3));




