
var bigArray = [];

//var hello = prompt("Please choose a number between 8 and 128 to determine the length of your password");
//if (hello != null) {
var passwordPrompt = prompt("Please choose a number between 8 and 128 to determine the amount of characters in your password");

//With the amount that the user inputs, we need to generate a password with that amount of characters

var numberOfTimes = parseInt(passwordPrompt);
if (numberOfTimes < 8 || numberOfTimes > 128) {
  alert("Please choose a number between 8 and 128")

}
else {
  var password = "";
  var specialCharYes = confirm("Would you like special characters in your password?");
  if (specialCharYes === true) {
    bigArray.push("@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".");
  }
  var numCharYes = confirm("Would you like numbers in your password?");
  if (numCharYes === true) {
    bigArray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  }
  var lowerCharYes = confirm("Would you like lower case letters in your password?");
  if (lowerCharYes === true) {
    bigArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  }
  var upperCharYes = confirm("Would you like upper case letters in your password?");
  if (upperCharYes === true) {
    bigArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  }

// this is just to see if I have all the items in the bigArray
  console.log(bigArray);



  //this generates a password of the length of characters from the available characters
  for (var i = 0; i < numberOfTimes; i++) {
    var passwordChar = getRandomChar();
    password = password + passwordChar;

  }
  console.log(password);

//todo needs to put password into the generator on the webpage
}

function getRandomChar(x) {
  var randomIndex = Math.floor(Math.random() * bigArray.length);
  var randomQ = bigArray[randomIndex];



  return randomQ
}






