// // Function ek block of code hota hai jo ek specific kaam karta hai, aur jab bhi chaho usko baar-baar use kar sakte ho.

// const { connect } = require("mongoose");

// function sayMyName() {
//     console.log("A"),
//      console.log("D"),
//       console.log("I"),
//        console.log("T"),
//         console.log("Y"),
//          console.log("A")
// }
// // aise function call karte h 

// sayMyName()

// // funtion ke andar jo () me h usko paremeters bolte h 
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
    
// }

// // yaha jo () ke andar h usko argument bolte h 
// addTwoNumbers(4, 9)


// function addTwoNumbers(number1, number2) {
// //    let result = number1 + number2
// //    return result
// //    return karne ke bad koi cod ekam nhi karta h uske niche 
// //    console.log("adity")
// return number1 + number2;
// }


// const result =addTwoNumbers(4, 5)
// console.log("Result =", result);


// function userLoggedIn(userName) {
//     return `${userName} just logged in`
// }
// // ye funtion humne return to kiya funtion return bhi ho raha h  but output nhi dala h abhi 
// // userLoggedIn("Aditya_001");
// console.log(userLoggedIn("Aditya_001"));



function userLoggedInMessage(userName) {
    // yaha ! ka mtlab h pura (userName === undefine) to console pe jaye ga
    if (!userName){
        console.log("Please entar a user name ")
        return
    }
    return `${userName} just logged in`
}

console.log(userLoggedInMessage());


function calculateCartPrice (...num1){
    return num1;
}

console.log(calculateCartPrice(100,200,300,400))


const user = {
    userName: "Aditya",
    price: 199
}

function handeleobject(anyobject) {
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`)
}

handeleobject(user)

// iske andar hum object bhi directly pass kar sakte h 

handeleobject({
    userName: "ghansyam",
    price: 399
})

// iske andar hum array bhi pass kar sakte h 


const array = [100,200,300,400,500];

function returnSecondValue (getArray){
    return getArray[1]
}

console.log(returnSecondValue(array));

// aur aise bhi direct pass kar sakte h hum

console.log(returnSecondValue([100,200,300,400,500]));
