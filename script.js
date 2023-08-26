// Assignment code here
var characterbase=""
function generatePassword(){
  if(confirm("would you like to include lower case characters?")){
    characterbase+="abcdefghijklmnopqrstuvwxyz"
  }
  if(confirm("would you like to upper case characters?")){
    characterbase+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(confirm("would you like to include numbers?")){
    characterbase+="1234567890"
  }
  if(confirm("would you like to include special characters?")){
    characterbase+="!@#$%^&*()"
  }
  if(characterbase<1){
    return
  }
  var passwordlength=prompt("please enter length between 8-128")
  if (passwordlength<8||passwordlength>129){
    return
  }
  var password=""
  for(i=0;i<passwordlength;i++){
    password+=characterbase.charAt(Math.floor(Math.random()*characterbase.length))
  }
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
