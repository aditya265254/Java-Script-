// strings 

const name = "Aditya"
const repoCount = " 100"

// console.log(name +  repoCount + " Singh")

// ye purane syntex h ye use karna acha nhi h 

// `` esc ke nich h usko backticks bole h usko use karta h aab iske liye 

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)
// this ${} 

//  $ = signal — "Yahan JS code aa raha hai!"
// {} = container — "Andar expression/variable wrap karo!"

// iske andar hum  method bhi pass kar sakte h 



// isse game name ke andar jo string h uski eak eak value ko hum accesa kar sakte h 


const gameName = new String('aditya-singh-good-boy')
// console.log(gameName[0])
// console.log(gameName.__proto__)

/* - **`__proto__`** matlab — *"Is object ke andar kaunke methods available hain?"*
- Ye saare **built-in String methods** dikhata hai jo tum use kar sakte ho

Output mein kuch aisa dikhega:
```
String methods milenge jaise:
- toUpperCase()
- toLowerCase()  
- slice()
- replace()
- trim()
- indexOf()
- ... aur bohot saare */

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// // toUpeerCase() ka mtlab ye h ki jo h text usko upeer case me kar ke de dega uske main me change nhi hog jo output h bs usme change hoga


// console.log(gameName.charAt(2));
// // apko janna ho ki 2 place pe konsi value h is liye isko use karte h 
// console.log(gameName.indexOf('a'))


// const newString = gameName.substring(0, 4)
// console.log(newString);
// subString hum use karte h jaha se jaha tak ka caracter chaiye hota h  aur jaha se chaiye hota h 

// slice
const anotherString = gameName.slice(-7, 2)

console.log(anotherString)



// trim
const newStringOne = "  aditya  "
console.log(newStringOne);
console.log(newStringOne.trim())
// trim se spaces hum hata sakte h jo faltu ki use hui h 


// url me kuch replace kise karte h 

const url ="https://adity.one/%20.com/111"
// isse url me kuch replace kar sakte h
console.log(url.replace('%20','-'))

// isse url se puch sakte h ki ye valur h ki nhi isme 

console.log(url.includes('adity'))


// split

console.log(gameName.split('-'));


