// kabhi bhi apke pas pura code nhi run hona chiye jab aap login ho to kuch code run hona chiye app navigate kar rahe ho to koi code run hog a
// isi ko bolte h control flow

const ifUserloggedIn = true
const temprature = 41

if (temprature < 50) {
    console.log(`Temprature is less then 50`);
}else {
    console.log(`Temprature is grater then 50`)
}

const score = 200;

if (score > 100) {
    const power = "fly"
    console.log(`User Power: ${power}`)
    // jitni bhi chije yaha execute hui h wo yahi rahengi ye us scope se bahar nhi jaye ga 
}


// comparisons operators 
/**
 * < less then operator
 * > grater then operator
 * <= lessthe or equal to 
 * >= grater then or equal to 
 * == equality operator  = assignment operator h 
 * != not equal  
 * === strictly check karne ke liye h 
 * !== strict chek karte h negative me 
  */ 



// const balance = 1000;
// // implisit statment kahte h isko ye acha practice nhi h code ke liye 
// // if (balance > 500) console.log(`test`), console.log("test2");

// if (balance < 500) {
//     console.log(`Balance is less the 500`);
// } else if (balance < 750) {
//     console.log(`Balance is less the 750`);
// }else if (balance < 900) {
//     console.log(`Balance is less the 900`)
// }else{
//     console.log(`Balance is less then 1200`);    
// }

// let balance = 11;
  
// if (balance > 18) {
//     console.log(`Balance is less the 500`);
// } else if (balance < 13) {
//     console.log(`Balance is less the 12`);
// }else if (balance < 19) {
//     console.log(`Balance is less the 900`)
// }


const userloggedin = true;
const userhavedebitcard = true;
const loggedinfromgoogle = true;
const loggedinfromgit = false;

// This is && and operator use for the 2 value check simeltenously  

if (userloggedin && userhavedebitcard) {
    console.log(`User is allowed for Debit card`);
}

// Or operator || this is the or operator that is use to 2 thing if one is true then run the code 

if (loggedinfromgoogle || loggedinfromgit) {
    console.log(`User logged in `);
    
}