//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// refrence type (non premitive) data type 

// array objects function
// JavaScript dynamically typed language hai.
// Matlab, variable ka type runtime pe decide hota hai, compile time pe nahi. Aapko type explicitly declare nahi karna padta.
// javascript



const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// https://262.ecma-international.org/5.1/#sec-11.4.3

// **********************************************************************************************

// stack ye jaha bhi (primitive) type use hote h waha usea hoti h
// heap jaha bhi (non primitive ) type data use hote h wah hoti h 

// stack example

let myName = "adity singh";

let anotherName = myName;

anotherName = "deva";

console.log(myName);
console.log(anotherName)


// heap example

let userOne = {
    email: "aditya112",
    upi: "1422555"

}

let userTwo = userOne;

userTwo.email = "aditya"


console.log(userOne);
console.log(userTwo);

// heap ke andar agr hum eak jagh value change karte h to parent ke andar ki bhi value chang hoti h 


