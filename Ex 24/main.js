//define veriables
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
//Test equlity and ineqluity with string
console.log("is apple is equal to apple?");
console.log(apple == "apple");
console.log("\n is apple is not equal to apple?");
console.log(apple != "apple");
//Test using Lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical tests
//Equal
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
// Not equal 
console.log("\n IS ten is not equal to twenty?");
console.log(ten != twenty);
//Greater then
console.log("\n Is ten is greater then zero");
console.log(ten > 0);
//Less then
console.log("\n Is twenty is less then 10");
console.log(twenty < 10);
//greater then or equal to
console.log("\n Is ten is greater then or equal to 5?");
console.log(ten >= 5);
//Less then or equal to
console.log("\n twenty is less then or equal to 10");
console.log(twenty <= 10);
// teste using "and" & "or" operators
//using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater then 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater then 10");
console.log(twenty != 10 && twenty > 30);
//using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 != 20);
//test weather an itean is include in array
console.log("Is orange include in my Fruits array");
console.log(fruits.includes("orange"));
// not include
console.log("Is orange not include in my Fruits array");
console.log(!fruits.includes("orange"));
