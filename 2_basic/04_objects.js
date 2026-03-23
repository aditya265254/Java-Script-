// single ton object declere and non single ton object

// const tinederuser = new Object()

// non single ton

const tinderUser = {}

tinderUser.name = "Adity"
tinderUser.id = 1234
tinderUser.isloggedIn = true


console.log(tinderUser)

const regularUser = {
    email: "akash.adity001@gmail.com",
    fullname: {
        userFullname:{
            firstname: "Aditya",
            lastname: "Sing",
        }
    }
}

console.log(regularUser.fullname.userFullname.firstname)



// object ko merge karan 

const obj1 = {1: "a", 2: "b"}
const obj2 = {4: "a", 5: "b"}
const obj3 = {7: "a", 8: "b"}

const objectreturn = Object.assign({}, obj1, obj2, obj3);
/* yaha pahle {} is liye dete h nhi denge to bhi chale ga but dete is liye h ki sare object eak new jagah combhine ho nhi to wo first value me combine hote h */
console.log(objectreturn);


// aur ye sab na likhna pade to eak aur process h ...

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);


const user = [
    {
        id: 1,
        name: "aditya"
    },
    {
        id: 1,
        name: "aditya"
    },
    {
        id: 1,
        name: "aditya"
    },
    {
        id: 1,
        name: "aditya"
    }
]
// aise hum isme vlue acess kar sakteh 
user[1].id

// keys kise lete h kisi object ka  keys se vlue bhi le sakte h entries bhi eak key h

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// ye bhi dekh sakte h ki usme koi property h ki nhi 

console.log(tinderUser.hasOwnProperty('isloggedIn'))


const cource = {
    courseName: "Trading",
    courseFee: "9999",
    courseInstructor: "Aditya Singh"
}

// ye asan trika h isse cource.courceInstructor kai jagah use karha h to eak bna lo vlaue fir kai jagah use kar lo
const {courseInstructor: instructo} = cource

console.log(instructo)


// json ye sare json formating h 

//  api call kare to aise bhi data mil sakta h aur arry bhi mil sakta h []
// {
//     "name": "Aditya singh",
//     "courceName": "Trading",
//     "courceprice": "free"
// }

// aise bhi mil sakt h data 
//  [
//  {},
//  {},
//   {}
//  ]
 