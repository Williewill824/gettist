// Assignment Code
var generateBtn = document.querySelector("#generate");

var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']

var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var lowerChar = "abcdefghijklmnopqrstuvwxyz".split("");


var userChoice = []

var passwordUser = "";



// Write password to the #password input
function writePassword() {
  passwordUser = "";


  var length = prompt("How long is your password?")
  if (length < 8 || length > 128) {
    alert("length must be between 8 and 128")
    return
  }
  //  Confirming the user 
  var upperC = confirm("Do you want to include Upper Case?")
  var lowerC = confirm("Do you want to include lower case?")
  var num = confirm("Do you want to include numbers?")
  var specialC = confirm("Do you want to to include speacial characters?")
  //  If statements
  if (!(specialC || lowerC || num || upperC)) {
    alert("You must choose  atleast one character")
    return
  };

  if (upperC) userChoice = userChoice.concat(upperChar);
  if (lowerC) userChoice = userChoice.concat(lowerChar);
  if (num) userChoice = userChoice.concat(numChar);
  if (specialC) userChoice = userChoice.concat(specialCharacters);
  // While loop 
  while (passwordUser.length < length) {
    var x = Math.floor(Math.random() * userChoice.length)
    var newAr = userChoice[x]
    passwordUser = passwordUser + newAr

  }

  var passwordText = document.querySelector("#password");

  passwordText.value = passwordUser;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






