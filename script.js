// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = prompt("How many characters do you want your password to be? (8-128)");

while(passwordLength < 8 || passwordLength > 128){
  //Try again
  passwordLength = prompt("You must choose a password length between 8 and 128.");
}

var useLowerCase = confirm("Do you want lower case characters?");
var useUpperCase = confirm("Do you want upper case characters?");
var useSpecial = confirm("Do you want special characters?");
var useNumbers = confirm("Do you want numbers?");

while(!useLowerCase && !useUpperCase && !useSpecial && !useNumbers){
  //Try again
  alert("You must use at least one type of character.")
  useLowerCase = confirm("Do you want lower case characters?");
  useUpperCase = confirm("Do you want upper case characters?");
  useSpecial = confirm("Do you want special characters?");
  useNumbers = confirm("Do you want numbers?");
}

var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
var numberCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.placeholder = password;

}

function generatePassword(){
  var generatedPassword = "";
  var charactersToUse = [];
  if (useLowerCase){
    for(var j = 0; j < lowerCharacters.length; j++){
      charactersToUse.push(lowerCharacters[j]);
    }
  }
  if (useUpperCase){
    for(var j = 0; j < upperCharacters.length; j++){
      charactersToUse.push(upperCharacters[j]);
    }
  }
  if (useSpecial){
    for(var j = 0; j < specialCharacters.length; j++){
      charactersToUse.push(specialCharacters[j]);
    }
  }
  if (useNumbers){
    for(var j = 0; j < numberCharacters.length; j++){
      charactersToUse.push(numberCharacters[j]);
    }
  }

  for (var i = 0; i < passwordLength; i++){
   generatedPassword = generatedPassword + charactersToUse[Math.floor(Math.random() * charactersToUse.length)];
  }

  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
