// Primitve Datatypes

// number
// string
// boolean
// bigint
// null
// undefined
// symbol


// Non-Primitve Datatypes

// object
// array
// function


const isObject = 
{
    name:"Abuzar",
    age:"21"

}


const arr = [1,2,3,4]


const myFunction = function(){
    console.log("Hello world");
}



// console.log( typeof isObject); // Object

// console.log( typeof arr); // Object

// console.log( typeof myFunction);  // Function



// *************************************************** //


// Stack Memory (Primitve) , Heap Memory  (Non-Primitive)


let userEmail = "user@gmail.com"

let userTwoEmail = userEmail

userTwoEmail = "user@yahoo.com"

console.table([userEmail, userTwoEmail]);

let user = 

{
    name:"User",
    email:"user@gmail.com"
}

let userTwo = user

userTwo.email = "user@yahoo.com"

console.table([ user.email, userTwo.email ]);
