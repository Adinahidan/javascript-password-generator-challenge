// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers ="0123456789";
var uppercase ="abcdefghijklmnopqrstuvwzyx";
var lowercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters ="£$!$%&*@?{}()+_:,'¬";
var possibleCharacters =""


function generatePassword() {
// Prompt to enter password lenght


numberOfCharacters = prompt("Enter how  many characters do you want in your password? Choose between 8-128 characters.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number.");
  }
  else {
    alert("Password must be between 8 and 128 characters long.");
  }

    includesNumbers = confirm("Password must include numbers?");
  
    includesLowercase = confirm("Password must have lowercase characters");

    includesUppercase = confirm ("Password must include uppercase characters");

    includesSpecials = confirm ("Password must include special characters");

    if (includesNumbers) {
      possibleCharacters = possibleCharacters.concat(numbers);
    }

    if (includesLowercase) {
      possibleCharacters =  possibleCharacters.concat(lowercase);
    }

    if (includesUppercase) {
      possibleCharacters = possibleCharacters.concat(uppercase);
        }
        
    if (includesSpecials) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
    }

  

      let Password = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng =[Math.floor(Math.random() * possibleCharacters.length)];
    // or Password += possibleCharacters[rng];
    Password = Password + possibleCharacters[rng];
  }

  return Password;
}

    
  
  

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
