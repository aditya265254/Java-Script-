// singleton
// object litrels ki trah declare karte h to singleton nhi bnata h constructor se bane ga to single ton hota h 

// object litrels


// ye ban gya hamara object 
// const Jsuser = {} 


// eak aur method se object bna sakte h is ko kahte h constructor method se object banana isi ke andar singleton banta h 
// Object.create

const mysym = Symbol ("key1")


const jsUser = {
    name: "Aditya Singh",
    "last Name": "Singh",
    // agr apko isko symble ki tah use karan h to [] bracket me use karna chiye 
    [mysym]: "meykey1",
    age: 10,
    email: "akash.aditya001@gmail.com",
    location: "jaipur",
    isLogedin: false,
    lastLoginDays: ["monday", "wednesday"]

}

// 2 tarike se aap object ko acces kar sakte h 
// first h jsUser.name and ect value aap acces kar sakt h 
console.log(jsUser.name);

// to agr koi last name string me declear kiya h to last name normally acess nhi hoga apko aise karna hoga [] iske andar

console.log(jsUser["last Name"])

// console.log(jsUser[mysym]);

// object ko change kise karte h 
jsUser.name = "Akash"

// object ko object.frez se frzz kar dete h fir dubara wo chang nhi hoga

// Object.freeze(jsUser)

jsUser.name = "Aditya Sing";
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js Users")
}


jsUser.greetingtwo = function(){
    console.log(`Hello js Users ${this.name}`)
}


console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());

console.log(jsUser);



