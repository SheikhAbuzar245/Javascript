const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
}

// for (const key in myObject) {
//     console.log(`${key} : ${myObject[key]}`);
    
// }


// for (const [key,value] in myObject) {
//     console.log(key, ':', value);
    
// }


// const myArr = ["js","cpp","ruby"]

// for (const key in myArr) {
//     console.log(myArr[key]);
    
// }


const map = new Map()

map.set('PK',"Pakistan")
map.set('USA', "United States of America")


for (const key in map) {
    console.log(key);
    
}