const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// // agar ap scope open nhi kar rahe h to value aise hi aa jaye gi
// const newNum = myNumber.map ((num) => num + 10)
// console.log(newNum)

// agar scope open kiye to return karna hoga
// const newNum = myNumber.map ((num) => {return num + 10})

const newNum = myNumber
.map((num) => num * 10)
.map((num) => num + 1)
.filter((num) => num >= 40)
console.log(newNum)