// const user  = {
//     userName: "Aditya Singh",
//     price: 999,

//     welcomeMessage: function() {
//         // this is use for the current conxtact ko refer karta h
//         console.log(`${this.userName}, welcome to website`);
//         console.log(this)
//     }
// }
// if we not pass methot in this so run no error no any thing you have to pass method for output
// user.welcomeMessage

// user.welcomeMessage()

// user.userName = "Akash"
// user.welcomeMessage()

// browser ke andar jo global object h wo windows h

// aur this ke andar jo ata  vs code me wo empty parethisius ata h

// function chai(){
//     username: "aditya"
//     console.log(this.username)
// }

// chai();

// const chai = function () {
//     let username = "aditya"
//     console.log(this.username);
// }

// chai()

// we have only do to make arrow funtion is to place => before curly braces

// const chai =  () => {
//     let username = "aditya"
//     console.log(this.username);
// }

// chai()

// const addTwoNumber = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwoNumber(9, 10))

// eak aur trike se use karte h isko implicit return

// const addTwoNumber = (num1, num2) =>  num1 + num2

// const addTwoNumber = (num1, num2) => (num1 + num2)

const addTwoNumber = (num1, num2) => ({ username: "aditya" });

console.log(addTwoNumber(9, 10));

console.log("aditya");
