// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log('Async Task is Complete');      
//         resolve()
//     },1000)
// })

// promiseOne.then(()=>{
//     console.log("Promise Consumed");
// })


// new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Async Task 2");
//         resolve()
//     },1000)
// })

// .then(()=>{
//     console.log("Async 2 Resolved");
    
// })


// const promiseThree = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         resolve({username: "abuzar", email: "test@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(data){
//     console.log(data.email);
// })


// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         let error = true
//         if(!error){
//             resolve({username: "abuzar", password: "pass123"})
//         } else{
//             reject('Error: Something went wrong')
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((error)=>{
//     console.log(error);    
// })
// .finally(()=>{
//      console.log("Promise is Either Resolved or Rejected");
     
// })


// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         let error = true

//         if(!error){
//             resolve({username: "abuzar", password: "pass123"})
//         } else{
//             reject('ERROR: JS went Wrong')
//         }
//     },1000)
// })


// async function consumePromise() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// consumePromise()

// async function getData() {
//     try {
//         const response = await fetch(`https://api.github.com/users/SheikhAbuzar245`)
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }   
// }

// getData()


fetch('https://api.github.com/users/SheikhAbuzar245')
.then((res)=>{
   return res.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})