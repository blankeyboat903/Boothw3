// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector('#password');
var chars = "";
var passLower = "abcdefghijklmnopqrstuvwxyz";
var passUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passNum = "0123456789";
var passSpec = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`\{|\}~`;

// Write password to the #password input
function generatePassword(){

  var response = prompt('How many Characters in your password?')
  var specialChar = confirm("Do you want special characters in the password?");
  var numericChar = confirm("Do you want numberic characters in the password?");
  var lowerCaseChar = confirm("Do you want lower case characters in the password?");
  var passLength = response

  if(response <= 8 || response >= 128){
    return response;
  }
  else{
    if (specialChar === true){
      chars += passSpec;
    }
    if (numericChar === true){
      chars += passNum;
    }
    if (lowerCaseChar === true){
      chars += passLower;
    }
    if (UpperCaseChar === true){
      chars += passUpper;  
    }
    console.log(chars)
    return chars;
  }

  


  
  
}
  


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
