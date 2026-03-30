// for in loop 

const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift app"
}

for (const key in myObject) {
  console.log(`${key} shortcut is ${myObject[key]}`);
  
}