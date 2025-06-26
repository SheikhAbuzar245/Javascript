let num = 100
// console.log(num)

let number = new Number(100)
// console.log(number);

let otherNumber = 100000000
// console.log(otherNumber.toString().length)
// console.log(otherNumber.toLocaleString())

let decimalNumber = 123.789 
// console.log(decimalNumber.toPrecision(4));


// *************** Math ************** //

// console.log(Math.abs(-5));
// console.log(Math.round(5.67));
// console.log(Math.ceil(5.67));
// console.log(Math.floor(5.67));
// console.log(Math.min( 5,6,7,8,4 ));
// console.log(Math.max( 5,6,7,8,4 ));



// console.log(Math.random());
// console.log(Math.floor(Math.random()*10) + 1);

let min = 10
let max = 20

let value = Math.floor(Math.random() * ( max - min + 1 ) + min)

console.log(value);
