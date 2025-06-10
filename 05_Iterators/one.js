

//for 
for(let i = 1 ; i<11  ;i++){
    
    const element= i;
    // if(element == 5){
    //     console.log("5 is best number");
    // }
    // console.log(element);
    
}

for(let i = 10 ; i<20 ; i++){
    // console.log(`outer loop value: ${i}`)
    for(let j = 0 ; j< 10 ; j++){
        const element = j;
        // console.log(`outer loop value: ${i} and inner loop value: ${j}`)
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}

// //we used the ctrl+c to stop the terminal to print unfinite values
// let myArr = ["flash" , "hulk" , "thor"]
// for (let index = 0; index < myArr.length; index) {
//     const element = myArr[index];
//     console.log(element);
// }


//break and continue

for(let i = 0 ; i<=20 ; i++){
    if(i == 5){
        console.log("detected 5");
        continue
    }
    console.log(`the value of i is: ${i}`);
    
}
