// const score = 400;
// console.log(score)

// const balance = new Number(400);
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(1))


// const otherNumber = 123.8346

// console.log(otherNumber.toPrecision(4));


// const hundreds = 100000
// // en-IN ka means h ki ye indian standard ke hisab se kare ga .jo , use kare ga define nhi karenge to wo us standard ke hisab se kar dega .
// console.log(hundreds.toLocaleString('en-IN'))

// *************************************Maths

// console.log(Math)

// console.log(Math.abs(-4));
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.6))
// console.log(Math.floor(4.9));

// console.log(Math.min(1,2,3,4))
// console.log(Math.max(1,2,3,4))

// isse random no generate hote h 1 se aur zero ke bich me 
console.log(Math.random())

// aur agr chate ho ki one se bada no aye to 10 se multiply kar do 

console.log(Math.random()*10)

// aur cahte ho ki kabhi zero na aye to +1 kar do 

console.log((Math.random()*10) + 1)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min))
