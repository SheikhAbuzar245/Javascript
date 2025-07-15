const user = {
    username: "abuzar",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got User Details from DB.");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);   
    }

    return this
}


const userOne = new User('abuzar',12,true)
const userTwo = new User('sheikh',13,false)

// console.log(userOne);
console.log(userTwo.constructor);

