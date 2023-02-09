// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var value = parseInt(prompt("How many characters would you like your password to contain?"))
    if (value >= 10 && value <= 65) {
    alert("Click OK to confirm including special characters")
    return value
  } else {
    alert("Please try again. Number should be more than 10 or less than 65");
    return getPasswordOptions();
  }
}
var passwordLength= getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var item = arr[randomIndex];
  return item
}

// Function to generate password with user input
function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
   password+= getRandom(specialCharacters) + getRandom(numericCharacters) + getRandom(lowerCasedCharacters) + getRandom(upperCasedCharacters)
  }
  return password.slice(0, passwordLength);
}
var newPassword = generatePassword();
console.log(newPassword);


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// generateBtn.textContent = "Let's get it on";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);