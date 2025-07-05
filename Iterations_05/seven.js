const myNums = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNums.map((num)=>{
//     return num + 10;
// })

// let newArr = []

// let newNums = myNums.forEach((num)=>{
//      let result = num + 10
//      newArr.push(result) 
// })

// console.log(newArr);


let newNums = myNums
            .map((num)=> num * 10 )
            .map((num)=> num + 1)
            .filter((num)=> num >= 40 )

console.log(newNums);
            