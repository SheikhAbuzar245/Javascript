const coding = [ "js","php","python","ruby"]

//  coding.forEach((item)=>{
//     console.log(item);
//  })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

//  coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
//  })

const myCoding = [
    {
        languageName: "Javascript",
        langFileName: "js" 
    },
    {
        languageName: "java",
        langFileName: "java" 
    },
    {
        languageName: "python",
        langFileName: "py" 
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})