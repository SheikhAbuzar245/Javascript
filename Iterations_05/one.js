//for

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is the Best Number");
//     }
//     console.log(element)
    
// }

// for (let i = 1; i <= 10; i++) {
//     // console.log(`Outer Loop: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner Loop Value ${j} Outer Loop Value ${i}`);
//      console.log(i + '*' + j +' = ' + i*j);
        
        
//     }
    
// }

let myArr = [2,3,4,5,6]

// for (let i = 0; i < myArr.length; i++) {
//     const element = myArr[i];
//     console.log(element);
    
// }

// Break & Continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`5 is Detected...`);
//         break;
//     }
//     console.log(`Value of i is: ${i}`);
       
// }

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`5 is Detected...`);
        continue;
    }
    console.log(`Value of i is: ${i}`);
       
}