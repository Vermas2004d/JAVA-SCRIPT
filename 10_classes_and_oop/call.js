


function setUserName(username){
    //complex DB calls
    this.username = username;
    console.log('called');
}

function createUser(username , email , password){
    // setUserName(username);//this will not take the refernce of setUserName function
    setUserName.call(this , username);


    this.email = email;
    this.password = password
}

const chai = new createUser("chai" ,"chai@fb.com" , "123");
console.log(chai);