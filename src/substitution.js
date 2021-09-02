function substitution(input, alphabet, encode = true) {
  const inputArr = input.toLowerCase().split("");
  const oldAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const oldAlphabetArr = oldAlphabet.toLowerCase().split("");
  const alphabetCheck = [];
  const returnArr = [];
  //if no alphabet is provided then returns false
  if (!alphabet) {
    return false;
  }
  //if alphabet is not exactly 26 letters then return false
  const newAlphabetArr = alphabet.toLowerCase().split("");
  if (newAlphabetArr.length !== 26) {
    return false;
  }
  //to encode
  if (encode == true) {
    //checks if all characters in provided alphabet are unique: if not, returns false
    for (let i = 0; i < newAlphabetArr.length; i++) {
      alphabetCheck.push(newAlphabetArr[i]);
      if (alphabetCheck.includes(newAlphabetArr[i + 1])) {
        return false;
      }
    }
    //matches index of matching letter to the index of the old alphabet and returns the new alphabet letter at the correct index
    for (let z = 0; z < inputArr.length; z++) {
      if (oldAlphabetArr.includes(inputArr[z])) {
        let selectedLetter = oldAlphabetArr.find(
          (letter) => letter === inputArr[z]
        );
        for (let x = 0; x < oldAlphabetArr.length; x++) {
          if (selectedLetter === oldAlphabetArr[x]) {
            returnArr.push(newAlphabetArr[x]);
          }
        }
        //if no match, must be a space and pushes it into the returned array
      } else {
        returnArr.push(inputArr[z]);
      }
    }
    return returnArr.join("");
  //to decode
  } else {
    //checks if all characters in provided alphabet is unique. if not, returns false
    for (let i = 0; i < newAlphabetArr.length; i++) {
      alphabetCheck.push(newAlphabetArr[i]);
      if (alphabetCheck.includes(newAlphabetArr[i + 1])) {
        return false;
      }
    }
    //matches index of the provided alphabet to the position of the appropriate letter in the original alphabet and pushes it to the returned array
    for (let z = 0; z < inputArr.length; z++) {
      if (newAlphabetArr.includes(inputArr[z])) {
        let selectedLetter = newAlphabetArr.find(
          (letter) => letter === inputArr[z]
        );
        for (let x = 0; x < oldAlphabetArr.length; x++) {
          if (selectedLetter === newAlphabetArr[x]) {
            returnArr.push(oldAlphabetArr[x]);
          }
        }
        //if no match, must be a space and pushes it into the returned array
      } else {
        returnArr.push(inputArr[z]);
      }
    }
    return returnArr.join("");
  }
}

module.exports = substitution;
