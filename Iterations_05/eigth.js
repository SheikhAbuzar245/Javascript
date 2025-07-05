const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currentValue){
//     console.log(`acc: ${acc} and currval: ${currentValue}`);
    
//     return acc + currentValue
// }, 0)

// const myTotal = myNums.reduce(( acc, currval) => acc + currval,0 )

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "Js Course",
        price: 5000,
    },
    {
        itemName: "Python Course",
        price: 3000,
    },
    {
        itemName: "Data Science Course",
        price: 12000,
    }
]

const totalCart = shoppingCart.reduce((acc,item)=>  acc + item.price, 0) 

console.log(totalCart);


// let initialPrice = 0

// shoppingCart.forEach((item)=>{

//         initialPrice = initialPrice + item.price

// })



// console.log(initialPrice);
