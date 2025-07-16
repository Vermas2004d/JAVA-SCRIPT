
// let myName = "hitesh    ";this gives 10.

let myName = "hitesh    ";
let myChannel = "chai    ";

String.prototype.trueLength = function(){

    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

console.log(myName.trueLength());//gives undefined
//so we have to make the trueLength method for our strings.



let myHeroes = ["thor" , "spiderman" ];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderpower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
    
}

Array.prototype.heyHitesh = function(){
    console.log("hitesh says hello");
}

// heroPower.hitesh();
myHeroes.hitesh();//array is also a object so we can 
// also use the hitesh() method to it
myHeroes.heyHitesh();
// heroPower.heyHitesh() //--> gives error


//inheritance

const User = {
    name : "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = TASupport//this is the outdated approach


console.log(Teacher.isAvailable);


//modern syntax
Object.setPrototypeOf(Teacher , TeachingSupport);//gives the Teaching support values to teacher
console.log(Teacher.isAvailable);



"hitesh".trueLength();
"iceTea".trueLength();