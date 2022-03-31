// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector('#password');
var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Write password to the #password input
function generatePassword(){

  var response = prompt('How many Characters in your password?')

  if(response <= 8 || response >= 128){
    return;
  }
  else if(response >= 8 && response <= 128){
    confirm("Lower case characters?");
    confirm("Upper case characters?");
    confirm("Numeric Characters?");
    confirm("Special characters?"); 
  }

  var index = Math.floor(Math.random() * response.length);
  var password = options[index];

  
  


  
  
}
  


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
