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

// function userLoggedIn(username){

//     if(!username){
//         return "Please Enter a Username..."
//     }

//     return `${username} Loggedin.....`

// }


// console.log(userLoggedIn())

function calculateCartPrice(val1 ,val2 ,...num1){

    return num1

}

console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {

    username: "Abuzar",
    age: "21"

}

function handleObject(anyObject){

    console.log(`Username is ${anyObject.username} Age is ${anyObject.age}`);
    

}

// handleObject(user)

// handleObject({
//     username: "Sheikh",
//     age: "21"
// })


const myArr = [200,300,500]

function handleArray(getArray){
    return getArray[1]
}


console.log(handleArray(myArr));
 