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


const gameName = new String('aditya')
console.log(gameName[0])
console.log(gameName.__proto__)

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


