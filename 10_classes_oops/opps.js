
// const user = {
//     userName: "Aditya singh",
//     loggedInCount: 8, 
//     signedIn: true,


//     getuserDetail: function() {
//         console.log(`userName: ${this.userName}`)
//     }
// }
// console.log(user.userName)
// console.log(user.getuserDetail())


function User(userName, loggedIncount, isloggedin) {
    this.userName = userName,
    this.loggedInCount = loggedIncount,
    this.isloggedin = isloggedin
    return this
}

const userOne = new User("aditya", 12, true);
const userTwo = new User("chai aur code", 11, false);
console.log(userOne)

// jab bhi aap new keyword use karte h to eak empty object create hota h jisko instance bola jata h
// step 2 apka constructor funtion call hota h new keyword ke karan
// third step me apko jo this keyword h usme sab inject ho jate h 
// fouth step me mil jata h 

