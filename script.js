// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //prompt character types to include in the password 
  var howLong = prompt("How long do you want your password to be?\n\nYour password must be at least 8 characters and no more than 128 characters");
  var pwLength = parseInt(howLong);
  if (pwLength >= 8 && pwLength <= 128) {
    //(lowercase, uppercase, numeric, and/or special characters)
    var lowercase = confirm("Press OK to include lowercase letters.");
    var uppercase = confirm("Press OK to include uppercase letters.");
    var numeric = confirm("Press OK to include numbers.");
    var special = confirm("Press OK to include special characters.");

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var alphabetUpper = alphabet.split('');
    var alphabetLower = alphabet.toLowerCase().split('');
    var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
    
    var possibleCharacters = [];

    if (lowercase) {
      possibleCharacters.push(...alphabetLower);
    }
    if (uppercase) {
      possibleCharacters.push(...alphabetUpper);
    }
    if (numeric) {
      possibleCharacters.push(...digits);
    }
    if (special) {
      possibleCharacters.push(...specialCharacters);
    }

    var randomCharacters = "";

    function generatePassword() {
      for (var i = 0; i < pwLength; i++) {
        randomCharacters += possibleCharacters[Math.floor(Math.random() * (possibleCharacters.length))];
      }
      return randomCharacters;
    }
    
    var password = generatePassword();

    if (!lowercase & !uppercase & !numeric & !special) {
      alert("You need to choose at least one character type");
    } else {
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }

  } else {
    //do not run the prompts if not 8 <= password length <= 128
    alert("Your password must be at least 8 characters and no more than 128 characters.");
  }

}

// Add event listener to generate button; when you click the button perform the writePassword function
generateBtn.addEventListener("click", writePassword);
