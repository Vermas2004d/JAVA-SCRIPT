
const coding = ["js" , "ruby" , "java" , "python"]

// coding.forEach(function (item){

// })


// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe) //passing printMe as the parameter

///forEach loop has the three parameters
coding.forEach((item , index , arr) =>{
    console.log(item , index , arr);
} )


const myCoding = [
    {
    languageName: "jaavscript",
    languageFileName : "js"
    },

    {
    languageName: "python",
    languageFileName : "py"
    },

    {
    languageName: "ruby",
    languageFileName : "rb"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})





