
// var c = 300
let a = 300

//global scope


if(true){
    let a = 10
    const b = 20
    //  c = 30
     //local scope
    //  console.log("inner " , a);

    //  function addnum(){

    //  }

}


//in browser the core scope and when we run the scipt with the 
//help of the node then the both the scopes are different , remember that and check that later.


// console.log("outside ", a)//300
// // console.log(b);
// console.log(c);//30

//--> what are closures? check it --> used with the doms(discssussing later with the dom)


function one(){
    const userName = "hitesh"

    function two(){
        const website = "youtube"
        console.log(userName);
    }
    //some times it called as closure

    // console.log(website)
    two()
    //child function can access the members of the parent function
}

one()


if(true){
    const userName = "hitesh";
    if(userName === "hitesh"){
        const website = "youtube"
        console.log(userName + website)
    }

    // console.log(website);
}

// console.log(userName);


// +++++++++++++++++++++++++++ interesting ++++++++++


console.log(addone(5));
function addone(num){
        return num +1; //this is called a basic function
}




//another way to create a function -- >this is also called the Expression
// console.log(addTwo(5)) //this will creates the hoisting which is
//  not allowed in this type of functions
const addTwo = function(num){
    return num+2;
}
//hoisting is the concept in which we are calling a 
// function before defining the function












