// Singleton
// Object.create()

// object literals

const mySym = Symbol("key1")

const user = {

    name: "Abuzar",
    "fullName": "Sheikh Abuzar",
    age: 18,
    location: "Lahore",
    email: "abuzar@gmail.com",
    isLoggedin: true,
    lastLoginDays: ["Monday","Tuesday"],
    [mySym]: "key1"

}

// console.log(user.email)
// console.log(user["email"]);

// console.log(user[mySym]); 
// user.email = "sheikhabuzar@gmail.com"
// console.log(user.email);
// Object.freeze(user)
// user.email = "sheikhabuzar@yahoo.com"
// console.log(user);

user.greetings = function(){
    console.log(`Hellow ${this.name} ....`);
}

console.log(user.greetings());
