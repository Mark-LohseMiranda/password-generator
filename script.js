// Assignment Code
let generateBtn = document.querySelector("#generate");
const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const special = " !#$%&()*+,-./:;<=>?@[]^_`{|}~";
const numbers = "0123456789";
let length = 8;

function buildPassword() {
  let displayPassword = "";
  let generatedPassword = "";

  if (document.querySelector("#lowerCase").checked) {
    generatedPassword = alphabetLower;
  }

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

  length = document.getElementById("choseLength").value;

  for (let i = 0; i < length; i++)
    displayPassword += generatedPassword.charAt(
      Math.floor(Math.random() * generatedPassword.length)
    );

  let passwordText = document.querySelector("#password");
  passwordText.value = displayPassword;
}

//display numerical position of slider next to slider

let slider = document.getElementById("choseLength");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

// Add event listener to generate button

generateBtn.addEventListener("click", () => {
  buildPassword();
});
