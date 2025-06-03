//check the mdn for date objects
///original website gives the proposal of 
// Temporal object for the date and time



//Dates
let myDate = new Date();//date object
console.log(myDate.toString());
console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
console.log(myDate.toLocaleString());
console.log(typeof myDate);//object

// let myCreatedDate = new Date(2023 , 0 , 23);//months starts from the 0th month and ends at the 11th month
// let myCreatedDate = new Date(2023 , 0 , 23 , 5 , 3);
// let myCreatedDate = new Date("2023-12-14");//in this case normal counting of the numbers are used like(1-12).
let myCreatedDate = new Date("01-14-2023");//mm-dd-yy
// console.log(myCreatedDate.toLocaleString());



//-->TimeStamps --> for designing the poles or quizes
let myTimeStamp = Date.now();
// console.log(myTimeStamp);//it gives the ms value from the date that is given in the mdn docs
// console.log(myCreatedDate.getTime()) 

// console.log(Math.floor(Date.now()/1000));//conversion of the milliseconds to the seconds

let newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth() +1);

//ctrl+space --> to check the suggestions for the required one
console.log(newDate.toLocaleString('default', {
        weekday: "long"
    
}))//this toLocaleString Function is very useful 
//because in this we can make our default properties for the date like (weekday : long)//







