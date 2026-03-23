const accountid = 1234567890;
let accounemail = "akash@gmail.com";    
var accountpassword = "akash@1234";
// var kam se kam use karna chahiye because it has function scope and can lead to issues with variable hoisting and unintended consequences in larger codebases. It is generally recommended to use let and const instead of var for better readability and maintainability of the code.
accountcity = "Bangalore";
/* this is a global variable because it is not declared with var, let, or const. It will be added to the global scope and can be accessed from anywhere in the code and not best practice to declare variables without var, let, or const as it can lead to unintended consequences and make the code harder to debug and maintain.*/


// accountid = 9876543210; // This will throw an error because accountid is a constant variable and cannot be reassigned.

accounemail = "akashupdated@gmail.com"; // This is valid because accounemail is declared with let and can be reassigned.
accountpassword = "akashupdated@1234"; // This is valid because accountpassword is declared with var and can be reassigned.
accountcity = "Mumbai"; // This is valid because accountcity is a global variable and can be reassigned.



console.log([accountid, accounemail, accountpassword, accountcity]);


console.table([accountid, accounemail, accountpassword, accountcity]);