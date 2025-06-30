// const user = new Object()
// console.log(user);

const user = {}

user.id = 1
user.name = "Abuzar"
user.isLoggedin = true

// console.log(user);

const regulerUser = {
    email: "abc@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Sheikh",
            lastName: "Abuzar"
        }
    }
}

// console.log(regulerUser.fullname.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj3 = { obj1 , obj2 }
// const obj4 = Object.assign( {} , obj1 , obj2 , obj3 )

const obj4 = { ...obj1, ...obj2, ...obj3 }

// console.log(obj4);


const users = [
    {
        id: 1,
        email: "abuzar@gmail.com"
    },
    {
        id: 2,
        email: "abuzar@gmail.com"
    },
    {
        id: 3,
        email: "abuzar@gmail.com"
    }
]

// console.log( users[1].email );


// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty('name'));

const course = {
    courseName: "Web Dev",
    price: 999
}

// course.price

const {price: coursePrice} = course
console.log(coursePrice);


