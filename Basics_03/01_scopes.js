// var c = 300

let a = 300

if(true){
    let a = 10
    const b = 20
    // console.log("inner: ", a)
    // var c = 30
}


// console.log(a);
// console.log(b);
// console.log(c);


// function one(){
//     const username = "abuzar"

//     function two(){
//         const website = "youtube"
//         console.log(username);
        
//     }

//     console.log(website);

//     two()
    
// }

// one()


// if (true){
//     const username = "abuzar"
//     if (username === "abuzar"){
//         const website = "youtube"

//         console.log(username + website);
//     }
//     console.log(website); 
    
// }

// console.log(username);

// ++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}





const addTwo = function(num){
    return num + 2
}


console.log(addTwo(5));