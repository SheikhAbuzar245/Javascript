function greetings(){
    console.log("h");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
    console.log("w");
}


// greetings()


// function addNumbers(num1,num2){

//     console.log( num1 + num2 );

// }


function addNumbers(num1,num2){

    let result = num1 + num2 
    return result

}


let result = addNumbers(2,2)

// console.log("Result:",result);

// function userLoggedIn(username){

//     return `${username} Loggedin.....`

// }

// console.log(userLoggedIn("Abuzar"))

function userLoggedIn(username){

    if(!username){
        return "Please Enter a Username..."
    }

    return `${username} Loggedin.....`

}


console.log(userLoggedIn())