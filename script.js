// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button; when you click the button perform the writePassword function
generateBtn.addEventListener("click", writePassword);
