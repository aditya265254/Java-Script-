// scopes 

// curly braces hi scope h {} ye har jagah use hota h yr jab kisi funtion ke sath ata h if else ke sath ata h tab isko bolte h scope of that program 

if (true) {
    let a = 10
    const b = 20
    var c = 10    
    // if ke andar jitni value h wo block scope h aur if ke bahar global scope h 
}
// ye karne pe error aye ga kyo ki a if ke andar h mtlab local sope h me
// console.log(a);
// same wahi const ke sath hoga 
// console.log(b);
// lekin var ke sath nhi var apne aap ye top pe host ho jata h isi liye iska use nhi karte h mn lo ki eak coder h uske kahi aur var declere kiya  humne bhi kar diya to wo value bhi change ho jaye gi is wajah se dikkat h ver me 
// console.log(c)


// function one(){
//     userName = "aditya"

//     function two() {
//         const website = "youtub.com"
//         console.log(userName);
//     }
//     // yaha error is liye aa rah h kyo ki yaha pe iske scope se bahar hum call kar rahe h 
//     // console.log(website);
//     // two()
    
// }
// one()

// if (true) {
//     const userName = "Aditya"
//     if (userName === "Aditya") {
//         const website = " Youtub"
//         console.log(userName + website)
//     } 
// }


// *******************************Intresting****************************************************

// is funtion me declaration se pahle acces kar sakte h 
function addOne(num) {
    return num + 1
}

addOne(6);

// isme declaration ke bad hi acces kar sakte h nhi to ye error dega 
const addTwo = function(num){
    return num + 2
}

addTwo(5);