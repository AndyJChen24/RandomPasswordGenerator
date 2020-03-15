//Create an array of numbers
var num =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//create an array of special characters
var chara =[
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
]

//create an array of upper case letters
var upper = [
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

//create an array of lower case letters
var lower =[
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


// create an temp array to hold randomly generated values
var temp=[];
// Determine position of temp array 
var position =0;

// Create function to randomly generate a number, special character, uppercase and lowercase base on user's options
function generateNextValue(numbers, specialchar, uppercase, lowercase){

  // Clear temp array
  temp=[];
  // Set array position back to 0, position determine where the random value is being place in the array.
  position =0;

  // generate number between 0-9
  if(numbers){
    var value = Math.floor(Math.random()*num.length);
    temp[position] = num[value];
    position++;
  }
  // generate special character
  if(specialchar){
    var value = Math.floor(Math.random()*chara.length);
    temp[position] = chara[value];
    position++;
  }
  //generate upper case letter
  if(uppercase){
    var value = Math.floor(Math.random()*upper.length);
    temp[position] = upper[value];
    position++;
  }
  // generate lower case letter
  if(lowercase){
    var value = Math.floor(Math.random()*lower.length);
    temp[position] = lower[value];
    position++;
  }
  // return the randomly generated values inside the temp array
  return temp;
}


//generate password by passing the boolean parameters of user option to it
function generatePassword(numbers, specialchar, uppercase, lowercase, passwordlength){
  var password =[];
  // runs until the password is user select length
  for(var i = 0; i<passwordlength; i++){
    /* generate a random number speicalchar upper and lower case and put it in an array called temp by passing the boolean value from 
        user query 
    */
    var temp=generateNextValue(numbers, specialchar, uppercase, lowercase);
    // randomly select a value from the temp array
    var selector= Math.floor(Math.random()*temp.length);
    var next= temp[selector];
    // concat the password with next value
    password= password+next;
  }
  return password;
}

// created a function get get user options
function getOptions(){
  var passwordlength = prompt("Please enter the desire length of the password between 8 and 128.");
  // check if password is not a number
  if(isNaN(passwordlength)){
    confirm("Please enter a number.")
    return;
  }
  //if password length is less than 8 it will stop
  if(passwordlength < 8){
    confirm("Please choose a password length 8 or greater.") 
    return;
  }
  //if passwordlength is more than 128 it will stop
  if(passwordlength >128){
    confirm("Please choose a password length 128 or less.")
    return;
  }
    // check for numbers
  var numbers = confirm("Click ok to include numbers in your password.");

  // check for special character
  var specialchar = confirm("Click ok to include special characters in your password.");

  // check for upper case
  var uppercase = confirm("Click ok to include uppercase letters in your password.");

  // check for lower case
  var lowercase = confirm("Click ok to include lowercase letters in your password.");

  // Check if user choose at least one options
  if(numbers === false && specialchar === false && uppercase === false && lowercase ===false){
    confirm("Please choose at least one option.")
    return;
  }
  // return option parameter
  var option = {
    passwordlength:passwordlength,
    numbers:numbers,
    specialchar:specialchar,
    uppercase:uppercase,
    lowercase:lowercase
  }
  return option;
}


// Assignment Code and Main Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // get user options
  var option = getOptions();
  //pass option to generate password
  var password = generatePassword(option.numbers, option.specialchar, option.uppercase, option.lowercase, option.passwordlength);
  // generate password to replace text value on screen
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

