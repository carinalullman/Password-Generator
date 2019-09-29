
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


  console.log(bigArray);



  //this generates a password of the length of characters from the available characters
  for (var i = 0; i < numberOfTimes; i++) {
    var passwordChar = getRandomChar();
    password = password + passwordChar;

  }
  console.log(password);


  // TODO: figure out how to add special characters to bigArray (if the user wants them in their password)


}

function getRandomChar(x) {
  var randomIndex = Math.floor(Math.random() * bigArray.length);
  var randomQ = bigArray[randomIndex] + " ";



  return randomQ
}


//With user's input, must pull from an array

//function getRandomInt(max) {
//  return Math.floor(Math.random() * Math.floor(max));}



/*console.log(password);
password = "abc";
console.log(password);
password = password + "def";
console.log(password);*/




//console.log(getRandomInt(upperChar.length));

//console.log(upperChar[getRandomInt(upperChar.length)]);

//console.log(upperChar[2 * 12]);





  //console.log(upperChar.length,upperChar[3])

//create prompt with criteria - create button ---> "how many characters would you like your password to contain? Please choose between 8-128 characters"
//function to prompt user for password criteria


//function: prompt user for characters for amount of characters
    // store prompt in varlength = prompt
    //if statement for amount of characters less than 8 or greater than 128
        //alert must be greater than 8 and less than 129








