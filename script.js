// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //prompt character types to include in the password 
  var howLong = prompt("How long do you want your password to be?\n\nYour password must be at least 8 characters long and no more than 128 characters.");
  var pwLength = parseInt(howLong);
  //do not run the prompts if pwLength not >= 8 or <= 128
  if ((pwLength >= 8) && (pwLength <= 128)) {
    //(lowercase, uppercase, numeric, and/or special characters)
    var lowercase = confirm("Press OK to include lowercase letters.");
    var uppercase = confirm("Press OK to include uppercase letters.");
    var numeric = confirm("Press OK to include numbers.");
    var special = confirm("Press OK to include special characters.");
    //this string will be made into 2 arrays: one for uppercase, one for lowercase
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //make an array for each character type 
    var alphabetUpper = alphabet.split('');
    var alphabetLower = alphabet.toLowerCase().split('');
    var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
    //make an empty array 
    var possibleCharacters = [];
    //push arays to the empty array if confirmed
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
    // declare a new array for the random password
    var randomArray = [];
    // the function will push a random character to randomArray until its length = pwLength
    function generatePassword() {
      for (var i = 0; i < pwLength; i++) {
        randomArray.push(possibleCharacters[Math.floor(Math.random() * (possibleCharacters.length))]);
      }
      // to guarantee at least one of the required character type in the password, remove the first item in array and push the character to the end of the array
      if (lowercase) {
        randomArray.shift()
        randomArray.push(alphabetLower[Math.floor(Math.random() * 26)]);
      }
      if (uppercase) {
        randomArray.shift()
        randomArray.push(alphabetUpper[Math.floor(Math.random() * 26)]);
      }
      if (numeric) {
        randomArray.shift()
        randomArray.push(digits[Math.floor(Math.random() * 10)]);
      }
      if (special) {
        randomArray.shift()
        randomArray.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
      }
      //shuffle the array to randomize the order
      var shuffledCharacters = randomArray.sort(() => Math.random() - 0.5);
      //join the array into a single string; generatePassword() will return this string
      return shuffledCharacters.join('');
    }
    // if user does not confirm a character type, a password will not be generated
    if (!lowercase && !uppercase && !numeric && !special) {
      alert("You need to include at least one character type.");
    } else {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }
  } else {
    alert("Your password must be at least 8 characters long and no more than 128 characters.");
  }
}
// Add event listener to generate button; when you click the button perform the writePassword function
generateBtn.addEventListener("click", writePassword);