//for

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is best no ");
//     console.log(element);

//   }
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`Inner loop ${i}`);
//   for (let j = 0; j <= 10; j++) {
//   console.log(`Outer loop ${j} `);
  
    
//   }
  
// }


// tables print in for loop 1 to 10

// for (let i = 1; i <= 10; i++) {
//   console.log(`outer loop ${i}`);
//   for (let j = 1; j <= 10; j++) {
//   console.log(i + ' * ' + j + ' = ' + i*j);
  
    
//   }
  
// }


let myArray = ["superman", "bateman" ,"spiderman"]

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
  
  
}


// loop ko rokne aur chalane ke liye do key word h break and continue 

// for (let index = 0; index <= 20; index++) {
//   if (index === 5) {
//     console.log(`Detected 5`);
//     break;
//  // break me condition detect hote hi loop se bahar ho jata h 
//   }
//   console.log(`This is the value ${index}`);
  
  
// }



for (let index = 0; index <= 20; index++) {
  if (index === 5) {
    console.log(`Detected 5`);
    continue;
    // condition ko eak bar ke liye skip kar dega
  }
  console.log(`This is the value ${index}`);
  
  
}

