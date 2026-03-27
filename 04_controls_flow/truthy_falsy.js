const usermail = "akash.aditya001@gmail.com";

if (usermail) {
    console.log(`User have email`);
    
} else {
    console.log(`User have not valid email`);
    
}

/** flasy values 
 * False   boolean 
 * 0       Number
 * -0      Number  
 * 0n      Bigint
 * ""      String
 * null    null
 * undefined undefine
 * NaN       number
 */
// iske bad jo h wo truthy values h 

//  agar string ke andar "0" h to ye truthy value h 
// 'falase'  ye bhi truthy value h 
// " " agar string ke andar eak space wo bhi truthy value h [],{}, function() {}

// empty array kise check karte h

const emptyarray = [];

if (emptyarray.length === 0){
    console.log(`array is empty`)
}

const emptyobj = {};

if (Object.keys(emptyobj).length === 0) {
    console.log("Empty object")
}

// Nullish coalescing operator(??): null undefine

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1)

// ternary operator

// condition ? true: false ;

const iceTeaprice = 80;
iceTeaprice >= 80 ? console.log("iceteaprice is  50"): console.log("ice tea price is above 80");

