// Assignment Code
let generateBtn = document.querySelector("#generate");
let numbers = "0123456789";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let special = "!#$%&'()*+,-./:;<=>?@[^_`{|}~"
let choseLower;
let choseUpper;
let choseNumbers;
let choseSpecial;
let choseLength;
let displayPassword;
let password;

// Get character type input from user and validate at least one is chosen

function userChoice() {
  choseLower = confirm("Do you want lower case letters?");
  choseUpper = confirm("Do you want upper case letters?");
  choseNumbers = confirm("Do you want numbers?");
  choseSpecial = confirm("Do you want special characters?");
  if (!choseLower && !choseUpper && !choseNumbers && !choseSpecial) {
    alert("You must choose at least one!");
    userChoice();
  } else {
    getLength();
  }
}

// Get length from user and validate user's input is btw 8-128

function getLength() {
  choseLength = prompt("How many characters (8-128)");
  if (choseLength < 8 || choseLength > 128) {
    alert("Please chose between 8 and 128 characters!");
    getLength();
  } else {
    writePassword();
  }
}

// Get password and display it then select it 

function writePassword() {
  createPasswordPosibilities();
  generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  passwordText.focus();
  passwordText.select();

}

// Create a string of possible password characters based on user's selections

function createPasswordPosibilities() {
  
  generatedPassword = ""; //in case button is used more than once 
  let combinedPassword = "";
  
  if (choseLower) {
    generatedPassword = lowerCase;
  }
  if (choseUpper) {
    combinedPassword = generatedPassword.concat(upperCase);
    generatedPassword = combinedPassword;
  }
  if (choseNumbers) {
    combinedPassword = generatedPassword.concat(numbers);
    generatedPassword = combinedPassword;
  }
  if (choseSpecial) {
    combinedPassword = generatedPassword.concat(special);
    generatedPassword = combinedPassword;
  } 
}

// generate a random selection from the string of possible selections then validate

function generatePassword () {
  password = "";
  for (let i = 0; i < choseLength; i++) {
    password += generatedPassword.charAt(Math.floor(Math.random() * generatedPassword.length));
  }
  checkPassword();
}

// validate password to ensure at least one character from each selected set is present

function checkPassword () {
  if (choseLower) {
    var check = /[a-z]/;
    if (!check.test(password)) {
      generatePassword();
    }
  }
  if (choseUpper) {
    var check = /[A-Z]/;
    if (!check.test(password)) {
      generatePassword();
    }
  }
  if (choseNumbers) {
    var check = /[0-9]/;
    if (!check.test(password)) {
      generatePassword();
    }
  }
  if (choseSpecial) {
    var check = /[!#$%&'()*+,-./:;<=>?@[^_`{|}~]/;
    if (!check.test(password)) {
      generatePassword();
    }
  }
}

// Add event listener to generate button

generateBtn.addEventListener("click", userChoice);


