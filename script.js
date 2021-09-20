// Assignment Code
let generateBtn = document.querySelector("#generate");
let choicesBtn = document.querySelector("#choices");
const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const special = " !#$%&()*+,-./:;<=>?@[]^_`{|}~";
const numbers = "0123456789";

function buildPassword() {
  // blank displayed password if submit button is pushed more than once

  let displayPassword = "";
  let generatedPassword = "";

  // if just the lowerCase was checked

  if (document.querySelector("#lowerCase").checked) {
    generatedPassword = alphabetLower;
  }

  // If generatedPassword is empty then nothing was checked therefore
  // alphabetUpper can just be set equal to generatedPassword
  // otherwise alphabetUpper has to be concated to generatedPassword
  // this is what the remainder of if statements do

  if (document.querySelector("#upperCase").checked) {
    if (generatedPassword === "") {
      generatedPassword = alphabetUpper;
    } else {
      let combinedPassword = alphabetUpper.concat(generatedPassword);
      generatedPassword = combinedPassword;
    }
  }

  if (document.querySelector("#numbers").checked) {
    if (generatedPassword === "") {
      generatedPassword = numbers;
    } else {
      let combinedPassword = numbers.concat(generatedPassword);
      generatedPassword = combinedPassword;
    }
  }

  if (document.querySelector("#specialCharacters").checked) {
    if (generatedPassword === "") {
      generatedPassword = special;
    } else {
      let combinedPassword = special.concat(generatedPassword);
      generatedPassword = combinedPassword;
    }
  }

  let length = document.getElementById("choseLength").value;

  for (let i = 0; i < length; i++)
    displayPassword += generatedPassword.charAt(
      Math.floor(Math.random() * generatedPassword.length)
    );

// Display password, then focus and select password

  let passwordText = document.querySelector("#password");
  passwordText.value = displayPassword;
  passwordText.focus();
  passwordText.select();
}

//display numerical position of slider next to slider

let slider = document.getElementById("choseLength");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

// Add event listener to generate button
// additionally check to make sure at least one checkbox is checked

generateBtn.addEventListener("click", () => {
  
  let checkBoxes = document.querySelectorAll('input[type=checkbox]:checked');
  if (checkBoxes.length === 0) {
    alert('Please check at least one box');
  } else {
    buildPassword();
  }
  
});

// Add event listener to open and close choices form

choicesBtn.addEventListener("click", () => {
  let element = document.getElementById("password-choices-id");
  element.classList.toggle("password-choices-show");
});
