// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope


   function substitution(input, alphabet, encode = true) {
    // your solution code here
      
    const Alphabets = [
      //library of letters
      "a","b","c","d", "e","f","g","h","i","j","k","l","m",
      "n","o","p","q","r","s","t","u","v","w","x","y","z"
    ];
   
    let RepeatLetter = /(.).*\1/.test(alphabet);
    if (RepeatLetter) return false; //returns false if any characters in alphabet repeat
    if (!alphabet || alphabet.length > 26 || alphabet.length < 26) return false;
   let AlphabetArray = alphabet.split(""); 
    function Cipher(Text, CipherText) {
      let result = "";
      let message = input.toLowerCase();
      for (let i in message) {
        if (message[i].match(/[^ ]/)) {
          //if the character is not a space

          let index = Text.indexOf(message[i]); //look up index of letter
          result += CipherText[index];
        } else {
          result += message[i]; //character is a space
        }
      }
      return result; 
    }

    if (encode) {
      //encoded message
      let encoded = Cipher(Alphabets, AlphabetArray);
      return encoded;
    } else {
      //decoded message
      let decoded = Cipher(AlphabetArray, Alphabets);
      return decoded;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
