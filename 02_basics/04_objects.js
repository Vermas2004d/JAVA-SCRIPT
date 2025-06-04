
// const tinderuser = new Object(); -->singleton object

const tinderUser = { // non singletin

}

 tinderUser.id = "123abc"
 tinderUser.name = "sammy"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "email@gmail.com",
    fullName : {
        userFullName : {
            firstname: "madhav",
            lastname : "verma"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstname);
// console.log(regularUser);

const obj1 = {1: "a ", 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj4 = {5: "a" , 6:"b"}
// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} ,obj1 , obj2 , obj4)//{} this is the optional value
//check the documentation for that (mdn docs)  for object assign
const obj3 = {...obj1 , ...obj2 , ...obj4};
console.log(obj3)



//in cases when data is comes from the database
const users = [
    {
        id: 1,
        email: "madhav@gmail.com"
    },

    {

    },
    {

    }
]

// users[1].email
// console.log(tinderUser);

// console.log( Object.keys(tinderUser));
// //this makes the keys of the tinderUser object to array
// // that we will iterate through the array and make the keys  of the object in our use.
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));//it gives the key value paired array


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//to check the property before using it//



//destructuring of the object --> starts

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor)




//Examples of the react props where we used the object destructuring
// const navbar = (props.company) => {

// }

// const navbar = ({company}) =>{

// }

// navbar(company = "hitesh")


// `{
//     "name" : "hitesh"
//     "coursename": "js in hindi"
//     "price" : "free"
// }`

//when we call the api then it gives the content in the form of json
//when we handle api's and then some time we get difficult infomation that is difficult to understand 
//and that is in the object or json format and 
//and to understand that we used the json formatter to fomat the data 
// , that we can understand the data










