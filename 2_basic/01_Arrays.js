// {} curly braces
// () parenthisies 
// [] square brackets
// Java script array is resizeable 


const myArray = [1, 2, 3, 4, 5, 6, 7]


const myHeros = ["saktiman", "gangadhar", "heros"]

const myArray2 = new Array (1, 2, 3, 4, 5, 6);

// console.log(myArray2[2]);
// console.log(myArray[0]);

// Array method 


// push ka mtlab ye h ki arrey me ye value add karna 
// myArray.push(8)


// pop menas last value remove karta 
// myArray.pop();

// unshift se value first me store hoti h 
// myArray.unshift(0);
// shift se pahli value remove hoti h 
//  myArray.shift();

// console.log(myArray);

// jo value array me nhi h usko ye -1 me dikhata h 
// console.log(myArray.includes(8));
// console.log(myArray.indexOf(9));


// array join use karte h string me convert karne ke liye 

// const newArr = myArray.join()

// console.log(typeof(newArr))
// console.log(typeof(myArray))

// console.log("A", myArray)

// const myn1 = myArray.slice(1,3)

// console.log(myn1);
// console.log("b", myArray)


// splice array ki vlaue kat deta h aur last vlue bhi include kart h

const myn2 = myArray.splice(1,3)
console.log("c", myArray)
console.log(myn2);


