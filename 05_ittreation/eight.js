const myNum =[1, 2, 3]

// const mytotal = myNum.reduce(function (acc, curval) {
//   console.log(`${acc} this is the  vlaue of curval ${curval}`)
//     return acc + curval
// },0 )

const mytotal = myNum.reduce((acc, curvalue) => acc + curvalue , 0 )


console.log(mytotal)


const shoppingCart = [
    {
        courceName: "js cource",
        courcePrice: 2999
    },
    {
        courceName: "mobile dev cource",
        courcePrice: 12999
    },
    {
        courceName: "Java  cource",
        courcePrice: 999
    },
    {
        courceName: "Python",
        courcePrice: 1999
    },
]

const pricetopay = shoppingCart.reduce((acc, item) => acc + item.courcePrice, 0)

console.log(pricetopay)