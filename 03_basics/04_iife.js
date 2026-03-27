// Immditely Invoked Function Expression (IIFE)


// global scope ke polution ko niklne ke liye humne iffe ka use kiya 

(function chai () {
    // this is named iffe 
    console.log(`DB connected`)
})();
// agr semi colan nhi lagunga to ye ruke ga nhi 


((name) => {
    // this is unnamed iffe 
    console.log(`DB connected Two${name}`)
})("aditya")