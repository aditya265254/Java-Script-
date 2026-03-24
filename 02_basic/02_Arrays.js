const marvel_heros = ["thor", "batman", "spiderman"];
const dc_heros = ["ghansayam", "harivansh", "amit"]

// push me do array mix karte h to dikkat hoti h wo ache se merge nhi hote second [] fist array me second arry show kate h square bracket ke sath
// marvel_heros.push(dc_heros)

// const allHeros = marvel_heros.concat(dc_heros)
// // concat ke sth hum use kate h to wo eak new array return karta h bna ke 


// console.log(allHeros)

// spread operator me sab spred ho jata h 

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


const Another_Array = [1, 2, 3, 4, 12, [1,2,3], 7, 8, [1, 2, [3, 4,]], 9, 11]

const real_another_Array = Another_Array.flat(Infinity);
console.log(real_another_Array);

// how to convert name to array


console.log(Array.from("adity"));
// Imp ye convert to kare ga but keys ko empty arry me convert kar dega to hamesa eak [] array dega 
console.log(Array.from({name: "adity"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));