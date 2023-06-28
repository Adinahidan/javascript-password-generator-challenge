// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "£$!$%&*@?{}()+_:,'¬";
var possibleCharacters = "";

// Function to generate a password based on user input
function generatePassword() {
  // Prompt to enter password length
  var numberOfCharacters = prompt("Enter how many characters you want in your password? Choose between 8-128 characters.");

  if (numberOfCharacters < 8 || numberOfCharacters > 128 || isNaN(numberOfCharacters)) {
    alert("Please choose a valid number of characters between 8 and 128.");
    return null;
  }

  var includesNumbers = confirm("Should the password include numbers?");
  var includesLowercase = confirm("Should the password include lowercase characters?");
  var includesUppercase = confirm("Should the password include uppercase characters?");
  var includesSpecials = confirm("Should the password include special characters?");

  if (!includesNumbers && !includesLowercase && !includesUppercase && !includesSpecials) {
    alert("Please select at least one character type.");
    return null;
  }

  // Build the string of possible characters based on selected options
  if (includesNumbers) {
    possibleCharacters += numbers;
  }

  if (includesLowercase) {
    possibleCharacters += lowercase;
  }

  if (includesUppercase) {
    possibleCharacters += uppercase;
  }

  if (includesSpecials) {
    possibleCharacters += specialCharacters;
  }

  // Generate the password randomly
  var password = "";
  for (var i = 0; i < numberOfCharacters; i++) {
    var rng = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters.charAt(rng);
  }

  return password;
}

// Function to write the generated password to the password field
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Check if the password is not null before updating the password field
  if (password !== null) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
