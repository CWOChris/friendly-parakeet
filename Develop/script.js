// Assignment code here

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHJKLMNOPQRSTUVWXYZ";
var arabic = "0123456789";
var specChar = "!@#$%^&*()_+-=";

var zero = lowercase + uppercase + arabic + specChar;
var one = lowercase + uppercase + arabic;
var two = lowercase + uppercase;

var randomZero = zero[Math.floor(Math.random() * zero.length)];
var randomOne = one[Math.floor(Math.random() * one.length)];
var randomTwo = two[Math.floor(Math.random() * two.length)];

console.log(randomZero);
console.log(randomOne);
console.log(randomTwo);


















// // FROM STARTER CODE NEXT 1 LINE = Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // FROM STARTER CODE NEXT 7 LINES = Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // FROM STARTER CODE NEXT 1 LINE= Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
