const user = {
    username: "abuzar",
    age: 21,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
        console.log(this);

    }

}

// user.welcomeMessage()
// user.username = "sheikh abuzar"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let username = "abuzar"
//     console.log(this.username);
// }

// one()


// *********************** Arrow Function ******************** 


// const one = ()=> {
//     let username = "abuzar"
//     console.log(this);
// }

// one()


// const addTwo = (num1,num2)=>{
//     return num1 + num2
// }


// const addTwo = (num1,num2) =>  num1 + num2

// const addTwo = (num1,num2) =>  (num1 + num2)

const addTwo = (num1,num2) =>  ( {username: "Abuzar"} )

console.log(addTwo(2,3));
